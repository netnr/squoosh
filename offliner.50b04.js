(self.webpackJsonp=self.webpackJsonp||[]).push([[0],{54:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});class r{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise((n,r)=>{const i=indexedDB.open(e,1);i.onerror=(()=>r(i.error)),i.onsuccess=(()=>n(i.result)),i.onupgradeneeded=(()=>{i.result.createObjectStore(t)})})}_withIDBStore(e,t){return this._dbp.then(n=>new Promise((r,i)=>{const o=n.transaction(this.storeName,e);o.oncomplete=(()=>r()),o.onabort=o.onerror=(()=>i(o.error)),t(o.objectStore(this.storeName))}))}}let i;function o(){return i||(i=new r),i}function a(e,t=o()){let n;return t._withIDBStore("readonly",t=>{n=t.get(e)}).then(()=>n.result)}function s(e,t,n=o()){return n._withIDBStore("readwrite",n=>{n.put(t,e)})}},56:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"offliner",function(){return o}),n.d(t,"mainAppLoaded",function(){return a});var r=n(54);async function i(e){if(e.waiting)return;const t=await async function(e){return e.installing?e.installing:new Promise(t=>{e.addEventListener("updatefound",()=>t(e.installing),{once:!0})})}(e);return new Promise(e=>{t.addEventListener("statechange",()=>{"installed"===t.state&&e()})})}async function o(t){if("boolean"==typeof PRERENDER)return;navigator.serviceWorker.register(e);const n=!!navigator.serviceWorker.controller;if(navigator.serviceWorker.addEventListener("controllerchange",async()=>{n?location.reload():t("Ready to work offline",{timeout:5e3})}),!n)return;const r=await navigator.serviceWorker.getRegistration();r&&(await i(r),"reload"===await t("Update available",{actions:["reload","dismiss"]})&&async function(){const e=await navigator.serviceWorker.getRegistration();e&&e.waiting&&e.waiting.postMessage("skip-waiting")}())}async function a(){if(await Object(r.a)("user-interacted"))return;Object(r.b)("user-interacted",!0);const e=await async function(){const e=await navigator.serviceWorker.getRegistration();return e?e.active||e.waiting||e.installing:null}();e&&e.postMessage("cache-all")}}.call(this,n.p+"serviceworker.js")}}]);
//# sourceMappingURL=offliner.50b04.js.map