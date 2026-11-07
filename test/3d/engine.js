/* Seoulful Staff 3D characters; three.js (MIT, mrdoob and contributors) */
var gu=0,Al=1,bu=2;var Xr=1,xu=2,Js=3,jn=0,Bt=1,ln=2,Kn=0,Ys=1,El=2,Tl=3,Rl=4,_u=5;var as=100,yu=101,vu=102,Mu=103,Su=104,wu=200,Au=201,Eu=202,Tu=203,Cl=204,Pl=205,Ru=206,Cu=207,Pu=208,Iu=209,Lu=210,Du=211,Fu=212,Nu=213,Uu=214,Za=0,Qa=1,$a=2,Ns=3,eo=4,to=5,no=6,io=7,wo=0,Ou=1,Bu=2,Ln=0,Il=1,Ll=2,Dl=3,Fl=4,Nl=5,Ul=6,jr=7,dl="attached",ku="detached",Ol=300,Ui=301,os=302,Ao=303,Eo=304,Kr=306,Ti=1e3,_n=1001,Us=1002,Tt=1003,To=1004;var cs=1005;var vt=1006,Zs=1007;var Dn=1008;var hn=1009,Bl=1010,kl=1011,Qs=1012,Ro=1013,Fn=1014,mn=1015,Nn=1016,Co=1017,Po=1018,$s=1020,zl=35902,Gl=35899,Vl=1021,Hl=1022,gn=1023,Vn=1026,Oi=1027,er=1028,Io=1029,Bi=1030,Lo=1031;var Do=1033,Jr=33776,Yr=33777,Zr=33778,Qr=33779,Fo=35840,No=35841,Uo=35842,Oo=35843,Bo=36196,ko=37492,zo=37496,Go=37488,Vo=37489,$r=37490,Ho=37491,Wo=37808,qo=37809,Xo=37810,jo=37811,Ko=37812,Jo=37813,Yo=37814,Zo=37815,Qo=37816,$o=37817,ec=37818,tc=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,cc=36284,ea=36285,lc=36286;var Ji=2300,Yi=2301,Ka=2302,pl=2303,ml=2400,gl=2401,bl=2402,zu=2500;var Wl=0,ta=1,tr=2,Gu=3200;var nr=0,Vu=1,mi="",_t="srgb",tn="srgb-linear",Ar="linear",Qe="srgb";var Ja=7680;var Hu=519,Wu=512,qu=513,Xu=514,hc=515,ju=516,Ku=517,fc=518,Ju=519,ql=35044;var Xl="300 es",Pn=2e3,Os=2001;function Zp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=Bs("canvas");return i.style.display="block",i}var Df={},ks=null;function Er(...i){let e="THREE."+i.shift();ks?ks("log",e,...i):console.log(e,...i)}function Zu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){i=Zu(i);let e="THREE."+i.shift();if(ks)ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Zu(i);let e="THREE."+i.shift();if(ks)ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ki(...i){let e=i.join(" ");e in Df||(Df[e]=!0,Ee(...i))}function Qu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $u={[Za]:Qa,[$a]:no,[eo]:io,[Ns]:to,[Qa]:Za,[no]:$a,[io]:eo,[to]:Ns},Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=1234567,Sr=Math.PI/180,Zi=180/Math.PI;function In(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function jl(i,e){return(i%e+e)%e}function $p(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function e0(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function t0(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function n0(i,e=1){return e-Math.abs(jl(i,e*2)-e)}function i0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function r0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function a0(i,e){return i+Math.random()*(e-i)}function o0(i){return i*(.5-Math.random())}function c0(i){i!==void 0&&(Ff=i);let e=Ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l0(i){return i*Sr}function h0(i){return i*Zi}function f0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function u0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function d0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function p0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),b=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*b,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*b,o*c);break;case"ZYZ":i.set(l*b,l*d,o*h,o*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kl={DEG2RAD:Sr,RAD2DEG:Zi,generateUUID:In,clamp:qe,euclideanModulo:jl,mapLinear:$p,inverseLerp:e0,lerp:wr,damp:t0,pingpong:n0,smoothstep:i0,smootherstep:s0,randInt:r0,randFloat:a0,randFloatSpread:o0,seededRandom:c0,degToRad:l0,radToDeg:h0,isPowerOfTwo:f0,ceilPowerOfTwo:u0,floorPowerOfTwo:d0,setQuaternionFromProperEuler:p0,normalize:et,denormalize:Cn},$l=class $l{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$l.prototype.isVector2=!0;var Ne=$l,dt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],b=r[a+2],g=r[a+3];if(u!==g||l!==f||c!==d||h!==b){let m=l*f+c*d+h*b+u*g;m<0&&(f=-f,d=-d,b=-b,g=-g,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+f*o,c=c*p+d*o,h=h*p+b*o,u=u*p+g*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+b*o,u=u*p+g*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],b=r[a+3];return e[t]=o*b+h*u+l*d-c*f,e[t+1]=l*b+h*f+c*u-o*d,e[t+2]=c*b+h*d+o*f-l*u,e[t+3]=h*b-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),b=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*b,this._y=c*d*u-f*h*b,this._z=c*h*b+f*d*u,this._w=c*h*u-f*d*b;break;case"YXZ":this._x=f*h*u+c*d*b,this._y=c*d*u-f*h*b,this._z=c*h*b-f*d*u,this._w=c*h*u+f*d*b;break;case"ZXY":this._x=f*h*u-c*d*b,this._y=c*d*u+f*h*b,this._z=c*h*b+f*d*u,this._w=c*h*u-f*d*b;break;case"ZYX":this._x=f*h*u-c*d*b,this._y=c*d*u+f*h*b,this._z=c*h*b-f*d*u,this._w=c*h*u+f*d*b;break;case"YZX":this._x=f*h*u+c*d*b,this._y=c*d*u+f*h*b,this._z=c*h*b-f*d*u,this._w=c*h*u-f*d*b;break;case"XZY":this._x=f*h*u-c*d*b,this._y=c*d*u-f*h*b,this._z=c*h*b+f*d*u,this._w=c*h*u+f*d*b;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eh=class eh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eh.prototype.isVector3=!0;var L=eh,Hc=new L,Nf=new dt,th=class th{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],b=n[8],g=s[0],m=s[3],p=s[6],M=s[1],T=s[4],y=s[7],v=s[2],A=s[5],E=s[8];return r[0]=a*g+o*M+l*v,r[3]=a*m+o*T+l*A,r[6]=a*p+o*y+l*E,r[1]=c*g+h*M+u*v,r[4]=c*m+h*T+u*A,r[7]=c*p+h*y+u*E,r[2]=f*g+d*M+b*v,r[5]=f*m+d*T+b*A,r[8]=f*p+d*y+b*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,b=t*u+n*f+s*d;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/b;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};th.prototype.isMatrix3=!0;var De=th,Wc=new De,Uf=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m0(){let i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:Ar,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}var ze=m0();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Bs("canvas")),ys.width=e.width,ys.height=e.height;let s=ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},g0=0,zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qc(s[a].image)):r.push(qc(s[a]))}else r=qc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var b0=0,Xc=new L,Ot=class i extends Hn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_n,s=_n,r=vt,a=Dn,o=gn,l=hn,c=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=In(),this.name="",this.source=new zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ol;Ot.DEFAULT_ANISOTROPY=1;var nh=class nh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],b=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(b-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(b+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(d+1)/2,v=(p+1)/2,A=(h+f)/4,E=(u+g)/4,x=(b+m)/4;return T>y&&T>v?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=E/n):y>v?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=x/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=E/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-b)*(m-b)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-b)/M,this.y=(u-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nh.prototype.isVector4=!0;var tt=nh,ro=class extends Hn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ot(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tr=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var So=class So{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,b,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,b,g,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,b,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=b,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,b=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+b*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=b+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,b=c*h,g=c*u;t[0]=f+g*o,t[4]=b*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-b,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,b=c*h,g=c*u;t[0]=f-g*o,t[4]=-a*u,t[8]=b+d*o,t[1]=d+b*o,t[5]=a*h,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,b=o*h,g=o*u;t[0]=l*h,t[4]=b*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-b,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,b=o*l,g=o*c;t[0]=l*h,t[4]=g-f*u,t[8]=b*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+b,t[10]=f-g*u}else if(e.order==="XZY"){let f=a*l,d=a*c,b=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=a*h,t[9]=d*u-b,t[2]=b*u-d,t[6]=o*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x0,e,_0)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),yi.crossVectors(n,un),yi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),yi.crossVectors(n,un)),yi.normalize(),Sa.crossVectors(un,yi),s[0]=yi.x,s[4]=Sa.x,s[8]=un.x,s[1]=yi.y,s[5]=Sa.y,s[9]=un.y,s[2]=yi.z,s[6]=Sa.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],b=n[2],g=n[6],m=n[10],p=n[14],M=n[3],T=n[7],y=n[11],v=n[15],A=s[0],E=s[4],x=s[8],w=s[12],R=s[1],C=s[5],D=s[9],F=s[13],I=s[2],B=s[6],z=s[10],H=s[14],te=s[3],q=s[7],Y=s[11],$=s[15];return r[0]=a*A+o*R+l*I+c*te,r[4]=a*E+o*C+l*B+c*q,r[8]=a*x+o*D+l*z+c*Y,r[12]=a*w+o*F+l*H+c*$,r[1]=h*A+u*R+f*I+d*te,r[5]=h*E+u*C+f*B+d*q,r[9]=h*x+u*D+f*z+d*Y,r[13]=h*w+u*F+f*H+d*$,r[2]=b*A+g*R+m*I+p*te,r[6]=b*E+g*C+m*B+p*q,r[10]=b*x+g*D+m*z+p*Y,r[14]=b*w+g*F+m*H+p*$,r[3]=M*A+T*R+y*I+v*te,r[7]=M*E+T*C+y*B+v*q,r[11]=M*x+T*D+y*z+v*Y,r[15]=M*w+T*F+y*H+v*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],b=e[3],g=e[7],m=e[11],p=e[15],M=l*d-c*f,T=o*d-c*u,y=o*f-l*u,v=a*d-c*h,A=a*f-l*h,E=a*u-o*h;return t*(g*M-m*T+p*y)-n*(b*M-m*v+p*A)+s*(b*T-g*v+p*E)-r*(b*y-g*A+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],b=e[12],g=e[13],m=e[14],p=e[15],M=t*o-n*a,T=t*l-s*a,y=t*c-r*a,v=n*l-s*o,A=n*c-r*o,E=s*c-r*l,x=h*g-u*b,w=h*m-f*b,R=h*p-d*b,C=u*m-f*g,D=u*p-d*g,F=f*p-d*m,I=M*F-T*D+y*C+v*R-A*w+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*F-l*D+c*C)*B,e[1]=(s*D-n*F-r*C)*B,e[2]=(g*E-m*A+p*v)*B,e[3]=(f*A-u*E-d*v)*B,e[4]=(l*R-a*F-c*w)*B,e[5]=(t*F-s*R+r*w)*B,e[6]=(m*y-b*E-p*T)*B,e[7]=(h*E-f*y+d*T)*B,e[8]=(a*D-o*R+c*x)*B,e[9]=(n*R-t*D-r*x)*B,e[10]=(b*A-g*y+p*M)*B,e[11]=(u*y-h*A-d*M)*B,e[12]=(o*w-a*C-l*x)*B,e[13]=(t*C-n*w+s*x)*B,e[14]=(g*T-b*v-m*M)*B,e[15]=(h*v-u*T+f*M)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,b=r*u,g=a*h,m=a*u,p=o*u,M=l*c,T=l*h,y=l*u,v=n.x,A=n.y,E=n.z;return s[0]=(1-(g+p))*v,s[1]=(d+y)*v,s[2]=(b-T)*v,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(b+T)*E,s[9]=(m-M)*E,s[10]=(1-(f+g))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let c=1/a,h=1/o,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),b,g;if(l)b=r/(a-r),g=a*r/(a-r);else if(o===Pn)b=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Os)b=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=b,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),b,g;if(l)b=1/(a-r),g=a/(a-r);else if(o===Pn)b=-2/(a-r),g=-(a+r)/(a-r);else if(o===Os)b=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=b,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};So.prototype.isMatrix4=!0;var we=So,vs=new L,An=new we,x0=new L(0,0,0),_0=new L(1,1,1),yi=new L,Sa=new L,un=new L,Bf=new we,kf=new dt,rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},y0=0,zf=new L,Ms=new dt,ni=new we,wa=new L,mr=new L,v0=new L,M0=new dt,Gf=new L(1,0,0),Vf=new L(0,1,0),Hf=new L(0,0,1),Wf={type:"added"},S0={type:"removed"},Ss={type:"childadded",child:null},jc={type:"childremoved",child:null},pt=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new rn,n=new dt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new De}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(mr,wa,this.up):ni.lookAt(wa,mr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ni),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pt.DEFAULT_UP=new L(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,b=.005;c.inputState.pinching&&f>d+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ze.workingColorSpace){if(e=jl(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kc(a,r,e+1/3),this.g=Kc(a,r,e),this.b=Kc(a,r,e-1/3)}return ze.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ze.workingToColorSpace(Kt.copy(this),e),Math.round(qe(Kt.r*255,0,255))*65536+Math.round(qe(Kt.g*255,0,255))*256+Math.round(qe(Kt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=_t){ze.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Aa);let n=wr(vi.h,Aa.h,t),s=wr(vi.s,Aa.s,t),r=wr(vi.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Ae;Ae.NAMES=ed;var Qi=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new L,ii=new L,Jc=new L,si=new L,ws=new L,As=new L,qf=new L,Yc=new L,Zc=new L,Qc=new L,$c=new tt,el=new tt,tl=new tt,Ei=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),ii.subVectors(n,t),Jc.subVectors(e,t);let a=En.dot(En),o=En.dot(ii),l=En.dot(Jc),c=ii.dot(ii),h=ii.dot(Jc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,b=(a*h-o*l)*f;return r.set(1-d-b,b,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return $c.setScalar(0),el.setScalar(0),tl.setScalar(0),$c.fromBufferAttribute(e,t),el.fromBufferAttribute(e,n),tl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($c,r.x),a.addScaledVector(el,r.y),a.addScaledVector(tl,r.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),ii.subVectors(e,t),En.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),En.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ws.subVectors(s,n),As.subVectors(r,n),Yc.subVectors(e,n);let l=ws.dot(Yc),c=As.dot(Yc);if(l<=0&&c<=0)return t.copy(n);Zc.subVectors(e,s);let h=ws.dot(Zc),u=As.dot(Zc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ws,a);Qc.subVectors(e,r);let d=ws.dot(Qc),b=As.dot(Qc);if(b>=0&&d<=b)return t.copy(r);let g=d*c-l*b;if(g<=0&&c>=0&&b<=0)return o=c/(c-b),t.copy(n).addScaledVector(As,o);let m=h*b-d*u;if(m<=0&&u-h>=0&&d-b>=0)return qf.subVectors(r,s),o=(u-h)/(u-h+(d-b)),t.copy(s).addScaledVector(qf,o);let p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(ws,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},At=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Ta.subVectors(this.max,gr),Es.subVectors(e.a,gr),Ts.subVectors(e.b,gr),Rs.subVectors(e.c,gr),Mi.subVectors(Ts,Es),Si.subVectors(Rs,Ts),Wi.subVectors(Es,Rs);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Wi.y,Wi.x,0];return!nl(t,Es,Ts,Rs,Ta)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,Es,Ts,Rs,Ta))?!1:(Ra.crossVectors(Mi,Si),t=[Ra.x,Ra.y,Ra.z],nl(t,Es,Ts,Rs,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ri=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Ea=new At,Es=new L,Ts=new L,Rs=new L,Mi=new L,Si=new L,Wi=new L,gr=new L,Ta=new L,Ra=new L,qi=new L;function nl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dt=new L,Ca=new Ne,A0=0,rt=class extends Hn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pr=class extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var en=class extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},E0=new At,br=new L,il=new L,an=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):E0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(il)),this.expandByPoint(br.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},T0=0,xn=new we,sl=new pt,Cs=new L,dn=new At,xr=new At,Ht=new L,Ft=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?Pr:Cr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(dn.min,xr.min),dn.expandByPoint(Ht),Ht.addVectors(dn.max,xr.max),dn.expandByPoint(Ht)):(dn.expandByPoint(xr.min),dn.expandByPoint(xr.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Ht.add(Cs)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new L,l[x]=new L;let c=new L,h=new L,u=new L,f=new Ne,d=new Ne,b=new Ne,g=new L,m=new L;function p(x,w,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),b.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),b.sub(f);let C=1/(d.x*b.y-b.x*d.y);isFinite(C)&&(g.copy(h).multiplyScalar(b.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-b.x).multiplyScalar(C),o[x].add(g),o[w].add(g),o[R].add(g),l[x].add(m),l[w].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,w=M.length;x<w;++x){let R=M[x],C=R.start,D=R.count;for(let F=C,I=C+D;F<I;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let T=new L,y=new L,v=new L,A=new L;function E(x){v.fromBufferAttribute(s,x),A.copy(v);let w=o[x];T.copy(w),T.sub(v.multiplyScalar(v.dot(w))).normalize(),y.crossVectors(A,w);let C=y.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,C)}for(let x=0,w=M.length;x<w;++x){let R=M[x],C=R.start,D=R.count;for(let F=C,I=C+D;F<I;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let b=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,b=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)f[b++]=c[d++]}return new rt(f,h,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},$t=new L,Hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rl=new L,R0=new L,C0=new De,Rn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=rl.subVectors(n,t).cross(R0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||C0.getNormalMatrix(e),s=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},P0=0,Jt=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Ys,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ai=new L,al=new L,Pa=new L,Ia=new L,$i=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){al.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(al);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=Ia.dot(this.direction),l=-Ia.dot(Pa),c=Ia.lengthSq(),h=Math.abs(1-a*a),u,f,d,b;if(h>0)if(u=a*l-o,f=a*o-l,b=r*h,u>=0)if(f>=-b)if(f<=b){let g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-b?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=b?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(al).addScaledVector(Pa,f),d}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,b=t.x-a.x,g=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,T=n.z-a.z,y=Math.abs(l),v=Math.abs(c),A=Math.abs(h),E,x,w,R,C,D,F,I,B,z,H,te;if(y>=v&&y>=A?(w=l,D=u,B=b,te=p,l>=0?(E=c,x=h,R=f,C=d,F=g,I=m,z=M,H=T):(E=h,x=c,R=d,C=f,F=m,I=g,z=T,H=M)):v>=A?(w=c,D=f,B=g,te=M,c>=0?(E=h,x=l,R=d,C=u,F=m,I=b,z=T,H=p):(E=l,x=h,R=u,C=d,F=b,I=m,z=p,H=T)):(w=h,D=d,B=m,te=T,h>=0?(E=l,x=c,R=u,C=f,F=b,I=g,z=p,H=M):(E=c,x=l,R=f,C=u,F=g,I=b,z=M,H=p)),w===0)return null;let q=E/w,Y=x/w,$=1/w,ve=R-q*D,me=C-Y*D,Ke=F-q*B,Fe=I-Y*B,Ue=z-q*te,j=H-Y*te,Z=Ue*Fe-j*Ke,be=ve*j-me*Ue,Ie=Ke*me-Fe*ve;if(s){if(Z<0||be<0||Ie<0)return null}else if((Z<0||be<0||Ie<0)&&(Z>0||be>0||Ie>0))return null;let de=Z+be+Ie;if(de===0)return null;let Ge=$*(Z*D+be*B+Ie*te);return(de>0?Ge<0:Ge>0)?null:this.at(Ge/de,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xf=new we,Xi=new $i,La=new an,jf=new L,Da=new L,Fa=new L,Na=new L,ol=new L,Ua=new L,Kf=new L,Oa=new L,at=class extends pt{constructor(e=new Ft,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ol.fromBufferAttribute(u,e),a?Ua.addScaledVector(ol,h):Ua.addScaledVector(ol.sub(t),h))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(La.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(La,jf)===null||Xi.origin.distanceToSquared(jf)>(e.far-e.near)**2))&&(Xf.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Xf),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,g=f.length;b<g;b++){let m=f[b],p=a[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,v=T;y<v;y+=3){let A=o.getX(y),E=o.getX(y+1),x=o.getX(y+2);s=Ba(this,p,e,n,c,h,u,A,E,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=b,p=g;m<p;m+=3){let M=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=Ba(this,a,e,n,c,h,u,M,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let b=0,g=f.length;b<g;b++){let m=f[b],p=a[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,v=T;y<v;y+=3){let A=y,E=y+1,x=y+2;s=Ba(this,p,e,n,c,h,u,A,E,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=b,p=g;m<p;m+=3){let M=m,T=m+1,y=m+2;s=Ba(this,a,e,n,c,h,u,M,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function I0(i,e,t,n,s,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===jn,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:i}}function Ba(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Da),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Na);let h=I0(i,e,t,n,Da,Fa,Na,Kf);if(h){let u=new L;Ei.getBarycoord(Kf,Da,Fa,Na,u),s&&(h.uv=Ei.getInterpolatedAttribute(s,o,l,c,u,new Ne)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,u,new Ne)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};Ei.getNormal(Da,Fa,Na,f.normal),h.face=f,h.barycoord=u}return h}var _r=new tt,Jf=new tt,Yf=new tt,L0=new tt,Zf=new we,ka=new L,cl=new an,Qf=new we,ll=new $i,Ri=class extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dl,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new At),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(s),e.ray.intersectsSphere(cl)!==!1&&(Qf.copy(s).invert(),ll.copy(e.ray).applyMatrix4(Qf),!(this.boundingBox!==null&&ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Jf.fromBufferAttribute(s.attributes.skinIndex,e),Yf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_r.copy(t),t.set(0,0,0,0)):(_r.set(...t,1),t.set(0,0,0)),_r.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Yf.getComponent(r);if(a!==0){let o=Jf.getComponent(r);Zf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(L0.copy(_r).applyMatrix4(Zf),a)}}return t.isVector4&&(t.w=_r.w),t.applyMatrix4(this.bindMatrixInverse)}},Ci=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Pi=class extends Ot{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tt,h=Tt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$f=new we,D0=new we,es=class i{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:D0;$f.multiplyMatrices(o,t[r]),$f.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Pi(t,e,e,gn,mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ee("Skeleton: No bone found with UUID:",r),a=new Ci),this.bones.push(a),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},li=class extends rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new we,eu=new we,za=[],tu=new At,F0=new we,yr=new at,vr=new an,ts=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new At),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),tu.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),vr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),eu.multiplyMatrices(n,Ps),yr.matrixWorld=eu,yr.raycast(e,za);for(let a=0,o=za.length;a<o;a++){let l=za[a];l.instanceId=r,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pi(new Float32Array(s*this.count),s,this.count,er,mn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new an,N0=new Ne(.5,.5),Ga=new L,Ws=class{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],b=r[8],g=r[9],m=r[10],p=r[11],M=r[12],T=r[13],y=r[14],v=r[15];if(s[0].setComponents(c-a,d-h,p-b,v-M).normalize(),s[1].setComponents(c+a,d+h,p+b,v+M).normalize(),s[2].setComponents(c+o,d+u,p+g,v+T).normalize(),s[3].setComponents(c-o,d-u,p-g,v-T).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,d-f,p-m,v-y).normalize();else if(s[4].setComponents(c-l,d-f,p-m,v-y).normalize(),t===Pn)s[5].setComponents(c+l,d+f,p+m,v+y).normalize();else if(t===Os)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);let t=N0.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qs=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oo=new L,co=new L,nu=new we,Mr=new $i,Va=new an,hl=new L,iu=new L,ns=class extends pt{constructor(e=new Ft,t=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)oo.fromBufferAttribute(t,s-1),co.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=oo.distanceTo(co);e.setAttribute("lineDistance",new en(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;nu.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let g=d,m=b-1;g<m;g+=c){let p=h.getX(g),M=h.getX(g+1),T=Ha(this,e,Mr,l,p,M,g);T&&t.push(T)}if(this.isLineLoop){let g=h.getX(b-1),m=h.getX(d),p=Ha(this,e,Mr,l,g,m,b-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let g=d,m=b-1;g<m;g+=c){let p=Ha(this,e,Mr,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){let g=Ha(this,e,Mr,l,b-1,d,b-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ha(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(oo.fromBufferAttribute(o,s),co.fromBufferAttribute(o,r),t.distanceSqToSegment(oo,co,hl,iu)>n)return;hl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hl);if(!(c<e.near||c>e.far))return{distance:c,point:iu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var su=new L,ru=new L,Ir=class extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)su.fromBufferAttribute(t,s),ru.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+su.distanceTo(ru);e.setAttribute("lineDistance",new en(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lr=class extends ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xs=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},au=new we,xl=new $i,Wa=new an,qa=new L,Dr=class extends pt{constructor(e=new Ft,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;au.copy(s).invert(),xl.copy(e.ray).applyMatrix4(au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let b=f,g=d;b<g;b++){let m=c.getX(b);qa.fromBufferAttribute(u,m),ou(qa,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let b=f,g=d;b<g;b++)qa.fromBufferAttribute(u,b),ou(qa,b,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ou(i,e,t,n,s,r,a){let o=xl.distanceSqToPoint(i);if(o<t){let l=new L;xl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fr=class extends Ot{constructor(e=[],t=Ui,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nr=class extends Ot{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ii=class extends Ot{constructor(e,t,n=Fn,s,r,a,o=Tt,l=Tt,c,h=Vn,u=1){if(h!==Vn&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},lo=class extends Ii{constructor(e,t=Fn,n=Ui,s,r,a=Tt,o=Tt,l,c=Vn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ur=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Li=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,s,a,2),b("x","z","y",1,-1,e,n,-t,s,a,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function b(g,m,p,M,T,y,v,A,E,x,w){let R=y/E,C=v/x,D=y/2,F=v/2,I=A/2,B=E+1,z=x+1,H=0,te=0,q=new L;for(let Y=0;Y<z;Y++){let $=Y*C-F;for(let ve=0;ve<B;ve++){let me=ve*R-D;q[g]=me*M,q[m]=$*T,q[p]=I,c.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(ve/E),u.push(1-Y/x),H+=1}}for(let Y=0;Y<x;Y++)for(let $=0;$<E;$++){let ve=f+$+B*Y,me=f+$+B*(Y+1),Ke=f+($+1)+B*(Y+1),Fe=f+($+1)+B*Y;l.push(ve,me,Fe),l.push(me,Ke,Fe),te+=6}o.addGroup(d,te,w),d+=te,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var is=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],b=[],g=[],m=[];for(let p=0;p<h;p++){let M=p*f-a;for(let T=0;T<c;T++){let y=T*u-r;b.push(y,-M,0),g.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let T=M+c*p,y=M+c*(p+1),v=M+1+c*(p+1),A=M+1+c*p;d.push(T,y,A),d.push(y,v,A)}this.setIndex(d),this.setAttribute("position",new en(b,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(cu(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(cu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=ls(i[t]);for(let s in n)e[s]=n[s]}return e}function cu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function U0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var td={clone:ls,merge:Yt},O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new we().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ho=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wn=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends Wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Or=class extends Jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Br=class extends Jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fo=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uo=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ai(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ya(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function k0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function z0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},po=class extends qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gl:r=e,o=2*t-n;break;case bl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gl:a=e,l=2*n-t;break;case bl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,b=(n-t)/(s-t),g=b*b,m=g*b,p=-f*m+2*f*g-f*b,M=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*b+1,T=(-1-d)*m+(1.5+d)*g+.5*b,y=d*m-d*g;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+M*a[c+v]+T*a[l+v]+y*a[u+v];return r}},mo=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},go=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bo=class extends qn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let b=(n-t)/(s-t),g=1-b;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*b;return r}let f=o*2,d=e-1;for(let b=0;b!==o;++b){let g=a[c+b],m=a[l+b],p=d*f+b*2,M=u[p],T=u[p+1],y=e*f+b*2,v=h[y],A=h[y+1],E=V0(n,t,M,v,s);r[b]=nd(E,g,T,A,m)}return r}};function nd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function G0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function V0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=nd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=G0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ai(t,this.TimeBufferType),this.values=Ai(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ai(e.times,Array),values:Ai(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ya(e.settings)&&(n.settings={inTangents:Ai(e.settings.inTangents,Array),outTangents:Ai(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case Yi:t=this.InterpolantFactoryMethodLinear;break;case Ka:t=this.InterpolantFactoryMethodSmooth;break;case pl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ya(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Qp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ka,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let b=0;b!==n;++b){let g=t[u+b];if(g!==t[f+b]||g!==t[d+b]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Yi;var hi=class extends cn{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ji;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};kr.prototype.ValueTypeName="color";var fi=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};fi.prototype.ValueTypeName="number";var xo=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)dt.slerpFlat(r,0,a,c-o,a,c,l);return r}},ui=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}};ui.prototype.ValueTypeName="quaternion";ui.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends cn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ji;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};Di.prototype.ValueTypeName="vector";var zr=class{constructor(e="",t=-1,n=[],s=zu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(W0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=k0(l);l=lu(l,1,h),c=lu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function H0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return Di;case"color":return kr;case"quaternion":return ui;case"bool":case"boolean":return hi;case"string":return di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function W0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=H0(i.type);if(i.times===void 0){let n=[],s=[];z0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ya(i.settings)&&(t.settings={inTangents:Ai(i.settings.inTangents,Float32Array),outTangents:Ai(i.settings.outTangents,Float32Array)}),t}var Gn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(fu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!fu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _o=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],b=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new _o,Xn=class{constructor(e){this.manager=e!==void 0?e:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var oi={},_l=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends Xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Gn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=oi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,b=d!==0,g=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:T,value:y})=>{if(T)p.close();else{g+=y.byteLength;let v=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:d});for(let A=0,E=h.length;A<E;A++){let x=h[A];x.onProgress&&x.onProgress(v)}p.enqueue(y),M()}},T=>{p.error(T)})}}});return new Response(m)}else throw new _l(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(b=>d.decode(b))}}}).then(c=>{Gn.add(`file:${e}`,c);let h=oi[e];delete oi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Is=new WeakMap,yo=class extends Xn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Is.get(a);u===void 0&&(u=[],Is.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Bs("img");function l(){h(),t&&t(this);let u=Is.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Is.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Gn.remove(`image:${e}`);let f=Is.get(this)||[];for(let d=0;d<f.length;d++){let b=f[d];b.onError&&b.onError(u)}Is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Gr=class extends Xn{constructor(e){super(e)}load(e,t,n,s){let r=new Ot,a=new yo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ss=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Vr=class extends ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fl=new we,uu=new L,du=new L,Ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Os||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new L,ja=new dt,zn=new L,Hr=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,ja,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,ja,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,ja,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,ja,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new L,pu=new Ne,mu=new Ne,St=class extends Hr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yl=class extends Ks{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Wr=class extends ss{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vl=class extends Ks{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0}},rs=class extends ss{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends Hr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ml=class extends Ks{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ni=class extends ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Ml}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var pi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ul=new WeakMap,qr=class extends Xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{ul.has(a)===!0?(s&&s(ul.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ul.set(l,c),Gn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Gn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=-90,Ds=1,vo=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Ls,Ds,e,t);s.layers=this.layers,this.add(s);let r=new St(Ls,Ds,e,t);r.layers=this.layers,this.add(r);let a=new St(Ls,Ds,e,t);a.layers=this.layers,this.add(a);let o=new St(Ls,Ds,e,t);o.layers=this.layers,this.add(o);let l=new St(Ls,Ds,e,t);l.layers=this.layers,this.add(l);let c=new St(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Mo=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yl="\\[\\]\\.:\\/",q0=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",X0="[^"+Yl.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",Zl),K0=/(WCOD+)?/.source.replace("WCOD",X0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Z0=new RegExp("^"+j0+K0+J0+Y0+"$"),Q0=["material","materials","bones","map"],Sl=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(e){let t=Z0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Q0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Sl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);var ih=class ih{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ih.prototype.isMatrix2=!0;var wl=ih;function Ql(i,e,t,n){let s=$0(n);switch(t){case Vl:return i*e;case er:return i*e/s.components*s.byteLength;case Io:return i*e/s.components*s.byteLength;case Bi:return i*e*2/s.components*s.byteLength;case Lo:return i*e*2/s.components*s.byteLength;case Hl:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Do:return i*e*4/s.components*s.byteLength;case Jr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:case Oo:return Math.max(i,16)*Math.max(e,8)/4;case Fo:case Uo:return Math.max(i,8)*Math.max(e,8)/2;case Bo:case ko:case Go:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zo:case $r:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sc:case rc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ea:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(i){switch(i){case hn:case Bl:return{byteLength:1,components:1};case Qs:case kl:case Nn:return{byteLength:2,components:1};case Co:case Po:return{byteLength:2,components:4};case Fn:case Ro:case mn:return{byteLength:4,components:1};case zl:case Gl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ad(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,b)=>d.start-b.start);let f=0;for(let d=1;d<u.length;d++){let b=u[f],g=u[d];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,b=u.length;d<b;d++){let g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,eg=`uniform sampler2D dfgLUT;
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gg=`float getShadowMask() {
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
}`,Vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`#include <common>
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
}`,lb=`#if DEPTH_PACKING == 3200
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
}`,hb=`#define DISTANCE
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
}`,fb=`#define DISTANCE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`uniform float scale;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,bb=`uniform vec3 diffuse;
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
}`,xb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,yb=`#define MATCAP
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
}`,vb=`#define MATCAP
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
}`,Mb=`#define NORMAL
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
}`,Sb=`#define NORMAL
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
}`,wb=`#define PHONG
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
}`,Ab=`#define PHONG
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
}`,Eb=`#define STANDARD
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
}`,Tb=`#define STANDARD
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
}`,Rb=`#define TOON
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
}`,Cb=`#define TOON
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
}`,Pb=`uniform float size;
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Db=`uniform vec3 color;
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
}`,Fb=`uniform float rotation;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:cm,aomap_pars_fragment:lm,batching_pars_vertex:hm,batching_vertex:fm,begin_vertex:um,beginnormal_vertex:dm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:ym,color_fragment:vm,color_pars_fragment:Mm,color_pars_vertex:Sm,color_vertex:wm,common:Am,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Fm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Km,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:zm,fog_fragment:Gm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Wm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Xm,lights_pars_begin:jm,lights_toon_fragment:Jm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Zm,lights_phong_pars_fragment:Qm,lights_physical_fragment:$m,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:cg,map_fragment:lg,map_pars_fragment:hg,map_particle_fragment:fg,map_particle_pars_fragment:ug,metalnessmap_fragment:dg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:bg,morphtarget_pars_vertex:xg,morphtarget_vertex:_g,normal_fragment_begin:yg,normal_fragment_maps:vg,normal_pars_fragment:Mg,normal_pars_vertex:Sg,normal_vertex:wg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Pg,packing:Ig,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Fg,dithering_pars_fragment:Ng,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:kg,shadowmap_vertex:zg,shadowmask_pars_fragment:Gg,skinbase_vertex:Vg,skinning_pars_vertex:Hg,skinning_vertex:Wg,skinnormal_vertex:qg,specularmap_fragment:Xg,specularmap_pars_fragment:jg,tonemapping_fragment:Kg,tonemapping_pars_fragment:Jg,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:Qg,uv_pars_vertex:$g,uv_vertex:eb,worldpos_vertex:tb,background_vert:nb,background_frag:ib,backgroundCube_vert:sb,backgroundCube_frag:rb,cube_vert:ab,cube_frag:ob,depth_vert:cb,depth_frag:lb,distance_vert:hb,distance_frag:fb,equirect_vert:ub,equirect_frag:db,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:bb,meshlambert_vert:xb,meshlambert_frag:_b,meshmatcap_vert:yb,meshmatcap_frag:vb,meshnormal_vert:Mb,meshnormal_frag:Sb,meshphong_vert:wb,meshphong_frag:Ab,meshphysical_vert:Eb,meshphysical_frag:Tb,meshtoon_vert:Rb,meshtoon_frag:Cb,points_vert:Pb,points_frag:Ib,shadow_vert:Lb,shadow_frag:Db,sprite_vert:Fb,sprite_frag:Nb},he={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Yn={basic:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Yt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Yt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Yt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Yt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Yt([he.lights,he.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yn.physical={uniforms:Yt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var uc={r:0,b:0,g:0},Ub=new we,Ed=new De;Ed.set(-1,0,0,0,1,0,0,0,1);function Ob(i,e,t,n,s,r){let a=new Ae(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let y=M.backgroundBlurriness>0;T=e.get(T,y)}return T}function b(M){let T=!1,y=d(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,T){let y=d(T);y&&(y.isCubeTexture||y.mapping===Kr)?(c===void 0&&(c=new at(new Li(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ls(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ed),c.material.toneMapped=ze.getTransfer(y.colorSpace)!==Qe,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new at(new is(2,2),new pn({name:"BackgroundMaterial",uniforms:ls(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ze.getTransfer(y.colorSpace)!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(uc,Jl(i)),t.buffers.color.setClear(uc.r,uc.g,uc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:b,addToRenderList:g,dispose:p}}function Bb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(C,D,F,I,B){let z=!1,H=u(C,I,F,D);r!==H&&(r=H,c(r.object)),z=d(C,I,F,B),z&&b(C,I,F,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(C,D,F,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,D,F,I){let B=I.wireframe===!0,z=n[D.id];z===void 0&&(z={},n[D.id]=z);let H=C.isInstancedMesh===!0?C.id:0,te=z[H];te===void 0&&(te={},z[H]=te);let q=te[F.id];q===void 0&&(q={},te[F.id]=q);let Y=q[B];return Y===void 0&&(Y=f(l()),q[B]=Y),Y}function f(C){let D=[],F=[],I=[];for(let B=0;B<t;B++)D[B]=0,F[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:I,object:C,attributes:{},index:null}}function d(C,D,F,I){let B=r.attributes,z=D.attributes,H=0,te=F.getAttributes();for(let q in te)if(te[q].location>=0){let $=B[q],ve=z[q];if(ve===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),$===void 0||$.attribute!==ve||ve&&$.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function b(C,D,F,I){let B={},z=D.attributes,H=0,te=F.getAttributes();for(let q in te)if(te[q].location>=0){let $=z[q];$===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&($=C.instanceColor));let ve={};ve.attribute=$,$&&$.data&&(ve.data=$.data),B[q]=ve,H++}r.attributes=B,r.attributesNum=H,r.index=I}function g(){let C=r.newAttributes;for(let D=0,F=C.length;D<F;D++)C[D]=0}function m(C){p(C,0)}function p(C,D){let F=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;F[C]=1,I[C]===0&&(i.enableVertexAttribArray(C),I[C]=1),B[C]!==D&&(i.vertexAttribDivisor(C,D),B[C]=D)}function M(){let C=r.newAttributes,D=r.enabledAttributes;for(let F=0,I=D.length;F<I;F++)D[F]!==C[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function T(C,D,F,I,B,z,H){H===!0?i.vertexAttribIPointer(C,D,F,B,z):i.vertexAttribPointer(C,D,F,I,B,z)}function y(C,D,F,I){g();let B=I.attributes,z=F.getAttributes(),H=D.defaultAttributeValues;for(let te in z){let q=z[te];if(q.location>=0){let Y=B[te];if(Y===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),Y!==void 0){let $=Y.normalized,ve=Y.itemSize,me=e.get(Y);if(me===void 0)continue;let Ke=me.buffer,Fe=me.type,Ue=me.bytesPerElement,j=Fe===i.INT||Fe===i.UNSIGNED_INT||Y.gpuType===Ro;if(Y.isInterleavedBufferAttribute){let Z=Y.data,be=Z.stride,Ie=Y.offset;if(Z.isInstancedInterleavedBuffer){for(let de=0;de<q.locationSize;de++)p(q.location+de,Z.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<q.locationSize;de++)m(q.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let de=0;de<q.locationSize;de++)T(q.location+de,ve/q.locationSize,Fe,$,be*Ue,(Ie+ve/q.locationSize*de)*Ue,j)}else{if(Y.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)p(q.location+Z,Y.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Z=0;Z<q.locationSize;Z++)m(q.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Z=0;Z<q.locationSize;Z++)T(q.location+Z,ve/q.locationSize,Fe,$,ve*Ue,ve/q.locationSize*Z*Ue,j)}}else if(H!==void 0){let $=H[te];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(q.location,$);break;case 3:i.vertexAttrib3fv(q.location,$);break;case 4:i.vertexAttrib4fv(q.location,$);break;default:i.vertexAttrib1fv(q.location,$)}}}}M()}function v(){w();for(let C in n){let D=n[C];for(let F in D){let I=D[F];for(let B in I){let z=I[B];for(let H in z)h(z[H].object),delete z[H];delete I[B]}}delete n[C]}}function A(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let F in D){let I=D[F];for(let B in I){let z=I[B];for(let H in z)h(z[H].object),delete z[H];delete I[B]}}delete n[C.id]}function E(C){for(let D in n){let F=n[D];for(let I in F){let B=F[I];if(B[C.id]===void 0)continue;let z=B[C.id];for(let H in z)h(z[H].object),delete z[H];delete B[C.id]}}}function x(C){for(let D in n){let F=n[D],I=C.isInstancedMesh===!0?C.id:0,B=F[I];if(B!==void 0){for(let z in B){let H=B[z];for(let te in H)h(H[te].object),delete H[te];delete B[z]}delete F[I],Object.keys(F).length===0&&delete n[D]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function kb(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==gn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==hn&&E!==mn&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:v,samples:A}}function Gb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Rn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let b=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||b===null||b.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,T=M*4,y=p.clippingState||null;l.value=y,y=h(b,f,T,d);for(let v=0;v!==T;++v)y[v]=t[v];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,b){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,b!==!0||m===null){let p=d+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=d;T!==g;++T,y+=4)a.copy(u[T]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var sr=4,Vb=6,Hb=20,Wb=256,na=new Fi,sd=new Ae,sh=null,rh=0,ah=0,oh=!1,qb=new L,hs=new L,ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=qb}=r;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,ah),this._renderer.xr.enabled=oh,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Nn,format:gn,colorSpace:tn,depthBuffer:!1},s=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xb(r)),this._blurMaterial=Kb(r,e,t),this._ggxMaterial=jb(r,e,t)}return s}_compileMaterial(e){let t=new at(new Ft,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,n,s,r){let l=new St(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sd),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new Li,new nn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(sd),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let v=this._cubeSize;ir(s,y*v,T>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(g,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ui||e.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,na)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:b}=this,g=this._sizeLods[n],m=3*g*(n>b-sr?n-b+sr:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=b-t,ir(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(o,na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=b-n,ir(e,m,p,3*g,2*g),s.setRenderTarget(e),s.render(o,na)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-sr?s-this._lodMax+sr:0),f=4*(this._cubeSize-h);ir(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,na)}};function Xb(i){let e=[],t=[],n=i,s=i-sr+1+Vb;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,b=new Float32Array(d*f*u),g=new Float32Array(d*f*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,T=p>2?0:-1,y=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];b.set(y,d*f*p);for(let v=0;v<f;v++){let A=h[v*2]*2-1,E=h[v*2+1]*2-1;p===0?hs.set(1,E,A):p===1?hs.set(-A,1,-E):p===2?hs.set(-A,E,1):p===3?hs.set(-1,E,-A):p===4?hs.set(-A,-1,E):hs.set(A,E,-1),hs.toArray(g,(p*f+v)*d)}}let m=new Ft;m.setAttribute("position",new rt(b,d)),m.setAttribute("outputDirection",new rt(g,d)),t.push(new at(m,null)),n>sr&&n--}return{lodMeshes:t,sizeLods:e}}function rd(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jb(i,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Kb(i,e,t){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ad(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function od(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Li(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Kn});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=vt),new vo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Jb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ao||d===Eo)if(e.has(f)){let b=e.get(f).texture;return o(b,f.mapping)}else{let b=f.image;if(b&&b.height>0){let g=new pc(b.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,b=d===Ao||d===Eo,g=d===Ui||d===os;if(b||g){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ar(i)),m=b?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return b&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new ar(i)),m=b?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===Ao?f.mapping=Ui:d===Eo&&(f.mapping=os),f}function l(f){let d=0,b=6;for(let g=0;g<b;g++)f[g]!==void 0&&d++;return d===b}function c(f){let d=f.target;d.removeEventListener("dispose",c);let b=e.get(d);b!==void 0&&(e.delete(d),b.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let b=t.get(d);b!==void 0&&(t.delete(d),b.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Yb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ki("WebGLRenderer: "+n+" extension not supported."),s}}}function Zb(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let b in f.attributes)e.remove(f.attributes[b]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,b=u.attributes.position,g=0;if(b===void 0)return;if(d!==null){let M=d.array;g=d.version;for(let T=0,y=M.length;T<y;T+=3){let v=M[T+0],A=M[T+1],E=M[T+2];f.push(v,A,A,E,E,v)}}else{let M=b.array;g=b.version;for(let T=0,y=M.length/3-1;T<y;T+=3){let v=T+0,A=T+1,E=T+2;f.push(v,A,A,E,E,v)}}let m=new(b.count>=65535?Pr:Cr)(f,1);m.version=g;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Qb(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let g=0;for(let m=0;m<d;m++)g+=f[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $b(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ex(i,e,t){let n=new WeakMap,s=new tt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let w=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;d===!0&&(T=1),b===!0&&(T=2),g===!0&&(T=3);let y=o.attributes.position.count*T,v=1;y>e.maxTextureSize&&(v=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*v*4*u),E=new Tr(A,y,v,u);E.type=mn,E.needsUpdate=!0;let x=T*4;for(let R=0;R<u;R++){let C=m[R],D=p[R],F=M[R],I=y*v*4*R;for(let B=0;B<C.count;B++){let z=B*x;d===!0&&(s.fromBufferAttribute(C,B),A[I+z+0]=s.x,A[I+z+1]=s.y,A[I+z+2]=s.z,A[I+z+3]=0),b===!0&&(s.fromBufferAttribute(D,B),A[I+z+4]=s.x,A[I+z+5]=s.y,A[I+z+6]=s.z,A[I+z+7]=0),g===!0&&(s.fromBufferAttribute(F,B),A[I+z+8]=s.x,A[I+z+9]=s.y,A[I+z+10]=s.z,A[I+z+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new Ne(y,v)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let b=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var nx={[Il]:"LINEAR_TONE_MAPPING",[Ll]:"REINHARD_TONE_MAPPING",[Dl]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[jr]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function ix(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ft;c.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new en([0,2,0,0,2,0],2));let h=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new at(c,h),f=new Fi(-1,1,1,-1,0,1),d=null,b=null,g=!1,m,p=null,M=[],T=!1;this.setSize=function(y,v){a.setSize(y,v),o!==null&&o.setSize(y,v),l!==null&&l.setSize(y,v);for(let A=0;A<M.length;A++){let E=M[A];E.setSize&&E.setSize(y,v)}},this.setEffects=function(y){M=y,T=M.length>0&&M[0].isRenderPass===!0;let v=a.width,A=a.height;M.length>0&&o===null&&(o=new Wt(v,A,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(v,A,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let x=M[E];x.setSize&&x.setSize(v,A)}},this.begin=function(y,v){if(g||y.toneMapping===Ln&&M.length===0)return!1;if(p=v,v!==null){let A=v.width,E=v.height;(a.width!==A||a.height!==E)&&this.setSize(A,E)}return T===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Ln,!0},this.hasRenderPass=function(){return T},this.end=function(y,v){y.toneMapping=m,g=!0;let A=a,E=o;for(let x=0;x<M.length;x++){let w=M[x];w.enabled!==!1&&(w.render(y,E,A,v),w.needsSwap!==!1&&(A=E,E=E===o?l:o))}if(d!==y.outputColorSpace||b!==y.toneMapping){d=y.outputColorSpace,b=y.toneMapping,h.defines={},ze.getTransfer(d)===Qe&&(h.defines.SRGB_TRANSFER="");let x=nx[b];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(p),y.render(u,f),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Td=new Ot,hh=new Ii(1,1),Rd=new Tr,Cd=new ao,Pd=new Fr,cd=[],ld=[],hd=new Float32Array(16),fd=new Float32Array(9),ud=new Float32Array(4);function or(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bc(i,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),zt(t,n)}}function lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),zt(t,n)}}function hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;hd.set(n),i.uniformMatrix4fv(this.addr,!1,hd),zt(t,n)}}function fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hh.compareFunction=t.isReversedDepthBuffer()?fc:hc,r=hh):r=Td,t.setTexture2D(e||r,s)}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cd,s)}function vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pd,s)}function Mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rd,s)}function Sx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return cx;case 35675:return lx;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return bx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return Mx}}function wx(i,e){i.uniform1fv(this.addr,e)}function Ax(i,e){let t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function Ex(i,e){let t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function Tx(i,e){let t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function Rx(i,e){let t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cx(i,e){let t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Px(i,e){let t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ix(i,e){i.uniform1iv(this.addr,e)}function Lx(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Fx(i,e){i.uniform4iv(this.addr,e)}function Nx(i,e){i.uniform1uiv(this.addr,e)}function Ux(i,e){i.uniform2uiv(this.addr,e)}function Ox(i,e){i.uniform3uiv(this.addr,e)}function Bx(i,e){i.uniform4uiv(this.addr,e)}function kx(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=hh:a=Td;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function zx(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cd,r[a])}function Gx(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pd,r[a])}function Vx(i,e,t){let n=this.cache,s=e.length,r=bc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rd,r[a])}function Hx(i){switch(i){case 5126:return wx;case 35664:return Ax;case 35665:return Ex;case 35666:return Tx;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Fx;case 5125:return Nx;case 36294:return Ux;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}var fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sx(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hx(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function dd(i,e){i.seq.push(e),i.map[e.id]=e}function Wx(i,e,t){let n=i.name,s=n.length;for(ch.lastIndex=0;;){let r=ch.exec(n),a=ch.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dd(t,c===void 0?new fh(o,i,e):new uh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new dh(o),dd(t,u)),t=u}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Wx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var qx=37297,Xx=0;function jx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var md=new De;function Kx(i){ze._getMatrix(md,ze.workingColorSpace,i);let e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case Ar:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jx(i.getShaderSource(e),o)}else return r}function Jx(i,e){let t=Kx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Yx={[Il]:"Linear",[Ll]:"Reinhard",[Dl]:"Cineon",[Fl]:"ACESFilmic",[Ul]:"AgX",[jr]:"Neutral",[Nl]:"Custom"};function Zx(i,e){let t=Yx[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dc=new L;function Qx(){ze.getLuminanceCoefficients(dc);let i=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function e_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sa(i){return i!==""}function bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(n_,s_)}var i_=new Map;function s_(i,e){let t=ke[e];if(t===void 0){let n=i_.get(e);if(n!==void 0)t=ke[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ph(t)}var r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(i){return i.replace(r_,a_)}function a_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var o_={[Xr]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function c_(i){return o_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l_={[Ui]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function h_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":l_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var f_={[os]:"ENVMAP_MODE_REFRACTION"};function u_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":f_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d_={[wo]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":d_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=c_(t),c=h_(t),h=u_(t),u=p_(t),f=m_(t),d=$x(t),b=e_(r),g=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(m=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),Qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=ph(a),a=bd(a,t),a=xd(a,t),o=ph(o),o=bd(o,t),o=xd(o,t),a=_d(a),o=_d(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+m+a,y=M+p+o,v=pd(s,s.VERTEX_SHADER,T),A=pd(s,s.FRAGMENT_SHADER,y);s.attachShader(g,v),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(A)||"",B=D.trim(),z=F.trim(),H=I.trim(),te=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,A);else{let Y=gd(s,v,"vertex"),$=gd(s,A,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+Y+`
`+$)}else B!==""?Ee("WebGLProgram: Program Info Log:",B):(z===""||H==="")&&(q=!1);q&&(C.diagnostics={runnable:te,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(v),s.deleteShader(A),x=new rr(s,g),w=t_(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,qx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}var b_=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gh(e),t.set(e,n)),n}},gh=class{constructor(e){this.id=b_++,this.code=e,this.usedTimes=0}};function x_(i){return i===Bi||i===$r||i===ea}function __(i,e,t,n,s,r){let a=new Rr,o=new mh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,w,R,C,D,F){let I=C.fog,B=D.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,te=e.get(x.envMap||z,H),q=te&&te.mapping===Kr?te.image.height:null,Y=d[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ee("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=$!==void 0?$.length:0,me=0;B.morphAttributes.position!==void 0&&(me=1),B.morphAttributes.normal!==void 0&&(me=2),B.morphAttributes.color!==void 0&&(me=3);let Ke,Fe,Ue,j;if(Y){let ft=Yn[Y];Ke=ft.vertexShader,Fe=ft.fragmentShader}else{Ke=x.vertexShader,Fe=x.fragmentShader;let ft=o.getVertexShaderStage(x),Ye=o.getFragmentShaderStage(x);o.update(x,ft,Ye),Ue=ft.id,j=Ye.id}let Z=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,de=D.isBatchedMesh===!0,Ge=!!x.map,Ut=!!x.matcap,He=!!te,Je=!!x.aoMap,ht=!!x.lightMap,Xe=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Vt=!!x.displacementMap,sn=!!x.emissiveMap,yt=!!x.metalnessMap,It=!!x.roughnessMap,O=x.anisotropy>0,qt=x.clearcoat>0,$e=x.dispersion>0,P=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,W=x.transmission>0,K=O&&!!x.anisotropyMap,ie=qt&&!!x.clearcoatMap,se=qt&&!!x.clearcoatNormalMap,J=qt&&!!x.clearcoatRoughnessMap,ee=_&&!!x.iridescenceMap,re=_&&!!x.iridescenceThicknessMap,Te=k&&!!x.sheenColorMap,le=k&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Re=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Oe=W&&!!x.transmissionMap,U=W&&!!x.thicknessMap,oe=!!x.gradientMap,Q=!!x.alphaMap,ce=x.alphaTest>0,pe=!!x.alphaHash,ne=!!x.extensions,Ce=Ln;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let Me={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:Fe,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:de,batchingColor:de&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:Ut,envMap:He,envMapMode:He&&te.mapping,envMapCubeUVHeight:q,aoMap:Je,lightMap:ht,bumpMap:Xe,normalMap:xt,displacementMap:Vt,emissiveMap:sn,normalMapObjectSpace:xt&&x.normalMapType===Vu,normalMapTangentSpace:xt&&x.normalMapType===nr,packedNormalMap:xt&&x.normalMapType===nr&&x_(x.normalMap.format),metalnessMap:yt,roughnessMap:It,anisotropy:O,anisotropyMap:K,clearcoat:qt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:J,dispersion:$e,retroreflection:P,iridescence:_,iridescenceMap:ee,iridescenceThicknessMap:re,sheen:k,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:ae,specularColorMap:Re,specularIntensityMap:Pe,transmission:W,transmissionMap:Oe,thicknessMap:U,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:pe,combine:x.combine,mapUv:Ge&&b(x.map.channel),aoMapUv:Je&&b(x.aoMap.channel),lightMapUv:ht&&b(x.lightMap.channel),bumpMapUv:Xe&&b(x.bumpMap.channel),normalMapUv:xt&&b(x.normalMap.channel),displacementMapUv:Vt&&b(x.displacementMap.channel),emissiveMapUv:sn&&b(x.emissiveMap.channel),metalnessMapUv:yt&&b(x.metalnessMap.channel),roughnessMapUv:It&&b(x.roughnessMap.channel),anisotropyMapUv:K&&b(x.anisotropyMap.channel),clearcoatMapUv:ie&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:le&&b(x.sheenRoughnessMap.channel),specularMapUv:ae&&b(x.specularMap.channel),specularColorMapUv:Re&&b(x.specularColorMap.channel),specularIntensityMapUv:Pe&&b(x.specularIntensityMap.channel),transmissionMapUv:Oe&&b(x.transmissionMap.channel),thicknessMapUv:U&&b(x.thicknessMap.channel),alphaMapUv:Q&&b(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||O),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ge||Q),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&ze.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:sn&&x.emissiveMap.isVideoTexture===!0&&ze.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let w=d[x.type],R;if(w){let C=Yn[w];R=td.clone(C.uniforms)}else R=x.uniforms;return R}function y(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new g_(i,w,x,s),c.push(R),h.set(w,R)),R}function v(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:E}}function y_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function v_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Md(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,b,g,m,p){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:b,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=b,M.materialVariant=a(f),M.groupOrder=g,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function l(f,d,b,g,m,p,M){M.reversedDepth===!0&&(m=-m);let T=o(f,d,b,g,m,p);b.transmission>0?n.push(T):b.transparent===!0?s.push(T):t.push(T)}function c(f,d,b,g,m,p){let M=o(f,d,b,g,m,p);b.transmission>0?n.unshift(M):b.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,d){t.length>1&&t.sort(f||v_),n.length>1&&n.sort(d||vd),s.length>1&&s.sort(d||vd)}function u(){for(let f=e,d=i.length;f<d;f++){let b=i[f];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function M_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Md,i.set(n,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function S_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ae};break;case"SpotLight":t={position:new L,direction:new L,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function w_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var A_=0;function E_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T_(i){let e=new S_,t=w_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new we,a=new we;function o(c){let h=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,b=0,g=0,m=0,p=0,M=0,T=0,y=0,v=0,A=0,E=0,x=0,w=0,R=0;c.sort(E_);for(let D=0,F=c.length;D<F;D++){let I=c[D],B=I.color,z=I.intensity,H=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Bi?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*z,u+=B.g*z,f+=B.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],z);R++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,$=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[b]=$,n.sunShadowMap[b]=te;let ve=Y.getViewportCount();for(let me=0;me<ve;me++)n.sunShadowMatrix[g+me]=Y.getMatrix(me),n.sunShadowCascade[g+me]=Y._cascadeData[me];g+=ve,b++}n.sun[d]=q,d++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,$=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=I.shadow.matrix,v++}n.directional[m]=q,m++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(B).multiplyScalar(z),q.distance=H,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[M]=q;let Y=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,Y.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[M]=Y.matrix,I.castShadow){let $=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=te,E++}M++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(B).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=q,T++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Y=I.shadow,$=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,A++}n.point[p]=q,p++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[y]=q,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.sunLength!==d||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==M||C.rectAreaLength!==T||C.hemiLength!==y||C.numSunShadows!==b||C.numDirectionalShadows!==v||C.numPointShadows!==A||C.numSpotShadows!==E||C.numSpotMaps!==x||C.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.sunLength=d,C.directionalLength=m,C.pointLength=p,C.spotLength=M,C.rectAreaLength=T,C.hemiLength=y,C.numSunShadows=b,C.numDirectionalShadows=v,C.numPointShadows=A,C.numSpotShadows=E,C.numSpotMaps=x,C.numLightProbes=R,n.version=A_++)}function l(c,h){let u=0,f=0,d=0,b=0,g=0,m=0,p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let y=c[M];if(y.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(y.isSpotLight){let v=n.spot[b];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),b++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Sd(i){let e=new T_(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function R_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Sd(i),e.set(s,[o])):r>=a.length?(o=new Sd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
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
}`,I_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],L_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],wd=new we,ia=new L,lh=new L;function D_(i,e,t){let n=new Ws,s=new Ne,r=new Ne,a=new tt,o=new fo,l=new uo,c={},h=t.maxTextureSize,u={[jn]:Bt,[Bt]:jn,[ln]:ln},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let b=new Ft;b.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new at(b,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let p=this.type;this.render=function(A,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===xu&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Kn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==this.type;F&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=A.length;I<B;I++){let z=A[I],H=z.shadow;if(H===void 0){Ee("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let te=H.getFrameExtents();s.multiply(te),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,H.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Js){if(z.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wt(s.x,s.y,{format:Bi,type:Nn,minFilter:vt,magFilter:vt,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Ii(s.x,s.y,mn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Vn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tt,H.map.depthTexture.magFilter=Tt}else z.isPointLight?(H.map=new pc(s.x),H.map.depthTexture=new lo(s.x,Fn)):(H.map=new Wt(s.x,s.y),H.map.depthTexture=new Ii(s.x,s.y,Fn)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Vn,this.type===Xr?(H.map.depthTexture.compareFunction=q?fc:hc,H.map.depthTexture.minFilter=vt,H.map.depthTexture.magFilter=vt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tt,H.map.depthTexture.magFilter=Tt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Y=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,x);for(let $=0;$<Y;$++){let ve=H.getCamera($);if(z.isPointLight){let me=H.camera,Ke=H.matrix,Fe=z.distance||me.far;Fe!==me.far&&(me.far=Fe,me.updateProjectionMatrix()),ia.setFromMatrixPosition(z.matrixWorld),me.position.copy(ia),lh.copy(me.position),lh.add(I_[$]),me.up.copy(L_[$]),me.lookAt(lh),me.updateMatrixWorld(),Ke.makeTranslation(-ia.x,-ia.y,-ia.z),wd.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(wd,me.coordinateSystem,me.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,$),i.clear();else{$===0&&(i.setRenderTarget(H.map),i.clear());let me=H.getViewport($);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),D.viewport(a)}n=H.getFrustum($),y(E,x,ve,z,this.type)}H.isPointLightShadow!==!0&&this.type===Js&&M(H,x),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,C)};function M(A,E){let x=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Wt(s.x,s.y,{format:Bi,type:Nn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,x,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,x,d,g,null)}function T(A,E,x,w){let R=null,C=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=R.uuid,F=E.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let B=I[F];B===void 0&&(B=R.clone(),I[F]=B,E.addEventListener("dispose",v)),R=B}if(R.visible=E.visible,R.wireframe=E.wireframe,w===Js?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:u[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=x}return R}function y(A,E,x,w,R){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===Js)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let F=e.update(A),I=A.material;if(Array.isArray(I)){let B=F.groups;for(let z=0,H=B.length;z<H;z++){let te=B[z],q=I[te.materialIndex];if(q&&q.visible){let Y=T(A,q,w,R);A.onBeforeShadow(i,A,E,x,F,Y,te),i.renderBufferDirect(x,null,F,Y,A,te),A.onAfterShadow(i,A,E,x,F,Y,te)}}}else if(I.visible){let B=T(A,I,w,R);A.onBeforeShadow(i,A,E,x,F,B,null),i.renderBufferDirect(x,null,F,B,A,null),A.onAfterShadow(i,A,E,x,F,B,null)}}let D=A.children;for(let F=0,I=D.length;F<I;F++)y(D[F],E,x,w,R)}function v(A){A.target.removeEventListener("dispose",v);for(let x in c){let w=c[x],R=A.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function F_(i,e){function t(){let U=!1,oe=new tt,Q=null,ce=new tt(0,0,0,0);return{setMask:function(pe){Q!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ne,Ce,Me,ft){ft===!0&&(pe*=Me,ne*=Me,Ce*=Me),oe.set(pe,ne,Ce,Me),ce.equals(oe)===!1&&(i.clearColor(pe,ne,Ce,Me),ce.copy(oe))},reset:function(){U=!1,Q=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,Q=null,ce=null,pe=null;return{setReversed:function(ne){if(oe!==ne){let Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;let Me=pe;pe=null,this.setClear(Me)}},getReversed:function(){return oe},setTest:function(ne){ne?Z(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!U&&(i.depthMask(ne),Q=ne)},setFunc:function(ne){if(oe&&(ne=$u[ne]),ce!==ne){switch(ne){case Za:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ne}},setLocked:function(ne){U=ne},setClear:function(ne){pe!==ne&&(pe=ne,oe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){U=!1,Q=null,ce=null,pe=null,oe=!1}}}function s(){let U=!1,oe=null,Q=null,ce=null,pe=null,ne=null,Ce=null,Me=null,ft=null;return{setTest:function(Ye){U||(Ye?Z(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ye){oe!==Ye&&!U&&(i.stencilMask(Ye),oe=Ye)},setFunc:function(Ye,wn,Bn){(Q!==Ye||ce!==wn||pe!==Bn)&&(i.stencilFunc(Ye,wn,Bn),Q=Ye,ce=wn,pe=Bn)},setOp:function(Ye,wn,Bn){(ne!==Ye||Ce!==wn||Me!==Bn)&&(i.stencilOp(Ye,wn,Bn),ne=Ye,Ce=wn,Me=Bn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){ft!==Ye&&(i.clearStencil(Ye),ft=Ye)},reset:function(){U=!1,oe=null,Q=null,ce=null,pe=null,ne=null,Ce=null,Me=null,ft=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,b=[],g=null,m=!1,p=null,M=null,T=null,y=null,v=null,A=null,E=null,x=new Ae(0,0,0),w=0,R=!1,C=null,D=null,F=null,I=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=te>=2);let Y=null,$={},ve=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Ke=new tt().fromArray(ve),Fe=new tt().fromArray(me);function Ue(U,oe,Q,ce){let pe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(U,ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<Q;Ce++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(oe+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ne}let j={};j[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Ns),Xe(!1),xt(Al),Z(i.CULL_FACE),Je(Kn);function Z(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function be(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ie(U,oe){return f[U]!==oe?(i.bindFramebuffer(U,oe),f[U]=oe,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function de(U,oe){let Q=b,ce=!1;if(U){Q=d.get(oe),Q===void 0&&(Q=[],d.set(oe,Q));let pe=U.textures;if(Q.length!==pe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ce=pe.length;ne<Ce;ne++)Q[ne]=i.COLOR_ATTACHMENT0+ne;Q.length=pe.length,ce=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Q)}function Ge(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Ut={[as]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};Ut[Mu]=i.MIN,Ut[Su]=i.MAX;let He={[wu]:i.ZERO,[Au]:i.ONE,[Eu]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[Pl]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(U,oe,Q,ce,pe,ne,Ce,Me,ft,Ye){if(U===Kn){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),U!==_u){if(U!==p||Ye!==R){if((M!==as||v!==as)&&(i.blendEquation(i.FUNC_ADD),M=as,v=as),Ye)switch(U){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",U);break}else switch(U){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",U);break}T=null,y=null,A=null,E=null,x.set(0,0,0),w=0,p=U,R=Ye}return}pe=pe||oe,ne=ne||Q,Ce=Ce||ce,(oe!==M||pe!==v)&&(i.blendEquationSeparate(Ut[oe],Ut[pe]),M=oe,v=pe),(Q!==T||ce!==y||ne!==A||Ce!==E)&&(i.blendFuncSeparate(He[Q],He[ce],He[ne],He[Ce]),T=Q,y=ce,A=ne,E=Ce),(Me.equals(x)===!1||ft!==w)&&(i.blendColor(Me.r,Me.g,Me.b,ft),x.copy(Me),w=ft),p=U,R=!1}function ht(U,oe){U.side===ln?be(i.CULL_FACE):Z(i.CULL_FACE);let Q=U.side===Bt;oe&&(Q=!Q),Xe(Q),U.blending===Ys&&U.transparent===!1?Je(Kn):Je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ce=U.stencilWrite;o.setTest(ce),ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),sn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(U){C!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),C=U)}function xt(U){U!==gu?(Z(i.CULL_FACE),U!==D&&(U===Al?i.cullFace(i.BACK):U===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),D=U}function Vt(U){U!==F&&(H&&i.lineWidth(U),F=U)}function sn(U,oe,Q){U?(Z(i.POLYGON_OFFSET_FILL),(I!==oe||B!==Q)&&(I=oe,B=Q,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Q))):be(i.POLYGON_OFFSET_FILL)}function yt(U){U?Z(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function It(U){U===void 0&&(U=i.TEXTURE0+z-1),Y!==U&&(i.activeTexture(U),Y=U)}function O(U,oe,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+z-1:Q=Y);let ce=$[Q];ce===void 0&&(ce={type:void 0,texture:void 0},$[Q]=ce),(ce.type!==U||ce.texture!==oe)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(U,oe||j[U]),ce.type=U,ce.texture=oe)}function qt(){let U=$[Y];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function ie(){try{i.texStorage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function se(){try{i.texStorage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function ee(){try{i.texImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function re(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function Te(U,oe){u[U]!==oe&&(i.pixelStorei(U,oe),u[U]=oe)}function le(U){Ke.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function ae(U){Fe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Fe.copy(U))}function Re(U,oe){let Q=c.get(oe);Q===void 0&&(Q=new WeakMap,c.set(oe,Q));let ce=Q.get(U);ce===void 0&&(ce=i.getUniformBlockIndex(oe,U.name),Q.set(U,ce))}function Pe(U,oe){let ce=c.get(oe).get(U);l.get(oe)!==ce&&(i.uniformBlockBinding(oe,ce,U.__bindingPointIndex),l.set(oe,ce))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,$={},f={},d=new WeakMap,b=[],g=null,m=!1,p=null,M=null,T=null,y=null,v=null,A=null,E=null,x=new Ae(0,0,0),w=0,R=!1,C=null,D=null,F=null,I=null,B=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:be,bindFramebuffer:Ie,drawBuffers:de,useProgram:Ge,setBlending:Je,setMaterial:ht,setFlipSided:Xe,setCullFace:xt,setLineWidth:Vt,setPolygonOffset:sn,setScissorTest:yt,activeTexture:It,bindTexture:O,unbindTexture:qt,compressedTexImage2D:$e,compressedTexImage3D:P,texImage2D:J,texImage3D:ee,pixelStorei:Te,getParameter:re,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:ie,texStorage3D:se,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:le,viewport:ae,reset:Oe}}function N_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,u=new Set,f,d=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,_){return b?new OffscreenCanvas(P,_):Bs("canvas")}function m(P,_,k){let W=1,K=$e(P);if((K.width>k||K.height>k)&&(W=k/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor(W*K.width),se=Math.floor(W*K.height);f===void 0&&(f=g(ie,se));let J=_?g(ie,se):f;return J.width=ie,J.height=se,J.getContext("2d").drawImage(P,0,0,ie,se),Ee("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ie+"x"+se+")."),J}else return"data"in P&&Ee("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function p(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,_,k,W,K,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se;W&&(se=e.get("EXT_texture_norm16"),se||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&se&&(J=se.R16_EXT),k===i.SHORT&&se&&(J=se.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),_===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&se&&(J=se.RG16_EXT),k===i.SHORT&&se&&(J=se.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&se&&(J=se.RGB16_EXT),k===i.SHORT&&se&&(J=se.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let ee=ie?Ar:ze.getTransfer(K);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=ee===Qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&se&&(J=se.RGBA16_EXT),k===i.SHORT&&se&&(J=se.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(P,_){let k;return P?_===null||_===Fn||_===$s?k=i.DEPTH24_STENCIL8:_===mn?k=i.DEPTH32F_STENCIL8:_===Qs&&(k=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fn||_===$s?k=i.DEPTH_COMPONENT24:_===mn?k=i.DEPTH_COMPONENT32F:_===Qs&&(k=i.DEPTH_COMPONENT16),k}function A(P,_){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tt&&P.minFilter!==vt?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function E(P){let _=P.target;_.removeEventListener("dispose",E),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function x(P){let _=P.target;_.removeEventListener("dispose",x),C(_)}function w(P){let _=n.get(P);if(_.__webglInit===void 0)return;let k=P.source,W=d.get(k);if(W){let K=W[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(P),Object.keys(W).length===0&&d.delete(k)}n.remove(P)}function R(P){let _=n.get(P);i.deleteTexture(_.__webglTexture);let k=P.source,W=d.get(k);delete W[_.__cacheKey],a.memory.textures--}function C(P){let _=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let K=0;K<_.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[W][K]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=P.textures;for(let W=0,K=k.length;W<K;W++){let ie=n.get(k[W]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(P)}let D=0;function F(){D=0}function I(){return D}function B(P){D=P}function z(){let P=D;return P>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function H(P){let _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function te(P,_){let k=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let W=P.image;if(W===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{be(k,P,_);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function q(P,_){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){be(k,P,_);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function Y(P,_){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){be(k,P,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function $(P,_){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Ie(k,P,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let ve={[Ti]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},me={[Tt]:i.NEAREST,[To]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[Zs]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},Ke={[Wu]:i.NEVER,[Ju]:i.ALWAYS,[qu]:i.LESS,[hc]:i.LEQUAL,[Xu]:i.EQUAL,[fc]:i.GEQUAL,[ju]:i.GREATER,[Ku]:i.NOTEQUAL};function Fe(P,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===vt||_.magFilter===Zs||_.magFilter===cs||_.magFilter===Dn||_.minFilter===vt||_.minFilter===Zs||_.minFilter===cs||_.minFilter===Dn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ve[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ve[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ve[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,me[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ke[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==cs&&_.minFilter!==Dn||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ue(P,_){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",E));let W=_.source,K=d.get(W);K===void 0&&(K={},d.set(W,K));let ie=H(_);if(ie!==P.__cacheKey){K[ie]===void 0&&(K[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[ie].usedTimes++;let se=K[P.__cacheKey];se!==void 0&&(K[P.__cacheKey].usedTimes--,se.usedTimes===0&&R(_)),P.__cacheKey=ie,P.__webglTexture=K[ie].texture}return k}function j(P,_,k){return Math.floor(Math.floor(P/k)/_)}function Z(P,_,k,W){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,W,_.data);else{ie.sort((Te,le)=>Te.start-le.start);let se=0;for(let Te=1;Te<ie.length;Te++){let le=ie[se],ae=ie[Te],Re=le.start+le.count,Pe=j(ae.start,_.width,4),Oe=j(le.start,_.width,4);ae.start<=Re+1&&Pe===Oe&&j(ae.start+ae.count-1,_.width,4)===Pe?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++se,ie[se]=ae)}ie.length=se+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Te=0,le=ie.length;Te<le;Te++){let ae=ie[Te],Re=Math.floor(ae.start/4),Pe=Math.ceil(ae.count/4),Oe=Re%_.width,U=Math.floor(Re/_.width),oe=Pe,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Oe,U,oe,Q,k,W,_.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function be(P,_,k){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let K=Ue(P,_),ie=_.source;t.bindTexture(W,P.__webglTexture,i.TEXTURE0+k);let se=n.get(ie);if(ie.version!==se.__version||K===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=ze.getPrimaries(ze.workingColorSpace),ce=_.colorSpace===mi?null:ze.getPrimaries(_.colorSpace),pe=_.colorSpace===mi||Q===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,s.maxTextureSize);ee=qt(_,ee);let re=r.convert(_.format,_.colorSpace),Te=r.convert(_.type),le=y(_.internalFormat,re,Te,_.normalized,_.colorSpace,_.isVideoTexture);Fe(W,_);let ae,Re=_.mipmaps,Pe=_.isVideoTexture!==!0,Oe=se.__version===void 0||K===!0,U=ie.dataReady,oe=A(_,ee);if(_.isDepthTexture)le=v(_.format===Oi,_.type),Oe&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,le,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,le,ee.width,ee.height,0,re,Te,null));else if(_.isDataTexture)if(Re.length>0){Pe&&Oe&&t.texStorage2D(i.TEXTURE_2D,oe,le,Re[0].width,Re[0].height);for(let Q=0,ce=Re.length;Q<ce;Q++)ae=Re[Q],Pe?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,re,Te,ae.data):t.texImage2D(i.TEXTURE_2D,Q,le,ae.width,ae.height,0,re,Te,ae.data);_.generateMipmaps=!1}else Pe?(Oe&&t.texStorage2D(i.TEXTURE_2D,oe,le,ee.width,ee.height),U&&Z(_,ee,re,Te)):t.texImage2D(i.TEXTURE_2D,0,le,ee.width,ee.height,0,re,Te,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,le,Re[0].width,Re[0].height,ee.depth);for(let Q=0,ce=Re.length;Q<ce;Q++)if(ae=Re[Q],_.format!==gn)if(re!==null)if(Pe){if(U)if(_.layerUpdates.size>0){let pe=Ql(ae.width,ae.height,_.format,_.type);for(let ne of _.layerUpdates){let Ce=ae.data.subarray(ne*pe/ae.data.BYTES_PER_ELEMENT,(ne+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ne,ae.width,ae.height,1,re,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,ee.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,le,ae.width,ae.height,ee.depth,0,ae.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,ee.depth,re,Te,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,le,ae.width,ae.height,ee.depth,0,re,Te,ae.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pe&&Oe&&t.texStorage2D(i.TEXTURE_2D,oe,le,Re[0].width,Re[0].height);for(let Q=0,ce=Re.length;Q<ce;Q++)ae=Re[Q],_.format!==gn?re!==null?Pe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,le,ae.width,ae.height,0,ae.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,re,Te,ae.data):t.texImage2D(i.TEXTURE_2D,Q,le,ae.width,ae.height,0,re,Te,ae.data)}else if(_.isDataArrayTexture)if(Pe){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,le,ee.width,ee.height,ee.depth),U)if(_.layerUpdates.size>0){let Q=Ql(ee.width,ee.height,_.format,_.type);for(let ce of _.layerUpdates){let pe=ee.data.subarray(ce*Q/ee.data.BYTES_PER_ELEMENT,(ce+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,ee.width,ee.height,1,re,Te,pe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,re,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,ee.width,ee.height,ee.depth,0,re,Te,ee.data);else if(_.isData3DTexture)Pe?(Oe&&t.texStorage3D(i.TEXTURE_3D,oe,le,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,re,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,le,ee.width,ee.height,ee.depth,0,re,Te,ee.data);else if(_.isFramebufferTexture){if(Oe)if(Pe)t.texStorage2D(i.TEXTURE_2D,oe,le,ee.width,ee.height);else{let Q=ee.width,ce=ee.height;for(let pe=0;pe<oe;pe++)t.texImage2D(i.TEXTURE_2D,pe,le,Q,ce,0,re,Te,null),Q>>=1,ce>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),u.add(_),Q.onpaint=ce=>{let pe=ce.changedElements;for(let ne of u)pe.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let pe=i.RGBA,ne=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ne,Ce,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&Oe){let Q=$e(Re[0]);t.texStorage2D(i.TEXTURE_2D,oe,le,Q.width,Q.height)}for(let Q=0,ce=Re.length;Q<ce;Q++)ae=Re[Q],Pe?U&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re,Te,ae):t.texImage2D(i.TEXTURE_2D,Q,le,re,Te,ae);_.generateMipmaps=!1}else if(Pe){if(Oe){let Q=$e(ee);t.texStorage2D(i.TEXTURE_2D,oe,le,Q.width,Q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,le,re,Te,ee);p(_)&&M(W),se.__version=ie.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Ie(P,_,k){if(_.image.length!==6)return;let W=Ue(P,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);let ie=n.get(K);if(K.version!==ie.__version||W===!0){t.activeTexture(i.TEXTURE0+k);let se=ze.getPrimaries(ze.workingColorSpace),J=_.colorSpace===mi?null:ze.getPrimaries(_.colorSpace),ee=_.colorSpace===mi||se===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let re=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,le=[];for(let ne=0;ne<6;ne++)!re&&!Te?le[ne]=m(_.image[ne],!0,s.maxCubemapSize):le[ne]=Te?_.image[ne].image:_.image[ne],le[ne]=qt(_,le[ne]);let ae=le[0],Re=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),Oe=y(_.internalFormat,Re,Pe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,oe=ie.__version===void 0||W===!0,Q=K.dataReady,ce=A(_,ae);Fe(i.TEXTURE_CUBE_MAP,_);let pe;if(re){U&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Oe,ae.width,ae.height);for(let ne=0;ne<6;ne++){pe=le[ne].mipmaps;for(let Ce=0;Ce<pe.length;Ce++){let Me=pe[Ce];_.format!==gn?Re!==null?U?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Me.width,Me.height,Re,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Oe,Me.width,Me.height,0,Me.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Me.width,Me.height,Re,Pe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Oe,Me.width,Me.height,0,Re,Pe,Me.data)}}}else{if(pe=_.mipmaps,U&&oe){pe.length>0&&ce++;let ne=$e(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Oe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){U?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,le[ne].width,le[ne].height,Re,Pe,le[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,le[ne].width,le[ne].height,0,Re,Pe,le[ne].data);for(let Ce=0;Ce<pe.length;Ce++){let ft=pe[Ce].image[ne].image;U?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,ft.width,ft.height,Re,Pe,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Oe,ft.width,ft.height,0,Re,Pe,ft.data)}}else{U?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,Pe,le[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,Re,Pe,le[ne]);for(let Ce=0;Ce<pe.length;Ce++){let Me=pe[Ce];U?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Re,Pe,Me.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Oe,Re,Pe,Me.image[ne])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),ie.__version=K.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function de(P,_,k,W,K,ie){let se=r.convert(k.format,k.colorSpace),J=r.convert(k.type),ee=y(k.internalFormat,se,J,k.normalized,k.colorSpace),re=n.get(_),Te=n.get(k);if(Te.__renderTarget=_,!re.__hasExternalTextures){let le=Math.max(1,_.width>>ie),ae=Math.max(1,_.height>>ie);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ie,ee,le,ae,_.depth,0,se,J,null):t.texImage2D(K,ie,ee,le,ae,0,se,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),It(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,Te.__webglTexture,0,yt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,Te.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(P,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){let W=_.depthTexture,K=W&&W.isDepthTexture?W.type:null,ie=v(_.stencilBuffer,K),se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(_),ie,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,P)}else{let W=_.textures;for(let K=0;K<W.length;K++){let ie=W[K],se=r.convert(ie.format,ie.colorSpace),J=r.convert(ie.type),ee=y(ie.internalFormat,se,J,ie.normalized,ie.colorSpace);It(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(_),ee,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(_),ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(P,_,k){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_.depthTexture);let re=r.convert(_.depthTexture.format),Te=r.convert(_.depthTexture.type),le;_.depthTexture.format===Vn?le=i.DEPTH_COMPONENT24:_.depthTexture.format===Oi&&(le=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,_.width,_.height,0,re,Te,null)}}else te(_.depthTexture,0);let ie=K.__webglTexture,se=yt(_),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ee=_.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vn)It(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,ie,0);else if(_.depthTexture.format===Oi)It(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(P){let _=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=W}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Ut(_.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Ut(_.__webglFramebuffer[0],P,0):Ut(_.__webglFramebuffer,P,0)}else if(k){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),Ge(_.__webglDepthbuffer[W],P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ge(_.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(P,_,k){let W=n.get(P);_!==void 0&&de(W.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&He(P)}function ht(P){let _=P.texture,k=n.get(P),W=n.get(_);P.addEventListener("dispose",x);let K=P.textures,ie=P.isWebGLCubeRenderTarget===!0,se=K.length>1;if(se||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),ie){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[J][ee]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(se)for(let J=0,ee=K.length;J<ee;J++){let re=n.get(K[J]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&It(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let ee=K[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let re=r.convert(ee.format,ee.colorSpace),Te=r.convert(ee.type),le=y(ee.internalFormat,re,Te,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),ae=yt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,le,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)de(k.__webglFramebuffer[J][ee],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else de(k.__webglFramebuffer[J],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let J=0,ee=K.length;J<ee;J++){let re=K[J],Te=n.get(re),le=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Te.__webglTexture),Fe(le,re),de(k.__webglFramebuffer,P,re,i.COLOR_ATTACHMENT0+J,le,0),p(re)&&M(le)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),Fe(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)de(k.__webglFramebuffer[ee],P,_,i.COLOR_ATTACHMENT0,J,ee);else de(k.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&M(J),t.unbindTexture()}P.depthBuffer&&He(P)}function Xe(P){let _=P.textures;for(let k=0,W=_.length;k<W;k++){let K=_[k];if(p(K)){let ie=T(P),se=n.get(K).__webglTexture;t.bindTexture(ie,se),M(ie),t.unbindTexture()}}}let xt=[],Vt=[];function sn(P){if(P.samples>0){if(It(P)===!1){let _=P.textures,k=P.width,W=P.height,K=i.COLOR_BUFFER_BIT,ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(P),J=_.length>1;if(J)for(let re=0;re<_.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let ee=P.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<_.length;re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Te=n.get(_[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,K,i.NEAREST),l===!0&&(xt.length=0,Vt.length=0,xt.push(i.COLOR_ATTACHMENT0+re),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xt.push(ie),Vt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let re=0;re<_.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Te=n.get(_[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function yt(P){return Math.min(s.maxSamples,P.samples)}function It(P){let _=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(P){let _=a.render.frame;h.get(P)!==_&&(h.set(P,_),P.update())}function qt(P,_){let k=P.colorSpace,W=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==tn&&k!==mi&&(ze.getTransfer(k)===Qe?(W!==gn||K!==hn)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",k)),_}function $e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Je,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=de,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U_(i,e){function t(n,s=mi){let r,a=ze.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===kl)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Ro)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Vl)return i.ALPHA;if(n===Hl)return i.RGB;if(n===gn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===er)return i.RED;if(n===Io)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===Jr||n===Yr||n===Zr||n===Qr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===No||n===Uo||n===Oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===ko||n===zo||n===Go||n===Vo||n===$r||n===Ho)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===ko)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Go)return r.COMPRESSED_R11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===qo||n===Xo||n===jo||n===Ko||n===Jo||n===Yo||n===Zo||n===Qo||n===$o||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===cc||n===ea||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:O_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends Hn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,b=null,g=typeof XRWebGLBinding<"u",m=new bh,p={},M=t.getContextAttributes(),T=null,y=null,v=[],A=[],E=new Ne,x=null,w=null,R=new St;R.viewport=new tt;let C=new St;C.viewport=new tt;let D=[R,C],F=new Mo,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=v[j];return Z===void 0&&(Z=new Gs,v[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=v[j];return Z===void 0&&(Z=new Gs,v[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=v[j];return Z===void 0&&(Z=new Gs,v[j]=Z),Z.getHandSpace()};function z(j){let Z=A.indexOf(j.inputSource);if(Z===-1)return;let be=v[Z];be!==void 0&&(be.update(j.inputSource,j.frame,c||a),be.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let j=0;j<v.length;j++){let Z=A[j];Z!==null&&(A[j]=null,v[j].disconnect(Z))}I=null,B=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(T),d=null,f=null,u=null,s=null,y=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),w!==null){let j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ie=null,de=null;M.depth&&(de=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=M.stencil?Oi:Vn,Ie=M.stencil?$s:Fn);let Ge={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Wt(f.textureWidth,f.textureHeight,{format:gn,type:hn,depthTexture:new Ii(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Wt(d.framebufferWidth,d.framebufferHeight,{format:gn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(j){for(let Z=0;Z<j.removed.length;Z++){let be=j.removed[Z],Ie=A.indexOf(be);Ie>=0&&(A[Ie]=null,v[Ie].disconnect(be))}for(let Z=0;Z<j.added.length;Z++){let be=j.added[Z],Ie=A.indexOf(be);if(Ie===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=A.length){A.push(be),Ie=Ge;break}else if(A[Ge]===null){A[Ge]=be,Ie=Ge;break}if(Ie===-1)break}let de=v[Ie];de&&de.connect(be)}}let q=new L,Y=new L;function $(j,Z,be){q.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(be.matrixWorld);let Ie=q.distanceTo(Y),de=Z.projectionMatrix.elements,Ge=be.projectionMatrix.elements,Ut=de[14]/(de[10]-1),He=de[14]/(de[10]+1),Je=(de[9]+1)/de[5],ht=(de[9]-1)/de[5],Xe=(de[8]-1)/de[0],xt=(Ge[8]+1)/Ge[0],Vt=Ut*Xe,sn=Ut*xt,yt=Ie/(-Xe+xt),It=yt*-Xe;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(It),j.translateZ(yt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),de[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let O=Ut+yt,qt=He+yt,$e=Vt-It,P=sn+(Ie-It),_=Je*He/qt*O,k=ht*He/qt*O;j.projectionMatrix.makePerspective($e,P,_,k,O,qt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Z=j.near,be=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(be=m.depthFar)),F.near=C.near=R.near=Z,F.far=C.far=R.far=be,(I!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,B=F.far),F.layers.mask=j.layers.mask|6,R.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;let Ie=j.parent,de=F.cameras;ve(F,Ie);for(let Ge=0;Ge<de.length;Ge++)ve(de[Ge],Ie);de.length===2?$(F,R,C):F.projectionMatrix.copy(R.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),me(j,F,Ie)};function me(j,Z,be){be===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return p[j]};let Ke=null;function Fe(j,Z){if(h=Z.getViewerPose(c||a),b=Z,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ie=!1;be.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let He=0;He<be.length;He++){let Je=be[He],ht=null;if(d!==null)ht=d.getViewport(Je);else{let xt=u.getViewSubImage(f,Je);ht=xt.viewport,He===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let Xe=D[He];Xe===void 0&&(Xe=new St,Xe.layers.enable(He),Xe.viewport=new tt,D[He]=Xe),Xe.matrix.fromArray(Je.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Je.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ht.x,ht.y,ht.width,ht.height),He===0&&(F.matrix.copy(Xe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(Xe)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let He=u.getDepthInformation(be[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(de&&de.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let He=0;He<be.length;He++){let Je=be[He].camera;if(Je){let ht=p[Je];ht||(ht=new Ur,p[Je]=ht);let Xe=u.getCameraImage(Je);ht.sourceTexture=Xe}}}}for(let be=0;be<v.length;be++){let Ie=A[be],de=v[be];Ie!==null&&de!==void 0&&de.update(Ie,Z,c||a)}Ke&&Ke(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),b=null}let Ue=new Ad;Ue.setAnimationLoop(Fe),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}},k_=new we,Id=new De;Id.set(-1,0,0,0,1,0,0,0,1);function z_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),b(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),T=M.envMap,y=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Id),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let A=v.program;n.uniformBlockBinding(y,A)}function c(y,v){let A=s[y.id];A===void 0&&(m(y),A=h(y),s[y.id]=A,y.addEventListener("dispose",M));let E=v.program;n.updateUBOMapping(y,E);let x=e.render.frame;r[y.id]!==x&&(f(y),r[y.id]=x)}function h(y){let v=u();y.__bindingPointIndex=v;let A=i.createBuffer(),E=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],A=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,w=A.length;x<w;x++){let R=A[x];if(Array.isArray(R))for(let C=0,D=R.length;C<D;C++)d(R[C],x,C,E);else d(R,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,A,E){if(g(y,v,A,E)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let C=0;C<w.length;C++){let D=w[C],F=p(D);b(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function b(y,v,A){typeof y=="number"||typeof y=="boolean"?v[0]=y:y.isMatrix3?(v[0]=y.elements[0],v[1]=y.elements[1],v[2]=y.elements[2],v[3]=0,v[4]=y.elements[3],v[5]=y.elements[4],v[6]=y.elements[5],v[7]=0,v[8]=y.elements[6],v[9]=y.elements[7],v[10]=y.elements[8],v[11]=0):ArrayBuffer.isView(y)?v.set(new y.constructor(y.buffer,y.byteOffset,v.length)):y.toArray(v,A)}function g(y,v,A,E){let x=y.value,w=v+"_"+A;if(E[w]===void 0)return typeof x=="number"||typeof x=="boolean"?E[w]=x:ArrayBuffer.isView(x)?E[w]=x.slice():E[w]=x.clone(),!0;{let R=E[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return E[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let v=y.uniforms,A=0,E=16;for(let w=0,R=v.length;w<R;w++){let C=Array.isArray(v[w])?v[w]:[v[w]];for(let D=0,F=C.length;D<F;D++){let I=C[D],B=Array.isArray(I.value)?I.value:[I.value];for(let z=0,H=B.length;z<H;z++){let te=B[z],q=p(te),Y=A%E,$=Y%q.boundary,ve=Y+$;A+=$,ve!==0&&E-ve<q.storage&&(A+=E-ve),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=q.storage}}}let x=A%E;return x>0&&(A+=E-x),y.__size=A,y.__cache={},this}function p(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",y),v}function M(y){let v=y.target;v.removeEventListener("dispose",M);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function H_(){return Jn===null&&(Jn=new Pi(V_,16,16,Bi,Nn),Jn.name="DFG_LUT",Jn.minFilter=vt,Jn.magFilter=vt,Jn.wrapS=_n,Jn.wrapT=_n,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var mc=class{constructor(e={}){let{canvas:t=Yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let g=d,m=new Set([Do,Lo,Io]),p=new Set([hn,Fn,Qs,$s,Co,Po]),M=new Uint32Array(4),T=new Int32Array(4),y=new L,v=null,A=null,E=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,D=null,F=null,I=null,B=null;this._outputColorSpace=_t;let z=0,H=0,te=null,q=-1,Y=null,$=new tt,ve=new tt,me=null,Ke=new Ae(0),Fe=0,Ue=t.width,j=t.height,Z=1,be=null,Ie=null,de=new tt(0,0,Ue,j),Ge=new tt(0,0,Ue,j),Ut=!1,He=new Ws,Je=!1,ht=!1,Xe=new we,xt=new L,Vt=new tt,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function It(){return te===null?Z:1}let O=n;function qt(S,N){return t.getContext(S,N)}let $e,P,_,k,W,K,ie,se,J,ee,re,Te,le,ae,Re,Pe,Oe,U,oe,Q,ce,pe,ne;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",wn,!1),O===null){let N="webgl2";if(O=qt(N,S),O===null)throw qt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(S){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Le("WebGLRenderer: "+S.message),S}function Ce(){$e=new Yb(O),$e.init(),ce=new U_(O,$e),P=new zb(O,$e,e,ce),_=new F_(O,$e),P.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),F=O.createFramebuffer(),I=O.createFramebuffer(),B=O.createFramebuffer(),k=new $b(O),W=new y_,K=new N_(O,$e,_,W,P,ce,k),ie=new Jb(R),se=new tm(O),pe=new Bb(O,se),J=new Zb(O,se,k,pe),ee=new tx(O,J,se,pe,k),U=new ex(O,P,K),Re=new Gb(W),re=new __(R,ie,$e,P,pe,Re),Te=new z_(R,W),le=new M_,ae=new R_($e),Oe=new Ob(R,ie,_,ee,b,l),Pe=new D_(R,ee,P),ne=new G_(O,k,P,_),oe=new kb(O,$e,k),Q=new Qb(O,$e,k),k.programs=re.programs,R.capabilities=P,R.extensions=$e,R.properties=W,R.renderLists=le,R.shadowMap=Pe,R.state=_,R.info=k}g!==hn&&(w=new ix(g,t.width,t.height,o,s,r));let Me=new xh(R,O);this.xr=Me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=$e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=$e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(Ue,j,!1))},this.getSize=function(S){return S.set(Ue,j)},this.setSize=function(S,N,X=!0){if(Me.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=S,j=N,t.width=Math.floor(S*Z),t.height=Math.floor(N*Z),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Ue*Z,j*Z).floor()},this.setDrawingBufferSize=function(S,N,X){Ue=S,j=N,Z=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(g===hn){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(de)},this.setViewport=function(S,N,X,G){S.isVector4?de.set(S.x,S.y,S.z,S.w):de.set(S,N,X,G),_.viewport($.copy(de).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(Ge)},this.setScissor=function(S,N,X,G){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,N,X,G),_.scissor(ve.copy(Ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(S){_.setScissorTest(Ut=S)},this.setOpaqueSort=function(S){be=S},this.setTransparentSort=function(S){Ie=S},this.getClearColor=function(S){return S.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let G=0;if(S){let V=!1;if(te!==null){let ue=te.texture.format;V=m.has(ue)}if(V){let ue=te.texture.type,xe=p.has(ue),fe=Oe.getClearColor(),_e=Oe.getClearAlpha(),Se=fe.r,Be=fe.g,We=fe.b;xe?(M[0]=Se,M[1]=Be,M[2]=We,M[3]=_e,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=Se,T[1]=Be,T[2]=We,T[3]=_e,O.clearBufferiv(O.COLOR,0,T))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Oe.dispose(),le.dispose(),ae.dispose(),W.dispose(),ie.dispose(),ee.dispose(),pe.dispose(),ne.dispose(),re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",wf),Me.removeEventListener("sessionend",Af),Hi.stop()};function ft(S){S.preventDefault(),Er("WebGLRenderer: Context Lost."),C=!0}function Ye(){Er("WebGLRenderer: Context Restored."),C=!1;let S=k.autoReset,N=Pe.enabled,X=Pe.autoUpdate,G=Pe.needsUpdate,V=Pe.type;Ce(),k.autoReset=S,Pe.enabled=N,Pe.autoUpdate=X,Pe.needsUpdate=G,Pe.type=V}function wn(S){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Bn(S){let N=S.target;N.removeEventListener("dispose",Bn),Wp(N)}function Wp(S){qp(S),W.remove(S)}function qp(S){let N=W.get(S).programs;N!==void 0&&(N.forEach(function(X){re.releaseProgram(X)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,G,V,ue){N===null&&(N=sn);let xe=V.isMesh&&V.matrixWorld.determinantAffine()<0,fe=Kp(S,N,X,G,V);_.setMaterial(G,xe);let _e=X.index,Se=1;if(G.wireframe===!0){if(_e=J.getWireframeAttribute(X),_e===void 0)return;Se=2}let Be=X.drawRange,We=X.attributes.position,ye=Be.start*Se,Ze=(Be.start+Be.count)*Se;ue!==null&&(ye=Math.max(ye,ue.start*Se),Ze=Math.min(Ze,(ue.start+ue.count)*Se)),_e!==null?(ye=Math.max(ye,0),Ze=Math.min(Ze,_e.count)):We!=null&&(ye=Math.max(ye,0),Ze=Math.min(Ze,We.count));let Lt=Ze-ye;if(Lt<0||Lt===1/0)return;pe.setup(V,G,fe,X,_e);let mt,ct=oe;if(_e!==null&&(mt=se.get(_e),ct=Q,ct.setIndex(mt)),V.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*It()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(V.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),_.setLineWidth(Xt*It()),V.isLineSegments?ct.setMode(O.LINES):V.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else V.isPoints?ct.setMode(O.POINTS):V.isSprite&&ct.setMode(O.TRIANGLES);if(V.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xt=V._multiDrawStarts,ge=V._multiDrawCounts,Qt=V._multiDrawCount,je=_e?se.get(_e).bytesPerElement:1,bn=W.get(G).currentProgram.getUniforms();for(let kn=0;kn<Qt;kn++)bn.setValue(O,"_gl_DrawID",kn),ct.render(Xt[kn]/je,ge[kn])}else if(V.isInstancedMesh)ct.renderInstances(ye,Lt,V.count);else if(X.isInstancedBufferGeometry){let Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ge=Math.min(X.instanceCount,Xt);ct.renderInstances(ye,Lt,ge)}else ct.render(ye,Lt)};function Sf(S,N,X,G){D!==null&&S.isNodeMaterial&&D.setObject(G,S),Je===!0&&Re.setState(S,X,!1),S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,Ma(S,N,G),S.side=jn,S.needsUpdate=!0,Ma(S,N,G),S.side=ln):Ma(S,N,G)}this.compile=function(S,N,X=null){X===null&&(X=S),D!==null&&D.renderStart(S,N,X),A=ae.get(X),A.init(N),x.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),D!==null&&D.updateLights(A.state.lightsArray),ht=this.localClippingEnabled,Je=Re.init(this.clippingPlanes,ht),Je===!0&&Re.setGlobalState(this.clippingPlanes,N),D!==null&&Pe.render(A.state.shadowsArray,X,N);let G=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ue=V.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let fe=ue[xe];Sf(fe,X,N,V),G.add(fe)}else Sf(ue,X,N,V),G.add(ue)}),A=x.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(S,N,X=null){let G=this.compile(S,N,X);return new Promise(V=>{function ue(){if(G.forEach(function(xe){let _e=W.get(xe).currentProgram;(_e===void 0||_e.isReady())&&G.delete(xe)}),G.size===0){V(S);return}setTimeout(ue,10)}$e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Gc=null;function Xp(S){Gc&&Gc(S)}function wf(){Hi.stop()}function Af(){Hi.start()}let Hi=new Ad;Hi.setAnimationLoop(Xp),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(S){Gc=S,Me.setAnimationLoop(S),S===null?Hi.stop():Hi.start()},Me.addEventListener("sessionstart",wf),Me.addEventListener("sessionend",Af),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(S,N);let X=Me.enabled===!0&&Me.isPresenting===!0,G=w!==null&&(te===null||X)&&w.begin(R,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(N),N=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,te),A=ae.get(S,x.length),A.init(N),A.state.textureUnits=K.getTextureUnits(),x.push(A),Xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),He.setFromProjectionMatrix(Xe,Pn,N.reversedDepth),ht=this.localClippingEnabled,Je=Re.init(this.clippingPlanes,ht),v=le.get(S,E.length),v.init(),E.push(v),Me.enabled===!0&&Me.isPresenting===!0){let xe=R.xr.getDepthSensingMesh();xe!==null&&Vc(xe,N,-1/0,R.sortObjects)}Vc(S,N,0,R.sortObjects),v.finish(),D!==null&&D.updateLights(A.state.lightsArray),R.sortObjects===!0&&v.sort(be,Ie),yt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,yt&&Oe.addToRenderList(v,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Re.beginShadows();let V=A.state.shadowsArray;if(Pe.render(V,S,N),Je===!0&&Re.endShadows(),(G&&w.hasRenderPass())===!1){let xe=v.opaque,fe=v.transmissive;if(A.setupLights(),N.isArrayCamera){let _e=N.cameras;if(fe.length>0)for(let Se=0,Be=_e.length;Se<Be;Se++){let We=_e[Se];Tf(xe,fe,S,We)}yt&&Oe.render(S);for(let Se=0,Be=_e.length;Se<Be;Se++){let We=_e[Se];Ef(v,S,We,We.viewport)}}else fe.length>0&&Tf(xe,fe,S,N),yt&&Oe.render(S),Ef(v,S,N)}te!==null&&H===0&&(K.updateMultisampleRenderTarget(te),K.updateRenderTargetMipmap(te)),G&&w.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),pe.resetDefaultState(),q=-1,Y=null,x.pop(),x.length>0?(A=x[x.length-1],K.setTextureUnits(A.state.textureUnits),Je===!0&&Re.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,D!==null&&D.renderEnd()};function Vc(S,N,X,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(He)){G&&Vt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Xe);let xe=ee.update(S),fe=S.material;fe.visible&&v.push(S,xe,fe,X,Vt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(He))){let xe=ee.update(S),fe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Vt.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Vt.copy(xe.boundingSphere.center)),Vt.applyMatrix4(S.matrixWorld).applyMatrix4(Xe)),Array.isArray(fe)){let _e=xe.groups;for(let Se=0,Be=_e.length;Se<Be;Se++){let We=_e[Se],ye=fe[We.materialIndex];ye&&ye.visible&&v.push(S,xe,ye,X,Vt.z,We,N)}}else fe.visible&&v.push(S,xe,fe,X,Vt.z,null,N)}}let ue=S.children;for(let xe=0,fe=ue.length;xe<fe;xe++)Vc(ue[xe],N,X,G)}function Ef(S,N,X,G){let{opaque:V,transmissive:ue,transparent:xe}=S;A.setupLightsView(X),Je===!0&&Re.setGlobalState(R.clippingPlanes,X),G&&_.viewport($.copy(G)),V.length>0&&va(V,N,X),ue.length>0&&va(ue,N,X),xe.length>0&&va(xe,N,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Tf(S,N,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){let ye=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new Wt(1,1,{generateMipmaps:!0,type:ye?Nn:hn,minFilter:Dn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let ue=A.state.transmissionRenderTarget[G.id],xe=G.viewport||$;ue.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);let fe=R.getRenderTarget(),_e=R.getActiveCubeFace(),Se=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(Ke),Fe=R.getClearAlpha(),Fe<1&&R.setClearColor(16777215,.5),R.clear(),yt&&Oe.render(X);let Be=R.toneMapping;R.toneMapping=Ln;let We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),Je===!0&&Re.setGlobalState(R.clippingPlanes,G),va(S,X,G),K.updateMultisampleRenderTarget(ue),K.updateRenderTargetMipmap(ue),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ze=0,Lt=N.length;Ze<Lt;Ze++){let mt=N[Ze],{object:ct,geometry:Xt,material:ge,group:Qt}=mt;if(ge.side===ln&&ct.layers.test(G.layers)){let je=ge.side;ge.side=Bt,ge.needsUpdate=!0,Rf(ct,X,G,Xt,ge,Qt),ge.side=je,ge.needsUpdate=!0,ye=!0}}ye===!0&&(K.updateMultisampleRenderTarget(ue),K.updateRenderTargetMipmap(ue))}R.setRenderTarget(fe,_e,Se),R.setClearColor(Ke,Fe),We!==void 0&&(G.viewport=We),R.toneMapping=Be}function va(S,N,X){let G=N.isScene===!0?N.overrideMaterial:null;for(let V=0,ue=S.length;V<ue;V++){let xe=S[V],{object:fe,geometry:_e,group:Se}=xe,Be=xe.material;Be.allowOverride===!0&&G!==null&&(Be=G),fe.layers.test(X.layers)&&Rf(fe,N,X,_e,Be,Se)}}function Rf(S,N,X,G,V,ue){D!==null&&V.isNodeMaterial&&D.setObject(S,V),S.onBeforeRender(R,N,X,G,V,ue),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(R,N,X,G,S,ue),V.transparent===!0&&V.side===ln&&V.forceSinglePass===!1?(V.side=Bt,V.needsUpdate=!0,R.renderBufferDirect(X,N,G,V,S,ue),V.side=jn,V.needsUpdate=!0,R.renderBufferDirect(X,N,G,V,S,ue),V.side=ln):R.renderBufferDirect(X,N,G,V,S,ue),S.onAfterRender(R,N,X,G,V,ue)}function Ma(S,N,X){N.isScene!==!0&&(N=sn);let G=W.get(S),V=A.state.lights,ue=A.state.shadowsArray,xe=V.state.version,fe=re.getParameters(S,V.state,ue,N,X,A.state.lightProbeGridArray),_e=re.getProgramCacheKey(fe),Se=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;let Be=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=ie.get(S.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Se===void 0&&(S.addEventListener("dispose",Bn),Se=new Map,G.programs=Se);let We=Se.get(_e);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===xe)return Pf(S,fe),We}else fe.uniforms=re.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,X,fe),S.onBeforeCompile(fe,R),We=re.acquireProgram(fe,_e),Se.set(_e,We),G.uniforms=fe.uniforms;let ye=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ye.clippingPlanes=Re.uniform),Pf(S,fe),G.needsLights=Yp(S),G.lightsStateVersion=xe,G.needsLights&&(ye.ambientLightColor.value=V.state.ambient,ye.lightProbe.value=V.state.probe,ye.sunLights.value=V.state.sun,ye.sunLightShadows.value=V.state.sunShadow,ye.directionalLights.value=V.state.directional,ye.directionalLightShadows.value=V.state.directionalShadow,ye.spotLights.value=V.state.spot,ye.spotLightShadows.value=V.state.spotShadow,ye.rectAreaLights.value=V.state.rectArea,ye.ltc_1.value=V.state.rectAreaLTC1,ye.ltc_2.value=V.state.rectAreaLTC2,ye.pointLights.value=V.state.point,ye.pointLightShadows.value=V.state.pointShadow,ye.hemisphereLights.value=V.state.hemi,ye.sunShadowMatrix.value=V.state.sunShadowMatrix,ye.sunShadowCascade.value=V.state.sunShadowCascade,ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ye.spotLightMatrix.value=V.state.spotLightMatrix,ye.spotLightMap.value=V.state.spotLightMap,ye.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=A.state.lightProbeGridArray.length>0,G.currentProgram=We,G.uniformsList=null,We}function Cf(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=rr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Pf(S,N){let X=W.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function jp(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let X=0,G=S.length;X<G;X++){let V=S[X];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Kp(S,N,X,G,V){N.isScene!==!0&&(N=sn),K.resetTextureUnits();let ue=N.fog,xe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,fe=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ze.workingColorSpace,_e=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Se=ie.get(G.envMap||xe,_e),Be=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,Lt=!!X.morphAttributes.color,mt=Ln;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(mt=R.toneMapping);let ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xt=ct!==void 0?ct.length:0,ge=W.get(G),Qt=A.state.lights;if(Je===!0&&(ht===!0||S!==Y)){let ut=S===Y&&G.id===q;Re.setState(G,S,ut)}let je=!1;G.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Qt.state.version||ge.outputColorSpace!==fe||V.isBatchedMesh&&ge.batching===!1||!V.isBatchedMesh&&ge.batching===!0||V.isBatchedMesh&&ge.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ge.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ge.instancing===!1||!V.isInstancedMesh&&ge.instancing===!0||V.isSkinnedMesh&&ge.skinning===!1||!V.isSkinnedMesh&&ge.skinning===!0||V.isInstancedMesh&&ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ge.instancingMorph===!1&&V.morphTexture!==null||ge.envMap!==Se||G.fog===!0&&ge.fog!==ue||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Re.numPlanes||ge.numIntersection!==Re.numIntersection)||ge.vertexAlphas!==Be||ge.vertexTangents!==We||ge.morphTargets!==ye||ge.morphNormals!==Ze||ge.morphColors!==Lt||ge.toneMapping!==mt||ge.morphTargetsCount!==Xt||!!ge.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,ge.__version=G.version);let bn=ge.currentProgram;je===!0&&(bn=Ma(G,N,V),D&&G.isNodeMaterial&&D.onUpdateProgram(G,bn,ge));let kn=!1,bi=!1,xs=!1,st=bn.getUniforms(),Et=ge.uniforms;if(_.useProgram(bn.program)&&(kn=!0,bi=!0,xs=!0),G.id!==q&&(q=G.id,bi=!0),ge.needsLights){let ut=jp(A.state.lightProbeGridArray,V);ge.lightProbeGrid!==ut&&(ge.lightProbeGrid=ut,bi=!0)}if(kn||Y!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),st.setValue(O,"projectionMatrix",S.projectionMatrix),st.setValue(O,"viewMatrix",S.matrixWorldInverse);let _i=st.map.cameraPosition;_i!==void 0&&_i.setValue(O,xt.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&st.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&st.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,bi=!0,xs=!0)}if(ge.needsLights&&(Qt.state.sunShadowMap.length>0&&st.setValue(O,"sunShadowMap",Qt.state.sunShadowMap,K),Qt.state.directionalShadowMap.length>0&&st.setValue(O,"directionalShadowMap",Qt.state.directionalShadowMap,K),Qt.state.spotShadowMap.length>0&&st.setValue(O,"spotShadowMap",Qt.state.spotShadowMap,K),Qt.state.pointShadowMap.length>0&&st.setValue(O,"pointShadowMap",Qt.state.pointShadowMap,K)),V.isSkinnedMesh){st.setOptional(O,V,"bindMatrix"),st.setOptional(O,V,"bindMatrixInverse");let ut=V.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),st.setValue(O,"boneTexture",ut.boneTexture,K))}V.isBatchedMesh&&(st.setOptional(O,V,"batchingTexture"),st.setValue(O,"batchingTexture",V._matricesTexture,K),st.setOptional(O,V,"batchingIdTexture"),st.setValue(O,"batchingIdTexture",V._indirectTexture,K),st.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(O,"batchingColorTexture",V._colorsTexture,K));let xi=X.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&U.update(V,X,bn),(bi||ge.receiveShadow!==V.receiveShadow)&&(ge.receiveShadow=V.receiveShadow,st.setValue(O,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=H_()),bi){if(st.setValue(O,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&Jp(Et,xs),ue&&G.fog===!0&&Te.refreshFogUniforms(Et,ue),Te.refreshMaterialUniforms(Et,G,Z,j,A.state.transmissionRenderTarget[S.id]),ge.needsLights&&ge.lightProbeGrid){let ut=ge.lightProbeGrid;Et.probesSH.value=ut.texture,Et.probesMin.value.copy(ut.boundingBox.min),Et.probesMax.value.copy(ut.boundingBox.max),Et.probesResolution.value.copy(ut.resolution)}rr.upload(O,Cf(ge),Et,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rr.upload(O,Cf(ge),Et,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&st.setValue(O,"center",V.center),st.setValue(O,"modelViewMatrix",V.modelViewMatrix),st.setValue(O,"normalMatrix",V.normalMatrix),st.setValue(O,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let ut=G.uniformsGroups;for(let _i=0,_s=ut.length;_i<_s;_i++){let Lf=ut[_i];ne.update(Lf,bn),ne.bind(Lf,bn)}}return bn}function Jp(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Yp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,N,X){let G=W.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=N,W.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let X=W.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,X=0){te=S,z=N,H=X;let G=null,V=!1,ue=!1;if(S){let fe=W.get(S);if(fe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),$.copy(S.viewport),ve.copy(S.scissor),me=S.scissorTest,_.viewport($),_.scissor(ve),_.setScissorTest(me),q=-1;return}else if(fe.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(fe.__hasExternalTextures)K.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Be=S.depthTexture;if(fe.__boundDepthTexture!==Be){if(Be!==null&&W.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}let _e=S.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);let Se=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[N])?G=Se[N][X]:G=Se[N],V=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?G=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?G=Se[X]:G=Se,$.copy(S.viewport),ve.copy(S.scissor),me=S.scissorTest}else $.copy(de).multiplyScalar(Z).floor(),ve.copy(Ge).multiplyScalar(Z).floor(),me=Ut;if(X!==0&&(G=F),_.bindFramebuffer(O.FRAMEBUFFER,G)&&_.drawBuffers(S,G),_.viewport($),_.scissor(ve),_.setScissorTest(me),V){let fe=W.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,X)}else if(ue){let fe=N;for(let _e=0;_e<S.textures.length;_e++){let Se=W.get(S.textures[_e]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+_e,Se.__webglTexture,X,fe)}}else if(S!==null&&X!==0){let fe=W.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,X)}q=-1};function If(S){let N=W.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=P.textureFormatReadable(S.format),N.__typeReadable=P.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,X,G,V,ue,xe,fe=0){if(!(S&&S.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe]),_e){_.bindFramebuffer(O.FRAMEBUFFER,_e);try{let Se=S.textures[fe],Be=Se.format,We=Se.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ye=If(Se);if(ye.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&X>=0&&X<=S.height-V&&O.readPixels(N,X,G,V,ce.convert(Be),ce.convert(We),ue)}finally{let Se=te!==null?W.get(te).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,G,V,ue,xe,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe]),_e)if(N>=0&&N<=S.width-G&&X>=0&&X<=S.height-V){_.bindFramebuffer(O.FRAMEBUFFER,_e);let Se=S.textures[fe],Be=Se.format,We=Se.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ye=If(Se);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.bufferData(O.PIXEL_PACK_BUFFER,ue.byteLength,O.STREAM_READ),O.readPixels(N,X,G,V,ce.convert(Be),ce.convert(We),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Lt=te!==null?W.get(te).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Lt);let mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qu(O,mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ue),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ze),O.deleteSync(mt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){let G=Math.pow(2,-X),V=Math.floor(S.image.width*G),ue=Math.floor(S.image.height*G),xe=N!==null?N.x:0,fe=N!==null?N.y:0;K.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,xe,fe,V,ue),_.unbindTexture()},this.copyTextureToTexture=function(S,N,X=null,G=null,V=0,ue=0){let xe,fe,_e,Se,Be,We,ye,Ze,Lt,mt=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(X!==null)xe=X.max.x-X.min.x,fe=X.max.y-X.min.y,_e=X.isBox3?X.max.z-X.min.z:1,Se=X.min.x,Be=X.min.y,We=X.isBox3?X.min.z:0;else{let Et=Math.pow(2,-V);xe=Math.floor(mt.width*Et),fe=Math.floor(mt.height*Et),S.isDataArrayTexture?_e=mt.depth:S.isData3DTexture?_e=Math.floor(mt.depth*Et):_e=1,Se=0,Be=0,We=0}G!==null?(ye=G.x,Ze=G.y,Lt=G.z):(ye=0,Ze=0,Lt=0);let ct=ce.convert(N.format),Xt=ce.convert(N.type),ge;N.isData3DTexture?(K.setTexture3D(N,0),ge=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),ge=O.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),ge=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let Qt=_.getParameter(O.UNPACK_ROW_LENGTH),je=_.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=_.getParameter(O.UNPACK_SKIP_PIXELS),kn=_.getParameter(O.UNPACK_SKIP_ROWS),bi=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,mt.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),_.pixelStorei(O.UNPACK_SKIP_ROWS,Be),_.pixelStorei(O.UNPACK_SKIP_IMAGES,We);let xs=S.isDataArrayTexture||S.isData3DTexture,st=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Et=W.get(S),xi=W.get(N),ut=W.get(Et.__renderTarget),_i=W.get(xi.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,ut.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let _s=0;_s<_e;_s++)xs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(S).__webglTexture,V,We+_s),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(N).__webglTexture,ue,Lt+_s)),O.blitFramebuffer(Se,Be,xe,fe,ye,Ze,xe,fe,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||W.has(S)){let Et=W.get(S),xi=W.get(N);_.bindFramebuffer(O.READ_FRAMEBUFFER,I),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let ut=0;ut<_e;ut++)xs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.__webglTexture,V,We+ut):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Et.__webglTexture,V),st?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xi.__webglTexture,ue,Lt+ut):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xi.__webglTexture,ue),V!==0?O.blitFramebuffer(Se,Be,xe,fe,ye,Ze,xe,fe,O.COLOR_BUFFER_BIT,O.NEAREST):st?O.copyTexSubImage3D(ge,ue,ye,Ze,Lt+ut,Se,Be,xe,fe):O.copyTexSubImage2D(ge,ue,ye,Ze,Se,Be,xe,fe);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else st?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(ge,ue,ye,Ze,Lt,xe,fe,_e,ct,Xt,mt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(ge,ue,ye,Ze,Lt,xe,fe,_e,ct,mt.data):O.texSubImage3D(ge,ue,ye,Ze,Lt,xe,fe,_e,ct,Xt,mt):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ue,ye,Ze,xe,fe,ct,Xt,mt.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ue,ye,Ze,mt.width,mt.height,ct,mt.data):O.texSubImage2D(O.TEXTURE_2D,ue,ye,Ze,xe,fe,ct,Xt,mt);_.pixelStorei(O.UNPACK_ROW_LENGTH,Qt),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,je),_.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),_.pixelStorei(O.UNPACK_SKIP_ROWS,kn),_.pixelStorei(O.UNPACK_SKIP_IMAGES,bi),ue===0&&N.generateMipmaps&&O.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){z=0,H=0,te=null,_.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};function _h(i,e){if(e===Wl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===tr||e===ta){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===tr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function xc(i){let e=new Map,t=new Map,n=i.clone();return Ld(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ld(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ld(i.children[n],e.children[n],t)}var _c=class extends Xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new yc(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new yc(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new kh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=pi.extractUrlBase(e);a=pi.resolveURL(c,this.path)}else a=pi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new js(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Od){try{a[Ve.KHR_BINARY_GLTF]=new zh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new jh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:a[u]=new wh;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[u]=new Gh(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[u]=new Vh;break;case Ve.KHR_MESH_QUANTIZATION:a[u]=new Hh;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function W_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Rt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sh=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],tn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ni(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rs(h),c.distance=u;break;case"spot":c=new Wr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},wh=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(s)}},Ah=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Eh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(s)}},Th=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Rh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ch=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,_t)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Ph=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ih=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(r[0],r[1],r[2],tn),Promise.all(s)}},Lh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Dh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(r[0],r[1],r[2],tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,_t)),Promise.all(s)}},Fh=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Nh=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Uh=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Oh=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Bh=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},yc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},kh=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let b of u){let g=new we,m=new L,p=new dt,M=new L(1,1,1),T=new ts(b.geometry,b.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),T.setMatrixAt(v,g.compose(m,p,M));let y=null;for(let v in l)if(v==="_COLOR_0"){let A=l[v];T.instanceColor=new li(A.array,A.itemSize,A.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(y===null){let E=T.geometry;y=new Ft,y.name=E.name;for(let x in E.attributes)y.setAttribute(x,E.attributes[x]);for(let x in E.morphAttributes)y.morphAttributes[x]=E.morphAttributes[x];E.index!==null&&y.setIndex(E.index),y.morphTargetsRelative=E.morphTargetsRelative;for(let x of E.groups)y.addGroup(x.start,x.count,x.materialIndex);E.boundingBox!==null&&(y.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(y.boundingSphere=E.boundingSphere.clone()),y.drawRange.start=E.drawRange.start,y.drawRange.count=E.drawRange.count,y.userData=Object.assign({},E.userData),T.geometry=y}let A=l[v];y.setAttribute(v,new li(A.array,A.itemSize,A.normalized))}pt.prototype.copy.call(T,b),this.parser.assignFinalMaterial(T),d.push(T)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Od="glTF",ra=12,Dd={JSON:1313821514,BIN:5130562},zh=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Od)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ra,r=new DataView(e,ra),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Dd.JSON){let c=new Uint8Array(e,ra+a,o);this.content=n.decode(c)}else if(l===Dd.BIN){let c=ra+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=qh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=qh[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=cr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let b in d.attributes){let g=d.attributes[b],m=l[b];m!==void 0&&(g.normalized=m)}u(d)},o,c,tn,f)})})}},Vh=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Hh=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},vc=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,b=e*c,g=b-c,m=-2*d+3*f,p=d-f,M=1-m,T=p-f+u;for(let y=0;y!==o;y++){let v=a[g+y+o],A=a[g+y+l]*h,E=a[b+y+o],x=a[b+y]*h;r[y]=M*v+T*A+m*E+p*x}return r}},q_=new dt,Wh=class extends vc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return q_.fromArray(r).normalize().toArray(r),r}},yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Tt,9729:vt,9984:To,9985:Zs,9986:cs,9987:Dn},Nd={33071:_n,33648:Us,10497:Ti},yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},X_={CUBICSPLINE:void 0,LINEAR:Yi,STEP:Ji},vh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function j_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function K_(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function J_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Y_(i){let e,t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mh(t.attributes):e=i.indices+":"+Mh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mh(i.targets[n]);return e}function Mh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Xh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Q_=new we,jh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Gr(this.options.manager):this.textureLoader=new qr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return fs(r,o,s),Zn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(pi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=yh[s.type],o=cr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new rt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=yh[s.type],c=cr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0,g,m;if(d&&d!==u){let p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(M);T||(g=new c(o,p*d,s.count*d/h),T=new Vs(g,d/h),t.cache.add(M,T)),m=new Hs(T,l,f%d/h,b)}else o===null?g=new c(s.count*l):g=new c(o,f,s.count*l),m=new rt(g,l,b);if(s.sparse!==void 0){let p=yh.SCALAR,M=cr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,v=new M(a[1],T,s.sparse.count*p),A=new c(a[2],y,s.sparse.count*l);o!==null&&(m=new rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,x=v.length;E<x;E++){let w=v[E];if(m.setX(w,A[E*l]),l>=2&&m.setY(w,A[E*l+1]),l>=3&&m.setZ(w,A[E*l+2]),l>=4&&m.setW(w,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fd[f.magFilter]||vt,h.minFilter=Fd[f.minFilter]||Dn,h.wrapS=Nd[f.wrapS]||Ti,h.wrapT=Nd[f.wrapT]||Ti,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Tt&&h.minFilter!==vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let m=new Ot(g);m.needsUpdate=!0,f(m)}),t.load(pi.resolveURL(u,r.path),b,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Zn(u,a),u.userData.mimeType=a.mimeType||Z_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Xs,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new qs,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Wn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){let u=s[Ve.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],tn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ln);let h=r.alphaMode||vh.OPAQUE;if(h===vh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===vh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==nn){let u=r.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&a!==nn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&fs(s,u,r),u})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ud(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Y_(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ud(new Ft,c,t),c.mode===yn.TRIANGLE_STRIP?f=f.then(d=>_h(d,ta)):c.mode===yn.TRIANGLE_FAN&&(f=f.then(d=>_h(d,tr))),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?j_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,b=h.length;d<b;d++){let g=h[d],m=a[d],p,M=c[d];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,y=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");T&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&y?new Ri(g,M):new at(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===yn.LINES)p=new Ir(g,M);else if(m.mode===yn.LINE_STRIP)p=new ns(g,M);else if(m.mode===yn.LINE_LOOP)p=new Lr(g,M);else if(m.mode===yn.POINTS)p=new Dr(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&J_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zn(p,r),m.extensions&&fs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,b=u.length;d<b;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&fs(s,u[0],r),u[0];let f=new wt;r.extensions&&fs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,b=u.length;d<b;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(Kl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new we;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new es(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],b=s.samplers[d.sampler],g=d.target,m=g.node,p=s.parameters!==void 0?s.parameters[b.input]:b.input,M=s.parameters!==void 0?s.parameters[b.output]:b.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(b),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],b=u[2],g=u[3],m=u[4],p=[];for(let T=0,y=f.length;T<y;T++){let v=f[T],A=d[T],E=b[T],x=g[T],w=m[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,A,E,x,w);if(R)for(let C=0;C<R.length;C++)p.push(R[C])}let M=new zr(r,void 0,p);return Zn(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Q_)});for(let d=0,b=u.length;d<b;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,b=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],b.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ci:c.length>1?h=new wt:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Zn(h,r),r.extensions&&fs(n,h,r),r.matrix!==void 0){let u=new we;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),Zn(r,n),n.extensions&&fs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(xc(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Jt||f instanceof Ot)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ki[r.path]===ki.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ki[r.path]){case ki.weights:h=fi;break;case ki.rotation:h=ui;break;case ki.translation:case ki.scale:h=Di;break;default:switch(n.itemSize){case 1:h=fi;break;case 2:case 3:default:h=Di;break}break}let u=s.interpolation!==void 0?X_[s.interpolation]:Yi,f=this._getArrayFromAccessor(n);for(let d=0,b=l.length;d<b;d++){let g=new h(l[d]+"."+ki[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ui?Wh:vc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $_(i,e,t){let n=e.attributes,s=new At;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let h=Xh(cr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,b=f.max;if(d!==void 0&&b!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(b[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(b[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(b[2]))),f.normalized){let g=Xh(cr[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new an;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ud(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=qh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ze.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),Zn(i,e),$_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?K_(i,e.targets,t):i})}var Mc=class extends Qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Li;e.deleteAttribute("uv");let t=new Wn({side:Bt}),n=new Wn,s=new rs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new at(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ts(e,n,6),o=new pt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new at(e,lr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new at(e,lr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new at(e,lr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new at(e,lr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new at(e,lr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new at(e,lr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function lr(i){return new Br({color:0,emissive:16777215,emissiveIntensity:i})}var Bd=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),T=0;T<p.length;++T){var y=p.charCodeAt(T);M[T]=y>96?y-97:y>64?y-39:y+4}for(var v=0,T=0;T<p.length;++T)M[v++]=M[T]<60?n[M[T]]:(M[T]-60)*64+M[++T];return M.buffer.slice(0,v)}function l(p,M,T,y,v,A,E){var x=p.exports.sbrk,w=y+3&-4,R=x(w*v),C=x(A.length),D=new Uint8Array(p.exports.memory.buffer);D.set(A,C);var F=M(R,y,v,C,A.length);if(F==0&&E&&E(R,w,v),T.set(D.subarray(R,R+y*v)),x(R-x(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(T){var y=T.data;M.pending-=y.count,M.requests[y.id][y.action](y.value),delete M.requests[y.id]},M}function b(p){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),T=new Blob([M],{type:"text/javascript"}),y=URL.createObjectURL(T),v=u.length;v<p;++v)u[v]=d(y);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(y)}function g(p,M,T,y,v){for(var A=u[0],E=1;E<u.length;++E)u[E].pending<A.pending&&(A=u[E]);return new Promise(function(x,w){var R=new Uint8Array(T),C=++f;A.pending+=p,A.requests[C]={resolve:x,reject:w},A.object.postMessage({id:C,count:p,size:M,source:R,mode:y,filter:v},[R.buffer])})}function m(p){var M=p.data;self.ready.then(function(T){if(!M.id)return self.close();try{var y=new Uint8Array(M.count*M.size);l(T,T.exports[M.mode],y,M.count,M.size,M.source,T.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:y},[y.buffer])}catch(v){self.postMessage({id:M.id,count:M.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){b(p)},decodeVertexBuffer:function(p,M,T,y,v){l(r,r.exports.meshopt_decodeVertexBuffer,p,M,T,y,r.exports[c[v]])},decodeIndexBuffer:function(p,M,T,y){l(r,r.exports.meshopt_decodeIndexBuffer,p,M,T,y)},decodeIndexSequence:function(p,M,T,y){l(r,r.exports.meshopt_decodeIndexSequence,p,M,T,y)},decodeGltfBuffer:function(p,M,T,y,v,A){l(r,r.exports[h[v]],p,M,T,y,r.exports[c[A]])},decodeGltfBufferAsync:function(p,M,T,y,v){return u.length>0?g(p,M,T,h[y],c[v]):a.then(function(){var A=new Uint8Array(p*M);return l(r,r.exports[h[y]],A,p,M,T,r.exports[c[v]]),A})}}})();var Ct={bodies:{f:{height:.93,kb:172,fist:[-.1556,.3385,5e-4]},m:{height:.96,kb:160,fist:[-.1743,.3553,6e-4]}},parts:{"r-long":{tint:[null,null],kb:{f:117,m:117}},"r-bob":{tint:[null,null],kb:{f:83,m:83}},"r-short":{tint:[null,null],kb:{f:65,m:62}},"r-pony":{tint:[null,null,"#f472b6"],kb:{f:76,m:76}},"r-bun":{tint:[null,null,"#f472b6"],kb:{f:76,m:75}},"r-spiky":{tint:[null,null],kb:{f:54,m:53}},"r-twin":{tint:[null,null,"#60a5fa"],kb:{f:89,m:89}},"r-wave":{tint:[null,null],kb:{f:122,m:122}},"r-swept":{tint:[null,null],kb:{f:80,m:78}},"u-uniform":{tint:["#2f2a28","#b07d4f","#8c5f36","#f6e3c3","#b07d4f"],kb:{f:50,m:49},tucked:!0},"u-tee":{tint:["#7cc4f5","#5aa8de","#ffffff"],kb:{f:32,m:32}},"u-hoodie":{tint:["#f7a9c4","#e88aac","#ffffff"],kb:{f:60,m:62}},"u-sweater":{tint:["#f3e6cf","#e7a39a","#d9c7a7"],kb:{f:46,m:46}},"u-sailor":{tint:["#ffffff","#1e3a8a","#ef4444","#dc2626"],kb:{f:47,m:49}},"u-chef":{tint:["#ffffff","#9ca3af","#e5e7eb","#dc2626"],kb:{f:38,m:38}},"u-dress":{tint:["#fde68a","#f59e0b","#f472b6","#db2777","#fcd34d"],kb:{f:49,m:49},full:!0},"u-hanbok":{tint:["#f9a8d4","#6d5dd3","#ffffff","#dc2626","#ec4899"],kb:{f:44,m:44},full:!0},"u-bomber":{tint:["#1e3a5f","#f1e9d8","#dc2626","#f8fafc","#f5c542","#94a3b8"],kb:{f:73,m:73}},"u-sabai":{tint:["#f59e0b","#7e22ce","#fbbf24","#fde047","#b45309"],kb:{f:49,m:49},full:!0},"u-xmas":{tint:["#b91c1c","#ffffff","#16a34a"],kb:{f:64,m:64}},"u-padding":{tint:["#f3e8d2","#c4a676","#9c8256","#e6d6b4","#b89c6c"],kb:{f:78,m:78},full:!0},"l-skirt":{tint:["#2d3a64","#1f2a4d"],kb:{f:20,m:20}},"l-pleat":{tint:["#9ca3af","#4b5563","#dc2626","#e5e7eb"],kb:{f:29,m:29}},"l-pants":{tint:["#3b3a44","#2a2930"],kb:{f:24,m:24}},"l-jeans":{tint:["#3b6fb6","#2c548f","#6a95d1","#e8b94a"],kb:{f:31,m:31}},"l-shorts":{tint:["#6aa7e0","#4a86bf"],kb:{f:24,m:24}},"l-cargo":{tint:["#7c8b5a","#6b784c","#3f3a2e","#d6d3d1"],kb:{f:30,m:30}},"k-sneaker":{tint:["#ffffff","#eceef2","#f472b6","#f472b6"],kb:{f:50,m:50}},"k-mary":{tint:["#2b2320","#1a1412","#e8b94a","#ffffff"],kb:{f:39,m:39}},"k-boots":{tint:["#8b5a2b","#6b4420","#4a2f17"],kb:{f:50,m:50}},"k-rain":{tint:["#facc15","#eab308","#ca8a04"],kb:{f:50,m:49}},"k-slipper":{tint:["#fbcfe8","#f9d5e5","#f9a8d4","#2b2320","#f472b6"],kb:{f:42,m:42}},"k-high":{tint:["#dc2626","#f8fafc","#f1f5f9","#ffffff"],kb:{f:59,m:59}}},credits:{},v:"969b0ee6",props:["a-balloon","a-boba","a-candy","a-fan","a-flower","a-goguma","a-icecream","a-krathong","a-pinwheel","a-skate","a-sparkler","a-spatula","a-tteok","a-wand","e-2027","e-3d","e-heart","e-round","e-star","e-sticker","e-sun","h-beanie","h-bow","h-bunny","h-cap","h-cat","h-chef","h-flowers","h-halo","h-horns","h-party","h-pumpkin","h-santa","h-straw","h-witch","j-bowtie","j-chain","j-gold","j-heart","j-jasmine","j-lei","j-pearl","j-scarf","w-angel","w-bag","w-batwing","w-bear","w-butterfly","w-cape","w-champ","w-jetpack","x-cherry","x-flower","x-heart","x-holly","x-ribbon","x-star","x-thaipin","y-board","y-pan"],things:{egg:27,rice:47,shroom:41,chili:28,garlic:29,lime:40,shrimp:44,cheese:29,fries:30,drum:42,melon:24,pine:40,golden:34,mochi:25,pudding:42,donut:44,macaron:38,cone:48,cookie:32,bingsu:37,shortcake:40,pancake:48,tart:30,bungeo:36,toast:27,queen:48,"p-chick":32,"p-hamster":41,"p-cat":43,"p-blackcat":49,"p-bunny":46,"p-shiba":46,"p-penguin":40,"p-panda":47,"p-dragon":52,"p-reindeer":56,"d-plant":43,"d-books":17,"d-frame":22,"d-candle":9,"d-lamp":28,"d-jar":40,"d-globe":20,"d-neon":53,"d-trophy":15,"d-family":19,"d-crayon":12,"d-pumpkin":20,"d-krathong":26,"d-xmastree":39,"d-fireworks":22,"d-lanna":29,"d-kimchi":45}};var aa={f:{"z-1":[-32.75,30.25,-78,-20,0,6.5,-2.5,12.75,-54.5,-70,70.25],"z-2":[-32.5,30.25,-74,-20,0,-2.75,1.5,9,-53.5,-68.75,70],"z-3":[-32.25,27.25,-72,-20,0,-5.5,-1.25,9.5,-59,-65,69],"z-4":[-32.25,26.25,-66,-20,0,-19,.75,9.5,-53,-73,69],"z-5":[-32.25,26,-62,-20,0,-28.25,.75,9.5,-51,-77,69]},m:{"z-1":[-32.75,22.5,-81,-20,.25,10.5,-6.25,7,-56.5,-71.5,69],"z-2":[-32.25,18.75,-84,-20,0,12.5,-.5,9,-50,-71.5,69],"z-3":[-32.5,20,-79,-20,0,6,-5,8.75,-48.5,-65.25,71],"z-4":[-30.25,11.5,-81.5,-20,0,9,-6.25,9,-53,-71.25,70.75],"z-5":[-28.25,9.75,-80.25,-20,0,5.75,-6.5,8,-43.5,-77.5,72]}};var wc=Math.PI*2,Gd=i=>i<0?0:i>1?1:i,Pt=i=>(i=Gd(i),i*i*(3-2*i)),ot=(i,e=.14,t=.16)=>Pt(i/e)*Pt((1-i)/t),nt=(i,e,t=0)=>Math.sin(i/1e3*e*wc+t),kd=i=>(i=Gd(i),4*i*(1-i)),hr=(i,e,t)=>i+(e-i)*t,oa={},us={"m-flip":"y-pan","m-skate":"y-board","m-cool":"e-sun","m-fan":"a-fan","m-magic":"a-wand"},Vd={"m-wave":"open","m-wai":"happy","m-hop":"happy open","m-heart":"wink","m-spin":"open","m-tease":"wink tongue","m-cool":"","m-kpop":"open","m-disco":"wink","m-float":"happy","m-hiphop":"","m-party":"happy open","m-idol":"wink","m-flip":"open","m-fan":"open","m-magic":"open","m-skate":"wink","m-flex":"wink","m-butt":"wink tongue","m-faint":"dizzy tongue","m-balloon":"happy puff","m-run":"open","m-leap":"happy open","m-drop":"open","m-ouch":"dizzy tongue"};function ca(i){let e=nt(i,.26);return{Spine2:[1.1*e,0,0],Neck:[-.6*e,1.6*nt(i,.09),0],Head:[0,2.2*nt(i,.11,1),1.2*nt(i,.07,2)],LeftArm:[0,0,1.4+.8*e],RightArm:[0,0,-1.4-.8*e],Hips:[0,0,.8*nt(i,.13)],root:[0,.002*e,0]}}function gt(i,e,t){return{ms:i,still:e,at:t}}var ty=i=>i&&aa[i.g]&&aa[i.g][i.z]||aa.f["z-3"],Mt={"m-wave":gt(1800,520,(i,e)=>{let t=ot(i,.18,.2);return{RightArm:[-45*t,0,-80*t],RightForeArm:[-5*t,0,(-24+12*nt(e,2.6))*t],RightHand:[0,0,8*nt(e,2.6,.6)*t],Head:[0,-6*t,-6*t],Spine2:[0,-6*t,-3*t],LeftArm:[0,0,6*t]}}),"m-wai":gt(1800,820,(i,e,t)=>{let n=ty(t),s=ot(i,.09,.09),r=s,a=Pt((i-.3)/.2)*Pt((.85-i)/.15);return{LeftShoulder:[0,n[0]*s,n[1]*s],RightShoulder:[0,-n[0]*s,-n[1]*s],LeftArm:[n[2]*s,n[3]*r,n[4]*r],RightArm:[n[2]*s,-n[3]*r,-n[4]*r],LeftForeArm:[n[5]*s,n[6]*r,n[7]*r],RightForeArm:[n[5]*s,-n[6]*r,-n[7]*r],LeftHand:[n[8]*r,n[9]*r,n[10]*r],RightHand:[n[8]*r,-n[9]*r,-n[10]*r],Spine:[7*a,0,0],Spine2:[4*a,0,0],Head:[9*a,0,0]}}),"m-hop":gt(1400,350,i=>{let e=ot(i,.12,.16),t=kd(i*2%1)*(i<1?1:0),n=(1-t)*e;return{root:[0,.1*t*e-.02*n,0],LeftArm:[-30*e,0,80*e],RightArm:[-30*e,0,-80*e],LeftForeArm:[-6*e,0,20*e],RightForeArm:[-6*e,0,-20*e],LeftUpLeg:[-20*n,0,0],RightUpLeg:[-20*n,0,0],LeftLeg:[35*n,0,0],RightLeg:[35*n,0,0],Head:[-8*t*e,0,0]}}),"m-heart":gt(1800,760,i=>{let e=ot(i,.22,.2);return{RightArm:[-62*e,0,-18*e],RightForeArm:[-95*e,0,0],RightHand:[0,-30*e,0],Head:[0,-6*e,-9*e],Spine2:[0,-5*e,0]}}),"m-spin":gt(1600,470,i=>{let e=ot(i,.12,.16);return{turn:360*Pt((i-.08)/.8),LeftArm:[0,0,62*e],RightArm:[0,0,-62*e],LeftForeArm:[-10*e,0,0],RightForeArm:[-10*e,0,0],Head:[-6*e,0,0]}}),"m-tease":gt(1800,640,(i,e)=>{let t=ot(i,.18,.18),n=nt(e,3)*t;return{LeftArm:[-25*t,0,45*t],RightArm:[-25*t,0,-45*t],LeftForeArm:[-10*t,0,75*t],RightForeArm:[-10*t,0,-75*t],LeftHand:[0,0,18*n],RightHand:[0,0,-18*n],Head:[0,6*n,0],Spine2:[0,0,4*n]}}),"m-cool":gt(2e3,1100,i=>{let e=ot(i,.2,.18),t=Pt((i-.35)/.15)*Pt((.8-i)/.12);return{RightArm:[-55*e,0,-22*e],RightForeArm:[-125*e,0,0],RightHand:[10*t,0,0],LeftArm:[0,0,18*e],LeftForeArm:[-80*e,0,0],Head:[-9*e,-8*e,0],Hips:[0,0,5*e],Spine:[0,0,-4*e]}}),"m-kpop":gt(2400,300,(i,e)=>{let t=ot(i,.1,.12),n=nt(e,1.8),s=n>0?1:-1,r=Math.abs(nt(e,1.8));return{root:[.03*n*t,-.02*r*t,0],Hips:[0,10*n*t,0],Spine2:[0,-14*n*t,0],LeftArm:[s>0?-80*t:0,0,s>0?10*t:70*t],RightArm:[s<0?-80*t:0,0,s<0?-10*t:-70*t],LeftForeArm:[-40*t,0,0],RightForeArm:[-40*t,0,0],LeftUpLeg:[-14*r*t,0,0],RightUpLeg:[-14*r*t,0,0],LeftLeg:[24*r*t,0,0],RightLeg:[24*r*t,0,0],Head:[0,-10*n*t,0]}}),"m-disco":gt(2400,300,(i,e)=>{let t=ot(i,.1,.12),n=(nt(e,1.25)+1)/2;return{RightArm:[-42*t,0,hr(-96,-30,n)*t],RightForeArm:[-4*t,0,0],LeftArm:[0,0,32*t],LeftForeArm:[-95*t,0,0],LeftHand:[0,0,-20*t],Hips:[0,0,9*nt(e,2.5)*t],Spine2:[0,0,-6*nt(e,2.5)*t],Head:[0,hr(-18,10,n)*t,0]}}),"m-float":gt(2600,1250,(i,e)=>{let t=ot(i,.25,.22);return{root:[0,.19*t+.012*nt(e,.8)*t,0],LeftArm:[0,0,(72+8*nt(e,.8))*t],RightArm:[0,0,-(72+8*nt(e,.8))*t],LeftForeArm:[-12*t,0,0],RightForeArm:[-12*t,0,0],LeftUpLeg:[-10*t,0,0],LeftLeg:[30*t,0,0],RightUpLeg:[4*t,0,0],RightLeg:[12*t,0,0],Head:[-10*t,0,0]}}),"m-hiphop":gt(2400,330,(i,e)=>{let t=ot(i,.1,.12),n=Math.abs(nt(e,1.6));return{root:[0,-.035*t-.012*n*t,0],LeftUpLeg:[-22*t,0,8*t],RightUpLeg:[-22*t,0,-8*t],LeftLeg:[40*t,0,0],RightLeg:[40*t,0,0],Spine:[8*t,0,0],LeftArm:[-80*t,0,-15*t],RightArm:[-80*t,0,15*t],LeftForeArm:[-55*t,0,-35*t],RightForeArm:[-55*t,0,35*t],Head:[14*n*t,0,0],Neck:[0,8*nt(e,.8)*t,0]}}),"m-party":gt(2e3,560,(i,e)=>{let t=ot(i,.12,.14),n=nt(e,2.2);return{LeftArm:[-35*t,0,(75+7*n)*t],RightArm:[-35*t,0,-(75-7*n)*t],LeftForeArm:[-8*t,0,(14+14*n)*t],RightForeArm:[-8*t,0,(-14+14*n)*t],Hips:[0,0,7*n*t],Spine2:[0,0,-5*n*t],Head:[0,0,6*n*t],root:[0,.012*Math.abs(n)*t,0]}}),"m-idol":gt(2e3,900,i=>{let e=ot(i,.2,.18);return{RightArm:[-30*e,0,-128*e*e],RightForeArm:[-125*e,0,0],RightHand:[0,0,-16*e],LeftArm:[0,0,22*e],LeftForeArm:[-30*e,0,0],Head:[0,6*e,-12*e],Hips:[0,0,6*e],LeftUpLeg:[-12*e,0,-8*e],LeftLeg:[24*e,0,0]}}),"m-flip":gt(2200,1320,(i,e)=>{let t=ot(i,.14,.16),n=e/1e3*1.6%1,s=Math.max(0,Math.sin(n*wc))*t,r=n<.62?Math.sin(n/.62*Math.PI)*t:0;return{RightArm:[(-30-4*s)*t,0,-6*t],RightForeArm:[(-62-6*s)*t,0,0],RightHand:[-16*s,0,0],LeftArm:[-16*t,0,18*t],LeftForeArm:[-48*t,0,0],Head:[(12-18*r)*t,-8*t,0],Spine:[3*t,0,0],toss:[.16*r,n<.62?360*n/.62:0]}}),"m-fan":gt(2400,560,(i,e)=>{let t=ot(i,.14,.16),n=nt(e,.8);return{turn:22*n*t,RightArm:[-30*t,0,hr(-48,-82,(n+1)/2)*t],RightForeArm:[-20*t,0,0],RightHand:[0,30*n*t,0],LeftArm:[-20*t,0,hr(60,25,(n+1)/2)*t],LeftForeArm:[-50*t,0,0],LeftHand:[0,0,20*t],Head:[0,6*n*t,-6*n*t],Hips:[0,0,-4*n*t]}}),"m-magic":gt(2400,1100,(i,e)=>{let t=ot(i,.14,.14),n=e/1e3*3.2,s=Pt((i-.6)/.12);return{RightArm:[hr(-30+15*Math.sin(n),-90,s)*t,0,hr(-77+11*Math.cos(n),-10,s)*t],RightForeArm:[-10*t,0,0],LeftArm:[0,0,40*t],LeftForeArm:[-40*t,0,0],Head:[-6*t,-8*t,0],Spine2:[0,-10*s*t,0]}}),"m-skate":gt(2400,1080,i=>{let e=ot(i,.1,.12),t=kd((i-.3)/.45),n=(1-t)*e;return{root:[0,.19*t-.03*n,0],turn:360*Pt((i-.3)/.45),LeftUpLeg:[-30*n-40*t,0,0],RightUpLeg:[-30*n-40*t,0,0],LeftLeg:[50*n+70*t,0,0],RightLeg:[50*n+70*t,0,0],LeftArm:[0,0,(40+40*t)*e],RightArm:[0,0,-(40+40*t)*e],Spine:[10*n,0,0]}}),"m-flex":gt(2e3,700,(i,e)=>{let t=ot(i,.18,.16),n=1+.06*nt(e,2.4);return{LeftArm:[-12*t,0,28*t],RightArm:[-12*t,0,-28*t],LeftForeArm:[-10*t,0,106*t*n],RightForeArm:[-10*t,0,-106*t*n],LeftHand:[0,0,20*t],RightHand:[0,0,-20*t],Spine2:[-6*t,0,0],Head:[-6*t,0,0]}}),"m-butt":gt(2e3,380,(i,e)=>{let t=ot(i,.16,.16),n=nt(e,2.8)*t;return{turn:180*t,Hips:[6*t,0,14*n],Spine:[-8*t,0,-8*n],Neck:[0,40*t,0],Head:[0,20*t,0],LeftArm:[0,0,20*t],RightArm:[0,0,-20*t],LeftUpLeg:[-8*t,0,0],RightUpLeg:[-8*t,0,0],LeftLeg:[16*t,0,0],RightLeg:[16*t,0,0]}}),"m-faint":gt(2800,1250,(i,e)=>{let t=Pt(i/.1)*Pt((.34-i)/.08),n=Pt((i-.28)/.16)*Pt((.92-i)/.1);return{root:[0,-.15*n,-.05*n],tilt:[0,5*t*nt(e,3)],LeftUpLeg:[-80*n,0,-6*n],RightUpLeg:[-80*n,0,6*n],LeftLeg:[140*n,0,0],RightLeg:[140*n,0,0],LeftFoot:[-40*n,0,0],RightFoot:[-40*n,0,0],Spine:[-38*n,0,0],Spine2:[-18*n,0,6*t*nt(e,2.5)],Head:[0,18*t*nt(e,2),8*n],LeftArm:[0,0,30*t+10*n],RightArm:[0,0,-(30*t+10*n)],LeftForeArm:[-10*n,0,0],RightForeArm:[-10*n,0,0]}}),"m-balloon":gt(2800,1300,(i,e)=>{let t=ot(i,.18,.2),n=Pt((i-.05)/.3)*Pt((.92-i)/.1);return{size:[1+.15*n,1+.05*n,1+.15*n],grow:{Spine:[1+.06*n,1,1+.07*n],Spine1:[1+.14*n,1+.03*n,1+.16*n]},root:[.012*nt(e,1.1)*n,.05*n,0],LeftArm:[0,0,40*t],RightArm:[0,0,-40*t],LeftUpLeg:[0,0,14*n],RightUpLeg:[0,0,-14*n],Head:[-10*n,0,6*nt(e,1.4)*n]}}),"m-run":gt(1e3,375,i=>{let e=wc*(i-.125),t=Math.sin(e),n=Math.cos(e),s=(r,a)=>12+50*Math.max(0,-r)+40*Math.max(0,a);return{root:[0,.014*(1-Math.abs(t)),0],Hips:[0,-6*t,0],Spine:[14,0,0],Spine2:[0,8*t,0],Head:[-9,-4*t,0],LeftUpLeg:[-40*t,0,3],RightUpLeg:[40*t,0,-3],LeftLeg:[s(t,n),0,0],RightLeg:[s(-t,-n),0,0],LeftArm:[36*t,0,14],RightArm:[-36*t,0,-14],LeftForeArm:[-78,0,0],RightForeArm:[-78,0,0]}}),"m-leap":gt(1e3,500,()=>({Spine:[10,0,0],Head:[-12,0,0],LeftUpLeg:[-78,0,4],LeftLeg:[96,0,0],RightUpLeg:[20,0,-4],RightLeg:[62,0,0],LeftArm:[-112,0,18],LeftForeArm:[-18,0,0],RightArm:[42,0,-26],RightForeArm:[-34,0,0]})),"m-drop":gt(1e3,500,()=>({Spine:[4,0,0],Head:[8,0,0],LeftUpLeg:[-30,0,6],LeftLeg:[34,0,0],RightUpLeg:[-8,0,-6],RightLeg:[18,0,0],LeftArm:[-16,0,66],RightArm:[-16,0,-66],LeftForeArm:[0,0,18],RightForeArm:[0,0,-18]})),"m-ouch":gt(1e3,500,()=>({Spine:[-9,0,0],Spine2:[-5,0,0],Head:[-4,0,6],LeftArm:[-38,0,58],RightArm:[-38,0,-58],LeftForeArm:[-10,0,24],RightForeArm:[-10,0,-24],LeftUpLeg:[-40,0,6],LeftLeg:[38,0,0],RightUpLeg:[-10,0,-6],RightLeg:[22,0,0]}))};for(let i of["m-faint"])Mt[i].lie=!0;function Kh(i){let e={};for(let t in i){let n=i[t];t==="root"?e[t]=[-n[0],n[1],n[2]]:t==="turn"?e[t]=-n:t==="tilt"?e[t]=[n[0],-n[1]]:t==="size"||t==="grow"||t==="toss"?e[t]=n:e[/^Left/.test(t)?"Right"+t.slice(4):/^Right/.test(t)?"Left"+t.slice(5):t]=[n[0],-n[1],-n[2]]}return e}var ny=i=>Pt(i/.03)*Pt((1-i)/.03),Sc=(i,e)=>({RightArm:[-10*i,0,-(3*ny(e)+5*i)],RightForeArm:[-16*i,0,0],RightHand:[0,0,0]}),zd={"m-cool":(i,e)=>Object.assign(Kh(Mt["m-cool"].at(i,e)),Sc(ot(i,.2,.18),i)),"m-heart":(i,e)=>Object.assign(Kh(Mt["m-heart"].at(i,e)),Sc(ot(i,.22,.2),i)),"m-idol":(i,e)=>{let t=Kh(Mt["m-idol"].at(i,e)),n=ot(i,.2,.18);return Object.assign(t,{LeftArm:[-58*n,0,104*n*n]},Sc(n,i))},"m-hiphop":(i,e)=>Object.assign(Mt["m-hiphop"].at(i,e),Sc(ot(i,.1,.12),i)),"m-tease":(i,e)=>{let t=ot(i,.18,.18),n=nt(e,3)*t;return Object.assign(Mt["m-tease"].at(i,e),{RightArm:[-25*t,0,-30*t],RightForeArm:[-10*t,0,-30*t],RightHand:[0,0,-18*n]})},"m-kpop":(i,e)=>{let t=ot(i,.1,.12),n=nt(e,1.8)>0?1:-1;return Object.assign(Mt["m-kpop"].at(i,e),{RightArm:n<0?[-55*t,0,-8*t]:[0,0,-44*t],RightForeArm:[-30*t,0,0]})},"m-ouch":(i,e)=>Object.assign(Mt["m-ouch"].at(i,e),{RightArm:[-38,0,-40],RightForeArm:[-10,0,-16]}),"m-drop":(i,e)=>Object.assign(Mt["m-drop"].at(i,e),{RightArm:[-16,0,-48],RightForeArm:[0,0,-12]}),"m-run":(i,e)=>{let t=Math.sin(wc*(i-.125));return Object.assign(Mt["m-run"].at(i,e),{RightArm:[-30*t,0,-12],RightForeArm:[-50,0,0]})},"m-faint":(i,e)=>{let t=Pt(i/.1)*Pt((.34-i)/.08),n=Pt((i-.28)/.16)*Pt((.92-i)/.1);return Object.assign(Mt["m-faint"].at(i,e),{RightArm:[-20*n,0,-(30*t+20*n)]})},"m-balloon":(i,e)=>Object.assign(Mt["m-balloon"].at(i,e),{RightArm:[0,0,-28*ot(i,.18,.2)]}),"m-butt":(i,e)=>Object.assign(Mt["m-butt"].at(i,e),{RightArm:[0,0,-12*ot(i,.16,.16)]})};for(let i in zd)Mt[i].held=zd[i];Mt["m-wai"].stow=!0;Mt["m-wai"].fit=aa;var Hd={"":{"a-balloon":{d:[[0,6,0]]},"a-fan":{d:[[0,18,0]]},"a-icecream":{d:[[0,6,0]]},"a-pinwheel":{d:[[0,18,45]]},"a-sparkler":{d:[[0,12,0]]},"a-spatula":{d:[[0,12,0]]},"a-wand":{d:[[0,12,0]]}},"m-wave":{"a-boba":{d:[[0,0,0],[.65,0,0],[.7,12,0],[.7083,6,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,18,0],[.15,35,0],[.2083,35,0],[.25,18,0],[.3,18,0],[.35,6,0],[.4,6,0],[.45,18,0],[.5,18,0],[.5417,6,0],[.55,6,0],[.6,18,0],[.625,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.7917,18,0],[.8,12,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.25,0,0],[.2889,6,0],[.2917,6,0],[.3,0,0],[.45,0,0],[.4583,6,0],[.5,6,0],[.5417,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.03,6,0],[.035,12,0],[.055,12,0],[.06,6,0],[.1,6,0],[.125,12,0],[.15,18,0],[.2083,18,0],[.25,6,0],[.2889,12,0],[.3,12,0],[.35,6,0],[.4,6,0],[.45,12,0],[.5,12,0],[.5417,18,0],[.55,12,0],[.6,6,0],[.625,6,0],[.65,12,0],[.7,6,0],[.7083,6,0],[.75,18,0],[.7917,6,0],[.9,6,0],[.94,12,0],[.965,12,0],[.97,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,18,45],[.3,18,45],[.35,35,0],[.4,35,0],[.45,18,45],[.5,18,45],[.5417,35,0],[.65,35,0],[.7,18,45],[.75,18,45],[.7917,35,0],[.8,35,0],[.85,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.025,18,0],[.03,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,6,0],[.1,0,0],[.125,0,0],[.15,6,0],[.2083,6,0],[.25,0,0],[.5,0,0],[.5417,6,0],[.55,6,0],[.6,0,0],[.625,6,0],[.65,0,0],[.7083,0,0],[.75,6,0],[.7917,0,0],[.9,0,0],[.94,6,0],[.945,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.3,12,0],[.35,35,0],[.4,35,0],[.45,12,0],[1,12,0]]}},"m-hop":{"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.125,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,18,0],[.125,6,0],[.15,0,0],[.8,0,0],[.85,6,0],[.875,18,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.06,6,0],[.1,18,0],[.125,12,0],[.15,6,0],[.85,6,0],[.875,12,0],[.9,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,18,45],[.06,18,45],[.1,35,0],[.15,35,0],[.2,35,-45],[.8,35,-45],[.85,35,0],[.9,35,0],[.94,18,45],[1,18,45]]},"a-skate":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,12,0],[.1,35,-45],[.8,35,-45],[.85,6,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.125,35,0],[.15,35,0],[.2,35,-45],[.4,35,-45],[.45,6,0],[.4586,12,0],[.5414,12,0],[.55,6,0],[.6,35,-45],[.8,35,-45],[.85,35,0],[.875,18,0],[.9,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.4586,0,0],[.5,12,0],[.5414,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-heart":{"a-balloon":{d:[[0,6,0],[.15,6,0],[.2,12,0],[.8,12,0],[.85,6,0],[1,6,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.055,6,0],[.06,12,0],[.125,12,0],[.15,6,0],[.875,6,0],[.9,12,0],[.945,12,0],[.95,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-spin":{"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,35,0],[.875,35,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]}},"m-tease":{"a-boba":{d:[[0,0,0],[.2,0,0],[.2083,6,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.6,0,0],[.625,6,0],[.65,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.25,35,0],[.2917,18,0],[.3556,18,0],[.375,35,0],[.4583,35,0],[.5,18,0],[.55,18,0],[.6,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,12,0],[.15,12,0],[.2,18,0],[.25,18,0],[.2917,6,0],[.3556,6,0],[.375,12,0],[.4,18,0],[.45,12,0],[.55,12,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7917,12,0],[.8,18,0],[.85,12,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.2083,0,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.75,6,0],[.7917,12,0],[.8,12,0],[.85,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[.2083,0,0],[.25,6,0],[.2917,35,45],[.55,35,45],[.6,6,0],[.625,0,0],[.8,0,0],[.85,12,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-cool":{"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-kpop":{"a-boba":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,6,0],[.125,0,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.015,18,0],[.02,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,18,0],[.125,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,0,0],[.4583,0,0],[.5,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.8,6,0],[.85,12,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.015,6,0],[.02,12,0],[.125,12,0],[.15,18,0],[.25,18,0],[.2917,35,0],[.4583,35,0],[.5,18,0],[.55,18,0],[.6,35,0],[.625,18,0],[.65,18,0],[.7,12,0],[.7083,18,0],[.75,35,0],[.7917,18,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.45,0,0],[.4583,6,0],[.5,35,45],[.8,35,45],[.85,12,0],[.875,12,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.025,0,0],[.03,6,0],[.1,6,0],[.125,12,0],[.15,6,0],[.2,6,0],[.2083,12,0],[.25,0,0],[.2917,6,0],[.3,6,0],[.35,12,0],[.375,6,0],[.4,6,0],[.45,12,0],[.4583,12,0],[.5,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,0,0],[.75,6,0],[.7917,0,0],[.8,0,0],[.85,6,0],[.965,6,0],[.97,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-disco":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,18,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,18,0],[.35,0,0],[.625,0,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.02,18,0],[.025,35,0],[.1,35,0],[.125,18,0],[.15,18,0],[.2,35,0],[.4,35,0],[.45,18,0],[.5,18,0],[.5417,35,0],[.75,35,0],[.7917,18,0],[.8,18,0],[.85,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,35,0],[.25,35,0],[.2917,18,0],[.3,18,0],[.35,12,0],[.375,12,0],[.4,0,0],[.45,0,0],[.4583,6,0],[.5,12,0],[.5417,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7083,12,0],[.75,0,0],[.7917,6,0],[.8,6,0],[.85,18,0],[.875,35,0],[.9,35,0],[.94,18,0],[.945,12,0],[.95,6,0],[.955,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.15,0,0],[.2,12,0],[.2083,6,0],[.25,0,0],[.2917,0,0],[.3,6,0],[.35,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.015,6,0],[.02,12,0],[.045,12,0],[.05,6,0],[.15,6,0],[.2,12,0],[.2083,18,0],[.25,35,0],[.2917,12,0],[.3,6,0],[.4583,6,0],[.5,12,0],[.5417,35,0],[.6,35,0],[.625,18,0],[.65,6,0],[.85,6,0],[.875,18,0],[.9,18,0],[.94,6,0],[.965,6,0],[.97,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2083,0,0],[.25,18,0],[.2917,0,0],[.3,0,0],[.35,6,0],[.375,0,0],[.55,0,0],[.6,6,0],[.625,0,0],[1,0,0]],hide:[[1329,1407]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.03,0,0],[.035,6,0],[.05,6,0],[.055,0,0],[.15,0,0],[.2,6,0],[.2083,6,0],[.25,12,0],[.2917,0,0],[.5,0,0],[.5417,6,0],[.6,6,0],[.625,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[.96,0,0],[.965,6,0],[.97,6,0],[.975,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-float":{"a-boba":{d:[[0,0,0],[.5,0,0],[.5415,12,0],[.65,12,0],[.7,0,0],[1,0,0]]},"a-candy":{d:[[0,0,0],[.01,0,0],[.015,12,90],[.06,12,90],[.1,0,0],[.4808,0,0],[.5,6,0],[.5415,35,-45],[.65,35,-45],[.7,0,0],[.9,0,0],[.94,12,90],[.975,12,90],[.98,0,0],[1,0,0]],hide:[[98,124]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.5,6,0],[.5415,12,0],[.65,12,0],[.7,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,0],[.2,35,45],[.4808,35,45],[.5,18,0],[.5415,0,0],[.65,0,0],[.7,6,0],[.7085,12,0],[.75,35,0],[.8,35,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.06,18,0],[.1,12,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.06,18,0],[.1,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]}},"m-hiphop":{"a-fan":{d:[[0,18,0],[.03,18,0],[.035,35,0],[.3,35,0],[.35,35,45],[.4583,35,45],[.5,35,0],[.8,35,0],[.85,35,45],[.9,35,45],[.94,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.25,0,0],[.2917,6,0],[.3,12,0],[.35,6,0],[.375,0,0],[.4,0,0],[.45,18,0],[.4583,18,0],[.5,0,0],[.8,0,0],[.85,18,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.025,6,0],[.03,12,0],[.1,12,0],[.125,6,0],[.15,6,0],[.2,12,0],[.2917,12,0],[.3,18,0],[.4,18,0],[.45,12,0],[.4583,18,0],[.5,12,0],[.625,12,0],[.65,6,0],[.7,12,0],[.7083,12,0],[.75,6,0],[.7917,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.3,12,0],[.35,18,0],[.4583,18,0],[.5,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.035,0,0],[.04,6,0],[.1,6,0],[.125,0,0],[.15,0,0],[.2,6,0],[.25,6,0],[.2917,12,0],[.4583,12,0],[.5,6,0],[.6,6,0],[.625,0,0],[.65,0,0],[.7,6,0],[.8,6,0],[.85,12,0],[.945,12,0],[.95,6,0],[.96,6,0],[.965,0,0],[1,0,0]]}},"m-party":{"a-balloon":{d:[[0,6,0],[.125,6,0],[.15,12,0],[.2,6,0],[.35,6,0],[.375,12,0],[.4,6,0],[.55,6,0],[.6,12,0],[.65,12,0],[.7,6,0],[1,6,0]]},"a-boba":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.28,18,0],[.3,18,0],[.35,0,0],[.4585,0,0],[.5,18,0],[.5415,18,0],[.55,12,0],[.6,0,0],[.65,0,0],[.7,12,0],[.7085,18,0],[.75,18,0],[.7915,0,0],[1,0,0]]},"a-candy":{d:[[0,0,0],[.4,0,0],[.45,35,-90],[.55,35,-90],[.6,0,0],[.65,0,0],[.7,35,-90],[.8,35,-90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.35,35,0],[.375,18,0],[.4,18,0],[.45,35,0],[.55,35,0],[.6,18,0],[.65,18,0],[.7,35,0],[.875,35,0],[.9,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,18,0],[.125,18,0],[.15,6,0],[.2,0,0],[.2085,0,0],[.25,18,0],[.35,18,0],[.375,12,0],[.4,6,0],[.45,18,0],[.55,18,0],[.6,0,0],[.65,0,0],[.7,18,0],[.8,18,0],[.85,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.2085,0,0],[.25,12,0],[.28,0,0],[.5,0,0],[.5415,12,0],[.55,6,0],[.6,0,0],[.65,0,0],[.7,6,0],[.7085,12,0],[.75,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.02,6,0],[.025,12,0],[.1,12,0],[.125,18,0],[.15,6,0],[.2085,6,0],[.25,18,0],[.35,18,0],[.375,12,0],[.4,6,0],[.45,18,0],[.4585,18,0],[.5,12,0],[.5415,12,0],[.55,18,0],[.6,6,0],[.65,6,0],[.7,18,0],[.7085,12,0],[.75,12,0],[.7915,18,0],[.8,18,0],[.85,6,0],[.945,6,0],[.95,12,0],[.975,12,0],[.98,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.025,0,0],[.03,6,0],[.045,6,0],[.05,0,0],[.15,0,0],[.2,6,0],[.2085,6,0],[.25,0,0],[.28,6,0],[.3,6,0],[.35,0,0],[.4585,0,0],[.5,6,0],[.5415,0,0],[.55,0,0],[.6,6,0],[.65,6,0],[.7,0,0],[.7085,0,0],[.75,6,0],[.7915,0,0],[.94,0,0],[.945,6,0],[.96,6,0],[.965,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-idol":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,35,0],[.85,35,0],[.875,18,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.025,6,0],[.03,12,0],[.15,12,0],[.2,18,0],[.8,18,0],[.85,12,0],[.975,12,0],[.98,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.95,6,0],[.955,0,0],[1,0,0]]}},"m-fan":{"a-fan":{d:[[0,18,0],[.15,18,0],[.2,35,0],[.5,35,0],[.5417,18,0],[.55,18,0],[.6,35,0],[.7083,35,0],[.75,18,0],[1,18,0]]}},"m-skate":{"a-boba":{d:[[0,0,0],[.4,0,0],[.45,12,0],[.4583,12,0],[.5,0,0],[.55,0,0],[.6,12,0],[.625,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.05,18,0],[.055,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.3,0,0],[.35,12,0],[.4,12,0],[.45,18,0],[.625,18,0],[.65,12,0],[.7083,12,0],[.75,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.4583,6,0],[.5,12,0],[.55,12,0],[.6,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.7,0,0],[.7083,6,0],[.75,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-flex":{"a-balloon":{d:[[0,6,0],[.3,6,0],[.35,18,0],[.375,18,0],[.4,6,0],[.4585,6,0],[.5,12,0],[.5415,35,0],[.625,35,0],[.65,18,0],[.7085,18,0],[.75,35,0],[.7915,18,0],[.8,18,0],[.85,6,0],[.875,12,0],[.9,6,0],[1,6,0]]},"a-boba":{d:[[0,0,0],[.15,0,0],[.2,35,0],[.9,35,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.15,12,0],[.2,35,0],[.3,35,0],[.35,18,0],[.4,18,0],[.45,35,0],[.5,35,0],[.5415,18,0],[.6,18,0],[.625,35,0],[.7085,35,0],[.75,18,0],[.8,18,0],[.85,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]],hide:[[455,505]]},"a-icecream":{d:[[0,6,0],[.1,6,0],[.125,18,0],[.15,12,0],[.2085,12,0],[.25,18,0],[.2915,18,0],[.3,12,0],[.35,6,0],[.4,6,0],[.45,18,0],[.5,18,0],[.5415,6,0],[.6,6,0],[.625,12,0],[.65,18,0],[.7085,18,0],[.75,6,0],[.8,6,0],[.85,12,0],[.9,12,0],[.94,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,35,45],[.15,35,45],[.2,70,45],[.75,70,45],[.7915,35,45],[.875,35,45],[.9,18,0],[.94,0,0],[1,0,0]],hide:[[1650,1725]]},"a-pinwheel":{d:[[0,18,45],[.15,18,45],[.2,35,45],[.2085,35,45],[.25,18,45],[.3,18,45],[.35,35,45],[.4,35,45],[.45,18,45],[.5,18,45],[.5415,35,45],[.625,35,45],[.65,18,45],[.7085,18,45],[.75,35,45],[.8,35,45],[.85,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.3,12,0],[.35,35,0],[.4,35,0],[.45,18,0],[.5,18,0],[.5415,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7,12,0],[.7085,18,0],[.75,35,0],[.8,35,0],[.85,18,0],[.875,18,0],[.9,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.125,12,0],[.15,18,0],[.2,12,0],[.3,12,0],[.35,35,45],[.4,35,45],[.45,12,0],[.5,12,0],[.5415,35,45],[.6,35,45],[.625,18,0],[.65,12,0],[.7085,12,0],[.75,35,45],[.8,35,45],[.85,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.125,12,0],[.15,18,0],[.2,12,0],[.2085,12,0],[.25,18,0],[.2915,12,0],[.3,12,0],[.35,35,45],[.4,35,45],[.45,18,0],[.5,18,0],[.5415,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7,18,0],[.7085,18,0],[.75,35,45],[.8,35,45],[.85,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-butt":{"a-candy":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,12,0],[.1,0,0],[.9,0,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,6,0],[.9,6,0],[.94,18,0],[.945,12,0],[.95,6,0],[1,6,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]}},"m-faint":{"a-boba":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.1,18,0],[.125,35,0],[.2082,35,0],[.25,18,0],[.2918,35,0],[.3,35,0],[.35,18,0],[.875,18,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,18,0],[.15,35,0],[.2082,35,0],[.25,6,0],[.2918,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.1,6,0],[.125,12,0],[.15,12,0],[.2,18,0],[.2082,12,0],[.25,6,0],[.2918,12,0],[.3,12,0],[.35,6,0],[.875,6,0],[.9,12,0],[.94,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,12,90],[.1,0,0],[.4,0,0],[.4464,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.4,12,0],[.4464,6,0],[.8,6,0],[.85,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2082,6,0],[.25,0,0],[.2918,6,0],[.3,6,0],[.35,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]}},"m-balloon":{"a-flower":{d:[[0,0,0],[.2918,0,0],[.3,6,0],[.35,0,0],[.5418,0,0],[.55,6,0],[.6,6,0],[.625,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.2082,0,0],[.25,6,0],[.2918,0,0],[.35,0,0],[.375,6,0],[.4,0,0],[.4643,0,0],[.5,6,0],[.5418,35,45],[.6,35,45],[.625,12,0],[.65,0,0],[.8,0,0],[.85,12,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.025,18,0],[.03,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]}},"m-run":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,90],[.208,12,90],[.25,6,0],[.292,0,0],[.458,0,0],[.5,6,0],[.542,12,90],[.55,12,90],[.6,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.15,35,0],[.2,35,45],[.65,35,45],[.7,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,0,0],[.15,12,90],[.2,35,90],[.55,35,90],[.6,12,90],[.625,0,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.25,0,0],[.292,12,90],[.458,12,90],[.5,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.005,12,0],[.125,12,0],[.15,18,0],[.2,35,0],[.55,35,0],[.6,18,0],[.625,12,0],[.995,12,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.208,0,0],[.25,6,0],[.5,6,0],[.542,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,18,45],[.708,18,45],[.75,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.1,12,0],[.125,18,0],[.208,18,0],[.25,12,0],[.3,12,0],[.35,18,0],[.4,18,0],[.45,12,0],[.5,12,0],[.542,18,0],[.625,18,0],[.65,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.15,12,0],[.2,18,0],[.55,18,0],[.6,12,0],[.65,12,0],[.7,6,0],[.995,6,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.292,12,0],[.3,18,0],[.35,12,0],[.4,12,0],[.45,18,0],[.458,12,0],[.75,12,0],[.792,18,0],[.985,18,0],[.99,12,0],[1,12,0]]}},"m-leap":{"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.05,6,0],[.055,12,0],[.06,12,0],[.1,12,90],[.9,12,90],[.94,12,0],[.945,12,0],[.95,6,0],[.995,6,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.005,12,0],[.055,12,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[.945,12,0],[.995,12,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,90],[.2,35,90],[.8,35,90],[.85,12,90],[.875,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.9,12,0],[.94,6,0],[.995,6,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.045,12,0],[.05,18,0],[.95,18,0],[.955,12,0],[1,12,0]]}},"m-drop":{"a-boba":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.015,18,0],[.985,18,0],[.99,12,0],[.995,6,0],[1,0,0]]}},"m-ouch":{"a-boba":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.99,12,0],[.995,6,0],[1,0,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]}}};var Jh={f:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-star":[0,0,.002],"e-sticker":[0,-.00141,.00141],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00404,.00404,.00404],"h-beanie|x-star":[.00808,.00808,.00808],"h-beanie|x-thaipin":[.00635,.00635,.00635],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00884,.00884,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00813,.00813,0],"h-santa|x-holly":[.0026,.0026,.0026],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01617,.01617,.01617],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00664,.00664,.00664],"h-witch|x-holly":[.0026,.0026,.0026],"h-witch|x-star":[.00722,.00722,.00722],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.15085,-3e-4],r:{"r-bob|h-bunny":[.935,.98,.935,.00261,-.00957],"r-bun|h-bunny":[.835,.895,.835,.00522,.0213,0],"r-long|h-bunny":[1,.95,1,-.00261,-.00587,-.0349],"r-pony|h-bunny":[.85,.89,.85,.00261,.01196,-.0349],"r-short|h-bunny":[.87,.985,.87,87e-5,-.01543,-.0349],"r-spiky|h-bunny":[.82,1.035,.82,.00609,-.01283,0],"r-swept|h-bunny":[.92,.925,.92,87e-5,-.01283,0],"r-twin|h-bunny":[.895,.875,.895,.00435,.01957,.0349],"r-wave|h-bunny":[.995,.95,.995,0,.00413,0],"r-bob|h-cat":[.95,.95,.95,-.00174,-87e-5,-.0698],"r-bun|h-cat":[.85,.965,.85,-.00696,.04043,0],"r-long|h-cat":[1,.92,1,.00435,-.00435],"r-pony|h-cat":[.85,.895,.85,87e-5,.01783,-.0349],"r-short|h-cat":[.85,.96,.85,.00522,-.00522,-.1396],"r-spiky|h-cat":[.835,1.055,.835,-.00348,-.01283,0],"r-swept|h-cat":[.935,.925,.935,87e-5,-.00609,-.1396],"r-twin|h-cat":[1.105,.86,1.105,.00609,.02043,0],"r-wave|h-cat":[.995,.95,.995,0,-.00261],"r-bob|h-flowers":[.995,.875,.995,87e-5,87e-5],"r-bun|h-flowers":[.845,1.085,.845,-.00348,.00174,-.0698],"r-long|h-flowers":[.94,1.105,.94,0,-.00174],"r-pony|h-flowers":[.855,1.075,.855,-87e-5,.03957,0],"r-short|h-flowers":[.895,1.09,.895,.00522,.00522],"r-spiky|h-flowers":[.955,.85,.955,0,-87e-5,-.0349],"r-swept|h-flowers":[.985,.82,.985,.00348,0,-.1047],"r-twin|h-flowers":[.915,1.075,.915,0,.00826,0],"r-wave|h-flowers":[.94,1.085,.94,.00174,-.00174],"r-bob|x-cherry":[-.00387,-.0031,-.00162],"r-bun|x-cherry":[-.00355,-.00284,-.00148],"r-long|x-cherry":[-.00355,-.00284,-.00148],"r-pony|x-cherry":[-.00355,-.00284,-.00148],"r-short|x-cherry":[-.00355,-.00284,-.00148],"r-spiky|x-cherry":[-.00549,-.00439,-.00229],"r-swept|x-cherry":[-.00743,-.00593,-.0031],"r-twin|x-cherry":[-.00355,-.00284,-.00148],"r-wave|x-cherry":[-.00129,-.00103,-54e-5],"r-bob|x-flower":[93e-5,-82e-5,-4e-4],"r-bun|x-flower":[62e-5,-55e-5,-27e-5],"r-long|x-flower":[62e-5,-55e-5,-27e-5],"r-pony|x-flower":[62e-5,-55e-5,-27e-5],"r-short|x-flower":[62e-5,-55e-5,-27e-5],"r-spiky|x-flower":[.0031,-.00274,-.00134],"r-swept|x-flower":[.00465,-.00411,-.002],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00278,-.00249,-.00119],"r-bun|x-heart":[-.00247,-.00221,-.00106],"r-long|x-heart":[-.00247,-.00221,-.00106],"r-pony|x-heart":[-.00247,-.00221,-.00106],"r-short|x-heart":[-.00247,-.00221,-.00106],"r-spiky|x-heart":[-.0037,-.00331,-.00159],"r-swept|x-heart":[-.0071,-.00635,-.00305],"r-twin|x-heart":[-.00247,-.00221,-.00106],"r-wave|x-heart":[-.00154,-.00138,-66e-5],"r-bob|x-holly":[-.00775,-.00687,-.00329],"r-bun|x-holly":[-.00806,-.00715,-.00342],"r-long|x-holly":[-.00806,-.00715,-.00342],"r-pony|x-holly":[-.00806,-.00715,-.00342],"r-short|x-holly":[-.00806,-.00715,-.00342],"r-spiky|x-holly":[-.00899,-.00797,-.00382],"r-swept|x-holly":[-.01209,-.01072,-.00513],"r-twin|x-holly":[-.00775,-.00687,-.00329],"r-wave|x-holly":[-.00682,-.00605,-.0029],"r-bob|x-ribbon":[.965,.96,.965,-.00348,-.00435,-.0349],"r-bun|x-ribbon":[.88,.895,.88,.00435,.02565,0],"r-long|x-ribbon":[1.005,.95,1.005,0,-.005,-.0349],"r-pony|x-ribbon":[.88,.89,.88,.00435,.01783,.0349],"r-short|x-ribbon":[.895,.95,.895,.00609,-.00435,-.0698],"r-spiky|x-ribbon":[.845,1.06,.845,-.00435,.00565,.0698],"r-swept|x-ribbon":[.945,.92,.945,.00348,-.005,-.0349],"r-twin|x-ribbon":[.915,.925,.915,-.00348,.01543,.0349],"r-wave|x-ribbon":[.99,.95,.99,87e-5,-.00696],"r-bob|x-star":[-.0028,-.00246,-.00119],"r-bun|x-star":[-.00249,-.00219,-.00106],"r-long|x-star":[-.00249,-.00219,-.00106],"r-pony|x-star":[-.00249,-.00219,-.00106],"r-short|x-star":[-.00249,-.00219,-.00106],"r-spiky|x-star":[-.00373,-.00328,-.00159],"r-swept|x-star":[-.00716,-.00629,-.00304],"r-twin|x-star":[-.00249,-.00219,-.00106],"r-wave|x-star":[-.00156,-.00137,-66e-5],"r-bob|x-thaipin":[-.00555,-.00479,-.00274],"r-bun|x-thaipin":[-.00555,-.00479,-.00274],"r-long|x-thaipin":[-.00555,-.00479,-.00274],"r-pony|x-thaipin":[-.00555,-.00479,-.00274],"r-short|x-thaipin":[-.00555,-.00479,-.00274],"r-spiky|x-thaipin":[-.00709,-.00613,-.0035],"r-swept|x-thaipin":[-.01078,-.00932,-.00532],"r-twin|x-thaipin":[-.00524,-.00453,-.00259],"r-wave|x-thaipin":[-.00493,-.00426,-.00243]}},m:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00495,.00495,0],"h-beanie|x-star":[.00955,.00955,0],"h-beanie|x-thaipin":[.00606,.00606,.00606],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00849,.00849,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00693,.00693,.00693],"h-santa|x-holly":[.00318,.00318,0],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01588,.01588,.01588],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00693,.00693,.00693],"h-witch|x-holly":[.00354,.00354,0],"h-witch|x-star":[.00884,.00884,0],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.14879,-29e-5],r:{"r-bob|h-bunny":[.95,.98,.95,.00261,.0087,.0349],"r-bun|h-bunny":[.88,.865,.88,87e-5,.00739,.0698],"r-long|h-bunny":[.985,.965,.985,-.00522,-.00413,-.0349],"r-pony|h-bunny":[.855,.89,.855,.00348,.00739,.0349],"r-short|h-bunny":[.885,.97,.885,0,-.00522,-.0698],"r-spiky|h-bunny":[.835,1.065,.835,87e-5,-.01261,0],"r-swept|h-bunny":[.945,.92,.945,87e-5,.0137,0],"r-twin|h-bunny":[.91,.87,.91,87e-5,.0187,.0698],"r-wave|h-bunny":[1,.975,1,.00261,-.005,0],"r-bob|h-cat":[.95,.975,.95,.00261,-.00261,-.0349],"r-bun|h-cat":[.845,.94,.845,-87e-5,.0213,0],"r-long|h-cat":[1.005,.92,1.005,.00435,-.01,0],"r-pony|h-cat":[.85,.885,.85,.00261,.01043],"r-short|h-cat":[.855,.99,.855,87e-5,-.00609,-.0698],"r-spiky|h-cat":[.83,1.04,.83,-87e-5,-.0037,-.0349],"r-swept|h-cat":[.94,.925,.94,-87e-5,-.005,-.1571],"r-twin|h-cat":[1.045,.885,1.045,-87e-5,.02043,0],"r-wave|h-cat":[1.01,.95,1.01,0,.00174],"r-bob|h-flowers":[1.005,.845,1.005,.00261,0],"r-bun|h-flowers":[.855,1.03,.855,0,.00674,-.0349],"r-long|h-flowers":[.94,1.07,.94,87e-5,0],"r-pony|h-flowers":[.85,1.03,.85,0,.03348,0],"r-short|h-flowers":[.94,.89,.94,0,87e-5,-.1396],"r-spiky|h-flowers":[.895,1.07,.895,.00174,.02043,0],"r-swept|h-flowers":[.915,1.06,.915,.00696,-.00326,.0349],"r-twin|h-flowers":[.91,1.04,.91,0,0,.0698],"r-wave|h-flowers":[.95,1.085,.95,.00696,0],"r-bob|x-cherry":[-.00321,-.0026,-.00134],"r-bun|x-cherry":[-.00354,-.00286,-.00148],"r-long|x-cherry":[-.00354,-.00286,-.00148],"r-pony|x-cherry":[-.00354,-.00286,-.00148],"r-short|x-cherry":[-.00482,-.0039,-.00201],"r-spiky|x-cherry":[-.00482,-.0039,-.00201],"r-swept|x-cherry":[-.00739,-.00599,-.00309],"r-twin|x-cherry":[-.00321,-.0026,-.00134],"r-wave|x-cherry":[-.00129,-.00104,-54e-5],"r-bob|x-flower":[93e-5,-83e-5,-4e-4],"r-bun|x-flower":[31e-5,-28e-5,-13e-5],"r-long|x-flower":[31e-5,-28e-5,-13e-5],"r-pony|x-flower":[31e-5,-28e-5,-13e-5],"r-short|x-flower":[.00401,-.00359,-.00173],"r-spiky|x-flower":[.00401,-.00359,-.00173],"r-swept|x-flower":[.00463,-.00414,-.00199],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00276,-.0025,-.00118],"r-bun|x-heart":[-.00246,-.00223,-.00105],"r-long|x-heart":[-.00246,-.00223,-.00105],"r-pony|x-heart":[-.00246,-.00223,-.00105],"r-short|x-heart":[-.00399,-.00362,-.00171],"r-spiky|x-heart":[-.00399,-.00362,-.00171],"r-swept|x-heart":[-.00706,-.0064,-.00303],"r-twin|x-heart":[-.00246,-.00223,-.00105],"r-wave|x-heart":[-.00154,-.00139,-66e-5],"r-bob|x-holly":[-.00771,-.00692,-.00327],"r-bun|x-holly":[-.00802,-.0072,-.00341],"r-long|x-holly":[-.00802,-.0072,-.00341],"r-pony|x-holly":[-.00802,-.0072,-.00341],"r-short|x-holly":[-.00926,-.00831,-.00393],"r-spiky|x-holly":[-.00926,-.00831,-.00393],"r-swept|x-holly":[-.01203,-.0108,-.00511],"r-twin|x-holly":[-.00771,-.00692,-.00327],"r-wave|x-holly":[-.00648,-.00582,-.00275],"r-bob|x-ribbon":[.97,.95,.97,-.00261,-.00261,-.0349],"r-bun|x-ribbon":[.855,.91,.855,.00261,.02391,0],"r-long|x-ribbon":[1.01,.925,1.01,.00522,.00674,.0349],"r-pony|x-ribbon":[.885,.9,.885,.00261,.01783,.0349],"r-short|x-ribbon":[.89,.95,.89,.00435,-.01435,-.0349],"r-spiky|x-ribbon":[.82,1.07,.82,-.00261,-22e-5,.0698],"r-swept|x-ribbon":[.94,.92,.94,.00522,0,-.0524],"r-twin|x-ribbon":[.935,.87,.935,0,.01696,0],"r-wave|x-ribbon":[.995,.95,.995,-87e-5,-.00696],"r-bob|x-star":[-.00279,-.00248,-.00118],"r-bun|x-star":[-.00248,-.0022,-.00105],"r-long|x-star":[-.00248,-.0022,-.00105],"r-pony|x-star":[-.00248,-.0022,-.00105],"r-short|x-star":[-.00433,-.00386,-.00184],"r-spiky|x-star":[-.00433,-.00386,-.00184],"r-swept|x-star":[-.00681,-.00606,-.00289],"r-twin|x-star":[-.00248,-.0022,-.00105],"r-wave|x-star":[-.00155,-.00138,-66e-5],"r-bob|x-thaipin":[-.00552,-.00483,-.00272],"r-bun|x-thaipin":[-.00552,-.00483,-.00272],"r-long|x-thaipin":[-.00552,-.00483,-.00272],"r-pony|x-thaipin":[-.00552,-.00483,-.00272],"r-short|x-thaipin":[-.00705,-.00618,-.00348],"r-spiky|x-thaipin":[-.00705,-.00618,-.00348],"r-swept|x-thaipin":[-.01073,-.0094,-.0053],"r-twin|x-thaipin":[-.00552,-.00483,-.00272],"r-wave|x-thaipin":[-.00491,-.0043,-.00242]}}};var Yh={f:{c:[-6e-6,.150847,-302e-6],t:{"r-bun|x-cherry":"CnEf3of36f36f4NDLGf6qf3of4NfzmfsXfraDuHfhrf1Nf9sf9fftTfrafqtESHfhrfhrf9zf9Rfrrfp_fqtE2Hfhrfvvf0Qf3lfw-fq1fp_"},b:{"r-bob|h-bunny":"BEBEFodvdwdyd0d8edfGfffygEgRgcgigmgmgkgggZgQgEf1fjfPe2ead-djdPdJdPdjd9eZe0fNfjf1gEgRgaghgmgogngjgcgRgDfzfdfBedd-d3d0dzdy","r-bob|h-cat":"BEBEFodGdHdJdMdRdbdpeHe2fdf6gQgigyg-hHhNhQhRhPhMhGhAg6gygigFfUe_fWgHgjgug0g8hEhKhPhRhQhNhIg_g0glgTf-fie8eIdpdedYdVdTdRdR","r-bob|h-flowers":"AAAAFogXgXgXgYgYgYgYgYgYgZgZgZgZgZgYgYgYgYgXgWgWgVgVgUgTgTgSgQgOgMgIgDf9f0ftfofjfffbfYfWfWfXfZfbfcfcfbfafafafbfcfefgfjfmfwf7gCgIgMgPgRgSgTgTgTgTgSgSgSgSgTgUgUgVgWgWgXgXgXgXgXgXgXgXgXgXgX","r-bob|x-ribbon":"BEBEFocucucwczc3dBdXeIe3fXfxgJgdgtg6hEhKhPhQhPhLhFg9g1gsgQfmfNfJfLfZfwgHgcgvg9hIhOhRhQhMhGg8gvgegLf0fae4eGdXdHdDdAc-c8c8","r-bun|h-bunny":"BEBEFofSfTfTfTfUfVfWfYfggGgmg2hEhVhohthjhJgsghgdgegrhGhqhshhhsh3hqhOhGg0gKf6f-gFgMgSgYgeglg0g7g2gvglgJfgfXfWfVfVfVfVfVfV","r-bun|h-cat":"BEB0D0iTiTiTiTiTiTiTiUiViXiZich0ibizi2iyipidiOh8hohSg6gjgLfzfkfgfgfiflfofrftfvfxgHg5hsiVimikiOhqiTiQiOiMiLiKiKiKiKiKiKiK","r-bun|h-flowers":"AAAAFodWdXdZdjeSfCfRfZfhfmfqftfvfwfxfxfxfyfyfzf1f2f5gAgmhoiTiliwi5jAjEjHjJjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjKjJjIjGjCi9i1isiciDhRgVf9f4fzfwfsfqfofmflfkfkfjfifhfefafVfOfBeSdkdadX","r-bun|x-ribbon":"BEBEFodsdtdtdudwdyd1d4eCerfSflf3gQgvhLhdhhhjhphvhrhhhUhIg8gxgpgjgcgWgQgKgFgDgDgDgDgEgFgJgcgpgjgPfzfUepd_d0dvdrdodldidhdg","r-long|h-bunny":"BEBEFofcfdfffiflfrfyf4f9gCgGgKgNgQgTgXgegkgogqgqgmgfgSgAfsfZfLfIfLfWfpf9gQgfgngrgrgqgmghgbgWgSgPgLgHgDf-f5f0fvfrfoflfkfj","r-long|h-cat":"BEBEFofmfmfnfpfsfvfyf1f4f7f9f_gCgEgHgLgSgZghgogvg2g8g9g1gjf8fPfGfPf6gjgzg3g0gvgqgkgegYgSgMgJgGgDgBf-f8f5f3f0fyfwfuftfsfr","r-long|h-flowers":"AAAAFofhfhfififjflfmfofpfqfsftfvfwfxfyfzf0f1f2f3f5f6f8f-gAgCgEgHgJgKgMgNgOgOgPgPgPgPgPgQgQgRgSgTgUgUgVgWgWgWgWgWgWgWgWgWgVgUgSgPgMgJgGgCf_f8f6f4f2f1f0fzfyfxfwfwfvfuftfsfqfpfnfmflfjfififh","r-long|x-ribbon":"BEBEFofkfkfjfjfjfmfrfxf4f-gDgHgKgNgPgSgWgdgiglgmgkgggZgOfyfSfGfEfHfRfjf2gHgVgdggghgegZgTgPgNgLgJgHgEgBf8f2fwfrfofnfofpfq","r-pony|h-bunny":"BEBEFofNfNfLfIfEfAe7e5fAfmgBgFgIgKgMgOgRgSgSgRgOgNgMgLgLgLgKgKgJgJgKgLgOgRgWgagfgjgngpgrgqgoglgfgZgPftfDe8e8fBfJfQfWfafb","r-pony|h-cat":"BEBEFoe2e2e1e1e1e1e2e3e5fSf7gCgBgBgDgKgRgXgdglg_hQhUhghvhnhNgqgagqhIhWhYhbhhhghJgygrgpgogmgjgdgWgNf-fSe4e3e4e6e9fAfDfFfG","r-pony|h-flowers":"AAAAFohxhzh4iPini1i8i_jDjJjJjEi8i1iliSh-hnhMgffje4eye0fgg0hLhEgvgQfmfEe0erebeKd5dodZdPdIdCc-c8c7c7c9c_dEdLdTdadmd0eDeSele9fUfrgCgZgxhAg_gtgbgZgZgdgrg7hLhXhchdhbhWhShShojZlanbnkljkDjBh8hw","r-pony|x-ribbon":"BECCFoh6h6h6h6h6h6h6h6h5h4h2hyhthlhahNgjg8hIhEhAhVhxhqhdhRhFg7gzgtgnghgagUgQgNgKgIgGgEgCf-f5fyfkfTeteBd5d7d_eEeJeOeSeUeW","r-short|h-bunny":"BEBEFoepepeqeseuexfEfugGgTgcgjglgjgdgVgFfsfQezeUd7dzd2eIepfJfXfZfWfDeRdhdUdadyeSeyfQftgGgUgdgjglgjgdgUgHftfIe5e3e2e1e0e0","r-short|h-cat":"BEBEFofcfcfbfafYfXfaf3ghg0g-hFhHhFg-gzgjgLfufMewe0e_fCfVfwf3f1fyftfofZezeieeeUelfIfrgKgkg1g_hGhIhGg_g2gjf4fafYfefkfofsft","r-short|h-flowers":"AAAAFofmfmfmflflflflflfkfjfifhfffdfbfZfWfSfOfIfCe6e0eye-fhgAgPgUgWgXgYgZgZgZgZgZgYgYgXgWgVgUgUgVgWgXgYgagbgcgdgdgegegegegegdgcgbgZgVgKf1fSe3eye0e6fBfHfNfSfWfafdfffhfifjfkflflflflflfmfmfm","r-short|x-ribbon":"BEBEFoeIeHeGeFeDeCeCeRe5fXfmfyf6f-f-f5fxflfYfWfcfPfIfRfofwf-gJgLgJfxe1d9dsdyeFeee1fKfdftf3f8f9f6fyfnfYe6ePeAeBeGeMeReUeV","r-spiky|h-bunny":"BEByD0jejejejejejdjcjajWjRjLjCiVh0gee4dqdQdSd1evfYfedobnbZbca0aOaUa0ajbMdMfNfbe0d6dYdVdoe0ghhtiJi8jEjKjOjRjTjUjUjUjUjVjV","r-spiky|h-cat":"BEB0D2jNjNjMjMjMjMjLjJjGjCi8i0iFhqgie6dtdSdbeKfJf4gFetcscRcFbBaKanbjbvccecgHf8fOeJdadVdue4gchuiOi5jCjIjNjRjTjUjVjVjVjVjV","r-spiky|h-flowers":"AAAAFocpcpcpcpcqcqcrcrcsctcvcxczc2dNe7gIgPgPgPgOgOgOgOgNgNgLf-fxf_gTgcgjgpgugyg1g4g6g8g9g_hAhBhBhBhChChChChChChBhAg_g9g5g0gtgkgdgYgWgTgRgQgOgNgMgLgJgIgHgHgBe5dQc5c1cycvcucscrcrcqcqcpcpcp","r-spiky|x-ribbon":"BEB0D0igigigigigifieibiXiRiIh9hGgpfbeWd1dpeAe6fvgbgyg3hGhjiFiZibiYh8hGgegUgigWfaeNdndldzeVfkgwhGh7iGiPiViZicidieieieieie","r-swept|h-bunny":"BEBEFoczc0c1c3c5c9dTd-ehfAfdf5gRgigvg4g_hChChAg6gxgmgYgHf2fmfcfbfdfmf3gJgZgngyg7hAhDhCg_g4gvghgOf3fdfAeid_dZdJdFdDdBdAdA","r-swept|h-cat":"BEBEFocfcfcgchcjcmc1dieKesfSf4gSgfgqgzg6hAhEhHhJhKhLhHgzgTf9fyfwf9gfg2hDhJhLhJhIhGhEhAg7gzgqgfgSf6fUeueMdjc2cocpcqcrcscs","r-swept|h-flowers":"AAAAFofrfrfqfqfrfrfsfsftfufvfwfxfyf0f2f5f7f-gBgDgFgHgJgLgNgPgSgVgagjg0hIhbhsh7iCiDiEiCiDiBiCiAh4hrhAfWdVbVbjddfZgAgFgIgKgLgMgNgNgNgNgNgMgMgLgKgIgGgEgBf_f8f6f3f1f0fyfxfwfvfuftftfsfsfsfrfr","r-swept|x-ribbon":"BEBEEAcIcIcIcIcIcIcMcydseWe7fZfygFgUghgqgvgygygwgrghgUgFf2fnfffcfdfifygDgTgfgpgwgzgzgwgqghgUgEfyfaezeDeiegedecebeaeaeZeZ","r-twin|h-bunny":"BEB4DyglglglglglglgmgmgmgngogrgtgSgrg5g7g8g6g2gwgrgqhHiEiaiPhohThpiQibiGhIgpgpgvg2g6g7g6g3gzgZgpgmgjgigggggfgfgfgfgfgfgf","r-twin|h-cat":"BEB2DqapapapapapaoamajafaZaSaHZ5Zta9b6cxdnedfKfffnfqf3gLgdgngsgugsgogegMf6fsfnfffHeXdZbhZKZGapbabibobtbwbybzb0b0b0b0b0b0","r-twin|h-flowers":"AAAAFocKcKcKcKcKcKcJcIcHcFcDcBb-b7b4b0bxbvbtbsbtcBc1dmeQe5fbfyf5f6f6f6f6f6f6f6f6f5f5f4f3f1f0fzfyfyfyfyfzf1f3f4f6f8f9f-f_gBgCgEgFgGgDf3fee6ePdicyb_bobmbnbqbubyb2b6b-cBcDcFcHcIcJcKcKcKcKcK","r-twin|x-ribbon":"BEBEFodHdGdEdAc8c3c0c1dQeGeqfJfffygDgSghgyhNhmhohchRhQhNhCg4gzgugogigbgUgQgQgSgVgXgXgVgPgHf8fvfffLeueJdRczcxc1c8dDdJdMdO","r-wave|h-bunny":"BEBEFofrfsfufwfzf3f8gCgHgMgRgXgdgkgqgwg2g6g8g8g4gxgmgTf4fdfDeyevezfEfef4gQglgxg3g7g8g5g1gvgpgjgdgYgSgNgJgEf_f7f3f0fyfwfv","r-wave|h-cat":"BEBEFofmfnfpfrfufyf4f9gCgHgNgSgYgeglgrgxg3g8g_hBhChBg3gjgOfmexejezfngQgjg3hBhChBg_g8g3gxgrgkgegYgRgMgHgCf-f5f0fwfufrfqfp","r-wave|h-flowers":"AAAAFogOgOgOgPgQgRgSgTgVgWgXgYgagbgcgcgdgegfgfggghghghgigigigigighghgggfgegcgagZgXgVgUgTgTgTgTgUgWgXgYgZgagbgcgcgdgdgegegegegegfgfgfgfgfgegegegdgdgcgbgbgagagZgZgYgYgXgWgVgUgTgSgRgQgPgPgO","r-wave|x-ribbon":"BEBEFof-f_gBgDgGgJgNgRgUgYgcghgngtgzg5hAhFhKhNhOhLhBg1glgAfUe5eze3fJflgBgbgwg8hDhGhHhFhCg9g3gxgsgmgggcgYgTgPgLgIgEgCgBgA"}},m:{c:[-5e-6,.148791,-292e-6],t:{"r-bob|x-holly":"CoEf7Qf7Sf7Sf7VDLGf7Hf73f7Qf7Vf7Af4nDvGf7Hf7Hf9Nf9Gf4nf4nETGf7Hf6Sf6xf6Df5gf4nE4Ef4af2Df2Pf4JFcEf2Df2Jf2Jf2P","r-short|x-cherry":"CnEf26f2_f2_f3EDLGf5Lf26f3EfzEfsUfrODvGf5Pf7cf8lftafrOfq3ETGf6af5Xf5Pfrefqffq3E3Gf5Xf5Tf0sfvvfq_fqf","r-spiky|x-cherry":"CnEf26f2_f2_f3DDLGf5Mf26f3DfzEfsUfrODvGf5Qf7df8mftafrOfq2ETGf6af5Yf5Qfrsfqffq2E3Gf5Yf5Uf0xfv0frGfqf","r-twin|x-holly":"CoEf6sf6uf6uf6xDLGf67f7xf6sf6xf6_f4pDvGf67f67f9qf9jf4pf4pETGf67f38f8If7Ef3Hf4pE4EfzlfrCfrOfzJFcEfrCfrIfrIfrO"},b:{"r-bob|h-bunny":"BEBEFodNdNdPdRdVdbdneBerfOfnf3gDgLgRgTgSgOgHf9fwfgfMe2eeeFdxdpdndndueEeee2fNfhfxf-gIgPgSgTgRgMgDf4flfLeqeAdndedbdYdWdVdU","r-bob|h-cat":"BEBEFodNdNdPdRdUdZdneJeyfQfmf2gCgLgRgUgVgTgPgKgDf8f0fufmfOerdzdYdyeqfPfifpfxf6gCgJgPgTgVgVgTgNgDf1fkfQe0eIdndbdWdTdQdOdN","r-bob|h-flowers":"AAAAFogKgKgKgKgKgKgKgKgKgLgLgLgLgLgLgLgLgLgLgLgLgLgLgLgLgLgKgJgIgGgCf-f4fvfnfjfgfcfXfPfNfMfMfPfYfefbfYfXfXfYfZfcfcfafafcfof3f9gCgFgIgKgKgKgKgKgJgHgGgFgFgFgFgGgGgHgIgIgIgJgJgJgJgKgKgKgKgK","r-bob|x-ribbon":"BEBEFocncocqctcyc9dNdrecfCfif8gSgkgzg_hIhPhThUhShNhGg9gxgWfwfdfbfefpf9gUgpg8hJhPhThThQhKhBg1gmgTf-flfFecdodJc8czcvcscrcq","r-bun|h-bunny":"BEBEFoeVeTeReMeGeAd8d7eFe6fjfzgBgNgXgggpgzg-hKhVhmh8iHiLiOiQiRiTirjDi9iyiKhchPhJhBg6gygqghgYgNgAfyfhe2eBd3d7eEePeZefekem","r-bun|h-cat":"BEBEFoe5e5e5e6e7e8e-fBfEffgNghguhBhXhehUg1gWgJgTgzhChAgzgfgLglhOgngHgXgdgegfgegLgEgGgJgMgagvgwgqgggOfffEfCfCfCfDfEfFfFfG","r-bun|h-flowers":"AAAAFoeBeBeDeLewfPfYfefjfnfpfqfrfrfsfsfsfrfrfrfrfsfsftftfufvfwfxfxfyfyfyfyfyfyfyfxfxfxfxfwfwfwfwfwfvfvfvfufufuftftftftftftftftftfsfsfsfsfrfrfrfrfrfrfrfsfsfsfsfsfsfsfrfqfnfkfffZfQeyeMeEeC","r-bun|x-ribbon":"BEBEFoeTeUeVeYebefelese4fjgIgagqhAhbhuhxhdhThghkhohmhUhCgxgkgdgWgRgMgJgHgFgFgGgLgQgWgcgkg6hJhEg0gggKfle_e1exeuerepeoenen","r-long|h-bunny":"BEBEFof6f6f8f_gDgLgTgaggglgpgrgsgugugwgygzg0gzgvgogegPf7fmfRfDe_fDfRfmf7gPgegogvgyg0gzgxgugtgtgsgrgoglgggagTgMgGgDgAf-f9","r-long|h-cat":"BEBEFofNfOfPfSfVfYfcfgfkfofsfvfzf2f6gAgKgVghgug7hHhNhMhCgxgEfLfBfQgFgyhChEhBg8gzgogegTgJgAf6f2fyfvfrfofkfhfefbfYfWfVfUfT","r-long|h-flowers":"AAAAFogEgEgEgEgEgEgEgEgEgEgEgEgEgFgFgFgGgGgHgHgIgIgJgJgJgKgKgKgKgKgKgKgKgKgKgKgKgKgLgLgMgNgOgPgPgQgRgSgTgTgUgUgVgVgVgVgVgUgUgTgSgRgPgNgLgKgIgHgGgFgFgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgEgE","r-long|x-ribbon":"BEBEFofgfhfifjflfofqftfwfyf1f3f6f8f_gFgOgWgdghghgegYgMf9ftfgfXfTfUfdftf9gLgWgdghghgdgWgOgGgBf-f7f3f0fwfsfofjfgfefffhfjfk","r-pony|h-bunny":"BEBEFofOfMfJfFe-e4ezeye4fdf2f4f5f5f6f9gCgFgHgIgIgHgJgRgZgdgegdgbgYgUgSgRgRgSgVgXgagdgegfgegbgXgSgMgDfge1eueye7fGfPfWfafc","r-pony|h-cat":"BEBEFofUfTfQfMfHfAe7e5e5fJfjfqftfwfyf2f6f_gEgNgsg4gggQgPgWgcgWgPgLgIgGgEgCgAf-f8f7f5f4f2fzfvfqfjfbfQfBe5e5e9fFfQfZfgflfn","r-pony|h-flowers":"AAAAFohHhPhXhdhjhtiOivi8i_i_i7i3ixijiQiAhthVgzgBfMeze7f2hPhqhnhVg7gRfxfvfmfUfHe8eweleeeYeUeRePeOeOePeReVeYedeiese8fLfafrf9gPghgzhDhWhghchHgwgsgtgzg-hMhZhkhshyh0hxhqhmjHlInJpKqOoNmMkLiLhE","r-pony|x-ribbon":"BECCFoh0h0h0h0h0h0h0h0h0hzhxhuhphihZhPgthBhIhMhShwh3hphdhQhFg6gygrglgegXgQgLgIgFgDgCgAf-f8f4ftfZfAeUd1dydzd3d8eAeFeIeLeM","r-short|h-bunny":"BEBqFogNgNgNgNgNgOgPgQgRgUgAgYgYgXgUgOgDfxfbfEereYeSeYexfVf2gGgIgGfte4eHd4d9eReqfDfafwgCgLgPgQgLgDf2fnfGeQd8eBeLeUebegei","r-short|h-cat":"BEBEFofcfbfZfXfUfRfSfngSgqg0g6g9g6gzgogXf_fifEereve3e6fJfXfXfZfafafYfKeneaeheoenfDfjgDgegtg2g8g9g6g0gqgQfjfSfTfZfffkfofp","r-short|h-flowers":"AAAAFof4f4f4f4f4f5f5f5f5f5f5f5f5f4f4f4f3f2f1fzfxfufsfrfrfsfufxf3gQgwhIhXhghnhshxh0h2h4h6h7h8h9h-h-h_h_h_h_h_h-h-h8h6h3hzhthlhchQhDgtgRf8fxftfsftfvfxfzf0f2f3f4f4f4f5f5f5f5f5f5f5f5f5f4f4f4","r-short|x-ribbon":"BEBEFoeBeBeCeDeFeIeQe0fbfuf8gIgPgSgRgLgCf1fmfhftfjfcfjf8gKgQgWgXgVf-fFePd-eDeWevfHfff0gEgMgSgTgPgIf8fufaezeReMeNePeQeSeS","r-spiky|h-bunny":"BEB0D0i9i9i9i9i8i8i7i5i2iyisilh1hYgOendWc3c6diedfJfQdPbPaxazZqYiYfZBZMZpbqdrfBecdhc4czdSeqgUhch2imitizi4i7i9i9i-i-i-i-i-","r-spiky|h-cat":"BEB0D0jTjTjTjTjSjSjRjQjNjJjDi8iMh1gvfKeAdudyeZfegPgff3d3cScNbxaiaIaVadcIeIgJgTflecdxdteBfIgxh5iMi6jCjHjLjOjQjQjRjRjRjRjR","r-spiky|h-flowers":"AAAAFoepepeoeoenelekeiefeceaeYeWeVeWefe3e4eaeDeEeVeZeVeUeTeLd9dyd0eHegekeUeKeFeBd-d7d4d3d2d1d0d0d0d0d1d2d3d7eCeIeOeTeXeaedefetfIfSfOe5ekefefefegeWd7dxeMe3e7eheVeUeVeXeZecefehekemeneoeoep","r-spiky|x-ribbon":"BEB2DyjHjHjHjHjHjHjGjFjCi_i6iziohkglfKeTd2d4edffgcg8hMhahnh0h9h7hkg4gAfefrgbgZffeed8d5eRfOgxhriwi7jAjEjHjJjKjLjLjLjLjLjL","r-swept|h-bunny":"BEBEFoeaeYeTeJdudadrehfJfhf3gLgbgpg0g8hChFhGhEg_g3gsgfgQf_fufdfbgFgxhLhahOhGhIhKhKhKhHhDg9g0gpgcgMf5fkfNewd5dPdSdrd7eAeD","r-swept|h-cat":"BEBEFocQcRcScUcWcZcidNd-eifMfzgPgggsg3hAhIhNhRhUhXhYhUhBgmgUgLgJgPgng8hKhVhYhXhUhRhNhHhAg3grgegOf1fNejd-dRcncdcecgcicjcj","r-swept|h-flowers":"AAAAFofMfMfNfOfOfPfQfSfTfUfWfXfZfafcfdfffgfhfifjfjfjfkfkflfmfnfpfsfwf_gagxhFhThahfhihihihihhhdhVhHgGeGcFbEbbdDfBfnfqfrfsftftftfufuftftftfsfrfqfofmfkfifgfdfcfafZfYfWfVfUfTfSfRfQfPfOfNfNfM","r-swept|x-ribbon":"BEBoEAfefefffffgfhfiflfnfHfrgEgQgagigogsgugugsgngggWgJf5fofYfMfIfMfYfof5gJgWghgogtgvgvgtgpgigagPgDfpfFflfifgfefdfcfcfcfc","r-twin|h-bunny":"BEB4Dqg9g9g9g9g9g9g9g8g6g3gzgugogIgrhKhchkhmhmhlhlhxijjbjejFiaiLiajFjgjeimhwhghhhjhjhihHgBgWgvg-hFhMhQhThVhWhXhXhXhXhXhX","r-twin|h-cat":"BEB4DwcvcvcvcvcvcucscqcmchcacQb7bNcBdHd7esfcgEgUgegfgbgjgvg4g-hAg-g3gughgcgfgegUgAfaeueDdXcibxcScacgclcpcrcsctctcucucucu","r-twin|h-flowers":"AAAAFobubububububvbvbvbvbvbvbvbwbwbwbxbyb0b2b4b9cZdUeFevfdgCgbgngpgqgrgsgsgsgrgqgpgogngmglglgmgngogpgqgrgrgsgsgsgsgtgtgugvgxgzg1g1gtgagAfdeveGdVcYb6b0bybwbvbubtbtbtbtbtbtbtbtbtbtbtbtbubu","r-twin|x-ribbon":"BEBEFocIcIcHcGcEcDcCcFcedXeEeqfIfdfvgBgWhEhziDiMiPiMiLiGh_h8h5h2hwhohehUhMhEg9g0grghgVgJf7ftfcfHepeFdbcgcFcEcFcLcRcWcZca","r-wave|h-bunny":"BEBEFofYfYfafcfffiflfofrftfwfyf0f2f4f7f8f9f8f4fyfpfcfHesePdzdhdddid1eQetfIfcfpfyf4f8f8f7f5f3f1fyfxfvftfrfoflfifffcfafZfY","r-wave|h-cat":"BEBEFofCfDfEfHfKfPfWfdfkfqfxf4gAgIgQgZghgogugygzgyguglgRf7fYexekewfXf5gPgkgugygzgygugpghgZgQgIf_f3fvfpfjfdfXfRfMfJfGfEfE","r-wave|h-flowers":"AAAAFofvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfufufufuftfsfrfqfofmfkfifffdfcfafafZfafbfcfdfffgfifjfkflfmfnfofqfrftfufvfwfwfwfwfwfwfwfwfwfvfvfvfvfvfvfvfvfvfwfwfwfwfwfwfwfwfvfvfv","r-wave|x-ribbon":"BEBEFofufvfxfzf2f7gDgKgRgYgfgmgtg0g8hDhKhQhVhYhZhXhOhEg0gPfkfLfGfLfdf4gSgshBhNhRhShRhNhHhAg5gxgpghgagVgQgLgGgBf8f5f3f2f1"}}};var la={f:{"z-1":{"r-long":{"w-angel":.1574,"w-bag":.1534,"w-batwing":.1473,"w-butterfly":.1487,"w-jetpack":.1536},"r-wave":{"w-angel":.2035,"w-bag":.1969,"w-batwing":.1942,"w-butterfly":.1923,"w-jetpack":.1949}},"z-2":{"r-long":{"w-angel":.1577,"w-bag":.1536,"w-batwing":.1486,"w-butterfly":.1491,"w-jetpack":.1538},"r-wave":{"w-angel":.2037,"w-bag":.1965,"w-batwing":.1947,"w-butterfly":.1925,"w-jetpack":.1951}},"z-3":{"r-long":{"w-angel":.1587,"w-bag":.1538,"w-batwing":.1495,"w-butterfly":.1493,"w-jetpack":.154},"r-wave":{"w-angel":.2039,"w-bag":.1962,"w-batwing":.1949,"w-butterfly":.1923,"w-jetpack":.1953}},"z-4":{"r-long":{"w-angel":.1589,"w-bag":.154,"w-batwing":.1499,"w-butterfly":.1496,"w-jetpack":.1542},"r-wave":{"w-angel":.2041,"w-bag":.1956,"w-batwing":.1951,"w-butterfly":.1917,"w-jetpack":.1952}},"z-5":{"r-long":{"w-angel":.1592,"w-bag":.154,"w-batwing":.1502,"w-butterfly":.1498,"w-jetpack":.1544},"r-wave":{"w-angel":.2043,"w-bag":.1949,"w-batwing":.1953,"w-butterfly":.191,"w-jetpack":.1954}}},m:{"z-1":{"r-long":{"w-angel":.1511,"w-bag":.1473,"w-batwing":.1419,"w-butterfly":.1429,"w-jetpack":.1453},"r-wave":{"w-angel":.1978,"w-bag":.19,"w-batwing":.1886,"w-butterfly":.1865,"w-jetpack":.1864}},"z-2":{"r-long":{"w-angel":.1524,"w-bag":.1475,"w-batwing":.1423,"w-butterfly":.1431,"w-jetpack":.1455},"r-wave":{"w-angel":.198,"w-bag":.1896,"w-batwing":.1888,"w-butterfly":.1867,"w-jetpack":.1866}},"z-3":{"r-long":{"w-angel":.1526,"w-bag":.1477,"w-batwing":.1434,"w-butterfly":.1434,"w-jetpack":.1457},"r-wave":{"w-angel":.1982,"w-bag":.1891,"w-batwing":.189,"w-butterfly":.1856,"w-jetpack":.1867}},"z-4":{"r-long":{"w-angel":.1531,"w-bag":.1473,"w-batwing":.1439,"w-butterfly":.1436,"w-jetpack":.1459},"r-wave":{"w-angel":.1984,"w-bag":.1885,"w-batwing":.1892,"w-butterfly":.1858,"w-jetpack":.1869}},"z-5":{"r-long":{"w-angel":.1533,"w-bag":.1469,"w-batwing":.1441,"w-butterfly":.1438,"w-jetpack":.146},"r-wave":{"w-angel":.1982,"w-bag":.1879,"w-batwing":.1894,"w-butterfly":.1847,"w-jetpack":.1871}}}};var iy="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",Un=new Int8Array(128);for(let i=0;i<64;i++)Un[iy.charCodeAt(i)]=i;function sy(i){let e=[];for(let t=0;t<i.length;){let n=Un[i.charCodeAt(t)]*64+Un[i.charCodeAt(t+1)],s=Un[i.charCodeAt(t+2)],r=Math.floor(n/36),a=n%36;t+=3;for(let o=0;o<s;o++,t+=3)e.push(r,a+o,Un[i.charCodeAt(t)]*4096+Un[i.charCodeAt(t+1)]*64+Un[i.charCodeAt(t+2)]-131072)}return e}function Wd(i){typeof i=="string"&&(i=sy(i));let e=new Float32Array(3600).fill(NaN),t=0,n=0,s=0,r=0;for(let a=0;a<i.length;a+=3){let o=i[a+2]*1e-5;e[i[a]*100+i[a+1]]=o,i[a+1]===35&&(t+=o,n++),i[a+1]===0&&(s+=o,r++)}return e.top=n?t/n:NaN,e.bottom=r?s/r:NaN,e}function ry(i,e,t){let n=e/10-.5,s=(t+90)/5-.5,r=Math.floor(n),a=Math.floor(s),o=n-r,l=s-a,c=0,h=0;for(let d=0;d<2;d++)for(let b=0;b<2;b++){let g=i[((r+d)%36+36)%36*100+a+b];if(!(g>-1e9))continue;let m=(d?o:1-o)*(b?l:1-l);c+=m*g,h+=m}let u=h>1e-6?c/h:0,f=90-5/2;return t>f&&i.top===i.top?u+(i.top-u)*(t-f)/(5/2):t<-f&&i.bottom===i.bottom?u+(i.bottom-u)*(-f-t)/(5/2):u}function qd(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],l=s-e[2],c=Math.hypot(a,o,l)||1e-9,h=(Math.atan2(a,l)*180/Math.PI+360)%360,u=Math.asin(Math.max(-1,Math.min(1,o/c)))*180/Math.PI,f=(c+ry(i,h,u))/c;return r[0]=e[0]+a*f,r[1]=e[1]+o*f,r[2]=e[2]+l*f,r}var ay=4;var oy=1e-4;function Xd(i){let e=s=>Un[i.charCodeAt(s)]*64+Un[i.charCodeAt(s+1)]-180,t=e(0),n=new Float32Array((i.length-6)/2);for(let s=0;s<n.length;s++)n[s]=(Un[i.charCodeAt(6+2*s)]*64+Un[i.charCodeAt(7+2*s)]-2048)*oy;return{a0:t,lo:e(2),hi:e(4),v:n,ring:t===-180}}function cy(i,e){let t=i.v.length,n=(e-i.a0)/ay,s=Math.floor(n),r=n-s,a=o=>i.v[i.ring?(o%t+t)%t:Math.max(0,Math.min(t-1,o))];return a(s)*(1-r)+a(s+1)*r}function jd(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],l=s-e[2],c=Math.atan2(a,i.ring?l:o)*180/Math.PI;if(!i.ring&&(c<i.lo||c>i.hi)){c=c<i.lo?i.lo:i.hi;let f=Math.hypot(a,o),d=c*Math.PI/180;a=f*Math.sin(d),o=f*Math.cos(d)}let h=Math.hypot(a,o,l)||1e-9,u=(h+cy(i,c))/h;return r[0]=e[0]+a*u,r[1]=e[1]+o*u,r[2]=e[2]+l*u,r}var Kd=(i,e,t,n)=>Math.floor((Math.atan2(i,t)*180/Math.PI+360)/2)%180*90+Math.min(89,Math.max(0,Math.floor((Math.asin(Math.max(-1,Math.min(1,e/n)))*180/Math.PI+90)/2)));function Jd(){return{lo:new Float32Array(16200).fill(-1),hi:new Float32Array(16200).fill(-1),hv:new Float32Array(16200).fill(-1)}}function Zh(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],l=s-e[2],c=Math.hypot(a,o,l);if(!c)return;let h=Kd(a,o,l,c);c>i.hi[h]&&(i.hi[h]=c),r&&c>i.hv[h]&&(i.hv[h]=c),(i.lo[h]<0||c<i.lo[h])&&(i.lo[h]=c)}function Qh(i,e,t){return $h(i.lo,e,t)}function $h(i,e,t){let n=new Float32Array(16200).fill(NaN),s=new Float64Array(16200).fill(1/0);for(let r=0;r<180;r++){let a=r*90;for(let o=-e;o<=e;o++){let l=((r+o)%180+180)%180*90;for(let c=0;c<90;c++){let h=i[l+c];h>=0&&h<s[a+c]&&(s[a+c]=h)}}}for(let r=0;r<180;r++){let a=r*90;for(let o=0;o<90;o++){let l=1/0,c=Math.min(89,o+e);for(let h=Math.max(0,o-e);h<=c;h++){let u=s[a+h];u<l&&(l=u)}l<1/0&&(n[a+o]=l-t)}}return n}function Yd(i,e,t){let n=0;for(let s=0;s<i.length;s+=3){let r=i[s]-e[0],a=i[s+1]-e[1],o=i[s+2]-e[2],l=Math.hypot(r,a,o);if(!l)continue;let c=t[Kd(r,a,o,l)];if(!(l>c)||c<=0)continue;let h=c/l;i[s]=e[0]+r*h,i[s+1]=e[1]+a*h,i[s+2]=e[2]+o*h,n++}return n}var ef={f:{r:["h-beanie|r-long","h-beanie|r-pony","h-beanie|r-bun","h-beanie|r-spiky","h-beanie|r-twin","h-beanie|r-wave","h-cap|r-long","h-cap|r-pony","h-cap|r-bun","h-cap|r-spiky","h-cap|r-twin","h-cap|r-wave","h-cap|r-swept","h-chef|r-pony","h-chef|r-twin","h-santa|r-pony","h-santa|r-bun","h-santa|r-spiky","h-santa|r-twin","h-santa|r-wave","h-santa|r-swept","h-straw|r-long","h-straw|r-bob","h-straw|r-short","h-straw|r-pony","h-straw|r-bun","h-straw|r-spiky","h-straw|r-twin","h-straw|r-wave","h-straw|r-swept","h-witch|r-long","h-witch|r-bob","h-witch|r-short","h-witch|r-pony","h-witch|r-bun","h-witch|r-twin","h-witch|r-wave","h-bunny|r-spiky","h-cat|r-spiky"],b:["h-beanie|x-ribbon","h-bunny|x-ribbon","h-cap|x-ribbon","h-cat|x-ribbon","h-chef|x-ribbon","h-flowers|x-ribbon","h-pumpkin|x-ribbon","h-santa|x-ribbon","h-straw|x-ribbon","h-witch|x-ribbon"],x:{"h-bow|x-cherry":[0,0,-15],"h-bow|x-heart":[0,0,-10],"h-bow|x-holly":[0,0,-10],"h-bow|x-star":[0,0,-10],"h-bow|x-thaipin":[0,0,-15],"h-chef|x-cherry":[0,0,-25],"h-chef|x-thaipin":[0,0,-30],"h-horns|x-ribbon":[-20,0,0],"h-santa|x-flower":[0,0,35]},w:{"h-cat|r-spiky":2,"h-bunny|r-spiky":2}},m:{r:["h-beanie|r-long","h-beanie|r-pony","h-beanie|r-bun","h-beanie|r-spiky","h-beanie|r-twin","h-beanie|r-wave","h-cap|r-long","h-cap|r-pony","h-cap|r-bun","h-cap|r-spiky","h-cap|r-twin","h-cap|r-wave","h-cap|r-swept","h-chef|r-pony","h-chef|r-twin","h-santa|r-pony","h-santa|r-bun","h-santa|r-spiky","h-santa|r-twin","h-santa|r-wave","h-santa|r-swept","h-straw|r-long","h-straw|r-bob","h-straw|r-pony","h-straw|r-bun","h-straw|r-twin","h-straw|r-wave","h-straw|r-swept","h-witch|r-long","h-witch|r-bob","h-witch|r-pony","h-witch|r-bun","h-witch|r-twin","h-witch|r-wave","h-cat|r-pony","h-flowers|r-bun","h-bunny|r-spiky","h-cat|r-spiky"],b:["h-beanie|x-ribbon","h-bunny|x-ribbon","h-cap|x-ribbon","h-cat|x-ribbon","h-chef|x-ribbon","h-flowers|x-ribbon","h-pumpkin|x-ribbon","h-santa|x-ribbon","h-straw|x-ribbon","h-witch|x-ribbon"],x:{"h-bow|x-cherry":[0,0,-15],"h-bow|x-heart":[0,0,-10],"h-bow|x-holly":[0,0,-10],"h-bow|x-star":[0,0,-10],"h-bow|x-thaipin":[0,0,-15],"h-chef|x-cherry":[0,0,-25],"h-chef|x-thaipin":[0,0,-25],"h-horns|x-ribbon":[-20,0,0],"h-santa|x-flower":[0,0,35]},w:{"h-cat|r-spiky":3,"h-bunny|r-spiky":2}}};var df=new URL("./",import.meta.url).href,xf=!1;function ow(i,e){df=String(i).replace(/\/?$/,"/"),xf=!!e}var pr=(Ct.v||"1")+".297ccab0",Qd={"s-1":"#ffe7d6","s-2":"#f7d3b6","s-3":"#e7b58e","s-4":"#c48a62"},Ac={"c-black":"#2e2624","c-brown":"#5b3a24","c-choco":"#7a4a2b","c-blonde":"#e0b25a","c-pink":"#f28fb0","c-lav":"#a98be8","c-mint":"#6fcfb8","c-silver":"#c3c9d3"},$d={"c-black":"#6b5d5a","c-brown":"#9a6a48","c-choco":"#b98258","c-blonde":"#fbe3a6","c-pink":"#ffd0df","c-lav":"#dccdfc","c-mint":"#c4f2e6","c-silver":"#f2f5fa"},pa=1.15,ep={"z-1":.9,"z-2":.95,"z-3":1,"z-4":1.05,"z-5":1.1},dy=["Spine","Spine1","Spine2","Neck","Head","LeftLeg","LeftFoot","RightLeg","RightFoot","LeftForeArm","LeftHand","RightForeArm","RightHand"];function _f(i){let e=i.g==="m",t=Object.assign({s:"s-1",r:e?"r-short":"r-long",c:"c-black",u:"u-uniform",l:e?"l-pants":"l-skirt",k:"k-sneaker",z:"z-3"},i);return t.g=e?"m":"f",t.u&&Ct.parts[t.u]&&Ct.parts[t.u].full&&delete t.l,t}var py=["g","z","s","r","c","u","l","k","h","e","j","w","x","a","m"];function xa(i){let e=_f(i||{}),t=n=>Ct.parts[n]||(Ct.props||[]).includes(n);return py.map(n=>e[n]&&(n==="g"||n==="z"||n==="s"||n==="c"||(n==="m"?us[e[n]]:t(e[n])))?e[n]:"").join("|")}function cw(i){return!!Ct.parts[i]||(Ct.props||[]).includes(i)}var lw=Ct,my=Ct.v||"1",wp=new _c;wp.setMeshoptDecoder(Bd);var Ec=new Map;function gy(i){return xf?i.text().then(e=>{let t=atob(e.trim()),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}):i.arrayBuffer()}function ma(i){return Ec.has(i)||Ec.set(i,fetch(df+i+(xf?".txt":"")+"?v="+my,{cache:"force-cache"}).then(e=>{if(!e.ok)throw new Error(i+" "+e.status);return gy(e)}).then(e=>wp.parseAsync(e,df)).catch(e=>{throw Ec.delete(i),e})),Ec.get(i)}var da=i=>new Ae(i),tf=null;function Ap(){if(!tf){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,4,64,64,62);n.addColorStop(0,"rgba(40,24,16,.42)"),n.addColorStop(.6,"rgba(40,24,16,.16)"),n.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),tf=new Nr(e)}let i=new at(new is(.5,.34),new nn({map:tf,transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-1,i}var fr=null;function by(){if(!fr){let i=new Uint8Array([138,138,138,141,162,232,255,255]);fr=new Pi(i,i.length,1,er),fr.minFilter=fr.magFilter=vt,fr.needsUpdate=!0}return fr}function xy(i){i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
    float rimF = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
    rimF = smoothstep(0.58, 0.9, rimF) * (0.35 + 0.65 * clamp(normal.y * 0.8 + 0.4, 0.0, 1.0));
    reflectedLight.directDiffuse += rimF * 0.55 * material.diffuseColor;`)}function ga(i,e){let t=new Or({color:e||i.color.clone(),gradientMap:by(),side:i.side});return i.map&&(t.map=i.map),i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=i.depthWrite),i.alphaTest&&(t.alphaTest=i.alphaTest),i.emissive&&i.emissive.getHex()&&(t.emissive=i.emissive.clone(),t.emissiveIntensity=i.emissiveIntensity),t.name=i.name,t.onBeforeCompile=xy,t.customProgramCacheKey=()=>"seoulful-toon",t}var nf={flapL:["ahead",-24,.8],flapR:["ahead",24,.8],bob:["up",0,.5],spinU:["up",0,.4],spinF:["ahead",0,.6],sway:["side",6,.35],swing:["side",6,.45]},tp={"j-bowtie":[0,-.021,.005],"j-lei":[0,-.005,0]},ha={"r-long":[.3,-1.4],"r-wave":[.3,-1.4]},_y=new Set(["r-bob","r-long","r-wave"]),np=new Set(["w-angel","w-batwing","w-butterfly"]),yy=.01;function ip(i,e,t){let n=i.geometry.getAttribute("position").count,s=new Float32Array(n*3),r=new L;for(let l=0;l<n;l++)i.getVertexPosition(l,r).applyMatrix4(i.matrixWorld),s[3*l]=r.x,s[3*l+1]=r.y,s[3*l+2]=r.z,t(r.x,r.y,r.z);let a=i.geometry.index,o=a?a.count:n;for(let l=0;l+2<o;l+=3){let c=3*(a?a.getX(l):l),h=3*(a?a.getX(l+1):l+1),u=3*(a?a.getX(l+2):l+2),f=Math.max(Math.hypot(s[c]-s[h],s[c+1]-s[h+1]),Math.hypot(s[h]-s[u],s[h+1]-s[u+1]),Math.hypot(s[u]-s[c],s[u+1]-s[c+1])),d=Math.ceil(f/(e/2));if(!(d<2))for(let b=0;b<=d;b++)for(let g=0;b+g<=d;g++){let m=b/d,p=g/d,M=1-m-p;t(M*s[c]+m*s[h]+p*s[u],M*s[c+1]+m*s[h+1]+p*s[u+1],M*s[c+2]+m*s[h+2]+p*s[u+2])}}return s}function Tc(i){for(;i.parent&&!i.parent.isBone;)i=i.parent;return i.name}var sf=new WeakMap;function vy(i,[e,t]){if(sf.has(i.geometry))return sf.get(i.geometry);let n=i.skeleton.bones.map(o=>o.name.replace(/^mixamorig:?/,"")),s=n.indexOf("Head"),r=n.indexOf("Neck"),a=null;if(s>=0&&r>=0){let o=i.geometry,l=o.attributes.position,c=l.count,h=new L,u=p=>new L().setFromMatrixPosition(new we().copy(i.skeleton.boneInverses[p]).invert()).y,f=u(s),d=f-u(r),b=new Uint16Array(c*4),g=new Float32Array(c*4);for(let p=0;p<c;p++){let M=Math.min(1,Math.max(0,((h.fromBufferAttribute(l,p).applyMatrix4(i.bindMatrix).y-f)/d-t)/(e-t)));b[4*p]=s,b[4*p+1]=n.length,g[4*p]=M*M*(3-2*M),g[4*p+1]=1-g[4*p]}let m=new Ft;for(let p in o.attributes)m.setAttribute(p,o.attributes[p]);m.setAttribute("skinIndex",new rt(b,4)),m.setAttribute("skinWeight",new rt(g,4)),m.setIndex(o.index);for(let p of o.groups)m.addGroup(p.start,p.count,p.materialIndex);a={geometry:m,inverses:i.skeleton.boneInverses.concat(i.skeleton.boneInverses[s].clone())}}return sf.set(i.geometry,a),a}var My={"w-angel":[.4,1],"w-butterfly":[.6,2],"w-batwing":[.55,1.4]},Sy=new Set(["eye-white","eye-shade","iris","iris-dark","iris-light","iris-glow","pupil","shine","lash","brow","mouth","mouth-in","tongue","cheek"]);function sp(i,e){let t=new nn({color:e||i.color.clone(),side:i.side});return i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=!1),t.name=i.name,t}var Ep={value:.004};function Tp(i){let e={};return i.emissive.getHSL(e),e.l*(i.emissiveIntensity||0)>.25}function wy(i){let e={};return i.getHSL(e,_t),new Ae().setHSL(e.h,Math.min(1,e.s*.85+.12),Math.max(.04,e.l*.34),_t).lerp(Ay,.22)}var Ay=new Ae("#3b2620");function Ey(i){let e=new nn({color:i,side:Bt});return e.onBeforeCompile=t=>{t.uniforms.olw=Ep,t.vertexShader=`uniform float olw;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      #ifdef USE_SKINNING
        vec3 olN = objectNormal;
      #else
        vec3 olN = normal;
      #endif
      mvPosition.xyz += normalize(normalMatrix * olN) * olw;
      gl_Position = projectionMatrix * mvPosition;`)},e.customProgramCacheKey=()=>"seoulful-line",e}function Dc(i){let t=(Array.isArray(i.material)?i.material:[i.material]).map(s=>Ey(wy(s.color||new Ae(3355443)))),n=i.isSkinnedMesh?new Ri(i.geometry,Array.isArray(i.material)?t:t[0]):new at(i.geometry,Array.isArray(i.material)?t:t[0]);return i.isSkinnedMesh&&n.bind(i.skeleton,i.bindMatrix),n.frustumCulled=!1,n.userData.line=!0,n.renderOrder=i.renderOrder,i.add(n),n}function Bc(i,e,t,n=.0016){let s=2*(t||i.position.length())*Math.tan(i.fov*it/2)/Math.max(1,e);Ep.value=Math.min(.008,Math.max(n,s*1.7))}function Ty(i,e){return ga(i,da(Qd[e.s]||Qd["s-1"]))}function Ry(i,e){let t=i.getAttribute("color"),n=i.index;if(!t||!n||!e.size)return n;let s=new Uint8Array(t.count);for(let l=0;l<t.count;l++){let c=Math.round(t.getX(l)*255)+256*Math.round(t.getY(l)*255);e.has(c)&&(s[l]=1)}let r=n.array,a=new r.constructor(r.length),o=0;for(let l=0;l<r.length;l+=3){let c=r[l],h=r[l+1],u=r[l+2];s[c]&&s[h]&&s[u]||(a[o++]=c,a[o++]=h,a[o++]=u)}return new rt(a.slice(0,o),1)}function Cy(i){let e=new Set;return i.scene.traverse(t=>{let n=t.isMesh&&t.material&&t.material.userData&&t.material.userData.hide;if(n)for(let[s,r]of JSON.parse(n))for(let a=s;a<=r;a++)e.add(a)}),e}var rf=new Map,vn=36;function Py(i,e,t,n){i.updateMatrixWorld(!0);let s=new L;e.getWorldPosition(s);let r=new L,a=(h,u)=>(Math.atan2(u-s.z,h-s.x)/(2*Math.PI)+.5)*vn,o=new Array(vn).fill(1/0);for(let h of t){let u=h.geometry.getAttribute("position"),f=h.geometry.index;if(!f)continue;let d=new Float32Array(u.count*3);for(let g=0;g<u.count;g++)h.getVertexPosition(g,r).applyMatrix4(h.matrixWorld),d[3*g]=r.x,d[3*g+1]=r.y,d[3*g+2]=r.z;let b=f.array;for(let g=0;g<b.length;g+=3){let m=[b[g],b[g+1],b[g+2]];if(m.some(v=>d[3*v+1]>s.y+.3||(d[3*v]-s.x)**2+(d[3*v+2]-s.z)**2>.26*.26))continue;let p=Math.min(d[3*m[0]+1],d[3*m[1]+1],d[3*m[2]+1]),M=m.map(v=>a(d[3*v],d[3*v+2])),T=Math.min(...M),y=Math.max(...M);if(y-T>vn/2){let v=M.map(A=>A<vn/2?A+vn:A);T=Math.min(...v),y=Math.max(...v)}for(let v=Math.floor(T);v<=Math.floor(y);v++){let A=v%vn;p<o[A]&&(o[A]=p)}}}if(o.some(h=>!Number.isFinite(h)))return null;let l=o.map((h,u)=>Math.max(h,o[(u+1)%vn],o[(u+vn-1)%vn])+.004);return{over:n.map(h=>{let u=h.geometry.getAttribute("position").count,f=new Float32Array(u);for(let d=0;d<u;d++){h.getVertexPosition(d,r).applyMatrix4(h.matrixWorld);let b=a(r.x,r.z)-.5,g=(Math.floor(b)+vn)%vn;f[d]=r.y-Math.max(l[g],l[(g+1)%vn])}return new rt(f,1)}),hem:l}}var af=new Map,Qn=12;function Iy(i,e,t,n){i.updateMatrixWorld(!0);let s=new L,r=e.map(f=>f.getWorldPosition(new L)),a=f=>Math.abs(f-r[0].x)<=Math.abs(f-r[1].x)?0:1,o=(f,d,b)=>(Math.atan2(b-r[f].z,d-r[f].x)/(2*Math.PI)+.5)*Qn,l=[new Array(Qn).fill(1/0),new Array(Qn).fill(1/0)];for(let f of t){let d=f.geometry.getAttribute("position"),b=f.geometry.index;if(!b)continue;let g=new Float32Array(d.count*3);for(let p=0;p<d.count;p++)f.getVertexPosition(p,s).applyMatrix4(f.matrixWorld),g[3*p]=s.x,g[3*p+1]=s.y,g[3*p+2]=s.z;let m=b.array;for(let p=0;p<m.length;p+=3){let M=3*m[p],T=3*m[p+1],y=3*m[p+2],v=(g[M]+g[T]+g[y])/3,A=(g[M+2]+g[T+2]+g[y+2])/3,E=a(v);if((v-r[E].x)**2+(A-r[E].z)**2>.16*.16)continue;let x=Math.min(g[M+1],g[T+1],g[y+1]),w=Math.floor(o(E,v,A))%Qn;x<l[E][w]&&(l[E][w]=x)}}let c=l.map(f=>f.map((d,b)=>{let g=[d,f[(b+1)%Qn],f[(b+Qn-1)%Qn]].filter(Number.isFinite);return g.length?Math.max(...g)+.004:1/0})),h=!1,u=n.map(f=>{let d=f.geometry.getAttribute("position").count,b=new Float32Array(d);for(let g=0;g<d;g++){f.getVertexPosition(g,s).applyMatrix4(f.matrixWorld);let m=a(s.x),p=(Math.floor(o(m,s.x,s.z)-.5)+Qn)%Qn;b[g]=s.y-Math.max(c[m][p],c[m][(p+1)%Qn]),b[g]>0&&(h=!0)}return new rt(b,1)});return h?{over:u}:null}function Ly(i,e,t,n){i.forEach((s,r)=>{let a=s.geometry,o=new Ft;for(let c in a.attributes)o.setAttribute(c,a.attributes[c]);o.setAttribute(t,e[r]),o.setIndex(a.index),o.boundingSphere=a.boundingSphere,s.geometry=o;let l=(c,h)=>{let u=c.onBeforeCompile,f=c.customProgramCacheKey?c.customProgramCacheKey():"";c.onBeforeCompile=(d,b)=>{u&&u(d,b),d.vertexShader="attribute float "+t+`;
varying float v_`+t+`;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
v_`+t+" = "+t+";"),d.fragmentShader="varying float v_"+t+`;
`+d.fragmentShader.replace("void main() {",`void main() {
if (v_`+t+" > 0.0) discard;")},c.customProgramCacheKey=()=>f+"|"+h};(Array.isArray(s.material)?s.material:[s.material]).forEach(c=>l(c,n));for(let c of s.children)c.userData.line&&(c.geometry=o,(Array.isArray(c.material)?c.material:[c.material]).forEach(h=>l(h,n+"-line")))})}var Rp=i=>i+"/body.glb";function Cp(i){let e=["r","u","l","k","h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&Ct.parts[o]),t=Ct.props||[],n=["h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&!Ct.parts[o]&&t.includes(o)),s=i.m&&us[i.m],r=s&&t.includes(s)&&!n.includes(s)?s:"";r&&n.push(r);let a=[...new Set(n.map(o=>o[0]))];return{ids:e,want:n,mp:r,groups:a}}function Pp(i){let e=_f(i||{}),{ids:t,groups:n}=Cp(e);return Promise.all([Rp(e.g),...t.map(s=>e.g+"/"+s+".glb"),...n.map(s=>e.g+"/props-"+s+".glb")].map(ma))}var pf=class{constructor(e){this.look=_f(e||{}),this.root=new wt,this.bones={},this.meshes=[],this.move=null,this.t0=0,this.worn={},this.grown=[]}async build(){let e=this.look,{ids:t,want:n,mp:s,groups:r}=Cp(e),[a,...o]=await Promise.all([ma(Rp(e.g)),...t.map(f=>ma(e.g+"/"+f+".glb"))]),l=xc(a.scene);if(this.root.add(l),this.root.add(Ap()),l.traverse(f=>{f.isBone&&(this.bones[f.name.replace(/^mixamorig:?/,"")]=f)}),this.bones.Spine2&&this.bones.Head){let f=new Ci;f.name="HairLow",this.bones.Spine2.add(f),this.bones.HairLow=f}let c=new Set;o.forEach(f=>Cy(f).forEach(d=>c.add(d)));let h=null;if(this.face=[],l.traverse(f=>{if(!f.isMesh||f.userData.line)return;let d=f.material.name;d==="skin"?(f.material=Ty(f.material,e),f.geometry.getAttribute("color")&&(h=f,f.geometry=f.geometry.clone(),f.geometry.setIndex(Ry(f.geometry,c)),Dc(f))):Sy.has(d)?(f.material=sp(f.material,d==="brow"?da(Ac[e.c]||Ac["c-black"]).lerp(da("#241812"),.45):null),d==="cheek"&&(f.material.transparent=!0,f.material.depthWrite=!1,f.renderOrder=1)):f.material=ga(f.material),f.morphTargetDictionary&&this.face.push(f),f.frustumCulled=!1,this.meshes.push(f)}),o.forEach((f,d)=>this.wear(t[d],f,h)),this.loose(),this.shod(),this.moveProps=[],this.held=[],this.grips=[],this.alive=[],this.tossed=[],this.glasses=[],this.packs=[],(await Promise.all(r.map(f=>ma(e.g+"/props-"+f+".glb")))).forEach(f=>this.attach(f,n,s)),this.fitHead(),await this.tuck(),this.tall(ep[e.z]||1),this.lowRest(),this.onHair(),this.cuffs(),ha[e.r])for(let f of this.alive)f.kind==="swing"&&(f.k=[0,f.k[1]]);return this.root.traverse(f=>{!f.isSkinnedMesh||f.frustumCulled||f.boundingSphere||(f.geometry.boundingSphere||f.geometry.computeBoundingSphere(),f.boundingSphere=f.geometry.boundingSphere.clone())}),this.ready=!0,this}wear(e,t,n){let s=e[0]==="r",r=(Ct.props||[]).includes(this.look.h);t.scene.traverse(a=>{if(!a.isSkinnedMesh||s&&r&&/~top$/.test(a.material.name))return;let o=a.skeleton.bones.map(f=>this.bones[f.name.replace(/^mixamorig:?/,"")]||this.bones.Head),l=/^p\d/.test(a.material.name)?+String(a.material.name).replace(/^p(\d+).*/,"$1"):-1,c=s&&l===1?sp(a.material,da($d[this.look.c]||$d["c-black"])):ga(a.material,s&&l===0?da(Ac[this.look.c]||Ac["c-black"]):null);if(c.side=ln,s)l===1&&(c.polygonOffset=!0,c.polygonOffsetFactor=-1,c.polygonOffsetUnits=-1);else{let f={u:2+Math.max(0,l),k:4}[e[0]]||0;f&&(c.polygonOffset=!0,c.polygonOffsetFactor=-f,c.polygonOffsetUnits=-f)}let h=s&&this.bones.HairLow&&ha[e]?vy(a,ha[e]):null,u=new Ri(h?h.geometry:a.geometry,c);u.bind(new es(h?o.concat(this.bones.HairLow):o,h?h.inverses:a.skeleton.boneInverses),a.bindMatrix),u.frustumCulled=!1,u.userData.part=e,(n?n.parent:this.root).add(u),this.meshes.push(u),!(s&&l===1)&&!c.transparent&&Dc(u),s||(u.userData.piece=l,(this.worn[e[0]]=this.worn[e[0]]||[]).push(u))})}loose(){let e=this.look,t=Ct.parts[e.u]||{},n=this.worn.u,s=this.worn.l;if(n&&t.full&&(s=n.filter(l=>l.userData.piece===1),n=n.filter(l=>l.userData.piece===0)),!n||!n.length||!s||!s.length||!this.bones.Hips||t.tucked)return;let r=e.g+"|"+e.u+"|"+(t.full?"":e.l);rf.has(r)||rf.set(r,Py(this.root,this.bones.Hips,n,s));let a=rf.get(r);if(!a)return;this.hem=a.hem;let o=a.over;s.forEach((l,c)=>{let h=l.geometry,u=new Ft;for(let d in h.attributes)u.setAttribute(d,h.attributes[d]);u.setAttribute("overHem",o[c]),u.setIndex(h.index),u.boundingSphere=h.boundingSphere,l.geometry=u;let f=(d,b)=>{let g=d.onBeforeCompile;d.onBeforeCompile=(m,p)=>{g&&g(m,p),m.vertexShader=`attribute float overHem;
varying float vOverHem;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOverHem = overHem;`),m.fragmentShader=`varying float vOverHem;
`+m.fragmentShader.replace("void main() {",`void main() {
if (vOverHem > 0.0) discard;`)},d.customProgramCacheKey=()=>b};f(l.material,"seoulful-under-top");for(let d of l.children)d.userData.line&&(d.geometry=u,(Array.isArray(d.material)?d.material:[d.material]).forEach(b=>f(b,"seoulful-under-top-line")))})}shod(){let e=this.look,t=Ct.parts[e.u]||{},n=t.full?this.worn.u:this.worn.l,s=this.worn.k,r=[this.bones.LeftFoot,this.bones.RightFoot];if(!n||!n.length||!s||!s.length||!r[0]||!r[1])return;let a=e.g+"|"+(t.full?e.u:e.l)+"|"+e.k;af.has(a)||af.set(a,Iy(this.root,r,n,s));let o=af.get(a);o&&Ly(s,o.over,"overLeg","seoulful-in-leg")}attach(e,t,n){let s=[];e.scene.traverse(r=>{let a=r.name&&t.find(o=>r.name===o);a&&r.parent&&s.push([a,r])});for(let[r,a]of s){let o=this.bones[a.parent.name.replace(/^mixamorig:?/,"")];if(!o)continue;let l=a.clone();l.traverse(h=>{h.frustumCulled=!1;let u=h.name.split("~")[1];nf[u]&&this.alive.push({node:h,kind:u,k:My[r]||[1,1],kept:/^(flap|sway)/.test(u)}),u==="toss"&&this.tossed.push({node:h}),u==="pack"&&this.packs.push(h),!(!h.isMesh||h.userData.line)&&(h.material=ga(h.material),!h.material.transparent&&!Tp(h.material)&&Dc(h))});let c=r[0]==="a"?this.grip(o,l):r===n?this.about(o,l,r[0]==="e"):(o.add(l),l);r===n?(c.visible=!1,c.userData.s0=c.scale.x,this.moveProps.push(c)):r[0]==="a"?this.held.push(c):r[0]==="e"&&this.glasses.push(c),r==="j-pearl"&&_y.has(this.look.r)&&(c.visible=!1)}}about(e,t,n){e.add(t),this.root.updateMatrixWorld(!0);let s=new At().setFromObject(t,!0),r=s.getCenter(new L);n&&(r.z=s.max.z);let a=e.worldToLocal(r),o=new wt;return o.position.copy(a),t.position.sub(a),e.add(o),o.add(t),o}grip(e,t){let n=Ct.bodies&&Ct.bodies[this.look.g];if(!n||!n.fist)return e.add(t),t;t.updateMatrix();let s=new L().fromArray(n.fist).applyMatrix4(t.matrix),r=By[t.name];if(r){this.root.updateMatrixWorld(!0);let o=new L(0,0,1).transformDirection(this.root.matrixWorld).transformDirection(new we().copy(e.matrixWorld).invert()),l=new dt().setFromAxisAngle(o,r*it);t.position.sub(s).applyQuaternion(l).add(s),t.quaternion.premultiply(l),t.updateMatrix()}let a=new wt;return a.position.copy(s),t.position.sub(s),a.add(t),a.userData.id=t.name,e.add(a),this.grips.push(a),a}lowRest(){let e=this.bones,t=e.HairLow;if(!t)return;let n={},s=this.root.position.clone(),r=this.root.quaternion.clone();for(let a in e)n[a]=[e[a].quaternion.clone(),e[a].position.clone()];fa(this,ca(0),1),this.root.updateMatrixWorld(!0),new we().copy(e.Spine2.matrixWorld).invert().multiply(e.Head.matrixWorld).decompose(t.position,t.quaternion,new L);for(let a in n)a!=="HairLow"&&(e[a].quaternion.copy(n[a][0]),e[a].position.copy(n[a][1]));this.root.position.copy(s),this.root.quaternion.copy(r),this.q0.HairLow=t.quaternion.clone(),this.p0.HairLow=t.position.clone(),this.root.updateMatrixWorld(!0)}onHair(){let e=this.look,t=ep[e.z]?e.z:"z-3",n=la[e.g]&&la[e.g][t]&&la[e.g][t][e.r];if(!n)return;let s=[];for(let u of this.packs)n[Tc(u)]&&s.push([u,n[Tc(u)]]);if(ha[e.r]&&this.root.traverse(u=>{!u.isBone&&np.has(u.name)&&n[u.name]&&u.parent&&u.parent.isBone&&s.push([u,n[u.name]])}),!s.length)return;let r=this.bones,a={},o=this.root.position.clone(),l=this.root.quaternion.clone();for(let u in r)a[u]=[r[u].quaternion.clone(),r[u].position.clone(),r[u].scale.clone()];fa(this,ca(0),1);for(let u of["Head","HairLow"])r[u]&&r[u].scale.setScalar(pa);this.root.updateMatrixWorld(!0);let c=new L,h=s.map(([u,f])=>(u.getWorldPosition(c),c.z-=f,[u,u.parent.worldToLocal(c.clone())]));for(let u in a)r[u].quaternion.copy(a[u][0]),r[u].position.copy(a[u][1]),r[u].scale.copy(a[u][2]);this.root.position.copy(o),this.root.quaternion.copy(l);for(let[u,f]of h)u.position.copy(f);this.root.updateMatrixWorld(!0)}backMeasure(){let e=this.meshes.filter(E=>/^r-/.test(E.userData.part||"")),t=[],n={};if(this.root.traverse(E=>{!E.isBone&&np.has(E.name)&&E.parent&&E.parent.isBone&&t.push(E)}),!this.packs.length&&!t.length)return null;if(!e.length||!this.bones.Head)return n;let s=ha[this.look.r]?t:[];if(!this.packs.length&&!s.length)return n;let r=this.bones,a={},o=this.root.position.clone(),l=this.root.quaternion.clone();for(let E in r)a[E]=[r[E].quaternion.clone(),r[E].position.clone(),r[E].scale.clone()];fa(this,ca(0),1);for(let E of["Head","HairLow"])r[E]&&r[E].scale.setScalar(pa);this.root.updateMatrixWorld(!0);let c=.01,h=new Map,u=[],f=[],d=[],b=e.map(E=>ip(E,c,(x,w,R)=>{let C=Math.round(x/c),D=Math.round(w/c),F=C*8192+D,I=h.get(F);I===void 0?(h.set(F,u.length),u.push(C),f.push(D),d.push(R)):R<d[I]&&(d[I]=R)})),g=1/0,m=-1/0,p=1/0,M=-1/0;for(let E=0;E<u.length;E++)g=Math.min(g,u[E]-1),m=Math.max(m,u[E]+1),p=Math.min(p,f[E]-1),M=Math.max(M,f[E]+1);let T=u.length?m-g+1:0,y=u.length?M-p+1:0,v=new Float64Array(T*y).fill(1/0);for(let E=0;E<u.length;E++)for(let x=-1;x<=1;x++)for(let w=-1;w<=1;w++){let R=(u[E]+x-g)*y+f[E]+w-p;d[E]<v[R]&&(v[R]=d[E])}let A=E=>{let x=0;return E.traverse(w=>{w.isMesh&&ip(w,c,(R,C,D)=>{let F=Math.round(R/c)-g,I=Math.round(C/c)-p;if(F<0||F>=T||I<0||I>=y)return;let B=D-v[F*y+I]+yy;B>x&&(x=B)})}),x};if(this.packs.length){let E=new At;for(let R of this.packs)E.expandByObject(R,!0);let x=1/0,w=-1/0;for(let R of b)for(let C=0;C<R.length;C+=3)R[C+1]<E.min.y||R[C+1]>E.max.y||R[C+2]>E.max.z||(R[C]<x&&(x=R[C]),R[C]>w&&(w=R[C]));if(w-x>=(E.max.x-E.min.x)*.9){let R=Math.max(...this.packs.map(A));for(let C of this.packs)n[Tc(C)]=Math.max(n[Tc(C)]||0,R)}}for(let E of s){let x=(this.alive||[]).filter(R=>{for(let C=R.node;C;C=C.parent)if(C===E)return!!R.axis;return!1}),w=A(E);for(let R of[.25,.5,.75,1]){for(let C of x){let[D,F]=nf[C.kind];C.node.quaternion.setFromAxisAngle(C.axis[D],F*C.k[0]*it*R).multiply(C.q0)}this.root.updateMatrixWorld(!0),w=Math.max(w,A(E))}for(let R of x)R.node.quaternion.copy(R.q0);this.root.updateMatrixWorld(!0),n[E.name]=w}for(let E in a)r[E].quaternion.copy(a[E][0]),r[E].position.copy(a[E][1]),r[E].scale.copy(a[E][2]);return this.root.position.copy(o),this.root.quaternion.copy(l),this.root.updateMatrixWorld(!0),n}fitHead(){let e=this.bones.Head,t=this.look,n=Jh[t.g];if(!e||!n)return;let s=new L,r=new De,a=new we,o=!1,l=(g,m)=>{o||(this.root.updateMatrixWorld(!0),o=!0),g.position.add(s.fromArray(m).applyMatrix3(r.setFromMatrix4(a.copy(g.parent.matrixWorld).invert().multiply(e.matrixWorld))))},c=g=>g.name||g.children[0]&&g.children[0].name||"";for(let g of this.glasses.concat(this.moveProps)){let m=n.e[c(g)];m&&l(g,m)}for(let g of this.all?Object.keys(tp):[t.j]){let m=tp[g];if(!m)continue;let p=null;this.root.traverse(M=>{!p&&M.name===g&&!M.isBone&&(p=M)}),p&&l(p,m)}if(this.all)return;let h=Ct.props||[],u=h.includes(t.h)&&h.includes(t.x)?n.x[t.h+"|"+t.x]:void 0,f=Yh[t.g];for(let g of[t.h,t.x]){let m=t.r&&g&&(g===t.h||!t.h),p=m&&n.r?n.r[t.r+"|"+g]:void 0,M=m&&f?f.t[t.r+"|"+g]:void 0,T=m&&f&&f.b?f.b[t.r+"|"+g]:void 0;if(!p&&!M&&!T)continue;let y=null;if(this.root.traverse(v=>{!y&&v.name===g&&!v.isBone&&(y=v)}),!!y){if(p&&p.length===3)l(y,p);else if(p&&y.parent===e){let v=new L().fromArray(n.c),A=new L(p[0],p[1],p[2]);if(y.position.sub(v).multiply(A).add(v),y.position.y+=p[3],y.position.z+=p[4],y.scale.multiply(A),p[5]){let E=new dt().setFromEuler(new rn(p[5],0,0));y.position.sub(v).applyQuaternion(E).add(v),y.quaternion.premultiply(E)}}M&&(this.root.updateMatrixWorld(!0),Sp(y,e,f.c,M)),T&&(this.root.updateMatrixWorld(!0),Sp(y,e,f.c,T,!0))}}let d=u;if(d===void 0)return;let b=null;this.root.traverse(g=>{!b&&g.name===t.x&&!g.isBone&&(b=g)}),b&&(d===0?b.visible=!1:l(b,d))}async tuck(){let e=this.look,t=ef[e.g],n=this.bones.Head,s=Jh[e.g];if(this.all||!t||!n||!s||!s.c||!e.h)return;let r=!!e.r&&t.r.includes(e.h+"|"+e.r),a=!!e.x&&t.b.includes(e.h+"|"+e.x),o=e.x?t.x[e.h+"|"+e.x]:null;if(!r&&!a&&!o)return;let l=x=>{let w=null;return this.root.traverse(R=>{!w&&R.name===x&&!R.isBone&&(w=R)}),w},c=new L().fromArray(s.c);if(o){let x=l(e.x);if(x&&x.parent===n){let w=Math.PI/180,R=new dt().setFromEuler(new rn(o[0]*w,o[1]*w,o[2]*w,"ZYX"));x.position.sub(c).applyQuaternion(R).add(c),x.quaternion.premultiply(R)}}if(!r&&!a)return;let h=l(e.h);if(!h)return;this.root.updateMatrixWorld(!0);let u=new we().copy(n.matrixWorld).invert(),f=new L().setFromMatrixScale(n.matrixWorld).x||1,d=s.c,b=e.g+"|"+e.h+"|"+(e.r||""),g=zi.get(b);g||zi.set(b,g=_v(h,u,.004/f,d).then(x=>(zi.set(b,x),x))),g instanceof Promise&&(g=await g);let m=new we,p=new we,M=new L,T=async(x,w,R)=>{let C=zi.get(R);if(C===void 0){let D=x.geometry.attributes.position,F=new Float32Array(D.count*3);for(let I=0;I<D.count;I++)M.fromBufferAttribute(D,I).applyMatrix4(m),F[3*I]=M.x,F[3*I+1]=M.y,F[3*I+2]=M.z;if(await E(),Yd(F,d,w)){await E(),p.copy(m).invert();for(let I=0;I<D.count;I++)M.set(F[3*I],F[3*I+1],F[3*I+2]).applyMatrix4(p),F[3*I]=M.x,F[3*I+1]=M.y,F[3*I+2]=M.z;C=F}else C=null;zi.set(R,C)}return C},y=(x,w)=>{let R=x.clone();return R.setAttribute("position",new rt(w,3)),R.boundingSphere=null,R.computeBoundingBox(),R.computeBoundingSphere(),R},v=async(x,w,R,C)=>{let D=x.geometry,F=await T(x,w,R),I=C&&x.children.some(H=>H.userData.line)?await T(x,C,R+"|line"):null;if(!F&&!I)return;await E();let B=F?y(D,F):D,z=I?y(D,I):B;for(let H of[x,...x.children])if(H===x||H.geometry===D){let te=H.userData.line?z:B;te!==D&&(H.geometry=te,H.userData.bent=!0)}},A=performance.now(),E=async()=>{performance.now()-A>bf&&(await Fc(),A=performance.now())};if(r){let x=t.w&&t.w[e.h+"|"+e.r]||1,w=g.hair||(g.hair=Qh(g,x,.002/f));await E();let R=g.line||(g.line=Qh(g,x,(.002+.008)/f));await E();for(let C of this.meshes){if(!C.isSkinnedMesh||C.userData.part!==e.r)continue;let D=C.skeleton.bones.indexOf(n);D<0||(m.multiplyMatrices(C.skeleton.boneInverses[D],C.bindMatrix),await v(C,w,"r|"+b+"|"+C.geometry.uuid,R),await E())}}if(a){let x=l(e.x);if(!x)return;let w=g.band||(g.band=$h(g.lo,3,.011/f));await E();let R=[];x.traverse(C=>{C.isMesh&&!C.isSkinnedMesh&&!C.userData.line&&C.geometry&&C.geometry.attributes.position&&R.push(C)});for(let C of R)m.multiplyMatrices(u,C.matrixWorld),await v(C,w,"b|"+b+"|"+e.x+"|"+C.geometry.uuid),await E()}}cuffs(){let e=this.look,t=Mt["m-wai"],n=this.bones,s=5e-4,r=/^(Left|Right)(Arm|ForeArm|Hand)$/;if(this.all||!e.u||!t||!n.Spine2||!n.LeftArm)return;let a=this.meshes.filter(c=>c.isSkinnedMesh&&c.userData.part===e.u),o=c=>"c|"+e.g+"|"+e.z+"|"+e.u+"|"+c.geometry.uuid,l=a.filter(c=>zi.get(o(c))===void 0);if(l.length){let c=this.held,h=this.turn;this.held=[],this.turn=0,this.at("m-wai",t.still),this.root.updateMatrixWorld(!0);let u=new L,f=new L,d=new L,b=new we,g=new we,m=new we;n.Spine2.getWorldPosition(u),f.setFromMatrixColumn(n.Spine2.matrixWorld,0).normalize();let p=Math.sign(n.LeftArm.getWorldPosition(d).sub(u).dot(f))||1;for(let M of l){let T=M.geometry,y=T.attributes.position,v=T.attributes.skinIndex,A=T.attributes.skinWeight,E=M.skeleton.bones,x=M.skeleton.boneInverses,w=E.map(C=>{let D=C.name.replace(/^mixamorig:?/,"");return r.test(D)?D[0]==="L"?p:-p:0}),R=null;m.multiplyMatrices(M.matrixWorld,M.bindMatrixInverse);for(let C=0;C<y.count;C++){let D=-1,F=0;for(let z=0;z<4;z++){let H=A.getComponent(C,z);H>F&&(F=H,D=v.getComponent(C,z))}let I=w[D];if(!I)continue;M.getVertexPosition(C,d).applyMatrix4(M.matrixWorld);let B=s-I*d.sub(u).dot(f);if(!(B<=0)){b.elements.fill(0);for(let z=0;z<4;z++){let H=A.getComponent(C,z);if(!H)continue;let te=v.getComponent(C,z);g.multiplyMatrices(E[te].matrixWorld,x[te]);for(let q=0;q<16;q++)b.elements[q]+=H*g.elements[q]}if(b.premultiply(m).multiply(M.bindMatrix).setPosition(0,0,0).invert(),!R){R=new Float32Array(y.count*3);for(let z=0;z<y.count;z++)d.fromBufferAttribute(y,z),R[3*z]=d.x,R[3*z+1]=d.y,R[3*z+2]=d.z}d.copy(f).multiplyScalar(I*B).applyMatrix4(b),R[3*C]+=d.x,R[3*C+1]+=d.y,R[3*C+2]+=d.z}}zi.set(o(M),R)}this.held=c,this.turn=h,this.at("",0)}for(let c of a){let h=zi.get(o(c)),u=c.geometry;if(!h)continue;let f=u.clone();f.setAttribute("position",new rt(h,3)),f.boundingSphere=null,f.computeBoundingBox(),f.computeBoundingSphere();for(let d of[c,...c.children])(d===c||d.geometry===u)&&(d.geometry=f,d.userData.bent=!0)}}tall(e){let t=this.bones;t.Hips&&(t.Hips.position.y*=1+(e-1)*1);for(let n of dy)t[n]&&t[n].position.multiplyScalar(e);for(let n of["LeftUpLeg","RightUpLeg"])t[n]&&(t[n].position.y*=e);this.rest()}rest(){let e=this.bones;this.root.updateMatrixWorld(!0),this.q0={},this.p0={},this.frame(),fa(this,oa,1),this.root.updateMatrixWorld(!0),this.frame();for(let t of this.grips||[])t.userData.rest=lf(this.root,t.parent,new dt);for(let t of this.tossed||[])t.p0||(t.p0=t.node.position.clone(),t.q0=t.node.quaternion.clone());for(let t of this.alive||[]){let n=lf(this.root,t.node.parent,new dt).invert();t.q0||(t.q0=t.node.quaternion.clone(),t.p0=t.node.position.clone()),t.axis={up:new L(0,1,0),ahead:new L(0,0,1),side:new L(1,0,0)};for(let s in t.axis)t.axis[s].applyQuaternion(n)}}frame(){let e=this.bones;this.A={};for(let t in e){let n=e[t];this.q0[t]=n.quaternion.clone(),this.p0[t]=n.position.clone();let s=new dt;n.parent&&n.parent.getWorldQuaternion(s);let r=new dt;this.root.getWorldQuaternion(r),this.A[t]=r.invert().multiply(s).invert()}}busyHand(){return this.busy==null&&(this.busy=!!(this.held.length&&this.moveProps.some(e=>e.parent===this.held[0].parent))),this.busy}at(e,t,n){let s=this.bones;for(let g of this.grown)g.matrixAutoUpdate=!0;this.grown.length=0;for(let g in s)s[g].quaternion.copy(this.q0[g]),s[g].position.copy(this.p0[g]),s[g].scale.setScalar(g==="Head"||g==="HairLow"?pa:1);this.root.position.set(0,0,0),this.root.rotation.set(0,this.turn||0,0),this.root.scale.set(1,1,1);let r=e&&Mt[e],a=r?Math.min(t,r.ms)/r.ms:0,o=!!(r&&r.stow&&this.held&&this.held.length),l=!o&&r&&r.held&&this.held&&this.held.length&&!(us[e]&&this.moveProps&&this.moveProps.length&&this.busyHand())?r.held:null,c=r?l?l(a,t):r.at(a,t,this.look):ca(t),h=!!(r&&this.moveProps&&this.moveProps.length&&us[e]),u=h?Fy(a,us[e][0]==="e",n):1;this.moveProps&&this.moveProps.forEach(g=>{g.visible=h&&u>.05,g.scale.setScalar((g.userData.s0||1)*Math.max(.001,u))});let f=this.holdTable||Hd,d=g=>r&&f[e]&&f[e][g]||f[""]&&f[""][g];if(this.held&&this.held.length){let g=h&&this.busyHand(),m=r?a*r.ms:0;for(let p of this.held){let M=o?0:g?1-u:this.hideNone?1:zy(r&&f[e]&&f[e][p.userData.id],m,r&&r.ms);p.visible=M>.05,p.scale.setScalar(Math.max(.001,M))}}let b=r&&!l?1-Ny(a):1;if(b>0&&this.held&&this.held.length){let g=c.RightArm||[0,0,0];c=Object.assign({},c,{RightArm:[g[0],g[1],g[2]-Oy*b]})}if(this.glasses&&this.glasses.forEach(g=>{g.visible=!h||us[e][0]!=="e"||u<=.05}),this.looks(r&&Vd[e]||"",r?Uy(a):0,r||this.blinks?t:1e3),fa(this,c,1),this.root.updateMatrixWorld(!0),this.grips&&this.grips.length){for(let g of this.grips){let m=this.tiltNow||ky(d(g.userData.id),a);ap.setFromUnitVectors(Gy,Hy.set(m[0],m[1],m[2]).normalize()),g.quaternion.copy(lf(this.root,g.parent,Wy).invert().multiply(ap).multiply(g.userData.rest))}this.root.updateMatrixWorld(!0)}if(this.tossed&&this.tossed.length){let[g,m]=h&&c.toss||[0,0];for(let p of this.tossed){if(!p.p0||(p.node.position.copy(p.p0),p.node.quaternion.copy(p.q0),!g&&!m))continue;let M=p.node.parent,T=M.localToWorld(Ip.copy(p.p0));T.y+=g,p.node.position.copy(M.worldToLocal(T)),this.root.getWorldQuaternion(cf),hp.set(1,0,0).applyQuaternion(cf).applyQuaternion(M.getWorldQuaternion(cf).invert()).normalize(),p.node.quaternion.setFromAxisAngle(hp,m*it).multiply(p.q0)}this.root.updateMatrixWorld(!0)}if(this.alive&&this.alive.length&&this.alive[0].axis){let g=this.blinks?performance.now()/1e3:0;for(let m of this.alive){let[p,M,T]=nf[m.kind],y=this.phase!=null?this.phase:2*Math.PI*T*m.k[1]*g;m.node.position.copy(m.p0),m.kind==="bob"&&m.node.position.addScaledVector(m.axis.up,.007*Math.sin(y));let v=M?M*m.k[0]*it*(m.kind==="sway"?Math.sin(y):(1-Math.cos(y))/2):y;m.node.quaternion.setFromAxisAngle(m.axis[p],m.kind==="bob"?0:v).multiply(m.q0),m.kept&&m.node.scale.setScalar(1/this.root.scale.x)}this.root.updateMatrixWorld(!0)}}looks(e,t,n){if(!this.face.length)return;let s={};for(let r of String(e||"").split(" "))for(let a of Dy[r]||[])s[a]=Math.max(s[a]||0,t);if(!e){let r=n%3600,a=r<150?Math.sin(r/150*Math.PI):0;s["blink-L"]=s["blink-R"]=a}for(let r of this.face){let a=r.morphTargetDictionary,o=r.morphTargetInfluences;for(let l in a)o[a[l]]=s[l]||0}}dispose(){this.root&&this.root.traverse(e=>{e.userData&&e.userData.bent&&e.geometry&&e.geometry.dispose()}),this.root.traverse(e=>{e.isMesh&&e.material&&(e.material.dispose(),e.geometry&&e.geometry.index&&e.material.name==="skin"&&e.geometry.dispose())}),this.root.removeFromParent()}},Dy={happy:["happy-L","happy-R"],wink:["happy-R"],open:["open"],tongue:["tongue"],puff:["puff"],dizzy:["blink-L","blink-R"]},of=1-.03-.22;function Fy(i,e,t){let n=h=>(h=h<0?0:h>1?1:h,h*h*(3-2*h)),s=!t||t.first,r=t?t.off:0,a=s?e?i>0?1:0:n((i-.03)/.12):1;if(r==null)return a;if(e)return i<1?a:0;let o=Math.min(r,.999),l=o>of?of+(i-o)*(1-of)/(1-o):i,c=n((1-l-.03)/.22);return a*c*c}function Ny(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.1)*e((1-i)/.1)}function Uy(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.12)*e((1-i)/.12)}var Oy=18,By={"a-balloon":16,"a-candy":-10,"a-krathong":10};function ky(i,e){let t=i&&i.d;if(!t||!t.length)return Vy;let n=0;for(;n<t.length-1&&t[n+1][0]<=e;)n++;let s=t[n],r=t[Math.min(n+1,t.length-1)],a=r[0]>s[0]?Math.min(1,Math.max(0,(e-s[0])/(r[0]-s[0]))):0,o=s[1]?s[2]:r[2],l=r[1]?r[2]:s[2],c=(s[1]+(r[1]-s[1])*a)*it,h=(o+(l-o)*a)*it;return[-Math.sin(c)*Math.cos(h),Math.cos(c),Math.sin(c)*Math.sin(h)]}function zy(i,e,t){let n=i&&i.hide;if(!n)return 1;let s=1;for(let[r,a]of n){let o=Math.max(1,Math.min(rp,r)),l=Math.max(1,Math.min(rp,(t||1/0)-a)),c=e<r?(r-e)/o:e>a?(e-a)/l:0,h=c>=1?1:c*c*(3-2*c);h<s&&(s=h)}return s}var rp=120,Gy=new L(0,1,0),Vy=[0,1,0],ap=new dt,Hy=new L,op=new dt,cp=new rn,Wy=new dt,lp=new dt,cf=new dt,Ip=new L,hp=new L;function lf(i,e,t){return i.getWorldQuaternion(lp),e.getWorldQuaternion(t),t.premultiply(lp.invert())}var it=Math.PI/180;function fa(i,e,t){let n=i.bones;for(let s in e){let r=n[s];if(!r)continue;let a=e[s];cp.set(a[0]*it*t,a[1]*it*t,a[2]*it*t,"YXZ"),op.setFromEuler(cp);let o=i.A[s];r.quaternion.copy(o).multiply(op).multiply(o.clone().invert()).multiply(i.q0[s])}e.root&&i.root.position.set(e.root[0]||0,e.root[1]||0,e.root[2]||0),e.turn&&(i.root.rotation.y+=e.turn*it),e.tilt&&(i.root.rotation.x=(e.tilt[0]||0)*it,i.root.rotation.z=(e.tilt[1]||0)*it),e.size&&i.root.scale.set(e.size[0],e.size[1],e.size[2]),e.grow&&Xy(i,e.grow)}var fp=new we,qy=new we;function Xy(i,e){for(let t in e){let n=i.bones[t];if(n){up(i,e,n);for(let s=0;s<n.children.length;s++)up(i,e,n.children[s])}}}function up(i,e,t){if(i.grown.includes(t))return;let n=dp(i,e,t),s=dp(i,e,t.parent);!n&&!s||(t.matrix.makeTranslation(t.position.x,t.position.y,t.position.z),s&&t.matrix.multiply(fp.makeScale(1/s[0],1/s[1],1/s[2])),t.matrix.multiply(qy.compose(Ip.set(0,0,0),t.quaternion,t.scale)),n&&t.matrix.multiply(fp.makeScale(n[0],n[1],n[2])),t.matrixAutoUpdate=!1,i.grown.push(t))}function dp(i,e,t){if(t){for(let n in e)if(i.bones[n]===t)return e[n]}return null}var Zt=null,bt=null,ps=null,On=null,$n=null,ua=null;function hw(){if(ua!==null)return!ua;try{ua=!Vi().getContext()}catch{ua=!0}return!ua}function Vi(){if(Zt)return Zt;Zt=new mc({antialias:!0,alpha:!0,powerPreference:"default",preserveDrawingBuffer:!1}),Zt.outputColorSpace=_t,Zt.toneMapping=jr,Zt.toneMappingExposure=.92,Zt.setClearColor(0,0);let i=Zt.render;Zt.render=function(n,s){i.call(this,n,s),Mf()},bt=new Qi,bt.environmentIntensity=.42,bt.add(new Vr(16774378,12167062,.95));let e=new Ni(16772829,1.9);e.position.set(1.6,3.2,3),bt.add(e);let t=new Ni(16777215,.9);return t.position.set(-1.2,2.6,-2.4),bt.add(t),ps=new St(18,.5,.1,30),On=new St(18,.5,.1,30),$n=new St(18,1,.01,10),Zt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),Nt=!0,window.dispatchEvent(new Event("c3-lost"))}),Zt.domElement.addEventListener("webglcontextrestored",()=>{Nt=!1,bt.environment&&(bt.environment=Lp()),window.dispatchEvent(new Event("c3-back"))}),Zt}function Lp(){let i=new ar(Zt),e=i.fromScene(new Mc,.04).texture;return i.dispose(),e}function Dp(){bt.environment||(bt.environment=Lp())}var Nt=!1,ms={low:-.04,high:1.42},bs={side:.18,top:.16};function Fp(i,e,t,n){let s=ms.high-ms.low,r=n||{};i.aspect=e/t,i.fov=r.fov||18;let a=s/2/Math.tan(i.fov*it/2)/(r.zoom||1),o=r.y!=null?r.y:(ms.low+ms.high)/2,l=r.x||0;i.position.set(l,o+(r.up!=null?r.up:.1),a),i.lookAt(l,o,0),i.updateProjectionMatrix()}var pp={head:["Head",.226*pa,1.55/pa],chest:["Spine2",0,2.3]};function jy(i,e){let[t,n,s]=pp[e]||pp.head,r=new L;return i.bones[t]&&i.bones[t].getWorldPosition(r),{y:r.y+n,zoom:s,up:.02}}var fn=new Map;async function yf(i){let e=xa(i),t=fn.get(e);if(t)return fn.delete(e),fn.set(e,t),t;let n=[Gt&&Gt.fig,ur].find(s=>s&&s.lookKey===e);if(n)n.gone=!1,t=Promise.resolve(n);else{let s=new pf(i);s.lookKey=e,t=s.build()}for(fn.set(e,t),t.catch(()=>{fn.get(e)===t&&fn.delete(e)});fn.size>4;){let[s,r]=fn.entries().next().value;fn.delete(s),r.then(a=>{a.gone=!0,Gi(a)},()=>{})}return t}function Gi(i){i.gone&&!i.using&&!(Gt&&Gt.fig===i)&&i!==ur&&i.dispose()}var ur=null;function Ky(i){let e=ur;ur=i,e&&e!==i&&Gi(e)}var mp=null;function dr(i,e,t){let n=Vi();if(!n.compileAsync||Nt)return t?xp():Promise.resolve();let s=n.getRenderTarget(),r=null;try{t&&n.setRenderTarget(mp||(mp=new Wt(1,1))),r=n.compileAsync(i,e,bt)}catch{}n.setRenderTarget(s),Mf();let a=0,o=Promise.race([Promise.resolve(r).catch(()=>{}).then(()=>iv(n)),new Promise(l=>{a=setTimeout(l,4e3)})]).then(()=>clearTimeout(a));return t?o.then(xp):o}var gs=new Map,Sn=[],Rc=!1;function Jy(i,e,t,n){return new Promise((s,r)=>{let a={key:i,job:e,ok:s,no:r,low:n};if(t)Sn.unshift(a);else if(n)Sn.push(a);else{let o=Sn.findIndex(l=>l.low);o<0?Sn.push(a):Sn.splice(o,0,a)}Np()})}function Np(){Rc||!Sn.length||(Rc=!0,Zy(Sn[0]&&Sn[0].low?1200:160).then(()=>{let i=Sn.shift();if(!i){Rc=!1;return}let e=0,t=new Promise((n,s)=>{e=setTimeout(()=>s(new Error("too long")),2e4)});Promise.race([Promise.resolve().then(i.job),t]).then(i.ok,i.no).then(()=>{clearTimeout(e),Rc=!1,Np()})}))}function Yy(i){let e=Sn.findIndex(t=>t.key===i);e>0&&Sn.unshift(Sn.splice(e,1)[0])}var Up=0;["pointerdown","pointermove","touchstart","touchmove","wheel","scroll","keydown"].forEach(i=>{window.addEventListener(i,()=>{Up=performance.now()},{capture:!0,passive:!0})});var Op=0;function fw(i){Op=i?performance.now()+18e4:0}var Nc=0;function uw(i){Nc=Math.max(Nc,performance.now()+(i||600))}var Zy=(i=160)=>new Promise(e=>{let t=()=>{let n=Math.max(Op,Nc)-performance.now();if(n>0){setTimeout(t,Math.min(n,250));return}let s=performance.now()-Up;s>=i?e():setTimeout(t,i-s)};window.requestIdleCallback?requestIdleCallback(t,{timeout:150}):setTimeout(t,16)});function kc(i,e,t,n,s){if(gs.has(i))return t&&Yy(i),gs.get(i);let r=Promise.resolve(gf&&dv(i)).then(a=>a?gp(a,!1).catch(()=>null):null).then(a=>a||Promise.resolve(n&&n()).catch(()=>{}).then(()=>Jy(i,e,t,s)).then(o=>o&&o.later?o.later:o).then(o=>gp(o,!0).then(l=>(gf&&pv(i,o),l))));return gs.set(i,r),r.catch(()=>gs.delete(i)),r}var Uc=!1;function gp(i,e){if(!i||!i.size)return Promise.reject(new Error("no picture"));if(Uc)return bp(i).then(hf);let t=URL.createObjectURL(i);return hf(t).catch(n=>{if(URL.revokeObjectURL(t),!e)throw n;return Uc=!0,bp(i).then(hf)})}function hf(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>n.naturalWidth?e(i):t(new Error("empty picture")),n.onerror=()=>t(new Error("picture")),n.src=i})}function bp(i){return new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(n.result),n.onerror=()=>t(n.error||new Error("picture")),n.readAsDataURL(i)})}function dw(i){String(i).slice(0,5)==="blob:"&&(Uc=!0);for(let[e,t]of gs)t.then(n=>{(n===i||Uc&&String(n).slice(0,5)==="blob:")&&gs.delete(e)},()=>{})}function _a(){return Math.min(3,window.devicePixelRatio||1)}function pw(i,e={}){let t=Object.assign({w:180,h:336,dpr:_a(),move:"",at:null,turn:-18},e);(t.focus||t.view)&&(t.bleed=!1);let n="v"+pr+":"+xa(i)+":"+(t.move||"")+(t.at!=null?"@"+t.at:"")+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+(t.focus?":"+t.focus:"")+(t.view?":"+JSON.stringify(t.view):"")+(t.bleed?":b"+bs.side+","+bs.top:"");return kc(n,()=>Qy(i,t),!!t.first,()=>Pp(i),!!t.low)}var mw=bs;async function Qy(i,e){if(Vi(),Nt)throw new Error("no graphics");let t=await yf(i);t.using=(t.using||0)+1;try{if(await dr(t.root,On,!0),Nt)throw new Error("no graphics");let n=new wt,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),bt.add(n),t.turn=e.turn*it;let o=e.move&&Mt[e.move];t.at(e.move,e.at!=null?e.at:o?o.still:0);let l=e.bleed?e.w*(1+2*bs.side):e.w,c=e.bleed?e.h*bs.top:0;Fp(On,l,e.h,e.focus?jy(t,e.focus):e.view),c&&On.setViewOffset(l,e.h,0,-c,l,e.h+c);let h;try{Bc(On,Math.round(e.h*e.dpr)),h=zc(n,On,Math.round(l*e.dpr),Math.round((e.h+c)*e.dpr))}finally{c&&On.clearViewOffset()}return t.turn=r,t.blinks=a,bt.remove(n),s&&s.add(t.root),h}finally{t.using--,Gi(t)}}function gw(i,e={}){let t=Object.assign({w:72,h:112,dpr:_a(),turn:-10},e),n=Bp(i),s="v"+pr+":h:"+xa(n)+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn;return kc(s,()=>$y(i,t),!1,()=>fn.has(xa(i))?null:Pp(n),!!t.low)}function Bp(i){return Object.assign({},i||{},{l:"",k:""})}async function $y(i,e){if(Vi(),Nt)throw new Error("no graphics");let t=await yf(fn.has(xa(i))?i:Bp(i));t.using=(t.using||0)+1;try{if(await dr(t.root,On,!0),Nt)throw new Error("no graphics");let n=new wt,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),bt.add(n),t.turn=e.turn*it,t.at("",0),ev(On,t,e),Bc(On,Math.round(e.h*e.dpr));let o=zc(n,On,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return t.turn=r,t.blinks=a,bt.remove(n),s&&s.add(t.root),o}finally{t.using--,Gi(t)}}function ev(i,e,t){let n=new L,s=new L;e.bones.Head.getWorldPosition(n),(e.bones.Neck||e.bones.Head).getWorldPosition(s);let r=s.y-.1,a=n.y+.73;i.aspect=t.w/t.h,i.fov=16;let o=(a-r)/2/Math.tan(i.fov*it/2),l=(r+a)/2;i.position.set(n.x,l+.04,n.z+o),i.lookAt(n.x,l,n.z),i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}function zc(i,e,t,n){let s=Vi(),r=new Wt(t,n,{samples:4,colorSpace:_t}),a=bt.children.filter(c=>c.isGroup&&c.visible&&c!==i);a.forEach(c=>{c.visible=!1}),s.setRenderTarget(r),s.clear(),s.render(bt,e),a.forEach(c=>{c.visible=!0}),s.setRenderTarget(null);let o=new Uint8Array(t*n*4);return{later:tv(s,r,t,n,o).then(()=>{if(r.dispose(),Nt||sv(o))throw new Error("empty picture");return cv(o,t,n)},c=>{throw r.dispose(),c})}}var ti=new Set,mf=[],gi=null,vf=0,Cc=0;function Mf(){if(!ti.size||!Zt)return;let i=Zt.getContext();gi&&i.deleteSync(gi),gi=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0),i.flush()}function tv(i,e,t,n,s){let r=i.getContext();return new Promise((a,o)=>{let l=null;try{i.state.bindFramebuffer(r.FRAMEBUFFER,i.properties.get(e).__webglFramebuffer),l=r.createBuffer(),r.bindBuffer(r.PIXEL_PACK_BUFFER,l),r.bufferData(r.PIXEL_PACK_BUFFER,s.byteLength,r.STREAM_READ),r.readPixels(0,0,t,n,r.RGBA,r.UNSIGNED_BYTE,0),r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}catch{l&&r.deleteBuffer(l),r.bindBuffer(r.PIXEL_PACK_BUFFER,null);try{i.readRenderTargetPixels(e,0,0,t,n,s),a()}catch(h){o(h)}return}finally{let c=i.getRenderTarget();i.state.bindFramebuffer(r.FRAMEBUFFER,c?i.properties.get(c).__webglFramebuffer:null)}ti.size||(vf=performance.now()),ti.add({buf:l,px:s,ok:a,no:o}),Mf(),nv()})}function kp(i){if(!ti.size)return!0;let e=Zt.getContext();if(Nt||e.isContextLost())return ti.forEach(t=>t.no(new Error("no graphics"))),ti.clear(),gi=null,mf.splice(0).forEach(t=>t()),!0;if(!i&&gi&&e.clientWaitSync(gi,0,0)===e.TIMEOUT_EXPIRED)return!1;for(let t of ti){try{e.bindBuffer(e.PIXEL_PACK_BUFFER,t.buf),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,t.px),t.ok()}catch(n){t.no(n)}e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.deleteBuffer(t.buf)}return ti.clear(),gi&&e.deleteSync(gi),gi=null,mf.splice(0).forEach(t=>t()),!0}function nv(){if(Cc)return;let i=()=>{Cc=0,kp(performance.now()-vf>3e3)||(Cc=setTimeout(i,4))};Cc=setTimeout(i,4)}function iv(i){if(i.extensions.has("KHR_parallel_shader_compile")||Nt)return Promise.resolve();let e=i.getContext(),t=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);return t?(e.flush(),new Promise(n=>{let s=()=>{if(!Nt&&e.clientWaitSync(t,0,0)===e.TIMEOUT_EXPIRED){setTimeout(s,10);return}e.deleteSync(t),n()};setTimeout(s,10)})):Promise.resolve()}function xp(){return ti.size?new Promise(i=>mf.push(i)).then(()=>new Promise(i=>setTimeout(i,0))):Promise.resolve()}function sv(i){for(let e=3;e<i.length;e+=4)if(i[e])return!1;return!0}var zp="image/webp",Gp=.92;function rv(){self.onmessage=i=>{let e=i.data;try{let t=e.W,n=e.H,s=new ImageData(t,n);for(let a=0;a<n;a++)s.data.set(e.px.subarray((n-1-a)*t*4,(n-a)*t*4),a*t*4);let r=self.board||(self.board=new OffscreenCanvas(t,n));r.width!==t&&(r.width=t),r.height!==n&&(r.height=n),r.getContext("2d").putImageData(s,0,0),r.convertToBlob({type:e.type,quality:e.q}).then(a=>self.postMessage({id:e.id,blob:a}),()=>self.postMessage({id:e.id}))}catch{self.postMessage({id:e.id})}}}var ei=null,Oc=new Map,av=0;function ov(){if(ei!==null)return ei;try{if(typeof Worker>"u"||typeof OffscreenCanvas>"u")throw new Error("no worker");ei=new Worker(URL.createObjectURL(new Blob(["("+rv+")()"],{type:"text/javascript"}))),ei.onmessage=i=>{let e=Oc.get(i.data&&i.data.id);e&&e(i.data)},ei.onerror=()=>{Vp()}}catch{ei=!1}return ei}function Vp(){if(ei)try{ei.terminate()}catch{}ei=!1,[...Oc.values()].forEach(i=>i({}))}function cv(i,e,t){let n=ov();return n?new Promise((s,r)=>{let a=++av,o=setTimeout(()=>l({}),8e3);function l(c){clearTimeout(o),Oc.delete(a),c.blob&&c.blob.size?s(c.blob):r(new Error("worker"))}Oc.set(a,l),n.postMessage({id:a,px:i,W:e,H:t,type:zp,q:Gp})}).catch(()=>(Vp(),yp(i,e,t))):yp(i,e,t)}var _p=null;function yp(i,e,t){let n=_p||(_p=document.createElement("canvas"));n.width!==e&&(n.width=e),n.height!==t&&(n.height=t);let s=n.getContext("2d",{willReadFrequently:!0}),r=s.createImageData(e,t);for(let a=0;a<t;a++)r.data.set(i.subarray((t-1-a)*e*4,(t-a)*e*4),a*e*4);return s.putImageData(r,0,0),new Promise((a,o)=>n.toBlob(l=>l&&l.size?a(l):o(new Error("picture")),zp,Gp))}function ff(i){return!!(Ct.things&&Ct.things[i])}var Pc=new Map;function ya(i){if(!Pc.has(i)){let e=ma("o/"+i+".glb").then(t=>{let n=new wt;if(n.add(t.scene),i.startsWith("p-")&&t.scene.traverse(a=>{!a.isMesh||a.userData.line||(a.material=ga(a.material),!a.material.transparent&&!Tp(a.material)&&Dc(a))}),lv.test(i))return n;let s=new At().setFromObject(t.scene,!0),r=Ap();return r.scale.set(Math.max(.03,(s.max.x-s.min.x)*1.3)/.75,Math.max(.02,(s.max.z-s.min.z)*1.3)/.48,1),r.position.y=5e-4,r.userData.aside=!0,n.add(r),n});Pc.set(i,e),e.catch(()=>Pc.delete(i))}return Pc.get(i)}var lv=/^(b|lv|ui|pr|fx|box|rm|sh|pz|rn|ar)-/,uf={side:.35,top:.12,foot:.12};function bw(i,e={}){let t=Object.assign({w:100,h:120,dpr:_a(),turn:-18,low:.07},e),n="v"+pr+":o:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+":"+t.low+(t.spin!=null?":s"+t.spin:"");return kc(n,()=>hv(i,t),!!t.first,()=>ya(i).catch(()=>{}),!!t.later)}async function hv(i,e){if(Vi(),Nt)throw new Error("no graphics");let t=await ya(i);i.startsWith("p-")||Dp();let n=new wt;if(n.rotation.y=(e.spin!=null?e.spin:e.turn)*it,n.add(t),await dr(n,$n,!0),Nt)throw new Error("no graphics");bt.add(n),uv($n,n,e),Bc($n,Math.round(e.h*e.dpr),$n.position.distanceTo(new At().setFromObject(n,!0).getCenter(Mn)),3e-4);let s=e.w,r=e.h;if(e.spin!=null){let o=Math.round(e.w*uf.side),l=Math.round(e.h*uf.top),c=Math.round(e.h*uf.foot);s=e.w+2*o,r=e.h+l+c,$n.setViewOffset(e.w,e.h,-o,-l,s,r),n.rotation.y=e.turn*it,n.updateMatrixWorld(!0)}let a;try{a=zc(n,$n,Math.round(s*e.dpr),Math.round(r*e.dpr))}finally{e.spin!=null&&$n.clearViewOffset()}return bt.remove(n),n.remove(t),a}function xw(i,e={}){let t=Object.assign({w:128,h:128,dpr:_a()},e),n="v"+pr+":e:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+(t.fov?"f"+t.fov:"");return kc(n,()=>fv(i,t),!1,()=>ya(i).catch(()=>{}))}async function fv(i,e){if(Vi(),Nt)throw new Error("no graphics");let t=await ya(i);Dp();let n=new wt;if(n.add(t),await dr(n,$n,!0),Nt)throw new Error("no graphics");bt.add(n),n.updateMatrixWorld(!0);let s=new At().setFromObject(n,!0),r=new At;n.traverse(f=>{f.isMesh&&f.material&&f.material.opacity===0&&r.expandByObject(f,!0)});let a=r.isEmpty()?s:r,o=a.getCenter(new L),l=a.getSize(new L),c=$n;c.aspect=e.w/e.h,c.fov=e.fov||8;let h=Math.max(l.y,l.x/c.aspect)/2/Math.tan(c.fov*it/2);c.position.set(o.x,o.y,o.z+h),c.lookAt(o),c.near=Math.max(.001,o.z+h-s.max.z-.01),c.far=o.z+h-s.min.z+1,c.updateProjectionMatrix(),c.updateMatrixWorld(!0);let u=zc(n,c,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return bt.remove(n),n.remove(t),u}var vp=10*it,Mn=new L;function uv(i,e,t){let n=Math.tan(i.fov*it/2),s=t.w/t.h;e.updateMatrixWorld(!0);let r=new At().setFromObject(e,!0).getCenter(new L),a=new L(0,Math.sin(vp),Math.cos(vp));i.position.copy(r).addScaledVector(a,10),i.lookAt(r),i.updateMatrixWorld(!0);let o=i.matrixWorldInverse,l=1/0,c=-1/0,h=1/0,u=-1/0,f=-1/0;e.traverse(v=>{if(!v.isMesh||v.userData.aside)return;let A=v.geometry.getAttribute("position");for(let E=0;E<A.count;E++)Mn.fromBufferAttribute(A,E).applyMatrix4(v.matrixWorld).applyMatrix4(o),Mn.x<l&&(l=Mn.x),Mn.x>c&&(c=Mn.x),Mn.y<h&&(h=Mn.y),Mn.y>u&&(u=Mn.y),Mn.z>f&&(f=Mn.z)});let g=Math.max((u-h)/(2*n*(1-t.low-.04)),(c-l)/(2*n*s*(1-2*.05))),m=g+(f+10),p=(l+c)/2,M=h+(1-2*t.low)*g*n,T=new L(1,0,0).applyQuaternion(i.quaternion),y=new L(0,1,0).applyQuaternion(i.quaternion);i.position.copy(r).addScaledVector(a,m).addScaledVector(T,p).addScaledVector(y,M),i.aspect=s,i.near=Math.max(.001,g*.3),i.far=m*3+1,i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}var Ic=null;function Hp(){return Ic||(Ic=new Promise(i=>{try{let e=indexedDB.open("seoulful-3d",1);e.onupgradeneeded=()=>e.result.createObjectStore("stills"),e.onsuccess=()=>{i(e.result),setTimeout(()=>mv(e.result),6e3)},e.onerror=()=>i(null)}catch{i(null)}}),Ic)}function dv(i){return Hp().then(e=>e&&new Promise(t=>{try{let n=e.transaction("stills").objectStore("stills").get(i);n.onsuccess=()=>{let s=n.result;t(s&&s.bytes?new Blob([s.bytes],{type:s.type||"image/png"}):null)},n.onerror=()=>t(null)}catch{t(null)}}))}function pv(i,e){Promise.all([Hp(),new Response(e).arrayBuffer()]).then(([t,n])=>{if(t)try{t.transaction("stills","readwrite").objectStore("stills").put({bytes:n,type:e.type},i)}catch{}},()=>{})}function mv(i){try{let e=i.transaction("stills","readwrite").objectStore("stills"),t="v"+pr+":",n=e.openKeyCursor?e.openKeyCursor():e.openCursor();n.onsuccess=()=>{let s=n.result;s&&(String(s.key).indexOf(t)!==0&&e.delete(s.key),s.continue())}}catch{}}function Lc(i){let e=0,t=0;for(let n=i;n;n=n.offsetParent)e+=n.offsetLeft,t+=n.offsetTop;return[e,t]}var Mp=.06,gv=-6*it;function ds(i,e){for(let t=1;t<e.length;t++)if(i<=e[t][0]){let[n,s]=e[t-1],[r,a]=e[t],o=(i-n)/(r-n);return s+(a-s)*o*o*(3-2*o)}return e[e.length-1][1]}var ba={1:[1.2,i=>({sx:ds(i,[[0,1],[.3,1.12],[.6,.95],[1,1]]),sy:ds(i,[[0,1],[.3,.9],[.6,1.08],[1,1]])})],2:[1.1,i=>({ry:2*Math.PI*ds(i,[[0,0],[1,1]]),y:.14*Math.sin(Math.PI*i)})],3:[1,i=>({y:ds(i,[[0,0],[.4,.36],[.7,0],[1,0]]),sx:ds(i,[[0,1],[.4,1.05],[.7,1.08],[1,1]]),sy:ds(i,[[0,1],[.4,1.05],[.7,.92],[1,1]])})],4:[1.4,i=>({rz:it*ds(i,[[0,0],[.2,-12],[.4,12],[.6,-10],[.8,10],[1,0]])})]};ba[5]=[2.4,(i,e)=>e<1?ba[3][1](e):ba[4][1]((e-1)/1.4)];var Gt=null,bv=0;function xv(i,e){let t=e-i.t0,n=i.move&&Mt[i.move];return n&&t>n.ms&&(i.loop?(i.t0=e,t=0,i.lap=(i.lap||0)+1,i.offAt=null):(i.move="",i.done&&i.done())),i.move?(i.loop?i.offAt=null:i.offAt==null&&(i.offAt=Math.min(t,n.ms)/n.ms),[t,{first:!i.lap,off:i.offAt}]):[e,null]}function _w(i,e,t={}){let n=Vi();Gt&&Gt.stop();let s={n:++bv,el:i,fig:null,move:"",t0:0,loop:!!t.loop,turn:(t.turn!=null?t.turn:-12)*it,turn0:(t.turn!=null?t.turn:-12)*it,seen:!0,dpr:_a(),slow:0,frames:0,pet:null,petId:"",petEl:null,petParts:[],trick:0,trickT0:0,drawnAt:0,lap:0,offAt:0};Gt=s;let r=new wt;bt.add(r);let a=new wt;bt.add(a);let o=n.domElement;o.className="c3-live";let l=()=>[Math.round((i.clientWidth||200)*bs.side),Math.round((i.clientHeight||320)*bs.top)];o.style.left=-l()[0]+"px",o.style.top=-l()[1]+"px",o.style.transition="none",o.style.opacity=t.fadeIn?"0":"",i.appendChild(o);let c=new Ne,h=()=>{if(!i.isConnected||!i.clientWidth){s.unlaid=!0;return}let w=s.unlaid;s.unlaid=!1;let R=i.clientWidth,C=i.clientHeight||320,[D,F]=l(),I=-D,B=R+2*D,z=s.petEl&&s.petEl.isConnected&&s.petEl.offsetWidth&&(s.pet||s.petId&&ff(s.petId))?s.petEl:null;if(z){let $=Lc(z)[0]-Lc(i)[0];I=Math.floor(Math.min(I,$)),B=Math.ceil(Math.max(R+D,$+z.offsetWidth))-I}let H=C+F;n.getSize(c);let te=c.x!==B||c.y!==H||n.getPixelRatio()!==s.dpr;te&&n.setDrawingBufferSize(B,H,s.dpr),o.style.left!==I+"px"&&(o.style.left=I+"px"),o.style.top!==-F+"px"&&(o.style.top=-F+"px"),o.style.width!==B+"px"&&(o.style.width=B+"px"),o.style.height!==H+"px"&&(o.style.height=H+"px");let q=t.view||{},Y=(ms.high-ms.low)/C;Fp(ps,B,C,Object.assign({},q,{x:(I+B/2-R/2)*Y/(q.zoom||1)})),ps.setViewOffset(B,C,0,-F,B,H),s.linePx=Math.round(C*s.dpr),z&&s.pet&&u(z,R,C,Y),a.visible=!!(z&&s.pet),(te||w)&&s.fig&&Gt===s&&!Nt&&T(performance.now())},u=(w,R,C,D)=>{let F=s.pet,I=F.userData.big,[B,z]=Lc(i),[H,te]=Lc(w),q=w.offsetWidth,Y=w.offsetHeight,$=te-z+Y*(1-Mp),ve=Math.min(Y*(1-Mp-.04)*D/I.y,q*.9*D/I.x);F.userData.at={x:(H-B+q/2-R/2)*D,y:ms.low+(C-$)*D,z:.06,s:ve,h:I.y}};t.pet&&t.pet.id&&t.pet.el&&ff(t.pet.id)&&(s.petEl=t.pet.el,s.petId=t.pet.id),h(),n.setRenderTarget(null),n.clear();let f="IntersectionObserver"in window?new IntersectionObserver(w=>{s.seen=w[0].isIntersecting}):null;f&&f.observe(i);let d="ResizeObserver"in window?new ResizeObserver(h):null;d&&d.observe(i);let b=null,g=w=>{w.pointerType==="mouse"&&w.preventDefault(),b={x:w.clientX,t:s.turn}},m=w=>{b&&(s.turn=b.t+(w.clientX-b.x)*.012)},p=()=>{b=null};t.drag&&(i.addEventListener("pointerdown",g),window.addEventListener("pointermove",m),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p));let M=0,T=w=>{let R=s.fig,C=s.move&&Mt[s.move];if(C&&C.lie&&!b){let I=s.turn0-s.turn,B=1-Math.exp(-Math.min(200,Math.max(0,w-s.drawnAt))/130);s.turn+=(I-2*Math.PI*Math.round(I/(2*Math.PI)))*B}s.drawnAt=w,R.turn=s.turn;let[D,F]=xv(s,w);R.at(s.move,D,F),s.pet&&y(w),Bc(ps,s.linePx||n.domElement.height),n.render(bt,ps)},y=w=>{let R=s.pet,C=R.userData.at,D=R.children[0];if(!C){R.visible=!1;return}R.visible=!0;let F=(1-Math.cos(w/1e3*2*Math.PI/3.2))/2,I=.028*F,B=1,z=1+.02*F,H=0,te=0;if(s.trick){let Fe=(w-s.trickT0)/1e3,[Ue,j]=ba[s.trick];if(Fe>=Ue)s.trick=0;else{let Z=j(Fe/Ue,Fe);I+=Z.y||0,B*=Z.sx||1,z*=Z.sy||1,H+=Z.rz||0,te+=Z.ry||0}}R.position.set(C.x,C.y,C.z),R.scale.setScalar(C.s),R.rotation.set(0,s.turn+gv,0),D.position.set(0,I*C.h,0),D.scale.set(B,z,B),D.rotation.set(0,te,H);let q=w/1e3,Y=s.trick?1:0,$=q%4.6/4.6,ve=$<.92?1:$<.95?1-.9*($-.92)/.03:.1+.9*($-.95)/.05,me=(1-Math.cos(q*2*Math.PI/3.4))/2,Ke=Y?(1-Math.cos(q*2*Math.PI/.28))/2:0;for(let[Fe,Ue,j]of s.petParts)Ue==="blink"?Fe.scale.y=ve:Ue==="wag"?Fe.rotation.z=(Y?16:9)*it*Math.sin(q*2*Math.PI/(Y?.45:1.1)):Ue==="ear"?Fe.rotation.z=-j*it*(5*me+10*Ke):Ue==="wing"&&(Fe.rotation.z=j*it*(8*me+26*Ke))},v=w=>{if(Gt!==s||!s.seen||document.hidden||!s.fig||Nt)return;let R=s.fig.turn!==s.turn;if(ti.size&&!R){kp(performance.now()-vf>3e3);return}let C=!!s.move||b||!!s.trick||R;if(!C&&(w-M<30||w<Nc))return;let D=w-M;if(M=w,s.frames++>20&&D>40&&C&&s.slow++,s.slow>30&&s.dpr>1){s.dpr=Math.max(1,s.dpr*.75),s.slow=0,h();return}T(w)};n.setAnimationLoop(v);let A=0,E=null,x=null;return s.ready=new Promise((w,R)=>{E=w,x=R}),s.ready.catch(()=>{}),s.set=w=>{let R=++A;return yf(w).then(C=>(C.using=(C.using||0)+1,dr(C.root,ps,!1).then(()=>{if(C.using--,Gt!==s||R!==A){Gi(C);return}let D=s.fig;r.clear(),r.add(C.root),s.fig=C,C.stageN!==s.n&&(C.stageN=s.n,C.stages=(C.stages||0)+1),C.blinks=!0,D&&D!==C&&Gi(D),Nt||T(performance.now()),o.style.opacity==="0"&&(o.style.transition="opacity .2s ease-out",o.style.opacity="1"),E(),t.ready&&t.ready()}))).catch(C=>{throw s.fig||x(C),C})},s.play=(w,R)=>(s.move=Mt[w]?w:"",s.loop=!!R,s.t0=performance.now(),s.lap=0,s.offAt=R?null:0,new Promise(C=>{s.done=C})),s.setPet=(w,R)=>{let C=s.petEl;return s.petEl=R||null,C&&C!==R&&t.petGone&&t.petGone(C),w===s.petId&&s.pet?(h(),R&&t.petShown&&t.petShown(R),Promise.resolve()):(s.petId=w||"",s.pet&&(a.remove(s.pet),s.pet=null,s.petParts=[],h()),!w||!R||!ff(w)?Promise.resolve():(d&&d.observe(R),ya(w).then(D=>{if(Gt!==s||s.petId!==w)return;let F=D.clone(),I=[];F.traverse(z=>{let H=/^(blink|wag|ear|wing)(?:-([LR]))?$/.exec(z.name);H&&!(z.parent&&z.parent.name===z.name)&&I.push([z,H[1],H[2]==="L"?1:H[2]==="R"?-1:0])});let B=new At().setFromObject(F.children[0],!0);return F.userData.big={x:Math.max(.01,B.max.x-B.min.x),y:Math.max(.01,B.max.y-B.min.y)},F.visible=!1,dr(F,ps,!1).then(()=>{if(Gt!==s||s.petId!==w||s.pet)return;s.pet=F,s.petParts=I,a.add(F),h();let z=()=>{Gt===s&&s.pet===F&&s.petEl&&t.petShown&&t.petShown(s.petEl)};s.fig?(Nt||T(performance.now()),z()):s.ready.then(z,()=>{})})}).catch(()=>{})))},s.petPlay=w=>s.pet?(s.trick=ba[w]?w:1,s.trickT0=performance.now(),!0):!1,s.rehost=w=>{w!==i&&(t.drag&&(i.removeEventListener("pointerdown",g),w.addEventListener("pointerdown",g)),f&&(f.unobserve(i),f.observe(w)),d&&(d.unobserve(i),d.observe(w)),i=w,s.el=w,w.appendChild(o),s.seen=!0,h(),s.fig&&Gt===s&&!Nt&&T(performance.now()))},s.stop=()=>{Gt===s&&(Gt=null,n.setAnimationLoop(null)),s.fig&&Ky(s.fig),f&&f.disconnect(),d&&d.disconnect(),i.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),bt.remove(r),bt.remove(a),o.parentNode===i&&i.removeChild(o),o.style.left="0px",o.style.top="0px",o.style.opacity="",o.style.transition="",s.petEl&&t.petGone&&t.petGone(s.petEl)},s.set(e).catch(()=>{}),t.pet&&s.setPet(t.pet.id,t.pet.el),t.move&&s.play(t.move,t.loop),s}function yw(){return Gt&&Gt.fig&&Gt.fig.stages||0}function vw(){for(let[i,e]of[...fn])fn.delete(i),e.then(t=>{t.gone=!0,Gi(t)},()=>{})}var gf=!0;function Mw(i){i.stand&&(Object.keys(oa).forEach(t=>delete oa[t]),Object.assign(oa,i.stand)),i.keep!=null&&(gf=i.keep),fn.clear(),gs.clear();let e=ur;ur=null,e&&(e.gone=!0,Gi(e))}var Sw=pr,zi=new Map,bf=8,Fc=()=>new Promise(i=>{let e=new MessageChannel;e.port1.onmessage=()=>{e.port1.close(),i()},e.port2.postMessage(0)});async function _v(i,e,t,n){let s=Jd(),r=Math.fround,a=new L,o=t,l=[];i.traverse(u=>{u.isMesh&&!u.userData.line&&u.geometry&&u.geometry.attributes.position&&l.push([u.geometry,new we().multiplyMatrices(e,u.matrixWorld)])});let c=performance.now(),h=0;for(let[u,f]of l){let d=u.attributes.position,b=u.index,g=new Float32Array(d.count*3);for(let T=0;T<d.count;T++)a.fromBufferAttribute(d,T).applyMatrix4(f),g[3*T]=a.x,g[3*T+1]=a.y,g[3*T+2]=a.z,Zh(s,n,g[3*T],g[3*T+1],g[3*T+2],!0),(T&1023)===1023&&performance.now()-c>bf&&(await Fc(),c=performance.now());let m=b?b.count/3:d.count/3,p=(T,y)=>b?b.getX(T*3+y):T*3+y,M=(T,y)=>(g[T]-g[y])**2+(g[T+1]-g[y+1])**2+(g[T+2]-g[y+2])**2;for(let T=0;T<m;T++){let y=p(T,0)*3,v=p(T,1)*3,A=p(T,2)*3,E=M(y,v),x=M(v,A),w=M(A,y);x>=E&&x>=w?[y,v,A]=[v,A,y]:w>=E&&w>=x&&([y,v,A]=[A,y,v]);let R=Math.sqrt(Math.max(E,x,w));if(R<=t)continue;let C=g[v]-g[y],D=g[v+1]-g[y+1],F=g[v+2]-g[y+2],I=g[A]-g[y],B=g[A+1]-g[y+1],z=g[A+2]-g[y+2],H=g[A]-g[v],te=g[A+1]-g[v+1],q=g[A+2]-g[v+2],Y=Math.hypot(D*z-F*B,F*I-C*z,C*B-D*I)/R,$=Math.max(1,Math.ceil(Y/o));for(let ve=0;ve<$;ve++){let me=ve/$,Ke=g[y]+I*me,Fe=g[y+1]+B*me,Ue=g[y+2]+z*me,j=g[v]+H*me-Ke,Z=g[v+1]+te*me-Fe,be=g[v+2]+q*me-Ue,Ie=Math.max(1,Math.ceil(R*(1-me)/o));for(let de=0;de<=Ie;de++)Zh(s,n,r(Ke+j*de/Ie),r(Fe+Z*de/Ie),r(Ue+be*de/Ie),!1);h+=Ie+1}h>1024&&(h=0,performance.now()-c>bf&&(await Fc(),c=performance.now()))}}return await Fc(),s}function Sp(i,e,t,n,s){let r=s?Xd(n):Wd(n),a=s?jd:qd,o=new we().copy(e.matrixWorld).invert(),l=new we,c=new we,h=new L,u=[0,0,0],f=new Map;i.traverse(d=>{if(!d.isMesh||d.isSkinnedMesh||!d.geometry||!d.geometry.attributes.position)return;let b=d.geometry;if(f.has(b)){d.geometry=f.get(b),d.userData.bent=!0;return}l.multiplyMatrices(o,d.matrixWorld),c.copy(l).invert();let g=d.geometry.attributes.position,m=new Float32Array(g.count*3);for(let p=0;p<g.count;p++)h.fromBufferAttribute(g,p).applyMatrix4(l),a(r,t,h.x,h.y,h.z,u),h.set(u[0],u[1],u[2]).applyMatrix4(c),m[3*p]=h.x,m[3*p+1]=h.y,m[3*p+2]=h.z;d.geometry=d.geometry.clone(),d.geometry.setAttribute("position",new rt(m,3)),d.userData.bent=!0,d.geometry.computeBoundingBox(),d.geometry.computeBoundingSphere(),f.set(b,d.geometry)})}export{la as BACK,pf as Figure,Mt as MOVES,Yh as SNUG,uf as SPIN_PAD,ef as TUCK,mw as bleed,dw as broken,uw as calm,vw as crowd,xw as emblem,gw as face,cw as has,ff as hasThing,fw as hold,xa as lookKey,lw as manifest,xv as moveClock,hw as ok,ow as setBase,_w as stage,yw as staged,pw as still,bw as thing,Mw as tune,Sw as version};
