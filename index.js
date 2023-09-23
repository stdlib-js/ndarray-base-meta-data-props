// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).setProps=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function o(t,e,r){var o=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=r?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var e,n,a;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,a=parseInt(n,10),!isFinite(a)){if(!r(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===t.specifier||10!==e)&&(a=4294967295+a+1),a<0?(n=(-a).toString(e),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=a.toString(e),a||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===u.call(t.specifier)?u.call(n):i.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var e,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":l(o)<1e-4?((e=t.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(t.precision),t.alternate||(n=s.call(n,m,"$1e"),n=s.call(n,h,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=s.call(n,g,"e+0$1"),n=s.call(n,y,"e-0$1"),t.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,v,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===p.call(t.specifier)?p.call(n):f.call(n)}function j(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function _(t,e,r){var n=e-t.length;return n<0?t:t=r?t+j(n):j(n)+t}var O=String.fromCharCode,S=isNaN,E=Array.isArray;function x(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function T(t){var e,r,n,i,u,l,f,p,s;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,p=0;p<t.length;p++)if(c(n=t[p]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(u)?String(n.arg):O(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function k(t){var e,r,n,o;for(r=[],o=0,n=P.exec(t);n;)(e=t.slice(o,P.lastIndex-n[0].length)).length&&r.push(e),r.push(I(n)),o=P.lastIndex,n=P.exec(t);return(e=t.slice(o)).length&&r.push(e),r}function A(t){return"string"==typeof t}function V(t){var e,r,n;if(!A(t))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=k(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return T.apply(null,r)}var F,N=Object.prototype,B=N.toString,L=N.__defineGetter__,C=N.__defineSetter__,G=N.__lookupGetter__,Y=N.__lookupSetter__;F=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(G.call(t,e)||Y.call(t,e)?(n=t.__proto__,t.__proto__=N,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(t,e,r.get),u&&C&&C.call(t,e,r.set),t};var R=F;function X(t,e,r){R(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var M=Math.floor;function W(t){return M(t)===t}function $(t){return"number"==typeof t}function H(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var U=H();function Z(){return U&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(t,e){return null!=t&&z.call(t,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=Z()?function(t){var e,r,n;if(null==t)return D.call(t);r=t[K],e=q(t,K);try{t[K]=void 0}catch(e){return D.call(t)}return n=D.call(t),e?t[K]=r:delete t[K],n}:function(t){return D.call(t)},tt=Number,et=tt.prototype.toString;var rt=Z();function nt(t){return"object"==typeof t&&(t instanceof tt||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Q(t)))}function ot(t){return $(t)||nt(t)}X(ot,"isPrimitive",$),X(ot,"isObject",nt);var it=Number.POSITIVE_INFINITY,ut=tt.NEGATIVE_INFINITY;function at(t){return t<it&&t>ut&&W(t)}function ct(t){return $(t)&&at(t)}function lt(t){return nt(t)&&at(t.valueOf())}function ft(t){return ct(t)||lt(t)}function pt(t){return ct(t)&&t>=0}function st(t){return lt(t)&&t.valueOf()>=0}function gt(t){return pt(t)||st(t)}function yt(t){return Object.keys(Object(t))}X(ft,"isPrimitive",ct),X(ft,"isObject",lt),X(gt,"isPrimitive",pt),X(gt,"isObject",st);var bt=void 0!==Object.keys,vt=H();function dt(){return vt&&"symbol"==typeof Symbol.toStringTag}var ht=Object.prototype.toString;var mt=Object.prototype.hasOwnProperty;function wt(t,e){return null!=t&&mt.call(t,e)}var jt="function"==typeof Symbol?Symbol.toStringTag:"";var _t,Ot=dt()?function(t){var e,r,n;if(null==t)return ht.call(t);r=t[jt],e=wt(t,jt);try{t[jt]=void 0}catch(e){return ht.call(t)}return n=ht.call(t),e?t[jt]=r:delete t[jt],n}:function(t){return ht.call(t)};function St(t){return"[object Arguments]"===Ot(t)}_t=function(){return St(arguments)}();var Et=_t,xt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Tt,Pt=Object.defineProperty,It=Object.prototype,kt=It.toString,At=It.__defineGetter__,Vt=It.__defineSetter__,Ft=It.__lookupGetter__,Nt=It.__lookupSetter__;Tt=function(){try{return xt({},"x",{}),!0}catch(t){return!1}}()?Pt:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===kt.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===kt.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(Ft.call(t,e)||Nt.call(t,e)?(n=t.__proto__,t.__proto__=It,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&At&&At.call(t,e,r.get),u&&Vt&&Vt.call(t,e,r.set),t};var Bt=Tt;function Lt(t,e,r){Bt(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Ct(t){return"string"==typeof t}var Gt=String.prototype.valueOf;var Yt=dt();function Rt(t){return"object"==typeof t&&(t instanceof String||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object String]"===Ot(t)))}function Xt(t){return Ct(t)||Rt(t)}function Mt(t){return"number"==typeof t}Lt(Xt,"isPrimitive",Ct),Lt(Xt,"isObject",Rt);var Wt=Number,$t=Wt.prototype.toString;var Ht=dt();function Ut(t){return"object"==typeof t&&(t instanceof Wt||(Ht?function(t){try{return $t.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Ot(t)))}function Zt(t){return Mt(t)||Ut(t)}function Dt(t){return t!=t}function zt(t){return Mt(t)&&Dt(t)}function qt(t){return Ut(t)&&Dt(t.valueOf())}function Jt(t){return zt(t)||qt(t)}Lt(Zt,"isPrimitive",Mt),Lt(Zt,"isObject",Ut),Lt(Jt,"isPrimitive",zt),Lt(Jt,"isObject",qt);var Kt=Number.POSITIVE_INFINITY,Qt=Wt.NEGATIVE_INFINITY,te=Math.floor;function ee(t){return te(t)===t}function re(t){return t<Kt&&t>Qt&&ee(t)}function ne(t){return Mt(t)&&re(t)}function oe(t){return Ut(t)&&re(t.valueOf())}function ie(t){return ne(t)||oe(t)}Lt(ie,"isPrimitive",ne),Lt(ie,"isObject",oe);var ue=Object.prototype.propertyIsEnumerable;var ae=!ue.call("beep","0");function ce(t,e){var r;return null!=t&&(!(r=ue.call(t,e))&&ae&&Xt(t)?!zt(e=+e)&&ne(e)&&e>=0&&e<t.length:r)}var le=Array.isArray?Array.isArray:function(t){return"[object Array]"===Ot(t)};var fe=Et?St:function(t){return null!==t&&"object"==typeof t&&!le(t)&&"number"==typeof t.length&&ee(t.length)&&t.length>=0&&t.length<=4294967295&&wt(t,"callee")&&!ce(t,"callee")},pe=Array.prototype.slice;function se(t){return null!==t&&"object"==typeof t}function ge(){}Lt(se,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!le(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(se));var ye=ce(ge,"prototype"),be=!ce({toString:null},"toString");function ve(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ee(t.length)&&t.length>=0&&t.length<=9007199254740991}function de(t,e,r){var n,o;if(!ve(t)&&!Ct(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!ne(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(Jt(e)){for(;o<n;o++)if(Jt(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var he=/./,me="function"==typeof Object.defineProperty?Object.defineProperty:null;var we,je=Object.defineProperty,_e=Object.prototype,Oe=_e.toString,Se=_e.__defineGetter__,Ee=_e.__defineSetter__,xe=_e.__lookupGetter__,Te=_e.__lookupSetter__;we=function(){try{return me({},"x",{}),!0}catch(t){return!1}}()?je:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===Oe.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===Oe.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(xe.call(t,e)||Te.call(t,e)?(n=t.__proto__,t.__proto__=_e,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Se&&Se.call(t,e,r.get),u&&Ee&&Ee.call(t,e,r.set),t};var Pe=we;function Ie(t,e,r){Pe(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function ke(t){return"boolean"==typeof t}var Ae=H();function Ve(){return Ae&&"symbol"==typeof Symbol.toStringTag}var Fe=Object.prototype.toString;var Ne=Object.prototype.hasOwnProperty;var Be="function"==typeof Symbol?Symbol.toStringTag:"";var Le=Ve()?function(t){var e,r,n,o,i;if(null==t)return Fe.call(t);r=t[Be],i=Be,e=null!=(o=t)&&Ne.call(o,i);try{t[Be]=void 0}catch(e){return Fe.call(t)}return n=Fe.call(t),e?t[Be]=r:delete t[Be],n}:function(t){return Fe.call(t)},Ce=Boolean.prototype.toString;var Ge=Ve();function Ye(t){return"object"==typeof t&&(t instanceof Boolean||(Ge?function(t){try{return Ce.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Le(t)))}function Re(t){return ke(t)||Ye(t)}function Xe(){return new Function("return this;")()}Ie(Re,"isPrimitive",ke),Ie(Re,"isObject",Ye);var Me="object"==typeof self?self:null,We="object"==typeof window?window:null,$e="object"==typeof global?global:null;var He=function(t){if(arguments.length){if(!ke(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Xe()}if(Me)return Me;if(We)return We;if($e)return $e;throw new Error("unexpected error. Unable to resolve global object.")}(),Ue=He.document&&He.document.childNodes,Ze=Int8Array;function De(){return/^\s*function\s*([^(]*)/i}var ze=/^\s*function\s*([^(]*)/i;function qe(t){var e,r,n,o;if(("Object"===(r=Ot(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ze.exec(n.toString()))return e[1]}return se(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}Lt(De,"REGEXP",ze);var Je="function"==typeof he||"object"==typeof Ze||"function"==typeof Ue?function(t){return qe(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?qe(t).toLowerCase():e};function Ke(t){return t.constructor&&t.constructor.prototype===t}var Qe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],tr="undefined"==typeof window?void 0:window;var er=function(){var t;if("undefined"===Je(tr))return!1;for(t in tr)try{-1===de(Qe,t)&&wt(tr,t)&&null!==tr[t]&&"object"===Je(tr[t])&&Ke(tr[t])}catch(t){return!0}return!1}(),rr="undefined"!=typeof window;var nr,or=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];nr=bt?function(){return 2!==(yt(arguments)||"").length}(1,2)?function(t){return fe(t)?yt(pe.call(t)):yt(t)}:yt:function(t){var e,r,n,o,i,u,a;if(o=[],fe(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!wt(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!se(t))return o;r=ye&&n}for(i in t)r&&"prototype"===i||!wt(t,i)||o.push(String(i));if(be)for(e=function(t){if(!1===rr&&!er)return Ke(t);try{return Ke(t)}catch(t){return!1}}(t),a=0;a<or.length;a++)u=or[a],e&&"constructor"===u||!wt(t,u)||o.push(String(u));return o};var ir=nr;function ur(t){return"function"===Je(t)}var ar,cr=Object.getPrototypeOf;ar=ur(Object.getPrototypeOf)?cr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===Ot(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var lr=ar;var fr=Object.prototype;function pr(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!le(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),lr(t))}(t),!e||!wt(t,"constructor")&&wt(e,"constructor")&&ur(e.constructor)&&"[object Function]"===Ot(e.constructor)&&wt(e,"isPrototypeOf")&&ur(e.isPrototypeOf)&&(e===fr||function(t){var e;for(e in t)if(!wt(t,e))return!1;return!0}(t)))}var sr="function"==typeof Object.defineProperty?Object.defineProperty:null;var gr,yr=Object.defineProperty,br=Object.prototype,vr=br.toString,dr=br.__defineGetter__,hr=br.__defineSetter__,mr=br.__lookupGetter__,wr=br.__lookupSetter__;gr=function(){try{return sr({},"x",{}),!0}catch(t){return!1}}()?yr:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===vr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===vr.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(mr.call(t,e)||wr.call(t,e)?(n=t.__proto__,t.__proto__=br,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&dr&&dr.call(t,e,r.get),u&&hr&&hr.call(t,e,r.set),t};var jr=gr;function _r(t,e,r){jr(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var Or=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Sr(){return Or.slice()}var Er=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function xr(){return Er.slice()}function Tr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Pr(t,e,r){jr(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Ir(t){return Object.keys(Object(t))}var kr=void 0!==Object.keys,Ar=H();function Vr(){return Ar&&"symbol"==typeof Symbol.toStringTag}var Fr=Object.prototype.toString;var Nr=Object.prototype.hasOwnProperty;function Br(t,e){return null!=t&&Nr.call(t,e)}var Lr="function"==typeof Symbol?Symbol.toStringTag:"";var Cr,Gr=Vr()?function(t){var e,r,n;if(null==t)return Fr.call(t);r=t[Lr],e=Br(t,Lr);try{t[Lr]=void 0}catch(e){return Fr.call(t)}return n=Fr.call(t),e?t[Lr]=r:delete t[Lr],n}:function(t){return Fr.call(t)};function Yr(t){return"[object Arguments]"===Gr(t)}Cr=function(){return Yr(arguments)}();var Rr=Cr;function Xr(t){return"string"==typeof t}var Mr=String.prototype.valueOf;var Wr=Vr();function $r(t){return"object"==typeof t&&(t instanceof String||(Wr?function(t){try{return Mr.call(t),!0}catch(t){return!1}}(t):"[object String]"===Gr(t)))}function Hr(t){return Xr(t)||$r(t)}function Ur(t){return"number"==typeof t}_r(Hr,"isPrimitive",Xr),_r(Hr,"isObject",$r);var Zr=Number,Dr=Zr.prototype.toString;var zr=Vr();function qr(t){return"object"==typeof t&&(t instanceof Zr||(zr?function(t){try{return Dr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Gr(t)))}function Jr(t){return Ur(t)||qr(t)}function Kr(t){return t!=t}function Qr(t){return Ur(t)&&Kr(t)}function tn(t){return qr(t)&&Kr(t.valueOf())}function en(t){return Qr(t)||tn(t)}_r(Jr,"isPrimitive",Ur),_r(Jr,"isObject",qr),_r(en,"isPrimitive",Qr),_r(en,"isObject",tn);var rn=Number.POSITIVE_INFINITY,nn=Zr.NEGATIVE_INFINITY,on=Math.floor;function un(t){return on(t)===t}function an(t){return t<rn&&t>nn&&un(t)}function cn(t){return Ur(t)&&an(t)}function ln(t){return qr(t)&&an(t.valueOf())}function fn(t){return cn(t)||ln(t)}_r(fn,"isPrimitive",cn),_r(fn,"isObject",ln);var pn=Object.prototype.propertyIsEnumerable;var sn=!pn.call("beep","0");function gn(t,e){var r;return null!=t&&(!(r=pn.call(t,e))&&sn&&Hr(t)?!Qr(e=+e)&&cn(e)&&e>=0&&e<t.length:r)}var yn=Array.isArray?Array.isArray:function(t){return"[object Array]"===Gr(t)};var bn=Rr?Yr:function(t){return null!==t&&"object"==typeof t&&!yn(t)&&"number"==typeof t.length&&un(t.length)&&t.length>=0&&t.length<=4294967295&&Br(t,"callee")&&!gn(t,"callee")},vn=Array.prototype.slice;function dn(t){return null!==t&&"object"==typeof t}_r(dn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!yn(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(dn));var hn=gn(ge,"prototype"),mn=!gn({toString:null},"toString");function wn(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&un(t.length)&&t.length>=0&&t.length<=9007199254740991}function jn(t,e,r){var n,o;if(!wn(t)&&!Xr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!cn(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(en(e)){for(;o<n;o++)if(en(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var _n=/./;function On(){return new Function("return this;")()}var Sn="object"==typeof self?self:null,En="object"==typeof window?window:null,xn="object"==typeof global?global:null;var Tn=function(t){if(arguments.length){if(!ke(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return On()}if(Sn)return Sn;if(En)return En;if(xn)return xn;throw new Error("unexpected error. Unable to resolve global object.")}(),Pn=Tn.document&&Tn.document.childNodes,In=Int8Array;function kn(){return/^\s*function\s*([^(]*)/i}var An=/^\s*function\s*([^(]*)/i;function Vn(t){var e,r,n,o;if(("Object"===(r=Gr(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=An.exec(n.toString()))return e[1]}return dn(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}_r(kn,"REGEXP",An);var Fn="function"==typeof _n||"object"==typeof In||"function"==typeof Pn?function(t){return Vn(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Vn(t).toLowerCase():e};function Nn(t){return t.constructor&&t.constructor.prototype===t}var Bn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ln="undefined"==typeof window?void 0:window;var Cn=function(){var t;if("undefined"===Fn(Ln))return!1;for(t in Ln)try{-1===jn(Bn,t)&&Br(Ln,t)&&null!==Ln[t]&&"object"===Fn(Ln[t])&&Nn(Ln[t])}catch(t){return!0}return!1}(),Gn="undefined"!=typeof window;var Yn,Rn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Yn=kr?function(){return 2!==(Ir(arguments)||"").length}(1,2)?function(t){return bn(t)?Ir(vn.call(t)):Ir(t)}:Ir:function(t){var e,r,n,o,i,u,a;if(o=[],bn(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!Br(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!dn(t))return o;r=hn&&n}for(i in t)r&&"prototype"===i||!Br(t,i)||o.push(String(i));if(mn)for(e=function(t){if(!1===Gn&&!Cn)return Nn(t);try{return Nn(t)}catch(t){return!1}}(t),a=0;a<Rn.length;a++)u=Rn[a],e&&"constructor"===u||!Br(t,u)||o.push(String(u));return o};var Xn=Yn;_r(xr,"enum",Tr),function(t,e){var r,n,o;for(r=Xn(e),o=0;o<r.length;o++)Pr(t,n=r[o],e[n])}(xr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Mn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wn(){return{bool:Mn.bool,int8:Mn.int8,uint8:Mn.uint8,uint8c:Mn.uint8c,int16:Mn.int16,uint16:Mn.uint16,int32:Mn.int32,uint32:Mn.uint32,int64:Mn.int64,uint64:Mn.uint64,float32:Mn.float32,float64:Mn.float64,complex64:Mn.complex64,complex128:Mn.complex128,binary:Mn.binary,generic:Mn.generic,notype:Mn.notype,userdefined_type:Mn.userdefined_type}}_r(Sr,"enum",Wn),function(t,e){var r,n,o;for(r=Xn(e),o=0;o<r.length;o++)Pr(t,n=r[o],e[n])}(Sr,Wn());var $n=function(t,e){var r,n,o,i,u,a,c,l=!0;if(!se(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!pr(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(wt(e,"duplicates")&&!ke(l=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(n=(r=ir(t)).length,u={},l)for(c=0;c<n;c++)wt(u,i=t[o=r[c]])?(a=u[i],le(a)?u[i].push(o):u[i]=[a,o]):u[i]=o;else for(c=0;c<n;c++)u[t[o=r[c]]]=o;return u}(Wn(),{duplicates:!1});var Hn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Un(){var t;return 0===arguments.length?Hn.all.slice():(t=Hn[arguments[0]])?t.slice():[]}function Zn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Dn(t,e,r){R(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function zn(t){return Object.keys(Object(t))}var qn,Jn=void 0!==Object.keys;function Kn(t){return"[object Arguments]"===Q(t)}qn=function(){return Kn(arguments)}();var Qn=qn;function to(t){return"string"==typeof t}var eo=String.prototype.valueOf;var ro=Z();function no(t){return"object"==typeof t&&(t instanceof String||(ro?function(t){try{return eo.call(t),!0}catch(t){return!1}}(t):"[object String]"===Q(t)))}function oo(t){return to(t)||no(t)}function io(t){return t!=t}function uo(t){return $(t)&&io(t)}function ao(t){return nt(t)&&io(t.valueOf())}function co(t){return uo(t)||ao(t)}X(oo,"isPrimitive",to),X(oo,"isObject",no),X(co,"isPrimitive",uo),X(co,"isObject",ao);var lo=Object.prototype.propertyIsEnumerable;var fo=!lo.call("beep","0");function po(t,e){var r;return null!=t&&(!(r=lo.call(t,e))&&fo&&oo(t)?!uo(e=+e)&&ct(e)&&e>=0&&e<t.length:r)}var so=Array.isArray?Array.isArray:function(t){return"[object Array]"===Q(t)};var go=Qn?Kn:function(t){return null!==t&&"object"==typeof t&&!so(t)&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=4294967295&&q(t,"callee")&&!po(t,"callee")},yo=Array.prototype.slice;function bo(t){return null!==t&&"object"==typeof t}X(bo,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!so(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(bo));var vo=po((function(){}),"prototype"),ho=!po({toString:null},"toString");function mo(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=9007199254740991}function wo(t,e,r){var n,o;if(!mo(t)&&!to(t))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!ct(r))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(co(e)){for(;o<n;o++)if(co(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var jo=/./;function _o(t){return"boolean"==typeof t}var Oo=Boolean,So=Boolean.prototype.toString;var Eo=Z();function xo(t){return"object"==typeof t&&(t instanceof Oo||(Eo?function(t){try{return So.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Q(t)))}function To(t){return _o(t)||xo(t)}function Po(){return new Function("return this;")()}X(To,"isPrimitive",_o),X(To,"isObject",xo);var Io="object"==typeof self?self:null,ko="object"==typeof window?window:null,Ao="object"==typeof global?global:null,Vo="object"==typeof globalThis?globalThis:null;var Fo=function(t){if(arguments.length){if(!_o(t))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Po()}if(Vo)return Vo;if(Io)return Io;if(ko)return ko;if(Ao)return Ao;throw new Error("unexpected error. Unable to resolve global object.")}(),No=Fo.document&&Fo.document.childNodes,Bo=Int8Array;function Lo(){return/^\s*function\s*([^(]*)/i}var Co=/^\s*function\s*([^(]*)/i;function Go(t){var e,r,n,o;if(("Object"===(r=Q(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Co.exec(n.toString()))return e[1]}return bo(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}X(Lo,"REGEXP",Co);var Yo="function"==typeof jo||"object"==typeof Bo||"function"==typeof No?function(t){return Go(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Go(t).toLowerCase():e};function Ro(t){return t.constructor&&t.constructor.prototype===t}var Xo=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Mo="undefined"==typeof window?void 0:window;var Wo=function(){var t;if("undefined"===Yo(Mo))return!1;for(t in Mo)try{-1===wo(Xo,t)&&q(Mo,t)&&null!==Mo[t]&&"object"===Yo(Mo[t])&&Ro(Mo[t])}catch(t){return!0}return!1}(),$o="undefined"!=typeof window;var Ho,Uo=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ho=Jn?function(){return 2!==(zn(arguments)||"").length}(1,2)?function(t){return go(t)?zn(yo.call(t)):zn(t)}:zn:function(t){var e,r,n,o,i,u,a;if(o=[],go(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!q(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!bo(t))return o;r=vo&&n}for(i in t)r&&"prototype"===i||!q(t,i)||o.push(String(i));if(ho)for(e=function(t){if(!1===$o&&!Wo)return Ro(t);try{return Ro(t)}catch(t){return!1}}(t),a=0;a<Uo.length;a++)u=Uo[a],e&&"constructor"===u||!q(t,u)||o.push(String(u));return o};var Zo=Ho;X(Un,"enum",Zn),function(t,e){var r,n,o;for(r=Zo(e),o=0;o<r.length;o++)Dn(t,n=r[o],e[n])}(Un,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Do={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function zo(t){var e=typeof t;return"string"===e?null===function(t){var e=Do[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=$n[t];return"string"==typeof e?e:null}(t):null}function qo(t,e,r){var n,o,i,u,a,c,l,f,p;if(!("object"==typeof(p=t)&&null!==p&&"number"==typeof p.length&&W(p.length)&&p.length>=0&&p.length<=4294967295))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(!pt(e))throw new TypeError(V("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(!pt(r))throw new TypeError(V("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",r));if(0===(n=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(n%(a=e+r)!=0)throw new RangeError("invalid arguments. Length of the first argument is incompatible with the second and third arguments.");for(o=[],i=[],c=2*a,f=2*e,l=0;l<=c;l++)0===l?l===f?i.push("() => ("):i.push("("):l===c?l===f?i.push(") => ()"):i.push(")"):l===f?i.push(") => ("):l%2==1?i.push(""):i.push(", ");for(l=0;l<n;l++)null===(u=zo(t[l]))&&(u=t[l]),i[2*(f=l%a)+1]=u,f===a-1&&o.push(i.join(""));return o}return function(t,e,r){return X(r,"nargs",t.nargs),X(r,"nin",t.nin),X(r,"nout",t.nout),function(t,e,r){R(t,e,{configurable:!1,enumerable:!1,get:r})}(r,"types",(function(){return qo(e,t.nin,t.nout)})),r}}));
//# sourceMappingURL=index.js.map