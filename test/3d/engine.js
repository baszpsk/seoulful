/* Seoulful Staff 3D characters; three.js (MIT, mrdoob and contributors) */
var ju=0,pl=1,Ku=2;var Vr=1,Ju=2,qs=3,Xn=0,Ot=1,on=2,jn=0,Xs=1,ml=2,gl=3,bl=4,Yu=5;var ts=100,Zu=101,$u=102,Qu=103,e0=104,t0=200,n0=201,i0=202,s0=203,xl=204,_l=205,r0=206,a0=207,o0=208,c0=209,l0=210,h0=211,u0=212,d0=213,f0=214,Ha=0,Wa=1,qa=2,Ps=3,Xa=4,ja=5,Ka=6,Ja=7,go=0,p0=1,m0=2,In=0,yl=1,vl=2,Ml=3,Sl=4,wl=5,Al=6,Hr=7,nl="attached",g0="detached",Tl=300,Li=301,ns=302,bo=303,xo=304,Wr=306,wi=1e3,bn=1001,Is=1002,Et=1003,_o=1004;var is=1005;var vt=1006,js=1007;var Ln=1008;var cn=1009,El=1010,Rl=1011,Ks=1012,yo=1013,Dn=1014,fn=1015,Fn=1016,vo=1017,Mo=1018,Js=1020,Cl=35902,Pl=35899,Il=1021,Ll=1022,pn=1023,Gn=1026,Di=1027,Ys=1028,So=1029,Fi=1030,wo=1031;var Ao=1033,qr=33776,Xr=33777,jr=33778,Kr=33779,To=35840,Eo=35841,Ro=35842,Co=35843,Po=36196,Io=37492,Lo=37496,Do=37488,Fo=37489,Jr=37490,No=37491,Uo=37808,Oo=37809,ko=37810,Bo=37811,zo=37812,Go=37813,Vo=37814,Ho=37815,Wo=37816,qo=37817,Xo=37818,jo=37819,Ko=37820,Jo=37821,Yo=36492,Zo=36494,$o=36495,Qo=36283,ec=36284,Yr=36285,tc=36286;var Wi=2300,qi=2301,za=2302,il=2303,sl=2400,rl=2401,al=2402,b0=2500;var Dl=0,Zr=1,Zs=2,x0=3200;var $s=0,_0=1,fi="",bt="srgb",en="srgb-linear",vr="linear",$e="srgb";var Ga=7680;var y0=519,v0=512,M0=513,S0=514,nc=515,w0=516,A0=517,ic=518,T0=519,Fl=35044;var Nl="300 es",Cn=2e3,Ls=2001;function yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function E0(){let i=Ds("canvas");return i.style.display="block",i}var hu={},Fs=null;function Mr(...i){let e="THREE."+i.shift();Fs?Fs("log",e,...i):console.log(e,...i)}function R0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=R0(i);let e="THREE."+i.shift();if(Fs)Fs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=R0(i);let e="THREE."+i.shift();if(Fs)Fs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hi(...i){let e=i.join(" ");e in hu||(hu[e]=!0,we(...i))}function C0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var P0={[Ha]:Wa,[qa]:Ka,[Xa]:Ja,[Ps]:ja,[Wa]:Ha,[Ka]:qa,[Ja]:Xa,[ja]:Ps},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=1234567,_r=Math.PI/180,Xi=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Ul(i,e){return(i%e+e)%e}function Mf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sf(i,e,t){return i!==e?(t-i)/(e-i):0}function yr(i,e,t){return(1-t)*i+t*e}function wf(i,e,t,n){return yr(i,e,1-Math.exp(-t*n))}function Af(i,e=1){return e-Math.abs(Ul(i,e*2)-e)}function Tf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ef(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cf(i,e){return i+Math.random()*(e-i)}function Pf(i){return i*(.5-Math.random())}function If(i){i!==void 0&&(uu=i);let e=uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lf(i){return i*_r}function Df(i){return i*Xi}function Ff(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Nf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Of(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ol={DEG2RAD:_r,RAD2DEG:Xi,generateUUID:Pn,clamp:qe,euclideanModulo:Ul,mapLinear:Mf,inverseLerp:Sf,lerp:yr,damp:wf,pingpong:Af,smoothstep:Tf,smootherstep:Ef,randInt:Rf,randFloat:Cf,randFloatSpread:Pf,seededRandom:If,degToRad:Lf,radToDeg:Df,isPowerOfTwo:Ff,ceilPowerOfTwo:Nf,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:Of,normalize:tt,denormalize:Rn},Vl=class Vl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vl.prototype.isVector2=!0;var Ne=Vl,_t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+x*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+x*o;let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hl=class Hl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hl.prototype.isVector3=!0;var L=Hl,Lc=new L,du=new _t,Wl=class Wl{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],T=s[4],y=s[7],M=s[2],A=s[5],R=s[8];return r[0]=a*x+o*S+c*M,r[3]=a*m+o*T+c*A,r[6]=a*p+o*y+c*R,r[1]=l*x+h*S+d*M,r[4]=l*m+h*T+d*A,r[7]=l*p+h*y+d*R,r[2]=u*x+f*S+g*M,r[5]=u*m+f*T+g*A,r[8]=u*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wl.prototype.isMatrix3=!0;var Le=Wl,Dc=new Le,fu=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kf(){let i={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[en]:{primaries:e,whitePoint:n,transfer:vr,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var ze=kf();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,Ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Ds("canvas")),ms.width=e.width,ms.height=e.height;let s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ds("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bf=0,Ns=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fc(s[a].image)):r.push(Fc(s[a]))}else r=Fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var zf=0,Nc=new L,Nt=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bn,s=bn,r=vt,a=Ln,o=pn,c=cn,l=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Pn(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Tl;Nt.DEFAULT_ANISOTROPY=1;var ql=class ql{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,y=(f+1)/2,M=(p+1)/2,A=(h+u)/4,R=(d+x)/4,_=(g+m)/4;return T>y&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=R/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ql.prototype.isVector4=!0;var nt=ql,Za=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Nt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends Za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sr=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var mo=class mo{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,Vf)}lookAt(e,t,n){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),bi.crossVectors(n,hn),bi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),bi.crossVectors(n,hn)),bi.normalize(),ma.crossVectors(hn,bi),s[0]=bi.x,s[4]=ma.x,s[8]=hn.x,s[1]=bi.y,s[5]=ma.y,s[9]=hn.y,s[2]=bi.z,s[6]=ma.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],T=n[7],y=n[11],M=n[15],A=s[0],R=s[4],_=s[8],w=s[12],C=s[1],P=s[5],U=s[9],B=s[13],I=s[2],k=s[6],q=s[10],W=s[14],te=s[3],X=s[7],Y=s[11],ee=s[15];return r[0]=a*A+o*C+c*I+l*te,r[4]=a*R+o*P+c*k+l*X,r[8]=a*_+o*U+c*q+l*Y,r[12]=a*w+o*B+c*W+l*ee,r[1]=h*A+d*C+u*I+f*te,r[5]=h*R+d*P+u*k+f*X,r[9]=h*_+d*U+u*q+f*Y,r[13]=h*w+d*B+u*W+f*ee,r[2]=g*A+x*C+m*I+p*te,r[6]=g*R+x*P+m*k+p*X,r[10]=g*_+x*U+m*q+p*Y,r[14]=g*w+x*B+m*W+p*ee,r[3]=S*A+T*C+y*I+M*te,r[7]=S*R+T*P+y*k+M*X,r[11]=S*_+T*U+y*q+M*Y,r[15]=S*w+T*B+y*W+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=c*f-l*u,T=o*f-l*d,y=o*u-c*d,M=a*f-l*h,A=a*u-c*h,R=a*d-o*h;return t*(x*S-m*T+p*y)-n*(g*S-m*M+p*A)+s*(g*T-x*M+p*R)-r*(g*y-x*A+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=t*o-n*a,T=t*c-s*a,y=t*l-r*a,M=n*c-s*o,A=n*l-r*o,R=s*l-r*c,_=h*x-d*g,w=h*m-u*g,C=h*p-f*g,P=d*m-u*x,U=d*p-f*x,B=u*p-f*m,I=S*B-T*U+y*P+M*C-A*w+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(o*B-c*U+l*P)*k,e[1]=(s*U-n*B-r*P)*k,e[2]=(x*R-m*A+p*M)*k,e[3]=(u*A-d*R-f*M)*k,e[4]=(c*C-a*B-l*w)*k,e[5]=(t*B-s*C+r*w)*k,e[6]=(m*y-g*R-p*T)*k,e[7]=(h*R-u*y+f*T)*k,e[8]=(a*U-o*C+l*_)*k,e[9]=(n*C-t*U-r*_)*k,e[10]=(g*A-x*y+p*S)*k,e[11]=(d*y-h*A-f*S)*k,e[12]=(o*w-a*P-c*_)*k,e[13]=(t*P-n*w+s*_)*k,e[14]=(x*T-g*M-m*S)*k,e[15]=(h*M-d*T+u*S)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,S=c*l,T=c*h,y=c*d,M=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*M,s[1]=(f+y)*M,s[2]=(g-T)*M,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(u+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+T)*R,s[9]=(m-S)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),c=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);let l=1/a,h=1/o,d=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Cn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ls)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Cn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ls)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};mo.prototype.isMatrix4=!0;var Pe=mo,gs=new L,wn=new Pe,Gf=new L(0,0,0),Vf=new L(1,1,1),bi=new L,ma=new L,hn=new L,mu=new Pe,gu=new _t,xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hf=0,bu=new L,bs=new _t,ei=new Pe,ga=new L,ur=new L,Wf=new L,qf=new _t,xu=new L(1,0,0),_u=new L(0,1,0),yu=new L(0,0,1),vu={type:"added"},Xf={type:"removed"},xs={type:"childadded",child:null},Uc={type:"childremoved",child:null},dt=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new xn,n=new _t,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Le}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ur,ga,this.up):ei.lookAt(ga,ur,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ei),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xf),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jf={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ze.workingColorSpace){if(e=Ul(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Oc(a,r,e+1/3),this.g=Oc(a,r,e),this.b=Oc(a,r,e-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=I0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ze.workingToColorSpace(Kt.copy(this),e),Math.round(qe(Kt.r*255,0,255))*65536+Math.round(qe(Kt.g*255,0,255))*256+Math.round(qe(Kt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=bt){ze.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(ba);let n=yr(xi.h,ba.h,t),s=yr(xi.s,ba.s,t),r=yr(xi.l,ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Se;Se.NAMES=I0;var ji=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new L,ti=new L,kc=new L,ni=new L,_s=new L,ys=new L,Mu=new L,Bc=new L,zc=new L,Gc=new L,Vc=new nt,Hc=new nt,Wc=new nt,Si=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),ti.subVectors(n,t),kc.subVectors(e,t);let a=An.dot(An),o=An.dot(ti),c=An.dot(kc),l=ti.dot(ti),h=ti.dot(kc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Vc.setScalar(0),Hc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vc,r.x),a.addScaledVector(Hc,r.y),a.addScaledVector(Wc,r.z),a}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),ti.subVectors(e,t),An.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),An.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),ys.subVectors(r,n),Bc.subVectors(e,n);let c=_s.dot(Bc),l=ys.dot(Bc);if(c<=0&&l<=0)return t.copy(n);zc.subVectors(e,s);let h=_s.dot(zc),d=ys.dot(zc);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(_s,a);Gc.subVectors(e,r);let f=_s.dot(Gc),g=ys.dot(Gc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ys,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Mu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Mu,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(_s,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},At=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),_a.subVectors(this.max,dr),vs.subVectors(e.a,dr),Ms.subVectors(e.b,dr),Ss.subVectors(e.c,dr),_i.subVectors(Ms,vs),yi.subVectors(Ss,Ms),Bi.subVectors(vs,Ss);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Bi.y,Bi.x,0];return!qc(t,vs,Ms,Ss,_a)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,vs,Ms,Ss,_a))?!1:(ya.crossVectors(_i,yi),t=[ya.x,ya.y,ya.z],qc(t,vs,Ms,Ss,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,xa=new At,vs=new L,Ms=new L,Ss=new L,_i=new L,yi=new L,Bi=new L,dr=new L,_a=new L,ya=new L,zi=new L;function qc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Dt=new L,va=new Ne,Kf=0,xt=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ar=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tr=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qt=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jf=new At,fr=new L,Xc=new L,sn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Xc)),this.expandByPoint(fr.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yf=0,gn=new Pe,jc=new dt,ws=new L,un=new At,pr=new At,Vt=new L,Ut=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?Tr:Ar)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(un.min,pr.min),un.expandByPoint(Vt),Vt.addVectors(un.max,pr.max),un.expandByPoint(Vt)):(un.expandByPoint(pr.min),un.expandByPoint(pr.max))}un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Vt.fromBufferAttribute(o,l),c&&(ws.fromBufferAttribute(e,l),Vt.add(ws)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new L,c[_]=new L;let l=new L,h=new L,d=new L,u=new Ne,f=new Ne,g=new Ne,x=new L,m=new L;function p(_,w,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(x),o[w].add(x),o[C].add(x),c[_].add(m),c[w].add(m),c[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,w=S.length;_<w;++_){let C=S[_],P=C.start,U=C.count;for(let B=P,I=P+U;B<I;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let T=new L,y=new L,M=new L,A=new L;function R(_){M.fromBufferAttribute(s,_),A.copy(M);let w=o[_];T.copy(w),T.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(A,w);let P=y.dot(c[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,P)}for(let _=0,w=S.length;_<w;++_){let C=S[_],P=C.start,U=C.count;for(let B=P,I=P+U;B<I;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new xt(u,h,d)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},$t=new L,ks=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kc=new L,Zf=new L,$f=new Le,En=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Kc.subVectors(n,t).cross(Zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$f.getNormalMatrix(e),s=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qf=0,Jt=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Xs,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=_l,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var si=new L,Jc=new L,Ma=new L,Sa=new L,Ki=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jc.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Sa.copy(this.origin).sub(Jc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=Sa.dot(this.direction),c=-Sa.dot(Ma),l=Sa.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jc).addScaledVector(Ma,u),f}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,T=n.z-a.z,y=Math.abs(c),M=Math.abs(l),A=Math.abs(h),R,_,w,C,P,U,B,I,k,q,W,te;if(y>=M&&y>=A?(w=c,U=d,k=g,te=p,c>=0?(R=l,_=h,C=u,P=f,B=x,I=m,q=S,W=T):(R=h,_=l,C=f,P=u,B=m,I=x,q=T,W=S)):M>=A?(w=l,U=u,k=x,te=S,l>=0?(R=h,_=c,C=f,P=d,B=m,I=g,q=T,W=p):(R=c,_=h,C=d,P=f,B=g,I=m,q=p,W=T)):(w=h,U=f,k=m,te=T,h>=0?(R=c,_=l,C=d,P=u,B=g,I=x,q=p,W=S):(R=l,_=c,C=u,P=d,B=x,I=g,q=S,W=p)),w===0)return null;let X=R/w,Y=_/w,ee=1/w,Ae=C-X*U,ve=P-Y*U,Qe=B-X*k,Fe=I-Y*k,Be=q-X*te,j=W-Y*te,$=Be*Fe-j*Qe,be=Ae*j-ve*Be,De=Qe*ve-Fe*Ae;if(s){if($<0||be<0||De<0)return null}else if(($<0||be<0||De<0)&&($>0||be>0||De>0))return null;let me=$+be+De;if(me===0)return null;let Ge=ee*($*U+be*k+De*te);return(me>0?Ge<0:Ge>0)?null:this.at(Ge/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Su=new Pe,Gi=new Ki,wa=new sn,wu=new L,Aa=new L,Ta=new L,Ea=new L,Yc=new L,Ra=new L,Au=new L,Ca=new L,rt=class extends dt{constructor(e=new Ut,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Yc.fromBufferAttribute(d,e),a?Ra.addScaledVector(Yc,h):Ra.addScaledVector(Yc.sub(t),h))}t.add(Ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(wa.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(wa,wu)===null||Gi.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,M=T;y<M;y+=3){let A=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=Pa(this,p,e,n,l,h,d,A,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=Pa(this,a,e,n,l,h,d,S,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,M=T;y<M;y+=3){let A=y,R=y+1,_=y+2;s=Pa(this,p,e,n,l,h,d,A,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let S=m,T=m+1,y=m+2;s=Pa(this,a,e,n,l,h,d,S,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ep(i,e,t,n,s,r,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Xn,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:i}}function Pa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Aa),i.getVertexPosition(c,Ta),i.getVertexPosition(l,Ea);let h=ep(i,e,t,n,Aa,Ta,Ea,Au);if(h){let d=new L;Si.getBarycoord(Au,Aa,Ta,Ea,d),s&&(h.uv=Si.getInterpolatedAttribute(s,o,c,l,d,new Ne)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,c,l,d,new Ne)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};Si.getNormal(Aa,Ta,Ea,u.normal),h.face=u,h.barycoord=d}return h}var mr=new nt,Tu=new nt,Eu=new nt,tp=new nt,Ru=new Pe,Ia=new L,Zc=new sn,Cu=new Pe,$c=new Ki,Ai=class extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nl,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new At),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zc.copy(this.boundingSphere),Zc.applyMatrix4(s),e.ray.intersectsSphere(Zc)!==!1&&(Cu.copy(s).invert(),$c.copy(e.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&$c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===g0?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Tu.fromBufferAttribute(s.attributes.skinIndex,e),Eu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(mr.copy(t),t.set(0,0,0,0)):(mr.set(...t,1),t.set(0,0,0)),mr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Eu.getComponent(r);if(a!==0){let o=Tu.getComponent(r);Ru.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tp.copy(mr).applyMatrix4(Ru),a)}}return t.isVector4&&(t.w=mr.w),t.applyMatrix4(this.bindMatrixInverse)}},Bs=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ti=class extends Nt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Et,h=Et,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pu=new Pe,np=new Pe,Ji=class i{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:np;Pu.multiplyMatrices(o,t[r]),Pu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ti(t,e,e,pn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(we("Skeleton: No bone found with UUID:",r),a=new Bs),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},oi=class extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new Pe,Iu=new Pe,La=[],Lu=new At,ip=new Pe,gr=new rt,br=new sn,Yi=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ip)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new At),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Lu.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),br.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),Iu.multiplyMatrices(n,As),gr.matrixWorld=Iu,gr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let c=La[a];c.instanceId=r,c.object=this,t.push(c)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(s*this.count),s,this.count,Ys,fn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new sn,sp=new Ne(.5,.5),Da=new L,zs=class{constructor(e=new En,t=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],T=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-a,f-h,p-g,M-S).normalize(),s[1].setComponents(l+a,f+h,p+g,M+S).normalize(),s[2].setComponents(l+o,f+d,p+x,M+T).normalize(),s[3].setComponents(l-o,f-d,p-x,M-T).normalize(),n)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,f-u,p-m,M-y).normalize();else if(s[4].setComponents(l-c,f-u,p-m,M-y).normalize(),t===Cn)s[5].setComponents(l+c,f+u,p+m,M+y).normalize();else if(t===Ls)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=sp.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Da.x=s.normal.x>0?e.max.x:e.min.x,Da.y=s.normal.y>0?e.max.y:e.min.y,Da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gs=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qa=new L,eo=new L,Du=new Pe,xr=new Ki,Fa=new sn,Qc=new L,Fu=new L,Zi=class extends dt{constructor(e=new Ut,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qa.fromBufferAttribute(t,s-1),eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qa.distanceTo(eo);e.setAttribute("lineDistance",new Qt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Du.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),S=h.getX(x+1),T=Na(this,e,xr,c,p,S,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Na(this,e,xr,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Na(this,e,xr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Na(this,e,xr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Na(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),eo.fromBufferAttribute(o,r),t.distanceSqToSegment(Qa,eo,Qc,Fu)>n)return;Qc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qc);if(!(l<e.near||l>e.far))return{distance:l,point:Fu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Nu=new L,Uu=new L,Er=class extends Zi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nu.fromBufferAttribute(t,s),Uu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nu.distanceTo(Uu);e.setAttribute("lineDistance",new Qt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Rr=class extends Zi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vs=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ou=new Pe,ol=new Ki,Ua=new sn,Oa=new L,Cr=class extends dt{constructor(e=new Ut,t=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;Ou.copy(s).invert(),ol.copy(e.ray).applyMatrix4(Ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,x=f;g<x;g++){let m=l.getX(g);Oa.fromBufferAttribute(d,m),ku(Oa,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)Oa.fromBufferAttribute(d,g),ku(Oa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ku(i,e,t,n,s,r,a){let o=ol.distanceSqToPoint(i);if(o<t){let c=new L;ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pr=class extends Nt{constructor(e=[],t=Li,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ir=class extends Nt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends Nt{constructor(e,t,n=Dn,s,r,a,o=Et,c=Et,l,h=Gn,d=1){if(h!==Gn&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},to=class extends Ei{constructor(e,t=Dn,n=Li,s,r,a=Et,o=Et,c,l=Gn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lr=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ri=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function g(x,m,p,S,T,y,M,A,R,_,w){let C=y/R,P=M/_,U=y/2,B=M/2,I=A/2,k=R+1,q=_+1,W=0,te=0,X=new L;for(let Y=0;Y<q;Y++){let ee=Y*P-B;for(let Ae=0;Ae<k;Ae++){let ve=Ae*C-U;X[x]=ve*S,X[m]=ee*T,X[p]=I,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(Ae/R),d.push(1-Y/_),W+=1}}for(let Y=0;Y<_;Y++)for(let ee=0;ee<R;ee++){let Ae=u+ee+k*Y,ve=u+ee+k*(Y+1),Qe=u+(ee+1)+k*(Y+1),Fe=u+(ee+1)+k*Y;c.push(Ae,ve,Fe),c.push(ve,Qe,Fe),te+=6}o.addGroup(f,te,w),f+=te,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $i=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let T=0;T<l;T++){let y=T*d-r;g.push(y,-S,0),x.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let T=S+l*p,y=S+l*(p+1),M=S+1+l*(p+1),A=S+1+l*p;f.push(T,y,A),f.push(y,M,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Bu(s))s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Bu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=ss(i[t]);for(let s in n)e[s]=n[s]}return e}function Bu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var L0={clone:ss,merge:Yt},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},no=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hn=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends Hn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Dr=class extends Jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Fr=class extends Jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=go,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},io=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},so=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Va(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function cp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function zu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function lp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Wn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ro=class extends Wn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rl:r=e,o=2*t-n;break;case al:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rl:a=e,c=2*n-t;break;case al:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,S=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+S*a[l+M]+T*a[c+M]+y*a[d+M];return r}},ao=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},oo=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},co=class extends Wn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=f*u+g*2,S=d[p],T=d[p+1],y=e*u+g*2,M=h[y],A=h[y+1],R=up(n,t,S,M,s);r[g]=D0(R,x,T,A,m)}return r}};function D0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function hp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function up(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=D0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=hp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var an=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mi(t,this.TimeBufferType),this.values=Mi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mi(e.times,Array),values:Mi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Va(e.settings)&&(n.settings={inTangents:Mi(e.settings.inTangents,Array),outTangents:Mi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new co(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wi:t=this.InterpolantFactoryMethodDiscrete;break;case qi:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break;case il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wi;case this.InterpolantFactoryMethodLinear:return qi;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Va(this.settings)&&(Gu(this.settings.inTangents,e),Gu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ie("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ie("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&vf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Va(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=qi;var ci=class extends an{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Wi;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};Nr.prototype.ValueTypeName="color";var li=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};li.prototype.ValueTypeName="number";var lo=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)_t.slerpFlat(r,0,a,l-o,a,l,c);return r}},hi=class extends an{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends an{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Wi;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};Ci.prototype.ValueTypeName="vector";var Ur=class{constructor(e="",t=-1,n=[],s=b0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fp(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(an.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=cp(c);c=zu(c,1,h),l=zu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function dp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return li;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return Nr;case"quaternion":return hi;case"bool":case"boolean":return ci;case"string":return ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function fp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=dp(i.type);if(i.times===void 0){let n=[],s=[];lp(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Va(i.settings)&&(t.settings={inTangents:Mi(i.settings.inTangents,Float32Array),outTangents:Mi(i.settings.outTangents,Float32Array)}),t}var zn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ho=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},F0=new ho,qn=class{constructor(e){this.manager=e!==void 0?e:F0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},cl=class extends Error{constructor(e,t){super(e),this.response=t}},Hs=class extends qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ri[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,x=0,m=new ReadableStream({start(p){S();function S(){d.read().then(({done:T,value:y})=>{if(T)p.close();else{x+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let _=h[A];_.onProgress&&_.onProgress(M)}p.enqueue(y),S()}},T=>{p.error(T)})}}});return new Response(m)}else throw new cl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{zn.add(`file:${e}`,l);let h=ri[e];delete ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=new WeakMap,uo=class extends qn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ts.get(a);d===void 0&&(d=[],Ts.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Ds("img");function c(){h(),t&&t(this);let d=Ts.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Ts.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),zn.remove(`image:${e}`);let u=Ts.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Ts.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Or=class extends qn{constructor(e){super(e)}load(e,t,n,s){let r=new Nt,a=new uo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Qi=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},kr=class extends Qi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},el=new Pe,Hu=new L,Wu=new L,Ws=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){el.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(el,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ka=new L,Ba=new _t,Bn=new L,Br=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Ba,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ka,Ba,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new L,qu=new Ne,Xu=new Ne,St=class extends Br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Xu),t.subVectors(Xu,qu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ll=class extends Ws{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zr=class extends Qi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ll}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},hl=class extends Ws{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0}},es=class extends Qi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pi=class extends Br{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ul=class extends Ws{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends Qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var di=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var tl=new WeakMap,Gr=class extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=zn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{tl.has(a)===!0?(s&&s(tl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),tl.set(c,l),zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});zn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Es=-90,Rs=1,fo=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Es,Rs,e,t);s.layers=this.layers,this.add(s);let r=new St(Es,Rs,e,t);r.layers=this.layers,this.add(r);let a=new St(Es,Rs,e,t);a.layers=this.layers,this.add(a);let o=new St(Es,Rs,e,t);o.layers=this.layers,this.add(o);let c=new St(Es,Rs,e,t);c.layers=this.layers,this.add(c);let l=new St(Es,Rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bl="\\[\\]\\.:\\/",pp=new RegExp("["+Bl+"]","g"),zl="[^"+Bl+"]",mp="[^"+Bl.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",zl),bp=/(WCOD+)?/.source.replace("WCOD",mp),xp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),_p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),yp=new RegExp("^"+gp+bp+xp+_p+"$"),vp=["material","materials","bones","map"],dl=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(e){let t=yp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=dl;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pb=new Float32Array(1);var Xl=class Xl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Xl.prototype.isMatrix2=!0;var fl=Xl;function Gl(i,e,t,n){let s=Mp(n);switch(t){case Il:return i*e;case Ys:return i*e/s.components*s.byteLength;case So:return i*e/s.components*s.byteLength;case Fi:return i*e*2/s.components*s.byteLength;case wo:return i*e*2/s.components*s.byteLength;case Ll:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Ao:return i*e*4/s.components*s.byteLength;case qr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:case Co:return Math.max(i,16)*Math.max(e,8)/4;case To:case Ro:return Math.max(i,8)*Math.max(e,8)/2;case Po:case Io:case Do:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Jr:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Zo:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qo:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yr:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mp(i){switch(i){case cn:case El:return{byteLength:1,components:1};case Ks:case Rl:case Fn:return{byteLength:2,components:1};case vo:case Mo:return{byteLength:2,components:4};case Dn:case yo:case fn:return{byteLength:4,components:1};case Cl:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wp(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t2="gl_FragColor = linearToOutputTexel( gl_FragColor );",n2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i2=`#ifdef USE_ENVMAP
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
#endif`,s2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r2=`#ifdef USE_ENVMAP
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
#endif`,a2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o2=`#ifdef USE_ENVMAP
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
#endif`,c2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d2=`#ifdef USE_GRADIENTMAP
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
}`,f2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b2=`#ifdef USE_ENVMAP
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
#endif`,x2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M2=`PhysicalMaterial material;
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
#endif`,S2=`uniform sampler2D dfgLUT;
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
}`,w2=`
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
#endif`,A2=`#if defined( RE_IndirectDiffuse )
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
#endif`,T2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,R2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N2=`#if defined( USE_POINTS_UV )
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
#endif`,U2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G2=`#ifdef USE_MORPHTARGETS
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
#endif`,V2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K2=`#ifdef USE_NORMALMAP
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
#endif`,J2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h1=`float getShadowMask() {
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
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,f1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,D1=`#define DISTANCE
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
}`,F1=`#define DISTANCE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,k1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,z1=`uniform vec3 diffuse;
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
}`,G1=`#define LAMBERT
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
}`,V1=`#define LAMBERT
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
}`,H1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,X1=`#define NORMAL
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
}`,j1=`#define PHONG
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
}`,K1=`#define PHONG
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
}`,J1=`#define STANDARD
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
}`,Y1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,$1=`#define TOON
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
}`,Q1=`uniform float size;
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
}`,e3=`uniform vec3 diffuse;
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
}`,t3=`#include <common>
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
}`,n3=`uniform vec3 color;
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
}`,i3=`uniform float rotation;
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
}`,s3=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Ap,alphahash_pars_fragment:Tp,alphamap_fragment:Ep,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:Fp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:Op,iridescence_fragment:kp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Hp,color_fragment:Wp,color_pars_fragment:qp,color_pars_vertex:Xp,color_vertex:jp,common:Kp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:$p,emissivemap_fragment:Qp,emissivemap_pars_fragment:e2,colorspace_fragment:t2,colorspace_pars_fragment:n2,envmap_fragment:i2,envmap_common_pars_fragment:s2,envmap_pars_fragment:r2,envmap_pars_vertex:a2,envmap_physical_pars_fragment:b2,envmap_vertex:o2,fog_vertex:c2,fog_pars_vertex:l2,fog_fragment:h2,fog_pars_fragment:u2,gradientmap_pars_fragment:d2,lightmap_pars_fragment:f2,lights_lambert_fragment:p2,lights_lambert_pars_fragment:m2,lights_pars_begin:g2,lights_toon_fragment:x2,lights_toon_pars_fragment:_2,lights_phong_fragment:y2,lights_phong_pars_fragment:v2,lights_physical_fragment:M2,lights_physical_pars_fragment:S2,lights_fragment_begin:w2,lights_fragment_maps:A2,lights_fragment_end:T2,lightprobes_pars_fragment:E2,logdepthbuf_fragment:R2,logdepthbuf_pars_fragment:C2,logdepthbuf_pars_vertex:P2,logdepthbuf_vertex:I2,map_fragment:L2,map_pars_fragment:D2,map_particle_fragment:F2,map_particle_pars_fragment:N2,metalnessmap_fragment:U2,metalnessmap_pars_fragment:O2,morphinstance_vertex:k2,morphcolor_vertex:B2,morphnormal_vertex:z2,morphtarget_pars_vertex:G2,morphtarget_vertex:V2,normal_fragment_begin:H2,normal_fragment_maps:W2,normal_pars_fragment:q2,normal_pars_vertex:X2,normal_vertex:j2,normalmap_pars_fragment:K2,clearcoat_normal_fragment_begin:J2,clearcoat_normal_fragment_maps:Y2,clearcoat_pars_fragment:Z2,iridescence_pars_fragment:$2,opaque_fragment:Q2,packing:e1,premultiplied_alpha_fragment:t1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:s1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:c1,shadowmap_vertex:l1,shadowmask_pars_fragment:h1,skinbase_vertex:u1,skinning_pars_vertex:d1,skinning_vertex:f1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:g1,tonemapping_fragment:b1,tonemapping_pars_fragment:x1,transmission_fragment:_1,transmission_pars_fragment:y1,uv_pars_fragment:v1,uv_pars_vertex:M1,uv_vertex:S1,worldpos_vertex:w1,background_vert:A1,background_frag:T1,backgroundCube_vert:E1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:P1,depth_vert:I1,depth_frag:L1,distance_vert:D1,distance_frag:F1,equirect_vert:N1,equirect_frag:U1,linedashed_vert:O1,linedashed_frag:k1,meshbasic_vert:B1,meshbasic_frag:z1,meshlambert_vert:G1,meshlambert_frag:V1,meshmatcap_vert:H1,meshmatcap_frag:W1,meshnormal_vert:q1,meshnormal_frag:X1,meshphong_vert:j1,meshphong_frag:K1,meshphysical_vert:J1,meshphysical_frag:Y1,meshtoon_vert:Z1,meshtoon_frag:$1,points_vert:Q1,points_frag:e3,shadow_vert:t3,shadow_frag:n3,sprite_vert:i3,sprite_frag:s3},he={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Jn={basic:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Se(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Yt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Yt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Yt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Yt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Yt([he.lights,he.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Jn.physical={uniforms:Yt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var sc={r:0,b:0,g:0},r3=new Pe,id=new Le;id.set(-1,0,0,0,1,0,0,0,1);function a3(i,e,t,n,s,r){let a=new Se(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(S){let T=!1,y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,T){let y=f(T);y&&(y.isCubeTexture||y.mapping===Wr)?(l===void 0&&(l=new rt(new Ri(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ss(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(r3.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(id),l.material.toneMapped=ze.getTransfer(y.colorSpace)!==$e,(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new $i(2,2),new dn({name:"BackgroundMaterial",uniforms:ss(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ze.getTransfer(y.colorSpace)!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,T){S.getRGB(sc,kl(i)),t.buffers.color.setClear(sc.r,sc.g,sc.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function o3(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,U,B,I,k){let q=!1,W=d(P,I,B,U);r!==W&&(r=W,l(r.object)),q=f(P,I,B,k),q&&g(P,I,B,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(P,U,B,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,U,B,I){let k=I.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let W=P.isInstancedMesh===!0?P.id:0,te=q[W];te===void 0&&(te={},q[W]=te);let X=te[B.id];X===void 0&&(X={},te[B.id]=X);let Y=X[k];return Y===void 0&&(Y=u(c()),X[k]=Y),Y}function u(P){let U=[],B=[],I=[];for(let k=0;k<t;k++)U[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,U,B,I){let k=r.attributes,q=U.attributes,W=0,te=B.getAttributes();for(let X in te)if(te[X].location>=0){let ee=k[X],Ae=q[X];if(Ae===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Ae=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Ae=P.instanceColor)),ee===void 0||ee.attribute!==Ae||Ae&&ee.data!==Ae.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function g(P,U,B,I){let k={},q=U.attributes,W=0,te=B.getAttributes();for(let X in te)if(te[X].location>=0){let ee=q[X];ee===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let Ae={};Ae.attribute=ee,ee&&ee.data&&(Ae.data=ee.data),k[X]=Ae,W++}r.attributes=k,r.attributesNum=W,r.index=I}function x(){let P=r.newAttributes;for(let U=0,B=P.length;U<B;U++)P[U]=0}function m(P){p(P,0)}function p(P,U){let B=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;B[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),k[P]!==U&&(i.vertexAttribDivisor(P,U),k[P]=U)}function S(){let P=r.newAttributes,U=r.enabledAttributes;for(let B=0,I=U.length;B<I;B++)U[B]!==P[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function T(P,U,B,I,k,q,W){W===!0?i.vertexAttribIPointer(P,U,B,k,q):i.vertexAttribPointer(P,U,B,I,k,q)}function y(P,U,B,I){x();let k=I.attributes,q=B.getAttributes(),W=U.defaultAttributeValues;for(let te in q){let X=q[te];if(X.location>=0){let Y=k[te];if(Y===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let ee=Y.normalized,Ae=Y.itemSize,ve=e.get(Y);if(ve===void 0)continue;let Qe=ve.buffer,Fe=ve.type,Be=ve.bytesPerElement,j=Fe===i.INT||Fe===i.UNSIGNED_INT||Y.gpuType===yo;if(Y.isInterleavedBufferAttribute){let $=Y.data,be=$.stride,De=Y.offset;if($.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)p(X.location+me,$.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let me=0;me<X.locationSize;me++)T(X.location+me,Ae/X.locationSize,Fe,ee,be*Be,(De+Ae/X.locationSize*me)*Be,j)}else{if(Y.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)p(X.location+$,Y.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let $=0;$<X.locationSize;$++)m(X.location+$);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let $=0;$<X.locationSize;$++)T(X.location+$,Ae/X.locationSize,Fe,ee,Ae*Be,Ae/X.locationSize*$*Be,j)}}else if(W!==void 0){let ee=W[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}S()}function M(){w();for(let P in n){let U=n[P];for(let B in U){let I=U[B];for(let k in I){let q=I[k];for(let W in q)h(q[W].object),delete q[W];delete I[k]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;let U=n[P.id];for(let B in U){let I=U[B];for(let k in I){let q=I[k];for(let W in q)h(q[W].object),delete q[W];delete I[k]}}delete n[P.id]}function R(P){for(let U in n){let B=n[U];for(let I in B){let k=B[I];if(k[P.id]===void 0)continue;let q=k[P.id];for(let W in q)h(q[W].object),delete q[W];delete k[P.id]}}}function _(P){for(let U in n){let B=n[U],I=P.isInstancedMesh===!0?P.id:0,k=B[I];if(k!==void 0){for(let q in k){let W=k[q];for(let te in W)h(W[te].object),delete W[te];delete k[q]}delete B[I],Object.keys(B).length===0&&delete n[U]}}}function w(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function c3(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function l3(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==cn&&R!==fn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(we("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:A}}function h3(i){let e=this,t=null,n=0,s=!1,r=!1,a=new En,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,T=S*4,y=p.clippingState||null;c.value=y,y=h(g,u,T,f);for(let M=0;M!==T;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=f;T!==x;++T,y+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var er=4,u3=6,d3=20,f3=256,$r=new Pi,N0=new Se,jl=null,Kl=0,Jl=0,Yl=!1,p3=new L,rs=new L,nr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=p3}=r;jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Kl,Jl),this._renderer.xr.enabled=Yl,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Fn,format:pn,colorSpace:en,depthBuffer:!1},s=U0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=m3(r)),this._blurMaterial=b3(r,e,t),this._ggxMaterial=g3(r,e,t)}return s}_compileMaterial(e){let t=new rt(new Ut,e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(N0),d.toneMapping=In,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Ri,new tn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(N0),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let M=this._cubeSize;Qs(s,y*M,T>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(x,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Li||e.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=k0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Qs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$r)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-er?n-g+er:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Qs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,$r),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Qs(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,$r)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-er?s-this._lodMax+er:0),u=4*(this._cubeSize-h);Qs(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,$r)}};function m3(i){let e=[],t=[],n=i,s=i-er+1+u3;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,T=p>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];g.set(y,f*u*p);for(let M=0;M<u;M++){let A=h[M*2]*2-1,R=h[M*2+1]*2-1;p===0?rs.set(1,R,A):p===1?rs.set(-A,1,-R):p===2?rs.set(-A,R,1):p===3?rs.set(-1,R,-A):p===4?rs.set(-A,-1,R):rs.set(A,R,-1),rs.toArray(x,(p*u+M)*f)}}let m=new Ut;m.setAttribute("position",new xt(g,f)),m.setAttribute("outputDirection",new xt(x,f)),t.push(new rt(m,null)),n>er&&n--}return{lodMeshes:t,sizeLods:e}}function U0(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function g3(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:f3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function b3(i,e,t){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:d3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function O0(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function k0(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:jn});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=vt),new fo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function x3(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===bo||f===xo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new ac(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===bo||f===xo,x=f===Li||f===ns;if(g||x){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new nr(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new nr(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===bo?u.mapping=Li:f===xo&&(u.mapping=ns),u}function c(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function _3(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function y3(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let S=f.array;x=f.version;for(let T=0,y=S.length;T<y;T+=3){let M=S[T+0],A=S[T+1],R=S[T+2];u.push(M,A,A,R,R,M)}}else{let S=g.array;x=g.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let M=T+0,A=T+1,R=T+2;u.push(M,A,A,R,R,M)}}let m=new(g.count>=65535?Tr:Ar)(u,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function v3(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function M3(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function S3(i,e,t){let n=new WeakMap,s=new nt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*M*4*d),R=new Sr(A,y,M,d);R.type=fn,R.needsUpdate=!0;let _=T*4;for(let C=0;C<d;C++){let P=m[C],U=p[C],B=S[C],I=y*M*4*C;for(let k=0;k<P.count;k++){let q=k*_;f===!0&&(s.fromBufferAttribute(P,k),A[I+q+0]=s.x,A[I+q+1]=s.y,A[I+q+2]=s.z,A[I+q+3]=0),g===!0&&(s.fromBufferAttribute(U,k),A[I+q+4]=s.x,A[I+q+5]=s.y,A[I+q+6]=s.z,A[I+q+7]=0),x===!0&&(s.fromBufferAttribute(B,k),A[I+q+8]=s.x,A[I+q+9]=s.y,A[I+q+10]=s.z,A[I+q+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Ne(y,M)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function w3(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var A3={[yl]:"LINEAR_TONE_MAPPING",[vl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[Sl]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[Hr]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function T3(i,e,t,n,s,r){let a=new Ht(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ut;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let h=new no({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new rt(l,h),u=new Pi(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,S=[],T=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let A=0;A<S.length;A++){let R=S[A];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;let M=a.width,A=a.height;S.length>0&&o===null&&(o=new Ht(M,A,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new Ht(M,A,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let _=S[R];_.setSize&&_.setSize(M,A)}},this.begin=function(y,M){if(x||y.toneMapping===In&&S.length===0)return!1;if(p=M,M!==null){let A=M.width,R=M.height;(a.width!==A||a.height!==R)&&this.setSize(A,R)}return T===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=In,!0},this.hasRenderPass=function(){return T},this.end=function(y,M){y.toneMapping=m,x=!0;let A=a,R=o;for(let _=0;_<S.length;_++){let w=S[_];w.enabled!==!1&&(w.render(y,R,A,M),w.needsSwap!==!1&&(A=R,R=R===o?c:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},ze.getTransfer(f)===$e&&(h.defines.SRGB_TRANSFER="");let _=A3[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(p),y.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var sd=new Nt,Ql=new Ei(1,1),rd=new Sr,ad=new $a,od=new Pr,B0=[],z0=[],G0=new Float32Array(16),V0=new Float32Array(9),H0=new Float32Array(4);function ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=B0[s];if(r===void 0&&(r=new Float32Array(s),B0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lc(i,e){let t=z0[e];t===void 0&&(t=new Int32Array(e),z0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E3(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function R3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function C3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function P3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function I3(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;H0.set(n),i.uniformMatrix2fv(this.addr,!1,H0),Bt(t,n)}}function L3(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;V0.set(n),i.uniformMatrix3fv(this.addr,!1,V0),Bt(t,n)}}function D3(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;G0.set(n),i.uniformMatrix4fv(this.addr,!1,G0),Bt(t,n)}}function F3(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function U3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function O3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function k3(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function B3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function z3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function G3(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function V3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=t.isReversedDepthBuffer()?ic:nc,r=Ql):r=sd,t.setTexture2D(e||r,s)}function H3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ad,s)}function W3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||od,s)}function q3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rd,s)}function X3(i){switch(i){case 5126:return E3;case 35664:return R3;case 35665:return C3;case 35666:return P3;case 35674:return I3;case 35675:return L3;case 35676:return D3;case 5124:case 35670:return F3;case 35667:case 35671:return N3;case 35668:case 35672:return U3;case 35669:case 35673:return O3;case 5125:return k3;case 36294:return B3;case 36295:return z3;case 36296:return G3;case 35678:case 36198:case 36298:case 36306:case 35682:return V3;case 35679:case 36299:case 36307:return H3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return q3}}function j3(i,e){i.uniform1fv(this.addr,e)}function K3(i,e){let t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function J3(i,e){let t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Y3(i,e){let t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Z3(i,e){let t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $3(i,e){let t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Q3(i,e){let t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function em(i,e){i.uniform1iv(this.addr,e)}function tm(i,e){i.uniform2iv(this.addr,e)}function nm(i,e){i.uniform3iv(this.addr,e)}function im(i,e){i.uniform4iv(this.addr,e)}function sm(i,e){i.uniform1uiv(this.addr,e)}function rm(i,e){i.uniform2uiv(this.addr,e)}function am(i,e){i.uniform3uiv(this.addr,e)}function om(i,e){i.uniform4uiv(this.addr,e)}function cm(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ql:a=sd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function lm(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ad,r[a])}function hm(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||od,r[a])}function um(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rd,r[a])}function dm(i){switch(i){case 5126:return j3;case 35664:return K3;case 35665:return J3;case 35666:return Y3;case 35674:return Z3;case 35675:return $3;case 35676:return Q3;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}var eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X3(t.type)}},th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dm(t.type)}},nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function W0(i,e){i.seq.push(e),i.map[e.id]=e}function fm(i,e,t){let n=i.name,s=n.length;for(Zl.lastIndex=0;;){let r=Zl.exec(n),a=Zl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){W0(t,l===void 0?new eh(o,i,e):new th(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new nh(o),W0(t,d)),t=d}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);fm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function q0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var pm=37297,mm=0;function gm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var X0=new Le;function bm(i){ze._getMatrix(X0,ze.workingColorSpace,i);let e=`mat3( ${X0.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case vr:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function j0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gm(i.getShaderSource(e),o)}else return r}function xm(i,e){let t=bm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _m={[yl]:"Linear",[vl]:"Reinhard",[Ml]:"Cineon",[Sl]:"ACESFilmic",[Al]:"AgX",[Hr]:"Neutral",[wl]:"Custom"};function ym(i,e){let t=_m[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rc=new L;function vm(){ze.getLuminanceCoefficients(rc);let i=rc.x.toFixed(4),e=rc.y.toFixed(4),t=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Sm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ea(i){return i!==""}function K0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(Am,Em)}var Tm=new Map;function Em(i,e){let t=ke[e];if(t===void 0){let n=Tm.get(e);if(n!==void 0)t=ke[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ih(t)}var Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(i){return i.replace(Rm,Cm)}function Cm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Z0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Pm={[Vr]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function Im(i){return Pm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lm={[Li]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function Dm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fm={[ns]:"ENVMAP_MODE_REFRACTION"};function Nm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Um={[go]:"ENVMAP_BLENDING_MULTIPLY",[p0]:"ENVMAP_BLENDING_MIX",[m0]:"ENVMAP_BLENDING_ADD"};function Om(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Um[i.combine]||"ENVMAP_BLENDING_NONE"}function km(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Im(t),l=Dm(t),h=Nm(t),d=Om(t),u=km(t),f=Mm(t),g=Sm(r),x=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?ke.tonemapping_pars_fragment:"",t.toneMapping!==In?ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,xm("linearToOutputTexel",t.outputColorSpace),vm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=ih(a),a=K0(a,t),a=J0(a,t),o=ih(o),o=K0(o,t),o=J0(o,t),a=Y0(a),o=Y0(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+m+a,y=S+p+o,M=q0(s,s.VERTEX_SHADER,T),A=q0(s,s.FRAGMENT_SHADER,y);s.attachShader(x,M),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(A)||"",k=U.trim(),q=B.trim(),W=I.trim(),te=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,A);else{let Y=j0(s,M,"vertex"),ee=j0(s,A,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Y+`
`+ee)}else k!==""?we("WebGLProgram: Program Info Log:",k):(q===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:te,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(M),s.deleteShader(A),_=new tr(s,x),w=wm(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,pm)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=A,this}var zm=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rh(e),t.set(e,n)),n}},rh=class{constructor(e){this.id=zm++,this.code=e,this.usedTimes=0}};function Gm(i){return i===Fi||i===Jr||i===Yr}function Vm(i,e,t,n,s,r){let a=new wr,o=new sh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,w,C,P,U,B){let I=P.fog,k=U.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||q,W),X=te&&te.mapping===Wr?te.image.height:null,Y=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&we("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ae=ee!==void 0?ee.length:0,ve=0;k.morphAttributes.position!==void 0&&(ve=1),k.morphAttributes.normal!==void 0&&(ve=2),k.morphAttributes.color!==void 0&&(ve=3);let Qe,Fe,Be,j;if(Y){let ht=Jn[Y];Qe=ht.vertexShader,Fe=ht.fragmentShader}else{Qe=_.vertexShader,Fe=_.fragmentShader;let ht=o.getVertexShaderStage(_),Ye=o.getFragmentShaderStage(_);o.update(_,ht,Ye),Be=ht.id,j=Ye.id}let $=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,me=U.isBatchedMesh===!0,Ge=!!_.map,Ft=!!_.matcap,He=!!te,Ke=!!_.aoMap,lt=!!_.lightMap,Xe=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,Gt=!!_.displacementMap,nn=!!_.emissiveMap,yt=!!_.metalnessMap,It=!!_.roughnessMap,N=_.anisotropy>0,qt=_.clearcoat>0,et=_.dispersion>0,E=_.retroreflectivity>0,b=_.iridescence>0,O=_.sheen>0,V=_.transmission>0,K=N&&!!_.anisotropyMap,ie=qt&&!!_.clearcoatMap,se=qt&&!!_.clearcoatNormalMap,J=qt&&!!_.clearcoatRoughnessMap,Q=b&&!!_.iridescenceMap,re=b&&!!_.iridescenceThicknessMap,Te=O&&!!_.sheenColorMap,le=O&&!!_.sheenRoughnessMap,ae=!!_.specularMap,Ee=!!_.specularColorMap,Ce=!!_.specularIntensityMap,Ue=V&&!!_.transmissionMap,F=V&&!!_.thicknessMap,oe=!!_.gradientMap,Z=!!_.alphaMap,ce=_.alphaTest>0,fe=!!_.alphaHash,ne=!!_.extensions,Re=In;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Re=i.toneMapping);let ye={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Qe,fragmentShader:Fe,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:me,batchingColor:me&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:Ft,envMap:He,envMapMode:He&&te.mapping,envMapCubeUVHeight:X,aoMap:Ke,lightMap:lt,bumpMap:Xe,normalMap:gt,displacementMap:Gt,emissiveMap:nn,normalMapObjectSpace:gt&&_.normalMapType===_0,normalMapTangentSpace:gt&&_.normalMapType===$s,packedNormalMap:gt&&_.normalMapType===$s&&Gm(_.normalMap.format),metalnessMap:yt,roughnessMap:It,anisotropy:N,anisotropyMap:K,clearcoat:qt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:J,dispersion:et,retroreflection:E,iridescence:b,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:O,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:ae,specularColorMap:Ee,specularIntensityMap:Ce,transmission:V,transmissionMap:Ue,thicknessMap:F,gradientMap:oe,opaque:_.transparent===!1&&_.blending===Xs&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:fe,combine:_.combine,mapUv:Ge&&g(_.map.channel),aoMapUv:Ke&&g(_.aoMap.channel),lightMapUv:lt&&g(_.lightMap.channel),bumpMapUv:Xe&&g(_.bumpMap.channel),normalMapUv:gt&&g(_.normalMap.channel),displacementMapUv:Gt&&g(_.displacementMap.channel),emissiveMapUv:nn&&g(_.emissiveMap.channel),metalnessMapUv:yt&&g(_.metalnessMap.channel),roughnessMapUv:It&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&g(_.sheenRoughnessMap.channel),specularMapUv:ae&&g(_.specularMap.channel),specularColorMapUv:Ee&&g(_.specularColorMap.channel),specularIntensityMapUv:Ce&&g(_.specularIntensityMap.channel),transmissionMapUv:Ue&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:Z&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||N),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Ge||Z),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ve,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:nn&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===on,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(w,_),S(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let w=f[_.type],C;if(w){let P=Jn[w];C=L0.clone(P.uniforms)}else C=_.uniforms;return C}function y(_,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Bm(i,w,_,s),l.push(C),h.set(w,C)),C}function M(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:l,dispose:R}}function Hm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Q0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function c(u,f,g,x,m,p,S){S.reversedDepth===!0&&(m=-m);let T=o(u,f,g,x,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(u,f,g,x,m,p){let S=o(u,f,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||Wm),n.length>1&&n.sort(f||$0),s.length>1&&s.sort(f||$0)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function qm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Q0,i.set(n,[a])):s>=r.length?(a=new Q0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Se};break;case"SpotLight":t={position:new L,direction:new L,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function jm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Km=0;function Jm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ym(i){let e=new Xm,t=jm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Pe,a=new Pe;function o(l){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,T=0,y=0,M=0,A=0,R=0,_=0,w=0,C=0;l.sort(Jm);for(let U=0,B=l.length;U<B;U++){let I=l[U],k=I.color,q=I.intensity,W=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fi?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],q);C++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,ee=t.get(I);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=te;let Ae=Y.getViewportCount();for(let ve=0;ve<Ae;ve++)n.sunShadowMatrix[x+ve]=Y.getMatrix(ve),n.sunShadowCascade[x+ve]=Y._cascadeData[ve];x+=Ae,g++}n.sun[f]=X,f++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,ee=t.get(I);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=X,m++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(k).multiplyScalar(q),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[S]=X;let Y=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,Y.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[S]=Y.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=te,R++}S++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(k).multiplyScalar(q),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=X,T++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let Y=I.shadow,ee=t.get(I);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,A++}n.point[p]=X,p++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(q),X.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=X,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==S||P.rectAreaLength!==T||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==M||P.numPointShadows!==A||P.numSpotShadows!==R||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=S,P.rectAreaLength=T,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=M,P.numPointShadows=A,P.numSpotShadows=R,P.numSpotMaps=_,P.numLightProbes=C,n.version=Km++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let S=0,T=l.length;S<T;S++){let y=l[S];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function ed(i){let e=new Ym(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Zm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ed(i),e.set(s,[o])):r>=a.length?(o=new ed(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
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
}`,eg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],tg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],td=new Pe,Qr=new L,$l=new L;function ng(i,e,t){let n=new zs,s=new Ne,r=new Ne,a=new nt,o=new io,c=new so,l={},h=t.maxTextureSize,d={[Xn]:Ot,[Ot]:Xn,[on]:on},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:$m,fragmentShader:Qm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let p=this.type;this.render=function(A,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Ju&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=p!==this.type;B&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=A.length;I<k;I++){let q=A[I],W=q.shadow;if(W===void 0){we("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let te=W.getFrameExtents();s.multiply(te),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qs){if(q.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ht(s.x,s.y,{format:Fi,type:Fn,minFilter:vt,magFilter:vt,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Ei(s.x,s.y,fn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Gn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et}else q.isPointLight?(W.map=new ac(s.x),W.map.depthTexture=new to(s.x,Dn)):(W.map=new Ht(s.x,s.y),W.map.depthTexture=new Ei(s.x,s.y,Dn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Gn,this.type===Vr?(W.map.depthTexture.compareFunction=X?ic:nc,W.map.depthTexture.minFilter=vt,W.map.depthTexture.magFilter=vt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Y=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,_);for(let ee=0;ee<Y;ee++){let Ae=W.getCamera(ee);if(q.isPointLight){let ve=W.camera,Qe=W.matrix,Fe=q.distance||ve.far;Fe!==ve.far&&(ve.far=Fe,ve.updateProjectionMatrix()),Qr.setFromMatrixPosition(q.matrixWorld),ve.position.copy(Qr),$l.copy(ve.position),$l.add(eg[ee]),ve.up.copy(tg[ee]),ve.lookAt($l),ve.updateMatrixWorld(),Qe.makeTranslation(-Qr.x,-Qr.y,-Qr.z),td.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),W._frustum.setFromProjectionMatrix(td,ve.coordinateSystem,ve.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(W.map),i.clear());let ve=W.getViewport(ee);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),U.viewport(a)}n=W.getFrustum(ee),y(R,_,Ae,q,this.type)}W.isPointLightShadow!==!0&&this.type===qs&&S(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,P)};function S(A,R){let _=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ht(s.x,s.y,{format:Fi,type:Fn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,_,f,x,null)}function T(A,R,_,w){let C=null,P=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=C.uuid,B=R.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let k=I[B];k===void 0&&(k=C.clone(),I[B]=k,R.addEventListener("dispose",M)),C=k}if(C.visible=R.visible,C.wireframe=R.wireframe,w===qs?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=_}return C}function y(A,R,_,w,C){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===qs)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let B=e.update(A),I=A.material;if(Array.isArray(I)){let k=B.groups;for(let q=0,W=k.length;q<W;q++){let te=k[q],X=I[te.materialIndex];if(X&&X.visible){let Y=T(A,X,w,C);A.onBeforeShadow(i,A,R,_,B,Y,te),i.renderBufferDirect(_,null,B,Y,A,te),A.onAfterShadow(i,A,R,_,B,Y,te)}}}else if(I.visible){let k=T(A,I,w,C);A.onBeforeShadow(i,A,R,_,B,k,null),i.renderBufferDirect(_,null,B,k,A,null),A.onAfterShadow(i,A,R,_,B,k,null)}}let U=A.children;for(let B=0,I=U.length;B<I;B++)y(U[B],R,_,w,C)}function M(A){A.target.removeEventListener("dispose",M);for(let _ in l){let w=l[_],C=A.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function ig(i,e){function t(){let F=!1,oe=new nt,Z=null,ce=new nt(0,0,0,0);return{setMask:function(fe){Z!==fe&&!F&&(i.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){F=fe},setClear:function(fe,ne,Re,ye,ht){ht===!0&&(fe*=ye,ne*=ye,Re*=ye),oe.set(fe,ne,Re,ye),ce.equals(oe)===!1&&(i.clearColor(fe,ne,Re,ye),ce.copy(oe))},reset:function(){F=!1,Z=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,oe=!1,Z=null,ce=null,fe=null;return{setReversed:function(ne){if(oe!==ne){let Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;let ye=fe;fe=null,this.setClear(ye)}},getReversed:function(){return oe},setTest:function(ne){ne?$(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ne){Z!==ne&&!F&&(i.depthMask(ne),Z=ne)},setFunc:function(ne){if(oe&&(ne=P0[ne]),ce!==ne){switch(ne){case Ha:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ne}},setLocked:function(ne){F=ne},setClear:function(ne){fe!==ne&&(fe=ne,oe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){F=!1,Z=null,ce=null,fe=null,oe=!1}}}function s(){let F=!1,oe=null,Z=null,ce=null,fe=null,ne=null,Re=null,ye=null,ht=null;return{setTest:function(Ye){F||(Ye?$(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ye){oe!==Ye&&!F&&(i.stencilMask(Ye),oe=Ye)},setFunc:function(Ye,Sn,On){(Z!==Ye||ce!==Sn||fe!==On)&&(i.stencilFunc(Ye,Sn,On),Z=Ye,ce=Sn,fe=On)},setOp:function(Ye,Sn,On){(ne!==Ye||Re!==Sn||ye!==On)&&(i.stencilOp(Ye,Sn,On),ne=Ye,Re=Sn,ye=On)},setLocked:function(Ye){F=Ye},setClear:function(Ye){ht!==Ye&&(i.clearStencil(Ye),ht=Ye)},reset:function(){F=!1,oe=null,Z=null,ce=null,fe=null,ne=null,Re=null,ye=null,ht=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,T=null,y=null,M=null,A=null,R=null,_=new Se(0,0,0),w=0,C=!1,P=null,U=null,B=null,I=null,k=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=te>=2);let Y=null,ee={},Ae=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Qe=new nt().fromArray(Ae),Fe=new nt().fromArray(ve);function Be(F,oe,Z,ce){let fe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(F,ne),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<Z;Re++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ne}let j={};j[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Ps),Xe(!1),gt(pl),$(i.CULL_FACE),Ke(jn);function $(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function be(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function De(F,oe){return u[F]!==oe?(i.bindFramebuffer(F,oe),u[F]=oe,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(F,oe){let Z=g,ce=!1;if(F){Z=f.get(oe),Z===void 0&&(Z=[],f.set(oe,Z));let fe=F.textures;if(Z.length!==fe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=fe.length;ne<Re;ne++)Z[ne]=i.COLOR_ATTACHMENT0+ne;Z.length=fe.length,ce=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Z)}function Ge(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Ft={[ts]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};Ft[Qu]=i.MIN,Ft[e0]=i.MAX;let He={[t0]:i.ZERO,[n0]:i.ONE,[i0]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[l0]:i.SRC_ALPHA_SATURATE,[o0]:i.DST_COLOR,[r0]:i.DST_ALPHA,[s0]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[c0]:i.ONE_MINUS_DST_COLOR,[a0]:i.ONE_MINUS_DST_ALPHA,[h0]:i.CONSTANT_COLOR,[u0]:i.ONE_MINUS_CONSTANT_COLOR,[d0]:i.CONSTANT_ALPHA,[f0]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(F,oe,Z,ce,fe,ne,Re,ye,ht,Ye){if(F===jn){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),F!==Yu){if(F!==p||Ye!==C){if((S!==ts||M!==ts)&&(i.blendEquation(i.FUNC_ADD),S=ts,M=ts),Ye)switch(F){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",F);break}else switch(F){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",F);break}T=null,y=null,A=null,R=null,_.set(0,0,0),w=0,p=F,C=Ye}return}fe=fe||oe,ne=ne||Z,Re=Re||ce,(oe!==S||fe!==M)&&(i.blendEquationSeparate(Ft[oe],Ft[fe]),S=oe,M=fe),(Z!==T||ce!==y||ne!==A||Re!==R)&&(i.blendFuncSeparate(He[Z],He[ce],He[ne],He[Re]),T=Z,y=ce,A=ne,R=Re),(ye.equals(_)===!1||ht!==w)&&(i.blendColor(ye.r,ye.g,ye.b,ht),_.copy(ye),w=ht),p=F,C=!1}function lt(F,oe){F.side===on?be(i.CULL_FACE):$(i.CULL_FACE);let Z=F.side===Ot;oe&&(Z=!Z),Xe(Z),F.blending===Xs&&F.transparent===!1?Ke(jn):Ke(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ce=F.stencilWrite;o.setTest(ce),ce&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nn(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function gt(F){F!==ju?($(i.CULL_FACE),F!==U&&(F===pl?i.cullFace(i.BACK):F===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),U=F}function Gt(F){F!==B&&(W&&i.lineWidth(F),B=F)}function nn(F,oe,Z){F?($(i.POLYGON_OFFSET_FILL),(I!==oe||k!==Z)&&(I=oe,k=Z,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Z))):be(i.POLYGON_OFFSET_FILL)}function yt(F){F?$(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function It(F){F===void 0&&(F=i.TEXTURE0+q-1),Y!==F&&(i.activeTexture(F),Y=F)}function N(F,oe,Z){Z===void 0&&(Y===null?Z=i.TEXTURE0+q-1:Z=Y);let ce=ee[Z];ce===void 0&&(ce={type:void 0,texture:void 0},ee[Z]=ce),(ce.type!==F||ce.texture!==oe)&&(Y!==Z&&(i.activeTexture(Z),Y=Z),i.bindTexture(F,oe||j[F]),ce.type=F,ce.texture=oe)}function qt(){let F=ee[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function b(){try{i.texSubImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function O(){try{i.texSubImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function ie(){try{i.texStorage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function se(){try{i.texStorage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function re(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Te(F,oe){d[F]!==oe&&(i.pixelStorei(F,oe),d[F]=oe)}function le(F){Qe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Qe.copy(F))}function ae(F){Fe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Fe.copy(F))}function Ee(F,oe){let Z=l.get(oe);Z===void 0&&(Z=new WeakMap,l.set(oe,Z));let ce=Z.get(F);ce===void 0&&(ce=i.getUniformBlockIndex(oe,F.name),Z.set(F,ce))}function Ce(F,oe){let ce=l.get(oe).get(F);c.get(oe)!==ce&&(i.uniformBlockBinding(oe,ce,F.__bindingPointIndex),c.set(oe,ce))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,ee={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,T=null,y=null,M=null,A=null,R=null,_=new Se(0,0,0),w=0,C=!1,P=null,U=null,B=null,I=null,k=null,Qe.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:be,bindFramebuffer:De,drawBuffers:me,useProgram:Ge,setBlending:Ke,setMaterial:lt,setFlipSided:Xe,setCullFace:gt,setLineWidth:Gt,setPolygonOffset:nn,setScissorTest:yt,activeTexture:It,bindTexture:N,unbindTexture:qt,compressedTexImage2D:et,compressedTexImage3D:E,texImage2D:J,texImage3D:Q,pixelStorei:Te,getParameter:re,updateUBOMapping:Ee,uniformBlockBinding:Ce,texStorage2D:ie,texStorage3D:se,texSubImage2D:b,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:le,viewport:ae,reset:Ue}}function sg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,b){return g?new OffscreenCanvas(E,b):Ds("canvas")}function m(E,b,O){let V=1,K=et(E);if((K.width>O||K.height>O)&&(V=O/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ie=Math.floor(V*K.width),se=Math.floor(V*K.height);u===void 0&&(u=x(ie,se));let J=b?x(ie,se):u;return J.width=ie,J.height=se,J.getContext("2d").drawImage(E,0,0,ie,se),we("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ie+"x"+se+")."),J}else return"data"in E&&we("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function p(E){return E.generateMipmaps}function S(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,b,O,V,K,ie=!1){if(E!==null){if(i[E]!==void 0)return i[E];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se;V&&(se=e.get("EXT_texture_norm16"),se||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&se&&(J=se.R16_EXT),O===i.SHORT&&se&&(J=se.R16_SNORM_EXT)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),b===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&se&&(J=se.RG16_EXT),O===i.SHORT&&se&&(J=se.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),b===i.RGB&&(O===i.UNSIGNED_SHORT&&se&&(J=se.RGB16_EXT),O===i.SHORT&&se&&(J=se.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),b===i.RGBA){let Q=ie?vr:ze.getTransfer(K);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=Q===$e?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&se&&(J=se.RGBA16_EXT),O===i.SHORT&&se&&(J=se.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(E,b){let O;return E?b===null||b===Dn||b===Js?O=i.DEPTH24_STENCIL8:b===fn?O=i.DEPTH32F_STENCIL8:b===Ks&&(O=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Dn||b===Js?O=i.DEPTH_COMPONENT24:b===fn?O=i.DEPTH_COMPONENT32F:b===Ks&&(O=i.DEPTH_COMPONENT16),O}function A(E,b){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==vt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function R(E){let b=E.target;b.removeEventListener("dispose",R),w(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function _(E){let b=E.target;b.removeEventListener("dispose",_),P(b)}function w(E){let b=n.get(E);if(b.__webglInit===void 0)return;let O=E.source,V=f.get(O);if(V){let K=V[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(E),Object.keys(V).length===0&&f.delete(O)}n.remove(E)}function C(E){let b=n.get(E);i.deleteTexture(b.__webglTexture);let O=E.source,V=f.get(O);delete V[b.__cacheKey],a.memory.textures--}function P(E){let b=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(b.__webglFramebuffer[V]))for(let K=0;K<b.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[V][K]);else i.deleteFramebuffer(b.__webglFramebuffer[V]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[V])}else{if(Array.isArray(b.__webglFramebuffer))for(let V=0;V<b.__webglFramebuffer.length;V++)i.deleteFramebuffer(b.__webglFramebuffer[V]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let V=0;V<b.__webglColorRenderbuffer.length;V++)b.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[V]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=E.textures;for(let V=0,K=O.length;V<K;V++){let ie=n.get(O[V]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(E)}let U=0;function B(){U=0}function I(){return U}function k(E){U=E}function q(){let E=U;return E>=s.maxTextures&&we("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function W(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function te(E,b){let O=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let V=E.image;if(V===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{be(O,E,b);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function X(E,b){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){be(O,E,b);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function Y(E,b){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){be(O,E,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function ee(E,b){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){De(O,E,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let Ae={[wi]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Is]:i.MIRRORED_REPEAT},ve={[Et]:i.NEAREST,[_o]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},Qe={[v0]:i.NEVER,[T0]:i.ALWAYS,[M0]:i.LESS,[nc]:i.LEQUAL,[S0]:i.EQUAL,[ic]:i.GEQUAL,[w0]:i.GREATER,[A0]:i.NOTEQUAL};function Fe(E,b){if(b.type===fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===vt||b.magFilter===js||b.magFilter===is||b.magFilter===Ln||b.minFilter===vt||b.minFilter===js||b.minFilter===is||b.minFilter===Ln)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ae[b.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ae[b.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ae[b.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ve[b.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Qe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Et||b.minFilter!==is&&b.minFilter!==Ln||b.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Be(E,b){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",R));let V=b.source,K=f.get(V);K===void 0&&(K={},f.set(V,K));let ie=W(b);if(ie!==E.__cacheKey){K[ie]===void 0&&(K[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[ie].usedTimes++;let se=K[E.__cacheKey];se!==void 0&&(K[E.__cacheKey].usedTimes--,se.usedTimes===0&&C(b)),E.__cacheKey=ie,E.__webglTexture=K[ie].texture}return O}function j(E,b,O){return Math.floor(Math.floor(E/O)/b)}function $(E,b,O,V){let ie=E.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,O,V,b.data);else{ie.sort((Te,le)=>Te.start-le.start);let se=0;for(let Te=1;Te<ie.length;Te++){let le=ie[se],ae=ie[Te],Ee=le.start+le.count,Ce=j(ae.start,b.width,4),Ue=j(le.start,b.width,4);ae.start<=Ee+1&&Ce===Ue&&j(ae.start+ae.count-1,b.width,4)===Ce?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++se,ie[se]=ae)}ie.length=se+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Te=0,le=ie.length;Te<le;Te++){let ae=ie[Te],Ee=Math.floor(ae.start/4),Ce=Math.ceil(ae.count/4),Ue=Ee%b.width,F=Math.floor(Ee/b.width),oe=Ce,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ue,F,oe,Z,O,V,b.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function be(E,b,O){let V=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(V=i.TEXTURE_3D);let K=Be(E,b),ie=b.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+O);let se=n.get(ie);if(ie.version!==se.__version||K===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Z=ze.getPrimaries(ze.workingColorSpace),ce=b.colorSpace===fi?null:ze.getPrimaries(b.colorSpace),fe=b.colorSpace===fi||Z===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=m(b.image,!1,s.maxTextureSize);Q=qt(b,Q);let re=r.convert(b.format,b.colorSpace),Te=r.convert(b.type),le=y(b.internalFormat,re,Te,b.normalized,b.colorSpace,b.isVideoTexture);Fe(V,b);let ae,Ee=b.mipmaps,Ce=b.isVideoTexture!==!0,Ue=se.__version===void 0||K===!0,F=ie.dataReady,oe=A(b,Q);if(b.isDepthTexture)le=M(b.format===Di,b.type),Ue&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,le,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,re,Te,null));else if(b.isDataTexture)if(Ee.length>0){Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,oe,le,Ee[0].width,Ee[0].height);for(let Z=0,ce=Ee.length;Z<ce;Z++)ae=Ee[Z],Ce?F&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Te,ae.data):t.texImage2D(i.TEXTURE_2D,Z,le,ae.width,ae.height,0,re,Te,ae.data);b.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(i.TEXTURE_2D,oe,le,Q.width,Q.height),F&&$(b,Q,re,Te)):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,re,Te,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,le,Ee[0].width,Ee[0].height,Q.depth);for(let Z=0,ce=Ee.length;Z<ce;Z++)if(ae=Ee[Z],b.format!==pn)if(re!==null)if(Ce){if(F)if(b.layerUpdates.size>0){let fe=Gl(ae.width,ae.height,b.format,b.type);for(let ne of b.layerUpdates){let Re=ae.data.subarray(ne*fe/ae.data.BYTES_PER_ELEMENT,(ne+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ne,ae.width,ae.height,1,re,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,le,ae.width,ae.height,Q.depth,0,ae.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,re,Te,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,le,ae.width,ae.height,Q.depth,0,re,Te,ae.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,oe,le,Ee[0].width,Ee[0].height);for(let Z=0,ce=Ee.length;Z<ce;Z++)ae=Ee[Z],b.format!==pn?re!==null?Ce?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,le,ae.width,ae.height,0,ae.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?F&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Te,ae.data):t.texImage2D(i.TEXTURE_2D,Z,le,ae.width,ae.height,0,re,Te,ae.data)}else if(b.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,le,Q.width,Q.height,Q.depth),F)if(b.layerUpdates.size>0){let Z=Gl(Q.width,Q.height,b.format,b.type);for(let ce of b.layerUpdates){let fe=Q.data.subarray(ce*Z/Q.data.BYTES_PER_ELEMENT,(ce+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,Q.width,Q.height,1,re,Te,fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,re,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,Q.width,Q.height,Q.depth,0,re,Te,Q.data);else if(b.isData3DTexture)Ce?(Ue&&t.texStorage3D(i.TEXTURE_3D,oe,le,Q.width,Q.height,Q.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,re,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,le,Q.width,Q.height,Q.depth,0,re,Te,Q.data);else if(b.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(i.TEXTURE_2D,oe,le,Q.width,Q.height);else{let Z=Q.width,ce=Q.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,le,Z,ce,0,re,Te,null),Z>>=1,ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),d.add(b),Z.onpaint=ce=>{let fe=ce.changedElements;for(let ne of d)fe.includes(ne.image)&&(ne.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let fe=i.RGBA,ne=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ne,Re,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ce&&Ue){let Z=et(Ee[0]);t.texStorage2D(i.TEXTURE_2D,oe,le,Z.width,Z.height)}for(let Z=0,ce=Ee.length;Z<ce;Z++)ae=Ee[Z],Ce?F&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,re,Te,ae):t.texImage2D(i.TEXTURE_2D,Z,le,re,Te,ae);b.generateMipmaps=!1}else if(Ce){if(Ue){let Z=et(Q);t.texStorage2D(i.TEXTURE_2D,oe,le,Z.width,Z.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,le,re,Te,Q);p(b)&&S(V),se.__version=ie.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function De(E,b,O){if(b.image.length!==6)return;let V=Be(E,b),K=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let ie=n.get(K);if(K.version!==ie.__version||V===!0){t.activeTexture(i.TEXTURE0+O);let se=ze.getPrimaries(ze.workingColorSpace),J=b.colorSpace===fi?null:ze.getPrimaries(b.colorSpace),Q=b.colorSpace===fi||se===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let re=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,le=[];for(let ne=0;ne<6;ne++)!re&&!Te?le[ne]=m(b.image[ne],!0,s.maxCubemapSize):le[ne]=Te?b.image[ne].image:b.image[ne],le[ne]=qt(b,le[ne]);let ae=le[0],Ee=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type),Ue=y(b.internalFormat,Ee,Ce,b.normalized,b.colorSpace),F=b.isVideoTexture!==!0,oe=ie.__version===void 0||V===!0,Z=K.dataReady,ce=A(b,ae);Fe(i.TEXTURE_CUBE_MAP,b);let fe;if(re){F&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,ae.width,ae.height);for(let ne=0;ne<6;ne++){fe=le[ne].mipmaps;for(let Re=0;Re<fe.length;Re++){let ye=fe[Re];b.format!==pn?Ee!==null?F?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ye.width,ye.height,Ee,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Ue,ye.width,ye.height,0,ye.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ye.width,ye.height,Ee,Ce,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Ue,ye.width,ye.height,0,Ee,Ce,ye.data)}}}else{if(fe=b.mipmaps,F&&oe){fe.length>0&&ce++;let ne=et(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){F?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,le[ne].width,le[ne].height,Ee,Ce,le[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,le[ne].width,le[ne].height,0,Ee,Ce,le[ne].data);for(let Re=0;Re<fe.length;Re++){let ht=fe[Re].image[ne].image;F?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,ht.width,ht.height,Ee,Ce,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Ue,ht.width,ht.height,0,Ee,Ce,ht.data)}}else{F?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee,Ce,le[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,Ee,Ce,le[ne]);for(let Re=0;Re<fe.length;Re++){let ye=fe[Re];F?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ee,Ce,ye.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Ue,Ee,Ce,ye.image[ne])}}}p(b)&&S(i.TEXTURE_CUBE_MAP),ie.__version=K.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function me(E,b,O,V,K,ie){let se=r.convert(O.format,O.colorSpace),J=r.convert(O.type),Q=y(O.internalFormat,se,J,O.normalized,O.colorSpace),re=n.get(b),Te=n.get(O);if(Te.__renderTarget=b,!re.__hasExternalTextures){let le=Math.max(1,b.width>>ie),ae=Math.max(1,b.height>>ie);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ie,Q,le,ae,b.depth,0,se,J,null):t.texImage2D(K,ie,Q,le,ae,0,se,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),It(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Te.__webglTexture,0,yt(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Te.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(E,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),b.depthBuffer){let V=b.depthTexture,K=V&&V.isDepthTexture?V.type:null,ie=M(b.stencilBuffer,K),se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(b),ie,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(b),ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ie,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,E)}else{let V=b.textures;for(let K=0;K<V.length;K++){let ie=V[K],se=r.convert(ie.format,ie.colorSpace),J=r.convert(ie.type),Q=y(ie.internalFormat,se,J,ie.normalized,ie.colorSpace);It(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(b),Q,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(E,b,O){let V=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(b.depthTexture);if(K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,b.depthTexture);let re=r.convert(b.depthTexture.format),Te=r.convert(b.depthTexture.type),le;b.depthTexture.format===Gn?le=i.DEPTH_COMPONENT24:b.depthTexture.format===Di&&(le=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,b.width,b.height,0,re,Te,null)}}else te(b.depthTexture,0);let ie=K.__webglTexture,se=yt(b),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=b.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gn)It(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,ie,0);else if(b.depthTexture.format===Di)It(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(E){let b=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),V){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=V}if(E.depthTexture&&!b.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)Ft(b.__webglFramebuffer[V],E,V);else{let V=E.texture.mipmaps;V&&V.length>0?Ft(b.__webglFramebuffer[0],E,0):Ft(b.__webglFramebuffer,E,0)}else if(O){b.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[V]),b.__webglDepthbuffer[V]===void 0)b.__webglDepthbuffer[V]=i.createRenderbuffer(),Ge(b.__webglDepthbuffer[V],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ge(b.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(E,b,O){let V=n.get(E);b!==void 0&&me(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&He(E)}function lt(E){let b=E.texture,O=n.get(E),V=n.get(b);E.addEventListener("dispose",_);let K=E.textures,ie=E.isWebGLCubeRenderTarget===!0,se=K.length>1;if(se||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=b.version,a.memory.textures++),ie){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let Q=0;Q<b.mipmaps.length;Q++)O.__webglFramebuffer[J][Q]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(se)for(let J=0,Q=K.length;J<Q;J++){let re=n.get(K[J]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&It(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let Q=K[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let re=r.convert(Q.format,Q.colorSpace),Te=r.convert(Q.type),le=y(Q.internalFormat,re,Te,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),ae=yt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)me(O.__webglFramebuffer[J][Q],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else me(O.__webglFramebuffer[J],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(b)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let J=0,Q=K.length;J<Q;J++){let re=K[J],Te=n.get(re),le=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Te.__webglTexture),Fe(le,re),me(O.__webglFramebuffer,E,re,i.COLOR_ATTACHMENT0+J,le,0),p(re)&&S(le)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),Fe(J,b),b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)me(O.__webglFramebuffer[Q],E,b,i.COLOR_ATTACHMENT0,J,Q);else me(O.__webglFramebuffer,E,b,i.COLOR_ATTACHMENT0,J,0);p(b)&&S(J),t.unbindTexture()}E.depthBuffer&&He(E)}function Xe(E){let b=E.textures;for(let O=0,V=b.length;O<V;O++){let K=b[O];if(p(K)){let ie=T(E),se=n.get(K).__webglTexture;t.bindTexture(ie,se),S(ie),t.unbindTexture()}}}let gt=[],Gt=[];function nn(E){if(E.samples>0){if(It(E)===!1){let b=E.textures,O=E.width,V=E.height,K=i.COLOR_BUFFER_BIT,ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(E),J=b.length>1;if(J)for(let re=0;re<b.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let Q=E.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<b.length;re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Te=n.get(b[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,K,i.NEAREST),c===!0&&(gt.length=0,Gt.length=0,gt.push(i.COLOR_ATTACHMENT0+re),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(gt.push(ie),Gt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let re=0;re<b.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Te=n.get(b[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let b=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function yt(E){return Math.min(s.maxSamples,E.samples)}function It(E){let b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(E){let b=a.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function qt(E,b){let O=E.colorSpace,V=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==en&&O!==fi&&(ze.getTransfer(O)===$e?(V!==pn||K!==cn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",O)),b}function et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=te,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=Ke,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=me,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rg(i,e){function t(n,s=fi){let r,a=ze.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===Rl)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Ll)return i.RGB;if(n===pn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Ys)return i.RED;if(n===So)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===qr||n===Xr||n===jr||n===Kr)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Eo||n===Ro||n===Co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Io||n===Lo||n===Do||n===Fo||n===Jr||n===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Io)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jr)return r.COMPRESSED_RG11_EAC;if(n===No)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===Oo||n===ko||n===Bo||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===qo||n===Xo||n===jo||n===Ko||n===Jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Zo||n===$o)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===ec||n===Yr||n===tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dn({vertexShader:ag,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends Vn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new ah,p={},S=t.getContextAttributes(),T=null,y=null,M=[],A=[],R=new Ne,_=null,w=null,C=new St;C.viewport=new nt;let P=new St;P.viewport=new nt;let U=[C,P],B=new po,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=M[j];return $===void 0&&($=new Us,M[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=M[j];return $===void 0&&($=new Us,M[j]=$),$.getGripSpace()},this.getHand=function(j){let $=M[j];return $===void 0&&($=new Us,M[j]=$),$.getHandSpace()};function q(j){let $=A.indexOf(j.inputSource);if($===-1)return;let be=M[$];be!==void 0&&(be.update(j.inputSource,j.frame,l||a),be.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",te);for(let j=0;j<M.length;j++){let $=A[j];$!==null&&(A[j]=null,M[j].disconnect($))}I=null,k=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),w!==null){let j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,De=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=S.stencil?Di:Gn,De=S.stencil?Js:Dn);let Ge={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ht(u.textureWidth,u.textureHeight,{format:pn,type:cn,depthTexture:new Ei(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ht(f.framebufferWidth,f.framebufferHeight,{format:pn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(j){for(let $=0;$<j.removed.length;$++){let be=j.removed[$],De=A.indexOf(be);De>=0&&(A[De]=null,M[De].disconnect(be))}for(let $=0;$<j.added.length;$++){let be=j.added[$],De=A.indexOf(be);if(De===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=A.length){A.push(be),De=Ge;break}else if(A[Ge]===null){A[Ge]=be,De=Ge;break}if(De===-1)break}let me=M[De];me&&me.connect(be)}}let X=new L,Y=new L;function ee(j,$,be){X.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(be.matrixWorld);let De=X.distanceTo(Y),me=$.projectionMatrix.elements,Ge=be.projectionMatrix.elements,Ft=me[14]/(me[10]-1),He=me[14]/(me[10]+1),Ke=(me[9]+1)/me[5],lt=(me[9]-1)/me[5],Xe=(me[8]-1)/me[0],gt=(Ge[8]+1)/Ge[0],Gt=Ft*Xe,nn=Ft*gt,yt=De/(-Xe+gt),It=yt*-Xe;if($.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(It),j.translateZ(yt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),me[10]===-1)j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let N=Ft+yt,qt=He+yt,et=Gt-It,E=nn+(De-It),b=Ke*He/qt*N,O=lt*He/qt*N;j.projectionMatrix.makePerspective(et,E,b,O,N,qt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ae(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let $=j.near,be=j.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(be=m.depthFar)),B.near=P.near=C.near=$,B.far=P.far=C.far=be,(I!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=j.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let De=j.parent,me=B.cameras;Ae(B,De);for(let Ge=0;Ge<me.length;Ge++)Ae(me[Ge],De);me.length===2?ee(B,C,P):B.projectionMatrix.copy(C.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),ve(j,B,De)};function ve(j,$,be){be===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let Qe=null;function Fe(j,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let De=!1;be.length!==B.cameras.length&&(B.cameras.length=0,De=!0);for(let He=0;He<be.length;He++){let Ke=be[He],lt=null;if(f!==null)lt=f.getViewport(Ke);else{let gt=d.getViewSubImage(u,Ke);lt=gt.viewport,He===0&&(e.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(y))}let Xe=U[He];Xe===void 0&&(Xe=new St,Xe.layers.enable(He),Xe.viewport=new nt,U[He]=Xe),Xe.matrix.fromArray(Ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(lt.x,lt.y,lt.width,lt.height),He===0&&(B.matrix.copy(Xe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),De===!0&&B.cameras.push(Xe)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let He=d.getDepthInformation(be[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<be.length;He++){let Ke=be[He].camera;if(Ke){let lt=p[Ke];lt||(lt=new Lr,p[Ke]=lt);let Xe=d.getCameraImage(Ke);lt.sourceTexture=Xe}}}}for(let be=0;be<M.length;be++){let De=A[be],me=M[be];De!==null&&me!==void 0&&me.update(De,$,l||a)}Qe&&Qe(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Be=new nd;Be.setAnimationLoop(Fe),this.setAnimationLoop=function(j){Qe=j},this.dispose=function(){}}},cg=new Pe,cd=new Le;cd.set(-1,0,0,0,1,0,0,0,1);function lg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),T=S.envMap,y=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let A=M.program;n.uniformBlockBinding(y,A)}function l(y,M){let A=s[y.id];A===void 0&&(m(y),A=h(y),s[y.id]=A,y.addEventListener("dispose",S));let R=M.program;n.updateUBOMapping(y,R);let _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let M=d();y.__bindingPointIndex=M;let A=i.createBuffer(),R=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,A),A}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=s[y.id],A=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,w=A.length;_<w;_++){let C=A[_];if(Array.isArray(C))for(let P=0,U=C.length;P<U;P++)f(C[P],_,P,R);else f(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,A,R){if(x(y,M,A,R)===!0){let _=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){let U=w[P],B=p(U);g(U,y.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,M,A){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,A)}function x(y,M,A,R){let _=y.value,w=M+"_"+A;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{let C=R[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(y){let M=y.uniforms,A=0,R=16;for(let w=0,C=M.length;w<C;w++){let P=Array.isArray(M[w])?M[w]:[M[w]];for(let U=0,B=P.length;U<B;U++){let I=P[U],k=Array.isArray(I.value)?I.value:[I.value];for(let q=0,W=k.length;q<W;q++){let te=k[q],X=p(te),Y=A%R,ee=Y%X.boundary,Ae=Y+ee;A+=ee,Ae!==0&&R-Ae<X.storage&&(A+=R-Ae),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=X.storage}}}let _=A%R;return _>0&&(A+=R-_),y.__size=A,y.__cache={},this}function p(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):we("WebGLRenderer: Unsupported uniform value type.",y),M}function S(y){let M=y.target;M.removeEventListener("dispose",S);let A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function dg(){return Kn===null&&(Kn=new Ti(ug,16,16,Fi,Fn),Kn.name="DFG_LUT",Kn.minFilter=vt,Kn.magFilter=vt,Kn.wrapS=bn,Kn.wrapT=bn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var oc=class{constructor(e={}){let{canvas:t=E0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Ao,wo,So]),p=new Set([cn,Dn,Ks,Js,vo,Mo]),S=new Uint32Array(4),T=new Int32Array(4),y=new L,M=null,A=null,R=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,U=null,B=null,I=null,k=null;this._outputColorSpace=bt;let q=0,W=0,te=null,X=-1,Y=null,ee=new nt,Ae=new nt,ve=null,Qe=new Se(0),Fe=0,Be=t.width,j=t.height,$=1,be=null,De=null,me=new nt(0,0,Be,j),Ge=new nt(0,0,Be,j),Ft=!1,He=new zs,Ke=!1,lt=!1,Xe=new Pe,gt=new L,Gt=new nt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function It(){return te===null?$:1}let N=n;function qt(v,D){return t.getContext(v,D)}let et,E,b,O,V,K,ie,se,J,Q,re,Te,le,ae,Ee,Ce,Ue,F,oe,Z,ce,fe,ne;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),N===null){let D="webgl2";if(N=qt(D,v),N===null)throw qt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(v){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Ie("WebGLRenderer: "+v.message),v}function Re(){et=new _3(N),et.init(),ce=new rg(N,et),E=new l3(N,et,e,ce),b=new ig(N,et),E.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),B=N.createFramebuffer(),I=N.createFramebuffer(),k=N.createFramebuffer(),O=new M3(N),V=new Hm,K=new sg(N,et,b,V,E,ce,O),ie=new x3(C),se=new wp(N),fe=new o3(N,se),J=new y3(N,se,O,fe),Q=new w3(N,J,se,fe,O),F=new S3(N,E,K),Ee=new h3(V),re=new Vm(C,ie,et,E,fe,Ee),Te=new lg(C,V),le=new qm,ae=new Zm(et),Ue=new a3(C,ie,b,Q,g,c),Ce=new ng(C,Q,E),ne=new hg(N,O,E,b),oe=new c3(N,et,O),Z=new v3(N,et,O),O.programs=re.programs,C.capabilities=E,C.extensions=et,C.properties=V,C.renderLists=le,C.shadowMap=Ce,C.state=b,C.info=O}x!==cn&&(w=new T3(x,t.width,t.height,o,s,r));let ye=new oh(C,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=et.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=et.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(Be,j,!1))},this.getSize=function(v){return v.set(Be,j)},this.setSize=function(v,D,H=!0){if(ye.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=v,j=D,t.width=Math.floor(v*$),t.height=Math.floor(D*$),H===!0&&(t.style.width=v+"px",t.style.height=D+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Be*$,j*$).floor()},this.setDrawingBufferSize=function(v,D,H){Be=v,j=D,$=H,t.width=Math.floor(v*H),t.height=Math.floor(D*H),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(x===cn){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(me)},this.setViewport=function(v,D,H,z){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,D,H,z),b.viewport(ee.copy(me).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(Ge)},this.setScissor=function(v,D,H,z){v.isVector4?Ge.set(v.x,v.y,v.z,v.w):Ge.set(v,D,H,z),b.scissor(Ae.copy(Ge).multiplyScalar($).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(v){b.setScissorTest(Ft=v)},this.setOpaqueSort=function(v){be=v},this.setTransparentSort=function(v){De=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,H=!0){let z=0;if(v){let G=!1;if(te!==null){let de=te.texture.format;G=m.has(de)}if(G){let de=te.texture.type,ge=p.has(de),ue=Ue.getClearColor(),xe=Ue.getClearAlpha(),Me=ue.r,Oe=ue.g,We=ue.b;ge?(S[0]=Me,S[1]=Oe,S[2]=We,S[3]=xe,N.clearBufferuiv(N.COLOR,0,S)):(T[0]=Me,T[1]=Oe,T[2]=We,T[3]=xe,N.clearBufferiv(N.COLOR,0,T))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Ue.dispose(),le.dispose(),ae.dispose(),V.dispose(),ie.dispose(),Q.dispose(),fe.dispose(),ne.dispose(),re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",tu),ye.removeEventListener("sessionend",nu),ki.stop()};function ht(v){v.preventDefault(),Mr("WebGLRenderer: Context Lost."),P=!0}function Ye(){Mr("WebGLRenderer: Context Restored."),P=!1;let v=O.autoReset,D=Ce.enabled,H=Ce.autoUpdate,z=Ce.needsUpdate,G=Ce.type;Re(),O.autoReset=v,Ce.enabled=D,Ce.autoUpdate=H,Ce.needsUpdate=z,Ce.type=G}function Sn(v){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function On(v){let D=v.target;D.removeEventListener("dispose",On),ff(D)}function ff(v){pf(v),V.remove(v)}function pf(v){let D=V.get(v).programs;D!==void 0&&(D.forEach(function(H){re.releaseProgram(H)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,H,z,G,de){D===null&&(D=nn);let ge=G.isMesh&&G.matrixWorld.determinantAffine()<0,ue=bf(v,D,H,z,G);b.setMaterial(z,ge);let xe=H.index,Me=1;if(z.wireframe===!0){if(xe=J.getWireframeAttribute(H),xe===void 0)return;Me=2}let Oe=H.drawRange,We=H.attributes.position,_e=Oe.start*Me,Ze=(Oe.start+Oe.count)*Me;de!==null&&(_e=Math.max(_e,de.start*Me),Ze=Math.min(Ze,(de.start+de.count)*Me)),xe!==null?(_e=Math.max(_e,0),Ze=Math.min(Ze,xe.count)):We!=null&&(_e=Math.max(_e,0),Ze=Math.min(Ze,We.count));let Lt=Ze-_e;if(Lt<0||Lt===1/0)return;fe.setup(G,z,ue,H,xe);let ft,ot=oe;if(xe!==null&&(ft=se.get(xe),ot=Z,ot.setIndex(ft)),G.isMesh)z.wireframe===!0?(b.setLineWidth(z.wireframeLinewidth*It()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(G.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),b.setLineWidth(Xt*It()),G.isLineSegments?ot.setMode(N.LINES):G.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else G.isPoints?ot.setMode(N.POINTS):G.isSprite&&ot.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(et.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Xt=G._multiDrawStarts,pe=G._multiDrawCounts,Zt=G._multiDrawCount,je=xe?se.get(xe).bytesPerElement:1,mn=V.get(z).currentProgram.getUniforms();for(let kn=0;kn<Zt;kn++)mn.setValue(N,"_gl_DrawID",kn),ot.render(Xt[kn]/je,pe[kn])}else if(G.isInstancedMesh)ot.renderInstances(_e,Lt,G.count);else if(H.isInstancedBufferGeometry){let Xt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pe=Math.min(H.instanceCount,Xt);ot.renderInstances(_e,Lt,pe)}else ot.render(_e,Lt)};function eu(v,D,H,z){U!==null&&v.isNodeMaterial&&U.setObject(z,v),Ke===!0&&Ee.setState(v,H,!1),v.transparent===!0&&v.side===on&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,pa(v,D,z),v.side=Xn,v.needsUpdate=!0,pa(v,D,z),v.side=on):pa(v,D,z)}this.compile=function(v,D,H=null){H===null&&(H=v),U!==null&&U.renderStart(v,D,H),A=ae.get(H),A.init(D),_.push(A),H.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),v!==H&&v.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),lt=this.localClippingEnabled,Ke=Ee.init(this.clippingPlanes,lt),Ke===!0&&Ee.setGlobalState(this.clippingPlanes,D),U!==null&&Ce.render(A.state.shadowsArray,H,D);let z=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let de=G.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){let ue=de[ge];eu(ue,H,D,G),z.add(ue)}else eu(de,H,D,G),z.add(de)}),A=_.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(v,D,H=null){let z=this.compile(v,D,H);return new Promise(G=>{function de(){if(z.forEach(function(ge){let xe=V.get(ge).currentProgram;(xe===void 0||xe.isReady())&&z.delete(ge)}),z.size===0){G(v);return}setTimeout(de,10)}et.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Pc=null;function mf(v){Pc&&Pc(v)}function tu(){ki.stop()}function nu(){ki.start()}let ki=new nd;ki.setAnimationLoop(mf),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(v){Pc=v,ye.setAnimationLoop(v),v===null?ki.stop():ki.start()},ye.addEventListener("sessionstart",tu),ye.addEventListener("sessionend",nu),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(v,D);let H=ye.enabled===!0&&ye.isPresenting===!0,z=w!==null&&(te===null||H)&&w.begin(C,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(D),D=ye.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,D,te),A=ae.get(v,_.length),A.init(D),A.state.textureUnits=K.getTextureUnits(),_.push(A),Xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),He.setFromProjectionMatrix(Xe,Cn,D.reversedDepth),lt=this.localClippingEnabled,Ke=Ee.init(this.clippingPlanes,lt),M=le.get(v,R.length),M.init(),R.push(M),ye.enabled===!0&&ye.isPresenting===!0){let ge=C.xr.getDepthSensingMesh();ge!==null&&Ic(ge,D,-1/0,C.sortObjects)}Ic(v,D,0,C.sortObjects),M.finish(),U!==null&&U.updateLights(A.state.lightsArray),C.sortObjects===!0&&M.sort(be,De),yt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,yt&&Ue.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Ee.beginShadows();let G=A.state.shadowsArray;if(Ce.render(G,v,D),Ke===!0&&Ee.endShadows(),(z&&w.hasRenderPass())===!1){let ge=M.opaque,ue=M.transmissive;if(A.setupLights(),D.isArrayCamera){let xe=D.cameras;if(ue.length>0)for(let Me=0,Oe=xe.length;Me<Oe;Me++){let We=xe[Me];su(ge,ue,v,We)}yt&&Ue.render(v);for(let Me=0,Oe=xe.length;Me<Oe;Me++){let We=xe[Me];iu(M,v,We,We.viewport)}}else ue.length>0&&su(ge,ue,v,D),yt&&Ue.render(v),iu(M,v,D)}te!==null&&W===0&&(K.updateMultisampleRenderTarget(te),K.updateRenderTargetMipmap(te)),z&&w.end(C),v.isScene===!0&&v.onAfterRender(C,v,D),fe.resetDefaultState(),X=-1,Y=null,_.pop(),_.length>0?(A=_[_.length-1],K.setTextureUnits(A.state.textureUnits),Ke===!0&&Ee.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,U!==null&&U.renderEnd()};function Ic(v,D,H,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)A.pushLightProbeGrid(v);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(He)){z&&Gt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Xe);let ge=Q.update(v),ue=v.material;ue.visible&&M.push(v,ge,ue,H,Gt.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(He))){let ge=Q.update(v),ue=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Gt.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Gt.copy(ge.boundingSphere.center)),Gt.applyMatrix4(v.matrixWorld).applyMatrix4(Xe)),Array.isArray(ue)){let xe=ge.groups;for(let Me=0,Oe=xe.length;Me<Oe;Me++){let We=xe[Me],_e=ue[We.materialIndex];_e&&_e.visible&&M.push(v,ge,_e,H,Gt.z,We,D)}}else ue.visible&&M.push(v,ge,ue,H,Gt.z,null,D)}}let de=v.children;for(let ge=0,ue=de.length;ge<ue;ge++)Ic(de[ge],D,H,z)}function iu(v,D,H,z){let{opaque:G,transmissive:de,transparent:ge}=v;A.setupLightsView(H),Ke===!0&&Ee.setGlobalState(C.clippingPlanes,H),z&&b.viewport(ee.copy(z)),G.length>0&&fa(G,D,H),de.length>0&&fa(de,D,H),ge.length>0&&fa(ge,D,H),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function su(v,D,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let _e=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new Ht(1,1,{generateMipmaps:!0,type:_e?Fn:cn,minFilter:Ln,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let de=A.state.transmissionRenderTarget[z.id],ge=z.viewport||ee;de.setSize(ge.z*C.transmissionResolutionScale,ge.w*C.transmissionResolutionScale);let ue=C.getRenderTarget(),xe=C.getActiveCubeFace(),Me=C.getActiveMipmapLevel();C.setRenderTarget(de),C.getClearColor(Qe),Fe=C.getClearAlpha(),Fe<1&&C.setClearColor(16777215,.5),C.clear(),yt&&Ue.render(H);let Oe=C.toneMapping;C.toneMapping=In;let We=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),Ke===!0&&Ee.setGlobalState(C.clippingPlanes,z),fa(v,H,z),K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de),et.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Ze=0,Lt=D.length;Ze<Lt;Ze++){let ft=D[Ze],{object:ot,geometry:Xt,material:pe,group:Zt}=ft;if(pe.side===on&&ot.layers.test(z.layers)){let je=pe.side;pe.side=Ot,pe.needsUpdate=!0,ru(ot,H,z,Xt,pe,Zt),pe.side=je,pe.needsUpdate=!0,_e=!0}}_e===!0&&(K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de))}C.setRenderTarget(ue,xe,Me),C.setClearColor(Qe,Fe),We!==void 0&&(z.viewport=We),C.toneMapping=Oe}function fa(v,D,H){let z=D.isScene===!0?D.overrideMaterial:null;for(let G=0,de=v.length;G<de;G++){let ge=v[G],{object:ue,geometry:xe,group:Me}=ge,Oe=ge.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ue.layers.test(H.layers)&&ru(ue,D,H,xe,Oe,Me)}}function ru(v,D,H,z,G,de){U!==null&&G.isNodeMaterial&&U.setObject(v,G),v.onBeforeRender(C,D,H,z,G,de),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(C,D,H,z,v,de),G.transparent===!0&&G.side===on&&G.forceSinglePass===!1?(G.side=Ot,G.needsUpdate=!0,C.renderBufferDirect(H,D,z,G,v,de),G.side=Xn,G.needsUpdate=!0,C.renderBufferDirect(H,D,z,G,v,de),G.side=on):C.renderBufferDirect(H,D,z,G,v,de),v.onAfterRender(C,D,H,z,G,de)}function pa(v,D,H){D.isScene!==!0&&(D=nn);let z=V.get(v),G=A.state.lights,de=A.state.shadowsArray,ge=G.state.version,ue=re.getParameters(v,G.state,de,D,H,A.state.lightProbeGridArray),xe=re.getProgramCacheKey(ue),Me=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Oe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=ie.get(v.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Me===void 0&&(v.addEventListener("dispose",On),Me=new Map,z.programs=Me);let We=Me.get(xe);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===ge)return ou(v,ue),We}else ue.uniforms=re.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,H,ue),v.onBeforeCompile(ue,C),We=re.acquireProgram(ue,xe),Me.set(xe,We),z.uniforms=ue.uniforms;let _e=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_e.clippingPlanes=Ee.uniform),ou(v,ue),z.needsLights=_f(v),z.lightsStateVersion=ge,z.needsLights&&(_e.ambientLightColor.value=G.state.ambient,_e.lightProbe.value=G.state.probe,_e.sunLights.value=G.state.sun,_e.sunLightShadows.value=G.state.sunShadow,_e.directionalLights.value=G.state.directional,_e.directionalLightShadows.value=G.state.directionalShadow,_e.spotLights.value=G.state.spot,_e.spotLightShadows.value=G.state.spotShadow,_e.rectAreaLights.value=G.state.rectArea,_e.ltc_1.value=G.state.rectAreaLTC1,_e.ltc_2.value=G.state.rectAreaLTC2,_e.pointLights.value=G.state.point,_e.pointLightShadows.value=G.state.pointShadow,_e.hemisphereLights.value=G.state.hemi,_e.sunShadowMatrix.value=G.state.sunShadowMatrix,_e.sunShadowCascade.value=G.state.sunShadowCascade,_e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,_e.spotLightMatrix.value=G.state.spotLightMatrix,_e.spotLightMap.value=G.state.spotLightMap,_e.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=A.state.lightProbeGridArray.length>0,z.currentProgram=We,z.uniformsList=null,We}function au(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=tr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function ou(v,D){let H=V.get(v);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function gf(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let H=0,z=v.length;H<z;H++){let G=v[H];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function bf(v,D,H,z,G){D.isScene!==!0&&(D=nn),K.resetTextureUnits();let de=D.fog,ge=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ue=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ze.workingColorSpace,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Me=ie.get(z.envMap||ge,xe),Oe=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_e=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,Lt=!!H.morphAttributes.color,ft=In;z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ft=C.toneMapping);let ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=ot!==void 0?ot.length:0,pe=V.get(z),Zt=A.state.lights;if(Ke===!0&&(lt===!0||v!==Y)){let ut=v===Y&&z.id===X;Ee.setState(z,v,ut)}let je=!1;z.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Zt.state.version||pe.outputColorSpace!==ue||G.isBatchedMesh&&pe.batching===!1||!G.isBatchedMesh&&pe.batching===!0||G.isBatchedMesh&&pe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&pe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&pe.instancing===!1||!G.isInstancedMesh&&pe.instancing===!0||G.isSkinnedMesh&&pe.skinning===!1||!G.isSkinnedMesh&&pe.skinning===!0||G.isInstancedMesh&&pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&pe.instancingMorph===!1&&G.morphTexture!==null||pe.envMap!==Me||z.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Ee.numPlanes||pe.numIntersection!==Ee.numIntersection)||pe.vertexAlphas!==Oe||pe.vertexTangents!==We||pe.morphTargets!==_e||pe.morphNormals!==Ze||pe.morphColors!==Lt||pe.toneMapping!==ft||pe.morphTargetsCount!==Xt||!!pe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,pe.__version=z.version);let mn=pe.currentProgram;je===!0&&(mn=pa(z,D,G),U&&z.isNodeMaterial&&U.onUpdateProgram(z,mn,pe));let kn=!1,pi=!1,fs=!1,st=mn.getUniforms(),Tt=pe.uniforms;if(b.useProgram(mn.program)&&(kn=!0,pi=!0,fs=!0),z.id!==X&&(X=z.id,pi=!0),pe.needsLights){let ut=gf(A.state.lightProbeGridArray,G);pe.lightProbeGrid!==ut&&(pe.lightProbeGrid=ut,pi=!0)}if(kn||Y!==v){b.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),st.setValue(N,"projectionMatrix",v.projectionMatrix),st.setValue(N,"viewMatrix",v.matrixWorldInverse);let gi=st.map.cameraPosition;gi!==void 0&&gi.setValue(N,gt.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),Y!==v&&(Y=v,pi=!0,fs=!0)}if(pe.needsLights&&(Zt.state.sunShadowMap.length>0&&st.setValue(N,"sunShadowMap",Zt.state.sunShadowMap,K),Zt.state.directionalShadowMap.length>0&&st.setValue(N,"directionalShadowMap",Zt.state.directionalShadowMap,K),Zt.state.spotShadowMap.length>0&&st.setValue(N,"spotShadowMap",Zt.state.spotShadowMap,K),Zt.state.pointShadowMap.length>0&&st.setValue(N,"pointShadowMap",Zt.state.pointShadowMap,K)),G.isSkinnedMesh){st.setOptional(N,G,"bindMatrix"),st.setOptional(N,G,"bindMatrixInverse");let ut=G.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),st.setValue(N,"boneTexture",ut.boneTexture,K))}G.isBatchedMesh&&(st.setOptional(N,G,"batchingTexture"),st.setValue(N,"batchingTexture",G._matricesTexture,K),st.setOptional(N,G,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",G._indirectTexture,K),st.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",G._colorsTexture,K));let mi=H.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&F.update(G,H,mn),(pi||pe.receiveShadow!==G.receiveShadow)&&(pe.receiveShadow=G.receiveShadow,st.setValue(N,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Tt.envMapIntensity.value=D.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=dg()),pi){if(st.setValue(N,"toneMappingExposure",C.toneMappingExposure),pe.needsLights&&xf(Tt,fs),de&&z.fog===!0&&Te.refreshFogUniforms(Tt,de),Te.refreshMaterialUniforms(Tt,z,$,j,A.state.transmissionRenderTarget[v.id]),pe.needsLights&&pe.lightProbeGrid){let ut=pe.lightProbeGrid;Tt.probesSH.value=ut.texture,Tt.probesMin.value.copy(ut.boundingBox.min),Tt.probesMax.value.copy(ut.boundingBox.max),Tt.probesResolution.value.copy(ut.resolution)}tr.upload(N,au(pe),Tt,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(tr.upload(N,au(pe),Tt,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(N,"center",G.center),st.setValue(N,"modelViewMatrix",G.modelViewMatrix),st.setValue(N,"normalMatrix",G.normalMatrix),st.setValue(N,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let ut=z.uniformsGroups;for(let gi=0,ps=ut.length;gi<ps;gi++){let lu=ut[gi];ne.update(lu,mn),ne.bind(lu,mn)}}return mn}function xf(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function _f(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,D,H){let z=V.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=D,V.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let H=V.get(v);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,H=0){te=v,q=D,W=H;let z=null,G=!1,de=!1;if(v){let ue=V.get(v);if(ue.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),ee.copy(v.viewport),Ae.copy(v.scissor),ve=v.scissorTest,b.viewport(ee),b.scissor(Ae),b.setScissorTest(ve),X=-1;return}else if(ue.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(ue.__hasExternalTextures)K.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Oe=v.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&V.has(Oe)&&(v.width!==Oe.image.width||v.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}let xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);let Me=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Me[D])?z=Me[D][H]:z=Me[D],G=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?z=V.get(v).__webglMultisampledFramebuffer:Array.isArray(Me)?z=Me[H]:z=Me,ee.copy(v.viewport),Ae.copy(v.scissor),ve=v.scissorTest}else ee.copy(me).multiplyScalar($).floor(),Ae.copy(Ge).multiplyScalar($).floor(),ve=Ft;if(H!==0&&(z=B),b.bindFramebuffer(N.FRAMEBUFFER,z)&&b.drawBuffers(v,z),b.viewport(ee),b.scissor(Ae),b.setScissorTest(ve),G){let ue=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,H)}else if(de){let ue=D;for(let xe=0;xe<v.textures.length;xe++){let Me=V.get(v.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,Me.__webglTexture,H,ue)}}else if(v!==null&&H!==0){let ue=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,H)}X=-1};function cu(v){let D=V.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=E.textureFormatReadable(v.format),D.__typeReadable=E.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,H,z,G,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){b.bindFramebuffer(N.FRAMEBUFFER,xe);try{let Me=v.textures[ue],Oe=Me.format,We=Me.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let _e=cu(Me);if(_e.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_e.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&H>=0&&H<=v.height-G&&N.readPixels(D,H,z,G,ce.convert(Oe),ce.convert(We),de)}finally{let Me=te!==null?V.get(te).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(v,D,H,z,G,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(D>=0&&D<=v.width-z&&H>=0&&H<=v.height-G){b.bindFramebuffer(N.FRAMEBUFFER,xe);let Me=v.textures[ue],Oe=Me.format,We=Me.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let _e=cu(Me);if(_e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(D,H,z,G,ce.convert(Oe),ce.convert(We),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Lt=te!==null?V.get(te).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Lt);let ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await C0(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ze),N.deleteSync(ft),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,H=0){let z=Math.pow(2,-H),G=Math.floor(v.image.width*z),de=Math.floor(v.image.height*z),ge=D!==null?D.x:0,ue=D!==null?D.y:0;K.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,ge,ue,G,de),b.unbindTexture()},this.copyTextureToTexture=function(v,D,H=null,z=null,G=0,de=0){let ge,ue,xe,Me,Oe,We,_e,Ze,Lt,ft=v.isCompressedTexture?v.mipmaps[de]:v.image;if(H!==null)ge=H.max.x-H.min.x,ue=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Oe=H.min.y,We=H.isBox3?H.min.z:0;else{let Tt=Math.pow(2,-G);ge=Math.floor(ft.width*Tt),ue=Math.floor(ft.height*Tt),v.isDataArrayTexture?xe=ft.depth:v.isData3DTexture?xe=Math.floor(ft.depth*Tt):xe=1,Me=0,Oe=0,We=0}z!==null?(_e=z.x,Ze=z.y,Lt=z.z):(_e=0,Ze=0,Lt=0);let ot=ce.convert(D.format),Xt=ce.convert(D.type),pe;D.isData3DTexture?(K.setTexture3D(D,0),pe=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),pe=N.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),pe=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Zt=b.getParameter(N.UNPACK_ROW_LENGTH),je=b.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=b.getParameter(N.UNPACK_SKIP_PIXELS),kn=b.getParameter(N.UNPACK_SKIP_ROWS),pi=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),b.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),b.pixelStorei(N.UNPACK_SKIP_IMAGES,We);let fs=v.isDataArrayTexture||v.isData3DTexture,st=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Tt=V.get(v),mi=V.get(D),ut=V.get(Tt.__renderTarget),gi=V.get(mi.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,ut.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let ps=0;ps<xe;ps++)fs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(v).__webglTexture,G,We+ps),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(D).__webglTexture,de,Lt+ps)),N.blitFramebuffer(Me,Oe,ge,ue,_e,Ze,ge,ue,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||V.has(v)){let Tt=V.get(v),mi=V.get(D);b.bindFramebuffer(N.READ_FRAMEBUFFER,I),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,k);for(let ut=0;ut<xe;ut++)fs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,G,We+ut):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,G),st?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mi.__webglTexture,de,Lt+ut):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mi.__webglTexture,de),G!==0?N.blitFramebuffer(Me,Oe,ge,ue,_e,Ze,ge,ue,N.COLOR_BUFFER_BIT,N.NEAREST):st?N.copyTexSubImage3D(pe,de,_e,Ze,Lt+ut,Me,Oe,ge,ue):N.copyTexSubImage2D(pe,de,_e,Ze,Me,Oe,ge,ue);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(pe,de,_e,Ze,Lt,ge,ue,xe,ot,Xt,ft.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(pe,de,_e,Ze,Lt,ge,ue,xe,ot,ft.data):N.texSubImage3D(pe,de,_e,Ze,Lt,ge,ue,xe,ot,Xt,ft):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,_e,Ze,ge,ue,ot,Xt,ft.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,_e,Ze,ft.width,ft.height,ot,ft.data):N.texSubImage2D(N.TEXTURE_2D,de,_e,Ze,ge,ue,ot,Xt,ft);b.pixelStorei(N.UNPACK_ROW_LENGTH,Zt),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),b.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),b.pixelStorei(N.UNPACK_SKIP_ROWS,kn),b.pixelStorei(N.UNPACK_SKIP_IMAGES,pi),de===0&&D.generateMipmaps&&N.generateMipmap(pe),b.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),b.unbindTexture()},this.resetState=function(){q=0,W=0,te=null,b.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};function ch(i,e){if(e===Dl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Zs||e===Zr){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Zs)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function hc(i){let e=new Map,t=new Map,n=i.clone();return ld(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ld(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ld(i.children[n],e.children[n],t)}var uc=class extends qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new dc(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new dc(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=di.extractUrlBase(e);a=di.resolveURL(l,this.path)}else a=di.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Hs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pd){try{a[Ve.KHR_BINARY_GLTF]=new Ch(e)}catch(d){s&&s(d);return}r=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Uh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ve.KHR_MATERIALS_UNLIT:a[d]=new fh;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ph(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[d]=new Ih;break;case Ve.KHR_MESH_QUANTIZATION:a[d]=new Lh;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function fg(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Rt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},dh=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ii(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new es(h),l.distance=d;break;case"spot":l=new zr(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Yn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},fh=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},ph=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},mh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(s)}},gh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},xh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],en)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},_h=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},yh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(r[0],r[1],r[2],en),Promise.all(s)}},vh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(r[0],r[1],r[2],en),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,bt)),Promise.all(s)}},Sh=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},wh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ah=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Th=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Eh=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},dc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Rh=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let x=new Pe,m=new L,p=new _t,S=new L(1,1,1),T=new Yi(g.geometry,g.material,u);for(let M=0;M<u;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&S.fromBufferAttribute(c.SCALE,M),T.setMatrixAt(M,x.compose(m,p,S));let y=null;for(let M in c)if(M==="_COLOR_0"){let A=c[M];T.instanceColor=new oi(A.array,A.itemSize,A.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let R=T.geometry;y=new Ut,y.name=R.name;for(let _ in R.attributes)y.setAttribute(_,R.attributes[_]);for(let _ in R.morphAttributes)y.morphAttributes[_]=R.morphAttributes[_];R.index!==null&&y.setIndex(R.index),y.morphTargetsRelative=R.morphTargetsRelative;for(let _ of R.groups)y.addGroup(_.start,_.count,_.materialIndex);R.boundingBox!==null&&(y.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(y.boundingSphere=R.boundingSphere.clone()),y.drawRange.start=R.drawRange.start,y.drawRange.count=R.drawRange.count,y.userData=Object.assign({},R.userData),T.geometry=y}let A=c[M];y.setAttribute(M,new oi(A.array,A.itemSize,A.normalized))}dt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},pd="glTF",ta=12,hd={JSON:1313821514,BIN:5130562},Ch=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ta,r=new DataView(e,ta),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===hd.JSON){let l=new Uint8Array(e,ta+a,o);this.content=n.decode(l)}else if(c===hd.BIN){let l=ta+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ph=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=Fh[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Fh[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=sr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}d(f)},o,l,en,u)})})}},Ih=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Lh=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},fc=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,x=g-l,m=-2*f+3*u,p=f-u,S=1-m,T=p-u+d;for(let y=0;y!==o;y++){let M=a[x+y+o],A=a[x+y+c]*h,R=a[g+y+o],_=a[g+y]*h;r[y]=S*M+T*A+m*R+p*_}return r}},pg=new _t,Dh=class extends fc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return pg.fromArray(r).normalize().toArray(r),r}},_n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ud={9728:Et,9729:vt,9984:_o,9985:js,9986:is,9987:Ln},dd={33071:bn,33648:Is,10497:wi},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mg={CUBICSPLINE:void 0,LINEAR:qi,STEP:Wi},hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gg(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),i.DefaultMaterial}function as(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bg(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function xg(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _g(i){let e,t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uh(t.attributes):e=i.indices+":"+uh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+uh(i.targets[n]);return e}function uh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Nh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yg(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var vg=new Pe,Uh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Or(this.options.manager):this.textureLoader=new Gr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return as(r,o,s),Yn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(di.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=lh[s.type],o=sr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new xt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=lh[s.type],l=sr[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==d){let p=Math.floor(u/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(S);T||(x=new l(o,p*f,s.count*f/h),T=new Os(x,f/h),t.cache.add(S,T)),m=new ks(T,c,u%f/h,g)}else o===null?x=new l(s.count*c):x=new l(o,u,s.count*c),m=new xt(x,c,g);if(s.sparse!==void 0){let p=lh.SCALAR,S=sr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,M=new S(a[1],T,s.sparse.count*p),A=new l(a[2],y,s.sparse.count*c);o!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=M.length;R<_;R++){let w=M[R];if(m.setX(w,A[R*c]),c>=2&&m.setY(w,A[R*c+1]),c>=3&&m.setZ(w,A[R*c+2]),c>=4&&m.setW(w,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=ud[u.magFilter]||vt,h.minFilter=ud[u.minFilter]||Ln,h.wrapS=dd[u.wrapS]||wi,h.wrapT=dd[u.wrapT]||wi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Et&&h.minFilter!==vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Nt(x);m.needsUpdate=!0,u(m)}),t.load(di.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Yn(d,a),d.userData.mimeType=a.mimeType||yg(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Vs,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gs,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Hn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ve.KHR_MATERIALS_UNLIT]){let d=s[Ve.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],en),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,bt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let h=r.alphaMode||hh.OPAQUE;if(h===hh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===hh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){let d=r.emissiveFactor;o.emissive=new Se().setRGB(d[0],d[1],d[2],en)}return r.emissiveTexture!==void 0&&a!==tn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,bt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Yn(d,r),t.associations.set(d,{materials:e}),r.extensions&&as(s,d,r),d})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return fd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=_g(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=fd(new Ut,l,t),l.mode===_n.TRIANGLE_STRIP?u=u.then(f=>ch(f,Zr)):l.mode===_n.TRIANGLE_FAN&&(u=u.then(f=>ch(f,Zs))),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?gg(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,S=l[f];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,y=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");T&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&y?new Ai(x,S):new rt(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===_n.LINES)p=new Er(x,S);else if(m.mode===_n.LINE_STRIP)p=new Zi(x,S);else if(m.mode===_n.LINE_LOOP)p=new Rr(x,S);else if(m.mode===_n.POINTS)p=new Cr(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&xg(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Yn(p,r),m.extensions&&as(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&as(s,d[0],r),d[0];let u=new wt;r.extensions&&as(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(Ol.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Pi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Pe;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ji(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],x=d[3],m=d[4],p=[];for(let T=0,y=u.length;T<y;T++){let M=u[T],A=f[T],R=g[T],_=x[T],w=m[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,A,R,_,w);if(C)for(let P=0;P<C.length;P++)p.push(C[P])}let S=new Ur(r,void 0,p);return Yn(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,vg)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,g=d[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Bs:l.length>1?h=new wt:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Yn(h,r),r.extensions&&as(n,h,r),r.matrix!==void 0){let d=new Pe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),Yn(r,n),n.extensions&&as(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(hc(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof Jt||u instanceof Nt)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ni[r.path]===Ni.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ni[r.path]){case Ni.weights:h=li;break;case Ni.rotation:h=hi;break;case Ni.translation:case Ni.scale:h=Ci;break;default:switch(n.itemSize){case 1:h=li;break;case 2:case 3:default:h=Ci;break}break}let d=s.interpolation!==void 0?mg[s.interpolation]:qi,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+Ni[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof hi?Dh:fc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Mg(i,e,t){let n=e.attributes,s=new At;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=Nh(sr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let x=Nh(sr[u.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function fd(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Fh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ze.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),Yn(i,e),Mg(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bg(i,e.targets,t):i})}var pc=class extends ji{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ri;e.deleteAttribute("uv");let t=new Hn({side:Ot}),n=new Hn,s=new es(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new rt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Yi(e,n,6),o=new dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new rt(e,rr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new rt(e,rr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new rt(e,rr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new rt(e,rr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new rt(e,rr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new rt(e,rr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rr(i){return new Fr({color:0,emissive:16777215,emissiveIntensity:i})}var md=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var S=new Uint8Array(p.length),T=0;T<p.length;++T){var y=p.charCodeAt(T);S[T]=y>96?y-97:y>64?y-39:y+4}for(var M=0,T=0;T<p.length;++T)S[M++]=S[T]<60?n[S[T]]:(S[T]-60)*64+S[++T];return S.buffer.slice(0,M)}function c(p,S,T,y,M,A,R){var _=p.exports.sbrk,w=y+3&-4,C=_(w*M),P=_(A.length),U=new Uint8Array(p.exports.memory.buffer);U.set(A,P);var B=S(C,y,M,P,A.length);if(B==0&&R&&R(C,w,M),T.set(U.subarray(C,C+y*M)),_(C-_(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var S={object:new Worker(p),pending:0,requests:{}};return S.object.onmessage=function(T){var y=T.data;S.pending-=y.count,S.requests[y.id][y.action](y.value),delete S.requests[y.id]},S}function g(p){for(var S="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),T=new Blob([S],{type:"text/javascript"}),y=URL.createObjectURL(T),M=d.length;M<p;++M)d[M]=f(y);for(var M=p;M<d.length;++M)d[M].object.postMessage({});d.length=p,URL.revokeObjectURL(y)}function x(p,S,T,y,M){for(var A=d[0],R=1;R<d.length;++R)d[R].pending<A.pending&&(A=d[R]);return new Promise(function(_,w){var C=new Uint8Array(T),P=++u;A.pending+=p,A.requests[P]={resolve:_,reject:w},A.object.postMessage({id:P,count:p,size:S,source:C,mode:y,filter:M},[C.buffer])})}function m(p){var S=p.data;self.ready.then(function(T){if(!S.id)return self.close();try{var y=new Uint8Array(S.count*S.size);c(T,T.exports[S.mode],y,S.count,S.size,S.source,T.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:y},[y.buffer])}catch(M){self.postMessage({id:S.id,count:S.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,S,T,y,M){c(r,r.exports.meshopt_decodeVertexBuffer,p,S,T,y,r.exports[l[M]])},decodeIndexBuffer:function(p,S,T,y){c(r,r.exports.meshopt_decodeIndexBuffer,p,S,T,y)},decodeIndexSequence:function(p,S,T,y){c(r,r.exports.meshopt_decodeIndexSequence,p,S,T,y)},decodeGltfBuffer:function(p,S,T,y,M,A){c(r,r.exports[h[M]],p,S,T,y,r.exports[l[A]])},decodeGltfBufferAsync:function(p,S,T,y,M){return d.length>0?x(p,S,T,h[y],l[M]):a.then(function(){var A=new Uint8Array(p*S);return c(r,r.exports[h[y]],A,p,S,T,r.exports[l[M]]),A})}}})();var Ct={bodies:{f:{height:.93,kb:172,fist:[-.1556,.3385,5e-4]},m:{height:.96,kb:160,fist:[-.1743,.3553,6e-4]}},parts:{"r-long":{tint:[null,null],kb:{f:117,m:117}},"r-bob":{tint:[null,null],kb:{f:83,m:83}},"r-short":{tint:[null,null],kb:{f:65,m:62}},"r-pony":{tint:[null,null,"#f472b6"],kb:{f:76,m:76}},"r-bun":{tint:[null,null,"#f472b6"],kb:{f:76,m:75}},"r-spiky":{tint:[null,null],kb:{f:54,m:53}},"r-twin":{tint:[null,null,"#60a5fa"],kb:{f:89,m:89}},"r-wave":{tint:[null,null],kb:{f:122,m:122}},"r-swept":{tint:[null,null],kb:{f:80,m:78}},"u-uniform":{tint:["#2f2a28","#b07d4f","#8c5f36","#f6e3c3","#b07d4f"],kb:{f:50,m:49},tucked:!0},"u-tee":{tint:["#7cc4f5","#5aa8de","#ffffff"],kb:{f:32,m:32}},"u-hoodie":{tint:["#f7a9c4","#e88aac","#ffffff"],kb:{f:60,m:62}},"u-sweater":{tint:["#f3e6cf","#e7a39a","#d9c7a7"],kb:{f:46,m:46}},"u-sailor":{tint:["#ffffff","#1e3a8a","#ef4444","#dc2626"],kb:{f:47,m:49}},"u-chef":{tint:["#ffffff","#9ca3af","#e5e7eb","#dc2626"],kb:{f:38,m:38}},"u-dress":{tint:["#fde68a","#f59e0b","#f472b6","#db2777","#fcd34d"],kb:{f:49,m:49},full:!0},"u-hanbok":{tint:["#f9a8d4","#6d5dd3","#ffffff","#dc2626","#ec4899"],kb:{f:44,m:44},full:!0},"u-bomber":{tint:["#1e3a5f","#f1e9d8","#dc2626","#f8fafc","#f5c542","#94a3b8"],kb:{f:73,m:73}},"u-sabai":{tint:["#f59e0b","#7e22ce","#fbbf24","#fde047","#b45309"],kb:{f:49,m:49},full:!0},"u-xmas":{tint:["#b91c1c","#ffffff","#16a34a"],kb:{f:64,m:64}},"u-padding":{tint:["#f3e8d2","#c4a676","#9c8256","#e6d6b4","#b89c6c"],kb:{f:78,m:78},full:!0},"l-skirt":{tint:["#2d3a64","#1f2a4d"],kb:{f:20,m:20}},"l-pleat":{tint:["#9ca3af","#4b5563","#dc2626","#e5e7eb"],kb:{f:29,m:29}},"l-pants":{tint:["#3b3a44","#2a2930"],kb:{f:24,m:24}},"l-jeans":{tint:["#3b6fb6","#2c548f","#6a95d1","#e8b94a"],kb:{f:31,m:31}},"l-shorts":{tint:["#6aa7e0","#4a86bf"],kb:{f:24,m:24}},"l-cargo":{tint:["#7c8b5a","#6b784c","#3f3a2e","#d6d3d1"],kb:{f:30,m:30}},"k-sneaker":{tint:["#ffffff","#eceef2","#f472b6","#f472b6"],kb:{f:50,m:50}},"k-mary":{tint:["#2b2320","#1a1412","#e8b94a","#ffffff"],kb:{f:39,m:39}},"k-boots":{tint:["#8b5a2b","#6b4420","#4a2f17"],kb:{f:50,m:50}},"k-rain":{tint:["#facc15","#eab308","#ca8a04"],kb:{f:50,m:49}},"k-slipper":{tint:["#fbcfe8","#f9d5e5","#f9a8d4","#2b2320","#f472b6"],kb:{f:42,m:42}},"k-high":{tint:["#dc2626","#f8fafc","#f1f5f9","#ffffff"],kb:{f:59,m:59}}},credits:{},v:"aee743be",props:["a-balloon","a-boba","a-candy","a-fan","a-flower","a-goguma","a-icecream","a-krathong","a-pinwheel","a-skate","a-sparkler","a-spatula","a-tteok","a-wand","e-2027","e-3d","e-heart","e-round","e-star","e-sticker","e-sun","h-beanie","h-bow","h-bunny","h-cap","h-cat","h-chef","h-flowers","h-halo","h-horns","h-party","h-pumpkin","h-santa","h-straw","h-witch","j-bowtie","j-chain","j-gold","j-heart","j-jasmine","j-lei","j-pearl","j-scarf","w-angel","w-bag","w-batwing","w-bear","w-butterfly","w-cape","w-champ","w-jetpack","x-cherry","x-flower","x-heart","x-holly","x-ribbon","x-star","x-thaipin","y-board","y-pan"],things:{egg:27,rice:47,shroom:41,chili:28,garlic:29,lime:40,shrimp:44,cheese:29,fries:30,drum:42,melon:24,pine:40,golden:34,mochi:25,pudding:42,donut:44,macaron:38,cone:48,cookie:32,bingsu:37,shortcake:40,pancake:48,tart:30,bungeo:36,toast:27,queen:48,"p-chick":32,"p-hamster":41,"p-cat":43,"p-blackcat":49,"p-bunny":46,"p-shiba":46,"p-penguin":40,"p-panda":47,"p-dragon":52,"p-reindeer":56,"d-plant":43,"d-books":17,"d-frame":22,"d-candle":9,"d-lamp":28,"d-jar":40,"d-globe":20,"d-neon":53,"d-trophy":15,"d-family":19,"d-crayon":12,"d-pumpkin":20,"d-krathong":26,"d-xmastree":39,"d-fireworks":22,"d-lanna":29,"d-kimchi":45}};var na={f:{"z-1":[-32.75,30.25,-78,-20,0,6.5,-2.5,12.75,-54.5,-70,70.25],"z-2":[-32.5,30.25,-74,-20,0,-2.75,1.5,9,-53.5,-68.75,70],"z-3":[-32.25,27.25,-72,-20,0,-5.5,-1.25,9.5,-59,-65,69],"z-4":[-32.25,26.25,-66,-20,0,-19,.75,9.5,-53,-73,69],"z-5":[-32.25,26,-62,-20,0,-28.25,.75,9.5,-51,-77,69]},m:{"z-1":[-32.75,22.5,-81,-20,.25,10.5,-6.25,7,-56.5,-71.5,69],"z-2":[-32.25,18.75,-84,-20,0,12.5,-.5,9,-50,-71.5,69],"z-3":[-32.5,20,-79,-20,0,6,-5,8.75,-48.5,-65.25,71],"z-4":[-30.25,11.5,-81.5,-20,0,9,-6.25,9,-53,-71.25,70.75],"z-5":[-28.25,9.75,-80.25,-20,0,5.75,-6.5,8,-43.5,-77.5,72]}};var mc=Math.PI*2,xd=i=>i<0?0:i>1?1:i,Mt=i=>(i=xd(i),i*i*(3-2*i)),Je=(i,e=.14,t=.16)=>Mt(i/e)*Mt((1-i)/t),it=(i,e,t=0)=>Math.sin(i/1e3*e*mc+t),gd=i=>(i=xd(i),4*i*(1-i)),ar=(i,e,t)=>i+(e-i)*t,sa={},os={"m-flip":"y-pan","m-skate":"y-board","m-cool":"e-sun","m-fan":"a-fan","m-magic":"a-wand"},_d={"m-wave":"open","m-wai":"happy","m-hop":"happy open","m-heart":"wink","m-spin":"open","m-tease":"wink tongue","m-cool":"","m-kpop":"open","m-disco":"wink","m-float":"happy","m-hiphop":"","m-party":"happy open","m-idol":"wink","m-flip":"open","m-fan":"open","m-magic":"open","m-skate":"wink","m-flex":"wink","m-butt":"wink tongue","m-faint":"dizzy tongue","m-balloon":"happy puff","m-run":"open","m-leap":"happy open","m-drop":"open","m-ouch":"dizzy tongue"};function yd(i){let e=it(i,.26);return{Spine2:[1.1*e,0,0],Neck:[-.6*e,1.6*it(i,.09),0],Head:[0,2.2*it(i,.11,1),1.2*it(i,.07,2)],LeftArm:[0,0,1.4+.8*e],RightArm:[0,0,-1.4-.8*e],Hips:[0,0,.8*it(i,.13)],root:[0,.002*e,0]}}function pt(i,e,t){return{ms:i,still:e,at:t}}var wg=i=>i&&na[i.g]&&na[i.g][i.z]||na.f["z-3"],Ag=i=>{let e=Je(i,.22,.2),t=Je(i,.15,.13),n=Mt((i-.3)/.2)*Mt((.85-i)/.15);return{LeftArm:[-38*e,0,-14*t],RightArm:[-38*e,0,14*t],LeftForeArm:[-108*e,0,-6*t],RightForeArm:[-108*e,0,6*t],LeftHand:[0,0,-20*t],RightHand:[0,0,20*t],Spine:[7*n,0,0],Spine2:[4*n,0,0],Head:[9*n,0,0]}},Pt={"m-wave":pt(1800,520,(i,e)=>{let t=Je(i,.18,.2);return{RightArm:[-45*t,0,-80*t],RightForeArm:[-5*t,0,(-24+12*it(e,2.6))*t],RightHand:[0,0,8*it(e,2.6,.6)*t],Head:[0,-6*t,-6*t],Spine2:[0,-6*t,-3*t],LeftArm:[0,0,3*t]}}),"m-wai":pt(1800,820,(i,e,t)=>{let n=wg(t),s=Je(i,.09,.09),r=s,a=Mt((i-.3)/.2)*Mt((.85-i)/.15);return{LeftShoulder:[0,n[0]*s,n[1]*s],RightShoulder:[0,-n[0]*s,-n[1]*s],LeftArm:[n[2]*s,n[3]*r,n[4]*r],RightArm:[n[2]*s,-n[3]*r,-n[4]*r],LeftForeArm:[n[5]*s,n[6]*r,n[7]*r],RightForeArm:[n[5]*s,-n[6]*r,-n[7]*r],LeftHand:[n[8]*r,n[9]*r,n[10]*r],RightHand:[n[8]*r,-n[9]*r,-n[10]*r],Spine:[7*a,0,0],Spine2:[4*a,0,0],Head:[9*a,0,0]}}),"m-hop":pt(1400,350,i=>{let e=Je(i,.12,.16),t=gd(i*2%1)*(i<1?1:0),n=(1-t)*e;return{root:[0,.1*t*e-.02*n,0],LeftArm:[-30*e,0,80*e],RightArm:[-30*e,0,-80*e],LeftForeArm:[-6*e,0,20*e],RightForeArm:[-6*e,0,-20*e],LeftUpLeg:[-20*n,0,0],RightUpLeg:[-20*n,0,0],LeftLeg:[35*n,0,0],RightLeg:[35*n,0,0],Head:[-8*t*e,0,0]}}),"m-heart":pt(1800,760,i=>{let e=Je(i,.22,.2);return{RightArm:[-62*e,0,-18*e],RightForeArm:[-95*e,0,0],RightHand:[0,-30*e,0],Head:[0,-6*e,-9*e],Spine2:[0,-5*e,0]}}),"m-spin":pt(1600,470,i=>{let e=Je(i,.12,.16);return{turn:360*Mt((i-.08)/.8),LeftArm:[0,0,62*e],RightArm:[0,0,-62*e],LeftForeArm:[-10*e,0,0],RightForeArm:[-10*e,0,0],Head:[-6*e,0,0]}}),"m-tease":pt(1800,640,(i,e)=>{let t=Je(i,.18,.18),n=it(e,3)*t;return{LeftArm:[-25*t,0,45*t],RightArm:[-25*t,0,-45*t],LeftForeArm:[-10*t,0,75*t],RightForeArm:[-10*t,0,-75*t],LeftHand:[0,0,18*n],RightHand:[0,0,-18*n],Head:[0,6*n,0],Spine2:[0,0,4*n]}}),"m-cool":pt(2e3,1100,i=>{let e=Je(i,.2,.18),t=Mt((i-.35)/.15)*Mt((.8-i)/.12);return{RightArm:[-55*e,0,-22*e],RightForeArm:[-125*e,0,0],RightHand:[10*t,0,0],LeftArm:[0,0,18*e],LeftForeArm:[-80*e,0,0],Head:[-9*e,-8*e,0],Hips:[0,0,5*e],Spine:[0,0,-4*e]}}),"m-kpop":pt(2400,300,(i,e)=>{let t=Je(i,.1,.12),n=it(e,1.8),s=n>0?1:-1,r=Math.abs(it(e,1.8));return{root:[.03*n*t,-.02*r*t,0],Hips:[0,10*n*t,0],Spine2:[0,-14*n*t,0],LeftArm:[s>0?-80*t:0,0,s>0?10*t:70*t],RightArm:[s<0?-80*t:0,0,s<0?-10*t:-70*t],LeftForeArm:[-40*t,0,0],RightForeArm:[-40*t,0,0],LeftUpLeg:[-14*r*t,0,0],RightUpLeg:[-14*r*t,0,0],LeftLeg:[24*r*t,0,0],RightLeg:[24*r*t,0,0],Head:[0,-10*n*t,0]}}),"m-disco":pt(2400,300,(i,e)=>{let t=Je(i,.1,.12),n=(it(e,1.25)+1)/2;return{RightArm:[-42*t,0,ar(-96,-30,n)*t],RightForeArm:[-4*t,0,0],LeftArm:[0,0,32*t],LeftForeArm:[-95*t,0,0],LeftHand:[0,0,-20*t],Hips:[0,0,9*it(e,2.5)*t],Spine2:[0,0,-6*it(e,2.5)*t],Head:[0,ar(-18,10,n)*t,0]}}),"m-float":pt(2600,1250,(i,e)=>{let t=Je(i,.25,.22);return{root:[0,.19*t+.012*it(e,.8)*t,0],LeftArm:[0,0,(72+8*it(e,.8))*t],RightArm:[0,0,-(72+8*it(e,.8))*t],LeftForeArm:[-12*t,0,0],RightForeArm:[-12*t,0,0],LeftUpLeg:[-10*t,0,0],LeftLeg:[30*t,0,0],RightUpLeg:[4*t,0,0],RightLeg:[12*t,0,0],Head:[-10*t,0,0]}}),"m-hiphop":pt(2400,330,(i,e)=>{let t=Je(i,.1,.12),n=Math.abs(it(e,1.6));return{root:[0,-.035*t-.012*n*t,0],LeftUpLeg:[-22*t,0,8*t],RightUpLeg:[-22*t,0,-8*t],LeftLeg:[40*t,0,0],RightLeg:[40*t,0,0],Spine:[8*t,0,0],LeftArm:[-55*t,0,-30*t],RightArm:[-55*t,0,30*t],LeftForeArm:[-80*t,0,-50*t],RightForeArm:[-80*t,0,50*t],Head:[14*n*t,0,0],Neck:[0,8*it(e,.8)*t,0]}}),"m-party":pt(2e3,560,(i,e)=>{let t=Je(i,.12,.14),n=it(e,2.2);return{LeftArm:[-35*t,0,(75+7*n)*t],RightArm:[-35*t,0,-(75-7*n)*t],LeftForeArm:[-8*t,0,(14+14*n)*t],RightForeArm:[-8*t,0,(-14+14*n)*t],Hips:[0,0,7*n*t],Spine2:[0,0,-5*n*t],Head:[0,0,6*n*t],root:[0,.012*Math.abs(n)*t,0]}}),"m-idol":pt(2e3,900,i=>{let e=Je(i,.2,.18);return{RightArm:[-30*e,0,-128*e*e],RightForeArm:[-140*e,0,0],RightHand:[0,0,-16*e],LeftArm:[0,0,22*e],LeftForeArm:[-30*e,0,0],Head:[0,6*e,-12*e],Hips:[0,0,6*e],LeftUpLeg:[-12*e,0,-8*e],LeftLeg:[24*e,0,0]}}),"m-flip":pt(2200,1320,(i,e)=>{let t=Je(i,.14,.16),n=e/1e3*1.6%1,s=Math.max(0,Math.sin(n*mc))*t,r=n<.62?Math.sin(n/.62*Math.PI)*t:0;return{RightArm:[(-30-4*s)*t,0,-6*t],RightForeArm:[(-62-6*s)*t,0,0],RightHand:[-16*s,0,0],LeftArm:[-16*t,0,18*t],LeftForeArm:[-48*t,0,0],Head:[(12-18*r)*t,-8*t,0],Spine:[3*t,0,0],toss:[.16*r,n<.62?360*n/.62:0]}}),"m-fan":pt(2400,560,(i,e)=>{let t=Je(i,.14,.16),n=it(e,.8);return{turn:22*n*t,RightArm:[-30*t,0,ar(-48,-82,(n+1)/2)*t],RightForeArm:[-20*t,0,0],RightHand:[0,30*n*t,0],LeftArm:[-20*t,0,ar(60,25,(n+1)/2)*t],LeftForeArm:[-50*t,0,0],LeftHand:[0,0,20*t],Head:[0,6*n*t,-6*n*t],Hips:[0,0,-4*n*t]}}),"m-magic":pt(2400,1100,(i,e)=>{let t=Je(i,.14,.14),n=e/1e3*3.2,s=Mt((i-.6)/.12);return{RightArm:[ar(-30+15*Math.sin(n),-90,s)*t,0,ar(-77+11*Math.cos(n),-10,s)*t],RightForeArm:[-10*t,0,0],LeftArm:[0,0,40*t],LeftForeArm:[-40*t,0,0],Head:[-6*t,-8*t,0],Spine2:[0,-10*s*t,0]}}),"m-skate":pt(2400,1080,i=>{let e=Je(i,.1,.12),t=gd((i-.3)/.45),n=(1-t)*e;return{root:[0,.19*t-.03*n,0],turn:360*Mt((i-.3)/.45),LeftUpLeg:[-30*n-40*t,0,0],RightUpLeg:[-30*n-40*t,0,0],LeftLeg:[50*n+70*t,0,0],RightLeg:[50*n+70*t,0,0],LeftArm:[0,0,(40+40*t)*e],RightArm:[0,0,-(40+40*t)*e],Spine:[10*n,0,0]}}),"m-flex":pt(2e3,700,(i,e)=>{let t=Je(i,.18,.16),n=1+.06*it(e,2.4);return{LeftArm:[-12*t,0,28*t],RightArm:[-12*t,0,-28*t],LeftForeArm:[-10*t,0,106*t*n],RightForeArm:[-10*t,0,-106*t*n],LeftHand:[0,0,20*t],RightHand:[0,0,-20*t],Spine2:[-6*t,0,0],Head:[-6*t,0,0]}}),"m-butt":pt(2e3,380,(i,e)=>{let t=Je(i,.16,.16),n=it(e,2.8)*t;return{turn:180*t,Hips:[6*t,0,14*n],Spine:[-8*t,0,-8*n],Neck:[0,40*t,0],Head:[0,20*t,0],LeftArm:[0,0,20*t],RightArm:[0,0,-20*t],LeftUpLeg:[-8*t,0,0],RightUpLeg:[-8*t,0,0],LeftLeg:[16*t,0,0],RightLeg:[16*t,0,0]}}),"m-faint":pt(2800,1250,(i,e)=>{let t=Mt(i/.1)*Mt((.34-i)/.08),n=Mt((i-.28)/.16)*Mt((.92-i)/.1);return{root:[0,-.15*n,-.05*n],tilt:[0,5*t*it(e,3)],LeftUpLeg:[-80*n,0,-6*n],RightUpLeg:[-80*n,0,6*n],LeftLeg:[140*n,0,0],RightLeg:[140*n,0,0],LeftFoot:[-40*n,0,0],RightFoot:[-40*n,0,0],Spine:[-38*n,0,0],Spine2:[-18*n,0,6*t*it(e,2.5)],Head:[-20*n,18*t*it(e,2),24*n],LeftArm:[0,0,30*t+10*n],RightArm:[0,0,-(30*t+10*n)],LeftForeArm:[-10*n,0,0],RightForeArm:[-10*n,0,0]}}),"m-balloon":pt(2800,1300,(i,e)=>{let t=Je(i,.18,.2),n=Mt((i-.05)/.3)*Mt((.92-i)/.1);return{size:[1+.15*n,1+.05*n,1+.15*n],grow:{Spine:[1+.06*n,1,1+.07*n],Spine1:[1+.14*n,1+.03*n,1+.16*n]},root:[.012*it(e,1.1)*n,.05*n,0],LeftArm:[0,0,40*t],RightArm:[0,0,-40*t],LeftUpLeg:[0,0,14*n],RightUpLeg:[0,0,-14*n],Head:[-10*n,0,6*it(e,1.4)*n]}}),"m-run":pt(1e3,375,i=>{let e=mc*(i-.125),t=Math.sin(e),n=Math.cos(e),s=(r,a)=>12+50*Math.max(0,-r)+40*Math.max(0,a);return{root:[0,.014*(1-Math.abs(t)),0],Hips:[0,-6*t,0],Spine:[14,0,0],Spine2:[0,8*t,0],Head:[-9,-4*t,0],LeftUpLeg:[-40*t,0,3],RightUpLeg:[40*t,0,-3],LeftLeg:[s(t,n),0,0],RightLeg:[s(-t,-n),0,0],LeftArm:[36*t,0,14],RightArm:[-36*t,0,-14],LeftForeArm:[-78,0,0],RightForeArm:[-78,0,0]}}),"m-leap":pt(1e3,500,()=>({Spine:[10,0,0],Head:[-12,0,0],LeftUpLeg:[-78,0,4],LeftLeg:[96,0,0],RightUpLeg:[20,0,-4],RightLeg:[62,0,0],LeftArm:[-112,0,18],LeftForeArm:[-18,0,0],RightArm:[42,0,-26],RightForeArm:[-34,0,0]})),"m-drop":pt(1e3,500,()=>({Spine:[4,0,0],Head:[8,0,0],LeftUpLeg:[-30,0,6],LeftLeg:[34,0,0],RightUpLeg:[-8,0,-6],RightLeg:[18,0,0],LeftArm:[-16,0,66],RightArm:[-16,0,-66],LeftForeArm:[0,0,18],RightForeArm:[0,0,-18]})),"m-ouch":pt(1e3,500,()=>({Spine:[-9,0,0],Spine2:[-5,0,0],Head:[-4,0,6],LeftArm:[-38,0,58],RightArm:[-38,0,-58],LeftForeArm:[-10,0,24],RightForeArm:[-10,0,-24],LeftUpLeg:[-40,0,6],LeftLeg:[38,0,0],RightUpLeg:[-10,0,-6],RightLeg:[22,0,0]}))};for(let i of["m-faint"])Pt[i].lie=!0;function Oh(i){let e={};for(let t in i){let n=i[t];t==="root"?e[t]=[-n[0],n[1],n[2]]:t==="turn"?e[t]=-n:t==="tilt"?e[t]=[n[0],-n[1]]:t==="size"||t==="grow"||t==="toss"?e[t]=n:e[/^Left/.test(t)?"Right"+t.slice(4):/^Right/.test(t)?"Left"+t.slice(5):t]=[n[0],-n[1],-n[2]]}return e}var Tg=i=>Mt(i/.03)*Mt((1-i)/.03),ia=(i,e)=>({RightArm:[-10*i,0,-(3*Tg(e)+5*i)],RightForeArm:[-16*i,0,0],RightHand:[0,0,0]}),bd={"m-wai":(i,e)=>Object.assign(Ag(i),ia(Je(i,.22,.2),i)),"m-cool":(i,e)=>Object.assign(Oh(Pt["m-cool"].at(i,e)),ia(Je(i,.2,.18),i)),"m-heart":(i,e)=>Object.assign(Oh(Pt["m-heart"].at(i,e)),ia(Je(i,.22,.2),i)),"m-idol":(i,e)=>{let t=Oh(Pt["m-idol"].at(i,e)),n=Je(i,.2,.18);return Object.assign(t,{LeftArm:[-58*n,0,104*n*n]},ia(n,i))},"m-hiphop":(i,e)=>Object.assign(Pt["m-hiphop"].at(i,e),ia(Je(i,.1,.12),i)),"m-tease":(i,e)=>{let t=Je(i,.18,.18),n=it(e,3)*t;return Object.assign(Pt["m-tease"].at(i,e),{RightArm:[-25*t,0,-30*t],RightForeArm:[-10*t,0,-30*t],RightHand:[0,0,-18*n]})},"m-kpop":(i,e)=>{let t=Je(i,.1,.12),n=it(e,1.8)>0?1:-1;return Object.assign(Pt["m-kpop"].at(i,e),{RightArm:n<0?[-55*t,0,-8*t]:[0,0,-44*t],RightForeArm:[-30*t,0,0]})},"m-ouch":(i,e)=>Object.assign(Pt["m-ouch"].at(i,e),{RightArm:[-38,0,-40],RightForeArm:[-10,0,-16]}),"m-drop":(i,e)=>Object.assign(Pt["m-drop"].at(i,e),{RightArm:[-16,0,-48],RightForeArm:[0,0,-12]}),"m-run":(i,e)=>{let t=Math.sin(mc*(i-.125));return Object.assign(Pt["m-run"].at(i,e),{RightArm:[-30*t,0,-12],RightForeArm:[-50,0,0]})},"m-faint":(i,e)=>{let t=Mt(i/.1)*Mt((.34-i)/.08),n=Mt((i-.28)/.16)*Mt((.92-i)/.1);return Object.assign(Pt["m-faint"].at(i,e),{RightArm:[-20*n,0,-(30*t+20*n)]})},"m-balloon":(i,e)=>Object.assign(Pt["m-balloon"].at(i,e),{RightArm:[0,0,-28*Je(i,.18,.2)]}),"m-butt":(i,e)=>Object.assign(Pt["m-butt"].at(i,e),{RightArm:[0,0,-12*Je(i,.16,.16)]})};for(let i in bd)Pt[i].held=bd[i];Pt["m-wai"].fit=na;var vd={"":{"a-balloon":{d:[[0,6,0]]},"a-fan":{d:[[0,18,0]]},"a-icecream":{d:[[0,6,0]]},"a-pinwheel":{d:[[0,12,90]]},"a-sparkler":{d:[[0,12,0]]},"a-spatula":{d:[[0,12,0]]},"a-wand":{d:[[0,12,0]]}},"m-wave":{"a-boba":{d:[[0,0,0],[.2083,0,0],[.25,12,0],[.2889,0,0],[.4,0,0],[.45,6,0],[.4583,12,0],[.5,12,0],[.5417,0,0],[.65,0,0],[.7,12,0],[.7083,12,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,18,0],[.15,35,0],[.2083,35,0],[.25,18,0],[.3,18,0],[.35,6,0],[.4,6,0],[.45,18,0],[.5,18,0],[.5417,6,0],[.55,6,0],[.6,18,0],[.625,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.7917,18,0],[.8,12,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.4,0,0],[.45,12,0],[.4583,6,0],[.5,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.03,6,0],[.035,12,0],[.06,12,0],[.1,6,0],[.125,12,0],[.15,18,0],[.2083,18,0],[.25,6,0],[.2889,12,0],[.3,12,0],[.35,6,0],[.4,6,0],[.45,12,0],[.5,12,0],[.5417,18,0],[.55,12,0],[.6,6,0],[.625,6,0],[.65,12,0],[.7,6,0],[.7083,6,0],[.75,18,0],[.7917,6,0],[.9,6,0],[.94,12,0],[.96,12,0],[.965,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,12,90],[.125,12,90],[.15,12,0],[.2083,12,0],[.25,6,0],[.2889,12,0],[.3,12,0],[.35,18,0],[.375,18,0],[.4,12,0],[.4583,12,0],[.5,6,0],[.5417,12,0],[.55,12,0],[.6,18,0],[.625,12,0],[.65,12,0],[.7,6,0],[.7083,6,0],[.75,12,0],[.7917,18,0],[.8,18,0],[.85,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.06,6,0],[.1,0,0],[.125,0,0],[.15,6,0],[.2083,6,0],[.25,0,0],[.3,0,0],[.35,12,0],[.375,12,0],[.4,6,0],[.45,0,0],[.5,0,0],[.5417,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,0,0],[.7083,0,0],[.75,6,0],[.7917,12,0],[.8,12,0],[.85,0,0],[.9,0,0],[.94,6,0],[.945,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.03,18,0],[.035,12,0],[.96,12,0],[.965,18,0],[.995,18,0],[1,12,0]]}},"m-wai":{"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-icecream":{d:[[0,6,0],[.055,6,0],[.06,12,0],[.945,12,0],[.95,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,12,90],[.4,12,90],[.45,18,0],[.7083,18,0],[.75,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-hop":{"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.125,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,18,0],[.125,6,0],[.15,0,0],[.8,0,0],[.85,6,0],[.875,18,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.06,6,0],[.1,18,0],[.125,12,0],[.15,6,0],[.85,6,0],[.875,12,0],[.9,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,12,90],[.06,12,90],[.1,12,0],[.15,12,0],[.2,35,-45],[.8,35,-45],[.85,6,0],[.875,12,90],[1,12,90]]},"a-skate":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,12,0],[.1,35,-45],[.8,35,-45],[.85,6,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.125,35,0],[.15,35,0],[.2,35,-45],[.4,35,-45],[.45,6,0],[.4586,12,0],[.5414,12,0],[.55,6,0],[.6,35,-45],[.8,35,-45],[.85,35,0],[.875,18,0],[.9,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.4586,0,0],[.5,12,0],[.5414,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-heart":{"a-balloon":{d:[[0,6,0],[.15,6,0],[.2,12,0],[.8,12,0],[.85,6,0],[1,6,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.055,6,0],[.06,12,0],[.125,12,0],[.15,6,0],[.875,6,0],[.9,12,0],[.945,12,0],[.95,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-spin":{"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,35,0],[.875,35,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]}},"m-tease":{"a-boba":{d:[[0,0,0],[.2,0,0],[.2083,6,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.6,0,0],[.625,6,0],[.65,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.25,35,0],[.2917,18,0],[.3556,18,0],[.375,35,0],[.4583,35,0],[.5,18,0],[.55,18,0],[.6,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,12,0],[.15,12,0],[.2,18,0],[.25,18,0],[.2917,6,0],[.3556,6,0],[.375,12,0],[.4,18,0],[.45,12,0],[.55,12,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7917,12,0],[.8,18,0],[.85,12,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.2083,0,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.75,6,0],[.7917,12,0],[.8,12,0],[.85,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[.2083,0,0],[.25,6,0],[.2917,35,45],[.55,35,45],[.6,6,0],[.625,0,0],[.8,0,0],[.85,12,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-cool":{"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-kpop":{"a-boba":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,6,0],[.125,0,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.015,18,0],[.02,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,18,0],[.125,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,0,0],[.4583,0,0],[.5,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.8,6,0],[.85,12,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.015,6,0],[.02,12,0],[.125,12,0],[.15,18,0],[.25,18,0],[.2917,35,0],[.4583,35,0],[.5,18,0],[.55,18,0],[.6,35,0],[.625,18,0],[.65,18,0],[.7,12,0],[.7083,18,0],[.75,35,0],[.7917,18,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.45,0,0],[.4583,6,0],[.5,35,45],[.8,35,45],[.85,12,0],[.875,12,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.025,0,0],[.03,6,0],[.1,6,0],[.125,12,0],[.15,6,0],[.2,6,0],[.2083,12,0],[.25,0,0],[.2917,6,0],[.3,6,0],[.35,12,0],[.375,6,0],[.4,6,0],[.45,12,0],[.4583,12,0],[.5,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,0,0],[.75,6,0],[.7917,0,0],[.8,0,0],[.85,6,0],[.965,6,0],[.97,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-disco":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,18,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,18,0],[.35,0,0],[.625,0,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.02,18,0],[.025,35,0],[.1,35,0],[.125,18,0],[.15,18,0],[.2,35,0],[.4,35,0],[.45,18,0],[.5,18,0],[.5417,35,0],[.75,35,0],[.7917,18,0],[.8,18,0],[.85,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,35,0],[.25,35,0],[.2917,18,0],[.3,18,0],[.35,12,0],[.375,12,0],[.4,0,0],[.45,0,0],[.4583,6,0],[.5,12,0],[.5417,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7083,12,0],[.75,0,0],[.7917,6,0],[.8,6,0],[.85,18,0],[.875,35,0],[.9,35,0],[.94,18,0],[.945,12,0],[.95,6,0],[.955,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.15,0,0],[.2,12,0],[.2083,6,0],[.25,0,0],[.2917,0,0],[.3,6,0],[.35,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.015,6,0],[.02,12,0],[.045,12,0],[.05,6,0],[.15,6,0],[.2,12,0],[.2083,18,0],[.25,35,0],[.2917,12,0],[.3,6,0],[.4583,6,0],[.5,12,0],[.5417,35,0],[.6,35,0],[.625,18,0],[.65,6,0],[.85,6,0],[.875,18,0],[.9,18,0],[.94,6,0],[.965,6,0],[.97,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2083,0,0],[.25,18,0],[.2917,0,0],[.3,0,0],[.35,6,0],[.375,0,0],[.55,0,0],[.6,6,0],[.625,0,0],[1,0,0]],hide:[[1329,1407]]},"a-pinwheel":{d:[[0,12,90],[.15,12,90],[.2,12,0],[.2083,18,0],[.25,18,0],[.2917,12,90],[.5,12,90],[.5417,18,0],[.55,18,0],[.6,12,0],[.625,12,90],[.85,12,90],[.875,18,0],[.9,12,0],[.94,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.03,0,0],[.035,6,0],[.05,6,0],[.055,0,0],[.15,0,0],[.2,6,0],[.2083,6,0],[.25,12,0],[.2917,0,0],[.5,0,0],[.5417,6,0],[.6,6,0],[.625,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[.96,0,0],[.965,6,0],[.97,6,0],[.975,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-float":{"a-boba":{d:[[0,0,0],[.5,0,0],[.5415,12,0],[.65,12,0],[.7,0,0],[1,0,0]]},"a-candy":{d:[[0,0,0],[.01,0,0],[.015,12,90],[.06,12,90],[.1,0,0],[.4808,0,0],[.5,6,0],[.5415,35,-45],[.65,35,-45],[.7,0,0],[.9,0,0],[.94,12,90],[.975,12,90],[.98,0,0],[1,0,0]],hide:[[98,124]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.5,6,0],[.5415,12,0],[.65,12,0],[.7,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,0],[.2,35,45],[.4808,35,45],[.5,18,0],[.5415,0,0],[.65,0,0],[.7,6,0],[.7085,12,0],[.75,35,0],[.8,35,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.06,18,0],[.1,12,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.06,18,0],[.1,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]}},"m-hiphop":{"a-fan":{d:[[0,18,0],[.025,18,0],[.03,35,0],[.3,35,0],[.35,35,45],[.4583,35,45],[.5,35,0],[.8,35,0],[.85,35,45],[.9,35,45],[.94,35,0],[.97,35,0],[.975,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.25,0,0],[.2917,12,90],[.3,12,90],[.35,0,0],[.85,0,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.02,6,0],[.025,12,0],[.055,12,0],[.06,6,0],[.15,6,0],[.2,12,0],[.25,12,0],[.2917,18,0],[.3,18,0],[.35,35,0],[.375,18,0],[.4,18,0],[.45,35,0],[.4583,35,0],[.5,18,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,12,0],[.7083,12,0],[.75,6,0],[.7917,12,0],[.8,12,0],[.85,35,0],[.875,35,0],[.9,18,0],[.94,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,12,90],[.06,12,90],[.1,18,0],[.2083,18,0],[.25,12,90],[.3,12,90],[.35,18,0],[.625,18,0],[.65,12,0],[.7,18,0],[.75,18,0],[.7917,12,90],[.8,12,90],[.85,18,0],[.9,18,0],[.94,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.3,12,0],[.35,18,0],[.4583,18,0],[.5,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.035,0,0],[.04,6,0],[.1,6,0],[.125,0,0],[.15,0,0],[.2,6,0],[.25,6,0],[.2917,12,0],[.4583,12,0],[.5,6,0],[.625,6,0],[.65,0,0],[.7,6,0],[.8,6,0],[.85,12,0],[.945,12,0],[.95,6,0],[.96,6,0],[.965,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-party":{"a-balloon":{d:[[0,6,0],[.125,6,0],[.15,12,0],[.2,6,0],[.35,6,0],[.375,12,0],[.4,6,0],[.55,6,0],[.6,12,0],[.65,12,0],[.7,6,0],[1,6,0]]},"a-boba":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.28,18,0],[.3,18,0],[.35,0,0],[.4585,0,0],[.5,18,0],[.5415,18,0],[.55,12,0],[.6,0,0],[.65,0,0],[.7,12,0],[.7085,18,0],[.75,18,0],[.7915,0,0],[1,0,0]]},"a-candy":{d:[[0,0,0],[.4,0,0],[.45,35,-90],[.55,35,-90],[.6,0,0],[.65,0,0],[.7,35,-90],[.8,35,-90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.35,35,0],[.375,18,0],[.4,18,0],[.45,35,0],[.55,35,0],[.6,18,0],[.65,18,0],[.7,35,0],[.875,35,0],[.9,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,18,0],[.125,18,0],[.15,6,0],[.2,0,0],[.2085,0,0],[.25,18,0],[.35,18,0],[.375,12,0],[.4,6,0],[.45,18,0],[.55,18,0],[.6,0,0],[.65,0,0],[.7,18,0],[.8,18,0],[.85,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.2085,0,0],[.25,12,0],[.28,0,0],[.5,0,0],[.5415,12,0],[.55,6,0],[.6,0,0],[.65,0,0],[.7,6,0],[.7085,12,0],[.75,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.02,6,0],[.025,12,0],[.1,12,0],[.125,18,0],[.15,6,0],[.2085,6,0],[.25,18,0],[.35,18,0],[.375,12,0],[.4,6,0],[.45,18,0],[.4585,18,0],[.5,12,0],[.5415,12,0],[.55,18,0],[.6,6,0],[.65,6,0],[.7,18,0],[.7085,12,0],[.75,12,0],[.7915,18,0],[.8,18,0],[.85,6,0],[.945,6,0],[.95,12,0],[.975,12,0],[.98,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,12,90],[.1,12,90],[.125,12,0],[.15,6,0],[.2,12,0],[.35,12,0],[.375,6,0],[.4,6,0],[.45,12,0],[.55,12,0],[.6,12,90],[.65,12,90],[.7,12,0],[.8,12,0],[.85,6,0],[.875,12,0],[.9,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.025,0,0],[.03,6,0],[.045,6,0],[.05,0,0],[.15,0,0],[.2,6,0],[.2085,6,0],[.25,0,0],[.28,6,0],[.3,6,0],[.35,0,0],[.4585,0,0],[.5,6,0],[.5415,0,0],[.55,0,0],[.6,6,0],[.65,6,0],[.7,0,0],[.7085,0,0],[.75,6,0],[.7915,0,0],[.94,0,0],[.945,6,0],[.96,6,0],[.965,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-idol":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,0],[.85,12,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,18,0],[.2,35,0],[.85,35,0],[.875,18,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.03,6,0],[.035,12,0],[.15,12,0],[.2,18,0],[.85,18,0],[.875,12,0],[.97,12,0],[.975,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-fan":{"a-fan":{d:[[0,18,0],[.15,18,0],[.2,35,0],[.5,35,0],[.5417,18,0],[.55,18,0],[.6,35,0],[.7083,35,0],[.75,18,0],[1,18,0]]}},"m-skate":{"a-boba":{d:[[0,0,0],[.4,0,0],[.45,12,0],[.4583,12,0],[.5,0,0],[.55,0,0],[.6,12,0],[.625,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.05,18,0],[.055,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.3,0,0],[.35,12,0],[.4,12,0],[.45,18,0],[.625,18,0],[.65,12,0],[.7083,12,0],[.75,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.4583,6,0],[.5,12,0],[.55,12,0],[.6,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.7,0,0],[.7083,6,0],[.75,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.035,12,90],[.04,6,0],[.0417,12,0],[.045,18,0],[.3,18,0],[.35,12,0],[.375,12,90],[.65,12,90],[.7,12,0],[.7083,12,0],[.75,18,0],[.94,18,0],[.945,12,0],[.95,6,0],[.955,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-flex":{"a-balloon":{d:[[0,6,0],[.3,6,0],[.35,18,0],[.375,18,0],[.4,6,0],[.4585,6,0],[.5,12,0],[.5415,35,0],[.625,35,0],[.65,18,0],[.7085,18,0],[.75,35,0],[.7915,18,0],[.8,18,0],[.85,6,0],[.875,12,0],[.9,6,0],[1,6,0]]},"a-boba":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.2085,12,0],[.25,18,0],[.2915,18,0],[.3,12,0],[.35,0,0],[.375,0,0],[.4,6,0],[.45,18,0],[.5,18,0],[.5415,6,0],[.55,0,0],[.6,0,0],[.625,12,0],[.65,18,0],[.7085,18,0],[.75,6,0],[.7915,0,0],[.8,0,0],[.85,12,0],[.875,12,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.15,12,0],[.2,35,0],[.3,35,0],[.35,18,0],[.4,18,0],[.45,35,0],[.5,35,0],[.5415,18,0],[.6,18,0],[.625,35,0],[.7085,35,0],[.75,18,0],[.8,18,0],[.85,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]],hide:[[455,505]]},"a-icecream":{d:[[0,6,0],[.1,6,0],[.125,18,0],[.15,12,0],[.2085,12,0],[.25,18,0],[.2915,18,0],[.3,12,0],[.35,6,0],[.4,6,0],[.45,18,0],[.5,18,0],[.5415,6,0],[.6,6,0],[.625,12,0],[.65,18,0],[.7085,18,0],[.75,6,0],[.8,6,0],[.85,12,0],[.9,12,0],[.94,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,35,45],[.15,35,45],[.2,70,45],[.75,70,45],[.7915,35,45],[.875,35,45],[.9,18,0],[.94,0,0],[1,0,0]],hide:[[1650,1725]]},"a-pinwheel":{d:[[0,12,90],[.1,12,90],[.125,12,0],[.15,18,0],[.2,35,45],[.9,35,45],[.94,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.3,12,0],[.35,35,0],[.4,35,0],[.45,18,0],[.5,18,0],[.5415,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7,12,0],[.7085,18,0],[.75,35,0],[.8,35,0],[.85,18,0],[.875,18,0],[.9,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.125,12,0],[.15,18,0],[.2,12,0],[.3,12,0],[.35,35,45],[.4,35,45],[.45,12,0],[.5,12,0],[.5415,35,45],[.6,35,45],[.625,18,0],[.65,12,0],[.7085,12,0],[.75,35,45],[.8,35,45],[.85,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.125,12,0],[.15,18,0],[.2,12,0],[.2085,12,0],[.25,18,0],[.2915,12,0],[.3,12,0],[.35,35,45],[.4,35,45],[.45,18,0],[.5,18,0],[.5415,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7,18,0],[.7085,18,0],[.75,35,45],[.8,35,45],[.85,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-butt":{"a-candy":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,12,0],[.1,0,0],[.9,0,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,6,0],[.9,6,0],[.94,18,0],[.945,12,0],[.95,6,0],[1,6,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]}},"m-faint":{"a-boba":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.1,18,0],[.125,35,0],[.2082,35,0],[.25,18,0],[.2918,35,0],[.3,35,0],[.35,18,0],[.875,18,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,18,0],[.15,35,0],[.2082,35,0],[.25,6,0],[.2918,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.1,6,0],[.125,12,0],[.15,12,0],[.2,18,0],[.2082,12,0],[.25,6,0],[.2918,12,0],[.3,12,0],[.35,6,0],[.875,6,0],[.9,12,0],[.94,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,12,90],[.1,0,0],[.4,0,0],[.4464,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.4,12,0],[.4464,6,0],[.8,6,0],[.85,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2082,6,0],[.25,0,0],[.2918,6,0],[.3,6,0],[.35,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]}},"m-balloon":{"a-flower":{d:[[0,0,0],[.2918,0,0],[.3,6,0],[.35,0,0],[.5418,0,0],[.55,6,0],[.6,6,0],[.625,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.2082,0,0],[.25,6,0],[.2918,0,0],[.35,0,0],[.375,6,0],[.4,0,0],[.4643,0,0],[.5,6,0],[.5418,35,45],[.6,35,45],[.625,12,0],[.65,0,0],[.8,0,0],[.85,12,0],[.875,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.1,12,90],[.125,6,0],[.15,6,0],[.2,12,90],[.2082,12,90],[.25,6,0],[.2918,12,90],[.3,12,90],[.35,6,0],[.375,6,0],[.4,12,90],[.5,12,90],[.5418,6,0],[.625,6,0],[.65,12,90],[.75,12,90],[.7918,6,0],[.85,6,0],[.875,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.025,18,0],[.03,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]}},"m-run":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,90],[.208,12,90],[.25,6,0],[.292,0,0],[.458,0,0],[.5,6,0],[.542,12,90],[.55,12,90],[.6,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.15,35,0],[.2,35,45],[.65,35,45],[.7,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,0,0],[.15,12,90],[.2,35,90],[.55,35,90],[.6,12,90],[.625,0,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.25,0,0],[.292,12,90],[.458,12,90],[.5,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.005,12,0],[.125,12,0],[.15,18,0],[.2,35,0],[.55,35,0],[.6,18,0],[.625,12,0],[.995,12,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.208,0,0],[.25,6,0],[.5,6,0],[.542,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.55,12,90],[.6,18,0],[.875,18,0],[.9,6,0],[.94,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.1,12,0],[.125,18,0],[.208,18,0],[.25,12,0],[.3,12,0],[.35,18,0],[.4,18,0],[.45,12,0],[.5,12,0],[.542,18,0],[.625,18,0],[.65,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.15,12,0],[.2,18,0],[.55,18,0],[.6,12,0],[.65,12,0],[.7,6,0],[.995,6,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.292,12,0],[.3,18,0],[.35,12,0],[.4,12,0],[.45,18,0],[.458,12,0],[.75,12,0],[.792,18,0],[.985,18,0],[.99,12,0],[1,12,0]]}},"m-leap":{"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.05,6,0],[.055,12,0],[.06,12,0],[.1,12,90],[.9,12,90],[.94,12,0],[.945,12,0],[.95,6,0],[.995,6,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.005,12,0],[.055,12,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[.945,12,0],[.995,12,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,90],[.2,35,90],[.8,35,90],[.85,12,90],[.875,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.15,12,90],[.2,35,90],[.8,35,90],[.85,12,90],[1,12,90]]},"a-sparkler":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.9,12,0],[.94,6,0],[.995,6,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.045,12,0],[.05,18,0],[.95,18,0],[.955,12,0],[1,12,0]]}},"m-drop":{"a-boba":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.015,18,0],[.985,18,0],[.99,12,0],[.995,6,0],[1,0,0]]},"a-pinwheel":{d:[[0,12,90],[.06,12,90],[.1,12,0],[.9,12,0],[.94,12,90],[1,12,90]]}},"m-ouch":{"a-boba":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.99,12,0],[.995,6,0],[1,0,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]}}};var Md={f:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-star":[0,0,.002],"e-sticker":[0,-.00141,.00141],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00404,.00404,.00404],"h-beanie|x-star":[.00808,.00808,.00808],"h-beanie|x-thaipin":[.00635,.00635,.00635],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00884,.00884,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00813,.00813,0],"h-santa|x-holly":[.0026,.0026,.0026],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01617,.01617,.01617],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00664,.00664,.00664],"h-witch|x-holly":[.0026,.0026,.0026],"h-witch|x-star":[.00722,.00722,.00722],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.15085,-3e-4],r:{"r-bob|h-bunny":[.935,.98,.935,.00261,-.00957],"r-bun|h-bunny":[.835,.895,.835,.00522,-.0087],"r-long|h-bunny":[1,.95,1,-.00261,-87e-5],"r-pony|h-bunny":[.85,.89,.85,.00261,.00696],"r-short|h-bunny":[.87,.985,.87,87e-5,-.01043],"r-spiky|h-bunny":[.82,1.035,.82,.00609,-.00783],"r-swept|h-bunny":[.92,.925,.92,87e-5,-.00783],"r-twin|h-bunny":[.895,.875,.895,.00435,.00957],"r-wave|h-bunny":[.995,.95,.995,0,-87e-5],"r-bob|h-cat":[.95,.95,.95,-.00174,-87e-5],"r-bun|h-cat":[.85,.965,.85,-.00696,.01043],"r-long|h-cat":[1,.92,1,.00435,-.00435],"r-pony|h-cat":[.85,.895,.85,87e-5,.00783],"r-short|h-cat":[.85,.96,.85,.00522,-.00522],"r-spiky|h-cat":[.835,1.055,.835,-.00348,-.00783],"r-swept|h-cat":[.935,.925,.935,87e-5,-.00609],"r-twin|h-cat":[1.105,.86,1.105,.00609,.01043],"r-wave|h-cat":[.995,.95,.995,0,-.00261],"r-bob|h-flowers":[.995,.875,.995,87e-5,87e-5],"r-bun|h-flowers":[.845,1.085,.845,-.00348,.00174],"r-long|h-flowers":[.94,1.105,.94,0,-.00174],"r-pony|h-flowers":[.855,1.075,.855,-87e-5,.00957],"r-short|h-flowers":[.895,1.09,.895,.00522,.00522],"r-spiky|h-flowers":[.955,.85,.955,0,-87e-5],"r-swept|h-flowers":[.985,.82,.985,.00348,0],"r-twin|h-flowers":[.915,1.075,.915,0,-.00174],"r-wave|h-flowers":[.94,1.085,.94,.00174,-.00174],"r-bob|x-cherry":[-.00387,-.0031,-.00162],"r-bun|x-cherry":[-.00355,-.00284,-.00148],"r-long|x-cherry":[-.00355,-.00284,-.00148],"r-pony|x-cherry":[-.00355,-.00284,-.00148],"r-short|x-cherry":[-.00355,-.00284,-.00148],"r-spiky|x-cherry":[-.00549,-.00439,-.00229],"r-swept|x-cherry":[-.00743,-.00593,-.0031],"r-twin|x-cherry":[-.00355,-.00284,-.00148],"r-wave|x-cherry":[-.00129,-.00103,-54e-5],"r-bob|x-flower":[93e-5,-82e-5,-4e-4],"r-bun|x-flower":[62e-5,-55e-5,-27e-5],"r-long|x-flower":[62e-5,-55e-5,-27e-5],"r-pony|x-flower":[62e-5,-55e-5,-27e-5],"r-short|x-flower":[62e-5,-55e-5,-27e-5],"r-spiky|x-flower":[.0031,-.00274,-.00134],"r-swept|x-flower":[.00465,-.00411,-.002],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00278,-.00249,-.00119],"r-bun|x-heart":[-.00247,-.00221,-.00106],"r-long|x-heart":[-.00247,-.00221,-.00106],"r-pony|x-heart":[-.00247,-.00221,-.00106],"r-short|x-heart":[-.00247,-.00221,-.00106],"r-spiky|x-heart":[-.0037,-.00331,-.00159],"r-swept|x-heart":[-.0071,-.00635,-.00305],"r-twin|x-heart":[-.00247,-.00221,-.00106],"r-wave|x-heart":[-.00154,-.00138,-66e-5],"r-bob|x-holly":[-.00775,-.00687,-.00329],"r-bun|x-holly":[-.00806,-.00715,-.00342],"r-long|x-holly":[-.00806,-.00715,-.00342],"r-pony|x-holly":[-.00806,-.00715,-.00342],"r-short|x-holly":[-.00806,-.00715,-.00342],"r-spiky|x-holly":[-.00899,-.00797,-.00382],"r-swept|x-holly":[-.01209,-.01072,-.00513],"r-twin|x-holly":[-.00775,-.00687,-.00329],"r-wave|x-holly":[-.00682,-.00605,-.0029],"r-bob|x-ribbon":[.965,.96,.965,-.00348,-.00435],"r-bun|x-ribbon":[.88,.895,.88,.00435,-.00435],"r-long|x-ribbon":[1.005,.95,1.005,0,0],"r-pony|x-ribbon":[.88,.89,.88,.00435,.00783],"r-short|x-ribbon":[.895,.95,.895,.00609,-.00435],"r-spiky|x-ribbon":[.845,1.06,.845,-.00435,-.00435],"r-swept|x-ribbon":[.945,.92,.945,.00348,0],"r-twin|x-ribbon":[.915,.925,.915,-.00348,.01043],"r-wave|x-ribbon":[.99,.95,.99,87e-5,-.00696],"r-bob|x-star":[-.0028,-.00246,-.00119],"r-bun|x-star":[-.00249,-.00219,-.00106],"r-long|x-star":[-.00249,-.00219,-.00106],"r-pony|x-star":[-.00249,-.00219,-.00106],"r-short|x-star":[-.00249,-.00219,-.00106],"r-spiky|x-star":[-.00373,-.00328,-.00159],"r-swept|x-star":[-.00716,-.00629,-.00304],"r-twin|x-star":[-.00249,-.00219,-.00106],"r-wave|x-star":[-.00156,-.00137,-66e-5],"r-bob|x-thaipin":[-.00555,-.00479,-.00274],"r-bun|x-thaipin":[-.00555,-.00479,-.00274],"r-long|x-thaipin":[-.00555,-.00479,-.00274],"r-pony|x-thaipin":[-.00555,-.00479,-.00274],"r-short|x-thaipin":[-.00555,-.00479,-.00274],"r-spiky|x-thaipin":[-.00709,-.00613,-.0035],"r-swept|x-thaipin":[-.01078,-.00932,-.00532],"r-twin|x-thaipin":[-.00524,-.00453,-.00259],"r-wave|x-thaipin":[-.00493,-.00426,-.00243]}},m:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00495,.00495,0],"h-beanie|x-star":[.00955,.00955,0],"h-beanie|x-thaipin":[.00606,.00606,.00606],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00849,.00849,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00693,.00693,.00693],"h-santa|x-holly":[.00318,.00318,0],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01588,.01588,.01588],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00693,.00693,.00693],"h-witch|x-holly":[.00354,.00354,0],"h-witch|x-star":[.00884,.00884,0],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.14879,-29e-5],r:{"r-bob|h-bunny":[.95,.98,.95,.00261,.0087],"r-bun|h-bunny":[.88,.865,.88,87e-5,-.00261],"r-long|h-bunny":[.985,.965,.985,-.00522,87e-5],"r-pony|h-bunny":[.855,.89,.855,.00348,-.00261],"r-short|h-bunny":[.885,.97,.885,0,-.00522],"r-spiky|h-bunny":[.835,1.065,.835,87e-5,-.00261],"r-swept|h-bunny":[.945,.92,.945,87e-5,.0087],"r-twin|h-bunny":[.91,.87,.91,87e-5,.0087],"r-wave|h-bunny":[1,.975,1,.00261,0],"r-bob|h-cat":[.95,.975,.95,.00261,-.00261],"r-bun|h-cat":[.845,.94,.845,-87e-5,-.0087],"r-long|h-cat":[1.005,.92,1.005,.00435,0],"r-pony|h-cat":[.85,.885,.85,.00261,.01043],"r-short|h-cat":[.855,.99,.855,87e-5,-.00609],"r-spiky|h-cat":[.83,1.04,.83,-87e-5,-.0087],"r-swept|h-cat":[.94,.925,.94,-87e-5,0],"r-twin|h-cat":[1.045,.885,1.045,-87e-5,.01043],"r-wave|h-cat":[1.01,.95,1.01,0,.00174],"r-bob|h-flowers":[1.005,.845,1.005,.00261,0],"r-bun|h-flowers":[.855,1.03,.855,0,.00174],"r-long|h-flowers":[.94,1.07,.94,87e-5,0],"r-pony|h-flowers":[.85,1.03,.85,0,.00348],"r-short|h-flowers":[.94,.89,.94,0,87e-5],"r-spiky|h-flowers":[.895,1.07,.895,.00174,.01043],"r-swept|h-flowers":[.915,1.06,.915,.00696,.00174],"r-twin|h-flowers":[.91,1.04,.91,0,0],"r-wave|h-flowers":[.95,1.085,.95,.00696,0],"r-bob|x-cherry":[-.00321,-.0026,-.00134],"r-bun|x-cherry":[-.00354,-.00286,-.00148],"r-long|x-cherry":[-.00354,-.00286,-.00148],"r-pony|x-cherry":[-.00354,-.00286,-.00148],"r-short|x-cherry":[-.00482,-.0039,-.00201],"r-spiky|x-cherry":[-.00482,-.0039,-.00201],"r-swept|x-cherry":[-.00739,-.00599,-.00309],"r-twin|x-cherry":[-.00321,-.0026,-.00134],"r-wave|x-cherry":[-.00129,-.00104,-54e-5],"r-bob|x-flower":[93e-5,-83e-5,-4e-4],"r-bun|x-flower":[31e-5,-28e-5,-13e-5],"r-long|x-flower":[31e-5,-28e-5,-13e-5],"r-pony|x-flower":[31e-5,-28e-5,-13e-5],"r-short|x-flower":[.00401,-.00359,-.00173],"r-spiky|x-flower":[.00401,-.00359,-.00173],"r-swept|x-flower":[.00463,-.00414,-.00199],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00276,-.0025,-.00118],"r-bun|x-heart":[-.00246,-.00223,-.00105],"r-long|x-heart":[-.00246,-.00223,-.00105],"r-pony|x-heart":[-.00246,-.00223,-.00105],"r-short|x-heart":[-.00399,-.00362,-.00171],"r-spiky|x-heart":[-.00399,-.00362,-.00171],"r-swept|x-heart":[-.00706,-.0064,-.00303],"r-twin|x-heart":[-.00246,-.00223,-.00105],"r-wave|x-heart":[-.00154,-.00139,-66e-5],"r-bob|x-holly":[-.00771,-.00692,-.00327],"r-bun|x-holly":[-.00802,-.0072,-.00341],"r-long|x-holly":[-.00802,-.0072,-.00341],"r-pony|x-holly":[-.00802,-.0072,-.00341],"r-short|x-holly":[-.00926,-.00831,-.00393],"r-spiky|x-holly":[-.00926,-.00831,-.00393],"r-swept|x-holly":[-.01203,-.0108,-.00511],"r-twin|x-holly":[-.00771,-.00692,-.00327],"r-wave|x-holly":[-.00648,-.00582,-.00275],"r-bob|x-ribbon":[.97,.95,.97,-.00261,-.00261],"r-bun|x-ribbon":[.855,.91,.855,.00261,-.00609],"r-long|x-ribbon":[1.01,.925,1.01,.00522,.00174],"r-pony|x-ribbon":[.885,.9,.885,.00261,.00783],"r-short|x-ribbon":[.89,.95,.89,.00435,-.00435],"r-spiky|x-ribbon":[.82,1.07,.82,-.00261,-.00522],"r-swept|x-ribbon":[.94,.92,.94,.00522,0],"r-twin|x-ribbon":[.935,.87,.935,0,.00696],"r-wave|x-ribbon":[.995,.95,.995,-87e-5,-.00696],"r-bob|x-star":[-.00279,-.00248,-.00118],"r-bun|x-star":[-.00248,-.0022,-.00105],"r-long|x-star":[-.00248,-.0022,-.00105],"r-pony|x-star":[-.00248,-.0022,-.00105],"r-short|x-star":[-.00433,-.00386,-.00184],"r-spiky|x-star":[-.00433,-.00386,-.00184],"r-swept|x-star":[-.00681,-.00606,-.00289],"r-twin|x-star":[-.00248,-.0022,-.00105],"r-wave|x-star":[-.00155,-.00138,-66e-5],"r-bob|x-thaipin":[-.00552,-.00483,-.00272],"r-bun|x-thaipin":[-.00552,-.00483,-.00272],"r-long|x-thaipin":[-.00552,-.00483,-.00272],"r-pony|x-thaipin":[-.00552,-.00483,-.00272],"r-short|x-thaipin":[-.00705,-.00618,-.00348],"r-spiky|x-thaipin":[-.00705,-.00618,-.00348],"r-swept|x-thaipin":[-.01073,-.0094,-.0053],"r-twin|x-thaipin":[-.00552,-.00483,-.00272],"r-wave|x-thaipin":[-.00491,-.0043,-.00242]}}};var kh={f:{c:[-6e-6,.150847,-302e-6],t:{"r-bob|h-bunny":[1,31,198,1,32,-747,1,33,-14701,2,31,2291,2,32,483,2,33,-11888,3,31,2e3,3,32,265,3,33,-12652,4,31,319,4,32,-2021,4,33,-21410,5,32,-10726,9,16,-182,9,17,-112,9,18,206,9,19,294,9,20,332,9,21,570,9,22,692,9,23,689,9,24,650,9,25,612,9,26,544,9,27,375,9,28,325,9,29,265,9,30,78,9,31,-48,9,32,-428,9,33,-978,9,34,-1463,9,35,-2399,10,32,-1309,10,33,-1292,10,34,-1483,10,35,-2176,11,34,-2232,11,35,-2059,12,34,-2811,12,35,-2030,13,35,-2138,14,35,-2228,15,35,-2115,16,35,-1986,17,35,-1934,18,35,-3050,19,35,-3252,20,35,-2156,21,35,-2054,22,35,-2162,23,34,-3016,23,35,-2097,24,34,-2089,24,35,-2034,25,32,-1315,25,33,-1243,25,34,-1385,25,35,-2167,26,17,-45,26,18,179,26,19,295,26,20,373,26,21,591,26,22,685,26,23,679,26,24,662,26,25,600,26,26,548,26,27,391,26,28,323,26,29,266,26,30,89,26,31,-29,26,32,-579,26,33,-1130,26,34,-1486,26,35,-2492,29,35,-2327,30,32,-10710,31,31,451,31,32,-1617,31,33,-21097,32,31,2114,32,32,487,32,33,-12618,33,31,2216,33,32,484,33,33,-11796,34,31,365,34,32,-716,34,33,-14627],"r-bob|h-cat":[0,35,-2224,1,29,3,1,30,544,1,35,-4525,2,29,895,2,30,1551,2,35,-2423,3,29,1869,3,30,2110,3,35,-1951,4,29,1890,4,30,2124,4,35,-1474,5,28,337,5,29,1544,5,30,627,5,35,-478,6,29,340,6,34,-1718,6,35,-501,7,33,-1834,7,34,-511,7,35,-1288,8,16,-2218,8,17,-2703,8,18,-2863,8,19,-397,8,20,-339,8,21,196,8,22,418,8,23,346,8,24,567,8,25,576,8,26,698,8,27,522,8,28,875,8,29,807,8,30,820,8,31,853,8,32,372,8,33,76,8,34,-254,8,35,-1378,9,16,-1518,9,17,-1448,9,18,374,9,19,192,9,20,217,9,21,522,9,22,845,9,23,863,9,24,945,9,25,1081,9,26,1205,9,27,936,9,28,1116,9,29,1168,9,30,843,9,31,863,9,32,41,9,33,-206,9,34,-521,9,35,-735,10,35,-1057,11,35,-909,12,35,-1742,13,35,-5198,14,35,-444,15,35,-48,16,35,-1765,17,35,-1590,18,35,-1891,20,35,-79,22,35,-1454,23,35,165,24,35,104,25,35,157,26,16,-1525,26,17,-1602,26,18,145,26,19,166,26,20,252,26,21,526,26,22,793,26,23,820,26,24,957,26,25,1021,26,26,1263,26,27,958,26,28,1170,26,29,1244,26,30,1089,26,31,789,26,32,364,26,33,-60,26,34,-528,26,35,-793,27,16,-2261,27,17,-2517,27,18,-941,27,19,-649,27,20,-229,27,21,220,27,22,299,27,23,476,27,24,544,27,25,536,27,26,867,27,27,566,27,28,693,27,29,729,27,30,761,27,31,813,27,32,415,27,33,39,27,34,-562,27,35,-514,28,33,-1425,28,34,-494,28,35,-564,29,29,421,29,34,-2088,29,35,-753,30,28,321,30,29,1684,30,30,1233,30,35,-280,31,29,1894,31,30,2067,31,35,-1652,32,29,1661,32,30,2079,32,35,-2220,33,29,1116,33,30,1470,33,35,-3490,34,29,-115,34,30,418,34,35,-3339,35,35,-2695],"r-bob|x-ribbon":[0,35,-933,1,35,-3194,2,35,-330,3,35,-2187,4,35,-815,5,35,-833,6,35,-968,7,35,-791,8,29,247,8,30,41,8,31,191,8,32,263,8,33,-261,8,34,-504,8,35,-448,9,16,-1920,9,17,-1932,9,18,-722,9,19,-301,9,20,-65,9,21,294,9,22,547,9,23,638,9,24,791,9,25,924,9,26,1026,9,27,911,9,28,1143,9,29,1283,9,30,1084,9,31,1024,9,32,544,9,33,58,9,34,-190,9,35,-739,10,34,-1334,10,35,-1203,11,35,-633,12,35,-945,13,35,-2136,14,35,-2101,15,35,-2049,16,35,-538,17,35,-1105,18,35,-2182,19,35,-978,21,35,-1024,22,35,-2540,23,35,-911,24,35,-814,25,34,-1185,25,35,-752,26,16,-2060,26,17,-2047,26,18,-439,26,19,-149,26,20,-26,26,21,283,26,22,573,26,23,622,26,24,796,26,25,896,26,26,1161,26,27,1057,26,28,1111,26,29,1212,26,30,1159,26,31,1054,26,32,633,26,33,209,26,34,-115,26,35,-833,27,27,-166,27,28,656,27,29,744,27,30,138,27,31,341,27,32,124,27,33,-295,27,34,-607,27,35,-655,28,27,93,28,28,957,28,29,1075,28,30,794,28,31,-771,28,35,-325,29,27,-252,29,28,887,29,29,1049,29,30,721,29,31,-862,29,35,-856,30,28,-1367,30,29,492,30,30,842,30,31,371,30,32,-1507,30,35,-1872,31,29,784,31,30,1073,31,31,778,31,32,-876,31,35,-278,32,29,594,32,30,977,32,31,605,32,32,-754,32,35,-204,33,29,162,33,30,385,33,31,162,33,32,-1631,34,29,-1213,34,30,-746,34,31,-849,34,35,-2231,35,35,-2111],"r-bun|h-bunny":[1,31,1339,1,32,1444,1,33,-8568,2,31,3965,2,32,2678,2,33,-7027,3,31,3622,3,32,2842,3,33,-7619,4,31,1880,4,32,637,4,33,-11998,5,32,-7457,9,16,233,9,17,339,9,18,-655,9,19,841,9,20,745,9,21,823,9,22,889,9,23,954,9,24,875,9,25,886,9,26,633,9,27,521,9,28,425,9,29,47,9,30,-92,9,31,-319,9,32,3547,9,33,5270,9,34,5517,9,35,5337,10,32,3134,10,33,5380,10,34,5968,10,35,5970,11,34,6009,11,35,5561,12,34,4680,12,35,5912,13,35,6489,14,35,6817,15,35,6214,16,35,6253,17,35,5894,18,35,5071,19,35,6081,20,35,6454,21,35,7039,22,35,6551,23,34,5930,23,35,6862,24,34,6222,24,35,6655,25,32,2935,25,33,5578,25,34,5772,25,35,5943,26,17,233,26,18,-479,26,19,693,26,20,715,26,21,864,26,22,894,26,23,926,26,24,884,26,25,880,26,26,667,26,27,509,26,28,423,26,29,27,26,30,-108,26,31,-257,26,32,3383,26,33,5250,26,34,5220,26,35,5183,30,32,-6988,31,31,1961,31,32,704,31,33,-12612,32,31,3681,32,32,2907,32,33,-7647,33,31,3837,33,32,2603,33,33,-6926,34,31,1694,34,32,1512,34,33,-8521],"r-bun|h-cat":[0,35,3748,1,29,649,1,30,754,1,34,2834,1,35,3874,2,29,925,2,30,1055,2,34,3707,2,35,3790,3,29,1140,3,30,1260,3,34,3780,3,35,3758,4,29,1184,4,30,1210,4,34,3802,4,35,3874,5,29,1086,5,30,605,5,34,4115,5,35,3870,6,33,1425,6,34,4032,7,31,-582,7,32,-556,7,33,2832,7,34,3452,8,16,-12,8,17,-171,8,18,-625,8,19,-607,8,20,653,8,21,699,8,22,737,8,23,730,8,24,667,8,25,588,8,26,422,8,27,282,8,28,132,8,29,62,8,30,-72,8,31,-462,8,32,-554,8,33,2538,27,16,-74,27,17,-170,27,18,-618,27,19,-608,27,20,641,27,21,678,27,22,725,27,23,706,27,24,636,27,25,581,27,26,438,27,27,282,27,28,130,27,29,19,27,30,-79,27,31,-263,27,32,-251,27,33,2643,28,30,-822,28,31,-265,28,32,-31,28,33,2888,28,34,3553,29,33,2192,29,34,3959,29,35,3628,30,29,1311,30,30,631,30,34,3848,30,35,3701,31,29,1276,31,30,1335,31,34,3788,31,35,3359,32,29,1172,32,30,1282,32,31,-4760,32,34,3387,32,35,3656,33,29,936,33,30,1090,33,34,3359,33,35,4314,34,29,699,34,30,847,34,34,2794,34,35,3801,35,34,3113,35,35,3939],"r-bun|h-flowers":[0,24,1121,0,25,2023,0,26,1131,0,27,-241,1,25,2233,2,24,1407,2,25,2474,2,26,1204,2,27,-1102,3,24,1503,3,25,2448,3,26,1730,3,27,-750,4,24,1873,4,25,2255,5,23,-764,5,24,2727,5,25,1998,5,26,1100,6,23,2,6,24,2525,6,25,2037,6,26,-55,7,23,-597,7,24,2155,7,25,1813,7,26,-1314,8,23,-271,8,24,1423,8,25,1085,8,26,-461,9,24,180,9,25,35,10,24,213,10,25,127,11,24,-156,11,25,300,12,24,102,12,25,337,13,24,-2518,13,25,911,14,25,348,15,25,-181,16,25,-26,17,25,-1642,18,25,-1840,19,25,-29,20,25,-134,21,25,272,22,24,-2560,22,25,893,23,24,79,23,25,443,24,24,-128,24,25,349,25,24,301,25,25,133,26,24,-29,26,25,85,27,23,163,27,24,1892,27,25,1196,27,26,107,28,23,-467,28,24,2343,28,25,2002,28,26,-777,29,23,-532,29,24,2760,29,25,1920,29,26,236,30,23,-630,30,24,2626,30,25,2083,30,26,843,31,24,1828,31,25,2277,32,24,1530,32,25,2341,32,26,1893,32,27,-845,33,24,1410,33,25,2232,33,26,1511,33,27,-1168,34,25,2172,35,24,990,35,25,2245,35,26,1617,35,27,370],"r-bun|x-cherry":[5,24,-536,5,25,-499,6,24,-148,6,25,-161,6,26,-1197,6,27,-1318,7,23,-1941,7,24,-141,7,25,-175,7,26,-1301,7,27,-1409],"r-bun|x-ribbon":[0,35,5594,1,35,-951,2,35,-946,3,35,3241,4,35,5349,5,35,2738,6,35,5098,7,35,5233,8,31,-1598,8,32,-3596,8,33,5556,8,34,5454,8,35,5871,9,16,-596,9,17,-316,9,18,-1932,9,19,115,9,20,-117,9,21,203,9,22,278,9,23,258,9,24,284,9,25,514,9,26,283,9,27,274,9,28,39,9,29,77,9,30,131,9,31,-82,9,32,1687,9,33,6480,9,34,5972,9,35,5935,10,34,5390,10,35,6149,11,35,6508,12,35,6743,13,35,6366,14,35,-987,15,35,7340,16,35,-348,17,35,5496,18,35,5633,19,35,1303,20,35,5914,21,35,-13628,22,35,5704,23,35,6126,24,35,6438,25,34,3985,25,35,5667,26,17,-311,26,18,-1451,26,19,-269,26,20,22,26,21,156,26,22,278,26,23,290,26,24,203,26,25,519,26,26,342,26,27,497,26,28,72,26,29,240,26,30,290,26,31,296,26,32,901,26,33,7486,26,34,5841,26,35,6468,27,27,-958,27,28,111,27,29,-572,27,30,-891,27,31,-1448,27,32,-2336,27,33,6293,27,34,5097,27,35,6421,28,27,1006,28,28,1969,28,29,2066,28,30,1316,28,31,205,28,35,6477,29,28,1558,29,29,2058,29,30,1803,29,31,636,29,35,5957,30,29,977,30,30,1819,30,31,1642,30,32,-230,30,35,5545,31,29,1369,31,30,2e3,31,31,1770,31,32,254,31,35,5940,32,29,1215,32,30,1830,32,31,1598,32,32,225,32,35,-2430,33,29,439,33,30,1323,33,31,1166,33,32,-430,34,29,-1781,34,30,243,34,31,298,34,32,-2832,34,35,-755,35,35,5066],"r-long|h-bunny":[0,31,-10223,0,35,1257,1,30,1749,1,31,1493,1,32,-8092,1,35,-384,2,30,3004,2,31,1969,2,32,-6997,2,35,567,3,30,2307,3,31,1074,3,32,-8217,3,35,1677,4,30,-1131,4,31,-2218,4,32,-13564,4,35,295,5,35,-1152,6,34,-1492,6,35,-363,7,33,-979,7,34,-548,7,35,-987,8,16,-916,8,17,-923,8,18,-423,8,19,-211,8,20,-405,8,21,-343,8,22,236,8,23,227,8,24,-242,8,25,44,8,26,274,8,27,267,8,28,617,8,29,736,8,30,971,8,31,661,8,32,369,8,33,190,8,34,-263,8,35,-1160,9,16,117,9,17,146,9,18,652,9,19,572,9,20,272,9,21,226,9,22,870,9,23,737,9,24,347,9,25,372,9,26,607,9,27,436,9,28,701,9,29,958,9,30,549,9,31,669,9,32,90,9,33,-154,9,34,-493,9,35,-950,10,35,-1546,11,35,-1951,12,35,-1241,13,35,-3046,14,35,-767,16,35,-857,17,35,-1454,18,35,-2115,19,35,-387,20,35,-463,21,35,-1635,22,35,-1851,23,35,-3988,24,35,-1713,25,35,-1420,26,16,-60,26,17,142,26,18,742,26,19,598,26,20,160,26,21,334,26,22,778,26,23,703,26,24,388,26,25,426,26,26,591,26,27,444,26,28,793,26,29,862,26,30,791,26,31,720,26,32,447,26,33,-51,26,34,-444,26,35,-1168,27,16,-1007,27,17,-691,27,18,-431,27,19,-159,27,20,-427,27,21,-300,27,22,92,27,23,178,27,24,-183,27,25,-68,27,26,431,27,27,192,27,28,661,27,29,696,27,30,713,27,31,797,27,32,220,27,33,131,27,34,-447,27,35,686,28,33,-1385,28,34,-363,28,35,1993,29,34,-976,29,35,2091,30,35,1239,31,30,-1117,31,31,-2070,31,32,-13514,31,35,1549,32,30,2468,32,31,1191,32,32,-7878,32,35,1558,33,30,2887,33,31,1820,33,32,-6947,33,35,1190,34,30,2030,34,31,1493,34,32,-8336,34,35,-160,35,31,-9648,35,35,-6118],"r-long|h-cat":[0,35,4057,1,29,-711,1,30,-90,1,35,9614,2,29,1897,2,30,2671,2,35,1899,3,29,3531,3,30,4268,3,35,8171,4,28,-5837,4,29,3507,4,30,3589,4,35,11450,5,28,943,5,29,2771,5,30,-11293,5,35,-5947,6,28,-1180,6,29,374,6,35,8639,7,34,2971,7,35,5572,8,25,-1714,8,26,-1330,8,27,-771,8,28,-426,8,29,587,8,30,449,8,31,164,8,32,433,8,33,-1406,8,34,1508,8,35,-2404,9,16,-504,9,17,202,9,18,259,9,19,334,9,20,-185,9,21,-43,9,22,530,9,23,303,9,24,23,9,25,1021,9,26,1264,9,27,887,9,28,812,9,29,919,9,30,775,9,31,955,9,32,389,9,33,408,9,34,-546,9,35,-379,10,33,-2357,10,34,-205,10,35,-1035,11,34,-84,11,35,-495,12,35,-841,13,35,-4947,14,35,524,15,35,-4894,16,35,-69,17,35,-1142,18,35,-1751,19,35,-5216,20,35,-324,21,35,-2565,22,35,-816,23,35,1002,24,35,635,25,33,-2492,25,34,-663,25,35,-540,26,17,-121,26,18,313,26,19,233,26,20,-79,26,21,-58,26,22,380,26,23,388,26,24,14,26,25,831,26,26,1434,26,27,772,26,28,987,26,29,879,26,30,907,26,31,1030,26,32,629,26,33,268,26,34,-81,26,35,-1822,27,25,-1959,27,26,-1077,27,27,-998,27,28,-421,27,29,472,27,30,36,27,31,659,27,32,-566,27,33,-90,27,34,-1279,27,35,4365,28,34,-1763,28,35,7814,29,28,-1060,29,29,362,29,35,9733,30,28,969,30,29,3276,30,30,-13358,30,35,9343,31,28,-4085,31,29,3679,31,30,3977,31,35,10075,32,29,3272,32,30,3688,32,35,3646,33,29,1653,33,30,2273,33,35,3369,34,29,-632,34,30,178,34,35,3066,35,35,-6883],"r-long|h-flowers":[0,24,-399,0,25,693,0,26,-601,1,24,-235,1,25,871,2,23,-2633,2,24,361,2,25,604,2,26,-778,3,23,-2283,3,24,395,3,25,571,3,26,-490,4,24,629,4,25,351,5,23,-683,5,24,428,5,25,100,5,26,-1006,6,23,-402,6,24,606,6,25,-360,6,26,-1519,7,23,-913,7,24,449,7,25,-1291,8,23,-502,8,24,375,8,25,-759,8,26,-1797,9,24,437,9,25,-1948,10,24,261,10,25,-682,11,24,100,11,25,-559,12,24,43,12,25,-232,13,24,-1,13,25,-217,14,24,8,14,25,-159,15,24,-178,15,25,-49,16,24,-324,16,25,-86,17,24,-395,17,25,-12,18,24,-303,18,25,28,19,24,-333,19,25,-158,20,24,-187,20,25,-7,21,24,-13,21,25,-173,22,24,7,22,25,-216,23,24,54,23,25,-227,24,24,116,24,25,-574,25,24,287,25,25,-689,26,24,433,26,25,-1974,27,23,-455,27,24,359,27,25,-771,27,26,-1816,28,23,-1008,28,24,595,28,25,-1219,29,23,-380,29,24,505,29,25,-418,29,26,-1423,30,23,-707,30,24,443,30,25,134,30,26,-1216,31,24,565,31,25,309,32,23,-2193,32,24,377,32,25,370,32,26,-418,33,23,-3031,33,24,254,33,25,607,33,26,-591,34,24,-306,34,25,725,35,24,-575,35,25,871,35,26,-344],"r-long|x-ribbon":[0,35,209,1,35,626,2,35,44,3,35,563,4,35,234,5,35,-900,6,34,-2817,6,35,1421,7,33,-2007,7,34,-580,7,35,751,8,16,-1379,8,17,-1197,8,18,-730,8,19,-746,8,20,-907,8,21,-699,8,22,155,8,23,111,8,24,-284,8,25,-59,8,26,247,8,27,160,8,28,630,8,29,909,8,30,877,8,31,721,8,32,372,8,33,72,8,34,-389,8,35,-1329,9,16,350,9,17,405,9,18,873,9,19,820,9,20,407,9,21,409,9,22,808,9,23,698,9,24,316,9,25,295,9,26,552,9,27,439,9,28,526,9,29,605,9,30,438,9,31,370,9,32,-157,9,33,-361,9,34,-1434,9,35,-2103,26,17,405,26,18,955,26,19,760,26,20,464,26,21,478,26,22,708,26,23,694,26,24,347,26,25,275,26,26,560,26,27,395,26,28,656,26,29,584,26,30,475,26,31,441,26,32,90,26,33,-456,26,34,-1117,26,35,-2382,27,17,-1234,27,18,-950,27,19,-675,27,20,-970,27,21,-692,27,22,72,27,23,122,27,24,-259,27,25,-129,27,26,231,27,27,214,27,28,765,27,29,838,27,30,726,27,31,811,27,32,249,27,33,-33,27,34,-216,27,35,858,28,26,-3089,28,27,-154,28,28,605,28,29,679,28,30,100,28,33,-925,28,34,-538,28,35,2504,29,27,-336,29,28,585,29,29,653,29,30,154,29,34,-1493,29,35,1985,30,28,-393,30,29,238,30,30,445,30,31,-183,30,35,2033,31,28,-1433,31,29,453,31,30,667,31,31,174,31,32,-2442,31,35,539,32,28,-1087,32,29,298,32,30,571,32,31,174,32,32,-2154,32,35,1191,33,28,-1804,33,29,-318,33,30,-43,33,31,-471,33,32,-1877,33,35,-1995,34,29,-1463,34,30,-994,34,31,-1461,34,35,-439,35,35,-6090],"r-pony|h-bunny":[0,31,-1348,0,32,-5019,0,35,-101,1,30,2617,1,31,2587,1,32,-1407,1,35,-79,2,30,3208,2,31,2979,2,32,-1130,2,35,329,3,30,2720,3,31,2615,3,32,-1489,3,34,9,3,35,17,4,31,-575,4,32,-4960,4,34,203,4,35,343,5,34,241,5,35,222,6,33,-141,6,34,182,6,35,-63,7,31,-249,7,32,141,7,33,143,7,34,93,7,35,-927,8,16,57,8,17,-104,8,18,-632,8,19,-677,8,20,554,8,21,522,8,22,542,8,23,391,8,24,577,8,25,638,8,26,647,8,27,504,8,28,400,8,29,416,8,30,288,8,31,292,8,32,160,8,33,26,8,34,-98,9,16,-225,9,17,-342,9,18,-925,9,19,3,9,20,312,9,21,175,9,22,238,9,23,196,9,24,46,26,17,-366,26,18,-947,26,19,222,26,20,183,26,21,168,26,22,75,26,23,71,26,24,-369,27,17,-142,27,18,-634,27,19,-674,27,20,528,27,21,479,27,22,419,27,23,300,27,24,-12,27,25,282,27,26,369,27,27,439,27,28,432,27,29,275,27,30,63,27,31,164,27,32,229,27,33,290,27,34,257,28,31,-176,28,32,386,28,33,478,28,34,475,28,35,-426,29,33,361,29,34,454,29,35,-7,30,34,348,30,35,69,31,31,-493,31,32,-4737,31,34,5,31,35,42,32,30,2574,32,31,2563,32,32,-1544,32,34,-319,32,35,23,33,30,3055,33,31,2859,33,32,-1168,33,35,3,34,30,2716,34,31,2623,34,32,-1427,34,35,-118,35,31,-1757,35,32,-5577,35,35,-173],"r-pony|h-cat":[0,35,-12,1,29,1238,1,30,1357,1,35,-62,2,29,1526,2,30,1646,2,35,417,3,29,1741,3,30,1853,3,34,250,3,35,52,4,29,1777,4,30,1792,4,34,74,4,35,61,5,28,1292,5,29,1610,5,30,776,5,34,335,5,35,321,6,33,-88,6,34,256,6,35,-157,7,31,-70,7,32,227,7,33,194,7,34,115,8,16,46,8,17,-115,8,18,-630,8,19,-661,8,20,579,8,21,545,8,22,555,8,23,436,8,24,604,8,25,690,8,26,706,8,27,561,8,28,474,8,29,463,8,30,344,8,31,346,8,32,239,8,33,133,8,34,-314,9,16,-396,9,17,-531,9,18,-1107,9,19,17,9,20,126,9,21,169,26,17,-761,26,18,-1119,26,19,26,26,20,64,26,21,87,27,17,-138,27,18,-644,27,19,-667,27,20,543,27,21,518,27,22,458,27,23,316,27,24,146,27,25,300,27,26,405,27,27,490,27,28,489,27,29,331,27,30,118,27,31,232,27,32,318,27,33,312,27,34,45,28,31,215,28,32,454,28,33,581,28,34,570,28,35,-1509,29,33,372,29,34,538,29,35,-57,30,28,1578,30,29,1896,30,30,816,30,34,450,30,35,76,31,29,1869,31,30,1911,31,34,246,31,35,84,32,29,1759,32,30,1805,32,34,-78,32,35,78,33,29,1540,33,30,1674,33,35,52,34,29,1298,34,30,1483,34,35,39,35,35,-108],"r-pony|h-flowers":[0,24,322,0,25,1216,0,26,-37,1,24,266,1,25,1683,2,24,936,2,25,1441,2,26,135,3,24,832,3,25,1467,3,26,153,4,24,1603,4,25,1346,5,23,-878,5,24,1905,5,25,1063,5,26,-38,6,24,1849,6,25,1456,7,23,-161,7,24,1726,7,25,1322,7,26,-195,8,23,-1335,8,24,1215,8,25,869,8,26,-1172,9,24,-332,9,25,-134,10,24,-312,10,25,-7,11,24,-171,11,25,594,12,25,-258,13,25,3095,14,25,7127,14,26,3431,15,25,7664,15,26,5233,16,25,7456,16,26,5619,17,25,5772,17,26,2740,18,25,222,18,26,-1276,19,25,268,19,26,-1310,20,25,617,20,26,-967,21,25,585,21,26,-1062,22,25,387,23,25,466,24,24,-286,24,25,400,25,24,-350,25,25,163,26,24,-649,26,25,-208,27,23,-1394,27,24,1360,27,25,1058,27,26,-157,28,23,-168,28,24,2116,28,25,1443,28,26,-430,29,24,1778,29,25,1371,29,26,-1063,30,23,-947,30,24,1742,30,25,1085,30,26,108,31,24,1562,31,25,1274,32,24,1086,32,25,1232,32,26,57,33,24,840,33,25,1448,33,26,428,34,24,281,34,25,1322,35,24,128,35,25,1519,35,26,314],"r-short|h-bunny":[1,32,-193,1,33,-8976,2,31,1964,2,32,1978,2,33,-7382,3,31,2467,3,32,1821,3,33,-8704,4,31,-253,4,32,13,4,33,-14734,5,32,-11262,9,16,-463,9,17,-1336,9,18,890,9,19,440,9,20,563,9,21,780,9,22,760,9,23,645,9,24,655,9,25,539,9,26,550,9,27,-80,9,28,-275,9,29,-1092,9,30,-1334,9,31,-1377,9,32,-1840,9,33,-190,9,34,-279,9,35,-1260,10,31,-4027,10,32,-2413,10,33,-616,10,34,271,10,35,-138,11,34,-369,11,35,-11,12,34,-1354,12,35,148,13,35,300,14,35,-147,15,35,-840,16,35,412,17,35,615,18,35,-822,19,35,324,20,35,-694,21,35,1094,22,35,1339,23,34,-1155,23,35,1601,24,34,-221,24,35,634,25,31,-3314,25,32,-1447,25,33,-491,25,34,509,25,35,219,26,16,-621,26,17,-981,26,18,642,26,19,569,26,20,510,26,21,895,26,22,699,26,23,631,26,24,650,26,25,593,26,26,805,26,27,-144,26,28,-422,26,29,-890,26,30,-1535,26,31,-1268,26,32,-606,26,33,-384,26,34,-140,26,35,-1043,30,32,-11590,31,31,-468,31,32,299,31,33,-14930,32,31,2650,32,32,1810,32,33,-8201,33,31,1822,33,32,1822,33,33,-7532,34,32,-505,34,33,-8720],"r-short|h-cat":[0,35,398,1,30,-152,1,31,63,1,35,-188,2,30,925,2,31,1154,2,35,-1782,3,30,1939,3,31,1901,3,35,-1624,4,30,2022,4,31,2064,4,35,1265,5,29,588,5,30,1934,5,31,-985,5,35,3175,6,29,-71,6,30,-517,6,35,-2064,7,35,2339,8,30,-2606,8,31,-2746,8,32,-2531,8,33,880,8,34,1164,8,35,2552,9,16,194,9,17,-488,9,18,713,9,19,869,9,20,921,9,21,952,9,22,1007,9,23,1007,9,24,801,9,25,778,9,26,838,9,27,122,9,28,-165,9,29,-559,9,30,-1085,9,31,-1467,9,32,-1789,9,33,71,9,34,294,9,35,313,10,33,-2097,10,34,238,10,35,306,11,34,-1765,11,35,353,12,35,-188,13,35,206,14,35,-2750,15,35,91,16,35,161,17,35,372,18,35,-1050,19,35,-857,20,35,508,21,35,13,22,35,-89,23,35,776,24,34,-792,24,35,173,25,33,-1666,25,34,128,25,35,548,26,17,-97,26,18,656,26,19,981,26,20,869,26,21,1003,26,22,991,26,23,947,26,24,801,26,25,938,26,26,858,26,27,94,26,28,-211,26,29,-779,26,30,-1024,26,31,-1414,26,32,-734,26,33,193,26,34,251,26,35,398,27,30,-2504,27,31,-2891,27,32,-2026,27,33,-217,27,34,-101,27,35,66,28,35,-734,29,29,353,29,30,601,29,35,73,30,29,935,30,30,1713,30,31,-2549,30,35,-13939,31,30,1714,31,31,1411,32,30,1439,32,31,1303,32,35,-8378,33,30,583,33,31,713,34,30,-19,34,31,193,34,35,-8269,35,35,-242],"r-short|h-flowers":[0,24,-559,0,25,454,0,26,-489,0,27,-2185,1,25,650,2,24,-298,2,25,879,2,26,-624,3,24,-116,3,25,873,3,26,-456,4,24,313,4,25,708,5,23,-2373,5,24,590,5,25,625,5,26,-554,6,24,784,6,25,703,6,26,-1748,7,23,-2194,7,24,769,7,25,480,7,26,-2250,8,23,-2688,8,24,83,8,25,-158,8,26,-1692,9,24,-903,9,25,-200,10,24,-460,10,25,-58,11,24,-1543,11,25,259,12,25,-104,14,25,-121,15,25,306,15,26,-932,16,25,307,16,26,-606,17,25,207,17,26,-507,18,25,297,18,26,-490,19,25,229,19,26,-480,20,25,304,20,26,-874,21,25,-87,22,25,-15,23,25,-162,24,24,-1021,24,25,191,25,24,-547,25,25,-51,26,24,-660,26,25,-252,27,23,-2222,27,24,360,27,25,36,27,26,-1165,28,23,-1881,28,24,973,28,25,637,28,26,-1689,29,24,672,29,25,604,29,26,-1599,30,23,-2423,30,24,738,30,25,616,30,26,-722,31,24,297,31,25,679,32,24,-113,32,25,737,32,26,-363,33,24,-238,33,25,644,33,26,-459,34,25,605,35,24,-667,35,25,645,35,26,-93,35,27,-1274],"r-short|x-ribbon":[0,35,-41,2,35,-2053,3,35,-1128,4,35,1752,5,35,1191,6,35,51,7,35,890,8,31,-3271,8,32,-2733,8,33,423,8,34,57,8,35,3640,9,16,-1030,9,17,-686,9,18,-1856,9,19,167,9,20,3,9,21,131,9,22,155,9,23,320,9,24,117,9,25,298,9,26,328,9,27,-203,9,28,-302,9,29,-917,9,30,-1153,9,31,-1239,9,32,-1508,9,33,879,9,34,550,9,35,796,10,34,-458,10,35,973,11,35,614,12,35,174,13,35,5151,14,35,1346,15,35,465,16,35,3052,17,35,-339,18,35,2959,19,35,1265,20,35,-2969,21,35,677,22,35,-1427,23,35,1190,24,35,3434,25,34,-1135,25,35,4310,26,17,-1031,26,18,-1537,26,19,409,26,20,-96,26,21,182,26,22,122,26,23,344,26,24,144,26,25,343,26,26,444,26,27,368,26,28,182,26,29,-650,26,30,-943,26,31,-1079,26,32,-476,26,33,726,26,34,35,26,35,4876,27,27,-2804,27,28,-1140,27,29,-2032,27,30,-2424,27,31,-3262,27,32,-1946,27,33,147,27,34,-229,27,35,2828,28,27,-931,28,28,680,28,29,909,28,30,213,28,31,-778,28,35,789,29,28,110,29,29,837,29,30,683,29,31,-289,29,35,2406,30,29,-719,30,30,348,30,31,290,30,32,-1303,30,35,-3121,31,29,-268,31,30,661,31,31,596,31,32,-852,31,35,221,32,29,-420,32,30,550,32,31,375,32,32,-600,32,35,822,33,29,-1347,33,30,-145,33,31,-71,33,32,-1616,34,30,-1265,34,31,-1252,34,32,-3154,34,35,280,35,35,-70],"r-spiky|h-bunny":[1,32,1048,1,33,-698,2,32,2498,2,33,267,3,32,2333,3,33,288,4,32,1312,4,33,-1798,5,32,-8105,7,35,-5334,8,35,-5235,9,16,640,9,17,504,9,18,280,9,19,243,9,20,149,9,21,2320,9,22,2231,9,23,2055,9,24,1404,9,25,749,9,26,-1384,9,27,-1687,9,28,-74,9,29,240,9,30,591,9,31,918,9,32,1156,9,33,2047,9,34,1888,9,35,1602,10,33,-3543,10,34,-3294,10,35,-4760,11,34,-4882,11,35,2003,12,35,891,13,35,2106,14,35,2030,15,35,2228,16,35,2078,17,35,2242,18,35,1533,19,35,1655,20,35,-4969,21,35,2051,22,35,1892,23,35,1965,24,34,-4895,24,35,1753,25,33,-3070,25,34,-3070,25,35,1993,26,17,517,26,18,293,26,19,251,26,20,79,26,21,2316,26,22,2263,26,23,2011,26,24,1404,26,25,627,26,26,-1289,26,27,-1705,26,28,-31,26,29,261,26,30,617,26,31,979,26,32,1118,26,33,2095,26,34,1852,26,35,1669,27,35,-5289,28,35,1165,30,32,-8098,31,32,973,31,33,-1713,32,32,2363,32,33,77,33,32,2478,33,33,280,34,32,931,34,33,-697,35,35,2331],"r-spiky|h-cat":[1,31,-538,2,31,347,3,30,-330,3,31,390,4,30,-244,4,31,471,5,30,-98,5,31,400,6,30,53,6,31,-890,6,35,1463,8,34,-4791,8,35,-4799,9,16,274,9,17,135,9,18,-25,9,19,-44,9,20,-122,9,21,2176,9,22,2131,9,23,1946,9,24,1347,9,25,770,9,26,-1238,9,27,-1578,9,28,208,9,29,517,9,30,942,9,31,1228,9,32,1513,9,33,2491,9,34,2457,9,35,2104,10,32,-4312,10,33,-3125,10,34,-2856,10,35,-4314,11,34,-4439,11,35,2439,12,35,-4403,13,35,2450,14,35,2271,15,35,1595,16,35,2735,17,35,2882,18,35,1962,19,35,2100,20,35,-4357,21,35,2502,22,35,2403,23,35,2480,24,34,-4543,24,35,1184,25,33,-2661,25,34,-2641,25,35,2440,26,16,252,26,17,142,26,18,-13,26,19,-31,26,20,-106,26,21,2193,26,22,2113,26,23,1988,26,24,1385,26,25,594,26,26,-1220,26,27,-1539,26,28,221,26,29,511,26,30,908,26,31,1269,26,32,1535,26,33,2504,26,34,2325,26,35,2109,27,35,-4806,28,35,1766,29,30,27,29,31,-1280,29,35,1246,30,30,-101,30,31,381,31,30,-236,31,31,464,31,32,-5685,32,30,-352,32,31,390,32,32,-3447,33,31,302,33,35,2624,34,31,-583,35,35,2769],"r-spiky|h-flowers":[0,22,-1584,0,23,568,0,24,1002,0,25,584,1,23,678,1,24,899,2,22,-2002,2,23,572,2,24,927,2,25,410,3,22,-868,3,23,776,3,24,1008,3,25,579,4,23,1025,5,22,-610,5,23,871,5,24,768,6,22,-1200,6,23,669,6,24,580,7,22,-256,7,23,788,7,24,-954,8,22,-177,8,23,661,8,24,-602,9,23,659,9,24,-1886,10,23,541,11,23,765,12,23,248,13,23,-2013,14,23,-1930,15,23,-1970,16,23,-1978,16,24,-2421,17,23,-1982,17,24,-2389,18,23,-1979,18,24,-2374,19,23,-1968,19,24,-2409,20,23,-1980,21,23,-1930,22,23,-1997,23,23,343,24,23,724,25,23,556,26,23,685,26,24,-1878,27,22,-120,27,23,753,27,24,-699,28,22,-216,28,23,828,28,24,-990,29,22,-936,29,23,594,29,24,161,30,22,-727,30,23,970,30,24,710,31,23,741,32,22,-1105,32,23,577,32,24,947,32,25,527,33,22,-1563,33,23,786,33,24,574,33,25,-137,34,23,862,34,24,693,35,22,-1544,35,23,502,35,24,998,35,25,981],"r-spiky|x-ribbon":[0,35,2058,2,35,1762,3,35,3450,4,35,4014,5,35,3668,6,35,3187,7,35,4858,8,32,810,8,33,2410,8,34,2146,8,35,-2257,9,16,310,9,17,109,9,18,-229,9,19,-5,9,20,-182,9,21,2742,9,22,2175,9,23,2235,9,24,1388,9,25,562,9,26,-1580,9,27,-1945,9,28,128,9,29,677,9,30,1247,9,31,1696,9,32,2199,9,33,3496,9,34,3604,9,35,6649,10,34,-8954,10,35,-12696,11,35,8813,12,35,-7233,13,35,7187,14,35,2241,15,35,-4958,16,35,6707,17,35,5451,18,35,6127,19,35,3998,20,35,-13072,21,35,930,22,35,5369,23,35,3970,24,35,4529,25,34,-10190,25,35,7152,26,16,259,26,17,92,26,18,-82,26,19,-91,26,20,-783,26,21,3298,26,22,2146,26,23,2037,26,24,1370,26,25,582,26,26,-1828,26,27,-1857,26,28,533,26,29,970,26,30,1515,26,31,1880,26,32,2116,26,33,3565,26,34,2922,26,35,5465,27,28,-2330,27,29,-1,27,30,984,27,31,603,27,32,394,27,33,3113,27,34,2437,27,35,52,28,28,-957,28,29,271,28,30,1335,28,31,1505,28,32,-5053,28,35,3572,29,28,-1886,29,29,-414,29,30,992,29,31,248,29,32,-1902,29,35,2113,30,30,-1819,30,31,387,30,32,339,30,35,1013,31,30,-854,31,31,824,31,32,838,31,33,-576,31,35,2193,32,30,-1190,32,31,638,32,32,594,32,33,-514,32,35,505,33,30,-1612,33,31,52,33,32,117,33,33,-782,33,35,1669,34,30,-3828,34,31,-1914,34,32,-2138,34,35,3072,35,35,3455],"r-swept|h-bunny":[0,35,-2447,1,31,1839,1,32,-1024,2,31,3632,2,32,-521,2,33,-21555,3,31,3053,3,32,-1256,3,33,-23247,3,35,-1812,4,31,645,4,32,-3506,5,35,-2708,6,35,-1261,7,35,-2238,8,33,-1148,8,34,-1185,8,35,-393,9,16,-1551,9,17,-2183,9,18,260,9,19,99,9,20,305,9,21,640,9,22,784,9,23,813,9,24,926,9,25,929,9,26,1036,9,27,713,9,28,945,9,29,949,9,30,802,9,31,752,9,32,385,9,33,318,9,34,-325,9,35,-776,10,32,-311,10,33,97,10,34,-412,10,35,-675,11,34,-871,11,35,1,12,34,-996,12,35,-389,13,35,-865,14,35,-1001,15,35,-1509,16,35,264,17,35,51,18,35,-2956,19,35,-627,20,35,-384,21,35,-428,22,35,-165,23,34,-1069,23,35,254,24,34,-854,24,35,307,25,32,-351,25,33,-239,25,34,-373,25,35,672,26,17,-1823,26,18,45,26,19,177,26,20,343,26,21,636,26,22,813,26,23,789,26,24,904,26,25,899,26,26,1028,26,27,808,26,28,938,26,29,1005,26,30,848,26,31,827,26,32,546,26,33,216,26,34,-319,26,35,-101,27,33,-940,27,34,-1168,27,35,-334,28,35,-771,29,35,-1833,30,35,-1180,31,31,-220,31,32,-3576,32,31,1448,32,32,-1319,32,33,-22893,32,35,-2396,33,31,-105,33,32,-2696,33,33,-21104,34,31,-1053,34,32,-2470,34,35,-3853,35,35,-3447],"r-swept|h-cat":[0,35,-2192,1,29,605,1,30,1076,1,35,-1171,2,29,1853,2,30,2125,2,35,-2698,3,29,2263,3,30,2669,3,35,343,4,29,1952,4,30,2603,4,35,-2891,5,28,203,5,29,1651,5,30,1357,5,35,-1064,6,29,775,6,35,6,7,35,975,8,30,21,8,31,138,8,32,10,8,33,-454,8,34,-634,8,35,-1126,9,16,-1885,9,17,-2526,9,18,-160,9,19,-296,9,20,102,9,21,316,9,22,583,9,23,605,9,24,718,9,25,719,9,26,893,9,27,722,9,28,817,9,29,945,9,30,903,9,31,780,9,32,459,9,33,147,9,34,-355,9,35,1108,10,33,-670,10,34,-500,10,35,-97,11,34,-1629,11,35,374,12,35,-822,13,35,-93,14,35,-637,15,35,-1785,16,35,977,17,35,870,18,35,-2252,19,35,1417,20,35,-634,21,35,1215,22,35,456,23,35,-90,24,34,-1239,24,35,337,25,33,-621,25,34,-424,25,35,545,26,17,-2112,26,18,-339,26,19,-161,26,20,1,26,21,308,26,22,527,26,23,600,26,24,730,26,25,650,26,26,921,26,27,728,26,28,825,26,29,956,26,30,920,26,31,849,26,32,445,26,33,208,26,34,-425,26,35,1114,27,30,-191,27,31,-119,27,32,-6,27,33,-327,27,34,-255,27,35,976,28,35,1913,29,29,877,29,35,339,30,28,-140,30,29,1657,30,30,1577,30,35,-2398,31,29,739,31,30,1173,31,31,-11944,31,35,-1606,32,29,-5655,32,30,-1549,32,31,-11360,32,35,-1957,33,29,-442,33,30,-1005,34,29,-365,34,30,-507,34,35,-3072,35,35,-3516],"r-swept|x-ribbon":[0,35,-2232,1,35,-3326,2,35,-2166,3,35,-2696,4,35,-564,5,35,-656,6,34,-922,6,35,-688,7,34,-457,7,35,-431,8,16,-1004,8,17,-818,8,18,-721,8,19,-595,8,20,-409,8,21,-123,8,22,356,8,23,411,8,24,487,8,25,519,8,26,659,8,27,569,8,28,646,8,29,790,8,30,744,8,31,639,8,32,496,8,33,140,8,34,-218,8,35,-482,9,16,-1911,9,17,-1906,9,18,-455,9,19,-202,9,20,-15,9,21,208,9,22,437,9,23,479,9,24,594,9,25,539,9,26,708,9,27,682,9,28,746,9,29,692,9,30,643,9,31,483,9,32,228,9,33,-89,9,34,-551,9,35,-1008,26,17,-1926,26,18,-516,26,19,-168,26,20,-31,26,21,198,26,22,375,26,23,470,26,24,577,26,25,545,26,26,697,26,27,682,26,28,749,26,29,763,26,30,565,26,31,444,26,32,221,26,33,-118,26,34,-786,26,35,-1166,27,17,-964,27,18,-720,27,19,-722,27,20,-343,27,21,-61,27,22,188,27,23,383,27,24,483,27,25,558,27,26,581,27,27,614,27,28,637,27,29,802,27,30,696,27,31,639,27,32,368,27,33,66,27,34,-213,27,35,-639,28,27,46,28,28,644,28,29,749,28,30,573,28,31,-801,28,34,-437,28,35,-450,29,27,9,29,28,612,29,29,735,29,30,592,29,31,-493,29,35,-446,30,28,-269,30,29,227,30,30,181,30,31,116,30,32,-1432,30,35,-788,31,29,-216,31,30,201,31,31,116,31,32,-1035,31,35,-1833,32,29,-1194,32,30,-442,32,31,-526,32,32,-1324,32,35,-2211,33,29,-953,33,30,-1465,33,31,-2583,33,32,-3355,33,35,-2897,34,29,-1525,34,30,-1559,34,31,-3301,34,35,-3248,35,35,-3687],"r-twin|h-bunny":[0,31,-909,0,35,-1832,1,30,2632,1,31,1735,1,32,-3563,1,34,-2485,1,35,-1761,2,30,3143,2,31,2080,2,32,-3470,2,34,-1864,2,35,-1621,3,30,2702,3,31,1599,3,32,-4189,3,34,-50,3,35,-1708,4,30,-1204,4,31,-1061,4,32,-9321,4,34,452,4,35,-1631,5,34,546,5,35,-1713,6,33,294,6,34,486,6,35,-1906,7,31,-31,7,32,119,7,33,226,7,34,315,8,16,-1055,8,17,-1049,8,18,3182,8,19,4525,8,20,4606,8,21,4608,8,22,4376,8,23,3788,8,24,201,8,25,203,8,26,137,8,27,-111,8,28,331,8,29,182,8,30,47,8,31,73,8,32,100,8,33,-405,27,17,-1101,27,18,3410,27,19,4523,27,20,4515,27,21,4611,27,22,4412,27,23,3767,27,24,206,27,25,160,27,26,166,27,27,-181,27,28,176,27,29,103,27,30,43,27,31,89,27,32,90,27,33,-388,28,30,-309,28,31,-18,28,32,67,28,33,328,28,34,311,29,33,402,29,34,491,29,35,-1894,30,34,511,30,35,-1733,31,30,-1173,31,31,-1050,31,32,-11501,31,34,498,31,35,-1709,32,30,2725,32,31,1713,32,32,-4320,32,34,91,32,35,-1638,33,30,3139,33,31,2071,33,32,-3372,33,34,-1740,33,35,-1601,34,30,2631,34,31,1740,34,32,-3623,34,34,-1826,34,35,-1749,35,31,-928,35,34,-2101,35,35,-1757],"r-twin|h-cat":[0,34,238,0,35,-2018,1,28,330,1,29,-732,1,34,2004,1,35,-2636,2,28,1338,2,29,1264,2,34,1409,2,35,-2498,3,27,-3009,3,28,1442,3,29,184,3,34,1931,3,35,-2868,4,27,-131,4,28,1418,4,29,-3472,4,34,2442,4,35,-2652,5,27,-120,5,28,668,5,33,483,5,34,2713,5,35,-3128,6,32,-1099,6,33,775,6,34,2896,6,35,-679,7,30,-631,7,31,-168,7,32,57,7,33,244,7,34,2419,8,17,-8437,8,18,-1892,8,19,-76,8,20,413,8,21,768,8,22,681,8,23,2114,8,24,-2823,8,25,-2404,8,26,-2118,8,27,-1124,8,28,-716,8,29,-579,8,30,-361,8,31,-30,8,32,-517,8,33,-4892,9,17,3357,9,18,1711,9,19,680,26,17,2551,26,18,2236,26,19,364,27,17,-8696,27,18,-1897,27,19,139,27,20,272,27,21,853,27,22,709,27,23,1923,27,24,-3054,27,25,-2427,27,26,-1943,27,27,-1307,27,28,-643,27,29,-699,27,30,-379,27,31,-133,27,32,-86,27,33,-2413,28,30,-647,28,31,-169,28,32,49,28,33,269,28,34,374,29,32,-757,29,33,519,29,34,1830,29,35,-4678,30,27,-12,30,28,682,30,33,182,30,34,2074,30,35,-3927,31,27,-26,31,28,1420,31,29,-3104,31,34,2677,31,35,-3036,32,27,-3037,32,28,1451,32,29,61,32,34,3145,32,35,-2500,33,28,1294,33,29,1298,33,34,3690,33,35,-2127,34,28,310,34,29,-791,34,34,3379,34,35,-2098,35,34,-3259,35,35,-1613],"r-twin|h-flowers":[0,24,99,0,25,1336,0,26,160,1,24,118,1,25,1544,2,23,-1877,2,24,828,2,25,1203,2,26,-112,3,23,-1940,3,24,1207,3,25,967,3,26,257,4,24,1344,4,25,1017,5,23,-1006,5,24,1108,5,25,594,5,26,-406,6,23,-528,6,24,1346,6,25,374,6,26,-857,7,23,-3452,7,24,1183,7,25,-781,8,23,2767,8,24,-298,8,25,-1244,8,26,-2619,9,24,4148,9,25,-4996,10,24,5667,10,25,-9973,11,24,-3218,11,25,-4004,12,24,-2827,12,25,-3146,13,24,-2939,13,25,-3255,14,24,-3029,14,25,-3277,15,24,-3169,15,25,-3110,16,24,-3354,16,25,-3084,17,24,-3520,17,25,-3057,18,24,-3364,18,25,-3054,19,24,-3383,19,25,-3078,20,24,-3170,20,25,-3083,21,24,-3036,21,25,-3256,22,24,-2875,22,25,-3178,23,24,-3045,23,25,-3317,24,24,1029,24,25,-5849,25,24,4697,25,25,-8951,26,24,4250,26,25,-5205,27,23,2266,27,24,-225,27,25,-1141,27,26,-2738,28,23,-3180,28,24,1036,28,25,-808,29,23,-529,29,24,1125,29,25,269,29,26,-816,30,23,-982,30,24,1164,30,25,583,30,26,-474,31,24,1320,31,25,1064,32,23,-1929,32,24,1070,32,25,1010,32,26,226,33,23,-1995,33,24,744,33,25,1179,33,26,-103,34,24,145,34,25,1507,35,24,201,35,25,1555,35,26,170],"r-twin|x-ribbon":[0,35,-2923,1,34,-421,1,35,-1953,2,34,-3254,2,35,-1673,3,34,-2199,3,35,-2119,4,34,1792,4,35,-2168,5,34,1835,5,35,-3051,6,33,82,6,34,1047,7,31,-303,7,32,63,7,33,43,7,34,-160,8,16,-1355,8,17,-1743,8,18,3295,8,19,4913,8,20,4950,8,21,5059,8,22,4636,8,23,5287,8,24,137,8,25,121,8,26,52,8,27,-230,8,28,-222,8,29,114,8,30,-62,8,32,13,8,33,-3704,27,16,-1582,27,17,-1804,27,18,4128,27,19,4929,27,20,4882,27,21,4968,27,22,4746,27,23,4561,27,24,133,27,25,73,27,26,241,27,27,-317,27,28,-247,27,29,-34,27,30,-112,27,31,33,27,32,-94,27,33,-3962,28,27,832,28,28,1346,28,29,726,28,30,-890,28,31,-320,28,32,-29,28,33,102,28,34,40,29,27,950,29,28,1547,29,29,1551,29,30,957,29,33,278,29,34,579,30,27,-173,30,28,1288,30,29,1343,30,30,935,30,31,-38,30,34,773,30,35,-3606,31,28,-338,31,29,1264,31,30,1438,31,31,956,31,34,1097,31,35,-2906,32,28,262,32,29,1254,32,30,1360,32,31,914,32,34,-1122,32,35,-2502,33,28,-146,33,29,834,33,30,890,33,31,466,33,34,-3074,33,35,-2110,34,28,-1929,34,29,-75,34,30,123,34,31,-478,34,35,-2064,35,35,-1788],"r-wave|h-bunny":[0,31,-4944,1,30,1645,1,31,1273,1,32,-2992,1,35,-1181,2,30,2252,2,31,1938,2,32,-2637,2,35,-957,3,30,1915,3,31,1572,3,32,-2940,3,35,-992,4,30,-63,4,31,241,4,32,-5669,4,35,-1198,5,35,-1159,6,34,-1029,6,35,-954,7,33,-651,7,34,-616,7,35,-774,8,16,-354,8,17,-360,8,18,52,8,19,119,8,20,-26,8,21,70,8,22,333,8,23,285,8,24,318,8,25,493,8,26,591,8,27,616,8,28,788,8,29,909,8,30,877,8,31,748,8,32,427,8,33,-89,8,34,-456,8,35,-759,9,16,-124,9,17,-62,9,18,264,9,19,215,9,20,71,9,21,149,9,22,380,9,23,388,9,24,420,9,25,448,9,26,653,9,27,635,9,28,849,9,29,905,9,30,798,9,31,585,9,32,339,9,33,-84,9,34,-436,9,35,-1014,10,35,-1195,11,35,-1174,12,35,-1244,13,35,-1413,16,35,-1161,17,35,-1226,18,35,-1875,22,35,-2220,24,35,-1179,25,35,-1146,26,17,-50,26,18,271,26,19,213,26,20,73,26,21,163,26,22,356,26,23,389,26,24,395,26,25,417,26,26,669,26,27,659,26,28,856,26,29,897,26,30,832,26,31,700,26,32,360,26,33,-97,26,34,-460,26,35,-1011,27,17,-244,27,18,63,27,19,63,27,20,24,27,21,85,27,22,306,27,23,296,27,24,260,27,25,435,27,26,642,27,27,649,27,28,730,27,29,809,27,30,840,27,31,680,27,32,399,27,33,-103,27,34,-402,27,35,-765,28,33,-743,28,34,-675,28,35,-704,29,34,-1112,29,35,-885,30,35,-1012,31,30,94,31,31,11,31,32,-5605,31,35,-1046,32,30,1954,32,31,1570,32,32,-2881,32,35,-983,33,30,2125,33,31,1975,33,32,-2702,33,35,-1521,34,30,1721,34,31,1398,34,32,-2935,34,35,-1612,35,31,-4983,35,35,-1377],"r-wave|h-cat":[0,35,-2619,1,29,67,1,30,206,1,35,-1359,2,29,323,2,30,507,2,35,-1530,3,29,671,3,30,780,3,35,-1023,4,28,-176,4,29,942,4,30,846,4,35,-1538,5,28,591,5,29,919,5,30,-317,5,35,-1641,6,29,704,6,34,-1393,6,35,-1015,7,34,-709,7,35,-792,8,20,-331,8,21,-302,8,22,-3,8,23,7,8,24,188,8,25,478,8,26,562,8,27,577,8,28,757,8,29,800,8,30,802,8,31,601,8,32,382,8,33,-120,8,34,-537,8,35,-742,9,16,-127,9,17,-48,9,18,267,9,19,212,9,20,68,9,21,159,9,22,391,9,23,385,9,24,417,9,25,445,9,26,651,9,27,650,9,28,816,9,29,904,9,30,833,9,31,706,9,32,397,9,33,-14,9,34,-375,9,35,-901,10,34,-1037,10,35,-938,11,35,-1222,12,35,-1154,13,35,-1415,14,35,-1769,15,35,-1134,17,35,-1305,19,35,-2467,20,35,-1466,21,35,-1617,22,35,-1150,23,35,-1608,24,35,-1114,25,34,-983,25,35,-821,26,17,-54,26,18,268,26,19,210,26,20,70,26,21,176,26,22,370,26,23,386,26,24,347,26,25,411,26,26,667,26,27,675,26,28,855,26,29,896,26,30,840,26,31,730,26,32,438,26,33,-24,26,34,-387,26,35,-949,27,20,-394,27,21,-287,27,22,24,27,23,-30,27,24,155,27,25,325,27,26,570,27,27,605,27,28,695,27,29,810,27,30,732,27,31,618,27,32,336,27,33,-164,27,34,-458,27,35,-704,28,34,-735,28,35,-798,29,29,682,29,35,-1001,30,28,605,30,29,903,30,30,-331,30,35,-1087,31,29,942,31,30,853,31,35,-1367,32,29,730,32,30,780,32,35,-1105,33,29,373,33,30,535,33,35,-4239,34,29,98,34,30,295,34,35,-3623,35,35,-1372],"r-wave|h-flowers":[0,24,-169,0,25,667,0,26,-594,1,24,-144,1,25,873,2,23,-2778,2,24,420,2,25,691,2,26,-756,3,23,-1871,3,24,311,3,25,557,3,26,-457,4,24,792,4,25,498,5,23,-640,5,24,713,5,25,427,5,26,-915,6,23,-607,6,24,742,6,25,-283,6,26,-1573,7,23,-916,7,24,798,7,25,-890,8,23,-294,8,24,789,8,25,-308,8,26,-1388,9,24,758,9,25,-1612,10,24,599,11,24,514,11,25,-260,12,24,494,12,25,219,13,24,423,13,25,198,14,24,459,14,25,234,15,24,341,15,25,388,16,24,90,16,25,301,17,24,126,17,25,396,18,24,73,18,25,467,19,24,201,19,25,262,20,24,317,20,25,401,21,24,428,21,25,250,22,24,422,22,25,207,23,24,484,23,25,192,24,24,579,24,25,-279,25,24,777,25,25,-642,26,24,856,26,25,-1677,27,23,-262,27,24,758,27,25,-324,27,26,-1319,28,23,-988,28,24,829,28,25,-883,29,23,-565,29,24,747,29,25,-483,29,26,-1528,30,23,-652,30,24,726,30,25,413,30,26,-909,31,24,780,31,25,473,32,23,-1943,32,24,356,32,25,431,32,26,-395,33,23,-3072,33,24,308,33,25,662,33,26,-674,34,24,-283,34,25,739,35,24,-342,35,25,838,35,26,-306],"r-wave|x-ribbon":[6,35,-1278,7,35,-1672,8,34,-1975,8,35,-1421,9,16,124,9,17,202,9,18,567,9,19,673,9,20,221,9,21,310,9,22,749,9,23,578,9,24,652,9,25,648,9,26,886,9,27,851,9,28,1096,9,29,1138,9,30,1129,9,31,1052,9,32,429,9,33,361,9,34,-358,9,35,-855,10,33,-930,10,34,-683,10,35,-367,11,34,-2089,11,35,-671,12,35,-1055,13,35,-2958,14,35,-1674,15,35,-1145,16,35,-1727,17,35,-1225,18,35,-2788,19,35,-2108,20,35,-1159,21,35,-1492,22,35,-1324,23,35,-1191,24,34,-1680,24,35,-692,25,33,-1942,25,34,-813,25,35,-366,26,17,126,26,18,686,26,19,619,26,20,288,26,21,348,26,22,685,26,23,673,26,24,540,26,25,621,26,26,1077,26,27,962,26,28,1164,26,29,1220,26,30,1252,26,31,1077,26,32,756,26,33,234,26,34,-411,26,35,-766,27,27,-121,27,28,730,27,29,832,27,30,208,27,34,-1743,27,35,-947,28,27,79,28,28,1019,28,29,1263,28,30,813,28,31,-1422,28,35,-1839,29,27,-529,29,28,912,29,29,1200,29,30,760,29,31,-771,30,29,486,30,30,902,30,31,552,30,32,-1252,31,29,788,31,30,1053,31,31,733,31,32,-970,32,29,462,32,30,725,32,31,453,32,32,-1049,32,35,-2e3,33,29,-401,33,30,67,33,31,-193,33,32,-2045,33,35,-5718,34,29,-1865,34,30,-970,34,31,-1120,34,35,-2061,35,35,-1783]}},m:{c:[-5e-6,.148791,-292e-6],t:{"r-bob|h-bunny":[0,31,-6072,0,32,-12815,0,35,-2578,1,30,913,1,31,658,1,32,-6734,1,35,-2675,2,30,1572,2,31,1064,2,32,-6099,2,35,-1970,3,30,832,3,31,359,3,32,-6777,3,34,-2233,3,35,-1903,4,31,-5094,4,32,-12712,4,34,-1968,4,35,-1857,5,34,-1714,5,35,-1895,6,33,-1742,6,34,-1554,6,35,-2218,7,31,-776,7,32,-858,7,33,-1067,7,34,-1513,8,16,-1523,8,17,-1503,8,18,-1418,8,19,41,8,20,194,8,21,452,8,22,418,8,23,417,8,24,380,8,25,382,8,26,327,8,27,245,8,28,232,8,29,206,8,30,31,8,31,-45,8,32,-397,8,33,-1207,8,34,-1997,9,16,-2526,9,17,-2555,9,18,-1139,9,19,-786,9,20,-845,9,21,-562,26,17,-2466,26,18,-1312,26,19,-825,26,20,-794,26,21,-584,27,17,-1540,27,18,-268,27,19,-2,27,20,187,27,21,441,27,22,450,27,23,371,27,24,395,27,25,382,27,26,375,27,27,218,27,28,267,27,29,218,27,30,-58,27,31,-26,27,32,-566,27,33,-1225,27,34,-2240,28,31,-720,28,32,-612,28,33,-1046,28,34,-1470,28,35,-1049,29,33,-1682,29,34,-1529,29,35,-2507,30,34,-1692,30,35,-2316,31,31,-5029,31,32,-12597,31,34,-1785,31,35,-2098,32,30,813,32,31,404,32,32,-6811,32,34,-2446,32,35,-2055,33,30,1535,33,31,1166,33,32,-6135,33,34,-2361,33,35,-1998,34,30,805,34,31,469,34,32,-6822,34,35,-2053,35,31,-5893,35,32,-13347,35,35,-2200],"r-bob|h-cat":[0,35,-2009,1,30,-138,1,35,-4368,2,29,-915,2,30,388,2,31,-4052,2,35,-1e3,3,29,106,3,30,677,3,31,-4360,3,35,-1926,4,29,251,4,30,706,4,31,-7427,4,35,814,5,29,262,5,30,443,5,35,-2086,6,29,-114,6,35,-1519,7,34,-1693,7,35,-1883,8,21,-583,8,22,-312,8,23,-322,8,24,-32,8,25,-117,8,26,213,8,27,-3,8,28,43,8,29,47,8,30,-113,8,31,-314,8,32,-604,8,33,-1153,8,34,-1309,8,35,-1892,9,16,-1729,9,17,-1762,9,18,-423,9,19,-87,9,20,11,9,21,325,9,22,533,9,23,533,9,24,513,9,25,462,9,26,524,9,27,332,9,28,320,9,29,326,9,30,36,9,31,12,9,32,-561,9,33,-1081,9,34,-1332,9,35,-1994,10,34,-2591,10,35,-2167,11,35,-1943,12,35,-2751,13,35,-4029,14,35,-2465,15,35,-2340,17,35,-2216,18,35,-2473,20,35,-2244,21,35,-2553,22,35,-2183,23,35,-2252,24,35,-1827,25,34,-2422,25,35,-1618,26,17,-1730,26,18,-399,26,19,-61,26,20,26,26,21,296,26,22,510,26,23,486,26,24,531,26,25,418,26,26,493,26,27,309,26,28,276,26,29,357,26,30,143,26,31,-100,26,32,-410,26,33,-890,26,34,-1329,26,35,-1624,27,21,-580,27,22,-353,27,23,-240,27,24,-186,27,25,-118,27,26,213,27,27,-7,27,28,-11,27,29,-20,27,30,-76,27,31,-370,27,32,-601,27,33,-1126,27,34,-1480,27,35,-1759,28,34,-1647,28,35,-1161,29,29,-86,29,35,-669,30,29,286,30,30,579,30,35,-1774,31,29,424,31,30,812,31,31,-7740,31,35,-2750,32,29,204,32,30,684,32,31,-4448,32,35,-1194,33,29,-1454,33,30,281,33,31,-3937,33,35,-3213,34,30,-247,34,35,-4801,35,35,-4865],"r-bob|x-holly":[5,25,-304,5,26,-299,6,24,-313,6,25,-179,6,26,-186,6,27,-473,7,25,-335,7,26,-381,8,25,-637,8,26,-625],"r-bob|x-ribbon":[0,35,-493,1,35,822,2,35,-527,3,35,1915,4,35,387,5,35,-661,6,35,-132,7,34,-1300,7,35,-531,8,26,-363,8,27,-393,8,28,726,8,29,685,8,30,773,8,31,713,8,32,504,8,33,-88,8,34,-105,8,35,-665,9,16,-2061,9,17,-2153,9,18,-647,9,19,-370,9,20,-188,9,21,225,9,22,560,9,23,519,9,24,775,9,25,810,9,26,1470,9,27,1333,9,28,1272,9,29,1334,9,30,1185,9,31,1144,9,32,699,9,33,-3,9,34,-152,9,35,-688,10,35,-1363,11,35,-2332,12,35,-1032,13,35,-3525,14,35,-786,15,35,-2416,16,35,-267,17,35,-1098,18,35,-1882,19,35,126,22,35,-1869,23,35,-4048,24,35,-629,25,35,-584,26,16,-2153,26,17,-2093,26,18,-532,26,19,-214,26,20,-169,26,21,239,26,22,492,26,23,548,26,24,774,26,25,793,26,26,1529,26,27,1255,26,28,1284,26,29,1356,26,30,1295,26,31,1181,26,32,800,26,33,324,26,34,-220,26,35,-464,27,26,-335,27,27,-161,27,28,680,27,29,747,27,30,675,27,31,689,27,32,471,27,33,16,27,34,-128,27,35,335,28,27,51,28,28,974,28,29,1150,28,30,791,28,31,-1288,28,34,-1196,28,35,988,29,27,-320,29,28,906,29,29,1159,29,30,754,29,31,-1525,29,35,25,30,28,-823,30,29,464,30,30,826,30,31,273,30,32,-1657,30,35,-200,31,29,720,31,30,1170,31,31,783,31,32,-1106,31,35,-407,32,29,669,32,30,1029,32,31,698,32,32,-1071,32,35,-487,33,29,138,33,30,441,33,31,194,33,32,-1910,33,35,-746,34,29,-1557,34,30,-738,34,31,-1013,34,35,286,35,35,-3967],"r-bun|h-bunny":[0,35,6053,1,31,2785,1,32,-2256,1,35,4966,2,30,4151,2,31,4680,2,32,-1523,2,35,5079,3,30,3918,3,31,4004,3,32,-2437,3,35,-457,4,30,-549,4,31,1650,4,32,-6421,4,35,7188,5,35,7180,6,35,6895,7,34,5783,7,35,6787,8,22,-901,8,23,-797,8,24,-512,8,25,-139,8,26,108,8,27,410,8,28,217,8,29,499,8,30,713,8,31,758,8,32,-1413,8,33,7693,8,34,6560,8,35,6855,9,16,-649,9,17,-496,9,18,-1616,9,19,-1517,9,20,367,9,21,172,9,22,827,9,23,866,9,24,961,9,25,1152,9,26,952,9,27,969,9,28,959,9,29,787,9,30,779,9,31,774,9,32,705,9,33,8041,9,34,6790,9,35,6740,10,34,5662,10,35,7226,11,35,7340,12,35,8195,13,35,8382,14,35,-5038,15,35,8609,16,35,8772,17,35,7757,18,35,6946,19,35,42,20,35,1230,21,35,-1462,22,35,6509,23,35,7473,24,35,7466,25,34,5644,25,35,7611,26,17,-578,26,18,-1587,26,19,-1486,26,20,44,26,21,186,26,22,839,26,23,874,26,24,878,26,25,1210,26,26,775,26,27,979,26,28,1042,26,29,733,26,30,834,26,31,506,26,32,1591,26,33,7613,26,34,6364,26,35,7937,27,22,-1008,27,23,-733,27,24,-468,27,25,-241,27,26,352,27,27,298,27,28,185,27,29,484,27,30,670,27,31,620,27,32,-348,27,33,6058,27,34,6337,27,35,8869,28,34,5899,28,35,9239,29,35,8242,30,35,9064,31,30,-954,31,31,1836,31,32,-6403,31,35,7322,32,30,3964,32,31,4176,32,32,-2334,32,35,6030,33,30,4227,33,31,4532,33,32,-1513,33,35,7373,34,31,2799,34,32,-2101,34,35,-1850,35,35,6865],"r-bun|h-cat":[1,30,1083,1,31,1225,2,30,1679,2,31,1785,3,30,2177,3,31,2065,4,30,2170,4,31,2189,5,29,1572,5,30,2080,5,31,842,6,29,1222,6,30,941,9,16,90,9,17,52,9,18,-1033,9,19,622,9,20,574,9,21,691,9,22,777,9,23,873,9,24,753,9,25,716,9,26,608,9,27,342,9,28,208,9,29,-233,9,30,-369,9,31,-660,9,32,2912,9,33,5059,9,34,5061,9,35,4991,10,32,2553,10,33,4997,10,34,5548,10,35,5593,11,34,5588,11,35,5174,12,34,4211,12,35,5819,13,35,5696,14,35,6344,15,35,5671,16,35,5862,17,35,5460,18,35,4731,19,35,5861,20,35,6039,21,35,5883,22,35,6258,23,34,5230,23,35,6448,24,34,5749,24,35,6184,25,32,2674,25,33,5081,25,34,5433,25,35,5531,26,16,-29,26,17,70,26,18,-821,26,19,510,26,20,569,26,21,719,26,22,759,26,23,840,26,24,772,26,25,751,26,26,613,26,27,295,26,28,159,26,29,-227,26,30,-382,26,31,-584,26,32,2912,26,33,4715,26,34,4827,26,35,4844,29,29,1617,29,30,1773,30,29,1985,30,30,2270,30,31,992,31,30,2207,31,31,2041,32,30,1984,32,31,1898,33,30,1564,33,31,1627,34,30,1215,34,31,1283],"r-bun|x-ribbon":[0,35,4277,3,35,-22,5,35,1280,6,35,4632,7,35,4505,8,34,4495,8,35,5700,9,16,144,9,17,84,9,18,-948,9,19,200,9,20,563,9,21,690,9,22,762,9,23,788,9,24,725,9,25,807,9,26,617,9,27,503,9,28,355,9,29,82,9,30,-28,9,31,-320,9,32,2510,9,33,5299,9,34,5859,9,35,5570,10,33,4192,10,34,5746,10,35,5921,11,35,5957,12,35,5931,13,35,6375,14,35,6475,15,35,5248,16,35,6226,17,35,5720,18,35,4793,19,35,626,20,35,5476,21,35,5367,22,35,5973,23,35,6004,24,35,5979,25,33,3955,25,34,5586,25,35,5829,26,17,60,26,18,-752,26,19,192,26,20,601,26,21,701,26,22,787,26,23,761,26,24,725,26,25,780,26,26,619,26,27,517,26,28,425,26,29,93,26,30,-6,26,31,-131,26,32,2305,26,33,5335,26,34,5473,26,35,5660,27,27,-607,27,28,401,27,29,-289,27,30,-443,27,31,-1584,27,34,4472,27,35,5946,28,27,414,28,28,1720,28,29,2050,28,30,1560,28,31,837,28,35,5795,29,28,1572,29,29,2019,29,30,1797,29,31,1192,29,32,-1082,29,35,5328,30,29,686,30,30,1735,30,31,1681,30,32,480,31,29,1030,31,30,1918,31,31,1791,31,32,717,31,35,-120,32,29,991,32,30,1705,32,31,1752,32,32,698,33,29,362,33,30,1255,33,31,1212,33,32,214,33,35,-272,34,30,259,34,31,256,34,32,-897,34,35,3535,35,35,4561],"r-long|h-bunny":[0,31,-9556,0,35,-1383,1,30,1736,1,31,1293,1,32,-6896,1,35,-1381,2,30,2861,2,31,2135,2,32,-6016,2,35,-1869,3,30,2191,3,31,1208,3,32,-7133,3,35,-1016,4,30,-1725,4,31,-1805,4,32,-12460,4,35,-743,5,35,-1118,6,34,-1334,6,35,97,7,33,-606,7,34,-413,7,35,-821,8,16,-228,8,17,-111,8,18,388,8,19,392,8,20,175,8,21,239,8,22,636,8,23,730,8,24,210,8,25,316,8,26,697,8,27,607,8,28,839,8,29,945,8,30,933,8,31,804,8,32,534,8,33,51,8,34,-405,8,35,-169,9,16,194,9,17,266,9,18,811,9,19,893,9,20,628,9,21,580,9,22,1009,9,23,1091,9,24,637,9,25,563,9,26,651,9,27,493,9,28,672,9,29,711,9,30,506,9,31,539,9,32,170,9,33,-336,9,34,-1046,9,35,350,10,35,-290,11,35,-296,17,35,-2063,24,35,1758,25,35,1636,26,16,17,26,17,308,26,18,944,26,19,926,26,20,511,26,21,583,26,22,993,26,23,1133,26,24,587,26,25,524,26,26,702,26,27,415,26,28,669,26,29,655,26,30,633,26,31,533,26,32,251,26,33,-397,26,34,-506,26,35,1173,27,16,-179,27,17,-218,27,18,476,27,19,459,27,20,143,27,21,223,27,22,592,27,23,679,27,24,243,27,25,298,27,26,782,27,27,660,27,28,935,27,29,999,27,30,822,27,31,760,27,32,432,27,33,24,27,34,-450,27,35,-217,28,33,-535,28,34,-438,28,35,42,29,34,-932,29,35,-154,30,34,-1299,30,35,-785,31,30,-1760,31,31,-1997,31,32,-12499,31,35,-850,32,30,2300,32,31,1382,32,32,-7215,32,35,-1458,33,30,2770,33,31,1949,33,32,-6028,33,35,-1736,34,30,1916,34,31,1411,34,32,-6919,34,35,-4574,35,31,-9420],"r-long|h-cat":[0,35,-1189,1,29,153,1,30,219,1,35,-1255,2,29,437,2,30,550,2,35,-1125,3,29,594,3,30,700,3,35,-1142,4,28,196,4,29,640,4,30,636,4,35,-799,5,28,267,5,29,564,5,30,-2658,5,35,-716,6,29,289,6,34,-750,6,35,-615,7,33,-335,7,34,-319,7,35,-629,8,17,-319,8,18,-206,8,19,-49,8,20,-244,8,21,-188,8,22,39,8,23,63,8,24,-118,8,25,-40,8,26,185,8,27,259,8,28,559,8,29,630,8,30,662,8,31,581,8,32,418,8,33,58,8,34,-252,8,35,-732,9,17,-156,9,18,168,9,19,136,9,20,-70,9,21,-17,9,22,268,9,23,278,9,24,12,9,25,91,9,26,262,9,27,297,9,28,502,9,29,560,9,30,504,9,31,515,9,32,287,9,33,-112,9,34,-507,9,35,-822,10,35,-936,11,35,-1421,12,35,-1267,15,35,-2672,16,35,-1822,17,35,-1269,18,35,-1382,23,35,-1230,24,35,-1233,25,35,-1180,26,17,-166,26,18,149,26,19,141,26,20,-70,26,21,-30,26,22,264,26,23,313,26,24,29,26,25,62,26,26,257,26,27,281,26,28,534,26,29,573,26,30,538,26,31,531,26,32,300,26,33,-94,26,34,-284,26,35,-885,27,17,-364,27,18,-40,27,19,-45,27,20,-227,27,21,-190,27,22,23,27,23,154,27,24,-112,27,25,-18,27,26,230,27,27,232,27,28,533,27,29,640,27,30,594,27,31,539,27,32,384,27,33,-11,27,34,-256,27,35,-811,28,33,-322,28,34,-315,28,35,-702,29,29,402,29,34,-805,29,35,-743,30,28,387,30,29,673,30,30,-2318,30,35,-769,31,28,251,31,29,744,31,30,714,31,35,-1090,32,29,623,32,30,714,32,35,-1152,33,29,453,33,30,563,33,35,-1133,34,29,190,34,30,345,34,35,-1454],"r-long|x-ribbon":[0,35,-1387,1,35,-1445,2,35,-1642,3,35,-1119,4,35,-1102,5,35,-758,6,34,-969,6,35,-702,7,33,-541,7,34,-389,7,35,-881,8,17,-346,8,18,66,8,19,-143,8,20,-457,8,21,-368,8,22,-21,8,23,163,8,24,-175,8,25,66,8,26,434,8,27,313,8,28,667,8,29,780,8,30,836,8,31,729,8,32,561,8,33,52,8,34,-351,8,35,-1351,9,17,-94,9,18,267,9,19,328,9,20,34,9,21,22,9,22,397,9,23,451,9,24,18,9,25,42,9,26,141,9,27,54,9,28,279,9,29,390,9,30,371,9,31,-99,9,32,-642,26,17,-125,26,18,280,26,19,318,26,20,30,26,21,-33,26,22,380,26,23,531,26,24,64,26,25,39,26,26,84,26,27,105,26,28,302,26,29,349,26,30,408,26,31,121,26,32,-587,27,17,-342,27,18,-122,27,19,-139,27,20,-416,27,21,-302,27,22,15,27,23,164,27,24,-191,27,25,-12,27,26,466,27,27,378,27,28,688,27,29,782,27,30,718,27,31,733,27,32,419,27,33,24,27,34,-428,27,35,-1261,28,27,-225,28,28,446,28,29,582,28,30,129,28,33,-502,28,34,-418,28,35,-896,29,27,-327,29,28,496,29,29,567,29,30,152,29,34,-1067,29,35,-671,30,28,-92,30,29,242,30,30,323,30,31,-182,30,35,-780,31,28,-1158,31,29,382,31,30,561,31,31,165,31,32,-2382,31,35,-614,32,28,-954,32,29,258,32,30,493,32,31,102,32,32,-2608,32,35,-1308,33,28,-1617,33,29,-169,33,30,-12,33,31,-388,33,35,-1747,34,29,-1310,34,30,-910,34,31,-1165,34,35,-4204],"r-pony|h-bunny":[0,35,-1579,1,31,2745,1,32,185,1,35,-979,2,31,3789,2,32,863,2,33,-16916,2,35,-599,3,31,3395,3,32,375,3,33,-18622,3,35,-742,4,31,911,4,32,-2520,4,35,-418,5,35,119,6,35,-175,7,34,-123,7,35,-92,8,22,-493,8,23,-504,8,24,-131,8,25,202,8,26,145,8,27,235,8,28,173,8,29,180,8,30,9,8,31,77,8,32,58,8,33,-28,8,34,59,8,35,26,9,16,-126,9,17,25,9,18,-1094,9,19,445,9,20,470,9,21,616,9,22,734,9,23,720,9,24,442,9,25,715,9,26,657,9,27,551,9,28,494,9,29,426,9,30,292,9,31,262,9,32,187,9,33,67,9,34,49,9,35,89,10,34,-506,10,35,-246,11,35,-1064,12,35,-367,13,35,-939,14,35,-628,15,35,-355,16,35,203,17,35,-561,18,35,-1011,19,35,-520,20,35,-2385,21,35,-513,22,35,-587,23,35,31,24,35,-476,25,34,-285,25,35,-316,26,17,-87,26,18,-898,26,19,325,26,20,432,26,21,507,26,22,559,26,23,688,26,24,65,26,25,258,26,26,389,26,27,481,26,28,477,26,29,322,26,30,-5,26,31,100,26,32,171,26,33,46,26,34,-5,26,35,50,27,22,-462,27,23,-412,27,24,-1129,27,25,-391,27,26,-178,27,27,257,27,28,228,27,29,45,27,30,-296,27,31,-56,27,32,52,27,33,-141,27,34,243,27,35,340,28,34,124,28,35,75,29,35,421,30,35,276,31,31,1116,31,32,-1892,31,35,-294,32,31,3346,32,32,550,32,33,-21035,32,35,330,33,31,3707,33,32,914,33,33,-16677,33,35,101,34,31,2692,34,32,181,35,35,-92],"r-pony|h-flowers":[0,24,961,0,25,2154,0,26,1190,0,27,-1304,1,25,2138,2,24,1290,2,25,2578,2,26,940,3,24,1290,3,25,2341,3,26,1226,4,24,2189,4,25,2127,5,23,-616,5,24,2646,5,25,1898,5,26,1271,6,23,-237,6,24,2637,6,25,1887,6,26,-976,7,23,-324,7,24,2173,7,25,1814,7,26,-1230,8,23,-634,8,24,1437,8,25,1013,8,26,-150,9,24,14,9,25,-331,10,24,178,10,25,166,11,24,257,11,25,752,12,24,-408,12,25,1,13,24,-5910,13,25,8092,14,25,8113,15,25,6713,16,25,6841,17,25,4934,18,25,-360,19,25,-157,20,25,-107,21,25,108,22,24,-797,22,25,873,23,24,-124,23,25,523,24,24,137,24,25,522,25,24,160,25,25,-3,26,24,-124,26,25,-303,27,23,-314,27,24,1935,27,25,1297,27,26,432,28,23,3,28,24,2287,28,25,1936,28,26,-610,29,23,-452,29,24,2600,29,25,1842,29,26,-845,30,23,-204,30,24,2178,30,25,1910,30,26,1093,31,24,2076,31,25,2195,32,24,1339,32,25,2135,32,26,1285,33,24,1430,33,25,2252,33,26,1117,34,25,2092,35,24,878,35,25,2372,35,26,1923,35,27,-262],"r-short|h-bunny":[0,35,628,1,31,1104,1,32,-336,1,33,-15211,2,31,2503,2,32,571,2,33,-11726,2,35,-4407,3,31,2403,3,32,-104,3,33,-13453,3,35,202,4,31,-210,4,32,-2499,4,33,-25975,5,35,-600,6,35,292,7,35,435,8,29,-1432,8,30,-2273,8,31,-2242,8,32,-2424,8,33,327,8,34,265,8,35,463,9,16,-778,9,17,-1079,9,18,-26,9,19,118,9,20,107,9,21,382,9,22,400,9,23,541,9,24,317,9,25,469,9,26,433,9,27,-11,9,28,-182,9,29,-581,9,30,-1120,9,31,-1339,9,32,-1624,9,33,480,9,34,612,9,35,592,10,33,-1663,10,34,505,10,35,615,11,34,-1118,11,35,654,12,35,-24,13,35,405,14,35,675,15,35,-4455,16,35,623,17,35,514,18,35,-623,19,35,-97,20,35,717,21,35,-163,22,35,140,23,35,488,24,34,-408,24,35,616,25,33,-1171,25,34,375,25,35,854,26,17,-917,26,18,-33,26,19,81,26,20,203,26,21,371,26,22,403,26,23,479,26,24,406,26,25,472,26,26,509,26,27,-62,26,28,-85,26,29,-536,26,30,-1099,26,31,-1422,26,32,-533,26,33,261,26,34,601,26,35,759,27,29,-2060,27,30,-2284,27,31,-1792,27,32,-1429,27,33,83,27,34,322,27,35,431,28,35,-308,29,35,395,30,35,-510,31,31,-98,31,32,-2489,31,33,-26601,31,35,360,32,31,2098,32,32,420,32,33,-13073,32,35,-4053,33,31,2614,33,32,604,33,33,-11836,34,31,859,34,32,-315,34,33,-15499,34,35,-2642,35,35,38],"r-short|h-cat":[0,35,-174,1,30,-194,1,31,-115,2,30,-75,2,31,14,3,30,519,3,31,559,4,30,669,4,31,464,4,35,-453,5,29,476,5,30,822,5,31,296,5,35,-1948,6,29,220,6,30,420,6,35,-819,7,35,-117,8,31,-2319,8,32,-2936,8,33,-253,8,34,-173,8,35,-170,9,16,-91,9,17,-295,9,18,648,9,19,864,9,20,804,9,21,1018,9,22,1002,9,23,943,9,24,871,9,25,746,9,26,736,9,27,118,9,28,-249,9,29,-864,9,30,-1415,9,31,-1710,9,32,-2034,9,33,30,9,34,61,9,35,-337,10,33,-1173,10,34,-105,11,34,-982,11,35,-9,12,35,-289,13,35,-153,14,35,-378,15,35,-63,16,35,-115,17,35,-10,18,35,-1127,19,35,-214,20,35,-783,21,35,73,22,35,182,23,35,275,24,34,-537,24,35,54,25,33,-1013,25,34,-137,25,35,87,26,17,-186,26,18,682,26,19,732,26,20,876,26,21,990,26,22,954,26,23,902,26,24,848,26,25,729,26,26,813,26,27,66,26,28,-231,26,29,-885,26,30,-1434,26,31,-1866,26,32,-1050,26,33,-292,26,34,63,26,35,-140,27,32,-2306,27,33,-768,27,34,-145,27,35,30,28,35,-651,29,29,287,29,30,543,29,35,-832,30,29,462,30,30,715,30,31,351,30,35,-9913,31,30,737,31,31,628,31,35,-779,32,30,553,32,31,508,33,30,81,33,31,137,34,30,-312,34,31,-215,35,35,-290],"r-short|x-cherry":[5,24,-582,5,25,-572,6,24,-292,6,25,-219,6,26,-1190,6,27,-1330,7,24,-425,7,25,-433,7,26,-1314,7,27,-1377],"r-short|x-ribbon":[0,35,-1259,1,35,-1555,3,35,-230,4,35,342,5,35,-533,6,35,127,7,35,323,8,31,-2902,8,32,-2359,8,33,418,8,34,375,8,35,1941,9,16,-805,9,17,-598,9,18,-1645,9,19,141,9,20,103,9,21,254,9,22,317,9,23,444,9,24,357,9,25,400,9,26,451,9,27,21,9,28,-160,9,29,-690,9,30,-1040,9,31,-1121,9,32,-1480,9,33,956,9,34,817,9,35,776,10,34,-758,10,35,595,11,35,1222,12,35,933,13,35,258,14,35,-288,15,35,-92,16,35,566,17,35,-55,18,35,1350,19,35,405,20,35,-2659,21,35,349,22,35,425,23,35,2220,24,35,1227,25,34,-36,25,35,2235,26,17,-864,26,18,-1464,26,19,-118,26,20,215,26,21,270,26,22,327,26,23,418,26,24,406,26,25,571,26,26,807,26,27,1018,26,28,859,26,29,-567,26,30,-1330,26,31,-1382,26,32,-431,26,33,505,26,34,628,26,35,2625,27,27,-3774,27,28,-2295,27,29,-1237,27,30,-960,27,31,-1673,27,32,-1583,27,33,239,27,34,423,27,35,1360,28,27,-3486,28,28,150,28,29,735,28,30,510,28,31,-396,28,35,-424,29,28,50,29,29,760,29,30,648,29,31,-256,29,35,1137,30,29,-554,30,30,458,30,31,98,30,32,-1242,30,35,140,31,29,-468,31,30,568,31,31,561,31,32,-489,31,35,-218,32,29,-432,32,30,568,32,31,399,32,32,-406,32,35,-3938,33,29,-1366,33,30,-170,33,31,-143,33,32,-1190,34,30,-1263,34,31,-1226,34,32,-2562,34,35,-1807,35,35,-1],"r-spiky|h-bunny":[0,35,1789,1,32,-303,1,33,-6668,1,35,3864,2,31,1519,2,32,2532,2,33,-4620,2,35,4286,3,31,1282,3,32,1866,3,33,-5376,3,35,2754,4,32,-1611,4,33,-10268,4,35,3739,5,35,4957,6,35,5750,7,34,-10225,7,35,6530,8,24,-102,8,25,-963,8,26,-2824,8,27,-2901,8,28,-1015,8,29,-335,8,30,443,8,31,660,8,32,1032,8,33,2451,8,34,2237,8,35,-260,9,16,423,9,17,372,9,18,-35,9,19,-64,9,20,-552,9,21,2863,9,22,2069,9,23,2115,9,24,1719,9,25,733,9,26,-1874,9,27,-1944,9,28,-249,9,29,285,9,30,839,9,31,938,9,32,1212,9,33,2879,9,34,2986,9,35,7917,10,34,-10576,10,35,-2557,11,35,9871,12,35,-5916,13,35,7335,14,35,5761,15,35,3675,16,35,1316,17,35,3044,18,35,1164,20,35,-12797,21,35,1421,22,35,1365,23,35,1670,24,35,2321,25,34,-12075,25,35,3394,26,16,222,26,17,479,26,18,22,26,19,4,26,20,-595,26,21,2468,26,22,2370,26,23,2058,26,24,1915,26,25,1090,26,26,-1623,26,27,-2140,26,28,-112,26,29,277,26,30,702,26,31,1058,26,32,1089,26,33,2666,26,34,2596,26,35,2744,27,24,101,27,25,-2659,27,26,-2542,27,27,-3369,27,28,-965,27,29,-114,27,30,285,27,31,871,27,32,895,27,33,2275,27,34,2403,27,35,-4430,28,34,-9694,28,35,4400,29,35,3358,30,35,2731,31,32,-1603,31,33,-10179,31,35,2076,32,31,1252,32,32,1945,32,33,-5834,32,35,2686,33,31,1539,33,32,2550,33,33,-4876,33,35,3929,34,32,-290,34,33,-6507,34,35,827,35,35,1582],"r-spiky|h-cat":[1,31,-62,2,31,1294,3,30,-2148,3,31,1485,3,32,-3865,4,30,-760,4,31,743,4,32,-7028,5,30,-95,5,31,794,6,30,215,6,31,-605,9,16,445,9,17,324,9,18,16,9,19,10,9,20,-149,9,21,3030,9,22,2422,9,23,2241,9,24,1524,9,25,1022,9,26,-1566,9,27,-1822,9,28,-26,9,29,667,9,30,1118,9,31,1530,9,32,2115,9,33,2648,9,34,2152,9,35,4295,10,32,-6830,10,33,-4618,10,34,-4443,10,35,2573,11,34,-5870,11,35,6882,12,35,-428,13,35,6659,14,35,5678,15,35,3750,16,35,4510,17,35,5364,18,35,6862,19,35,7090,20,35,-7311,21,35,3753,22,35,4504,23,35,3445,24,34,-6849,24,35,2151,25,32,-7133,25,33,-3768,25,34,-3878,25,35,5187,26,16,297,26,17,379,26,18,63,26,19,49,26,20,-397,26,21,2995,26,22,2624,26,23,2247,26,24,1555,26,25,875,26,26,-1667,26,27,-1803,26,28,-187,26,29,708,26,30,1117,26,31,1589,26,32,2038,26,33,2590,26,34,2260,26,35,5946,29,30,194,29,31,-344,30,30,-59,30,31,697,31,30,-570,31,31,1023,31,32,-7004,32,30,-2184,32,31,1693,32,32,-3161,33,31,1562,33,32,-2859,34,31,229],"r-spiky|h-flowers":[0,24,-742,0,25,318,0,26,-886,1,24,-560,1,25,40,2,23,-3529,2,24,180,2,25,398,2,26,-923,3,23,-4265,3,24,596,3,25,-3,3,26,-1440,4,24,251,4,25,-26,5,23,-2552,5,24,851,5,25,179,5,26,-1405,6,24,678,6,25,-5,7,23,-1076,7,24,499,7,25,-257,7,26,-1397,8,23,-993,8,24,-872,8,25,-1557,8,26,-6206,9,24,31,9,25,-254,10,24,-400,10,25,-555,11,24,1517,11,25,2378,12,24,-7114,12,25,-113,13,25,-1141,14,25,-1510,15,25,-1299,15,26,-2553,16,25,-1252,16,26,-2262,17,25,-1384,17,26,-1694,18,25,-1432,18,26,-1714,19,25,-1250,19,26,-2154,20,25,-1295,20,26,-2554,21,25,-1516,22,25,-1115,23,24,-7260,23,25,3,24,24,1570,24,25,2645,25,24,-507,25,25,-812,26,24,180,26,25,-45,27,23,-1068,27,24,-542,27,25,-922,27,26,-4913,28,23,-761,28,24,-209,28,25,-949,28,26,-4491,29,24,-2,29,25,-795,30,23,-2555,30,24,733,30,25,224,30,26,-1052,31,24,155,31,25,-173,32,23,-4515,32,24,1086,32,25,87,32,26,-651,33,23,-5268,33,24,142,33,25,122,33,26,-1285,34,24,-633,34,25,313,35,24,-1026,35,25,148,35,26,-1054],"r-spiky|x-cherry":[5,24,-582,5,25,-573,6,24,-291,6,25,-218,6,26,-1190,6,27,-1330,7,24,-424,7,25,-432,7,26,-1300,7,27,-1377],"r-spiky|x-ribbon":[0,35,275,1,35,1635,2,35,2548,3,35,293,5,35,1936,6,35,-5172,7,35,2063,8,33,1016,8,34,998,8,35,1424,9,16,882,9,17,804,9,18,488,9,19,469,9,20,323,9,21,3115,9,22,2704,9,23,2526,9,24,1812,9,25,1033,9,26,-1380,9,27,-1623,9,28,138,9,29,673,9,30,1141,9,31,1276,9,32,1624,9,33,2908,9,34,2790,9,35,3268,10,34,-6961,10,35,253,11,35,3307,12,35,2110,13,35,3233,14,35,1769,15,35,3432,16,35,3756,17,35,3509,18,35,1388,20,35,-11694,21,35,2607,22,35,-4976,23,35,2041,24,35,2749,25,34,-6929,25,35,2646,26,16,803,26,17,894,26,18,499,26,19,483,26,20,112,26,21,3192,26,22,2860,26,23,2527,26,24,1915,26,25,912,26,26,-1308,26,27,-1749,26,28,452,26,29,890,26,30,1124,26,31,1572,26,32,1876,26,33,2893,26,34,2682,26,35,3018,27,28,-2592,27,29,-179,27,30,902,27,31,744,27,32,-1208,27,33,1848,27,34,1555,27,35,2332,28,28,-2369,28,29,-169,28,30,1079,28,31,1056,28,32,-45,28,35,3500,29,29,-842,29,30,613,29,31,331,29,32,-1218,29,35,344,30,30,-2232,30,31,208,30,32,319,30,33,-441,30,35,52,31,30,-1586,31,31,670,31,32,745,31,33,-55,31,35,-577,32,30,-1622,32,31,329,32,32,692,32,33,-70,33,30,-2517,33,31,-208,33,32,56,33,33,-1058,34,31,-1909,34,32,-1926,34,35,351,35,35,2090],"r-swept|h-bunny":[0,31,-4701,0,35,-477,1,30,2408,1,31,1195,1,32,-7882,1,35,-563,2,30,3067,2,31,1411,2,32,-7632,2,34,-1073,2,35,-494,3,30,2323,3,31,875,3,32,-8964,3,34,-646,3,35,-365,4,30,-2909,4,31,-3723,4,32,-16086,4,34,-497,4,35,-316,5,34,-285,5,35,-462,6,33,-305,6,34,-53,6,35,-596,7,31,410,7,32,456,7,33,271,7,34,-161,8,16,-8,8,17,216,8,18,467,8,19,260,8,20,131,8,21,416,8,22,574,8,23,548,8,24,694,8,25,724,8,26,844,8,27,854,8,28,961,8,29,991,8,30,945,8,31,910,8,32,572,8,33,-268,8,34,-1101,9,16,-3641,9,17,-3666,9,18,-3015,9,19,-1112,9,20,-954,9,21,-745,26,17,-4046,26,18,-1681,26,19,-1208,26,20,-1065,26,21,-744,27,17,46,27,18,84,27,19,44,27,20,97,27,21,408,27,22,554,27,23,547,27,24,697,27,25,712,27,26,882,27,27,874,27,28,931,27,29,981,27,30,983,27,31,930,27,32,540,27,33,-23,27,34,-1190,28,31,499,28,32,490,28,33,201,28,34,-68,29,33,-365,29,34,-260,29,35,-894,30,34,-371,30,35,-669,31,30,-3537,31,31,-4052,31,32,-15702,31,34,-489,31,35,-537,32,30,-1497,32,31,-2591,32,32,-9279,32,34,-980,32,35,-477,33,30,955,33,31,-2505,33,32,-9982,33,34,-1097,33,35,-408,34,30,733,34,31,-1217,34,32,-10483,34,35,-479,35,31,-4512,35,35,-489],"r-swept|h-cat":[0,35,7502,1,29,243,1,30,991,1,35,181,2,29,3028,2,30,3246,2,35,1497,3,29,3909,3,30,4384,3,35,7881,4,29,3196,4,30,4138,4,35,5799,5,28,205,5,29,2507,5,30,-3645,5,35,3139,6,29,-251,6,34,-2649,6,35,-675,7,33,-1308,7,34,-178,7,35,508,8,16,1570,8,17,2010,8,18,1138,8,19,-334,8,20,-246,8,21,131,8,22,414,8,23,516,8,24,632,8,25,673,8,26,896,8,27,732,8,28,898,8,29,1340,8,30,1141,8,31,1005,8,32,893,8,33,535,8,34,-167,8,35,-2476,9,16,-3752,9,17,-4905,9,18,-744,9,19,-830,9,20,214,9,21,441,9,22,681,9,23,688,9,24,788,9,25,862,9,26,1112,9,27,805,9,28,956,9,29,763,9,30,688,9,31,574,9,32,352,9,33,27,9,34,-597,9,35,1169,10,35,-1525,11,35,-3810,12,35,-8623,13,35,-3500,14,35,-6643,15,35,-2287,16,35,-1317,17,35,-615,22,35,-6373,23,35,-5442,24,35,-3504,25,35,-3077,26,17,-4073,26,18,-894,26,19,-243,26,20,92,26,21,484,26,22,545,26,23,785,26,24,870,26,25,602,26,26,1103,26,27,823,26,28,1040,26,29,1081,26,30,396,26,31,738,26,32,198,26,33,-65,26,34,22,26,35,-1804,27,17,1828,27,18,192,27,19,-207,27,20,-268,27,21,187,27,22,376,27,23,369,27,24,704,27,25,795,27,26,1199,27,27,787,27,28,800,27,29,1237,27,30,953,27,31,1342,27,32,682,27,33,713,27,34,2030,27,35,6894,28,33,-2362,28,34,115,28,35,12305,29,29,-98,29,34,396,29,35,14049,30,28,-105,30,29,2337,30,30,-2638,30,35,9546,31,29,1060,31,30,1374,31,35,11338,32,29,-11592,32,30,-11471,32,35,13068,33,29,1935,33,30,-2131,33,35,1027,34,29,470,34,30,-616,34,35,-9349,35,35,-17875],"r-swept|h-flowers":[0,24,57,0,25,939,0,26,-53,0,27,-1721,1,25,-628,2,24,-881,2,25,159,2,26,-1003,3,24,-621,3,25,165,3,26,-816,4,24,-272,4,25,83,5,23,-2209,5,24,-274,5,25,24,5,26,-1366,6,23,-2187,6,24,17,6,25,-159,6,26,-2164,7,23,-1877,7,24,25,7,25,-169,7,26,-3252,8,23,-1307,8,24,72,8,25,-79,8,26,-1414,9,24,29,9,25,-132,10,24,114,10,25,-16,11,24,-123,11,25,188,12,24,-187,12,25,137,13,24,-1205,13,25,260,14,25,84,15,25,58,16,25,35,17,25,26,18,25,52,19,25,2,20,25,64,21,25,62,22,24,-1253,22,25,275,23,24,-188,23,25,173,24,24,-150,24,25,183,25,24,133,25,25,-8,26,24,-164,26,25,-78,27,23,-1320,27,24,96,27,25,-54,27,26,-1542,28,23,-1914,28,24,30,28,25,-127,28,26,-2951,29,23,-2095,29,24,-55,29,25,-145,29,26,-2259,30,23,-1550,30,24,117,30,25,408,30,26,-1839,31,24,607,31,25,1085,32,24,723,32,25,1300,32,26,-85,33,24,288,33,25,1183,33,26,-262,34,25,1108,35,24,85,35,25,1090,35,26,275,35,27,-1317],"r-swept|x-ribbon":[0,35,-2371,1,35,-3722,2,35,-2623,3,35,-1705,4,35,-2251,5,35,-764,6,35,-670,7,34,-627,7,35,-573,8,17,-704,8,18,-695,8,19,-510,8,20,-266,8,21,-16,8,22,273,8,23,372,8,24,445,8,25,502,8,26,526,8,27,575,8,28,570,8,29,693,8,30,652,8,31,556,8,32,370,8,33,23,8,34,-355,8,35,-692,9,17,-1725,9,18,-361,9,19,-190,9,20,46,9,21,236,9,22,456,9,23,471,9,24,552,9,25,577,9,26,660,9,27,597,9,28,656,9,29,600,9,30,495,9,31,371,9,32,173,9,33,-232,9,34,-780,9,35,-1197,26,17,-1760,26,18,-409,26,19,-83,26,20,28,26,21,222,26,22,456,26,23,465,26,24,567,26,25,565,26,26,633,26,27,586,26,28,610,26,29,677,26,30,459,26,31,341,26,32,106,26,33,-247,26,34,-1017,26,35,-1270,27,17,-707,27,18,-715,27,19,-520,27,20,-382,27,21,-92,27,22,290,27,23,369,27,24,500,27,25,449,27,26,543,27,27,544,27,28,572,27,29,704,27,30,583,27,31,498,27,32,265,27,33,-66,27,34,-294,27,35,-769,28,27,-167,28,28,537,28,29,625,28,30,424,28,31,-434,28,34,-576,28,35,-652,29,27,-197,29,28,510,29,29,630,29,30,516,29,31,-314,29,35,-691,30,28,-501,30,29,98,30,30,84,30,31,-3,30,32,-1270,30,35,-977,31,29,-507,31,30,98,31,31,48,31,32,-1019,31,35,-1757,32,29,-1477,32,30,-546,32,31,-606,32,32,-1228,32,35,-769,33,29,-1202,33,30,-1674,33,31,-2630,33,32,-3399,33,35,-3038,34,29,-1515,34,30,-1668,34,31,-2426,34,35,-3388],"r-twin|h-bunny":[0,31,-4233,0,35,-1068,1,30,3177,1,31,1301,1,32,-8891,1,34,-1933,1,35,-1073,2,30,3898,2,31,1736,2,32,-8014,2,34,-2581,2,35,-1001,3,30,3134,3,31,715,3,32,-9934,3,34,191,3,35,-1902,4,30,-2101,4,31,-3726,4,32,-7908,4,34,3754,4,35,-1659,5,34,3507,5,35,-2345,6,33,340,6,34,2990,6,35,-3095,7,31,223,7,32,491,7,33,192,7,34,1893,8,16,-1372,8,17,-1964,8,18,3964,8,19,4696,8,20,4908,8,21,4965,8,22,4748,8,23,6627,8,24,193,8,25,279,8,26,283,8,27,-77,8,28,291,8,29,537,8,30,334,8,31,605,8,32,742,8,33,-739,27,17,-1512,27,18,3525,27,19,4652,27,20,4748,27,21,4984,27,22,4771,27,23,5705,27,24,216,27,25,277,27,26,448,27,27,-180,27,28,581,27,29,562,27,30,165,27,31,532,27,32,448,27,33,-247,27,34,-549,28,31,376,28,32,536,28,33,652,28,34,939,29,33,712,29,34,1632,29,35,-4164,30,34,2021,30,35,-3479,31,30,-2040,31,31,-3631,31,32,-22523,31,34,2155,31,35,-2779,32,30,3172,32,31,894,32,32,-9610,32,34,1615,32,35,-2454,33,30,3927,33,31,1722,33,32,-8017,33,34,-3222,33,35,-2133,34,30,3234,34,31,1325,34,32,-8880,34,34,-3513,34,35,-1919,35,31,-4264,35,34,-1657,35,35,-1657],"r-twin|h-cat":[0,34,-1622,0,35,-1402,1,28,306,1,29,657,1,34,-2296,1,35,-1712,2,28,1058,2,29,1385,2,34,1086,2,35,-1944,3,28,1320,3,29,1504,3,34,1522,3,35,-1944,4,27,326,4,28,1350,4,29,1493,4,34,1710,4,35,-2141,5,27,396,5,28,1108,5,29,-3299,5,33,425,5,34,1742,5,35,-2508,6,32,-231,6,33,820,6,34,1672,6,35,-1110,7,30,-309,7,31,35,7,32,208,7,33,289,7,34,1192,8,16,-4590,8,17,-5001,8,18,204,8,19,1639,8,20,1938,8,21,2116,8,22,2194,8,23,2598,8,24,-1787,8,25,-1541,8,26,-1194,8,27,-498,8,28,-224,8,29,-203,8,30,-5,8,31,166,8,32,-122,8,33,-1903,27,17,-4641,27,18,295,27,19,1566,27,20,1787,27,21,2170,27,22,2172,27,23,3138,27,24,-2030,27,25,-1592,27,26,-1211,27,27,-693,27,28,-226,27,29,-103,27,30,-138,27,31,111,27,32,176,27,33,-1746,28,30,-232,28,31,95,28,32,199,28,33,583,28,34,551,29,33,801,29,34,1233,29,35,-1809,30,27,428,30,28,1112,30,29,-3422,30,33,732,30,34,1611,30,35,-2857,31,27,289,31,28,1336,31,29,1463,31,34,1822,31,35,-2377,32,28,1314,32,29,1488,32,34,1948,32,35,-2e3,33,28,1092,33,29,1345,33,34,1928,33,35,-1874,34,28,322,34,29,630,34,34,10,34,35,-1654,35,34,-1840,35,35,-2408],"r-twin|h-flowers":[0,24,499,0,25,1404,0,26,393,1,24,617,1,25,1407,2,23,-1548,2,24,1130,2,25,1222,2,26,14,3,23,-1259,3,24,1155,3,25,977,3,26,297,4,24,1481,4,25,1232,5,23,-512,5,24,1368,5,25,751,5,26,-101,6,23,-295,6,24,1493,6,25,425,6,26,-796,7,23,-1884,7,24,1125,7,25,-438,8,23,2649,8,24,-16,8,25,-1016,8,26,-2212,9,24,4553,9,25,-4989,10,24,4637,11,24,1897,11,25,-5218,12,24,-2556,12,25,-2902,13,24,-2540,13,25,-2772,14,24,-2613,14,25,-2764,15,24,-2752,15,25,-2649,16,24,-2860,16,25,-2670,17,24,-2961,17,25,-2646,18,24,-2916,18,25,-2667,19,24,-2897,19,25,-2670,20,24,-2741,20,25,-2658,21,24,-2618,21,25,-2793,22,24,-2522,22,25,-2814,23,24,-2563,23,25,-2829,24,24,2945,24,25,-5533,25,24,4631,25,25,-8007,26,24,4673,26,25,-4972,27,23,2930,27,24,36,27,25,-984,27,26,-2310,28,23,-2052,28,24,1117,28,25,-580,29,23,-307,29,24,1380,29,25,439,29,26,-760,30,23,-557,30,24,1403,30,25,642,30,26,-187,31,24,1422,31,25,1168,32,23,-1450,32,24,1245,32,25,999,32,26,218,33,23,-1575,33,24,1128,33,25,1210,33,26,37,34,24,606,34,25,1410,35,24,584,35,25,1266,35,26,378],"r-twin|x-holly":[5,25,-340,5,26,-335,6,24,-325,6,25,-150,6,26,-157,6,27,-471,7,25,-248,7,26,-316,8,25,-1342,8,26,-1330],"r-twin|x-ribbon":[0,35,-681,1,35,-1039,2,35,-725,3,34,-502,3,35,-1142,4,34,-2677,4,35,-942,5,34,4941,5,35,-1957,6,33,-1091,6,34,4607,6,35,-3339,7,32,374,7,33,144,7,34,3106,8,16,-5980,8,17,-6723,8,18,2109,8,19,3889,8,20,4542,8,21,4736,8,22,4366,8,23,7609,8,24,-595,8,25,-81,8,26,263,8,27,176,8,28,-1380,8,29,-1077,8,30,764,8,31,584,8,32,810,8,33,-926,9,16,8995,9,17,8078,9,18,7104,9,19,4672,26,17,8548,26,18,6579,26,19,4555,27,17,-6044,27,18,1862,27,19,4229,27,20,4379,27,21,4672,27,22,4512,27,23,6212,27,24,-28,27,25,294,27,26,163,27,27,-84,27,28,-350,27,29,-370,27,30,719,27,31,451,27,32,801,27,33,-153,28,26,-730,28,27,1442,28,28,2025,28,29,1385,28,30,-732,28,32,227,28,33,860,28,34,1271,29,27,1545,29,28,2159,29,29,2280,29,30,1512,29,33,-69,29,34,1841,29,35,-5221,30,27,75,30,28,1737,30,29,1844,30,30,1533,30,31,595,30,34,2411,30,35,-4203,31,28,804,31,29,2057,31,30,2289,31,31,1612,31,34,-4894,31,35,-2817,32,28,922,32,29,1992,32,30,2197,32,31,1565,32,35,-2375,33,28,501,33,29,1536,33,30,1672,33,31,1148,33,35,-1872,34,28,-1602,34,29,371,34,30,751,34,31,-219,34,35,-1560,35,35,-2039],"r-wave|h-bunny":[0,31,-5788,0,35,-3447,1,30,649,1,31,983,1,32,-2867,1,35,-1892,2,30,1611,2,31,1466,2,32,-2511,2,35,-1757,3,30,1271,3,31,1206,3,32,-3022,3,35,-1775,4,30,-1127,4,31,-604,4,32,-5612,4,35,-1817,5,35,-1733,6,34,-1780,6,35,-1640,7,33,-1464,7,34,-1267,7,35,-1456,8,16,-695,8,17,-236,8,18,126,8,19,92,8,20,-190,8,21,-156,8,22,16,8,23,64,8,24,-42,8,25,-58,8,26,187,8,27,75,8,28,240,8,29,253,8,30,211,8,31,77,8,32,-209,8,33,-705,8,34,-1155,8,35,-1531,9,16,-265,9,17,-169,9,18,193,9,19,144,9,20,-78,9,21,-80,9,22,126,9,23,133,9,24,-7,9,25,8,9,26,114,9,27,130,9,28,261,9,29,253,9,30,141,9,31,-18,9,32,-345,9,33,-849,9,34,-1199,9,35,-1753,10,35,-2098,11,35,-2112,12,35,-2184,16,35,-2834,17,35,-2244,23,35,-2504,24,35,-2118,25,35,-2224,26,17,-191,26,18,177,26,19,160,26,20,-53,26,21,-110,26,22,76,26,23,132,26,24,-29,26,25,-22,26,26,171,26,27,105,26,28,255,26,29,280,26,30,158,26,31,-15,26,32,-367,26,33,-847,26,34,-1235,26,35,-1780,27,17,-267,27,18,136,27,19,123,27,20,-96,27,21,-161,27,22,25,27,23,68,27,24,-74,27,25,-52,27,26,168,27,27,117,27,28,204,27,29,316,27,30,179,27,31,17,27,32,-248,27,33,-798,27,34,-1104,27,35,-1536,28,33,-1525,28,34,-1365,28,35,-1454,29,34,-1705,29,35,-1638,30,35,-1739,31,30,-1127,31,31,-636,31,32,-5404,31,35,-1742,32,30,1296,32,31,1138,32,32,-3058,32,35,-1778,33,30,1433,33,31,1439,33,32,-2546,33,35,-1749,34,30,890,34,31,1061,34,32,-2781,34,35,-2034,35,31,-5826,35,35,-2231],"r-wave|h-cat":[0,35,-3423,1,29,-118,1,30,-32,1,35,-705,2,29,268,2,30,460,2,35,-98,3,29,856,3,30,798,3,35,-326,4,28,352,4,29,1164,4,30,471,4,35,-18,5,28,476,5,29,949,5,30,-6231,5,34,-2297,5,35,-1013,6,34,-979,6,35,-358,7,32,-459,7,33,-208,7,34,-501,7,35,-722,8,16,-616,8,17,-423,8,18,5,8,19,-40,8,20,-247,8,21,-215,8,22,160,8,23,260,8,24,209,8,25,340,8,26,729,8,27,649,8,28,905,8,29,1016,8,30,978,8,31,808,8,32,523,8,33,38,8,34,-585,8,35,-821,9,16,-574,9,17,-477,9,18,-35,9,19,6,9,20,-256,9,21,-238,9,22,153,9,23,235,9,24,184,9,25,242,9,26,384,9,27,407,9,28,673,9,29,721,9,30,664,9,31,537,9,32,247,9,33,-441,9,34,-964,9,35,-1785,26,17,-541,26,18,51,26,19,5,26,20,-255,26,21,-206,26,22,116,26,23,238,26,24,169,26,25,186,26,26,460,26,27,429,26,28,652,26,29,731,26,30,777,26,31,619,26,32,101,26,33,-422,26,34,-1154,26,35,-1850,27,17,-580,27,18,44,27,19,26,27,20,-229,27,21,-195,27,22,161,27,23,207,27,24,143,27,25,323,27,26,729,27,27,665,27,28,927,27,29,991,27,30,881,27,31,854,27,32,459,27,33,35,27,34,-266,27,35,-384,28,33,-334,28,34,-424,28,35,-179,29,34,-743,29,35,-213,30,28,529,30,29,930,30,30,-6149,30,34,-1311,30,35,6,31,28,379,31,29,1142,31,30,640,31,35,-481,32,29,881,32,30,632,32,35,-555,33,29,283,33,30,445,33,35,-1299,34,29,-87,34,30,81,34,35,-703,35,35,-985],"r-wave|h-flowers":[0,24,-1250,0,25,-13,0,26,-1009,0,27,-3011,1,25,68,2,24,-940,2,25,418,2,26,-1192,3,24,-839,3,25,346,3,26,-975,4,24,-296,4,25,329,5,23,-2047,5,24,138,5,25,157,5,26,-1313,6,23,-2137,6,24,128,6,25,-152,6,26,-2386,7,23,-2213,7,24,138,7,25,-142,8,23,-1330,8,24,169,8,25,-162,8,26,-1901,9,24,97,9,25,-168,10,24,116,10,25,-192,11,24,144,11,25,-80,12,24,-161,12,25,154,13,24,-322,13,25,152,14,24,-417,14,25,148,15,25,49,16,25,-107,17,25,28,18,25,51,19,25,-113,20,25,90,21,24,-396,21,25,135,22,24,-372,22,25,164,23,24,-119,23,25,182,24,24,73,24,25,13,25,24,144,25,25,-169,26,24,83,26,25,-145,27,23,-1333,27,24,175,27,25,-156,27,26,-1904,28,23,-1913,28,24,143,28,25,-172,29,23,-2031,29,24,126,29,25,-174,29,26,-2306,30,23,-2070,30,24,158,30,25,109,30,26,-1349,31,24,34,31,25,201,32,24,-813,32,25,114,32,26,-886,33,24,-897,33,25,211,33,26,-1027,34,25,45,35,24,-1280,35,25,203,35,26,-393,35,27,-2283],"r-wave|x-ribbon":[0,35,-3208,1,35,-3443,5,35,-3872,6,35,215,7,35,-222,8,34,-1815,8,35,940,9,16,-66,9,17,-52,9,18,537,9,19,603,9,20,154,9,21,305,9,22,585,9,23,748,9,24,633,9,25,729,9,26,952,9,27,935,9,28,1170,9,29,1302,9,30,1274,9,31,1176,9,32,732,9,33,486,9,34,-197,9,35,677,10,33,-1262,10,34,-601,10,35,7,11,34,-1906,11,35,1672,12,35,966,13,35,126,14,35,-1591,15,35,609,16,35,519,17,35,880,18,35,-2738,19,35,-1943,20,35,-1522,21,35,-1464,22,35,-1585,23,35,-1186,24,34,-2211,24,35,331,25,33,-1706,25,34,-642,25,35,1614,26,17,-125,26,18,624,26,19,567,26,20,247,26,21,269,26,22,650,26,23,767,26,24,555,26,25,669,26,26,1136,26,27,1025,26,28,1275,26,29,1346,26,30,1405,26,31,1250,26,32,927,26,33,395,26,34,152,26,35,2518,27,27,13,27,28,815,27,29,950,27,30,351,27,33,-1203,27,34,-1413,27,35,745,28,27,194,28,28,1129,28,29,1372,28,30,952,28,31,-1628,28,35,-11,29,27,-410,29,28,1085,29,29,1315,29,30,904,29,31,-623,29,35,-2047,30,29,602,30,30,1082,30,31,703,30,32,-1047,31,29,937,31,30,1160,31,31,893,31,32,-884,32,29,428,32,30,912,32,31,622,32,32,-916,33,29,-194,33,30,177,33,31,-36,33,32,-1948,33,35,-1819,34,29,-1655,34,30,-755,34,31,-1015,35,35,-641]}}};function Sd(i){let e=new Float32Array(3600).fill(NaN);for(let t=0;t<i.length;t+=3)e[i[t]*100+i[t+1]]=i[t+2]*1e-5;return e}function Eg(i,e,t){let n=e/10-.5,s=(t+90)/5-.5,r=Math.floor(n),a=Math.floor(s),o=n-r,c=s-a,l=0,h=0;for(let d=0;d<2;d++)for(let u=0;u<2;u++){let f=i[((r+d)%36+36)%36*100+a+u];if(!(f>-1e9))continue;let g=(d?o:1-o)*(u?c:1-c);l+=g*f,h+=g}return h>1e-6?l/h:0}function wd(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],c=s-e[2],l=Math.hypot(a,o,c)||1e-9,h=(Math.atan2(a,c)*180/Math.PI+360)%360,d=Math.asin(Math.max(-1,Math.min(1,o/l)))*180/Math.PI,u=(l+Eg(i,h,d))/l;return r[0]=e[0]+a*u,r[1]=e[1]+o*u,r[2]=e[2]+c*u,r}var Kh=new URL("./",import.meta.url).href,Zh=!1;function fy(i,e){Kh=String(i).replace(/\/?$/,"/"),Zh=!!e}var hr=(Ct.v||"1")+".3cfd4f0e",Ad={"s-1":"#ffe7d6","s-2":"#f7d3b6","s-3":"#e7b58e","s-4":"#c48a62"},gc={"c-black":"#2e2624","c-brown":"#5b3a24","c-choco":"#7a4a2b","c-blonde":"#e0b25a","c-pink":"#f28fb0","c-lav":"#a98be8","c-mint":"#6fcfb8","c-silver":"#c3c9d3"},Td={"c-black":"#6b5d5a","c-brown":"#9a6a48","c-choco":"#b98258","c-blonde":"#fbe3a6","c-pink":"#ffd0df","c-lav":"#dccdfc","c-mint":"#c4f2e6","c-silver":"#f2f5fa"},Sc=1.15,Rg={"z-1":.9,"z-2":.95,"z-3":1,"z-4":1.05,"z-5":1.1},Cg=["Spine","Spine1","Spine2","Neck","Head","LeftLeg","LeftFoot","RightLeg","RightFoot","LeftForeArm","LeftHand","RightForeArm","RightHand"];function $h(i){let e=i.g==="m",t=Object.assign({s:"s-1",r:e?"r-short":"r-long",c:"c-black",u:"u-uniform",l:e?"l-pants":"l-skirt",k:"k-sneaker",z:"z-3"},i);return t.g=e?"m":"f",t.u&&Ct.parts[t.u]&&Ct.parts[t.u].full&&delete t.l,t}var Pg=["g","z","s","r","c","u","l","k","h","e","j","w","x","a","m"];function ha(i){let e=$h(i||{}),t=n=>Ct.parts[n]||(Ct.props||[]).includes(n);return Pg.map(n=>e[n]&&(n==="g"||n==="z"||n==="s"||n==="c"||(n==="m"?os[e[n]]:t(e[n])))?e[n]:"").join("|")}function py(i){return!!Ct.parts[i]||(Ct.props||[]).includes(i)}var my=Ct,Ig=Ct.v||"1",jd=new uc;jd.setMeshoptDecoder(md);var bc=new Map;function Lg(i){return Zh?i.text().then(e=>{let t=atob(e.trim()),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}):i.arrayBuffer()}function oa(i){return bc.has(i)||bc.set(i,fetch(Kh+i+(Zh?".txt":"")+"?v="+Ig,{cache:"force-cache"}).then(e=>{if(!e.ok)throw new Error(i+" "+e.status);return Lg(e)}).then(e=>jd.parseAsync(e,Kh)).catch(e=>{throw bc.delete(i),e})),bc.get(i)}var aa=i=>new Se(i),Bh=null;function Kd(){if(!Bh){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,4,64,64,62);n.addColorStop(0,"rgba(40,24,16,.42)"),n.addColorStop(.6,"rgba(40,24,16,.16)"),n.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),Bh=new Ir(e)}let i=new rt(new $i(.5,.34),new tn({map:Bh,transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-1,i}var or=null;function Dg(){if(!or){let i=new Uint8Array([138,138,138,141,162,232,255,255]);or=new Ti(i,i.length,1,Ys),or.minFilter=or.magFilter=vt,or.needsUpdate=!0}return or}function Fg(i){i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
    float rimF = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
    rimF = smoothstep(0.58, 0.9, rimF) * (0.35 + 0.65 * clamp(normal.y * 0.8 + 0.4, 0.0, 1.0));
    reflectedLight.directDiffuse += rimF * 0.55 * material.diffuseColor;`)}function ca(i,e){let t=new Dr({color:e||i.color.clone(),gradientMap:Dg(),side:i.side});return i.map&&(t.map=i.map),i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=i.depthWrite),i.alphaTest&&(t.alphaTest=i.alphaTest),i.emissive&&i.emissive.getHex()&&(t.emissive=i.emissive.clone(),t.emissiveIntensity=i.emissiveIntensity),t.name=i.name,t.onBeforeCompile=Fg,t.customProgramCacheKey=()=>"seoulful-toon",t}var Ed={flapL:["ahead",24,.8],flapR:["ahead",-24,.8],bob:["up",0,.5],spinU:["up",0,.4],spinF:["ahead",0,.6],sway:["side",6,.35],swing:["side",6,.45]},Ng={"w-angel":[.4,1],"w-butterfly":[.6,2],"w-batwing":[.55,1.4]},Ug=new Set(["eye-white","eye-shade","iris","iris-dark","iris-light","iris-glow","pupil","shine","lash","brow","mouth","mouth-in","tongue","cheek"]);function Rd(i,e){let t=new tn({color:e||i.color.clone(),side:i.side});return i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=!1),t.name=i.name,t}var Jd={value:.004};function Yd(i){let e={};return i.emissive.getHSL(e),e.l*(i.emissiveIntensity||0)>.25}function Og(i){let e={};return i.getHSL(e,bt),new Se().setHSL(e.h,Math.min(1,e.s*.85+.12),Math.max(.04,e.l*.34),bt).lerp(kg,.22)}var kg=new Se("#3b2620");function Bg(i){let e=new tn({color:i,side:Ot});return e.onBeforeCompile=t=>{t.uniforms.olw=Jd,t.vertexShader=`uniform float olw;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      #ifdef USE_SKINNING
        vec3 olN = objectNormal;
      #else
        vec3 olN = normal;
      #endif
      mvPosition.xyz += normalize(normalMatrix * olN) * olw;
      gl_Position = projectionMatrix * mvPosition;`)},e.customProgramCacheKey=()=>"seoulful-line",e}function Mc(i){let t=(Array.isArray(i.material)?i.material:[i.material]).map(s=>Bg(Og(s.color||new Se(3355443)))),n=i.isSkinnedMesh?new Ai(i.geometry,Array.isArray(i.material)?t:t[0]):new rt(i.geometry,Array.isArray(i.material)?t:t[0]);return i.isSkinnedMesh&&n.bind(i.skeleton,i.bindMatrix),n.frustumCulled=!1,n.userData.line=!0,n.renderOrder=i.renderOrder,i.add(n),n}function Ec(i,e,t,n=.0016){let s=2*(t||i.position.length())*Math.tan(i.fov*at/2)/Math.max(1,e);Jd.value=Math.min(.008,Math.max(n,s*1.7))}function zg(i,e){return ca(i,aa(Ad[e.s]||Ad["s-1"]))}function Gg(i,e){let t=i.getAttribute("color"),n=i.index;if(!t||!n||!e.size)return n;let s=new Uint8Array(t.count);for(let c=0;c<t.count;c++){let l=Math.round(t.getX(c)*255)+256*Math.round(t.getY(c)*255);e.has(l)&&(s[c]=1)}let r=n.array,a=new r.constructor(r.length),o=0;for(let c=0;c<r.length;c+=3){let l=r[c],h=r[c+1],d=r[c+2];s[l]&&s[h]&&s[d]||(a[o++]=l,a[o++]=h,a[o++]=d)}return new xt(a.slice(0,o),1)}function Vg(i){let e=new Set;return i.scene.traverse(t=>{let n=t.isMesh&&t.material&&t.material.userData&&t.material.userData.hide;if(n)for(let[s,r]of JSON.parse(n))for(let a=s;a<=r;a++)e.add(a)}),e}var zh=new Map,yn=36;function Hg(i,e,t,n){i.updateMatrixWorld(!0);let s=new L;e.getWorldPosition(s);let r=new L,a=(h,d)=>(Math.atan2(d-s.z,h-s.x)/(2*Math.PI)+.5)*yn,o=new Array(yn).fill(1/0);for(let h of t){let d=h.geometry.getAttribute("position"),u=h.geometry.index;if(!u)continue;let f=new Float32Array(d.count*3);for(let x=0;x<d.count;x++)h.getVertexPosition(x,r).applyMatrix4(h.matrixWorld),f[3*x]=r.x,f[3*x+1]=r.y,f[3*x+2]=r.z;let g=u.array;for(let x=0;x<g.length;x+=3){let m=[g[x],g[x+1],g[x+2]];if(m.some(M=>f[3*M+1]>s.y+.3||(f[3*M]-s.x)**2+(f[3*M+2]-s.z)**2>.26*.26))continue;let p=Math.min(f[3*m[0]+1],f[3*m[1]+1],f[3*m[2]+1]),S=m.map(M=>a(f[3*M],f[3*M+2])),T=Math.min(...S),y=Math.max(...S);if(y-T>yn/2){let M=S.map(A=>A<yn/2?A+yn:A);T=Math.min(...M),y=Math.max(...M)}for(let M=Math.floor(T);M<=Math.floor(y);M++){let A=M%yn;p<o[A]&&(o[A]=p)}}}if(o.some(h=>!Number.isFinite(h)))return null;let c=o.map((h,d)=>Math.max(h,o[(d+1)%yn],o[(d+yn-1)%yn])+.004);return{over:n.map(h=>{let d=h.geometry.getAttribute("position").count,u=new Float32Array(d);for(let f=0;f<d;f++){h.getVertexPosition(f,r).applyMatrix4(h.matrixWorld);let g=a(r.x,r.z)-.5,x=(Math.floor(g)+yn)%yn;u[f]=r.y-Math.max(c[x],c[(x+1)%yn])}return new xt(u,1)}),hem:c}}var Gh=new Map,Zn=12;function Wg(i,e,t,n){i.updateMatrixWorld(!0);let s=new L,r=e.map(u=>u.getWorldPosition(new L)),a=u=>Math.abs(u-r[0].x)<=Math.abs(u-r[1].x)?0:1,o=(u,f,g)=>(Math.atan2(g-r[u].z,f-r[u].x)/(2*Math.PI)+.5)*Zn,c=[new Array(Zn).fill(1/0),new Array(Zn).fill(1/0)];for(let u of t){let f=u.geometry.getAttribute("position"),g=u.geometry.index;if(!g)continue;let x=new Float32Array(f.count*3);for(let p=0;p<f.count;p++)u.getVertexPosition(p,s).applyMatrix4(u.matrixWorld),x[3*p]=s.x,x[3*p+1]=s.y,x[3*p+2]=s.z;let m=g.array;for(let p=0;p<m.length;p+=3){let S=3*m[p],T=3*m[p+1],y=3*m[p+2],M=(x[S]+x[T]+x[y])/3,A=(x[S+2]+x[T+2]+x[y+2])/3,R=a(M);if((M-r[R].x)**2+(A-r[R].z)**2>.16*.16)continue;let _=Math.min(x[S+1],x[T+1],x[y+1]),w=Math.floor(o(R,M,A))%Zn;_<c[R][w]&&(c[R][w]=_)}}let l=c.map(u=>u.map((f,g)=>{let x=[f,u[(g+1)%Zn],u[(g+Zn-1)%Zn]].filter(Number.isFinite);return x.length?Math.max(...x)+.004:1/0})),h=!1,d=n.map(u=>{let f=u.geometry.getAttribute("position").count,g=new Float32Array(f);for(let x=0;x<f;x++){u.getVertexPosition(x,s).applyMatrix4(u.matrixWorld);let m=a(s.x),p=(Math.floor(o(m,s.x,s.z)-.5)+Zn)%Zn;g[x]=s.y-Math.max(l[m][p],l[m][(p+1)%Zn]),g[x]>0&&(h=!0)}return new xt(g,1)});return h?{over:d}:null}function qg(i,e,t,n){i.forEach((s,r)=>{let a=s.geometry,o=new Ut;for(let l in a.attributes)o.setAttribute(l,a.attributes[l]);o.setAttribute(t,e[r]),o.setIndex(a.index),o.boundingSphere=a.boundingSphere,s.geometry=o;let c=(l,h)=>{let d=l.onBeforeCompile,u=l.customProgramCacheKey?l.customProgramCacheKey():"";l.onBeforeCompile=(f,g)=>{d&&d(f,g),f.vertexShader="attribute float "+t+`;
varying float v_`+t+`;
`+f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
v_`+t+" = "+t+";"),f.fragmentShader="varying float v_"+t+`;
`+f.fragmentShader.replace("void main() {",`void main() {
if (v_`+t+" > 0.0) discard;")},l.customProgramCacheKey=()=>u+"|"+h};(Array.isArray(s.material)?s.material:[s.material]).forEach(l=>c(l,n));for(let l of s.children)l.userData.line&&(l.geometry=o,(Array.isArray(l.material)?l.material:[l.material]).forEach(h=>c(h,n+"-line")))})}var Zd=i=>i+"/body.glb";function $d(i){let e=["r","u","l","k","h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&Ct.parts[o]),t=Ct.props||[],n=["h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&!Ct.parts[o]&&t.includes(o)),s=i.m&&os[i.m],r=s&&t.includes(s)&&!n.includes(s)?s:"";r&&n.push(r);let a=[...new Set(n.map(o=>o[0]))];return{ids:e,want:n,mp:r,groups:a}}function Qd(i){let e=$h(i||{}),{ids:t,groups:n}=$d(e);return Promise.all([Zd(e.g),...t.map(s=>e.g+"/"+s+".glb"),...n.map(s=>e.g+"/props-"+s+".glb")].map(oa))}var Jh=class{constructor(e){this.look=$h(e||{}),this.root=new wt,this.bones={},this.meshes=[],this.move=null,this.t0=0,this.worn={},this.grown=[]}async build(){let e=this.look,{ids:t,want:n,mp:s,groups:r}=$d(e),[a,...o]=await Promise.all([oa(Zd(e.g)),...t.map(u=>oa(e.g+"/"+u+".glb"))]),c=hc(a.scene);this.root.add(c),this.root.add(Kd()),c.traverse(u=>{u.isBone&&(this.bones[u.name.replace(/^mixamorig:?/,"")]=u)});let l=new Set;o.forEach(u=>Vg(u).forEach(f=>l.add(f)));let h=null;return this.face=[],c.traverse(u=>{if(!u.isMesh||u.userData.line)return;let f=u.material.name;f==="skin"?(u.material=zg(u.material,e),u.geometry.getAttribute("color")&&(h=u,u.geometry=u.geometry.clone(),u.geometry.setIndex(Gg(u.geometry,l)),Mc(u))):Ug.has(f)?(u.material=Rd(u.material,f==="brow"?aa(gc[e.c]||gc["c-black"]).lerp(aa("#241812"),.45):null),f==="cheek"&&(u.material.transparent=!0,u.material.depthWrite=!1,u.renderOrder=1)):u.material=ca(u.material),u.morphTargetDictionary&&this.face.push(u),u.frustumCulled=!1,this.meshes.push(u)}),o.forEach((u,f)=>this.wear(t[f],u,h)),this.loose(),this.shod(),this.moveProps=[],this.held=[],this.grips=[],this.alive=[],this.tossed=[],this.glasses=[],this.packs=[],(await Promise.all(r.map(u=>oa(e.g+"/props-"+u+".glb")))).forEach(u=>this.attach(u,n,s)),this.fitHead(),this.tall(Rg[e.z]||1),this.onHair(),this.ready=!0,this}wear(e,t,n){let s=e[0]==="r",r=(Ct.props||[]).includes(this.look.h);t.scene.traverse(a=>{if(!a.isSkinnedMesh||s&&r&&/~top$/.test(a.material.name))return;let o=a.skeleton.bones.map(d=>this.bones[d.name.replace(/^mixamorig:?/,"")]||this.bones.Head),c=/^p\d/.test(a.material.name)?+String(a.material.name).replace(/^p(\d+).*/,"$1"):-1,l=s&&c===1?Rd(a.material,aa(Td[this.look.c]||Td["c-black"])):ca(a.material,s&&c===0?aa(gc[this.look.c]||gc["c-black"]):null);if(l.side=on,s)c===1&&(l.polygonOffset=!0,l.polygonOffsetFactor=-1,l.polygonOffsetUnits=-1);else{let d={u:2+Math.max(0,c),k:4}[e[0]]||0;d&&(l.polygonOffset=!0,l.polygonOffsetFactor=-d,l.polygonOffsetUnits=-d)}let h=new Ai(a.geometry,l);h.bind(new Ji(o,a.skeleton.boneInverses),a.bindMatrix),h.frustumCulled=!1,h.userData.part=e,(n?n.parent:this.root).add(h),this.meshes.push(h),!(s&&c===1)&&!l.transparent&&Mc(h),s||(h.userData.piece=c,(this.worn[e[0]]=this.worn[e[0]]||[]).push(h))})}loose(){let e=this.look,t=Ct.parts[e.u]||{},n=this.worn.u,s=this.worn.l;if(n&&t.full&&(s=n.filter(c=>c.userData.piece===1),n=n.filter(c=>c.userData.piece===0)),!n||!n.length||!s||!s.length||!this.bones.Hips||t.tucked)return;let r=e.g+"|"+e.u+"|"+(t.full?"":e.l);zh.has(r)||zh.set(r,Hg(this.root,this.bones.Hips,n,s));let a=zh.get(r);if(!a)return;this.hem=a.hem;let o=a.over;s.forEach((c,l)=>{let h=c.geometry,d=new Ut;for(let f in h.attributes)d.setAttribute(f,h.attributes[f]);d.setAttribute("overHem",o[l]),d.setIndex(h.index),d.boundingSphere=h.boundingSphere,c.geometry=d;let u=(f,g)=>{let x=f.onBeforeCompile;f.onBeforeCompile=(m,p)=>{x&&x(m,p),m.vertexShader=`attribute float overHem;
varying float vOverHem;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOverHem = overHem;`),m.fragmentShader=`varying float vOverHem;
`+m.fragmentShader.replace("void main() {",`void main() {
if (vOverHem > 0.0) discard;`)},f.customProgramCacheKey=()=>g};u(c.material,"seoulful-under-top");for(let f of c.children)f.userData.line&&(f.geometry=d,(Array.isArray(f.material)?f.material:[f.material]).forEach(g=>u(g,"seoulful-under-top-line")))})}shod(){let e=this.look,t=Ct.parts[e.u]||{},n=t.full?this.worn.u:this.worn.l,s=this.worn.k,r=[this.bones.LeftFoot,this.bones.RightFoot];if(!n||!n.length||!s||!s.length||!r[0]||!r[1])return;let a=e.g+"|"+(t.full?e.u:e.l)+"|"+e.k;Gh.has(a)||Gh.set(a,Wg(this.root,r,n,s));let o=Gh.get(a);o&&qg(s,o.over,"overLeg","seoulful-in-leg")}attach(e,t,n){let s=[];e.scene.traverse(r=>{let a=r.name&&t.find(o=>r.name===o);a&&r.parent&&s.push([a,r])});for(let[r,a]of s){let o=this.bones[a.parent.name.replace(/^mixamorig:?/,"")];if(!o)continue;let c=a.clone();c.traverse(h=>{h.frustumCulled=!1;let d=h.name.split("~")[1];Ed[d]&&this.alive.push({node:h,kind:d,k:Ng[r]||[1,1],kept:/^(flap|sway)/.test(d)}),d==="toss"&&this.tossed.push({node:h}),d==="pack"&&this.packs.push(h),!(!h.isMesh||h.userData.line)&&(h.material=ca(h.material),!h.material.transparent&&!Yd(h.material)&&Mc(h))});let l=r[0]==="a"?this.grip(o,c):r===n?this.about(o,c,r[0]==="e"):(o.add(c),c);r===n?(l.visible=!1,l.userData.s0=l.scale.x,this.moveProps.push(l)):r[0]==="a"?this.held.push(l):r[0]==="e"&&this.glasses.push(l)}}about(e,t,n){e.add(t),this.root.updateMatrixWorld(!0);let s=new At().setFromObject(t,!0),r=s.getCenter(new L);n&&(r.z=s.max.z);let a=e.worldToLocal(r),o=new wt;return o.position.copy(a),t.position.sub(a),e.add(o),o.add(t),o}grip(e,t){let n=Ct.bodies&&Ct.bodies[this.look.g];if(!n||!n.fist)return e.add(t),t;t.updateMatrix();let s=new L().fromArray(n.fist).applyMatrix4(t.matrix),r=Zg[t.name];if(r){this.root.updateMatrixWorld(!0);let o=new L(0,0,1).transformDirection(this.root.matrixWorld).transformDirection(new Pe().copy(e.matrixWorld).invert()),c=new _t().setFromAxisAngle(o,r*at);t.position.sub(s).applyQuaternion(c).add(s),t.quaternion.premultiply(c),t.updateMatrix()}let a=new wt;return a.position.copy(s),t.position.sub(s),a.add(t),a.userData.id=t.name,e.add(a),this.grips.push(a),a}onHair(){let e=this.meshes.filter(h=>/^r-/.test(h.userData.part||""));if(!this.packs.length||!e.length||!this.bones.Head)return;let t=this.bones.Head;t.scale.setScalar(Sc),this.root.updateMatrixWorld(!0);let n=new At;for(let h of this.packs)n.expandByObject(h,!0);let s=new L,r=1/0,a=1/0,o=-1/0;for(let h of e){let d=h.geometry.getAttribute("position").count;for(let u=0;u<d;u++)h.getVertexPosition(u,s).applyMatrix4(h.matrixWorld),!(s.y<n.min.y||s.y>n.max.y||s.z>n.max.z)&&(s.x>n.min.x&&s.x<n.max.x&&s.z<r&&(r=s.z),s.x<a&&(a=s.x),s.x>o&&(o=s.x))}t.scale.setScalar(1);let c=n.max.x-n.min.x;if(r===1/0||o-a<c*.9)return;let l=n.min.z-(r-(n.max.z-n.min.z)*.66);if(!(l<=0)){for(let h of this.packs)h.getWorldPosition(s),s.z-=l,h.position.copy(h.parent.worldToLocal(s));this.root.updateMatrixWorld(!0)}}fitHead(){let e=this.bones.Head,t=this.look,n=Md[t.g];if(!e||!n)return;let s=new L,r=new Le,a=new Pe,o=!1,c=(x,m)=>{o||(this.root.updateMatrixWorld(!0),o=!0),x.position.add(s.fromArray(m).applyMatrix3(r.setFromMatrix4(a.copy(x.parent.matrixWorld).invert().multiply(e.matrixWorld))))},l=x=>x.name||x.children[0]&&x.children[0].name||"";for(let x of this.glasses.concat(this.moveProps)){let m=n.e[l(x)];m&&c(x,m)}if(this.all)return;let h=Ct.props||[],d=h.includes(t.h)&&h.includes(t.x)?n.x[t.h+"|"+t.x]:void 0,u=kh[t.g];for(let x of[t.h,t.x]){let m=t.r&&x&&(x===t.h||!t.h),p=m&&n.r?n.r[t.r+"|"+x]:void 0,S=m&&u?u.t[t.r+"|"+x]:void 0;if(!p&&!S)continue;let T=null;if(this.root.traverse(y=>{!T&&y.name===x&&!y.isBone&&(T=y)}),!!T){if(p&&p.length===3)c(T,p);else if(p&&T.parent===e){let y=new L().fromArray(n.c),M=new L(p[0],p[1],p[2]);T.position.sub(y).multiply(M).add(y),T.position.y+=p[3],T.position.z+=p[4],T.scale.multiply(M)}S&&(this.root.updateMatrixWorld(!0),Cb(T,e,u.c,S))}}let f=d;if(f===void 0)return;let g=null;this.root.traverse(x=>{!g&&x.name===t.x&&!x.isBone&&(g=x)}),g&&(f===0?g.visible=!1:c(g,f))}tall(e){let t=this.bones;t.Hips&&(t.Hips.position.y*=1+(e-1)*1);for(let n of Cg)t[n]&&t[n].position.multiplyScalar(e);for(let n of["LeftUpLeg","RightUpLeg"])t[n]&&(t[n].position.y*=e);this.rest()}rest(){let e=this.bones;this.root.updateMatrixWorld(!0),this.q0={},this.p0={},this.frame(),Nd(this,sa,1),this.root.updateMatrixWorld(!0),this.frame();for(let t of this.grips||[])t.userData.rest=Wh(this.root,t.parent,new _t);for(let t of this.tossed||[])t.p0||(t.p0=t.node.position.clone(),t.q0=t.node.quaternion.clone());for(let t of this.alive||[]){let n=Wh(this.root,t.node.parent,new _t).invert();t.q0||(t.q0=t.node.quaternion.clone(),t.p0=t.node.position.clone()),t.axis={up:new L(0,1,0),ahead:new L(0,0,1),side:new L(1,0,0)};for(let s in t.axis)t.axis[s].applyQuaternion(n)}}frame(){let e=this.bones;this.A={};for(let t in e){let n=e[t];this.q0[t]=n.quaternion.clone(),this.p0[t]=n.position.clone();let s=new _t;n.parent&&n.parent.getWorldQuaternion(s);let r=new _t;this.root.getWorldQuaternion(r),this.A[t]=r.invert().multiply(s).invert()}}busyHand(){return this.busy==null&&(this.busy=!!(this.held.length&&this.moveProps.some(e=>e.parent===this.held[0].parent))),this.busy}at(e,t,n){let s=this.bones;for(let g of this.grown)g.matrixAutoUpdate=!0;this.grown.length=0;for(let g in s)s[g].quaternion.copy(this.q0[g]),s[g].position.copy(this.p0[g]),s[g].scale.setScalar(g==="Head"?Sc:1);this.root.position.set(0,0,0),this.root.rotation.set(0,this.turn||0,0),this.root.scale.set(1,1,1);let r=e&&Pt[e],a=r?Math.min(t,r.ms)/r.ms:0,o=r&&r.held&&this.held&&this.held.length&&!(os[e]&&this.moveProps&&this.moveProps.length&&this.busyHand())?r.held:null,c=r?o?o(a,t):r.at(a,t,this.look):yd(t),l=!!(r&&this.moveProps&&this.moveProps.length&&os[e]),h=l?jg(a,os[e][0]==="e",n):1;this.moveProps&&this.moveProps.forEach(g=>{g.visible=l&&h>.05,g.scale.setScalar((g.userData.s0||1)*Math.max(.001,h))});let d=this.holdTable||vd,u=g=>r&&d[e]&&d[e][g]||d[""]&&d[""][g];if(this.held&&this.held.length){let g=l&&this.busyHand(),x=r?a*r.ms:0;for(let m of this.held){let p=g?1-h:this.hideNone?1:Qg(r&&d[e]&&d[e][m.userData.id],x,r&&r.ms);m.visible=p>.05,m.scale.setScalar(Math.max(.001,p))}}let f=r&&!o?1-Kg(a):1;if(f>0&&this.held&&this.held.length){let g=c.RightArm||[0,0,0];c=Object.assign({},c,{RightArm:[g[0],g[1],g[2]-Yg*f]})}if(this.glasses&&this.glasses.forEach(g=>{g.visible=!l||os[e][0]!=="e"||h<=.05}),this.looks(r&&_d[e]||"",r?Jg(a):0,r||this.blinks?t:1e3),Nd(this,c,1),this.root.updateMatrixWorld(!0),this.grips&&this.grips.length){for(let g of this.grips){let x=this.tiltNow||$g(u(g.userData.id),a);Pd.setFromUnitVectors(eb,nb.set(x[0],x[1],x[2]).normalize()),g.quaternion.copy(Wh(this.root,g.parent,ib).invert().multiply(Pd).multiply(g.userData.rest))}this.root.updateMatrixWorld(!0)}if(this.tossed&&this.tossed.length){let[g,x]=l&&c.toss||[0,0];for(let m of this.tossed){if(!m.p0||(m.node.position.copy(m.p0),m.node.quaternion.copy(m.q0),!g&&!x))continue;let p=m.node.parent,S=p.localToWorld(ef.copy(m.p0));S.y+=g,m.node.position.copy(p.worldToLocal(S)),this.root.getWorldQuaternion(Hh),Fd.set(1,0,0).applyQuaternion(Hh).applyQuaternion(p.getWorldQuaternion(Hh).invert()).normalize(),m.node.quaternion.setFromAxisAngle(Fd,x*at).multiply(m.q0)}this.root.updateMatrixWorld(!0)}if(this.alive&&this.alive.length&&this.alive[0].axis){let g=this.blinks?performance.now()/1e3:0;for(let x of this.alive){let[m,p,S]=Ed[x.kind],T=this.phase!=null?this.phase:2*Math.PI*S*x.k[1]*g;x.node.position.copy(x.p0),x.kind==="bob"&&x.node.position.addScaledVector(x.axis.up,.007*Math.sin(T));let y=p?p*x.k[0]*at*(x.kind==="sway"?Math.sin(T):(1-Math.cos(T))/2):T;x.node.quaternion.setFromAxisAngle(x.axis[m],x.kind==="bob"?0:y).multiply(x.q0),x.kept&&x.node.scale.setScalar(1/this.root.scale.x)}this.root.updateMatrixWorld(!0)}}looks(e,t,n){if(!this.face.length)return;let s={};for(let r of String(e||"").split(" "))for(let a of Xg[r]||[])s[a]=Math.max(s[a]||0,t);if(!e){let r=n%3600,a=r<150?Math.sin(r/150*Math.PI):0;s["blink-L"]=s["blink-R"]=a}for(let r of this.face){let a=r.morphTargetDictionary,o=r.morphTargetInfluences;for(let c in a)o[a[c]]=s[c]||0}}dispose(){this.root&&this.root.traverse(e=>{e.userData&&e.userData.bent&&e.geometry&&e.geometry.dispose()}),this.root.traverse(e=>{e.isMesh&&e.material&&(e.material.dispose(),e.geometry&&e.geometry.index&&e.material.name==="skin"&&e.geometry.dispose())}),this.root.removeFromParent()}},Xg={happy:["happy-L","happy-R"],wink:["happy-R"],open:["open"],tongue:["tongue"],puff:["puff"],dizzy:["blink-L","blink-R"]},Vh=1-.03-.22;function jg(i,e,t){let n=h=>(h=h<0?0:h>1?1:h,h*h*(3-2*h)),s=!t||t.first,r=t?t.off:0,a=s?e?i>0?1:0:n((i-.03)/.12):1;if(r==null)return a;if(e)return i<1?a:0;let o=Math.min(r,.999),c=o>Vh?Vh+(i-o)*(1-Vh)/(1-o):i,l=n((1-c-.03)/.22);return a*l*l}function Kg(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.1)*e((1-i)/.1)}function Jg(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.12)*e((1-i)/.12)}var Yg=18,Zg={"a-balloon":16,"a-candy":-10,"a-krathong":10};function $g(i,e){let t=i&&i.d;if(!t||!t.length)return tb;let n=0;for(;n<t.length-1&&t[n+1][0]<=e;)n++;let s=t[n],r=t[Math.min(n+1,t.length-1)],a=r[0]>s[0]?Math.min(1,Math.max(0,(e-s[0])/(r[0]-s[0]))):0,o=s[1]?s[2]:r[2],c=r[1]?r[2]:s[2],l=(s[1]+(r[1]-s[1])*a)*at,h=(o+(c-o)*a)*at;return[-Math.sin(l)*Math.cos(h),Math.cos(l),Math.sin(l)*Math.sin(h)]}function Qg(i,e,t){let n=i&&i.hide;if(!n)return 1;let s=1;for(let[r,a]of n){let o=Math.max(1,Math.min(Cd,r)),c=Math.max(1,Math.min(Cd,(t||1/0)-a)),l=e<r?(r-e)/o:e>a?(e-a)/c:0,h=l>=1?1:l*l*(3-2*l);h<s&&(s=h)}return s}var Cd=120,eb=new L(0,1,0),tb=[0,1,0],Pd=new _t,nb=new L,Id=new _t,Ld=new xn,ib=new _t,Dd=new _t,Hh=new _t,ef=new L,Fd=new L;function Wh(i,e,t){return i.getWorldQuaternion(Dd),e.getWorldQuaternion(t),t.premultiply(Dd.invert())}var at=Math.PI/180;function Nd(i,e,t){let n=i.bones;for(let s in e){let r=n[s];if(!r)continue;let a=e[s];Ld.set(a[0]*at*t,a[1]*at*t,a[2]*at*t,"YXZ"),Id.setFromEuler(Ld);let o=i.A[s];r.quaternion.copy(o).multiply(Id).multiply(o.clone().invert()).multiply(i.q0[s])}e.root&&i.root.position.set(e.root[0]||0,e.root[1]||0,e.root[2]||0),e.turn&&(i.root.rotation.y+=e.turn*at),e.tilt&&(i.root.rotation.x=(e.tilt[0]||0)*at,i.root.rotation.z=(e.tilt[1]||0)*at),e.size&&i.root.scale.set(e.size[0],e.size[1],e.size[2]),e.grow&&rb(i,e.grow)}var Ud=new Pe,sb=new Pe;function rb(i,e){for(let t in e){let n=i.bones[t];if(n){Od(i,e,n);for(let s=0;s<n.children.length;s++)Od(i,e,n.children[s])}}}function Od(i,e,t){if(i.grown.includes(t))return;let n=kd(i,e,t),s=kd(i,e,t.parent);!n&&!s||(t.matrix.makeTranslation(t.position.x,t.position.y,t.position.z),s&&t.matrix.multiply(Ud.makeScale(1/s[0],1/s[1],1/s[2])),t.matrix.multiply(sb.compose(ef.set(0,0,0),t.quaternion,t.scale)),n&&t.matrix.multiply(Ud.makeScale(n[0],n[1],n[2])),t.matrixAutoUpdate=!1,i.grown.push(t))}function kd(i,e,t){if(t){for(let n in e)if(i.bones[n]===t)return e[n]}return null}var Nn=null,mt=null,ls=null,Un=null,$n=null,ra=null;function gy(){if(ra!==null)return!ra;try{ra=!Oi().getContext()}catch{ra=!0}return!ra}function Oi(){if(Nn)return Nn;Nn=new oc({antialias:!0,alpha:!0,powerPreference:"default",preserveDrawingBuffer:!1}),Nn.outputColorSpace=bt,Nn.toneMapping=Hr,Nn.toneMappingExposure=.92,Nn.setClearColor(0,0),mt=new ji,mt.environmentIntensity=.42,mt.add(new kr(16774378,12167062,.95));let i=new Ii(16772829,1.9);i.position.set(1.6,3.2,3),mt.add(i);let e=new Ii(16777215,.9);return e.position.set(-1.2,2.6,-2.4),mt.add(e),ls=new St(18,.5,.1,30),Un=new St(18,.5,.1,30),$n=new St(18,1,.01,10),Nn.domElement.addEventListener("webglcontextlost",t=>{t.preventDefault(),Wt=!0,window.dispatchEvent(new Event("c3-lost"))}),Nn.domElement.addEventListener("webglcontextrestored",()=>{Wt=!1,mt.environment&&(mt.environment=tf()),window.dispatchEvent(new Event("c3-back"))}),Nn}function tf(){let i=new nr(Nn),e=i.fromScene(new pc,.04).texture;return i.dispose(),e}function nf(){mt.environment||(mt.environment=tf())}var Wt=!1,hs={low:-.04,high:1.42},ds={side:.18,top:.16};function sf(i,e,t,n){let s=hs.high-hs.low,r=n||{};i.aspect=e/t,i.fov=r.fov||18;let a=s/2/Math.tan(i.fov*at/2)/(r.zoom||1),o=r.y!=null?r.y:(hs.low+hs.high)/2,c=r.x||0;i.position.set(c,o+(r.up!=null?r.up:.1),a),i.lookAt(c,o,0),i.updateProjectionMatrix()}var Bd={head:["Head",.226*Sc,1.55/Sc],chest:["Spine2",0,2.3]};function ab(i,e){let[t,n,s]=Bd[e]||Bd.head,r=new L;return i.bones[t]&&i.bones[t].getWorldPosition(r),{y:r.y+n,zoom:s,up:.02}}var ln=new Map;async function Qh(i){let e=ha(i),t=ln.get(e);if(t)return ln.delete(e),ln.set(e,t),t;let n=[zt&&zt.fig,cr].find(s=>s&&s.lookKey===e);if(n)n.gone=!1,t=Promise.resolve(n);else{let s=new Jh(i);s.lookKey=e,t=s.build()}for(ln.set(e,t),t.catch(()=>{ln.get(e)===t&&ln.delete(e)});ln.size>4;){let[s,r]=ln.entries().next().value;ln.delete(s),r.then(a=>{a.gone=!0,Ui(a)},()=>{})}return t}function Ui(i){i.gone&&!i.using&&!(zt&&zt.fig===i)&&i!==cr&&i.dispose()}var cr=null;function ob(i){let e=cr;cr=i,e&&e!==i&&Ui(e)}var zd=null;function lr(i,e,t){let n=Oi();if(!n.compileAsync||Wt)return Promise.resolve();let s=n.getRenderTarget(),r=null;try{t&&n.setRenderTarget(zd||(zd=new Ht(1,1))),r=n.compileAsync(i,e,mt)}catch{}n.setRenderTarget(s);let a=0;return Promise.race([Promise.resolve(r).catch(()=>{}),new Promise(o=>{a=setTimeout(o,4e3)})]).then(()=>clearTimeout(a))}var us=new Map,Mn=[],xc=!1;function cb(i,e,t,n){return new Promise((s,r)=>{let a={key:i,job:e,ok:s,no:r,low:n};if(t)Mn.unshift(a);else if(n)Mn.push(a);else{let o=Mn.findIndex(c=>c.low);o<0?Mn.push(a):Mn.splice(o,0,a)}rf()})}function rf(){xc||!Mn.length||(xc=!0,hb(Mn[0]&&Mn[0].low?1200:160).then(()=>{let i=Mn.shift();if(!i){xc=!1;return}let e=0,t=new Promise((n,s)=>{e=setTimeout(()=>s(new Error("too long")),2e4)});Promise.race([Promise.resolve().then(i.job),t]).then(i.ok,i.no).then(()=>{clearTimeout(e),xc=!1,rf()})}))}function lb(i){let e=Mn.findIndex(t=>t.key===i);e>0&&Mn.unshift(Mn.splice(e,1)[0])}var af=0;["pointerdown","pointermove","touchstart","touchmove","wheel","scroll","keydown"].forEach(i=>{window.addEventListener(i,()=>{af=performance.now()},{capture:!0,passive:!0})});var of=0;function by(i){of=i?performance.now()+18e4:0}var wc=0;function xy(i){wc=Math.max(wc,performance.now()+(i||600))}var hb=(i=160)=>new Promise(e=>{let t=()=>{let n=Math.max(of,wc)-performance.now();if(n>0){setTimeout(t,Math.min(n,250));return}let s=performance.now()-af;s>=i?e():setTimeout(t,i-s)};window.requestIdleCallback?requestIdleCallback(t,{timeout:150}):setTimeout(t,16)});function Rc(i,e,t,n,s){if(us.has(i))return t&&lb(i),us.get(i);let r=Promise.resolve(Yh&&Sb(i)).then(a=>a?Gd(a,!1).catch(()=>null):null).then(a=>a||Promise.resolve(n&&n()).catch(()=>{}).then(()=>cb(i,e,t,s)).then(o=>Gd(o,!0).then(c=>(Yh&&wb(i,o),c))));return us.set(i,r),r.catch(()=>us.delete(i)),r}var Ac=!1;function Gd(i,e){if(!i||!i.size)return Promise.reject(new Error("no picture"));if(Ac)return Vd(i).then(qh);let t=URL.createObjectURL(i);return qh(t).catch(n=>{if(URL.revokeObjectURL(t),!e)throw n;return Ac=!0,Vd(i).then(qh)})}function qh(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>n.naturalWidth?e(i):t(new Error("empty picture")),n.onerror=()=>t(new Error("picture")),n.src=i})}function Vd(i){return new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(n.result),n.onerror=()=>t(n.error||new Error("picture")),n.readAsDataURL(i)})}function _y(i){String(i).slice(0,5)==="blob:"&&(Ac=!0);for(let[e,t]of us)t.then(n=>{(n===i||Ac&&String(n).slice(0,5)==="blob:")&&us.delete(e)},()=>{})}function ua(){return Math.min(3,window.devicePixelRatio||1)}function yy(i,e={}){let t=Object.assign({w:180,h:336,dpr:ua(),move:"",at:null,turn:-18},e);(t.focus||t.view)&&(t.bleed=!1);let n="v"+hr+":"+ha(i)+":"+(t.move||"")+(t.at!=null?"@"+t.at:"")+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+(t.focus?":"+t.focus:"")+(t.view?":"+JSON.stringify(t.view):"")+(t.bleed?":b"+ds.side+","+ds.top:"");return Rc(n,()=>ub(i,t),!!t.first,()=>Qd(i),!!t.low)}var vy=ds;async function ub(i,e){if(Oi(),Wt)throw new Error("no graphics");let t=await Qh(i);t.using=(t.using||0)+1;try{if(await lr(t.root,Un,!0),Wt)throw new Error("no graphics");let n=new wt,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),mt.add(n),t.turn=e.turn*at;let o=e.move&&Pt[e.move];t.at(e.move,e.at!=null?e.at:o?o.still:0);let c=e.bleed?e.w*(1+2*ds.side):e.w,l=e.bleed?e.h*ds.top:0;sf(Un,c,e.h,e.focus?ab(t,e.focus):e.view),l&&Un.setViewOffset(c,e.h,0,-l,c,e.h+l);let h;try{Ec(Un,Math.round(e.h*e.dpr)),h=Cc(n,Un,Math.round(c*e.dpr),Math.round((e.h+l)*e.dpr))}finally{l&&Un.clearViewOffset()}return t.turn=r,t.blinks=a,mt.remove(n),s&&s.add(t.root),h}finally{t.using--,Ui(t)}}function My(i,e={}){let t=Object.assign({w:72,h:112,dpr:ua(),turn:-10},e),n=cf(i),s="v"+hr+":h:"+ha(n)+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn;return Rc(s,()=>db(i,t),!1,()=>ln.has(ha(i))?null:Qd(n),!!t.low)}function cf(i){return Object.assign({},i||{},{l:"",k:""})}async function db(i,e){if(Oi(),Wt)throw new Error("no graphics");let t=await Qh(ln.has(ha(i))?i:cf(i));t.using=(t.using||0)+1;try{if(await lr(t.root,Un,!0),Wt)throw new Error("no graphics");let n=new wt,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),mt.add(n),t.turn=e.turn*at,t.at("",0),fb(Un,t,e),Ec(Un,Math.round(e.h*e.dpr));let o=Cc(n,Un,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return t.turn=r,t.blinks=a,mt.remove(n),s&&s.add(t.root),o}finally{t.using--,Ui(t)}}function fb(i,e,t){let n=new L,s=new L;e.bones.Head.getWorldPosition(n),(e.bones.Neck||e.bones.Head).getWorldPosition(s);let r=s.y-.1,a=n.y+.73;i.aspect=t.w/t.h,i.fov=16;let o=(a-r)/2/Math.tan(i.fov*at/2),c=(r+a)/2;i.position.set(n.x,c+.04,n.z+o),i.lookAt(n.x,c,n.z),i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}function Cc(i,e,t,n){let s=Oi(),r=new Ht(t,n,{samples:4,colorSpace:bt}),a=mt.children.filter(h=>h.isGroup&&h.visible&&h!==i);a.forEach(h=>{h.visible=!1}),s.setRenderTarget(r),s.clear(),s.render(mt,e),a.forEach(h=>{h.visible=!0}),s.setRenderTarget(null);let o=new Uint8Array(t*n*4),c=()=>s.readRenderTargetPixels(r,0,0,t,n,o);return(s.readRenderTargetPixelsAsync?s.readRenderTargetPixelsAsync(r,0,0,t,n,o).catch(c):Promise.resolve().then(c)).then(()=>{if(r.dispose(),Wt||pb(o))throw new Error("empty picture");return xb(o,t,n)},h=>{throw r.dispose(),h})}function pb(i){for(let e=3;e<i.length;e+=4)if(i[e])return!1;return!0}var lf="image/webp",hf=.92;function mb(){self.onmessage=i=>{let e=i.data;try{let t=e.W,n=e.H,s=new ImageData(t,n);for(let a=0;a<n;a++)s.data.set(e.px.subarray((n-1-a)*t*4,(n-a)*t*4),a*t*4);let r=self.board||(self.board=new OffscreenCanvas(t,n));r.width!==t&&(r.width=t),r.height!==n&&(r.height=n),r.getContext("2d").putImageData(s,0,0),r.convertToBlob({type:e.type,quality:e.q}).then(a=>self.postMessage({id:e.id,blob:a}),()=>self.postMessage({id:e.id}))}catch{self.postMessage({id:e.id})}}}var Qn=null,Tc=new Map,gb=0;function bb(){if(Qn!==null)return Qn;try{if(typeof Worker>"u"||typeof OffscreenCanvas>"u")throw new Error("no worker");Qn=new Worker(URL.createObjectURL(new Blob(["("+mb+")()"],{type:"text/javascript"}))),Qn.onmessage=i=>{let e=Tc.get(i.data&&i.data.id);e&&e(i.data)},Qn.onerror=()=>{uf()}}catch{Qn=!1}return Qn}function uf(){if(Qn)try{Qn.terminate()}catch{}Qn=!1,[...Tc.values()].forEach(i=>i({}))}function xb(i,e,t){let n=bb();return n?new Promise((s,r)=>{let a=++gb,o=setTimeout(()=>c({}),8e3);function c(l){clearTimeout(o),Tc.delete(a),l.blob&&l.blob.size?s(l.blob):r(new Error("worker"))}Tc.set(a,c),n.postMessage({id:a,px:i,W:e,H:t,type:lf,q:hf})}).catch(()=>(uf(),Wd(i,e,t))):Wd(i,e,t)}var Hd=null;function Wd(i,e,t){let n=Hd||(Hd=document.createElement("canvas"));n.width!==e&&(n.width=e),n.height!==t&&(n.height=t);let s=n.getContext("2d",{willReadFrequently:!0}),r=s.createImageData(e,t);for(let a=0;a<t;a++)r.data.set(i.subarray((t-1-a)*e*4,(t-a)*e*4),a*e*4);return s.putImageData(r,0,0),new Promise((a,o)=>n.toBlob(c=>c&&c.size?a(c):o(new Error("picture")),lf,hf))}function Xh(i){return!!(Ct.things&&Ct.things[i])}var _c=new Map;function da(i){if(!_c.has(i)){let e=oa("o/"+i+".glb").then(t=>{let n=new wt;if(n.add(t.scene),i.startsWith("p-")&&t.scene.traverse(a=>{!a.isMesh||a.userData.line||(a.material=ca(a.material),!a.material.transparent&&!Yd(a.material)&&Mc(a))}),_b.test(i))return n;let s=new At().setFromObject(t.scene,!0),r=Kd();return r.scale.set(Math.max(.03,(s.max.x-s.min.x)*1.3)/.75,Math.max(.02,(s.max.z-s.min.z)*1.3)/.48,1),r.position.y=5e-4,r.userData.aside=!0,n.add(r),n});_c.set(i,e),e.catch(()=>_c.delete(i))}return _c.get(i)}var _b=/^(b|lv|ui|pr|fx|box|rm|sh|pz|rn|ar)-/,jh={side:.35,top:.12,foot:.12};function Sy(i,e={}){let t=Object.assign({w:100,h:120,dpr:ua(),turn:-18,low:.07},e),n="v"+hr+":o:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+":"+t.low+(t.spin!=null?":s"+t.spin:"");return Rc(n,()=>yb(i,t),!!t.first,()=>da(i).catch(()=>{}),!!t.later)}async function yb(i,e){if(Oi(),Wt)throw new Error("no graphics");let t=await da(i);i.startsWith("p-")||nf();let n=new wt;if(n.rotation.y=(e.spin!=null?e.spin:e.turn)*at,n.add(t),await lr(n,$n,!0),Wt)throw new Error("no graphics");mt.add(n),Mb($n,n,e),Ec($n,Math.round(e.h*e.dpr),$n.position.distanceTo(new At().setFromObject(n,!0).getCenter(vn)),3e-4);let s=e.w,r=e.h;if(e.spin!=null){let o=Math.round(e.w*jh.side),c=Math.round(e.h*jh.top),l=Math.round(e.h*jh.foot);s=e.w+2*o,r=e.h+c+l,$n.setViewOffset(e.w,e.h,-o,-c,s,r),n.rotation.y=e.turn*at,n.updateMatrixWorld(!0)}let a;try{a=Cc(n,$n,Math.round(s*e.dpr),Math.round(r*e.dpr))}finally{e.spin!=null&&$n.clearViewOffset()}return mt.remove(n),n.remove(t),a}function wy(i,e={}){let t=Object.assign({w:128,h:128,dpr:ua()},e),n="v"+hr+":e:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+(t.fov?"f"+t.fov:"");return Rc(n,()=>vb(i,t),!1,()=>da(i).catch(()=>{}))}async function vb(i,e){if(Oi(),Wt)throw new Error("no graphics");let t=await da(i);nf();let n=new wt;if(n.add(t),await lr(n,$n,!0),Wt)throw new Error("no graphics");mt.add(n),n.updateMatrixWorld(!0);let s=new At().setFromObject(n,!0),r=new At;n.traverse(u=>{u.isMesh&&u.material&&u.material.opacity===0&&r.expandByObject(u,!0)});let a=r.isEmpty()?s:r,o=a.getCenter(new L),c=a.getSize(new L),l=$n;l.aspect=e.w/e.h,l.fov=e.fov||8;let h=Math.max(c.y,c.x/l.aspect)/2/Math.tan(l.fov*at/2);l.position.set(o.x,o.y,o.z+h),l.lookAt(o),l.near=Math.max(.001,o.z+h-s.max.z-.01),l.far=o.z+h-s.min.z+1,l.updateProjectionMatrix(),l.updateMatrixWorld(!0);let d=Cc(n,l,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return mt.remove(n),n.remove(t),d}var qd=10*at,vn=new L;function Mb(i,e,t){let n=Math.tan(i.fov*at/2),s=t.w/t.h;e.updateMatrixWorld(!0);let r=new At().setFromObject(e,!0).getCenter(new L),a=new L(0,Math.sin(qd),Math.cos(qd));i.position.copy(r).addScaledVector(a,10),i.lookAt(r),i.updateMatrixWorld(!0);let o=i.matrixWorldInverse,c=1/0,l=-1/0,h=1/0,d=-1/0,u=-1/0;e.traverse(M=>{if(!M.isMesh||M.userData.aside)return;let A=M.geometry.getAttribute("position");for(let R=0;R<A.count;R++)vn.fromBufferAttribute(A,R).applyMatrix4(M.matrixWorld).applyMatrix4(o),vn.x<c&&(c=vn.x),vn.x>l&&(l=vn.x),vn.y<h&&(h=vn.y),vn.y>d&&(d=vn.y),vn.z>u&&(u=vn.z)});let x=Math.max((d-h)/(2*n*(1-t.low-.04)),(l-c)/(2*n*s*(1-2*.05))),m=x+(u+10),p=(c+l)/2,S=h+(1-2*t.low)*x*n,T=new L(1,0,0).applyQuaternion(i.quaternion),y=new L(0,1,0).applyQuaternion(i.quaternion);i.position.copy(r).addScaledVector(a,m).addScaledVector(T,p).addScaledVector(y,S),i.aspect=s,i.near=Math.max(.001,x*.3),i.far=m*3+1,i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}var yc=null;function df(){return yc||(yc=new Promise(i=>{try{let e=indexedDB.open("seoulful-3d",1);e.onupgradeneeded=()=>e.result.createObjectStore("stills"),e.onsuccess=()=>{i(e.result),setTimeout(()=>Ab(e.result),6e3)},e.onerror=()=>i(null)}catch{i(null)}}),yc)}function Sb(i){return df().then(e=>e&&new Promise(t=>{try{let n=e.transaction("stills").objectStore("stills").get(i);n.onsuccess=()=>{let s=n.result;t(s&&s.bytes?new Blob([s.bytes],{type:s.type||"image/png"}):null)},n.onerror=()=>t(null)}catch{t(null)}}))}function wb(i,e){Promise.all([df(),new Response(e).arrayBuffer()]).then(([t,n])=>{if(t)try{t.transaction("stills","readwrite").objectStore("stills").put({bytes:n,type:e.type},i)}catch{}},()=>{})}function Ab(i){try{let e=i.transaction("stills","readwrite").objectStore("stills"),t="v"+hr+":",n=e.openKeyCursor?e.openKeyCursor():e.openCursor();n.onsuccess=()=>{let s=n.result;s&&(String(s.key).indexOf(t)!==0&&e.delete(s.key),s.continue())}}catch{}}function vc(i){let e=0,t=0;for(let n=i;n;n=n.offsetParent)e+=n.offsetLeft,t+=n.offsetTop;return[e,t]}var Xd=.06,Tb=-6*at;function cs(i,e){for(let t=1;t<e.length;t++)if(i<=e[t][0]){let[n,s]=e[t-1],[r,a]=e[t],o=(i-n)/(r-n);return s+(a-s)*o*o*(3-2*o)}return e[e.length-1][1]}var la={1:[1.2,i=>({sx:cs(i,[[0,1],[.3,1.12],[.6,.95],[1,1]]),sy:cs(i,[[0,1],[.3,.9],[.6,1.08],[1,1]])})],2:[1.1,i=>({ry:2*Math.PI*cs(i,[[0,0],[1,1]]),y:.14*Math.sin(Math.PI*i)})],3:[1,i=>({y:cs(i,[[0,0],[.4,.36],[.7,0],[1,0]]),sx:cs(i,[[0,1],[.4,1.05],[.7,1.08],[1,1]]),sy:cs(i,[[0,1],[.4,1.05],[.7,.92],[1,1]])})],4:[1.4,i=>({rz:at*cs(i,[[0,0],[.2,-12],[.4,12],[.6,-10],[.8,10],[1,0]])})]};la[5]=[2.4,(i,e)=>e<1?la[3][1](e):la[4][1]((e-1)/1.4)];var zt=null,Eb=0;function Rb(i,e){let t=e-i.t0,n=i.move&&Pt[i.move];return n&&t>n.ms&&(i.loop?(i.t0=e,t=0,i.lap=(i.lap||0)+1,i.offAt=null):(i.move="",i.done&&i.done())),i.move?(i.loop?i.offAt=null:i.offAt==null&&(i.offAt=Math.min(t,n.ms)/n.ms),[t,{first:!i.lap,off:i.offAt}]):[e,null]}function Ay(i,e,t={}){let n=Oi();zt&&zt.stop();let s={n:++Eb,el:i,fig:null,move:"",t0:0,loop:!!t.loop,turn:(t.turn!=null?t.turn:-12)*at,turn0:(t.turn!=null?t.turn:-12)*at,seen:!0,dpr:ua(),slow:0,frames:0,pet:null,petId:"",petEl:null,petParts:[],trick:0,trickT0:0,drawnAt:0,lap:0,offAt:0};zt=s;let r=new wt;mt.add(r);let a=new wt;mt.add(a);let o=n.domElement;o.className="c3-live";let c=()=>[Math.round((i.clientWidth||200)*ds.side),Math.round((i.clientHeight||320)*ds.top)];o.style.left=-c()[0]+"px",o.style.top=-c()[1]+"px",o.style.transition="none",o.style.opacity=t.fadeIn?"0":"",i.appendChild(o);let l=new Ne,h=()=>{if(!i.isConnected||!i.clientWidth){s.unlaid=!0;return}let w=s.unlaid;s.unlaid=!1;let C=i.clientWidth,P=i.clientHeight||320,[U,B]=c(),I=-U,k=C+2*U,q=s.petEl&&s.petEl.isConnected&&s.petEl.offsetWidth&&(s.pet||s.petId&&Xh(s.petId))?s.petEl:null;if(q){let ee=vc(q)[0]-vc(i)[0];I=Math.floor(Math.min(I,ee)),k=Math.ceil(Math.max(C+U,ee+q.offsetWidth))-I}let W=P+B;n.getSize(l);let te=l.x!==k||l.y!==W||n.getPixelRatio()!==s.dpr;te&&n.setDrawingBufferSize(k,W,s.dpr),o.style.left!==I+"px"&&(o.style.left=I+"px"),o.style.top!==-B+"px"&&(o.style.top=-B+"px"),o.style.width!==k+"px"&&(o.style.width=k+"px"),o.style.height!==W+"px"&&(o.style.height=W+"px");let X=t.view||{},Y=(hs.high-hs.low)/P;sf(ls,k,P,Object.assign({},X,{x:(I+k/2-C/2)*Y/(X.zoom||1)})),ls.setViewOffset(k,P,0,-B,k,W),s.linePx=Math.round(P*s.dpr),q&&s.pet&&d(q,C,P,Y),a.visible=!!(q&&s.pet),(te||w)&&s.fig&&zt===s&&!Wt&&T(performance.now())},d=(w,C,P,U)=>{let B=s.pet,I=B.userData.big,[k,q]=vc(i),[W,te]=vc(w),X=w.offsetWidth,Y=w.offsetHeight,ee=te-q+Y*(1-Xd),Ae=Math.min(Y*(1-Xd-.04)*U/I.y,X*.9*U/I.x);B.userData.at={x:(W-k+X/2-C/2)*U,y:hs.low+(P-ee)*U,z:.06,s:Ae,h:I.y}};t.pet&&t.pet.id&&t.pet.el&&Xh(t.pet.id)&&(s.petEl=t.pet.el,s.petId=t.pet.id),h(),n.setRenderTarget(null),n.clear();let u="IntersectionObserver"in window?new IntersectionObserver(w=>{s.seen=w[0].isIntersecting}):null;u&&u.observe(i);let f="ResizeObserver"in window?new ResizeObserver(h):null;f&&f.observe(i);let g=null,x=w=>{g={x:w.clientX,t:s.turn}},m=w=>{g&&(s.turn=g.t+(w.clientX-g.x)*.012)},p=()=>{g=null};t.drag&&(i.addEventListener("pointerdown",x),window.addEventListener("pointermove",m),window.addEventListener("pointerup",p));let S=0,T=w=>{let C=s.fig,P=s.move&&Pt[s.move];if(P&&P.lie&&!g){let I=s.turn0-s.turn,k=1-Math.exp(-Math.min(200,Math.max(0,w-s.drawnAt))/130);s.turn+=(I-2*Math.PI*Math.round(I/(2*Math.PI)))*k}s.drawnAt=w,C.turn=s.turn;let[U,B]=Rb(s,w);C.at(s.move,U,B),s.pet&&y(w),Ec(ls,s.linePx||n.domElement.height),n.render(mt,ls)},y=w=>{let C=s.pet,P=C.userData.at,U=C.children[0];if(!P){C.visible=!1;return}C.visible=!0;let B=(1-Math.cos(w/1e3*2*Math.PI/3.2))/2,I=.028*B,k=1,q=1+.02*B,W=0,te=0;if(s.trick){let Fe=(w-s.trickT0)/1e3,[Be,j]=la[s.trick];if(Fe>=Be)s.trick=0;else{let $=j(Fe/Be,Fe);I+=$.y||0,k*=$.sx||1,q*=$.sy||1,W+=$.rz||0,te+=$.ry||0}}C.position.set(P.x,P.y,P.z),C.scale.setScalar(P.s),C.rotation.set(0,s.turn+Tb,0),U.position.set(0,I*P.h,0),U.scale.set(k,q,k),U.rotation.set(0,te,W);let X=w/1e3,Y=s.trick?1:0,ee=X%4.6/4.6,Ae=ee<.92?1:ee<.95?1-.9*(ee-.92)/.03:.1+.9*(ee-.95)/.05,ve=(1-Math.cos(X*2*Math.PI/3.4))/2,Qe=Y?(1-Math.cos(X*2*Math.PI/.28))/2:0;for(let[Fe,Be,j]of s.petParts)Be==="blink"?Fe.scale.y=Ae:Be==="wag"?Fe.rotation.z=(Y?16:9)*at*Math.sin(X*2*Math.PI/(Y?.45:1.1)):Be==="ear"?Fe.rotation.z=-j*at*(5*ve+10*Qe):Be==="wing"&&(Fe.rotation.z=j*at*(8*ve+26*Qe))},M=w=>{if(zt!==s||!s.seen||document.hidden||!s.fig||Wt)return;let C=!!s.move||g||!!s.trick;if(!C&&(w-S<30||w<wc))return;let P=w-S;if(S=w,s.frames++>20&&P>40&&C&&s.slow++,s.slow>30&&s.dpr>1){s.dpr=Math.max(1,s.dpr*.75),s.slow=0,h();return}T(w)};n.setAnimationLoop(M);let A=0,R=null,_=null;return s.ready=new Promise((w,C)=>{R=w,_=C}),s.ready.catch(()=>{}),s.set=w=>{let C=++A;return Qh(w).then(P=>(P.using=(P.using||0)+1,lr(P.root,ls,!1).then(()=>{if(P.using--,zt!==s||C!==A){Ui(P);return}let U=s.fig;r.clear(),r.add(P.root),s.fig=P,P.stageN!==s.n&&(P.stageN=s.n,P.stages=(P.stages||0)+1),P.blinks=!0,U&&U!==P&&Ui(U),Wt||T(performance.now()),o.style.opacity==="0"&&(o.style.transition="opacity .2s ease-out",o.style.opacity="1"),R(),t.ready&&t.ready()}))).catch(P=>{throw s.fig||_(P),P})},s.play=(w,C)=>(s.move=Pt[w]?w:"",s.loop=!!C,s.t0=performance.now(),s.lap=0,s.offAt=C?null:0,new Promise(P=>{s.done=P})),s.setPet=(w,C)=>{let P=s.petEl;return s.petEl=C||null,P&&P!==C&&t.petGone&&t.petGone(P),w===s.petId&&s.pet?(h(),C&&t.petShown&&t.petShown(C),Promise.resolve()):(s.petId=w||"",s.pet&&(a.remove(s.pet),s.pet=null,s.petParts=[],h()),!w||!C||!Xh(w)?Promise.resolve():(f&&f.observe(C),da(w).then(U=>{if(zt!==s||s.petId!==w)return;let B=U.clone(),I=[];B.traverse(q=>{let W=/^(blink|wag|ear|wing)(?:-([LR]))?$/.exec(q.name);W&&!(q.parent&&q.parent.name===q.name)&&I.push([q,W[1],W[2]==="L"?1:W[2]==="R"?-1:0])});let k=new At().setFromObject(B.children[0],!0);return B.userData.big={x:Math.max(.01,k.max.x-k.min.x),y:Math.max(.01,k.max.y-k.min.y)},B.visible=!1,lr(B,ls,!1).then(()=>{if(zt!==s||s.petId!==w||s.pet)return;s.pet=B,s.petParts=I,a.add(B),h();let q=()=>{zt===s&&s.pet===B&&s.petEl&&t.petShown&&t.petShown(s.petEl)};s.fig?(Wt||T(performance.now()),q()):s.ready.then(q,()=>{})})}).catch(()=>{})))},s.petPlay=w=>s.pet?(s.trick=la[w]?w:1,s.trickT0=performance.now(),!0):!1,s.rehost=w=>{w!==i&&(t.drag&&(i.removeEventListener("pointerdown",x),w.addEventListener("pointerdown",x)),u&&(u.unobserve(i),u.observe(w)),f&&(f.unobserve(i),f.observe(w)),i=w,s.el=w,w.appendChild(o),s.seen=!0,h(),s.fig&&zt===s&&!Wt&&T(performance.now()))},s.stop=()=>{zt===s&&(zt=null,n.setAnimationLoop(null)),s.fig&&ob(s.fig),u&&u.disconnect(),f&&f.disconnect(),i.removeEventListener("pointerdown",x),window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",p),mt.remove(r),mt.remove(a),o.parentNode===i&&i.removeChild(o),o.style.left="0px",o.style.top="0px",o.style.opacity="",o.style.transition="",s.petEl&&t.petGone&&t.petGone(s.petEl)},s.set(e).catch(()=>{}),t.pet&&s.setPet(t.pet.id,t.pet.el),t.move&&s.play(t.move,t.loop),s}function Ty(){return zt&&zt.fig&&zt.fig.stages||0}function Ey(){for(let[i,e]of[...ln])ln.delete(i),e.then(t=>{t.gone=!0,Ui(t)},()=>{})}var Yh=!0;function Ry(i){i.stand&&(Object.keys(sa).forEach(t=>delete sa[t]),Object.assign(sa,i.stand)),i.keep!=null&&(Yh=i.keep),ln.clear(),us.clear();let e=cr;cr=null,e&&(e.gone=!0,Ui(e))}var Cy=hr;function Cb(i,e,t,n){let s=Sd(n),r=new Pe().copy(e.matrixWorld).invert(),a=new Pe,o=new Pe,c=new L,l=[0,0,0],h=new Map;i.traverse(d=>{if(!d.isMesh||d.isSkinnedMesh||!d.geometry||!d.geometry.attributes.position)return;let u=d.geometry;if(h.has(u)){d.geometry=h.get(u),d.userData.bent=!0;return}a.multiplyMatrices(r,d.matrixWorld),o.copy(a).invert();let f=d.geometry.attributes.position,g=new Float32Array(f.count*3);for(let x=0;x<f.count;x++)c.fromBufferAttribute(f,x).applyMatrix4(a),wd(s,t,c.x,c.y,c.z,l),c.set(l[0],l[1],l[2]).applyMatrix4(o),g[3*x]=c.x,g[3*x+1]=c.y,g[3*x+2]=c.z;d.geometry=d.geometry.clone(),d.geometry.setAttribute("position",new xt(g,3)),d.userData.bent=!0,d.geometry.computeBoundingBox(),d.geometry.computeBoundingSphere(),h.set(u,d.geometry)})}export{Jh as Figure,Pt as MOVES,kh as SNUG,jh as SPIN_PAD,vy as bleed,_y as broken,xy as calm,Ey as crowd,wy as emblem,My as face,py as has,Xh as hasThing,by as hold,ha as lookKey,my as manifest,Rb as moveClock,gy as ok,fy as setBase,Ay as stage,Ty as staged,yy as still,Sy as thing,Ry as tune,Cy as version};
