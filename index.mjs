// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";function i(i){var n,r;return s(i)||t(i)||0===i?i:(n=i-(r=e(i)))>.5?r+1:n<.5||r%2==0?r:r+1}export{i as default};
//# sourceMappingURL=index.mjs.map
