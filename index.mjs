// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";var s=e,i=t;var n=e,a=t;var f=function(r,e,t,n,a){var f,o,d,m,l;if(r<=0)return n;if(d=a<0?(1-r)*a:0,f=e[o=t<0?(1-r)*t:0],n[d]=f,d+=a,l=1,!1===s(f))for(;l<r;l++){if(m=e[o+=t],s(m)){f=m;break}(m>f||m===f&&i(m))&&(f=m),n[d]=f,d+=a}if(s(f))for(;l<r;l++)n[d]=f,d+=a;return n};r(f,"ndarray",(function(r,e,t,s,i,f,o){var d,m,l,p,v;if(r<=0)return i;if(l=o,d=e[m=s],i[l]=d,l+=f,v=1,!1===n(d))for(;v<r;v++){if(p=e[m+=t],n(p)){d=p;break}(p>d||p===d&&a(p))&&(d=p),i[l]=d,l+=f}if(n(d))for(;v<r;v++)i[l]=d,l+=f;return i}));var o=f;export{o as default};
//# sourceMappingURL=index.mjs.map
