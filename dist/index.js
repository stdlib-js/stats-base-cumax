"use strict";var b=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(t){throw (a=0, t)}};};var Z=b(function(J,y){
var p=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-positive-zero/dist');function A(o,a,t,l,e,c,m){var i,n,s,f,v,u,r,x,q;if(i=a.data,n=e.data,s=a.accessors[0],f=e.accessors[1],u=l,r=m,v=s(i,u),f(n,r,v),r+=c,q=1,p(v)===!1)for(q;q<o;q++){if(u+=t,x=s(i,u),p(x)){v=x;break}(x>v||x===v&&z(x))&&(v=x),f(n,r,v),r+=c}if(p(v))for(q;q<o;q++)f(n,r,v),r+=c;return e}y.exports=A
});var k=b(function(K,j){
var P=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-positive-zero/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),C=Z();function D(o,a,t,l,e,c,m){var i,n,s,f,v,u,r;if(o<=0)return e;if(f=g(a),v=g(e),f.accessorProtocol||v.accessorProtocol)return C(o,f,t,l,v,c,m),e;if(n=l,s=m,i=a[n],e[s]=i,s+=c,r=1,P(i)===!1)for(r;r<o;r++){if(n+=t,u=a[n],P(u)){i=u;break}(u>i||u===i&&B(u))&&(i=u),e[s]=i,s+=c}if(P(i))for(r;r<o;r++)e[s]=i,s+=c;return e}j.exports=D
});var h=b(function(L,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),E=k();function F(o,a,t,l,e){var c=O(o,t),m=O(o,e);return E(o,a,t,c,l,e,m)}R.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),H=k();G(w,"ndarray",H);module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
