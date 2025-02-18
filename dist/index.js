"use strict";var b=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var Z=b(function(M,y){
var p=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-positive-zero/dist');function C(v,u,f,m,a,c,l){var e,t,o,n,i,s,r,x,q;if(e=u.data,t=a.data,o=u.accessors[0],n=a.accessors[1],s=m,r=l,i=o(e,s),n(t,r,i),r+=c,q=1,p(i)===!1)for(q;q<v;q++){if(s+=f,x=o(e,s),p(x)){i=x;break}(x>i||x===i&&B(x))&&(i=x),n(t,r,i),r+=c}if(p(i))for(q;q<v;q++)n(t,r,i),r+=c;return a}y.exports=C
});var k=b(function(Q,j){
var P=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/math-base-assert-is-positive-zero/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),E=Z();function F(v,u,f,m,a,c,l){var e,t,o,n,i,s,r;if(v<=0)return a;if(n=g(u),i=g(a),n.accessorProtocol||i.accessorProtocol)return E(v,n,f,m,i,c,l),a;if(t=m,o=l,e=u[t],a[o]=e,o+=c,r=1,P(e)===!1)for(r;r<v;r++){if(t+=f,s=u[t],P(s)){e=s;break}(s>e||s===e&&D(s))&&(e=s),a[o]=e,o+=c}if(P(e))for(r;r<v;r++)a[o]=e,o+=c;return a}j.exports=F
});var h=b(function(S,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),G=k();function H(v,u,f,m,a){var c=O(v,f),l=O(v,a);return G(v,u,f,c,m,a,l)}R.exports=H
});var A=b(function(T,z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),J=k();I(w,"ndarray",J);z.exports=w
});var K=A();module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
