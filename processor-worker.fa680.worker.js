!function(e){self.webpackChunk=function(t,r){for(var o in r)e[o]=r[o];for(;t.length;)n[t.pop()]=1};var t={},n={7:1};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[];return t.push(Promise.resolve().then(function(){n[e]||importScripts(({0:"process-imagequant",1:"process-mozjpeg-enc",2:"process-optipng",3:"process-resize",4:"process-rotate",5:"process-webp-dec",6:"process-webp-enc"}[e]||e)+"."+{0:"6b09e",1:"6dc41",2:"2a361",3:"77423",4:"541e4",5:"68b29",6:"193a9"}[e]+".worker.js")})),Promise.all(t)},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);const r=["ArrayBuffer","MessagePort","OffscreenCanvas"].filter(e=>e in self).map(e=>self[e]),o=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),a=Symbol("proxyValue"),s=Symbol("throw"),i=new Map([["PROXY",{canHandle:e=>e&&e[a],serialize:e=>{const{port1:t,port2:n}=new MessageChannel;return c(e,t),n},deserialize:e=>(function(e,t){w(e)&&(e=d(e));if(!y(e))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");return h(e),function e(t,n=[],r=function(){}){return new Proxy(r,{construct:(e,r,o)=>t({type:"CONSTRUCT",callPath:n,argumentsList:r}),apply:(r,o,a)=>"bind"===n[n.length-1]?e(t,n.slice(0,-1)):t({type:"APPLY",callPath:n,argumentsList:a}),get(r,o,a){if("then"===o&&0===n.length)return{then:()=>a};if("then"===o){const e=t({type:"GET",callPath:n});return Promise.resolve(e).then.bind(e)}return e(t,n.concat(o),r[o])},set:(e,r,o,a)=>t({type:"SET",callPath:n,property:r,value:o})})}(async t=>{let n=[];return"APPLY"!==t.type&&"CONSTRUCT"!==t.type||(n=t.argumentsList.map(l)),f((await function(e,t,n){const r=`${o}-${u++}`;return new Promise(o=>{v(e,function t(n){n.data.id===r&&(function(e,t){e.removeEventListener("message",t)}(e,t),o(n))}),t=Object.assign({},t,{id:r}),e.postMessage(t,n)})}(e,Object.assign({},t,{argumentsList:n}),m(n))).data.value)},[],t)})(e)}],["THROW",{canHandle:e=>e&&e[s],serialize:e=>{const t=e&&e.message,n=e&&e.stack;return Object.assign({},e,{message:t,stack:n})},deserialize:e=>{throw Object.assign(Error(),e)}}]]);let u=0;function c(e,t){if(w(t)&&(t=d(t)),!y(t))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");h(t),v(t,async function(n){if(!n.data.id||!n.data.callPath)return;const r=n.data;let o=await r.callPath.slice(0,-1).reduce((e,t)=>e[t],e),u=await r.callPath.reduce((e,t)=>e[t],e),c=u,l=[];if("APPLY"!==r.type&&"CONSTRUCT"!==r.type||(l=r.argumentsList.map(f)),"APPLY"===r.type)try{c=await u.apply(o,l)}catch(p){(c=p)[s]=!0}if("CONSTRUCT"===r.type)try{c=function(e){return e[a]=!0,e}(c=new u(...l))}catch(p){(c=p)[s]=!0}return"SET"===r.type&&(u[r.property]=r.value,c=!0),(c=function(e){for(const[t,n]of i)if(n.canHandle(e)){const r=n.serialize(e);return{value:{type:t,value:r}}}return{value:{type:"RAW",value:e}}}(c)).id=r.id,t.postMessage(c,m([c]))})}function l(e){for(const[n,r]of i)if(r.canHandle(e))return{type:n,value:r.serialize(e)};let t=[];for(const n of b(e))for(const[e,r]of i)r.canHandle(n.value)&&t.push({path:n.path,wrappedValue:{type:e,value:r.serialize(n.value)}});for(const n of t){n.path.slice(0,-1).reduce((e,t)=>e[t],e)[n.path[n.path.length-1]]=null}return{type:"RAW",value:e,wrappedChildren:t}}function f(e){if(i.has(e.type)){return i.get(e.type).deserialize(e.value)}if(function(e){return"RAW"===e.type}(e)){for(const t of e.wrappedChildren||[]){if(!i.has(t.wrappedValue.type))throw Error(`Unknown value type "${e.type}" at ${t.path.join(".")}`);const n=i.get(t.wrappedValue.type).deserialize(t.wrappedValue.value);p(e.value,t.path,n)}return e.value}throw Error(`Unknown value type "${e.type}"`)}function p(e,t,n){const r=t.slice(-1)[0];t.slice(0,-1).reduce((e,t)=>e[t],e)[r]=n}function d(e){if("Window"!==self.constructor.name)throw Error("self is not a window");return{addEventListener:self.addEventListener.bind(self),removeEventListener:self.removeEventListener.bind(self),postMessage:(t,n)=>e.postMessage(t,"*",n)}}function y(e){return"addEventListener"in e&&"removeEventListener"in e&&"postMessage"in e}function h(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.start()}function v(e,t){e.addEventListener("message",t)}function w(e){return["window","length","location","parent","opener"].every(t=>t in e)}function g(e){return r.some(t=>e instanceof t)}function*b(e,t=[],n=null){if(!e)return;if(n||(n=new WeakSet),n.has(e))return;if("string"==typeof e)return;if("object"==typeof e&&n.add(e),ArrayBuffer.isView(e))return;yield{value:e,path:t};const r=Object.keys(e);for(const o of r)yield*b(e[o],[...t,o],n)}function m(e){const t=[];for(const n of b(e))g(n.value)&&t.push(n.value);return t}c({mozjpegEncode:async function(e,t){const{encode:r}=await n.e(1).then(n.bind(null,15));return r(e,t)},quantize:async function(e,t){const{process:r}=await n.e(0).then(n.bind(null,16));return r(e,t)},rotate:async function(e,t){const{rotate:r}=await n.e(4).then(n.bind(null,17));return r(e,t)},resize:async function(e,t){const{resize:r}=await n.e(3).then(n.bind(null,21));return r(e,t)},optiPngEncode:async function(e,t){const{compress:r}=await n.e(2).then(n.bind(null,18));return r(e,t)},webpEncode:async function(e,t){const{encode:r}=await n.e(6).then(n.bind(null,19));return r(e,t)},webpDecode:async function(e){const{decode:t}=await n.e(5).then(n.bind(null,20));return t(e)}},self)}]);
//# sourceMappingURL=processor-worker.fa680.worker.js.map