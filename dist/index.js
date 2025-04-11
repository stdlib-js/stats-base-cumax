"use strict";var b=function(v,o){return function(){return o||v((o={exports:{}}).exports,o),o.exports}};var Z=b(function(J,y){
var p=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-positive-zero/dist');function A(v,o,f,l,a,c,m){var e,t,s,n,i,u,r,x,q;if(e=o.data,t=a.data,s=o.accessors[0],n=a.accessors[1],u=l,r=m,i=s(e,u),n(t,r,i),r+=c,q=1,p(i)===!1)for(q;q<v;q++){if(u+=f,x=s(e,u),p(x)){i=x;break}(x>i||x===i&&z(x))&&(i=x),n(t,r,i),r+=c}if(p(i))for(q;q<v;q++)n(t,r,i),r+=c;return a}y.exports=A
});var k=b(function(K,j){
var P=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-positive-zero/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),C=Z();function D(v,o,f,l,a,c,m){var e,t,s,n,i,u,r;if(v<=0)return a;if(n=g(o),i=g(a),n.accessorProtocol||i.accessorProtocol)return C(v,n,f,l,i,c,m),a;if(t=l,s=m,e=o[t],a[s]=e,s+=c,r=1,P(e)===!1)for(r;r<v;r++){if(t+=f,u=o[t],P(u)){e=u;break}(u>e||u===e&&B(u))&&(e=u),a[s]=e,s+=c}if(P(e))for(r;r<v;r++)a[s]=e,s+=c;return a}j.exports=D
});var h=b(function(L,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),E=k();function F(v,o,f,l,a){var c=O(v,f),m=O(v,a);return E(v,o,f,c,l,a,m)}R.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),H=k();G(w,"ndarray",H);module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
