(function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.itemToSearch,expression:"itemToSearch"}],attrs:{type:"text"},domProps:{value:e.itemToSearch},on:{input:function(t){t.target.composing||(e.itemToSearch=t.target.value)}}}),n("button",{on:{click:e.searchItems}},[e._v(" Cerca ")]),n("h2",[e._v("FILM")]),e._l(e.currentMovies,(function(t){return n("ul",{key:t.id},[n("li",[e._v("Titolo: "+e._s(t.title))]),n("li",[e._v("Titolo originale: "+e._s(t.original_title))]),n("li",[e._v(" Lingua: "),n("span",{class:t.original_language?"flag-icon flag-icon-"+t.original_language:"flag-icon flag-icon-xx"}),e._v(e._s(t.original_language)+" ")]),n("li",[e._v("Voto: "+e._s(t.vote_average))])])})),n("h2",[e._v("SERIE")]),e._l(e.currentSeries,(function(t){return n("ul",{key:t.id},[n("li",[e._v("Titolo: "+e._s(t.name))]),n("li",[e._v("Titolo originale: "+e._s(t.original_name))]),n("li",[e._v(" Lingua: "),n("span",{class:t.original_language?"flag-icon flag-icon-"+t.original_language:"flag-icon flag-icon-xx"}),e._v(e._s(t.original_language)+" ")]),n("li",[e._v("Voto: "+e._s(t.vote_average))])])}))],2)},a=[],o=n("bc3a"),l=n.n(o),u={name:"App",data:function(){return{apiUrl:"https://api.themoviedb.org/3/search/",apiKey:"031b25f0ecd29749a18d82fd3135886f",currentMovies:[],currentSeries:[],itemToSearch:""}},methods:{apiSearch:function(e,t){var n=this;l.a.get(this.apiUrl+e,{params:{api_key:this.apiKey,query:this.itemToSearch}}).then((function(e){n[t]=e.data.results}))},searchItems:function(){this.apiSearch("movie","currentMovies"),this.apiSearch("tv","currentSeries")}}},c=u,s=n("2877"),p=Object(s["a"])(c,i,a,!1,null,null,null),f=p.exports;n("655c");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.e0817a48.js.map