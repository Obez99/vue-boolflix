(function(t){function A(A){for(var a,i,s=A[0],c=A[1],o=A[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(A);while(p.length)p.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,A=0;A<n.length;A++){for(var e=n[A],a=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(a=!1)}a&&(n.splice(A--,1),t=i(i.s=e[0]))}return t}var a={},r={app:0},n=[];function i(A){if(a[A])return a[A].exports;var e=a[A]={i:A,l:!1,exports:{}};return t[A].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,A,e){i.o(t,A)||Object.defineProperty(t,A,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,A){if(1&A&&(t=i(t)),8&A)return t;if(4&A&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&A&&"string"!=typeof t)for(var a in t)i.d(e,a,function(A){return t[A]}.bind(null,a));return e},i.n=function(t){var A=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(A,"a",A),A},i.o=function(t,A){return Object.prototype.hasOwnProperty.call(t,A)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=A,s=s.slice();for(var o=0;o<s.length;o++)A(s[o]);var l=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,A,e){t.exports=e("56d7")},5452:function(t,A,e){"use strict";e("af35")},"56d7":function(t,A,e){"use strict";e.r(A);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{attrs:{id:"app"}},[e("Header",{on:{search:t.fetchQuery}}),e("CardsContainer",{attrs:{passItem:t.itemToSearch}})],1)},n=[],i=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("header",{staticClass:"px-5"},[e("h1",[t._v("BOOLFLIX")]),e("SearchBar",{on:{search:t.sendQuery}})],1)},s=[],c=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"d-flex align-items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.itemToSearch,expression:"itemToSearch"}],staticClass:"me-3",attrs:{type:"text"},domProps:{value:t.itemToSearch},on:{keyup:function(A){return!A.type.indexOf("key")&&t._k(A.keyCode,"enter",13,A.key,"Enter")?null:t.searchItem.apply(null,arguments)},input:function(A){A.target.composing||(t.itemToSearch=A.target.value)}}}),e("button",{staticClass:"btn btn-danger",on:{click:t.searchItem}},[t._v("Cerca")])])},o=[],l={name:"SearchBar",data:function(){return{itemToSearch:""}},methods:{searchItem:function(){this.$emit("search",this.itemToSearch)}}},u=l,p=e("2877"),d=Object(p["a"])(u,c,o,!1,null,null,null),g=d.exports,f={name:"Header",components:{SearchBar:g},methods:{sendQuery:function(t){this.$emit("search",t)}}},h=f,v=(e("5452"),Object(p["a"])(h,i,s,!1,null,null,null)),C=v.exports,m=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"my-5"},[t.currentMovies.length>0?e("h2",{staticClass:"mb-3 text-center text-black"},[t._v(" FILM ")]):t._e(),e("div",{staticClass:"d-flex flex-wrap justify-content-center gap-4"},t._l(t.currentMovies,(function(A){return e("Card",{key:A.id,attrs:{type:"movie",rawCardData:A,apiUrl:t.apiUrl,apiKey:t.apiKey}})})),1),t.currentSeries.length>0?e("h2",{staticClass:"mt-5 text-center text-black"},[t._v(" SERIE ")]):t._e(),e("div",{staticClass:"d-flex flex-wrap justify-content-center gap-4"},t._l(t.currentSeries,(function(A){return e("Card",{key:A.id,attrs:{type:"tv",rawCardData:A,apiUrl:t.apiUrl,apiKey:t.apiKey}})})),1)])},E=[],w=e("bc3a"),y=e.n(w),B=function(){var t=this,A=t.$createElement,a=t._self._c||A;return a("div",{staticClass:"movie-card"},[a("img",{attrs:{src:t.rawCardData.poster_path?t.imageUrl+t.rawCardData.poster_path:e("72dd"),alt:t.rawCardData.original_title}}),a("ul",[a("li",[a("strong",[t._v("Titolo:")]),t._v(" "+t._s(t.cardTitle))]),a("li",[a("strong",[t._v("Titolo originale:")]),t._v(" "+t._s(t.cardOriginalTitle))]),a("li",[a("strong",[t._v("Lingua: ")]),a("span",{class:t.rawCardData.original_language?"flag-icon flag-icon-"+t.rawCardData.original_language:"flag-icon flag-icon-xx"})]),a("li",[a("strong",[t._v("Voto: ")]),t._l(t.cardData.stars,(function(t){return a("i",{key:t,staticClass:"fa fa-star text-danger"})})),t.cardData.stars?a("span",t._l(5-t.cardData.stars,(function(t){return a("i",{key:t,staticClass:"fa fa-star-o text-danger"})})),0):a("span",{staticClass:"text-danger"},[t._v("Nessun voto disponibile")])],2),a("li",{staticClass:"mt-3"},[a("strong",[t._v("Overview:")]),a("p",[t._v(t._s(t.rawCardData.overview))]),t.rawCardData.overview?t._e():a("span",{staticClass:"text-danger"},[t._v("Nessuna overview disponibile")])]),a("li",{staticClass:"mt-3"},[a("strong",[t._v("Cast: ")]),t._l(this.cast,(function(A,e){return a("span",{key:e},[a("span",[t._v(t._s(A))]),e<t.cast.length-1?a("span",[t._v(", ")]):a("span",[t._v(".")])])}))],2)])])},D=[],_=(e("b0c0"),e("99af"),{name:"Card",props:{rawCardData:Object,apiUrl:String,apiKey:String,type:String},data:function(){return{imageUrl:"https://image.tmdb.org/t/p/w342/",cast:[]}},computed:{cardTitle:function(){return this.rawCardData.title?this.rawCardData.title:this.rawCardData.name},cardOriginalTitle:function(){return this.rawCardData.original_title?this.rawCardData.original_title:this.rawCardData.original_name},cardData:function(){return{stars:this.convertRating(this.rawCardData["vote_average"])}}},methods:{convertRating:function(t){return Math.round(t/2)}},mounted:function(){var t=this;y.a.get(this.apiUrl+"/".concat(this.type,"/").concat(this.rawCardData.id,"/credits"),{params:{api_key:this.apiKey}}).then((function(A){for(var e=0;e<5;e++){if(!A.data.cast[e])return;t.cast.push(A.data.cast[e].name)}}))}}),b=_,O=(e("e60d"),Object(p["a"])(b,B,D,!1,null,null,null)),S=O.exports,Q={name:"CardsContainer",components:{Card:S},props:{passItem:String},watch:{passItem:function(t){this.itemToSearch=t,this.cardType()}},data:function(){return{apiUrl:"https://api.themoviedb.org/3",apiKey:"031b25f0ecd29749a18d82fd3135886f",currentMovies:[],currentSeries:[],itemToSearch:""}},methods:{cardType:function(){this.apiSearch("movie","currentMovies"),this.apiSearch("tv","currentSeries")},apiSearch:function(t,A){var e=this;y.a.get(this.apiUrl+"/search/"+t,{params:{api_key:this.apiKey,query:this.passItem,language:"it"}}).then((function(t){e[A]=t.data.results}))}}},k=Q,x=Object(p["a"])(k,m,E,!1,null,null,null),I=x.exports,M={name:"App",components:{Header:C,CardsContainer:I},data:function(){return{itemToSearch:""}},methods:{fetchQuery:function(t){this.itemToSearch=t}}},P=M,T=(e("5c0b"),Object(p["a"])(P,r,n,!1,null,null,null)),H=T.exports;e("655c"),e("1f54");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,A,e){"use strict";e("9c0c")},"72dd":function(t,A){t.exports="data:image/png;base64,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"},"9c0c":function(t,A,e){},af35:function(t,A,e){},e60d:function(t,A,e){"use strict";e("e9ec")},e9ec:function(t,A,e){}});
//# sourceMappingURL=app.82dea823.js.map