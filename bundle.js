// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).cumax=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},_=r()?l:c;var p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})};var b=function(e){return e!=e},d=Number.POSITIVE_INFINITY;var y=function(e){return 0===e&&1/e===d},s=b,v=y;var m=b,j=y;var g=function(e,r,t,n,o){var i,a,u,f,l;if(e<=0)return n;if(u=o<0?(1-e)*o:0,i=r[a=t<0?(1-e)*t:0],n[u]=i,u+=o,l=1,!1===s(i))for(;l<e;l++){if(f=r[a+=t],s(f)){i=f;break}(f>i||f===i&&v(f))&&(i=f),n[u]=i,u+=o}if(s(i))for(;l<e;l++)n[u]=i,u+=o;return n};return p(g,"ndarray",(function(e,r,t,n,o,i,a){var u,f,l,c,_;if(e<=0)return o;if(l=a,u=r[f=n],o[l]=u,l+=i,_=1,!1===m(u))for(;_<e;_++){if(c=r[f+=t],m(c)){u=c;break}(c>u||c===u&&j(c))&&(u=c),o[l]=u,l+=i}if(m(u))for(;_<e;_++)o[l]=u,l+=i;return o})),g}));
//# sourceMappingURL=bundle.js.map
