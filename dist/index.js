"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(q,n){
var a=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-infinite/dist'),f=require('@stdlib/math-base-special-floor/dist');function v(i){var r,e;return a(i)||s(i)||i===0?i:(e=f(i),r=i-e,r>.5?e+1:r<.5||e%2===0?e:e+1)}n.exports=v
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
