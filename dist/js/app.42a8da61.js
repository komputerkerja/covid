(function(e){function t(t){for(var r,c,o=t[0],u=t[1],i=t[2],d=0,j=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&j.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(j.length)j.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"844f9b18"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(e);var i=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3555:function(e,t,n){},3785:function(e,t,n){"use strict";n("4570")},4570:function(e,t,n){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"},s=Object(r["f"])("Home"),c=Object(r["f"])(" | "),o=Object(r["f"])("About");function u(e,t){var n=Object(r["w"])("router-link"),u=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",a,[Object(r["g"])(n,{to:"/"},{default:Object(r["B"])((function(){return[s]})),_:1}),c,Object(r["g"])(n,{to:"/about"},{default:Object(r["B"])((function(){return[o]})),_:1})]),Object(r["g"])(u)],64)}n("3785");var i=n("6b0d"),d=n.n(i);const f={},j=d()(f,[["render",u]]);var b=j,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m={class:"home"};function h(e,t,n,a,s,c){var o=Object(r["w"])("MyHeader"),u=Object(r["w"])("MyCountries");return Object(r["p"])(),Object(r["d"])("div",m,[Object(r["g"])(o,{lastUpdate:e.lastUpdate,confirmed:e.confirmed,deaths:e.deaths},null,8,["lastUpdate","confirmed","deaths"]),Object(r["g"])(u,{onGetCountryData:c.getCountryData,countries:e.countries},null,8,["onGetCountryData","countries"])])}var p=n("1da1"),v=(n("96cf"),{class:"header"}),g={class:"content"},y={class:"tgl"};function O(e,t,n,a,s,c){return Object(r["p"])(),Object(r["d"])("div",v,[Object(r["e"])("div",g,[Object(r["e"])("h2",null,"Terkonfirmasi : "+Object(r["y"])(n.confirmed)+" Kasus",1),Object(r["e"])("h2",null,"Meninggal : "+Object(r["y"])(n.deaths)+" Kasus",1),Object(r["e"])("p",y,"Update "+Object(r["y"])(n.lastUpdate),1)])])}var k={props:["confirmed","deaths","lastUpdate"],name:"Header"};n("7cc9");const w=d()(k,[["render",O],["__scopeId","data-v-6ffff335"]]);var x=w,z=(n("b0c0"),function(e){return Object(r["s"])("data-v-c7b476d8"),e=e(),Object(r["q"])(),e}),C=z((function(){return Object(r["e"])("option",{value:"0"},"Semua Negara",-1)})),M=["value"];function D(e,t,n,a,s,c){return Object(r["p"])(),Object(r["d"])("select",{id:"selectCountry",onChange:t[0]||(t[0]=function(e){return c.onChange()})},[C,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.countries,(function(e,t){return Object(r["p"])(),Object(r["d"])("option",{value:e.iso3},Object(r["y"])(e.name),9,M)})),256))],32)}var _={props:["countries"],data:function(){return{selected:0}},name:"Countries",methods:{onChange:function(){var e=document.getElementById("selectCountry");this.$emit("getCountryData",e.value)}}};n("c7c8");const U=d()(_,[["render",D],["__scopeId","data-v-c7b476d8"]]);var P=U,R=n("c1df"),Y={name:"Home",components:{MyHeader:x,MyCountries:P},data:function(){return{countries:[],dataCovid:[],fillterByCountry:"",confirmed:"",deaths:"",lastUpdate:""}},methods:{getDataCovid:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new Intl.NumberFormat("en"),e.next=3,fetch("https://covid19.mathdro.id/api");case 3:return n=e.sent,e.next=6,n.json();case 6:n=e.sent,this.confirmed=t.format(n.confirmed.value),this.deaths=t.format(n.deaths.value),this.lastUpdate=R(n.lastUpdate).format("DD MMM YYYY hh:mm");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getCountry:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,this.countries=t.countries;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getCountryData:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("0"==t){e.next=14;break}return n=new Intl.NumberFormat("en"),this.fillterByCountry=t,e.next=5,fetch("https://covid19.mathdro.id/api/countries/"+t);case 5:return r=e.sent,e.next=8,r.json();case 8:r=e.sent,this.confirmed=n.format(r.confirmed.value),this.deaths=n.format(r.deaths.value),this.lastUpdate=R(r.lastUpdate).format("DD MMM YYYY hh:mm"),e.next=16;break;case 14:return e.next=16,this.getDataCovid();case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getCountry();case 2:return t.next=4,e.getDataCovid();case 4:case"end":return t.stop()}}),t)})))()}};const E=d()(Y,[["render",h]]);var H=E,S=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],T=Object(l["a"])({history:Object(l["b"])("/"),routes:S}),B=T;Object(r["c"])(b).use(B).mount("#app")},"7cc9":function(e,t,n){"use strict";n("8db9")},"8db9":function(e,t,n){},c7c8:function(e,t,n){"use strict";n("3555")}});
//# sourceMappingURL=app.42a8da61.js.map