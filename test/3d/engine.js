/* Seoulful Staff 3D characters; three.js (MIT, mrdoob and contributors) */
var mu=0,Ac=1,bu=2;var Jr=1,xu=2,js=3,Jn=0,Ot=1,cn=2,qn=0,Ys=1,Tc=2,Cc=3,Rc=4,_u=5;var rs=100,yu=101,vu=102,Mu=103,Su=104,wu=200,Eu=201,Au=202,Tu=203,Ic=204,Dc=205,Cu=206,Ru=207,Iu=208,Du=209,Lu=210,Fu=211,Pu=212,Nu=213,Uu=214,Qa=0,Za=1,$a=2,Ns=3,eo=4,to=5,no=6,io=7,wo=0,Bu=1,Ou=2,Ln=0,Lc=1,Fc=2,Pc=3,Nc=4,Uc=5,Bc=6,qr=7,gc="attached",Gu="detached",Oc=300,Ni=301,as=302,Eo=303,Ao=304,Xr=306,Ai=1e3,_n=1001,Us=1002,Tt=1003,To=1004;var os=1005;var vt=1006,Qs=1007;var Fn=1008;var ln=1009,Gc=1010,kc=1011,Zs=1012,Co=1013,Pn=1014,pn=1015,Nn=1016,Ro=1017,Io=1018,$s=1020,Hc=35902,zc=35899,Vc=1021,Wc=1022,mn=1023,Hn=1026,Ui=1027,er=1028,Do=1029,Bi=1030,Lo=1031;var Fo=1033,jr=33776,Yr=33777,Qr=33778,Zr=33779,Po=35840,No=35841,Uo=35842,Bo=35843,Oo=36196,Go=37492,ko=37496,Ho=37488,zo=37489,$r=37490,Vo=37491,Wo=37808,Ko=37809,Jo=37810,qo=37811,Xo=37812,jo=37813,Yo=37814,Qo=37815,Zo=37816,$o=37817,ef=37818,tf=37819,nf=37820,sf=37821,rf=36492,af=36494,of=36495,ff=36283,cf=36284,ea=36285,lf=36286;var Xi=2300,ji=2301,Xa=2302,pc=2303,mc=2400,bc=2401,xc=2402,ku=2500;var Kc=0,ta=1,tr=2,Hu=3200;var nr=0,zu=1,gi="",_t="srgb",tn="srgb-linear",Er="linear",Ze="srgb";var ja=7680;var Vu=519,Wu=512,Ku=513,Ju=514,hf=515,qu=516,Xu=517,uf=518,ju=519,Jc=35044;var qc="300 es",In=2e3,Bs=2001;function jg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=Os("canvas");return i.style.display="block",i}var Fh={},Gs=null;function Ar(...i){let e="THREE."+i.shift();Gs?Gs("log",e,...i):console.log(e,...i)}function Qu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=Qu(i);let e="THREE."+i.shift();if(Gs)Gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Qu(i);let e="THREE."+i.shift();if(Gs)Gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){let e=i.join(" ");e in Fh||(Fh[e]=!0,Ae(...i))}function Zu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $u={[Qa]:Za,[$a]:no,[eo]:io,[Ns]:to,[Za]:Qa,[no]:$a,[io]:eo,[to]:Ns},zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,Sr=Math.PI/180,Yi=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Xc(i,e){return(i%e+e)%e}function Qg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zg(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function $g(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function ep(i,e=1){return e-Math.abs(Xc(i,e*2)-e)}function tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function np(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sp(i,e){return i+Math.random()*(e-i)}function rp(i){return i*(.5-Math.random())}function ap(i){i!==void 0&&(Ph=i);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function op(i){return i*Sr}function fp(i){return i*Yi}function cp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),f=r((e+n)/2),l=a((e+n)/2),u=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),b=a((n-e)/2);switch(s){case"XYX":i.set(o*l,c*u,c*h,o*f);break;case"YZY":i.set(c*h,o*l,c*u,o*f);break;case"ZXZ":i.set(c*u,c*h,o*l,o*f);break;case"XZX":i.set(o*l,c*b,c*d,o*f);break;case"YXY":i.set(c*d,o*l,c*b,o*f);break;case"ZYZ":i.set(c*b,c*d,o*l,o*f);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jc={DEG2RAD:Sr,RAD2DEG:Yi,generateUUID:Dn,clamp:Ke,euclideanModulo:Xc,mapLinear:Qg,inverseLerp:Zg,lerp:wr,damp:$g,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:sp,randFloatSpread:rp,seededRandom:ap,degToRad:op,radToDeg:fp,isPowerOfTwo:cp,ceilPowerOfTwo:lp,floorPowerOfTwo:hp,setQuaternionFromProperEuler:up,normalize:et,denormalize:Rn},el=class el{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};el.prototype.isVector2=!0;var Ne=el,dt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],f=n[s+1],l=n[s+2],u=n[s+3],h=r[a+0],d=r[a+1],b=r[a+2],m=r[a+3];if(u!==m||c!==h||f!==d||l!==b){let p=c*h+f*d+l*b+u*m;p<0&&(h=-h,d=-d,b=-b,m=-m,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),A=Math.sin(v);g=Math.sin(g*v)/A,o=Math.sin(o*v)/A,c=c*g+h*o,f=f*g+d*o,l=l*g+b*o,u=u*g+m*o}else{c=c*g+h*o,f=f*g+d*o,l=l*g+b*o,u=u*g+m*o;let v=1/Math.sqrt(c*c+f*f+l*l+u*u);c*=v,f*=v,l*=v,u*=v}}e[t]=c,e[t+1]=f,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],f=n[s+2],l=n[s+3],u=r[a],h=r[a+1],d=r[a+2],b=r[a+3];return e[t]=o*b+l*u+c*d-f*h,e[t+1]=c*b+l*h+f*u-o*d,e[t+2]=f*b+l*d+o*h-c*u,e[t+3]=l*b-o*u-c*h-f*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,f=o(n/2),l=o(s/2),u=o(r/2),h=c(n/2),d=c(s/2),b=c(r/2);switch(a){case"XYZ":this._x=h*l*u+f*d*b,this._y=f*d*u-h*l*b,this._z=f*l*b+h*d*u,this._w=f*l*u-h*d*b;break;case"YXZ":this._x=h*l*u+f*d*b,this._y=f*d*u-h*l*b,this._z=f*l*b-h*d*u,this._w=f*l*u+h*d*b;break;case"ZXY":this._x=h*l*u-f*d*b,this._y=f*d*u+h*l*b,this._z=f*l*b+h*d*u,this._w=f*l*u-h*d*b;break;case"ZYX":this._x=h*l*u-f*d*b,this._y=f*d*u+h*l*b,this._z=f*l*b-h*d*u,this._w=f*l*u+h*d*b;break;case"YZX":this._x=h*l*u+f*d*b,this._y=f*d*u+h*l*b,this._z=f*l*b-h*d*u,this._w=f*l*u-h*d*b;break;case"XZY":this._x=h*l*u-f*d*b,this._y=f*d*u-h*l*b,this._z=f*l*b+h*d*u,this._w=f*l*u+h*d*b;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],f=t[2],l=t[6],u=t[10],h=n+o+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-f)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(l-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+f)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-f)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+l)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+f)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,f=t._z,l=t._w;return this._x=n*l+a*o+s*f-r*c,this._y=s*l+a*c+r*o-n*f,this._z=r*l+a*f+n*c-s*o,this._w=a*l-n*o-s*c-r*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let f=Math.acos(o),l=Math.sin(f);c=Math.sin(c*f)/l,t=Math.sin(t*f)/l,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tl=class tl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,f=2*(a*s-o*n),l=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*f+a*u-o*l,this.y=n+c*l+o*f-r*u,this.z=s+c*u+r*l-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tl.prototype.isVector3=!0;var L=tl,Wf=new L,Nh=new dt,nl=class nl{constructor(e,t,n,s,r,a,o,c,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,f)}set(e,t,n,s,r,a,o,c,f){let l=this.elements;return l[0]=e,l[1]=s,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],f=n[1],l=n[4],u=n[7],h=n[2],d=n[5],b=n[8],m=s[0],p=s[3],g=s[6],v=s[1],A=s[4],y=s[7],M=s[2],E=s[5],T=s[8];return r[0]=a*m+o*v+c*M,r[3]=a*p+o*A+c*E,r[6]=a*g+o*y+c*T,r[1]=f*m+l*v+u*M,r[4]=f*p+l*A+u*E,r[7]=f*g+l*y+u*T,r[2]=h*m+d*v+b*M,r[5]=h*p+d*A+b*E,r[8]=h*g+d*y+b*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],f=e[7],l=e[8];return t*a*l-t*o*f-n*r*l+n*o*c+s*r*f-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],f=e[7],l=e[8],u=l*a-o*f,h=o*c-l*r,d=f*r-a*c,b=t*u+n*h+s*d;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/b;return e[0]=u*m,e[1]=(s*f-l*n)*m,e[2]=(o*n-s*a)*m,e[3]=h*m,e[4]=(l*t-s*c)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(n*c-f*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),f=Math.sin(r);return this.set(n*c,n*f,-n*(c*a+f*o)+a+e,-s*f,s*c,-s*(-f*a+c*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kf.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kf.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nl.prototype.isMatrix3=!0;var Fe=nl,Kf=new Fe,Uh=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){let i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:Er,toXYZ:Uh,fromXYZ:Bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:Uh,fromXYZ:Bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}var ke=dp();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Os("canvas")),ys.width=e.width,ys.height=e.height;let s=ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gp=0,ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jf(s[a].image)):r.push(Jf(s[a]))}else r=Jf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var pp=0,qf=new L,Bt=class i extends zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_n,s=_n,r=vt,a=Fn,o=mn,c=ln,f=i.DEFAULT_ANISOTROPY,l=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Dn(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qf).x}get height(){return this.source.getSize(qf).y}get depth(){return this.source.getSize(qf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Oc;Bt.DEFAULT_ANISOTROPY=1;var il=class il{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,f=c[0],l=c[4],u=c[8],h=c[1],d=c[5],b=c[9],m=c[2],p=c[6],g=c[10];if(Math.abs(l-h)<.01&&Math.abs(u-m)<.01&&Math.abs(b-p)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+m)<.1&&Math.abs(b+p)<.1&&Math.abs(f+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(f+1)/2,y=(d+1)/2,M=(g+1)/2,E=(l+h)/4,T=(u+m)/4,x=(b+p)/4;return A>y&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=T/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=T/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-b)*(p-b)+(u-m)*(u-m)+(h-l)*(h-l));return Math.abs(v)<.001&&(v=1),this.x=(p-b)/v,this.y=(u-m)/v,this.z=(h-l)/v,this.w=Math.acos((f+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};il.prototype.isVector4=!0;var tt=il,ro=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Bt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tr=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var So=class So{constructor(e,t,n,s,r,a,o,c,f,l,u,h,d,b,m,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,f,l,u,h,d,b,m,p)}set(e,t,n,s,r,a,o,c,f,l,u,h,d,b,m,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=f,g[6]=l,g[10]=u,g[14]=h,g[3]=d,g[7]=b,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),f=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*l,d=a*u,b=o*l,m=o*u;t[0]=c*l,t[4]=-c*u,t[8]=f,t[1]=d+b*f,t[5]=h-m*f,t[9]=-o*c,t[2]=m-h*f,t[6]=b+d*f,t[10]=a*c}else if(e.order==="YXZ"){let h=c*l,d=c*u,b=f*l,m=f*u;t[0]=h+m*o,t[4]=b*o-d,t[8]=a*f,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=d*o-b,t[6]=m+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*l,d=c*u,b=f*l,m=f*u;t[0]=h-m*o,t[4]=-a*u,t[8]=b+d*o,t[1]=d+b*o,t[5]=a*l,t[9]=m-h*o,t[2]=-a*f,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*l,d=a*u,b=o*l,m=o*u;t[0]=c*l,t[4]=b*f-d,t[8]=h*f+m,t[1]=c*u,t[5]=m*f+h,t[9]=d*f-b,t[2]=-f,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,d=a*f,b=o*c,m=o*f;t[0]=c*l,t[4]=m-h*u,t[8]=b*u+d,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-f*l,t[6]=d*u+b,t[10]=h-m*u}else if(e.order==="XZY"){let h=a*c,d=a*f,b=o*c,m=o*f;t[0]=c*l,t[4]=-u,t[8]=f*l,t[1]=h*u+m,t[5]=a*l,t[9]=d*u-b,t[2]=b*u-d,t[6]=o*l,t[10]=m*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,bp)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(n,un),_i.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(n,un)),_i.normalize(),Sa.crossVectors(un,_i),s[0]=_i.x,s[4]=Sa.x,s[8]=un.x,s[1]=_i.y,s[5]=Sa.y,s[9]=un.y,s[2]=_i.z,s[6]=Sa.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],f=n[12],l=n[1],u=n[5],h=n[9],d=n[13],b=n[2],m=n[6],p=n[10],g=n[14],v=n[3],A=n[7],y=n[11],M=n[15],E=s[0],T=s[4],x=s[8],w=s[12],C=s[1],R=s[5],F=s[9],P=s[13],D=s[2],O=s[6],k=s[10],V=s[14],te=s[3],K=s[7],Y=s[11],$=s[15];return r[0]=a*E+o*C+c*D+f*te,r[4]=a*T+o*R+c*O+f*K,r[8]=a*x+o*F+c*k+f*Y,r[12]=a*w+o*P+c*V+f*$,r[1]=l*E+u*C+h*D+d*te,r[5]=l*T+u*R+h*O+d*K,r[9]=l*x+u*F+h*k+d*Y,r[13]=l*w+u*P+h*V+d*$,r[2]=b*E+m*C+p*D+g*te,r[6]=b*T+m*R+p*O+g*K,r[10]=b*x+m*F+p*k+g*Y,r[14]=b*w+m*P+p*V+g*$,r[3]=v*E+A*C+y*D+M*te,r[7]=v*T+A*R+y*O+M*K,r[11]=v*x+A*F+y*k+M*Y,r[15]=v*w+A*P+y*V+M*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],f=e[13],l=e[2],u=e[6],h=e[10],d=e[14],b=e[3],m=e[7],p=e[11],g=e[15],v=c*d-f*h,A=o*d-f*u,y=o*h-c*u,M=a*d-f*l,E=a*h-c*l,T=a*u-o*l;return t*(m*v-p*A+g*y)-n*(b*v-p*M+g*E)+s*(b*A-m*M+g*T)-r*(b*y-m*E+p*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],f=e[6],l=e[10];return t*(a*l-o*f)-n*(r*l-o*c)+s*(r*f-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],f=e[7],l=e[8],u=e[9],h=e[10],d=e[11],b=e[12],m=e[13],p=e[14],g=e[15],v=t*o-n*a,A=t*c-s*a,y=t*f-r*a,M=n*c-s*o,E=n*f-r*o,T=s*f-r*c,x=l*m-u*b,w=l*p-h*b,C=l*g-d*b,R=u*p-h*m,F=u*g-d*m,P=h*g-d*p,D=v*P-A*F+y*R+M*C-E*w+T*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(o*P-c*F+f*R)*O,e[1]=(s*F-n*P-r*R)*O,e[2]=(m*T-p*E+g*M)*O,e[3]=(h*E-u*T-d*M)*O,e[4]=(c*C-a*P-f*w)*O,e[5]=(t*P-s*C+r*w)*O,e[6]=(p*y-b*T-g*A)*O,e[7]=(l*T-h*y+d*A)*O,e[8]=(a*F-o*C+f*x)*O,e[9]=(n*C-t*F-r*x)*O,e[10]=(b*E-m*y+g*v)*O,e[11]=(u*y-l*E-d*v)*O,e[12]=(o*w-a*R-c*x)*O,e[13]=(t*R-n*w+s*x)*O,e[14]=(m*A-b*M-p*v)*O,e[15]=(l*M-u*A+h*v)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,f=r*a,l=r*o;return this.set(f*a+n,f*o-s*c,f*c+s*o,0,f*o+s*c,l*o+n,l*c-s*a,0,f*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,f=r+r,l=a+a,u=o+o,h=r*f,d=r*l,b=r*u,m=a*l,p=a*u,g=o*u,v=c*f,A=c*l,y=c*u,M=n.x,E=n.y,T=n.z;return s[0]=(1-(m+g))*M,s[1]=(d+y)*M,s[2]=(b-A)*M,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(h+g))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(b+A)*T,s[9]=(p-v)*T,s[10]=(1-(h+m))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),c=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let f=1/a,l=1/o,u=1/c;return En.elements[0]*=f,En.elements[1]*=f,En.elements[2]*=f,En.elements[4]*=l,En.elements[5]*=l,En.elements[6]*=l,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=In,c=!1){let f=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),b,m;if(c)b=r/(a-r),m=a*r/(a-r);else if(o===In)b=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Bs)b=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return f[0]=l,f[4]=0,f[8]=h,f[12]=0,f[1]=0,f[5]=u,f[9]=d,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=m,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=In,c=!1){let f=this.elements,l=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),b,m;if(c)b=1/(a-r),m=a/(a-r);else if(o===In)b=-2/(a-r),m=-(a+r)/(a-r);else if(o===Bs)b=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return f[0]=l,f[4]=0,f[8]=0,f[12]=h,f[1]=0,f[5]=u,f[9]=0,f[13]=d,f[2]=0,f[6]=0,f[10]=b,f[14]=m,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};So.prototype.isMatrix4=!0;var we=So,vs=new L,En=new we,mp=new L(0,0,0),bp=new L(1,1,1),_i=new L,Sa=new L,un=new L,Oh=new we,Gh=new dt,rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],f=s[5],l=s[9],u=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,f),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xp=0,kh=new L,Ms=new dt,ti=new we,wa=new L,pr=new L,_p=new L,yp=new dt,Hh=new L(1,0,0),zh=new L(0,1,0),Vh=new L(0,0,1),Wh={type:"added"},vp={type:"removed"},Ss={type:"childadded",child:null},Xf={type:"childremoved",child:null},gt=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new rn,n=new dt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Fe}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(zh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(zh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(pr,wa,this.up):ti.lookAt(wa,pr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ti),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let f=0,l=c.length;f<l;f++){let u=c[f];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,f=this.material.length;c<f;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),f=a(e.textures),l=a(e.images),u=a(e.shapes),h=a(e.skeletons),d=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(o){let c=[];for(let f in o){let l=o[f];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),g=this._getHandJoint(f,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let l=f.joints["index-finger-tip"],u=f.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=.02,b=.005;f.inputState.pinching&&h>d+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=d-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function jf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ke.workingColorSpace){if(e=Xc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jf(a,r,e+1/3),this.g=jf(a,r,e),this.b=jf(a,r,e-1/3)}return ke.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ke.workingToColorSpace(Xt.copy(this),e),Math.round(Ke(Xt.r*255,0,255))*65536+Math.round(Ke(Xt.g*255,0,255))*256+Math.round(Ke(Xt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,f,l=(o+a)/2;if(o===a)c=0,f=0;else{let u=a-o;switch(f=l<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=f,e.l=l,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=_t){ke.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Ea);let n=wr(yi.h,Ea.h,t),s=wr(yi.s,Ea.s,t),r=wr(yi.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Ee;Ee.NAMES=ed;var Qi=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new L,ni=new L,Yf=new L,ii=new L,ws=new L,Es=new L,Kh=new L,Qf=new L,Zf=new L,$f=new L,ec=new tt,tc=new tt,nc=new tt,Ei=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),ni.subVectors(n,t),Yf.subVectors(e,t);let a=An.dot(An),o=An.dot(ni),c=An.dot(Yf),f=ni.dot(ni),l=ni.dot(Yf),u=a*f-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,d=(f*c-o*l)*h,b=(a*l-o*c)*h;return r.set(1-d-b,b,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(tc,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),ni.subVectors(e,t),An.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),An.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ws.subVectors(s,n),Es.subVectors(r,n),Qf.subVectors(e,n);let c=ws.dot(Qf),f=Es.dot(Qf);if(c<=0&&f<=0)return t.copy(n);Zf.subVectors(e,s);let l=ws.dot(Zf),u=Es.dot(Zf);if(l>=0&&u<=l)return t.copy(s);let h=c*u-l*f;if(h<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(ws,a);$f.subVectors(e,r);let d=ws.dot($f),b=Es.dot($f);if(b>=0&&d<=b)return t.copy(r);let m=d*f-c*b;if(m<=0&&f>=0&&b<=0)return o=f/(f-b),t.copy(n).addScaledVector(Es,o);let p=l*b-d*u;if(p<=0&&u-l>=0&&d-b>=0)return Kh.subVectors(r,s),o=(u-l)/(u-l+(d-b)),t.copy(s).addScaledVector(Kh,o);let g=1/(p+m+h);return a=m*g,o=h*g,t.copy(n).addScaledVector(ws,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Et=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),Ta.subVectors(this.max,mr),As.subVectors(e.a,mr),Ts.subVectors(e.b,mr),Cs.subVectors(e.c,mr),vi.subVectors(Ts,As),Mi.subVectors(Cs,Ts),Vi.subVectors(As,Cs);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Vi.z,Vi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Vi.z,0,-Vi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Vi.y,Vi.x,0];return!ic(t,As,Ts,Cs,Ta)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,As,Ts,Cs,Ta))?!1:(Ca.crossVectors(vi,Mi),t=[Ca.x,Ca.y,Ca.z],ic(t,As,Ts,Cs,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},si=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Aa=new Et,As=new L,Ts=new L,Cs=new L,vi=new L,Mi=new L,Vi=new L,mr=new L,Ta=new L,Ca=new L,Wi=new L;function ic(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=e.dot(Wi),f=t.dot(Wi),l=n.dot(Wi);if(Math.max(-Math.max(c,f,l),Math.min(c,f,l))>o)return!1}return!0}var Ft=new L,Ra=new Ne,Sp=0,rt=class extends zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ir=class extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var en=class extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wp=new Et,br=new L,sc=new L,an=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(sc)),this.expandByPoint(br.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ep=0,xn=new we,rc=new gt,Rs=new L,dn=new Et,xr=new Et,Vt=new L,Pt=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Ir:Rr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(dn.min,xr.min),dn.expandByPoint(Vt),Vt.addVectors(dn.max,xr.max),dn.expandByPoint(Vt)):(dn.expandByPoint(xr.min),dn.expandByPoint(xr.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let f=0,l=o.count;f<l;f++)Vt.fromBufferAttribute(o,f),c&&(Rs.fromBufferAttribute(e,f),Vt.add(Rs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new L,c[x]=new L;let f=new L,l=new L,u=new L,h=new Ne,d=new Ne,b=new Ne,m=new L,p=new L;function g(x,w,C){f.fromBufferAttribute(n,x),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),b.fromBufferAttribute(r,C),l.sub(f),u.sub(f),d.sub(h),b.sub(h);let R=1/(d.x*b.y-b.x*d.y);isFinite(R)&&(m.copy(l).multiplyScalar(b.y).addScaledVector(u,-d.y).multiplyScalar(R),p.copy(u).multiplyScalar(d.x).addScaledVector(l,-b.x).multiplyScalar(R),o[x].add(m),o[w].add(m),o[C].add(m),c[x].add(p),c[w].add(p),c[C].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,w=v.length;x<w;++x){let C=v[x],R=C.start,F=C.count;for(let P=R,D=R+F;P<D;P+=3)g(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let A=new L,y=new L,M=new L,E=new L;function T(x){M.fromBufferAttribute(s,x),E.copy(M);let w=o[x];A.copy(w),A.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(E,w);let R=y.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,R)}for(let x=0,w=v.length;x<w;++x){let C=v[x],R=C.start,F=C.count;for(let P=R,D=R+F;P<D;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,f=new L,l=new L,u=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){let b=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),f.fromBufferAttribute(n,p),o.add(l),c.add(l),f.add(l),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,f.x,f.y,f.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){let f=o.array,l=o.itemSize,u=o.normalized,h=new f.constructor(c.length*l),d=0,b=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*l;for(let g=0;g<l;g++)h[b++]=f[d++]}return new rt(h,l,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],f=e(c,n);t.setAttribute(o,f)}let r=this.morphAttributes;for(let o in r){let c=[],f=r[o];for(let l=0,u=f.length;l<u;l++){let h=f[l],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let f=a[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let f=n[c];e.data.attributes[c]=f.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let f=this.morphAttributes[c],l=[];for(let u=0,h=f.length;u<h;u++){let d=f[u];l.push(d.toJSON(e.data))}l.length>0&&(s[c]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let f in s){let l=s[f];this.setAttribute(f,l.clone(t))}let r=e.morphAttributes;for(let f in r){let l=[],u=r[f];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(t));this.morphAttributes[f]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let f=0,l=a.length;f<l;f++){let u=a[f];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},$t=new L,Vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ac=new L,Ap=new L,Tp=new Fe,Cn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ac.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tp.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cp=0,jt=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Ys,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Dc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ri=new L,oc=new L,Ia=new L,Da=new L,Zi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),Da.copy(this.origin).sub(oc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=Da.dot(this.direction),c=-Da.dot(Ia),f=Da.lengthSq(),l=Math.abs(1-a*a),u,h,d,b;if(l>0)if(u=a*c-o,h=a*o-c,b=r*l,u>=0)if(h>=-b)if(h<=b){let m=1/l;u*=m,h*=m,d=u*(u+a*h+2*o)+h*(a*u+h+2*c)+f}else h=r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+f;else h=-r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+f;else h<=-b?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+f):h<=b?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+f):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+f);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(Ia,h),d}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,f=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return f>=0?(n=(e.min.x-h.x)*f,s=(e.max.x-h.x)*f):(n=(e.max.x-h.x)*f,s=(e.min.x-h.x)*f),l>=0?(r=(e.min.y-h.y)*l,a=(e.max.y-h.y)*l):(r=(e.max.y-h.y)*l,a=(e.min.y-h.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,f=o.y,l=o.z,u=e.x-a.x,h=e.y-a.y,d=e.z-a.z,b=t.x-a.x,m=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,A=n.z-a.z,y=Math.abs(c),M=Math.abs(f),E=Math.abs(l),T,x,w,C,R,F,P,D,O,k,V,te;if(y>=M&&y>=E?(w=c,F=u,O=b,te=g,c>=0?(T=f,x=l,C=h,R=d,P=m,D=p,k=v,V=A):(T=l,x=f,C=d,R=h,P=p,D=m,k=A,V=v)):M>=E?(w=f,F=h,O=m,te=v,f>=0?(T=l,x=c,C=d,R=u,P=p,D=b,k=A,V=g):(T=c,x=l,C=u,R=d,P=b,D=p,k=g,V=A)):(w=l,F=d,O=p,te=A,l>=0?(T=c,x=f,C=u,R=h,P=b,D=m,k=g,V=v):(T=f,x=c,C=h,R=u,P=m,D=b,k=v,V=g)),w===0)return null;let K=T/w,Y=x/w,$=1/w,ve=C-K*F,pe=R-Y*F,Xe=P-K*O,Pe=D-Y*O,Ue=k-K*te,q=V-Y*te,Q=Ue*Pe-q*Xe,be=ve*q-pe*Ue,De=Xe*pe-Pe*ve;if(s){if(Q<0||be<0||De<0)return null}else if((Q<0||be<0||De<0)&&(Q>0||be>0||De>0))return null;let de=Q+be+De;if(de===0)return null;let He=$*(Q*F+be*O+De*te);return(de>0?He<0:He>0)?null:this.at(He/de,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jh=new we,Ki=new Zi,La=new an,qh=new L,Fa=new L,Pa=new L,Na=new L,fc=new L,Ua=new L,Xh=new L,Ba=new L,at=class extends gt{constructor(e=new Pt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let c=0,f=r.length;c<f;c++){let l=o[c],u=r[c];l!==0&&(fc.fromBufferAttribute(u,e),a?Ua.addScaledVector(fc,l):Ua.addScaledVector(fc.sub(t),l))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(La.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(La,qh)===null||Ki.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,f=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,m=h.length;b<m;b++){let p=h[b],g=a[p.materialIndex],v=Math.max(p.start,d.start),A=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,M=A;y<M;y+=3){let E=o.getX(y),T=o.getX(y+1),x=o.getX(y+2);s=Oa(this,g,e,n,f,l,u,E,T,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let b=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let p=b,g=m;p<g;p+=3){let v=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);s=Oa(this,a,e,n,f,l,u,v,A,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,m=h.length;b<m;b++){let p=h[b],g=a[p.materialIndex],v=Math.max(p.start,d.start),A=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,M=A;y<M;y+=3){let E=y,T=y+1,x=y+2;s=Oa(this,g,e,n,f,l,u,E,T,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let b=Math.max(0,d.start),m=Math.min(c.count,d.start+d.count);for(let p=b,g=m;p<g;p+=3){let v=p,A=p+1,y=p+2;s=Oa(this,a,e,n,f,l,u,v,A,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Rp(i,e,t,n,s,r,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Jn,o),c===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);let f=t.ray.origin.distanceTo(Ba);return f<t.near||f>t.far?null:{distance:f,point:Ba.clone(),object:i}}function Oa(i,e,t,n,s,r,a,o,c,f){i.getVertexPosition(o,Fa),i.getVertexPosition(c,Pa),i.getVertexPosition(f,Na);let l=Rp(i,e,t,n,Fa,Pa,Na,Xh);if(l){let u=new L;Ei.getBarycoord(Xh,Fa,Pa,Na,u),s&&(l.uv=Ei.getInterpolatedAttribute(s,o,c,f,u,new Ne)),r&&(l.uv1=Ei.getInterpolatedAttribute(r,o,c,f,u,new Ne)),a&&(l.normal=Ei.getInterpolatedAttribute(a,o,c,f,u,new L),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let h={a:o,b:c,c:f,normal:new L,materialIndex:0};Ei.getNormal(Fa,Pa,Na,h.normal),l.face=h,l.barycoord=u}return l}var _r=new tt,jh=new tt,Yh=new tt,Ip=new tt,Qh=new we,Ga=new L,cc=new an,Zh=new we,lc=new Zi,Ti=class extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Et),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingSphere.expandByPoint(Ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cc.copy(this.boundingSphere),cc.applyMatrix4(s),e.ray.intersectsSphere(cc)!==!1&&(Zh.copy(s).invert(),lc.copy(e.ray).applyMatrix4(Zh),!(this.boundingBox!==null&&lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;jh.fromBufferAttribute(s.attributes.skinIndex,e),Yh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_r.copy(t),t.set(0,0,0,0)):(_r.set(...t,1),t.set(0,0,0)),_r.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Yh.getComponent(r);if(a!==0){let o=jh.getComponent(r);Qh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ip.copy(_r).applyMatrix4(Qh),a)}}return t.isVector4&&(t.w=_r.w),t.applyMatrix4(this.bindMatrixInverse)}},Ci=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ri=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,c,f=Tt,l=Tt,u,h){super(null,a,o,c,f,l,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$h=new we,Dp=new we,$i=class i{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Dp;$h.multiplyMatrices(o,t[r]),$h.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ri(t,e,e,mn,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new Ci),this.bones.push(a),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},fi=class extends rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new we,eu=new we,ka=[],tu=new Et,Lp=new we,yr=new at,vr=new an,es=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),tu.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),vr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),eu.multiplyMatrices(n,Is),yr.matrixWorld=eu,yr.raycast(e,ka);for(let a=0,o=ka.length;a<o;a++){let c=ka[a];c.instanceId=r,c.object=this,t.push(c)}ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ri(new Float32Array(s*this.count),s,this.count,er,pn));let r=this.morphTexture.source.data.data,a=0;for(let f=0;f<n.length;f++)a+=n[f];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new an,Fp=new Ne(.5,.5),Ha=new L,Ws=class{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],f=r[3],l=r[4],u=r[5],h=r[6],d=r[7],b=r[8],m=r[9],p=r[10],g=r[11],v=r[12],A=r[13],y=r[14],M=r[15];if(s[0].setComponents(f-a,d-l,g-b,M-v).normalize(),s[1].setComponents(f+a,d+l,g+b,M+v).normalize(),s[2].setComponents(f+o,d+u,g+m,M+A).normalize(),s[3].setComponents(f-o,d-u,g-m,M-A).normalize(),n)s[4].setComponents(c,h,p,y).normalize(),s[5].setComponents(f-c,d-h,g-p,M-y).normalize();else if(s[4].setComponents(f-c,d-h,g-p,M-y).normalize(),t===In)s[5].setComponents(f+c,d+h,g+p,M+y).normalize();else if(t===Bs)s[5].setComponents(c,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=Fp.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oo=new L,fo=new L,nu=new we,Mr=new Zi,za=new an,hc=new L,iu=new L,ts=class extends gt{constructor(e=new Pt,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)oo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=oo.distanceTo(fo);e.setAttribute("lineDistance",new en(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;nu.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,f=this.isLineSegments?2:1,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),b=Math.min(l.count,a.start+a.count);for(let m=d,p=b-1;m<p;m+=f){let g=l.getX(m),v=l.getX(m+1),A=Va(this,e,Mr,c,g,v,m);A&&t.push(A)}if(this.isLineLoop){let m=l.getX(b-1),p=l.getX(d),g=Va(this,e,Mr,c,m,p,b-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let m=d,p=b-1;m<p;m+=f){let g=Va(this,e,Mr,c,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){let m=Va(this,e,Mr,c,b-1,d,b-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Va(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(oo.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(oo,fo,hc,iu)>n)return;hc.applyMatrix4(i.matrixWorld);let f=e.ray.origin.distanceTo(hc);if(!(f<e.near||f>e.far))return{distance:f,point:iu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var su=new L,ru=new L,Dr=class extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)su.fromBufferAttribute(t,s),ru.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+su.distanceTo(ru);e.setAttribute("lineDistance",new en(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lr=class extends ts{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Js=class extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},au=new we,_c=new Zi,Wa=new an,Ka=new L,Fr=class extends gt{constructor(e=new Pt,t=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;au.copy(s).invert(),_c.copy(e.ray).applyMatrix4(au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,f=n.index,u=n.attributes.position;if(f!==null){let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let b=h,m=d;b<m;b++){let p=f.getX(b);Ka.fromBufferAttribute(u,p),ou(Ka,p,c,s,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let b=h,m=d;b<m;b++)Ka.fromBufferAttribute(u,b),ou(Ka,b,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ou(i,e,t,n,s,r,a){let o=_c.distanceSqToPoint(i);if(o<t){let c=new L;_c.closestPointToPoint(i,c),c.applyMatrix4(n);let f=s.ray.origin.distanceTo(c);if(f<s.near||f>s.far)return;r.push({distance:f,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pr=class extends Bt{constructor(e=[],t=Ni,n,s,r,a,o,c,f,l){super(e,t,n,s,r,a,o,c,f,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nr=class extends Bt{constructor(e,t,n,s,r,a,o,c,f){super(e,t,n,s,r,a,o,c,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ii=class extends Bt{constructor(e,t,n=Pn,s,r,a,o=Tt,c=Tt,f,l=Hn,u=1){if(l!==Hn&&l!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,c,l,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},co=class extends Ii{constructor(e,t=Pn,n=Ni,s,r,a=Tt,o=Tt,c,f=Hn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,s,r,a,o,c,f),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ur=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Di=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],f=[],l=[],u=[],h=0,d=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,s,a,2),b("x","z","y",1,-1,e,n,-t,s,a,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(l,3)),this.setAttribute("uv",new en(u,2));function b(m,p,g,v,A,y,M,E,T,x,w){let C=y/T,R=M/x,F=y/2,P=M/2,D=E/2,O=T+1,k=x+1,V=0,te=0,K=new L;for(let Y=0;Y<k;Y++){let $=Y*R-P;for(let ve=0;ve<O;ve++){let pe=ve*C-F;K[m]=pe*v,K[p]=$*A,K[g]=D,f.push(K.x,K.y,K.z),K[m]=0,K[p]=0,K[g]=E>0?1:-1,l.push(K.x,K.y,K.z),u.push(ve/T),u.push(1-Y/x),V+=1}}for(let Y=0;Y<x;Y++)for(let $=0;$<T;$++){let ve=h+$+O*Y,pe=h+$+O*(Y+1),Xe=h+($+1)+O*(Y+1),Pe=h+($+1)+O*Y;c.push(ve,pe,Pe),c.push(pe,Xe,Pe),te+=6}o.addGroup(d,te,w),d+=te,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ns=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),f=o+1,l=c+1,u=e/o,h=t/c,d=[],b=[],m=[],p=[];for(let g=0;g<l;g++){let v=g*h-a;for(let A=0;A<f;A++){let y=A*u-r;b.push(y,-v,0),m.push(0,0,1),p.push(A/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let A=v+f*g,y=v+f*(g+1),M=v+1+f*(g+1),E=v+1+f*g;d.push(A,y,E),d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new en(b,3)),this.setAttribute("normal",new en(m,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function fs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fu(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=fs(i[t]);for(let s in n)e[s]=n[s]}return e}function fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var td={clone:fs,merge:Yt},Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new we().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},lo=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vn=class extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends Vn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Br=class extends jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Or=class extends jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ho=class extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uo=class extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ya(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Bp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function cu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Op(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Wn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends Wn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=e,o=2*t-n;break;case xc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bc:a=e,c=2*n-t;break;case xc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let f=(n-t)*.5,l=this.valueSize;this._weightPrev=f/(t-o),this._weightNext=f/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,f=c-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,b=(n-t)/(s-t),m=b*b,p=m*b,g=-h*p+2*h*m-h*b,v=(1+h)*p+(-1.5-2*h)*m+(-.5+h)*b+1,A=(-1-d)*p+(1.5+d)*m+.5*b,y=d*p-d*m;for(let M=0;M!==o;++M)r[M]=g*a[l+M]+v*a[f+M]+A*a[c+M]+y*a[u+M];return r}},po=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,f=c-o,l=(n-t)/(s-t),u=1-l;for(let h=0;h!==o;++h)r[h]=a[f+h]*u+a[c+h]*l;return r}},mo=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bo=class extends Wn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,f=c-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let b=(n-t)/(s-t),m=1-b;for(let p=0;p!==o;++p)r[p]=a[f+p]*m+a[c+p]*b;return r}let h=o*2,d=e-1;for(let b=0;b!==o;++b){let m=a[f+b],p=a[c+b],g=d*h+b*2,v=u[g],A=u[g+1],y=e*h+b*2,M=l[y],E=l[y+1],T=kp(n,t,v,M,s);r[b]=nd(T,m,A,E,p)}return r}};function nd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Gp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function kp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=nd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Gp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wi(t,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wi(e.times,Array),values:wi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ya(e.settings)&&(n.settings={inTangents:wi(e.settings.inTangents,Array),outTangents:wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xi:t=this.InterpolantFactoryMethodDiscrete;break;case ji:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break;case pc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xi;case this.InterpolantFactoryMethodLinear:return ji;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ya(this.settings)&&(lu(this.settings.inTangents,e),lu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Le("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Yg(s))for(let o=0,c=s.length;o!==c;++o){let f=s[o];if(isNaN(f)){Le("KeyframeTrack: Value is not a valid number.",this,o,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,f=e[o],l=e[o+1];if(f!==l&&(o!==1||f!==e[0]))if(s)c=!0;else{let u=o*n,h=u-n,d=u+n;for(let b=0;b!==n;++b){let m=t[u+b];if(m!==t[h+b]||m!==t[d+b]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,f=0;f!==n;++f)t[c+f]=t[o+f];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=ji;var ci=class extends fn{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Xi;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Gr.prototype.ValueTypeName="color";var li=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};li.prototype.ValueTypeName="number";var xo=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),f=e*o;for(let l=f+o;f!==l;f+=4)dt.slerpFlat(r,0,a,f-o,a,f,c);return r}},hi=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends fn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Xi;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Li.prototype.ValueTypeName="vector";var kr=class{constructor(e="",t=-1,n=[],s=ku){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(zp(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],f=[];c.push((o+r-1)%r,o,(o+1)%r),f.push(0,1,0);let l=Bp(c);c=cu(c,1,l),f=cu(f,1,l),!s&&c[0]===0&&(c.push(r),f.push(f[0])),a.push(new li(".morphTargetInfluences["+t[o].name+"]",c,f).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let f=e[o],l=f.name.match(r);if(l&&l.length>1){let u=l[1],h=s[u];h||(s[u]=h=[]),h.push(f)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Hp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return li;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return Gr;case"quaternion":return hi;case"bool":case"boolean":return ci;case"string":return ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function zp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Hp(i.type);if(i.times===void 0){let n=[],s=[];Op(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ya(i.settings)&&(t.settings={inTangents:wi(i.settings.inTangents,Float32Array),outTangents:wi(i.settings.outTangents,Float32Array)}),t}var kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(hu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!hu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function hu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _o=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return f.push(l,u),this},this.removeHandler=function(l){let u=f.indexOf(l);return u!==-1&&f.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=f.length;u<h;u+=2){let d=f[u],b=f[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new _o,Kn=class{constructor(e){this.manager=e!==void 0?e:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},yc=class extends Error{constructor(e,t){super(e),this.response=t}},qs=class extends Kn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;let l=ai[e],u=f.body.getReader(),h=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),d=h?parseInt(h):0,b=d!==0,m=0,p=new ReadableStream({start(g){v();function v(){u.read().then(({done:A,value:y})=>{if(A)g.close();else{m+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:b,loaded:m,total:d});for(let E=0,T=l.length;E<T;E++){let x=l[E];x.onProgress&&x.onProgress(M)}g.enqueue(y),v()}},A=>{g.error(A)})}}});return new Response(p)}else throw new yc(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(c){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return f.json();default:if(o==="")return f.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return f.arrayBuffer().then(b=>d.decode(b))}}}).then(f=>{kn.add(`file:${e}`,f);let l=ai[e];delete ai[e];for(let u=0,h=l.length;u<h;u++){let d=l[u];d.onLoad&&d.onLoad(f)}}).catch(f=>{let l=ai[e];if(l===void 0)throw this.manager.itemError(e),f;delete ai[e];for(let u=0,h=l.length;u<h;u++){let d=l[u];d.onError&&d.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=new WeakMap,yo=class extends Kn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ds.get(a);u===void 0&&(u=[],Ds.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Os("img");function c(){l(),t&&t(this);let u=Ds.get(this)||[];for(let h=0;h<u.length;h++){let d=u[h];d.onLoad&&d.onLoad(this)}Ds.delete(this),r.manager.itemEnd(e)}function f(u){l(),s&&s(u),kn.remove(`image:${e}`);let h=Ds.get(this)||[];for(let d=0;d<h.length;d++){let b=h[d];b.onError&&b.onError(u)}Ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Hr=class extends Kn{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,a=new yo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},is=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zr=class extends is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uc=new we,uu=new L,du=new L,Xs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,f=s?s.y/r.y:0;e.coordinateSystem===Bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+f,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+f,0,0,.5,.5,0,0,0,1),t.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ja=new L,qa=new dt,Gn=new L,Vr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ja,qa,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,qa,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ja,qa,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,qa,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new L,gu=new Ne,pu=new Ne,St=class extends Vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,gu,pu),t.subVectors(pu,gu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,f=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/f,s*=a.width/c,n*=a.height/f}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vc=class extends Xs{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Yi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Wr=class extends is{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Mc=class extends Xs{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0}},ss=class extends is{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends Vr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,a=r+f*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sc=class extends Xs{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pi=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Sc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var di=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var dc=new WeakMap,Kr=class extends Kn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(f=>{dc.has(a)===!0?(s&&s(dc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(f),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(f){return kn.add(`image-bitmap:${e}`,f),t&&t(f),r.manager.itemEnd(e),f}).catch(function(f){s&&s(f),dc.set(c,f),kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=-90,Fs=1,vo=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Ls,Fs,e,t);s.layers=this.layers,this.add(s);let r=new St(Ls,Fs,e,t);r.layers=this.layers,this.add(r);let a=new St(Ls,Fs,e,t);a.layers=this.layers,this.add(a);let o=new St(Ls,Fs,e,t);o.layers=this.layers,this.add(o);let c=new St(Ls,Fs,e,t);c.layers=this.layers,this.add(c);let f=new St(Ls,Fs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let f of t)this.remove(f);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,f,l]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,h,d),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Mo=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Qc="\\[\\]\\.:\\/",Vp=new RegExp("["+Qc+"]","g"),Zc="[^"+Qc+"]",Wp="[^"+Qc.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",Zc),Jp=/(WCOD+)?/.source.replace("WCOD",Wp),qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zc),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zc),jp=new RegExp("^"+Kp+Jp+qp+Xp+"$"),Yp=["material","materials","bones","map"],wc=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vp,"")}static parseTrackName(e){let t=jp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===f){f=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}let a=e[s];if(a===void 0){let f=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=wc;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pv=new Float32Array(1);var sl=class sl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};sl.prototype.isMatrix2=!0;var Ec=sl;function $c(i,e,t,n){let s=Qp(n);switch(t){case Vc:return i*e;case er:return i*e/s.components*s.byteLength;case Do:return i*e/s.components*s.byteLength;case Bi:return i*e*2/s.components*s.byteLength;case Lo:return i*e*2/s.components*s.byteLength;case Wc:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case Fo:return i*e*4/s.components*s.byteLength;case jr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:case Bo:return Math.max(i,16)*Math.max(e,8)/4;case Po:case Uo:return Math.max(i,8)*Math.max(e,8)/2;case Oo:case Go:case Ho:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case $r:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ef:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rf:case af:case of:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ff:case cf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ea:case lf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qp(i){switch(i){case ln:case Gc:return{byteLength:1,components:1};case Zs:case kc:case Nn:return{byteLength:2,components:1};case Ro:case Io:return{byteLength:2,components:4};case Pn:case Co:case pn:return{byteLength:4,components:1};case Hc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ed(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $p(i){let e=new WeakMap;function t(o,c){let f=o.array,l=o.usage,u=f.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,f,l),o.onUploadCallback();let d;if(f instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)d=i.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)d=i.SHORT;else if(f instanceof Uint32Array)d=i.UNSIGNED_INT;else if(f instanceof Int32Array)d=i.INT;else if(f instanceof Int8Array)d=i.BYTE;else if(f instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:d,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,f){let l=c.array,u=c.updateRanges;if(i.bindBuffer(f,o),u.length===0)i.bufferSubData(f,0,l);else{u.sort((d,b)=>d.start-b.start);let h=0;for(let d=1;d<u.length;d++){let b=u[h],m=u[d];m.start<=b.start+b.count+1?b.count=Math.max(b.count,m.start+m.count-b.start):(++h,u[h]=m)}u.length=h+1;for(let d=0,b=u.length;d<b;d++){let m=u[d];i.bufferSubData(f,m.start*l.BYTES_PER_ELEMENT,l,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let f=e.get(o);if(f===void 0)e.set(o,t(o,c));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,o,c),f.version=o.version}}return{get:s,remove:r,update:a}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
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
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,J0=`#ifdef USE_ENVMAP
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
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,Z0=`uniform sampler2D dfgLUT;
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
}`,$0=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`#include <common>
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
}`,ob=`#if DEPTH_PACKING == 3200
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
}`,fb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#define LAMBERT
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
}`,bb=`#define LAMBERT
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
}`,xb=`#define MATCAP
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
}`,_b=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,vb=`#define NORMAL
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
}`,Mb=`#define PHONG
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
}`,Sb=`#define PHONG
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
}`,wb=`#define STANDARD
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
}`,Eb=`#define STANDARD
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
}`,Ab=`#define TOON
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
}`,Tb=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Lb=`uniform float rotation;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:a0,aomap_pars_fragment:o0,batching_pars_vertex:f0,batching_vertex:c0,begin_vertex:l0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:g0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:b0,clipping_planes_vertex:x0,color_fragment:_0,color_pars_fragment:y0,color_pars_vertex:v0,color_vertex:M0,common:S0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:E0,displacementmap_pars_vertex:A0,displacementmap_vertex:T0,emissivemap_fragment:C0,emissivemap_pars_fragment:R0,colorspace_fragment:I0,colorspace_pars_fragment:D0,envmap_fragment:L0,envmap_common_pars_fragment:F0,envmap_pars_fragment:P0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:J0,envmap_vertex:U0,fog_vertex:B0,fog_pars_vertex:O0,fog_fragment:G0,fog_pars_fragment:k0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:z0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:W0,lights_pars_begin:K0,lights_toon_fragment:q0,lights_toon_pars_fragment:X0,lights_phong_fragment:j0,lights_phong_pars_fragment:Y0,lights_physical_fragment:Q0,lights_physical_pars_fragment:Z0,lights_fragment_begin:$0,lights_fragment_maps:em,lights_fragment_end:tm,lightprobes_pars_fragment:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:fm,map_particle_fragment:cm,map_particle_pars_fragment:lm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:gm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:bm,normal_fragment_begin:xm,normal_fragment_maps:_m,normal_pars_fragment:ym,normal_pars_vertex:vm,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Tm,opaque_fragment:Cm,packing:Rm,premultiplied_alpha_fragment:Im,project_vertex:Dm,dithering_fragment:Lm,dithering_pars_fragment:Fm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Bm,shadowmap_vertex:Om,shadowmask_pars_fragment:Gm,skinbase_vertex:km,skinning_pars_vertex:Hm,skinning_vertex:zm,skinnormal_vertex:Vm,specularmap_fragment:Wm,specularmap_pars_fragment:Km,tonemapping_fragment:Jm,tonemapping_pars_fragment:qm,transmission_fragment:Xm,transmission_pars_fragment:jm,uv_pars_fragment:Ym,uv_pars_vertex:Qm,uv_vertex:Zm,worldpos_vertex:$m,background_vert:eb,background_frag:tb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:sb,cube_frag:rb,depth_vert:ab,depth_frag:ob,distance_vert:fb,distance_frag:cb,equirect_vert:lb,equirect_frag:hb,linedashed_vert:ub,linedashed_frag:db,meshbasic_vert:gb,meshbasic_frag:pb,meshlambert_vert:mb,meshlambert_frag:bb,meshmatcap_vert:xb,meshmatcap_frag:_b,meshnormal_vert:yb,meshnormal_frag:vb,meshphong_vert:Mb,meshphong_frag:Sb,meshphysical_vert:wb,meshphysical_frag:Eb,meshtoon_vert:Ab,meshtoon_frag:Tb,points_vert:Cb,points_frag:Rb,shadow_vert:Ib,shadow_frag:Db,sprite_vert:Lb,sprite_frag:Fb},le={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},jn={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};jn.physical={uniforms:Yt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var df={r:0,b:0,g:0},Pb=new we,Ad=new Fe;Ad.set(-1,0,0,0,1,0,0,0,1);function Nb(i,e,t,n,s,r){let a=new Ee(0),o=s===!0?0:1,c,f,l=null,u=0,h=null;function d(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let y=v.backgroundBlurriness>0;A=e.get(A,y)}return A}function b(v){let A=!1,y=d(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,A){let y=d(A);y&&(y.isCubeTexture||y.mapping===Xr)?(f===void 0&&(f=new at(new Di(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:fs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Ad),f.material.toneMapped=ke.getTransfer(y.colorSpace)!==Ze,(l!==y||u!==y.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,l=y,u=y.version,h=i.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new at(new ns(2,2),new gn({name:"BackgroundMaterial",uniforms:fs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ke.getTransfer(y.colorSpace)!==Ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||u!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,l=y,u=y.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,A){v.getRGB(df,Yc(i)),t.buffers.color.setClear(df.r,df.g,df.b,A,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:b,addToRenderList:m,dispose:g}}function Ub(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(R,F,P,D,O){let k=!1,V=u(R,D,P,F);r!==V&&(r=V,f(r.object)),k=d(R,D,P,O),k&&b(R,D,P,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(R,F,P,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function f(R){return i.bindVertexArray(R)}function l(R){return i.deleteVertexArray(R)}function u(R,F,P,D){let O=D.wireframe===!0,k=n[F.id];k===void 0&&(k={},n[F.id]=k);let V=R.isInstancedMesh===!0?R.id:0,te=k[V];te===void 0&&(te={},k[V]=te);let K=te[P.id];K===void 0&&(K={},te[P.id]=K);let Y=K[O];return Y===void 0&&(Y=h(c()),K[O]=Y),Y}function h(R){let F=[],P=[],D=[];for(let O=0;O<t;O++)F[O]=0,P[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:P,attributeDivisors:D,object:R,attributes:{},index:null}}function d(R,F,P,D){let O=r.attributes,k=F.attributes,V=0,te=P.getAttributes();for(let K in te)if(te[K].location>=0){let $=O[K],ve=k[K];if(ve===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor)),$===void 0||$.attribute!==ve||ve&&$.data!==ve.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function b(R,F,P,D){let O={},k=F.attributes,V=0,te=P.getAttributes();for(let K in te)if(te[K].location>=0){let $=k[K];$===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&($=R.instanceColor));let ve={};ve.attribute=$,$&&$.data&&(ve.data=$.data),O[K]=ve,V++}r.attributes=O,r.attributesNum=V,r.index=D}function m(){let R=r.newAttributes;for(let F=0,P=R.length;F<P;F++)R[F]=0}function p(R){g(R,0)}function g(R,F){let P=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;P[R]=1,D[R]===0&&(i.enableVertexAttribArray(R),D[R]=1),O[R]!==F&&(i.vertexAttribDivisor(R,F),O[R]=F)}function v(){let R=r.newAttributes,F=r.enabledAttributes;for(let P=0,D=F.length;P<D;P++)F[P]!==R[P]&&(i.disableVertexAttribArray(P),F[P]=0)}function A(R,F,P,D,O,k,V){V===!0?i.vertexAttribIPointer(R,F,P,O,k):i.vertexAttribPointer(R,F,P,D,O,k)}function y(R,F,P,D){m();let O=D.attributes,k=P.getAttributes(),V=F.defaultAttributeValues;for(let te in k){let K=k[te];if(K.location>=0){let Y=O[te];if(Y===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){let $=Y.normalized,ve=Y.itemSize,pe=e.get(Y);if(pe===void 0)continue;let Xe=pe.buffer,Pe=pe.type,Ue=pe.bytesPerElement,q=Pe===i.INT||Pe===i.UNSIGNED_INT||Y.gpuType===Co;if(Y.isInterleavedBufferAttribute){let Q=Y.data,be=Q.stride,De=Y.offset;if(Q.isInstancedInterleavedBuffer){for(let de=0;de<K.locationSize;de++)g(K.location+de,Q.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<K.locationSize;de++)p(K.location+de);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let de=0;de<K.locationSize;de++)A(K.location+de,ve/K.locationSize,Pe,$,be*Ue,(De+ve/K.locationSize*de)*Ue,q)}else{if(Y.isInstancedBufferAttribute){for(let Q=0;Q<K.locationSize;Q++)g(K.location+Q,Y.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Q=0;Q<K.locationSize;Q++)p(K.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Q=0;Q<K.locationSize;Q++)A(K.location+Q,ve/K.locationSize,Pe,$,ve*Ue,ve/K.locationSize*Q*Ue,q)}}else if(V!==void 0){let $=V[te];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(K.location,$);break;case 3:i.vertexAttrib3fv(K.location,$);break;case 4:i.vertexAttrib4fv(K.location,$);break;default:i.vertexAttrib1fv(K.location,$)}}}}v()}function M(){w();for(let R in n){let F=n[R];for(let P in F){let D=F[P];for(let O in D){let k=D[O];for(let V in k)l(k[V].object),delete k[V];delete D[O]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let F=n[R.id];for(let P in F){let D=F[P];for(let O in D){let k=D[O];for(let V in k)l(k[V].object),delete k[V];delete D[O]}}delete n[R.id]}function T(R){for(let F in n){let P=n[F];for(let D in P){let O=P[D];if(O[R.id]===void 0)continue;let k=O[R.id];for(let V in k)l(k[V].object),delete k[V];delete O[R.id]}}}function x(R){for(let F in n){let P=n[F],D=R.isInstancedMesh===!0?R.id:0,O=P[D];if(O!==void 0){for(let k in O){let V=O[k];for(let te in V)l(V[te].object),delete V[te];delete O[k]}delete P[D],Object.keys(P).length===0&&delete n[F]}}}function w(){C(),a=!0,r!==s&&(r=s,f(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:p,disableUnusedAttributes:v}}function Bb(i,e,t){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),t.update(f,n,1)}function a(c,f,l){l!==0&&(i.drawArraysInstanced(n,c,f,l),t.update(f,n,l))}function o(c,f,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,l);let h=0;for(let d=0;d<l;d++)h+=f[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ob(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==mn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ln&&T!==pn&&!x&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp",l=c(f);l!==f&&(Ae("WebGLRenderer:",f,"not supported, using",l,"instead."),f=l);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:b,maxTextureSize:m,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:y,maxSamples:M,samples:E}}function Gb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Cn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||s;return s=h,n=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=l(u,h,0)},this.setState=function(u,h,d){let b=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||b===null||b.length===0||r&&!p)r?l(null):f();else{let v=r?0:n,A=v*4,y=g.clippingState||null;c.value=y,y=l(b,h,A,d);for(let M=0;M!==A;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,h,d,b){let m=u!==null?u.length:0,p=null;if(m!==0){if(p=c.value,b!==!0||p===null){let g=d+m*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,y=d;A!==m;++A,y+=4)a.copy(u[A]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}var sr=4,kb=6,Hb=20,zb=256,na=new Fi,sd=new Ee,rl=null,al=0,ol=0,fl=!1,Vb=new L,cs=new L,ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Vb}=r;rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,al,ol),this._renderer.xr.enabled=fl,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Nn,format:mn,colorSpace:tn,depthBuffer:!1},s=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wb(r)),this._blurMaterial=Jb(r,e,t),this._ggxMaterial=Kb(r,e,t)}return s}_compileMaterial(e){let t=new at(new Pt,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),f=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sd),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new Di,new nn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let m=this._backgroundBox,p=m.material,g=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,g=!0):(p.color.copy(sd),g=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,f[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[A],r.y,r.z)):y===1?(c.up.set(0,0,f[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[A],r.z)):(c.up.set(0,f[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[A]));let M=this._cubeSize;ir(s,y*M,A>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(m,c),u.render(e,c)}u.toneMapping=d,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ni||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,na)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,f=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(f*f-l*l),h=f*1.25,d=u*h,{_lodMax:b}=this,m=this._sizeLods[n],p=3*m*(n>b-sr?n-b+sr:0),g=4*(this._cubeSize-m);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=b-t,ir(r,p,g,3*m,2*m),s.setRenderTarget(r),s.render(o,na),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=b-n,ir(e,p,g,3*m,2*m),s.setRenderTarget(e),s.render(o,na)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let f=o.uniforms;f.envMap.value=e.texture,f.sigma.value=r,f.mipInt.value=this._lodMax-n;let l=this._sizeLods[s],u=3*l*(s>this._lodMax-sr?s-this._lodMax+sr:0),h=4*(this._cubeSize-l);ir(t,u,h,3*l,2*l),a.setRenderTarget(t),a.render(c,na)}};function Wb(i){let e=[],t=[],n=i,s=i-sr+1+kb;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,f=1+o,l=[c,c,f,c,f,f,c,c,f,f,c,f],u=6,h=6,d=3,b=new Float32Array(d*h*u),m=new Float32Array(d*h*u);for(let g=0;g<u;g++){let v=g%3*2/3-1,A=g>2?0:-1,y=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];b.set(y,d*h*g);for(let M=0;M<h;M++){let E=l[M*2]*2-1,T=l[M*2+1]*2-1;g===0?cs.set(1,T,E):g===1?cs.set(-E,1,-T):g===2?cs.set(-E,T,1):g===3?cs.set(-1,T,-E):g===4?cs.set(-E,-1,T):cs.set(E,T,-1),cs.toArray(m,(g*h+M)*d)}}let p=new Pt;p.setAttribute("position",new rt(b,d)),p.setAttribute("outputDirection",new rt(m,d)),t.push(new at(p,null)),n>sr&&n--}return{lodMeshes:t,sizeLods:e}}function rd(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Kb(i,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bf(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Jb(i,e,t){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bf(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ad(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function od(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pf=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Di(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:qn});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=vt),new vo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function qb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Eo||d===Ao)if(e.has(h)){let b=e.get(h).texture;return o(b,h.mapping)}else{let b=h.image;if(b&&b.height>0){let m=new pf(b.height);return m.fromEquirectangularTexture(i,h),e.set(h,m),h.addEventListener("dispose",f),o(m.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,b=d===Eo||d===Ao,m=d===Ni||d===as;if(b||m){let p=t.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new ar(i)),p=b?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let v=h.image;return b&&v&&v.height>0||m&&v&&c(v)?(n===null&&(n=new ar(i)),p=b?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",l),p.texture):null}}}return h}function o(h,d){return d===Eo?h.mapping=Ni:d===Ao&&(h.mapping=as),h}function c(h){let d=0,b=6;for(let m=0;m<b;m++)h[m]!==void 0&&d++;return d===b}function f(h){let d=h.target;d.removeEventListener("dispose",f);let b=e.get(d);b!==void 0&&(e.delete(d),b.dispose())}function l(h){let d=h.target;d.removeEventListener("dispose",l);let b=t.get(d);b!==void 0&&(t.delete(d),b.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Xb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qi("WebGLRenderer: "+n+" extension not supported."),s}}}function jb(i,e,t,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let b in h.attributes)e.remove(h.attributes[b]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function f(u){let h=[],d=u.index,b=u.attributes.position,m=0;if(b===void 0)return;if(d!==null){let v=d.array;m=d.version;for(let A=0,y=v.length;A<y;A+=3){let M=v[A+0],E=v[A+1],T=v[A+2];h.push(M,E,E,T,T,M)}}else{let v=b.array;m=b.version;for(let A=0,y=v.length/3-1;A<y;A+=3){let M=A+0,E=A+1,T=A+2;h.push(M,E,E,T,T,M)}}let p=new(b.count>=65535?Ir:Rr)(h,1);p.version=m;let g=r.get(u);g&&e.remove(g),r.set(u,p)}function l(u){let h=r.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&f(u)}else f(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function Yb(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function f(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,u*a,d),t.update(h,n,d))}function l(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,d);let m=0;for(let p=0;p<d;p++)m+=h[p];t.update(m,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=l}function Qb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zb(i,e,t){let n=new WeakMap,s=new tt;function r(a,o,c){let f=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0,h=n.get(o);if(h===void 0||h.count!==u){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;d===!0&&(A=1),b===!0&&(A=2),m===!0&&(A=3);let y=o.attributes.position.count*A,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*M*4*u),T=new Tr(E,y,M,u);T.type=pn,T.needsUpdate=!0;let x=A*4;for(let C=0;C<u;C++){let R=p[C],F=g[C],P=v[C],D=y*M*4*C;for(let O=0;O<R.count;O++){let k=O*x;d===!0&&(s.fromBufferAttribute(R,O),E[D+k+0]=s.x,E[D+k+1]=s.y,E[D+k+2]=s.z,E[D+k+3]=0),b===!0&&(s.fromBufferAttribute(F,O),E[D+k+4]=s.x,E[D+k+5]=s.y,E[D+k+6]=s.z,E[D+k+7]=0),m===!0&&(s.fromBufferAttribute(P,O),E[D+k+8]=s.x,E[D+k+9]=s.y,E[D+k+10]=s.z,E[D+k+11]=P.itemSize===4?s.w:1)}}h={count:u,texture:T,size:new Ne(y,M)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let m=0;m<f.length;m++)d+=f[m];let b=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",f)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function $b(i,e,t,n,s){let r=new WeakMap;function a(f){let l=s.render.frame,u=f.geometry,h=e.get(f,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),r.get(f)!==l&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),r.set(f,l))),f.isSkinnedMesh){let d=f.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function c(f){let l=f.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}var ex={[Lc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[Nc]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[qr]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function tx(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,f=new Pt;f.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new en([0,2,0,0,2,0],2));let l=new lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new at(f,l),h=new Fi(-1,1,1,-1,0,1),d=null,b=null,m=!1,p,g=null,v=[],A=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let E=0;E<v.length;E++){let T=v[E];T.setSize&&T.setSize(y,M)}},this.setEffects=function(y){v=y,A=v.length>0&&v[0].isRenderPass===!0;let M=a.width,E=a.height;v.length>0&&o===null&&(o=new Wt(M,E,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(M,E,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<v.length;T++){let x=v[T];x.setSize&&x.setSize(M,E)}},this.begin=function(y,M){if(m||y.toneMapping===Ln&&v.length===0)return!1;if(g=M,M!==null){let E=M.width,T=M.height;(a.width!==E||a.height!==T)&&this.setSize(E,T)}return A===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Ln,!0},this.hasRenderPass=function(){return A},this.end=function(y,M){y.toneMapping=p,m=!0;let E=a,T=o;for(let x=0;x<v.length;x++){let w=v[x];w.enabled!==!1&&(w.render(y,T,E,M),w.needsSwap!==!1&&(E=T,T=T===o?c:o))}if(d!==y.outputColorSpace||b!==y.toneMapping){d=y.outputColorSpace,b=y.toneMapping,l.defines={},ke.getTransfer(d)===Ze&&(l.defines.SRGB_TRANSFER="");let x=ex[b];x&&(l.defines[x]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(u,h),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),f.dispose(),l.dispose()}}var Td=new Bt,hl=new Ii(1,1),Cd=new Tr,Rd=new ao,Id=new Pr,fd=[],cd=[],ld=new Float32Array(16),hd=new Float32Array(9),ud=new Float32Array(4);function or(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xf(i,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Gt(t,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),kt(t,n)}}function ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Gt(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),kt(t,n)}}function fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Gt(t,n))return;ld.set(n),i.uniformMatrix4fv(this.addr,!1,ld),kt(t,n)}}function cx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hl.compareFunction=t.isReversedDepthBuffer()?uf:hf,r=hl):r=Td,t.setTexture2D(e||r,s)}function xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rd,s)}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Id,s)}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function vx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ax;case 35675:return ox;case 35676:return fx;case 5124:case 35670:return cx;case 35667:case 35671:return lx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return gx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}function Mx(i,e){i.uniform1fv(this.addr,e)}function Sx(i,e){let t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function wx(i,e){let t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function Ex(i,e){let t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function Ax(i,e){let t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tx(i,e){let t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cx(i,e){let t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rx(i,e){i.uniform1iv(this.addr,e)}function Ix(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Lx(i,e){i.uniform4iv(this.addr,e)}function Fx(i,e){i.uniform1uiv(this.addr,e)}function Px(i,e){i.uniform2uiv(this.addr,e)}function Nx(i,e){i.uniform3uiv(this.addr,e)}function Ux(i,e){i.uniform4uiv(this.addr,e)}function Bx(i,e,t){let n=this.cache,s=e.length,r=xf(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=hl:a=Td;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ox(i,e,t){let n=this.cache,s=e.length,r=xf(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rd,r[a])}function Gx(i,e,t){let n=this.cache,s=e.length,r=xf(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Id,r[a])}function kx(i,e,t){let n=this.cache,s=e.length,r=xf(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function Hx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return wx;case 35666:return Ex;case 35674:return Ax;case 35675:return Tx;case 35676:return Cx;case 5124:case 35670:return Rx;case 35667:case 35671:return Ix;case 35668:case 35672:return Dx;case 35669:case 35673:return Lx;case 5125:return Fx;case 36294:return Px;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return kx}}var ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vx(t.type)}},dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hx(t.type)}},gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},cl=/(\w+)(\])?(\[|\.)?/g;function dd(i,e){i.seq.push(e),i.map[e.id]=e}function zx(i,e,t){let n=i.name,s=n.length;for(cl.lastIndex=0;;){let r=cl.exec(n),a=cl.lastIndex,o=r[1],c=r[2]==="]",f=r[3];if(c&&(o=o|0),f===void 0||f==="["&&a+2===s){dd(t,f===void 0?new ul(o,i,e):new dl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new gl(o),dd(t,u)),t=u}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);zx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function gd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vx=37297,Wx=0;function Kx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var pd=new Fe;function Jx(i){ke._getMatrix(pd,ke.workingColorSpace,i);let e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case Er:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function md(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kx(i.getShaderSource(e),o)}else return r}function qx(i,e){let t=Jx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Xx={[Lc]:"Linear",[Fc]:"Reinhard",[Pc]:"Cineon",[Nc]:"ACESFilmic",[Bc]:"AgX",[qr]:"Neutral",[Uc]:"Custom"};function jx(i,e){let t=Xx[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gf=new L;function Yx(){ke.getLuminanceCoefficients(gf);let i=gf.x.toFixed(4),e=gf.y.toFixed(4),t=gf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function Zx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $x(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sa(i){return i!==""}function bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(e_,n_)}var t_=new Map;function n_(i,e){let t=Ge[e];if(t===void 0){let n=t_.get(e);if(n!==void 0)t=Ge[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pl(t)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(i){return i.replace(i_,s_)}function s_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var r_={[Jr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function a_(i){return r_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o_={[Ni]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE_UV"};function f_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":o_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var c_={[as]:"ENVMAP_MODE_REFRACTION"};function l_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":c_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h_={[wo]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function u_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":h_[i.combine]||"ENVMAP_BLENDING_NONE"}function d_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=a_(t),f=f_(t),l=l_(t),u=u_(t),h=d_(t),d=Qx(t),b=Zx(r),m=s.createProgram(),p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(sa).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(sa).join(`
`),g.length>0&&(g+=`
`)):(p=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),g=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ln?jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,qx("linearToOutputTexel",t.outputColorSpace),Yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=pl(a),a=bd(a,t),a=xd(a,t),o=pl(o),o=bd(o,t),o=xd(o,t),a=_d(a),o=_d(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=v+p+a,y=v+g+o,M=gd(s,s.VERTEX_SHADER,A),E=gd(s,s.FRAGMENT_SHADER,y);s.attachShader(m,M),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(m)||"",P=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(E)||"",O=F.trim(),k=P.trim(),V=D.trim(),te=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,E);else{let Y=md(s,M,"vertex"),$=md(s,E,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+Y+`
`+$)}else O!==""?Ae("WebGLProgram: Program Info Log:",O):(k===""||V==="")&&(K=!1);K&&(R.diagnostics={runnable:te,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:V,prefix:g}})}s.deleteShader(M),s.deleteShader(E),x=new rr(s,m),w=$x(s,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,Vx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}var p_=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bl(e),t.set(e,n)),n}},bl=class{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}};function m_(i){return i===Bi||i===$r||i===ea}function b_(i,e,t,n,s,r){let a=new Cr,o=new ml,c=new Set,f=[],l=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,C,R,F,P){let D=R.fog,O=F.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,te=e.get(x.envMap||k,V),K=te&&te.mapping===Xr?te.image.height:null,Y=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ve=$!==void 0?$.length:0,pe=0;O.morphAttributes.position!==void 0&&(pe=1),O.morphAttributes.normal!==void 0&&(pe=2),O.morphAttributes.color!==void 0&&(pe=3);let Xe,Pe,Ue,q;if(Y){let ht=jn[Y];Xe=ht.vertexShader,Pe=ht.fragmentShader}else{Xe=x.vertexShader,Pe=x.fragmentShader;let ht=o.getVertexShaderStage(x),Ye=o.getFragmentShaderStage(x);o.update(x,ht,Ye),Ue=ht.id,q=Ye.id}let Q=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,de=F.isBatchedMesh===!0,He=!!x.map,Ut=!!x.matcap,Ve=!!te,je=!!x.aoMap,lt=!!x.lightMap,Je=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,zt=!!x.displacementMap,sn=!!x.emissiveMap,yt=!!x.metalnessMap,Dt=!!x.roughnessMap,B=x.anisotropy>0,Kt=x.clearcoat>0,$e=x.dispersion>0,I=x.retroreflectivity>0,_=x.iridescence>0,G=x.sheen>0,W=x.transmission>0,X=B&&!!x.anisotropyMap,ie=Kt&&!!x.clearcoatMap,se=Kt&&!!x.clearcoatNormalMap,j=Kt&&!!x.clearcoatRoughnessMap,ee=_&&!!x.iridescenceMap,re=_&&!!x.iridescenceThicknessMap,Te=G&&!!x.sheenColorMap,ce=G&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Ce=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Be=W&&!!x.transmissionMap,U=W&&!!x.thicknessMap,oe=!!x.gradientMap,Z=!!x.alphaMap,fe=x.alphaTest>0,ge=!!x.alphaHash,ne=!!x.extensions,Re=Ln;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Re=i.toneMapping);let Me={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Xe,fragmentShader:Pe,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:de,batchingColor:de&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:Ut,envMap:Ve,envMapMode:Ve&&te.mapping,envMapCubeUVHeight:K,aoMap:je,lightMap:lt,bumpMap:Je,normalMap:xt,displacementMap:zt,emissiveMap:sn,normalMapObjectSpace:xt&&x.normalMapType===zu,normalMapTangentSpace:xt&&x.normalMapType===nr,packedNormalMap:xt&&x.normalMapType===nr&&m_(x.normalMap.format),metalnessMap:yt,roughnessMap:Dt,anisotropy:B,anisotropyMap:X,clearcoat:Kt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:j,dispersion:$e,retroreflection:I,iridescence:_,iridescenceMap:ee,iridescenceThicknessMap:re,sheen:G,sheenColorMap:Te,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:Ce,specularIntensityMap:Ie,transmission:W,transmissionMap:Be,thicknessMap:U,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:fe,alphaHash:ge,combine:x.combine,mapUv:He&&b(x.map.channel),aoMapUv:je&&b(x.aoMap.channel),lightMapUv:lt&&b(x.lightMap.channel),bumpMapUv:Je&&b(x.bumpMap.channel),normalMapUv:xt&&b(x.normalMap.channel),displacementMapUv:zt&&b(x.displacementMap.channel),emissiveMapUv:sn&&b(x.emissiveMap.channel),metalnessMapUv:yt&&b(x.metalnessMap.channel),roughnessMapUv:Dt&&b(x.roughnessMap.channel),anisotropyMapUv:X&&b(x.anisotropyMap.channel),clearcoatMapUv:ie&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&b(x.sheenRoughnessMap.channel),specularMapUv:ae&&b(x.specularMap.channel),specularColorMapUv:Ce&&b(x.specularColorMap.channel),specularIntensityMapUv:Ie&&b(x.specularIntensityMap.channel),transmissionMapUv:Be&&b(x.transmissionMap.channel),thicknessMapUv:U&&b(x.thicknessMap.channel),alphaMapUv:Z&&b(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xt||B),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(He||Z),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&ke.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:sn&&x.emissiveMap.isVideoTexture===!0&&ke.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Ot,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(w,x),v(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let w=d[x.type],C;if(w){let R=jn[w];C=td.clone(R.uniforms)}else C=x.uniforms;return C}function y(x,w){let C=l.get(w);return C!==void 0?++C.usedTimes:(C=new g_(i,w,x,s),f.push(C),l.set(w,C)),C}function M(x){if(--x.usedTimes===0){let w=f.indexOf(x);f[w]=f[f.length-1],f.pop(),l.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:f,dispose:T}}function x_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function __(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Md(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,b,m,p,g){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:b,materialVariant:a(h),groupOrder:m,renderOrder:h.renderOrder,z:p,group:g},i[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=b,v.materialVariant=a(h),v.groupOrder=m,v.renderOrder=h.renderOrder,v.z=p,v.group=g),e++,v}function c(h,d,b,m,p,g,v){v.reversedDepth===!0&&(p=-p);let A=o(h,d,b,m,p,g);b.transmission>0?n.push(A):b.transparent===!0?s.push(A):t.push(A)}function f(h,d,b,m,p,g){let v=o(h,d,b,m,p,g);b.transmission>0?n.unshift(v):b.transparent===!0?s.unshift(v):t.unshift(v)}function l(h,d){t.length>1&&t.sort(h||__),n.length>1&&n.sort(d||vd),s.length>1&&s.sort(d||vd)}function u(){for(let h=e,d=i.length;h<d;h++){let b=i[h];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:f,finish:u,sort:l}}function y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Md,i.set(n,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function v_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ee};break;case"SpotLight":t={position:new L,direction:new L,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function M_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var S_=0;function w_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E_(i){let e=new v_,t=M_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new L);let s=new L,r=new we,a=new we;function o(f){let l=0,u=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,b=0,m=0,p=0,g=0,v=0,A=0,y=0,M=0,E=0,T=0,x=0,w=0,C=0;f.sort(w_);for(let F=0,P=f.length;F<P;F++){let D=f[F],O=D.color,k=D.intensity,V=D.distance,te=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bi?te=D.shadow.map.texture:te=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)l+=O.r*k,u+=O.g*k,h+=O.b*k;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],k);C++}else if(D.isSunLight){let K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,$=t.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[b]=$,n.sunShadowMap[b]=te;let ve=Y.getViewportCount();for(let pe=0;pe<ve;pe++)n.sunShadowMatrix[m+pe]=Y.getMatrix(pe),n.sunShadowCascade[m+pe]=Y._cascadeData[pe];m+=ve,b++}n.sun[d]=K,d++}else if(D.isDirectionalLight){let K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,$=t.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=K,p++}else if(D.isSpotLight){let K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(O).multiplyScalar(k),K.distance=V,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[v]=K;let Y=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Y.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[v]=Y.matrix,D.castShadow){let $=t.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=te,T++}v++}else if(D.isRectAreaLight){let K=e.get(D);K.color.copy(O).multiplyScalar(k),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=K,A++}else if(D.isPointLight){let K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){let Y=D.shadow,$=t.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=K,g++}else if(D.isHemisphereLight){let K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(k),K.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[y]=K,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=h;let R=n.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==A||R.hemiLength!==y||R.numSunShadows!==b||R.numDirectionalShadows!==M||R.numPointShadows!==E||R.numSpotShadows!==T||R.numSpotMaps!==x||R.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=A,n.point.length=g,n.hemi.length=y,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,R.sunLength=d,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=A,R.hemiLength=y,R.numSunShadows=b,R.numDirectionalShadows=M,R.numPointShadows=E,R.numSpotShadows=T,R.numSpotMaps=x,R.numLightProbes=C,n.version=S_++)}function c(f,l){let u=0,h=0,d=0,b=0,m=0,p=0,g=l.matrixWorldInverse;for(let v=0,A=f.length;v<A;v++){let y=f[v];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(y.isSpotLight){let M=n.spot[b];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),b++}else if(y.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function Sd(i){let e=new E_(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function f(){e.setup(t)}function l(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:f,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function A_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Sd(i),e.set(s,[o])):r>=a.length?(o=new Sd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`,R_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],I_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],wd=new we,ia=new L,ll=new L;function D_(i,e,t){let n=new Ws,s=new Ne,r=new Ne,a=new tt,o=new ho,c=new uo,f={},l=t.maxTextureSize,u={[Jn]:Ot,[Ot]:Jn,[cn]:cn},h=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:T_,fragmentShader:C_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let b=new Pt;b.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new at(b,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let g=this.type;this.render=function(E,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===xu&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let P=g!==this.type;P&&T.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=E.length;D<O;D++){let k=E[D],V=k.shadow;if(V===void 0){Ae("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let te=V.getFrameExtents();s.multiply(te),r.copy(V.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/te.x),s.x=r.x*te.x,V.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/te.y),s.y=r.y*te.y,V.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||P===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===js){if(k.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Wt(s.x,s.y,{format:Bi,type:Nn,minFilter:vt,magFilter:vt,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new Ii(s.x,s.y,pn),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=Hn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt}else k.isPointLight?(V.map=new pf(s.x),V.map.depthTexture=new co(s.x,Pn)):(V.map=new Wt(s.x,s.y),V.map.depthTexture=new Ii(s.x,s.y,Pn)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=Hn,this.type===Jr?(V.map.depthTexture.compareFunction=K?uf:hf,V.map.depthTexture.minFilter=vt,V.map.depthTexture.magFilter=vt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Y=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();k.isPointLight!==!0&&V.updateMatrices(k,x);for(let $=0;$<Y;$++){let ve=V.getCamera($);if(k.isPointLight){let pe=V.camera,Xe=V.matrix,Pe=k.distance||pe.far;Pe!==pe.far&&(pe.far=Pe,pe.updateProjectionMatrix()),ia.setFromMatrixPosition(k.matrixWorld),pe.position.copy(ia),ll.copy(pe.position),ll.add(R_[$]),pe.up.copy(I_[$]),pe.lookAt(ll),pe.updateMatrixWorld(),Xe.makeTranslation(-ia.x,-ia.y,-ia.z),wd.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(wd,pe.coordinateSystem,pe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,$),i.clear();else{$===0&&(i.setRenderTarget(V.map),i.clear());let pe=V.getViewport($);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a)}n=V.getFrustum($),y(T,x,ve,k,this.type)}V.isPointLightShadow!==!0&&this.type===js&&v(V,x),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,C,R)};function v(E,T){let x=e.update(m);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Wt(s.x,s.y,{format:Bi,type:Nn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,x,h,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,x,d,m,null)}function A(E,T,x,w){let C=null,R=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)C=R;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=C.uuid,P=T.uuid,D=f[F];D===void 0&&(D={},f[F]=D);let O=D[P];O===void 0&&(O=C.clone(),D[P]=O,T.addEventListener("dispose",M)),C=O}if(C.visible=T.visible,C.wireframe=T.wireframe,w===js?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=x}return C}function y(E,T,x,w,C){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===js)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let P=e.update(E),D=E.material;if(Array.isArray(D)){let O=P.groups;for(let k=0,V=O.length;k<V;k++){let te=O[k],K=D[te.materialIndex];if(K&&K.visible){let Y=A(E,K,w,C);E.onBeforeShadow(i,E,T,x,P,Y,te),i.renderBufferDirect(x,null,P,Y,E,te),E.onAfterShadow(i,E,T,x,P,Y,te)}}}else if(D.visible){let O=A(E,D,w,C);E.onBeforeShadow(i,E,T,x,P,O,null),i.renderBufferDirect(x,null,P,O,E,null),E.onAfterShadow(i,E,T,x,P,O,null)}}let F=E.children;for(let P=0,D=F.length;P<D;P++)y(F[P],T,x,w,C)}function M(E){E.target.removeEventListener("dispose",M);for(let x in f){let w=f[x],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function L_(i,e){function t(){let U=!1,oe=new tt,Z=null,fe=new tt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!U&&(i.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ne,Re,Me,ht){ht===!0&&(ge*=Me,ne*=Me,Re*=Me),oe.set(ge,ne,Re,Me),fe.equals(oe)===!1&&(i.clearColor(ge,ne,Re,Me),fe.copy(oe))},reset:function(){U=!1,Z=null,fe.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,Z=null,fe=null,ge=null;return{setReversed:function(ne){if(oe!==ne){let Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;let Me=ge;ge=null,this.setClear(Me)}},getReversed:function(){return oe},setTest:function(ne){ne?Q(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ne){Z!==ne&&!U&&(i.depthMask(ne),Z=ne)},setFunc:function(ne){if(oe&&(ne=$u[ne]),fe!==ne){switch(ne){case Qa:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ne}},setLocked:function(ne){U=ne},setClear:function(ne){ge!==ne&&(ge=ne,oe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){U=!1,Z=null,fe=null,ge=null,oe=!1}}}function s(){let U=!1,oe=null,Z=null,fe=null,ge=null,ne=null,Re=null,Me=null,ht=null;return{setTest:function(Ye){U||(Ye?Q(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ye){oe!==Ye&&!U&&(i.stencilMask(Ye),oe=Ye)},setFunc:function(Ye,wn,Bn){(Z!==Ye||fe!==wn||ge!==Bn)&&(i.stencilFunc(Ye,wn,Bn),Z=Ye,fe=wn,ge=Bn)},setOp:function(Ye,wn,Bn){(ne!==Ye||Re!==wn||Me!==Bn)&&(i.stencilOp(Ye,wn,Bn),ne=Ye,Re=wn,Me=Bn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){ht!==Ye&&(i.clearStencil(Ye),ht=Ye)},reset:function(){U=!1,oe=null,Z=null,fe=null,ge=null,ne=null,Re=null,Me=null,ht=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,f=new WeakMap,l={},u={},h={},d=new WeakMap,b=[],m=null,p=!1,g=null,v=null,A=null,y=null,M=null,E=null,T=null,x=new Ee(0,0,0),w=0,C=!1,R=null,F=null,P=null,D=null,O=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=te>=1):K.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=te>=2);let Y=null,$={},ve=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Xe=new tt().fromArray(ve),Pe=new tt().fromArray(pe);function Ue(U,oe,Z,fe){let ge=new Uint8Array(4),ne=i.createTexture();i.bindTexture(U,ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<Z;Re++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(oe+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ne}let q={};q[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ns),Je(!1),xt(Ac),Q(i.CULL_FACE),je(qn);function Q(U){l[U]!==!0&&(i.enable(U),l[U]=!0)}function be(U){l[U]!==!1&&(i.disable(U),l[U]=!1)}function De(U,oe){return h[U]!==oe?(i.bindFramebuffer(U,oe),h[U]=oe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function de(U,oe){let Z=b,fe=!1;if(U){Z=d.get(oe),Z===void 0&&(Z=[],d.set(oe,Z));let ge=U.textures;if(Z.length!==ge.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=ge.length;ne<Re;ne++)Z[ne]=i.COLOR_ATTACHMENT0+ne;Z.length=ge.length,fe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Z)}function He(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let Ut={[rs]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};Ut[Mu]=i.MIN,Ut[Su]=i.MAX;let Ve={[wu]:i.ZERO,[Eu]:i.ONE,[Au]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function je(U,oe,Z,fe,ge,ne,Re,Me,ht,Ye){if(U===qn){p===!0&&(be(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),U!==_u){if(U!==g||Ye!==C){if((v!==rs||M!==rs)&&(i.blendEquation(i.FUNC_ADD),v=rs,M=rs),Ye)switch(U){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",U);break}else switch(U){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rc:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",U);break}A=null,y=null,E=null,T=null,x.set(0,0,0),w=0,g=U,C=Ye}return}ge=ge||oe,ne=ne||Z,Re=Re||fe,(oe!==v||ge!==M)&&(i.blendEquationSeparate(Ut[oe],Ut[ge]),v=oe,M=ge),(Z!==A||fe!==y||ne!==E||Re!==T)&&(i.blendFuncSeparate(Ve[Z],Ve[fe],Ve[ne],Ve[Re]),A=Z,y=fe,E=ne,T=Re),(Me.equals(x)===!1||ht!==w)&&(i.blendColor(Me.r,Me.g,Me.b,ht),x.copy(Me),w=ht),g=U,C=!1}function lt(U,oe){U.side===cn?be(i.CULL_FACE):Q(i.CULL_FACE);let Z=U.side===Ot;oe&&(Z=!Z),Je(Z),U.blending===Ys&&U.transparent===!1?je(qn):je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let fe=U.stencilWrite;o.setTest(fe),fe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),sn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(U){R!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),R=U)}function xt(U){U!==mu?(Q(i.CULL_FACE),U!==F&&(U===Ac?i.cullFace(i.BACK):U===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),F=U}function zt(U){U!==P&&(V&&i.lineWidth(U),P=U)}function sn(U,oe,Z){U?(Q(i.POLYGON_OFFSET_FILL),(D!==oe||O!==Z)&&(D=oe,O=Z,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Z))):be(i.POLYGON_OFFSET_FILL)}function yt(U){U?Q(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Dt(U){U===void 0&&(U=i.TEXTURE0+k-1),Y!==U&&(i.activeTexture(U),Y=U)}function B(U,oe,Z){Z===void 0&&(Y===null?Z=i.TEXTURE0+k-1:Z=Y);let fe=$[Z];fe===void 0&&(fe={type:void 0,texture:void 0},$[Z]=fe),(fe.type!==U||fe.texture!==oe)&&(Y!==Z&&(i.activeTexture(Z),Y=Z),i.bindTexture(U,oe||q[U]),fe.type=U,fe.texture=oe)}function Kt(){let U=$[Y];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function G(){try{i.texSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function ie(){try{i.texStorage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function se(){try{i.texStorage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function j(){try{i.texImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function ee(){try{i.texImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function re(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function Te(U,oe){u[U]!==oe&&(i.pixelStorei(U,oe),u[U]=oe)}function ce(U){Xe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Xe.copy(U))}function ae(U){Pe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function Ce(U,oe){let Z=f.get(oe);Z===void 0&&(Z=new WeakMap,f.set(oe,Z));let fe=Z.get(U);fe===void 0&&(fe=i.getUniformBlockIndex(oe,U.name),Z.set(U,fe))}function Ie(U,oe){let fe=f.get(oe).get(U);c.get(oe)!==fe&&(i.uniformBlockBinding(oe,fe,U.__bindingPointIndex),c.set(oe,fe))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},u={},Y=null,$={},h={},d=new WeakMap,b=[],m=null,p=!1,g=null,v=null,A=null,y=null,M=null,E=null,T=null,x=new Ee(0,0,0),w=0,C=!1,R=null,F=null,P=null,D=null,O=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:be,bindFramebuffer:De,drawBuffers:de,useProgram:He,setBlending:je,setMaterial:lt,setFlipSided:Je,setCullFace:xt,setLineWidth:zt,setPolygonOffset:sn,setScissorTest:yt,activeTexture:Dt,bindTexture:B,unbindTexture:Kt,compressedTexImage2D:$e,compressedTexImage3D:I,texImage2D:j,texImage3D:ee,pixelStorei:Te,getParameter:re,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:ie,texStorage3D:se,texSubImage2D:_,texSubImage3D:G,compressedTexSubImage2D:W,compressedTexSubImage3D:X,scissor:ce,viewport:ae,reset:Be}}function F_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ne,l=new WeakMap,u=new Set,h,d=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,_){return b?new OffscreenCanvas(I,_):Os("canvas")}function p(I,_,G){let W=1,X=$e(I);if((X.width>G||X.height>G)&&(W=G/Math.max(X.width,X.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ie=Math.floor(W*X.width),se=Math.floor(W*X.height);h===void 0&&(h=m(ie,se));let j=_?m(ie,se):h;return j.width=ie,j.height=se,j.getContext("2d").drawImage(I,0,0,ie,se),Ae("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ie+"x"+se+")."),j}else return"data"in I&&Ae("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),I;return I}function g(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,_,G,W,X,ie=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let se;W&&(se=e.get("EXT_texture_norm16"),se||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8),G===i.UNSIGNED_SHORT&&se&&(j=se.R16_EXT),G===i.SHORT&&se&&(j=se.R16_SNORM_EXT)),_===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),_===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8),G===i.UNSIGNED_SHORT&&se&&(j=se.RG16_EXT),G===i.SHORT&&se&&(j=se.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(G===i.UNSIGNED_SHORT&&se&&(j=se.RGB16_EXT),G===i.SHORT&&se&&(j=se.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){let ee=ie?Er:ke.getTransfer(X);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=ee===Ze?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&se&&(j=se.RGBA16_EXT),G===i.SHORT&&se&&(j=se.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(I,_){let G;return I?_===null||_===Pn||_===$s?G=i.DEPTH24_STENCIL8:_===pn?G=i.DEPTH32F_STENCIL8:_===Zs&&(G=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pn||_===$s?G=i.DEPTH_COMPONENT24:_===pn?G=i.DEPTH_COMPONENT32F:_===Zs&&(G=i.DEPTH_COMPONENT16),G}function E(I,_){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tt&&I.minFilter!==vt?Math.log2(Math.max(_.width,_.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?_.mipmaps.length:1}function T(I){let _=I.target;_.removeEventListener("dispose",T),w(_),_.isVideoTexture&&l.delete(_),_.isHTMLTexture&&u.delete(_)}function x(I){let _=I.target;_.removeEventListener("dispose",x),R(_)}function w(I){let _=n.get(I);if(_.__webglInit===void 0)return;let G=I.source,W=d.get(G);if(W){let X=W[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(I),Object.keys(W).length===0&&d.delete(G)}n.remove(I)}function C(I){let _=n.get(I);i.deleteTexture(_.__webglTexture);let G=I.source,W=d.get(G);delete W[_.__cacheKey],a.memory.textures--}function R(I){let _=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let X=0;X<_.__webglFramebuffer[W].length;X++)i.deleteFramebuffer(_.__webglFramebuffer[W][X]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let G=I.textures;for(let W=0,X=G.length;W<X;W++){let ie=n.get(G[W]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(G[W])}n.remove(I)}let F=0;function P(){F=0}function D(){return F}function O(I){F=I}function k(){let I=F;return I>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function V(I){let _=[];return _.push(I.wrapS),_.push(I.wrapT),_.push(I.wrapR||0),_.push(I.magFilter),_.push(I.minFilter),_.push(I.anisotropy),_.push(I.internalFormat),_.push(I.format),_.push(I.type),_.push(I.generateMipmaps),_.push(I.premultiplyAlpha),_.push(I.flipY),_.push(I.unpackAlignment),_.push(I.colorSpace),_.join()}function te(I,_){let G=n.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let W=I.image;if(W===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{be(G,I,_);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+_)}function K(I,_){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){be(G,I,_);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+_)}function Y(I,_){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){be(G,I,_);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+_)}function $(I,_){let G=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){De(G,I,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+_)}let ve={[Ai]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},pe={[Tt]:i.NEAREST,[To]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Xe={[Wu]:i.NEVER,[ju]:i.ALWAYS,[Ku]:i.LESS,[hf]:i.LEQUAL,[Ju]:i.EQUAL,[uf]:i.GEQUAL,[qu]:i.GREATER,[Xu]:i.NOTEQUAL};function Pe(I,_){if(_.type===pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===vt||_.magFilter===Qs||_.magFilter===os||_.magFilter===Fn||_.minFilter===vt||_.minFilter===Qs||_.minFilter===os||_.minFilter===Fn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ve[_.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ve[_.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ve[_.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,pe[_.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==os&&_.minFilter!==Fn||_.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ue(I,_){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,_.addEventListener("dispose",T));let W=_.source,X=d.get(W);X===void 0&&(X={},d.set(W,X));let ie=V(_);if(ie!==I.__cacheKey){X[ie]===void 0&&(X[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),X[ie].usedTimes++;let se=X[I.__cacheKey];se!==void 0&&(X[I.__cacheKey].usedTimes--,se.usedTimes===0&&C(_)),I.__cacheKey=ie,I.__webglTexture=X[ie].texture}return G}function q(I,_,G){return Math.floor(Math.floor(I/G)/_)}function Q(I,_,G,W){let ie=I.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,G,W,_.data);else{ie.sort((Te,ce)=>Te.start-ce.start);let se=0;for(let Te=1;Te<ie.length;Te++){let ce=ie[se],ae=ie[Te],Ce=ce.start+ce.count,Ie=q(ae.start,_.width,4),Be=q(ce.start,_.width,4);ae.start<=Ce+1&&Ie===Be&&q(ae.start+ae.count-1,_.width,4)===Ie?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ie[se]=ae)}ie.length=se+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Te=0,ce=ie.length;Te<ce;Te++){let ae=ie[Te],Ce=Math.floor(ae.start/4),Ie=Math.ceil(ae.count/4),Be=Ce%_.width,U=Math.floor(Ce/_.width),oe=Ie,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Be,U,oe,Z,G,W,_.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function be(I,_,G){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let X=Ue(I,_),ie=_.source;t.bindTexture(W,I.__webglTexture,i.TEXTURE0+G);let se=n.get(ie);if(ie.version!==se.__version||X===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Z=ke.getPrimaries(ke.workingColorSpace),fe=_.colorSpace===gi?null:ke.getPrimaries(_.colorSpace),ge=_.colorSpace===gi||Z===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=p(_.image,!1,s.maxTextureSize);ee=Kt(_,ee);let re=r.convert(_.format,_.colorSpace),Te=r.convert(_.type),ce=y(_.internalFormat,re,Te,_.normalized,_.colorSpace,_.isVideoTexture);Pe(W,_);let ae,Ce=_.mipmaps,Ie=_.isVideoTexture!==!0,Be=se.__version===void 0||X===!0,U=ie.dataReady,oe=E(_,ee);if(_.isDepthTexture)ce=M(_.format===Ui,_.type),Be&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,ce,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ce,ee.width,ee.height,0,re,Te,null));else if(_.isDataTexture)if(Ce.length>0){Ie&&Be&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Ce[0].width,Ce[0].height);for(let Z=0,fe=Ce.length;Z<fe;Z++)ae=Ce[Z],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Te,ae.data):t.texImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,Te,ae.data);_.generateMipmaps=!1}else Ie?(Be&&t.texStorage2D(i.TEXTURE_2D,oe,ce,ee.width,ee.height),U&&Q(_,ee,re,Te)):t.texImage2D(i.TEXTURE_2D,0,ce,ee.width,ee.height,0,re,Te,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,Ce[0].width,Ce[0].height,ee.depth);for(let Z=0,fe=Ce.length;Z<fe;Z++)if(ae=Ce[Z],_.format!==mn)if(re!==null)if(Ie){if(U)if(_.layerUpdates.size>0){let ge=$c(ae.width,ae.height,_.format,_.type);for(let ne of _.layerUpdates){let Re=ae.data.subarray(ne*ge/ae.data.BYTES_PER_ELEMENT,(ne+1)*ge/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ne,ae.width,ae.height,1,re,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,ee.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,ee.depth,0,ae.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,ee.depth,re,Te,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,ee.depth,0,re,Te,ae.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ie&&Be&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Ce[0].width,Ce[0].height);for(let Z=0,fe=Ce.length;Z<fe;Z++)ae=Ce[Z],_.format!==mn?re!==null?Ie?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,ae.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Te,ae.data):t.texImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,Te,ae.data)}else if(_.isDataArrayTexture)if(Ie){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,ee.width,ee.height,ee.depth),U)if(_.layerUpdates.size>0){let Z=$c(ee.width,ee.height,_.format,_.type);for(let fe of _.layerUpdates){let ge=ee.data.subarray(fe*Z/ee.data.BYTES_PER_ELEMENT,(fe+1)*Z/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ee.width,ee.height,1,re,Te,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,re,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,ee.width,ee.height,ee.depth,0,re,Te,ee.data);else if(_.isData3DTexture)Ie?(Be&&t.texStorage3D(i.TEXTURE_3D,oe,ce,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,re,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ce,ee.width,ee.height,ee.depth,0,re,Te,ee.data);else if(_.isFramebufferTexture){if(Be)if(Ie)t.texStorage2D(i.TEXTURE_2D,oe,ce,ee.width,ee.height);else{let Z=ee.width,fe=ee.height;for(let ge=0;ge<oe;ge++)t.texImage2D(i.TEXTURE_2D,ge,ce,Z,fe,0,re,Te,null),Z>>=1,fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),ee.parentNode!==Z){Z.appendChild(ee),u.add(_),Z.onpaint=fe=>{let ge=fe.changedElements;for(let ne of u)ge.includes(ne.image)&&(ne.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ge=i.RGBA,ne=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ne,Re,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ie&&Be){let Z=$e(Ce[0]);t.texStorage2D(i.TEXTURE_2D,oe,ce,Z.width,Z.height)}for(let Z=0,fe=Ce.length;Z<fe;Z++)ae=Ce[Z],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,re,Te,ae):t.texImage2D(i.TEXTURE_2D,Z,ce,re,Te,ae);_.generateMipmaps=!1}else if(Ie){if(Be){let Z=$e(ee);t.texStorage2D(i.TEXTURE_2D,oe,ce,Z.width,Z.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,Te,ee);g(_)&&v(W),se.__version=ie.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function De(I,_,G){if(_.image.length!==6)return;let W=Ue(I,_),X=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let ie=n.get(X);if(X.version!==ie.__version||W===!0){t.activeTexture(i.TEXTURE0+G);let se=ke.getPrimaries(ke.workingColorSpace),j=_.colorSpace===gi?null:ke.getPrimaries(_.colorSpace),ee=_.colorSpace===gi||se===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let re=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!re&&!Te?ce[ne]=p(_.image[ne],!0,s.maxCubemapSize):ce[ne]=Te?_.image[ne].image:_.image[ne],ce[ne]=Kt(_,ce[ne]);let ae=ce[0],Ce=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type),Be=y(_.internalFormat,Ce,Ie,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,oe=ie.__version===void 0||W===!0,Z=X.dataReady,fe=E(_,ae);Pe(i.TEXTURE_CUBE_MAP,_);let ge;if(re){U&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Be,ae.width,ae.height);for(let ne=0;ne<6;ne++){ge=ce[ne].mipmaps;for(let Re=0;Re<ge.length;Re++){let Me=ge[Re];_.format!==mn?Ce!==null?U?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Be,Me.width,Me.height,0,Me.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Me.width,Me.height,Ce,Ie,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,Be,Me.width,Me.height,0,Ce,Ie,Me.data)}}}else{if(ge=_.mipmaps,U&&oe){ge.length>0&&fe++;let ne=$e(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Be,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,Ce,Ie,ce[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,ce[ne].width,ce[ne].height,0,Ce,Ie,ce[ne].data);for(let Re=0;Re<ge.length;Re++){let ht=ge[Re].image[ne].image;U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,ht.width,ht.height,Ce,Ie,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Be,ht.width,ht.height,0,Ce,Ie,ht.data)}}else{U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Ie,ce[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,Ce,Ie,ce[ne]);for(let Re=0;Re<ge.length;Re++){let Me=ge[Re];U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ce,Ie,Me.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,Be,Ce,Ie,Me.image[ne])}}}g(_)&&v(i.TEXTURE_CUBE_MAP),ie.__version=X.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function de(I,_,G,W,X,ie){let se=r.convert(G.format,G.colorSpace),j=r.convert(G.type),ee=y(G.internalFormat,se,j,G.normalized,G.colorSpace),re=n.get(_),Te=n.get(G);if(Te.__renderTarget=_,!re.__hasExternalTextures){let ce=Math.max(1,_.width>>ie),ae=Math.max(1,_.height>>ie);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,ie,ee,ce,ae,_.depth,0,se,j,null):t.texImage2D(X,ie,ee,ce,ae,0,se,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,X,Te.__webglTexture,0,yt(_)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,X,Te.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(I,_,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),_.depthBuffer){let W=_.depthTexture,X=W&&W.isDepthTexture?W.type:null,ie=M(_.stencilBuffer,X),se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(_),ie,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,I)}else{let W=_.textures;for(let X=0;X<W.length;X++){let ie=W[X],se=r.convert(ie.format,ie.colorSpace),j=r.convert(ie.type),ee=y(ie.internalFormat,se,j,ie.normalized,ie.colorSpace);Dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(_),ee,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(_),ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(I,_,G){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,_.depthTexture);let re=r.convert(_.depthTexture.format),Te=r.convert(_.depthTexture.type),ce;_.depthTexture.format===Hn?ce=i.DEPTH_COMPONENT24:_.depthTexture.format===Ui&&(ce=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,_.width,_.height,0,re,Te,null)}}else te(_.depthTexture,0);let ie=X.__webglTexture,se=yt(_),j=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ee=_.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)Dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,ie,0);else if(_.depthTexture.format===Ui)Dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(I){let _=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",X)};W.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=W}if(I.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let W=0;W<6;W++)Ut(_.__webglFramebuffer[W],I,W);else{let W=I.texture.mipmaps;W&&W.length>0?Ut(_.__webglFramebuffer[0],I,0):Ut(_.__webglFramebuffer,I,0)}else if(G){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),He(_.__webglDepthbuffer[W],I,!1);else{let X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ie)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),He(_.__webglDepthbuffer,I,!1);else{let X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(I,_,G){let W=n.get(I);_!==void 0&&de(W.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ve(I)}function lt(I){let _=I.texture,G=n.get(I),W=n.get(_);I.addEventListener("dispose",x);let X=I.textures,ie=I.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),ie){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let ee=0;ee<_.mipmaps.length;ee++)G.__webglFramebuffer[j][ee]=i.createFramebuffer()}else G.__webglFramebuffer[j]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)G.__webglFramebuffer[j]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(se)for(let j=0,ee=X.length;j<ee;j++){let re=n.get(X[j]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Dt(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<X.length;j++){let ee=X[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let re=r.convert(ee.format,ee.colorSpace),Te=r.convert(ee.type),ce=y(ee.internalFormat,re,Te,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),ae=yt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),He(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)de(G.__webglFramebuffer[j][ee],I,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else de(G.__webglFramebuffer[j],I,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(_)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let j=0,ee=X.length;j<ee;j++){let re=X[j],Te=n.get(re),ce=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Te.__webglTexture),Pe(ce,re),de(G.__webglFramebuffer,I,re,i.COLOR_ATTACHMENT0+j,ce,0),g(re)&&v(ce)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,W.__webglTexture),Pe(j,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)de(G.__webglFramebuffer[ee],I,_,i.COLOR_ATTACHMENT0,j,ee);else de(G.__webglFramebuffer,I,_,i.COLOR_ATTACHMENT0,j,0);g(_)&&v(j),t.unbindTexture()}I.depthBuffer&&Ve(I)}function Je(I){let _=I.textures;for(let G=0,W=_.length;G<W;G++){let X=_[G];if(g(X)){let ie=A(I),se=n.get(X).__webglTexture;t.bindTexture(ie,se),v(ie),t.unbindTexture()}}}let xt=[],zt=[];function sn(I){if(I.samples>0){if(Dt(I)===!1){let _=I.textures,G=I.width,W=I.height,X=i.COLOR_BUFFER_BIT,ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(I),j=_.length>1;if(j)for(let re=0;re<_.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let ee=I.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<_.length;re++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Te=n.get(_[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,G,W,0,0,G,W,X,i.NEAREST),c===!0&&(xt.length=0,zt.length=0,xt.push(i.COLOR_ATTACHMENT0+re),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(xt.push(ie),zt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let re=0;re<_.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Te=n.get(_[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let _=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function yt(I){return Math.min(s.maxSamples,I.samples)}function Dt(I){let _=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function B(I){let _=a.render.frame;l.get(I)!==_&&(l.set(I,_),I.update())}function Kt(I,_){let G=I.colorSpace,W=I.format,X=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==tn&&G!==gi&&(ke.getTransfer(G)===Ze?(W!==mn||X!==ln)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",G)),_}function $e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=je,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function P_(i,e){function t(n,s=gi){let r,a=ke.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===kc)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Vc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===mn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===er)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Fo)return i.RGBA_INTEGER;if(n===jr||n===Yr||n===Qr||n===Zr)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===No||n===Uo||n===Bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Go||n===ko||n===Ho||n===zo||n===$r||n===Vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Go)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ho)return r.COMPRESSED_R11_EAC;if(n===zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===Ko||n===Jo||n===qo||n===Xo||n===jo||n===Yo||n===Qo||n===Zo||n===$o||n===ef||n===tf||n===nf||n===sf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ef)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tf)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nf)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sf)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rf||n===af||n===of)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rf)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===af)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===of)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===cf||n===ea||n===lf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ff)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gn({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_l=class extends zn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,f=null,l=null,u=null,h=null,d=null,b=null,m=typeof XRWebGLBinding<"u",p=new xl,g={},v=t.getContextAttributes(),A=null,y=null,M=[],E=[],T=new Ne,x=null,w=null,C=new St;C.viewport=new tt;let R=new St;R.viewport=new tt;let F=[C,R],P=new Mo,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=M[q];return Q===void 0&&(Q=new Hs,M[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=M[q];return Q===void 0&&(Q=new Hs,M[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=M[q];return Q===void 0&&(Q=new Hs,M[q]=Q),Q.getHandSpace()};function k(q){let Q=E.indexOf(q.inputSource);if(Q===-1)return;let be=M[Q];be!==void 0&&(be.update(q.inputSource,q.frame,f||a),be.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let q=0;q<M.length;q++){let Q=E[q];Q!==null&&(E[q]=null,M[q].disconnect(Q))}D=null,O=null,p.reset();for(let q in g)delete g[q];if(e.setRenderTarget(A),d=null,h=null,u=null,s=null,y=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(q){f=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,De=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?Ui:Hn,De=v.stencil?$s:Pn);let He={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(He),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Wt(h.textureWidth,h.textureHeight,{format:mn,type:ln,depthTexture:new Ii(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Wt(d.framebufferWidth,d.framebufferHeight,{format:mn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),f=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(q){for(let Q=0;Q<q.removed.length;Q++){let be=q.removed[Q],De=E.indexOf(be);De>=0&&(E[De]=null,M[De].disconnect(be))}for(let Q=0;Q<q.added.length;Q++){let be=q.added[Q],De=E.indexOf(be);if(De===-1){for(let He=0;He<M.length;He++)if(He>=E.length){E.push(be),De=He;break}else if(E[He]===null){E[He]=be,De=He;break}if(De===-1)break}let de=M[De];de&&de.connect(be)}}let K=new L,Y=new L;function $(q,Q,be){K.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(be.matrixWorld);let De=K.distanceTo(Y),de=Q.projectionMatrix.elements,He=be.projectionMatrix.elements,Ut=de[14]/(de[10]-1),Ve=de[14]/(de[10]+1),je=(de[9]+1)/de[5],lt=(de[9]-1)/de[5],Je=(de[8]-1)/de[0],xt=(He[8]+1)/He[0],zt=Ut*Je,sn=Ut*xt,yt=De/(-Je+xt),Dt=yt*-Je;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),de[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let B=Ut+yt,Kt=Ve+yt,$e=zt-Dt,I=sn+(De-Dt),_=je*Ve/Kt*B,G=lt*Ve/Kt*B;q.projectionMatrix.makePerspective($e,I,_,G,B,Kt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ve(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,be=q.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(be=p.depthFar)),P.near=R.near=C.near=Q,P.far=R.far=C.far=be,(D!==P.near||O!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,O=P.far),P.layers.mask=q.layers.mask|6,C.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let De=q.parent,de=P.cameras;ve(P,De);for(let He=0;He<de.length;He++)ve(de[He],De);de.length===2?$(P,C,R):P.projectionMatrix.copy(C.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),pe(q,P,De)};function pe(q,Q,be){be===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(q){return g[q]};let Xe=null;function Pe(q,Q){if(l=Q.getViewerPose(f||a),b=Q,l!==null){let be=l.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let De=!1;be.length!==P.cameras.length&&(P.cameras.length=0,De=!0);for(let Ve=0;Ve<be.length;Ve++){let je=be[Ve],lt=null;if(d!==null)lt=d.getViewport(je);else{let xt=u.getViewSubImage(h,je);lt=xt.viewport,Ve===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let Je=F[Ve];Je===void 0&&(Je=new St,Je.layers.enable(Ve),Je.viewport=new tt,F[Ve]=Je),Je.matrix.fromArray(je.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(je.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(lt.x,lt.y,lt.width,lt.height),Ve===0&&(P.matrix.copy(Je.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),De===!0&&P.cameras.push(Je)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){u=n.getBinding();let Ve=u.getDepthInformation(be[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,s.renderState)}if(de&&de.includes("camera-access")&&m){e.state.unbindTexture(),u=n.getBinding();for(let Ve=0;Ve<be.length;Ve++){let je=be[Ve].camera;if(je){let lt=g[je];lt||(lt=new Ur,g[je]=lt);let Je=u.getCameraImage(je);lt.sourceTexture=Je}}}}for(let be=0;be<M.length;be++){let De=E[be],de=M[be];De!==null&&de!==void 0&&de.update(De,Q,f||a)}Xe&&Xe(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),b=null}let Ue=new Ed;Ue.setAnimationLoop(Pe),this.setAnimationLoop=function(q){Xe=q},this.dispose=function(){}}},B_=new we,Dd=new Fe;Dd.set(-1,0,0,0,1,0,0,0,1);function O_(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Yc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,A,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),l(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),b(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),m(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,v,A):g.isSpriteMaterial?f(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ot&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ot&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),A=v.envMap,y=v.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dd),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,v,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=A*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function f(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ot&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function b(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let E=M.program;n.uniformBlockBinding(y,E)}function f(y,M){let E=s[y.id];E===void 0&&(p(y),E=l(y),s[y.id]=E,y.addEventListener("dispose",v));let T=M.program;n.updateUBOMapping(y,T);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function l(y){let M=u();y.__bindingPointIndex=M;let E=i.createBuffer(),T=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,T,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let M=s[y.id],E=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,w=E.length;x<w;x++){let C=E[x];if(Array.isArray(C))for(let R=0,F=C.length;R<F;R++)d(C[R],x,R,T);else d(C,x,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,E,T){if(m(y,M,E,T)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let R=0;R<w.length;R++){let F=w[R],P=g(F);b(F,y.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function b(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function m(y,M,E,T){let x=y.value,w=M+"_"+E;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:ArrayBuffer.isView(x)?T[w]=x.slice():T[w]=x.clone(),!0;{let C=T[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return T[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function p(y){let M=y.uniforms,E=0,T=16;for(let w=0,C=M.length;w<C;w++){let R=Array.isArray(M[w])?M[w]:[M[w]];for(let F=0,P=R.length;F<P;F++){let D=R[F],O=Array.isArray(D.value)?D.value:[D.value];for(let k=0,V=O.length;k<V;k++){let te=O[k],K=g(te),Y=E%T,$=Y%K.boundary,ve=Y+$;E+=$,ve!==0&&T-ve<K.storage&&(E+=T-ve),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=K.storage}}}let x=E%T;return x>0&&(E+=T-x),y.__size=E,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",y),M}function v(y){let M=y.target;M.removeEventListener("dispose",v);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:f,dispose:A}}var k_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function H_(){return Xn===null&&(Xn=new Ri(k_,16,16,Bi,Nn),Xn.name="DFG_LUT",Xn.minFilter=vt,Xn.magFilter=vt,Xn.wrapS=_n,Xn.wrapT=_n,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var mf=class{constructor(e={}){let{canvas:t=Yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ln}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let m=d,p=new Set([Fo,Lo,Do]),g=new Set([ln,Pn,Zs,$s,Ro,Io]),v=new Uint32Array(4),A=new Int32Array(4),y=new L,M=null,E=null,T=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,F=null,P=null,D=null,O=null;this._outputColorSpace=_t;let k=0,V=0,te=null,K=-1,Y=null,$=new tt,ve=new tt,pe=null,Xe=new Ee(0),Pe=0,Ue=t.width,q=t.height,Q=1,be=null,De=null,de=new tt(0,0,Ue,q),He=new tt(0,0,Ue,q),Ut=!1,Ve=new Ws,je=!1,lt=!1,Je=new we,xt=new L,zt=new tt,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Dt(){return te===null?Q:1}let B=n;function Kt(S,N){return t.getContext(S,N)}let $e,I,_,G,W,X,ie,se,j,ee,re,Te,ce,ae,Ce,Ie,Be,U,oe,Z,fe,ge,ne;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",wn,!1),B===null){let N="webgl2";if(B=Kt(N,S),B===null)throw Kt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(S){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Le("WebGLRenderer: "+S.message),S}function Re(){$e=new Xb(B),$e.init(),fe=new P_(B,$e),I=new Ob(B,$e,e,fe),_=new L_(B,$e),I.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),P=B.createFramebuffer(),D=B.createFramebuffer(),O=B.createFramebuffer(),G=new Qb(B),W=new x_,X=new F_(B,$e,_,W,I,fe,G),ie=new qb(C),se=new $p(B),ge=new Ub(B,se),j=new jb(B,se,G,ge),ee=new $b(B,j,se,ge,G),U=new Zb(B,I,X),Ce=new Gb(W),re=new b_(C,ie,$e,I,ge,Ce),Te=new O_(C,W),ce=new y_,ae=new A_($e),Be=new Nb(C,ie,_,ee,b,c),Ie=new D_(C,ee,I),ne=new G_(B,G,I,_),oe=new Bb(B,$e,G),Z=new Yb(B,$e,G),G.programs=re.programs,C.capabilities=I,C.extensions=$e,C.properties=W,C.renderLists=ce,C.shadowMap=Ie,C.state=_,C.info=G}m!==ln&&(w=new tx(m,t.width,t.height,o,s,r));let Me=new _l(C,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=$e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=$e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(Ue,q,!1))},this.getSize=function(S){return S.set(Ue,q)},this.setSize=function(S,N,J=!0){if(Me.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=S,q=N,t.width=Math.floor(S*Q),t.height=Math.floor(N*Q),J===!0&&(t.style.width=S+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Ue*Q,q*Q).floor()},this.setDrawingBufferSize=function(S,N,J){Ue=S,q=N,Q=J,t.width=Math.floor(S*J),t.height=Math.floor(N*J),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(m===ln){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(de)},this.setViewport=function(S,N,J,H){S.isVector4?de.set(S.x,S.y,S.z,S.w):de.set(S,N,J,H),_.viewport($.copy(de).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(He)},this.setScissor=function(S,N,J,H){S.isVector4?He.set(S.x,S.y,S.z,S.w):He.set(S,N,J,H),_.scissor(ve.copy(He).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(S){_.setScissorTest(Ut=S)},this.setOpaqueSort=function(S){be=S},this.setTransparentSort=function(S){De=S},this.getClearColor=function(S){return S.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,J=!0){let H=0;if(S){let z=!1;if(te!==null){let ue=te.texture.format;z=p.has(ue)}if(z){let ue=te.texture.type,xe=g.has(ue),he=Be.getClearColor(),_e=Be.getClearAlpha(),Se=he.r,Oe=he.g,We=he.b;xe?(v[0]=Se,v[1]=Oe,v[2]=We,v[3]=_e,B.clearBufferuiv(B.COLOR,0,v)):(A[0]=Se,A[1]=Oe,A[2]=We,A[3]=_e,B.clearBufferiv(B.COLOR,0,A))}else H|=B.COLOR_BUFFER_BIT}N&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Be.dispose(),ce.dispose(),ae.dispose(),W.dispose(),ie.dispose(),ee.dispose(),ge.dispose(),ne.dispose(),re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",wh),Me.removeEventListener("sessionend",Eh),zi.stop()};function ht(S){S.preventDefault(),Ar("WebGLRenderer: Context Lost."),R=!0}function Ye(){Ar("WebGLRenderer: Context Restored."),R=!1;let S=G.autoReset,N=Ie.enabled,J=Ie.autoUpdate,H=Ie.needsUpdate,z=Ie.type;Re(),G.autoReset=S,Ie.enabled=N,Ie.autoUpdate=J,Ie.needsUpdate=H,Ie.type=z}function wn(S){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Bn(S){let N=S.target;N.removeEventListener("dispose",Bn),zg(N)}function zg(S){Vg(S),W.remove(S)}function Vg(S){let N=W.get(S).programs;N!==void 0&&(N.forEach(function(J){re.releaseProgram(J)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,J,H,z,ue){N===null&&(N=sn);let xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,he=Jg(S,N,J,H,z);_.setMaterial(H,xe);let _e=J.index,Se=1;if(H.wireframe===!0){if(_e=j.getWireframeAttribute(J),_e===void 0)return;Se=2}let Oe=J.drawRange,We=J.attributes.position,ye=Oe.start*Se,Qe=(Oe.start+Oe.count)*Se;ue!==null&&(ye=Math.max(ye,ue.start*Se),Qe=Math.min(Qe,(ue.start+ue.count)*Se)),_e!==null?(ye=Math.max(ye,0),Qe=Math.min(Qe,_e.count)):We!=null&&(ye=Math.max(ye,0),Qe=Math.min(Qe,We.count));let Lt=Qe-ye;if(Lt<0||Lt===1/0)return;ge.setup(z,H,he,J,_e);let pt,ft=oe;if(_e!==null&&(pt=se.get(_e),ft=Z,ft.setIndex(pt)),z.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Dt()),ft.setMode(B.LINES)):ft.setMode(B.TRIANGLES);else if(z.isLine){let Jt=H.linewidth;Jt===void 0&&(Jt=1),_.setLineWidth(Jt*Dt()),z.isLineSegments?ft.setMode(B.LINES):z.isLineLoop?ft.setMode(B.LINE_LOOP):ft.setMode(B.LINE_STRIP)}else z.isPoints?ft.setMode(B.POINTS):z.isSprite&&ft.setMode(B.TRIANGLES);if(z.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ft.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Jt=z._multiDrawStarts,me=z._multiDrawCounts,Zt=z._multiDrawCount,qe=_e?se.get(_e).bytesPerElement:1,bn=W.get(H).currentProgram.getUniforms();for(let On=0;On<Zt;On++)bn.setValue(B,"_gl_DrawID",On),ft.render(Jt[On]/qe,me[On])}else if(z.isInstancedMesh)ft.renderInstances(ye,Lt,z.count);else if(J.isInstancedBufferGeometry){let Jt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,me=Math.min(J.instanceCount,Jt);ft.renderInstances(ye,Lt,me)}else ft.render(ye,Lt)};function Sh(S,N,J,H){F!==null&&S.isNodeMaterial&&F.setObject(H,S),je===!0&&Ce.setState(S,J,!1),S.transparent===!0&&S.side===cn&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,Ma(S,N,H),S.side=Jn,S.needsUpdate=!0,Ma(S,N,H),S.side=cn):Ma(S,N,H)}this.compile=function(S,N,J=null){J===null&&(J=S),F!==null&&F.renderStart(S,N,J),E=ae.get(J),E.init(N),x.push(E),J.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),S!==J&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,je=Ce.init(this.clippingPlanes,lt),je===!0&&Ce.setGlobalState(this.clippingPlanes,N),F!==null&&Ie.render(E.state.shadowsArray,J,N);let H=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let he=ue[xe];Sh(he,J,N,z),H.add(he)}else Sh(ue,J,N,z),H.add(ue)}),E=x.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(S,N,J=null){let H=this.compile(S,N,J);return new Promise(z=>{function ue(){if(H.forEach(function(xe){let _e=W.get(xe).currentProgram;(_e===void 0||_e.isReady())&&H.delete(xe)}),H.size===0){z(S);return}setTimeout(ue,10)}$e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let zf=null;function Wg(S){zf&&zf(S)}function wh(){zi.stop()}function Eh(){zi.start()}let zi=new Ed;zi.setAnimationLoop(Wg),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(S){zf=S,Me.setAnimationLoop(S),S===null?zi.stop():zi.start()},Me.addEventListener("sessionstart",wh),Me.addEventListener("sessionend",Eh),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;F!==null&&F.renderStart(S,N);let J=Me.enabled===!0&&Me.isPresenting===!0,H=w!==null&&(te===null||J)&&w.begin(C,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(N),N=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,te),E=ae.get(S,x.length),E.init(N),E.state.textureUnits=X.getTextureUnits(),x.push(E),Je.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ve.setFromProjectionMatrix(Je,In,N.reversedDepth),lt=this.localClippingEnabled,je=Ce.init(this.clippingPlanes,lt),M=ce.get(S,T.length),M.init(),T.push(M),Me.enabled===!0&&Me.isPresenting===!0){let xe=C.xr.getDepthSensingMesh();xe!==null&&Vf(xe,N,-1/0,C.sortObjects)}Vf(S,N,0,C.sortObjects),M.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&M.sort(be,De),yt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,yt&&Be.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Ce.beginShadows();let z=E.state.shadowsArray;if(Ie.render(z,S,N),je===!0&&Ce.endShadows(),(H&&w.hasRenderPass())===!1){let xe=M.opaque,he=M.transmissive;if(E.setupLights(),N.isArrayCamera){let _e=N.cameras;if(he.length>0)for(let Se=0,Oe=_e.length;Se<Oe;Se++){let We=_e[Se];Th(xe,he,S,We)}yt&&Be.render(S);for(let Se=0,Oe=_e.length;Se<Oe;Se++){let We=_e[Se];Ah(M,S,We,We.viewport)}}else he.length>0&&Th(xe,he,S,N),yt&&Be.render(S),Ah(M,S,N)}te!==null&&V===0&&(X.updateMultisampleRenderTarget(te),X.updateRenderTargetMipmap(te)),H&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),ge.resetDefaultState(),K=-1,Y=null,x.pop(),x.length>0?(E=x[x.length-1],X.setTextureUnits(E.state.textureUnits),je===!0&&Ce.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,F!==null&&F.renderEnd()};function Vf(S,N,J,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ve)){H&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Je);let xe=ee.update(S),he=S.material;he.visible&&M.push(S,xe,he,J,zt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ve))){let xe=ee.update(S),he=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),zt.copy(xe.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(Je)),Array.isArray(he)){let _e=xe.groups;for(let Se=0,Oe=_e.length;Se<Oe;Se++){let We=_e[Se],ye=he[We.materialIndex];ye&&ye.visible&&M.push(S,xe,ye,J,zt.z,We,N)}}else he.visible&&M.push(S,xe,he,J,zt.z,null,N)}}let ue=S.children;for(let xe=0,he=ue.length;xe<he;xe++)Vf(ue[xe],N,J,H)}function Ah(S,N,J,H){let{opaque:z,transmissive:ue,transparent:xe}=S;E.setupLightsView(J),je===!0&&Ce.setGlobalState(C.clippingPlanes,J),H&&_.viewport($.copy(H)),z.length>0&&va(z,N,J),ue.length>0&&va(ue,N,J),xe.length>0&&va(xe,N,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Th(S,N,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let ye=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Wt(1,1,{generateMipmaps:!0,type:ye?Nn:ln,minFilter:Fn,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let ue=E.state.transmissionRenderTarget[H.id],xe=H.viewport||$;ue.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);let he=C.getRenderTarget(),_e=C.getActiveCubeFace(),Se=C.getActiveMipmapLevel();C.setRenderTarget(ue),C.getClearColor(Xe),Pe=C.getClearAlpha(),Pe<1&&C.setClearColor(16777215,.5),C.clear(),yt&&Be.render(J);let Oe=C.toneMapping;C.toneMapping=Ln;let We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),je===!0&&Ce.setGlobalState(C.clippingPlanes,H),va(S,J,H),X.updateMultisampleRenderTarget(ue),X.updateRenderTargetMipmap(ue),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Qe=0,Lt=N.length;Qe<Lt;Qe++){let pt=N[Qe],{object:ft,geometry:Jt,material:me,group:Zt}=pt;if(me.side===cn&&ft.layers.test(H.layers)){let qe=me.side;me.side=Ot,me.needsUpdate=!0,Ch(ft,J,H,Jt,me,Zt),me.side=qe,me.needsUpdate=!0,ye=!0}}ye===!0&&(X.updateMultisampleRenderTarget(ue),X.updateRenderTargetMipmap(ue))}C.setRenderTarget(he,_e,Se),C.setClearColor(Xe,Pe),We!==void 0&&(H.viewport=We),C.toneMapping=Oe}function va(S,N,J){let H=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ue=S.length;z<ue;z++){let xe=S[z],{object:he,geometry:_e,group:Se}=xe,Oe=xe.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),he.layers.test(J.layers)&&Ch(he,N,J,_e,Oe,Se)}}function Ch(S,N,J,H,z,ue){F!==null&&z.isNodeMaterial&&F.setObject(S,z),S.onBeforeRender(C,N,J,H,z,ue),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(C,N,J,H,S,ue),z.transparent===!0&&z.side===cn&&z.forceSinglePass===!1?(z.side=Ot,z.needsUpdate=!0,C.renderBufferDirect(J,N,H,z,S,ue),z.side=Jn,z.needsUpdate=!0,C.renderBufferDirect(J,N,H,z,S,ue),z.side=cn):C.renderBufferDirect(J,N,H,z,S,ue),S.onAfterRender(C,N,J,H,z,ue)}function Ma(S,N,J){N.isScene!==!0&&(N=sn);let H=W.get(S),z=E.state.lights,ue=E.state.shadowsArray,xe=z.state.version,he=re.getParameters(S,z.state,ue,N,J,E.state.lightProbeGridArray),_e=re.getProgramCacheKey(he),Se=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let Oe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=ie.get(S.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Se===void 0&&(S.addEventListener("dispose",Bn),Se=new Map,H.programs=Se);let We=Se.get(_e);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===xe)return Ih(S,he),We}else he.uniforms=re.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,J,he),S.onBeforeCompile(he,C),We=re.acquireProgram(he,_e),Se.set(_e,We),H.uniforms=he.uniforms;let ye=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ye.clippingPlanes=Ce.uniform),Ih(S,he),H.needsLights=Xg(S),H.lightsStateVersion=xe,H.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.sunLights.value=z.state.sun,ye.sunLightShadows.value=z.state.sunShadow,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.sunShadowMatrix.value=z.state.sunShadowMatrix,ye.sunShadowCascade.value=z.state.sunShadowCascade,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=We,H.uniformsList=null,We}function Rh(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=rr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ih(S,N){let J=W.get(S);J.outputColorSpace=N.outputColorSpace,J.batching=N.batching,J.batchingColor=N.batchingColor,J.instancing=N.instancing,J.instancingColor=N.instancingColor,J.instancingMorph=N.instancingMorph,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function Kg(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let J=0,H=S.length;J<H;J++){let z=S[J];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Jg(S,N,J,H,z){N.isScene!==!0&&(N=sn),X.resetTextureUnits();let ue=N.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,he=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ke.workingColorSpace,_e=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Se=ie.get(H.envMap||xe,_e),Oe=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!J.morphAttributes.position,Qe=!!J.morphAttributes.normal,Lt=!!J.morphAttributes.color,pt=Ln;H.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(pt=C.toneMapping);let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Jt=ft!==void 0?ft.length:0,me=W.get(H),Zt=E.state.lights;if(je===!0&&(lt===!0||S!==Y)){let ut=S===Y&&H.id===K;Ce.setState(H,S,ut)}let qe=!1;H.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Zt.state.version||me.outputColorSpace!==he||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==Se||H.fog===!0&&me.fog!==ue||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ce.numPlanes||me.numIntersection!==Ce.numIntersection)||me.vertexAlphas!==Oe||me.vertexTangents!==We||me.morphTargets!==ye||me.morphNormals!==Qe||me.morphColors!==Lt||me.toneMapping!==pt||me.morphTargetsCount!==Jt||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,me.__version=H.version);let bn=me.currentProgram;qe===!0&&(bn=Ma(H,N,z),F&&H.isNodeMaterial&&F.onUpdateProgram(H,bn,me));let On=!1,mi=!1,xs=!1,st=bn.getUniforms(),At=me.uniforms;if(_.useProgram(bn.program)&&(On=!0,mi=!0,xs=!0),H.id!==K&&(K=H.id,mi=!0),me.needsLights){let ut=Kg(E.state.lightProbeGridArray,z);me.lightProbeGrid!==ut&&(me.lightProbeGrid=ut,mi=!0)}if(On||Y!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),st.setValue(B,"projectionMatrix",S.projectionMatrix),st.setValue(B,"viewMatrix",S.matrixWorldInverse);let xi=st.map.cameraPosition;xi!==void 0&&xi.setValue(B,xt.setFromMatrixPosition(S.matrixWorld)),I.logarithmicDepthBuffer&&st.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,mi=!0,xs=!0)}if(me.needsLights&&(Zt.state.sunShadowMap.length>0&&st.setValue(B,"sunShadowMap",Zt.state.sunShadowMap,X),Zt.state.directionalShadowMap.length>0&&st.setValue(B,"directionalShadowMap",Zt.state.directionalShadowMap,X),Zt.state.spotShadowMap.length>0&&st.setValue(B,"spotShadowMap",Zt.state.spotShadowMap,X),Zt.state.pointShadowMap.length>0&&st.setValue(B,"pointShadowMap",Zt.state.pointShadowMap,X)),z.isSkinnedMesh){st.setOptional(B,z,"bindMatrix"),st.setOptional(B,z,"bindMatrixInverse");let ut=z.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),st.setValue(B,"boneTexture",ut.boneTexture,X))}z.isBatchedMesh&&(st.setOptional(B,z,"batchingTexture"),st.setValue(B,"batchingTexture",z._matricesTexture,X),st.setOptional(B,z,"batchingIdTexture"),st.setValue(B,"batchingIdTexture",z._indirectTexture,X),st.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&st.setValue(B,"batchingColorTexture",z._colorsTexture,X));let bi=J.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&U.update(z,J,bn),(mi||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,st.setValue(B,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(At.envMapIntensity.value=N.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=H_()),mi){if(st.setValue(B,"toneMappingExposure",C.toneMappingExposure),me.needsLights&&qg(At,xs),ue&&H.fog===!0&&Te.refreshFogUniforms(At,ue),Te.refreshMaterialUniforms(At,H,Q,q,E.state.transmissionRenderTarget[S.id]),me.needsLights&&me.lightProbeGrid){let ut=me.lightProbeGrid;At.probesSH.value=ut.texture,At.probesMin.value.copy(ut.boundingBox.min),At.probesMax.value.copy(ut.boundingBox.max),At.probesResolution.value.copy(ut.resolution)}rr.upload(B,Rh(me),At,X)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(rr.upload(B,Rh(me),At,X),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(B,"center",z.center),st.setValue(B,"modelViewMatrix",z.modelViewMatrix),st.setValue(B,"normalMatrix",z.normalMatrix),st.setValue(B,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){let ut=H.uniformsGroups;for(let xi=0,_s=ut.length;xi<_s;xi++){let Lh=ut[xi];ne.update(Lh,bn),ne.bind(Lh,bn)}}return bn}function qg(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Xg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,N,J){let H=W.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=N,W.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let J=W.get(S);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,J=0){te=S,k=N,V=J;let H=null,z=!1,ue=!1;if(S){let he=W.get(S);if(he.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(B.FRAMEBUFFER,he.__webglFramebuffer),$.copy(S.viewport),ve.copy(S.scissor),pe=S.scissorTest,_.viewport($),_.scissor(ve),_.setScissorTest(pe),K=-1;return}else if(he.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(he.__hasExternalTextures)X.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Oe=S.depthTexture;if(he.__boundDepthTexture!==Oe){if(Oe!==null&&W.has(Oe)&&(S.width!==Oe.image.width||S.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}let _e=S.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);let Se=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[N])?H=Se[N][J]:H=Se[N],z=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?H=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?H=Se[J]:H=Se,$.copy(S.viewport),ve.copy(S.scissor),pe=S.scissorTest}else $.copy(de).multiplyScalar(Q).floor(),ve.copy(He).multiplyScalar(Q).floor(),pe=Ut;if(J!==0&&(H=P),_.bindFramebuffer(B.FRAMEBUFFER,H)&&_.drawBuffers(S,H),_.viewport($),_.scissor(ve),_.setScissorTest(pe),z){let he=W.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,J)}else if(ue){let he=N;for(let _e=0;_e<S.textures.length;_e++){let Se=W.get(S.textures[_e]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+_e,Se.__webglTexture,J,he)}}else if(S!==null&&J!==0){let he=W.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,he.__webglTexture,J)}K=-1};function Dh(S){let N=W.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=I.textureFormatReadable(S.format),N.__typeReadable=I.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,J,H,z,ue,xe,he=0){if(!(S&&S.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe]),_e){_.bindFramebuffer(B.FRAMEBUFFER,_e);try{let Se=S.textures[he],Oe=Se.format,We=Se.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+he);let ye=Dh(Se);if(ye.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&J>=0&&J<=S.height-z&&B.readPixels(N,J,H,z,fe.convert(Oe),fe.convert(We),ue)}finally{let Se=te!==null?W.get(te).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,N,J,H,z,ue,xe,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe]),_e)if(N>=0&&N<=S.width-H&&J>=0&&J<=S.height-z){_.bindFramebuffer(B.FRAMEBUFFER,_e);let Se=S.textures[he],Oe=Se.format,We=Se.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+he);let ye=Dh(Se);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Qe),B.bufferData(B.PIXEL_PACK_BUFFER,ue.byteLength,B.STREAM_READ),B.readPixels(N,J,H,z,fe.convert(Oe),fe.convert(We),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Lt=te!==null?W.get(te).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,Lt);let pt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Zu(B,pt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ue),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Qe),B.deleteSync(pt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,J=0){let H=Math.pow(2,-J),z=Math.floor(S.image.width*H),ue=Math.floor(S.image.height*H),xe=N!==null?N.x:0,he=N!==null?N.y:0;X.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,xe,he,z,ue),_.unbindTexture()},this.copyTextureToTexture=function(S,N,J=null,H=null,z=0,ue=0){let xe,he,_e,Se,Oe,We,ye,Qe,Lt,pt=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(J!==null)xe=J.max.x-J.min.x,he=J.max.y-J.min.y,_e=J.isBox3?J.max.z-J.min.z:1,Se=J.min.x,Oe=J.min.y,We=J.isBox3?J.min.z:0;else{let At=Math.pow(2,-z);xe=Math.floor(pt.width*At),he=Math.floor(pt.height*At),S.isDataArrayTexture?_e=pt.depth:S.isData3DTexture?_e=Math.floor(pt.depth*At):_e=1,Se=0,Oe=0,We=0}H!==null?(ye=H.x,Qe=H.y,Lt=H.z):(ye=0,Qe=0,Lt=0);let ft=fe.convert(N.format),Jt=fe.convert(N.type),me;N.isData3DTexture?(X.setTexture3D(N,0),me=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),me=B.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),me=B.TEXTURE_2D),_.activeTexture(B.TEXTURE0),_.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let Zt=_.getParameter(B.UNPACK_ROW_LENGTH),qe=_.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=_.getParameter(B.UNPACK_SKIP_PIXELS),On=_.getParameter(B.UNPACK_SKIP_ROWS),mi=_.getParameter(B.UNPACK_SKIP_IMAGES);_.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),_.pixelStorei(B.UNPACK_SKIP_PIXELS,Se),_.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(B.UNPACK_SKIP_IMAGES,We);let xs=S.isDataArrayTexture||S.isData3DTexture,st=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let At=W.get(S),bi=W.get(N),ut=W.get(At.__renderTarget),xi=W.get(bi.__renderTarget);_.bindFramebuffer(B.READ_FRAMEBUFFER,ut.__webglFramebuffer),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let _s=0;_s<_e;_s++)xs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(S).__webglTexture,z,We+_s),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(N).__webglTexture,ue,Lt+_s)),B.blitFramebuffer(Se,Oe,xe,he,ye,Qe,xe,he,B.DEPTH_BUFFER_BIT,B.NEAREST);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||W.has(S)){let At=W.get(S),bi=W.get(N);_.bindFramebuffer(B.READ_FRAMEBUFFER,D),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,O);for(let ut=0;ut<_e;ut++)xs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.__webglTexture,z,We+ut):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,At.__webglTexture,z),st?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bi.__webglTexture,ue,Lt+ut):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bi.__webglTexture,ue),z!==0?B.blitFramebuffer(Se,Oe,xe,he,ye,Qe,xe,he,B.COLOR_BUFFER_BIT,B.NEAREST):st?B.copyTexSubImage3D(me,ue,ye,Qe,Lt+ut,Se,Oe,xe,he):B.copyTexSubImage2D(me,ue,ye,Qe,Se,Oe,xe,he);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else st?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(me,ue,ye,Qe,Lt,xe,he,_e,ft,Jt,pt.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(me,ue,ye,Qe,Lt,xe,he,_e,ft,pt.data):B.texSubImage3D(me,ue,ye,Qe,Lt,xe,he,_e,ft,Jt,pt):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ue,ye,Qe,xe,he,ft,Jt,pt.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ue,ye,Qe,pt.width,pt.height,ft,pt.data):B.texSubImage2D(B.TEXTURE_2D,ue,ye,Qe,xe,he,ft,Jt,pt);_.pixelStorei(B.UNPACK_ROW_LENGTH,Zt),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qe),_.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),_.pixelStorei(B.UNPACK_SKIP_ROWS,On),_.pixelStorei(B.UNPACK_SKIP_IMAGES,mi),ue===0&&N.generateMipmaps&&B.generateMipmap(me),_.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){k=0,V=0,te=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};function yl(i,e){if(e===Kc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===tr||e===ta){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===tr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function _f(i){let e=new Map,t=new Map,n=i.clone();return Ld(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ld(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ld(i.children[n],e.children[n],t)}var yf=class extends Kn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new vf(t,ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new vf(t,ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new kl(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let f=di.extractUrlBase(e);a=di.resolveURL(f,this.path)}else a=di.extractUrlBase(e);this.manager.itemStart(e);let o=function(f){s?s(f):console.error(f),r.manager.itemError(e),r.manager.itemEnd(e)},c=new qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{r.parse(f,a,function(l){t(l),r.manager.itemEnd(e)},o)}catch(l){o(l)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bd){try{a[ze.KHR_BINARY_GLTF]=new Hl(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let f=new Xl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let u=this.pluginCallbacks[l](f);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let l=0;l<r.extensionsUsed.length;++l){let u=r.extensionsUsed[l],h=r.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new El;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new zl(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new Vl;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new Wl;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}f.setExtensions(a),f.setPlugins(o),f.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function z_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ct(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wl=class{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],f,l=new Ee(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],tn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":f=new Pi(l),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new ss(l),f.distance=u;break;case"spot":f=new Wr(l),f.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,f.angle=c.spot.outerConeAngle,f.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return f.position.set(0,0,0),Yn(f,c),c.intensity!==void 0&&(f.intensity=c.intensity),f.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(f),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},El=class{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(s)}},Al=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Tl=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(s)}},Cl=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Rl=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Il=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,_t)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Dl=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ll=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(r[0],r[1],r[2],tn),Promise.all(s)}},Fl=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Pl=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(r[0],r[1],r[2],tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,_t)),Promise.all(s)}},Nl=class{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ul=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Bl=class{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ol=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let f=n.options.manager.getHandler(o.uri);f!==null&&(c=f)}return n.loadTextureImage(e,a.source,c)}},Gl=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let f=n.options.manager.getHandler(o.uri);f!==null&&(c=f)}return n.loadTextureImage(e,a.source,c)}},vf=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,f=s.byteLength||0,l=s.count,u=s.byteStride,h=new Uint8Array(o,c,f);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,u,h,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(l*u);return a.decodeGltfBuffer(new Uint8Array(d),l,u,h,s.mode,s.filter),d})})}else return null}},kl=class{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let f of s.primitives)if(f.mode!==yn.TRIANGLES&&f.mode!==yn.TRIANGLE_STRIP&&f.mode!==yn.TRIANGLE_FAN&&f.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let f in a)o.push(this.parser.getDependency("accessor",a[f]).then(l=>(c[f]=l,c[f])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(f=>{let l=f.pop(),u=l.isGroup?l.children:[l],h=f[0].count,d=[];for(let b of u){let m=new we,p=new L,g=new dt,v=new L(1,1,1),A=new es(b.geometry,b.material,h);for(let M=0;M<h;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),A.setMatrixAt(M,m.compose(p,g,v));let y=null;for(let M in c)if(M==="_COLOR_0"){let E=c[M];A.instanceColor=new fi(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let T=A.geometry;y=new Pt,y.name=T.name;for(let x in T.attributes)y.setAttribute(x,T.attributes[x]);for(let x in T.morphAttributes)y.morphAttributes[x]=T.morphAttributes[x];T.index!==null&&y.setIndex(T.index),y.morphTargetsRelative=T.morphTargetsRelative;for(let x of T.groups)y.addGroup(x.start,x.count,x.materialIndex);T.boundingBox!==null&&(y.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(y.boundingSphere=T.boundingSphere.clone()),y.drawRange.start=T.drawRange.start,y.drawRange.count=T.drawRange.count,y.userData=Object.assign({},T.userData),A.geometry=y}let E=c[M];y.setAttribute(M,new fi(E.array,E.itemSize,E.normalized))}gt.prototype.copy.call(A,b),this.parser.assignFinalMaterial(A),d.push(A)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},Bd="glTF",ra=12,Fd={JSON:1313821514,BIN:5130562},Hl=class{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ra,r=new DataView(e,ra),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Fd.JSON){let f=new Uint8Array(e,ra+a,o);this.content=n.decode(f)}else if(c===Fd.BIN){let f=ra+a;this.body=e.slice(f,f+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},f={};for(let l in a){let u=Jl[l]||l.toLowerCase();o[u]=a[l]}for(let l in e.attributes){let u=Jl[l]||l.toLowerCase();if(a[l]!==void 0){let h=n.accessors[e.attributes[l]],d=fr[h.componentType];f[u]=d.name,c[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(l){return new Promise(function(u,h){s.decodeDracoFile(l,function(d){for(let b in d.attributes){let m=d.attributes[b],p=c[b];p!==void 0&&(m.normalized=p)}u(d)},o,f,tn,h)})})}},Vl=class{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Wl=class{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}},Mf=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,f=o*3,l=s-t,u=(n-t)/l,h=u*u,d=h*u,b=e*f,m=b-f,p=-2*d+3*h,g=d-h,v=1-p,A=g-h+u;for(let y=0;y!==o;y++){let M=a[m+y+o],E=a[m+y+c]*l,T=a[b+y+o],x=a[b+y]*l;r[y]=v*M+A*E+p*T+g*x}return r}},V_=new dt,Kl=class extends Mf{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return V_.fromArray(r).normalize().toArray(r),r}},yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pd={9728:Tt,9729:vt,9984:To,9985:Qs,9986:os,9987:Fn},Nd={33071:_n,33648:Us,10497:Ai},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},W_={CUBICSPLINE:void 0,LINEAR:ji,STEP:Xi},Ml={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function K_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Vn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function ls(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function J_(i,e,t){let n=!1,s=!1,r=!1;for(let f=0,l=e.length;f<l;f++){let u=e[f];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let f=0,l=e.length;f<l;f++){let u=e[f];if(n){let h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(h)}if(s){let h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(h)}if(r){let h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(f){let l=f[0],u=f[1],h=f[2];return n&&(i.morphAttributes.position=l),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function q_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function X_(i){let e,t=i.extensions&&i.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sl(t.attributes):e=i.indices+":"+Sl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sl(i.targets[n]);return e}function Sl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ql(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Y_=new we,Xl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new z_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Hr(this.options.manager):this.textureLoader=new Kr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ls(r,o,s),Yn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[f,l]of a.children.entries())r(l,o.children[f])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(di.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=vl[s.type],o=fr[s.componentType],c=s.normalized===!0,f=new o(s.count*a);return Promise.resolve(new rt(f,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=vl[s.type],f=fr[s.componentType],l=f.BYTES_PER_ELEMENT,u=l*c,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0,m,p;if(d&&d!==u){let g=Math.floor(h/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,A=t.cache.get(v);A||(m=new f(o,g*d,s.count*d/l),A=new zs(m,d/l),t.cache.add(v,A)),p=new Vs(A,c,h%d/l,b)}else o===null?m=new f(s.count*c):m=new f(o,h,s.count*c),p=new rt(m,c,b);if(s.sparse!==void 0){let g=vl.SCALAR,v=fr[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,M=new v(a[1],A,s.sparse.count*g),E=new f(a[2],y,s.sparse.count*c);o!==null&&(p=new rt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,x=M.length;T<x;T++){let w=M[T];if(p.setX(w,E[T*c]),c>=2&&p.setY(w,E[T*c+1]),c>=3&&p.setZ(w,E[T*c+2]),c>=4&&p.setW(w,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=b}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let f=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return l.magFilter=Pd[h.magFilter]||vt,l.minFilter=Pd[h.minFilter]||Fn,l.wrapS=Nd[h.wrapS]||Ai,l.wrapT=Nd[h.wrapT]||Ai,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==Tt&&l.minFilter!==vt,s.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=f,f}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",f=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){f=!0;let h=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(u){return new Promise(function(h,d){let b=h;t.isImageBitmapLoader===!0&&(b=function(m){let p=new Bt(m);p.needsUpdate=!0,h(p)}),t.load(di.resolveURL(u,r.path),b,void 0,d)})}).then(function(u){return f===!0&&o.revokeObjectURL(c),Yn(u,a),u.userData.mimeType=a.mimeType||j_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=l,l}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Js,jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ks,jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Vn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},f=[];if(c[ze.KHR_MATERIALS_UNLIT]){let u=s[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),f.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],tn),o.opacity=h[3]}u.baseColorTexture!==void 0&&f.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),f.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=cn);let l=r.alphaMode||Ml.OPAQUE;if(l===Ml.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Ml.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==nn&&(f.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==nn&&(f.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==nn){let u=r.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&a!==nn&&f.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t)),Promise.all(f).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Yn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ls(s,u,r),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ud(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let f=e[o],l=X_(f),u=s[l];if(u)a.push(u.promise);else{let h;f.extensions&&f.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?h=r(f):h=Ud(new Pt,f,t),f.mode===yn.TRIANGLE_STRIP?h=h.then(d=>yl(d,ta)):f.mode===yn.TRIANGLE_FAN&&(h=h.then(d=>yl(d,tr))),s[l]={primitive:f,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,f=a.length;c<f;c++){let l=a[c].material===void 0?K_(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let f=c.slice(0,c.length-1),l=c[c.length-1],u=[];for(let d=0,b=l.length;d<b;d++){let m=l[d],p=a[d],g,v=f[d];if(p.mode===yn.TRIANGLES||p.mode===yn.TRIANGLE_STRIP||p.mode===yn.TRIANGLE_FAN||p.mode===void 0){let A=r.isSkinnedMesh===!0,y=m.hasAttribute("skinIndex")&&m.hasAttribute("skinWeight");A&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=A&&y?new Ti(m,v):new at(m,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===yn.LINES)g=new Dr(m,v);else if(p.mode===yn.LINE_STRIP)g=new ts(m,v);else if(p.mode===yn.LINE_LOOP)g=new Lr(m,v);else if(p.mode===yn.POINTS)g=new Fr(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&q_(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Yn(g,r),p.extensions&&ls(s,g,p),t.assignFinalMaterial(g),u.push(g)}for(let d=0,b=u.length;d<b;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ls(s,u[0],r),u[0];let h=new wt;r.extensions&&ls(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,b=u.length;d<b;d++)h.add(u[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(jc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let f=0,l=a.length;f<l;f++){let u=a[f];if(u){o.push(u);let h=new we;r!==null&&h.fromArray(r.array,f*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new $i(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],f=[],l=[];for(let u=0,h=s.channels.length;u<h;u++){let d=s.channels[u],b=s.samplers[d.sampler],m=d.target,p=m.node,g=s.parameters!==void 0?s.parameters[b.input]:b.input,v=s.parameters!==void 0?s.parameters[b.output]:b.output;m.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),f.push(b),l.push(m))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(f),Promise.all(l)]).then(function(u){let h=u[0],d=u[1],b=u[2],m=u[3],p=u[4],g=[];for(let A=0,y=h.length;A<y;A++){let M=h[A],E=d[A],T=b[A],x=m[A],w=p[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,E,T,x,w);if(C)for(let R=0;R<C.length;R++)g.push(C[R])}let v=new kr(r,void 0,g);return Yn(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,f=s.weights.length;c<f;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let f=0,l=o.length;f<l;f++)a.push(n.getDependency("node",o[f]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(f){let l=f[0],u=f[1],h=f[2];h!==null&&l.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Y_)});for(let d=0,b=u.length;d<b;d++)l.add(u[d]);if(l.userData.pivot!==void 0&&u.length>0){let d=l.userData.pivot,b=u[0];l.pivot=new L().fromArray(d),l.position.x-=d[0],l.position.y-=d[1],l.position.z-=d[2],b.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(f){return s._getNodeRef(s.cameraCache,r.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)}),this.nodeCache[e]=Promise.all(o).then(function(f){let l;if(r.isBone===!0?l=new Ci:f.length>1?l=new wt:f.length===1?l=f[0]:l=new gt,l!==f[0])for(let u=0,h=f.length;u<h;u++)l.add(f[u]);if(r.name&&(l.userData.name=r.name,l.name=a),Yn(l,r),r.extensions&&ls(n,l,r),r.matrix!==void 0){let u=new we;u.fromArray(r.matrix),l.applyMatrix4(u)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);if(!s.associations.has(l))s.associations.set(l,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(l);s.associations.set(l,{...u})}return s.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),Yn(r,n),n.extensions&&ls(t,r,n);let a=n.nodes||[],o=[];for(let c=0,f=a.length;c<f;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,u=c.length;l<u;l++){let h=c[l];h.parent!==null?r.add(_f(h)):r.add(h)}let f=l=>{let u=new Map;for(let[h,d]of s.associations)(h instanceof jt||h instanceof Bt)&&u.set(h,d);return l.traverse(h=>{let d=s.associations.get(h);d!=null&&u.set(h,d)}),u};return s.associations=f(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function f(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Oi[r.path]===Oi.weights?(f(e),e.isGroup&&e.children.forEach(f)):c.push(o);let l;switch(Oi[r.path]){case Oi.weights:l=li;break;case Oi.rotation:l=hi;break;case Oi.translation:case Oi.scale:l=Li;break;default:switch(n.itemSize){case 1:l=li;break;case 2:case 3:default:l=Li;break}break}let u=s.interpolation!==void 0?W_[s.interpolation]:ji,h=this._getArrayFromAccessor(n);for(let d=0,b=c.length;d<b;d++){let m=new l(c[d]+"."+Oi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ql(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof hi?Kl:Mf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Q_(i,e,t){let n=e.attributes,s=new Et;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,f=o.max;if(c!==void 0&&f!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(f[0],f[1],f[2])),o.normalized){let l=ql(fr[o.componentType]);s.min.multiplyScalar(l),s.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let f=0,l=r.length;f<l;f++){let u=r[f];if(u.POSITION!==void 0){let h=t.json.accessors[u.POSITION],d=h.min,b=h.max;if(d!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(b[2]))),h.normalized){let m=ql(fr[h.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new an;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ud(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Jl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ke.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),Yn(i,e),Q_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?J_(i,e.targets,t):i})}var Sf=class extends Qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Di;e.deleteAttribute("uv");let t=new Vn({side:Ot}),n=new Vn,s=new ss(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new at(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new es(e,n,6),o=new gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new at(e,cr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let f=new at(e,cr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let l=new at(e,cr(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new at(e,cr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let h=new at(e,cr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new at(e,cr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function cr(i){return new Or({color:0,emissive:16777215,emissiveIntensity:i})}var Od=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var v=new Uint8Array(g.length),A=0;A<g.length;++A){var y=g.charCodeAt(A);v[A]=y>96?y-97:y>64?y-39:y+4}for(var M=0,A=0;A<g.length;++A)v[M++]=v[A]<60?n[v[A]]:(v[A]-60)*64+v[++A];return v.buffer.slice(0,M)}function c(g,v,A,y,M,E,T){var x=g.exports.sbrk,w=y+3&-4,C=x(w*M),R=x(E.length),F=new Uint8Array(g.exports.memory.buffer);F.set(E,R);var P=v(C,y,M,R,E.length);if(P==0&&T&&T(C,w,M),A.set(F.subarray(C,C+y*M)),x(C-x(0)),P!=0)throw new Error("Malformed buffer data: "+P)}var f={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],h=0;function d(g){var v={object:new Worker(g),pending:0,requests:{}};return v.object.onmessage=function(A){var y=A.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function b(g){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+c.toString()+p.toString(),A=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(A),M=u.length;M<g;++M)u[M]=d(y);for(var M=g;M<u.length;++M)u[M].object.postMessage({});u.length=g,URL.revokeObjectURL(y)}function m(g,v,A,y,M){for(var E=u[0],T=1;T<u.length;++T)u[T].pending<E.pending&&(E=u[T]);return new Promise(function(x,w){var C=new Uint8Array(A),R=++h;E.pending+=g,E.requests[R]={resolve:x,reject:w},E.object.postMessage({id:R,count:g,size:v,source:C,mode:y,filter:M},[C.buffer])})}function p(g){var v=g.data;self.ready.then(function(A){if(!v.id)return self.close();try{var y=new Uint8Array(v.count*v.size);c(A,A.exports[v.mode],y,v.count,v.size,v.source,A.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(M){self.postMessage({id:v.id,count:v.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(g){b(g)},decodeVertexBuffer:function(g,v,A,y,M){c(r,r.exports.meshopt_decodeVertexBuffer,g,v,A,y,r.exports[f[M]])},decodeIndexBuffer:function(g,v,A,y){c(r,r.exports.meshopt_decodeIndexBuffer,g,v,A,y)},decodeIndexSequence:function(g,v,A,y){c(r,r.exports.meshopt_decodeIndexSequence,g,v,A,y)},decodeGltfBuffer:function(g,v,A,y,M,E){c(r,r.exports[l[M]],g,v,A,y,r.exports[f[E]])},decodeGltfBufferAsync:function(g,v,A,y,M){return u.length>0?m(g,v,A,l[y],f[M]):a.then(function(){var E=new Uint8Array(g*v);return c(r,r.exports[l[y]],E,g,v,A,r.exports[f[M]]),E})}}})();var Rt={bodies:{f:{height:.93,kb:172,fist:[-.1556,.3385,5e-4]},m:{height:.96,kb:160,fist:[-.1743,.3553,6e-4]}},parts:{"r-long":{tint:[null,null],kb:{f:117,m:117}},"r-bob":{tint:[null,null],kb:{f:83,m:83}},"r-short":{tint:[null,null],kb:{f:65,m:62}},"r-pony":{tint:[null,null,"#f472b6"],kb:{f:76,m:76}},"r-bun":{tint:[null,null,"#f472b6"],kb:{f:76,m:75}},"r-spiky":{tint:[null,null],kb:{f:54,m:53}},"r-twin":{tint:[null,null,"#60a5fa"],kb:{f:89,m:89}},"r-wave":{tint:[null,null],kb:{f:122,m:122}},"r-swept":{tint:[null,null],kb:{f:80,m:78}},"u-uniform":{tint:["#2f2a28","#b07d4f","#8c5f36","#f6e3c3","#b07d4f"],kb:{f:50,m:49},tucked:!0},"u-tee":{tint:["#7cc4f5","#5aa8de","#ffffff"],kb:{f:32,m:32}},"u-hoodie":{tint:["#f7a9c4","#e88aac","#ffffff"],kb:{f:60,m:62}},"u-sweater":{tint:["#f3e6cf","#e7a39a","#d9c7a7"],kb:{f:46,m:46}},"u-sailor":{tint:["#ffffff","#1e3a8a","#ef4444","#dc2626"],kb:{f:47,m:49}},"u-chef":{tint:["#ffffff","#9ca3af","#e5e7eb","#dc2626"],kb:{f:38,m:38}},"u-dress":{tint:["#fde68a","#f59e0b","#f472b6","#db2777","#fcd34d"],kb:{f:49,m:49},full:!0},"u-hanbok":{tint:["#f9a8d4","#6d5dd3","#ffffff","#dc2626","#ec4899"],kb:{f:44,m:44},full:!0},"u-bomber":{tint:["#1e3a5f","#f1e9d8","#dc2626","#f8fafc","#f5c542","#94a3b8"],kb:{f:73,m:73}},"u-sabai":{tint:["#f59e0b","#7e22ce","#fbbf24","#fde047","#b45309"],kb:{f:49,m:49},full:!0},"u-xmas":{tint:["#b91c1c","#ffffff","#16a34a"],kb:{f:64,m:64}},"u-padding":{tint:["#f3e8d2","#c4a676","#9c8256","#e6d6b4","#b89c6c"],kb:{f:78,m:78},full:!0},"l-skirt":{tint:["#2d3a64","#1f2a4d"],kb:{f:20,m:20}},"l-pleat":{tint:["#9ca3af","#4b5563","#dc2626","#e5e7eb"],kb:{f:29,m:29}},"l-pants":{tint:["#3b3a44","#2a2930"],kb:{f:24,m:24}},"l-jeans":{tint:["#3b6fb6","#2c548f","#6a95d1","#e8b94a"],kb:{f:31,m:31}},"l-shorts":{tint:["#6aa7e0","#4a86bf"],kb:{f:24,m:24}},"l-cargo":{tint:["#7c8b5a","#6b784c","#3f3a2e","#d6d3d1"],kb:{f:30,m:30}},"k-sneaker":{tint:["#ffffff","#eceef2","#f472b6","#f472b6"],kb:{f:50,m:50}},"k-mary":{tint:["#2b2320","#1a1412","#e8b94a","#ffffff"],kb:{f:39,m:39}},"k-boots":{tint:["#8b5a2b","#6b4420","#4a2f17"],kb:{f:50,m:50}},"k-rain":{tint:["#facc15","#eab308","#ca8a04"],kb:{f:50,m:49}},"k-slipper":{tint:["#fbcfe8","#f9d5e5","#f9a8d4","#2b2320","#f472b6"],kb:{f:42,m:42}},"k-high":{tint:["#dc2626","#f8fafc","#f1f5f9","#ffffff"],kb:{f:59,m:59}}},credits:{},v:"969b0ee6",props:["a-balloon","a-boba","a-candy","a-fan","a-flower","a-goguma","a-icecream","a-krathong","a-pinwheel","a-skate","a-sparkler","a-spatula","a-tteok","a-wand","e-2027","e-3d","e-heart","e-round","e-star","e-sticker","e-sun","h-beanie","h-bow","h-bunny","h-cap","h-cat","h-chef","h-flowers","h-halo","h-horns","h-party","h-pumpkin","h-santa","h-straw","h-witch","j-bowtie","j-chain","j-gold","j-heart","j-jasmine","j-lei","j-pearl","j-scarf","w-angel","w-bag","w-batwing","w-bear","w-butterfly","w-cape","w-champ","w-jetpack","x-cherry","x-flower","x-heart","x-holly","x-ribbon","x-star","x-thaipin","y-board","y-pan"],things:{egg:27,rice:47,shroom:41,chili:28,garlic:29,lime:40,shrimp:44,cheese:29,fries:30,drum:42,melon:24,pine:40,golden:34,mochi:25,pudding:42,donut:44,macaron:38,cone:48,cookie:32,bingsu:37,shortcake:40,pancake:48,tart:30,bungeo:36,toast:27,queen:48,"p-chick":32,"p-hamster":41,"p-cat":43,"p-blackcat":49,"p-bunny":46,"p-shiba":46,"p-penguin":40,"p-panda":47,"p-dragon":52,"p-reindeer":56,"d-plant":43,"d-books":17,"d-frame":22,"d-candle":9,"d-lamp":28,"d-jar":40,"d-globe":20,"d-neon":53,"d-trophy":15,"d-family":19,"d-crayon":12,"d-pumpkin":20,"d-krathong":26,"d-xmastree":39,"d-fireworks":22,"d-lanna":29,"d-kimchi":45}};var aa={f:{"z-1":[-32.75,30.25,-78,-20,0,6.5,-2.5,12.75,-54.5,-70,70.25],"z-2":[-32.5,30.25,-74,-20,0,-2.75,1.5,9,-53.5,-68.75,70],"z-3":[-32.25,27.25,-72,-20,0,-5.5,-1.25,9.5,-59,-65,69],"z-4":[-32.25,26.25,-66,-20,0,-19,.75,9.5,-53,-73,69],"z-5":[-32.25,26,-62,-20,0,-28.25,.75,9.5,-51,-77,69]},m:{"z-1":[-32.75,22.5,-81,-20,.25,10.5,-6.25,7,-56.5,-71.5,69],"z-2":[-32.25,18.75,-84,-20,0,12.5,-.5,9,-50,-71.5,69],"z-3":[-32.5,20,-79,-20,0,6,-5,8.75,-48.5,-65.25,71],"z-4":[-30.25,11.5,-81.5,-20,0,9,-6.25,9,-53,-71.25,70.75],"z-5":[-28.25,9.75,-80.25,-20,0,5.75,-6.5,8,-43.5,-77.5,72]}};var Ef=Math.PI*2,Hd=i=>i<0?0:i>1?1:i,It=i=>(i=Hd(i),i*i*(3-2*i)),ot=(i,e=.14,t=.16)=>It(i/e)*It((1-i)/t),nt=(i,e,t=0)=>Math.sin(i/1e3*e*Ef+t),Gd=i=>(i=Hd(i),4*i*(1-i)),lr=(i,e,t)=>i+(e-i)*t,oa={},hs={"m-flip":"y-pan","m-skate":"y-board","m-cool":"e-sun","m-fan":"a-fan","m-magic":"a-wand"},zd={"m-wave":"open","m-wai":"happy","m-hop":"happy open","m-heart":"wink","m-spin":"open","m-tease":"wink tongue","m-cool":"","m-kpop":"open","m-disco":"wink","m-float":"happy","m-hiphop":"","m-party":"happy open","m-idol":"wink","m-flip":"open","m-fan":"open","m-magic":"open","m-skate":"wink","m-flex":"wink","m-butt":"wink tongue","m-faint":"dizzy tongue","m-balloon":"happy puff","m-run":"open","m-leap":"happy open","m-drop":"open","m-ouch":"dizzy tongue"};function fa(i){let e=nt(i,.26);return{Spine2:[1.1*e,0,0],Neck:[-.6*e,1.6*nt(i,.09),0],Head:[0,2.2*nt(i,.11,1),1.2*nt(i,.07,2)],LeftArm:[0,0,1.4+.8*e],RightArm:[0,0,-1.4-.8*e],Hips:[0,0,.8*nt(i,.13)],root:[0,.002*e,0]}}function mt(i,e,t){return{ms:i,still:e,at:t}}var $_=i=>i&&aa[i.g]&&aa[i.g][i.z]||aa.f["z-3"],Mt={"m-wave":mt(1800,520,(i,e)=>{let t=ot(i,.18,.2);return{RightArm:[-45*t,0,-80*t],RightForeArm:[-5*t,0,(-24+12*nt(e,2.6))*t],RightHand:[0,0,8*nt(e,2.6,.6)*t],Head:[0,-6*t,-6*t],Spine2:[0,-6*t,-3*t],LeftArm:[0,0,6*t]}}),"m-wai":mt(1800,820,(i,e,t)=>{let n=$_(t),s=ot(i,.09,.09),r=s,a=It((i-.3)/.2)*It((.85-i)/.15);return{LeftShoulder:[0,n[0]*s,n[1]*s],RightShoulder:[0,-n[0]*s,-n[1]*s],LeftArm:[n[2]*s,n[3]*r,n[4]*r],RightArm:[n[2]*s,-n[3]*r,-n[4]*r],LeftForeArm:[n[5]*s,n[6]*r,n[7]*r],RightForeArm:[n[5]*s,-n[6]*r,-n[7]*r],LeftHand:[n[8]*r,n[9]*r,n[10]*r],RightHand:[n[8]*r,-n[9]*r,-n[10]*r],Spine:[7*a,0,0],Spine2:[4*a,0,0],Head:[9*a,0,0]}}),"m-hop":mt(1400,350,i=>{let e=ot(i,.12,.16),t=Gd(i*2%1)*(i<1?1:0),n=(1-t)*e;return{root:[0,.1*t*e-.02*n,0],LeftArm:[-30*e,0,80*e],RightArm:[-30*e,0,-80*e],LeftForeArm:[-6*e,0,20*e],RightForeArm:[-6*e,0,-20*e],LeftUpLeg:[-20*n,0,0],RightUpLeg:[-20*n,0,0],LeftLeg:[35*n,0,0],RightLeg:[35*n,0,0],Head:[-8*t*e,0,0]}}),"m-heart":mt(1800,760,i=>{let e=ot(i,.22,.2);return{RightArm:[-62*e,0,-18*e],RightForeArm:[-95*e,0,0],RightHand:[0,-30*e,0],Head:[0,-6*e,-9*e],Spine2:[0,-5*e,0]}}),"m-spin":mt(1600,470,i=>{let e=ot(i,.12,.16);return{turn:360*It((i-.08)/.8),LeftArm:[0,0,62*e],RightArm:[0,0,-62*e],LeftForeArm:[-10*e,0,0],RightForeArm:[-10*e,0,0],Head:[-6*e,0,0]}}),"m-tease":mt(1800,640,(i,e)=>{let t=ot(i,.18,.18),n=nt(e,3)*t;return{LeftArm:[-25*t,0,45*t],RightArm:[-25*t,0,-45*t],LeftForeArm:[-10*t,0,75*t],RightForeArm:[-10*t,0,-75*t],LeftHand:[0,0,18*n],RightHand:[0,0,-18*n],Head:[0,6*n,0],Spine2:[0,0,4*n]}}),"m-cool":mt(2e3,1100,i=>{let e=ot(i,.2,.18),t=It((i-.35)/.15)*It((.8-i)/.12);return{RightArm:[-55*e,0,-22*e],RightForeArm:[-125*e,0,0],RightHand:[10*t,0,0],LeftArm:[0,0,18*e],LeftForeArm:[-80*e,0,0],Head:[-9*e,-8*e,0],Hips:[0,0,5*e],Spine:[0,0,-4*e]}}),"m-kpop":mt(2400,300,(i,e)=>{let t=ot(i,.1,.12),n=nt(e,1.8),s=n>0?1:-1,r=Math.abs(nt(e,1.8));return{root:[.03*n*t,-.02*r*t,0],Hips:[0,10*n*t,0],Spine2:[0,-14*n*t,0],LeftArm:[s>0?-80*t:0,0,s>0?10*t:70*t],RightArm:[s<0?-80*t:0,0,s<0?-10*t:-70*t],LeftForeArm:[-40*t,0,0],RightForeArm:[-40*t,0,0],LeftUpLeg:[-14*r*t,0,0],RightUpLeg:[-14*r*t,0,0],LeftLeg:[24*r*t,0,0],RightLeg:[24*r*t,0,0],Head:[0,-10*n*t,0]}}),"m-disco":mt(2400,300,(i,e)=>{let t=ot(i,.1,.12),n=(nt(e,1.25)+1)/2;return{RightArm:[-42*t,0,lr(-96,-30,n)*t],RightForeArm:[-4*t,0,0],LeftArm:[0,0,32*t],LeftForeArm:[-95*t,0,0],LeftHand:[0,0,-20*t],Hips:[0,0,9*nt(e,2.5)*t],Spine2:[0,0,-6*nt(e,2.5)*t],Head:[0,lr(-18,10,n)*t,0]}}),"m-float":mt(2600,1250,(i,e)=>{let t=ot(i,.25,.22);return{root:[0,.19*t+.012*nt(e,.8)*t,0],LeftArm:[0,0,(72+8*nt(e,.8))*t],RightArm:[0,0,-(72+8*nt(e,.8))*t],LeftForeArm:[-12*t,0,0],RightForeArm:[-12*t,0,0],LeftUpLeg:[-10*t,0,0],LeftLeg:[30*t,0,0],RightUpLeg:[4*t,0,0],RightLeg:[12*t,0,0],Head:[-10*t,0,0]}}),"m-hiphop":mt(2400,330,(i,e)=>{let t=ot(i,.1,.12),n=Math.abs(nt(e,1.6));return{root:[0,-.035*t-.012*n*t,0],LeftUpLeg:[-22*t,0,8*t],RightUpLeg:[-22*t,0,-8*t],LeftLeg:[40*t,0,0],RightLeg:[40*t,0,0],Spine:[8*t,0,0],LeftArm:[-80*t,0,-15*t],RightArm:[-80*t,0,15*t],LeftForeArm:[-55*t,0,-35*t],RightForeArm:[-55*t,0,35*t],Head:[14*n*t,0,0],Neck:[0,8*nt(e,.8)*t,0]}}),"m-party":mt(2e3,560,(i,e)=>{let t=ot(i,.12,.14),n=nt(e,2.2);return{LeftArm:[-35*t,0,(75+7*n)*t],RightArm:[-35*t,0,-(75-7*n)*t],LeftForeArm:[-8*t,0,(14+14*n)*t],RightForeArm:[-8*t,0,(-14+14*n)*t],Hips:[0,0,7*n*t],Spine2:[0,0,-5*n*t],Head:[0,0,6*n*t],root:[0,.012*Math.abs(n)*t,0]}}),"m-idol":mt(2e3,900,i=>{let e=ot(i,.2,.18);return{RightArm:[-30*e,0,-128*e*e],RightForeArm:[-125*e,0,0],RightHand:[0,0,-16*e],LeftArm:[0,0,22*e],LeftForeArm:[-30*e,0,0],Head:[0,6*e,-12*e],Hips:[0,0,6*e],LeftUpLeg:[-12*e,0,-8*e],LeftLeg:[24*e,0,0]}}),"m-flip":mt(2200,1320,(i,e)=>{let t=ot(i,.14,.16),n=e/1e3*1.6%1,s=Math.max(0,Math.sin(n*Ef))*t,r=n<.62?Math.sin(n/.62*Math.PI)*t:0;return{RightArm:[(-30-4*s)*t,0,-6*t],RightForeArm:[(-62-6*s)*t,0,0],RightHand:[-16*s,0,0],LeftArm:[-16*t,0,18*t],LeftForeArm:[-48*t,0,0],Head:[(12-18*r)*t,-8*t,0],Spine:[3*t,0,0],toss:[.16*r,n<.62?360*n/.62:0]}}),"m-fan":mt(2400,560,(i,e)=>{let t=ot(i,.14,.16),n=nt(e,.8);return{turn:22*n*t,RightArm:[-30*t,0,lr(-48,-82,(n+1)/2)*t],RightForeArm:[-20*t,0,0],RightHand:[0,30*n*t,0],LeftArm:[-20*t,0,lr(60,25,(n+1)/2)*t],LeftForeArm:[-50*t,0,0],LeftHand:[0,0,20*t],Head:[0,6*n*t,-6*n*t],Hips:[0,0,-4*n*t]}}),"m-magic":mt(2400,1100,(i,e)=>{let t=ot(i,.14,.14),n=e/1e3*3.2,s=It((i-.6)/.12);return{RightArm:[lr(-30+15*Math.sin(n),-90,s)*t,0,lr(-77+11*Math.cos(n),-10,s)*t],RightForeArm:[-10*t,0,0],LeftArm:[0,0,40*t],LeftForeArm:[-40*t,0,0],Head:[-6*t,-8*t,0],Spine2:[0,-10*s*t,0]}}),"m-skate":mt(2400,1080,i=>{let e=ot(i,.1,.12),t=Gd((i-.3)/.45),n=(1-t)*e;return{root:[0,.19*t-.03*n,0],turn:360*It((i-.3)/.45),LeftUpLeg:[-30*n-40*t,0,0],RightUpLeg:[-30*n-40*t,0,0],LeftLeg:[50*n+70*t,0,0],RightLeg:[50*n+70*t,0,0],LeftArm:[0,0,(40+40*t)*e],RightArm:[0,0,-(40+40*t)*e],Spine:[10*n,0,0]}}),"m-flex":mt(2e3,700,(i,e)=>{let t=ot(i,.18,.16),n=1+.06*nt(e,2.4);return{LeftArm:[-12*t,0,28*t],RightArm:[-12*t,0,-28*t],LeftForeArm:[-10*t,0,106*t*n],RightForeArm:[-10*t,0,-106*t*n],LeftHand:[0,0,20*t],RightHand:[0,0,-20*t],Spine2:[-6*t,0,0],Head:[-6*t,0,0]}}),"m-butt":mt(2e3,380,(i,e)=>{let t=ot(i,.16,.16),n=nt(e,2.8)*t;return{turn:180*t,Hips:[6*t,0,14*n],Spine:[-8*t,0,-8*n],Neck:[0,40*t,0],Head:[0,20*t,0],LeftArm:[0,0,20*t],RightArm:[0,0,-20*t],LeftUpLeg:[-8*t,0,0],RightUpLeg:[-8*t,0,0],LeftLeg:[16*t,0,0],RightLeg:[16*t,0,0]}}),"m-faint":mt(2800,1250,(i,e)=>{let t=It(i/.1)*It((.34-i)/.08),n=It((i-.28)/.16)*It((.92-i)/.1);return{root:[0,-.15*n,-.05*n],tilt:[0,5*t*nt(e,3)],LeftUpLeg:[-80*n,0,-6*n],RightUpLeg:[-80*n,0,6*n],LeftLeg:[140*n,0,0],RightLeg:[140*n,0,0],LeftFoot:[-40*n,0,0],RightFoot:[-40*n,0,0],Spine:[-38*n,0,0],Spine2:[-18*n,0,6*t*nt(e,2.5)],Head:[0,18*t*nt(e,2),8*n],LeftArm:[0,0,30*t+10*n],RightArm:[0,0,-(30*t+10*n)],LeftForeArm:[-10*n,0,0],RightForeArm:[-10*n,0,0]}}),"m-balloon":mt(2800,1300,(i,e)=>{let t=ot(i,.18,.2),n=It((i-.05)/.3)*It((.92-i)/.1);return{size:[1+.15*n,1+.05*n,1+.15*n],grow:{Spine:[1+.06*n,1,1+.07*n],Spine1:[1+.14*n,1+.03*n,1+.16*n]},root:[.012*nt(e,1.1)*n,.05*n,0],LeftArm:[0,0,40*t],RightArm:[0,0,-40*t],LeftUpLeg:[0,0,14*n],RightUpLeg:[0,0,-14*n],Head:[-10*n,0,6*nt(e,1.4)*n]}}),"m-run":mt(1e3,375,i=>{let e=Ef*(i-.125),t=Math.sin(e),n=Math.cos(e),s=(r,a)=>12+50*Math.max(0,-r)+40*Math.max(0,a);return{root:[0,.014*(1-Math.abs(t)),0],Hips:[0,-6*t,0],Spine:[14,0,0],Spine2:[0,8*t,0],Head:[-9,-4*t,0],LeftUpLeg:[-40*t,0,3],RightUpLeg:[40*t,0,-3],LeftLeg:[s(t,n),0,0],RightLeg:[s(-t,-n),0,0],LeftArm:[36*t,0,14],RightArm:[-36*t,0,-14],LeftForeArm:[-78,0,0],RightForeArm:[-78,0,0]}}),"m-leap":mt(1e3,500,()=>({Spine:[10,0,0],Head:[-12,0,0],LeftUpLeg:[-78,0,4],LeftLeg:[96,0,0],RightUpLeg:[20,0,-4],RightLeg:[62,0,0],LeftArm:[-112,0,18],LeftForeArm:[-18,0,0],RightArm:[42,0,-26],RightForeArm:[-34,0,0]})),"m-drop":mt(1e3,500,()=>({Spine:[4,0,0],Head:[8,0,0],LeftUpLeg:[-30,0,6],LeftLeg:[34,0,0],RightUpLeg:[-8,0,-6],RightLeg:[18,0,0],LeftArm:[-16,0,66],RightArm:[-16,0,-66],LeftForeArm:[0,0,18],RightForeArm:[0,0,-18]})),"m-ouch":mt(1e3,500,()=>({Spine:[-9,0,0],Spine2:[-5,0,0],Head:[-4,0,6],LeftArm:[-38,0,58],RightArm:[-38,0,-58],LeftForeArm:[-10,0,24],RightForeArm:[-10,0,-24],LeftUpLeg:[-40,0,6],LeftLeg:[38,0,0],RightUpLeg:[-10,0,-6],RightLeg:[22,0,0]}))};for(let i of["m-faint"])Mt[i].lie=!0;function jl(i){let e={};for(let t in i){let n=i[t];t==="root"?e[t]=[-n[0],n[1],n[2]]:t==="turn"?e[t]=-n:t==="tilt"?e[t]=[n[0],-n[1]]:t==="size"||t==="grow"||t==="toss"?e[t]=n:e[/^Left/.test(t)?"Right"+t.slice(4):/^Right/.test(t)?"Left"+t.slice(5):t]=[n[0],-n[1],-n[2]]}return e}var ey=i=>It(i/.03)*It((1-i)/.03),wf=(i,e)=>({RightArm:[-10*i,0,-(3*ey(e)+5*i)],RightForeArm:[-16*i,0,0],RightHand:[0,0,0]}),kd={"m-cool":(i,e)=>Object.assign(jl(Mt["m-cool"].at(i,e)),wf(ot(i,.2,.18),i)),"m-heart":(i,e)=>Object.assign(jl(Mt["m-heart"].at(i,e)),wf(ot(i,.22,.2),i)),"m-idol":(i,e)=>{let t=jl(Mt["m-idol"].at(i,e)),n=ot(i,.2,.18);return Object.assign(t,{LeftArm:[-58*n,0,104*n*n]},wf(n,i))},"m-hiphop":(i,e)=>Object.assign(Mt["m-hiphop"].at(i,e),wf(ot(i,.1,.12),i)),"m-tease":(i,e)=>{let t=ot(i,.18,.18),n=nt(e,3)*t;return Object.assign(Mt["m-tease"].at(i,e),{RightArm:[-25*t,0,-30*t],RightForeArm:[-10*t,0,-30*t],RightHand:[0,0,-18*n]})},"m-kpop":(i,e)=>{let t=ot(i,.1,.12),n=nt(e,1.8)>0?1:-1;return Object.assign(Mt["m-kpop"].at(i,e),{RightArm:n<0?[-55*t,0,-8*t]:[0,0,-44*t],RightForeArm:[-30*t,0,0]})},"m-ouch":(i,e)=>Object.assign(Mt["m-ouch"].at(i,e),{RightArm:[-38,0,-40],RightForeArm:[-10,0,-16]}),"m-drop":(i,e)=>Object.assign(Mt["m-drop"].at(i,e),{RightArm:[-16,0,-48],RightForeArm:[0,0,-12]}),"m-run":(i,e)=>{let t=Math.sin(Ef*(i-.125));return Object.assign(Mt["m-run"].at(i,e),{RightArm:[-30*t,0,-12],RightForeArm:[-50,0,0]})},"m-faint":(i,e)=>{let t=It(i/.1)*It((.34-i)/.08),n=It((i-.28)/.16)*It((.92-i)/.1);return Object.assign(Mt["m-faint"].at(i,e),{RightArm:[-20*n,0,-(30*t+20*n)]})},"m-balloon":(i,e)=>Object.assign(Mt["m-balloon"].at(i,e),{RightArm:[0,0,-28*ot(i,.18,.2)]}),"m-butt":(i,e)=>Object.assign(Mt["m-butt"].at(i,e),{RightArm:[0,0,-12*ot(i,.16,.16)]})};for(let i in kd)Mt[i].held=kd[i];Mt["m-wai"].stow=!0;Mt["m-wai"].fit=aa;var Vd={"":{"a-balloon":{d:[[0,6,0]]},"a-fan":{d:[[0,18,0]]},"a-icecream":{d:[[0,6,0]]},"a-pinwheel":{d:[[0,18,45]]},"a-sparkler":{d:[[0,12,0]]},"a-spatula":{d:[[0,12,0]]},"a-wand":{d:[[0,12,0]]}},"m-wave":{"a-boba":{d:[[0,0,0],[.65,0,0],[.7,12,0],[.7083,6,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,18,0],[.15,35,0],[.2083,35,0],[.25,18,0],[.3,18,0],[.35,6,0],[.4,6,0],[.45,18,0],[.5,18,0],[.5417,6,0],[.55,6,0],[.6,18,0],[.625,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.7917,18,0],[.8,12,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.25,0,0],[.2889,6,0],[.2917,6,0],[.3,0,0],[.45,0,0],[.4583,6,0],[.5,6,0],[.5417,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.03,6,0],[.035,12,0],[.055,12,0],[.06,6,0],[.1,6,0],[.125,12,0],[.15,18,0],[.2083,18,0],[.25,6,0],[.2889,12,0],[.3,12,0],[.35,6,0],[.4,6,0],[.45,12,0],[.5,12,0],[.5417,18,0],[.55,12,0],[.6,6,0],[.625,6,0],[.65,12,0],[.7,6,0],[.7083,6,0],[.75,18,0],[.7917,6,0],[.9,6,0],[.94,12,0],[.965,12,0],[.97,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,18,45],[.3,18,45],[.35,35,0],[.4,35,0],[.45,18,45],[.5,18,45],[.5417,35,0],[.65,35,0],[.7,18,45],[.75,18,45],[.7917,35,0],[.8,35,0],[.85,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.025,18,0],[.03,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,6,0],[.1,0,0],[.125,0,0],[.15,6,0],[.2083,6,0],[.25,0,0],[.5,0,0],[.5417,6,0],[.55,6,0],[.6,0,0],[.625,6,0],[.65,0,0],[.7083,0,0],[.75,6,0],[.7917,0,0],[.9,0,0],[.94,6,0],[.945,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.3,12,0],[.35,35,0],[.4,35,0],[.45,12,0],[1,12,0]]}},"m-hop":{"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.125,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,18,0],[.125,6,0],[.15,0,0],[.8,0,0],[.85,6,0],[.875,18,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.06,6,0],[.1,18,0],[.125,12,0],[.15,6,0],[.85,6,0],[.875,12,0],[.9,6,0],[1,6,0]]},"a-pinwheel":{d:[[0,18,45],[.06,18,45],[.1,35,0],[.15,35,0],[.2,35,-45],[.8,35,-45],[.85,35,0],[.9,35,0],[.94,18,45],[1,18,45]]},"a-skate":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,12,0],[.1,35,-45],[.8,35,-45],[.85,6,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.125,35,0],[.15,35,0],[.2,35,-45],[.4,35,-45],[.45,6,0],[.4586,12,0],[.5414,12,0],[.55,6,0],[.6,35,-45],[.8,35,-45],[.85,35,0],[.875,18,0],[.9,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.4586,0,0],[.5,12,0],[.5414,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-heart":{"a-balloon":{d:[[0,6,0],[.15,6,0],[.2,12,0],[.8,12,0],[.85,6,0],[1,6,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.055,6,0],[.06,12,0],[.125,12,0],[.15,6,0],[.875,6,0],[.9,12,0],[.945,12,0],[.95,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-spin":{"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,35,0],[.875,35,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]}},"m-tease":{"a-boba":{d:[[0,0,0],[.2,0,0],[.2083,6,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.6,0,0],[.625,6,0],[.65,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.25,35,0],[.2917,18,0],[.3556,18,0],[.375,35,0],[.4583,35,0],[.5,18,0],[.55,18,0],[.6,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,12,0],[.15,12,0],[.2,18,0],[.25,18,0],[.2917,6,0],[.3556,6,0],[.375,12,0],[.4,18,0],[.45,12,0],[.55,12,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7917,12,0],[.8,18,0],[.85,12,0],[.875,12,0],[.9,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.2083,0,0],[.25,6,0],[.2917,0,0],[.375,0,0],[.4,12,90],[.45,0,0],[.75,0,0],[.7917,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.75,6,0],[.7917,12,0],[.8,12,0],[.85,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[.2083,0,0],[.25,6,0],[.2917,35,45],[.55,35,45],[.6,6,0],[.625,0,0],[.8,0,0],[.85,12,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-cool":{"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-kpop":{"a-boba":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,6,0],[.125,0,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.015,18,0],[.02,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.045,0,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,18,0],[.125,35,0],[.65,35,0],[.7,18,0],[.7083,18,0],[.75,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,6,0],[.15,12,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,12,0],[.35,6,0],[.375,12,0],[.4,6,0],[.45,0,0],[.4583,0,0],[.5,12,0],[.5417,12,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,6,0],[.75,12,0],[.7917,6,0],[.8,6,0],[.85,12,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.015,6,0],[.02,12,0],[.125,12,0],[.15,18,0],[.25,18,0],[.2917,35,0],[.4583,35,0],[.5,18,0],[.55,18,0],[.6,35,0],[.625,18,0],[.65,18,0],[.7,12,0],[.7083,18,0],[.75,35,0],[.7917,18,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.45,0,0],[.4583,6,0],[.5,35,45],[.8,35,45],[.85,12,0],[.875,12,0],[.9,18,0],[.94,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.025,0,0],[.03,6,0],[.1,6,0],[.125,12,0],[.15,6,0],[.2,6,0],[.2083,12,0],[.25,0,0],[.2917,6,0],[.3,6,0],[.35,12,0],[.375,6,0],[.4,6,0],[.45,12,0],[.4583,12,0],[.5,6,0],[.55,6,0],[.6,12,0],[.625,6,0],[.65,6,0],[.7,0,0],[.7083,0,0],[.75,6,0],[.7917,0,0],[.8,0,0],[.85,6,0],[.965,6,0],[.97,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-disco":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,18,0],[.2083,12,0],[.25,6,0],[.2917,12,0],[.3,18,0],[.35,0,0],[.625,0,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.02,18,0],[.025,35,0],[.1,35,0],[.125,18,0],[.15,18,0],[.2,35,0],[.4,35,0],[.45,18,0],[.5,18,0],[.5417,35,0],[.75,35,0],[.7917,18,0],[.8,18,0],[.85,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,35,0],[.25,35,0],[.2917,18,0],[.3,18,0],[.35,12,0],[.375,12,0],[.4,0,0],[.45,0,0],[.4583,6,0],[.5,12,0],[.5417,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7083,12,0],[.75,0,0],[.7917,6,0],[.8,6,0],[.85,18,0],[.875,35,0],[.9,35,0],[.94,18,0],[.945,12,0],[.95,6,0],[.955,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.15,0,0],[.2,12,0],[.2083,6,0],[.25,0,0],[.2917,0,0],[.3,6,0],[.35,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.015,6,0],[.02,12,0],[.045,12,0],[.05,6,0],[.15,6,0],[.2,12,0],[.2083,18,0],[.25,35,0],[.2917,12,0],[.3,6,0],[.4583,6,0],[.5,12,0],[.5417,35,0],[.6,35,0],[.625,18,0],[.65,6,0],[.85,6,0],[.875,18,0],[.9,18,0],[.94,6,0],[.965,6,0],[.97,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2083,0,0],[.25,18,0],[.2917,0,0],[.3,0,0],[.35,6,0],[.375,0,0],[.55,0,0],[.6,6,0],[.625,0,0],[1,0,0]],hide:[[1329,1407]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.03,0,0],[.035,6,0],[.05,6,0],[.055,0,0],[.15,0,0],[.2,6,0],[.2083,6,0],[.25,12,0],[.2917,0,0],[.5,0,0],[.5417,6,0],[.6,6,0],[.625,0,0],[.85,0,0],[.875,6,0],[.9,6,0],[.94,0,0],[.96,0,0],[.965,6,0],[.97,6,0],[.975,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-float":{"a-boba":{d:[[0,0,0],[.5,0,0],[.5415,12,0],[.65,12,0],[.7,0,0],[1,0,0]]},"a-candy":{d:[[0,0,0],[.01,0,0],[.015,12,90],[.06,12,90],[.1,0,0],[.4808,0,0],[.5,6,0],[.5415,35,-45],[.65,35,-45],[.7,0,0],[.9,0,0],[.94,12,90],[.975,12,90],[.98,0,0],[1,0,0]],hide:[[98,124]]},"a-flower":{d:[[0,0,0],[.15,0,0],[.2,6,0],[.5,6,0],[.5415,12,0],[.65,12,0],[.7,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,0],[.2,35,45],[.4808,35,45],[.5,18,0],[.5415,0,0],[.65,0,0],[.7,6,0],[.7085,12,0],[.75,35,0],[.8,35,0],[.85,6,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.06,18,0],[.1,12,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.06,18,0],[.1,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]}},"m-hiphop":{"a-fan":{d:[[0,18,0],[.03,18,0],[.035,35,0],[.3,35,0],[.35,35,45],[.4583,35,45],[.5,35,0],[.8,35,0],[.85,35,45],[.9,35,45],[.94,35,0],[.975,35,0],[.98,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.25,0,0],[.2917,6,0],[.3,12,0],[.35,6,0],[.375,0,0],[.4,0,0],[.45,18,0],[.4583,18,0],[.5,0,0],[.8,0,0],[.85,18,0],[.875,6,0],[.9,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.025,6,0],[.03,12,0],[.1,12,0],[.125,6,0],[.15,6,0],[.2,12,0],[.2917,12,0],[.3,18,0],[.4,18,0],[.45,12,0],[.4583,18,0],[.5,12,0],[.625,12,0],[.65,6,0],[.7,12,0],[.7083,12,0],[.75,6,0],[.7917,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[.98,12,0],[.985,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.3,12,0],[.35,18,0],[.4583,18,0],[.5,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.035,0,0],[.04,6,0],[.1,6,0],[.125,0,0],[.15,0,0],[.2,6,0],[.25,6,0],[.2917,12,0],[.4583,12,0],[.5,6,0],[.6,6,0],[.625,0,0],[.65,0,0],[.7,6,0],[.8,6,0],[.85,12,0],[.945,12,0],[.95,6,0],[.96,6,0],[.965,0,0],[1,0,0]]}},"m-party":{"a-balloon":{d:[[0,6,0],[.125,6,0],[.15,12,0],[.2,6,0],[.35,6,0],[.375,12,0],[.4,6,0],[.55,6,0],[.6,12,0],[.65,12,0],[.7,6,0],[1,6,0]]},"a-boba":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.28,18,0],[.3,18,0],[.35,0,0],[.4585,0,0],[.5,18,0],[.5415,18,0],[.55,12,0],[.6,0,0],[.65,0,0],[.7,12,0],[.7085,18,0],[.75,18,0],[.7915,0,0],[1,0,0]]},"a-candy":{d:[[0,0,0],[.4,0,0],[.45,35,-90],[.55,35,-90],[.6,0,0],[.65,0,0],[.7,35,-90],[.8,35,-90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.35,35,0],[.375,18,0],[.4,18,0],[.45,35,0],[.55,35,0],[.6,18,0],[.65,18,0],[.7,35,0],[.875,35,0],[.9,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,18,0],[.125,18,0],[.15,6,0],[.2,0,0],[.2085,0,0],[.25,18,0],[.35,18,0],[.375,12,0],[.4,6,0],[.45,18,0],[.55,18,0],[.6,0,0],[.65,0,0],[.7,18,0],[.8,18,0],[.85,6,0],[.875,6,0],[.9,12,0],[.94,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.2085,0,0],[.25,12,0],[.28,0,0],[.5,0,0],[.5415,12,0],[.55,6,0],[.6,0,0],[.65,0,0],[.7,6,0],[.7085,12,0],[.75,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.02,6,0],[.025,12,0],[.1,12,0],[.125,18,0],[.15,6,0],[.2085,6,0],[.25,18,0],[.35,18,0],[.375,12,0],[.4,6,0],[.45,18,0],[.4585,18,0],[.5,12,0],[.5415,12,0],[.55,18,0],[.6,6,0],[.65,6,0],[.7,18,0],[.7085,12,0],[.75,12,0],[.7915,18,0],[.8,18,0],[.85,6,0],[.945,6,0],[.95,12,0],[.975,12,0],[.98,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.025,0,0],[.03,6,0],[.045,6,0],[.05,0,0],[.15,0,0],[.2,6,0],[.2085,6,0],[.25,0,0],[.28,6,0],[.3,6,0],[.35,0,0],[.4585,0,0],[.5,6,0],[.5415,0,0],[.55,0,0],[.6,6,0],[.65,6,0],[.7,0,0],[.7085,0,0],[.75,6,0],[.7915,0,0],[.94,0,0],[.945,6,0],[.96,6,0],[.965,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-idol":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,90],[.8,12,90],[.85,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,35,0],[.85,35,0],[.875,18,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.025,6,0],[.03,12,0],[.15,12,0],[.2,18,0],[.8,18,0],[.85,12,0],[.975,12,0],[.98,6,0],[1,6,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.95,6,0],[.955,0,0],[1,0,0]]}},"m-fan":{"a-fan":{d:[[0,18,0],[.15,18,0],[.2,35,0],[.5,35,0],[.5417,18,0],[.55,18,0],[.6,35,0],[.7083,35,0],[.75,18,0],[1,18,0]]}},"m-skate":{"a-boba":{d:[[0,0,0],[.4,0,0],[.45,12,0],[.4583,12,0],[.5,0,0],[.55,0,0],[.6,12,0],[.625,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.05,18,0],[.055,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.3,0,0],[.35,12,0],[.4,12,0],[.45,18,0],[.625,18,0],[.65,12,0],[.7083,12,0],[.75,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.4583,6,0],[.5,12,0],[.55,12,0],[.6,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.7,0,0],[.7083,6,0],[.75,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.98,12,0],[.985,18,0],[.995,18,0],[1,12,0]]}},"m-flex":{"a-balloon":{d:[[0,6,0],[.3,6,0],[.35,18,0],[.375,18,0],[.4,6,0],[.4585,6,0],[.5,12,0],[.5415,35,0],[.625,35,0],[.65,18,0],[.7085,18,0],[.75,35,0],[.7915,18,0],[.8,18,0],[.85,6,0],[.875,12,0],[.9,6,0],[1,6,0]]},"a-boba":{d:[[0,0,0],[.15,0,0],[.2,35,0],[.9,35,0],[.94,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,12,0],[.15,12,0],[.2,35,0],[.3,35,0],[.35,18,0],[.4,18,0],[.45,35,0],[.5,35,0],[.5415,18,0],[.6,18,0],[.625,35,0],[.7085,35,0],[.75,18,0],[.8,18,0],[.85,35,0],[.9,35,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[.8,0,0],[.85,6,0],[.875,0,0],[1,0,0]],hide:[[455,505]]},"a-icecream":{d:[[0,6,0],[.1,6,0],[.125,18,0],[.15,12,0],[.2085,12,0],[.25,18,0],[.2915,18,0],[.3,12,0],[.35,6,0],[.4,6,0],[.45,18,0],[.5,18,0],[.5415,6,0],[.6,6,0],[.625,12,0],[.65,18,0],[.7085,18,0],[.75,6,0],[.8,6,0],[.85,12,0],[.9,12,0],[.94,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,6,0],[.1,35,45],[.15,35,45],[.2,70,45],[.75,70,45],[.7915,35,45],[.875,35,45],[.9,18,0],[.94,0,0],[1,0,0]],hide:[[1650,1725]]},"a-pinwheel":{d:[[0,18,45],[.15,18,45],[.2,35,45],[.2085,35,45],[.25,18,45],[.3,18,45],[.35,35,45],[.4,35,45],[.45,18,45],[.5,18,45],[.5415,35,45],[.625,35,45],[.65,18,45],[.7085,18,45],[.75,35,45],[.8,35,45],[.85,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.015,18,0],[.02,12,0],[.3,12,0],[.35,35,0],[.4,35,0],[.45,18,0],[.5,18,0],[.5415,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7,12,0],[.7085,18,0],[.75,35,0],[.8,35,0],[.85,18,0],[.875,18,0],[.9,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.125,12,0],[.15,18,0],[.2,12,0],[.3,12,0],[.35,35,45],[.4,35,45],[.45,12,0],[.5,12,0],[.5415,35,45],[.6,35,45],[.625,18,0],[.65,12,0],[.7085,12,0],[.75,35,45],[.8,35,45],[.85,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,0,0],[.2085,0,0],[.25,6,0],[.3,6,0],[.35,0,0],[.4,0,0],[.45,6,0],[.5,6,0],[.5415,0,0],[.625,0,0],[.65,6,0],[.7085,6,0],[.75,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.125,12,0],[.15,18,0],[.2,12,0],[.2085,12,0],[.25,18,0],[.2915,12,0],[.3,12,0],[.35,35,45],[.4,35,45],[.45,18,0],[.5,18,0],[.5415,35,0],[.6,35,0],[.625,18,0],[.65,12,0],[.7,18,0],[.7085,18,0],[.75,35,45],[.8,35,45],[.85,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]}},"m-butt":{"a-candy":{d:[[0,0,0],[.05,0,0],[.055,6,0],[.06,12,0],[.1,0,0],[.9,0,0],[.94,12,0],[.945,6,0],[.95,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.05,6,0],[.055,12,0],[.06,18,0],[.1,6,0],[.9,6,0],[.94,18,0],[.945,12,0],[.95,6,0],[1,6,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.985,12,0],[.99,18,0],[.995,18,0],[1,12,0]]}},"m-faint":{"a-boba":{d:[[0,0,0],[.1,0,0],[.125,6,0],[.15,12,0],[.2,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.1,18,0],[.125,35,0],[.2082,35,0],[.25,18,0],[.2918,35,0],[.3,35,0],[.35,18,0],[.875,18,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,18,0],[.15,35,0],[.2082,35,0],[.25,6,0],[.2918,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.1,6,0],[.125,12,0],[.15,12,0],[.2,18,0],[.2082,12,0],[.25,6,0],[.2918,12,0],[.3,12,0],[.35,6,0],[.875,6,0],[.9,12,0],[.94,6,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.055,0,0],[.06,12,90],[.1,0,0],[.4,0,0],[.4464,6,0],[.8,6,0],[.85,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.4,12,0],[.4464,6,0],[.8,6,0],[.85,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.125,0,0],[.15,6,0],[.2,0,0],[.2082,6,0],[.25,0,0],[.2918,6,0],[.3,6,0],[.35,0,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.01,18,0],[.015,12,0],[.9,12,0],[.94,18,0],[.995,18,0],[1,12,0]]}},"m-balloon":{"a-flower":{d:[[0,0,0],[.2918,0,0],[.3,6,0],[.35,0,0],[.5418,0,0],[.55,6,0],[.6,6,0],[.625,0,0],[1,0,0]]},"a-krathong":{d:[[0,0,0],[.2082,0,0],[.25,6,0],[.2918,0,0],[.35,0,0],[.375,6,0],[.4,0,0],[.4643,0,0],[.5,6,0],[.5418,35,45],[.6,35,45],[.625,12,0],[.65,0,0],[.8,0,0],[.85,12,0],[.875,0,0],[1,0,0]]},"a-sparkler":{d:[[0,12,0],[.005,18,0],[.02,18,0],[.025,12,0],[.975,12,0],[.98,18,0],[.995,18,0],[1,12,0]]},"a-wand":{d:[[0,12,0],[.005,18,0],[.025,18,0],[.03,12,0],[.965,12,0],[.97,18,0],[.995,18,0],[1,12,0]]}},"m-run":{"a-boba":{d:[[0,0,0],[.15,0,0],[.2,12,90],[.208,12,90],[.25,6,0],[.292,0,0],[.458,0,0],[.5,6,0],[.542,12,90],[.55,12,90],[.6,0,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.15,35,0],[.2,35,45],[.65,35,45],[.7,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.06,0,0],[.1,6,0],[.125,0,0],[.15,12,90],[.2,35,90],[.55,35,90],[.6,12,90],[.625,0,0],[.65,6,0],[.7,0,0],[.8,0,0],[.85,6,0],[.9,6,0],[.94,0,0],[1,0,0]]},"a-goguma":{d:[[0,0,0],[.25,0,0],[.292,12,90],[.458,12,90],[.5,0,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.005,12,0],[.125,12,0],[.15,18,0],[.2,35,0],[.55,35,0],[.6,18,0],[.625,12,0],[.995,12,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.208,0,0],[.25,6,0],[.5,6,0],[.542,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,18,45],[.708,18,45],[.75,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.8,12,0],[.85,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.1,12,0],[.125,18,0],[.208,18,0],[.25,12,0],[.3,12,0],[.35,18,0],[.4,18,0],[.45,12,0],[.5,12,0],[.542,18,0],[.625,18,0],[.65,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.15,12,0],[.2,18,0],[.55,18,0],[.6,12,0],[.65,12,0],[.7,6,0],[.995,6,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.292,12,0],[.3,18,0],[.35,12,0],[.4,12,0],[.45,18,0],[.458,12,0],[.75,12,0],[.792,18,0],[.985,18,0],[.99,12,0],[1,12,0]]}},"m-leap":{"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.05,6,0],[.055,12,0],[.06,12,0],[.1,12,90],[.9,12,90],[.94,12,0],[.945,12,0],[.95,6,0],[.995,6,0],[1,0,0]]},"a-icecream":{d:[[0,6,0],[.005,12,0],[.055,12,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[.945,12,0],[.995,12,0],[1,6,0]]},"a-krathong":{d:[[0,0,0],[.125,0,0],[.15,12,90],[.2,35,90],[.8,35,90],[.85,12,90],[.875,0,0],[1,0,0]]},"a-pinwheel":{d:[[0,18,45],[.06,18,45],[.1,35,45],[.9,35,45],[.94,18,45],[1,18,45]]},"a-sparkler":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-spatula":{d:[[0,12,0],[.06,12,0],[.1,18,0],[.9,18,0],[.94,12,0],[1,12,0]]},"a-tteok":{d:[[0,0,0],[.005,6,0],[.06,6,0],[.1,12,0],[.9,12,0],[.94,6,0],[.995,6,0],[1,0,0]]},"a-wand":{d:[[0,12,0],[.045,12,0],[.05,18,0],[.95,18,0],[.955,12,0],[1,12,0]]}},"m-drop":{"a-boba":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]},"a-fan":{d:[[0,18,0],[.06,18,0],[.1,35,0],[.9,35,0],[.94,18,0],[1,18,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.015,18,0],[.985,18,0],[.99,12,0],[.995,6,0],[1,0,0]]}},"m-ouch":{"a-boba":{d:[[0,0,0],[.005,6,0],[.01,12,0],[.99,12,0],[.995,6,0],[1,0,0]]},"a-flower":{d:[[0,0,0],[.005,6,0],[.995,6,0],[1,0,0]]}}};var Yl={f:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-star":[0,0,.002],"e-sticker":[0,-.00141,.00141],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00404,.00404,.00404],"h-beanie|x-star":[.00808,.00808,.00808],"h-beanie|x-thaipin":[.00635,.00635,.00635],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00884,.00884,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00813,.00813,0],"h-santa|x-holly":[.0026,.0026,.0026],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01617,.01617,.01617],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00664,.00664,.00664],"h-witch|x-holly":[.0026,.0026,.0026],"h-witch|x-star":[.00722,.00722,.00722],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.15085,-3e-4],r:{"r-bob|h-bunny":[.935,.98,.935,.00261,-.00957],"r-bun|h-bunny":[.835,.895,.835,.00522,-.0087],"r-long|h-bunny":[1,.95,1,-.00261,-87e-5],"r-pony|h-bunny":[.85,.89,.85,.00261,.00696],"r-short|h-bunny":[.87,.985,.87,87e-5,-.01043],"r-spiky|h-bunny":[.82,1.035,.82,.00609,-.00783],"r-swept|h-bunny":[.92,.925,.92,87e-5,-.00783],"r-twin|h-bunny":[.895,.875,.895,.00435,.00957],"r-wave|h-bunny":[.995,.95,.995,0,-87e-5],"r-bob|h-cat":[.95,.95,.95,-.00174,-87e-5],"r-bun|h-cat":[.85,.965,.85,-.00696,.01043],"r-long|h-cat":[1,.92,1,.00435,-.00435],"r-pony|h-cat":[.85,.895,.85,87e-5,.00783],"r-short|h-cat":[.85,.96,.85,.00522,-.00522],"r-spiky|h-cat":[.835,1.055,.835,-.00348,-.00783],"r-swept|h-cat":[.935,.925,.935,87e-5,-.00609],"r-twin|h-cat":[1.105,.86,1.105,.00609,.01043],"r-wave|h-cat":[.995,.95,.995,0,-.00261],"r-bob|h-flowers":[.995,.875,.995,87e-5,87e-5],"r-bun|h-flowers":[.845,1.085,.845,-.00348,.00174],"r-long|h-flowers":[.94,1.105,.94,0,-.00174],"r-pony|h-flowers":[.855,1.075,.855,-87e-5,.00957],"r-short|h-flowers":[.895,1.09,.895,.00522,.00522],"r-spiky|h-flowers":[.955,.85,.955,0,-87e-5],"r-swept|h-flowers":[.985,.82,.985,.00348,0],"r-twin|h-flowers":[.915,1.075,.915,0,-.00174],"r-wave|h-flowers":[.94,1.085,.94,.00174,-.00174],"r-bob|x-cherry":[-.00387,-.0031,-.00162],"r-bun|x-cherry":[-.00355,-.00284,-.00148],"r-long|x-cherry":[-.00355,-.00284,-.00148],"r-pony|x-cherry":[-.00355,-.00284,-.00148],"r-short|x-cherry":[-.00355,-.00284,-.00148],"r-spiky|x-cherry":[-.00549,-.00439,-.00229],"r-swept|x-cherry":[-.00743,-.00593,-.0031],"r-twin|x-cherry":[-.00355,-.00284,-.00148],"r-wave|x-cherry":[-.00129,-.00103,-54e-5],"r-bob|x-flower":[93e-5,-82e-5,-4e-4],"r-bun|x-flower":[62e-5,-55e-5,-27e-5],"r-long|x-flower":[62e-5,-55e-5,-27e-5],"r-pony|x-flower":[62e-5,-55e-5,-27e-5],"r-short|x-flower":[62e-5,-55e-5,-27e-5],"r-spiky|x-flower":[.0031,-.00274,-.00134],"r-swept|x-flower":[.00465,-.00411,-.002],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00278,-.00249,-.00119],"r-bun|x-heart":[-.00247,-.00221,-.00106],"r-long|x-heart":[-.00247,-.00221,-.00106],"r-pony|x-heart":[-.00247,-.00221,-.00106],"r-short|x-heart":[-.00247,-.00221,-.00106],"r-spiky|x-heart":[-.0037,-.00331,-.00159],"r-swept|x-heart":[-.0071,-.00635,-.00305],"r-twin|x-heart":[-.00247,-.00221,-.00106],"r-wave|x-heart":[-.00154,-.00138,-66e-5],"r-bob|x-holly":[-.00775,-.00687,-.00329],"r-bun|x-holly":[-.00806,-.00715,-.00342],"r-long|x-holly":[-.00806,-.00715,-.00342],"r-pony|x-holly":[-.00806,-.00715,-.00342],"r-short|x-holly":[-.00806,-.00715,-.00342],"r-spiky|x-holly":[-.00899,-.00797,-.00382],"r-swept|x-holly":[-.01209,-.01072,-.00513],"r-twin|x-holly":[-.00775,-.00687,-.00329],"r-wave|x-holly":[-.00682,-.00605,-.0029],"r-bob|x-ribbon":[.965,.96,.965,-.00348,-.00435],"r-bun|x-ribbon":[.88,.895,.88,.00435,-.00435],"r-long|x-ribbon":[1.005,.95,1.005,0,0],"r-pony|x-ribbon":[.88,.89,.88,.00435,.00783],"r-short|x-ribbon":[.895,.95,.895,.00609,-.00435],"r-spiky|x-ribbon":[.845,1.06,.845,-.00435,-.00435],"r-swept|x-ribbon":[.945,.92,.945,.00348,0],"r-twin|x-ribbon":[.915,.925,.915,-.00348,.01043],"r-wave|x-ribbon":[.99,.95,.99,87e-5,-.00696],"r-bob|x-star":[-.0028,-.00246,-.00119],"r-bun|x-star":[-.00249,-.00219,-.00106],"r-long|x-star":[-.00249,-.00219,-.00106],"r-pony|x-star":[-.00249,-.00219,-.00106],"r-short|x-star":[-.00249,-.00219,-.00106],"r-spiky|x-star":[-.00373,-.00328,-.00159],"r-swept|x-star":[-.00716,-.00629,-.00304],"r-twin|x-star":[-.00249,-.00219,-.00106],"r-wave|x-star":[-.00156,-.00137,-66e-5],"r-bob|x-thaipin":[-.00555,-.00479,-.00274],"r-bun|x-thaipin":[-.00555,-.00479,-.00274],"r-long|x-thaipin":[-.00555,-.00479,-.00274],"r-pony|x-thaipin":[-.00555,-.00479,-.00274],"r-short|x-thaipin":[-.00555,-.00479,-.00274],"r-spiky|x-thaipin":[-.00709,-.00613,-.0035],"r-swept|x-thaipin":[-.01078,-.00932,-.00532],"r-twin|x-thaipin":[-.00524,-.00453,-.00259],"r-wave|x-thaipin":[-.00493,-.00426,-.00243]}},m:{e:{"e-3d":[0,0,.003],"e-heart":[0,0,.0015],"e-sun":[0,0,.0015]},x:{"h-beanie|x-cherry":[.0099,.0099,0],"h-beanie|x-flower":[-.00953,.00953,.00953],"h-beanie|x-heart":[.00955,.00955,0],"h-beanie|x-holly":[.00495,.00495,0],"h-beanie|x-star":[.00955,.00955,0],"h-beanie|x-thaipin":[.00606,.00606,.00606],"h-bow|x-ribbon":[-87e-5,87e-5,-87e-5],"h-cap|x-cherry":[.01167,.01167,0],"h-cap|x-flower":[-.01202,.01202,0],"h-cap|x-heart":[.00849,.00849,0],"h-cap|x-holly":[.00354,.00354,0],"h-cap|x-star":[.01025,.01025,0],"h-cap|x-thaipin":[0,.0155,0],"h-chef|x-flower":0,"h-chef|x-heart":0,"h-chef|x-holly":0,"h-chef|x-star":0,"h-flowers|x-cherry":[.01768,.01768,0],"h-flowers|x-flower":[-.01909,.01909,0],"h-flowers|x-heart":[.00693,.00693,-.00693],"h-flowers|x-holly":[0,.0145,0],"h-flowers|x-star":[0,.022,0],"h-flowers|x-thaipin":[.01559,.01559,.01559],"h-santa|x-cherry":[.00813,.00813,0],"h-santa|x-heart":[.00693,.00693,.00693],"h-santa|x-holly":[.00318,.00318,0],"h-santa|x-star":[.00837,.00837,.00837],"h-santa|x-thaipin":[.01097,.01097,.01097],"h-straw|x-cherry":[.0145,.0145,0],"h-straw|x-flower":[-.02121,0,.02121],"h-straw|x-heart":[.01662,0,.01662],"h-straw|x-holly":[.0185,0,0],"h-straw|x-star":[.01588,.01588,.01588],"h-straw|x-thaipin":[.01556,.01556,0],"h-witch|x-cherry":[.00404,.00404,.00404],"h-witch|x-flower":[-.00895,.00895,.00895],"h-witch|x-heart":[.00693,.00693,.00693],"h-witch|x-holly":[.00354,.00354,0],"h-witch|x-star":[.00884,.00884,0],"h-witch|x-thaipin":[.0046,.0046,0]},c:[-1e-5,.14879,-29e-5],r:{"r-bob|h-bunny":[.95,.98,.95,.00261,.0087],"r-bun|h-bunny":[.88,.865,.88,87e-5,-.00261],"r-long|h-bunny":[.985,.965,.985,-.00522,87e-5],"r-pony|h-bunny":[.855,.89,.855,.00348,-.00261],"r-short|h-bunny":[.885,.97,.885,0,-.00522],"r-spiky|h-bunny":[.835,1.065,.835,87e-5,-.00261],"r-swept|h-bunny":[.945,.92,.945,87e-5,.0087],"r-twin|h-bunny":[.91,.87,.91,87e-5,.0087],"r-wave|h-bunny":[1,.975,1,.00261,0],"r-bob|h-cat":[.95,.975,.95,.00261,-.00261],"r-bun|h-cat":[.845,.94,.845,-87e-5,-.0087],"r-long|h-cat":[1.005,.92,1.005,.00435,0],"r-pony|h-cat":[.85,.885,.85,.00261,.01043],"r-short|h-cat":[.855,.99,.855,87e-5,-.00609],"r-spiky|h-cat":[.83,1.04,.83,-87e-5,-.0087],"r-swept|h-cat":[.94,.925,.94,-87e-5,0,-.0524],"r-twin|h-cat":[1.045,.885,1.045,-87e-5,.01043],"r-wave|h-cat":[1.01,.95,1.01,0,.00174],"r-bob|h-flowers":[1.005,.845,1.005,.00261,0],"r-bun|h-flowers":[.855,1.03,.855,0,.00174],"r-long|h-flowers":[.94,1.07,.94,87e-5,0],"r-pony|h-flowers":[.85,1.03,.85,0,.00348],"r-short|h-flowers":[.94,.89,.94,0,87e-5],"r-spiky|h-flowers":[.895,1.07,.895,.00174,.01043],"r-swept|h-flowers":[.915,1.06,.915,.00696,.00174],"r-twin|h-flowers":[.91,1.04,.91,0,0],"r-wave|h-flowers":[.95,1.085,.95,.00696,0],"r-bob|x-cherry":[-.00321,-.0026,-.00134],"r-bun|x-cherry":[-.00354,-.00286,-.00148],"r-long|x-cherry":[-.00354,-.00286,-.00148],"r-pony|x-cherry":[-.00354,-.00286,-.00148],"r-short|x-cherry":[-.00482,-.0039,-.00201],"r-spiky|x-cherry":[-.00482,-.0039,-.00201],"r-swept|x-cherry":[-.00739,-.00599,-.00309],"r-twin|x-cherry":[-.00321,-.0026,-.00134],"r-wave|x-cherry":[-.00129,-.00104,-54e-5],"r-bob|x-flower":[93e-5,-83e-5,-4e-4],"r-bun|x-flower":[31e-5,-28e-5,-13e-5],"r-long|x-flower":[31e-5,-28e-5,-13e-5],"r-pony|x-flower":[31e-5,-28e-5,-13e-5],"r-short|x-flower":[.00401,-.00359,-.00173],"r-spiky|x-flower":[.00401,-.00359,-.00173],"r-swept|x-flower":[.00463,-.00414,-.00199],"r-twin|x-flower":[62e-5,-55e-5,-27e-5],"r-bob|x-heart":[-.00276,-.0025,-.00118],"r-bun|x-heart":[-.00246,-.00223,-.00105],"r-long|x-heart":[-.00246,-.00223,-.00105],"r-pony|x-heart":[-.00246,-.00223,-.00105],"r-short|x-heart":[-.00399,-.00362,-.00171],"r-spiky|x-heart":[-.00399,-.00362,-.00171],"r-swept|x-heart":[-.00706,-.0064,-.00303],"r-twin|x-heart":[-.00246,-.00223,-.00105],"r-wave|x-heart":[-.00154,-.00139,-66e-5],"r-bob|x-holly":[-.00771,-.00692,-.00327],"r-bun|x-holly":[-.00802,-.0072,-.00341],"r-long|x-holly":[-.00802,-.0072,-.00341],"r-pony|x-holly":[-.00802,-.0072,-.00341],"r-short|x-holly":[-.00926,-.00831,-.00393],"r-spiky|x-holly":[-.00926,-.00831,-.00393],"r-swept|x-holly":[-.01203,-.0108,-.00511],"r-twin|x-holly":[-.00771,-.00692,-.00327],"r-wave|x-holly":[-.00648,-.00582,-.00275],"r-bob|x-ribbon":[.97,.95,.97,-.00261,-.00261],"r-bun|x-ribbon":[.855,.91,.855,.00261,-.00609],"r-long|x-ribbon":[1.01,.925,1.01,.00522,.00174],"r-pony|x-ribbon":[.885,.9,.885,.00261,.00783],"r-short|x-ribbon":[.89,.95,.89,.00435,-.00435],"r-spiky|x-ribbon":[.82,1.07,.82,-.00261,-.00522],"r-swept|x-ribbon":[.94,.92,.94,.00522,0,-.0524],"r-twin|x-ribbon":[.935,.87,.935,0,.00696],"r-wave|x-ribbon":[.995,.95,.995,-87e-5,-.00696],"r-bob|x-star":[-.00279,-.00248,-.00118],"r-bun|x-star":[-.00248,-.0022,-.00105],"r-long|x-star":[-.00248,-.0022,-.00105],"r-pony|x-star":[-.00248,-.0022,-.00105],"r-short|x-star":[-.00433,-.00386,-.00184],"r-spiky|x-star":[-.00433,-.00386,-.00184],"r-swept|x-star":[-.00681,-.00606,-.00289],"r-twin|x-star":[-.00248,-.0022,-.00105],"r-wave|x-star":[-.00155,-.00138,-66e-5],"r-bob|x-thaipin":[-.00552,-.00483,-.00272],"r-bun|x-thaipin":[-.00552,-.00483,-.00272],"r-long|x-thaipin":[-.00552,-.00483,-.00272],"r-pony|x-thaipin":[-.00552,-.00483,-.00272],"r-short|x-thaipin":[-.00705,-.00618,-.00348],"r-spiky|x-thaipin":[-.00705,-.00618,-.00348],"r-swept|x-thaipin":[-.01073,-.0094,-.0053],"r-twin|x-thaipin":[-.00552,-.00483,-.00272],"r-wave|x-thaipin":[-.00491,-.0043,-.00242]}}};var Ql={f:{c:[-6e-6,.150847,-302e-6],t:{"r-bob|h-bunny":"AeFgILgD9fTAe4beGMBCFgTAgIpfj5ey0eMABmFgVagfCfiWeyieUgCKFgV5gLdfYPezPeZaCuFgR7gHEfaUedoeiRDSFgGVfbje9vejPesLD3De3DesSe0-EeCfLsfQuEvVf96f-kf_0gB-gD9gFxgHlgJGgJngJTgIqgHcgGJgE4gDdgBYf92fzufpRfalfWAFTVf96f9Ef-OgDMgElgE5gI6gK4gK1gKLgJlgIhgF2gFFgEKgBPgDzfjafc7fedfZrF3Vf96f-kf_0gB-gD9gFxgHlgJGgJngJTgIqgHcgGJgE4gDdgBYf6efzpf1fftZfVxGrFfwXfvtfopfgKfbDHRDfgDfT2ffaH1DfdDfhIfggIaCfhzfddI-Cfh_fhKJiCfi0fioKGCfhgfg4KqCfetfbvLOCfdzfYjLyCffsfd2MWCfh_fhhM5DfazfgyfdwNdDffMfTLfYdN_FfwkfvrfoSfjAfVrOUUf_1gBCgCIgDugFdgHEgIogJRgJMgIxgHqgGUgE5gDQgBRf6PfrtfuJfiYfXNO4Uf_1f_NgCwgEpgFxgJMgKwgKYgKXgJZgImgGGgFDgEKgBPf_nf3lftMfdafa7PcUf_1gBCgCIgDugFdgHEgIogJRgJMgIxgHqgGUgE5gDQgBRf9df1QfqNfdkfgOQzDe4nesle16RWFgH5fdofBkejVeulR6FgTagK5fdxehEej3SeFgWzgNdfaCeqieapTCFgWKgh_flTe5beTaTmFgTVgGffzhe20eMkUKFgJFgEBfXSe4veFd","r-bob|h-cat":"AcEgFwgHlgHlgJaAiCflVfbjBAEgHfgADgIggLcBGCfoWfhEBkEgJngOAgYQgM4BqCfrUfmXCIEgMXgdRghBgPBCOCfuqfsACrFgH8gMVgdmghQgNkCyCfyPfsGDPFgH8gFRgYNgFugMeDVDfwifyWfr6DzJgH8gKLgFcgKkgJIf0mf08foofxjELVfk8fjxfk5frpf1ff_EgD6gGogIugJogKzgLFgLzgLYgLmgLKgJggBRfkuf5Ofs5EvVfmXfdWfVxfTRf5zf6tgDEgGigFagI3gJAgK6gIKgNrgMngM0gNVgF0gAsf8CfvnFTVfmXfoSfpYgF2gDAgDZgIKgNNgNfgOxgQ5gS1gOogRcgSQgNLgNfgApf8xf4sfxCF3VfnyfoNft1f1ef9xgB7gFjgIagKlgLygM_gNTgNogNzgNigL_gIlgD6f_Af01frZGuCfulfuxHSCfk0ftUH2CfemfotIaCfVCfjEI-Cfl6fmNJiCfo_fglKGCfoKfj_KqCfoTfgGLOCfmhflvMWCfrUfrUM6CfrUfqqNeCft4fvlOCCfwyf1OOTVfm1fnwfuDf2ff_AgCmgFtgIQgKWgLkgM6gNMgNkgN0gOFgM-gKKgFagAGf12f4rO3VfkifoLfm-gCRgCmgD8gIOgMZgM0gO9gP9gTvgO-gSSgTcgRBgMVgFsf_Hf4DfzDPbVfkifcrfYrfxTf13f8bgDcgErgHcgIggIYgNjgI2gK1gLZgL5gMtgGfgApf3lf1fP_VfiPfjJfoHfw4f6WgAVgDngGLgIDgJDgKbgK9gL3gLkgL0gLRgJlgBHfpqf2hf7IQvJgJlgL4gGrgLcgIQf0rf08flpf2ERTFgJlgFBgaYgTWgMERZDfvpfvIf3CR3FgJlgNSgdmggXgNNR-Cfq8fxpScEgMygZ6gghgOnSiCflwfsATAEgJRgRQgW_gL_TGCfiUfmeTkEgHSf-RgGigKPTqCfhLfj4UIEgEggGPgGPgH-UOCfgvfhL","r-bun|h-cat":"AcEgKJgK9gK9gLyAhDgtOg2ug6kBAEgMTgKJgLygOIBFDgzHgtYg8iBkEgOJgOdgQfgP_BpDg1wg4_g7OCIEgQ7gR0gTsgSXCNDg6zg7Eg6uCsEgRxgSggS6gQBCxDg87g7ag8iDQIgRvgQ-gJdgOLgWRgx1hATg8eD0IgQ-gNNgFyf9OgMMgdpg_Ag8bELVf_0f-kf7zf4sf8_gD4gK4gLSgLIgKWgIvgGvgEXgCfgApf75f26f76gqkg18g6XEvVf_0f_0f9Vf2Pf2hgKNgK7gLhgLagKbgJMgGmgEagCEgA-f-4f4yf4qgmcgt9g2TFTUf_0f-kf7zf4sf8_gD4gK4gLSgLIgKWgIvgGvgEXgCfgApf9jf6VgH7gSQgnqO3Uf-2f-Gf7hf4vf89gDtgKpgK_gKxgKBgIogGygEbgCQgAXf-Uf86gLGgUggpTPbVf-2f-2f9Wf2Wf2ggKBgKmgLVgLCgJ8gJFgG2gEagCCgATf-xf75f8FgosgvUg3hP_Vf-2f-Gf7hf4vf89gDtgKpgK_gKxgKBgIogGygEbgCQf9EfzKf73f_hgtIg3hg6BQwIgUfgF1gDWf-GgSsghmg93g4sRUIgUNgUfgJ3gPXghJg1yg6Ig51R4IgTlgT8gMTf6GgFGgi4gwCg4tScIgRogSUgOhff1gB5gpnglcg8xTAIgOogOogRCf5_f_jguPgxng__TkEgMygK7gNPgPITpDgwQgrqg-WUIEgK7gMFgMFgNPUNDguJgwpg9j","r-bun|h-flowers":"AXGgR2gRhgfngRrf8PgHHA7GgT8gZ7gj2gTCgK3gExBfGgXEgV-gm1gS0fuygCpCDGgYygXfgmMgbCf0SgCpCmHgKvgXTgdSgjPgVqgM3gCeDKGgLTf0EgqngfOgRMgPXDuGgKEgACgndgf1f_JgKSESGgJHf2rghrgcVfrsgEwE2GgHwf7xgWPgQ9f4jgAkFaGgH4gI6gC0gAjgGRgA-F_EgCHgDVgB_gCGGjEgBof_JgFagCgHHEf9YgB5gFlgCCHrEf7QfYrgNqgBNIPEf10f9YgF-f_5I0Df--f9Wf--JYDf3Bf_sf3BJ8DfvvfmafvvKgDfwBfhlfwBLEDf3Vf_0f3VLoDf-5f94f-5MLEf1zf9KgF-f_nMvEf7MfX3gNmgA3NTEf9OgBTgHAgCEN3EgBaf-AgFcgCdObEgB8gEtgCFgCHO-GgLegKTf_jgBVgIagHIPiGgKggCjgdkgSsgBrgFgQGGgKLf4tgkngfSfz3gIGQqGgJvf3tgrJgeAgC1gLCROGgJ1f2LgpBggjgNqgOnRyHgKIgXQgclgjlgVZgM1gDoSXGgZKgX6gkjgdlfyzgCWS7GgXRgWBgjAgXnftwgCWTfGgTsgZlgiugS7gK_gETUDGgR2gPcgjFgZRgFygHH","r-bun|x-cherry":"CnEf3of36f36f4NDLGf6qf3of4NfzmfsXfraDuHfhrf1Nf9sf9fftTfrafqtESHfhrfhrf9zf9Rfrrfp_fqtE2Hfhrfvvf0Qf3lfw-fq1fp_","r-bun|x-ribbon":"AiChEwhFhBGChDNhEUBqChAgg_DCOChDgg98CyChGvhBsDWChI7hGRD6ChJshLSEaGf3Hf3ZgQWg0DhIlhP7EvVf3df3ff0Vf2Zf5NgAEgCJgDcgD_gEpgE7gEqgDegCEgA1f9sfZdgR1hOIhWrhVLFTVf3df19f_cfXngHkf86gDwgEvgEFgELgJ0gDygFMf_lgBtgFCf7NgethSkhkVhXKF3Vf3df3ff0Vf2Zf5NgAEgCJgDcgD_gEpgE7gEqgDegCEgA1f_4gIIggxhAxhUnhcGGtDhNDhQZhhLHSChPThmWH2ChNYhrnIaChQUhsvI-ChR_hvqJiChS3hrcKGChKDhnSKqChKDhiBLOCg_Lhc7LyCgvdhZGMWCgtKheAM6Cg40hjQNeChIihoYOBDhHNhMThtDOUUf2DfyIf2Wf5sgAbgCAgDQgDzgEjgEwgEkgDBgBvgAdf_wgJqgh-hADhE5hwsO4Uf2DgAMfj3f7cgBOgCpgExgFHgCXgJTgEsgLmgDBgD9gHxgJVgYUhPHhUnhvYPcUf2DfyIf2Wf5sgAbgCAgDQgDzgEjgEwgGRfqdf9wf3SfxXfgugSuhOxhK6hqHQKKgI1gSMgg5gg5gTxgBZgNwg01hJZhk_QuKgO0gVGgV5ggBgdugJ4gOhga0hKshf-RTJgXxgXDgNHgcPgcMf4wgNEhJXhclR4IgUlgUOgfggb9gDsgLzhIGhZMScIgSYgS4gc8gaIgCvgJMhDkhULTAIgJsgGmgUzgTDf14gGmgz2hO7TkIgEoffBgHKgHkfVJgIbhCShKhUIIf7_gCSgEBgCLf5XgFJg_XhFR","r-long|h-bunny":"AdHgcufn-fTJfTNfLCfhZfmCBBHghdgezfvefBnfQEfsQfkLBlHghRg7Gf_rfLDfOSfulfmUCJHgXbgvLf1zfEsfABfw2frfCtHgQCf5HfjsewTe-dfzofvjDRHf_Lf8xfd7fTWfYJfz8fvOD4Ef3Dfv-fuqfzHELVf43f6Of8Pf-mf_2f_4gBagDZgDtgDWgDigE5gGvgIcgKcgKlgIwgCKfqBf60fwSEvVf7VfwMfuZf3Wf7vf4lf5IgDKgCsf7HgABgDxgD2gJ4gLjgP8gKKgEzgCYf74fz2FTVf7VgDSgDvgMWgJjgFRgEEgO-gM7gGIgGagKLgG3gLAgPigHwgKlgBYf89f57fw6F3Vf90f-XgASgCggDlgDNgEPgF_gGQgFQgFEgGEgH3gJXgKUgKMgHygEKf-4f03fsyGuCfvmfnnHSCfukfi0H2CfvqfnSIaCft3fpFI-CfynfuQJiCfusfumKGCfsofqjKqCfppfnJLOCfogfogLyCfmdfmdMWCfpyfnkM6Cfh3fpPNeCfltfuaOCCfnufzIOTVf8sf96f__gCTgDBgC_gEUgGZgGNgE_gEsgF5gIBgJdgKrgKYgIlgEygAMf2-f2bO3Vf7GgApgDpgNHgKpgDBgF_gNIgLtgGTgHXgJ-gGtgMrgNzgMbgK5gHTf-2f59fxsPbVf7GftVf0ef3af9Df37f6LgAdgB9f8af9kgGmgCYgKegKbgK6gNDgDkgBcf5pf1yP_Vf5ff6kf8Yf-of_mf_8gBagDpgDdgDLgDhgFMgHAgITgJ8gJygH9gBzfoMf4wf6mQ0Ef4EfxofpQf7_RVHgD9f_-fh7fUXfZBfxdf3uR5HgTPf-9fp7e0fe_UfvWfyjSdHgYxgypf3NfDEfDGftfft3TBHghagz3f4bfHHfPRfrnfo4TlHgg3gn9f76fFFfPhfgYfkbUJHgd6fxIfa2fTffKUfgPfiI","r-long|x-ribbon":"AiCfd_flNBGCfqvfpdBqCftFfs1COCfvJfu0CyCfwifvjDVDfqCfwNft8D4EfxbfxVfp8fu-ELVf12f2ef4Nf6Rf7pf8Gf-pgBggCYgBwgB2gDngGPgIYgKIgJvgHyf_rfpof2sfqtEvVf6jfqdftTf0mf0Wfx1f1FgCbgBvf7kf_FgD3gCggJ2gONgNtgLSgF6f-wf4BftyFTVf6jgFegGVgNpgM0gGXgGZgMogK6gE8gEngIogG3gIOgJdgG2gFyf9nf6mfrRfp2F3Vf_Qf_xgBjgDhgEIgDjgEQgF2gFngEWgEMgFWgG3gHvgIbgH9gFkgBif65fy0fuGOUUgAfgCygDPgDtgDWgEQgGBgFtgEfgEBgFAgHCgIGgI8gIEgF9gB0f8AfzWfu5O4Uf79gGcgO6gL4gHQgHegLEgK2gFbgETgIwgGLgKQgJIgHbgG5gBbf4uft9fqwPcUf79fsLfxCf1dfw2f1MgBIgB6f79f9_gDngDWgL9gNGgLWgMrgD5f_ff6tfvAQAUf3bf4af5tf6pf7vf-QgBhgChgCBf7ifPvf9kgJdgKngBkgGJf_Lfxjf0ufycQtLfojf4_f6wgJJgKNgCagEUf5gfy5fn_fzSRSKgA0f_wf53gDugG9f9Jf6ofuNfu9fvJR3Jf6DfpngHFgKbgCsfdSfufftEfrSSbJf01fvBgEqgI7gCsfeTfqjfr_fpnS_Jf0dfj0f7Cf_Vf4pfirfpDfpofl_TjJfwvf2gfpJfwefpLfxffirfc6fhuUIFfzOf1Pf0lf1QfzRUOCfb2fhf","r-pony|h-bunny":"AdHgo5gINf30fXwfF-f9Zf-bBBHgtggo5gWDfu-fYpf_rf_6BlHgsggyIgfqf0NfwUgBFgExCJHguUgqggfDfvcfo-gAJgAcCtHgqggYzf7MfbpftRgDLgFTDSGf3BfUwficfyBgDxgBaD2Gf8Hf_Kf_mf9zgC2f-aELVgA5f_of8ef4pf8EgCFgIbgHlgH3gIXgJtgJUgIFgG4gFwgC7f8HgCNgCPgBdf5jEvVf-sgA5f-Yf2If1bgIqgIKgIegGHgJBgJ-gKHgH4gGQgGggEggEkgCggAaf-ef7JFTVf-sf8ff6qfxjgADgE4gCvgDugDEgAugHdgJUgIFgG4gFwgFMgD3gCggAdf_cf-eF3Lf8ff7lf4Pf5bf81gCjgDygDLgCggB5gAuOUKf6Sf1wf6Uf9LgC_gCOgBpf-2f9rf6PO4Uf8Cf6SfxNgDegC3gCogBLgBHf6PgBDgFrgGdgF-gEBgCngCYgDjgECgERgEBPcUf8Cf9yf2Gf1egIQgHfgGjgEsf_0gEagFxgG3gGwgETgA_gCkgDlgEigEBgBEQAUf9yf58f4df78gBvgHbgGPgDrgC-gDVgFrgGdgF-gEBgBRf9QgGCgHegHbf8NQyGf9QgBpgEGgFngHGf_eRWGf4TfXJfmpf02gFcgBFR5HgoOgYMf6jfbLfsfgAFgAqSdHgr-goOgelfuKfnvf7BgAXTBHgrdgvvghYfzGfuVf-ZgADTlHgtFgqcgamfvUfWNf-gf-KUJHgqcgIuf2efXLfFQf9Df9T","r-pony|h-cat":"AcEgTWgUSgUSgVNAiCf_Ef_0BAEgVmgTWgVNgXeBGCgBygBWBkEgXegX2gZugZTBpDgD6gCkgFUCIEgaRgbNgc9gbkCNDgCigD6gCHCrFgUMgZFgbxgcAgXCCxDgDcgBKgBCDPJgUMgUMgZKgMIgUEf-ogCQgFPgEIDzJgUMgWrgTKgMEgE3gBCf-ogEAgAKELVgAuf_df8Xf4rf8TgCbgIwgIAgIUgJBgKbgKNgJEgHzgGrgEPf-6gDjgDCgBzf_nEvVf9RgAuf-Nf2Kf1rgJDgIhgIrgG0gJcgKygLCgIxgHagHPgFYgFagDvgCFf7Gf-dFTVf9Rf50f3tfutgARgB-gCpgGqgIUgJBgKbgKNgJEgHzgGrgGAgE2gDvgATf-mf7GF3If50f4xf1af3kf6_gBogCTgCpOUHf0HfxUf2Wf6pgA7gBLgBXO4Uf4_f0HfuhgAagBAgBXgFZgEzgD-gEcgGOgHNgG1gE4gDjgDfgEggDhgCzgAXPcUf4_f92f18f1lgIfgIGgHKgE8gCSgEsgGVgHqgHpgFLgB2gDogE-gE4gAtf8ZQAUf92f55f4df8AgCDgH6gGvgEzgD-gEcgGOgHNgG1gE4gDggDXgHGgJFgI6f6XQvJgYqgbJgWWgPQgHvgGVgF0gIaf-VRTJgYqgYqgdogMwgVTgF0gGRgHCf_7R3FgYqgbvgdNgd3gXnR9DgDOgD2gABScEga7gbfgcNgcFShDgBUf-yf_8TAEgX8gYEgaKgZ2TFDf-ygAXf_zTkEgWLgUSgXLgYqTqCf_6gAQUIEgUSgVugVugXLUOCf_lf-U","r-pony|h-flowers":"AXFgK1gEEgTHf_IgEbA7FgMxgDugbJgMYgFLBfFgOdgOdgWsgCIgGTCDFgRYgMcgXRgCUgGTCmGgFUgPtgZVgU5gN3gGRDKGgFUfu3ge-gQIf_mgGMDuGgFhgPxgdGgWigONgEWESGgCSf9cgbIgUWf9lgAlE2GgCSfqvgTLgNRftEgAlFaGf-2gClf6nf-KgC3f-qF_Ef98f63gAIf_oGjEf-kf7bgKJgBMHHEf_9gPVf3qgUdHsEgxGgv3g3ihK2IQEhQmhwjg3chQOI0Ehcjh2zhO9hReJYEhaDh2jhX8hPMJ8Eg5QhZogofgwaKgEgaGgEMfrUgRsLEEf_OgEXfqnf5HLoEgBKgLPfvqf6CMMEgDXgKEfs4f7LMwEgFTgGFgC_f8DNTEgAJgEDgH1gFXN3Ef_Lf63gGfgDrObEf9vf6KgC9gAeO-GgBRgDhf1if9IgFPgE6PiGgECfpPgVfgPyf-MgEoQGGgECf88gjMgVuf41gEoQqGgFlgQDgbLgUugB4gFmROGgEYftTgd1gQhgAvgG3RyGgEYgPhgYTgTLgNYgGESXFgRfgQ2gTXgAVgFeS7FgOcgMWgXTgHGgFeTfFgMHgDMgUxgMHgFOUDFgKugCIgYfgE3gEb","r-short|h-cat":"AdEgB_gCugCugDdAiCf_8f2IBBEgELgBBgDJgFTBGCfzef37BlEgGZgJXgLHgGqBqCfuUf8FCJEgI1gR5gQQgItCOCf0wf_8CsFgGBgIqgQsgRIgGHCyCf9CgBmDQFgELgIEgPof8tgEfDWCfwjf_rD0FgELgCWf7_gCIf_WD6Cfq4f7gEYIgCWf3ffyhfqgfshf2Rf0tf8nEvVgBCf__gC-gGjgLHgMhgNVgNrgNjgMhgLkgIpgEqf99fyZfdJfbsfcOgEegA0gAyFTVgBCgBkf8ggKIgNigOAgOsgPtgPKgNMgMGgMbgC2f9zf0xfsYfmnfjUgBMgAyf9KF3VgBCf__gC-gGjgLHgMhgNVgNrgNjgMhgLkgIpgEqf99f2qfvVfpxfw-fshgB6f9PGsEfz9f6df1cgBaHRDf5yf_lf_cH2Cf4ff-oIaCf4df9XI-Cf4RgBiJiCgBBf_kKGCf8vgBZKqCf7Bf9OLOCf6rf-yLyCf_xgB7MWCgAogGFM6CgBQgCbNdDf79gAfgGlOAEf1Rf7Gf5rgEMOUUf-ugEJgGpgLSgMkgNLgNZgNNgM7gMPgJDgEif9if2mfvnfu0f0Tfu2gBQgIXO4Uf-uf9qgKlgNwgNugPKgPJgOagNWgN8gMrgCVf9ef0jfs-fnPfy1f_EgD9gG6PcUf-ugEJgGpgLSgMkgNLgNZgNNgM7gMPgJDgEif9ifyeffJfZcfn5f6YgAKgCvQMIgJIf9pf2ufviftIf3Lf-9f-6QwFgKSgI4gKegHAf-GQ2Cf8Yf_PRUFgKSgNegSgf3vgEXRaCf6rf7FR4FgLbgMAgRvgO-gGYR-CfuNf3ISdEgKAgOzgOSgJXSiCflCf0RTBEgG8gHpgIzgG_TGCfujf4cTlEgE4gB-gDdgFRTqCf7Bf8ZUJEgDLgDWgDWgDhUOCf-1f6T","r-short|h-flowers":"AXGf66f3cgG8f4IfhEfvfA7Gf9KgDdgKxf-_f2UftQBfFgAaf8OgNMf23f7lCDFgCXf-ngM5f4uf7lCmGfxCgAJgFfgKsgDcf74DKGfxCfdCgHGgJhf2nf5mDuGfwGf-6gL7gK8forf1fESGft1ff4gKRgH-fe-fxBE2Gft1fa5gAaf-OflTftzFaGfsff4mfzff7-f59fuWF_Ef4Wf5Ff-Qf9EGjEf4QfsggCkf-IHHEf2Hf81f-sf_FHsDf-4gA2f-4IQEf_lf-rf-Vf6lI0Ef_-gDSfz0f7xJYEgAfgDqf4Xf8UJ8EgAygCDf5kf9RKgEgAwgDsf50f9cLEEgA1gCxf59f8gLoEf_6gDUfy5f8CMMEf_if-2f-Tf6mMwDf-tf_0f-tNTEf4gf9Vf9uf-8N3Ef5XfyRgB2f-IObEf5Gf4Sf-Lf9QO-Gfv_f59f2Af7ef8Pf0nPiGfxUfgFgDjgBKftYfz2QGGfxUfj3gMRgJ9fnOf1JQqGfxzf_ygKggJmfqhf3LROGfw-fdugIcgJlf0gf5PRyGfw-gAHgFkgKVgC7f7YSXFgCXf-qgKuf6Zf7xS7FgAdf8agJ5f40f7xTfGf80gDAgJ-f_wf4YfxuUDGf66f2PgJmf8zfsMfvf","r-spiky|h-flowers":"AVGfyifnQgI4gPqgJIgLCA5GfwNf_TgKmgODgLHgIkBdGfzyfgugI8gOfgGagInCBGfzyfycgMIgPwgJDgInClGf7OgFmgQPgL7gLWgJ7DJFf52f2egObgMCgJxDtFf7uftQgKdgJEgD2ERFf8xf8AgMUfxGf97E1Ff_wf9PgKVf2mf14FaEgGagKofiif00F-EgIsgIngCufw2GiDgGdgMkgGdHGDf6YgEZf6YHqDfuNfgdfuNIODfj7fh5fj7IyEfjxfhPfirffZJWEfjXfhEfaIffqJ6EfjQfhCfarffzKeEfjTfhFfa6ff3LCEfjbfhOfadff1LmEfj0fhJfiwfflMKDfkGfh4fkGMuDfu_fgkfu_NSDf7KgF-f7KN2DgHGgL6gHGOaEgItgI2gC2fxSO9FgAHgGggK_fiqf0sPhFf_yf-IgLxf1Ff1mQFFf9kf8ogM8fwif8BQpFf8JfxYgJSgChgBlRNFf6ff0pgPMgLUgGqRxGf5BgDkgL1gKHgJpgIOSVGf0ffuvgJBgOzgIPgFkS5Gf0ffnlgMSgI-f93gFkTdGfysgA0gNegK1gJLgHkUBGfyifn4gH2gPmgPVgLC","r-swept|h-cat":"AcEgMSgO4gO4gRfAiCfSvfbcBAEgP_gGrgPTgT0BGCfYffflBkEgR2gg7glmgVRBqCfaGffxCIEgUSgpjgxfgXUCOCfmOffpCrFgIygQ3gjGgwQgVcCyCfypfjuDPFgIygAZgdIgWsgUEDWCfuDfn4DzFgIygM0gLjgPZgQhD6CfuXfpeEYIgMHgIHgG0gC3gAZf8yf0-fsIEvVfkgfjcfqkfy1f9BgA3gEdgG9gI7gJjgKqgK6gLkgLpgJnf-ogA-gAGf3Qf4-fwSFTVfkgfiEfTugBnf66gB3gFFgJegJwgLmgLrgOwgLLgNLgPmgPMgM9gHqgCof-dfsuF3Vfkgfjcfqkfy1f9BgA3gEdgG9gI7gJjgKqgK6gLkgLpgLdgKjgIggC0fzJf2zfuMGsEf7pf4kfqYfyWHRDfzGf10fz_H2Cf1rfzUIaCfx0fvKI-CfxifwnJiCfv4fz4KGCfqvf3ZKqCfqjf0dLOCfoCfwTLyCfu6fxXMWCfvXfzCM6Cfyff3MNdDfypfzNf7KOAEf6Xf4Hfp5f96OUUfiCftSfy9f9IgA9gENgG2gI2gJmgKrgK6gLegLtgL1gK6gIrgCvf0Hf2Uf7iO4UfiCfZif8Jf91f_ugE5gIkgJ1gMDgJ0gPegLWgNNgP-gPbgO6gHngEWf6Of52PcUfiCftSfy9f9IgA9gENgG2gI2gJmgKrgK6gLegLtgJof6Df8-f_Tf5Zf3of1sQMIgK_gHAgFtgCff7Xf5gf2WfxyQvFgFOgJxgOMgMFgEyQ2CfwffuBRTGgFOf9JgFDfucfllfLORaCftjfraR3GgFOf-af8nfr8fBJe3pR-CfnifnQScFf2AfJdfhbe4Heo6SiCfhbfjTTAFfxIf4PfvAfcje5-TGCfYtfgJTkEf5Af7Rf56fzjTqCfNLfb_UIEf3Vf33f33f4aUOCfR1fa-","r-twin|h-cat":"AbEgByf-zf-zf70AhDftef_KfnkA_EgEqgEnf66gBdBFDf4agJ2fm6BiFfzkgBXgtTgxKgBYBpDgGigS9fnYCGFf6LfkygXUf-Uf8VCNDgIhgWzfrxCqFf8gf9igNsfbKf29CwEgICgJGgXGfq_DOKgA-f36gSif-dfsqf7FgCZf37gTGfsUDyKgBKgDdgDdf_1f7Yf8WfkCgLfgQVfsiEMUeqgfLQfdrf8qgGygJbgJ1f6FfsEfgAfmuftff0Yf4xfsef_FgBrf1ogdgfw1EwUfQ7e-2fKQf8ygE7gOPgKlgdHfqlfWFffcftJf2Df1df_ygE7fzyfs0gT4f1PFUTfxSgj0gYVgcegGfgJbgJ1f6FfsEfgAfmuftff0Yf4Yf7nf9Xf2LfyEgGwF4Ff3Xf4sf9Af_0gFmOUFf2cf7rf9ygBegCCO4TfvsghfgdJgclgFSgJHgJ7f50frefgrfm6fuEfzVf4Lf7Jf9Yf2Afx7f4APcUfOKe8hfMGfwUgHtgRFgJcgbZfo3fFgfmtfn9f5ifv8gGBf9Mf-RfgAgFJf2pQAUel5fKzfdZf9ZgGYgJHgJ7f50frefgrfm6fuEfzVf4pfo_f-EgNofq7gSQfyPQuKgBngDugDuf_-f8If9cfvRgAxgc0fuIRSKgBDf7GgQPgAVfyMf96gFDfuxgf3fwqR2Ff8fgHagIDfVhf5hR8EgIEgEngdDfxiSaFf58fisgJbf5tf-BShDgKhgYjfwuS-FfzZgCNg0vgv9gA9TFDgIlgVNfwoTjEgEdgDif6vgBATpDf80gSxftpUHEgBtf-Vf-Vf6-UNDft-gFvfp8","r-twin|x-ribbon":"AhDff-ffUfZsBFDfVEfnwfcqBpDfbjfzxfgPCNDfpLf-wfkHCxDf5egGffnvDUEgBngEOgJKfrYD2Gf87f-Sf_kgBhgM9fu5ELVftHfr5gCDge0g9NhFRhE3hA5gqCgUugBtgAGf92f9yf-df_Df50gCsfuxgDPfywEvVftHfp8gB3gu5hc9hPrhUWhLXhRAgi7gAigB2f6vf9ZgCUf--gC8f7TfbOf3pf2xFTUftHfr5gCDge0g9NhFRhE3hA5gqCgUugBtgAGf92f9yf-df_wf_Uf0nfvJfroO3Ufp1fqLgCIggNg-QhE-hEzhBLgqhgUfgBrf_vf-ef-Cf-yf_Uf_Efz1fuHfo2PbVfp1fcHgKMg3XhU1hRLhRahObhG-gY5f7UgIsf5bf7rf_3f_QgExf9HfkXf03f3xP_Vfp1fqLgCIggNg-QhE-hEzhBLgqhgUfgBrgF0gLJgV4gJxfsNf6IgBTf4Sf-_fzwQuKgL5gN1gY8gdugNqgEqgBSf_pgH-fwGRSKgKpfwqgTPgVRgNOf11gIFgEsgOnfsnR2KgF0gIbfymgTQgXngNCgL8gChgGnfpJSbJgEfgBxgTVgXTgMfgNRf1Nf6mfloS_Jf_Tf4AgMGgONgFngHyfs-fwnfiLTjJf7OfTMf7Hf_4fy-gEXfcqfkmffPUHJfyjf7Bf-fgChgCDf-rfnqfgXfdU","r-wave|h-cat":"AcEgBDgCJgCJgDOAiCfkJfnMBAEgDDf_PgC7gFkBGCfjUfrTBkEgFigF_gK6gHyBqCfrofm_CHFf9QgG4gPagREgLHCOCfqsfqrCrFgDQfzEgVegTEgG1CyCfqHfqaDPFgDQgKzgUWfoZgEJDVDfqPfqLfqDDzFgJPgLigLigGzf7DD5DfvlfqPfuYEPRf61f7Df8sf-cgBAgDggGZgIbgJ4gLFgL-gLXgJTgEgf4lf01fvXEvVf-Bf-ogAfgCPgA2f1uf17f9Mf99gBIgHfgJFgIHgMJgNrgNZgJ7gFef-Xf36fvfFTVf-Bf9Ef-fgGBgFXgBxgDxgJTgIagHigHUgLdgLIgN-gQigOqgNAgHDgAPf3xfx9F3Vf-Bf-ogAfgCPgC2gCSgDOgE3gGOgGggH5gJGgLCgMWgNTgMvgKFgFrf7_fq1fw1GtDfvzfvAfsgHSCfsQfrWH2CfpafnBIaCfphfocI-CfpVfsxJiCfs9fr7KGCfrnfn8KqCfiifjnLOCfhSfimLyCfjGfj1MWCfp9fiDM6CfpOflvNeCfr1fptOBDfwpfuVfuCOUUf_KgBrgCNgC2gCYgDNgE3gFwgF9gHbgJIgLcgMogNggM2gKdgF9f8Rfr3fxXO4Uf_Kf92gGLgFhgCsgERgIEgIrgGhgHRgMVgLYgPUgQLgPRgOEgIAgAjf3Dfv-PcUf_KgBrgCNgAmf09f2pf8sf73gACgFSgJwgIvgLZgNYgLigKbgFAf88f3ef0MQDRf52f6sf8lf-egAygCWgFegH0gJvgK6gLagLGgIygEHf8BfyOfz9QvFgJdgLagLCgGif61Q1Df0hfx3fy-RTFgJdgJ7gT-fsigEFRaCfuAfupR3FgJdgMbgVLgTWgGyR-CfsJfrbScEgKqgQCgQ2gLTSiCffNfpUTAEgGQgGSgK1gIYTGCfTGfk_TkEgDrf_kgFDgGfTqCfP6fhbUIEgBigDEgDEgEnUOCfYWfkf","r-wave|h-flowers":"AXFgBwf9XgKbf2mf74A6Gfraf9Xf9wgNpgC0f6_BeGfuxfVigGQgKzf0Mf7vCCGfuxfixgE3gItf43f7vCmGf37gB3gMYgHygCgf6nDKGf9tf2AgLJgGrfxtf15DuGf9Gf2hgLmf7lfnbf15ESGf9tfxsgMefyFf5JfyUE2Gf9tf7agMUf7MfpvfxVFaGf_hgFCgL5fmzf2TfxVF_EgGbgJ7gB_f7VGjEgGOgIHf7_gCzHHEgF3gHugDbgDQHrEgFpgGngDGgEJIPEgFPgHLgDqgEWIzEgEZgFVgGEgEUJXEgDZgBagEtgEWJ7EgCtgB-gGMgEZKfEgC7gBJgHTgEWLDEgDkgDJgEGgEgLnEgEhgE9gGRgEUMLEgFKgGsgD6gEbMvEgFpgGmgDPgEINTEgF9gHkgDAgC-N3EgGVgJDf7pgA6ObEgGkgMJf1-f7uO-Gf_tgFIgNYflzf4TfysPiGf9If76gL2f6zfrGfysQGGf9dfwkgM9fyNf5Afy_QqGf8wf3LgLrf4dfoIf16ROGf92f10gLWgGdfxzf16RyGf3cgBqgMMgHZgCRf6TSWGfsxfhpgFkgGvf5yf7fS6GfsxfTFgDzgKWf1cf7fTeGfoPf8Ef7lgLjgDAf7uUDFgBXf6qgNGf7Jf74","r-wave|x-ribbon":"AiCfnwfwoBGCfyxfwzBqCf9NfyfCyCfkAfqEDWCfnOfm-D6Cfo8foEEdDfs_frpfmGEvVgCUgCygEQgGPgGxgGXgGtgIFgJGgJLgKcgLwgNlgOmgPjgPFgMUgHvf8KfsXfn0FTVgCUgBogC5gJkgLngCtgEPgMxgJngKhgJ-gOXgNMgRrgSNgSQgRDgGzgGGf5BfpNF3VgCUgCygEQgGPgGxgGXgGtgIFgJGgJLgKcgLwgNlgOmgPjgPFgMUgDTfxIf0zftMGsEf2BfxhfpJfvvHRDfoifr5ftFH2CfpzfpOIaCfp-flgI-Cfr6fpuJiCft2fm8KGCfpYfrKKqCfmAfpBLOCflqfs9LyCfpxfwQMWCfu_f0eM6CfvafwiNdDflwfuFfyKOAEfzbfwNfpjf2ZOUUgDdgF6gGrgHNgGGgGPgHjgIsgI1gKIgLsgN1gO4gP2gPdgNVgDRfqtf1If38O4UgDdgAogL3gKagECgFHgLfgLBgIIgJkgSogPUgSagTXgUagRRgNff_rf2efztPcUgDdgF6gGrgHNgGGgGPgHjgIsgI1gKIgI8f9FgLCgMxgBygJTgE7f9yfp1fxVQKKgDqgAsgP1gUigMlfnZf8nfvrftmftgQuKgDef2CgOAgTLgL2fxNf_Qf6Qfo-fpWRSKgBWgHxgKngGpgN7gJXfqhf6mfs4flIR4IgKNgMfgQ7gMVfvdf6afgwfh6ScIgHVgGSgLYgHbftVf3PfgwfmJTAIf-cf5BgBYf90fcEf1Yfgwfo6TkIf4-fgnfw_ft7f4UfwvfmsfoXUIFfw9f0nf1Qf3Zf2iUOCfmsfsl","r-long|h-cat":"AcEgEAgFJgFJgGTAiCfbafmJBAEgGIgEAgGTgIhBGCfmPfmPBkEgH6gIQgKwgKJBqCfg-fnTCHFf6WgGdgLdgNYgMKCOCfpkfrECrFgANf6WgLzgMXgFxCyCfiLfvXDPFgBhgGEgLXf3kgB9DWCfnnfteDzFgFGgEHgH6gDnf3kD5Df0ufrbfwfEUMf7Tf9Zf-PgBygErgGVgHlgF7gCrf8Vf0ufxQEvVf-gf-_gAhgCGgCGgBIgBugDTgDbgAqf7Tf_ff_8gDogH0gIOgGWgDMf-ef69fvgFTVf-gf-gf_egDlgDOf_egArgFAgENgBDgCEgFIgFFgIGgJqgJzgJegEuf_6f7zfzzF3Vf-gf-_gAhgCGgCGgBIgBugDTgDbgCcgCvgEFgGGgHngJMgJpgIAgAtf0vf4BfzfGsEf0vf2Yfzqfw1HSCfvgfxHH2Cfv_ftrIaCfs-fwmI-CftOfsTJiCfrgfrgKGCfrHfuEKqCfrmfpxLOCfsjfsjLyCfsnfwSMWCfsafr_M6Cfq1fr6NeCfu6fu3OAEf0xf04fy4fzKOUUf_agBbgCDgCLgBcgBzgDdgDWgCigChgD5gGOgH5gJlgJtgIagA-f0xf0-fz4O4Uf_af_agDcgDUf_ygBOgEZgExgA4gB9gEsgFDgI7gJrgKJgJUgFwgABf9Af0RPcUf_agBbgCDgCLgBcgBzgDdgDWgAsf7If94f_2gEygIJgHUgGIgCTf-af5-fzHQIMf7If8gf9ngCEgFcgG8gHlgFQgCSf7_f1RfxFQvFgGxgFvgIugDSfzmQ1Df1RfwnfweRTFgGxgH0gNhfzmgA7RaCftzfsKR3FgH0gLrgNQgOPgFKR-Cfs0ftTScEgLNgMHgNpgM8SiCfsyfsCTAEgIVgISgK7gKwTGCfrcfqZTkEgGcgEngHrgJTTqCfelfmFUIEgEngGJgGJgHrUOCfbafif","r-spiky|x-ribbon":"AiCgg_grKBGCgeEgt9BqCglbgyJCOCglHg0iCyCgkZgw_DWCggtgsyD6Cgd_gqPEbFgUbgbUgddgRagmCEvVgD3gC2gBjf_8f-ggJIgT7geUgaggTXgDtf1ffylf7ugJEgQzgWagKSgrCgZOgiwFTVgD3gGMgBwf7ogASf-JguWgk2gj-gXfgIEfi6faugEigLFgUhgc6gf4gcegMqgejF3VgD3gC2gBjf_8f-ggJIgT7geUgaggTXgDtf1ffylf7ugJEgQzgXFgf1gK3gFfgcxGtDf2Bf5sggtHSCgAsgkkH2Cf8lgoxIaCf-fgsAI-CgFWgsfJiCgR6gwRKGCgaOgsFKqCgZggoDLOCgM8goBLyCgIAgsOMWCgPYgvoM6Cgb8gwKNeCgZHgykOBDgM2gNXgwROTVgDHgCIgBLf_2f-jgIugTEgdjgaagTggDsf05fyQf7dgJVgQ4gXgggQghsgUzgvvO3VgDHgFXgBjf-2f-sgEhg0vgjNgiRgWtgKxfbQfd1gN-gP1gXGgftgicg2PghXgriPbVgDHgCIgBLf_2f-jgIugTEgdjgaagTggDsf05fyOfWNgACgOrgH9gFfgtpgtJgoRQLJfw8fw4gGOgWXgQjf3igbOghNgkRQvJfyvfcrf6RgP5f--fp9gGYgdKggKRTJfugf2yf6lfjagFYgFbgBwgSvgdHR5Hf1NfzDgNEgNXfzfgMfgY6SdHfzsfsvgJJgKvf1TgBrgbCTBHfrXflhgBLf_xfzyf-sgfGTlHfm6fCNfd7fizf2zgLRgi6UJHfdsfmDfocft0fuIgXmgnH","r-twin|h-flowers":"AXFgHOgBigU4gCcgDmA6Gf3VgEzgB2gYIgKYgCnBeGf3WfirgM8gSzf-QgDnCCGf3Wfi7gScgPHgEBgDnCmGf60gHDgVAgP5gJLgCZDKGf_WfwSgRUgJSf5qf9iDuGf8Rf3wgVegF2fynf9iESGgFWfdQgMxfz5f3dfv1E2GgH0gt2f-VfsIfUffkEFaGgZhgcegi5fzYfgTfkEF_EgPjgrTgB3fTYGjEfytfevfQMfRWHHEfVtfR5fLmfTOHrEfVhfSUfNZfUKIPEfUvfQrfMzfUAIzEfTrfOffPafT0JXEfSafLmfP0fTmJ7EfR1fJAfQPfTcKfEfRqfLcfQSfTcLDEfSofLJfP6fTnLnEfTjfOefP1fT0MLEfU2fQkfNIfUAMvEfVlfTFfOWfUINTEfrXfQbfMLfTQN3EgIbgJnfaefRZObEglagk3f1WfTUO-GgWEgb2gs7f9afgWfkbPiGgGLglaf9ofrxfVnfkbQGGgEHfclgMFfzif3KfvyQqGf8Qf3vgRygENfzQf80ROGf_OfwqgSMgJHf4mf80RyGf6KgGegUogQogIYgBBSWGf1-fh3gQugPygCTgC2S6Gf1-fg1gLogSbf-XgC2TeGf2FgEVgCRgXjgKtgDAUDFgHRgDJgYTgCpgDm","r-bob|x-ribbon":"AiCfWnffjBGCfRofhiBqCfdmflsCOCfqDfnDCyCftofl8DWCftMfqGD6CfveftTEYIgD3gEWgExgE-gC0f_nf1PfuLEvVflGfltfrefzjf8DgAcgEKgHYgJ7gLjgNLgNvgOHgL1gD3gApgC_gEHf77f4IfuOFTVflGfh2fgwf2ef70f-_gEigIsgJ-gMagOggQIgOagR-gUEgQ8gQAgIggA6f8KfyYF3VflGfltfrefzjf8DgAcgEKgHYgJ7gLjgNLgNvgOHgOfgOagN-gLOgHOf-FfvufyOGtDfyEfypfyYHSCfxhfw7H2Cfs7ft1IaCfqefrMI-Cfsufs7JiCfvNfxFKGCftyfvTKqCfqQfrJLOCfmEfqYLyCfwjfujMWCftZfv7M6CfvIfuRNeCfwZfx3OBDfyjfztf2COTVfjzflAfrdf0Qf9EgBCgEcgHOgJpgLMgM6gNcgN1gOUgOygOZgMCgH1f-vfwtf4lO3Vfjzffsff1f5cf95f_lgEYgJJgJxgMagOjgSXgQngRXgS8gSHgQegJ5gDRf9Jf0oPbVfjzflAfrdf0Qf9EgBCgEcgHOgJpgLMgM6gJUf9agKQgLogCKgFVgB8f7Zf09fw9QKKgC-gBdgO9gQzgMafz9f_pf-of0FfszQuKgDif8EgN3gQZgLRfyif8GfzJfr_fpxRSKgCpgCyfqpgHsgNKgFzfodf2RfojflnR3Jf4agFsgMQgQxgMKfyUf3pfsOfhuScIgI6gJSgPRgJdf0Of3tft2fkUTAIgBhgCigGBgCifmhf23ftRfoeTkIf9WftDf0Wfyvf7IfzXfg1flEUIFf1yf3if4Gf5Qf5NUOCffHfiU","r-long|h-flowers":"AXFf_tf5xgK1f2nf7MA6GftPf9Ff8VgNngCUf6UBeGfupfW3gFpgJcfz2f62CCGfupfcVgGLgI7f4Wf62CmGf2If_wgJ1gFfgA0f5eDKGf9Rf1VgGsgBkfwSf1ZDuGf8Pf5ugJef6YfoRf1ZESGf8afxxgHBfr2f1XfwAE2Gf7bf4GgF4fz9fjwfsVFaGf8tf__gG1fhkfyyfsVF_EgAmgEFf1Wf21GjEgAEgBkf3Rf7lHHEf_vgArf8Yf9QHrEf_hf__f8nf-EIPEf_CgAIf9hf-XIzEf-Nf9Of_Pf-RJXEf8_f68f-qf-RJ7Ef8ef51f_0f-UKfEf8cf7RgAcf-OLDEf9Tf6zf9if-WLnEf-Kf9Ff_5f-RMLEf_Df_zf9Tf-cMvEf_jgAHf8of-HNTEf_4gA2f8df9SN3EgARgB0f3Cf7fObEgA3gEff1Pf29O-Gf8tgACgGxfhFfy1fsRPiGf6xf4kgFnfz6fkGfsRQGGf79fwSgJTfs9f1EfvlQqGf7vf6EgH5f5efpxf0NROGf9Lf09gG7gCGftAf0NRyGfzUf-mgI1gE1f_7f4NSWGfphfdvgF5gFyf5ef6TS6GfphfSigDWgJff2xf6TTeGfoaf65f7OgLVgCXf6qUDFf_df3AgNnf6lf7M","r-short|h-bunny":"AfEgLMfqzfoifKaBCFgdLgWOgDofOtfO3BmFgdcgkdgIYfWDfOpCKFgXTggQfwPfVVfC_CuFgUXgKwfz8e-9e-uDSFgLBfsXfQEfM7fI3D3De-se5ae_UEvVf45f3zf7zgAkgGbgIZgJcgJ2gJpgJDgIYgFogBgf7Jf0IftWfn8ftTfyyf3If91FTVf45f37fzCgFhgItgI9gLMgLogKegJ9gJ3gIff_df6ufx-fohfk8fgsf9cf44f6wF3Vf45f3zf7zgAkgGbgIZgJcgJ2gJpgJDgIYgFogBgf7Jf0IfphfTxfdYf3bgDmf_7GqGfeDfgFfoVf3mf_FgAtHRDf85f1AgAvH1Df54f-sgBNIaCf_Yf_MI-Cf_jf8NJiCf_9gBaKGCf-ugAuKqCf-ff8bLOCf9sgBoLyCgAof_6MWCgBfgFHM5Df9LgBigHNNdDf_Nf6FgG7N-GfkKfp6fvnf7igCYgDIOTVf1_f2Uf7CgAqgGigIQgJTgJlgJkgI8gIcgFhgBdf7Af0Pfrsfc3ftWf7DgC6gAGO3Vf1_f0xfzcgG4gIzgJJgLOgLigJ1gKLgJUgJjf_hf5qfxhfpZfmjfyxf6Mf74f65PbVf1_f2Uf7CgAqgGigIQgJTgJlgJkgI8gIcgFhgBdf7Af0PfuNftyfyHf2of4hf96QzDfBUe7vfDKRWFgKSfu_fTbfSXfKQR6FgUUgIQf3UfDBfAQSeFgW7ghhfy5fK7fHKTCFgdQgiAgM5fTNfPzTmFgcKgVLgCLfQefO3ULEgJxfpRfpRfIw","r-short|x-ribbon":"AiCgDWgAqBGCgHjgEzBqCf-2gB2COCgCXgALCyCgCXf_xDWCgCbgD6D6CgB9gDREaGfgHfiWftKf5GgDUgGwEvVfyffylfwQf0af4zf__gA7gCEgCkgDOgDOgBsf_Gf6Lf04frbfLffXegGZgDIgFrFTVfyffwIf0ZffbgDMgA1gCNgC3gEwgCGgFVgFOf8Nf7AfxHftmfsbfosgMwgKSgBiF3VfyffylfwQf0af4zf__gA7gCEgCkgDOgDOgBsf_Gf6Lf04fvMfrMfy9f-SgBfgDkGtDgELgCmgC8HSCgC-gAzH2CgC9gE8IaCgF2gHkI-CgE0gF-JiCgGngCzKGCf-qf-qKqCf6jf63LOCfuLf6RLyCfxff-aMWCf12gCFM6CgCOgC2NeCgD9gG-OBDgEsgF7gKsOUUfyTfvBf0Gf4ugADgBXgCggC5gDtgDogCQf-7f5ZfzlfuafvPf1_gAkf9XgKmO4UfyTfwwfj2gGlf_xgCwgCagFfgB9gGTgIlgGOgDFf10fxJfvAf4jgLPgHsgNrPcUfyTfvBf0Gf4ugADgBXgCggC5gDtgDof7UfUNfuMfgQfaIfO6fhmgCLgBsgJiQKKfw8fxdgKogONgDUfzNf1Df6rf_8gFvQuKf2wgBNgBugNFgKrf7hf-qf4TfzkgGDRTJgGAgEdf0xgFcgEifrqf5xfrZgB7R4IgAYf70gKVgJVfynf6VfuZgBFScIf92f5cgImgF4f2lf5Hf6yf89TAIf8Efq9f9vf-6fmwfxcgAxgAmTkIf42f6nfsPfscfPHfscf_Kf_KUJHf1cf0Wfu_frofkQgDWf83","r-swept|x-ribbon":"AiCfP2fTRBGCfXxfbIBqCfVXfhwCOCfjvfpBCyCfrnfrjDVDfxmf08fzyD5Df1OftgfxfELVfwUfxxfywf05f3Bf6If_FgDXgGigHYgIrgJGgJxgKcgLXgLUgJzgGpf9Af5Ef0sEvVfpPfxLf2nf0efyAf2Bf7IgFigGQgHUgIKgKkgJKgLmgOxgNhgMOgJwgBdf9Qf3OFTVfpPfZZfYKf66f9wgBJgF7gIEgIEgKygKFgNJgL3gNSgMdgJ8gHigCff9afvrfu_F3VfiJfiLfpwfypf8gf_9gDSgF3gH3gIZgJlgKDgLIgLDgK2gJegHDgDPf92f3afz0OUEfh6fs7fyaf8SOZPgC1gFbgHagITgJegKCgLGgLcgK1gJPgGagC3f8df1OfwwO4UfpbfY8f4-f-9gArgFYgHsgJEgKpgJagM_gMBgMegN0gILgG8gC-f84ftufxBPcUfpbf2cf0Tfv6f2-f8zgCfgGPgH3gIdgJzgKKgLCgOzgMagM-gGsgBof8Yf5PQATfw8fy2fzef2tf6Jf-4gCqgFfgHbgIdgFqf9cgKogNJgIRfqvf_Uf_Kf5aQuKgAcf6zgKNgMtgJTfwRf10fxZfyNf7rRSKgAJgB2fz1gD7gCtgBkfbUfsvfwCfzcR3Jf7zf6Vf4VgDzgBifnsfsQfm1fr8ScIfztfp7f05fzOfkafiPfb2fl0TAIfs4fvifozfNNe0hfbcfUefeXTkIfspfjYfmRe9yfP4fLlfMzfWJUIFfoLfn6fewfaCfMbUOCfQQfPH","r-twin|h-bunny":"AdHgpIgJ4fFZfrPfVkfSMfgqBBHgtHgsrgMsen9fTifgDfguBlHgsKg5CgOxeh4fXUf8JfhcCJHgYLgsef0feNZfP-gZWfZPCtHgLtfL3fOLeBpfYwgklfY2DRHftMfuTfDqfE7fobgncfheD1Hf5-f_hgAsf90fyLgfJfpXELVfvhfvkgFngirhAIhHjhGyhChgrkgV1gC0gBMgB3gCGgC6f4Jf-kf8egA3gOOfx1EvVfvhfq0fhDhHghVdhTXhTShMrhdYf_SgBjgCXf5JgJ0gDVgCPgCrgD5fqFgAtf7lFTUfvhfvkgFngirhAIhHjhGyhChgrkgV1gC0gBMgB3gCGgC6gBlgBKf-zf9of5rO4TfuzgSCgjlhA1hHGhGhhCngrrgVhgCxgAwgA2gAhgBrgBOgBKf-7f9rf58PcUfuzfhIhFShUShRUhTuhObhWLf81gBBgIqf6ogFmgB5gAjgD9f_hfwTgBUf4bQAUfuzgSCgjlhA1hHGhGhhCngrrgVhgCxgAwgA2gAhgADf7Lf_BgB0gGCgG1furQxHf7Lf9cf-pf9vfuNgRBfnmRVHftrfuoe4he-6fiAgYGffQR5HgMIfNEfRid7ofSAgSXfVgSdHgYcgtZfzheMvfLBgGQfWsTBHgsQg5LgM2egRfZffvHfa5TlHgtFgtZgNmeoMfYcfR6fd7UJHgpHgJ6fERfrefYrffLfk6","r-wave|h-bunny":"AdHgZtflpfRsfSgfRQfsBfnCBBHgecgcxf0IfE8fUBfvTfsQBlHgeRg2Qf71fN7fTYfvtfspCJHgVYgpxf8-fKtfFbfvnfvxCtHgOefypf3re77e84fujfqjDRHf_BgBZfjafVmfWlfvDfuBD4Ef11fwXfosfw5ELVf6ef6bf8jf_BgAwgA2gB-gDlgE4gFtgHTgI3gKZgMDgNagNNgKsgBtfrqf1pfv1EvVf8Rf1Df1Ef_pgB8f9ef-ngG0gDMgDWgHfgJWgI9gMbgO5gQigOmgHwgABf3AfxGFTVf8RgAmgA4gHjgGRgAmgBbgIrgHqgHigIQgL9gKUgO7gQ6gM3gI1gE5f-Zf2qfr4F3Vf-Ef-jgAagCLgC3gCRgDIgEygGMgGigH7gJDgLIgMdgNTgL7gI-gEYf_EfzzfpKGuCftMfqzHSCfsDflmH2CfrPfizIaCfp7fnNI-Cft3fsbJiCftWfq5KGCfpzflsKqCfnyfhFLOCfitfitMWCfdUfdUM6CfdUfgFNeCflcflTOCCft1foJOUUf_OgBvgCRgC6gCWgDFgEugF8gGQgHugJGgLYgMkgNegMpgJ2gFBf--fz1fplO4Uf9tf-8gIcgFwgA1gCWgHJgH8gG8gHlgNIgKJgQCgQ_gOjgM3gFAf-Gf1ffrVPcUf9tf32gCvgBgf-9f-wgEwgEAgDJgFwgLYgIogKygOggPJgNjgHCgAlf2-fu1QAUf8Mf-mf_ZgAygA5gCKgDlgEfgFKgG-gJAgKigLagMZgMIgJ_gA6fpUf0jf0CQ0Ef0ZfvdfmRfxYRVHgBegA1fjXfUTfVofwKfvhR5HgQAf0Tfvle0ve9tfwKftRSdHgVvgrbf88fK4fFvftgftMTBHgeNgtyf8IfOFfTpfqkfn-TlHgeDggdf-_fLRfT-fohfkgUJHga5fpVfTtfTOfSJfopfkU","r-bun|h-bunny":"AeFgbGgbqf6yfp0gCpBCFgoEgU7gWkfrYgEuBmFgrYg99gp2fyMgJcCKFgsyg4mgsaf0wgORCuFgoqgdYgK-fxJgUTDSFgfVf-cfpyf-pgiKD3DfWpfzUgStEvVgC5gC7f_8gCYgEzgKrgLhgMigM1gMngLagJ4gH7gFJgCMf_DgOJgnHhCqhNQhTCFTVgC5gDugFBf1RgNTgLugM3gN7gO8gNugN3gJ4gIKgGqgAsf-bgBRg46hSWhWOhX2F3VgC5gC7f_8gCYgEzgKrgLhgMigM1gMngLagJ4gH7gFJgCMf_DgWQgyqhUbhdQhcsGrFgukg8yhJaheNhaQHRDhRQhPshfEH1DhNBhU6hj7IaChYyhmWI-ChWphhgJiChSphdjKGChOBhYyKqChMyhbpLOChPMhgdLyChVthlTMWChXxhqAM5DhU7hYNhmANdDhVthYuhqBN_Fgrjg7-hKuhgxhm9OUUgCjf-NgCLgEwgK2gLvgMrgM5gMzgLxgKEgH2gEvgBzf-3gVQgt3hXKhaLhiGO4UgCjgD9f3GgLfgLkgNhgOAgOfgN1gNzgKcgH-gGSgAbf-Yf9Cg0rhSChQIhdSPcUgCjf-NgCLgEwgK2gLvgMrgM5gMzgLxgKEgH2gEvgBzf-3gN0gl3g_hhJqhYjQzDfa4fwKgPkRWFgjlf_wfqzf7CgekR6FgrbgepgMAfu9gYiSeFguVg5hgtbf1ygTsTCFgr9g79gorfxCgO_TmFgoTgaegXofqNgKhUKFgcdgcGf6Ufn2gGY","r-spiky|h-bunny":"AfFgQYgCvgCvgMwgkbBDEgbtgQYf1Gf8oBnEgeognCgELf_QCLEggAgkdgEgf5hCvEfoygUgfj6f0NDTEfK8fiOfTQfj6D3FeOVexRfSafctgDYEeCfyCgKgEvVgKAgI8gHagFWgDggOIgYfgiagdpgV7gEBfz6fvof4FgD8gJHgN4gVegahgHsgRvFTVgKAgKAgH4gEYgDzgCVgkQgi3ggHgV8gLtfqYflpf-2gDwgJPgOWgSEgf_gdggZCF3VgKAgI8gHagFWgDggOIgYfgiagdpgV7gEBfz6fvof4FgD8gJHgN4gCRf7zgHsgYAGsEfP_fX4fyCgfTHRDfB5gEXgZnH2CgaMgg6IaCghJgfuI-CghAgi0JiCgiHggeKGCgefgjCKqCgcSgbvLOCgGdgZ3LyCf5bgYwMWCgI9ggDM6CgexgdkNdDfGfgI9getOAEfSHfYofzTgbZOUUgIFgGVgFigDQgNygYQgiUgdlgVDgD3fzrfwQf4UgEagJrgOJgEZf8jgHIgfJO4UgIFgIFgElgD7gBPgkMgjXgfbgV8gJzfr3flXf_hgEFgJpgPTgReggvgc8gaFPcUgIFgGVgFigDQgNygYQgiUgdlgVDgD3fzrfwQf4UgEagJrgOJgV1gaZgHIgSyQSCf8YgSNQzFeOmexpfSSgSNgSNRXEfIWfc8fR-f8YR7EfnNgPNflPfzOSfEgeSgk7gBNf48TDEgeEgmugEYf-PTnFgaogOjf1HgJ-gkbULFgOjgB1gB1gMxgkb","r-spiky|h-cat":"AeDf3mf3mf3mAiCgrRg38BCDf-hfsvf-hBlEf62f_fgVlgBCCJEf7hfwBgXGgGTCtEf8gf2pgbrgGlDREf-ff-XgYYf_6DWCgW3gW3D1Ef_pgICfNHf8LD6CgW3gW3EZHgA1f5ef5efyGffxf-ugROEvVgESgDMgCAgAWf_AgKegVzggkgcQgVKgElf1Wfybf7kgIsgOAgTMgbQgKCgYNgZuFTVgESgGzgCSf-9f_Bf7xhBnglQgjLgVdgNbfmafbcgHRgJVgQ0gTzgdEg0mgx4giTF3VgESgDMgCAgAWf_AgKegVzggkgcQgVKgElf1Wfybf7kgIsgOAf9jfh7gKCgYNgp4GrFe8ofF5ffxf-ugydHRDe6pfwkgp4H2CgHPguMIaCgg6gq2I-CgiZgzOJiCglkg7vKGCgnehEUKqCgkLg7vLOCgKggzOLyCgBSgq2MWCgMzgxZM6Cgmegr6NdDe-ngMzgwkOAEfWbffBf3ogn_OTVgD8gDFgB_gAhf_OgKtgV4ggygclgUqgD9f0vfyyf7zgIjgOAgTVgKWgJRgRHgt8O3VgD8gFMgDJf_Wf_DfyWhFDgn1ghygXzgMnfhLfgDgBcgI1gScgUMgZZgz2gqxglXPbVgD8gDFgB_gAhf_OgKtgV4ggygclgUqgD9f0vfyyf7zgIjgOAgTVgbpghJgRngc2QNEgAbf2Nf2NfsAQSCf93gUdQxEf_bgHUfXFf4-Q2CgXigTeRVHf-Zf-OgYAfoGeyhgTegX6R5Hf8bf4MgcGe5pfBJgPVge2SdHf7afxrgWye30fGjgpAgnDTBHf6gfZmgXify9fKJgpAgvbTlEf2nf9zftOf9zTqCgqIg38UKDf25f25f25UOCgrRhAh","r-swept|h-bunny":"AeGgdmgSjgSjgHgfZxfk6BCGglsgU7f4wfuqfK5fpzBmGgnBg-LgEtfWAfCXfuxCKGgkpgzPf5yfGlfFZfzyCuGggFgHUft0fadfUQfuxDSGgWegE4gE4fzTfjPfpzD6CfmYfnzEcEf3Xf2hfy-fsiEvVfpefoWfvqf4BgCIgFmgIdgKVgLsgMTgMxgMegMhgMsgMigLcgJFgCVfzufrLfxgFTVfpefpzfT1gNTf_QgEdgLXgLqgOWgOEgNygXWgF_gQlgPbgLSgQMf_FgMkf6Kf2gF3VfpefoWfvqf4BgCIgFmgIdgKVgLsgMTgMxgMegMhgMsgMigLcgGYfuagHTf4yf7EGrFf-Rf_Pf6DfpzgAEHRDfz8fwcf7EH1DfwcfzMf2GIaCfvgfx0I-CfwCf2SJiCfvyf7TKGCfr5f5kKqCfrKf4qLOCfthf9jLyCfy1gChMWCfz8gHhM5DfvTf0NgChNdDfzGfpJf9jN_Ff--f-rf5bfwZf6wOUUfnWfyZf38gB5gFlgIOgKSgLqgMWgM7gMwgMzgM6gM2gLwgGwfs2f5rf_Yf1wO4UfnWfb4gG9gBkgFXgK7gNUgLjgPlgNXgU0gM0gOrgSCgI6gR0gNfgGGf6vf3HPcUfnWfyZf38gB5gFlgIOgKSgLqgMWgM7gMwgMzgM6gM2gLwgJWgCzftQfrwfyGQQEf5Ef3mf0TftIQ2CfuEfsURWGgFGf22f22folfsgfsHR6GgK7f1lfbzfPvfdhfn6SeFgHbghOfnxe3FfOqTCGgAYf8ofbze9sfAAfd7TmGf4Mf6BfNwfWAfCXfbgUKGfv7frUfwCfuqfOyfgI"}},m:{c:[-5e-6,.148791,-292e-6],t:{"r-bob|h-bunny":"AdHgNzfnxfE-eeWei0feIfY5BBHgRUgU2ffne7Veu9ffifb4BlHgQEgdVfmPe9zfJufhmfhRCJHgRNgQXfwZfAkfDHfd1fihCtHgNkf4qfIvelmfJofiIfjGDSGfSle_qfJQfTdflifjSD2Gf3cfvAfucffkfn-fhrELVfoPfo0fp7fxHf44gAggDMgE8gFwgFkgFEgEagDvgDRgCTf-QfzAfrGfvgfo2fnFEvVfkDfoNfohfp2gApgDCgHEgHQgHFgF-gGAgFHgD0gDogDQgAif_Yf2wftLfgzfpaFTVfkDfYifYFfuNfzufyzf3OgCYgFwgFkgFEgEagDvgDRgCTgAhf9Uf38fwYfr5fnVF3Iff3fgbfmAftzf1gf4rf5Zf6rOUHfg_fphfuTf2Ef48f5df6oO4UflEfZdfrgfzHfzmf2zgCKgFZgFVgFNgERgDmgC_gB6f_-f8Qf3Xfvyfrzfm6PcUflEfoMf70f_-gC7gG4gHLgFogGNgGBgF4gDUgEIgDef_Hf_mf3Kfs3fbpflQQAUfpJfxdf10f9igAugDEgErgFZgFVgFNgERgDmgC_gB6f96f0uf17fptfpAff3QyGf3ufv2fu_feGfoTfdPRWGfSqfAgfJ4fUBfigfbqR5HgNqf4vfHnek3fJlfjRffcSdHgRogPwfvce-yfG5faPfgKTBHgQUgc-fxWfEIfNhfbHfhGTlHgRogR-fske9Fe3KfhUfgTUJHgNrfnSfFZehwei4fgyfeS","r-bob|h-cat":"AdDf8df8df8dAiCfNSfS5BAFfxtf6lgEOfngfaRBGCfbPfX0BkFf4wfeEf18e0VfYuBqCfcJfdqCIFf7sgQffwcetgfPbCOCfgafjTCsFgBHgZ0f4nfB9fJ_CyCff0fozDQFgA8gYhgZYfsEe80DWCfjhflzD0EgAofvqgBbgDBD5Dfo-flLfjmEQQf7Rf8tf9Rf_QgAHgBogBsgB7gA3gATf_Ff8Hf3VfwMfeXfghEvVfn1fobfuAf1mf9Sf_Lffxfm8fljfxYflSgC7f19f8qf6cf9If2sf1Ofr0frEfdAFTVfn1fnefU4gCbf-DgAZgXegZGgY4gYPgSFgT5gIhgJCgKnf_8gINf8-fuQfpbfiDF3Vfn1fobfuAf1mf9SgAegCygEngFjgFhgFogFJgEmgD3gCsgBNf9cf4SfuLfX_fc9GtDfhLff8fZdHSCfeffU1H2CffAfQnIaCfgHfWcI-CfgTfS7JiCffKfYwKGCfbXfZjKqCfbXfTuLOCfZifWKLyCfc-fb_MWCfdSfhOM6Cfe_fnDNeCfgvfiHOBDfg6fiLfdJOUUfo1fxZf2Cf91gAtgCsgEUgFYgFfgFrgFEgETgDqgCngAuf9if45fu0fXYff2O4Ufo1fbMf8-f-8gA7gUwgcLgTGgXlgT5gNxgJEgIdgQEgDPgDcf9cf0hfo1flnPcUfo1fxZf2Cf91f_afedfo3fnhfw7fsef-gf43f4lf4Jf4Xf7UfydftffkTfrCQEQf7if8vf9ff_If__gBcgBugB3gAtgAPf-wf75f21fvrfmPflNQwEgA1f30gB5gEAQ1Dfo6fjqffbRUFgBcgVWfxefmSe5fRaCfcWfaFR4FgBygWkfzWezHfHDR-Cfa6fUQScFf8ygWBf4ee1ifNbSiCfWBfPLTAFf51fVnf5Pe52fXYTGCfLWfJ3TkFfzBf6OgGyftBfaLTqCe_CfHrUJDf7jf7jf7jUOCfDFfNg","r-bob|x-holly":"CoEf7Qf7Sf7Sf7VDLGf7Hf73f7Qf7Vf7Af4nDvGf7Hf7Hf9Nf9Gf4nf4nETGf7Hf6Sf6xf6Df5gf4nE4Ef4af2Df2Pf4JFcEf2Df2Jf2Jf2P","r-bob|x-ribbon":"AiCfg8frhBGCftdfvTBqCf1EfzeCOCf2hf1MCyCfxdf3DDWCfyYfztD5Df1AfyOfyqEVLgCqgDTgGegJvgMlgL-gKbgGrf_eft1fymEvVfjafj7fpxfx6f6of_IgC8gGNgI8gKIgJofmofkegEGgDpgIEgD2gIVgBlf6VfubFTVfjafdhfVAf6Jf56f6-gFSgLrgHJgMlgORgtVglQgaegbogWMgYjgMTf7qgCnfw9F3Vfjafj7fpxfx6f6of_IgC8gGNgI8gKIgL9gM_gOogPegPsgPEgMmgIEgDHf48ftwGuCfz7fplHSCfpIflxH2CfkKfhlIaCfXqffMI-CfaQfd7JiCfkhfgSKGCfqpfkdKqCfqpfoKLOCfmhfqVMWCflqfyfM6CffSf2qNeCfl-f57OCCfsqf-GOTVfjKfj5fqEfyqf7af_ngDCgGCgIqgJ_gMSgNRgO3gPdgQFgPXgNUgJWgEGf5Lf_bO3VfjKfe-fUef8uf9-f7hgFDgIQgJBgNfgM3grQgc6gXGgZegYpgaxgQVgGif7gf_mPbVfjKfj5fqEfyqf7af_ngDCgGCgIqgJ_gKKfkkf2ogIjgIsgCAgHNgDff_Uf6Mf9RQJLgDxgENgCxgOogS9gQefk2gBjf_Tftrf5gQuKgD9fybgROgS7gPyfg2f6jf1Cfynf1URSKgChgGGfiogH8gKHgFhfdvf3tft7fxQR3JgB2gIZgIYgWGgPffpKf4zfmFftoScIgJwgIlgQagOpftEf3tfl3fpdTAIgCef_2gI_gElfawf3AfjfflnTkIf9-fhbf1lfqUf3kfzAfZPfjRUIFf1mf4cf4_f6rf6DUOCfZffnW","r-bun|h-bunny":"AeGgyLgbwgZRgZ1hQXheBBBHg8kg5dgu4f4hgYdhO-hZfBlHg7GhTJgz7f_egZrhOPhWDCJHgu3hBegwSf8vgcIhSqhYhCtHgoAgPLgXUfvLggfhUBhdRDRHgWXgbSgIFgN8gsZhRKhg4D5Dg8ahWMhjIERPf9Qf9of-qgA-gD7gGXgHXgH9gITgI5gICgfzhDvhkBhmcEvVf3Hf2efy8fvGfyNf5ygBKfc3fivfoZfq8f0igGUf6ngGVgJWf-mgpShaihhxhhsFTVf3Hfzdf_YfeZfnRgJHgD3gdYgdigd4gjOgWSgUPgUCgOigM9f-TgrkhiGhp5hkfF3Vf3Hf2efy8fvGfyNf5ygCdgE3gGlgIAgJVgKWgKngKfgKJgJ5gQZgprhL5hf5hneGtDhdohdAhphHSChZNhs9H2ChLThvuIaChB1hr0I-ChLShwkJiChZghwvKGChYthr_KqChVehnSLOChSphmLLyChEbhhbMWChAWhg5M6ChKfhlpNeChYthqNOBDhS9ha4hu0OUUf1ffw0fvIfyYf52gCZgEsgGZgIJgJQgKWgKjgKkgKOgJngVWguQhL-hathy7O4Uf1ff7ufhjfkMgDpgBkgeugefgYugjXgNkgTDgV5gJ7gUOf87gquhhQho7h3JPcUf1ffw0fvIfyYf52gBGfZ0flnfp_ftWgCOf_af8RgEcgSggBpgnEhPlhg6h6kQFPf9Of92f-ugA1gD4gGPgHbgHmgIHgIugIEgeshCChVxh80Q1Dg5Phb4h6RRVHgWVgcagMzgPMgtbhU_h26R5HgnugRdge_fwNgjbhWwhyKSdHguphDxgqnf5mghbhPMhthTBHg6zhYagz4gBFggShVXho3TlHg8gg5ngtDf29gb2hIihkWUKGgy0gdwgXugXohOKhgu","r-bun|h-cat":"AdEgRZgR5gR5gSZBBEgTbgQ7gTJgURBlEgVcgaPgb5gViCJEgX4giBggRgXrCsFgUigXngh6giNgVADQFgS2gYkggggNKgTdD0FgS2gTGgOtgRXgOGEYEgRLgPtgPtgOPEvVgA6gAaf9Pf_PgB-gIWgJogK4gLGgK6gJ_gIRgF-gCJf-mf6vgIxghXg8UhHWhNaFTVgA6gBegAufvwgJvgJKgK4gMKgNqgLzgLNgJkgFWgDRf8Wf50f8agqyhMPhPFhRcF3VgA6gAaf9Pf_PgB-gIWgJogK4gLGgK6gJ_gIRgF-gCJf-mf6vgQYgoohPThWthUhGrFgnNg2VhC-hVHhU-HRDhKchJBhYdH1DhFyhNshbqIaChQhhd8I-ChPhhavJiChLyhW0KGChIGhSyKqChIPhUGLOChK2hXnLyChOFhbqMWChPqhcDM5DhNqhQChgGNdDhOshR0hdKN_FgoDg3_hFJhaDhcxOTVf_Gf_Lf8Uf_IgCHgIogJygK8gLLgLEgKJgIKgFjgBsf-bf7AgROgpjhPjhU_haCO3Vf_Gf_agA-fyUgIlgJCgLQgL6gNLgMEgLygJpgEpgChf8df5lf9BgrZhJ3hLLhWUPbVf_Gf_Lf8Uf_IgCHgIogJygK8gLLgLEgKJgIKgFjgBsf-bf7AgJoghJg7HhEghSRQMEgX1gYDgYDgYSQwFgZDgZRgbtgWygQORUFgZDgfBgjegPigU_R4FgaSgakgifgf5gV8SdEgYggfAgdqgX0TBEgVogYcgZbgVfTlEgUAgS_gUDgUTUJEgSogStgStgSz","r-bun|x-ribbon":"AiCg1Ig48BGCg6hg6hDWCg6Ag_GD6Cg7jhDBEdDhExhBHhG3EvVgBngAsf9Pf91gAmgHJgJngKmgKzgK4gKYgJJgHOgEtgCYf_5gKvgjAhAnhGUhKUFTVgBngBnf_xf2UgDZgIFgJ8gK0gLCgKigLFgJhgG0gFXgB7f_2f97gibhIrhSFhMQF3VgBngAsf9Pf91gAmgHJgJngKmgKzgK4gKYgJJgHOgEtgCYf_5gK0gqmhBZhRphQFGsEhBXhJhhPihUAHSChUQhTAH2ChVohVeIaChVThW5I-ChVQhS9JiChUVhVUKGChPshTJKqChM3hPNLOChLJhNiLyChOqhReMWChQWhOnM6ChP_hSiNeChR_hRIOAEg-khGVhM3hRHOUUgAEf7Xf-NgA4gHWgJygKsgK0gK0gKQgJJgHKgEqgCMf_wgLcgp6g-khOFhRZO4UgAEgAEf2qgD5gIGgKEgLMgK0gKbgLNgJJgHGgFRgBof_rf98gkuhGGhKuhNtPcUgAEf7Xf-NgA4gHWgJygKsgK0gK0gKQgHLf_MgK8gA7f_Nf0QgVxg5VhDjhKwQKKgEMgJNgYdgbzgXugPkgIZgn_hCuhHjQuKgJNgTNgX9gbngZWgS2f-PgUehBLhDnRTJgX9gVhgPzgYlgYbgLxgRkg9pg_vR4GgRFgSrga5gZigOagOCScGgPTgQxgY1gZIgOMgMkTAIgNngKegT0gTWgJIgJJg2Mg3PTkIgKegM7gIegIRf7jgGkgzbg3PUJHgIegIYgEGgB6gFggx6g1A","r-long|h-cat":"AcEgCZgC6gC6gDbAiCfs6fndBAEgEngBlgDLgGBBGCftafoGBkEgGKgJ0gNJgHqBqCftqfq2CHFgDEgHTgOXgP7gJ1COCfwCfuqCrFgDogCYgPggDHf5HCyCfyKfxlDPFgDogD8gLSfZZfwNDVDf0Sf0wfy3DzJgELgF1gDof2mffgf6xf4sfxAfzgEMUf7Bf76f9Bf9af9ff99f_jf_7f_ggAJgCHgFPgGygIXgIcgFpgC0f4Af6pfxLEwUf8Sf3yf6zf-Zf5Xf6Sf_9f_5f8vf-NgCfgDXgIzgLSgMjgKjgHwgBCf7tfw4FUUf8Sf9cgFdgD2f--f_UgGLgGXgAqgBdgEegENgICgJXgIXgIdgEGf8xf3vfwsF4Uf9kgAGgAxgBOgAQgA8gCwgC6gB_gB6gDZgFigHFgIKgIOgGzgDmf-Rf0Ifs9GuCftIfonHSCfrAfmOH2Cfp-fqlIaCfc9fmPI-Cfc5fjLJiCfh_fhkKGCfotfl6KqCfrSfmYLOCfqafiCLyCfjtfkBM6CfsyfsrNeCfswfo4OCCftCfoJOUUf9af_4gAqgBJgANgA2gC2gDKgCGgB0gDIgFlgHPgIkgIjgHIgD1f_mf0hfp2O4Uf73f94gD6gDlf_Of_jgFcgHKgAegA2gEpgEBgJJgJWgIZgJGgEjf9kf6hfuMPcUf73f3af-Qf-Ef6Sf5xf_XgCdf8Tf9_gDKgCwgItgLugKjgKIgHlgAKf7OfwrQAUf6Uf82f9rf-Yf9mf99f_8gAVgAIgAhgCUgFMgHEgIegIggGagCTf42f7KfzsQvJgGDgHngBNf5ifgRf6-f4ffu3f15RTFgE_gFUgGLfeufzeRZDfzbfysfynR3FgE_gCegRWgMwf7YR-CfwUfvFSbFgD7gIGgOggQogKYSiCfubfqvTAEgGmgI-gMNgIdTGCfsifqcTkEgFBgB8gF7gHGTqCfrzfmGUIEgC-gELgELgFZUOCfrWfjH","r-short|h-bunny":"AeGgT5gNcfgAfGEfYzf1wBCGgZogY4f3Ce8gfJSf3kBmGgbDgiCfmfe7jfDef3eCKGgXBgnbfs4e27fPSf8qCuGgS3gDjfiveuyfdLgBpDSGgH0f_UfNffACfstf_mD6Cf2cgAqEYIfpofoOfnKflyfvEfzWf8FgCjEvVf08f0Wf3ef7cgAEgCTgD2gFhgF4gGRgF6gEYgBTf3nfpoff9fgrfUgf1zf-2gDKFTVf08fz0fwsf-YgBngB1gFvgGmgH_gFogHlgGPgADf8-f2kftxfqjfYuf1fgHbf9-F3Vf08f0Wf3ef7cgAEgCTgD2gFhgF4gGRgF6gEYgBTf8Rf2WfwhfsAf0OfyygIMgCAGsEf3kf-Xf52gHMHRDf9ygDbgETH2CgFBgI3IaCf3rgIiI-Cf31gGEJiCf3GgK1KGCgCMgFpKqCf_WgAgLOCf_6gAyLyCgBrgF-MWCgCigCjM6CgC6gFENeCgFAgKDOAEf5wf_jgEYgKBOUUfz0f5Ef7ggAhgCigEQgFZgF3gGKgGCgEYgBjf8Qf2afwafwkf3Qfz2gHRgPNO4Ufz0fxQf_JgBHgDTgFQgGTgHTgGWgHSgHMgAQf-cf1tftsfpof24gDBgDDgN3PcUfz0f5Ef7ggAhgCigEQgFZgF3gGKgGCgEYgBjf3xfjdffqfl-fsQf9kf8XgIrQMIfqTfo6fpGfrHfyPf3ugAmgDkQ2CfyzgElRWGgHkf_3fNlfEbfoZf_ZR6GgRsgBjfiZesffZigD3SeGgWegmRfsbe2JfKBgBCTCGgaUglkfqCe-YfGRf_6TmGgZlgU2f7Ge_jfI7f_RUKGgTHgOofgifHQfYcf6F","r-short|x-cherry":"CnEf26f2_f2_f3EDLGf5Lf26f3EfzEfsUfrODvGf5Pf7cf8lftafrOfq3ETGf6af5Xf5Pfrefqffq3E3Gf5Xf5Tf0sfvvfq_fqf","r-short|x-ribbon":"AiCgFZf_xBGCgHJgD5COCgIggIgCyCgIggJpDWCgHFgMbD6CgHUgITEaGfi_fkvfvZf7dgHIgGwEvVf1Bf1Efybf2Ef6PgBrgDVgEpgFRgFwgF9gExgCLf9af3vfuafRdfbQgGngHygJhFTVf1Bfzqf2HfjrgDAgBmgEFgFLgHGgFqgGagHigASf9Uf0dfvVfuIfo9gPJgKigFYF3Vf1Bf1Efybf2Ef6PgBrgDVgEpgFRgFwgF9gExgCLf9af3vfyNft-f1xf-8f-MgFnGtDf_mgEcgHHHSCgCOgDGH2CgCggFfIaCgCegE3I-CgE5gAvJiCgDRgCnKGCf_sf-fKqCf8cf6mLOCfwYf-FLyCf0OgCNMWCf4lgFoM6CgE8gGSNeCgFygKaOBDgEwgHIgNaOUUfzpfwef1jf6bgB_gD7gFFgFhgF5gGKgE5gCVf9Uf3bfx3fyCf4xgCigAMgNAO4UfzpfzCfmKf-qgDkgEUgFVgHNgGdgLOgQVgNHgNbf3JfrOfqaf5RgH4gLcgOXPcUfzpfwef1jf6bgB_gD7gFFgFhgF5gGKf0pfNHfcJfsrfxAfl3fnRgDvgJKgKPQKKfcRfRAgAZgLfgH-f50f7Ef-QgFYgGgQuKffPf4RgA_gL4gKIf8Af-3f2zgFrgHgRTJgEcgDkf3WgHKgBifsif6AgHkgEUR4If_qf4sgI4gIxf4Xf68f7NgCRScIf7xf5QgI4gGPf55f7Kf0Qf-JTAIf6Xfqqf9Wf9xftYf0bf0Gf-qTkIf1tf4kfsRfs2fX-fwPgAcgCkUJHf0mf0VfwkfujfpCgDHf-c","r-spiky|h-flowers":"AXFf7LfzogFyfyNf2IA6Gfkff3JfxugAYf84f2qBeGfi-fB2gKSgFofztf1-CCGfi-ezkgQbf9cfoNf1-CmGfpYf5dgD7f93f9vf1qDKGfxSfMugUpf_bfrsf2QDuGf0ff-_gMuf8hf7Ffu3ESGf2efs4gJQf6Tfw9fawE2Gf2efyBfxnfnZea5fawFaGf1Pf6JgCDf78fvFfOBF_Ef9kf7Qf1Ff-cGjEfzYgURguof3zHHEfvbec8f8ufxfHrEfeyfmgfwVfpFIQEfpmfnhfotfmAI0EfqLfvZfSUfmYJYEfqufwKfaDfnbJ8EfrGfqUflIfomKgEfrKfqKfk3foyLEEfq0fv3faOfnHLoEfqVfvUfS2fl6MMEfpsfmofoZfkiMvEfd-fmYfugfpLNTEfvTefPf_BfxuN3EfzEgScgwWf33ObEf9sf6UfsMf-qO-Gf1Of5wgF3gBdfu6fN_PiGf2UfvDf3efxaewvfN1QGGf2Ufzcf9hfvwe9DfN1QqGfy_f6YgBDfycfxzfjRROGfukfRqgRfgCFfv2f43RyGfmTf3XgB9f7kf-Df4kSWGfawe4HgX5f_Hf37f3LS6Gfaweo_gIxf8_fref3LTeGfXffyBf0WgFef76f17UDFf6efvwgCjfvVf2I","r-spiky|x-cherry":"CnEf26f2_f2_f3DDLGf5Mf26f3DfzEfsUfrODvGf5Qf7df8mftafrOfq2ETGf6af5Yf5Qfrsfqffq2E3Gf5Yf5Uf0xfv0frGfqf","r-swept|h-bunny":"AdHgi4f5EfYdfeJe9Nf1Cf5HBBHgm7glAf8WfJ1fMifwOf4RBlHgl1gvhf07fIIfPMfvHf45CJHgTGgeCf5NfEIfIof0nf6xCtHgHLfpcfR1e1SfNBf5Tf7mDRHfqrfnefSRfYfffEf9Af5BD2GgG8f_Ff7Bf1tgA4f2wELVf2uf3sf4yf61f9Ef_zgDXgGVgIogJigKvgLhgMmgNOgNjgLnf6af4kgCpf-Df7AEvVfnhf_4gDYgHTgEEgCDgGggJVgIsgK6gLWgNMgNXgPCgPigPfgFrgKrf9_fu2f5zFTVfnhfHHfGufQ5fuofxGf0XgC9gIogJigKvgLhgMmgNOgNjgNLgLKgGMf-df52f1OF3IfYUfYVfVxfd7fn3f1Pf3ef41OUHfY4fjTfotfyVf19f3Mf4nO4UfonfAuflvftIfvTf0RgCcgIGgJOgKygLzgM5gNYgNogNPgLVgHJf_9f74f2uPcUfongBNgBmgAsgBhgGVgJLgJIgK5gLIgNzgNrgOkgPVgPbgO6gIzf_rfvZf6wQAUf4Vf5pf7Ff9Zf_9gC4gFugIGgJOgKygLzgM5gNYgNogMBgIGgEygCaf-rf5gQyGgIXf8mfwqfpEf8af0aRVHfWOfSyfPyfRNfbzfytf23R5HfjRfJTfB4euAfGwfjcf4FSdHfwCfpEfP_eVYe9Zfwvf3hTBHgBEgH9fNXeePe7wfrdf6JTlHgJdgIkffhenye8tf3Uf5BUJHgJUfp5e8BfK_e7tf2Uf46","r-swept|h-flowers":"AXGgEPgA4gOnf_LflHfz1A7Gf9WgAof1lf9sf4jfz7BfFf4yfyPgCafwQf1bCDFf6Qf2TgClfzMf1bCmGfr3f4Zf7wgBTf7Hf0SDKGfrufdff7ugAYfqqfvXDuGftCfd1gARf9hfeMfrxESGfwGfisgAZf9XfNMfrRE2GfyXfregBIf-xfp6fqkFaGf1Ef9mgAdf98f71fwjF_EgAKgByf_wgALGjEf_sf-FgC8gAkHHEf8nf9FgCJgA1HrEf7LftGgEJgAgIPEf3jf-VgBjgAlI0DgAagA-gAaJYDgAdgAjgAdJ8DgAagAagAaKgDgAegA0gAeLEDgAngABgAnLoDgAfgBDgAfMLEf3Yf-OgBFgAgMvEf69fsSgEQgAiNTEf8Yf9EgCtgA2N3Ef_gf9qgC3gAsObEf_qgCFf_4gAOO-Gf1Af9Rf9cf-yf7kfvOPiGfyWfrSgBgf_Kfn6frnQGGfxIfiGgAef-BfR5frqQqGfwTffRf_Jf9vfctfrKROGfwnfnygB1gGYfjQfsvRyGfyhgDpgJfgQ9gECf3eSXFgKKgLTgUTf-rgA6S7FgJsgEggSof76gA6TfGgF6gLXgRrgGAf8_fzvUDGgEPgBUgRUgETfrbfz1","r-twin|h-bunny":"AdHgvpgLwfnIfwBfaFfqKfuCBBHgyXgv4gHAfTdfT8fvqfpQBlHgxdg5ugCCfRMfT1f-MfqTCJHgfcgpHgNCfWCfeugLifryCtHgUnf6Hfidfrsfz8gVLfvWDRHf5kf0Gf0Gf9qgMBgZrfzXD2GgFdgGOgItgK1gZOf2xELVfrhfrjgBPgddg7JhDYhEehAsgqrgVbgDSgCmgDNgEagF1gF_gFEgHkgJMgTXf6mEvVfrhfl1f5ggxNhMvhNJhNKhMWhLLgTfgCNgDrf_ngF9gIGgFVgIFgJ-f7tgH2f_cFTUfrhfrjgBPgddg7JhDYhEehAsgqrgVbgDSgCmgDNgEagF1gGLgGtgFfgE8gBxO4UfrBgMMgd2g7RhDKhEChA3gq9gVkgDRgCXgDKgEdgFhgFvgE8gEigCHgBAf_aPcUfrBf3bgvHhJIhK1hM8hL3hKIgScgCCgDif-sgHogIvgDdgH-gGEf-5f_kf8YQAUfrBgMMgd2g7RhDKhEChA3gq9gVkgDRgCXgDKgEdgFhgFsgF4gIHgK1gOGf3iQyGgFif_0gAxgGugV_fz-RVHf6HfzPfVPffUfupgVMfxzR5HgVFf3hfmIfLafbUgKRfs8SdHgfygq5gEvfOJfSLgJefp5TBHgxvg5DgBXfPCfaCf-TfmATlHgylgtrgRofbkfZIfvyfmvUJHgv9gL-fnCfwcfaPfmHfpL","r-twin|h-cat":"AbEgFxgHJgHJgIhAhDfo_f0bfoGA_EgJHgE3gKbgL3BFDfzQf8efoABjEgK-gQxgWGgNYBpDf-bgJUfrgCGFgF_gMIgVigYSgQDCNDgKhgQDfvyCqFgGugFFgVtgTBgFMCwEgF-gKngVqfz1DOKgGugGfgR5fgmf_mf8ZgESgGegW2f2KDyKgHcgKtgBWf-Cf5zf_af8ZgMxgVOf3PELVe-xe-vfUmfxbgQegaWgdegcjgKXf5Ifrzfxff3Mf7Zf9vf7MgAjgDPf8fgLdf5-EvVe-xey8fL6f9NgdRge7ghXgjAgj0fyhfmPftSf4Sf8lf83f_9gCmf9-fnLf_Nf-RFTUe-xe-vfUmfxbgQegaWgdegcjgKXf5Ifrzfxff3Mf7Zf90f_xgBCf5Vf1CfyWO4Te-AffUfxggQPgaDgc4gcKgKOf5cfsgfx1f3Rf7tf-Bf_ugA0f5Rf1Lfv4PcUe-AfK2f8JgaHgcegiJgjygnuf2bfmzfs6f1Qf7-f-af96gBmgEKfwFf8uf9pQAUe-AffUfxggQPgaDgc4gcKgKOf5cfsgfx1f3Rf7tf-Hf8agBrgDTgFZgHqf5WQuKgHogK2gAKf9Ff4_gBBgG4gMxgTsf1QRSFgGxgG4gNYfhRf9mRYEgK6gLhgYZfxiR2FgGxgEggVtgWMgD2R8EgKdgLugY3ftPSaFgF5gMBgVNgYFgP4ShDgLmgWSfqdS_EgLBgRDgVjgNXTFDgJkgQ5fnqTjEgJQgFAgJ-gL4TpDf-AgECfm_UHEgGIgHfgHfgI2UNDfzIf71flb","r-twin|h-flowers":"AXFgL9gHzgV8gGJgG8A6Gf4sgIHgJpgV_gMngGFBeGf6efn0gRqgTGf_fgGECCGf6efsVgSDgPRgEmgGECmGf_HgKKgXJgTQgKjgETDKGgCmf4AgVYgLvf-bf99DuGgAUf7ZgXVgGpfzkf99ESGgIcfiugRmf5Pf5ffxGE2GgLEgp7f_zfvVfcNfoJFaGgaXgh4gw3gBsfq3foJF_Egrkg7-gNNfeDGjEgNxgaGfq7fXZHHEfvzfYEfStfYOHrEfbPfYUfUsfZpIPEfavfXLfU0fZ6IzEfZ-fVAfWnfZzJXEfZAfTUfWSfZyJ7EfYdfRvfWqfZmKfEfYXfScfWVfZnLDEfY8fSvfWSfZyLnEfZufVLfWefZ3MLEfaqfXGfUXfZ3MvEfbMfYQfUCfZrNTEf0VfY1fTZfYUN3EgSIgbefsUfWWObEgvVgpPf6FfYzO-Ggcngh7gxkgCaflDfnlPiGgMCguWgAlfwafYPfnlQGGgIwfhugQ5f21f6AfzVQqGgACf7NgVkgG3f0IgADROGgCVf3TgV7gKCf9FgADRyGf9BgJHgWOgSQgKPgEFSWGf4IfpWgTdgPngDegGdS6Gf4IfnZgRogS6gAlgGdTeGf4rgIRgJegWCgM1gGbUDFgMAgJIgTygF5gG8","r-twin|x-ribbon":"AiCfsQfr5BGCf1Zfo7BpDfxzgFNfsPCNDftIgUxfxhCxDf-lgjTf2cDUEgJ7gGTgt8f5JD3FgFPgJVf4ogpvf1LELLfl3flhf7RgXlg1zg-cg_0g80gntgTHgBOEXJf6cf1Qf37f_lgGjgMuf1pgkvf6XEvVgJHfwVfmVgA1g9ihHzhUEhHLhdyghGf5ygFPgG0fhrfzmgNQgJngWtfsdgYxf_qFTLgr7honhfmhk6hdHg-Bg_0g80gntgTHgBOFfIf6cf1Qf37f_lgG_gHQgGpgJAF3GgsXgukgwcg16g4eg8vOUFgwYgzng2Ug5Sg7wO4TgvuhsHhjghWxg9ng_hg83gnwgTQgBjgCngEMgFOgFcgFngGqgG7gGogFlPcUgKnfy2f9qg5lhI3hPjhL4hcKgfef68gErgBqf4Vf3IgQsgDhgS-f36gL4frtQAUfk1gF6gX6g1zg-Pg_hg83gnwgTQgCVfuwgargdmgZXfyEgJjf9egQFgYrfmbQtLgEqgRPgXTgiKgk0gX-gQIgMlf2RgVrfhjRSKgUaf3ggfdgdhgXDgHsgS2gHkgP_fc5R2KgQsgUZgIUggZgkjgYNgWyf_0gLefYZSbJgRmgOpggegh3gX8gXifvNf7qfalS_JgLmgGTgZ-gbugSqgRzf6Jfwcff3TjGgHwfj-gEogLFf26gOlTqCfsJflCUHGgAlgG6gJxgMbgMBgIkUOCfsDfpz","r-wave|h-bunny":"AdHgKJfZBfUrfLSfTNfYkfcBBBHgRqgKJgD1fTNfV_fbDfhbBlHgSZgZLgQ6fY9fUQfjwfjtCJHgJJgT3gLWfT6fF9fkJfilCtHgBIfuZf2kfAje8jfkRfiqDRHfuZfyffZwfPcfL4fkyfkxD4EfpIfmofkMfmYELVf1Jf4vf70f_6gAJf-rf-Sf_ngANf_0gAdgBEgCngC9gDrgC0gAaf3BfpIfsNfpQEvVf4gf1Jf8UgB-gBcf9Cf9kgAQgBAf_Wf_GgC7gBLgDwgD9gDTgBNf8vf0_ft9foFFTVf4gf73f9XgDBgCQf-yf-wgB-gCFf_5gAIgBygCCgEFgD9gCNf_uf6nfyvftRfknF3Vf73f8nf-wgA4gBXf_8f_2gA8gBUgAtgAmgBUgCpgDXgDbgB9f-2f5sfzifm-ffOGuCfetffAHSCfecfd4H2Cfd4fd4I-CfTufTuJiCfYVfWmKGCfYVfb_KqCfc8fc8M6CfY4fY4NeCfb5fZXOCCfcWfewOUUf9Bf_5gAwgBff__f_jgAggA8gAbgAogBVgCxgDVgDngCNf-1f5mfzQfmXfeaO4Uf8bf9BgCxgCgf_Lf-SgBMgCEf_jf_qgCrgBpgD_gEYgCef_xf6RfyxfstfjzPcUf8bf71gCIgB7f-gf9fgAZgBEf-2f_MgCogB1gDMgE8gCzgARf8IfzifuwfoAQAUf71f-_f_9gA2f_Tf-yf_pgAGf_tgAOgBOgCjgDUgDpgCrf_vf2CfoLfqrfpSQ0EfoLfm3flXfmaRVHfuZfyOfarfQ0fMGflWfk1R5HgBUfuZf2Ee_-e95fknfkySdHgIWgUQgKxfS-fGrfkkfkOTBHgS2gWZgRPfYgfUVfjCfkrTlHgSKgN6gE_fUjfWZfgrfgOUJHgN6faQfVrfL7fUjfX1fb2","r-wave|h-cat":"AcEf_ff_zf_zgAIAiCfk6fqCBAEgBaf-Rf_qgCiBGCfnJfubBkEgD7gF2gIxgErBqCfwpfwLCHFgFWgHTgQjgNlgFlCOCfyCfvzCrFgGJgFxgOFgHPf04CxDfn2fvjfwSDPFgGJgJOgLhfZKfq2DVDfuGfinftUDzJgG7gI0f20fuxffmf-Jf0wfvvftSELVf4cf5Xf7Yf9of-pf-Qf_QgBMgC3gD6gGCgIIgKdgLugM9gMagGHf8tf8uf39fvXEvVf4Zf2Yf5ZgAFf_Yf8Jf8pgCggEEgDRgFUgLZgKJgOJgP4gPSgMogIKgAmf3FftdFTVf4Zf3Cf4jf_dgAGf8Af8SgCZgDrgC4gDygGAgGXgKhgLRgKYgIZgD3f5Hfw8fraF3Vf4Wf5Gf7Ef9gf-mf-Nf_EgBEgC4gDbgEngF5gIHgJegKWgJwgHmgDWf9Tf0vfvzOUUf5if8nf9lf-uf-Lf_AgBEgCsgDJgEcgF9gIEgJTgKhgKUgIHgDcf8QfzqfuqO4Uf4_f3kgAzgAFf8Bf8ygB0gDugCpgC6gHMgGtgKMgLbgMJgJrgBlf5aftwfqRPcUf4_f28gAsgAaf8bf89gChgDPgCPgFDgLZgKZgOfgPfgNxgNWgHCgAZf6Gft4QAUf4df7wf85f-Zf-Of_KgBMgCigDggFkgH8gKbgLsgMdgL9gFqgDnf6bf2afxnQvJgG9gIxf2wfuqffKf9Rf1WfyTfzSRTFgGOgJMgEJfYyfsURZDfwVfn7f0YR3FgGOgFvgVEgHQf1JR9Dfs5fvMfv_SbFgFggHWgQPgN0gF6SiCfsifsTTAEgEJgEigIhgEdTGCfrRfqCTkEgBsf-ngBlgDTTqCfpjflpUIEgABgAwgAwgBgUOCfi2fni","r-long|h-bunny":"AdHgcLfnAfcZfT4fPtfsRfp_BBHghBgcLgKOfaGfTNfsKfqlBlHgg4gl2gUUfgOfRsftnfr9CJHgWZggmgOUfZPfDWfwlfw8CtHgOrf8vf66fF4e_1fzSf0mDRHf8vf70feyfV2fZwf0Pf0ED4Ef53fyXfzpf0pELVf_pgAPgCsgFSgGwgGagHcgJcgJHgHhgG2gIBgJ0gKygLmgLUgJXgDKf74f6kf1QEvVgAvf_pgA1gHlgHcgFPgGigKkgLOgFigFygJPgJDgLJgMJgLegKTgGTgALf7VfyaFTVgAvgB1gDUgJ4gKAgH6gIggMlgNEgHlgHTgI5gIXgKRgKggJLgIwgD7f89f2wfuzF3VgB1gClgFAgHvgJRgIzgJqgLYgLFgJUgH7gIMgJLgJtgJ_gJfgHSgDNf9NfzPfqPGuCfqPfozJiCfKnfPeKGCfKnfL2KqCfKnfL4NeCfloflNOCCfo9fmtOTVgAUgB3gEfgHmgI2gIigJhgLigLOgJagIBgH_gJBgJWgJ9gJSgHcgDTf-wfxUfr7O3Vf_4gAUgDbgJugJqgHLgIxgMngNNgH2gHKgJBgHzgKQgKAgJogIPgEdf9Nf6nfs1PbVf_4f_dgAigHEgHIgEwgGxgJ2gKdgGFgGVgJXgJpgL0gMRgKsgJWgFnf_Bf63fxsP_Vf_df__gCWgE6gGUgGOgHIgJBgIzgHogHRgIcgKRgLPgLmgKxgIjgCBf6Ef53f0YQ0Ef4ffzpf0Ff0LRVHf9yf9sffGfUefZufrtfxxR5HgPZf9yf9nfHsfJzfwHfxfSdHgWfghAgQIfb2fC5fv4fv3TBHghBgkqgTyffofSyfnAfsJTlHghBgdYgLmfcFfUQfhwfm7UJHgdYfn4fdwfU7fRjfh1fkx","r-long|x-ribbon":"AiCftCfoMBGCfs4fnbBqCftFfpHCOCfu8ftJCyCfxvfvcDVDf0Ef0HfzvD4Ef6Yf4YfxDf1EEMUf8Ff-Xf-if-pf9Zf-DgADgArgA1gBtgDmgGEgHqgJmgJfgIXgCdf3lf5-fxyEwUf88f6ngBCf9xf43f6Qf_rgCjf9RgBCgGygE5gKbgMMgNEgLagH8gA5f6hfxTFUUf88f-jgELgFIgAigAWgGNgHDgASgAqgCNgA2gEXgGGgFzf-df2lf_zf6Pf1mF4Sf9zgADgA5gBngA6gBmgDTgDPgB6gBOgCCgDqgE-gGMgE5gBQf-0f8AOUSf9of_-gBCgBvgA5gBWgDRgDogCZgBVgCAgDmgE2gGBgFTgCFf_6f8YO4Uf83f-DgEYgE-gAef_fgF8gITgBAgAngBUgBpgEugFdgGYgB5f2pf-tf5Cf06PcUf83f6qf-Gf91f5gf7SgAPgCkf9Bf_0gHSgF6gKwgMOgLOgLdgGjgARf54fwnQAUf8Gf-cf-wf-1f91f-UgASgAsgAsgBwgB8f8fgG-gJGgCBgGCgBvf4Ff5efyPQuKf-6f65gHwgI3gCYgDVf9af3sfvsf14RSKf-Tf_Rf-kgDygFDf9Kf5Qftofzzf1AR3Jf6hft6gF-gIxgClfbofnlf0Yf1aSbJf1FfxGgECgHtgBmfYyfnlfw_fxHS_Jf0lfmvf9Xf_0f58f2afnIfoAftRTjGfxOf28frifxyftzf42TqCfhPfppUIFfzgf1Ff00f1ef0TUOCfiofmZ","r-spiky|h-bunny":"AfFgLGfuxfpMgI8gphBCGgYjgV6gEcfNff_-gvHBmGgXfgkZgJ3fRWf1EgqfCKGgXfgcIgMkfVQfsngk5CuGgWcgPNftcfEpfwugjtDTFf-afYbfYbf-SgfWD5DffLf9AgZ4ETNgJ2gDVf4rfqGfnBfwEf9YgF1gLtgSYf64fsTgUTEvVgFcgE7gDcgBkf_sgJBgS_gcmgV2f-3fwpfT4fSrfwJf6xgG6gK3gTWgKHf5ZgPHFTVgFcgHGgGIf_Vf-2f1egubgkYgikgbWgLWfiufhof8HgEdgNGgP0gWnghQgElgKOF3VgFcgE7gDcgBkf_sgJBgS_gcmgZ3gSRgBUfxPftkf14gBrgH3gNMgVkgGWf1vgJXGtDfqqfmogMYHSCf2LgQBH2CgCMgVmIaCgS5ga5I-CgZ4gVUJiCgdTgaTKGCgUvgZ7KqCgRhgUWLOCgEIgQVLyCfzbgQKMWCgBJgVvM6CgR2gUXNeCgT7gYtOBDf0MgDOgYqOTVgD5gEOgC5gBjf_fgIxgS1gcmgZkgR7gBOfxYftmf1tgB7gIOgNqgV8gP4gEPgccO3VgD5gD8gHuf_ff-_f1ggpfgnughSgeTgRDfmpfekf-QgEVgK-gQDgS8gqIgU8gX0PbVgD5gEOgC5gBjf_fgIxgS1gcmgVQgBafZHfYSfLXfw7f-OgEdgNIgQPgfzgJlgXcQHNgIVf3kfwmfiAfnYfxCf_HgGpgMngUogEnf9zgYcQ1Dfo6gCrgWfRXFf_SfbMfbMf8QgZ8R6GgW5gQFftofGPf0igfiSeGgXbgdTgOJfU7f0DgiETCGgXbgh1gM4fVLf0UgnpTmGgX-gUagD5fMwf8ngknULFgH8ft-focgBUgkK","r-wave|x-ribbon":"AiCfdFfg0BGCfQafclBqCfKNfatCyCfWwfhEDWCfWwflTD6Cfh5fpMEdDfwTfukfq9EvVf_pgAXgCpgFKgF9gFVgFxgH3gJMgJtgLBgMogOogP_gRLgRKgOjgKIf_LfvWfvNFTVf_pf-wgALgIRgIpgCsgE9gJKgLHgKCgLDgO3gO8gR-gUEgTzgRugLAgGMf8BftzF3Vf_pgAXgCpgFKgF9gFVgFxgH3gJMgJtgLBgMogOogP_gRLgRKgOjgF7fyWf5afyCGsEf5Tf12fuOf1jHRDfuOfxffxdH2CfwAfwWIaCfv1fsHI-CfsXfrfJiCfuzfr5KGCfqpfv3KqCfohfroLOCfn6ft2LyCfszfyFMWCfyCf1rM6CfydfxcNdDfpAfwqf0IOAEf0-fy0fsmf3eOUUgA_gEGgFEgGMgFngGEgH9gJCgJpgK7gM0gPCgQTgRhgRdgPdgFVfvDf31f7BO4UgA_f_kgJFgIWgEDgFCgJ7gLwgIpgK7gQigP4gTJgURgVPgTVgNDgEFf8Vf2yPcUgA_gEGgFEgGMgFngGEgH9gJCgJpgK7gKLgCJgNQgPPgHwgKogGDgAffvqfzIQKKgFVgEXgR8gUfgPmftIf9Afznfutfu6QuKgFSf9VgRbgT9gO7f7rgAbf8Afp6fqsRSKgDjgKCgMsgLggQkgLmfzZf8lfp6fp6R4GgLmgOqgRpgOEf16f8eScIgItgHugOngKLf1af5efjlfjlTAIgAMf-_gDmgBEfngf3ofjlfjlTkIf7jfqWf1dfyQf6Tfy_fnYfnBUIFf0Pf3Kf3cf5Cf3_UOCfpEfix","r-pony|h-flowers":"AXGgQTgPBghqgSmfrogB1A7GgUkgZkgjTgULgLdgAXBfFgYogUEgojgOlgSQCDFgaSgUKgkOgTPgSQCmGgMcgYFgiPghPgZBgSRDKGgNaf2YgpWgdpgT3gOCDuGgLHf8TgpNgdffwwgJHESGgJLf68gh9gcWfsygDvE2GgGkf2GgWdgP1f9qgAgFaGgGngH2gAOf61gFogBvF_EgB3gCygCmgBiGjEgCXgEfgMIgDTHHEgASf2-gAbgW0HrEf-4gMjg_0gzQIPEgG6hDGh--hRkI0DhcdhtnhcdJYDhZHhrQhZHJ8Dg4MhSxg4MKgDgYmf6TgYmLEDf9lf9kf9lLoDf_wf-Mf_wMLEf_qgBxgB_gCdMvEgA7fzjgNvgEkNTEgBvf-DgILgFON3EgCtgCJgIKgDuObEgBZgCgf_9gBmO-GgKXgJLf-Ef7RgIbgJsPiGgKUf7GgePgURgGwgILQGGgLWgADgjvgeQf2egI9QqGgMFf48googcyfyzgLQROGgNAf80gh8gd2gRFgNjRyGgMlgX8ggcgiTgX8gRTSXFgaWgU4ghWgUGgRoS7FgYygWWgjVgRegRoTfGgUegZRgibgUrgM6gDSUDGgQTgNuglEgeDf76gB1","r-short|h-cat":"AdEf95f-Nf-Nf-gAiCf8jf9WBBEf-ff8-f-Nf_ZBGCf86f86BlEgAmf-1gAOgBTCJEgDXgIHgIvgDVCOCf7Ff7FCsFgF8gGXgKdgHQgFHCyCf7Ff58DQFgFIgHcgM2gEogFGDWCf5If5ID0FgFIgDcgGkgGogE1D6Cf6of4oEYIgETgFDf3Tfpffnsfw0f7xf82EvVf-zf-QgBigFwgKNgLwgMigNTgNfgMigLKgHtgDSf8mf1RfphfbxfR_f8Df9vf9FFTVf-zf-of7UgKQgNigMhgP4gPtgOygObgLugLlgB8f8KfyqfqIflHfgOgAegBuf6eF3Vf-zf-QgBigFwgKNgLwgMigNTgNfgMigLKgHtgDSf8mf1RfuGfoDfvUftxf-ef-eGsEf1Af5Vfx1gA2HRDf4Vf8lf8oH2Cf8pgACIaCf80f7zI-Cf9Gf-3JiCf9xf9zKGCf6Tf9uKqCf56f5fLOCf2Tf6cLyCf6df9yMWCf7cgCAM6CgASgCONdDf6Sf-wgFROAEf2Wf6Mf3cgBCOUUf9vgDLgFjgKkgMNgNOgNRgMxgL8gLRgIHgD3f8wf1qfuWfsxfydfwLf93gByO4Uf9vf8dgK5gLfgN-gPjgO7gOIgNQgLPgM3gBFf8ifyMfpbfirfvkf7cgA_gAVPcUf9vgDLgFjgKkgMNgNOgNRgMxgL8gLRgIHgD3f8wf1qfuWffvfbwf0Cf9gf-MQMIgFGgGKgGKf2lftdfy_f35f59QwFgFigEfgIfgGwgEtQ2CfrPf15RUFgFigHOgLLgFfgFWRaCfgXfzoR4FgF_gGmgLhgJ0gFaR-CfmCfz8SdEgEIgIpgH8gEHSiCfyrf3_TBEgA1gBRgCJgBWTlEf-of7If8of_QTqCf7rf72UJEf88f9Uf9Uf9sUOCf8jf5I","r-spiky|x-ribbon":"AiCge_gaxBGCgVTgYmBqCgIngUXCOCgSFgSFCyCgPbgSoDWCgVFgU6D6CgVbgUgEcEgUrgUYgVXgV1EvVgMVgLwgKPgIWgGxgRJgboglfghlgaBgJBf5Lf1Pf9QgJBgOcgTQgZYgZpgQugX9FTVgMVgPggNqgHbgHCgJHg5ygq1gqngd3gSNfhifjCgBogK1gT1gT4gchgdzgI6gULF3VgMVgLwgKPgIWgGxgRJgboglfghlgaBgJBf5Lf1Pf9QgJBgOcgTQga8gJAgE-gXFGtDfz9gO8gaMHSCgbogdfH2CgZnghuIaCgZogiaI-Cgd-glhJiCgm3go8KGCgbJgktKqCgYmgiALOCgOagmPLyCgCDgqaMWCgOvgt6M6CgbUguzNeCgbPgs5OBDgFFgPogpvOTVgLKgLVgKEgIxgG2gRMgbkglpgh9gaWgJkf5nf1lf9cgJagO8gT4gargaIgN_glgO3VgLKgNQgQtgHMgHHgHhg4LgwIgoJgiNgSNfmAffLgK8gR4gP9gcagajgudgarghhPbVgLKgLVgKEgIxgG2gRMgbkglpgh9gaWgJkf5nfv2fQCgAsgPOgJef9UggUgaVgdsQLJfnPfURf-KgVUgSGf7_gLigWogdiQvJforf2DftmgHngB2foKf--gOugZSRUIf6Of4zfatgBlgFZf0EgIpgVrR5HfwGfhpgL6gLdf9qgEqgRbSdGft2fg_gEngKcf8wf-FTBHfsFfPmf-Pf-YfoKf-8gUbTlHfnifw9fc2fhJf29gJhgWFUKGfsafsTfsTfs3gTwgaN","r-twin|x-holly":"CoEf6sf6uf6uf6xDLGf67f7xf6sf6xf6_f4pDvGf67f67f9qf9jf4pf4pETGf67f38f8If7Ef3Hf4pE4EfzlfrCfrOfzJFcEfrCfrIfrIfrO","r-wave|h-flowers":"AXGfyWfsbf_zfwPfQ9fm7A7Gf0Sf7SgB2f3QfuiflgBfFf3tfxTgGrfsafz1CDFf6Ufy5gFYfwrfz1CmGfwvf6zf7YgFJf70fzcDKGfwKfgBgCKgCdfrffvUDuGfw-fengCAf9ofaufvUESGfyzfdbgCKf9yf4kfuSE2Gf0afrOgCpf9efhcfwUFaGf2Nf-CgBhf9Yf7VfwUF_EgAggB0f9Af_GGjEgAHgCQf-wf_nHHEf_Xf9fgCagAFHrEf-Tf6-gCYgAZIPEf91f5fgCUgATIzEf9df_UgA7f_8JYDf_xf-Lf_xJ8Df_xgAff_xKgDf_wgA3f_wLEDf_3f-If_3LnEf9bf_SgBlf_6MLEf9bf5zgCIgAVMvEf-Gf6MgCkgAeNTEf_Pf-JgC2gAfN3EgAVgBJgANgABObEgArgCQf9Xf_fO-Gf2Xf-JgBTf9vf7efwSPiGf0jfq9gCvf9kfhUfwSQGGfy_fiNgCPf9Uf49fvZQqGfxGfgRgB-f9Sfb-fwfROGfwRffqgCegBtfq7fwfRyGfwrf7JgAigDJf7TfzKSXFf68fzTgBwfyIfzkS7Ff4Hfx_gDafv6fzkTfGf0Uf7FgBYf35fwMfoWUDGfyWfsBgDLf53fcVfm7","r-pony|h-bunny":"AeGgprgb_gb_gOTf3ZfxXBCGgvWgp-f-nf2Kfo1f2BBmGgv0hCGgKPfeLfaYf6xCKGgpkg0Kf-nfN2fgmf_mCuGgj2gJdfwrfcafvDgEeDSGgW6gFvgFvf0jf9nf_mD5Df-sf-Ff9OERPf9Rf9Qf-jgA1gDAgEFgD1gDsgCsgCBgBQgBBgASf6af8UEvVf-Pf-Sf65f9Mf_2gGYgEufpWfpNfzrgAff9YgATf_2gAgf80gAtgAdf92gA_gA5FTVf-Pf7SgKGffogMggJKgMBgYjgXqgK9gRQgNzgK3gJ7gJVgF0gF4gF7gBogBggDkF3Vf-Pf-Sf65f9Mf_2gGYgHMgHmgG5gHPgHdgH7gHMgGTgFPgEJgDCgCEf_dfy8f_DGtDf6Ef6Wf6MHSCf3Cf1XH2Cf3WfwnIaCf3Vfz_I-Cf7cf40JiCf6Tf9sKGCf4uf40KqCf2Pfz_LOCfnxfzvLyCfsFf25MWCfuNf7uM6Cf5rgAlNeCf4MgCEOBDf8qf7nf9MOUUf99f5Mf9Gf_xgFvgF8gFpgDfgClgCQgEIgFGgE4gDJgBpgBBgBIf_wf3af_sO4Uf99gCgfsRgG8gIPgKRgKvghWgL3gIcgLOgLqgIFgKegAsgCbgFRgB4f97gEhPcUf99f5Mf9Gf_xgFvgDsf0EfrGfaaf0nf1bgCif_NgCQf1pf91f_Xf8TgF0gJZQFPf89f83f6lf6Qf7Gf_pgCMgCrgAsf_ef_Yf_0gBAf8fgJVQ1DgCKgABgOMRWGgYcgIggIgf4jf9TgJVR6GgjrgJ1fxDfgZfuvgEgSeGgpKg0if-IfNXfgSf_vTCGgudhBngJxfePfWwf9yTmGguPgnHf-If2OflNf6sUKGgoYgbYgbYgOXfzxf11","r-spiky|h-cat":"AeDgCOgCOgCOBCDgHbgCOgHbBlFfwrgDMgMof_YfhaCJFf2FfwrgNPfhsfTHCtFf5cf7fgHHfV7fTHDRFf_JgAJgGyfznfe-D1EgA_gB0f7ugBQEZEgB0f-xf-xf9pEvVgFygFNgD7gCMgAjgLvgW-ghxgd8gXRgGif2ofxzf64gIMgPTgUGgbVgedgg-geyFTVgFygFygEogBWgAlf_ugi6giSggGgXbgOSft5fnsf_0gJIgPpgVJgXgglWgehgfDF3VgFygFNgD7gCMgAjgLvgW-ghxgd8gXRgGif2ofxzf64gIMgPTf_gf50gP-gRpgd3GrFfZufe4f6xgE2giKHRDfofgKSgkEH2CgXEgoXIaCgj9gooI-Cgljgo1JiCgmjgtJKGCgo-grpKqCgl5gnVLOCgZAgj5LyCgOrgjMMWCgbegnfM6CgoWgpKNdDf0OgbegoaN_FfZxfdDf48gOrgkGOTVgELgEagDWgCUgApgMDgXMgiAgeAgXAgGTf20fyUf7XgIJgPaf_jf6IgOJgT0gmoO3VgELgELgEpgBPgBDf_ogjegifggCgXegNgft8fpBf_-gJHgPVgVygX0gjhggtgiUPbVgELgEagDWgCUgApgMDgXMgiAgeAgXAgGTf20fyUf7XgIJgPagUUgbCgergf_geNQNEgBzf_tf_tf9nQxEgA7gBzf9ngBsRVFf_tgADgFxfzJffMR5Ff6Pf9QgIYfW9fSDSdFf3VfxagNlfjTfYcTBFfxagDcgMmflNfkQTmEgHYgCLf7_flNUKDgCLgCLgCL","r-swept|h-cat":"AdDgPIgPIgPIBBEgRjf_agQvgPHBkFgGGgPqgwZgVZgOCCIFgLPfYAgR5fyIgFbCsFgMmgcsgAHfBNfokDQFgOegZ_f5ge8hfWXD0FgNggRqfxLftce7PELHf17f3Ff3Wf35f3af3Lf21EYEgLsgJrgJrgHqEvVfsvgsugu6gSgfntflYgAqgG4gJPgKMgLEgLFgLhgMCgMlgMWgLcgH2gEBf8Lf0YFTVfsceziez_fz-f6CgQ7gHngJ6gJvgLqgMigTQgFagRAgOvgObgPHgXOf5Lf6FfuzF3Vfi-fiXfpdfxZf7ff_ggD8gG4gJPgKMgLEgLFgLhgMCgMlgLHf8ngOCgAgf_cf0DGqGgHbgH4gDEfk2gAJf0pHQEf4Cf4Pfwdf6OH1Df15fg_f83IZDfyFfxrf5cI-Cf41f_BJiCf4Cf8eKGCf3kf3zKqCf3if1SLOCf44f63LyCf4jf2TMVDf0cfv0f5zM5Df2jffJf9nNcEf5gf5bftbf5EN-GgFngGrgCVflRf-DfzzOUUfhNfsXfyDf8OgAJgDggGbgI3gKEgLTgLsgMfgNIgNjgLOf45gHNgA8gLVfuSO4UfsaexYftLgFzgPVgJSgG8gMcgMwgLRgRjgLNgO8gQ9gM3gVfgRagDYf6pfq5PcUfwpgwogHWfrhfhygAogGbgI3gKEgLTgLsgMfgNIgNjgNFgLqgIUgDvf71fweQAGf3mf4lf4Zf4if4Bf4CQMEgLogJtgJtgHyQwFgLfgSHgLvgH-fsZRUFgI1gp9gjJfjJfccR4Ff2Hf85gG9fPmffgScFfrfe4Mf2ie52fehTAFfTefuwfpiezEffkTlEf0bgGpfj_fclUJDfz2fz2fz2","r-swept|x-ribbon":"EMEf3Af2Ef2Ef1JEwUfuCgGEf2Uf6-gAfgDxgF_gHogIVgI4gImgI6gJAgJVgIjgHZgEff_Uf78f4IFUUfuCfR3f-Kf8FgAOgFjgIOgIpgJqgKUgLqgGdgMIgLIgJigJfgIkf_Bfvgf1qF4UflDfvBfzsf86gAfgDxgF_gHogIVgI4gImgI6gJAgJVgIjgFyf9_gBqf59fxgGrFgA9gAof7yf3JfvdHRDf2qfqtfznH1Dfz0f0vf0aIaCf0RfwQI-Cf0KfyLJiCf0Kf0bKGCf0xf0xKqCf1qf1qLOCf1Yf0GLyCf1OfwJMWCf0PfzZM5Dfynf0JfvPNdDf1OfoFfygN_FgAwf_mf6uf0JfxoOUUfkgfuufztf9BgAhgDLgFcgHPgIUgI2gIxgI2gJYgJlgJPgF9f-yf_Pf7qfwiO4Ufs-fTNf5nf-zgAugE7gG1gJGgKggKDgNTgMvgK2gNKgJ3gKwgIWf8NfvOf0sPcUfs-gFAf1hf6-gAhgDLgFcgHPgIUgI2gCifwLgEbgIOgDWft_gBAf9if5Zf0aQAEf1df1Jf1Jf01QKIf5MfvhgGFgLdgI3f4Ef6XfybQuIf5SgA4f_ggJEgG-f5zfkyf15RTHgC3f93fw6gB6gDSfzWf3AR4Gfpwfokf-2gEIfzef3EScGfiWe8mfsRfwKfpHftzTAGfZnfkjfY5fLtfQIfaYTkGfiWffifYlfH0ezffORUJFfdnfYRfP1fI8e-8"}}};var ca={f:{"z-1":{"r-long":{"w-angel":.1574,"w-bag":.1534,"w-batwing":.1473,"w-butterfly":.1487,"w-jetpack":.1536},"r-wave":{"w-angel":.2035,"w-bag":.1969,"w-batwing":.1942,"w-butterfly":.1923,"w-jetpack":.1949}},"z-2":{"r-long":{"w-angel":.1577,"w-bag":.1536,"w-batwing":.1486,"w-butterfly":.1491,"w-jetpack":.1538},"r-wave":{"w-angel":.2037,"w-bag":.1965,"w-batwing":.1947,"w-butterfly":.1925,"w-jetpack":.1951}},"z-3":{"r-long":{"w-angel":.1587,"w-bag":.1538,"w-batwing":.1495,"w-butterfly":.1493,"w-jetpack":.154},"r-wave":{"w-angel":.2039,"w-bag":.1962,"w-batwing":.1949,"w-butterfly":.1923,"w-jetpack":.1953}},"z-4":{"r-long":{"w-angel":.1589,"w-bag":.154,"w-batwing":.1499,"w-butterfly":.1496,"w-jetpack":.1542},"r-wave":{"w-angel":.2041,"w-bag":.1956,"w-batwing":.1951,"w-butterfly":.1917,"w-jetpack":.1952}},"z-5":{"r-long":{"w-angel":.1592,"w-bag":.154,"w-batwing":.1502,"w-butterfly":.1498,"w-jetpack":.1544},"r-wave":{"w-angel":.2043,"w-bag":.1949,"w-batwing":.1953,"w-butterfly":.191,"w-jetpack":.1954}}},m:{"z-1":{"r-long":{"w-angel":.1511,"w-bag":.1473,"w-batwing":.1419,"w-butterfly":.1429,"w-jetpack":.1453},"r-wave":{"w-angel":.1978,"w-bag":.19,"w-batwing":.1886,"w-butterfly":.1865,"w-jetpack":.1864}},"z-2":{"r-long":{"w-angel":.1524,"w-bag":.1475,"w-batwing":.1423,"w-butterfly":.1431,"w-jetpack":.1455},"r-wave":{"w-angel":.198,"w-bag":.1896,"w-batwing":.1888,"w-butterfly":.1867,"w-jetpack":.1866}},"z-3":{"r-long":{"w-angel":.1526,"w-bag":.1477,"w-batwing":.1434,"w-butterfly":.1434,"w-jetpack":.1457},"r-wave":{"w-angel":.1982,"w-bag":.1891,"w-batwing":.189,"w-butterfly":.1856,"w-jetpack":.1867}},"z-4":{"r-long":{"w-angel":.1531,"w-bag":.1473,"w-batwing":.1439,"w-butterfly":.1436,"w-jetpack":.1459},"r-wave":{"w-angel":.1984,"w-bag":.1885,"w-batwing":.1892,"w-butterfly":.1858,"w-jetpack":.1869}},"z-5":{"r-long":{"w-angel":.1533,"w-bag":.1469,"w-batwing":.1441,"w-butterfly":.1438,"w-jetpack":.146},"r-wave":{"w-angel":.1982,"w-bag":.1879,"w-batwing":.1894,"w-butterfly":.1847,"w-jetpack":.1871}}}};var ty="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",us=new Int8Array(128);for(let i=0;i<64;i++)us[ty.charCodeAt(i)]=i;function ny(i){let e=[];for(let t=0;t<i.length;){let n=us[i.charCodeAt(t)]*64+us[i.charCodeAt(t+1)],s=us[i.charCodeAt(t+2)],r=Math.floor(n/36),a=n%36;t+=3;for(let o=0;o<s;o++,t+=3)e.push(r,a+o,us[i.charCodeAt(t)]*4096+us[i.charCodeAt(t+1)]*64+us[i.charCodeAt(t+2)]-131072)}return e}function Wd(i){typeof i=="string"&&(i=ny(i));let e=new Float32Array(3600).fill(NaN),t=0,n=0,s=0,r=0;for(let a=0;a<i.length;a+=3){let o=i[a+2]*1e-5;e[i[a]*100+i[a+1]]=o,i[a+1]===35&&(t+=o,n++),i[a+1]===0&&(s+=o,r++)}return e.top=n?t/n:NaN,e.bottom=r?s/r:NaN,e}function iy(i,e,t){let n=e/10-.5,s=(t+90)/5-.5,r=Math.floor(n),a=Math.floor(s),o=n-r,c=s-a,f=0,l=0;for(let d=0;d<2;d++)for(let b=0;b<2;b++){let m=i[((r+d)%36+36)%36*100+a+b];if(!(m>-1e9))continue;let p=(d?o:1-o)*(b?c:1-c);f+=p*m,l+=p}let u=l>1e-6?f/l:0,h=90-5/2;return t>h&&i.top===i.top?u+(i.top-u)*(t-h)/(5/2):t<-h&&i.bottom===i.bottom?u+(i.bottom-u)*(-h-t)/(5/2):u}function Kd(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],c=s-e[2],f=Math.hypot(a,o,c)||1e-9,l=(Math.atan2(a,c)*180/Math.PI+360)%360,u=Math.asin(Math.max(-1,Math.min(1,o/f)))*180/Math.PI,h=(f+iy(i,l,u))/f;return r[0]=e[0]+a*h,r[1]=e[1]+o*h,r[2]=e[2]+c*h,r}var Jd=(i,e,t,n)=>Math.floor((Math.atan2(i,t)*180/Math.PI+360)/2)%180*90+Math.min(89,Math.max(0,Math.floor((Math.asin(Math.max(-1,Math.min(1,e/n)))*180/Math.PI+90)/2)));function qd(){return{lo:new Float32Array(16200).fill(-1),hi:new Float32Array(16200).fill(-1),hv:new Float32Array(16200).fill(-1)}}function Zl(i,e,t,n,s,r){let a=t-e[0],o=n-e[1],c=s-e[2],f=Math.hypot(a,o,c);if(!f)return;let l=Jd(a,o,c,f);f>i.hi[l]&&(i.hi[l]=f),r&&f>i.hv[l]&&(i.hv[l]=f),(i.lo[l]<0||f<i.lo[l])&&(i.lo[l]=f)}function $l(i,e,t){return eh(i.lo,e,t)}function eh(i,e,t){let n=new Float32Array(16200).fill(NaN),s=new Float64Array(16200).fill(1/0);for(let r=0;r<180;r++){let a=r*90;for(let o=-e;o<=e;o++){let c=((r+o)%180+180)%180*90;for(let f=0;f<90;f++){let l=i[c+f];l>=0&&l<s[a+f]&&(s[a+f]=l)}}}for(let r=0;r<180;r++){let a=r*90;for(let o=0;o<90;o++){let c=1/0,f=Math.min(89,o+e);for(let l=Math.max(0,o-e);l<=f;l++){let u=s[a+l];u<c&&(c=u)}c<1/0&&(n[a+o]=c-t)}}return n}function Xd(i,e,t){let n=0;for(let s=0;s<i.length;s+=3){let r=i[s]-e[0],a=i[s+1]-e[1],o=i[s+2]-e[2],c=Math.hypot(r,a,o);if(!c)continue;let f=t[Jd(r,a,o,c)];if(!(c>f)||f<=0)continue;let l=f/c;i[s]=e[0]+r*l,i[s+1]=e[1]+a*l,i[s+2]=e[2]+o*l,n++}return n}var th={f:{r:["h-beanie|r-long","h-beanie|r-pony","h-beanie|r-bun","h-beanie|r-spiky","h-beanie|r-twin","h-beanie|r-wave","h-cap|r-long","h-cap|r-pony","h-cap|r-bun","h-cap|r-spiky","h-cap|r-twin","h-cap|r-wave","h-cap|r-swept","h-chef|r-pony","h-chef|r-twin","h-santa|r-pony","h-santa|r-bun","h-santa|r-spiky","h-santa|r-twin","h-santa|r-wave","h-santa|r-swept","h-straw|r-long","h-straw|r-bob","h-straw|r-short","h-straw|r-pony","h-straw|r-bun","h-straw|r-spiky","h-straw|r-twin","h-straw|r-wave","h-straw|r-swept","h-witch|r-long","h-witch|r-bob","h-witch|r-short","h-witch|r-pony","h-witch|r-bun","h-witch|r-twin","h-witch|r-wave"],b:["h-beanie|x-ribbon","h-bunny|x-ribbon","h-cap|x-ribbon","h-cat|x-ribbon","h-chef|x-ribbon","h-flowers|x-ribbon","h-pumpkin|x-ribbon","h-santa|x-ribbon","h-straw|x-ribbon","h-witch|x-ribbon"],x:{"h-bow|x-cherry":[0,0,-15],"h-bow|x-heart":[0,0,-10],"h-bow|x-holly":[0,0,-10],"h-bow|x-star":[0,0,-10],"h-bow|x-thaipin":[0,0,-15],"h-chef|x-cherry":[0,0,-25],"h-chef|x-thaipin":[0,0,-30],"h-horns|x-ribbon":[-20,0,0],"h-santa|x-flower":[0,0,35]}},m:{r:["h-beanie|r-long","h-beanie|r-pony","h-beanie|r-bun","h-beanie|r-spiky","h-beanie|r-twin","h-beanie|r-wave","h-cap|r-long","h-cap|r-pony","h-cap|r-bun","h-cap|r-spiky","h-cap|r-twin","h-cap|r-wave","h-cap|r-swept","h-chef|r-pony","h-chef|r-twin","h-santa|r-pony","h-santa|r-bun","h-santa|r-spiky","h-santa|r-twin","h-santa|r-wave","h-santa|r-swept","h-straw|r-long","h-straw|r-bob","h-straw|r-pony","h-straw|r-bun","h-straw|r-twin","h-straw|r-wave","h-straw|r-swept","h-witch|r-long","h-witch|r-bob","h-witch|r-pony","h-witch|r-bun","h-witch|r-twin","h-witch|r-wave","h-cat|r-pony","h-flowers|r-bun"],b:["h-beanie|x-ribbon","h-bunny|x-ribbon","h-cap|x-ribbon","h-cat|x-ribbon","h-chef|x-ribbon","h-flowers|x-ribbon","h-pumpkin|x-ribbon","h-santa|x-ribbon","h-straw|x-ribbon","h-witch|x-ribbon"],x:{"h-bow|x-cherry":[0,0,-15],"h-bow|x-heart":[0,0,-10],"h-bow|x-holly":[0,0,-10],"h-bow|x-star":[0,0,-10],"h-bow|x-thaipin":[0,0,-15],"h-chef|x-cherry":[0,0,-25],"h-chef|x-thaipin":[0,0,-25],"h-horns|x-ribbon":[-20,0,0],"h-santa|x-flower":[0,0,35]}}};var dh=new URL("./",import.meta.url).href,xh=!1;function nw(i,e){dh=String(i).replace(/\/?$/,"/"),xh=!!e}var gr=(Rt.v||"1")+".c12821e7",Qd={"s-1":"#ffe7d6","s-2":"#f7d3b6","s-3":"#e7b58e","s-4":"#c48a62"},Af={"c-black":"#2e2624","c-brown":"#5b3a24","c-choco":"#7a4a2b","c-blonde":"#e0b25a","c-pink":"#f28fb0","c-lav":"#a98be8","c-mint":"#6fcfb8","c-silver":"#c3c9d3"},Zd={"c-black":"#6b5d5a","c-brown":"#9a6a48","c-choco":"#b98258","c-blonde":"#fbe3a6","c-pink":"#ffd0df","c-lav":"#dccdfc","c-mint":"#c4f2e6","c-silver":"#f2f5fa"},ga=1.15,$d={"z-1":.9,"z-2":.95,"z-3":1,"z-4":1.05,"z-5":1.1},oy=["Spine","Spine1","Spine2","Neck","Head","LeftLeg","LeftFoot","RightLeg","RightFoot","LeftForeArm","LeftHand","RightForeArm","RightHand"];function _h(i){let e=i.g==="m",t=Object.assign({s:"s-1",r:e?"r-short":"r-long",c:"c-black",u:"u-uniform",l:e?"l-pants":"l-skirt",k:"k-sneaker",z:"z-3"},i);return t.g=e?"m":"f",t.u&&Rt.parts[t.u]&&Rt.parts[t.u].full&&delete t.l,t}var fy=["g","z","s","r","c","u","l","k","h","e","j","w","x","a","m"];function xa(i){let e=_h(i||{}),t=n=>Rt.parts[n]||(Rt.props||[]).includes(n);return fy.map(n=>e[n]&&(n==="g"||n==="z"||n==="s"||n==="c"||(n==="m"?hs[e[n]]:t(e[n])))?e[n]:"").join("|")}function iw(i){return!!Rt.parts[i]||(Rt.props||[]).includes(i)}var sw=Rt,cy=Rt.v||"1",Mg=new yf;Mg.setMeshoptDecoder(Od);var Tf=new Map;function ly(i){return xh?i.text().then(e=>{let t=atob(e.trim()),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}):i.arrayBuffer()}function pa(i){return Tf.has(i)||Tf.set(i,fetch(dh+i+(xh?".txt":"")+"?v="+cy,{cache:"force-cache"}).then(e=>{if(!e.ok)throw new Error(i+" "+e.status);return ly(e)}).then(e=>Mg.parseAsync(e,dh)).catch(e=>{throw Tf.delete(i),e})),Tf.get(i)}var da=i=>new Ee(i),nh=null;function Sg(){if(!nh){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,4,64,64,62);n.addColorStop(0,"rgba(40,24,16,.42)"),n.addColorStop(.6,"rgba(40,24,16,.16)"),n.addColorStop(1,"rgba(40,24,16,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),nh=new Nr(e)}let i=new at(new ns(.5,.34),new nn({map:nh,transparent:!0,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-1,i}var hr=null;function hy(){if(!hr){let i=new Uint8Array([138,138,138,141,162,232,255,255]);hr=new Ri(i,i.length,1,er),hr.minFilter=hr.magFilter=vt,hr.needsUpdate=!0}return hr}function uy(i){i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
    float rimF = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
    rimF = smoothstep(0.58, 0.9, rimF) * (0.35 + 0.65 * clamp(normal.y * 0.8 + 0.4, 0.0, 1.0));
    reflectedLight.directDiffuse += rimF * 0.55 * material.diffuseColor;`)}function ma(i,e){let t=new Br({color:e||i.color.clone(),gradientMap:hy(),side:i.side});return i.map&&(t.map=i.map),i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=i.depthWrite),i.alphaTest&&(t.alphaTest=i.alphaTest),i.emissive&&i.emissive.getHex()&&(t.emissive=i.emissive.clone(),t.emissiveIntensity=i.emissiveIntensity),t.name=i.name,t.onBeforeCompile=uy,t.customProgramCacheKey=()=>"seoulful-toon",t}var ih={flapL:["ahead",-24,.8],flapR:["ahead",24,.8],bob:["up",0,.5],spinU:["up",0,.4],spinF:["ahead",0,.6],sway:["side",6,.35],swing:["side",6,.45]},eg={"j-bowtie":[0,-.021,.005],"j-lei":[0,-.005,0]},la={"r-long":[.3,-1.4],"r-wave":[.3,-1.4]},dy=new Set(["r-bob","r-long","r-wave"]),tg=new Set(["w-angel","w-batwing","w-butterfly"]),gy=.01;function ng(i,e,t){let n=i.geometry.getAttribute("position").count,s=new Float32Array(n*3),r=new L;for(let c=0;c<n;c++)i.getVertexPosition(c,r).applyMatrix4(i.matrixWorld),s[3*c]=r.x,s[3*c+1]=r.y,s[3*c+2]=r.z,t(r.x,r.y,r.z);let a=i.geometry.index,o=a?a.count:n;for(let c=0;c+2<o;c+=3){let f=3*(a?a.getX(c):c),l=3*(a?a.getX(c+1):c+1),u=3*(a?a.getX(c+2):c+2),h=Math.max(Math.hypot(s[f]-s[l],s[f+1]-s[l+1]),Math.hypot(s[l]-s[u],s[l+1]-s[u+1]),Math.hypot(s[u]-s[f],s[u+1]-s[f+1])),d=Math.ceil(h/(e/2));if(!(d<2))for(let b=0;b<=d;b++)for(let m=0;b+m<=d;m++){let p=b/d,g=m/d,v=1-p-g;t(v*s[f]+p*s[l]+g*s[u],v*s[f+1]+p*s[l+1]+g*s[u+1],v*s[f+2]+p*s[l+2]+g*s[u+2])}}return s}function Cf(i){for(;i.parent&&!i.parent.isBone;)i=i.parent;return i.name}var sh=new WeakMap;function py(i,[e,t]){if(sh.has(i.geometry))return sh.get(i.geometry);let n=i.skeleton.bones.map(o=>o.name.replace(/^mixamorig:?/,"")),s=n.indexOf("Head"),r=n.indexOf("Neck"),a=null;if(s>=0&&r>=0){let o=i.geometry,c=o.attributes.position,f=c.count,l=new L,u=g=>new L().setFromMatrixPosition(new we().copy(i.skeleton.boneInverses[g]).invert()).y,h=u(s),d=h-u(r),b=new Uint16Array(f*4),m=new Float32Array(f*4);for(let g=0;g<f;g++){let v=Math.min(1,Math.max(0,((l.fromBufferAttribute(c,g).applyMatrix4(i.bindMatrix).y-h)/d-t)/(e-t)));b[4*g]=s,b[4*g+1]=n.length,m[4*g]=v*v*(3-2*v),m[4*g+1]=1-m[4*g]}let p=new Pt;for(let g in o.attributes)p.setAttribute(g,o.attributes[g]);p.setAttribute("skinIndex",new rt(b,4)),p.setAttribute("skinWeight",new rt(m,4)),p.setIndex(o.index);for(let g of o.groups)p.addGroup(g.start,g.count,g.materialIndex);a={geometry:p,inverses:i.skeleton.boneInverses.concat(i.skeleton.boneInverses[s].clone())}}return sh.set(i.geometry,a),a}var my={"w-angel":[.4,1],"w-butterfly":[.6,2],"w-batwing":[.55,1.4]},by=new Set(["eye-white","eye-shade","iris","iris-dark","iris-light","iris-glow","pupil","shine","lash","brow","mouth","mouth-in","tongue","cheek"]);function ig(i,e){let t=new nn({color:e||i.color.clone(),side:i.side});return i.transparent&&(t.transparent=!0,t.opacity=i.opacity,t.depthWrite=!1),t.name=i.name,t}var wg={value:.004};function Eg(i){let e={};return i.emissive.getHSL(e),e.l*(i.emissiveIntensity||0)>.25}function xy(i){let e={};return i.getHSL(e,_t),new Ee().setHSL(e.h,Math.min(1,e.s*.85+.12),Math.max(.04,e.l*.34),_t).lerp(_y,.22)}var _y=new Ee("#3b2620");function yy(i){let e=new nn({color:i,side:Ot});return e.onBeforeCompile=t=>{t.uniforms.olw=wg,t.vertexShader=`uniform float olw;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      #ifdef USE_SKINNING
        vec3 olN = objectNormal;
      #else
        vec3 olN = normal;
      #endif
      mvPosition.xyz += normalize(normalMatrix * olN) * olw;
      gl_Position = projectionMatrix * mvPosition;`)},e.customProgramCacheKey=()=>"seoulful-line",e}function Pf(i){let t=(Array.isArray(i.material)?i.material:[i.material]).map(s=>yy(xy(s.color||new Ee(3355443)))),n=i.isSkinnedMesh?new Ti(i.geometry,Array.isArray(i.material)?t:t[0]):new at(i.geometry,Array.isArray(i.material)?t:t[0]);return i.isSkinnedMesh&&n.bind(i.skeleton,i.bindMatrix),n.frustumCulled=!1,n.userData.line=!0,n.renderOrder=i.renderOrder,i.add(n),n}function Gf(i,e,t,n=.0016){let s=2*(t||i.position.length())*Math.tan(i.fov*it/2)/Math.max(1,e);wg.value=Math.min(.008,Math.max(n,s*1.7))}function vy(i,e){return ma(i,da(Qd[e.s]||Qd["s-1"]))}function My(i,e){let t=i.getAttribute("color"),n=i.index;if(!t||!n||!e.size)return n;let s=new Uint8Array(t.count);for(let c=0;c<t.count;c++){let f=Math.round(t.getX(c)*255)+256*Math.round(t.getY(c)*255);e.has(f)&&(s[c]=1)}let r=n.array,a=new r.constructor(r.length),o=0;for(let c=0;c<r.length;c+=3){let f=r[c],l=r[c+1],u=r[c+2];s[f]&&s[l]&&s[u]||(a[o++]=f,a[o++]=l,a[o++]=u)}return new rt(a.slice(0,o),1)}function Sy(i){let e=new Set;return i.scene.traverse(t=>{let n=t.isMesh&&t.material&&t.material.userData&&t.material.userData.hide;if(n)for(let[s,r]of JSON.parse(n))for(let a=s;a<=r;a++)e.add(a)}),e}var rh=new Map,vn=36;function wy(i,e,t,n){i.updateMatrixWorld(!0);let s=new L;e.getWorldPosition(s);let r=new L,a=(l,u)=>(Math.atan2(u-s.z,l-s.x)/(2*Math.PI)+.5)*vn,o=new Array(vn).fill(1/0);for(let l of t){let u=l.geometry.getAttribute("position"),h=l.geometry.index;if(!h)continue;let d=new Float32Array(u.count*3);for(let m=0;m<u.count;m++)l.getVertexPosition(m,r).applyMatrix4(l.matrixWorld),d[3*m]=r.x,d[3*m+1]=r.y,d[3*m+2]=r.z;let b=h.array;for(let m=0;m<b.length;m+=3){let p=[b[m],b[m+1],b[m+2]];if(p.some(M=>d[3*M+1]>s.y+.3||(d[3*M]-s.x)**2+(d[3*M+2]-s.z)**2>.26*.26))continue;let g=Math.min(d[3*p[0]+1],d[3*p[1]+1],d[3*p[2]+1]),v=p.map(M=>a(d[3*M],d[3*M+2])),A=Math.min(...v),y=Math.max(...v);if(y-A>vn/2){let M=v.map(E=>E<vn/2?E+vn:E);A=Math.min(...M),y=Math.max(...M)}for(let M=Math.floor(A);M<=Math.floor(y);M++){let E=M%vn;g<o[E]&&(o[E]=g)}}}if(o.some(l=>!Number.isFinite(l)))return null;let c=o.map((l,u)=>Math.max(l,o[(u+1)%vn],o[(u+vn-1)%vn])+.004);return{over:n.map(l=>{let u=l.geometry.getAttribute("position").count,h=new Float32Array(u);for(let d=0;d<u;d++){l.getVertexPosition(d,r).applyMatrix4(l.matrixWorld);let b=a(r.x,r.z)-.5,m=(Math.floor(b)+vn)%vn;h[d]=r.y-Math.max(c[m],c[(m+1)%vn])}return new rt(h,1)}),hem:c}}var ah=new Map,Qn=12;function Ey(i,e,t,n){i.updateMatrixWorld(!0);let s=new L,r=e.map(h=>h.getWorldPosition(new L)),a=h=>Math.abs(h-r[0].x)<=Math.abs(h-r[1].x)?0:1,o=(h,d,b)=>(Math.atan2(b-r[h].z,d-r[h].x)/(2*Math.PI)+.5)*Qn,c=[new Array(Qn).fill(1/0),new Array(Qn).fill(1/0)];for(let h of t){let d=h.geometry.getAttribute("position"),b=h.geometry.index;if(!b)continue;let m=new Float32Array(d.count*3);for(let g=0;g<d.count;g++)h.getVertexPosition(g,s).applyMatrix4(h.matrixWorld),m[3*g]=s.x,m[3*g+1]=s.y,m[3*g+2]=s.z;let p=b.array;for(let g=0;g<p.length;g+=3){let v=3*p[g],A=3*p[g+1],y=3*p[g+2],M=(m[v]+m[A]+m[y])/3,E=(m[v+2]+m[A+2]+m[y+2])/3,T=a(M);if((M-r[T].x)**2+(E-r[T].z)**2>.16*.16)continue;let x=Math.min(m[v+1],m[A+1],m[y+1]),w=Math.floor(o(T,M,E))%Qn;x<c[T][w]&&(c[T][w]=x)}}let f=c.map(h=>h.map((d,b)=>{let m=[d,h[(b+1)%Qn],h[(b+Qn-1)%Qn]].filter(Number.isFinite);return m.length?Math.max(...m)+.004:1/0})),l=!1,u=n.map(h=>{let d=h.geometry.getAttribute("position").count,b=new Float32Array(d);for(let m=0;m<d;m++){h.getVertexPosition(m,s).applyMatrix4(h.matrixWorld);let p=a(s.x),g=(Math.floor(o(p,s.x,s.z)-.5)+Qn)%Qn;b[m]=s.y-Math.max(f[p][g],f[p][(g+1)%Qn]),b[m]>0&&(l=!0)}return new rt(b,1)});return l?{over:u}:null}function Ay(i,e,t,n){i.forEach((s,r)=>{let a=s.geometry,o=new Pt;for(let f in a.attributes)o.setAttribute(f,a.attributes[f]);o.setAttribute(t,e[r]),o.setIndex(a.index),o.boundingSphere=a.boundingSphere,s.geometry=o;let c=(f,l)=>{let u=f.onBeforeCompile,h=f.customProgramCacheKey?f.customProgramCacheKey():"";f.onBeforeCompile=(d,b)=>{u&&u(d,b),d.vertexShader="attribute float "+t+`;
varying float v_`+t+`;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
v_`+t+" = "+t+";"),d.fragmentShader="varying float v_"+t+`;
`+d.fragmentShader.replace("void main() {",`void main() {
if (v_`+t+" > 0.0) discard;")},f.customProgramCacheKey=()=>h+"|"+l};(Array.isArray(s.material)?s.material:[s.material]).forEach(f=>c(f,n));for(let f of s.children)f.userData.line&&(f.geometry=o,(Array.isArray(f.material)?f.material:[f.material]).forEach(l=>c(l,n+"-line")))})}var Ag=i=>i+"/body.glb";function Tg(i){let e=["r","u","l","k","h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&Rt.parts[o]),t=Rt.props||[],n=["h","e","j","w","x","a"].map(o=>i[o]).filter(o=>o&&!Rt.parts[o]&&t.includes(o)),s=i.m&&hs[i.m],r=s&&t.includes(s)&&!n.includes(s)?s:"";r&&n.push(r);let a=[...new Set(n.map(o=>o[0]))];return{ids:e,want:n,mp:r,groups:a}}function Cg(i){let e=_h(i||{}),{ids:t,groups:n}=Tg(e);return Promise.all([Ag(e.g),...t.map(s=>e.g+"/"+s+".glb"),...n.map(s=>e.g+"/props-"+s+".glb")].map(pa))}var gh=class{constructor(e){this.look=_h(e||{}),this.root=new wt,this.bones={},this.meshes=[],this.move=null,this.t0=0,this.worn={},this.grown=[]}async build(){let e=this.look,{ids:t,want:n,mp:s,groups:r}=Tg(e),[a,...o]=await Promise.all([pa(Ag(e.g)),...t.map(h=>pa(e.g+"/"+h+".glb"))]),c=_f(a.scene);if(this.root.add(c),this.root.add(Sg()),c.traverse(h=>{h.isBone&&(this.bones[h.name.replace(/^mixamorig:?/,"")]=h)}),this.bones.Spine2&&this.bones.Head){let h=new Ci;h.name="HairLow",this.bones.Spine2.add(h),this.bones.HairLow=h}let f=new Set;o.forEach(h=>Sy(h).forEach(d=>f.add(d)));let l=null;if(this.face=[],c.traverse(h=>{if(!h.isMesh||h.userData.line)return;let d=h.material.name;d==="skin"?(h.material=vy(h.material,e),h.geometry.getAttribute("color")&&(l=h,h.geometry=h.geometry.clone(),h.geometry.setIndex(My(h.geometry,f)),Pf(h))):by.has(d)?(h.material=ig(h.material,d==="brow"?da(Af[e.c]||Af["c-black"]).lerp(da("#241812"),.45):null),d==="cheek"&&(h.material.transparent=!0,h.material.depthWrite=!1,h.renderOrder=1)):h.material=ma(h.material),h.morphTargetDictionary&&this.face.push(h),h.frustumCulled=!1,this.meshes.push(h)}),o.forEach((h,d)=>this.wear(t[d],h,l)),this.loose(),this.shod(),this.moveProps=[],this.held=[],this.grips=[],this.alive=[],this.tossed=[],this.glasses=[],this.packs=[],(await Promise.all(r.map(h=>pa(e.g+"/props-"+h+".glb")))).forEach(h=>this.attach(h,n,s)),this.fitHead(),await this.tuck(),this.tall($d[e.z]||1),this.lowRest(),this.onHair(),this.cuffs(),la[e.r])for(let h of this.alive)h.kind==="swing"&&(h.k=[0,h.k[1]]);return this.root.traverse(h=>{!h.isSkinnedMesh||h.frustumCulled||h.boundingSphere||(h.geometry.boundingSphere||h.geometry.computeBoundingSphere(),h.boundingSphere=h.geometry.boundingSphere.clone())}),this.ready=!0,this}wear(e,t,n){let s=e[0]==="r",r=(Rt.props||[]).includes(this.look.h);t.scene.traverse(a=>{if(!a.isSkinnedMesh||s&&r&&/~top$/.test(a.material.name))return;let o=a.skeleton.bones.map(h=>this.bones[h.name.replace(/^mixamorig:?/,"")]||this.bones.Head),c=/^p\d/.test(a.material.name)?+String(a.material.name).replace(/^p(\d+).*/,"$1"):-1,f=s&&c===1?ig(a.material,da(Zd[this.look.c]||Zd["c-black"])):ma(a.material,s&&c===0?da(Af[this.look.c]||Af["c-black"]):null);if(f.side=cn,s)c===1&&(f.polygonOffset=!0,f.polygonOffsetFactor=-1,f.polygonOffsetUnits=-1);else{let h={u:2+Math.max(0,c),k:4}[e[0]]||0;h&&(f.polygonOffset=!0,f.polygonOffsetFactor=-h,f.polygonOffsetUnits=-h)}let l=s&&this.bones.HairLow&&la[e]?py(a,la[e]):null,u=new Ti(l?l.geometry:a.geometry,f);u.bind(new $i(l?o.concat(this.bones.HairLow):o,l?l.inverses:a.skeleton.boneInverses),a.bindMatrix),u.frustumCulled=!1,u.userData.part=e,(n?n.parent:this.root).add(u),this.meshes.push(u),!(s&&c===1)&&!f.transparent&&Pf(u),s||(u.userData.piece=c,(this.worn[e[0]]=this.worn[e[0]]||[]).push(u))})}loose(){let e=this.look,t=Rt.parts[e.u]||{},n=this.worn.u,s=this.worn.l;if(n&&t.full&&(s=n.filter(c=>c.userData.piece===1),n=n.filter(c=>c.userData.piece===0)),!n||!n.length||!s||!s.length||!this.bones.Hips||t.tucked)return;let r=e.g+"|"+e.u+"|"+(t.full?"":e.l);rh.has(r)||rh.set(r,wy(this.root,this.bones.Hips,n,s));let a=rh.get(r);if(!a)return;this.hem=a.hem;let o=a.over;s.forEach((c,f)=>{let l=c.geometry,u=new Pt;for(let d in l.attributes)u.setAttribute(d,l.attributes[d]);u.setAttribute("overHem",o[f]),u.setIndex(l.index),u.boundingSphere=l.boundingSphere,c.geometry=u;let h=(d,b)=>{let m=d.onBeforeCompile;d.onBeforeCompile=(p,g)=>{m&&m(p,g),p.vertexShader=`attribute float overHem;
varying float vOverHem;
`+p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vOverHem = overHem;`),p.fragmentShader=`varying float vOverHem;
`+p.fragmentShader.replace("void main() {",`void main() {
if (vOverHem > 0.0) discard;`)},d.customProgramCacheKey=()=>b};h(c.material,"seoulful-under-top");for(let d of c.children)d.userData.line&&(d.geometry=u,(Array.isArray(d.material)?d.material:[d.material]).forEach(b=>h(b,"seoulful-under-top-line")))})}shod(){let e=this.look,t=Rt.parts[e.u]||{},n=t.full?this.worn.u:this.worn.l,s=this.worn.k,r=[this.bones.LeftFoot,this.bones.RightFoot];if(!n||!n.length||!s||!s.length||!r[0]||!r[1])return;let a=e.g+"|"+(t.full?e.u:e.l)+"|"+e.k;ah.has(a)||ah.set(a,Ey(this.root,r,n,s));let o=ah.get(a);o&&Ay(s,o.over,"overLeg","seoulful-in-leg")}attach(e,t,n){let s=[];e.scene.traverse(r=>{let a=r.name&&t.find(o=>r.name===o);a&&r.parent&&s.push([a,r])});for(let[r,a]of s){let o=this.bones[a.parent.name.replace(/^mixamorig:?/,"")];if(!o)continue;let c=a.clone();c.traverse(l=>{l.frustumCulled=!1;let u=l.name.split("~")[1];ih[u]&&this.alive.push({node:l,kind:u,k:my[r]||[1,1],kept:/^(flap|sway)/.test(u)}),u==="toss"&&this.tossed.push({node:l}),u==="pack"&&this.packs.push(l),!(!l.isMesh||l.userData.line)&&(l.material=ma(l.material),!l.material.transparent&&!Eg(l.material)&&Pf(l))});let f=r[0]==="a"?this.grip(o,c):r===n?this.about(o,c,r[0]==="e"):(o.add(c),c);r===n?(f.visible=!1,f.userData.s0=f.scale.x,this.moveProps.push(f)):r[0]==="a"?this.held.push(f):r[0]==="e"&&this.glasses.push(f),r==="j-pearl"&&dy.has(this.look.r)&&(f.visible=!1)}}about(e,t,n){e.add(t),this.root.updateMatrixWorld(!0);let s=new Et().setFromObject(t,!0),r=s.getCenter(new L);n&&(r.z=s.max.z);let a=e.worldToLocal(r),o=new wt;return o.position.copy(a),t.position.sub(a),e.add(o),o.add(t),o}grip(e,t){let n=Rt.bodies&&Rt.bodies[this.look.g];if(!n||!n.fist)return e.add(t),t;t.updateMatrix();let s=new L().fromArray(n.fist).applyMatrix4(t.matrix),r=Ly[t.name];if(r){this.root.updateMatrixWorld(!0);let o=new L(0,0,1).transformDirection(this.root.matrixWorld).transformDirection(new we().copy(e.matrixWorld).invert()),c=new dt().setFromAxisAngle(o,r*it);t.position.sub(s).applyQuaternion(c).add(s),t.quaternion.premultiply(c),t.updateMatrix()}let a=new wt;return a.position.copy(s),t.position.sub(s),a.add(t),a.userData.id=t.name,e.add(a),this.grips.push(a),a}lowRest(){let e=this.bones,t=e.HairLow;if(!t)return;let n={},s=this.root.position.clone(),r=this.root.quaternion.clone();for(let a in e)n[a]=[e[a].quaternion.clone(),e[a].position.clone()];ha(this,fa(0),1),this.root.updateMatrixWorld(!0),new we().copy(e.Spine2.matrixWorld).invert().multiply(e.Head.matrixWorld).decompose(t.position,t.quaternion,new L);for(let a in n)a!=="HairLow"&&(e[a].quaternion.copy(n[a][0]),e[a].position.copy(n[a][1]));this.root.position.copy(s),this.root.quaternion.copy(r),this.q0.HairLow=t.quaternion.clone(),this.p0.HairLow=t.position.clone(),this.root.updateMatrixWorld(!0)}onHair(){let e=this.look,t=$d[e.z]?e.z:"z-3",n=ca[e.g]&&ca[e.g][t]&&ca[e.g][t][e.r];if(!n)return;let s=[];for(let u of this.packs)n[Cf(u)]&&s.push([u,n[Cf(u)]]);if(la[e.r]&&this.root.traverse(u=>{!u.isBone&&tg.has(u.name)&&n[u.name]&&u.parent&&u.parent.isBone&&s.push([u,n[u.name]])}),!s.length)return;let r=this.bones,a={},o=this.root.position.clone(),c=this.root.quaternion.clone();for(let u in r)a[u]=[r[u].quaternion.clone(),r[u].position.clone(),r[u].scale.clone()];ha(this,fa(0),1);for(let u of["Head","HairLow"])r[u]&&r[u].scale.setScalar(ga);this.root.updateMatrixWorld(!0);let f=new L,l=s.map(([u,h])=>(u.getWorldPosition(f),f.z-=h,[u,u.parent.worldToLocal(f.clone())]));for(let u in a)r[u].quaternion.copy(a[u][0]),r[u].position.copy(a[u][1]),r[u].scale.copy(a[u][2]);this.root.position.copy(o),this.root.quaternion.copy(c);for(let[u,h]of l)u.position.copy(h);this.root.updateMatrixWorld(!0)}backMeasure(){let e=this.meshes.filter(T=>/^r-/.test(T.userData.part||"")),t=[],n={};if(this.root.traverse(T=>{!T.isBone&&tg.has(T.name)&&T.parent&&T.parent.isBone&&t.push(T)}),!this.packs.length&&!t.length)return null;if(!e.length||!this.bones.Head)return n;let s=la[this.look.r]?t:[];if(!this.packs.length&&!s.length)return n;let r=this.bones,a={},o=this.root.position.clone(),c=this.root.quaternion.clone();for(let T in r)a[T]=[r[T].quaternion.clone(),r[T].position.clone(),r[T].scale.clone()];ha(this,fa(0),1);for(let T of["Head","HairLow"])r[T]&&r[T].scale.setScalar(ga);this.root.updateMatrixWorld(!0);let f=.01,l=new Map,u=[],h=[],d=[],b=e.map(T=>ng(T,f,(x,w,C)=>{let R=Math.round(x/f),F=Math.round(w/f),P=R*8192+F,D=l.get(P);D===void 0?(l.set(P,u.length),u.push(R),h.push(F),d.push(C)):C<d[D]&&(d[D]=C)})),m=1/0,p=-1/0,g=1/0,v=-1/0;for(let T=0;T<u.length;T++)m=Math.min(m,u[T]-1),p=Math.max(p,u[T]+1),g=Math.min(g,h[T]-1),v=Math.max(v,h[T]+1);let A=u.length?p-m+1:0,y=u.length?v-g+1:0,M=new Float64Array(A*y).fill(1/0);for(let T=0;T<u.length;T++)for(let x=-1;x<=1;x++)for(let w=-1;w<=1;w++){let C=(u[T]+x-m)*y+h[T]+w-g;d[T]<M[C]&&(M[C]=d[T])}let E=T=>{let x=0;return T.traverse(w=>{w.isMesh&&ng(w,f,(C,R,F)=>{let P=Math.round(C/f)-m,D=Math.round(R/f)-g;if(P<0||P>=A||D<0||D>=y)return;let O=F-M[P*y+D]+gy;O>x&&(x=O)})}),x};if(this.packs.length){let T=new Et;for(let C of this.packs)T.expandByObject(C,!0);let x=1/0,w=-1/0;for(let C of b)for(let R=0;R<C.length;R+=3)C[R+1]<T.min.y||C[R+1]>T.max.y||C[R+2]>T.max.z||(C[R]<x&&(x=C[R]),C[R]>w&&(w=C[R]));if(w-x>=(T.max.x-T.min.x)*.9){let C=Math.max(...this.packs.map(E));for(let R of this.packs)n[Cf(R)]=Math.max(n[Cf(R)]||0,C)}}for(let T of s){let x=(this.alive||[]).filter(C=>{for(let R=C.node;R;R=R.parent)if(R===T)return!!C.axis;return!1}),w=E(T);for(let C of[.25,.5,.75,1]){for(let R of x){let[F,P]=ih[R.kind];R.node.quaternion.setFromAxisAngle(R.axis[F],P*R.k[0]*it*C).multiply(R.q0)}this.root.updateMatrixWorld(!0),w=Math.max(w,E(T))}for(let C of x)C.node.quaternion.copy(C.q0);this.root.updateMatrixWorld(!0),n[T.name]=w}for(let T in a)r[T].quaternion.copy(a[T][0]),r[T].position.copy(a[T][1]),r[T].scale.copy(a[T][2]);return this.root.position.copy(o),this.root.quaternion.copy(c),this.root.updateMatrixWorld(!0),n}fitHead(){let e=this.bones.Head,t=this.look,n=Yl[t.g];if(!e||!n)return;let s=new L,r=new Fe,a=new we,o=!1,c=(m,p)=>{o||(this.root.updateMatrixWorld(!0),o=!0),m.position.add(s.fromArray(p).applyMatrix3(r.setFromMatrix4(a.copy(m.parent.matrixWorld).invert().multiply(e.matrixWorld))))},f=m=>m.name||m.children[0]&&m.children[0].name||"";for(let m of this.glasses.concat(this.moveProps)){let p=n.e[f(m)];p&&c(m,p)}for(let m of this.all?Object.keys(eg):[t.j]){let p=eg[m];if(!p)continue;let g=null;this.root.traverse(v=>{!g&&v.name===m&&!v.isBone&&(g=v)}),g&&c(g,p)}if(this.all)return;let l=Rt.props||[],u=l.includes(t.h)&&l.includes(t.x)?n.x[t.h+"|"+t.x]:void 0,h=Ql[t.g];for(let m of[t.h,t.x]){let p=t.r&&m&&(m===t.h||!t.h),g=p&&n.r?n.r[t.r+"|"+m]:void 0,v=p&&h?h.t[t.r+"|"+m]:void 0;if(!g&&!v)continue;let A=null;if(this.root.traverse(y=>{!A&&y.name===m&&!y.isBone&&(A=y)}),!!A){if(g&&g.length===3)c(A,g);else if(g&&A.parent===e){let y=new L().fromArray(n.c),M=new L(g[0],g[1],g[2]);if(A.position.sub(y).multiply(M).add(y),A.position.y+=g[3],A.position.z+=g[4],A.scale.multiply(M),g[5]){let E=new dt().setFromEuler(new rn(g[5],0,0));A.position.sub(y).applyQuaternion(E).add(y),A.quaternion.premultiply(E)}}v&&(this.root.updateMatrixWorld(!0),gv(A,e,h.c,v))}}let d=u;if(d===void 0)return;let b=null;this.root.traverse(m=>{!b&&m.name===t.x&&!m.isBone&&(b=m)}),b&&(d===0?b.visible=!1:c(b,d))}async tuck(){let e=this.look,t=th[e.g],n=this.bones.Head,s=Yl[e.g];if(this.all||!t||!n||!s||!s.c||!e.h)return;let r=!!e.r&&t.r.includes(e.h+"|"+e.r),a=!!e.x&&t.b.includes(e.h+"|"+e.x),o=e.x?t.x[e.h+"|"+e.x]:null;if(!r&&!a&&!o)return;let c=x=>{let w=null;return this.root.traverse(C=>{!w&&C.name===x&&!C.isBone&&(w=C)}),w},f=new L().fromArray(s.c);if(o){let x=c(e.x);if(x&&x.parent===n){let w=Math.PI/180,C=new dt().setFromEuler(new rn(o[0]*w,o[1]*w,o[2]*w,"ZYX"));x.position.sub(f).applyQuaternion(C).add(f),x.quaternion.premultiply(C)}}if(!r&&!a)return;let l=c(e.h);if(!l)return;this.root.updateMatrixWorld(!0);let u=new we().copy(n.matrixWorld).invert(),h=new L().setFromMatrixScale(n.matrixWorld).x||1,d=s.c,b=e.g+"|"+e.h+"|"+(e.r||""),m=Gi.get(b);m||Gi.set(b,m=dv(l,u,.004/h,d).then(x=>(Gi.set(b,x),x))),m instanceof Promise&&(m=await m);let p=new we,g=new we,v=new L,A=async(x,w,C)=>{let R=Gi.get(C);if(R===void 0){let F=x.geometry.attributes.position,P=new Float32Array(F.count*3);for(let D=0;D<F.count;D++)v.fromBufferAttribute(F,D).applyMatrix4(p),P[3*D]=v.x,P[3*D+1]=v.y,P[3*D+2]=v.z;if(await T(),Xd(P,d,w)){await T(),g.copy(p).invert();for(let D=0;D<F.count;D++)v.set(P[3*D],P[3*D+1],P[3*D+2]).applyMatrix4(g),P[3*D]=v.x,P[3*D+1]=v.y,P[3*D+2]=v.z;R=P}else R=null;Gi.set(C,R)}return R},y=(x,w)=>{let C=x.clone();return C.setAttribute("position",new rt(w,3)),C.boundingSphere=null,C.computeBoundingBox(),C.computeBoundingSphere(),C},M=async(x,w,C,R)=>{let F=x.geometry,P=await A(x,w,C),D=R&&x.children.some(V=>V.userData.line)?await A(x,R,C+"|line"):null;if(!P&&!D)return;await T();let O=P?y(F,P):F,k=D?y(F,D):O;for(let V of[x,...x.children])if(V===x||V.geometry===F){let te=V.userData.line?k:O;te!==F&&(V.geometry=te,V.userData.bent=!0)}},E=performance.now(),T=async()=>{performance.now()-E>bh&&(await Nf(),E=performance.now())};if(r){let x=m.hair||(m.hair=$l(m,1,.002/h));await T();let w=m.line||(m.line=$l(m,1,(.002+.008)/h));await T();for(let C of this.meshes){if(!C.isSkinnedMesh||C.userData.part!==e.r)continue;let R=C.skeleton.bones.indexOf(n);R<0||(p.multiplyMatrices(C.skeleton.boneInverses[R],C.bindMatrix),await M(C,x,"r|"+b+"|"+C.geometry.uuid,w),await T())}}if(a){let x=c(e.x);if(!x)return;let w=m.band||(m.band=eh(m.lo,3,.011/h));await T();let C=[];x.traverse(R=>{R.isMesh&&!R.isSkinnedMesh&&!R.userData.line&&R.geometry&&R.geometry.attributes.position&&C.push(R)});for(let R of C)p.multiplyMatrices(u,R.matrixWorld),await M(R,w,"b|"+b+"|"+e.x+"|"+R.geometry.uuid),await T()}}cuffs(){let e=this.look,t=Mt["m-wai"],n=this.bones,s=5e-4,r=/^(Left|Right)(Arm|ForeArm|Hand)$/;if(this.all||!e.u||!t||!n.Spine2||!n.LeftArm)return;let a=this.meshes.filter(f=>f.isSkinnedMesh&&f.userData.part===e.u),o=f=>"c|"+e.g+"|"+e.z+"|"+e.u+"|"+f.geometry.uuid,c=a.filter(f=>Gi.get(o(f))===void 0);if(c.length){let f=this.held,l=this.turn;this.held=[],this.turn=0,this.at("m-wai",t.still),this.root.updateMatrixWorld(!0);let u=new L,h=new L,d=new L,b=new we,m=new we,p=new we;n.Spine2.getWorldPosition(u),h.setFromMatrixColumn(n.Spine2.matrixWorld,0).normalize();let g=Math.sign(n.LeftArm.getWorldPosition(d).sub(u).dot(h))||1;for(let v of c){let A=v.geometry,y=A.attributes.position,M=A.attributes.skinIndex,E=A.attributes.skinWeight,T=v.skeleton.bones,x=v.skeleton.boneInverses,w=T.map(R=>{let F=R.name.replace(/^mixamorig:?/,"");return r.test(F)?F[0]==="L"?g:-g:0}),C=null;p.multiplyMatrices(v.matrixWorld,v.bindMatrixInverse);for(let R=0;R<y.count;R++){let F=-1,P=0;for(let k=0;k<4;k++){let V=E.getComponent(R,k);V>P&&(P=V,F=M.getComponent(R,k))}let D=w[F];if(!D)continue;v.getVertexPosition(R,d).applyMatrix4(v.matrixWorld);let O=s-D*d.sub(u).dot(h);if(!(O<=0)){b.elements.fill(0);for(let k=0;k<4;k++){let V=E.getComponent(R,k);if(!V)continue;let te=M.getComponent(R,k);m.multiplyMatrices(T[te].matrixWorld,x[te]);for(let K=0;K<16;K++)b.elements[K]+=V*m.elements[K]}if(b.premultiply(p).multiply(v.bindMatrix).setPosition(0,0,0).invert(),!C){C=new Float32Array(y.count*3);for(let k=0;k<y.count;k++)d.fromBufferAttribute(y,k),C[3*k]=d.x,C[3*k+1]=d.y,C[3*k+2]=d.z}d.copy(h).multiplyScalar(D*O).applyMatrix4(b),C[3*R]+=d.x,C[3*R+1]+=d.y,C[3*R+2]+=d.z}}Gi.set(o(v),C)}this.held=f,this.turn=l,this.at("",0)}for(let f of a){let l=Gi.get(o(f)),u=f.geometry;if(!l)continue;let h=u.clone();h.setAttribute("position",new rt(l,3)),h.boundingSphere=null,h.computeBoundingBox(),h.computeBoundingSphere();for(let d of[f,...f.children])(d===f||d.geometry===u)&&(d.geometry=h,d.userData.bent=!0)}}tall(e){let t=this.bones;t.Hips&&(t.Hips.position.y*=1+(e-1)*1);for(let n of oy)t[n]&&t[n].position.multiplyScalar(e);for(let n of["LeftUpLeg","RightUpLeg"])t[n]&&(t[n].position.y*=e);this.rest()}rest(){let e=this.bones;this.root.updateMatrixWorld(!0),this.q0={},this.p0={},this.frame(),ha(this,oa,1),this.root.updateMatrixWorld(!0),this.frame();for(let t of this.grips||[])t.userData.rest=ch(this.root,t.parent,new dt);for(let t of this.tossed||[])t.p0||(t.p0=t.node.position.clone(),t.q0=t.node.quaternion.clone());for(let t of this.alive||[]){let n=ch(this.root,t.node.parent,new dt).invert();t.q0||(t.q0=t.node.quaternion.clone(),t.p0=t.node.position.clone()),t.axis={up:new L(0,1,0),ahead:new L(0,0,1),side:new L(1,0,0)};for(let s in t.axis)t.axis[s].applyQuaternion(n)}}frame(){let e=this.bones;this.A={};for(let t in e){let n=e[t];this.q0[t]=n.quaternion.clone(),this.p0[t]=n.position.clone();let s=new dt;n.parent&&n.parent.getWorldQuaternion(s);let r=new dt;this.root.getWorldQuaternion(r),this.A[t]=r.invert().multiply(s).invert()}}busyHand(){return this.busy==null&&(this.busy=!!(this.held.length&&this.moveProps.some(e=>e.parent===this.held[0].parent))),this.busy}at(e,t,n){let s=this.bones;for(let m of this.grown)m.matrixAutoUpdate=!0;this.grown.length=0;for(let m in s)s[m].quaternion.copy(this.q0[m]),s[m].position.copy(this.p0[m]),s[m].scale.setScalar(m==="Head"||m==="HairLow"?ga:1);this.root.position.set(0,0,0),this.root.rotation.set(0,this.turn||0,0),this.root.scale.set(1,1,1);let r=e&&Mt[e],a=r?Math.min(t,r.ms)/r.ms:0,o=!!(r&&r.stow&&this.held&&this.held.length),c=!o&&r&&r.held&&this.held&&this.held.length&&!(hs[e]&&this.moveProps&&this.moveProps.length&&this.busyHand())?r.held:null,f=r?c?c(a,t):r.at(a,t,this.look):fa(t),l=!!(r&&this.moveProps&&this.moveProps.length&&hs[e]),u=l?Cy(a,hs[e][0]==="e",n):1;this.moveProps&&this.moveProps.forEach(m=>{m.visible=l&&u>.05,m.scale.setScalar((m.userData.s0||1)*Math.max(.001,u))});let h=this.holdTable||Vd,d=m=>r&&h[e]&&h[e][m]||h[""]&&h[""][m];if(this.held&&this.held.length){let m=l&&this.busyHand(),p=r?a*r.ms:0;for(let g of this.held){let v=o?0:m?1-u:this.hideNone?1:Py(r&&h[e]&&h[e][g.userData.id],p,r&&r.ms);g.visible=v>.05,g.scale.setScalar(Math.max(.001,v))}}let b=r&&!c?1-Ry(a):1;if(b>0&&this.held&&this.held.length){let m=f.RightArm||[0,0,0];f=Object.assign({},f,{RightArm:[m[0],m[1],m[2]-Dy*b]})}if(this.glasses&&this.glasses.forEach(m=>{m.visible=!l||hs[e][0]!=="e"||u<=.05}),this.looks(r&&zd[e]||"",r?Iy(a):0,r||this.blinks?t:1e3),ha(this,f,1),this.root.updateMatrixWorld(!0),this.grips&&this.grips.length){for(let m of this.grips){let p=this.tiltNow||Fy(d(m.userData.id),a);rg.setFromUnitVectors(Ny,By.set(p[0],p[1],p[2]).normalize()),m.quaternion.copy(ch(this.root,m.parent,Oy).invert().multiply(rg).multiply(m.userData.rest))}this.root.updateMatrixWorld(!0)}if(this.tossed&&this.tossed.length){let[m,p]=l&&f.toss||[0,0];for(let g of this.tossed){if(!g.p0||(g.node.position.copy(g.p0),g.node.quaternion.copy(g.q0),!m&&!p))continue;let v=g.node.parent,A=v.localToWorld(Rg.copy(g.p0));A.y+=m,g.node.position.copy(v.worldToLocal(A)),this.root.getWorldQuaternion(fh),cg.set(1,0,0).applyQuaternion(fh).applyQuaternion(v.getWorldQuaternion(fh).invert()).normalize(),g.node.quaternion.setFromAxisAngle(cg,p*it).multiply(g.q0)}this.root.updateMatrixWorld(!0)}if(this.alive&&this.alive.length&&this.alive[0].axis){let m=this.blinks?performance.now()/1e3:0;for(let p of this.alive){let[g,v,A]=ih[p.kind],y=this.phase!=null?this.phase:2*Math.PI*A*p.k[1]*m;p.node.position.copy(p.p0),p.kind==="bob"&&p.node.position.addScaledVector(p.axis.up,.007*Math.sin(y));let M=v?v*p.k[0]*it*(p.kind==="sway"?Math.sin(y):(1-Math.cos(y))/2):y;p.node.quaternion.setFromAxisAngle(p.axis[g],p.kind==="bob"?0:M).multiply(p.q0),p.kept&&p.node.scale.setScalar(1/this.root.scale.x)}this.root.updateMatrixWorld(!0)}}looks(e,t,n){if(!this.face.length)return;let s={};for(let r of String(e||"").split(" "))for(let a of Ty[r]||[])s[a]=Math.max(s[a]||0,t);if(!e){let r=n%3600,a=r<150?Math.sin(r/150*Math.PI):0;s["blink-L"]=s["blink-R"]=a}for(let r of this.face){let a=r.morphTargetDictionary,o=r.morphTargetInfluences;for(let c in a)o[a[c]]=s[c]||0}}dispose(){this.root&&this.root.traverse(e=>{e.userData&&e.userData.bent&&e.geometry&&e.geometry.dispose()}),this.root.traverse(e=>{e.isMesh&&e.material&&(e.material.dispose(),e.geometry&&e.geometry.index&&e.material.name==="skin"&&e.geometry.dispose())}),this.root.removeFromParent()}},Ty={happy:["happy-L","happy-R"],wink:["happy-R"],open:["open"],tongue:["tongue"],puff:["puff"],dizzy:["blink-L","blink-R"]},oh=1-.03-.22;function Cy(i,e,t){let n=l=>(l=l<0?0:l>1?1:l,l*l*(3-2*l)),s=!t||t.first,r=t?t.off:0,a=s?e?i>0?1:0:n((i-.03)/.12):1;if(r==null)return a;if(e)return i<1?a:0;let o=Math.min(r,.999),c=o>oh?oh+(i-o)*(1-oh)/(1-o):i,f=n((1-c-.03)/.22);return a*f*f}function Ry(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.1)*e((1-i)/.1)}function Iy(i){let e=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t));return e(i/.12)*e((1-i)/.12)}var Dy=18,Ly={"a-balloon":16,"a-candy":-10,"a-krathong":10};function Fy(i,e){let t=i&&i.d;if(!t||!t.length)return Uy;let n=0;for(;n<t.length-1&&t[n+1][0]<=e;)n++;let s=t[n],r=t[Math.min(n+1,t.length-1)],a=r[0]>s[0]?Math.min(1,Math.max(0,(e-s[0])/(r[0]-s[0]))):0,o=s[1]?s[2]:r[2],c=r[1]?r[2]:s[2],f=(s[1]+(r[1]-s[1])*a)*it,l=(o+(c-o)*a)*it;return[-Math.sin(f)*Math.cos(l),Math.cos(f),Math.sin(f)*Math.sin(l)]}function Py(i,e,t){let n=i&&i.hide;if(!n)return 1;let s=1;for(let[r,a]of n){let o=Math.max(1,Math.min(sg,r)),c=Math.max(1,Math.min(sg,(t||1/0)-a)),f=e<r?(r-e)/o:e>a?(e-a)/c:0,l=f>=1?1:f*f*(3-2*f);l<s&&(s=l)}return s}var sg=120,Ny=new L(0,1,0),Uy=[0,1,0],rg=new dt,By=new L,ag=new dt,og=new rn,Oy=new dt,fg=new dt,fh=new dt,Rg=new L,cg=new L;function ch(i,e,t){return i.getWorldQuaternion(fg),e.getWorldQuaternion(t),t.premultiply(fg.invert())}var it=Math.PI/180;function ha(i,e,t){let n=i.bones;for(let s in e){let r=n[s];if(!r)continue;let a=e[s];og.set(a[0]*it*t,a[1]*it*t,a[2]*it*t,"YXZ"),ag.setFromEuler(og);let o=i.A[s];r.quaternion.copy(o).multiply(ag).multiply(o.clone().invert()).multiply(i.q0[s])}e.root&&i.root.position.set(e.root[0]||0,e.root[1]||0,e.root[2]||0),e.turn&&(i.root.rotation.y+=e.turn*it),e.tilt&&(i.root.rotation.x=(e.tilt[0]||0)*it,i.root.rotation.z=(e.tilt[1]||0)*it),e.size&&i.root.scale.set(e.size[0],e.size[1],e.size[2]),e.grow&&ky(i,e.grow)}var lg=new we,Gy=new we;function ky(i,e){for(let t in e){let n=i.bones[t];if(n){hg(i,e,n);for(let s=0;s<n.children.length;s++)hg(i,e,n.children[s])}}}function hg(i,e,t){if(i.grown.includes(t))return;let n=ug(i,e,t),s=ug(i,e,t.parent);!n&&!s||(t.matrix.makeTranslation(t.position.x,t.position.y,t.position.z),s&&t.matrix.multiply(lg.makeScale(1/s[0],1/s[1],1/s[2])),t.matrix.multiply(Gy.compose(Rg.set(0,0,0),t.quaternion,t.scale)),n&&t.matrix.multiply(lg.makeScale(n[0],n[1],n[2])),t.matrixAutoUpdate=!1,i.grown.push(t))}function ug(i,e,t){if(t){for(let n in e)if(i.bones[n]===t)return e[n]}return null}var Qt=null,bt=null,gs=null,Un=null,Zn=null,ua=null;function rw(){if(ua!==null)return!ua;try{ua=!Hi().getContext()}catch{ua=!0}return!ua}function Hi(){if(Qt)return Qt;Qt=new mf({antialias:!0,alpha:!0,powerPreference:"default",preserveDrawingBuffer:!1}),Qt.outputColorSpace=_t,Qt.toneMapping=qr,Qt.toneMappingExposure=.92,Qt.setClearColor(0,0);let i=Qt.render;Qt.render=function(n,s){i.call(this,n,s),Mh()},bt=new Qi,bt.environmentIntensity=.42,bt.add(new zr(16774378,12167062,.95));let e=new Pi(16772829,1.9);e.position.set(1.6,3.2,3),bt.add(e);let t=new Pi(16777215,.9);return t.position.set(-1.2,2.6,-2.4),bt.add(t),gs=new St(18,.5,.1,30),Un=new St(18,.5,.1,30),Zn=new St(18,1,.01,10),Qt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),Nt=!0,window.dispatchEvent(new Event("c3-lost"))}),Qt.domElement.addEventListener("webglcontextrestored",()=>{Nt=!1,bt.environment&&(bt.environment=Ig()),window.dispatchEvent(new Event("c3-back"))}),Qt}function Ig(){let i=new ar(Qt),e=i.fromScene(new Sf,.04).texture;return i.dispose(),e}function Dg(){bt.environment||(bt.environment=Ig())}var Nt=!1,ps={low:-.04,high:1.42},bs={side:.18,top:.16};function Lg(i,e,t,n){let s=ps.high-ps.low,r=n||{};i.aspect=e/t,i.fov=r.fov||18;let a=s/2/Math.tan(i.fov*it/2)/(r.zoom||1),o=r.y!=null?r.y:(ps.low+ps.high)/2,c=r.x||0;i.position.set(c,o+(r.up!=null?r.up:.1),a),i.lookAt(c,o,0),i.updateProjectionMatrix()}var dg={head:["Head",.226*ga,1.55/ga],chest:["Spine2",0,2.3]};function Hy(i,e){let[t,n,s]=dg[e]||dg.head,r=new L;return i.bones[t]&&i.bones[t].getWorldPosition(r),{y:r.y+n,zoom:s,up:.02}}var hn=new Map;async function yh(i){let e=xa(i),t=hn.get(e);if(t)return hn.delete(e),hn.set(e,t),t;let n=[Ht&&Ht.fig,ur].find(s=>s&&s.lookKey===e);if(n)n.gone=!1,t=Promise.resolve(n);else{let s=new gh(i);s.lookKey=e,t=s.build()}for(hn.set(e,t),t.catch(()=>{hn.get(e)===t&&hn.delete(e)});hn.size>4;){let[s,r]=hn.entries().next().value;hn.delete(s),r.then(a=>{a.gone=!0,ki(a)},()=>{})}return t}function ki(i){i.gone&&!i.using&&!(Ht&&Ht.fig===i)&&i!==ur&&i.dispose()}var ur=null;function zy(i){let e=ur;ur=i,e&&e!==i&&ki(e)}var gg=null;function dr(i,e,t){let n=Hi();if(!n.compileAsync||Nt)return t?bg():Promise.resolve();let s=n.getRenderTarget(),r=null;try{t&&n.setRenderTarget(gg||(gg=new Wt(1,1))),r=n.compileAsync(i,e,bt)}catch{}n.setRenderTarget(s),Mh();let a=0,o=Promise.race([Promise.resolve(r).catch(()=>{}).then(()=>Qy(n)),new Promise(c=>{a=setTimeout(c,4e3)})]).then(()=>clearTimeout(a));return t?o.then(bg):o}var ms=new Map,Sn=[],Rf=!1;function Vy(i,e,t,n){return new Promise((s,r)=>{let a={key:i,job:e,ok:s,no:r,low:n};if(t)Sn.unshift(a);else if(n)Sn.push(a);else{let o=Sn.findIndex(c=>c.low);o<0?Sn.push(a):Sn.splice(o,0,a)}Fg()})}function Fg(){Rf||!Sn.length||(Rf=!0,Ky(Sn[0]&&Sn[0].low?1200:160).then(()=>{let i=Sn.shift();if(!i){Rf=!1;return}let e=0,t=new Promise((n,s)=>{e=setTimeout(()=>s(new Error("too long")),2e4)});Promise.race([Promise.resolve().then(i.job),t]).then(i.ok,i.no).then(()=>{clearTimeout(e),Rf=!1,Fg()})}))}function Wy(i){let e=Sn.findIndex(t=>t.key===i);e>0&&Sn.unshift(Sn.splice(e,1)[0])}var Pg=0;["pointerdown","pointermove","touchstart","touchmove","wheel","scroll","keydown"].forEach(i=>{window.addEventListener(i,()=>{Pg=performance.now()},{capture:!0,passive:!0})});var Ng=0;function aw(i){Ng=i?performance.now()+18e4:0}var Uf=0;function ow(i){Uf=Math.max(Uf,performance.now()+(i||600))}var Ky=(i=160)=>new Promise(e=>{let t=()=>{let n=Math.max(Ng,Uf)-performance.now();if(n>0){setTimeout(t,Math.min(n,250));return}let s=performance.now()-Pg;s>=i?e():setTimeout(t,i-s)};window.requestIdleCallback?requestIdleCallback(t,{timeout:150}):setTimeout(t,16)});function kf(i,e,t,n,s){if(ms.has(i))return t&&Wy(i),ms.get(i);let r=Promise.resolve(mh&&ov(i)).then(a=>a?pg(a,!1).catch(()=>null):null).then(a=>a||Promise.resolve(n&&n()).catch(()=>{}).then(()=>Vy(i,e,t,s)).then(o=>o&&o.later?o.later:o).then(o=>pg(o,!0).then(c=>(mh&&fv(i,o),c))));return ms.set(i,r),r.catch(()=>ms.delete(i)),r}var Bf=!1;function pg(i,e){if(!i||!i.size)return Promise.reject(new Error("no picture"));if(Bf)return mg(i).then(lh);let t=URL.createObjectURL(i);return lh(t).catch(n=>{if(URL.revokeObjectURL(t),!e)throw n;return Bf=!0,mg(i).then(lh)})}function lh(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>n.naturalWidth?e(i):t(new Error("empty picture")),n.onerror=()=>t(new Error("picture")),n.src=i})}function mg(i){return new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(n.result),n.onerror=()=>t(n.error||new Error("picture")),n.readAsDataURL(i)})}function fw(i){String(i).slice(0,5)==="blob:"&&(Bf=!0);for(let[e,t]of ms)t.then(n=>{(n===i||Bf&&String(n).slice(0,5)==="blob:")&&ms.delete(e)},()=>{})}function _a(){return Math.min(3,window.devicePixelRatio||1)}function cw(i,e={}){let t=Object.assign({w:180,h:336,dpr:_a(),move:"",at:null,turn:-18},e);(t.focus||t.view)&&(t.bleed=!1);let n="v"+gr+":"+xa(i)+":"+(t.move||"")+(t.at!=null?"@"+t.at:"")+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+(t.focus?":"+t.focus:"")+(t.view?":"+JSON.stringify(t.view):"")+(t.bleed?":b"+bs.side+","+bs.top:"");return kf(n,()=>Jy(i,t),!!t.first,()=>Cg(i),!!t.low)}var lw=bs;async function Jy(i,e){if(Hi(),Nt)throw new Error("no graphics");let t=await yh(i);t.using=(t.using||0)+1;try{if(await dr(t.root,Un,!0),Nt)throw new Error("no graphics");let n=new wt,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),bt.add(n),t.turn=e.turn*it;let o=e.move&&Mt[e.move];t.at(e.move,e.at!=null?e.at:o?o.still:0);let c=e.bleed?e.w*(1+2*bs.side):e.w,f=e.bleed?e.h*bs.top:0;Lg(Un,c,e.h,e.focus?Hy(t,e.focus):e.view),f&&Un.setViewOffset(c,e.h,0,-f,c,e.h+f);let l;try{Gf(Un,Math.round(e.h*e.dpr)),l=Hf(n,Un,Math.round(c*e.dpr),Math.round((e.h+f)*e.dpr))}finally{f&&Un.clearViewOffset()}return t.turn=r,t.blinks=a,bt.remove(n),s&&s.add(t.root),l}finally{t.using--,ki(t)}}function hw(i,e={}){let t=Object.assign({w:72,h:112,dpr:_a(),turn:-10},e),n=Ug(i),s="v"+gr+":h:"+xa(n)+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn;return kf(s,()=>qy(i,t),!1,()=>hn.has(xa(i))?null:Cg(n),!!t.low)}function Ug(i){return Object.assign({},i||{},{l:"",k:""})}async function qy(i,e){if(Hi(),Nt)throw new Error("no graphics");let t=await yh(hn.has(xa(i))?i:Ug(i));t.using=(t.using||0)+1;try{if(await dr(t.root,Un,!0),Nt)throw new Error("no graphics");let n=new wt,s=t.root.parent,r=t.turn,a=t.blinks;t.blinks=!1,n.add(t.root),bt.add(n),t.turn=e.turn*it,t.at("",0),Xy(Un,t,e),Gf(Un,Math.round(e.h*e.dpr));let o=Hf(n,Un,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return t.turn=r,t.blinks=a,bt.remove(n),s&&s.add(t.root),o}finally{t.using--,ki(t)}}function Xy(i,e,t){let n=new L,s=new L;e.bones.Head.getWorldPosition(n),(e.bones.Neck||e.bones.Head).getWorldPosition(s);let r=s.y-.1,a=n.y+.73;i.aspect=t.w/t.h,i.fov=16;let o=(a-r)/2/Math.tan(i.fov*it/2),c=(r+a)/2;i.position.set(n.x,c+.04,n.z+o),i.lookAt(n.x,c,n.z),i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}function Hf(i,e,t,n){let s=Hi(),r=new Wt(t,n,{samples:4,colorSpace:_t}),a=bt.children.filter(f=>f.isGroup&&f.visible&&f!==i);a.forEach(f=>{f.visible=!1}),s.setRenderTarget(r),s.clear(),s.render(bt,e),a.forEach(f=>{f.visible=!0}),s.setRenderTarget(null);let o=new Uint8Array(t*n*4);return{later:jy(s,r,t,n,o).then(()=>{if(r.dispose(),Nt||Zy(o))throw new Error("empty picture");return nv(o,t,n)},f=>{throw r.dispose(),f})}}var ei=new Set,ph=[],pi=null,vh=0,If=0;function Mh(){if(!ei.size||!Qt)return;let i=Qt.getContext();pi&&i.deleteSync(pi),pi=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0),i.flush()}function jy(i,e,t,n,s){let r=i.getContext();return new Promise((a,o)=>{let c=null;try{i.state.bindFramebuffer(r.FRAMEBUFFER,i.properties.get(e).__webglFramebuffer),c=r.createBuffer(),r.bindBuffer(r.PIXEL_PACK_BUFFER,c),r.bufferData(r.PIXEL_PACK_BUFFER,s.byteLength,r.STREAM_READ),r.readPixels(0,0,t,n,r.RGBA,r.UNSIGNED_BYTE,0),r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}catch{c&&r.deleteBuffer(c),r.bindBuffer(r.PIXEL_PACK_BUFFER,null);try{i.readRenderTargetPixels(e,0,0,t,n,s),a()}catch(l){o(l)}return}finally{let f=i.getRenderTarget();i.state.bindFramebuffer(r.FRAMEBUFFER,f?i.properties.get(f).__webglFramebuffer:null)}ei.size||(vh=performance.now()),ei.add({buf:c,px:s,ok:a,no:o}),Mh(),Yy()})}function Bg(i){if(!ei.size)return!0;let e=Qt.getContext();if(Nt||e.isContextLost())return ei.forEach(t=>t.no(new Error("no graphics"))),ei.clear(),pi=null,ph.splice(0).forEach(t=>t()),!0;if(!i&&pi&&e.clientWaitSync(pi,0,0)===e.TIMEOUT_EXPIRED)return!1;for(let t of ei){try{e.bindBuffer(e.PIXEL_PACK_BUFFER,t.buf),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,t.px),t.ok()}catch(n){t.no(n)}e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.deleteBuffer(t.buf)}return ei.clear(),pi&&e.deleteSync(pi),pi=null,ph.splice(0).forEach(t=>t()),!0}function Yy(){if(If)return;let i=()=>{If=0,Bg(performance.now()-vh>3e3)||(If=setTimeout(i,4))};If=setTimeout(i,4)}function Qy(i){if(i.extensions.has("KHR_parallel_shader_compile")||Nt)return Promise.resolve();let e=i.getContext(),t=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);return t?(e.flush(),new Promise(n=>{let s=()=>{if(!Nt&&e.clientWaitSync(t,0,0)===e.TIMEOUT_EXPIRED){setTimeout(s,10);return}e.deleteSync(t),n()};setTimeout(s,10)})):Promise.resolve()}function bg(){return ei.size?new Promise(i=>ph.push(i)).then(()=>new Promise(i=>setTimeout(i,0))):Promise.resolve()}function Zy(i){for(let e=3;e<i.length;e+=4)if(i[e])return!1;return!0}var Og="image/webp",Gg=.92;function $y(){self.onmessage=i=>{let e=i.data;try{let t=e.W,n=e.H,s=new ImageData(t,n);for(let a=0;a<n;a++)s.data.set(e.px.subarray((n-1-a)*t*4,(n-a)*t*4),a*t*4);let r=self.board||(self.board=new OffscreenCanvas(t,n));r.width!==t&&(r.width=t),r.height!==n&&(r.height=n),r.getContext("2d").putImageData(s,0,0),r.convertToBlob({type:e.type,quality:e.q}).then(a=>self.postMessage({id:e.id,blob:a}),()=>self.postMessage({id:e.id}))}catch{self.postMessage({id:e.id})}}}var $n=null,Of=new Map,ev=0;function tv(){if($n!==null)return $n;try{if(typeof Worker>"u"||typeof OffscreenCanvas>"u")throw new Error("no worker");$n=new Worker(URL.createObjectURL(new Blob(["("+$y+")()"],{type:"text/javascript"}))),$n.onmessage=i=>{let e=Of.get(i.data&&i.data.id);e&&e(i.data)},$n.onerror=()=>{kg()}}catch{$n=!1}return $n}function kg(){if($n)try{$n.terminate()}catch{}$n=!1,[...Of.values()].forEach(i=>i({}))}function nv(i,e,t){let n=tv();return n?new Promise((s,r)=>{let a=++ev,o=setTimeout(()=>c({}),8e3);function c(f){clearTimeout(o),Of.delete(a),f.blob&&f.blob.size?s(f.blob):r(new Error("worker"))}Of.set(a,c),n.postMessage({id:a,px:i,W:e,H:t,type:Og,q:Gg})}).catch(()=>(kg(),_g(i,e,t))):_g(i,e,t)}var xg=null;function _g(i,e,t){let n=xg||(xg=document.createElement("canvas"));n.width!==e&&(n.width=e),n.height!==t&&(n.height=t);let s=n.getContext("2d",{willReadFrequently:!0}),r=s.createImageData(e,t);for(let a=0;a<t;a++)r.data.set(i.subarray((t-1-a)*e*4,(t-a)*e*4),a*e*4);return s.putImageData(r,0,0),new Promise((a,o)=>n.toBlob(c=>c&&c.size?a(c):o(new Error("picture")),Og,Gg))}function hh(i){return!!(Rt.things&&Rt.things[i])}var Df=new Map;function ya(i){if(!Df.has(i)){let e=pa("o/"+i+".glb").then(t=>{let n=new wt;if(n.add(t.scene),i.startsWith("p-")&&t.scene.traverse(a=>{!a.isMesh||a.userData.line||(a.material=ma(a.material),!a.material.transparent&&!Eg(a.material)&&Pf(a))}),iv.test(i))return n;let s=new Et().setFromObject(t.scene,!0),r=Sg();return r.scale.set(Math.max(.03,(s.max.x-s.min.x)*1.3)/.75,Math.max(.02,(s.max.z-s.min.z)*1.3)/.48,1),r.position.y=5e-4,r.userData.aside=!0,n.add(r),n});Df.set(i,e),e.catch(()=>Df.delete(i))}return Df.get(i)}var iv=/^(b|lv|ui|pr|fx|box|rm|sh|pz|rn|ar)-/,uh={side:.35,top:.12,foot:.12};function uw(i,e={}){let t=Object.assign({w:100,h:120,dpr:_a(),turn:-18,low:.07},e),n="v"+gr+":o:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+":"+t.turn+":"+t.low+(t.spin!=null?":s"+t.spin:"");return kf(n,()=>sv(i,t),!!t.first,()=>ya(i).catch(()=>{}),!!t.later)}async function sv(i,e){if(Hi(),Nt)throw new Error("no graphics");let t=await ya(i);i.startsWith("p-")||Dg();let n=new wt;if(n.rotation.y=(e.spin!=null?e.spin:e.turn)*it,n.add(t),await dr(n,Zn,!0),Nt)throw new Error("no graphics");bt.add(n),av(Zn,n,e),Gf(Zn,Math.round(e.h*e.dpr),Zn.position.distanceTo(new Et().setFromObject(n,!0).getCenter(Mn)),3e-4);let s=e.w,r=e.h;if(e.spin!=null){let o=Math.round(e.w*uh.side),c=Math.round(e.h*uh.top),f=Math.round(e.h*uh.foot);s=e.w+2*o,r=e.h+c+f,Zn.setViewOffset(e.w,e.h,-o,-c,s,r),n.rotation.y=e.turn*it,n.updateMatrixWorld(!0)}let a;try{a=Hf(n,Zn,Math.round(s*e.dpr),Math.round(r*e.dpr))}finally{e.spin!=null&&Zn.clearViewOffset()}return bt.remove(n),n.remove(t),a}function dw(i,e={}){let t=Object.assign({w:128,h:128,dpr:_a()},e),n="v"+gr+":e:"+i+":"+t.w+"x"+t.h+"@"+t.dpr+(t.fov?"f"+t.fov:"");return kf(n,()=>rv(i,t),!1,()=>ya(i).catch(()=>{}))}async function rv(i,e){if(Hi(),Nt)throw new Error("no graphics");let t=await ya(i);Dg();let n=new wt;if(n.add(t),await dr(n,Zn,!0),Nt)throw new Error("no graphics");bt.add(n),n.updateMatrixWorld(!0);let s=new Et().setFromObject(n,!0),r=new Et;n.traverse(h=>{h.isMesh&&h.material&&h.material.opacity===0&&r.expandByObject(h,!0)});let a=r.isEmpty()?s:r,o=a.getCenter(new L),c=a.getSize(new L),f=Zn;f.aspect=e.w/e.h,f.fov=e.fov||8;let l=Math.max(c.y,c.x/f.aspect)/2/Math.tan(f.fov*it/2);f.position.set(o.x,o.y,o.z+l),f.lookAt(o),f.near=Math.max(.001,o.z+l-s.max.z-.01),f.far=o.z+l-s.min.z+1,f.updateProjectionMatrix(),f.updateMatrixWorld(!0);let u=Hf(n,f,Math.round(e.w*e.dpr),Math.round(e.h*e.dpr));return bt.remove(n),n.remove(t),u}var yg=10*it,Mn=new L;function av(i,e,t){let n=Math.tan(i.fov*it/2),s=t.w/t.h;e.updateMatrixWorld(!0);let r=new Et().setFromObject(e,!0).getCenter(new L),a=new L(0,Math.sin(yg),Math.cos(yg));i.position.copy(r).addScaledVector(a,10),i.lookAt(r),i.updateMatrixWorld(!0);let o=i.matrixWorldInverse,c=1/0,f=-1/0,l=1/0,u=-1/0,h=-1/0;e.traverse(M=>{if(!M.isMesh||M.userData.aside)return;let E=M.geometry.getAttribute("position");for(let T=0;T<E.count;T++)Mn.fromBufferAttribute(E,T).applyMatrix4(M.matrixWorld).applyMatrix4(o),Mn.x<c&&(c=Mn.x),Mn.x>f&&(f=Mn.x),Mn.y<l&&(l=Mn.y),Mn.y>u&&(u=Mn.y),Mn.z>h&&(h=Mn.z)});let m=Math.max((u-l)/(2*n*(1-t.low-.04)),(f-c)/(2*n*s*(1-2*.05))),p=m+(h+10),g=(c+f)/2,v=l+(1-2*t.low)*m*n,A=new L(1,0,0).applyQuaternion(i.quaternion),y=new L(0,1,0).applyQuaternion(i.quaternion);i.position.copy(r).addScaledVector(a,p).addScaledVector(A,g).addScaledVector(y,v),i.aspect=s,i.near=Math.max(.001,m*.3),i.far=p*3+1,i.updateProjectionMatrix(),i.updateMatrixWorld(!0)}var Lf=null;function Hg(){return Lf||(Lf=new Promise(i=>{try{let e=indexedDB.open("seoulful-3d",1);e.onupgradeneeded=()=>e.result.createObjectStore("stills"),e.onsuccess=()=>{i(e.result),setTimeout(()=>cv(e.result),6e3)},e.onerror=()=>i(null)}catch{i(null)}}),Lf)}function ov(i){return Hg().then(e=>e&&new Promise(t=>{try{let n=e.transaction("stills").objectStore("stills").get(i);n.onsuccess=()=>{let s=n.result;t(s&&s.bytes?new Blob([s.bytes],{type:s.type||"image/png"}):null)},n.onerror=()=>t(null)}catch{t(null)}}))}function fv(i,e){Promise.all([Hg(),new Response(e).arrayBuffer()]).then(([t,n])=>{if(t)try{t.transaction("stills","readwrite").objectStore("stills").put({bytes:n,type:e.type},i)}catch{}},()=>{})}function cv(i){try{let e=i.transaction("stills","readwrite").objectStore("stills"),t="v"+gr+":",n=e.openKeyCursor?e.openKeyCursor():e.openCursor();n.onsuccess=()=>{let s=n.result;s&&(String(s.key).indexOf(t)!==0&&e.delete(s.key),s.continue())}}catch{}}function Ff(i){let e=0,t=0;for(let n=i;n;n=n.offsetParent)e+=n.offsetLeft,t+=n.offsetTop;return[e,t]}var vg=.06,lv=-6*it;function ds(i,e){for(let t=1;t<e.length;t++)if(i<=e[t][0]){let[n,s]=e[t-1],[r,a]=e[t],o=(i-n)/(r-n);return s+(a-s)*o*o*(3-2*o)}return e[e.length-1][1]}var ba={1:[1.2,i=>({sx:ds(i,[[0,1],[.3,1.12],[.6,.95],[1,1]]),sy:ds(i,[[0,1],[.3,.9],[.6,1.08],[1,1]])})],2:[1.1,i=>({ry:2*Math.PI*ds(i,[[0,0],[1,1]]),y:.14*Math.sin(Math.PI*i)})],3:[1,i=>({y:ds(i,[[0,0],[.4,.36],[.7,0],[1,0]]),sx:ds(i,[[0,1],[.4,1.05],[.7,1.08],[1,1]]),sy:ds(i,[[0,1],[.4,1.05],[.7,.92],[1,1]])})],4:[1.4,i=>({rz:it*ds(i,[[0,0],[.2,-12],[.4,12],[.6,-10],[.8,10],[1,0]])})]};ba[5]=[2.4,(i,e)=>e<1?ba[3][1](e):ba[4][1]((e-1)/1.4)];var Ht=null,hv=0;function uv(i,e){let t=e-i.t0,n=i.move&&Mt[i.move];return n&&t>n.ms&&(i.loop?(i.t0=e,t=0,i.lap=(i.lap||0)+1,i.offAt=null):(i.move="",i.done&&i.done())),i.move?(i.loop?i.offAt=null:i.offAt==null&&(i.offAt=Math.min(t,n.ms)/n.ms),[t,{first:!i.lap,off:i.offAt}]):[e,null]}function gw(i,e,t={}){let n=Hi();Ht&&Ht.stop();let s={n:++hv,el:i,fig:null,move:"",t0:0,loop:!!t.loop,turn:(t.turn!=null?t.turn:-12)*it,turn0:(t.turn!=null?t.turn:-12)*it,seen:!0,dpr:_a(),slow:0,frames:0,pet:null,petId:"",petEl:null,petParts:[],trick:0,trickT0:0,drawnAt:0,lap:0,offAt:0};Ht=s;let r=new wt;bt.add(r);let a=new wt;bt.add(a);let o=n.domElement;o.className="c3-live";let c=()=>[Math.round((i.clientWidth||200)*bs.side),Math.round((i.clientHeight||320)*bs.top)];o.style.left=-c()[0]+"px",o.style.top=-c()[1]+"px",o.style.transition="none",o.style.opacity=t.fadeIn?"0":"",i.appendChild(o);let f=new Ne,l=()=>{if(!i.isConnected||!i.clientWidth){s.unlaid=!0;return}let w=s.unlaid;s.unlaid=!1;let C=i.clientWidth,R=i.clientHeight||320,[F,P]=c(),D=-F,O=C+2*F,k=s.petEl&&s.petEl.isConnected&&s.petEl.offsetWidth&&(s.pet||s.petId&&hh(s.petId))?s.petEl:null;if(k){let $=Ff(k)[0]-Ff(i)[0];D=Math.floor(Math.min(D,$)),O=Math.ceil(Math.max(C+F,$+k.offsetWidth))-D}let V=R+P;n.getSize(f);let te=f.x!==O||f.y!==V||n.getPixelRatio()!==s.dpr;te&&n.setDrawingBufferSize(O,V,s.dpr),o.style.left!==D+"px"&&(o.style.left=D+"px"),o.style.top!==-P+"px"&&(o.style.top=-P+"px"),o.style.width!==O+"px"&&(o.style.width=O+"px"),o.style.height!==V+"px"&&(o.style.height=V+"px");let K=t.view||{},Y=(ps.high-ps.low)/R;Lg(gs,O,R,Object.assign({},K,{x:(D+O/2-C/2)*Y/(K.zoom||1)})),gs.setViewOffset(O,R,0,-P,O,V),s.linePx=Math.round(R*s.dpr),k&&s.pet&&u(k,C,R,Y),a.visible=!!(k&&s.pet),(te||w)&&s.fig&&Ht===s&&!Nt&&A(performance.now())},u=(w,C,R,F)=>{let P=s.pet,D=P.userData.big,[O,k]=Ff(i),[V,te]=Ff(w),K=w.offsetWidth,Y=w.offsetHeight,$=te-k+Y*(1-vg),ve=Math.min(Y*(1-vg-.04)*F/D.y,K*.9*F/D.x);P.userData.at={x:(V-O+K/2-C/2)*F,y:ps.low+(R-$)*F,z:.06,s:ve,h:D.y}};t.pet&&t.pet.id&&t.pet.el&&hh(t.pet.id)&&(s.petEl=t.pet.el,s.petId=t.pet.id),l(),n.setRenderTarget(null),n.clear();let h="IntersectionObserver"in window?new IntersectionObserver(w=>{s.seen=w[0].isIntersecting}):null;h&&h.observe(i);let d="ResizeObserver"in window?new ResizeObserver(l):null;d&&d.observe(i);let b=null,m=w=>{w.pointerType==="mouse"&&w.preventDefault(),b={x:w.clientX,t:s.turn}},p=w=>{b&&(s.turn=b.t+(w.clientX-b.x)*.012)},g=()=>{b=null};t.drag&&(i.addEventListener("pointerdown",m),window.addEventListener("pointermove",p),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g));let v=0,A=w=>{let C=s.fig,R=s.move&&Mt[s.move];if(R&&R.lie&&!b){let D=s.turn0-s.turn,O=1-Math.exp(-Math.min(200,Math.max(0,w-s.drawnAt))/130);s.turn+=(D-2*Math.PI*Math.round(D/(2*Math.PI)))*O}s.drawnAt=w,C.turn=s.turn;let[F,P]=uv(s,w);C.at(s.move,F,P),s.pet&&y(w),Gf(gs,s.linePx||n.domElement.height),n.render(bt,gs)},y=w=>{let C=s.pet,R=C.userData.at,F=C.children[0];if(!R){C.visible=!1;return}C.visible=!0;let P=(1-Math.cos(w/1e3*2*Math.PI/3.2))/2,D=.028*P,O=1,k=1+.02*P,V=0,te=0;if(s.trick){let Pe=(w-s.trickT0)/1e3,[Ue,q]=ba[s.trick];if(Pe>=Ue)s.trick=0;else{let Q=q(Pe/Ue,Pe);D+=Q.y||0,O*=Q.sx||1,k*=Q.sy||1,V+=Q.rz||0,te+=Q.ry||0}}C.position.set(R.x,R.y,R.z),C.scale.setScalar(R.s),C.rotation.set(0,s.turn+lv,0),F.position.set(0,D*R.h,0),F.scale.set(O,k,O),F.rotation.set(0,te,V);let K=w/1e3,Y=s.trick?1:0,$=K%4.6/4.6,ve=$<.92?1:$<.95?1-.9*($-.92)/.03:.1+.9*($-.95)/.05,pe=(1-Math.cos(K*2*Math.PI/3.4))/2,Xe=Y?(1-Math.cos(K*2*Math.PI/.28))/2:0;for(let[Pe,Ue,q]of s.petParts)Ue==="blink"?Pe.scale.y=ve:Ue==="wag"?Pe.rotation.z=(Y?16:9)*it*Math.sin(K*2*Math.PI/(Y?.45:1.1)):Ue==="ear"?Pe.rotation.z=-q*it*(5*pe+10*Xe):Ue==="wing"&&(Pe.rotation.z=q*it*(8*pe+26*Xe))},M=w=>{if(Ht!==s||!s.seen||document.hidden||!s.fig||Nt)return;let C=s.fig.turn!==s.turn;if(ei.size&&!C){Bg(performance.now()-vh>3e3);return}let R=!!s.move||b||!!s.trick||C;if(!R&&(w-v<30||w<Uf))return;let F=w-v;if(v=w,s.frames++>20&&F>40&&R&&s.slow++,s.slow>30&&s.dpr>1){s.dpr=Math.max(1,s.dpr*.75),s.slow=0,l();return}A(w)};n.setAnimationLoop(M);let E=0,T=null,x=null;return s.ready=new Promise((w,C)=>{T=w,x=C}),s.ready.catch(()=>{}),s.set=w=>{let C=++E;return yh(w).then(R=>(R.using=(R.using||0)+1,dr(R.root,gs,!1).then(()=>{if(R.using--,Ht!==s||C!==E){ki(R);return}let F=s.fig;r.clear(),r.add(R.root),s.fig=R,R.stageN!==s.n&&(R.stageN=s.n,R.stages=(R.stages||0)+1),R.blinks=!0,F&&F!==R&&ki(F),Nt||A(performance.now()),o.style.opacity==="0"&&(o.style.transition="opacity .2s ease-out",o.style.opacity="1"),T(),t.ready&&t.ready()}))).catch(R=>{throw s.fig||x(R),R})},s.play=(w,C)=>(s.move=Mt[w]?w:"",s.loop=!!C,s.t0=performance.now(),s.lap=0,s.offAt=C?null:0,new Promise(R=>{s.done=R})),s.setPet=(w,C)=>{let R=s.petEl;return s.petEl=C||null,R&&R!==C&&t.petGone&&t.petGone(R),w===s.petId&&s.pet?(l(),C&&t.petShown&&t.petShown(C),Promise.resolve()):(s.petId=w||"",s.pet&&(a.remove(s.pet),s.pet=null,s.petParts=[],l()),!w||!C||!hh(w)?Promise.resolve():(d&&d.observe(C),ya(w).then(F=>{if(Ht!==s||s.petId!==w)return;let P=F.clone(),D=[];P.traverse(k=>{let V=/^(blink|wag|ear|wing)(?:-([LR]))?$/.exec(k.name);V&&!(k.parent&&k.parent.name===k.name)&&D.push([k,V[1],V[2]==="L"?1:V[2]==="R"?-1:0])});let O=new Et().setFromObject(P.children[0],!0);return P.userData.big={x:Math.max(.01,O.max.x-O.min.x),y:Math.max(.01,O.max.y-O.min.y)},P.visible=!1,dr(P,gs,!1).then(()=>{if(Ht!==s||s.petId!==w||s.pet)return;s.pet=P,s.petParts=D,a.add(P),l();let k=()=>{Ht===s&&s.pet===P&&s.petEl&&t.petShown&&t.petShown(s.petEl)};s.fig?(Nt||A(performance.now()),k()):s.ready.then(k,()=>{})})}).catch(()=>{})))},s.petPlay=w=>s.pet?(s.trick=ba[w]?w:1,s.trickT0=performance.now(),!0):!1,s.rehost=w=>{w!==i&&(t.drag&&(i.removeEventListener("pointerdown",m),w.addEventListener("pointerdown",m)),h&&(h.unobserve(i),h.observe(w)),d&&(d.unobserve(i),d.observe(w)),i=w,s.el=w,w.appendChild(o),s.seen=!0,l(),s.fig&&Ht===s&&!Nt&&A(performance.now()))},s.stop=()=>{Ht===s&&(Ht=null,n.setAnimationLoop(null)),s.fig&&zy(s.fig),h&&h.disconnect(),d&&d.disconnect(),i.removeEventListener("pointerdown",m),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),bt.remove(r),bt.remove(a),o.parentNode===i&&i.removeChild(o),o.style.left="0px",o.style.top="0px",o.style.opacity="",o.style.transition="",s.petEl&&t.petGone&&t.petGone(s.petEl)},s.set(e).catch(()=>{}),t.pet&&s.setPet(t.pet.id,t.pet.el),t.move&&s.play(t.move,t.loop),s}function pw(){return Ht&&Ht.fig&&Ht.fig.stages||0}function mw(){for(let[i,e]of[...hn])hn.delete(i),e.then(t=>{t.gone=!0,ki(t)},()=>{})}var mh=!0;function bw(i){i.stand&&(Object.keys(oa).forEach(t=>delete oa[t]),Object.assign(oa,i.stand)),i.keep!=null&&(mh=i.keep),hn.clear(),ms.clear();let e=ur;ur=null,e&&(e.gone=!0,ki(e))}var xw=gr,Gi=new Map,bh=8,Nf=()=>new Promise(i=>{let e=new MessageChannel;e.port1.onmessage=()=>{e.port1.close(),i()},e.port2.postMessage(0)});async function dv(i,e,t,n){let s=qd(),r=Math.fround,a=new L,o=t,c=[];i.traverse(u=>{u.isMesh&&!u.userData.line&&u.geometry&&u.geometry.attributes.position&&c.push([u.geometry,new we().multiplyMatrices(e,u.matrixWorld)])});let f=performance.now(),l=0;for(let[u,h]of c){let d=u.attributes.position,b=u.index,m=new Float32Array(d.count*3);for(let A=0;A<d.count;A++)a.fromBufferAttribute(d,A).applyMatrix4(h),m[3*A]=a.x,m[3*A+1]=a.y,m[3*A+2]=a.z,Zl(s,n,m[3*A],m[3*A+1],m[3*A+2],!0),(A&1023)===1023&&performance.now()-f>bh&&(await Nf(),f=performance.now());let p=b?b.count/3:d.count/3,g=(A,y)=>b?b.getX(A*3+y):A*3+y,v=(A,y)=>(m[A]-m[y])**2+(m[A+1]-m[y+1])**2+(m[A+2]-m[y+2])**2;for(let A=0;A<p;A++){let y=g(A,0)*3,M=g(A,1)*3,E=g(A,2)*3,T=v(y,M),x=v(M,E),w=v(E,y);x>=T&&x>=w?[y,M,E]=[M,E,y]:w>=T&&w>=x&&([y,M,E]=[E,y,M]);let C=Math.sqrt(Math.max(T,x,w));if(C<=t)continue;let R=m[M]-m[y],F=m[M+1]-m[y+1],P=m[M+2]-m[y+2],D=m[E]-m[y],O=m[E+1]-m[y+1],k=m[E+2]-m[y+2],V=m[E]-m[M],te=m[E+1]-m[M+1],K=m[E+2]-m[M+2],Y=Math.hypot(F*k-P*O,P*D-R*k,R*O-F*D)/C,$=Math.max(1,Math.ceil(Y/o));for(let ve=0;ve<$;ve++){let pe=ve/$,Xe=m[y]+D*pe,Pe=m[y+1]+O*pe,Ue=m[y+2]+k*pe,q=m[M]+V*pe-Xe,Q=m[M+1]+te*pe-Pe,be=m[M+2]+K*pe-Ue,De=Math.max(1,Math.ceil(C*(1-pe)/o));for(let de=0;de<=De;de++)Zl(s,n,r(Xe+q*de/De),r(Pe+Q*de/De),r(Ue+be*de/De),!1);l+=De+1}l>1024&&(l=0,performance.now()-f>bh&&(await Nf(),f=performance.now()))}}return await Nf(),s}function gv(i,e,t,n){let s=Wd(n),r=new we().copy(e.matrixWorld).invert(),a=new we,o=new we,c=new L,f=[0,0,0],l=new Map;i.traverse(u=>{if(!u.isMesh||u.isSkinnedMesh||!u.geometry||!u.geometry.attributes.position)return;let h=u.geometry;if(l.has(h)){u.geometry=l.get(h),u.userData.bent=!0;return}a.multiplyMatrices(r,u.matrixWorld),o.copy(a).invert();let d=u.geometry.attributes.position,b=new Float32Array(d.count*3);for(let m=0;m<d.count;m++)c.fromBufferAttribute(d,m).applyMatrix4(a),Kd(s,t,c.x,c.y,c.z,f),c.set(f[0],f[1],f[2]).applyMatrix4(o),b[3*m]=c.x,b[3*m+1]=c.y,b[3*m+2]=c.z;u.geometry=u.geometry.clone(),u.geometry.setAttribute("position",new rt(b,3)),u.userData.bent=!0,u.geometry.computeBoundingBox(),u.geometry.computeBoundingSphere(),l.set(h,u.geometry)})}export{ca as BACK,gh as Figure,Mt as MOVES,Ql as SNUG,uh as SPIN_PAD,th as TUCK,lw as bleed,fw as broken,ow as calm,mw as crowd,dw as emblem,hw as face,iw as has,hh as hasThing,aw as hold,xa as lookKey,sw as manifest,uv as moveClock,rw as ok,nw as setBase,gw as stage,pw as staged,cw as still,uw as thing,bw as tune,xw as version};
