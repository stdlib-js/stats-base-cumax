// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var c=r;function _(e){return e!=e}var p=Number.POSITIVE_INFINITY;function d(e){return 0===e&&1/e===p}function b(e,r,t,n,o){var a,i,u,f,l;if(e<=0)return n;if(u=o<0?(1-e)*o:0,a=r[i=t<0?(1-e)*t:0],n[u]=a,u+=o,l=1,!1===_(a))for(;l<e;l++){if(_(f=r[i+=t])){a=f;break}(f>a||f===a&&d(f))&&(a=f),n[u]=a,u+=o}if(_(a))for(;l<e;l++)n[u]=a,u+=o;return n}c(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,a,i){var u,f,l,c,p;if(e<=0)return o;if(l=i,u=r[f=n],o[l]=u,l+=a,p=1,!1===_(u))for(;p<e;p++){if(_(c=r[f+=t])){u=c;break}(c>u||c===u&&d(c))&&(u=c),o[l]=u,l+=a}if(_(u))for(;p<e;p++)o[l]=u,l+=a;return o}});const{ndarray:y}=b;e.default=b,e.ndarray=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).cumax={});
//# sourceMappingURL=browser.js.map
