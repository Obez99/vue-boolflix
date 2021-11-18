(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,c=1;c<r.length;c++){var s=r[c];0!==n[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},5452:function(e,t,r){"use strict";r("af35")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{on:{search:e.searchItems}}),r("h2",[e._v("FILM")]),e._l(e.currentMovies,(function(e){return r("Card",{key:e.id,attrs:{rawCardData:e}})})),r("h2",[e._v("SERIE")]),e._l(e.currentSeries,(function(e){return r("Card",{key:e.id,attrs:{rawCardData:e}})}))],2)},i=[],o=r("bc3a"),c=r.n(o),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"px-5"},[r("h1",[e._v("BOOLFLIX")]),r("SearchBar",{on:{search:e.sendQuery}})],1)},l=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.itemToSearch,expression:"itemToSearch"}],staticClass:"me-3",attrs:{type:"text"},domProps:{value:e.itemToSearch},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchItem.apply(null,arguments)},input:function(t){t.target.composing||(e.itemToSearch=t.target.value)}}}),r("button",{staticClass:"btn btn-danger",on:{click:e.searchItem}},[e._v("Cerca")])])},d=[],f={name:"SearchBar",data:function(){return{itemToSearch:""}},methods:{searchItem:function(){this.$emit("search",this.itemToSearch)}}},p=f,h=r("2877"),m=Object(h["a"])(p,u,d,!1,null,null,null),v=m.exports,g={name:"Header",components:{SearchBar:v},methods:{sendQuery:function(e){this.$emit("search",e)}}},_=g,b=(r("5452"),Object(h["a"])(_,s,l,!1,null,null,null)),y=b.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"movie-card"},[r("img",{attrs:{src:e.imageUrl+e.rawCardData.poster_path,alt:e.rawCardData.original_title}}),r("ul",[e.rawCardData.title?r("li",[e._v("Titolo: "+e._s(e.rawCardData.title))]):r("li",[e._v("Titolo: "+e._s(e.rawCardData.name))]),e.rawCardData.original_title?r("li",[e._v(" Titolo originale: "+e._s(e.rawCardData.original_title)+" ")]):r("li",[e._v("Titolo originale: "+e._s(e.rawCardData.original_name))]),r("li",[e._v(" Lingua: "),r("span",{class:e.rawCardData.original_language?"flag-icon flag-icon-"+e.rawCardData.original_language:"flag-icon flag-icon-xx"}),e._v(e._s(e.rawCardData.original_language)+" ")]),r("li",[e._v(" Voto: "),e._l(e.cardData.stars,(function(e){return r("i",{key:e,staticClass:"fa fa-star"})}))],2)])])},C=[],S={name:"Card",props:{rawCardData:Object},data:function(){return{imageUrl:"https://image.tmdb.org/t/p/w342/"}},computed:{cardData:function(){return{stars:this.convertRating(this.rawCardData["vote_average"])}}},methods:{convertRating:function(e){return Math.round(e/2)}}},O=S,x=(r("e60d"),Object(h["a"])(O,w,C,!1,null,null,null)),D=x.exports,T={name:"App",components:{Header:y,Card:D},data:function(){return{apiUrl:"https://api.themoviedb.org/3",apiKey:"031b25f0ecd29749a18d82fd3135886f",itemToSearch:"",currentMovies:[],currentSeries:[]}},methods:{searchItems:function(e){this.itemToSearch=e,this.apiSearch("movie","currentMovies"),this.apiSearch("tv","currentSeries")},apiSearch:function(e,t){var r=this;c.a.get(this.apiUrl+"/search/"+e,{params:{api_key:this.apiKey,query:this.itemToSearch}}).then((function(e){r[t]=e.data.results}))}}},j=T,k=(r("5c0b"),Object(h["a"])(j,n,i,!1,null,null,null)),M=k.exports;r("655c"),r("1f54");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},af35:function(e,t,r){},e60d:function(e,t,r){"use strict";r("e9ec")},e9ec:function(e,t,r){}});
//# sourceMappingURL=app.78b19fc5.js.map