(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({account:"account",detail:"detail",login:"login"}[e]||e)+"."+{account:"d13f7d21",detail:"99a70cb3",login:"296ac781"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={detail:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({account:"account",detail:"detail",login:"login"}[e]||e)+"."+{account:"31d6cfe0",detail:"3fcd4bf7",login:"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28eb":function(e,t,n){},"2b04":function(e,t,n){},"4a59":function(e,t,n){"use strict";n("c7e9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("router-view")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("b-navbar",{attrs:{toggleable:"lg",type:"ligth",variant:"light"}},[n("div",{staticClass:"container"},[n("b-navbar-nav",[n("router-link",{attrs:{to:{name:"Home"}}},[e._v(" Home ")])],1),e.loginService.isLoggedIn()?n("router-link",{attrs:{to:{name:"Account"}}},[n("b-btn",{attrs:{variant:"primary"}},[e._v("Account")])],1):n("router-link",{attrs:{to:{name:"Login"}}},[n("b-btn",{attrs:{variant:"outline-secondary"}},[e._v("Sign up")])],1)],1)])],1)},i=[],u=n("73ca"),l={name:"TheHeader",computed:{loginService:function(){return new u["a"]}}},s=l,f=(n("4a59"),n("2877")),d=Object(f["a"])(s,c,i,!1,null,"327c8d40",null),p=d.exports,h={name:"App",components:{TheHeader:p}},m=h,b=Object(f["a"])(m,o,a,!1,null,null,null),g=b.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container home__listing"},e._l(e.projects,(function(e){return n("ProjectCard",{key:e.projectId,attrs:{project:e}})})),1)])},j=[],_=n("6d47"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{staticClass:"project-card",attrs:{title:e.project.title}},[n("b-card-text",{staticClass:"text-secondary"},[e._v(" "+e._s(e.project.description)+" ")]),n("router-link",{attrs:{to:{name:"Detail",params:{id:e.project.projectId}}}},[n("b-button",{attrs:{block:"",variant:"outline-primary"}},[e._v(" Visit ")])],1)],1)},w=[],S={name:"ProjectCard.vue",props:{project:{type:Object,required:!0}}},k=S,C=(n("a6d5"),Object(f["a"])(k,O,w,!1,null,"7054a7f6",null)),P=C.exports,E={name:"Home",components:{ProjectCard:P},data:function(){return{projects:[]}},created:function(){this.fetchProjects()},methods:{fetchProjects:function(){var e=this;Object(_["a"])("project/getAllUnfinishedProjects").then((function(t){e.projects=t}))}}},T=E,x=(n("bc71"),Object(f["a"])(T,y,j,!1,null,"3449e773",null)),A=x.exports;r["default"].use(v["a"]);var I=[{path:"/",name:"Home",component:A},{path:"/detail/:id",name:"Detail",component:function(){return n.e("detail").then(n.bind(null,"c84b"))}},{path:"/account",name:"Account",component:function(){return n.e("account").then(n.bind(null,"77be"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],L=new v["a"]({routes:I}),H=L,N=n("5f5b"),J=n("b1e0");n("f9e3"),n("2dd8"),n("2b04");r["default"].use(N["a"]),r["default"].use(J["a"]),r["default"].config.productionTip=!1,new r["default"]({router:H,render:function(e){return e(g)}}).$mount("#app")},"6d47":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));n("d3b7");var r="/";function o(e){return r+e}function a(e,t){return fetch(o(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e;throw new Error}))}function c(e){return fetch(o(e),{method:"GET"}).then((function(e){return e.json()}))}},"73ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("d4ec"),o=n("bee2"),a=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"login",value:function(e){localStorage.setItem("user",JSON.stringify(e))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"isLoggedIn",value:function(){return!!localStorage.getItem("user")}},{key:"getUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()},"9fe6":function(e,t,n){},a6d5:function(e,t,n){"use strict";n("28eb")},bc71:function(e,t,n){"use strict";n("9fe6")},c7e9:function(e,t,n){}});
//# sourceMappingURL=app.94acf022.js.map