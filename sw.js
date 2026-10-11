/*
 * Seoulful — the phone's helper, for two things.
 * Notifications (แจ้งเตือน): a push from the shop says only "something new"; this asks the shop for the
 * words with this phone's own key (kept here when notifications were turned on), then shows them,
 * buzzing where the phone can. A tap opens the app where the note points.
 * The app's pages kept on this phone (owner yes 10 Oct 2569: an open took 6.5 seconds on a slow phone when
 * the page had to come first, 0.8 when the phone had it): index.html and owner.html open from the copy
 * kept here at once, on a poor network or none too. The site is asked meanwhile and a newer page kept for
 * the next open, the open app told (App.html pageInit loads it once nothing is under way). The pages' other
 * requests go as they would without this helper.
 */
'use strict';

var DB = 'seoulful-push';
// (the site's address keeps one set of stores for all its folders: the test app's, at test/, is named apart as DB is)
var PAGES = DB + '-pages';

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
  // (marked api=1 as the pages' requests are: an answer Google loses comes back to the script as a page load)
  var api = key.api + (/[?&]api=1\b/.test(key.api) ? '' : (key.api.indexOf('?') < 0 ? '?' : '&') + 'api=1');
  return fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: action, auth: {}, data: data }),
    credentials: 'omit',
    cache: 'no-store',
  }).then(function (r) {
    return r.json();
  });
}

/** 'index.html' or 'owner.html' for a page of this helper's own folder (not one below it: the test app's), else ''. */
function pageOf(url) {
  var scope = self.registration.scope;
  url = String(url || '');
  if (url.indexOf(scope) !== 0) return '';
  var rest = url.slice(scope.length).split(/[?#]/)[0];
  return rest === '' || rest === 'index.html' ? 'index.html' : rest === 'owner.html' ? 'owner.html' : '';
}

function pageUrl(page) {
  return new URL(page, self.registration.scope).href;
}

// What the site last said of each page (its stamp and version), and the asking under way: one at a time.
var heard = {};
var asking = {};

/** The app page the site hands out now, kept for the next open; rejected when the site gave anything else. */
function fetchPage(page) {
  // (no-cache: the site is asked each time, and answers "not changed" in a few bytes when it is not)
  return fetch(pageUrl(page), { cache: 'no-cache', credentials: 'omit' })
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function (text) {
      // (only the app's own page: never a network's sign-in page, nor an error page that came as a page)
      var m = /window\.__SEOULFUL_SITE__ = (\{[^\n]*?\});<\/script>/.exec(text);
      var site = m ? JSON.parse(m[1]) : null;
      if (!site || !site.build) throw new Error('not the app page');
      heard[page] = { at: Date.now(), build: site.build, version: site.version || '' };
      var res = new Response(text, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      return caches
        .open(PAGES)
        .then(function (c) {
          return c.put(pageUrl(page), res.clone());
        })
        .catch(function () {})
        .then(function () {
          return res;
        });
    });
}

/** What the site says of a page (kept here if newer), heard within `fresh` ms or asked now; null when it could not be asked. */
function check(page, fresh) {
  // (the site being asked already, as the page opened: its answer, newer than any heard before)
  if (asking[page]) return asking[page];
  var h = heard[page];
  if (h && Date.now() - h.at < fresh) return Promise.resolve(h);
  asking[page] = fetchPage(page)
    .then(
      function () {
        return heard[page];
      },
      function () {
        return null;
      },
    )
    .then(function (h2) {
      delete asking[page];
      return h2;
    });
  return asking[page];
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || req.mode !== 'navigate') return;
  var page = pageOf(req.url);
  if (!page) return;
  // (?fresh=: the app asks for the site's own, its copy seemingly stuck; the address's other parts are the app's to read)
  var fresh = /[?&]fresh=/.test(req.url);
  var after;
  // Kept running till the site has been asked, the page shown long before.
  e.waitUntil(
    new Promise(function (done) {
      after = done;
    }),
  );
  e.respondWith(
    caches
      .open(PAGES)
      .then(function (c) {
        return c.match(pageUrl(page));
      })
      .catch(function () {
        return null;
      })
      .then(function (kept) {
        if (kept && !fresh) {
          Promise.resolve()
            .then(function () {
              return check(page, 0);
            })
            .then(after, after);
          return kept;
        }
        // None kept yet: the site's, kept for the next open (the phone's own answer if it is not the app's page).
        var got = Promise.resolve()
          .then(function () {
            return fetchPage(page);
          })
          .catch(function () {
            return kept || fetch(req);
          });
        got.then(after, after);
        return got;
      }),
  );
});

// The open app asks what the site has now (App.html pageAsk): the answer goes to that page alone.
self.addEventListener('message', function (e) {
  var m = e.data || {};
  var c = e.source;
  if (m.type !== 'seoulful-page-check' || !c || !c.url) return;
  var page = pageOf(c.url);
  if (!page) return;
  e.waitUntil(
    check(page, 20000).then(function (h) {
      if (h) c.postMessage({ type: 'seoulful-page', page: page, build: h.build, version: h.version });
    }),
  );
});

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
