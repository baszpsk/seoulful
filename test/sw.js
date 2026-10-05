/*
 * Seoulful — the phone's helper for notifications (แจ้งเตือน). A push from the shop says only "something
 * new"; this asks the shop for the words with this phone's own key (kept here when notifications were
 * turned on), then shows them, buzzing where the phone can. A tap opens the app where the note points.
 * It never touches the pages' requests: the app loads exactly as it would without it.
 */
'use strict';

var DB = 'test.seoulful-push';

function kv(mode, fn) {
  return new Promise(function (ok, bad) {
    var open = indexedDB.open(DB, 1);
    open.onupgradeneeded = function () {
      open.result.createObjectStore('kv');
    };
    open.onerror = function () {
      bad(open.error);
    };
    open.onsuccess = function () {
      var tx = open.result.transaction('kv', mode);
      var req = fn(tx.objectStore('kv'));
      tx.oncomplete = function () {
        ok(req && req.result);
      };
      tx.onerror = function () {
        bad(tx.error);
      };
    };
  });
}

function keyOf() {
  return kv('readonly', function (s) {
    return s.get('key');
  });
}

function ask(key, action, data) {
  return fetch(key.api, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: action, auth: {}, data: data }),
    credentials: 'omit',
    cache: 'no-store',
  }).then(function (r) {
    return r.json();
  });
}

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('push', function (e) {
  e.waitUntil(
    keyOf()
      .then(function (key) {
        if (!key) return { notes: [] };
        return ask(key, 'pushNotes', { token: key.token }).then(function (res) {
          return res && res.ok ? res.data : { notes: [] };
        });
      })
      .catch(function () {
        return { notes: [] };
      })
      .then(function (d) {
        // A phone must show something for every push: the words if they came, else a short line.
        var notes = d.notes && d.notes.length ? d.notes : [{ id: 'new', title: 'Seoulful', body: 'มีเรื่องใหม่ในแอป แตะเพื่อดู', go: 'bell' }];
        // An open app hears of it too (its bell counts up), and the icon on the home screen shows the count.
        self.clients.matchAll({ type: 'window' }).then(function (list) {
          list.forEach(function (c) {
            c.postMessage({ type: 'seoulful-notes', unread: d.unread || 0, notes: notes });
          });
        });
        try {
          if (d.unread && self.navigator.setAppBadge) self.navigator.setAppBadge(d.unread).catch(function () {});
        } catch (err) {
          /* no badge here */
        }
        return Promise.all(
          notes.map(function (n) {
            return self.registration.showNotification(n.title, {
              body: n.body || '',
              tag: 'seoulful-' + n.id,
              icon: 'icon-192.png',
              vibrate: [180, 80, 180],
              data: { go: n.go || 'bell' },
              lang: 'th',
            });
          }),
        );
      }),
  );
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var go = (e.notification.data && e.notification.data.go) || 'bell';
  e.waitUntil(
    keyOf()
      .catch(function () {
        return null;
      })
      .then(function (key) {
        var page = (key && key.page) || './';
        var url = new URL(page + (page.indexOf('?') >= 0 ? '&' : '?') + 'go=' + encodeURIComponent(go), self.registration.scope).href;
        return self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
          for (var i = 0; i < list.length; i++) {
            var c = list[i];
            // (a page in a folder below is another site's: the test app's, at test/)
            var rest = c.url.indexOf(self.registration.scope) === 0 ? c.url.slice(self.registration.scope.length).split(/[?#]/)[0] : '/';
            if (rest.indexOf('/') < 0 && 'focus' in c) {
              c.postMessage({ type: 'seoulful-go', go: go });
              return c.focus();
            }
          }
          return self.clients.openWindow(url);
        });
      }),
  );
});

// The push service gave this phone a new address: the shop keeps it with this phone's key.
self.addEventListener('pushsubscriptionchange', function (e) {
  e.waitUntil(
    keyOf().then(function (key) {
      if (!key || !key.server) return null;
      var sub = e.newSubscription ? Promise.resolve(e.newSubscription) : self.registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: key.server });
      return sub.then(function (s) {
        return ask(key, 'pushRenew', { token: key.token, endpoint: s.endpoint });
      });
    }),
  );
});
