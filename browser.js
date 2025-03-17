// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(t){return"number"==typeof t}function r(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function i(t,e,n){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+r(o):r(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var e,r,a;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,a=parseInt(r,10),!isFinite(a)){if(!n(r))throw new Error("invalid integer. Value: "+r);a=0}return a<0&&("u"===t.specifier||10!==e)&&(a=4294967295+a+1),a<0?(r=(-a).toString(e),t.precision&&(r=i(r,t.precision,t.padRight)),r="-"+r):(r=a.toString(e),a||t.precision?t.precision&&(r=i(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===u.call(t.specifier)?u.call(r):o.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function v(t){var e,r,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+r);i=t.arg}switch(t.specifier){case"e":case"E":r=i.toExponential(t.precision);break;case"f":case"F":r=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((e=t.precision)>0&&(e-=1),r=i.toExponential(e)):r=i.toPrecision(t.precision),t.alternate||(r=s.call(r,m,"$1e"),r=s.call(r,h,"e"),r=s.call(r,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=s.call(r,p,"e+0$1"),r=s.call(r,g,"e-0$1"),t.alternate&&(r=s.call(r,y,"$1."),r=s.call(r,b,"$1.e")),i>=0&&t.sign&&(r=t.sign+r),r=t.specifier===f.call(t.specifier)?f.call(r):l.call(r)}function w(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}var j=String.fromCharCode,_=Array.isArray;function x(t){return t!=t}function O(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function E(t){var e,n,r,o,u,c,l,f,s,p,g,y,b;if(!_(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,f=0;f<t.length;f++)if("string"==typeof(r=t[f]))c+=r;else{if(e=void 0!==r.precision,!(r=O(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+r+"`.");for(r.mapping&&(l=r.mapping),n=r.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[l],10),l+=1,x(r.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[l],10),l+=1,x(r.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[l],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=a(r);break;case"s":r.maxWidth=e?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!x(r.arg)){if((u=parseInt(r.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=x(u)?String(r.arg):j(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=v(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=i(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(p=r.arg,g=r.width,y=r.padRight,b=void 0,(b=g-p.length)<0?p:p=y?p+w(b):w(b)+p)),c+=r.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function k(t){var e,n,r,i;for(n=[],i=0,r=S.exec(t);r;)(e=t.slice(i,S.lastIndex-r[0].length)).length&&n.push(e),n.push(T(r)),i=S.lastIndex,r=S.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function I(t){var e,n;if("string"!=typeof t)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[k(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return E.apply(null,e)}var V,P=Object.prototype,F=P.toString,A=P.__defineGetter__,$=P.__defineSetter__,C=P.__lookupGetter__,L=P.__lookupSetter__;V=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,n){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(C.call(t,e)||L.call(t,e)?(r=t.__proto__,t.__proto__=P,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&A&&A.call(t,e,n.get),u&&$&&$.call(t,e,n.set),t};var N=V;function R(t,e,n){N(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B=Math.floor;function G(t){return B(t)===t}var W=4294967295;function X(t){return"number"==typeof t}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function H(t,e){return null!=t&&U.call(t,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",q=M()?function(t){var e,n,r;if(null==t)return Y.call(t);n=t[D],e=H(t,D);try{t[D]=void 0}catch(e){return Y.call(t)}return r=Y.call(t),e?t[D]=n:delete t[D],r}:function(t){return Y.call(t)},J=Number,K=J.prototype.toString,Q=M();function tt(t){return"object"==typeof t&&(t instanceof J||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Number]"===q(t)))}function et(t){return X(t)||tt(t)}R(et,"isPrimitive",X),R(et,"isObject",tt);var nt=Number.POSITIVE_INFINITY,rt=J.NEGATIVE_INFINITY;function it(t){return t<nt&&t>rt&&G(t)}function ot(t){return X(t)&&it(t)}function ut(t){return tt(t)&&it(t.valueOf())}function at(t){return ot(t)||ut(t)}function ct(t){return ot(t)&&t>=0}function lt(t){return ut(t)&&t.valueOf()>=0}function ft(t){return ct(t)||lt(t)}function st(t){return Object.keys(Object(t))}R(at,"isPrimitive",ot),R(at,"isObject",ut),R(ft,"isPrimitive",ct),R(ft,"isObject",lt);var pt,gt=void 0!==Object.keys;function yt(t){return"[object Arguments]"===q(t)}pt=function(){return yt(arguments)}();var bt=pt;function dt(t){return"string"==typeof t}var ht=String.prototype.valueOf,mt=M();function vt(t){return"object"==typeof t&&(t instanceof String||(mt?function(t){try{return ht.call(t),!0}catch(t){return!1}}(t):"[object String]"===q(t)))}function wt(t){return dt(t)||vt(t)}function jt(t){return t!=t}function _t(t){return X(t)&&jt(t)}function xt(t){return tt(t)&&jt(t.valueOf())}function Ot(t){return _t(t)||xt(t)}R(wt,"isPrimitive",dt),R(wt,"isObject",vt),R(Ot,"isPrimitive",_t),R(Ot,"isObject",xt);var Et=Object.prototype.propertyIsEnumerable,St=!Et.call("beep","0");function Tt(t,e){var n;return null!=t&&(!(n=Et.call(t,e))&&St&&wt(t)?!_t(e=+e)&&ot(e)&&e>=0&&e<t.length:n)}var kt=Array.isArray?Array.isArray:function(t){return"[object Array]"===q(t)},It=bt?yt:function(t){return null!==t&&"object"==typeof t&&!kt(t)&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=4294967295&&H(t,"callee")&&!Tt(t,"callee")},Vt=Array.prototype.slice;function Pt(t){return null!==t&&"object"==typeof t}R(Pt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!kt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Pt));var Ft=Tt((function(){}),"prototype"),At=!Tt({toString:null},"toString"),$t=9007199254740991;function Ct(t,e,n){var r,i,o;if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&G(o.length)&&o.length>=0&&o.length<=$t||dt(t)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!ot(n))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(Ot(e)){for(;i<r;i++)if(Ot(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var Lt=/./;function Nt(t){return"boolean"==typeof t}var Rt=Boolean,Bt=Boolean.prototype.toString,Gt=M();function Wt(t){return"object"==typeof t&&(t instanceof Rt||(Gt?function(t){try{return Bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function Xt(t){return Nt(t)||Wt(t)}R(Xt,"isPrimitive",Nt),R(Xt,"isObject",Wt);var Zt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Yt="object"==typeof globalThis?globalThis:null,Ut=function(t){if(arguments.length){if(!Nt(t))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Yt)return Yt;if(Zt)return Zt;if(Mt)return Mt;throw new Error("unexpected error. Unable to resolve global object.")}(),Ht=Ut.document&&Ut.document.childNodes,zt=Int8Array;function Dt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Jt(t){var e,n,r,i;if(("Object"===(n=q(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=qt.exec(r.toString()))return e[1]}return Pt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}R(Dt,"REGEXP",qt);var Kt="function"==typeof Lt||"object"==typeof zt||"function"==typeof Ht?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?Jt(t).toLowerCase():e};function Qt(t){return t.constructor&&t.constructor.prototype===t}var te,ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ne="undefined"==typeof window?void 0:window,re=function(){var t;if("undefined"===Kt(ne))return!1;for(t in ne)try{-1===Ct(ee,t)&&H(ne,t)&&null!==ne[t]&&"object"===Kt(ne[t])&&Qt(ne[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window,oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];te=gt?function(){return 2!==(st(arguments)||"").length}(1,2)?function(t){return It(t)?st(Vt.call(t)):st(t)}:st:function(t){var e,n,r,i,o,u,a;if(i=[],It(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!H(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(0==(r="function"==typeof t)&&!Pt(t))return i;n=Ft&&r}for(o in t)n&&"prototype"===o||!H(t,o)||i.push(String(o));if(At)for(e=function(t){if(!1===ie&&!re)return Qt(t);try{return Qt(t)}catch(t){return!1}}(t),a=0;a<oe.length;a++)u=oe[a],e&&"constructor"===u||!H(t,u)||i.push(String(u));return i};var ue=te;function ae(t){return"function"===Kt(t)}var ce,le=Object,fe=Object.getPrototypeOf;ce=ae(Object.getPrototypeOf)?fe:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===q(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var se=ce,pe=Object.prototype;function ge(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!kt(t)}(t)&&(e=function(t){return null==t?null:(t=le(t),se(t))}(t),!e||!H(t,"constructor")&&H(e,"constructor")&&ae(e.constructor)&&"[object Function]"===q(e.constructor)&&H(e,"isPrototypeOf")&&ae(e.isPrototypeOf)&&(e===pe||function(t){var e;for(e in t)if(!H(t,e))return!1;return!0}(t)))}var ye={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function be(){var t;return 0===arguments.length?ye.all.slice():(t=ye[arguments[0]])?t.slice():[]}function de(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function he(t,e,n){N(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}R(be,"enum",de),function(t,e){var n,r,i;for(n=ue(e),i=0;i<n.length;i++)he(t,r=n[i],e[r])}(be,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var me=function(t,e){var n,r,i,o,u,a,c,l=!0;if(!Pt(t))throw new TypeError(I("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ge(e))throw new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e));if(H(e,"duplicates")&&!Nt(l=e.duplicates))throw new TypeError(I("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",l))}if(r=(n=ue(t)).length,u={},l)for(c=0;c<r;c++)H(u,o=t[i=n[c]])?(a=u[o],kt(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(c=0;c<r;c++)u[t[i=n[c]]]=i;return u}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1}),ve={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function we(t){var e=typeof t;return"string"===e?null===function(t){var e=ve[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=me[t];return"string"==typeof e?e:null}(t):null}function je(t,e,n){var r,i,o,u,a,c,l,f,s;if(!("object"==typeof(s=t)&&null!==s&&"number"==typeof s.length&&G(s.length)&&s.length>=0&&s.length<=W))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(!ct(e))throw new TypeError(I("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(!ct(n))throw new TypeError(I("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=e+n)!=0)throw new RangeError("invalid arguments. Length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],c=2*a,f=2*e,l=0;l<=c;l++)0===l?l===f?o.push("() => ("):o.push("("):l===c?l===f?o.push(") => ()"):o.push(")"):l===f?o.push(") => ("):l%2==1?o.push(""):o.push(", ");for(l=0;l<r;l++)null===(u=we(t[l]))&&(u=t[l]),o[2*(f=l%a)+1]=u,f===a-1&&i.push(o.join(""));return i}return function(t,e,n){return R(n,"nargs",t.nargs),R(n,"nin",t.nin),R(n,"nout",t.nout),function(t,e,n){N(t,e,{configurable:!1,enumerable:!1,get:n})}(n,"types",(function(){return je(e,t.nin,t.nout)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).setProps=e();
//# sourceMappingURL=browser.js.map
