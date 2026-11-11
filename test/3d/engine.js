/* Seoulful Staff 3D characters; three.js (MIT, mrdoob and contributors) */
var Fu=0,Bl=1,Du=2;var Yr=1,Nu=2,Ys=3,Kn=0,zt=1,hn=2,Jn=0,Zs=1,zl=2,Gl=3,Hl=4,Uu=5;var os=100,Ou=101,ku=102,Bu=103,zu=104,Gu=200,Hu=201,Vu=202,Wu=203,Vl=204,Wl=205,qu=206,Xu=207,ju=208,Ku=209,Ju=210,Yu=211,Zu=212,Qu=213,$u=214,ao=0,oo=1,co=2,Us=3,lo=4,ho=5,fo=6,uo=7,Fo=0,ed=1,td=2,Fn=0,ql=1,Xl=2,jl=3,Kl=4,Jl=5,Yl=6,Zr=7,Tl="attached",nd="detached",Zl=300,ki=301,cs=302,Do=303,No=304,Qr=306,Ci=1e3,yn=1001,Os=1002,It=1003,Uo=1004;var ls=1005;var St=1006,Qs=1007;var Dn=1008;var fn=1009,Ql=1010,$l=1011,$s=1012,Oo=1013,Nn=1014,gn=1015,Un=1016,ko=1017,Bo=1018,er=1020,eh=35902,th=35899,nh=1021,ih=1022,bn=1023,Vn=1026,Bi=1027,tr=1028,zo=1029,zi=1030,Go=1031;var Ho=1033,$r=33776,ea=33777,ta=33778,na=33779,Vo=35840,Wo=35841,qo=35842,Xo=35843,jo=36196,Ko=37492,Jo=37496,Yo=37488,Zo=37489,ia=37490,Qo=37491,$o=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,ac=37815,oc=37816,cc=37817,lc=37818,hc=37819,fc=37820,uc=37821,dc=36492,pc=36494,mc=36495,gc=36283,bc=36284,sa=36285,xc=36286;var Yi=2300,Zi=2301,io=2302,Rl=2303,Cl=2400,Il=2401,Pl=2402,id=2500;var sh=0,ra=1,nr=2,sd=3200;var ir=0,rd=1,bi="",vt="srgb",nn="srgb-linear",Cr="linear",tt="srgb";var so=7680;var ad=519,od=512,cd=513,ld=514,_c=515,hd=516,fd=517,yc=518,ud=519,rh=35044;var ah="300 es",Pn=2e3,ks=2001;function y0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function v0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Bs("canvas");return i.style.display="block",i}var Yf={},zs=null;function Ir(...i){let e="THREE."+i.shift();zs?zs("log",e,...i):console.log(e,...i)}function pd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=pd(i);let e="THREE."+i.shift();if(zs)zs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=pd(i);let e="THREE."+i.shift();if(zs)zs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ji(...i){let e=i.join(" ");e in Yf||(Yf[e]=!0,Ie(...i))}function md(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gd={[ao]:oo,[co]:fo,[lo]:uo,[Us]:ho,[oo]:ao,[fo]:co,[uo]:lo,[ho]:Us},Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=1234567,Tr=Math.PI/180,Qi=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function oh(i,e){return(i%e+e)%e}function M0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function S0(i,e,t){return i!==e?(t-i)/(e-i):0}function Rr(i,e,t){return(1-t)*i+t*e}function w0(i,e,t,n){return Rr(i,e,1-Math.exp(-t*n))}function A0(i,e=1){return e-Math.abs(oh(i,e*2)-e)}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function T0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function C0(i,e){return i+Math.random()*(e-i)}function I0(i){return i*(.5-Math.random())}function P0(i){i!==void 0&&(Zf=i);let e=Zf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L0(i){return i*Tr}function F0(i){return i*Qi}function D0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function N0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function U0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),b=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*b,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*b,o*c);break;case"ZYZ":i.set(l*b,l*p,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ch={DEG2RAD:Tr,RAD2DEG:Qi,generateUUID:Ln,clamp:Je,euclideanModulo:oh,mapLinear:M0,inverseLerp:S0,lerp:Rr,damp:w0,pingpong:A0,smoothstep:E0,smootherstep:T0,randInt:R0,randFloat:C0,randFloatSpread:I0,seededRandom:P0,degToRad:L0,radToDeg:F0,isPowerOfTwo:D0,ceilPowerOfTwo:N0,floorPowerOfTwo:U0,setQuaternionFromProperEuler:O0,normalize:it,denormalize:In},dh=class dh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var Be=dh,mt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],b=r[a+2],g=r[a+3];if(u!==g||l!==f||c!==p||h!==b){let m=l*f+c*p+h*b+u*g;m<0&&(f=-f,p=-p,b=-b,g=-g,m=-m);let d=1-o;if(m<.9995){let w=Math.acos(m),C=Math.sin(w);d=Math.sin(d*w)/C,o=Math.sin(o*w)/C,l=l*d+f*o,c=c*d+p*o,h=h*d+b*o,u=u*d+g*o}else{l=l*d+f*o,c=c*d+p*o,h=h*d+b*o,u=u*d+g*o;let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],b=r[a+3];return e[t]=o*b+h*u+l*p-c*f,e[t+1]=l*b+h*f+c*u-o*p,e[t+2]=c*b+h*p+o*f-l*u,e[t+3]=h*b-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),b=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*b,this._y=c*p*u-f*h*b,this._z=c*h*b+f*p*u,this._w=c*h*u-f*p*b;break;case"YXZ":this._x=f*h*u+c*p*b,this._y=c*p*u-f*h*b,this._z=c*h*b-f*p*u,this._w=c*h*u+f*p*b;break;case"ZXY":this._x=f*h*u-c*p*b,this._y=c*p*u+f*h*b,this._z=c*h*b+f*p*u,this._w=c*h*u-f*p*b;break;case"ZYX":this._x=f*h*u-c*p*b,this._y=c*p*u+f*h*b,this._z=c*h*b-f*p*u,this._w=c*h*u+f*p*b;break;case"YZX":this._x=f*h*u+c*p*b,this._y=c*p*u+f*h*b,this._z=c*h*b-f*p*u,this._w=c*h*u-f*p*b;break;case"XZY":this._x=f*h*u-c*p*b,this._y=c*p*u-f*h*b,this._z=c*h*b+f*p*u,this._w=c*h*u+f*p*b;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var D=ph,il=new D,Qf=new mt,mh=class mh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],b=n[8],g=s[0],m=s[3],d=s[6],w=s[1],C=s[4],_=s[7],v=s[2],S=s[5],y=s[8];return r[0]=a*g+o*w+l*v,r[3]=a*m+o*C+l*S,r[6]=a*d+o*_+l*y,r[1]=c*g+h*w+u*v,r[4]=c*m+h*C+u*S,r[7]=c*d+h*_+u*y,r[2]=f*g+p*w+b*v,r[5]=f*m+p*C+b*S,r[8]=f*d+p*_+b*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,b=t*u+n*f+s*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/b;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sl.makeScale(e,t)),this}rotate(e){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var ke=mh,sl=new ke,$f=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k0(){let i={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nn]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:$f,fromXYZ:eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:$f,fromXYZ:eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}var qe=k0();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vs,po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Bs("canvas")),vs.width=e.width,vs.height=e.height;let s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},B0=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rl(s[a].image)):r.push(rl(s[a]))}else r=rl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var z0=0,al=new D,Bt=class i extends Wn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yn,s=yn,r=St,a=Dn,o=bn,l=fn,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ln(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Zl;Bt.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],b=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(b-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(b+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,_=(p+1)/2,v=(d+1)/2,S=(h+f)/4,y=(u+g)/4,x=(b+m)/4;return C>_&&C>v?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=S/n,r=y/n):_>v?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=x/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=y/r,s=x/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-b)*(m-b)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-b)/w,this.y=(u-g)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var st=gh,mo=class extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Bt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends mo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pr=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Lo=class Lo{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,b,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,b,g,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,b,g,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=b,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,b=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+b*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=b+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,b=c*h,g=c*u;t[0]=f+g*o,t[4]=b*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-b,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,b=c*h,g=c*u;t[0]=f-g*o,t[4]=-a*u,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*h,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,b=o*h,g=o*u;t[0]=l*h,t[4]=b*c-p,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=p*c-b,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,b=o*l,g=o*c;t[0]=l*h,t[4]=g-f*u,t[8]=b*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+b,t[10]=f-g*u}else if(e.order==="XZY"){let f=a*l,p=a*c,b=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=a*h,t[9]=p*u-b,t[2]=b*u-p,t[6]=o*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G0,e,H0)}lookAt(e,t,n){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(n,dn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(n,dn)),Mi.normalize(),La.crossVectors(dn,Mi),s[0]=Mi.x,s[4]=La.x,s[8]=dn.x,s[1]=Mi.y,s[5]=La.y,s[9]=dn.y,s[2]=Mi.z,s[6]=La.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],b=n[2],g=n[6],m=n[10],d=n[14],w=n[3],C=n[7],_=n[11],v=n[15],S=s[0],y=s[4],x=s[8],A=s[12],T=s[1],R=s[5],P=s[9],F=s[13],L=s[2],U=s[6],B=s[10],z=s[14],Y=s[3],H=s[7],Z=s[11],J=s[15];return r[0]=a*S+o*T+l*L+c*Y,r[4]=a*y+o*R+l*U+c*H,r[8]=a*x+o*P+l*B+c*Z,r[12]=a*A+o*F+l*z+c*J,r[1]=h*S+u*T+f*L+p*Y,r[5]=h*y+u*R+f*U+p*H,r[9]=h*x+u*P+f*B+p*Z,r[13]=h*A+u*F+f*z+p*J,r[2]=b*S+g*T+m*L+d*Y,r[6]=b*y+g*R+m*U+d*H,r[10]=b*x+g*P+m*B+d*Z,r[14]=b*A+g*F+m*z+d*J,r[3]=w*S+C*T+_*L+v*Y,r[7]=w*y+C*R+_*U+v*H,r[11]=w*x+C*P+_*B+v*Z,r[15]=w*A+C*F+_*z+v*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],b=e[3],g=e[7],m=e[11],d=e[15],w=l*p-c*f,C=o*p-c*u,_=o*f-l*u,v=a*p-c*h,S=a*f-l*h,y=a*u-o*h;return t*(g*w-m*C+d*_)-n*(b*w-m*v+d*S)+s*(b*C-g*v+d*y)-r*(b*_-g*S+m*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],b=e[12],g=e[13],m=e[14],d=e[15],w=t*o-n*a,C=t*l-s*a,_=t*c-r*a,v=n*l-s*o,S=n*c-r*o,y=s*c-r*l,x=h*g-u*b,A=h*m-f*b,T=h*d-p*b,R=u*m-f*g,P=u*d-p*g,F=f*d-p*m,L=w*F-C*P+_*R+v*T-S*A+y*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return e[0]=(o*F-l*P+c*R)*U,e[1]=(s*P-n*F-r*R)*U,e[2]=(g*y-m*S+d*v)*U,e[3]=(f*S-u*y-p*v)*U,e[4]=(l*T-a*F-c*A)*U,e[5]=(t*F-s*T+r*A)*U,e[6]=(m*_-b*y-d*C)*U,e[7]=(h*y-f*_+p*C)*U,e[8]=(a*P-o*T+c*x)*U,e[9]=(n*T-t*P-r*x)*U,e[10]=(b*S-g*_+d*w)*U,e[11]=(u*_-h*S-p*w)*U,e[12]=(o*A-a*R-l*x)*U,e[13]=(t*R-n*A+s*x)*U,e[14]=(g*C-b*v-m*w)*U,e[15]=(h*v-u*C+f*w)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,b=r*u,g=a*h,m=a*u,d=o*u,w=l*c,C=l*h,_=l*u,v=n.x,S=n.y,y=n.z;return s[0]=(1-(g+d))*v,s[1]=(p+_)*v,s[2]=(b-C)*v,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(f+d))*S,s[6]=(m+w)*S,s[7]=0,s[8]=(b+C)*y,s[9]=(m-w)*y,s[10]=(1-(f+g))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,h=1/o,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),b,g;if(l)b=r/(a-r),g=a*r/(a-r);else if(o===Pn)b=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ks)b=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=b,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),b,g;if(l)b=1/(a-r),g=a/(a-r);else if(o===Pn)b=-2/(a-r),g=-(a+r)/(a-r);else if(o===ks)b=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=b,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Lo.prototype.isMatrix4=!0;var Me=Lo,Ms=new D,En=new Me,G0=new D(0,0,0),H0=new D(1,1,1),Mi=new D,La=new D,dn=new D,tu=new Me,nu=new mt,an=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V0=0,iu=new D,Ss=new mt,si=new Me,Fa=new D,_r=new D,W0=new D,q0=new mt,su=new D(1,0,0),ru=new D(0,1,0),au=new D(0,0,1),ou={type:"added"},X0={type:"removed"},ws={type:"childadded",child:null},ol={type:"childremoved",child:null},gt=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new an,n=new mt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ke}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(_r,Fa,this.up):si.lookAt(Fa,_r,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(si),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),ws.child=e,this.dispatchEvent(ws),ws.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new D(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},j0={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,b=.005;c.inputState.pinching&&f>p+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Da={h:0,s:0,l:0};function cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=oh(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cl(a,r,e+1/3),this.g=cl(a,r,e),this.b=cl(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return qe.workingToColorSpace(Jt.copy(this),e),Math.round(Je(Jt.r*255,0,255))*65536+Math.round(Je(Jt.g*255,0,255))*256+Math.round(Je(Jt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=vt){qe.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Da);let n=Rr(Si.h,Da.h,t),s=Rr(Si.s,Da.s,t),r=Rr(Si.l,Da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ce;Ce.NAMES=bd;var $i=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new D,ri=new D,ll=new D,ai=new D,As=new D,Es=new D,cu=new D,hl=new D,fl=new D,ul=new D,dl=new st,pl=new st,ml=new st,Ri=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),ri.subVectors(n,t),ll.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(ri),l=Tn.dot(ll),c=ri.dot(ri),h=ri.dot(ll),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,b=(a*h-o*l)*f;return r.set(1-p-b,b,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return dl.setScalar(0),pl.setScalar(0),ml.setScalar(0),dl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dl,r.x),a.addScaledVector(pl,r.y),a.addScaledVector(ml,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),ri.subVectors(e,t),Tn.cross(ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Tn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Es.subVectors(r,n),hl.subVectors(e,n);let l=As.dot(hl),c=Es.dot(hl);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,s);let h=As.dot(fl),u=Es.dot(fl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(As,a);ul.subVectors(e,r);let p=As.dot(ul),b=Es.dot(ul);if(b>=0&&p<=b)return t.copy(r);let g=p*c-l*b;if(g<=0&&c>=0&&b<=0)return o=c/(c-b),t.copy(n).addScaledVector(Es,o);let m=h*b-p*u;if(m<=0&&u-h>=0&&p-b>=0)return cu.subVectors(r,s),o=(u-h)/(u-h+(p-b)),t.copy(s).addScaledVector(cu,o);let d=1/(m+g+f);return a=g*d,o=f*d,t.copy(n).addScaledVector(As,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Ua.subVectors(this.max,yr),Ts.subVectors(e.a,yr),Rs.subVectors(e.b,yr),Cs.subVectors(e.c,yr),wi.subVectors(Rs,Ts),Ai.subVectors(Cs,Rs),qi.subVectors(Ts,Cs);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-qi.z,qi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,qi.z,0,-qi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-qi.y,qi.x,0];return!gl(t,Ts,Rs,Cs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,Ts,Rs,Cs,Ua))?!1:(Oa.crossVectors(wi,Ai),t=[Oa.x,Oa.y,Oa.z],gl(t,Ts,Rs,Cs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,Na=new Tt,Ts=new D,Rs=new D,Cs=new D,wi=new D,Ai=new D,qi=new D,yr=new D,Ua=new D,Oa=new D,Xi=new D;function gl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);let o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ut=new D,ka=new Be,K0=0,nt=class extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Fr=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tn=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},J0=new Tt,vr=new D,bl=new D,on=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):J0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(bl)),this.expandByPoint(vr.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Y0=0,_n=new Me,xl=new gt,Is=new D,pn=new Tt,Mr=new Tt,Wt=new D,Ot=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?Dr:Fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(pn.min,Mr.min),pn.expandByPoint(Wt),Wt.addVectors(pn.max,Mr.max),pn.expandByPoint(Wt)):(pn.expandByPoint(Mr.min),pn.expandByPoint(Mr.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(e,c),Wt.add(Is)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,h=new D,u=new D,f=new Be,p=new Be,b=new Be,g=new D,m=new D;function d(x,A,T){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,x),p.fromBufferAttribute(r,A),b.fromBufferAttribute(r,T),h.sub(c),u.sub(c),p.sub(f),b.sub(f);let R=1/(p.x*b.y-b.x*p.y);isFinite(R)&&(g.copy(h).multiplyScalar(b.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-b.x).multiplyScalar(R),o[x].add(g),o[A].add(g),o[T].add(g),l[x].add(m),l[A].add(m),l[T].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,A=w.length;x<A;++x){let T=w[x],R=T.start,P=T.count;for(let F=R,L=R+P;F<L;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let C=new D,_=new D,v=new D,S=new D;function y(x){v.fromBufferAttribute(s,x),S.copy(v);let A=o[x];C.copy(A),C.sub(v.multiplyScalar(v.dot(A))).normalize(),_.crossVectors(S,A);let R=_.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,R)}for(let x=0,A=w.length;x<A;++x){let T=w[x],R=T.start,P=T.count;for(let F=R,L=R+P;F<L;F+=3)y(e.getX(F+0)),y(e.getX(F+1)),y(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){let b=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,b=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let d=0;d<h;d++)f[b++]=c[p++]}return new nt(f,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},en=new D,Ws=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_l=new D,Z0=new D,Q0=new ke,Cn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_l.subVectors(n,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(_l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Q0.getNormalMatrix(e),s=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$0=0,Yt=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Zs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new D,yl=new D,Ba=new D,za=new D,es=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yl.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),za.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),o=za.dot(this.direction),l=-za.dot(Ba),c=za.lengthSq(),h=Math.abs(1-a*a),u,f,p,b;if(h>0)if(u=a*l-o,f=a*o-l,b=r*h,u>=0)if(f>=-b)if(f<=b){let g=1/h;u*=g,f*=g,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-b?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=b?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yl).addScaledVector(Ba,f),p}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,b=t.x-a.x,g=t.y-a.y,m=t.z-a.z,d=n.x-a.x,w=n.y-a.y,C=n.z-a.z,_=Math.abs(l),v=Math.abs(c),S=Math.abs(h),y,x,A,T,R,P,F,L,U,B,z,Y;if(_>=v&&_>=S?(A=l,P=u,U=b,Y=d,l>=0?(y=c,x=h,T=f,R=p,F=g,L=m,B=w,z=C):(y=h,x=c,T=p,R=f,F=m,L=g,B=C,z=w)):v>=S?(A=c,P=f,U=g,Y=w,c>=0?(y=h,x=l,T=p,R=u,F=m,L=b,B=C,z=d):(y=l,x=h,T=u,R=p,F=b,L=m,B=d,z=C)):(A=h,P=p,U=m,Y=C,h>=0?(y=l,x=c,T=u,R=f,F=b,L=g,B=d,z=w):(y=c,x=l,T=f,R=u,F=g,L=b,B=w,z=d)),A===0)return null;let H=y/A,Z=x/A,J=1/A,ye=T-H*P,Se=R-Z*P,je=F-H*U,De=L-Z*U,re=B-H*Y,q=z-Z*Y,j=re*De-q*je,ie=ye*q-Se*re,oe=je*Se-De*ye;if(s){if(j<0||ie<0||oe<0)return null}else if((j<0||ie<0||oe<0)&&(j>0||ie>0||oe>0))return null;let de=j+ie+oe;if(de===0)return null;let Ne=J*(j*P+ie*U+oe*Y);return(de>0?Ne<0:Ne>0)?null:this.at(Ne/de,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lu=new Me,ji=new es,Ga=new on,hu=new D,Ha=new D,Va=new D,Wa=new D,vl=new D,qa=new D,fu=new D,Xa=new D,lt=class extends gt{constructor(e=new Ot,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(vl.fromBufferAttribute(u,e),a?qa.addScaledVector(vl,h):qa.addScaledVector(vl.sub(t),h))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Ga.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Ga,hu)===null||ji.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(lu.copy(r).invert(),ji.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,g=f.length;b<g;b++){let m=f[b],d=a[m.materialIndex],w=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,v=C;_<v;_+=3){let S=o.getX(_),y=o.getX(_+1),x=o.getX(_+2);s=ja(this,d,e,n,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=b,d=g;m<d;m+=3){let w=o.getX(m),C=o.getX(m+1),_=o.getX(m+2);s=ja(this,a,e,n,c,h,u,w,C,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let b=0,g=f.length;b<g;b++){let m=f[b],d=a[m.materialIndex],w=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,v=C;_<v;_+=3){let S=_,y=_+1,x=_+2;s=ja(this,d,e,n,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=b,d=g;m<d;m+=3){let w=m,C=m+1,_=m+2;s=ja(this,a,e,n,c,h,u,w,C,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function em(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Kn,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:i}}function ja(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ha),i.getVertexPosition(l,Va),i.getVertexPosition(c,Wa);let h=em(i,e,t,n,Ha,Va,Wa,fu);if(h){let u=new D;Ri.getBarycoord(fu,Ha,Va,Wa,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,o,l,c,u,new Be)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,o,l,c,u,new Be)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};Ri.getNormal(Ha,Va,Wa,f.normal),h.face=f,h.barycoord=u}return h}var Sr=new st,uu=new st,du=new st,tm=new st,pu=new Me,Ka=new D,Ml=new on,mu=new Me,Sl=new es,Ii=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tl,this.bindMatrix=new Me,this.bindMatrixInverse=new Me,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ml.copy(this.boundingSphere),Ml.applyMatrix4(s),e.ray.intersectsSphere(Ml)!==!1&&(mu.copy(s).invert(),Sl.copy(e.ray).applyMatrix4(mu),!(this.boundingBox!==null&&Sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;uu.fromBufferAttribute(s.attributes.skinIndex,e),du.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Sr.copy(t),t.set(0,0,0,0)):(Sr.set(...t,1),t.set(0,0,0)),Sr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=du.getComponent(r);if(a!==0){let o=uu.getComponent(r);pu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tm.copy(Sr).applyMatrix4(pu),a)}}return t.isVector4&&(t.w=Sr.w),t.applyMatrix4(this.bindMatrixInverse)}},Pi=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Li=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=It,h=It,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gu=new Me,nm=new Me,ts=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:nm;gu.multiplyMatrices(o,t[r]),gu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Li(t,e,e,bn,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new Pi),this.bones.push(a),this.boneInverses.push(new Me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},fi=class extends nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new Me,bu=new Me,Ja=[],xu=new Tt,im=new Me,wr=new lt,Ar=new on,ns=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,im)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),xu.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Ar.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),bu.multiplyMatrices(n,Ps),wr.matrixWorld=bu,wr.raycast(e,Ja);for(let a=0,o=Ja.length;a<o;a++){let l=Ja[a];l.instanceId=r,l.object=this,t.push(l)}Ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Li(new Float32Array(s*this.count),s,this.count,tr,gn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new on,sm=new Be(.5,.5),Ya=new D,qs=class{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],b=r[8],g=r[9],m=r[10],d=r[11],w=r[12],C=r[13],_=r[14],v=r[15];if(s[0].setComponents(c-a,p-h,d-b,v-w).normalize(),s[1].setComponents(c+a,p+h,d+b,v+w).normalize(),s[2].setComponents(c+o,p+u,d+g,v+C).normalize(),s[3].setComponents(c-o,p-u,d-g,v-C).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,p-f,d-m,v-_).normalize();else if(s[4].setComponents(c-l,p-f,d-m,v-_).normalize(),t===Pn)s[5].setComponents(c+l,p+f,d+m,v+_).normalize();else if(t===ks)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=sm.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends Yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bo=new D,xo=new D,_u=new Me,Er=new es,Za=new on,wl=new D,yu=new D,is=class extends gt{constructor(e=new Ot,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)bo.fromBufferAttribute(t,s-1),xo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bo.distanceTo(xo);e.setAttribute("lineDistance",new tn(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;_u.copy(s).invert(),Er.copy(e.ray).applyMatrix4(_u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=c){let d=h.getX(g),w=h.getX(g+1),C=Qa(this,e,Er,l,d,w,g);C&&t.push(C)}if(this.isLineLoop){let g=h.getX(b-1),m=h.getX(p),d=Qa(this,e,Er,l,g,m,b-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=c){let d=Qa(this,e,Er,l,g,g+1,g);d&&t.push(d)}if(this.isLineLoop){let g=Qa(this,e,Er,l,b-1,p,b-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qa(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(bo.fromBufferAttribute(o,s),xo.fromBufferAttribute(o,r),t.distanceSqToSegment(bo,xo,wl,yu)>n)return;wl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wl);if(!(c<e.near||c>e.far))return{distance:c,point:yu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var vu=new D,Mu=new D,Nr=class extends is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vu.fromBufferAttribute(t,s),Mu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vu.distanceTo(Mu);e.setAttribute("lineDistance",new tn(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ur=class extends is{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},js=class extends Yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Su=new Me,Ll=new es,$a=new on,eo=new D,Or=class extends gt{constructor(e=new Ot,t=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Su.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let b=f,g=p;b<g;b++){let m=c.getX(b);eo.fromBufferAttribute(u,m),wu(eo,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=f,g=p;b<g;b++)eo.fromBufferAttribute(u,b),wu(eo,b,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wu(i,e,t,n,s,r,a){let o=Ll.distanceSqToPoint(i);if(o<t){let l=new D;Ll.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var kr=class extends Bt{constructor(e=[],t=ki,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Br=class extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends Bt{constructor(e,t,n=Nn,s,r,a,o=It,l=It,c,h=Vn,u=1){if(h!==Vn&&h!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_o=class extends Fi{constructor(e,t=Nn,n=ki,s,r,a=It,o=It,l,c=Vn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Di=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,s,a,2),b("x","z","y",1,-1,e,n,-t,s,a,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(u,2));function b(g,m,d,w,C,_,v,S,y,x,A){let T=_/y,R=v/x,P=_/2,F=v/2,L=S/2,U=y+1,B=x+1,z=0,Y=0,H=new D;for(let Z=0;Z<B;Z++){let J=Z*R-F;for(let ye=0;ye<U;ye++){let Se=ye*T-P;H[g]=Se*w,H[m]=J*C,H[d]=L,c.push(H.x,H.y,H.z),H[g]=0,H[m]=0,H[d]=S>0?1:-1,h.push(H.x,H.y,H.z),u.push(ye/y),u.push(1-Z/x),z+=1}}for(let Z=0;Z<x;Z++)for(let J=0;J<y;J++){let ye=f+J+U*Z,Se=f+J+U*(Z+1),je=f+(J+1)+U*(Z+1),De=f+(J+1)+U*Z;l.push(ye,Se,De),l.push(Se,je,De),Y+=6}o.addGroup(p,Y,A),p+=Y,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ss=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],b=[],g=[],m=[];for(let d=0;d<h;d++){let w=d*f-a;for(let C=0;C<c;C++){let _=C*u-r;b.push(_,-w,0),g.push(0,0,1),m.push(C/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){let C=w+c*d,_=w+c*(d+1),v=w+1+c*(d+1),S=w+1+c*d;p.push(C,_,S),p.push(_,v,S)}this.setIndex(p),this.setAttribute("position",new tn(b,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Au(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=hs(i[t]);for(let s in n)e[s]=n[s]}return e}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var xd={clone:hs,merge:Zt},am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new st().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},yo=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qn=class extends Yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cn=class extends qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Gr=class extends Yt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Hr=class extends Yt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Fo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vo=class extends Yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mo=class extends Yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ti(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ro(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function cm(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Eu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function lm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Xn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},So=class extends Xn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=e,o=2*t-n;break;case Pl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:a=e,l=2*n-t;break;case Pl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,b=(n-t)/(s-t),g=b*b,m=g*b,d=-f*m+2*f*g-f*b,w=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*b+1,C=(-1-p)*m+(1.5+p)*g+.5*b,_=p*m-p*g;for(let v=0;v!==o;++v)r[v]=d*a[h+v]+w*a[c+v]+C*a[l+v]+_*a[u+v];return r}},wo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Ao=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Eo=class extends Xn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let b=(n-t)/(s-t),g=1-b;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*b;return r}let f=o*2,p=e-1;for(let b=0;b!==o;++b){let g=a[c+b],m=a[l+b],d=p*f+b*2,w=u[d],C=u[d+1],_=e*f+b*2,v=h[_],S=h[_+1],y=fm(n,t,w,v,s);r[b]=_d(y,g,C,S,m)}return r}};function _d(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function hm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function fm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=_d(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=hm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ti(t,this.TimeBufferType),this.values=Ti(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ti(e.times,Array),values:Ti(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ro(e.settings)&&(n.settings={inTangents:Ti(e.settings.inTangents,Array),outTangents:Ti(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Eo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yi:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break;case Rl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return io;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ro(this.settings)&&(Tu(this.settings.inTangents,e),Tu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&v0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let b=0;b!==n;++b){let g=t[u+b];if(g!==t[f+b]||g!==t[p+b]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ro(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Zi;var ui=class extends ln{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Yi;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Vr.prototype.ValueTypeName="color";var di=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};di.prototype.ValueTypeName="number";var To=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)mt.slerpFlat(r,0,a,c-o,a,c,l);return r}},pi=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends ln{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Yi;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Ni.prototype.ValueTypeName="vector";var Wr=class{constructor(e="",t=-1,n=[],s=id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(dm(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=cm(l);l=Eu(l,1,h),c=Eu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new di(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function um(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return di;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return Vr;case"quaternion":return pi;case"bool":case"boolean":return ui;case"string":return mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function dm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=um(i.type);if(i.times===void 0){let n=[],s=[];lm(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ro(i.settings)&&(t.settings={inTangents:Ti(i.settings.inTangents,Float32Array),outTangents:Ti(i.settings.outTangents,Float32Array)}),t}var Hn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ru(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ru(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ru(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ro=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],b=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yd=new Ro,jn=class{constructor(e){this.manager=e!==void 0?e:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jn.DEFAULT_MATERIAL_NAME="__DEFAULT";var li={},Fl=class extends Error{constructor(e,t){super(e),this.response=t}},Ks=class extends jn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:s});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=li[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,b=p!==0,g=0,m=new ReadableStream({start(d){w();function w(){u.read().then(({done:C,value:_})=>{if(C)d.close();else{g+=_.byteLength;let v=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:p});for(let S=0,y=h.length;S<y;S++){let x=h[S];x.onProgress&&x.onProgress(v)}d.enqueue(_),w()}},C=>{d.error(C)})}}});return new Response(m)}else throw new Fl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(b=>p.decode(b))}}}).then(c=>{Hn.add(`file:${e}`,c);let h=li[e];delete li[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=li[e];if(h===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=new WeakMap,Co=class extends jn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ls.get(a);u===void 0&&(u=[],Ls.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Bs("img");function l(){h(),t&&t(this);let u=Ls.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Hn.remove(`image:${e}`);let f=Ls.get(this)||[];for(let p=0;p<f.length;p++){let b=f[p];b.onError&&b.onError(u)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var qr=class extends jn{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,a=new Co(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},rs=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xr=class extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Al=new Me,Cu=new D,Iu=new D,Js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},to=new D,no=new mt,Gn=new D,jr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(to,no,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(to,no,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new D,Pu=new Be,Lu=new Be,At=class extends jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Lu),t.subVectors(Lu,Pu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dl=class extends Js{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Qi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Kr=class extends rs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nl=class extends Js{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0}},as=class extends rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ui=class extends jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ul=class extends Js{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var El=new WeakMap,Jr=class extends jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Hn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{El.has(a)===!0?(s&&s(El.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),El.set(l,c),Hn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Fs=-90,Ds=1,Io=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(Fs,Ds,e,t);s.layers=this.layers,this.add(s);let r=new At(Fs,Ds,e,t);r.layers=this.layers,this.add(r);let a=new At(Fs,Ds,e,t);a.layers=this.layers,this.add(a);let o=new At(Fs,Ds,e,t);o.layers=this.layers,this.add(o);let l=new At(Fs,Ds,e,t);l.layers=this.layers,this.add(l);let c=new At(Fs,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Po=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hh="\\[\\]\\.:\\/",pm=new RegExp("["+hh+"]","g"),fh="[^"+hh+"]",mm="[^"+hh.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",fh),bm=/(WCOD+)?/.source.replace("WCOD",mm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),_m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),ym=new RegExp("^"+gm+bm+xm+_m+"$"),vm=["material","materials","bones","map"],Ol=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(e){let t=ym.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Ol;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qv=new Float32Array(1);var bh=class bh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};bh.prototype.isMatrix2=!0;var kl=bh;function uh(i,e,t,n){let s=Mm(n);switch(t){case nh:return i*e;case tr:return i*e/s.components*s.byteLength;case zo:return i*e/s.components*s.byteLength;case zi:return i*e*2/s.components*s.byteLength;case Go:return i*e*2/s.components*s.byteLength;case ih:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Ho:return i*e*4/s.components*s.byteLength;case $r:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:case Xo:return Math.max(i,16)*Math.max(e,8)/4;case Vo:case qo:return Math.max(i,8)*Math.max(e,8)/2;case jo:case Ko:case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:case ia:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dc:case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(i){switch(i){case fn:case Ql:return{byteLength:1,components:1};case $s:case $l:case Un:return{byteLength:2,components:1};case ko:case Bo:return{byteLength:2,components:4};case Nn:case Oo:case gn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,b)=>p.start-b.start);let f=0;for(let p=1;p<u.length;p++){let b=u[f],g=u[p];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,b=u.length;p<b;p++){let g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,km=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ng=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Am,alphahash_pars_fragment:Em,alphamap_fragment:Tm,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Im,aomap_fragment:Pm,aomap_pars_fragment:Lm,batching_pars_vertex:Fm,batching_vertex:Dm,begin_vertex:Nm,beginnormal_vertex:Um,bsdfs:Om,iridescence_fragment:km,bumpmap_pars_fragment:Bm,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:qm,color_pars_vertex:Xm,color_vertex:jm,common:Km,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:Zm,displacementmap_vertex:Qm,emissivemap_fragment:$m,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:bg,envmap_vertex:og,fog_vertex:cg,fog_pars_vertex:lg,fog_fragment:hg,fog_pars_fragment:fg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:dg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:_g,lights_phong_fragment:yg,lights_phong_pars_fragment:vg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:wg,lights_fragment_maps:Ag,lights_fragment_end:Eg,lightprobes_pars_fragment:Tg,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Pg,map_fragment:Lg,map_pars_fragment:Fg,map_particle_fragment:Dg,map_particle_pars_fragment:Ng,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Og,morphinstance_vertex:kg,morphcolor_vertex:Bg,morphnormal_vertex:zg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Hg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:qg,normal_pars_vertex:Xg,normal_vertex:jg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Qg,opaque_fragment:$g,packing:eb,premultiplied_alpha_fragment:tb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:cb,shadowmap_vertex:lb,shadowmask_pars_fragment:hb,skinbase_vertex:fb,skinning_pars_vertex:ub,skinning_vertex:db,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:bb,tonemapping_pars_fragment:xb,transmission_fragment:_b,transmission_pars_fragment:yb,uv_pars_fragment:vb,uv_pars_vertex:Mb,uv_vertex:Sb,worldpos_vertex:wb,background_vert:Ab,background_frag:Eb,backgroundCube_vert:Tb,backgroundCube_frag:Rb,cube_vert:Cb,cube_frag:Ib,depth_vert:Pb,depth_frag:Lb,distance_vert:Fb,distance_frag:Db,equirect_vert:Nb,equirect_frag:Ub,linedashed_vert:Ob,linedashed_frag:kb,meshbasic_vert:Bb,meshbasic_frag:zb,meshlambert_vert:Gb,meshlambert_frag:Hb,meshmatcap_vert:Vb,meshmatcap_frag:Wb,meshnormal_vert:qb,meshnormal_frag:Xb,meshphong_vert:jb,meshphong_frag:Kb,meshphysical_vert:Jb,meshphysical_frag:Yb,meshtoon_vert:Zb,meshtoon_frag:Qb,points_vert:$b,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:sx},me={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Zn={basic:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Zt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Zt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Zt([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Zt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Zt([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Zt([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Zt([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Zt([me.lights,me.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Zn.physical={uniforms:Zt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var vc={r:0,b:0,g:0},rx=new Me,Vd=new ke;Vd.set(-1,0,0,0,1,0,0,0,1);function ax(i,e,t,n,s,r){let a=new Ce(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function p(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let _=w.backgroundBlurriness>0;C=e.get(C,_)}return C}function b(w){let C=!1,_=p(w);_===null?m(a,o):_&&_.isColor&&(m(_,1),C=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,C){let _=p(C);_&&(_.isCubeTexture||_.mapping===Qr)?(c===void 0&&(c=new lt(new Di(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:hs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(C.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vd),c.material.toneMapped=qe.getTransfer(_.colorSpace)!==tt,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new lt(new ss(2,2),new mn({name:"BackgroundMaterial",uniforms:hs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=qe.getTransfer(_.colorSpace)!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,C){w.getRGB(vc,lh(i)),t.buffers.color.setClear(vc.r,vc.g,vc.b,C,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,C=1){a.set(w),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:b,addToRenderList:g,dispose:d}}function ox(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(R,P,F,L,U){let B=!1,z=u(R,L,F,P);r!==z&&(r=z,c(r.object)),B=p(R,L,F,U),B&&b(R,L,F,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,_(R,P,F,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,P,F,L){let U=L.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let z=R.isInstancedMesh===!0?R.id:0,Y=B[z];Y===void 0&&(Y={},B[z]=Y);let H=Y[F.id];H===void 0&&(H={},Y[F.id]=H);let Z=H[U];return Z===void 0&&(Z=f(l()),H[U]=Z),Z}function f(R){let P=[],F=[],L=[];for(let U=0;U<t;U++)P[U]=0,F[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:L,object:R,attributes:{},index:null}}function p(R,P,F,L){let U=r.attributes,B=P.attributes,z=0,Y=F.getAttributes();for(let H in Y)if(Y[H].location>=0){let J=U[H],ye=B[H];if(ye===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ye=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ye=R.instanceColor)),J===void 0||J.attribute!==ye||ye&&J.data!==ye.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function b(R,P,F,L){let U={},B=P.attributes,z=0,Y=F.getAttributes();for(let H in Y)if(Y[H].location>=0){let J=B[H];J===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));let ye={};ye.attribute=J,J&&J.data&&(ye.data=J.data),U[H]=ye,z++}r.attributes=U,r.attributesNum=z,r.index=L}function g(){let R=r.newAttributes;for(let P=0,F=R.length;P<F;P++)R[P]=0}function m(R){d(R,0)}function d(R,P){let F=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;F[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),U[R]!==P&&(i.vertexAttribDivisor(R,P),U[R]=P)}function w(){let R=r.newAttributes,P=r.enabledAttributes;for(let F=0,L=P.length;F<L;F++)P[F]!==R[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function C(R,P,F,L,U,B,z){z===!0?i.vertexAttribIPointer(R,P,F,U,B):i.vertexAttribPointer(R,P,F,L,U,B)}function _(R,P,F,L){g();let U=L.attributes,B=F.getAttributes(),z=P.defaultAttributeValues;for(let Y in B){let H=B[Y];if(H.location>=0){let Z=U[Y];if(Z===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){let J=Z.normalized,ye=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;let je=Se.buffer,De=Se.type,re=Se.bytesPerElement,q=De===i.INT||De===i.UNSIGNED_INT||Z.gpuType===Oo;if(Z.isInterleavedBufferAttribute){let j=Z.data,ie=j.stride,oe=Z.offset;if(j.isInstancedInterleavedBuffer){for(let de=0;de<H.locationSize;de++)d(H.location+de,j.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);i.bindBuffer(i.ARRAY_BUFFER,je);for(let de=0;de<H.locationSize;de++)C(H.location+de,ye/H.locationSize,De,J,ie*re,(oe+ye/H.locationSize*de)*re,q)}else{if(Z.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)d(H.location+j,Z.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let j=0;j<H.locationSize;j++)m(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,je);for(let j=0;j<H.locationSize;j++)C(H.location+j,ye/H.locationSize,De,J,ye*re,ye/H.locationSize*j*re,q)}}else if(z!==void 0){let J=z[Y];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(H.location,J);break;case 3:i.vertexAttrib3fv(H.location,J);break;case 4:i.vertexAttrib4fv(H.location,J);break;default:i.vertexAttrib1fv(H.location,J)}}}}w()}function v(){A();for(let R in n){let P=n[R];for(let F in P){let L=P[F];for(let U in L){let B=L[U];for(let z in B)h(B[z].object),delete B[z];delete L[U]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let F in P){let L=P[F];for(let U in L){let B=L[U];for(let z in B)h(B[z].object),delete B[z];delete L[U]}}delete n[R.id]}function y(R){for(let P in n){let F=n[P];for(let L in F){let U=F[L];if(U[R.id]===void 0)continue;let B=U[R.id];for(let z in B)h(B[z].object),delete B[z];delete U[R.id]}}}function x(R){for(let P in n){let F=n[P],L=R.isInstancedMesh===!0?R.id:0,U=F[L];if(U!==void 0){for(let B in U){let z=U[B];for(let Y in z)h(z[Y].object),delete z[Y];delete U[B]}delete F[L],Object.keys(F).length===0&&delete n[P]}}}function A(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:T,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:y,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function cx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==bn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let x=y===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==fn&&y!==gn&&!x&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:_,maxSamples:v,samples:S}}function hx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Cn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let b=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||b===null||b.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,C=w*4,_=d.clippingState||null;l.value=_,_=h(b,f,C,p);for(let v=0;v!==C;++v)_[v]=t[v];d.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,b){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,b!==!0||m===null){let d=p+g*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,_=p;C!==g;++C,_+=4)a.copy(u[C]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var rr=4,fx=6,ux=20,dx=256,aa=new Ui,vd=new Ce,xh=null,_h=0,yh=0,vh=!1,px=new D,fs=new D,or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=px}=r;xh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,_h,yh),this._renderer.xr.enabled=vh,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Un,format:bn,colorSpace:nn,depthBuffer:!1},s=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mx(r)),this._blurMaterial=bx(r,e,t),this._ggxMaterial=gx(r,e,t)}return s}_compileMaterial(e){let t=new lt(new Ot,e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,s,r){let l=new At(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(vd),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new Di,new sn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,d=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,d=!0):(m.color.copy(vd),d=!0);for(let C=0;C<6;C++){let _=C%3;_===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):_===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let v=this._cubeSize;sr(s,_*v,C>2?v:0,v,v),u.setRenderTarget(s),d&&u.render(g,l),u.render(e,l)}u.toneMapping=p,u.autoClear=f,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ki||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,aa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,p=u*f,{_lodMax:b}=this,g=this._sizeLods[n],m=3*g*(n>b-rr?n-b+rr:0),d=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=b-t,sr(r,m,d,3*g,2*g),s.setRenderTarget(r),s.render(o,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=b-n,sr(e,m,d,3*g,2*g),s.setRenderTarget(e),s.render(o,aa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-rr?s-this._lodMax+rr:0),f=4*(this._cubeSize-h);sr(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,aa)}};function mx(i){let e=[],t=[],n=i,s=i-rr+1+fx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,p=3,b=new Float32Array(p*f*u),g=new Float32Array(p*f*u);for(let d=0;d<u;d++){let w=d%3*2/3-1,C=d>2?0:-1,_=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(_,p*f*d);for(let v=0;v<f;v++){let S=h[v*2]*2-1,y=h[v*2+1]*2-1;d===0?fs.set(1,y,S):d===1?fs.set(-S,1,-y):d===2?fs.set(-S,y,1):d===3?fs.set(-1,y,-S):d===4?fs.set(-S,-1,y):fs.set(S,y,-1),fs.toArray(g,(d*f+v)*p)}}let m=new Ot;m.setAttribute("position",new nt(b,p)),m.setAttribute("outputDirection",new nt(g,p)),t.push(new lt(m,null)),n>rr&&n--}return{lodMeshes:t,sizeLods:e}}function Md(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gx(i,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function bx(i,e,t){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:ux,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Sd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function wd(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sc=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Di(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Jn});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=St),new Io(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function xx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Do||p===No)if(e.has(f)){let b=e.get(f).texture;return o(b,f.mapping)}else{let b=f.image;if(b&&b.height>0){let g=new Sc(b.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,b=p===Do||p===No,g=p===ki||p===cs;if(b||g){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new or(i)),m=b?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let w=f.image;return b&&w&&w.height>0||g&&w&&l(w)?(n===null&&(n=new or(i)),m=b?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,p){return p===Do?f.mapping=ki:p===No&&(f.mapping=cs),f}function l(f){let p=0,b=6;for(let g=0;g<b;g++)f[g]!==void 0&&p++;return p===b}function c(f){let p=f.target;p.removeEventListener("dispose",c);let b=e.get(p);b!==void 0&&(e.delete(p),b.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let b=t.get(p);b!==void 0&&(t.delete(p),b.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function _x(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function yx(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let b in f.attributes)e.remove(f.attributes[b]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,b=u.attributes.position,g=0;if(b===void 0)return;if(p!==null){let w=p.array;g=p.version;for(let C=0,_=w.length;C<_;C+=3){let v=w[C+0],S=w[C+1],y=w[C+2];f.push(v,S,S,y,y,v)}}else{let w=b.array;g=b.version;for(let C=0,_=w.length/3-1;C<_;C+=3){let v=C+0,S=C+1,y=C+2;f.push(v,S,S,y,y,v)}}let m=new(b.count>=65535?Dr:Fr)(f,1);m.version=g;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Mx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sx(i,e,t){let n=new WeakMap,s=new st;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let A=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],C=0;p===!0&&(C=1),b===!0&&(C=2),g===!0&&(C=3);let _=o.attributes.position.count*C,v=1;_>e.maxTextureSize&&(v=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*v*4*u),y=new Pr(S,_,v,u);y.type=gn,y.needsUpdate=!0;let x=C*4;for(let T=0;T<u;T++){let R=m[T],P=d[T],F=w[T],L=_*v*4*T;for(let U=0;U<R.count;U++){let B=U*x;p===!0&&(s.fromBufferAttribute(R,U),S[L+B+0]=s.x,S[L+B+1]=s.y,S[L+B+2]=s.z,S[L+B+3]=0),b===!0&&(s.fromBufferAttribute(P,U),S[L+B+4]=s.x,S[L+B+5]=s.y,S[L+B+6]=s.z,S[L+B+7]=0),g===!0&&(s.fromBufferAttribute(F,U),S[L+B+8]=s.x,S[L+B+9]=s.y,S[L+B+10]=s.z,S[L+B+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new Be(_,v)},n.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let b=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function wx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ax={[ql]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[Kl]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[Zr]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function Ex(i,e,t,n,s,r){let a=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ot;c.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tn([0,2,0,0,2,0],2));let h=new yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new lt(c,h),f=new Ui(-1,1,1,-1,0,1),p=null,b=null,g=!1,m,d=null,w=[],C=!1;this.setSize=function(_,v){a.setSize(_,v),o!==null&&o.setSize(_,v),l!==null&&l.setSize(_,v);for(let S=0;S<w.length;S++){let y=w[S];y.setSize&&y.setSize(_,v)}},this.setEffects=function(_){w=_,C=w.length>0&&w[0].isRenderPass===!0;let v=a.width,S=a.height;w.length>0&&o===null&&(o=new qt(v,S,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new qt(v,S,{type:Un,depthBuffer:!1,stencilBuffer:!1}));for(let y=0;y<w.length;y++){let x=w[y];x.setSize&&x.setSize(v,S)}},this.begin=function(_,v){if(g||_.toneMapping===Fn&&w.length===0)return!1;if(d=v,v!==null){let S=v.width,y=v.height;(a.width!==S||a.height!==y)&&this.setSize(S,y)}return C===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Fn,!0},this.hasRenderPass=function(){return C},this.end=function(_,v){_.toneMapping=m,g=!0;let S=a,y=o;for(let x=0;x<w.length;x++){let A=w[x];A.enabled!==!1&&(A.render(_,y,S,v),A.needsSwap!==!1&&(S=y,y=y===o?l:o))}if(p!==_.outputColorSpace||b!==_.toneMapping){p=_.outputColorSpace,b=_.toneMapping,h.defines={},qe.getTransfer(p)===tt&&(h.defines.SRGB_TRANSFER="");let x=Ax[b];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(d),_.render(u,f),d=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Wd=new Bt,wh=new Fi(1,1),qd=new Pr,Xd=new go,jd=new kr,Ad=[],Ed=[],Td=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ec(i,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Cd.set(n),i.uniformMatrix2fv(this.addr,!1,Cd),Ht(t,n)}}function Lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Rd.set(n),i.uniformMatrix3fv(this.addr,!1,Rd),Ht(t,n)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),Ht(t,n)}}function Dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function kx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Hx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wh.compareFunction=t.isReversedDepthBuffer()?yc:_c,r=wh):r=Wd,t.setTexture2D(e||r,s)}function Vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xd,s)}function Wx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jd,s)}function qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qd,s)}function Xx(i){switch(i){case 5126:return Tx;case 35664:return Rx;case 35665:return Cx;case 35666:return Ix;case 35674:return Px;case 35675:return Lx;case 35676:return Fx;case 5124:case 35670:return Dx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Ox;case 5125:return kx;case 36294:return Bx;case 36295:return zx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return qx}}function jx(i,e){i.uniform1fv(this.addr,e)}function Kx(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jx(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Yx(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Zx(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qx(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $x(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e_(i,e){i.uniform1iv(this.addr,e)}function t_(i,e){i.uniform2iv(this.addr,e)}function n_(i,e){i.uniform3iv(this.addr,e)}function i_(i,e){i.uniform4iv(this.addr,e)}function s_(i,e){i.uniform1uiv(this.addr,e)}function r_(i,e){i.uniform2uiv(this.addr,e)}function a_(i,e){i.uniform3uiv(this.addr,e)}function o_(i,e){i.uniform4uiv(this.addr,e)}function c_(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wh:a=Wd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function l_(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xd,r[a])}function h_(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||jd,r[a])}function f_(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qd,r[a])}function u_(i){switch(i){case 5126:return jx;case 35664:return Kx;case 35665:return Jx;case 35666:return Yx;case 35674:return Zx;case 35675:return Qx;case 35676:return $x;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return f_}}var Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xx(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u_(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function Id(i,e){i.seq.push(e),i.map[e.id]=e}function d_(i,e,t){let n=i.name,s=n.length;for(Mh.lastIndex=0;;){let r=Mh.exec(n),a=Mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Id(t,c===void 0?new Ah(o,i,e):new Eh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Th(o),Id(t,u)),t=u}}}var ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);d_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var p_=37297,m_=0;function g_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ld=new ke;function b_(i){qe._getMatrix(Ld,qe.workingColorSpace,i);let e=`mat3( ${Ld.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g_(i.getShaderSource(e),o)}else return r}function x_(i,e){let t=b_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var __={[ql]:"Linear",[Xl]:"Reinhard",[jl]:"Cineon",[Kl]:"ACESFilmic",[Yl]:"AgX",[Zr]:"Neutral",[Jl]:"Custom"};function y_(i,e){let t=__[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mc=new D;function v_(){qe.getLuminanceCoefficients(Mc);let i=Mc.x.toFixed(4),e=Mc.y.toFixed(4),t=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function S_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ca(i){return i!==""}function Dd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(i){return i.replace(A_,T_)}var E_=new Map;function T_(i,e){let t=Ve[e];if(t===void 0){let n=E_.get(e);if(n!==void 0)t=Ve[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rh(t)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(R_,C_)}function C_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Od(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var I_={[Yr]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function P_(i){return I_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L_={[ki]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function F_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":L_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var D_={[cs]:"ENVMAP_MODE_REFRACTION"};function N_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U_={[Fo]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[td]:"ENVMAP_BLENDING_ADD"};function O_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U_[i.combine]||"ENVMAP_BLENDING_NONE"}function k_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function B_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=P_(t),c=F_(t),h=N_(t),u=O_(t),f=k_(t),p=M_(t),b=S_(r),g=s.createProgram(),m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ca).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ca).join(`
`),d.length>0&&(d+=`
`)):(m=[Od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),d=[Od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fn?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),a=Rh(a),a=Dd(a,t),a=Nd(a,t),o=Rh(o),o=Dd(o,t),o=Nd(o,t),a=Ud(a),o=Ud(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=w+m+a,_=w+d+o,v=Pd(s,s.VERTEX_SHADER,C),S=Pd(s,s.FRAGMENT_SHADER,_);s.attachShader(g,v),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function y(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(v)||"",L=s.getShaderInfoLog(S)||"",U=P.trim(),B=F.trim(),z=L.trim(),Y=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,S);else{let Z=Fd(s,v,"vertex"),J=Fd(s,S,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Z+`
`+J)}else U!==""?Ie("WebGLProgram: Program Info Log:",U):(B===""||z==="")&&(H=!1);H&&(R.diagnostics={runnable:Y,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:z,prefix:d}})}s.deleteShader(v),s.deleteShader(S),x=new ar(s,g),A=w_(s,g)}let x;this.getUniforms=function(){return x===void 0&&y(this),x};let A;this.getAttributes=function(){return A===void 0&&y(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(g,p_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=S,this}var z_=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function G_(i){return i===zi||i===ia||i===sa}function H_(i,e,t,n,s,r){let a=new Lr,o=new Ch,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,A,T,R,P,F){let L=R.fog,U=P.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||B,z),H=Y&&Y.mapping===Qr?Y.image.height:null,Z=p[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ye=J!==void 0?J.length:0,Se=0;U.morphAttributes.position!==void 0&&(Se=1),U.morphAttributes.normal!==void 0&&(Se=2),U.morphAttributes.color!==void 0&&(Se=3);let je,De,re,q;if(Z){let dt=Zn[Z];je=dt.vertexShader,De=dt.fragmentShader}else{je=x.vertexShader,De=x.fragmentShader;let dt=o.getVertexShaderStage(x),$e=o.getFragmentShaderStage(x);o.update(x,dt,$e),re=dt.id,q=$e.id}let j=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),oe=P.isInstancedMesh===!0,de=P.isBatchedMesh===!0,Ne=!!x.map,Ge=!!x.matcap,we=!!Y,We=!!x.aoMap,Qe=!!x.lightMap,ae=!!x.bumpMap&&x.wireframe===!1,ot=!!x.normalMap,Rt=!!x.displacementMap,Xt=!!x.emissiveMap,bt=!!x.metalnessMap,Mt=!!x.roughnessMap,O=x.anisotropy>0,Dt=x.clearcoat>0,Ye=x.dispersion>0,I=x.retroreflectivity>0,M=x.iridescence>0,G=x.sheen>0,X=x.transmission>0,Q=O&&!!x.anisotropyMap,se=Dt&&!!x.clearcoatMap,ce=Dt&&!!x.clearcoatNormalMap,$=Dt&&!!x.clearcoatRoughnessMap,te=M&&!!x.iridescenceMap,le=M&&!!x.iridescenceThicknessMap,Pe=G&&!!x.sheenColorMap,pe=G&&!!x.sheenRoughnessMap,he=!!x.specularMap,Le=!!x.specularColorMap,Ue=!!x.specularIntensityMap,ze=X&&!!x.transmissionMap,k=X&&!!x.thicknessMap,fe=!!x.gradientMap,ee=!!x.alphaMap,ue=x.alphaTest>0,xe=!!x.alphaHash,ne=!!x.extensions,Fe=Fn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Te={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:De,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:de,batchingColor:de&&P._colorsTexture!==null,instancing:oe,instancingColor:oe&&P.instanceColor!==null,instancingMorph:oe&&P.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:Ge,envMap:we,envMapMode:we&&Y.mapping,envMapCubeUVHeight:H,aoMap:We,lightMap:Qe,bumpMap:ae,normalMap:ot,displacementMap:Rt,emissiveMap:Xt,normalMapObjectSpace:ot&&x.normalMapType===rd,normalMapTangentSpace:ot&&x.normalMapType===ir,packedNormalMap:ot&&x.normalMapType===ir&&G_(x.normalMap.format),metalnessMap:bt,roughnessMap:Mt,anisotropy:O,anisotropyMap:Q,clearcoat:Dt,clearcoatMap:se,clearcoatNormalMap:ce,clearcoatRoughnessMap:$,dispersion:Ye,retroreflection:I,iridescence:M,iridescenceMap:te,iridescenceThicknessMap:le,sheen:G,sheenColorMap:Pe,sheenRoughnessMap:pe,specularMap:he,specularColorMap:Le,specularIntensityMap:Ue,transmission:X,transmissionMap:ze,thicknessMap:k,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Zs&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:xe,combine:x.combine,mapUv:Ne&&b(x.map.channel),aoMapUv:We&&b(x.aoMap.channel),lightMapUv:Qe&&b(x.lightMap.channel),bumpMapUv:ae&&b(x.bumpMap.channel),normalMapUv:ot&&b(x.normalMap.channel),displacementMapUv:Rt&&b(x.displacementMap.channel),emissiveMapUv:Xt&&b(x.emissiveMap.channel),metalnessMapUv:bt&&b(x.metalnessMap.channel),roughnessMapUv:Mt&&b(x.roughnessMap.channel),anisotropyMapUv:Q&&b(x.anisotropyMap.channel),clearcoatMapUv:se&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&b(x.sheenRoughnessMap.channel),specularMapUv:he&&b(x.specularMap.channel),specularColorMapUv:Le&&b(x.specularColorMap.channel),specularIntensityMapUv:Ue&&b(x.specularIntensityMap.channel),transmissionMapUv:ze&&b(x.transmissionMap.channel),thicknessMapUv:k&&b(x.thicknessMap.channel),alphaMapUv:ee&&b(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ot||O),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Ne||ee),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Se,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:Xt&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)A.push(T),A.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(d(A,x),w(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function w(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let A=p[x.type],T;if(A){let R=Zn[A];T=xd.clone(R.uniforms)}else T=x.uniforms;return T}function _(x,A){let T=h.get(A);return T!==void 0?++T.usedTimes:(T=new B_(i,A,x,s),c.push(T),h.set(A,T)),T}function v(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function y(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:C,acquireProgram:_,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:y}}function V_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function W_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,b,g,m,d){let w=i[e];return w===void 0?(w={id:f.id,object:f,geometry:p,material:b,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},i[e]=w):(w.id=f.id,w.object=f,w.geometry=p,w.material=b,w.materialVariant=a(f),w.groupOrder=g,w.renderOrder=f.renderOrder,w.z=m,w.group=d),e++,w}function l(f,p,b,g,m,d,w){w.reversedDepth===!0&&(m=-m);let C=o(f,p,b,g,m,d);b.transmission>0?n.push(C):b.transparent===!0?s.push(C):t.push(C)}function c(f,p,b,g,m,d){let w=o(f,p,b,g,m,d);b.transmission>0?n.unshift(w):b.transparent===!0?s.unshift(w):t.unshift(w)}function h(f,p){t.length>1&&t.sort(f||W_),n.length>1&&n.sort(p||kd),s.length>1&&s.sort(p||kd)}function u(){for(let f=e,p=i.length;f<p;f++){let b=i[f];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function q_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Bd,i.set(n,[a])):s>=r.length?(a=new Bd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ce};break;case"SpotLight":t={position:new D,direction:new D,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var K_=0;function J_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Y_(i){let e=new X_,t=j_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Me,a=new Me;function o(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,b=0,g=0,m=0,d=0,w=0,C=0,_=0,v=0,S=0,y=0,x=0,A=0,T=0;c.sort(J_);for(let P=0,F=c.length;P<F;P++){let L=c[P],U=L.color,B=L.intensity,z=L.distance,Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===zi?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=U.r*B,u+=U.g*B,f+=U.b*B;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],B);T++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,J=t.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[b]=J,n.sunShadowMap[b]=Y;let ye=Z.getViewportCount();for(let Se=0;Se<ye;Se++)n.sunShadowMatrix[g+Se]=Z.getMatrix(Se),n.sunShadowCascade[g+Se]=Z._cascadeData[Se];g+=ye,b++}n.sun[p]=H,p++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,J=t.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=L.shadow.matrix,v++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(U).multiplyScalar(B),H.distance=z,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[w]=H;let Z=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,Z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[w]=Z.matrix,L.castShadow){let J=t.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[w]=J,n.spotShadowMap[w]=Y,y++}w++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(U).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=H,C++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let Z=L.shadow,J=t.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[d]=J,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=L.shadow.matrix,S++}n.point[d]=H,d++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(B),H.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[_]=H,_++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.sunLength!==p||R.directionalLength!==m||R.pointLength!==d||R.spotLength!==w||R.rectAreaLength!==C||R.hemiLength!==_||R.numSunShadows!==b||R.numDirectionalShadows!==v||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==x||R.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=m,n.spot.length=w,n.rectArea.length=C,n.point.length=d,n.hemi.length=_,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.sunLength=p,R.directionalLength=m,R.pointLength=d,R.spotLength=w,R.rectAreaLength=C,R.hemiLength=_,R.numSunShadows=b,R.numDirectionalShadows=v,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=x,R.numLightProbes=T,n.version=K_++)}function l(c,h){let u=0,f=0,p=0,b=0,g=0,m=0,d=h.matrixWorldInverse;for(let w=0,C=c.length;w<C;w++){let _=c[w];if(_.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(d),u++}else if(_.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),f++}else if(_.isSpotLight){let v=n.spot[b];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),b++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function zd(i){let e=new Y_(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Z_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zd(i),e.set(s,[o])):r>=a.length?(o=new zd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ey=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],ty=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Gd=new Me,oa=new D,Sh=new D;function ny(i,e,t){let n=new qs,s=new Be,r=new Be,a=new st,o=new vo,l=new Mo,c={},h=t.maxTextureSize,u={[Kn]:zt,[zt]:Kn,[hn]:hn},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Q_,fragmentShader:$_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let b=new Ot;b.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new lt(b,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let d=this.type;this.render=function(S,y,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Nu&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);let A=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Jn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=d!==this.type;F&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=S.length;L<U;L++){let B=S[L],z=B.shadow;if(z===void 0){Ie("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let Y=z.getFrameExtents();s.multiply(Y),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,z.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=H,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ys){if(B.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new qt(s.x,s.y,{format:zi,type:Un,minFilter:St,magFilter:St,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new Fi(s.x,s.y,gn),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=Vn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=It,z.map.depthTexture.magFilter=It}else B.isPointLight?(z.map=new Sc(s.x),z.map.depthTexture=new _o(s.x,Nn)):(z.map=new qt(s.x,s.y),z.map.depthTexture=new Fi(s.x,s.y,Nn)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=Vn,this.type===Yr?(z.map.depthTexture.compareFunction=H?yc:_c,z.map.depthTexture.minFilter=St,z.map.depthTexture.magFilter=St):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=It,z.map.depthTexture.magFilter=It);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Z=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,x);for(let J=0;J<Z;J++){let ye=z.getCamera(J);if(B.isPointLight){let Se=z.camera,je=z.matrix,De=B.distance||Se.far;De!==Se.far&&(Se.far=De,Se.updateProjectionMatrix()),oa.setFromMatrixPosition(B.matrixWorld),Se.position.copy(oa),Sh.copy(Se.position),Sh.add(ey[J]),Se.up.copy(ty[J]),Se.lookAt(Sh),Se.updateMatrixWorld(),je.makeTranslation(-oa.x,-oa.y,-oa.z),Gd.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Gd,Se.coordinateSystem,Se.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,J),i.clear();else{J===0&&(i.setRenderTarget(z.map),i.clear());let Se=z.getViewport(J);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),P.viewport(a)}n=z.getFrustum(J),_(y,x,ye,B,this.type)}z.isPointLightShadow!==!0&&this.type===Ys&&w(z,x),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,T,R)};function w(S,y){let x=e.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new qt(s.x,s.y,{format:zi,type:Un}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(y,null,x,f,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(y,null,x,p,g,null)}function C(S,y,x,A){let T=null,R=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)T=R;else if(T=x.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let P=T.uuid,F=y.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let U=L[F];U===void 0&&(U=T.clone(),L[F]=U,y.addEventListener("dispose",v)),T=U}if(T.visible=y.visible,T.wireframe=y.wireframe,A===Ys?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:u[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=i.properties.get(T);P.light=x}return T}function _(S,y,x,A,T){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Ys)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let F=e.update(S),L=S.material;if(Array.isArray(L)){let U=F.groups;for(let B=0,z=U.length;B<z;B++){let Y=U[B],H=L[Y.materialIndex];if(H&&H.visible){let Z=C(S,H,A,T);S.onBeforeShadow(i,S,y,x,F,Z,Y),i.renderBufferDirect(x,null,F,Z,S,Y),S.onAfterShadow(i,S,y,x,F,Z,Y)}}}else if(L.visible){let U=C(S,L,A,T);S.onBeforeShadow(i,S,y,x,F,U,null),i.renderBufferDirect(x,null,F,U,S,null),S.onAfterShadow(i,S,y,x,F,U,null)}}let P=S.children;for(let F=0,L=P.length;F<L;F++)_(P[F],y,x,A,T)}function v(S){S.target.removeEventListener("dispose",v);for(let x in c){let A=c[x],T=S.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function iy(i,e){function t(){let k=!1,fe=new st,ee=null,ue=new st(0,0,0,0);return{setMask:function(xe){ee!==xe&&!k&&(i.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){k=xe},setClear:function(xe,ne,Fe,Te,dt){dt===!0&&(xe*=Te,ne*=Te,Fe*=Te),fe.set(xe,ne,Fe,Te),ue.equals(fe)===!1&&(i.clearColor(xe,ne,Fe,Te),ue.copy(fe))},reset:function(){k=!1,ee=null,ue.set(-1,0,0,0)}}}function n(){let k=!1,fe=!1,ee=null,ue=null,xe=null;return{setReversed:function(ne){if(fe!==ne){let Fe=e.get("EXT_clip_control");ne?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),fe=ne;let Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return fe},setTest:function(ne){ne?j(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!k&&(i.depthMask(ne),ee=ne)},setFunc:function(ne){if(fe&&(ne=gd[ne]),ue!==ne){switch(ne){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=ne}},setLocked:function(ne){k=ne},setClear:function(ne){xe!==ne&&(xe=ne,fe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){k=!1,ee=null,ue=null,xe=null,fe=!1}}}function s(){let k=!1,fe=null,ee=null,ue=null,xe=null,ne=null,Fe=null,Te=null,dt=null;return{setTest:function($e){k||($e?j(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function($e){fe!==$e&&!k&&(i.stencilMask($e),fe=$e)},setFunc:function($e,An,Bn){(ee!==$e||ue!==An||xe!==Bn)&&(i.stencilFunc($e,An,Bn),ee=$e,ue=An,xe=Bn)},setOp:function($e,An,Bn){(ne!==$e||Fe!==An||Te!==Bn)&&(i.stencilOp($e,An,Bn),ne=$e,Fe=An,Te=Bn)},setLocked:function($e){k=$e},setClear:function($e){dt!==$e&&(i.clearStencil($e),dt=$e)},reset:function(){k=!1,fe=null,ee=null,ue=null,xe=null,ne=null,Fe=null,Te=null,dt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},p=new WeakMap,b=[],g=null,m=!1,d=null,w=null,C=null,_=null,v=null,S=null,y=null,x=new Ce(0,0,0),A=0,T=!1,R=null,P=null,F=null,L=null,U=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Y=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Y>=2);let Z=null,J={},ye=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),je=new st().fromArray(ye),De=new st().fromArray(Se);function re(k,fe,ee,ue){let xe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(k,ne),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ee;Fe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(fe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ne}let q={};q[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Us),ae(!1),ot(Bl),j(i.CULL_FACE),We(Jn);function j(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function ie(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function oe(k,fe){return f[k]!==fe?(i.bindFramebuffer(k,fe),f[k]=fe,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=fe),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function de(k,fe){let ee=b,ue=!1;if(k){ee=p.get(fe),ee===void 0&&(ee=[],p.set(fe,ee));let xe=k.textures;if(ee.length!==xe.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Fe=xe.length;ne<Fe;ne++)ee[ne]=i.COLOR_ATTACHMENT0+ne;ee.length=xe.length,ue=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ee)}function Ne(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let Ge={[os]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};Ge[Bu]=i.MIN,Ge[zu]=i.MAX;let we={[Gu]:i.ZERO,[Hu]:i.ONE,[Vu]:i.SRC_COLOR,[Vl]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[ju]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function We(k,fe,ee,ue,xe,ne,Fe,Te,dt,$e){if(k===Jn){m===!0&&(ie(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),k!==Uu){if(k!==d||$e!==T){if((w!==os||v!==os)&&(i.blendEquation(i.FUNC_ADD),w=os,v=os),$e)switch(k){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",k);break}else switch(k){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",k);break}C=null,_=null,S=null,y=null,x.set(0,0,0),A=0,d=k,T=$e}return}xe=xe||fe,ne=ne||ee,Fe=Fe||ue,(fe!==w||xe!==v)&&(i.blendEquationSeparate(Ge[fe],Ge[xe]),w=fe,v=xe),(ee!==C||ue!==_||ne!==S||Fe!==y)&&(i.blendFuncSeparate(we[ee],we[ue],we[ne],we[Fe]),C=ee,_=ue,S=ne,y=Fe),(Te.equals(x)===!1||dt!==A)&&(i.blendColor(Te.r,Te.g,Te.b,dt),x.copy(Te),A=dt),d=k,T=!1}function Qe(k,fe){k.side===hn?ie(i.CULL_FACE):j(i.CULL_FACE);let ee=k.side===zt;fe&&(ee=!ee),ae(ee),k.blending===Zs&&k.transparent===!1?We(Jn):We(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ue=k.stencilWrite;o.setTest(ue),ue&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(k){R!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),R=k)}function ot(k){k!==Fu?(j(i.CULL_FACE),k!==P&&(k===Bl?i.cullFace(i.BACK):k===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),P=k}function Rt(k){k!==F&&(z&&i.lineWidth(k),F=k)}function Xt(k,fe,ee){k?(j(i.POLYGON_OFFSET_FILL),(L!==fe||U!==ee)&&(L=fe,U=ee,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,ee))):ie(i.POLYGON_OFFSET_FILL)}function bt(k){k?j(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Mt(k){k===void 0&&(k=i.TEXTURE0+B-1),Z!==k&&(i.activeTexture(k),Z=k)}function O(k,fe,ee){ee===void 0&&(Z===null?ee=i.TEXTURE0+B-1:ee=Z);let ue=J[ee];ue===void 0&&(ue={type:void 0,texture:void 0},J[ee]=ue),(ue.type!==k||ue.texture!==fe)&&(Z!==ee&&(i.activeTexture(ee),Z=ee),i.bindTexture(k,fe||q[k]),ue.type=k,ue.texture=fe)}function Dt(){let k=J[Z];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function M(){try{i.texSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function G(){try{i.texSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function se(){try{i.texStorage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function ce(){try{i.texStorage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function $(){try{i.texImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function te(){try{i.texImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function le(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Pe(k,fe){u[k]!==fe&&(i.pixelStorei(k,fe),u[k]=fe)}function pe(k){je.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),je.copy(k))}function he(k){De.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function Le(k,fe){let ee=c.get(fe);ee===void 0&&(ee=new WeakMap,c.set(fe,ee));let ue=ee.get(k);ue===void 0&&(ue=i.getUniformBlockIndex(fe,k.name),ee.set(k,ue))}function Ue(k,fe){let ue=c.get(fe).get(k);l.get(fe)!==ue&&(i.uniformBlockBinding(fe,ue,k.__bindingPointIndex),l.set(fe,ue))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,J={},f={},p=new WeakMap,b=[],g=null,m=!1,d=null,w=null,C=null,_=null,v=null,S=null,y=null,x=new Ce(0,0,0),A=0,T=!1,R=null,P=null,F=null,L=null,U=null,je.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ie,bindFramebuffer:oe,drawBuffers:de,useProgram:Ne,setBlending:We,setMaterial:Qe,setFlipSided:ae,setCullFace:ot,setLineWidth:Rt,setPolygonOffset:Xt,setScissorTest:bt,activeTexture:Mt,bindTexture:O,unbindTexture:Dt,compressedTexImage2D:Ye,compressedTexImage3D:I,texImage2D:$,texImage3D:te,pixelStorei:Pe,getParameter:le,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:se,texStorage3D:ce,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:pe,viewport:he,reset:ze}}function sy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,u=new Set,f,p=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,M){return b?new OffscreenCanvas(I,M):Bs("canvas")}function m(I,M,G){let X=1,Q=Ye(I);if((Q.width>G||Q.height>G)&&(X=G/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let se=Math.floor(X*Q.width),ce=Math.floor(X*Q.height);f===void 0&&(f=g(se,ce));let $=M?g(se,ce):f;return $.width=se,$.height=ce,$.getContext("2d").drawImage(I,0,0,se,ce),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+se+"x"+ce+")."),$}else return"data"in I&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function d(I){return I.generateMipmaps}function w(I){i.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,M,G,X,Q,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce;X&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8),G===i.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),G===i.SHORT&&ce&&($=ce.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),M===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8),G===i.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),G===i.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),G===i.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){let te=se?Cr:qe.getTransfer(Q);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=te===tt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),G===i.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(I,M){let G;return I?M===null||M===Nn||M===er?G=i.DEPTH24_STENCIL8:M===gn?G=i.DEPTH32F_STENCIL8:M===$s&&(G=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Nn||M===er?G=i.DEPTH_COMPONENT24:M===gn?G=i.DEPTH_COMPONENT32F:M===$s&&(G=i.DEPTH_COMPONENT16),G}function S(I,M){return d(I)===!0||I.isFramebufferTexture&&I.minFilter!==It&&I.minFilter!==St?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function y(I){let M=I.target;M.removeEventListener("dispose",y),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function x(I){let M=I.target;M.removeEventListener("dispose",x),R(M)}function A(I){let M=n.get(I);if(M.__webglInit===void 0)return;let G=I.source,X=p.get(G);if(X){let Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(I),Object.keys(X).length===0&&p.delete(G)}n.remove(I)}function T(I){let M=n.get(I);i.deleteTexture(M.__webglTexture);let G=I.source,X=p.get(G);delete X[M.__cacheKey],a.memory.textures--}function R(I){let M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)i.deleteFramebuffer(M.__webglFramebuffer[X]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=I.textures;for(let X=0,Q=G.length;X<Q;X++){let se=n.get(G[X]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(G[X])}n.remove(I)}let P=0;function F(){P=0}function L(){return P}function U(I){P=I}function B(){let I=P;return I>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function z(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function Y(I,M){let G=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let X=I.image;if(X===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,I,M);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function H(I,M){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ie(G,I,M);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function Z(I,M){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ie(G,I,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function J(I,M){let G=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){oe(G,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let ye={[Ci]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Os]:i.MIRRORED_REPEAT},Se={[It]:i.NEAREST,[Uo]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},je={[od]:i.NEVER,[ud]:i.ALWAYS,[cd]:i.LESS,[_c]:i.LEQUAL,[ld]:i.EQUAL,[yc]:i.GEQUAL,[hd]:i.GREATER,[fd]:i.NOTEQUAL};function De(I,M){if(M.type===gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===St||M.magFilter===Qs||M.magFilter===ls||M.magFilter===Dn||M.minFilter===St||M.minFilter===Qs||M.minFilter===ls||M.minFilter===Dn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ye[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ye[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ye[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Se[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===It||M.minFilter!==ls&&M.minFilter!==Dn||M.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function re(I,M){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",y));let X=M.source,Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));let se=z(M);if(se!==I.__cacheKey){Q[se]===void 0&&(Q[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[se].usedTimes++;let ce=Q[I.__cacheKey];ce!==void 0&&(Q[I.__cacheKey].usedTimes--,ce.usedTimes===0&&T(M)),I.__cacheKey=se,I.__webglTexture=Q[se].texture}return G}function q(I,M,G){return Math.floor(Math.floor(I/G)/M)}function j(I,M,G,X){let se=I.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,X,M.data);else{se.sort((Pe,pe)=>Pe.start-pe.start);let ce=0;for(let Pe=1;Pe<se.length;Pe++){let pe=se[ce],he=se[Pe],Le=pe.start+pe.count,Ue=q(he.start,M.width,4),ze=q(pe.start,M.width,4);he.start<=Le+1&&Ue===ze&&q(he.start+he.count-1,M.width,4)===Ue?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++ce,se[ce]=he)}se.length=ce+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Pe=0,pe=se.length;Pe<pe;Pe++){let he=se[Pe],Le=Math.floor(he.start/4),Ue=Math.ceil(he.count/4),ze=Le%M.width,k=Math.floor(Le/M.width),fe=Ue,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,ze,k,fe,ee,G,X,M.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ie(I,M,G){let X=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=i.TEXTURE_3D);let Q=re(I,M),se=M.source;t.bindTexture(X,I.__webglTexture,i.TEXTURE0+G);let ce=n.get(se);if(se.version!==ce.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ee=qe.getPrimaries(qe.workingColorSpace),ue=M.colorSpace===bi?null:qe.getPrimaries(M.colorSpace),xe=M.colorSpace===bi||ee===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let te=m(M.image,!1,s.maxTextureSize);te=Dt(M,te);let le=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type),pe=_(M.internalFormat,le,Pe,M.normalized,M.colorSpace,M.isVideoTexture);De(X,M);let he,Le=M.mipmaps,Ue=M.isVideoTexture!==!0,ze=ce.__version===void 0||Q===!0,k=se.dataReady,fe=S(M,te);if(M.isDepthTexture)pe=v(M.format===Bi,M.type),ze&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,pe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,le,Pe,null));else if(M.isDataTexture)if(Le.length>0){Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,fe,pe,Le[0].width,Le[0].height);for(let ee=0,ue=Le.length;ee<ue;ee++)he=Le[ee],Ue?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,le,Pe,he.data):t.texImage2D(i.TEXTURE_2D,ee,pe,he.width,he.height,0,le,Pe,he.data);M.generateMipmaps=!1}else Ue?(ze&&t.texStorage2D(i.TEXTURE_2D,fe,pe,te.width,te.height),k&&j(M,te,le,Pe)):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,le,Pe,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,pe,Le[0].width,Le[0].height,te.depth);for(let ee=0,ue=Le.length;ee<ue;ee++)if(he=Le[ee],M.format!==bn)if(le!==null)if(Ue){if(k)if(M.layerUpdates.size>0){let xe=uh(he.width,he.height,M.format,M.type);for(let ne of M.layerUpdates){let Fe=he.data.subarray(ne*xe/he.data.BYTES_PER_ELEMENT,(ne+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ne,he.width,he.height,1,le,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,le,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,te.depth,0,he.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,le,Pe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,pe,he.width,he.height,te.depth,0,le,Pe,he.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,fe,pe,Le[0].width,Le[0].height);for(let ee=0,ue=Le.length;ee<ue;ee++)he=Le[ee],M.format!==bn?le!==null?Ue?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,pe,he.width,he.height,0,he.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he.width,he.height,le,Pe,he.data):t.texImage2D(i.TEXTURE_2D,ee,pe,he.width,he.height,0,le,Pe,he.data)}else if(M.isDataArrayTexture)if(Ue){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,pe,te.width,te.height,te.depth),k)if(M.layerUpdates.size>0){let ee=uh(te.width,te.height,M.format,M.type);for(let ue of M.layerUpdates){let xe=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,le,Pe,xe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,le,Pe,te.data);else if(M.isData3DTexture)Ue?(ze&&t.texStorage3D(i.TEXTURE_3D,fe,pe,te.width,te.height,te.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,le,Pe,te.data);else if(M.isFramebufferTexture){if(ze)if(Ue)t.texStorage2D(i.TEXTURE_2D,fe,pe,te.width,te.height);else{let ee=te.width,ue=te.height;for(let xe=0;xe<fe;xe++)t.texImage2D(i.TEXTURE_2D,xe,pe,ee,ue,0,le,Pe,null),ee>>=1,ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),u.add(M),ee.onpaint=ue=>{let xe=ue.changedElements;for(let ne of u)xe.includes(ne.image)&&(ne.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let xe=i.RGBA,ne=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,ne,Fe,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ue&&ze){let ee=Ye(Le[0]);t.texStorage2D(i.TEXTURE_2D,fe,pe,ee.width,ee.height)}for(let ee=0,ue=Le.length;ee<ue;ee++)he=Le[ee],Ue?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le,Pe,he):t.texImage2D(i.TEXTURE_2D,ee,pe,le,Pe,he);M.generateMipmaps=!1}else if(Ue){if(ze){let ee=Ye(te);t.texStorage2D(i.TEXTURE_2D,fe,pe,ee.width,ee.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,pe,le,Pe,te);d(M)&&w(X),ce.__version=se.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function oe(I,M,G){if(M.image.length!==6)return;let X=re(I,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let se=n.get(Q);if(Q.version!==se.__version||X===!0){t.activeTexture(i.TEXTURE0+G);let ce=qe.getPrimaries(qe.workingColorSpace),$=M.colorSpace===bi?null:qe.getPrimaries(M.colorSpace),te=M.colorSpace===bi||ce===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=M.isCompressedTexture||M.image[0].isCompressedTexture,Pe=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!le&&!Pe?pe[ne]=m(M.image[ne],!0,s.maxCubemapSize):pe[ne]=Pe?M.image[ne].image:M.image[ne],pe[ne]=Dt(M,pe[ne]);let he=pe[0],Le=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type),ze=_(M.internalFormat,Le,Ue,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,fe=se.__version===void 0||X===!0,ee=Q.dataReady,ue=S(M,he);De(i.TEXTURE_CUBE_MAP,M);let xe;if(le){k&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ze,he.width,he.height);for(let ne=0;ne<6;ne++){xe=pe[ne].mipmaps;for(let Fe=0;Fe<xe.length;Fe++){let Te=xe[Fe];M.format!==bn?Le!==null?k?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,ze,Te.width,Te.height,0,Te.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Te.width,Te.height,Le,Ue,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,ze,Te.width,Te.height,0,Le,Ue,Te.data)}}}else{if(xe=M.mipmaps,k&&fe){xe.length>0&&ue++;let ne=Ye(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Pe){k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,Le,Ue,pe[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,pe[ne].width,pe[ne].height,0,Le,Ue,pe[ne].data);for(let Fe=0;Fe<xe.length;Fe++){let dt=xe[Fe].image[ne].image;k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,dt.width,dt.height,Le,Ue,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,ze,dt.width,dt.height,0,Le,Ue,dt.data)}}else{k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,Ue,pe[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,Le,Ue,pe[ne]);for(let Fe=0;Fe<xe.length;Fe++){let Te=xe[Fe];k?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,Le,Ue,Te.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,ze,Le,Ue,Te.image[ne])}}}d(M)&&w(i.TEXTURE_CUBE_MAP),se.__version=Q.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function de(I,M,G,X,Q,se){let ce=r.convert(G.format,G.colorSpace),$=r.convert(G.type),te=_(G.internalFormat,ce,$,G.normalized,G.colorSpace),le=n.get(M),Pe=n.get(G);if(Pe.__renderTarget=M,!le.__hasExternalTextures){let pe=Math.max(1,M.width>>se),he=Math.max(1,M.height>>se);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,te,pe,he,M.depth,0,ce,$,null):t.texImage2D(Q,se,te,pe,he,0,ce,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,Pe.__webglTexture,0,bt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,Pe.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(I,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){let X=M.depthTexture,Q=X&&X.isDepthTexture?X.type:null,se=v(M.stencilBuffer,Q),ce=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(M),se,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(M),se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,se,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,I)}else{let X=M.textures;for(let Q=0;Q<X.length;Q++){let se=X[Q],ce=r.convert(se.format,se.colorSpace),$=r.convert(se.type),te=_(se.internalFormat,ce,$,se.normalized,se.colorSpace);Mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(M),te,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(M),te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(I,M,G){let X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",y)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),De(i.TEXTURE_CUBE_MAP,M.depthTexture);let le=r.convert(M.depthTexture.format),Pe=r.convert(M.depthTexture.type),pe;M.depthTexture.format===Vn?pe=i.DEPTH_COMPONENT24:M.depthTexture.format===Bi&&(pe=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pe,M.width,M.height,0,le,Pe,null)}}else Y(M.depthTexture,0);let se=Q.__webglTexture,ce=bt(M),$=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,te=M.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Vn)Mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,se,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,se,0);else if(M.depthTexture.format===Bi)Mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,se,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(I){let M=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=X}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Ge(M.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?Ge(M.__webglFramebuffer[0],I,0):Ge(M.__webglFramebuffer,I,0)}else if(G){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=i.createRenderbuffer(),Ne(M.__webglDepthbuffer[X],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,se)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ne(M.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(I,M,G){let X=n.get(I);M!==void 0&&de(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&we(I)}function Qe(I){let M=I.texture,G=n.get(I),X=n.get(M);I.addEventListener("dispose",x);let Q=I.textures,se=I.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=M.version,a.memory.textures++),se){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let te=0;te<M.mipmaps.length;te++)G.__webglFramebuffer[$][te]=i.createFramebuffer()}else G.__webglFramebuffer[$]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)G.__webglFramebuffer[$]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ce)for(let $=0,te=Q.length;$<te;$++){let le=n.get(Q[$]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Mt(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let te=Q[$];G.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);let le=r.convert(te.format,te.colorSpace),Pe=r.convert(te.type),pe=_(te.internalFormat,le,Pe,te.normalized,te.colorSpace,I.isXRRenderTarget===!0),he=bt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,pe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,G.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),De(i.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)de(G.__webglFramebuffer[$][te],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else de(G.__webglFramebuffer[$],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);d(M)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,te=Q.length;$<te;$++){let le=Q[$],Pe=n.get(le),pe=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Pe.__webglTexture),De(pe,le),de(G.__webglFramebuffer,I,le,i.COLOR_ATTACHMENT0+$,pe,0),d(le)&&w(pe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,X.__webglTexture),De($,M),M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)de(G.__webglFramebuffer[te],I,M,i.COLOR_ATTACHMENT0,$,te);else de(G.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,$,0);d(M)&&w($),t.unbindTexture()}I.depthBuffer&&we(I)}function ae(I){let M=I.textures;for(let G=0,X=M.length;G<X;G++){let Q=M[G];if(d(Q)){let se=C(I),ce=n.get(Q).__webglTexture;t.bindTexture(se,ce),w(se),t.unbindTexture()}}}let ot=[],Rt=[];function Xt(I){if(I.samples>0){if(Mt(I)===!1){let M=I.textures,G=I.width,X=I.height,Q=i.COLOR_BUFFER_BIT,se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(I),$=M.length>1;if($)for(let le=0;le<M.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let te=I.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<M.length;le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Pe=n.get(M[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,G,X,0,0,G,X,Q,i.NEAREST),l===!0&&(ot.length=0,Rt.length=0,ot.push(i.COLOR_ATTACHMENT0+le),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ot.push(se),Rt.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<M.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let Pe=n.get(M[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function bt(I){return Math.min(s.maxSamples,I.samples)}function Mt(I){let M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(I){let M=a.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function Dt(I,M){let G=I.colorSpace,X=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==nn&&G!==bi&&(qe.getTransfer(G)===tt?(X!==bn||Q!==fn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",G)),M}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=We,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ry(i,e){function t(n,s=bi){let r,a=qe.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return i.BYTE;if(n===$l)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===bn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===tr)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===$r||n===ea||n===ta||n===na)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Wo||n===qo||n===Xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Ko||n===Jo||n===Yo||n===Zo||n===ia||n===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Ko)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$o||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===fc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===bc||n===sa||n===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:ay,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends Wn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,b=null,g=typeof XRWebGLBinding<"u",m=new Ph,d={},w=t.getContextAttributes(),C=null,_=null,v=[],S=[],y=new Be,x=null,A=null,T=new At;T.viewport=new st;let R=new At;R.viewport=new st;let P=[T,R],F=new Po,L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=v[q];return j===void 0&&(j=new Hs,v[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=v[q];return j===void 0&&(j=new Hs,v[q]=j),j.getGripSpace()},this.getHand=function(q){let j=v[q];return j===void 0&&(j=new Hs,v[q]=j),j.getHandSpace()};function B(q){let j=S.indexOf(q.inputSource);if(j===-1)return;let ie=v[j];ie!==void 0&&(ie.update(q.inputSource,q.frame,c||a),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<v.length;q++){let j=S[q];j!==null&&(S[q]=null,v[q].disconnect(j))}L=null,U=null,m.reset();for(let q in d)delete d[q];if(e.setRenderTarget(C),p=null,f=null,u=null,s=null,_=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(y.width,y.height,!1),A!==null){let q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(y),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,oe=null,de=null;w.depth&&(de=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=w.stencil?Bi:Vn,oe=w.stencil?er:Nn);let Ne={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new qt(f.textureWidth,f.textureHeight,{format:bn,type:fn,depthTexture:new Fi(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ie={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new qt(p.framebufferWidth,p.framebufferHeight,{format:bn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let j=0;j<q.removed.length;j++){let ie=q.removed[j],oe=S.indexOf(ie);oe>=0&&(S[oe]=null,v[oe].disconnect(ie))}for(let j=0;j<q.added.length;j++){let ie=q.added[j],oe=S.indexOf(ie);if(oe===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=S.length){S.push(ie),oe=Ne;break}else if(S[Ne]===null){S[Ne]=ie,oe=Ne;break}if(oe===-1)break}let de=v[oe];de&&de.connect(ie)}}let H=new D,Z=new D;function J(q,j,ie){H.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);let oe=H.distanceTo(Z),de=j.projectionMatrix.elements,Ne=ie.projectionMatrix.elements,Ge=de[14]/(de[10]-1),we=de[14]/(de[10]+1),We=(de[9]+1)/de[5],Qe=(de[9]-1)/de[5],ae=(de[8]-1)/de[0],ot=(Ne[8]+1)/Ne[0],Rt=Ge*ae,Xt=Ge*ot,bt=oe/(-ae+ot),Mt=bt*-ae;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Mt),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),de[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let O=Ge+bt,Dt=we+bt,Ye=Rt-Mt,I=Xt+(oe-Mt),M=We*we/Dt*O,G=Qe*we/Dt*O;q.projectionMatrix.makePerspective(Ye,I,M,G,O,Dt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ye(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ie=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),F.near=R.near=T.near=j,F.far=R.far=T.far=ie,(L!==F.near||U!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,U=F.far),F.layers.mask=q.layers.mask|6,T.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let oe=q.parent,de=F.cameras;ye(F,oe);for(let Ne=0;Ne<de.length;Ne++)ye(de[Ne],oe);de.length===2?J(F,T,R):F.projectionMatrix.copy(T.projectionMatrix),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),Se(q,F,oe)};function Se(q,j,ie){ie===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return d[q]};let je=null;function De(q,j){if(h=j.getViewerPose(c||a),b=j,h!==null){let ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let oe=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,oe=!0);for(let we=0;we<ie.length;we++){let We=ie[we],Qe=null;if(p!==null)Qe=p.getViewport(We);else{let ot=u.getViewSubImage(f,We);Qe=ot.viewport,we===0&&(e.setRenderTargetTextures(_,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(_))}let ae=P[we];ae===void 0&&(ae=new At,ae.layers.enable(we),ae.viewport=new st,P[we]=ae),ae.matrix.fromArray(We.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(We.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),we===0&&(F.matrix.copy(ae.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),oe===!0&&F.cameras.push(ae)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let we=u.getDepthInformation(ie[0]);we&&we.isValid&&we.texture&&m.init(we,s.renderState)}if(de&&de.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let we=0;we<ie.length;we++){let We=ie[we].camera;if(We){let Qe=d[We];Qe||(Qe=new zr,d[We]=Qe);let ae=u.getCameraImage(We);Qe.sourceTexture=ae}}}}for(let ie=0;ie<v.length;ie++){let oe=S[ie],de=v[ie];oe!==null&&de!==void 0&&de.update(oe,j,c||a)}je&&je(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),b=null}let re=new Hd;re.setAnimationLoop(De),this.setAnimationLoop=function(q){je=q},this.dispose=function(){}}},cy=new Me,Kd=new ke;Kd.set(-1,0,0,0,1,0,0,0,1);function ly(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,lh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,C,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),b(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,w,C):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w=e.get(d),C=w.envMap,_=w.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(_)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=C*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let S=v.program;n.uniformBlockBinding(_,S)}function c(_,v){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",w));let y=v.program;n.updateUBOMapping(_,y);let x=e.render.frame;r[_.id]!==x&&(f(_),r[_.id]=x)}function h(_){let v=u();_.__bindingPointIndex=v;let S=i.createBuffer(),y=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,y,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],S=_.uniforms,y=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,A=S.length;x<A;x++){let T=S[x];if(Array.isArray(T))for(let R=0,P=T.length;R<P;R++)p(T[R],x,R,y);else p(T,x,0,y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,v,S,y){if(g(_,v,S,y)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let T=0;for(let R=0;R<A.length;R++){let P=A[R],F=d(P);b(P,_.__data,T),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(T+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function b(_,v,S){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,S)}function g(_,v,S,y){let x=_.value,A=v+"_"+S;if(y[A]===void 0)return typeof x=="number"||typeof x=="boolean"?y[A]=x:ArrayBuffer.isView(x)?y[A]=x.slice():y[A]=x.clone(),!0;{let T=y[A];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return y[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function m(_){let v=_.uniforms,S=0,y=16;for(let A=0,T=v.length;A<T;A++){let R=Array.isArray(v[A])?v[A]:[v[A]];for(let P=0,F=R.length;P<F;P++){let L=R[P],U=Array.isArray(L.value)?L.value:[L.value];for(let B=0,z=U.length;B<z;B++){let Y=U[B],H=d(Y),Z=S%y,J=Z%H.boundary,ye=Z+J;S+=J,ye!==0&&y-ye<H.storage&&(S+=y-ye),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=H.storage}}}let x=S%y;return x>0&&(S+=y-x),_.__size=S,_.__cache={},this}function d(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),v}function w(_){let v=_.target;v.removeEventListener("dispose",w);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function C(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function uy(){return Yn===null&&(Yn=new Li(fy,16,16,zi,Un),Yn.name="DFG_LUT",Yn.minFilter=St,Yn.magFilter=St,Yn.wrapS=yn,Yn.wrapT=yn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var wc=class{constructor(e={}){let{canvas:t=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=fn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let g=p,m=new Set([Ho,Go,zo]),d=new Set([fn,Nn,$s,er,ko,Bo]),w=new Uint32Array(4),C=new Int32Array(4),_=new D,v=null,S=null,y=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1,P=null,F=null,L=null,U=null;this._outputColorSpace=vt;let B=0,z=0,Y=null,H=-1,Z=null,J=new st,ye=new st,Se=null,je=new Ce(0),De=0,re=t.width,q=t.height,j=1,ie=null,oe=null,de=new st(0,0,re,q),Ne=new st(0,0,re,q),Ge=!1,we=new qs,We=!1,Qe=!1,ae=new Me,ot=new D,Rt=new st,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Mt(){return Y===null?j:1}let O=n;function Dt(E,N){return t.getContext(E,N)}let Ye,I,M,G,X,Q,se,ce,$,te,le,Pe,pe,he,Le,Ue,ze,k,fe,ee,ue,xe,ne;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",An,!1),O===null){let N="webgl2";if(O=Dt(N,E),O===null)throw Dt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(E){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",An,!1),Oe("WebGLRenderer: "+E.message),E}function Fe(){Ye=new _x(O),Ye.init(),ue=new ry(O,Ye),I=new lx(O,Ye,e,ue),M=new iy(O,Ye),I.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),F=O.createFramebuffer(),L=O.createFramebuffer(),U=O.createFramebuffer(),G=new Mx(O),X=new V_,Q=new sy(O,Ye,M,X,I,ue,G),se=new xx(T),ce=new wm(O),xe=new ox(O,ce),$=new yx(O,ce,G,xe),te=new wx(O,$,ce,xe,G),k=new Sx(O,I,Q),Le=new hx(X),le=new H_(T,se,Ye,I,xe,Le),Pe=new ly(T,X),pe=new q_,he=new Z_(Ye),ze=new ax(T,se,M,te,b,l),Ue=new ny(T,te,I),ne=new hy(O,G,I,M),fe=new cx(O,Ye,G),ee=new vx(O,Ye,G),G.programs=le.programs,T.capabilities=I,T.extensions=Ye,T.properties=X,T.renderLists=pe,T.shadowMap=Ue,T.state=M,T.info=G}g!==fn&&(A=new Ex(g,t.width,t.height,o,s,r));let Te=new Lh(T,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(re,q,!1))},this.getSize=function(E){return E.set(re,q)},this.setSize=function(E,N,K=!0){if(Te.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}re=E,q=N,t.width=Math.floor(E*j),t.height=Math.floor(N*j),K===!0&&(t.style.width=E+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(re*j,q*j).floor()},this.setDrawingBufferSize=function(E,N,K){re=E,q=N,j=K,t.width=Math.floor(E*K),t.height=Math.floor(N*K),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(g===fn){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(de)},this.setViewport=function(E,N,K,V){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,N,K,V),M.viewport(J.copy(de).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,N,K,V){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,N,K,V),M.scissor(ye.copy(Ne).multiplyScalar(j).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){M.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,K=!0){let V=0;if(E){let W=!1;if(Y!==null){let be=Y.texture.format;W=m.has(be)}if(W){let be=Y.texture.type,ve=d.has(be),ge=ze.getClearColor(),Ae=ze.getClearAlpha(),Re=ge.r,He=ge.g,Ke=ge.b;ve?(w[0]=Re,w[1]=He,w[2]=Ke,w[3]=Ae,O.clearBufferuiv(O.COLOR,0,w)):(C[0]=Re,C[1]=He,C[2]=Ke,C[3]=Ae,O.clearBufferiv(O.COLOR,0,C))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",An,!1),ze.dispose(),pe.dispose(),he.dispose(),X.dispose(),se.dispose(),te.dispose(),xe.dispose(),ne.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Gf),Te.removeEventListener("sessionend",Hf),Wi.stop()};function dt(E){E.preventDefault(),Ir("WebGLRenderer: Context Lost."),R=!0}function $e(){Ir("WebGLRenderer: Context Restored."),R=!1;let E=G.autoReset,N=Ue.enabled,K=Ue.autoUpdate,V=Ue.needsUpdate,W=Ue.type;Fe(),G.autoReset=E,Ue.enabled=N,Ue.autoUpdate=K,Ue.needsUpdate=V,Ue.type=W}function An(E){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bn(E){let N=E.target;N.removeEventListener("dispose",Bn),d0(N)}function d0(E){p0(E),X.remove(E)}function p0(E){let N=X.get(E).programs;N!==void 0&&(N.forEach(function(K){le.releaseProgram(K)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,K,V,W,be){N===null&&(N=Xt);let ve=W.isMesh&&W.matrixWorld.determinantAffine()<0,ge=b0(E,N,K,V,W);M.setMaterial(V,ve);let Ae=K.index,Re=1;if(V.wireframe===!0){if(Ae=$.getWireframeAttribute(K),Ae===void 0)return;Re=2}let He=K.drawRange,Ke=K.attributes.position,Ee=He.start*Re,et=(He.start+He.count)*Re;be!==null&&(Ee=Math.max(Ee,be.start*Re),et=Math.min(et,(be.start+be.count)*Re)),Ae!==null?(Ee=Math.max(Ee,0),et=Math.min(et,Ae.count)):Ke!=null&&(Ee=Math.max(Ee,0),et=Math.min(et,Ke.count));let Nt=et-Ee;if(Nt<0||Nt===1/0)return;xe.setup(W,V,ge,K,Ae);let xt,ft=fe;if(Ae!==null&&(xt=ce.get(Ae),ft=ee,ft.setIndex(xt)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Mt()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(W.isLine){let jt=V.linewidth;jt===void 0&&(jt=1),M.setLineWidth(jt*Mt()),W.isLineSegments?ft.setMode(O.LINES):W.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else W.isPoints?ft.setMode(O.POINTS):W.isSprite&&ft.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let jt=W._multiDrawStarts,_e=W._multiDrawCounts,$t=W._multiDrawCount,Ze=Ae?ce.get(Ae).bytesPerElement:1,xn=X.get(V).currentProgram.getUniforms();for(let zn=0;zn<$t;zn++)xn.setValue(O,"_gl_DrawID",zn),ft.render(jt[zn]/Ze,_e[zn])}else if(W.isInstancedMesh)ft.renderInstances(Ee,Nt,W.count);else if(K.isInstancedBufferGeometry){let jt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_e=Math.min(K.instanceCount,jt);ft.renderInstances(Ee,Nt,_e)}else ft.render(Ee,Nt)};function zf(E,N,K,V){P!==null&&E.isNodeMaterial&&P.setObject(V,E),We===!0&&Le.setState(E,K,!1),E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=zt,E.needsUpdate=!0,Pa(E,N,V),E.side=Kn,E.needsUpdate=!0,Pa(E,N,V),E.side=hn):Pa(E,N,V)}this.compile=function(E,N,K=null){K===null&&(K=E),P!==null&&P.renderStart(E,N,K),S=he.get(K),S.init(N),x.push(S),K.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),E!==K&&E.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),Qe=this.localClippingEnabled,We=Le.init(this.clippingPlanes,Qe),We===!0&&Le.setGlobalState(this.clippingPlanes,N),P!==null&&Ue.render(S.state.shadowsArray,K,N);let V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let be=W.material;if(be)if(Array.isArray(be))for(let ve=0;ve<be.length;ve++){let ge=be[ve];zf(ge,K,N,W),V.add(ge)}else zf(be,K,N,W),V.add(be)}),S=x.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(E,N,K=null){let V=this.compile(E,N,K);return new Promise(W=>{function be(){if(V.forEach(function(ve){let Ae=X.get(ve).currentProgram;(Ae===void 0||Ae.isReady())&&V.delete(ve)}),V.size===0){W(E);return}setTimeout(be,10)}Ye.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let tl=null;function m0(E){tl&&tl(E)}function Gf(){Wi.stop()}function Hf(){Wi.start()}let Wi=new Hd;Wi.setAnimationLoop(m0),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(E){tl=E,Te.setAnimationLoop(E),E===null?Wi.stop():Wi.start()},Te.addEventListener("sessionstart",Gf),Te.addEventListener("sessionend",Hf),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(E,N);let K=Te.enabled===!0&&Te.isPresenting===!0,V=A!==null&&(Y===null||K)&&A.begin(T,Y);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(N),N=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,N,Y),S=he.get(E,x.length),S.init(N),S.state.textureUnits=Q.getTextureUnits(),x.push(S),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),we.setFromProjectionMatrix(ae,Pn,N.reversedDepth),Qe=this.localClippingEnabled,We=Le.init(this.clippingPlanes,Qe),v=pe.get(E,y.length),v.init(),y.push(v),Te.enabled===!0&&Te.isPresenting===!0){let ve=T.xr.getDepthSensingMesh();ve!==null&&nl(ve,N,-1/0,T.sortObjects)}nl(E,N,0,T.sortObjects),v.finish(),P!==null&&P.updateLights(S.state.lightsArray),T.sortObjects===!0&&v.sort(ie,oe),bt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,bt&&ze.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Le.beginShadows();let W=S.state.shadowsArray;if(Ue.render(W,E,N),We===!0&&Le.endShadows(),(V&&A.hasRenderPass())===!1){let ve=v.opaque,ge=v.transmissive;if(S.setupLights(),N.isArrayCamera){let Ae=N.cameras;if(ge.length>0)for(let Re=0,He=Ae.length;Re<He;Re++){let Ke=Ae[Re];Wf(ve,ge,E,Ke)}bt&&ze.render(E);for(let Re=0,He=Ae.length;Re<He;Re++){let Ke=Ae[Re];Vf(v,E,Ke,Ke.viewport)}}else ge.length>0&&Wf(ve,ge,E,N),bt&&ze.render(E),Vf(v,E,N)}Y!==null&&z===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),V&&A.end(T),E.isScene===!0&&E.onAfterRender(T,E,N),xe.resetDefaultState(),H=-1,Z=null,x.pop(),x.length>0?(S=x[x.length-1],Q.setTextureUnits(S.state.textureUnits),We===!0&&Le.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?v=y[y.length-1]:v=null,P!==null&&P.renderEnd()};function nl(E,N,K,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(we)){V&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);let ve=te.update(E),ge=E.material;ge.visible&&v.push(E,ve,ge,K,Rt.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(we))){let ve=te.update(E),ge=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Rt.copy(ve.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(ge)){let Ae=ve.groups;for(let Re=0,He=Ae.length;Re<He;Re++){let Ke=Ae[Re],Ee=ge[Ke.materialIndex];Ee&&Ee.visible&&v.push(E,ve,Ee,K,Rt.z,Ke,N)}}else ge.visible&&v.push(E,ve,ge,K,Rt.z,null,N)}}let be=E.children;for(let ve=0,ge=be.length;ve<ge;ve++)nl(be[ve],N,K,V)}function Vf(E,N,K,V){let{opaque:W,transmissive:be,transparent:ve}=E;S.setupLightsView(K),We===!0&&Le.setGlobalState(T.clippingPlanes,K),V&&M.viewport(J.copy(V)),W.length>0&&Ia(W,N,K),be.length>0&&Ia(be,N,K),ve.length>0&&Ia(ve,N,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Wf(E,N,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Ee=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new qt(1,1,{generateMipmaps:!0,type:Ee?Un:fn,minFilter:Dn,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let be=S.state.transmissionRenderTarget[V.id],ve=V.viewport||J;be.setSize(ve.z*T.transmissionResolutionScale,ve.w*T.transmissionResolutionScale);let ge=T.getRenderTarget(),Ae=T.getActiveCubeFace(),Re=T.getActiveMipmapLevel();T.setRenderTarget(be),T.getClearColor(je),De=T.getClearAlpha(),De<1&&T.setClearColor(16777215,.5),T.clear(),bt&&ze.render(K);let He=T.toneMapping;T.toneMapping=Fn;let Ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),We===!0&&Le.setGlobalState(T.clippingPlanes,V),Ia(E,K,V),Q.updateMultisampleRenderTarget(be),Q.updateRenderTargetMipmap(be),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let et=0,Nt=N.length;et<Nt;et++){let xt=N[et],{object:ft,geometry:jt,material:_e,group:$t}=xt;if(_e.side===hn&&ft.layers.test(V.layers)){let Ze=_e.side;_e.side=zt,_e.needsUpdate=!0,qf(ft,K,V,jt,_e,$t),_e.side=Ze,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(Q.updateMultisampleRenderTarget(be),Q.updateRenderTargetMipmap(be))}T.setRenderTarget(ge,Ae,Re),T.setClearColor(je,De),Ke!==void 0&&(V.viewport=Ke),T.toneMapping=He}function Ia(E,N,K){let V=N.isScene===!0?N.overrideMaterial:null;for(let W=0,be=E.length;W<be;W++){let ve=E[W],{object:ge,geometry:Ae,group:Re}=ve,He=ve.material;He.allowOverride===!0&&V!==null&&(He=V),ge.layers.test(K.layers)&&qf(ge,N,K,Ae,He,Re)}}function qf(E,N,K,V,W,be){P!==null&&W.isNodeMaterial&&P.setObject(E,W),E.onBeforeRender(T,N,K,V,W,be),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(T,N,K,V,E,be),W.transparent===!0&&W.side===hn&&W.forceSinglePass===!1?(W.side=zt,W.needsUpdate=!0,T.renderBufferDirect(K,N,V,W,E,be),W.side=Kn,W.needsUpdate=!0,T.renderBufferDirect(K,N,V,W,E,be),W.side=hn):T.renderBufferDirect(K,N,V,W,E,be),E.onAfterRender(T,N,K,V,W,be)}function Pa(E,N,K){N.isScene!==!0&&(N=Xt);let V=X.get(E),W=S.state.lights,be=S.state.shadowsArray,ve=W.state.version,ge=le.getParameters(E,W.state,be,N,K,S.state.lightProbeGridArray),Ae=le.getProgramCacheKey(ge),Re=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=se.get(E.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",Bn),Re=new Map,V.programs=Re);let Ke=Re.get(Ae);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===ve)return jf(E,ge),Ke}else ge.uniforms=le.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,K,ge),E.onBeforeCompile(ge,T),Ke=le.acquireProgram(ge,Ae),Re.set(Ae,Ke),V.uniforms=ge.uniforms;let Ee=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=Le.uniform),jf(E,ge),V.needsLights=_0(E),V.lightsStateVersion=ve,V.needsLights&&(Ee.ambientLightColor.value=W.state.ambient,Ee.lightProbe.value=W.state.probe,Ee.sunLights.value=W.state.sun,Ee.sunLightShadows.value=W.state.sunShadow,Ee.directionalLights.value=W.state.directional,Ee.directionalLightShadows.value=W.state.directionalShadow,Ee.spotLights.value=W.state.spot,Ee.spotLightShadows.value=W.state.spotShadow,Ee.rectAreaLights.value=W.state.rectArea,Ee.ltc_1.value=W.state.rectAreaLTC1,Ee.ltc_2.value=W.state.rectAreaLTC2,Ee.pointLights.value=W.state.point,Ee.pointLightShadows.value=W.state.pointShadow,Ee.hemisphereLights.value=W.state.hemi,Ee.sunShadowMatrix.value=W.state.sunShadowMatrix,Ee.sunShadowCascade.value=W.state.sunShadowCascade,Ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ee.spotLightMatrix.value=W.state.spotLightMatrix,Ee.spotLightMap.value=W.state.spotLightMap,Ee.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=Ke,V.uniformsList=null,Ke}function Xf(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=ar.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function jf(E,N){let K=X.get(E);K.outputColorSpace=N.outputColorSpace,K.batching=N.batching,K.batchingColor=N.batchingColor,K.instancing=N.instancing,K.instancingColor=N.instancingColor,K.instancingMorph=N.instancingMorph,K.skinning=N.skinning,K.morphTargets=N.morphTargets,K.morphNormals=N.morphNormals,K.morphColors=N.morphColors,K.morphTargetsCount=N.morphTargetsCount,K.numClippingPlanes=N.numClippingPlanes,K.numIntersection=N.numClipIntersection,K.vertexAlphas=N.vertexAlphas,K.vertexTangents=N.vertexTangents,K.toneMapping=N.toneMapping}function g0(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let K=0,V=E.length;K<V;K++){let W=E[K];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function b0(E,N,K,V,W){N.isScene!==!0&&(N=Xt),Q.resetTextureUnits();let be=N.fog,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,ge=Y===null?T.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:qe.workingColorSpace,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=se.get(V.envMap||ve,Ae),He=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color,xt=Fn;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(xt=T.toneMapping);let ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,jt=ft!==void 0?ft.length:0,_e=X.get(V),$t=S.state.lights;if(We===!0&&(Qe===!0||E!==Z)){let pt=E===Z&&V.id===H;Le.setState(V,E,pt)}let Ze=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==$t.state.version||_e.outputColorSpace!==ge||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==Re||V.fog===!0&&_e.fog!==be||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Le.numPlanes||_e.numIntersection!==Le.numIntersection)||_e.vertexAlphas!==He||_e.vertexTangents!==Ke||_e.morphTargets!==Ee||_e.morphNormals!==et||_e.morphColors!==Nt||_e.toneMapping!==xt||_e.morphTargetsCount!==jt||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,_e.__version=V.version);let xn=_e.currentProgram;Ze===!0&&(xn=Pa(V,N,W),P&&V.isNodeMaterial&&P.onUpdateProgram(V,xn,_e));let zn=!1,_i=!1,_s=!1,ct=xn.getUniforms(),Ct=_e.uniforms;if(M.useProgram(xn.program)&&(zn=!0,_i=!0,_s=!0),V.id!==H&&(H=V.id,_i=!0),_e.needsLights){let pt=g0(S.state.lightProbeGridArray,W);_e.lightProbeGrid!==pt&&(_e.lightProbeGrid=pt,_i=!0)}if(zn||Z!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",E.projectionMatrix),ct.setValue(O,"viewMatrix",E.matrixWorldInverse);let vi=ct.map.cameraPosition;vi!==void 0&&vi.setValue(O,ot.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,_i=!0,_s=!0)}if(_e.needsLights&&($t.state.sunShadowMap.length>0&&ct.setValue(O,"sunShadowMap",$t.state.sunShadowMap,Q),$t.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",$t.state.directionalShadowMap,Q),$t.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",$t.state.spotShadowMap,Q),$t.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",$t.state.pointShadowMap,Q)),W.isSkinnedMesh){ct.setOptional(O,W,"bindMatrix"),ct.setOptional(O,W,"bindMatrixInverse");let pt=W.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ct.setValue(O,"boneTexture",pt.boneTexture,Q))}W.isBatchedMesh&&(ct.setOptional(O,W,"batchingTexture"),ct.setValue(O,"batchingTexture",W._matricesTexture,Q),ct.setOptional(O,W,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",W._indirectTexture,Q),ct.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",W._colorsTexture,Q));let yi=K.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&k.update(W,K,xn),(_i||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,ct.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Ct.envMapIntensity.value=N.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=uy()),_i){if(ct.setValue(O,"toneMappingExposure",T.toneMappingExposure),_e.needsLights&&x0(Ct,_s),be&&V.fog===!0&&Pe.refreshFogUniforms(Ct,be),Pe.refreshMaterialUniforms(Ct,V,j,q,S.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){let pt=_e.lightProbeGrid;Ct.probesSH.value=pt.texture,Ct.probesMin.value.copy(pt.boundingBox.min),Ct.probesMax.value.copy(pt.boundingBox.max),Ct.probesResolution.value.copy(pt.resolution)}ar.upload(O,Xf(_e),Ct,Q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ar.upload(O,Xf(_e),Ct,Q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(O,"center",W.center),ct.setValue(O,"modelViewMatrix",W.modelViewMatrix),ct.setValue(O,"normalMatrix",W.normalMatrix),ct.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let pt=V.uniformsGroups;for(let vi=0,ys=pt.length;vi<ys;vi++){let Jf=pt[vi];ne.update(Jf,xn),ne.bind(Jf,xn)}}return xn}function x0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function _0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(E,N,K){let V=X.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=N,X.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let K=X.get(E);K.__webglFramebuffer=N,K.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,K=0){Y=E,B=N,z=K;let V=null,W=!1,be=!1;if(E){let ge=X.get(E);if(ge.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),J.copy(E.viewport),ye.copy(E.scissor),Se=E.scissorTest,M.viewport(J),M.scissor(ye),M.setScissorTest(Se),H=-1;return}else if(ge.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(ge.__hasExternalTextures)Q.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let He=E.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&X.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(be=!0);let Re=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?V=Re[N][K]:V=Re[N],W=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?V=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[K]:V=Re,J.copy(E.viewport),ye.copy(E.scissor),Se=E.scissorTest}else J.copy(de).multiplyScalar(j).floor(),ye.copy(Ne).multiplyScalar(j).floor(),Se=Ge;if(K!==0&&(V=F),M.bindFramebuffer(O.FRAMEBUFFER,V)&&M.drawBuffers(E,V),M.viewport(J),M.scissor(ye),M.setScissorTest(Se),W){let ge=X.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,K)}else if(be){let ge=N;for(let Ae=0;Ae<E.textures.length;Ae++){let Re=X.get(E.textures[Ae]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,K,ge)}}else if(E!==null&&K!==0){let ge=X.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,K)}H=-1};function Kf(E){let N=X.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=I.textureFormatReadable(E.format),N.__typeReadable=I.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,K,V,W,be,ve,ge=0){if(!(E&&E.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){M.bindFramebuffer(O.FRAMEBUFFER,Ae);try{let Re=E.textures[ge],He=Re.format,Ke=Re.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Ee=Kf(Re);if(Ee.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&K>=0&&K<=E.height-W&&O.readPixels(N,K,V,W,ue.convert(He),ue.convert(Ke),be)}finally{let Re=Y!==null?X.get(Y).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,N,K,V,W,be,ve,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae)if(N>=0&&N<=E.width-V&&K>=0&&K<=E.height-W){M.bindFramebuffer(O.FRAMEBUFFER,Ae);let Re=E.textures[ge],He=Re.format,Ke=Re.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Ee=Kf(Re);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(N,K,V,W,ue.convert(He),ue.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Nt=Y!==null?X.get(Y).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Nt);let xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await md(O,xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(et),O.deleteSync(xt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,K=0){let V=Math.pow(2,-K),W=Math.floor(E.image.width*V),be=Math.floor(E.image.height*V),ve=N!==null?N.x:0,ge=N!==null?N.y:0;Q.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,ve,ge,W,be),M.unbindTexture()},this.copyTextureToTexture=function(E,N,K=null,V=null,W=0,be=0){let ve,ge,Ae,Re,He,Ke,Ee,et,Nt,xt=E.isCompressedTexture?E.mipmaps[be]:E.image;if(K!==null)ve=K.max.x-K.min.x,ge=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,Re=K.min.x,He=K.min.y,Ke=K.isBox3?K.min.z:0;else{let Ct=Math.pow(2,-W);ve=Math.floor(xt.width*Ct),ge=Math.floor(xt.height*Ct),E.isDataArrayTexture?Ae=xt.depth:E.isData3DTexture?Ae=Math.floor(xt.depth*Ct):Ae=1,Re=0,He=0,Ke=0}V!==null?(Ee=V.x,et=V.y,Nt=V.z):(Ee=0,et=0,Nt=0);let ft=ue.convert(N.format),jt=ue.convert(N.type),_e;N.isData3DTexture?(Q.setTexture3D(N,0),_e=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Q.setTexture2DArray(N,0),_e=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(N,0),_e=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let $t=M.getParameter(O.UNPACK_ROW_LENGTH),Ze=M.getParameter(O.UNPACK_IMAGE_HEIGHT),xn=M.getParameter(O.UNPACK_SKIP_PIXELS),zn=M.getParameter(O.UNPACK_SKIP_ROWS),_i=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,xt.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),M.pixelStorei(O.UNPACK_SKIP_ROWS,He),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);let _s=E.isDataArrayTexture||E.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let Ct=X.get(E),yi=X.get(N),pt=X.get(Ct.__renderTarget),vi=X.get(yi.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,pt.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let ys=0;ys<Ae;ys++)_s&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(E).__webglTexture,W,Ke+ys),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(N).__webglTexture,be,Nt+ys)),O.blitFramebuffer(Re,He,ve,ge,Ee,et,ve,ge,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||X.has(E)){let Ct=X.get(E),yi=X.get(N);M.bindFramebuffer(O.READ_FRAMEBUFFER,L),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let pt=0;pt<Ae;pt++)_s?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,W,Ke+pt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ct.__webglTexture,W),ct?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yi.__webglTexture,be,Nt+pt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yi.__webglTexture,be),W!==0?O.blitFramebuffer(Re,He,ve,ge,Ee,et,ve,ge,O.COLOR_BUFFER_BIT,O.NEAREST):ct?O.copyTexSubImage3D(_e,be,Ee,et,Nt+pt,Re,He,ve,ge):O.copyTexSubImage2D(_e,be,Ee,et,Re,He,ve,ge);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(_e,be,Ee,et,Nt,ve,ge,Ae,ft,jt,xt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(_e,be,Ee,et,Nt,ve,ge,Ae,ft,xt.data):O.texSubImage3D(_e,be,Ee,et,Nt,ve,ge,Ae,ft,jt,xt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,Ee,et,ve,ge,ft,jt,xt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,Ee,et,xt.width,xt.height,ft,xt.data):O.texSubImage2D(O.TEXTURE_2D,be,Ee,et,ve,ge,ft,jt,xt);M.pixelStorei(O.UNPACK_ROW_LENGTH,$t),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze),M.pixelStorei(O.UNPACK_SKIP_PIXELS,xn),M.pixelStorei(O.UNPACK_SKIP_ROWS,zn),M.pixelStorei(O.UNPACK_SKIP_IMAGES,_i),be===0&&N.generateMipmaps&&O.generateMipmap(_e),M.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){B=0,z=0,Y=null,M.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};function Fh(i,e){if(e===sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===nr||e===ra){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===nr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Tc(i){let e=new Map,t=new Map,n=i.clone();return Jd(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Jd(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Jd(i.children[n],e.children[n],t)}var Rc=class extends jn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Cc(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cc(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new $h(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=gi.extractUrlBase(e);a=gi.resolveURL(c,this.path)}else a=gi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ks(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ep){try{a[Xe.KHR_BINARY_GLTF]=new ef(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new cf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new kh;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new tf(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new nf;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new sf;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function dy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Pt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Oh=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Oi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new as(h),c.distance=u;break;case"spot":c=new Kr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},kh=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let s=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(s)}},Bh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},zh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(r,r)}return Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},qh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],nn),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],nn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Jh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Yh=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Zh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Qh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Cc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},$h=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let b of u){let g=new Me,m=new D,d=new mt,w=new D(1,1,1),C=new ns(b.geometry,b.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,v),l.SCALE&&w.fromBufferAttribute(l.SCALE,v),C.setMatrixAt(v,g.compose(m,d,w));let _=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];C.instanceColor=new fi(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(_===null){let y=C.geometry;_=new Ot,_.name=y.name;for(let x in y.attributes)_.setAttribute(x,y.attributes[x]);for(let x in y.morphAttributes)_.morphAttributes[x]=y.morphAttributes[x];y.index!==null&&_.setIndex(y.index),_.morphTargetsRelative=y.morphTargetsRelative;for(let x of y.groups)_.addGroup(x.start,x.count,x.materialIndex);y.boundingBox!==null&&(_.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(_.boundingSphere=y.boundingSphere.clone()),_.drawRange.start=y.drawRange.start,_.drawRange.count=y.drawRange.count,_.userData=Object.assign({},y.userData),C.geometry=_}let S=l[v];_.setAttribute(v,new fi(S.array,S.itemSize,S.normalized))}gt.prototype.copy.call(C,b),this.parser.assignFinalMaterial(C),p.push(C)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},ep="glTF",la=12,Yd={JSON:1313821514,BIN:5130562},ef=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,la),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-la,r=new DataView(e,la),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Yd.JSON){let c=new Uint8Array(e,la+a,o);this.content=n.decode(c)}else if(l===Yd.BIN){let c=la+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=af[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=af[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=lr[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let b in p.attributes){let g=p.attributes[b],m=l[b];m!==void 0&&(g.normalized=m)}u(p)},o,c,nn,f)})})}},nf=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},sf=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},Ic=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,b=e*c,g=b-c,m=-2*p+3*f,d=p-f,w=1-m,C=d-f+u;for(let _=0;_!==o;_++){let v=a[g+_+o],S=a[g+_+l]*h,y=a[b+_+o],x=a[b+_]*h;r[_]=w*v+C*S+m*y+d*x}return r}},py=new mt,rf=class extends Ic{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return py.fromArray(r).normalize().toArray(r),r}},vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zd={9728:It,9729:St,9984:Uo,9985:Qs,9986:ls,9987:Dn},Qd={33071:yn,33648:Os,10497:Ci},Dh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},af={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},my={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Yi},Nh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new qn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function by(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function xy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _y(i){let e,t=i.extensions&&i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uh(t.attributes):e=i.indices+":"+Uh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Uh(i.targets[n]);return e}function Uh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function of(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var vy=new Me,cf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new qr(this.options.manager):this.textureLoader=new Jr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ks(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return us(r,o,s),Qn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(gi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Dh[s.type],o=lr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new nt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Dh[s.type],c=lr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0,g,m;if(p&&p!==u){let d=Math.floor(f/p),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,C=t.cache.get(w);C||(g=new c(o,d*p,s.count*p/h),C=new Vs(g,p/h),t.cache.add(w,C)),m=new Ws(C,l,f%p/h,b)}else o===null?g=new c(s.count*l):g=new c(o,f,s.count*l),m=new nt(g,l,b);if(s.sparse!==void 0){let d=Dh.SCALAR,w=lr[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,v=new w(a[1],C,s.sparse.count*d),S=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new nt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,x=v.length;y<x;y++){let A=v[y];if(m.setX(A,S[y*l]),l>=2&&m.setY(A,S[y*l+1]),l>=3&&m.setZ(A,S[y*l+2]),l>=4&&m.setW(A,S[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Zd[f.magFilter]||St,h.minFilter=Zd[f.minFilter]||Dn,h.wrapS=Qd[f.wrapS]||Ci,h.wrapT=Qd[f.wrapT]||Ci,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==St,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let m=new Bt(g);m.needsUpdate=!0,f(m)}),t.load(gi.resolveURL(u,r.path),b,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Qn(u,a),u.userData.mimeType=a.mimeType||yy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new js,Yt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Xs,Yt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return qn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){let u=s[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],nn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hn);let h=r.alphaMode||Nh.OPAQUE;if(h===Nh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Nh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==sn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==sn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==sn){let u=r.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],nn)}return r.emissiveTexture!==void 0&&a!==sn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Qn(u,r),t.associations.set(u,{materials:e}),r.extensions&&us(s,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $d(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=_y(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=$d(new Ot,c,t),c.mode===vn.TRIANGLE_STRIP?f=f.then(p=>Fh(p,ra)):c.mode===vn.TRIANGLE_FAN&&(f=f.then(p=>Fh(p,nr))),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?gy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,b=h.length;p<b;p++){let g=h[p],m=a[p],d,w=c[p];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0){let C=r.isSkinnedMesh===!0,_=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");C&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),d=C&&_?new Ii(g,w):new lt(g,w),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(m.mode===vn.LINES)d=new Nr(g,w);else if(m.mode===vn.LINE_STRIP)d=new is(g,w);else if(m.mode===vn.LINE_LOOP)d=new Ur(g,w);else if(m.mode===vn.POINTS)d=new Or(g,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&xy(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Qn(d,r),m.extensions&&us(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,b=u.length;p<b;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&us(s,u[0],r),u[0];let f=new Et;r.extensions&&us(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,b=u.length;p<b;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(ch.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ui(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Me;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ts(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],b=s.samplers[p.sampler],g=p.target,m=g.node,d=s.parameters!==void 0?s.parameters[b.input]:b.input,w=s.parameters!==void 0?s.parameters[b.output]:b.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",w)),c.push(b),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],b=u[2],g=u[3],m=u[4],d=[];for(let C=0,_=f.length;C<_;C++){let v=f[C],S=p[C],y=b[C],x=g[C],A=m[C];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let T=n._createAnimationTracks(v,S,y,x,A);if(T)for(let R=0;R<T.length;R++)d.push(T[R])}let w=new Wr(r,void 0,d);return Qn(w,s),w})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,vy)});for(let p=0,b=u.length;p<b;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,b=u[0];h.pivot=new D().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],b.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Pi:c.length>1?h=new Et:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Qn(h,r),r.extensions&&us(n,h,r),r.matrix!==void 0){let u=new Me;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Et;n.name&&(r.name=s.createUniqueName(n.name)),Qn(r,n),n.extensions&&us(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Tc(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Yt||f instanceof Bt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Gi[r.path]===Gi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Gi[r.path]){case Gi.weights:h=di;break;case Gi.rotation:h=pi;break;case Gi.translation:case Gi.scale:h=Ni;break;default:switch(n.itemSize){case 1:h=di;break;case 2:case 3:default:h=Ni;break}break}let u=s.interpolation!==void 0?my[s.interpolation]:Zi,f=this._getArrayFromAccessor(n);for(let p=0,b=l.length;p<b;p++){let g=new h(l[p]+"."+Gi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=of(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof pi?rf:Ic;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function My(i,e,t){let n=e.attributes,s=new Tt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=of(lr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,b=f.max;if(p!==void 0&&b!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),f.normalized){let g=of(lr[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new on;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function $d(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=af[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return qe.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Qn(i,e),My(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?by(i,e.targets,t):i})}var Pc=class extends $i{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Di;e.deleteAttribute("uv");let t=new qn({side:zt}),n=new qn,s=new as(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ns(e,n,6),o=new gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new lt(e,hr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new lt(e,hr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new lt(e,hr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new lt(e,hr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new lt(e,hr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new lt(e,hr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function hr(i){return new Hr({color:0,emissive:16777215,emissiveIntensity:i})}var tp=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var w=new Uint8Array(d.length),C=0;C<d.length;++C){var _=d.charCodeAt(C);w[C]=_>96?_-97:_>64?_-39:_+4}for(var v=0,C=0;C<d.length;++C)w[v++]=w[C]<60?n[w[C]]:(w[C]-60)*64+w[++C];return w.buffer.slice(0,v)}function l(d,w,C,_,v,S,y){var x=d.exports.sbrk,A=_+3&-4,T=x(A*v),R=x(S.length),P=new Uint8Array(d.exports.memory.buffer);P.set(S,R);var F=w(T,_,v,R,S.length);if(F==0&&y&&y(T,A,v),C.set(P.subarray(T,T+_*v)),x(T-x(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(d){var w={object:new Worker(d),pending:0,requests:{}};return w.object.onmessage=function(C){var _=C.data;w.pending-=_.count,w.requests[_.id][_.action](_.value),delete w.requests[_.id]},w}function b(d){for(var w="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),C=new Blob([w],{type:"text/javascript"}),_=URL.createObjectURL(C),v=u.length;v<d;++v)u[v]=p(_);for(var v=d;v<u.length;++v)u[v].object.postMessage({});u.length=d,URL.revokeObjectURL(_)}function g(d,w,C,_,v){for(var S=u[0],y=1;y<u.length;++y)u[y].pending<S.pending&&(S=u[y]);return new Promise(function(x,A){var T=new Uint8Array(C),R=++f;S.pending+=d,S.requests[R]={resolve:x,reject:A},S.object.postMessage({id:R,count:d,size:w,source:T,mode:_,filter:v},[T.buffer])})}function m(d){var w=d.data;self.ready.then(function(C){if(!w.id)return self.close();try{var _=new Uint8Array(w.count*w.size);l(C,C.exports[w.mode],_,w.count,w.size,w.source,C.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:_},[_.buffer])}catch(v){self.postMessage({id:w.id,count:w.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(d){b(d)},decodeVertexBuffer:function(d,w,C,_,v){l(r,r.exports.meshopt_decodeVertexBuffer,d,w,C,_,r.exports[c[v]])},decodeIndexBuffer:function(d,w,C,_){l(r,r.exports.meshopt_decodeIndexBuffer,d,w,C,_)},decodeIndexSequence:function(d,w,C,_){l(r,r.exports.meshopt_decodeIndexSequence,d,w,C,_)},decodeGltfBuffer:function(d,w,C,_,v,S){l(r,r.exports[h[v]],d,w,C,_,r.exports[c[S]])},decodeGltfBufferAsync:function(d,w,C,_,v){return u.length>0?g(d,w,C,h[_],c[v]):a.then(function(){var S=new Uint8Array(d*w);return l(r,r.exports[h[_]],S,d,w,C,r.exports[c[v]]),S})}}})();var Lt={bodies:{f:{height:.93,kb:171,fist:[-.1579,.3258,.0018]},m:{height:.96,kb:158,fist:[-.1769,.3418,.0018]}},parts:{"r-long":{tint:[null,null],kb:{f:117,m:117}},"r-bob":{tint:[null,null],kb:{f:83,m:83}},"r-short":{tint:[null,null],kb:{f:65,m:62}},"r-pony":{tint:[null,null,"#f472b6"],kb:{f:76,m:76}},"r-bun":{tint:[null,null,"#f472b6"],kb:{f:76,m:75}},"r-spiky":{tint:[null,null],kb:{f:54,m:53}},"r-twin":{tint:[null,null,"#60a5fa"],kb:{f:89,m:89}},"r-wave":{tint:[null,null],kb:{f:122,m:122}},"r-swept":{tint:[null,null],kb:{f:80,m:78}},"u-uniform":{tint:["#2f2a28","#b07d4f","#8c5f36","#f6e3c3","#b07d4f"],kb:{f:51,m:51},tucked:!0},"u-tee":{tint:["#7cc4f5","#5aa8de","#ffffff"],kb:{f:33,m:34}},"u-hoodie":{tint:["#f7a9c4","#e88aac","#ffffff"],kb:{f:62,m:63}},"u-sweater":{tint:["#f3e6cf","#e7a39a","#d9c7a7"],kb:{f:47,m:48}},"u-sailor":{tint:["#ffffff","#1e3a8a","#ef4444","#dc2626"],kb:{f:49,m:50}},"u-chef":{tint:["#ffffff","#9ca3af","#e5e7eb","#dc2626"],kb:{f:39,m:39}},"u-dress":{tint:["#fde68a","#f59e0b","#f472b6","#db2777","#fcd34d"],kb:{f:51,m:51},full:!0},"u-hanbok":{tint:["#f9a8d4","#6d5dd3","#ffffff","#dc2626","#ec4899"],kb:{f:45,m:46},full:!0},"u-bomber":{tint:["#1e3a5f","#f1e9d8","#dc2626","#f8fafc","#f5c542","#94a3b8"],kb:{f:75,m:74}},"u-sabai":{tint:["#f59e0b","#7e22ce","#fbbf24","#fde047","#b45309"],kb:{f:49,m:49},full:!0},"u-xmas":{tint:["#b91c1c","#ffffff","#16a34a"],kb:{f:66,m:66}},"u-padding":{tint:["#f3e8d2","#c4a676","#9c8256","#e6d6b4","#b89c6c"],kb:{f:79,m:79},full:!0},"l-skirt":{tint:["#2d3a64","#1f2a4d"],kb:{f:20,m:20}},"l-pleat":{tint:["#9ca3af","#4b5563","#dc2626","#e5e7eb"],kb:{f:29,m:29}},"l-pants":{tint:["#3b3a44","#2a2930"],kb:{f:24,m:24}},"l-jeans":{tint:["#3b6fb6","#2c548f","#6a95d1","#e8b94a"],kb:{f:31,m:31}},"l-shorts":{tint:["#6aa7e0","#4a86bf"],kb:{f:24,m:24}},"l-cargo":{tint:["#7c8b5a","#6b784c","#3f3a2e","#d6d3d1"],kb:{f:30,m:30}},"k-sneaker":{tint:["#ffffff","#eceef2","#f472b6","#f472b6"],kb:{f:50,m:50}},"k-mary":{tint:["#2b2320","#1a1412","#e8b94a","#ffffff"],kb:{f:39,m:39}},"k-boots":{tint:["#8b5a2b","#6b4420","#4a2f17"],kb:{f:50,m:50}},"k-rain":{tint:["#facc15","#eab308","#ca8a04"],kb:{f:50,m:50}},"k-slipper":{tint:["#fbcfe8","#f9d5e5","#f9a8d4","#2b2320","#f472b6"],kb:{f:42,m:42}},"k-high":{tint:["#dc2626","#f8fafc","#f1f5f9","#ffffff"],kb:{f:59,m:59}}},credits:{},v:"f7a0086e",props:["a-balloon","a-boba","a-candy","a-fan","a-flower","a-goguma","a-icecream","a-krathong","a-pinwheel","a-skate","a-sparkler","a-spatula","a-tteok","a-wand","e-2027","e-3d","e-heart","e-round","e-star","e-sticker","e-sun","h-beanie","h-bow","h-bunny","h-cap","h-cat","h-chef","h-flowers","h-halo","h-horns","h-party","h-pumpkin","h-santa","h-straw","h-witch","j-bowtie","j-chain","j-gold","j-heart","j-jasmine","j-lei","j-pearl","j-scarf","w-angel","w-bag","w-batwing","w-bear","w-butterfly","w-cape","w-champ","w-jetpack","x-cherry","x-flower","x-heart","x-holly","x-ribbon","x-star","x-thaipin","y-board","y-pan"],things:{egg:27,rice:47,shroom:41,chili:28,garlic:29,lime:40,shrimp:44,cheese:29,fries:30,drum:42,melon:24,pine:40,golden:34,mochi:25,pudding:42,donut:44,macaron:38,cone:48,cookie:32,bingsu:37,shortcake:40,pancake:48,tart:30,bungeo:36,toast:27,queen:48,"p-chick":32,"p-hamster":41,"p-cat":43,"p-blackcat":49,"p-bunny":46,"p-shiba":46,"p-penguin":40,"p-panda":47,"p-dragon":52,"p-reindeer":56,"d-plant":43,"d-books":17,"d-frame":22,"d-candle":9,"d-lamp":28,"d-jar":40,"d-globe":20,"d-neon":53,"d-trophy":15,"d-family":19,"d-crayon":12,"d-pumpkin":20,"d-krathong":26,"d-xmastree":39,"d-fireworks":22,"d-lanna":29,"d-kimchi":45}};var ha={f:{"z-1":[-29.5,26.25,-77,-17,0,6.25,1.5,9,-48,-74.75,70],"z-2":[-36.9,20.88,-75.13,-14.52,-.15,15.2,-4.32,16.67,-60.4,-58.54,69.76],"z-3":[-32.75,19.22,-72.67,-17.41,2.81,.89,2.21,7.34,-54.74,-68.25,69.27],"z-4":[-28.5,17.25,-72,-20,2,-3.5,-3.25,9,-50.5,-70.5,69.5],"z-5":[-28.5,19.75,-69,-20,0,-4.75,1,9,-61.25,-69.75,69.75]},m:{"z-1":[-37.39,11.74,-71.78,-14.46,5.45,5.43,-13.72,6.19,-52.07,-64.46,70.92],"z-2":[-31.58,16.53,-77.11,-15.9,1.22,8.16,-13.47,5.3,-48.12,-66.1,72.41],"z-3":[-28.98,14.06,-76.37,-17.4,-.81,7.21,-6.14,2.57,-40.09,-64.91,71.19],"z-4":[-28.5,16.5,-73,-20,0,4,-9.5,4.75,-63.5,-61.25,71],"z-5":[-30.86,15.84,-66.72,-18.2,2.98,-8.91,-8.77,1.55,-64.53,-60.93,70.95]}};var Fc=Math.PI*2,sp=i=>i<0?0:i>1?1:i,Ft=i=>(i=sp(i),i*i*(3-2*i)),ht=(i,e=.14,t=.16)=>Ft(i/e)*Ft((1-i)/t),rt=(i,e,t=0)=>Math.sin(i/1e3*e*Fc+t),np=i=>(i=sp(i),4*i*(1-i)),fr=(i,e,t)=>i+(e-i)*t,fa={},ds={"m-flip":"y-pan","m-skate":"y-board","m-cool":"e-sun","m-fan":"a-fan","m-magic":"a-wand"},rp={"m-wave":"open","m-wai":"happy","m-hop":"happy open","m-heart":"wink","m-spin":"open","m-tease":"wink tongue","m-cool":"","m-kpop":"open","m-disco":"wink","m-float":"happy","m-hiphop":"","m-party":"happy open","m-idol":"wink","m-flip":"open","m-fan":"open","m-magic":"open","m-skate":"wink","m-flex":"wink","m-butt":"wink tongue","m-faint":"dizzy tongue","m-balloon":"happy puff","m-run":"open","m-leap":"happy open","m-drop":"open","m-ouch":"dizzy tongue"};function ua(i){let e=rt(i,.26);return{Spine2:[1.1*e,0,0],Neck:[-.6*e,1.6*rt(i,.09),0],Head:[0,2.2*rt(i,.11,1),1.2*rt(i,.07,2)],LeftArm:[0,0,1.4+.8*e],RightArm:[0,0,-1.4-.8*e],Hips:[0,0,.8*rt(i,.13)],root:[0,.002*e,0]}}function _t(i,e,t){return{ms:i,still:e,at:t}}var wy=i=>i&&ha[i.g]&&ha[i.g][i.z]||ha.f["z-3"],wt={"m-wave":_t(1800,520,(i,e)=>{let t=ht(i,.18,.2);return{RightArm:[-45*t,0,-80*t],RightForeArm:[-5*t,0,(-24+12*rt(e,2.6))*t],RightHand:[0,0,8*rt(e,2.6,.6)*t],Head:[0,-6*t,-6*t],Spine2:[0,-6*t,-3*t],LeftArm:[0,0,6*t]}}),"m-wai":_t(1800,820,(i,e,t)=>{let n=wy(t),s=ht(i,.09,.09),r=s,a=Ft((i-.3)/.2)*Ft((.85-i)/.15);return{LeftShoulder:[0,n[0]*s,n[1]*s],RightShoulder:[0,-n[0]*s,-n[1]*s],LeftArm:[n[2]*s,n[3]*r,n[4]*r],RightArm:[n[2]*s,-n[3]*r,-n[4]*r],LeftForeArm:[n[5]*s,n[6]*r,n[7]*r],RightForeArm:[n[5]*s,-n[6]*r,-n[7]*r],LeftHand:[n[8]*r,n[9]*r,n[10]*r],RightHand:[n[8]*r,-n[9]*r,-n[10]*r],Spine:[7*a,0,0],Spine2:[4*a,0,0],Head:[9*a,0,0]}}),"m-hop":_t(1400,350,i=>{let e=ht(i,.12,.16),t=np(i*2%1)*(i<1?1:0),n=(1-t)*e;return{root:[0,.1*t*e-.02*n,0],LeftArm:[-30*e,0,80*e],RightArm:[-30*e,0,-80*e],LeftForeArm:[-6*e,0,20*e],RightForeArm:[-6*e,0,-20*e],LeftUpLeg:[-20*n,0,0],RightUpLeg:[-20*n,0,0],LeftLeg:[35*n,0,0],RightLeg:[35*n,0,0],Head:[-8*t*e,0,0]}}),"m-heart":_t(1800,760,i=>{let e=ht(i,.22,.2);return{RightArm:[-62*e,0,-18*e],RightForeArm:[-95*e,0,0],RightHand:[0,-30*e,0],Head:[0,-6*e,-9*e],Spine2:[0,-5*e,0]}}),"m-spin":_t(1600,470,i=>{let e=ht(i,.12,.16);return{turn:360*Ft((i-.08)/.8),LeftArm:[0,0,62*e],RightArm:[0,0,-62*e],LeftForeArm:[-10*e,0,0],RightForeArm:[-10*e,0,0],Head:[-6*e,0,0]}}),"m-tease":_t(1800,640,(i,e)=>{let t=ht(i,.18,.18),n=rt(e,3)*t;return{LeftArm:[-25*t,0,50*t],RightArm:[-25*t,0,-50*t],LeftForeArm:[-10*t,0,62*t],RightForeArm:[-10*t,0,-62*t],LeftHand:[0,0,18*n],RightHand:[0,0,-18*n],Head:[0,6*n,0],Spine2:[0,0,4*n]}}),"m-cool":_t(2e3,1100,i=>{let e=ht(i,.2,.18),t=Ft((i-.35)/.15)*Ft((.8-i)/.12);return{RightArm:[-55*e,0,-22*e],RightForeArm:[-125*e,0,0],RightHand:[10*t,0,0],LeftArm:[0,0,18*e],LeftForeArm:[-80*e,0,0],Head:[-9*e,-8*e,0],Hips:[0,0,5*e],Spine:[0,0,-4*e]}}),"m-kpop":_t(2400,300,(i,e)=>{let t=ht(i,.1,.12),n=rt(e,1.8),s=n>0?1:-1,r=Math.abs(rt(e,1.8));return{root:[.03*n*t,-.02*r*t,0],Hips:[0,10*n*t,0],Spine2:[0,-14*n*t,0],LeftArm:[s>0?-80*t:0,0,s>0?10*t:70*t],RightArm:[s<0?-80*t:0,0,s<0?-10*t:-70*t],LeftForeArm:[-40*t,0,0],RightForeArm:[-40*t,0,0],LeftUpLeg:[-14*r*t,0,0],RightUpLeg:[-14*r*t,0,0],LeftLeg:[24*r*t,0,0],RightLeg:[24*r*t,0,0],Head:[0,-10*n*t,0]}}),"m-disco":_t(2400,300,(i,e)=>{let t=ht(i,.1,.12),n=(rt(e,1.25)+1)/2;return{RightArm:[-42*t,0,fr(-96,-30,n)*t],RightForeArm:[-4*t,0,0],LeftArm:[0,0,32*t],LeftForeArm:[-95*t,0,0],LeftHand:[0,0,-20*t],Hips:[0,0,9*rt(e,2.5)*t],Spine2:[0,0,-6*rt(e,2.5)*t],Head:[0,fr(-18,10,n)*t,0]}}),"m-float":_t(2600,1250,(i,e)=>{let t=ht(i,.25,.22);return{root:[0,.19*t+.012*rt(e,.8)*t,0],LeftArm:[0,0,(72+8*rt(e,.8))*t],RightArm:[0,0,-(72+8*rt(e,.8))*t],LeftForeArm:[-12*t,0,0],RightForeArm:[-12*t,0,0],LeftUpLeg:[-10*t,0,0],LeftLeg:[30*t,0,0],RightUpLeg:[4*t,0,0],RightLeg:[12*t,0,0],Head:[-10*t,0,0]}}),"m-hiphop":_t(2400,330,(i,e)=>{let t=ht(i,.1,.12),n=Math.abs(rt(e,1.6));return{root:[0,-.035*t-.012*n*t,0],LeftUpLeg:[-22*t,0,8*t],RightUpLeg:[-22*t,0,-8*t],LeftLeg:[40*t,0,0],RightLeg:[40*t,0,0],Spine:[8*t,0,0],LeftArm:[-80*t,0,-15*t*t+30*t*(1-t)**2],RightArm:[-80*t,0,15*t*t-30*t*(1-t)**2],LeftForeArm:[-55*t,0,-31*t*t],RightForeArm:[-55*t,0,31*t*t],Head:[14*n*t,0,0],Neck:[0,8*rt(e,.8)*t,0]}}),"m-party":_t(2e3,560,(i,e)=>{let t=ht(i,.12,.14),n=rt(e,2.2);return{LeftArm:[-35*t,0,(75+7*n)*t],RightArm:[-35*t,0,-(75-7*n)*t],LeftForeArm:[-8*t,0,(14+14*n)*t],RightForeArm:[-8*t,0,(-14+14*n)*t],Hips:[0,0,7*n*t],Spine2:[0,0,-5*n*t],Head:[0,0,6*n*t],root:[0,.012*Math.abs(n)*t,0]}}),"m-idol":_t(2e3,900,i=>{let e=ht(i,.2,.18);return{RightArm:[-30*e,0,-128*e*e],RightForeArm:[-112*e,0,0],RightHand:[0,0,-16*e],LeftArm:[0,0,22*e],LeftForeArm:[-30*e,0,0],Head:[0,6*e,-12*e],Hips:[0,0,6*e],LeftUpLeg:[-12*e,0,-8*e],LeftLeg:[24*e,0,0]}}),"m-flip":_t(2200,1320,(i,e)=>{let t=ht(i,.14,.16),n=e/1e3*1.6%1,s=Math.max(0,Math.sin(n*Fc))*t,r=n<.62?Math.sin(n/.62*Math.PI)*t:0;return{RightArm:[(-30-4*s)*t,0,-6*t],RightForeArm:[(-62-6*s)*t,0,0],RightHand:[-16*s,0,0],LeftArm:[-16*t,0,18*t],LeftForeArm:[-48*t,0,0],Head:[(12-18*r)*t,-8*t,0],Spine:[3*t,0,0],toss:[.16*r,n<.62?360*n/.62:0]}}),"m-fan":_t(2400,560,(i,e)=>{let t=ht(i,.14,.16),n=rt(e,.8);return{turn:22*n*t,RightArm:[-30*t,0,fr(-48,-82,(n+1)/2)*t],RightForeArm:[-20*t,0,0],RightHand:[0,30*n*t,0],LeftArm:[-20*t,0,fr(60,25,(n+1)/2)*t],LeftForeArm:[-50*t,0,0],LeftHand:[0,0,20*t],Head:[0,6*n*t,-6*n*t],Hips:[0,0,-4*n*t]}}),"m-magic":_t(2400,1100,(i,e)=>{let t=ht(i,.14,.14),n=e/1e3*3.2,s=Ft((i-.6)/.12);return{RightArm:[fr(-30+15*Math.sin(n),-90,s)*t,0,fr(-77+11*Math.cos(n),-10,s)*t],RightForeArm:[-10*t,0,0],LeftArm:[0,0,40*t],LeftForeArm:[-40*t,0,0],Head:[-6*t,-8*t,0],Spine2:[0,-10*s*t,0]}}),"m-skate":_t(2400,1080,i=>{let e=ht(i,.1,.12),t=np((i-.3)/.45),n=(1-t)*e;return{root:[0,.19*t-.03*n,0],turn:360*Ft((i-.3)/.45),LeftUpLeg:[-30*n-40*t,0,0],RightUpLeg:[-30*n-40*t,0,0],LeftLeg:[50*n+70*t,0,0],RightLeg:[50*n+70*t,0,0],LeftArm:[0,0,(40+40*t)*e],RightArm:[0,0,-(40+40*t)*e],Spine:[10*n,0,0]}}),"m-flex":_t(2e3,700,(i,e)=>{let t=ht(i,.18,.16),n=1+.06*rt(e,2.4);return{LeftArm:[-12*t,0,32*t],RightArm:[-12*t,0,-32*t],LeftForeArm:[-10*t,0,92*t*n],RightForeArm:[-10*t,0,-92*t*n],LeftHand:[0,0,20*t],RightHand:[0,0,-20*t],Spine2:[-6*t,0,0],Head:[-6*t,0,0]}}),"m-butt":_t(2e3,380,(i,e)=>{let t=ht(i,.16,.16),n=rt(e,2.8)*t;return{turn:180*t,Hips:[6*t,0,14*n],Spine:[-8*t,0,-8*n],Neck:[0,40*t,0],Head:[0,20*t,0],LeftArm:[0,0,20*t],RightArm:[0,0,-20*t],LeftUpLeg:[-8*t,0,0],RightUpLeg:[-8*t,0,0],LeftLeg:[16*t,0,0],RightLeg:[16*t,0,0]}}),"m-faint":_t(2800,1250,(i,e)=>{let t=Ft(i/.1)*Ft((.34-i)/.08),n=Ft((i-.28)/.16)*Ft((.92-i)/.1);return{root:[0,-.15*n,-.05*n],tilt:[0,5*t*rt(e,3)],LeftUpLeg:[-80*n,0,-6*n],RightUpLeg:[-80*n,0,6*n],LeftLeg:[140*n,0,0],RightLeg:[140*n,0,0],LeftFoot:[-40*n,0,0],RightFoot:[-40*n,0,0],Spine:[-38*n,0,0],Spine2:[-18*n,0,6*t*rt(e,2.5)],Head:[0,18*t*rt(e,2),8*n],LeftArm:[0,0,30*t+10*n],RightArm:[0,0,-(30*t+10*n)],LeftForeArm:[-10*n,0,0],RightForeArm:[-10*n,0,0]}}),"m-balloon":_t(2800,1300,(i,e)=>{let t=ht(i,.18,.2),n=Ft((i-.05)/.3)*Ft((.92-i)/.1);return{size:[1+.15*n,1+.05*n,1+.15*n],grow:{Spine:[1+.06*n,1,1+.07*n],Spine1:[1+.14*n,1+.03*n,1+.16*n]},root:[.012*rt(e,1.1)*n,.05*n,0],LeftArm:[0,0,40*t],RightArm:[0,0,-40*t],LeftUpLeg:[0,0,14*n],RightUpLeg:[0,0,-14*n],Head:[-10*n,0,6*rt(e,1.4)*n]}}),"m-run":_t(1e3,375,i=>{let e=Fc*(i-.125),t=Math.sin(e),n=Math.cos(e),s=(r,a)=>12+50*Math.max(0,-r)+40*Math.max(0,a);return{root:[0,.014*(1-Math.abs(t)),0],Hips:[0,-6*t,0],Spine:[14,0,0],Spine2:[0,8*t,0],Head:[-9,-4*t,0],LeftUpLeg:[-40*t,0,3],RightUpLeg:[40*t,0,-3],LeftLeg:[s(t,n),0,0],RightLeg:[s(-t,-n),0,0],LeftArm:[36*t,0,14],RightArm:[-36*t,0,-14],LeftForeArm:[-78,0,0],RightForeArm:[-78,0,0]}}),"m-leap":_t(1e3,500,()=>({Spine:[10,0,0],Head:[-12,0,0],LeftUpLeg:[-78,0,4],LeftLeg:[96,0,0],RightUpLeg:[20,0,-4],RightLeg:[62,0,0],LeftArm:[-112,0,27],LeftForeArm:[-18,0,0],RightArm:[42,0,-26],RightForeArm:[-34,0,0]})),"m-drop":_t(1e3,500,()=>({Spine:[4,0,0],Head:[8,0,0],LeftUpLeg:[-30,0,6],LeftLeg:[34,0,0],RightUpLeg:[-8,0,-6],RightLeg:[18,0,0],LeftArm:[-16,0,66],RightArm:[-16,0,-66],LeftForeArm:[0,0,18],RightForeArm:[0,0,-18]})),"m-ouch":_t(1e3,500,()=>({Spine:[-9,0,0],Spine2:[-5,0,0],Head:[-4,0,6],LeftArm:[-38,0,58],RightArm:[-38,0,-58],LeftForeArm:[-10,0,24],RightForeArm:[-10,0,-24],LeftUpLeg:[-40,0,6],LeftLeg:[38,0,0],RightUpLeg:[-10,0,-6],RightLeg:[22,0,0]}))};for(let i of["m-faint"])wt[i].lie=!0;function lf(i){let e={};for(let t in i){let n=i[t];t==="root"?e[t]=[-n[0],n[1],n[2]]:t==="turn"?e[t]=-n:t==="tilt"?e[t]=[n[0],-n[1]]:t==="size"||t==="grow"||t==="toss"?e[t]=n:e[/^Left/.test(t)?"Right"+t.slice(4):/^Right/.test(t)?"Left"+t.slice(5):t]=[n[0],-n[1],-n[2]]}return e}var Ay=i=>Ft(i/.03)*Ft((1-i)/.03),Lc=(i,e)=>({RightArm:[-10*i,0,-(3*Ay(e)+5*i)],RightForeArm:[-16*i,0,0],RightHand:[0,0,0]}),ip={"m-cool":(i,e)=>Object.assign(lf(wt["m-cool"].at(i,e)),Lc(ht(i,.2,.18),i)),"m-heart":(i,e)=>Object.assign(lf(wt["m-heart"].at(i,e)),Lc(ht(i,.22,.2),i)),"m-idol":(i,e)=>{let t=lf(wt["m-idol"].at(i,e)),n=ht(i,.2,.18);return Object.assign(t,{LeftArm:[-58*n,0,104*n*n]},Lc(n,i))},"m-hiphop":(i,e)=>Object.assign(wt["m-hiphop"].at(i,e),Lc(ht(i,.1,.12),i)),"m-tease":(i,e)=>{let t=ht(i,.18,.18),n=rt(e,3)*t;return Object.assign(wt["m-tease"].at(i,e),{RightArm:[-25*t,0,-30*t],RightForeArm:[-10*t,0,-30*t],RightHand:[0,0,-18*n]})},"m-kpop":(i,e)=>{let t=ht(i,.1,.12),n=rt(e,1.8)>0?1:-1;return Object.assign(wt["m-kpop"].at(i,e),{RightArm:n<0?[-55*t,0,-8*t]:[0,0,-44*t],RightForeArm:[-30*t,0,0]})},"m-ouch":(i,e)=>Object.assign(wt["m-ouch"].at(i,e),{RightArm:[-38,0,-40],RightForeArm:[-10,0,-16]}),"m-drop":(i,e)=>Object.assign(wt["m-drop"].at(i,e),{RightArm:[-16,0,-48],RightForeArm:[0,0,-12]}),"m-run":(i,e)=>{let t=Math.sin(Fc*(i-.125));return Object.assign(wt["m-run"].at(i,e),{RightArm:[-30*t,0,-12],RightForeArm:[-50,0,0]})},"m-faint":(i,e)=>{let t=Ft(i/.1)*Ft((.34-i)/.08),n=Ft((i-.28)/.16)*Ft((.92-i)/.1);return Object.assign(wt["m-faint"].at(i,e),{RightArm:[-20*n,0,-(30*t+20*n)]})},"m-balloon":(i,e)=>Object.assign(wt["m-balloon"].at(i,e),{RightArm:[0,0,-28*ht(i,.18,.2)]}),"m-butt":(i,e)=>Object.assign(wt["m-butt"].at(i,e),{RightArm:[0,0,-12*ht(i,.16,.16)]})};for(let i in ip)wt[i].held=ip[i];wt["m-wai"].stow=!0;wt["m-wai"].fit=ha;var ap={"":{"a-balloon":{d:[[0,6,0]]},"a-fan":{d:[[0,18,45]]},"a-pinwheel":{d:[[0,12,90]]},"a-sparkler":{d:[[0,12,0]]},"a-spatula":{d:[[0,12,0]]},"a-wand":{d:[[0,12,0]]},"a-icecream":{d:[[0,6,0]]},"a-candy":{d:[[0,18,90]]}},"m-wave":{"a-fan":{d:[[0,18,45],[.06,18,45],[.1,35,0],[.2083,35,0],[.25,35,45],[.3,35,45],[.35,18,45],[.4,18,45],[.45,35,45],[.5,35,45],[.5417,18,45],[.625,18,45],[.65,35,45],[.7083,35,45],[.75,18,45],[.8,18,45],[.85,35,45],[.875,35,45],[.9,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,0,0],[.2083,0,0],[.25,12,0],[.3,12,0],[.35,0,0],[.4,0,0],[.45,12,0],[.5,12,0],[.5417,0,0],[.65,0,0],[.7,12,0],[.7083,12,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.1611,6,0],[.1667,12,0],[.1833,12,0],[.1889,6,0],[.2,0,0],[.3,0,0],[.35,12,0],[.4,12,0],[.45,35,0],[.5,35,0],[.5417,12,0],[.6,12,0],[.625,6,0],[.65,0,0],[.75,0,0],[.7917,12,0],[.8,12,0],[.85,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.125,12,90],[.15,12,0],[.2083,12,0],[.25,6,0],[.625,6,0],[.65,12,0],[.7,6,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.8,6,0],[.85,12,90],[1,12,90]]},"a-tteok":{d:[[0,0,0],[.5,0,0],[.5417,6,0],[.55,0,0],[.6,0,0],[.625,6,0],[.65,0,0],[1,0,0]]}},"m-hop":{"a-flower":{d:[[0,0,0],[.8,0,0],[.85,6,0],[.875,12,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.1,0,0],[.1143,6,0],[.45,6,0],[.4586,12,0],[.5414,12,0],[.55,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.4,12,0],[.45,35,-45],[.55,35,-45],[.6,12,0],[1,12,0]]}},"m-heart":{"a-balloon":{d:[[0,6,0],[.15,6,0],[.2,12,0],[.8,12,0],[.85,6,0],[1,6,0]]},"a-fan":{d:[[0,18,45],[.125,18,45],[.15,35,45],[.875,35,45],[.9,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-tteok":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[1,0,0]]}},"m-spin":{"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,35,0],[.875,35,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,45],[.85,18,45],[.875,35,45],[.9,35,45],[.94,18,45],[1,18,45]]}},"m-tease":{"a-boba":{d:[[0,0,0],[.2,0,0],[.2083,6,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.6,0,0],[.625,6,0],[.65,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.25,35,45],[.2917,18,45],[.375,18,45],[.4,35,45],[.45,18,45],[.55,18,45],[.6,35,45],[.625,35,45],[.65,18,45],[.75,18,45],[.7917,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,12,0],[.15,12,0],[.2,18,0],[.25,18,0],[.2917,6,0],[.3556,6,0],[.375,12,0],[.4,18,0],[.45,12,0],[.55,12,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7917,12,0],[.8,18,0],[.85,12,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.2083,0,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[.2083,0,0],[.25,6,0],[.2917,35,45],[.55,35,45],[.6,6,0],[.625,0,0],[.8,0,0],[.85,12,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-candy":{d:[[0,18,90],[.15,18,90],[.2,0,0],[.25,0,0],[.2917,18,90],[.375,18,90],[.4,0,0],[.4583,0,0],[.5,18,90],[.55,18,90],[.6,0,0],[.625,0,0],[.65,18,90],[.7083,18,90],[.75,0,0],[.8,0,0],[.85,18,90],[1,18,90]]}},"m-kpop":{"a-boba":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,6,0],[.125,0,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.125,18,45],[.2083,18,45],[.25,35,45],[.2917,18,45],[.5,18,45],[.5417,35,45],[.55,35,45],[.6,18,45],[.65,18,45],[.7,35,45],[.8,35,45],[.85,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,18,0],[.125,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,0,0],[.4583,0,0],[.5,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.8,6,0],[.85,12,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.1,6,0],[.125,35,0],[.65,35,0],[.7,6,0],[.8,6,0],[.85,35,0],[.9,35,0],[.94,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.45,0,0],[.4583,6,0],[.5,35,45],[.8,35,45],[.85,12,0],[.875,12,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-tteok":{d:[[0,0,0],[.025,0,0],[.03,6,0],[.1,6,0],[.125,12,0],[.15,6,0],[.2,6,0],[.2083,12,0],[.25,0,0],[.2917,6,0],[.3,6,0],[.35,12,0],[.375,6,0],[.4,6,0],[.45,12,0],[.4583,12,0],[.5,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,0,0],[.75,6,0],[.7917,0,0],[.8,0,0],[.85,6,0],[.965,6,0],[.97,0,0],[1,0,0]]}},"m-disco":{"a-candy":{d:[[0,18,90],[.625,18,90],[.65,0,0],[.7,18,90],[.8,18,90],[.85,0,0],[.875,18,90],[1,18,90]]},"a-fan":{d:[[0,18,45],[.15,18,45],[.2,35,45],[.2083,35,45],[.25,35,0],[.2917,35,45],[.375,35,45],[.4,18,45],[.5,18,45],[.5417,35,45],[.55,35,45],[.6,35,0],[.625,35,0],[.65,18,45],[.7,35,45],[.7083,35,45],[.75,18,45],[.85,18,45],[.875,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,35,0],[.3,35,0],[.35,12,0],[.375,6,0],[.4,0,0],[.4583,0,0],[.5,12,0],[.5417,35,0],[.625,35,0],[.65,12,0],[.7,6,0],[.7083,6,0],[.75,0,0],[.8,0,0],[.85,12,0],[.875,35,0],[.9,35,0],[.94,12,0],[.945,12,0],[.95,6,0],[.955,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.15,6,0],[.2,35,0],[.25,35,0],[.2917,6,0],[.5,6,0],[.5417,35,0],[.6,35,0],[.625,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2083,0,0],[.2167,6,0],[.2208,6,0],[.225,12,0],[.25,12,0],[.2917,35,0],[.3,35,0],[.35,6,0],[.375,0,0],[.5417,0,0],[.55,6,0],[.5583,12,0],[.5958,12,0],[.6,6,0],[.625,0,0],[.875,0,0],[.8833,6,0],[.9,6,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.15,12,90],[.2,35,90],[.25,35,90],[.2917,12,90],[.5,12,90],[.5417,35,90],[.6,35,90],[.625,12,90],[.85,12,90],[.875,12,0],[.9,12,0],[.94,12,90],[1,12,90]]},"a-tteok":{d:[[0,0,0],[.2,0,0],[.2083,6,0],[.25,6,0],[.2917,0,0],[.5,0,0],[.5417,6,0],[.6,6,0],[.625,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[1,0,0]]}},"m-float":{"a-boba":{d:[[0,0,0],[.5,0,0],[.5415,12,0],[.65,12,0],[.7,0,0],[1,0,0]]},"a-candy":{d:[[0,18,90],[.5,18,90],[.5415,0,0],[.65,0,0],[.7,18,90],[1,18,90]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.5,6,0],[.5415,12,0],[.65,12,0],[.7,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,0],[.2,35,45],[.4808,35,45],[.5,18,0],[.5415,0,0],[.65,0,0],[.7,6,0],[.7085,12,0],[.75,35,0],[.8,35,0],[.85,6,0],[.875,0,0],[1,0,0]]}},"m-hiphop":{"a-fan":{d:[[0,18,45],[.035,18,45],[.04,35,45],[.25,35,45],[.2917,18,45],[.5,18,45],[.5417,35,45],[.8,35,45],[.85,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.25,0,0],[.2917,6,0],[.3,12,0],[.35,0,0],[.85,0,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.25,6,0],[.2917,35,0],[.4583,35,0],[.5,6,0],[.8,6,0],[.85,35,0],[.9,35,0],[.94,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,12,90],[.06,12,90],[.1,12,0],[.125,12,90],[.15,12,90],[.2,35,90],[.2083,35,90],[.25,12,90],[.5,12,90],[.5417,12,0],[.6,12,0],[.625,12,90],[.65,12,90],[.7,35,90],[.75,35,90],[.7917,12,90],[1,12,90]]},"a-tteok":{d:[[0,0,0],[.25,0,0],[.2917,6,0],[.4583,6,0],[.5,0,0],[.8,0,0],[.85,6,0],[.945,6,0],[.95,0,0],[1,0,0]]}},"m-party":{"a-fan":{d:[[0,18,45],[.2085,18,45],[.25,35,45],[.3,35,45],[.35,18,45],[.4,18,45],[.45,35,45],[.55,35,45],[.6,18,45],[.65,18,45],[.7,35,45],[.8,35,45],[.85,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.125,6,0],[.15,0,0],[.875,0,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.19,6,0],[.2,0,0],[.35,0,0],[.375,6,0],[.4,6,0],[.45,0,0],[.55,0,0],[.6,6,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.3,12,90],[.35,12,0],[.375,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.85,12,0],[.875,0,0],[.9,12,0],[1,12,0]]},"a-candy":{d:[[0,18,90],[.06,18,90],[.1,0,0],[.125,18,90],[.2085,18,90],[.25,0,0],[.3,0,0],[.35,18,90],[.5,18,90],[.5415,0,0],[.55,0,0],[.6,18,90],[.65,18,90],[.7,0,0],[.7085,0,0],[.75,18,90],[.875,18,90],[.9,0,0],[.94,18,90],[1,18,90]]}},"m-idol":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,35,0],[.85,35,0],[.875,18,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-tteok":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.95,6,0],[.955,0,0],[1,0,0]]}},"m-fan":{"a-fan":{d:[[0,18,45],[.3,18,45],[.35,35,45],[.375,18,45],[.4,18,45],[.45,35,45],[.4583,35,45],[.5,18,45],[1,18,45]]}},"m-skate":{"a-boba":{d:[[0,0,0],[.4,0,0],[.45,12,0],[.4583,12,0],[.5,0,0],[.55,0,0],[.6,12,0],[.625,0,0],[1,0,0]]},"a-fan":{d:[[0,18,45],[.4583,18,45],[.5,35,45],[.55,35,45],[.6,18,45],[.875,18,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.3,0,0],[.35,12,0],[.4,12,0],[.45,18,0],[.625,18,0],[.65,12,0],[.7083,12,0],[.75,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.7,0,0],[.7083,6,0],[.75,0,0],[1,0,0]]},"a-candy":{d:[[0,18,90],[.375,18,90],[.4,0,0],[.65,0,0],[.7,18,90],[1,18,90]]}},"m-flex":{"a-balloon":{d:[[0,6,0],[.3,6,0],[.35,18,0],[.375,18,0],[.4,6,0],[.4585,6,0],[.5,12,0],[.5415,35,0],[.625,35,0],[.65,18,0],[.7085,18,0],[.75,35,0],[.7915,18,0],[.8,18,0],[.85,6,0],[.875,12,0],[.9,6,0],[1,6,0]]},"a-boba":{d:[[0,0,0],[.15,0,0],[.2,35,0],[.9,35,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.3,35,45],[.35,18,45],[.4,18,45],[.45,35,45],[.5,35,45],[.5415,18,45],[.6,18,45],[.625,35,45],[.7085,35,45],[.75,18,45],[.8,18,45],[.85,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.15,12,0],[.2,35,0],[.3,35,0],[.35,18,0],[.4,18,0],[.45,35,0],[.5,35,0],[.5415,18,0],[.6,18,0],[.625,35,0],[.7085,35,0],[.75,18,0],[.8,18,0],[.85,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]],hide:[[455,505]]},"a-icecream":{d:[[0,6,0],[.2085,6,0],[.25,35,0],[.3,35,0],[.35,6,0],[.4,6,0],[.45,35,0],[.7085,35,0],[.75,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,35,45],[.15,35,45],[.2,70,45],[.75,70,45],[.7915,35,45],[.875,35,45],[.9,18,0],[.94,0,0],[1,0,0]],hide:[[1650,1725]]},"a-pinwheel":{d:[[0,18,45],[.15,18,45],[.2,35,45],[.2085,35,45],[.25,18,45],[.3,18,45],[.35,35,45],[.4,35,45],[.45,18,45],[.5,18,45],[.5415,35,45],[.625,35,45],[.65,18,45],[.7085,18,45],[.75,35,45],[.8,35,45],[.85,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.3,12,0],[.35,35,0],[.4,35,0],[.45,12,0],[.5,12,0],[.5415,35,0],[.6,35,0],[.625,12,0],[.7085,12,0],[.75,35,0],[.8,35,0],[.85,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[1,0,0]]},"a-candy":{d:[[0,18,90],[.06,18,90],[.1,0,0],[.125,18,90],[.875,18,90],[.9,0,0],[.94,18,90],[1,18,90]]}},"m-butt":{"a-icecream":{d:[[0,6,0],[.15,6,0],[.19,35,0],[.8,35,0],[.85,6,0],[1,6,0]]},"a-fan":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.125,18,45],[.875,18,45],[.9,35,45],[.94,18,45],[1,18,45]]}},"m-faint":{"a-boba":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[1,0,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,18,0],[.15,35,0],[.2082,35,0],[.25,6,0],[.2918,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,12,90],[.1,0,0],[.4,0,0],[.4464,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-tteok":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2082,6,0],[.25,0,0],[.2918,6,0],[.3,6,0],[.35,0,0],[1,0,0]]},"a-candy":{d:[[0,18,90],[.3,18,90],[.35,0,0],[.4,0,0],[.4464,35,-45],[.8,35,-45],[.85,0,0],[.875,0,0],[.9,18,90],[1,18,90]]}},"m-balloon":{"a-flower":{d:[[0,0,0],[.2918,0,0],[.3,6,0],[.35,0,0],[.5418,0,0],[.55,6,0],[.6,6,0],[.625,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.2082,0,0],[.25,6,0],[.2918,0,0],[.35,0,0],[.375,6,0],[.4,0,0],[.4643,0,0],[.5,6,0],[.5418,35,45],[.6,35,45],[.625,12,0],[.65,0,0],[.8,0,0],[.85,12,0],[.875,0,0],[1,0,0]]}},"m-run":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,90],[.208,12,90],[.25,6,0],[.292,0,0],[.458,0,0],[.5,6,0],[.542,12,90],[.55,12,90],[.6,0,0],[1,0,0]]},"a-fan":{d:[[0,18,45],[.55,18,45],[.6,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,0,0],[.15,12,90],[.2,35,90],[.55,35,90],[.6,12,90],[.625,0,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.25,0,0],[.292,12,90],[.458,12,90],[.5,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.208,0,0],[.25,6,0],[.5,6,0],[.542,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,18,45],[.708,18,45],[.75,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.15,12,0],[.2,18,0],[.55,18,0],[.6,12,0],[.65,12,0],[.7,6,0],[.995,6,0],[1,0,0]]}},"m-leap":{"a-flower":{d:[[0,0,0],[.005,6,0],[.05,6,0],[.055,12,0],[.06,12,0],[.1,12,90],[.9,12,90],[.94,12,0],[.945,12,0],[.95,6,0],[.995,6,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,90],[.2,35,90],[.8,35,90],[.85,12,90],[.875,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.9,12,0],[.94,6,0],[.995,6,0],[1,0,0]]}},"m-drop":{"a-boba":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]},"a-fan":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.015,18,0],[.985,18,0],[.99,12,0],[.995,6,0],[1,0,0]]},"a-candy":{d:[[0,18,90],[.06,18,90],[.1,0,0],[.9,0,0],[.94,18,90],[1,18,90]]}},"m-ouch":{"a-boba":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.99,12,0],[.995,6,0],[1,0,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]},"a-candy":{d:[[0,18,90],[.06,18,90],[.1,0,0],[.9,0,0],[.94,18,90],[1,18,90]]}}};var Dc={f:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-star":[0,0,.002],"e-sticker":[0,-.00141,.00141],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00404,.00404,.00404],"h-beanie|x-star":[.00808,.00808,.00808],"h-beanie|x-thaipin":[.00635,.00635,.00635],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00884,.00884,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00813,.00813,0],"h-santa|x-holly":[.0026,.0026,.0026],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01617,.01617,.01617],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00664,.00664,.00664],"h-witch|x-holly":[.0026,.0026,.0026],"h-witch|x-star":[.00722,.00722,.00722],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.15085,-3e-4],r:{"r-bob|h-bunny":[.935,.98,.935,.00261,-.00957],"r-bun|h-bunny":[.835,.895,.835,.00522,.0213,0],"r-long|h-bunny":[1,.95,1,-.00261,-.00587,-.0349],"r-pony|h-bunny":[.85,.89,.85,.00261,.01196,-.0349],"r-short|h-bunny":[.87,.985,.87,87e-5,-.01543,-.0349],"r-spiky|h-bunny":[.82,1.035,.82,.00609,-.01283,0],"r-swept|h-bunny":[.92,.925,.92,87e-5,-.01283,0],"r-twin|h-bunny":[.895,.875,.895,.00435,.01957,.0349],"r-wave|h-bunny":[.995,.95,.995,0,.00413,0],"r-bob|h-cat":[.95,.95,.95,-.00174,-87e-5,-.0698],"r-bun|h-cat":[.85,.965,.85,-.00696,.04043,0],"r-long|h-cat":[1,.92,1,.00435,-.00435],"r-pony|h-cat":[.85,.895,.85,87e-5,.01783,-.0349],"r-short|h-cat":[.85,.96,.85,.00522,-.00522,-.1396],"r-spiky|h-cat":[.835,1.055,.835,-.00348,-.01283,0],"r-swept|h-cat":[.935,.925,.935,87e-5,-.00609,-.1396],"r-twin|h-cat":[1.105,.86,1.105,.00609,.02043,0],"r-wave|h-cat":[.995,.95,.995,0,-.00261],"r-bob|h-flowers":[.995,.875,.995,87e-5,87e-5],"r-bun|h-flowers":[.845,1.085,.845,-.00348,.00174,-.0698],"r-long|h-flowers":[.94,1.105,.94,0,-.00174],"r-pony|h-flowers":[.855,1.075,.855,-87e-5,.03957,.2094],"r-short|h-flowers":[.895,1.09,.895,.00522,.00522],"r-spiky|h-flowers":[.955,.85,.955,0,-87e-5,-.0349],"r-swept|h-flowers":[.985,.82,.985,.00348,0,-.1047],"r-twin|h-flowers":[.915,1.075,.915,0,.00826,0],"r-wave|h-flowers":[.94,1.085,.94,.00174,-.00174],"r-bob|x-cherry":[-.00387,-.0031,-.00162],"r-bun|x-cherry":[-.00355,-.00284,-.00148],"r-long|x-cherry":[-.00355,-.00284,-.00148],"r-pony|x-cherry":[-.00355,-.00284,-.00148],"r-short|x-cherry":[-.00355,-.00284,-.00148],"r-spiky|x-cherry":[-.00549,-.00439,-.00229],"r-swept|x-cherry":[-.00743,-.00593,-.0031],"r-twin|x-cherry":[-.00355,-.00284,-.00148],"r-wave|x-cherry":[-.00129,-.00103,-54e-5],"r-bob|x-flower":[93e-5,-82e-5,-4e-4],"r-bun|x-flower":[62e-5,-55e-5,-27e-5],"r-long|x-flower":[62e-5,-55e-5,-27e-5],"r-pony|x-flower":[62e-5,-55e-5,-27e-5],"r-short|x-flower":[62e-5,-55e-5,-27e-5],"r-spiky|x-flower":[.0031,-.00274,-.00134],"r-swept|x-flower":[.00465,-.00411,-.002],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00278,-.00249,-.00119],"r-bun|x-heart":[-.00247,-.00221,-.00106],"r-long|x-heart":[-.00247,-.00221,-.00106],"r-pony|x-heart":[-.00247,-.00221,-.00106],"r-short|x-heart":[-.00247,-.00221,-.00106],"r-spiky|x-heart":[-.0037,-.00331,-.00159],"r-swept|x-heart":[-.0071,-.00635,-.00305],"r-twin|x-heart":[-.00247,-.00221,-.00106],"r-wave|x-heart":[-.00154,-.00138,-66e-5],"r-bob|x-holly":[-.00775,-.00687,-.00329],"r-bun|x-holly":[-.00806,-.00715,-.00342],"r-long|x-holly":[-.00806,-.00715,-.00342],"r-pony|x-holly":[-.00806,-.00715,-.00342],"r-short|x-holly":[-.00806,-.00715,-.00342],"r-spiky|x-holly":[-.00899,-.00797,-.00382],"r-swept|x-holly":[-.01209,-.01072,-.00513],"r-twin|x-holly":[-.00775,-.00687,-.00329],"r-wave|x-holly":[-.00682,-.00605,-.0029],"r-bob|x-ribbon":[.965,.96,.965,-.00348,-.00435,-.0349],"r-bun|x-ribbon":[.88,.895,.88,.00435,.02565,0],"r-long|x-ribbon":[1.005,.95,1.005,0,-.005,-.0349],"r-pony|x-ribbon":[.88,.89,.88,.00435,.01783,.0349],"r-short|x-ribbon":[.895,.95,.895,.00609,-.00435,-.0698],"r-spiky|x-ribbon":[.845,1.06,.845,-.00435,.00565,.0698],"r-swept|x-ribbon":[.945,.92,.945,.00348,-.005,-.0349],"r-twin|x-ribbon":[.915,.925,.915,-.00348,.01543,.0349],"r-wave|x-ribbon":[.99,.95,.99,87e-5,-.00696],"r-bob|x-star":[-.0028,-.00246,-.00119],"r-bun|x-star":[-.00249,-.00219,-.00106],"r-long|x-star":[-.00249,-.00219,-.00106],"r-pony|x-star":[-.00249,-.00219,-.00106],"r-short|x-star":[-.00249,-.00219,-.00106],"r-spiky|x-star":[-.00373,-.00328,-.00159],"r-swept|x-star":[-.00716,-.00629,-.00304],"r-twin|x-star":[-.00249,-.00219,-.00106],"r-wave|x-star":[-.00156,-.00137,-66e-5],"r-bob|x-thaipin":[-.00555,-.00479,-.00274],"r-bun|x-thaipin":[-.00555,-.00479,-.00274],"r-long|x-thaipin":[-.00555,-.00479,-.00274],"r-pony|x-thaipin":[-.00555,-.00479,-.00274],"r-short|x-thaipin":[-.00555,-.00479,-.00274],"r-spiky|x-thaipin":[-.00709,-.00613,-.0035],"r-swept|x-thaipin":[-.01078,-.00932,-.00532],"r-twin|x-thaipin":[-.00524,-.00453,-.00259],"r-wave|x-thaipin":[-.00493,-.00426,-.00243]}},m:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00495,.00495,0],"h-beanie|x-star":[.00955,.00955,0],"h-beanie|x-thaipin":[.00606,.00606,.00606],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00849,.00849,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00693,.00693,.00693],"h-santa|x-holly":[.00318,.00318,0],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01588,.01588,.01588],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00693,.00693,.00693],"h-witch|x-holly":[.00354,.00354,0],"h-witch|x-star":[.00884,.00884,0],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.14879,-29e-5],r:{"r-bob|h-bunny":[.95,.98,.95,.00261,.0087,.0349],"r-bun|h-bunny":[.88,.865,.88,87e-5,.00739,.0698],"r-long|h-bunny":[.985,.965,.985,-.00522,-.00413,-.0349],"r-pony|h-bunny":[.855,.89,.855,.00348,.00739,.0349],"r-short|h-bunny":[.885,.97,.885,0,-.00522,-.0698],"r-spiky|h-bunny":[.835,1.065,.835,87e-5,-.01261,0],"r-swept|h-bunny":[.945,.92,.945,87e-5,.0137,0],"r-twin|h-bunny":[.91,.87,.91,87e-5,.0187,.0698],"r-wave|h-bunny":[1,.975,1,.00261,-.005,0],"r-bob|h-cat":[.95,.975,.95,.00261,-.00261,-.0349],"r-bun|h-cat":[.845,.94,.845,-87e-5,.0213,0],"r-long|h-cat":[1.005,.92,1.005,.00435,-.01,0],"r-pony|h-cat":[.85,.885,.85,.00261,.01043],"r-short|h-cat":[.855,.99,.855,87e-5,-.00609,-.0698],"r-spiky|h-cat":[.83,1.04,.83,-87e-5,-.0037,-.0349],"r-swept|h-cat":[.94,.925,.94,-87e-5,-.005,-.1571],"r-twin|h-cat":[1.045,.885,1.045,-87e-5,.02043,0],"r-wave|h-cat":[1.01,.95,1.01,0,.00174],"r-bob|h-flowers":[1.005,.845,1.005,.00261,0],"r-bun|h-flowers":[.855,1.03,.855,0,.00674,-.0349],"r-long|h-flowers":[.94,1.07,.94,87e-5,0],"r-pony|h-flowers":[.85,1.03,.85,0,.03348,.2094],"r-short|h-flowers":[.94,.89,.94,0,87e-5,-.1396],"r-spiky|h-flowers":[.895,1.07,.895,.00174,.02043,0],"r-swept|h-flowers":[.915,1.06,.915,.00696,-.00326,.0349],"r-twin|h-flowers":[.91,1.04,.91,0,0,.0698],"r-wave|h-flowers":[.95,1.085,.95,.00696,0],"r-bob|x-cherry":[-.00321,-.0026,-.00134],"r-bun|x-cherry":[-.00354,-.00286,-.00148],"r-long|x-cherry":[-.00354,-.00286,-.00148],"r-pony|x-cherry":[-.00354,-.00286,-.00148],"r-short|x-cherry":[-.00482,-.0039,-.00201],"r-spiky|x-cherry":[-.00482,-.0039,-.00201],"r-swept|x-cherry":[-.00739,-.00599,-.00309],"r-twin|x-cherry":[-.00321,-.0026,-.00134],"r-wave|x-cherry":[-.00129,-.00104,-54e-5],"r-bob|x-flower":[93e-5,-83e-5,-4e-4],"r-bun|x-flower":[31e-5,-28e-5,-13e-5],"r-long|x-flower":[31e-5,-28e-5,-13e-5],"r-pony|x-flower":[31e-5,-28e-5,-13e-5],"r-short|x-flower":[.00401,-.00359,-.00173],"r-spiky|x-flower":[.00401,-.00359,-.00173],"r-swept|x-flower":[.00463,-.00414,-.00199],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00276,-.0025,-.00118],"r-bun|x-heart":[-.00246,-.00223,-.00105],"r-long|x-heart":[-.00246,-.00223,-.00105],"r-pony|x-heart":[-.00246,-.00223,-.00105],"r-short|x-heart":[-.00399,-.00362,-.00171],"r-spiky|x-heart":[-.00399,-.00362,-.00171],"r-swept|x-heart":[-.00706,-.0064,-.00303],"r-twin|x-heart":[-.00246,-.00223,-.00105],"r-wave|x-heart":[-.00154,-.00139,-66e-5],"r-bob|x-holly":[-.00771,-.00692,-.00327],"r-bun|x-holly":[-.00802,-.0072,-.00341],"r-long|x-holly":[-.00802,-.0072,-.00341],"r-pony|x-holly":[-.00802,-.0072,-.00341],"r-short|x-holly":[-.00926,-.00831,-.00393],"r-spiky|x-holly":[-.00926,-.00831,-.00393],"r-swept|x-holly":[-.01203,-.0108,-.00511],"r-twin|x-holly":[-.00771,-.00692,-.00327],"r-wave|x-holly":[-.00648,-.00582,-.00275],"r-bob|x-ribbon":[.97,.95,.97,-.00261,-.00261,-.0349],"r-bun|x-ribbon":[.855,.91,.855,.00261,.02391,0],"r-long|x-ribbon":[1.01,.925,1.01,.00522,.00674,.0349],"r-pony|x-ribbon":[.885,.9,.885,.00261,.01783,.0349],"r-short|x-ribbon":[.89,.95,.89,.00435,-.01435,-.0349],"r-spiky|x-ribbon":[.82,1.07,.82,-.00261,-22e-5,.0698],"r-swept|x-ribbon":[.94,.92,.94,.00522,0,-.0524],"r-twin|x-ribbon":[.935,.87,.935,0,.01696,0],"r-wave|x-ribbon":[.995,.95,.995,-87e-5,-.00696],"r-bob|x-star":[-.00279,-.00248,-.00118],"r-bun|x-star":[-.00248,-.0022,-.00105],"r-long|x-star":[-.00248,-.0022,-.00105],"r-pony|x-star":[-.00248,-.0022,-.00105],"r-short|x-star":[-.00433,-.00386,-.00184],"r-spiky|x-star":[-.00433,-.00386,-.00184],"r-swept|x-star":[-.00681,-.00606,-.00289],"r-twin|x-star":[-.00248,-.0022,-.00105],"r-wave|x-star":[-.00155,-.00138,-66e-5],"r-bob|x-thaipin":[-.00552,-.00483,-.00272],"r-bun|x-thaipin":[-.00552,-.00483,-.00272],"r-long|x-thaipin":[-.00552,-.00483,-.00272],"r-pony|x-thaipin":[-.00552,-.00483,-.00272],"r-short|x-thaipin":[-.00705,-.00618,-.00348],"r-spiky|x-thaipin":[-.00705,-.00618,-.00348],"r-swept|x-thaipin":[-.01073,-.0094,-.0053],"r-twin|x-thaipin":[-.00552,-.00483,-.00272],"r-wave|x-thaipin":[-.00491,-.0043,-.00242]}}};var ur={f:{c:[-6e-6,.150847,-302e-6],t:{"r-bun|x-cherry":"CnEf3of36f36f4NDLGf6qf3of4NfzmfsXfraDuHfhrf1Nf9sf9fftTfrafqtESHfhrfhrf9zf9Rfrrfp_fqtE2Hfhrfvvf0Qf3lfw-fq1fp_"},b:{"r-bob|h-bunny":"BEBEFodvd8eLedexfIfdfvf_gMgWgegjgmgmgkgggZgQgEf2flfUfGe6exerenemenereye7fHfVfmf3gGgSgbgigmgogngjgdgUgJf7fqfXfBeseaeKd9dy","r-bob|h-cat":"BEBEFodGdPdbdpd6eOeke9fXfvgEgXgng0g_hHhNhQhRhPhMhGhAg6gygoghgdgbgcgfglgug0g8hEhLhPhRhQhNhIhAg2gpgagIfzfcfCeqeVeCdydkdZdR","r-bob|h-flowers":"AAAAFogXgXgXgYgYgYgYgYgYgZgZgZgZgZgYgYgYgYgXgWgWgVgVgUgTgTgSgQgOgMgIgDf9f0ftfofjfffbfYfWfWfXfZfbfcfcfbfafafafbfcfefgfjfpfxf7gCgIgMgPgRgSgTgTgTgTgSgSgSgSgTgUgUgVgWgWgXgXgXgXgXgXgXgXgXgXgX","r-bob|x-ribbon":"BEBEFocuc6dIdZdseCebe2fRfpf_gSgjgxg8hFhLhPhQhPhLhFg9g1gsgigagVgTgUgWgcgkgvg7hEhLhPhRhQhMhGg9gygkgTgAfqfSe3edeGdydhdSdGc8","r-bun|h-bunny":"BEBEFofSfTfTfTfVfbflf0gHgfg3hKhZhkhrhthrhkhZhThQhThZhkhqhshuh1h3h1huhjhUhBgwgkgcgYgZgegngyg5g7g5gygngYgFfyflfbfWfVfVfVfV","r-bun|h-cat":"BEB0D0iTiTiTiTiTiTiTiUiViXiZich0ici1i2i1ixiqihiViHh2hnhahPhHhChAhAhChIhQhahnh3iFiRiaihilimiliOhqiTiQiOiMiLiKiKiKiKiKiKiK","r-bun|h-flowers":"AAAAFoeReTeaele0fFfRfZfhfmfqftfvfwfxfxfxfyf2f_gMgegzhOhqiCiWiliwi5jAjEjHjJjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjJjIjGjCi9i1isifiNh3hdg_glgQgAf0fsfofmflfkfkfjfifhfefafVfOfDezekeZeT","r-bun|x-ribbon":"BEBEFodsdtdtdudzd8eJebexfLfqgIgig3hIhVhdhhhmhthvhthmhbhMg8gxgpgjgcgWgQgKgFgDgDgDgFgLgVgggngpgngggVgGfzfbe-ekeOd8dvdmdhdg","r-long|h-bunny":"BEBEFofcfdfffiflfrfyf4f9gCgGgKgNgQgTgXgegkgogqgqgngigagQgHgBf9f8f9gBgIgRgbgjgogrgrgqgmghgbgWgSgPgLgHgDf-f5f0fvfrfoflfkfj","r-long|h-cat":"BEBEFofmfmfnfpfsfvfyf1f4f7f9f_gCgEgHgLgSgZghgpgyg4g8g9g7g3gwgrgpgpgsgyg2g3g2gygrgkgegYgSgMgJgGgDgBf-f8f5f3f0fyfwfuftfsfr","r-long|h-flowers":"AAAAFofhfhfififjflfmfofpfqfsftfvfwfxfyfzf0f1f2f3f5f6f8f-gAgCgEgHgJgKgMgNgOgOgPgPgPgPgPgQgQgRgSgTgUgUgVgWgWgWgWgWgWgWgWgWgVgUgSgPgMgJgGgCf_f8f6f4f2f1f0fzfyfxfwfwfvfuftfsfqfpfnfmflfjfififh","r-long|x-ribbon":"BEBEFofkfkfjfjfjfmfrfxf4f-gDgHgKgNgPgSgWgdgiglgmgkgggZgQgFf9f4f1f1f4f9gFgPgXgdggghgfgbgUgPgNgLgJgHgEgBf8f2fwfrfofnfofpfq","r-pony|h-bunny":"BEBEFofNfNfLfLfOfTfbflfxf6gBgFgIgKgMgOgRgSgSgRgOgNgMgLgLgLgKgKgJgJgKgLgOgRgWgagfgjgngpgrgqgoglgfgZgQgEf2fqfhfbfXfVfWfafb","r-pony|h-cat":"BEBEFoe2e2e6e_fHfSfgfsf1f8gAgCgDgHgNgWghgvhAhOhahjhqhuhvhuhqhjhchYhXhYhbhfhhhghchWhNhCg1grgjgdgWgNgBfzfkfYfPfIfEfCfDfFfG","r-pony|h-flowers":"AAAAFogogogngngmglgjghgegagVgPgJgCf7f1fufofjfffbfYfWfUfTfRfPfMfIfDe6eseaeEdpdKcmcDbjbIayafaRaIaCaCaFaMaYaoa9bWbzcUc5dad2eOehewe7fBfDfEfFfHfJfMfQfVfafgflfrfxf3f-gEgKgQgVgageghgjglgmgngngo","r-pony|x-ribbon":"BECCFoh6h6h6h6h6h6h6h6h5h4h2hyhthlhahNgnhIhchlhshwhxhwhshlhchQhCg0gpghgagUgQgNgKgIgGgEgCf-f5fyfofcfNe9evekebeVeReQeSeUeW","r-short|h-bunny":"BEBEFoepepereye8fLfff1gGgTgdgjglgjgdgVgJf4fjfSfFe8e4e4e9fGfRfXfZfXfQfFe8e3e2e6fCfPfgf1gHgUgdgjglgjgdgUgHf2fgfPfCe5e1e0e0","r-short|h-cat":"BEBEFofcfcfbfdfkfwf_gTgmg0g_hFhHhFg_g0glgSf_fyfofjfifmfuf1f3f1fyftfofffWfSfSfXffftf-gUgng1hAhGhIhGhAg2gogWgEf2ftfofofsft","r-short|h-flowers":"AAAAFofmfmfmflflflflflfkfjfifhfffdfbfZfWfSfPfOfQfVfcfmfyf-gIgPgUgWgXgYgZgZgZgZgZgYgYgXgWgVgUgUgVgWgXgYgagbgcgdgdgegegegegegdgcgbgZgVgOgFf5frfgfXfRfNfMfOfSfWfafdfffhfifjfkflflflflflfmfmfm","r-short|x-ribbon":"BEBEFoeIeHeGeFeJeReeevfEfXfmfyf6f-f-f6fxflfefbfcfafbfgfqf4gDgJgLgJgDf4fpfbfRfLfKfNfUfgfuf3f8f9f6fzfnfYfFexeieXeRePeReUeV","r-spiky|h-bunny":"BEByD0jejejejejejdjcjajWjRjLjCiVh0eTdndRdQdQdcd-efeqefd-dTc8c8c8c8c8dKdteOeZeOdtdWdVdVdVdreWhtiJi8jEjKjOjRjTjUjUjUjUjVjV","r-spiky|h-cat":"BEB0D2jNjNjMjMjMjMjLjJjGjCi8i0iFhqgifJePdzd2eXfXgTgwgvgQfSezeJd9eQfBgNg7hKg7gNfOePdudseIfDgchuiOi5jCjIjNjRjTjUjVjVjVjVjV","r-spiky|h-flowers":"AAAAFocpcpcpcpcqcqcrcuc4dKdieBenfJflf6gIgPgPgPgOgOgOgOgNgNgLgDgBgHgTgcgjgpgugyg1g4g6g8g9g_hAhBhBhBhChChChChChChBhAg_g9g5g0gtgkgdgYgWgTgRgQgOgNgMgLgJgIgHgHgBf0fgfFejd-dfdIc3cucrcqcqcpcpcp","r-spiky|x-ribbon":"BEB0D0igigigigigifieibiXiRiIh9hGgpfbe5emekewfNf5gdgyg3hHhmiHiZibiYiFhjg-gogigWf6fPe0epetfBfkgwhGh7iGiPiViZicidieieieieie","r-swept|h-bunny":"BEBEFoczc9dKdadseBeYezfNfkf5gLgbgogyg6g_hChChAg7g0gqgegSgKgDgAf_gAgFgLgVghgtg2g9hBhDhCg_g5gxgmgZgJf2fhfJeveXeCdwdgdTdIdA","r-swept|h-cat":"BEBEFocfcrc6dLdfd1eOeqfEfbfwgCgSgfgqgzg6hAhEhHhJhKhLhJhFg-g4g0gzg1g5g_hGhKhLhKhIhGhEhAg7gzgqgfgSgCfwfbfEeqeQd5dkdSdDc2cs","r-swept|h-flowers":"AAAAFofqfqfqfqfqfqfqfrfrfsfsftfufvfwfxfyf0f2f5f7f-gBgDgFgHgJgLgNgPgSgVgagjg0hIhbhsh7iBiAh4hrhUgygFfWeyeYeIeDeJeYeyfXfxgAgFgIgKgLgMgMgLgKgIgGgEgBf_f8f6f3f1f0fyfxfwfvfuftftfsfsfsfrfrfrfrfq","r-swept|x-ribbon":"BEBEEAcIcScfcvdBdWdueIeke-fVfqf8gLgYgigqgvgygygwgrgkgagOgFf_f6f5f6f-gEgNgZgjgrgwgzgzgwgrgjgZgMf8fqe7eDeiegedecebeaeaeZeZ","r-twin|h-bunny":"BEB4DyglglglglglglgmgmgmgngogrgtgSgrg5hChNhbhrh5iFiOiViZiaiZiViUiWiaibiaiWiPiGh6hshbhMhAg3gzgZgpgmgjgigggggfgfgfgfgfgfgf","r-twin|h-cat":"BEB2DqapapapapapaoamajafaZaSaHZ5aOcgeeexfBfOfZfjfwf_gNgZgigpgtgugtgpgigZgNf_fufffNe5eicNZZZGapbabibobtbwbybzb0b0b0b0b0b0","r-twin|h-flowers":"AAAAFocKcKcKcKcKcKcJcIcHcFcDcBb-b7b7cAcJcXcpc_dZd4eYezfKfcfqf0f5f6f6f6f6f6f6f6f6f5f5f4f3f1f0fzfyfyfyfyfzf1f3f4f6f8f9f-f_gBgCgEgFgGgDf8fwfgfMezeWd0dWc8cmcUcHb-b6b6b-cBcDcFcHcIcJcKcKcKcKcK","r-twin|x-ribbon":"BEBEFodHdLdSdbdnd2eHebexfKfmf-gVgog5hHhThchjhnhohnhjhchThHg8g0gugogigbgVgRgQgSgVgXgXgVgQgJf_fzfkfSe-eneTeBdydldcdUdQdNdO","r-wave|h-bunny":"BEBEFofrfsfufwfzf3f8gCgHgMgRgXgdgkgqgwg2g6g8g8g5g0gsgigWgMgFgBf_gAgDgJgSgdgogxg3g7g8g6g2gvgpgjgdgYgSgNgJgEf_f7f3f0fyfwfv","r-wave|h-cat":"BEBEFofmfnfpfrfufyf4f9gCgHgNgSgYgeglgrgxg3g8g_hBhChBg9g3gugogkgjgkgogug3g9hBhChBg_g8g3gxgrgkgegYgRgMgHgCf-f5f0fwfufrfqfp","r-wave|h-flowers":"AAAAFogOgOgOgPgQgRgSgTgVgWgXgYgagbgcgcgdgegfgfggghghghgigigigigighghgggfgegcgagZgXgVgUgTgTgTgTgUgWgXgYgZgagbgcgcgdgdgegegegegegfgfgfgfgfgegegegdgdgcgbgbgagagZgZgYgYgXgWgVgUgTgSgRgQgPgPgO","r-wave|x-ribbon":"BEBEFof-f_gBgDgGgJgNgRgUgYgcghgngtgzg5hAhFhKhNhOhMhIhBg4gsgjgcgYgWgXgbghgqg1g9hDhGhHhFhCg9g3gxgsgmgggcgYgTgPgLgIgEgCgBgA"}},m:{c:[22e-6,.148792,-292e-6],t:{"r-bob|x-holly":"CoEf7Qf7Sf7Sf7VDLGf7Hf73f7Qf7Vf7Af4nDvGf7Hf7Hf9Nf9Gf4nf4nETGf7Hf6Sf6xf6Df5gf4nE4Ef4af2Df2Pf4JFcEf2Df2Jf2Jf2P","r-short|x-cherry":"CnEf26f2_f2_f3EDLGf5Lf26f3EfzEfsUfrODvGf5Pf7cf8lftafrOfq3ETGf6af5Xf5Pfrefqffq3E3Gf5Xf5Tf0sfvvfq_fqf","r-spiky|x-cherry":"CnEf26f2_f2_f3DDLGf5Mf26f3DfzEfsUfrODvGf5Qf7df8mftafrOfq2ETGf6af5Yf5Qfrsfqffq2E3Gf5Yf5Uf0xfv0frGfqf","r-twin|x-holly":"CoEf6sf6uf6uf6xDLGf67f7xf6sf6xf6_f4pDvGf67f67f9qf9jf4pf4pETGf67f38f8If7Ef3Hf4pE4EfzlfrCfrOfzJFcEfrCfrIfrIfrO"},b:{"r-bob|h-bunny":"BEBEFodNdVdgdud-eRene9fRfifxf9gGgNgRgTgSgOgIf_f0fmfVfHe8ezetepeoeqeue1e-fKfZfpf2gBgJgPgSgTgRgNgGf9fxfifRe9eneSeBdydldbdU","r-bob|h-cat":"BEBEFodNdUdddpd4eJedezfIfbfrf4gDgLgRgUgVgTgPgKgDf8f0fufmfcfVfRfPfQfTfZfifpfxf6gCgJgPgTgVgVgTgOgHf9fxfifQe8eleQd9dtdgdVdN","r-bob|h-flowers":"AAAAFogKgKgKgKgKgKgKgKgKgLgLgLgLgLgLgLgLgLgLgLgLgLgLgLgLgLgKgJgIgGgCf-f4fvfofjfgfcfXfSfQfQfTfZfdfefdfZfXfXfYfZfcfcfdfgfmfuf3f9gCgFgIgKgKgKgKgKgJgHgGgFgFgFgFgGgGgHgIgIgIgJgJgJgJgKgKgKgKgK","r-bob|x-ribbon":"BEBEFocncwc8dKdbdveFeee6fVftgDgWgng1hAhJhPhThUhShOhHg-gygoghgdgbgcgfglgug5hDhLhQhThThQhLhDg5gsgcgKf1fefEeneNd2didQdBc0cq","r-bun|h-bunny":"BEBEFoeVeTeSeTeWedemexfAfQfjfzgBgNgXgggsg7hMhdhrh3iAiJiUiiiui3i-jCjDjCi-i3iuiiiUiDhwhZhCgugcgNgAfyfhfQfBe1eselehefegekem","r-bun|h-cat":"BEBEFoe5e5e5e6e9fFfRfif3gQgog7hKhVhchehchVhKhCg_hAhChAg9g_hFhMhOhMhFg6gtgkgfgegZgUgUgYgggqgvgwgtglgZgJf0fifUfKfFfEfFfFfG","r-bun|h-flowers":"AAAAFoewexe1e7fEfPfYfefjfnfpfqfrfrfsfsfsfrfrfrfrfsfsftftfufvfwfxfxfyfyfyfyfyfyfyfxfxfxfxfwfwfwfwfwfvfvfvfufufuftftftftftftftftftfsfsfsfsfrfrfrfrfrfrfrfsfsfsfsfsfsfsfrfqfnfkfffZfQfFe8e1ex","r-bun|x-ribbon":"BEBEFoeTecene1fGfZfvgHgegxhChQhchlhshwhxhwhshohnhohnhjhchThHg5gsghgZgTgQgQgSgXgegog0g9hEhIhJhIhEg9g0gogagJf2fifRfDe3euen","r-long|h-bunny":"BEBEFof6f6f8f_gEgLgTgaggglgpgrgsgugugwgygzg0gzgvgpgggVgJgAf6f2f1f2f7gBgKgWghgpgvgyg0gzgxgugtgtgsgrgoglgggagTgMgGgDgAf-f9","r-long|h-cat":"BEBEFofNfOfPfSfVfYfcfgfkfofsfvfzf5gCgOgcgrg3hAhHhLhNhMhIhCg7g3g1g1g5g_hDhEhDg_g4gvgjgVgJgAf6f2fyfvfrfofkfhfefbfYfWfVfUfT","r-long|h-flowers":"AAAAFogEgEgEgEgEgEgEgEgEgEgEgEgEgFgFgFgGgGgHgHgIgIgJgJgJgKgKgKgKgKgKgKgKgKgKgKgKgKgLgLgMgNgOgPgPgQgRgSgTgTgUgUgVgVgVgVgVgUgUgTgSgRgPgNgLgKgIgHgGgFgFgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgE","r-long|x-ribbon":"BEBEFofgfhfifjflfofqftfwfyf1f3f6f8gBgIgRgZgeghghgegZgRgHf-f3fzfyfzf3f-gHgRgZgeghghgegZgRgIgCf-f7f3f0fwfsfofjfgfefffhfjfk","r-pony|h-bunny":"BEBEFofOfMfJfIfLfPfWfgfqfxf2f4f5f5f6f9gCgFgHgIgIgJgNgTgZgdgegdgbgYgUgSgRgRgSgVgXgagdgegfgegbgXgSgMgDf4frfhfafVfTfTfWfafc","r-pony|h-cat":"BEBEFofUfTfQfMfIfHfIfMfTfcfkfqfuf0f9gJgXgjgsgzg3g4g3gzgsgjgcgWgPgLgIgGgEgCgAf-f8f7f5f4f2fzfvfqfjfbfSfLfHfFfGfKfQfZfgflfn","r-pony|h-flowers":"AAAAFogigigigighgggfgdgagXgSgNgHgAf5fzftfnfifefafXfUfSfQfOfMfJfGfCe7eyemeYeHdzdddGcychcScGb8b1bwbvbvbzb5cBcMcacrc-dTdpd9eQegeue5fCfIfNfQfTfVfXfZfcfffjfoftfyf3f8gCgHgMgRgVgZgcgeggghghgigi","r-pony|x-ribbon":"BECCFoh0h0h0h0h0h0h0h0h0hzhxhuhphihZhPgyhRhihrhyh2h3h2hyhrhihWhIg4gqgfgXgQgLgIgFgDgCgAf-f8f4fxfofcfOe9eueheXePeKeIeIeLeM","r-short|h-bunny":"BEBqFogNgNgNgNgNgOgPgQgRgUgAgYgYgXgUgOgEf1fmfbfUfSfUfbfmf1gAgGgIgGgAf1fmfbfVfTfVfcfnf2gDgLgPgQgNgFf5fpfUe_evekedeaebegei","r-short|h-cat":"BEBEFofcfbfZfXfXfefsgBgZgqg0g6g9g6gzgogXf_fjfPfBe7e7fCfQfXfXfZfafafYfPe_e1eye2fBfSfrgIgegtg2g8g9g6g0gqgZgBfufifdfffkfofp","r-short|h-flowers":"AAAAFof4f4f4f4f4f5f5f5f5f5f5f5f5f4f4f4f3f2f1fzfxfuftfufyf4gBgNgbgsg9hLhXhghnhshxh0h2h4h6h7h8h9h-h-h_h_h_h_h_h-h-h8h6h3hzhthlhchQhDgzgigTgHf9f2fyfwfxfzf0f2f3f4f4f4f5f5f5f5f5f5f5f5f5f4f4f4","r-short|x-ribbon":"BEBEFoeBeBeCeHeQedevfFfcfuf9gIgPgSgRgMgCf2fvfsftfrfuf0gAgKgRgWgXgVgPgEf1fofgfcfcfhfqf4gEgNgSgTgQgIf8fufcfFeyejeYeSeQeSeS","r-spiky|h-bunny":"BEB0D0i9i9i9i9i8i8i7i5i2iyisilh1hYeDdUc7c3c3dJdweReceRdwdEctckckckckc4dieDeOeDdidAczczc6dXeJhch2imitizi4i7i9i9i-i-i-i-i-","r-spiky|h-cat":"BEB0D0jTjTjTjTjSjSjRjQjNjJjDi8iMh1gvfWebd_eBeifhgRg_hOg_gZgSghgSgIgdhQh-iNh-hQgEe_eZeSeofdgxh5iMi6jCjHjLjOjQjQjRjRjRjRjR","r-spiky|h-flowers":"AAAAFoepepeoeoenelekeiefeceaeYeZeeeoeye3e4e1eteiebeZeVeUeTeOeLeMeRebeiekeiebeQeFd-d7d4d3d2d1d0d0d0d0d1d2d3d7eCeIeOeTeYeheve-fJfQfSfQfJe-ewenehegeeeheneye5e7e5eyeneeeZeZecefehekemeneoeoep","r-spiky|x-ribbon":"BEB2DyjHjHjHjHjHjHjGjFjCi_i6iziohkglfKeyepewfHftgcg8hMhahnh0h9h7hphIglgSgPgbgZgHfmfJe7e9fOgxhriwi7jAjEjHjJjKjLjLjLjLjLjL","r-swept|h-bunny":"BEBEFoeaeYeTeJd4d2eEehfJfhf3gLgbgpg0g8hChFhGhEg_g3gsgfgQf_fufrf3gUg7hShahShGhIhKhKhKhHhDg9g0gpgcgMf5fkfNeweHdudldrd7eAeD","r-swept|h-cat":"BEBEFocQcRcScUcWcZcrdNd-eifMfzgPgggsg3hAhIhNhRhUhXhYhUhBgmgUgLgJgQgng8hKhVhYhXhUhRhNhHhAg3grgegOf1fNejd-dRcwcfcecgcicjcj","r-swept|h-flowers":"AAAAFofMfMfNfOfOfPfQfSfTfUfWfXfZfafcfdfffgfhfifjfjfjfkfkflfmfnfpfsfwf_gagxhFhThahfhihihihihhhdhVhHgbfQeRdwdueLfGfnfqfrfsftftftfufuftftftfsfrfqfofmfkfifgfdfcfafZfYfWfVfUfTfSfRfQfPfOfNfNfM","r-swept|x-ribbon":"BEBoEAfefefffffgfhfiflfnfHfrgEgQgagigogsgugugsgngggWgJf5fofYfOfKfOfYfof5gJgWghgogtgvgvgtgpgigagPgDfpfFflfifgfefdfcfcfcfc","r-twin|h-bunny":"BEB4Dqg9g9g9g9g9g9g9g8g6g3gzgugogIg0hch0iLieivi9jJjSjZjdjejdjZjZjbjfjgjfjbjUjLi_ixigiNhhgKgWgvg-hFhMhQhThVhWhXhXhXhXhXhX","r-twin|h-cat":"BEB4DwcvcvcvcvcvcucscqcmchcacQb7bNdOfhfygAgLgUgagegggkgrg0g7g_hAg_g7g0grgkgggegagTgKf-fvfedlbxcScacgclcpcrcsctctcucucucu","r-twin|h-flowers":"AAAAFobubububububvbvbvbvbvbvbvbwbwbwbxbyb6cIcec7deeJe1fZf3gOgegngpgqgrgsgsgsgrgqgpgogngmglglgmgngogpgqgrgrgsgsgsgsgtgtgugvgxgzg1g1gugggLfvfNejd0dNcscScAb0bvbubtbtbtbtbtbtbtbtbtbtbtbtbubu","r-twin|x-ribbon":"BEBEFocIcUcjc0dIdfd4eUezfTfxgNglg8hPhghuh6iDiKiOiPiOiLiGiAh8h5h2hwhohehUhMhEg9g0grghgVgJf7ftfcfJezebeCdsdZdIc6cuclcfcbca","r-wave|h-bunny":"BEBEFofYfYfafcfffiflfofrftfwfyf0f2f4f7f8f9f8f4fyfpfefQfFe8e2ezeye0e4e_fJfVfifsf0f5f8f8f7f5f3f1fyfxfvftfrfoflfifffcfafZfY","r-wave|h-cat":"BEBEFofCfDfEfHfKfPfWfdfkfqfxf4gAgIgQgZghgogugygzgygugogfgWgQgMgKgMgQgWgfgogugygzgygugpghgZgQgIf_f3fvfpfjfdfXfRfMfJfGfEfE","r-wave|h-flowers":"AAAAFofvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfufufufuftfsfrfqfofmfkfifffdfcfafafZfafbfcfdfffgfifjfkflfmfnfofqfrftfufvfwfwfwfwfwfwfwfwfwfvfvfvfvfvfvfvfvfvfwfwfwfwfwfwfwfwfvfvfv","r-wave|x-ribbon":"BEBEFofufvfxfzf2f7gDgKgRgYgfgmgtg0g8hDhKhQhVhYhZhXhThMhDg4gwgqgngmgogtg0g-hHhNhRhShRhNhHhAg5gxgpghgagVgQgLgGgBf8f5f3f2f1"}}};var da={f:{"z-1":{"r-long":{"w-angel":.1574,"w-bag":.1534,"w-batwing":.1473,"w-butterfly":.1487,"w-jetpack":.1536},"r-wave":{"w-angel":.2035,"w-bag":.1969,"w-batwing":.1942,"w-butterfly":.1923,"w-jetpack":.1949}},"z-2":{"r-long":{"w-angel":.1577,"w-bag":.1536,"w-batwing":.1486,"w-butterfly":.1491,"w-jetpack":.1538},"r-wave":{"w-angel":.2037,"w-bag":.1965,"w-batwing":.1947,"w-butterfly":.1925,"w-jetpack":.1951}},"z-3":{"r-long":{"w-angel":.1587,"w-bag":.1538,"w-batwing":.1495,"w-butterfly":.1493,"w-jetpack":.154},"r-wave":{"w-angel":.2039,"w-bag":.1962,"w-batwing":.1949,"w-butterfly":.1923,"w-jetpack":.1953}},"z-4":{"r-long":{"w-angel":.1589,"w-bag":.154,"w-batwing":.1499,"w-butterfly":.1496,"w-jetpack":.1542},"r-wave":{"w-angel":.2041,"w-bag":.1956,"w-batwing":.1951,"w-butterfly":.1917,"w-jetpack":.1952}},"z-5":{"r-long":{"w-angel":.1592,"w-bag":.154,"w-batwing":.1502,"w-butterfly":.1498,"w-jetpack":.1544},"r-wave":{"w-angel":.2043,"w-bag":.1949,"w-batwing":.1953,"w-butterfly":.191,"w-jetpack":.1954}}},m:{"z-1":{"r-long":{"w-angel":.1511,"w-bag":.1473,"w-batwing":.1419,"w-butterfly":.1429,"w-jetpack":.1453},"r-wave":{"w-angel":.1978,"w-bag":.19,"w-batwing":.1886,"w-butterfly":.1865,"w-jetpack":.1864}},"z-2":{"r-long":{"w-angel":.1524,"w-bag":.1475,"w-batwing":.1423,"w-butterfly":.1431,"w-jetpack":.1455},"r-wave":{"w-angel":.198,"w-bag":.1896,"w-batwing":.1888,"w-butterfly":.1867,"w-jetpack":.1866}},"z-3":{"r-long":{"w-angel":.1526,"w-bag":.1477,"w-batwing":.1434,"w-butterfly":.1434,"w-jetpack":.1457},"r-wave":{"w-angel":.1982,"w-bag":.1891,"w-batwing":.189,"w-butterfly":.1856,"w-jetpack":.1867}},"z-4":{"r-long":{"w-angel":.1531,"w-bag":.1473,"w-batwing":.1439,"w-butterfly":.1436,"w-jetpack":.1459},"r-wave":{"w-angel":.1984,"w-bag":.1885,"w-batwing":.1892,"w-butterfly":.1858,"w-jetpack":.1869}},"z-5":{"r-long":{"w-angel":.1533,"w-bag":.1469,"w-batwing":.1441,"w-butterfly":.1438,"w-jetpack":.146},"r-wave":{"w-angel":.1982,"w-bag":.1879,"w-batwing":.1894,"w-butterfly":.1847,"w-jetpack":.1871}}}};var Ey="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",On=new Int8Array(128);for(let i=0;i<64;i++)On[Ey.charCodeAt(i)]=i;function Ty(i){let e=[];for(let t=0;t<i.length;){let n=On[i.charCodeAt(t)]*64+On[i.charCodeAt(t+1)],s=On[i.charCodeAt(t+2)],r=Math.floor(n/36),a=n%36;t+=3;for(let o=0;o<s;o++,t+=3)e.push(r,a+o,On[i.charCodeAt(t)]*4096+On[i.charCodeAt(t+1)]*64+On[i.charCodeAt(t+2)]-131072)}return e}function op(i){typeof i=="string"&&(i=Ty(i));let e=new Float32Array(3600).fill(NaN),t=0,n=0,s=0,r=0;for(let a=0;a<i.length;a+=3){let o=i[a+2]*1e-5;e[i[a]*100+i[a+1]]=o,i[a+1]===35&&(t+=o,n++),i[a+1]===0&&(s+=o,r++)}return e.top=n?t/n:NaN,e.bottom=r?s/r:NaN,e}function Ry(i,e,t){let n=e/10-.5,s=(t+90)/5-.5,r=Math.floor(n),a=Math.floor(s),o=n-r,l=s-a,c=0,h=0;for(let p=0;p<2;p++)for(let b=0;b<2;b++){let g=i[((r+p)%36+36)%36*100+a+b];if(!(g>-1e9))continue;let m=(p?o:1-o)*(b?l:1-l);c+=m*g,h+=m}let u=h>1e-6?c/h:0,f=90-5/2;return t>f&&i.top===i.top?u+(i.top-u)*(t-f)/(5/2):t<-f&&i.bottom===i.bottom?u+(i.bottom-u)*(-f-t)/(5/2):u}function cp(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],l=s-e[2],c=Math.hypot(a,o,l)||1e-9,h=(Math.atan2(a,l)*180/Math.PI+360)%360,u=Math.asin(Math.max(-1,Math.min(1,o/c)))*180/Math.PI,f=(c+Ry(i,h,u))/c;return r[0]=e[0]+a*f,r[1]=e[1]+o*f,r[2]=e[2]+l*f,r}var Cy=4;var Iy=1e-4;function hf(i){let e=s=>On[i.charCodeAt(s)]*64+On[i.charCodeAt(s+1)]-180,t=e(0),n=new Float32Array((i.length-6)/2);for(let s=0;s<n.length;s++)n[s]=(On[i.charCodeAt(6+2*s)]*64+On[i.charCodeAt(7+2*s)]-2048)*Iy;return{a0:t,lo:e(2),hi:e(4),v:n,ring:t===-180}}function Py(i,e){let t=i.v.length,n=(e-i.a0)/Cy,s=Math.floor(n),r=n-s,a=o=>i.v[i.ring?(o%t+t)%t:Math.max(0,Math.min(t-1,o))];return a(s)*(1-r)+a(s+1)*r}function lp(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],l=s-e[2],c=Math.atan2(a,i.ring?l:o)*180/Math.PI;if(!i.ring&&(c<i.lo||c>i.hi)){c=c<i.lo?i.lo:i.hi;let f=Math.hypot(a,o),p=c*Math.PI/180;a=f*Math.sin(p),o=f*Math.cos(p)}let h=Math.hypot(a,o,l)||1e-9,u=(h+Py(i,c))/h;return r[0]=e[0]+a*u,r[1]=e[1]+o*u,r[2]=e[2]+l*u,r}var Nc=(i,e,t,n)=>Math.floor((Math.atan2(i,t)*180/Math.PI+360)/2)%180*90+Math.min(89,Math.max(0,Math.floor((Math.asin(Math.max(-1,Math.min(1,e/n)))*180/Math.PI+90)/2)));function ff(){return{lo:new Float32Array(16200).fill(-1),hi:new Float32Array(16200).fill(-1),hv:new Float32Array(16200).fill(-1)}}function Uc(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],l=s-e[2],c=Math.hypot(a,o,l);if(!c)return;let h=Nc(a,o,l,c);c>i.hi[h]&&(i.hi[h]=c),r&&c>i.hv[h]&&(i.hv[h]=c),(i.lo[h]<0||c<i.lo[h])&&(i.lo[h]=c)}function uf(i,e,t){return df(i.lo,e,t)}function df(i,e,t){let n=new Float32Array(16200).fill(NaN),s=new Float64Array(16200).fill(1/0);for(let r=0;r<180;r++){let a=r*90;for(let o=-e;o<=e;o++){let l=((r+o)%180+180)%180*90;for(let c=0;c<90;c++){let h=i[l+c];h>=0&&h<s[a+c]&&(s[a+c]=h)}}}for(let r=0;r<180;r++){let a=r*90;for(let o=0;o<90;o++){let l=1/0,c=Math.min(89,o+e);for(let h=Math.max(0,o-e);h<=c;h++){let u=s[a+h];u<l&&(l=u)}l<1/0&&(n[a+o]=l-t)}}return n}function pa(i,e,t){for(let n=0;n<i.length;n++)i[n]===i[n]&&e.hi[n]>=0&&i[n]<e.hi[n]+t&&(i[n]=e.hi[n]+t);return i}function hp(i,e,t){let n=0;for(let s=0;s<i.length;s+=3){let r=i[s]-e[0],a=i[s+1]-e[1],o=i[s+2]-e[2],l=Math.hypot(r,a,o);if(!l)continue;let c=t[Nc(r,a,o,l)];if(!(l>c)||c<=0)continue;let h=c/l;i[s]=e[0]+r*h,i[s+1]=e[1]+a*h,i[s+2]=e[2]+o*h,n++}return n}var pf=["h-cat","h-bunny","x-ribbon","h-flowers"],mf=.003,fp=5e-4,gf=.01,bf=8,up=["r-twin|h-flowers"],dp=.02,pp=.001;function mp(i,e){let t=Float64Array.from(i),n=new Float64Array(90);for(let o=0;o<90;o++)n[o]=Math.max(.02,Math.cos(((o+.5)*2-90)*Math.PI/180));let s=(o,l,c)=>{let h=o*90+l,u=t[h];for(let f=0;f<c.length;f+=2){let p=l+c[f+1];if(p<0||p>=90)continue;let b=t[((o+c[f])%180+180)%180*90+p]+e*2*Math.hypot(c[f]*n[l],c[f+1]);b<u&&(u=b)}t[h]=u},r=[-1,-1,-1,0,-1,1,0,-1],a=[1,1,1,0,1,-1,0,1];for(let o=0;o<2;o++){for(let l=0;l<180;l++)for(let c=0;c<90;c++)s(l,c,r);for(let l=179;l>=0;l--)for(let c=89;c>=0;c--)s(l,c,a)}return t}var xf=0,Ly=8;function gp(i,e,t,n,s,r,a){let o=i.length/3,l=new Map,c=new Int32Array(o);for(let _=0;_<o;_++){let v=Math.round(i[3*_]*1e5)+","+Math.round(i[3*_+1]*1e5)+","+Math.round(i[3*_+2]*1e5),S=l.get(v);S===void 0&&l.set(v,S=l.size),c[_]=S}let h=l.size,u=Math.floor(e?e.length/3:o/3),f=new Float64Array(h),p=new Float64Array(h),b=new Uint8Array(o),g=a*.02,m=_=>e?[e[3*_],e[3*_+1],e[3*_+2]]:[3*_,3*_+1,3*_+2],d=(_,v)=>{let S=3*_[0],y=3*_[1],x=3*_[2],A=Math.max(Math.hypot(i[S]-i[y],i[S+1]-i[y+1],i[S+2]-i[y+2]),Math.hypot(i[y]-i[x],i[y+1]-i[x+1],i[y+2]-i[x+2]),Math.hypot(i[x]-i[S],i[x+1]-i[S+1],i[x+2]-i[S+2])),T=Math.min(16,Math.max(1,Math.ceil(A/a)));for(let R=0;R<=T;R++)for(let P=0;P<=T-R;P++){let F=R/T,L=P/T,U=1-F-L,B=i[S]*F+i[y]*L+i[x]*U-t[0],z=i[S+1]*F+i[y+1]*L+i[x+1]*U-t[1],Y=i[S+2]*F+i[y+2]*L+i[x+2]*U-t[2],H=Math.hypot(B,z,Y);H&&v(F,L,U,H,Nc(B,z,Y,H))}},w=(_,v)=>{let S=i[3*_]-t[0],y=i[3*_+1]-t[1],x=i[3*_+2]-t[2],A=Math.hypot(S,y,x);if(!A)return;let T=A+v;if(v<0&&r){let P=r[Nc(S,y,x,A)];P>0&&T<P&&(T=Math.min(A,P))}if(T===A)return;let R=T/A;i[3*_]=t[0]+S*R,i[3*_+1]=t[1]+y*R,i[3*_+2]=t[2]+x*R,b[_]=1};if(s){for(let _=0;_<u;_++){let v=m(_),S=0;if(d(v,(y,x,A,T,R)=>{let P=s[R];P-T>S&&(S=P-T)}),S>0)for(let y of v)S>f[c[y]]&&(f[c[y]]=S)}for(let _=0;_<o;_++)f[c[_]]>0&&w(_,f[c[_]])}if(n){let _=Array.from({length:u},(v,S)=>S);for(let v=0;v<Ly&&_.length;v++){p.fill(0);let S=[];for(let y of _){let x=m(y),A=!1;d(x,(T,R,P,F,L)=>{let U=n[L];if(!(U>0)||F-U<=g)return;let B=F-U,z=T*T+R*R+P*P,Y=[T,R,P];for(let H=0;H<3;H++){let Z=c[x[H]];if(f[Z]>0)continue;let J=B*Y[H]/z;J>p[Z]&&(p[Z]=J)}A=!0}),A&&S.push(y)}for(let y=0;y<o;y++)p[c[y]]>0&&w(y,-p[c[y]]);_=S}if(_.length){p.fill(0);for(let v of _){let S=m(v),y=0;if(d(S,(x,A,T,R,P)=>{let F=n[P];F>0&&R-F>y&&(y=R-F)}),y>g)for(let x of S){let A=c[x];!(f[A]>0)&&y>p[A]&&(p[A]=y)}}for(let v=0;v<o;v++)p[c[v]]>0&&w(v,-p[c[v]])}}let C=0;for(let _=0;_<o;_++)C+=b[_];return C}function bp(i,e,t,n,s,r){let a=Math.PI/180,o=n.length,l=u=>Number.isFinite(u),c=(u,f,p,b)=>{let g=u[f],m=u[p];return l(g)&&l(m)?g*(1-b)+m*b:l(g)?g:m},h=0;for(let u=0;u<i.length;u+=3){let f=i[u]-e[0],p=i[u+1]-e[1],b=i[u+2]-e[2],g=Math.hypot(f,p,b);if(!g)continue;let m=Math.atan2(f,b),d=(m/a%360+360)%360/2-.5,w=(Math.floor(d)%o+o)%o,C=(w+1)%o,_=d-Math.floor(d),v=c(n,w,C,_),S=c(r,w,C,_),y=c(s,w,C,_);if(!(v>0)||!l(S)||!l(y))continue;let x=Math.min(1,v/2),A=Math.min(88*a,Math.asin(Math.max(-1,Math.min(1,p/g)))+v*2*a),T=g+x*(S-y);i[u]=e[0]+T*Math.cos(A)*Math.sin(m),i[u+1]=e[1]+T*Math.sin(A),i[u+2]=e[2]+T*Math.cos(A)*Math.cos(m),h++}return h}var dr={f:{r:["h-beanie|r-long","h-beanie|r-pony","h-beanie|r-bun","h-beanie|r-spiky","h-beanie|r-twin","h-beanie|r-wave","h-cap|r-long","h-cap|r-pony","h-cap|r-bun","h-cap|r-spiky","h-cap|r-twin","h-cap|r-wave","h-cap|r-swept","h-chef|r-pony","h-chef|r-twin","h-santa|r-pony","h-santa|r-bun","h-santa|r-spiky","h-santa|r-twin","h-santa|r-wave","h-santa|r-swept","h-straw|r-long","h-straw|r-bob","h-straw|r-short","h-straw|r-pony","h-straw|r-bun","h-straw|r-spiky","h-straw|r-twin","h-straw|r-wave","h-straw|r-swept","h-witch|r-long","h-witch|r-bob","h-witch|r-short","h-witch|r-pony","h-witch|r-bun","h-witch|r-twin","h-witch|r-wave","h-bunny|r-spiky","h-cat|r-spiky","h-pumpkin|r-long","h-pumpkin|r-bob","h-pumpkin|r-short","h-pumpkin|r-pony","h-pumpkin|r-bun","h-pumpkin|r-spiky","h-pumpkin|r-twin","h-pumpkin|r-wave","h-pumpkin|r-swept","h-santa|r-long"],b:["h-beanie|x-ribbon","h-bunny|x-ribbon","h-cap|x-ribbon","h-cat|x-ribbon","h-chef|x-ribbon","h-flowers|x-ribbon","h-pumpkin|x-ribbon","h-santa|x-ribbon","h-straw|x-ribbon","h-witch|x-ribbon"],x:{"h-bow|x-cherry":[0,0,-15],"h-bow|x-heart":[0,0,-10],"h-bow|x-holly":[0,0,-10],"h-bow|x-star":[0,0,-10],"h-bow|x-thaipin":[0,0,-15],"h-chef|x-cherry":[0,0,-25],"h-chef|x-thaipin":[0,0,-30],"h-horns|x-ribbon":[-20,0,0],"h-santa|x-flower":[0,0,35]},w:{"h-cat|r-spiky":2,"h-bunny|r-spiky":2}},m:{r:["h-beanie|r-long","h-beanie|r-pony","h-beanie|r-bun","h-beanie|r-spiky","h-beanie|r-twin","h-beanie|r-wave","h-cap|r-long","h-cap|r-pony","h-cap|r-bun","h-cap|r-spiky","h-cap|r-twin","h-cap|r-wave","h-cap|r-swept","h-chef|r-pony","h-chef|r-twin","h-santa|r-pony","h-santa|r-bun","h-santa|r-spiky","h-santa|r-twin","h-santa|r-wave","h-santa|r-swept","h-straw|r-long","h-straw|r-bob","h-straw|r-pony","h-straw|r-bun","h-straw|r-twin","h-straw|r-wave","h-straw|r-swept","h-witch|r-long","h-witch|r-bob","h-witch|r-pony","h-witch|r-bun","h-witch|r-twin","h-witch|r-wave","h-cat|r-pony","h-flowers|r-bun","h-bunny|r-spiky","h-cat|r-spiky","h-pumpkin|r-long","h-pumpkin|r-bob","h-pumpkin|r-short","h-pumpkin|r-pony","h-pumpkin|r-bun","h-pumpkin|r-spiky","h-pumpkin|r-twin","h-pumpkin|r-wave","h-pumpkin|r-swept","h-santa|r-long"],b:["h-beanie|x-ribbon","h-bunny|x-ribbon","h-cap|x-ribbon","h-cat|x-ribbon","h-chef|x-ribbon","h-flowers|x-ribbon","h-pumpkin|x-ribbon","h-santa|x-ribbon","h-straw|x-ribbon","h-witch|x-ribbon"],x:{"h-bow|x-cherry":[0,0,-15],"h-bow|x-heart":[0,0,-10],"h-bow|x-holly":[0,0,-10],"h-bow|x-star":[0,0,-10],"h-bow|x-thaipin":[0,0,-15],"h-chef|x-cherry":[0,0,-25],"h-chef|x-thaipin":[0,0,-25],"h-horns|x-ribbon":[-20,0,0],"h-santa|x-flower":[0,0,35]},w:{"h-cat|r-spiky":3,"h-bunny|r-spiky":2}}};var Pf=new URL("./",import.meta.url).href,Nf=!1;function Fw(i,e){Pf=String(i).replace(/\/?$/,"/"),Nf=!!e}var xr=(Lt.v||"1")+".63d1a177",_p={"s-1":"#ffe7d6","s-2":"#f7d3b6","s-3":"#e7b58e","s-4":"#c48a62"},kc={"c-black":"#2e2624","c-brown":"#5b3a24","c-choco":"#7a4a2b","c-blonde":"#e0b25a","c-pink":"#f28fb0","c-lav":"#a98be8","c-mint":"#6fcfb8","c-silver":"#c3c9d3"},yp={"c-black":"#6b5d5a","c-brown":"#9a6a48","c-choco":"#b98258","c-blonde":"#fbe3a6","c-pink":"#ffd0df","c-lav":"#dccdfc","c-mint":"#c4f2e6","c-silver":"#f2f5fa"},va=1.15,vp={"z-1":.9,"z-2":.95,"z-3":1,"z-4":1.05,"z-5":1.1},Uy=["Spine","Spine1","Spine2","Neck","Head","LeftLeg","LeftFoot","RightLeg","RightFoot","LeftForeArm","LeftHand","RightForeArm","RightHand"];function Uf(i){let e=i.g==="m",t=Object.assign({s:"s-1",r:e?"r-short":"r-long",c:"c-black",u:"u-uniform",l:e?"l-pants":"l-skirt",k:"k-sneaker",z:"z-3"},i);return t.g=e?"m":"f",t.u&&Lt.parts[t.u]&&Lt.parts[t.u].full&&delete t.l,t}var Oy=["g","z","s","r","c","u","l","k","h","e","j","w","x","a","m"];function Ta(i){let e=Uf(i||{}),t=n=>Lt.parts[n]||(Lt.props||[]).includes(n);return Oy.map(n=>e[n]&&(n==="g"||n==="z"||n==="s"||n==="c"||(n==="m"?ds[e[n]]:t(e[n])))?e[n]:"").join("|")}function Dw(i){return!!Lt.parts[i]||(Lt.props||[]).includes(i)}var Nw=Lt,ky=Lt.v||"1",Xp=new Rc;Xp.setMeshoptDecoder(tp);var Bc=new Map;function By(i){return Nf?i.text().then(e=>{let t=atob(e.trim()),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}):i.arrayBuffer()}function Ma(i){return Bc.has(i)||Bc.set(i,fetch(Pf+i+(Nf?".txt":"")+"?v="+ky,{cache:"force-cache"}).then(e=>{if(!e.ok)throw new Error(i+" "+e.status);return By(e)}).then(e=>Xp.parseAsync(e,Pf)).catch(e=>{throw Bc.delete(i),e})),Bc.get(i)}var ya=i=>new Ce(i),_f=null;function jp(){if(!_f){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,4,64,64,62);n.addColorStop(0,"rgba(40,24,16,.42)"),n.addColorStop(.6,"rgba(40,24,16,.16)"),n.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),_f=new Br(e)}let i=new lt(new ss(.5,.34),new sn({map:_f,transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-1,i}var pr=null;function zy(){if(!pr){let i=new Uint8Array([138,138,138,141,162,232,255,255]);pr=new Li(i,i.length,1,tr),pr.minFilter=pr.magFilter=St,pr.needsUpdate=!0}return pr}function Gy(i){i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
    float rimF = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
    rimF = smoothstep(0.58, 0.9, rimF) * (0.35 + 0.65 * clamp(normal.y * 0.8 + 0.4, 0.0, 1.0));
    reflectedLight.directDiffuse += rimF * 0.55 * material.diffuseColor;`)}function Sa(i,e){let t=new Gr({color:e||i.color.clone(),gradientMap:zy(),side:i.side});return i.map&&(t.map=i.map),i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=i.depthWrite),i.alphaTest&&(t.alphaTest=i.alphaTest),i.emissive&&i.emissive.getHex()&&(t.emissive=i.emissive.clone(),t.emissiveIntensity=i.emissiveIntensity),t.name=i.name,t.onBeforeCompile=Gy,t.customProgramCacheKey=()=>"seoulful-toon",t}var yf={flapL:["ahead",-24,.8],flapR:["ahead",24,.8],bob:["up",0,.5],spinU:["up",0,.4],spinF:["ahead",0,.6],sway:["side",6,.35],swing:["side",6,.45]},Mp={"j-bowtie":[0,-.021,.005],"j-lei":[0,-.005,0]},ba={"r-long":[.3,-1.4],"r-wave":[.3,-1.4]},Hy=new Set(["r-bob","r-long","r-wave"]),Sp=new Set(["w-angel","w-batwing","w-butterfly"]),Vy=.01;function wp(i,e,t){let n=i.geometry.getAttribute("position").count,s=new Float32Array(n*3),r=new D;for(let l=0;l<n;l++)i.getVertexPosition(l,r).applyMatrix4(i.matrixWorld),s[3*l]=r.x,s[3*l+1]=r.y,s[3*l+2]=r.z,t(r.x,r.y,r.z);let a=i.geometry.index,o=a?a.count:n;for(let l=0;l+2<o;l+=3){let c=3*(a?a.getX(l):l),h=3*(a?a.getX(l+1):l+1),u=3*(a?a.getX(l+2):l+2),f=Math.max(Math.hypot(s[c]-s[h],s[c+1]-s[h+1]),Math.hypot(s[h]-s[u],s[h+1]-s[u+1]),Math.hypot(s[u]-s[c],s[u+1]-s[c+1])),p=Math.ceil(f/(e/2));if(!(p<2))for(let b=0;b<=p;b++)for(let g=0;b+g<=p;g++){let m=b/p,d=g/p,w=1-m-d;t(w*s[c]+m*s[h]+d*s[u],w*s[c+1]+m*s[h+1]+d*s[u+1],w*s[c+2]+m*s[h+2]+d*s[u+2])}}return s}function zc(i){for(;i.parent&&!i.parent.isBone;)i=i.parent;return i.name}var vf=new WeakMap;function Wy(i,[e,t]){if(vf.has(i.geometry))return vf.get(i.geometry);let n=i.skeleton.bones.map(o=>o.name.replace(/^mixamorig:?/,"")),s=n.indexOf("Head"),r=n.indexOf("Neck"),a=null;if(s>=0&&r>=0){let o=i.geometry,l=o.attributes.position,c=l.count,h=new D,u=d=>new D().setFromMatrixPosition(new Me().copy(i.skeleton.boneInverses[d]).invert()).y,f=u(s),p=f-u(r),b=new Uint16Array(c*4),g=new Float32Array(c*4);for(let d=0;d<c;d++){let w=Math.min(1,Math.max(0,((h.fromBufferAttribute(l,d).applyMatrix4(i.bindMatrix).y-f)/p-t)/(e-t)));b[4*d]=s,b[4*d+1]=n.length,g[4*d]=w*w*(3-2*w),g[4*d+1]=1-g[4*d]}let m=new Ot;for(let d in o.attributes)m.setAttribute(d,o.attributes[d]);m.setAttribute("skinIndex",new nt(b,4)),m.setAttribute("skinWeight",new nt(g,4)),m.setIndex(o.index);for(let d of o.groups)m.addGroup(d.start,d.count,d.materialIndex);a={geometry:m,inverses:i.skeleton.boneInverses.concat(i.skeleton.boneInverses[s].clone())}}return vf.set(i.geometry,a),a}var qy={"w-angel":[.4,1],"w-butterfly":[.6,2],"w-batwing":[.55,1.4]},Xy=new Set(["eye-white","eye-shade","iris","iris-dark","iris-light","iris-glow","pupil","shine","lash","brow","mouth","mouth-in","tongue","cheek"]);function Ap(i,e){let t=new sn({color:e||i.color.clone(),side:i.side});return i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=!1),t.name=i.name,t}var Kp={value:.004};function Jp(i){let e={};return i.emissive.getHSL(e),e.l*(i.emissiveIntensity||0)>.25}function jy(i){let e={};return i.getHSL(e,vt),new Ce().setHSL(e.h,Math.min(1,e.s*.85+.12),Math.max(.04,e.l*.34),vt).lerp(Ky,.22)}var Ky=new Ce("#3b2620");function Jy(i){let e=new sn({color:i,side:zt});return e.onBeforeCompile=t=>{t.uniforms.olw=Kp,t.vertexShader=`uniform float olw;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      #ifdef USE_SKINNING
        vec3 olN = objectNormal;
      #else
        vec3 olN = normal;
      #endif
      mvPosition.xyz += normalize(normalMatrix * olN) * olw;
      gl_Position = projectionMatrix * mvPosition;`)},e.customProgramCacheKey=()=>"seoulful-line",e}function jc(i){let t=(Array.isArray(i.material)?i.material:[i.material]).map(s=>Jy(jy(s.color||new Ce(3355443)))),n=i.isSkinnedMesh?new Ii(i.geometry,Array.isArray(i.material)?t:t[0]):new lt(i.geometry,Array.isArray(i.material)?t:t[0]);return i.isSkinnedMesh&&n.bind(i.skeleton,i.bindMatrix),n.frustumCulled=!1,n.userData.line=!0,n.renderOrder=i.renderOrder,i.add(n),n}function Qc(i,e,t,n=.0016){let s=2*(t||i.position.length())*Math.tan(i.fov*at/2)/Math.max(1,e);Kp.value=Math.min(.008,Math.max(n,s*1.7))}function Yy(i,e){return Sa(i,ya(_p[e.s]||_p["s-1"]))}function Zy(i,e){let t=i.getAttribute("color"),n=i.index;if(!t||!n||!e.size)return n;let s=new Uint8Array(t.count);for(let l=0;l<t.count;l++){let c=Math.round(t.getX(l)*255)+256*Math.round(t.getY(l)*255);e.has(c)&&(s[l]=1)}let r=n.array,a=new r.constructor(r.length),o=0;for(let l=0;l<r.length;l+=3){let c=r[l],h=r[l+1],u=r[l+2];s[c]&&s[h]&&s[u]||(a[o++]=c,a[o++]=h,a[o++]=u)}return new nt(a.slice(0,o),1)}function Qy(i){let e=new Set;return i.scene.traverse(t=>{let n=t.isMesh&&t.material&&t.material.userData&&t.material.userData.hide;if(n)for(let[s,r]of JSON.parse(n))for(let a=s;a<=r;a++)e.add(a)}),e}var Mf=new Map,Mn=36;function $y(i,e,t,n){i.updateMatrixWorld(!0);let s=new D;e.getWorldPosition(s);let r=new D,a=(h,u)=>(Math.atan2(u-s.z,h-s.x)/(2*Math.PI)+.5)*Mn,o=new Array(Mn).fill(1/0);for(let h of t){let u=h.geometry.getAttribute("position"),f=h.geometry.index;if(!f)continue;let p=new Float32Array(u.count*3);for(let g=0;g<u.count;g++)h.getVertexPosition(g,r).applyMatrix4(h.matrixWorld),p[3*g]=r.x,p[3*g+1]=r.y,p[3*g+2]=r.z;let b=f.array;for(let g=0;g<b.length;g+=3){let m=[b[g],b[g+1],b[g+2]];if(m.some(v=>p[3*v+1]>s.y+.3||(p[3*v]-s.x)**2+(p[3*v+2]-s.z)**2>.26*.26))continue;let d=Math.min(p[3*m[0]+1],p[3*m[1]+1],p[3*m[2]+1]),w=m.map(v=>a(p[3*v],p[3*v+2])),C=Math.min(...w),_=Math.max(...w);if(_-C>Mn/2){let v=w.map(S=>S<Mn/2?S+Mn:S);C=Math.min(...v),_=Math.max(...v)}for(let v=Math.floor(C);v<=Math.floor(_);v++){let S=v%Mn;d<o[S]&&(o[S]=d)}}}if(o.some(h=>!Number.isFinite(h)))return null;let l=o.map((h,u)=>Math.max(h,o[(u+1)%Mn],o[(u+Mn-1)%Mn])+.004);return{over:n.map(h=>{let u=h.geometry.getAttribute("position").count,f=new Float32Array(u);for(let p=0;p<u;p++){h.getVertexPosition(p,r).applyMatrix4(h.matrixWorld);let b=a(r.x,r.z)-.5,g=(Math.floor(b)+Mn)%Mn;f[p]=r.y-Math.max(l[g],l[(g+1)%Mn])}return new nt(f,1)}),hem:l}}var Sf=new Map,$n=12;function ev(i,e,t,n){i.updateMatrixWorld(!0);let s=new D,r=e.map(f=>f.getWorldPosition(new D)),a=f=>Math.abs(f-r[0].x)<=Math.abs(f-r[1].x)?0:1,o=(f,p,b)=>(Math.atan2(b-r[f].z,p-r[f].x)/(2*Math.PI)+.5)*$n,l=[new Array($n).fill(1/0),new Array($n).fill(1/0)];for(let f of t){let p=f.geometry.getAttribute("position"),b=f.geometry.index;if(!b)continue;let g=new Float32Array(p.count*3);for(let d=0;d<p.count;d++)f.getVertexPosition(d,s).applyMatrix4(f.matrixWorld),g[3*d]=s.x,g[3*d+1]=s.y,g[3*d+2]=s.z;let m=b.array;for(let d=0;d<m.length;d+=3){let w=3*m[d],C=3*m[d+1],_=3*m[d+2],v=(g[w]+g[C]+g[_])/3,S=(g[w+2]+g[C+2]+g[_+2])/3,y=a(v);if((v-r[y].x)**2+(S-r[y].z)**2>.16*.16)continue;let x=Math.min(g[w+1],g[C+1],g[_+1]),A=Math.floor(o(y,v,S))%$n;x<l[y][A]&&(l[y][A]=x)}}let c=l.map(f=>f.map((p,b)=>{let g=[p,f[(b+1)%$n],f[(b+$n-1)%$n]].filter(Number.isFinite);return g.length?Math.max(...g)+.004:1/0})),h=!1,u=n.map(f=>{let p=f.geometry.getAttribute("position").count,b=new Float32Array(p);for(let g=0;g<p;g++){f.getVertexPosition(g,s).applyMatrix4(f.matrixWorld);let m=a(s.x),d=(Math.floor(o(m,s.x,s.z)-.5)+$n)%$n;b[g]=s.y-Math.max(c[m][d],c[m][(d+1)%$n]),b[g]>0&&(h=!0)}return new nt(b,1)});return h?{over:u}:null}function tv(i,e,t,n){i.forEach((s,r)=>{let a=s.geometry,o=new Ot;for(let c in a.attributes)o.setAttribute(c,a.attributes[c]);o.setAttribute(t,e[r]),o.setIndex(a.index),o.boundingSphere=a.boundingSphere,s.geometry=o;let l=(c,h)=>{let u=c.onBeforeCompile,f=c.customProgramCacheKey?c.customProgramCacheKey():"";c.onBeforeCompile=(p,b)=>{u&&u(p,b),p.vertexShader="attribute float "+t+`;
varying float v_`+t+`;
`+p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
v_`+t+" = "+t+";"),p.fragmentShader="varying float v_"+t+`;
`+p.fragmentShader.replace("void main() {",`void main() {
if (v_`+t+" > 0.0) discard;")},c.customProgramCacheKey=()=>f+"|"+h};(Array.isArray(s.material)?s.material:[s.material]).forEach(c=>l(c,n));for(let c of s.children)c.userData.line&&(c.geometry=o,(Array.isArray(c.material)?c.material:[c.material]).forEach(h=>l(h,n+"-line")))})}var Yp=i=>i+"/body.glb";function Zp(i){let e=["r","u","l","k","h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&Lt.parts[o]),t=Lt.props||[],n=["h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&!Lt.parts[o]&&t.includes(o)),s=i.m&&ds[i.m],r=s&&t.includes(s)&&!n.includes(s)?s:"";r&&n.push(r);let a=[...new Set(n.map(o=>o[0]))];return{ids:e,want:n,mp:r,groups:a}}function Qp(i){let e=Uf(i||{}),{ids:t,groups:n}=Zp(e);return Promise.all([Yp(e.g),...t.map(s=>e.g+"/"+s+".glb"),...n.map(s=>e.g+"/props-"+s+".glb")].map(Ma))}var Lf=class{constructor(e){this.look=Uf(e||{}),this.root=new Et,this.bones={},this.meshes=[],this.move=null,this.t0=0,this.worn={},this.grown=[]}async build(){let e=this.look,{ids:t,want:n,mp:s,groups:r}=Zp(e),[a,...o]=await Promise.all([Ma(Yp(e.g)),...t.map(f=>Ma(e.g+"/"+f+".glb"))]),l=Tc(a.scene);if(this.root.add(l),this.root.add(jp()),l.traverse(f=>{f.isBone&&(this.bones[f.name.replace(/^mixamorig:?/,"")]=f)}),this.bones.Spine2&&this.bones.Head){let f=new Pi;f.name="HairLow",this.bones.Spine2.add(f),this.bones.HairLow=f}let c=new Set;o.forEach(f=>Qy(f).forEach(p=>c.add(p)));let h=null;if(this.face=[],l.traverse(f=>{if(!f.isMesh||f.userData.line)return;let p=f.material.name;p==="skin"?(f.material=Yy(f.material,e),f.geometry.getAttribute("color")&&(h=f,f.geometry=f.geometry.clone(),f.geometry.setIndex(Zy(f.geometry,c)),jc(f))):Xy.has(p)?(f.material=Ap(f.material,p==="brow"?ya(kc[e.c]||kc["c-black"]).lerp(ya("#241812"),.45):null),p==="cheek"&&(f.material.transparent=!0,f.material.depthWrite=!1,f.renderOrder=1)):f.material=Sa(f.material),f.morphTargetDictionary&&this.face.push(f),f.frustumCulled=!1,this.meshes.push(f)}),o.forEach((f,p)=>this.wear(t[p],f,h)),this.loose(),this.shod(),this.moveProps=[],this.held=[],this.grips=[],this.alive=[],this.tossed=[],this.glasses=[],this.packs=[],(await Promise.all(r.map(f=>Ma(e.g+"/props-"+f+".glb")))).forEach(f=>this.attach(f,n,s)),this.fitHead(),await this.tuck(),await this.hug(),this.tall(vp[e.z]||1),this.lowRest(),this.onHair(),this.cuffs(),ba[e.r])for(let f of this.alive)f.kind==="swing"&&(f.k=[0,f.k[1]]);return this.root.traverse(f=>{!f.isSkinnedMesh||f.frustumCulled||f.boundingSphere||(f.geometry.boundingSphere||f.geometry.computeBoundingSphere(),f.boundingSphere=f.geometry.boundingSphere.clone())}),this.ready=!0,this}wear(e,t,n){let s=e[0]==="r",r=(Lt.props||[]).includes(this.look.h);t.scene.traverse(a=>{if(!a.isSkinnedMesh||s&&r&&/~top$/.test(a.material.name))return;let o=a.skeleton.bones.map(f=>this.bones[f.name.replace(/^mixamorig:?/,"")]||this.bones.Head),l=/^p\d/.test(a.material.name)?+String(a.material.name).replace(/^p(\d+).*/,"$1"):-1,c=s&&l===1?Ap(a.material,ya(yp[this.look.c]||yp["c-black"])):Sa(a.material,s&&l===0?ya(kc[this.look.c]||kc["c-black"]):null);if(c.side=hn,s)l===1&&(c.polygonOffset=!0,c.polygonOffsetFactor=-1,c.polygonOffsetUnits=-1);else{let f={u:2+Math.max(0,l),k:4}[e[0]]||0;f&&(c.polygonOffset=!0,c.polygonOffsetFactor=-f,c.polygonOffsetUnits=-f)}let h=s&&this.bones.HairLow&&ba[e]?Wy(a,ba[e]):null,u=new Ii(h?h.geometry:a.geometry,c);u.bind(new ts(h?o.concat(this.bones.HairLow):o,h?h.inverses:a.skeleton.boneInverses),a.bindMatrix),u.frustumCulled=!1,u.userData.part=e,(n?n.parent:this.root).add(u),this.meshes.push(u),!(s&&l===1)&&!c.transparent&&jc(u),s||(u.userData.piece=l,(this.worn[e[0]]=this.worn[e[0]]||[]).push(u))})}loose(){let e=this.look,t=Lt.parts[e.u]||{},n=this.worn.u,s=this.worn.l;if(n&&t.full&&(s=n.filter(l=>l.userData.piece===1),n=n.filter(l=>l.userData.piece===0)),!n||!n.length||!s||!s.length||!this.bones.Hips||t.tucked)return;let r=e.g+"|"+e.u+"|"+(t.full?"":e.l);Mf.has(r)||Mf.set(r,$y(this.root,this.bones.Hips,n,s));let a=Mf.get(r);if(!a)return;this.hem=a.hem;let o=a.over;s.forEach((l,c)=>{let h=l.geometry,u=new Ot;for(let p in h.attributes)u.setAttribute(p,h.attributes[p]);u.setAttribute("overHem",o[c]),u.setIndex(h.index),u.boundingSphere=h.boundingSphere,l.geometry=u;let f=(p,b)=>{let g=p.onBeforeCompile;p.onBeforeCompile=(m,d)=>{g&&g(m,d),m.vertexShader=`attribute float overHem;
varying float vOverHem;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOverHem = overHem;`),m.fragmentShader=`varying float vOverHem;
`+m.fragmentShader.replace("void main() {",`void main() {
if (vOverHem > 0.0) discard;`)},p.customProgramCacheKey=()=>b};f(l.material,"seoulful-under-top");for(let p of l.children)p.userData.line&&(p.geometry=u,(Array.isArray(p.material)?p.material:[p.material]).forEach(b=>f(b,"seoulful-under-top-line")))})}shod(){let e=this.look,t=Lt.parts[e.u]||{},n=t.full?this.worn.u:this.worn.l,s=this.worn.k,r=[this.bones.LeftFoot,this.bones.RightFoot];if(!n||!n.length||!s||!s.length||!r[0]||!r[1])return;let a=e.g+"|"+(t.full?e.u:e.l)+"|"+e.k;Sf.has(a)||Sf.set(a,ev(this.root,r,n,s));let o=Sf.get(a);o&&tv(s,o.over,"overLeg","seoulful-in-leg")}attach(e,t,n){let s=[];e.scene.traverse(r=>{let a=r.name&&t.find(o=>r.name===o);a&&r.parent&&s.push([a,r])});for(let[r,a]of s){let o=this.bones[a.parent.name.replace(/^mixamorig:?/,"")];if(!o)continue;let l=a.clone();l.traverse(h=>{h.frustumCulled=!1;let u=h.name.split("~")[1];yf[u]&&this.alive.push({node:h,kind:u,k:qy[r]||[1,1],kept:/^(flap|sway)/.test(u)}),u==="toss"&&this.tossed.push({node:h}),u==="pack"&&this.packs.push(h),!(!h.isMesh||h.userData.line)&&(h.material=Sa(h.material),!h.material.transparent&&!Jp(h.material)&&jc(h))});let c=r[0]==="a"?this.grip(o,l):r===n?this.about(o,l,r[0]==="e"):(o.add(l),l);r===n?(c.visible=!1,c.userData.s0=c.scale.x,this.moveProps.push(c)):r[0]==="a"?this.held.push(c):r[0]==="e"&&this.glasses.push(c),r==="j-pearl"&&Hy.has(this.look.r)&&(c.visible=!1)}}about(e,t,n){e.add(t),this.root.updateMatrixWorld(!0);let s=new Tt().setFromObject(t,!0),r=s.getCenter(new D);n&&(r.z=s.max.z);let a=e.worldToLocal(r),o=new Et;return o.position.copy(a),t.position.sub(a),e.add(o),o.add(t),o}grip(e,t){let n=Lt.bodies&&Lt.bodies[this.look.g];if(!n||!n.fist)return e.add(t),t;t.updateMatrix();let s=new D().fromArray(n.fist).applyMatrix4(t.matrix),r=fv[t.name];if(r){this.root.updateMatrixWorld(!0);let o=new D(0,0,1).transformDirection(this.root.matrixWorld).transformDirection(new Me().copy(e.matrixWorld).invert()),l=new mt().setFromAxisAngle(o,r*at);t.position.sub(s).applyQuaternion(l).add(s),t.quaternion.premultiply(l),t.updateMatrix()}let a=new Et;return a.position.copy(s),t.position.sub(s),a.add(t),a.userData.id=t.name,e.add(a),this.grips.push(a),a}lowRest(){let e=this.bones,t=e.HairLow;if(!t)return;let n={},s=this.root.position.clone(),r=this.root.quaternion.clone();for(let a in e)n[a]=[e[a].quaternion.clone(),e[a].position.clone()];xa(this,ua(0),1),this.root.updateMatrixWorld(!0),new Me().copy(e.Spine2.matrixWorld).invert().multiply(e.Head.matrixWorld).decompose(t.position,t.quaternion,new D);for(let a in n)a!=="HairLow"&&(e[a].quaternion.copy(n[a][0]),e[a].position.copy(n[a][1]));this.root.position.copy(s),this.root.quaternion.copy(r),this.q0.HairLow=t.quaternion.clone(),this.p0.HairLow=t.position.clone(),this.root.updateMatrixWorld(!0)}onHair(){let e=this.look,t=vp[e.z]?e.z:"z-3",n=da[e.g]&&da[e.g][t]&&da[e.g][t][e.r];if(!n)return;let s=[];for(let u of this.packs)n[zc(u)]&&s.push([u,n[zc(u)]]);if(ba[e.r]&&this.root.traverse(u=>{!u.isBone&&Sp.has(u.name)&&n[u.name]&&u.parent&&u.parent.isBone&&s.push([u,n[u.name]])}),!s.length)return;let r=this.bones,a={},o=this.root.position.clone(),l=this.root.quaternion.clone();for(let u in r)a[u]=[r[u].quaternion.clone(),r[u].position.clone(),r[u].scale.clone()];xa(this,ua(0),1);for(let u of["Head","HairLow"])r[u]&&r[u].scale.setScalar(va);this.root.updateMatrixWorld(!0);let c=new D,h=s.map(([u,f])=>(u.getWorldPosition(c),c.z-=f,[u,u.parent.worldToLocal(c.clone())]));for(let u in a)r[u].quaternion.copy(a[u][0]),r[u].position.copy(a[u][1]),r[u].scale.copy(a[u][2]);this.root.position.copy(o),this.root.quaternion.copy(l);for(let[u,f]of h)u.position.copy(f);this.root.updateMatrixWorld(!0)}backMeasure(){let e=this.meshes.filter(y=>/^r-/.test(y.userData.part||"")),t=[],n={};if(this.root.traverse(y=>{!y.isBone&&Sp.has(y.name)&&y.parent&&y.parent.isBone&&t.push(y)}),!this.packs.length&&!t.length)return null;if(!e.length||!this.bones.Head)return n;let s=ba[this.look.r]?t:[];if(!this.packs.length&&!s.length)return n;let r=this.bones,a={},o=this.root.position.clone(),l=this.root.quaternion.clone();for(let y in r)a[y]=[r[y].quaternion.clone(),r[y].position.clone(),r[y].scale.clone()];xa(this,ua(0),1);for(let y of["Head","HairLow"])r[y]&&r[y].scale.setScalar(va);this.root.updateMatrixWorld(!0);let c=.01,h=new Map,u=[],f=[],p=[],b=e.map(y=>wp(y,c,(x,A,T)=>{let R=Math.round(x/c),P=Math.round(A/c),F=R*8192+P,L=h.get(F);L===void 0?(h.set(F,u.length),u.push(R),f.push(P),p.push(T)):T<p[L]&&(p[L]=T)})),g=1/0,m=-1/0,d=1/0,w=-1/0;for(let y=0;y<u.length;y++)g=Math.min(g,u[y]-1),m=Math.max(m,u[y]+1),d=Math.min(d,f[y]-1),w=Math.max(w,f[y]+1);let C=u.length?m-g+1:0,_=u.length?w-d+1:0,v=new Float64Array(C*_).fill(1/0);for(let y=0;y<u.length;y++)for(let x=-1;x<=1;x++)for(let A=-1;A<=1;A++){let T=(u[y]+x-g)*_+f[y]+A-d;p[y]<v[T]&&(v[T]=p[y])}let S=y=>{let x=0;return y.traverse(A=>{A.isMesh&&wp(A,c,(T,R,P)=>{let F=Math.round(T/c)-g,L=Math.round(R/c)-d;if(F<0||F>=C||L<0||L>=_)return;let U=P-v[F*_+L]+Vy;U>x&&(x=U)})}),x};if(this.packs.length){let y=new Tt;for(let T of this.packs)y.expandByObject(T,!0);let x=1/0,A=-1/0;for(let T of b)for(let R=0;R<T.length;R+=3)T[R+1]<y.min.y||T[R+1]>y.max.y||T[R+2]>y.max.z||(T[R]<x&&(x=T[R]),T[R]>A&&(A=T[R]));if(A-x>=(y.max.x-y.min.x)*.9){let T=Math.max(...this.packs.map(S));for(let R of this.packs)n[zc(R)]=Math.max(n[zc(R)]||0,T)}}for(let y of s){let x=(this.alive||[]).filter(T=>{for(let R=T.node;R;R=R.parent)if(R===y)return!!T.axis;return!1}),A=S(y);for(let T of[.25,.5,.75,1]){for(let R of x){let[P,F]=yf[R.kind];R.node.quaternion.setFromAxisAngle(R.axis[P],F*R.k[0]*at*T).multiply(R.q0)}this.root.updateMatrixWorld(!0),A=Math.max(A,S(y))}for(let T of x)T.node.quaternion.copy(T.q0);this.root.updateMatrixWorld(!0),n[y.name]=A}for(let y in a)r[y].quaternion.copy(a[y][0]),r[y].position.copy(a[y][1]),r[y].scale.copy(a[y][2]);return this.root.position.copy(o),this.root.quaternion.copy(l),this.root.updateMatrixWorld(!0),n}fitHead(){let e=this.bones.Head,t=this.look,n=Dc[t.g];if(!e||!n)return;let s=new D,r=new ke,a=new Me,o=!1,l=(g,m)=>{o||(this.root.updateMatrixWorld(!0),o=!0),g.position.add(s.fromArray(m).applyMatrix3(r.setFromMatrix4(a.copy(g.parent.matrixWorld).invert().multiply(e.matrixWorld))))},c=g=>g.name||g.children[0]&&g.children[0].name||"";for(let g of this.glasses.concat(this.moveProps)){let m=n.e[c(g)];m&&l(g,m)}for(let g of this.all?Object.keys(Mp):[t.j]){let m=Mp[g];if(!m)continue;let d=null;this.root.traverse(w=>{!d&&w.name===g&&!w.isBone&&(d=w)}),d&&l(d,m)}if(this.all)return;let h=Lt.props||[],u=h.includes(t.h)&&h.includes(t.x)?n.x[t.h+"|"+t.x]:void 0,f=ur[t.g];for(let g of[t.h,t.x]){let m=!!t.h&&g===t.x&&!!(f&&f.b&&f.b[t.r+"|"+g])&&n.x[t.h+"|"+g]===void 0&&!(dr[t.g]&&dr[t.g].x&&dr[t.g].x[t.h+"|"+g]),d=t.r&&g&&(g===t.h||!t.h||m),w=d&&n.r?n.r[t.r+"|"+g]:void 0,C=d&&f?f.t[t.r+"|"+g]:void 0,_=d&&f&&f.b?f.b[t.r+"|"+g]:void 0;if(!w&&!C&&!_)continue;let v=null;if(this.root.traverse(S=>{!v&&S.name===g&&!S.isBone&&(v=S)}),!!v){if(w&&w.length===3)l(v,w);else if(w&&v.parent===e){let S=new D().fromArray(n.c),y=new D(w[0],w[1],w[2]);if(v.position.sub(S).multiply(y).add(S),v.position.y+=w[3],v.position.z+=w[4],v.scale.multiply(y),w[5]){let x=new mt().setFromEuler(new an(w[5],0,0));v.position.sub(S).applyQuaternion(x).add(S),v.quaternion.premultiply(x)}}C&&(this.root.updateMatrixWorld(!0),qp(v,e,f.c,C)),_&&(this.root.updateMatrixWorld(!0),qp(v,e,f.c,_,!0))}}let p=u;if(p===void 0)return;let b=null;this.root.traverse(g=>{!b&&g.name===t.x&&!g.isBone&&(b=g)}),b&&(p===0?b.visible=!1:l(b,p))}async tuck(){let e=this.look,t=dr[e.g],n=this.bones.Head,s=Dc[e.g];if(this.all||!t||!n||!s||!s.c||!e.h)return;let r=!!e.r&&t.r.includes(e.h+"|"+e.r),a=!!e.x&&t.b.includes(e.h+"|"+e.x),o=e.x?t.x[e.h+"|"+e.x]:null;if(!r&&!a&&!o)return;let l=x=>{let A=null;return this.root.traverse(T=>{!A&&T.name===x&&!T.isBone&&(A=T)}),A},c=new D().fromArray(s.c);if(o){let x=l(e.x);if(x&&x.parent===n){let A=Math.PI/180,T=new mt().setFromEuler(new an(o[0]*A,o[1]*A,o[2]*A,"ZYX"));x.position.sub(c).applyQuaternion(T).add(c),x.quaternion.premultiply(T)}}if(!r&&!a)return;let h=l(e.h);if(!h)return;this.root.updateMatrixWorld(!0);let u=new Me().copy(n.matrixWorld).invert(),f=new D().setFromMatrixScale(n.matrixWorld).x||1,p=s.c,b=e.g+"|"+e.h+"|"+(e.r||""),g=rn.get(b);g||rn.set(b,g=mr(h,u,.004/f,p).then(x=>(rn.set(b,x),x))),g instanceof Promise&&(g=await g);let m=new Me,d=new Me,w=new D,C=async(x,A,T)=>{let R=rn.get(T);if(R===void 0){let P=x.geometry.attributes.position,F=new Float32Array(P.count*3);for(let L=0;L<P.count;L++)w.fromBufferAttribute(P,L).applyMatrix4(m),F[3*L]=w.x,F[3*L+1]=w.y,F[3*L+2]=w.z;if(await y(),hp(F,p,A)){await y(),d.copy(m).invert();for(let L=0;L<P.count;L++)w.set(F[3*L],F[3*L+1],F[3*L+2]).applyMatrix4(d),F[3*L]=w.x,F[3*L+1]=w.y,F[3*L+2]=w.z;R=F}else R=null;rn.set(T,R)}return R},_=(x,A)=>{let T=x.clone();return T.setAttribute("position",new nt(A,3)),T.boundingSphere=null,T.computeBoundingBox(),T.computeBoundingSphere(),T},v=async(x,A,T,R)=>{let P=x.geometry,F=await C(x,A,T),L=R&&x.children.some(z=>z.userData.line)?await C(x,R,T+"|line"):null;if(!F&&!L)return;await y();let U=F?_(P,F):P,B=L?_(P,L):U;for(let z of[x,...x.children])if(z===x||z.geometry===P){let Y=z.userData.line?B:U;Y!==P&&(z.geometry=Y,z.userData.bent=!0)}},S=performance.now(),y=async()=>{performance.now()-S>Zc&&(await Ea(),S=performance.now())};if(r){let x=t.w&&t.w[e.h+"|"+e.r]||1,A=g.hair||(g.hair=pa(uf(g,x,.002/f),await If(this,n,f,p),.003/f));await y();let T=g.line||(g.line=uf(g,x,(.002+.008)/f));await y();for(let R of this.meshes){if(!R.isSkinnedMesh||R.userData.part!==e.r)continue;let P=R.skeleton.bones.indexOf(n);P<0||(m.multiplyMatrices(R.skeleton.boneInverses[P],R.bindMatrix),await v(R,A,"r|"+b+"|"+R.geometry.uuid,T),await y())}}if(a){let x=l(e.x);if(!x)return;let A=g.band||(g.band=df(g.lo,3,.011/f));await y();let T=[];x.traverse(R=>{R.isMesh&&!R.isSkinnedMesh&&!R.userData.line&&R.geometry&&R.geometry.attributes.position&&T.push(R)});for(let R of T)m.multiplyMatrices(u,R.matrixWorld),await v(R,A,"b|"+b+"|"+e.x+"|"+R.geometry.uuid),await y()}}async hug(){let e=this.look,t=this.bones.Head,n=Dc[e.g];if(this.all||!t||!n||!n.c||!e.r)return;let s=!!e.h&&!pf.includes(e.h),r=[e.h,e.x].filter(g=>g&&pf.includes(g)&&!(s&&g===e.x)&&!up.includes(e.r+"|"+g));if(!r.length&&!e.e)return;let a=this.meshes.filter(g=>g.isSkinnedMesh&&g.userData.part===e.r&&g.skeleton.bones.indexOf(t)>=0);if(!a.length)return;let o=g=>{let m=null;return this.root.traverse(d=>{!m&&d.name===g&&!d.isBone&&(m=d)}),m&&m.visible?m:null},l="u|"+e.g+"|"+e.r+"|"+r.join(",")+"|"+(e.e||"")+"|"+(e.h||""),c=performance.now(),h=async()=>{performance.now()-c>Zc&&(await Ea(),c=performance.now())},u=g=>g.children.find(m=>m.userData.line&&m.geometry!==g.geometry),f=async()=>{this.root.updateMatrixWorld(!0);let g=new Me().copy(t.matrixWorld).invert(),m=new D().setFromMatrixScale(t.matrixWorld).x||1,d=n.c,w=new D,C=360/2,_=180/2,v=C*_,S=Math.PI/180,y=[],x=[],A=[],T=[],R=[],P=ff(),F=(re,q)=>{let j=re.attributes.position,ie=new Float32Array(j.count*3);for(let oe=0;oe<j.count;oe++)w.fromBufferAttribute(j,oe).applyMatrix4(q),ie[3*oe]=w.x,ie[3*oe+1]=w.y,ie[3*oe+2]=w.z;return ie};for(let re of a){let q=new Me().multiplyMatrices(re.skeleton.boneInverses[re.skeleton.bones.indexOf(t)],re.bindMatrix),j=F(re.geometry,q),ie=u(re);for(let oe=0;oe<j.length;oe+=3)Uc(P,d,j[oe],j[oe+1],j[oe+2],!0);y.push(q),x.push(j),A.push(ie?F(ie.geometry,q):null),T.push(re.geometry.index?re.geometry.index.array:null),R.push(ie?ie.geometry.index?ie.geometry.index.array:null:T[T.length-1]),await h()}let L=await mr(null,null,.004/m,d,a.map((re,q)=>[re.geometry,y[q]])),U=re=>{let q=(Math.floor(re/_)+.5)*2*S,j=((re%_+.5)*2-90)*S;return[Math.cos(j)*Math.sin(q),Math.sin(j),Math.cos(j)*Math.cos(q)]},B=null,z=null,Y=null,H=[];if(r.length){B=new Float32Array(v).fill(1/0);for(let re of r){let q=o(re);if(!q)continue;let j=ur[e.g]&&ur[e.g].b&&ur[e.g].b[e.r+"|"+re],ie=j?hf(j):null,oe=await mr(q,g,.004/m,d);if(ie&&ie.ring&&xf){let we=await this.lift(q,g,m,d,oe,L,C,_);we&&(H.push([re,we.F]),oe=we.bm)}let de=new Float64Array(v).fill(1/0),Ne=new Uint8Array(v);for(let we=0;we<v;we++)if(oe.lo[we]>=0){if(ie&&!ie.ring){let We=U(we),Qe=Math.atan2(We[0],We[1])/S;if(ie.lo>-112&&Qe<=ie.lo+bf||ie.hi<112&&Qe>=ie.hi-bf)continue}if(P.hi[we]-oe.hi[we]>gf/m){Ne[we]=1;continue}de[we]=oe.lo[we]-fp/m}let Ge=mp(de,mf/m);for(let we=0;we<v;we++)!Ne[we]&&Ge[we]<B[we]&&(B[we]=Ge[we]);await h()}Y=await If(this,t,m,d),pa(B,Y,.003/m)}let Z=e.e?o(e.e):null;if(Z){let re=await mr(Z,g,.004/m,d),q=new Float64Array(v),j=new Float64Array(v).fill(-1/0),ie=new Float64Array(v).fill(1/0),oe=-1/0,de=0,Ne=0;for(let ae=0;ae<v;ae++)re.hi[ae]>=0&&(q[ae]=re.hi[ae]*U(ae)[2],q[ae]>oe&&(oe=q[ae]));let Ge=ae=>re.hi[ae]>=0&&q[ae]<=oe-dp/m,we=ae=>Math.floor(ae/_)<C/2?0:1,We=[0,0],Qe=[0,0];for(let ae=0;ae<v;ae++)Ge(ae)&&L.lo[ae]>=0&&(We[we(ae)]++,L.hi[ae]>re.hi[ae]+pp/m&&Qe[we(ae)]++);for(let ae=0;ae<v;ae++){if(!Ge(ae))continue;let ot=we(ae),Rt=We[ot]>0&&Qe[ot]*2>=We[ot],Xt=Math.floor(ae/_),bt=ae%_,Mt=re.hi[ae]+.002/m,O=re.lo[ae]-.002/m;for(let Dt=-1;Dt<=1;Dt++)for(let Ye=-1;Ye<=1;Ye++){let I=bt+Ye;if(I<0||I>=_)continue;let M=((Xt+Dt)%C+C)%C*_+I;Rt?Mt>j[M]&&(j[M]=Mt):O<ie[M]&&(ie[M]=O)}Rt?de++:Ne++}if(de){z=new Float32Array(v).fill(NaN);for(let ae=0;ae<v;ae++)j[ae]>0&&(z[ae]=j[ae])}if(Ne){B||(B=new Float32Array(v).fill(1/0));for(let ae=0;ae<v;ae++)ie[ae]<B[ae]&&(B[ae]=ie[ae]);Y=Y||await If(this,t,m,d),pa(B,Y,.003/m)}}if(!B&&!z&&!H.length)return null;let J=B?B.map(re=>re-.008/m):null,ye=[],Se=[],je=B?new Float32Array(v).fill(1e-9):null;je&&Y&&pa(je,Y,.003/m);let De=(re,q,j,ie)=>{let oe=Float32Array.from(re);if(!(j||z?gp(oe,ie,d,j,z,je,.004/m):0))return null;let Ne=new Me().copy(q).invert();for(let Ge=0;Ge<oe.length;Ge+=3)w.set(oe[Ge],oe[Ge+1],oe[Ge+2]).applyMatrix4(Ne),oe[Ge]=w.x,oe[Ge+1]=w.y,oe[Ge+2]=w.z;return oe};for(let re=0;re<a.length;re++)ye.push(De(x[re],y[re],B,T[re])),Se.push(a[re].children.some(q=>q.userData.line)?De(A[re]||x[re],y[re],J,R[re]):null),await h();return{F:ye,FL:Se,lifts:H}},p=rn.get(l);if(p===void 0&&rn.set(l,p=f().then(g=>(rn.set(l,g),g))),p instanceof Promise&&(p=await p),!p)return;let b=(g,m)=>{let d=g.clone();return d.setAttribute("position",new nt(m,3)),d.boundingSphere=null,d.computeBoundingBox(),d.computeBoundingSphere(),d};for(let[g,m]of p.lifts||[]){let d=o(g),w=new Map;if(!d)continue;let C=0;d.traverse(_=>{if(!_.isMesh||!_.geometry||!_.geometry.attributes.position)return;let v=m[C++];if(!v)return;let S=_.geometry,y=w.get(S);y||w.set(S,y=b(S,v)),_.geometry=y,_.userData.bent=!0})}for(let g=0;g<a.length;g++){let m=a[g],d=p.F[g],w=p.FL[g];if(!d&&!w)continue;let C=m.geometry,_=u(m),v=d?b(C,d):C,S=w?b(_?_.geometry:C,w):null;for(let y of[m,...m.children]){if(y!==m&&!y.userData.line)continue;let x=y.userData.line?S||(y.geometry===C?v:y.geometry):v;x!==y.geometry&&(y.geometry=x,y.userData.bent=!0)}await h()}}async lift(e,t,n,s,r,a,o,l){let c=gf/n,h=new Int32Array(o).fill(-1),u=new Int32Array(o).fill(-1),f=new Float64Array(o).fill(1/0),p=new Float64Array(o);for(let y=0;y<o;y++)for(let x=0;x<l;x++){let A=y*l+x;r.lo[A]>=0&&(h[y]<0&&(h[y]=x),u[y]=x,r.lo[A]<f[y]&&(f[y]=r.lo[A]))}let b=0;for(let y=0;y<o;y++){if(h[y]<0)continue;let x=-1;for(let A=h[y];A<l;A++){let T=y*l+A,R=A<=u[y]&&r.hi[T]>=0?r.hi[T]:f[y]+c;if(a.hi[T]>=0&&a.hi[T]-R>c)x=A;else if(A>u[y])break}x>=0&&(p[y]=x+2-h[y],b=1)}if(!b)return null;let g=new Float64Array(o),m=new Float64Array(o).fill(-1/0),d=new Float64Array(o).fill(-1/0),w=mf*2/n,C=(y,x)=>Math.min(Math.abs(y-x),o-Math.abs(y-x));for(let y=0;y<o;y++)for(let x=0;x<o;x++)if(p[x]>0){let A=p[x]-xf*C(y,x);A>g[y]&&(g[y]=A)}for(let y=0;y<o;y++){if(!(g[y]>0)||h[y]<0)continue;let x=Math.min(l-1,Math.round(h[y]+g[y])),A=Math.min(l-1,Math.round(u[y]+g[y]));for(let T=x;T<=A;T++){let R=a.hi[y*l+T];R>m[y]&&(m[y]=R)}}for(let y=0;y<o;y++)for(let x=0;x<o;x++)if(m[x]>0){let A=m[x]-w*C(y,x);A>d[y]&&(d[y]=A)}for(let y=0;y<o;y++)d[y]=g[y]>0&&d[y]>0?d[y]+.002/n:NaN;let _=[],v=[],S=new D;return e.updateMatrixWorld(!0),e.traverse(y=>{if(!y.isMesh||!y.geometry||!y.geometry.attributes.position)return;let x=new Me().multiplyMatrices(t,y.matrixWorld),A=new Me().copy(x).invert(),T=y.geometry.attributes.position,R=new Float32Array(T.count*3);for(let P=0;P<T.count;P++)S.fromBufferAttribute(T,P).applyMatrix4(x),R[3*P]=S.x,R[3*P+1]=S.y,R[3*P+2]=S.z;if(bp(R,s,l,g,f,d),!y.userData.line){let P=y.geometry.clone();P.setAttribute("position",new nt(Float32Array.from(R),3)),v.push([P,new Me])}for(let P=0;P<T.count;P++)S.set(R[3*P],R[3*P+1],R[3*P+2]).applyMatrix4(A),R[3*P]=S.x,R[3*P+1]=S.y,R[3*P+2]=S.z;_.push(R)}),{F:_,bm:await mr(null,null,.004/n,s,v)}}cuffs(){let e=this.look,t=wt["m-wai"],n=this.bones,s=5e-4,r=/^(Left|Right)(Arm|ForeArm|Hand)$/;if(this.all||!e.u||!t||!n.Spine2||!n.LeftArm)return;let a=this.meshes.filter(c=>c.isSkinnedMesh&&c.userData.part===e.u),o=c=>"c|"+e.g+"|"+e.z+"|"+e.u+"|"+c.geometry.uuid,l=a.filter(c=>rn.get(o(c))===void 0);if(l.length){let c=this.held,h=this.turn;this.held=[],this.turn=0,this.at("m-wai",t.still),this.root.updateMatrixWorld(!0);let u=new D,f=new D,p=new D,b=new Me,g=new Me,m=new Me;n.Spine2.getWorldPosition(u),f.setFromMatrixColumn(n.Spine2.matrixWorld,0).normalize();let d=Math.sign(n.LeftArm.getWorldPosition(p).sub(u).dot(f))||1;for(let w of l){let C=w.geometry,_=C.attributes.position,v=C.attributes.skinIndex,S=C.attributes.skinWeight,y=w.skeleton.bones,x=w.skeleton.boneInverses,A=y.map(R=>{let P=R.name.replace(/^mixamorig:?/,"");return r.test(P)?P[0]==="L"?d:-d:0}),T=null;m.multiplyMatrices(w.matrixWorld,w.bindMatrixInverse);for(let R=0;R<_.count;R++){let P=-1,F=0;for(let B=0;B<4;B++){let z=S.getComponent(R,B);z>F&&(F=z,P=v.getComponent(R,B))}let L=A[P];if(!L)continue;w.getVertexPosition(R,p).applyMatrix4(w.matrixWorld);let U=s-L*p.sub(u).dot(f);if(!(U<=0)){b.elements.fill(0);for(let B=0;B<4;B++){let z=S.getComponent(R,B);if(!z)continue;let Y=v.getComponent(R,B);g.multiplyMatrices(y[Y].matrixWorld,x[Y]);for(let H=0;H<16;H++)b.elements[H]+=z*g.elements[H]}if(b.premultiply(m).multiply(w.bindMatrix).setPosition(0,0,0).invert(),!T){T=new Float32Array(_.count*3);for(let B=0;B<_.count;B++)p.fromBufferAttribute(_,B),T[3*B]=p.x,T[3*B+1]=p.y,T[3*B+2]=p.z}p.copy(f).multiplyScalar(L*U).applyMatrix4(b),T[3*R]+=p.x,T[3*R+1]+=p.y,T[3*R+2]+=p.z}}rn.set(o(w),T)}this.held=c,this.turn=h,this.at("",0)}for(let c of a){let h=rn.get(o(c)),u=c.geometry;if(!h)continue;let f=u.clone();f.setAttribute("position",new nt(h,3)),f.boundingSphere=null,f.computeBoundingBox(),f.computeBoundingSphere();for(let p of[c,...c.children])(p===c||p.geometry===u)&&(p.geometry=f,p.userData.bent=!0)}}tall(e){let t=this.bones;t.Hips&&(t.Hips.position.y*=1+(e-1)*1);for(let n of Uy)t[n]&&t[n].position.multiplyScalar(e);for(let n of["LeftUpLeg","RightUpLeg"])t[n]&&(t[n].position.y*=e);this.rest()}rest(){let e=this.bones;this.root.updateMatrixWorld(!0),this.q0={},this.p0={},this.frame(),xa(this,fa,1),this.root.updateMatrixWorld(!0),this.frame();for(let t of this.grips||[])t.userData.rest=Ef(this.root,t.parent,new mt);for(let t of this.tossed||[])t.p0||(t.p0=t.node.position.clone(),t.q0=t.node.quaternion.clone());for(let t of this.alive||[]){let n=Ef(this.root,t.node.parent,new mt).invert();t.q0||(t.q0=t.node.quaternion.clone(),t.p0=t.node.position.clone()),t.axis={up:new D(0,1,0),ahead:new D(0,0,1),side:new D(1,0,0)};for(let s in t.axis)t.axis[s].applyQuaternion(n)}}frame(){let e=this.bones;this.A={};for(let t in e){let n=e[t];this.q0[t]=n.quaternion.clone(),this.p0[t]=n.position.clone();let s=new mt;n.parent&&n.parent.getWorldQuaternion(s);let r=new mt;this.root.getWorldQuaternion(r),this.A[t]=r.invert().multiply(s).invert()}}busyHand(){return this.busy==null&&(this.busy=!!(this.held.length&&this.moveProps.some(e=>e.parent===this.held[0].parent))),this.busy}at(e,t,n){let s=this.bones;for(let g of this.grown)g.matrixAutoUpdate=!0;this.grown.length=0;for(let g in s)s[g].quaternion.copy(this.q0[g]),s[g].position.copy(this.p0[g]),s[g].scale.setScalar(g==="Head"||g==="HairLow"?va:1);this.root.position.set(0,0,0),this.root.rotation.set(0,this.turn||0,0),this.root.scale.set(1,1,1);let r=e&&wt[e],a=r?Math.min(t,r.ms)/r.ms:0,o=!!(r&&r.stow&&this.held&&this.held.length),l=!o&&r&&r.held&&this.held&&this.held.length&&!(ds[e]&&this.moveProps&&this.moveProps.length&&this.busyHand())?r.held:null,c=r?l?l(a,t):r.at(a,t,this.look):ua(t),h=!!(r&&this.moveProps&&this.moveProps.length&&ds[e]),u=h?iv(a,ds[e][0]==="e",n):1;this.moveProps&&this.moveProps.forEach(g=>{g.visible=h&&u>.05,g.scale.setScalar((g.userData.s0||1)*Math.max(.001,u))});let f=this.holdTable||ap,p=g=>r&&f[e]&&f[e][g]||f[""]&&f[""][g];if(this.held&&this.held.length){let g=h&&this.busyHand(),m=r?a*r.ms:0;for(let d of this.held){let w=o?0:g?1-u:this.hideNone?1:dv(r&&f[e]&&f[e][d.userData.id],m,r&&r.ms);d.visible=w>.05,d.scale.setScalar(Math.max(.001,w))}}{let g=c.LeftArm||[0,0,0],m=c.RightArm||[0,0,0],d=(ov[this.look.g]||{})[this.look.z]||0;c=Object.assign({},c,{LeftArm:[g[0],g[1],g[2]+Ep+d*Tp(g)],RightArm:[m[0],m[1],m[2]-Ep-d*Tp(m)]})}let b=r&&!l?1-sv(a):1;if(b>0&&this.held&&this.held.length){let g=c.RightArm||[0,0,0];c=Object.assign({},c,{RightArm:[g[0],g[1],g[2]-av*b]})}if(this.glasses&&this.glasses.forEach(g=>{g.visible=!h||ds[e][0]!=="e"||u<=.05}),this.looks(r&&rp[e]||"",r?rv(a):0,r||this.blinks?t:1e3),xa(this,c,1),this.root.updateMatrixWorld(!0),r&&e!=="m-wai"&&hv(this),this.grips&&this.grips.length){for(let g of this.grips){let m=this.tiltNow||uv(p(g.userData.id),a);wa.setFromUnitVectors(pv,$p.set(m[0],m[1],m[2]).normalize()),g.quaternion.copy(Ef(this.root,g.parent,gv).invert().multiply(wa).multiply(g.userData.rest))}this.root.updateMatrixWorld(!0)}if(this.tossed&&this.tossed.length){let[g,m]=h&&c.toss||[0,0];for(let d of this.tossed){if(!d.p0||(d.node.position.copy(d.p0),d.node.quaternion.copy(d.q0),!g&&!m))continue;let w=d.node.parent,C=w.localToWorld(e0.copy(d.p0));C.y+=g,d.node.position.copy(w.worldToLocal(C)),this.root.getWorldQuaternion(Af),Lp.set(1,0,0).applyQuaternion(Af).applyQuaternion(w.getWorldQuaternion(Af).invert()).normalize(),d.node.quaternion.setFromAxisAngle(Lp,m*at).multiply(d.q0)}this.root.updateMatrixWorld(!0)}if(this.alive&&this.alive.length&&this.alive[0].axis){let g=this.blinks?performance.now()/1e3:0;for(let m of this.alive){let[d,w,C]=yf[m.kind],_=this.phase!=null?this.phase:2*Math.PI*C*m.k[1]*g;m.node.position.copy(m.p0),m.kind==="bob"&&m.node.position.addScaledVector(m.axis.up,.007*Math.sin(_));let v=w?w*m.k[0]*at*(m.kind==="sway"?Math.sin(_):(1-Math.cos(_))/2):_;m.node.quaternion.setFromAxisAngle(m.axis[d],m.kind==="bob"?0:v).multiply(m.q0),m.kept&&m.node.scale.setScalar(1/this.root.scale.x)}this.root.updateMatrixWorld(!0)}}looks(e,t,n){if(!this.face.length)return;let s={};for(let r of String(e||"").split(" "))for(let a of nv[r]||[])s[a]=Math.max(s[a]||0,t);if(!e){let r=n%3600,a=r<150?Math.sin(r/150*Math.PI):0;s["blink-L"]=s["blink-R"]=a}for(let r of this.face){let a=r.morphTargetDictionary,o=r.morphTargetInfluences;for(let l in a)o[a[l]]=s[l]||0}}dispose(){this.root&&this.root.traverse(e=>{e.userData&&e.userData.bent&&e.geometry&&e.geometry.dispose()}),this.root.traverse(e=>{e.isMesh&&e.material&&(e.material.dispose(),e.geometry&&e.geometry.index&&e.material.name==="skin"&&e.geometry.dispose())}),this.root.removeFromParent()}},nv={happy:["happy-L","happy-R"],wink:["happy-R"],open:["open"],tongue:["tongue"],puff:["puff"],dizzy:["blink-L","blink-R"]},wf=1-.03-.22;function iv(i,e,t){let n=h=>(h=h<0?0:h>1?1:h,h*h*(3-2*h)),s=!t||t.first,r=t?t.off:0,a=s?e?i>0?1:0:n((i-.03)/.12):1;if(r==null)return a;if(e)return i<1?a:0;let o=Math.min(r,.999),l=o>wf?wf+(i-o)*(1-wf)/(1-o):i,c=n((1-l-.03)/.22);return a*c*c}function sv(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.1)*e((1-i)/.1)}function rv(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.12)*e((1-i)/.12)}var av=18,Ep=3,ov={f:{"z-1":3.5,"z-2":2.5,"z-3":1.5}},Tp=i=>{let e=Math.max(Math.abs(i[0]),Math.abs(i[2]));return e<=15?1:e>=40?0:(40-e)/25},cv=.135,Gc=[.276,.266,.236],lv=.04,ei=null;function hv(i){let e=i.bones.Head,t=i.bones;if(!e)return;ei||(ei=[wa.clone(),wa.clone(),wa.clone()]);let n=e.matrixWorld.elements,s=i.root.matrixWorld.elements,r=Math.hypot(s[0],s[1],s[2])||1,a=[0,4,8].map(h=>{let u=Math.hypot(n[h],n[h+1],n[h+2])||1;return[n[h]/u,n[h+1]/u,n[h+2]/u]}),o=[0,1,2].map(h=>n[12+h]+a[1][h]*cv*r),l=(h,u)=>h[0]*u[0]+h[1]*u[1]+h[2]*u[2],c=!1;for(let h of["Left","Right"]){let u=t[h+"Arm"],f=t[h+"ForeArm"],p=t[h+"Hand"];if(!u||!f||!p)continue;let b=u.matrixWorld.elements,g=f.matrixWorld.elements,m=p.matrixWorld.elements,d=[b[12],b[13],b[14]],w=[m[12]-g[12],m[13]-g[13],m[14]-g[14]],C=Math.hypot(w[0],w[1],w[2])||1,_=[0,1,2].map(S=>m[12+S]+w[S]/C*lv*r),v=!1;ei[0].identity();for(let S=0;S<5;S++){let y=[_[0]-o[0],_[1]-o[1],_[2]-o[2]],x=a.map((J,ye)=>l(y,J)/(Gc[ye]*r)),A=Math.hypot(x[0],x[1],x[2]);if(A>=.9995)break;let T=[0,1,2].map(J=>(x[0]*a[0][J]/Gc[0]+x[1]*a[1][J]/Gc[1]+x[2]*a[2][J]/Gc[2])/(r*Math.max(A,.05))),R=[_[0]-d[0],_[1]-d[1],_[2]-d[2]],P=Math.hypot(R[0],R[1],R[2])||1,F=R.map(J=>J/P),L=l(T,F),U=T.map((J,ye)=>J-F[ye]*L),B=Math.hypot(U[0],U[1],U[2]);if(B<.001)break;let z=U.map(J=>J/B),Y=Math.min((1-A)/B/P,.5),H=Math.cos(Y),Z=Math.sin(Y);_=[0,1,2].map(J=>d[J]+P*(F[J]*H+z[J]*Z)),ei[0].premultiply(ei[1].setFromAxisAngle($p.set(F[1]*z[2]-F[2]*z[1],F[2]*z[0]-F[0]*z[2],F[0]*z[1]-F[1]*z[0]).normalize(),Y)),v=!0}v&&(u.parent.getWorldQuaternion(ei[2]),u.quaternion.premultiply(ei[1].copy(ei[2]).invert().multiply(ei[0]).multiply(ei[2])),c=!0)}c&&i.root.updateMatrixWorld(!0)}var fv={"a-balloon":16,"a-candy":-10,"a-krathong":10};function uv(i,e){let t=i&&i.d;if(!t||!t.length)return mv;let n=0;for(;n<t.length-1&&t[n+1][0]<=e;)n++;let s=t[n],r=t[Math.min(n+1,t.length-1)],a=r[0]>s[0]?Math.min(1,Math.max(0,(e-s[0])/(r[0]-s[0]))):0,o=s[1]?s[2]:r[2],l=r[1]?r[2]:s[2],c=(s[1]+(r[1]-s[1])*a)*at,h=(o+(l-o)*a)*at;return[-Math.sin(c)*Math.cos(h),Math.cos(c),Math.sin(c)*Math.sin(h)]}function dv(i,e,t){let n=i&&i.hide;if(!n)return 1;let s=1;for(let[r,a]of n){let o=Math.max(1,Math.min(Rp,r)),l=Math.max(1,Math.min(Rp,(t||1/0)-a)),c=e<r?(r-e)/o:e>a?(e-a)/l:0,h=c>=1?1:c*c*(3-2*c);h<s&&(s=h)}return s}var Rp=120,pv=new D(0,1,0),mv=[0,1,0],wa=new mt,$p=new D,Cp=new mt,Ip=new an,gv=new mt,Pp=new mt,Af=new mt,e0=new D,Lp=new D;function Ef(i,e,t){return i.getWorldQuaternion(Pp),e.getWorldQuaternion(t),t.premultiply(Pp.invert())}var at=Math.PI/180;function xa(i,e,t){let n=i.bones;for(let s in e){let r=n[s];if(!r)continue;let a=e[s];Ip.set(a[0]*at*t,a[1]*at*t,a[2]*at*t,"YXZ"),Cp.setFromEuler(Ip);let o=i.A[s];r.quaternion.copy(o).multiply(Cp).multiply(o.clone().invert()).multiply(i.q0[s])}e.root&&i.root.position.set(e.root[0]||0,e.root[1]||0,e.root[2]||0),e.turn&&(i.root.rotation.y+=e.turn*at),e.tilt&&(i.root.rotation.x=(e.tilt[0]||0)*at,i.root.rotation.z=(e.tilt[1]||0)*at),e.size&&i.root.scale.set(e.size[0],e.size[1],e.size[2]),e.grow&&xv(i,e.grow)}var Fp=new Me,bv=new Me;function xv(i,e){for(let t in e){let n=i.bones[t];if(n){Dp(i,e,n);for(let s=0;s<n.children.length;s++)Dp(i,e,n.children[s])}}}function Dp(i,e,t){if(i.grown.includes(t))return;let n=Np(i,e,t),s=Np(i,e,t.parent);!n&&!s||(t.matrix.makeTranslation(t.position.x,t.position.y,t.position.z),s&&t.matrix.multiply(Fp.makeScale(1/s[0],1/s[1],1/s[2])),t.matrix.multiply(bv.compose(e0.set(0,0,0),t.quaternion,t.scale)),n&&t.matrix.multiply(Fp.makeScale(n[0],n[1],n[2])),t.matrixAutoUpdate=!1,i.grown.push(t))}function Np(i,e,t){if(t){for(let n in e)if(i.bones[n]===t)return e[n]}return null}var Qt=null,yt=null,ms=null,kn=null,ti=null,_a=null;function Uw(){if(_a!==null)return!_a;try{_a=!Vi().getContext()}catch{_a=!0}return!_a}function Vi(){if(Qt)return Qt;Qt=new wc({antialias:!0,alpha:!0,powerPreference:"default",preserveDrawingBuffer:!1}),Qt.outputColorSpace=vt,Qt.toneMapping=Zr,Qt.toneMappingExposure=.92,Qt.setClearColor(0,0);let i=Qt.render;Qt.render=function(n,s){i.call(this,n,s),Bf()},yt=new $i,yt.environmentIntensity=.42,yt.add(new Xr(16774378,12167062,.95));let e=new Oi(16772829,1.9);e.position.set(1.6,3.2,3),yt.add(e);let t=new Oi(16777215,.9);return t.position.set(-1.2,2.6,-2.4),yt.add(t),ms=new At(18,.5,.1,30),kn=new At(18,.5,.1,30),ti=new At(18,1,.01,10),Qt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),kt=!0,window.dispatchEvent(new Event("c3-lost"))}),Qt.domElement.addEventListener("webglcontextrestored",()=>{kt=!1,yt.environment&&(yt.environment=t0()),window.dispatchEvent(new Event("c3-back"))}),Qt}function t0(){let i=new or(Qt),e=i.fromScene(new Pc,.04).texture;return i.dispose(),e}function n0(){yt.environment||(yt.environment=t0())}var kt=!1,gs={low:-.04,high:1.42},xs={side:.18,top:.16};function i0(i,e,t,n){let s=gs.high-gs.low,r=n||{};i.aspect=e/t,i.fov=r.fov||18;let a=s/2/Math.tan(i.fov*at/2)/(r.zoom||1),o=r.y!=null?r.y:(gs.low+gs.high)/2,l=r.x||0;i.position.set(l,o+(r.up!=null?r.up:.1),a),i.lookAt(l,o,0),i.updateProjectionMatrix()}var Up={head:["Head",.226*va,1.55/va],chest:["Spine2",0,2.3]};function _v(i,e){let[t,n,s]=Up[e]||Up.head,r=new D;return i.bones[t]&&i.bones[t].getWorldPosition(r),{y:r.y+n,zoom:s,up:.02}}var un=new Map;async function Of(i){let e=Ta(i),t=un.get(e);if(t)return un.delete(e),un.set(e,t),t;let n=[Vt&&Vt.fig,gr].find(s=>s&&s.lookKey===e);if(n)n.gone=!1,t=Promise.resolve(n);else{let s=new Lf(i);s.lookKey=e,t=s.build()}for(un.set(e,t),t.catch(()=>{un.get(e)===t&&un.delete(e)});un.size>4;){let[s,r]=un.entries().next().value;un.delete(s),r.then(a=>{a.gone=!0,Hi(a)},()=>{})}return t}function Hi(i){i.gone&&!i.using&&!(Vt&&Vt.fig===i)&&i!==gr&&i.dispose()}var gr=null;function yv(i){let e=gr;gr=i,e&&e!==i&&Hi(e)}var Op=null;function br(i,e,t){let n=Vi();if(!n.compileAsync||kt)return t?zp():Promise.resolve();let s=n.getRenderTarget(),r=null;try{t&&n.setRenderTarget(Op||(Op=new qt(1,1))),r=n.compileAsync(i,e,yt)}catch{}n.setRenderTarget(s),Bf();let a=0,o=Promise.race([Promise.resolve(r).catch(()=>{}).then(()=>Cv(n)),new Promise(l=>{a=setTimeout(l,4e3)})]).then(()=>clearTimeout(a));return t?o.then(zp):o}var bs=new Map,wn=[],Hc=!1;function vv(i,e,t,n){return new Promise((s,r)=>{let a={key:i,job:e,ok:s,no:r,low:n};if(t)wn.unshift(a);else if(n)wn.push(a);else{let o=wn.findIndex(l=>l.low);o<0?wn.push(a):wn.splice(o,0,a)}s0()})}function s0(){Hc||!wn.length||(Hc=!0,Sv(wn[0]&&wn[0].low?1200:160).then(()=>{let i=wn.shift();if(!i){Hc=!1;return}let e=0,t=new Promise((n,s)=>{e=setTimeout(()=>s(new Error("too long")),2e4)});Promise.race([Promise.resolve().then(i.job),t]).then(i.ok,i.no).then(()=>{clearTimeout(e),Hc=!1,s0()})}))}function Mv(i){let e=wn.findIndex(t=>t.key===i);e>0&&wn.unshift(wn.splice(e,1)[0])}var r0=0;["pointerdown","pointermove","touchstart","touchmove","wheel","scroll","keydown"].forEach(i=>{window.addEventListener(i,()=>{r0=performance.now()},{capture:!0,passive:!0})});var a0=0;function Ow(i){a0=i?performance.now()+18e4:0}var Kc=0;function kw(i){Kc=Math.max(Kc,performance.now()+(i||600))}var Sv=(i=160)=>new Promise(e=>{let t=()=>{let n=Math.max(a0,Kc)-performance.now();if(n>0){setTimeout(t,Math.min(n,250));return}let s=performance.now()-r0;s>=i?e():setTimeout(t,i-s)};window.requestIdleCallback?requestIdleCallback(t,{timeout:150}):setTimeout(t,16)});function $c(i,e,t,n,s){if(bs.has(i))return t&&Mv(i),bs.get(i);let r=Promise.resolve(Df&&Bv(i)).then(a=>a?kp(a,!1).catch(()=>null):null).then(a=>a||Promise.resolve(n&&n()).catch(()=>{}).then(()=>vv(i,e,t,s)).then(o=>o&&o.later?o.later:o).then(o=>kp(o,!0).then(l=>(Df&&zv(i,o),l))));return bs.set(i,r),r.catch(()=>bs.delete(i)),r}var Jc=!1;function kp(i,e){if(!i||!i.size)return Promise.reject(new Error("no picture"));if(Jc)return Bp(i).then(Tf);let t=URL.createObjectURL(i);return Tf(t).catch(n=>{if(URL.revokeObjectURL(t),!e)throw n;return Jc=!0,Bp(i).then(Tf)})}function Tf(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>n.naturalWidth?e(i):t(new Error("empty picture")),n.onerror=()=>t(new Error("picture")),n.src=i})}function Bp(i){return new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(n.result),n.onerror=()=>t(n.error||new Error("picture")),n.readAsDataURL(i)})}function Bw(i){String(i).slice(0,5)==="blob:"&&(Jc=!0);for(let[e,t]of bs)t.then(n=>{(n===i||Jc&&String(n).slice(0,5)==="blob:")&&bs.delete(e)},()=>{})}function Ra(){return Math.min(3,window.devicePixelRatio||1)}function zw(i,e={}){let t=Object.assign({w:180,h:336,dpr:Ra(),move:"",at:null,turn:-18},e);(t.focus||t.view)&&(t.bleed=!1);let n="v"+xr+":"+Ta(i)+":"+(t.move||"")+(t.at!=null?"@"+t.at:"")+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+(t.focus?":"+t.focus:"")+(t.view?":"+JSON.stringify(t.view):"")+(t.bleed?":b"+xs.side+","+xs.top:"");return $c(n,()=>wv(i,t),!!t.first,()=>Qp(i),!!t.low)}var Gw=xs;async function wv(i,e){if(Vi(),kt)throw new Error("no graphics");let t=await Of(i);t.using=(t.using||0)+1;try{if(await br(t.root,kn,!0),kt)throw new Error("no graphics");let n=new Et,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),yt.add(n),t.turn=e.turn*at;let o=e.move&&wt[e.move];t.at(e.move,e.at!=null?e.at:o?o.still:0);let l=e.bleed?e.w*(1+2*xs.side):e.w,c=e.bleed?e.h*xs.top:0;i0(kn,l,e.h,e.focus?_v(t,e.focus):e.view),c&&kn.setViewOffset(l,e.h,0,-c,l,e.h+c);let h;try{Qc(kn,Math.round(e.h*e.dpr)),h=el(n,kn,Math.round(l*e.dpr),Math.round((e.h+c)*e.dpr))}finally{c&&kn.clearViewOffset()}return t.turn=r,t.blinks=a,yt.remove(n),s&&s.add(t.root),h}finally{t.using--,Hi(t)}}function Hw(i,e={}){let t=Object.assign({w:72,h:112,dpr:Ra(),turn:-10},e),n=o0(i),s="v"+xr+":h:"+Ta(n)+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn;return $c(s,()=>Av(i,t),!1,()=>un.has(Ta(i))?null:Qp(n),!!t.low)}function o0(i){return Object.assign({},i||{},{l:"",k:""})}async function Av(i,e){if(Vi(),kt)throw new Error("no graphics");let t=await Of(un.has(Ta(i))?i:o0(i));t.using=(t.using||0)+1;try{if(await br(t.root,kn,!0),kt)throw new Error("no graphics");let n=new Et,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),yt.add(n),t.turn=e.turn*at,t.at("",0),Ev(kn,t,e),Qc(kn,Math.round(e.h*e.dpr));let o=el(n,kn,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return t.turn=r,t.blinks=a,yt.remove(n),s&&s.add(t.root),o}finally{t.using--,Hi(t)}}function Ev(i,e,t){let n=new D,s=new D;e.bones.Head.getWorldPosition(n),(e.bones.Neck||e.bones.Head).getWorldPosition(s);let r=s.y-.1,a=n.y+.73;i.aspect=t.w/t.h,i.fov=16;let o=(a-r)/2/Math.tan(i.fov*at/2),l=(r+a)/2;i.position.set(n.x,l+.04,n.z+o),i.lookAt(n.x,l,n.z),i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}function el(i,e,t,n){let s=Vi(),r=new qt(t,n,{samples:4,colorSpace:vt}),a=yt.children.filter(c=>c.isGroup&&c.visible&&c!==i);a.forEach(c=>{c.visible=!1}),s.setRenderTarget(r),s.clear(),s.render(yt,e),a.forEach(c=>{c.visible=!0}),s.setRenderTarget(null);let o=new Uint8Array(t*n*4);return{later:Tv(s,r,t,n,o).then(()=>{if(r.dispose(),kt||Iv(o))throw new Error("empty picture");return Dv(o,t,n)},c=>{throw r.dispose(),c})}}var ii=new Set,Ff=[],xi=null,kf=0,Vc=0;function Bf(){if(!ii.size||!Qt)return;let i=Qt.getContext();xi&&i.deleteSync(xi),xi=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0),i.flush()}function Tv(i,e,t,n,s){let r=i.getContext();return new Promise((a,o)=>{let l=null;try{i.state.bindFramebuffer(r.FRAMEBUFFER,i.properties.get(e).__webglFramebuffer),l=r.createBuffer(),r.bindBuffer(r.PIXEL_PACK_BUFFER,l),r.bufferData(r.PIXEL_PACK_BUFFER,s.byteLength,r.STREAM_READ),r.readPixels(0,0,t,n,r.RGBA,r.UNSIGNED_BYTE,0),r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}catch{l&&r.deleteBuffer(l),r.bindBuffer(r.PIXEL_PACK_BUFFER,null);try{i.readRenderTargetPixels(e,0,0,t,n,s),a()}catch(h){o(h)}return}finally{let c=i.getRenderTarget();i.state.bindFramebuffer(r.FRAMEBUFFER,c?i.properties.get(c).__webglFramebuffer:null)}ii.size||(kf=performance.now()),ii.add({buf:l,px:s,ok:a,no:o}),Bf(),Rv()})}function c0(i){if(!ii.size)return!0;let e=Qt.getContext();if(kt||e.isContextLost())return ii.forEach(t=>t.no(new Error("no graphics"))),ii.clear(),xi=null,Ff.splice(0).forEach(t=>t()),!0;if(!i&&xi&&e.clientWaitSync(xi,0,0)===e.TIMEOUT_EXPIRED)return!1;for(let t of ii){try{e.bindBuffer(e.PIXEL_PACK_BUFFER,t.buf),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,t.px),t.ok()}catch(n){t.no(n)}e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.deleteBuffer(t.buf)}return ii.clear(),xi&&e.deleteSync(xi),xi=null,Ff.splice(0).forEach(t=>t()),!0}function Rv(){if(Vc)return;let i=()=>{Vc=0,c0(performance.now()-kf>3e3)||(Vc=setTimeout(i,4))};Vc=setTimeout(i,4)}function Cv(i){if(i.extensions.has("KHR_parallel_shader_compile")||kt)return Promise.resolve();let e=i.getContext(),t=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);return t?(e.flush(),new Promise(n=>{let s=()=>{if(!kt&&e.clientWaitSync(t,0,0)===e.TIMEOUT_EXPIRED){setTimeout(s,10);return}e.deleteSync(t),n()};setTimeout(s,10)})):Promise.resolve()}function zp(){return ii.size?new Promise(i=>Ff.push(i)).then(()=>new Promise(i=>setTimeout(i,0))):Promise.resolve()}function Iv(i){for(let e=3;e<i.length;e+=4)if(i[e])return!1;return!0}var l0="image/webp",h0=.92;function Pv(){self.onmessage=i=>{let e=i.data;try{let t=e.W,n=e.H,s=new ImageData(t,n);for(let a=0;a<n;a++)s.data.set(e.px.subarray((n-1-a)*t*4,(n-a)*t*4),a*t*4);let r=self.board||(self.board=new OffscreenCanvas(t,n));r.width!==t&&(r.width=t),r.height!==n&&(r.height=n),r.getContext("2d").putImageData(s,0,0),r.convertToBlob({type:e.type,quality:e.q}).then(a=>self.postMessage({id:e.id,blob:a}),()=>self.postMessage({id:e.id}))}catch{self.postMessage({id:e.id})}}}var ni=null,Yc=new Map,Lv=0;function Fv(){if(ni!==null)return ni;try{if(typeof Worker>"u"||typeof OffscreenCanvas>"u")throw new Error("no worker");ni=new Worker(URL.createObjectURL(new Blob(["("+Pv+")()"],{type:"text/javascript"}))),ni.onmessage=i=>{let e=Yc.get(i.data&&i.data.id);e&&e(i.data)},ni.onerror=()=>{f0()}}catch{ni=!1}return ni}function f0(){if(ni)try{ni.terminate()}catch{}ni=!1,[...Yc.values()].forEach(i=>i({}))}function Dv(i,e,t){let n=Fv();return n?new Promise((s,r)=>{let a=++Lv,o=setTimeout(()=>l({}),8e3);function l(c){clearTimeout(o),Yc.delete(a),c.blob&&c.blob.size?s(c.blob):r(new Error("worker"))}Yc.set(a,l),n.postMessage({id:a,px:i,W:e,H:t,type:l0,q:h0})}).catch(()=>(f0(),Hp(i,e,t))):Hp(i,e,t)}var Gp=null;function Hp(i,e,t){let n=Gp||(Gp=document.createElement("canvas"));n.width!==e&&(n.width=e),n.height!==t&&(n.height=t);let s=n.getContext("2d",{willReadFrequently:!0}),r=s.createImageData(e,t);for(let a=0;a<t;a++)r.data.set(i.subarray((t-1-a)*e*4,(t-a)*e*4),a*e*4);return s.putImageData(r,0,0),new Promise((a,o)=>n.toBlob(l=>l&&l.size?a(l):o(new Error("picture")),l0,h0))}function Rf(i){return!!(Lt.things&&Lt.things[i])}var Wc=new Map;function Ca(i){if(!Wc.has(i)){let e=Ma("o/"+i+".glb").then(t=>{let n=new Et;if(n.add(t.scene),i.startsWith("p-")&&t.scene.traverse(a=>{!a.isMesh||a.userData.line||(a.material=Sa(a.material),!a.material.transparent&&!Jp(a.material)&&jc(a))}),Nv.test(i))return n;let s=new Tt().setFromObject(t.scene,!0),r=jp();return r.scale.set(Math.max(.03,(s.max.x-s.min.x)*1.3)/.75,Math.max(.02,(s.max.z-s.min.z)*1.3)/.48,1),r.position.y=5e-4,r.userData.aside=!0,n.add(r),n});Wc.set(i,e),e.catch(()=>Wc.delete(i))}return Wc.get(i)}var Nv=/^(b|lv|ui|pr|fx|box|rm|sh|pz|rn|ar)-/,Cf={side:.35,top:.12,foot:.12};function Vw(i,e={}){let t=Object.assign({w:100,h:120,dpr:Ra(),turn:-18,low:.07},e),n="v"+xr+":o:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+":"+t.low+(t.spin!=null?":s"+t.spin:"");return $c(n,()=>Uv(i,t),!!t.first,()=>Ca(i).catch(()=>{}),!!t.later)}async function Uv(i,e){if(Vi(),kt)throw new Error("no graphics");let t=await Ca(i);i.startsWith("p-")||n0();let n=new Et;if(n.rotation.y=(e.spin!=null?e.spin:e.turn)*at,n.add(t),await br(n,ti,!0),kt)throw new Error("no graphics");yt.add(n),kv(ti,n,e),Qc(ti,Math.round(e.h*e.dpr),ti.position.distanceTo(new Tt().setFromObject(n,!0).getCenter(Sn)),3e-4);let s=e.w,r=e.h;if(e.spin!=null){let o=Math.round(e.w*Cf.side),l=Math.round(e.h*Cf.top),c=Math.round(e.h*Cf.foot);s=e.w+2*o,r=e.h+l+c,ti.setViewOffset(e.w,e.h,-o,-l,s,r),n.rotation.y=e.turn*at,n.updateMatrixWorld(!0)}let a;try{a=el(n,ti,Math.round(s*e.dpr),Math.round(r*e.dpr))}finally{e.spin!=null&&ti.clearViewOffset()}return yt.remove(n),n.remove(t),a}function Ww(i,e={}){let t=Object.assign({w:128,h:128,dpr:Ra()},e),n="v"+xr+":e:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+(t.fov?"f"+t.fov:"");return $c(n,()=>Ov(i,t),!1,()=>Ca(i).catch(()=>{}))}async function Ov(i,e){if(Vi(),kt)throw new Error("no graphics");let t=await Ca(i);n0();let n=new Et;if(n.add(t),await br(n,ti,!0),kt)throw new Error("no graphics");yt.add(n),n.updateMatrixWorld(!0);let s=new Tt().setFromObject(n,!0),r=new Tt;n.traverse(f=>{f.isMesh&&f.material&&f.material.opacity===0&&r.expandByObject(f,!0)});let a=r.isEmpty()?s:r,o=a.getCenter(new D),l=a.getSize(new D),c=ti;c.aspect=e.w/e.h,c.fov=e.fov||8;let h=Math.max(l.y,l.x/c.aspect)/2/Math.tan(c.fov*at/2);c.position.set(o.x,o.y,o.z+h),c.lookAt(o),c.near=Math.max(.001,o.z+h-s.max.z-.01),c.far=o.z+h-s.min.z+1,c.updateProjectionMatrix(),c.updateMatrixWorld(!0);let u=el(n,c,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return yt.remove(n),n.remove(t),u}var Vp=10*at,Sn=new D;function kv(i,e,t){let n=Math.tan(i.fov*at/2),s=t.w/t.h;e.updateMatrixWorld(!0);let r=new Tt().setFromObject(e,!0).getCenter(new D),a=new D(0,Math.sin(Vp),Math.cos(Vp));i.position.copy(r).addScaledVector(a,10),i.lookAt(r),i.updateMatrixWorld(!0);let o=i.matrixWorldInverse,l=1/0,c=-1/0,h=1/0,u=-1/0,f=-1/0;e.traverse(v=>{if(!v.isMesh||v.userData.aside)return;let S=v.geometry.getAttribute("position");for(let y=0;y<S.count;y++)Sn.fromBufferAttribute(S,y).applyMatrix4(v.matrixWorld).applyMatrix4(o),Sn.x<l&&(l=Sn.x),Sn.x>c&&(c=Sn.x),Sn.y<h&&(h=Sn.y),Sn.y>u&&(u=Sn.y),Sn.z>f&&(f=Sn.z)});let g=Math.max((u-h)/(2*n*(1-t.low-.04)),(c-l)/(2*n*s*(1-2*.05))),m=g+(f+10),d=(l+c)/2,w=h+(1-2*t.low)*g*n,C=new D(1,0,0).applyQuaternion(i.quaternion),_=new D(0,1,0).applyQuaternion(i.quaternion);i.position.copy(r).addScaledVector(a,m).addScaledVector(C,d).addScaledVector(_,w),i.aspect=s,i.near=Math.max(.001,g*.3),i.far=m*3+1,i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}var qc=null;function u0(){return qc||(qc=new Promise(i=>{try{let e=indexedDB.open("seoulful-3d",1);e.onupgradeneeded=()=>e.result.createObjectStore("stills"),e.onsuccess=()=>{i(e.result),setTimeout(()=>Gv(e.result),6e3)},e.onerror=()=>i(null)}catch{i(null)}}),qc)}function Bv(i){return u0().then(e=>e&&new Promise(t=>{try{let n=e.transaction("stills").objectStore("stills").get(i);n.onsuccess=()=>{let s=n.result;t(s&&s.bytes?new Blob([s.bytes],{type:s.type||"image/png"}):null)},n.onerror=()=>t(null)}catch{t(null)}}))}function zv(i,e){Promise.all([u0(),new Response(e).arrayBuffer()]).then(([t,n])=>{if(t)try{t.transaction("stills","readwrite").objectStore("stills").put({bytes:n,type:e.type},i)}catch{}},()=>{})}function Gv(i){try{let e=i.transaction("stills","readwrite").objectStore("stills"),t="v"+xr+":",n=e.openKeyCursor?e.openKeyCursor():e.openCursor();n.onsuccess=()=>{let s=n.result;s&&(String(s.key).indexOf(t)!==0&&e.delete(s.key),s.continue())}}catch{}}function Xc(i){let e=0,t=0;for(let n=i;n;n=n.offsetParent)e+=n.offsetLeft,t+=n.offsetTop;return[e,t]}var Wp=.06,Hv=-6*at;function ps(i,e){for(let t=1;t<e.length;t++)if(i<=e[t][0]){let[n,s]=e[t-1],[r,a]=e[t],o=(i-n)/(r-n);return s+(a-s)*o*o*(3-2*o)}return e[e.length-1][1]}var Aa={1:[1.2,i=>({sx:ps(i,[[0,1],[.3,1.12],[.6,.95],[1,1]]),sy:ps(i,[[0,1],[.3,.9],[.6,1.08],[1,1]])})],2:[1.1,i=>({ry:2*Math.PI*ps(i,[[0,0],[1,1]]),y:.14*Math.sin(Math.PI*i)})],3:[1,i=>({y:ps(i,[[0,0],[.4,.36],[.7,0],[1,0]]),sx:ps(i,[[0,1],[.4,1.05],[.7,1.08],[1,1]]),sy:ps(i,[[0,1],[.4,1.05],[.7,.92],[1,1]])})],4:[1.4,i=>({rz:at*ps(i,[[0,0],[.2,-12],[.4,12],[.6,-10],[.8,10],[1,0]])})]};Aa[5]=[2.4,(i,e)=>e<1?Aa[3][1](e):Aa[4][1]((e-1)/1.4)];var Vt=null,Vv=0;function Wv(i,e){let t=e-i.t0,n=i.move&&wt[i.move];return n&&t>n.ms&&(i.loop?(i.t0=e,t=0,i.lap=(i.lap||0)+1,i.offAt=null):(i.move="",i.done&&i.done())),i.move?(i.loop?i.offAt=null:i.offAt==null&&(i.offAt=Math.min(t,n.ms)/n.ms),[t,{first:!i.lap,off:i.offAt}]):[e,null]}function qw(i,e,t={}){let n=Vi();Vt&&Vt.stop();let s={n:++Vv,el:i,fig:null,move:"",t0:0,loop:!!t.loop,turn:(t.turn!=null?t.turn:-12)*at,turn0:(t.turn!=null?t.turn:-12)*at,seen:!0,dpr:Ra(),slow:0,frames:0,pet:null,petId:"",petEl:null,petParts:[],trick:0,trickT0:0,drawnAt:0,lap:0,offAt:0};Vt=s;let r=new Et;yt.add(r);let a=new Et;yt.add(a);let o=n.domElement;o.className="c3-live";let l=()=>[Math.round((i.clientWidth||200)*xs.side),Math.round((i.clientHeight||320)*xs.top)];o.style.left=-l()[0]+"px",o.style.top=-l()[1]+"px",o.style.transition="none",o.style.opacity=t.fadeIn?"0":"",i.appendChild(o);let c=new Be,h=()=>{if(!i.isConnected||!i.clientWidth){s.unlaid=!0;return}let A=s.unlaid;s.unlaid=!1;let T=i.clientWidth,R=i.clientHeight||320,[P,F]=l(),L=-P,U=T+2*P,B=s.petEl&&s.petEl.isConnected&&s.petEl.offsetWidth&&(s.pet||s.petId&&Rf(s.petId))?s.petEl:null;if(B){let J=Xc(B)[0]-Xc(i)[0];L=Math.floor(Math.min(L,J)),U=Math.ceil(Math.max(T+P,J+B.offsetWidth))-L}let z=R+F;n.getSize(c);let Y=c.x!==U||c.y!==z||n.getPixelRatio()!==s.dpr;Y&&n.setDrawingBufferSize(U,z,s.dpr),o.style.left!==L+"px"&&(o.style.left=L+"px"),o.style.top!==-F+"px"&&(o.style.top=-F+"px"),o.style.width!==U+"px"&&(o.style.width=U+"px"),o.style.height!==z+"px"&&(o.style.height=z+"px");let H=t.view||{},Z=(gs.high-gs.low)/R;i0(ms,U,R,Object.assign({},H,{x:(L+U/2-T/2)*Z/(H.zoom||1)})),ms.setViewOffset(U,R,0,-F,U,z),s.linePx=Math.round(R*s.dpr),B&&s.pet&&u(B,T,R,Z),a.visible=!!(B&&s.pet),(Y||A)&&s.fig&&Vt===s&&!kt&&C(performance.now())},u=(A,T,R,P)=>{let F=s.pet,L=F.userData.big,[U,B]=Xc(i),[z,Y]=Xc(A),H=A.offsetWidth,Z=A.offsetHeight,J=Y-B+Z*(1-Wp),ye=Math.min(Z*(1-Wp-.04)*P/L.y,H*.9*P/L.x);F.userData.at={x:(z-U+H/2-T/2)*P,y:gs.low+(R-J)*P,z:.06,s:ye,h:L.y}};t.pet&&t.pet.id&&t.pet.el&&Rf(t.pet.id)&&(s.petEl=t.pet.el,s.petId=t.pet.id),h(),n.setRenderTarget(null),n.clear();let f="IntersectionObserver"in window?new IntersectionObserver(A=>{s.seen=A[0].isIntersecting}):null;f&&f.observe(i);let p="ResizeObserver"in window?new ResizeObserver(h):null;p&&p.observe(i);let b=null,g=A=>{A.pointerType==="mouse"&&A.preventDefault(),b={x:A.clientX,t:s.turn}},m=A=>{b&&(s.turn=b.t+(A.clientX-b.x)*.012)},d=()=>{b=null};t.drag&&(i.addEventListener("pointerdown",g),window.addEventListener("pointermove",m),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d));let w=0,C=A=>{let T=s.fig,R=s.move&&wt[s.move];if(R&&R.lie&&!b){let L=s.turn0-s.turn,U=1-Math.exp(-Math.min(200,Math.max(0,A-s.drawnAt))/130);s.turn+=(L-2*Math.PI*Math.round(L/(2*Math.PI)))*U}s.drawnAt=A,T.turn=s.turn;let[P,F]=Wv(s,A);T.at(s.move,P,F),s.pet&&_(A),Qc(ms,s.linePx||n.domElement.height),n.render(yt,ms)},_=A=>{let T=s.pet,R=T.userData.at,P=T.children[0];if(!R){T.visible=!1;return}T.visible=!0;let F=(1-Math.cos(A/1e3*2*Math.PI/3.2))/2,L=.028*F,U=1,B=1+.02*F,z=0,Y=0;if(s.trick){let De=(A-s.trickT0)/1e3,[re,q]=Aa[s.trick];if(De>=re)s.trick=0;else{let j=q(De/re,De);L+=j.y||0,U*=j.sx||1,B*=j.sy||1,z+=j.rz||0,Y+=j.ry||0}}T.position.set(R.x,R.y,R.z),T.scale.setScalar(R.s),T.rotation.set(0,s.turn+Hv,0),P.position.set(0,L*R.h,0),P.scale.set(U,B,U),P.rotation.set(0,Y,z);let H=A/1e3,Z=s.trick?1:0,J=H%4.6/4.6,ye=J<.92?1:J<.95?1-.9*(J-.92)/.03:.1+.9*(J-.95)/.05,Se=(1-Math.cos(H*2*Math.PI/3.4))/2,je=Z?(1-Math.cos(H*2*Math.PI/.28))/2:0;for(let[De,re,q]of s.petParts)re==="blink"?De.scale.y=ye:re==="wag"?De.rotation.z=(Z?16:9)*at*Math.sin(H*2*Math.PI/(Z?.45:1.1)):re==="ear"?De.rotation.z=-q*at*(5*Se+10*je):re==="wing"&&(De.rotation.z=q*at*(8*Se+26*je))},v=A=>{if(Vt!==s||!s.seen||document.hidden||!s.fig||kt)return;let T=s.fig.turn!==s.turn;if(ii.size&&!T){c0(performance.now()-kf>3e3);return}let R=!!s.move||b||!!s.trick||T;if(!R&&(A-w<30||A<Kc))return;let P=A-w;if(w=A,s.frames++>20&&P>40&&R&&s.slow++,s.slow>30&&s.dpr>1){s.dpr=Math.max(1,s.dpr*.75),s.slow=0,h();return}C(A)};n.setAnimationLoop(v);let S=0,y=null,x=null;return s.ready=new Promise((A,T)=>{y=A,x=T}),s.ready.catch(()=>{}),s.set=A=>{let T=++S;return Of(A).then(R=>(R.using=(R.using||0)+1,br(R.root,ms,!1).then(()=>{if(R.using--,Vt!==s||T!==S){Hi(R);return}let P=s.fig;r.clear(),r.add(R.root),s.fig=R,R.stageN!==s.n&&(R.stageN=s.n,R.stages=(R.stages||0)+1),R.blinks=!0,P&&P!==R&&Hi(P),kt||C(performance.now()),o.style.opacity==="0"&&(o.style.transition="opacity .2s ease-out",o.style.opacity="1"),y(),t.ready&&t.ready()}))).catch(R=>{throw s.fig||x(R),R})},s.play=(A,T)=>(s.move=wt[A]?A:"",s.loop=!!T,s.t0=performance.now(),s.lap=0,s.offAt=T?null:0,new Promise(R=>{s.done=R})),s.setPet=(A,T)=>{let R=s.petEl;return s.petEl=T||null,R&&R!==T&&t.petGone&&t.petGone(R),A===s.petId&&s.pet?(h(),T&&t.petShown&&t.petShown(T),Promise.resolve()):(s.petId=A||"",s.pet&&(a.remove(s.pet),s.pet=null,s.petParts=[],h()),!A||!T||!Rf(A)?Promise.resolve():(p&&p.observe(T),Ca(A).then(P=>{if(Vt!==s||s.petId!==A)return;let F=P.clone(),L=[];F.traverse(B=>{let z=/^(blink|wag|ear|wing)(?:-([LR]))?$/.exec(B.name);z&&!(B.parent&&B.parent.name===B.name)&&L.push([B,z[1],z[2]==="L"?1:z[2]==="R"?-1:0])});let U=new Tt().setFromObject(F.children[0],!0);return F.userData.big={x:Math.max(.01,U.max.x-U.min.x),y:Math.max(.01,U.max.y-U.min.y)},F.visible=!1,br(F,ms,!1).then(()=>{if(Vt!==s||s.petId!==A||s.pet)return;s.pet=F,s.petParts=L,a.add(F),h();let B=()=>{Vt===s&&s.pet===F&&s.petEl&&t.petShown&&t.petShown(s.petEl)};s.fig?(kt||C(performance.now()),B()):s.ready.then(B,()=>{})})}).catch(()=>{})))},s.petPlay=A=>s.pet?(s.trick=Aa[A]?A:1,s.trickT0=performance.now(),!0):!1,s.rehost=A=>{A!==i&&(t.drag&&(i.removeEventListener("pointerdown",g),A.addEventListener("pointerdown",g)),f&&(f.unobserve(i),f.observe(A)),p&&(p.unobserve(i),p.observe(A)),i=A,s.el=A,A.appendChild(o),s.seen=!0,h(),s.fig&&Vt===s&&!kt&&C(performance.now()))},s.stop=()=>{Vt===s&&(Vt=null,n.setAnimationLoop(null)),s.fig&&yv(s.fig),f&&f.disconnect(),p&&p.disconnect(),i.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),yt.remove(r),yt.remove(a),o.parentNode===i&&i.removeChild(o),o.style.left="0px",o.style.top="0px",o.style.opacity="",o.style.transition="",s.petEl&&t.petGone&&t.petGone(s.petEl)},s.set(e).catch(()=>{}),t.pet&&s.setPet(t.pet.id,t.pet.el),t.move&&s.play(t.move,t.loop),s}function Xw(){return Vt&&Vt.fig&&Vt.fig.stages||0}function jw(){for(let[i,e]of[...un])un.delete(i),e.then(t=>{t.gone=!0,Hi(t)},()=>{})}var Df=!0;function Kw(i){i.stand&&(Object.keys(fa).forEach(t=>delete fa[t]),Object.assign(fa,i.stand)),i.keep!=null&&(Df=i.keep),un.clear(),bs.clear();let e=gr;gr=null,e&&(e.gone=!0,Hi(e))}var Jw=xr,rn=new Map,Yw=()=>rn.clear(),Zc=8,Ea=()=>new Promise(i=>{let e=new MessageChannel;e.port1.onmessage=()=>{e.port1.close(),i()},e.port2.postMessage(0)});async function mr(i,e,t,n,s){let r=ff(),a=Math.fround,o=new D,l=t,c=s||[];i&&i.traverse(f=>{f.isMesh&&!f.userData.line&&f.geometry&&f.geometry.attributes.position&&c.push([f.geometry,new Me().multiplyMatrices(e,f.matrixWorld)])});let h=performance.now(),u=0;for(let[f,p,b]of c){let g=f.attributes.position,m=f.index,d=new Float32Array(g.count*3);for(let v=0;v<g.count;v++)o.fromBufferAttribute(g,v).applyMatrix4(p),d[3*v]=o.x,d[3*v+1]=o.y,d[3*v+2]=o.z,(!b||b[v])&&Uc(r,n,d[3*v],d[3*v+1],d[3*v+2],!0),(v&1023)===1023&&performance.now()-h>Zc&&(await Ea(),h=performance.now());let w=m?m.count/3:g.count/3,C=(v,S)=>m?m.getX(v*3+S):v*3+S,_=(v,S)=>(d[v]-d[S])**2+(d[v+1]-d[S+1])**2+(d[v+2]-d[S+2])**2;for(let v=0;v<w;v++){let S=C(v,0)*3,y=C(v,1)*3,x=C(v,2)*3;if(b&&!(b[S/3]&&b[y/3]&&b[x/3]))continue;let A=_(S,y),T=_(y,x),R=_(x,S);T>=A&&T>=R?[S,y,x]=[y,x,S]:R>=A&&R>=T&&([S,y,x]=[x,S,y]);let P=Math.sqrt(Math.max(A,T,R));if(P<=t)continue;let F=d[y]-d[S],L=d[y+1]-d[S+1],U=d[y+2]-d[S+2],B=d[x]-d[S],z=d[x+1]-d[S+1],Y=d[x+2]-d[S+2],H=d[x]-d[y],Z=d[x+1]-d[y+1],J=d[x+2]-d[y+2],ye=Math.hypot(L*Y-U*z,U*B-F*Y,F*z-L*B)/P,Se=Math.max(1,Math.ceil(ye/l));for(let je=0;je<Se;je++){let De=je/Se,re=d[S]+B*De,q=d[S+1]+z*De,j=d[S+2]+Y*De,ie=d[y]+H*De-re,oe=d[y+1]+Z*De-q,de=d[y+2]+J*De-j,Ne=Math.max(1,Math.ceil(P*(1-De)/l));for(let Ge=0;Ge<=Ne;Ge++)Uc(r,n,a(re+ie*Ge/Ne),a(q+oe*Ge/Ne),a(j+de*Ge/Ne),!1);u+=Ne+1}u>1024&&(u=0,performance.now()-h>Zc&&(await Ea(),h=performance.now()))}}return await Ea(),r}function If(i,e,t,n){let s="skin|"+i.look.g,r=rn.get(s);if(r)return r;let a=[];for(let o of i.meshes){if(!o.isSkinnedMesh||o.userData.part&&o.userData.part!=="face")continue;let l=o.skeleton.bones.indexOf(e);if(l<0)continue;let c=o.geometry,h=c.attributes.skinIndex,u=c.attributes.skinWeight,f=new Uint8Array(h.count);for(let p=0;p<h.count;p++)for(let b=0;b<4;b++)h.getComponent(p,b)===l&&u.getComponent(p,b)>=.5&&(f[p]=1);a.push([c,new Me().multiplyMatrices(o.skeleton.boneInverses[l],o.bindMatrix),f])}return r=mr(null,null,.004/t,n,a).then(o=>(rn.set(s,o),o)),rn.set(s,r),r}function qp(i,e,t,n,s){let r=s?hf(n):op(n),a=s?lp:cp,o=new Me().copy(e.matrixWorld).invert(),l=new Me,c=new Me,h=new D,u=[0,0,0],f=new Map;i.traverse(p=>{if(!p.isMesh||p.isSkinnedMesh||!p.geometry||!p.geometry.attributes.position)return;let b=p.geometry;if(f.has(b)){p.geometry=f.get(b),p.userData.bent=!0;return}l.multiplyMatrices(o,p.matrixWorld),c.copy(l).invert();let g=p.geometry.attributes.position,m=new Float32Array(g.count*3);for(let d=0;d<g.count;d++)h.fromBufferAttribute(g,d).applyMatrix4(l),a(r,t,h.x,h.y,h.z,u),h.set(u[0],u[1],u[2]).applyMatrix4(c),m[3*d]=h.x,m[3*d+1]=h.y,m[3*d+2]=h.z;p.geometry=p.geometry.clone(),p.geometry.setAttribute("position",new nt(m,3)),p.userData.bent=!0,p.geometry.computeBoundingBox(),p.geometry.computeBoundingSphere(),f.set(b,p.geometry)})}export{da as BACK,Lf as Figure,wt as MOVES,ur as SNUG,Cf as SPIN_PAD,dr as TUCK,Gw as bleed,Bw as broken,kw as calm,jw as crowd,Ww as emblem,Hw as face,Dw as has,Rf as hasThing,Ow as hold,Ta as lookKey,Nw as manifest,Wv as moveClock,Uw as ok,Fw as setBase,qw as stage,Xw as staged,zw as still,Vw as thing,Yw as tuckDrop,Kw as tune,Jw as version};
