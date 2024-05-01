"use strict";var x=function(v,f){return function(){return f||v((f={exports:{}}).exports,f),f.exports}};var p=x(function(C,l){
var q=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-positive-zero/dist');function g(v,f,c,n,u){var e,s,r,i,a;if(v<=0)return n;if(c<0?s=(1-v)*c:s=0,u<0?r=(1-v)*u:r=0,e=f[s],n[r]=e,r+=u,a=1,q(e)===!1)for(a;a<v;a++){if(s+=c,i=f[s],q(i)){e=i;break}(i>e||i===e&&R(i))&&(e=i),n[r]=e,r+=u}if(q(e))for(a;a<v;a++)n[r]=e,r+=u;return n}l.exports=g
});var k=x(function(D,b){
var m=require('@stdlib/math-base-assert-is-nan/dist'),h=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(v,f,c,n,u,e,s){var r,i,a,o,t;if(v<=0)return u;if(i=n,a=s,r=f[i],u[a]=r,a+=e,t=1,m(r)===!1)for(t;t<v;t++){if(i+=c,o=f[i],m(o)){r=o;break}(o>r||o===r&&h(o))&&(r=o),u[a]=r,a+=e}if(m(r))for(t;t<v;t++)u[a]=r,a+=e;return u}b.exports=j
});var O=x(function(E,Z){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=p(),z=k();w(P,"ndarray",z);Z.exports=P
});var A=O();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
