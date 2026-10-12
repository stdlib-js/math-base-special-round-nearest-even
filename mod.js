// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;var t=Math.floor;function u(u){var I,e;return function(r){return r!=r}(u)||function(t){return t===r||t===n}(u)||0===u?u:(I=u-(e=t(u)))>.5?e+1:I<.5||e%2==0?e:e+1}export{u as default};
//# sourceMappingURL=mod.js.map
