(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"28b1":function(t,e,a){},"557b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contatiner mx-auto min-h-screen flex flex-col",attrs:{id:"app"}},[a("preloader"),a("header",{staticClass:"md:flex md:justify-between md:items-center md:px-4 nav"},[a("div",{staticClass:"flex items-center justify-between px-4 py-3 md:p-0"},[t._m(0),a("h1",{staticClass:"ml-4 mr-auto text-primary text-2xl unselectable"},[t._v("Zachary Seebeck")]),a("div",{staticClass:"md:hidden"},[a("button",{staticClass:"mr-auto block text-gray-500 hover:text-white focus:text-white focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[a("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[t.isOpen?a("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}}):t._e(),t.isOpen?t._e():a("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),a("nav",{staticClass:"px-2 pt-2 md:flex md:p-0 ml-auto",class:t.isOpen?"block":"hidden",staticStyle:{"font-weight":"bold"},on:{click:function(e){t.isOpen=!t.isOpen}}},[a("router-link",{staticClass:"nav-btn",attrs:{to:"/"}},[a("font-awesome-icon",{staticClass:"pr-1",attrs:{icon:["fas","home"]}}),t._v(" Home")],1),a("router-link",{staticClass:"nav-btn",attrs:{to:"/about"}},[a("font-awesome-icon",{staticClass:"pr-1",attrs:{icon:["fas","user"]}}),t._v(" About")],1),a("router-link",{staticClass:"nav-btn",attrs:{to:"/projects"}},[a("font-awesome-icon",{staticClass:"pr-1",attrs:{icon:["fas","vial"]}}),t._v(" Projects")],1),a("a",{staticClass:"nav-btn",attrs:{href:"/files/resume.pdf",target:"_new"}},[a("font-awesome-icon",{staticClass:"pr-1",attrs:{icon:["fas","file"]}}),t._v(" Resume")],1)],1)]),a("vue-particles",{staticClass:"particles",attrs:{color:"#a3f7bf",particleOpacity:.7,particlesNumber:90,shapeType:"polygon",particleSize:3,linesColor:"#86ad92",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:2,hoverEffect:!0,hoverMode:"grab",clickEffect:!1,clickMode:"push"}}),a("router-view",{staticClass:"pt-4 flex-grow"}),a("footer",{staticClass:"w-full text-center pt-8 pb-4 text-secondary"},[t._v(" © 2020 Zachary Seebeck | Created in "),a("font-awesome-icon",{attrs:{icon:["fab","vuejs"]}}),t._v(" "),a("a",{attrs:{href:"https://vuejs.org/",target:"new"}},[t._v("Vue.js")]),t._v(" and "),a("a",{attrs:{href:"https://tailwindcss.com/",target:"new"}},[t._v("Tailwindcss.")])],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("img",{staticClass:"h-8",attrs:{src:"/img/ZacharySeebeck-02.png",alt:"Zachary Seebeck ShortLogo"}})])}],i=(a("557b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.removed?t._e():a("div",{class:{preloader:!0,prehidden:t.prehidden}},[a("div",{class:{animation:!0,red:t.finished},attrs:{id:"animation"}})])}),r=[],l=a("3b75"),c=a.n(l),d={data:function(){return{finished:!1,prehidden:!1,removed:!1}},mounted:function(){var t=this;new c.a("animation",{type:"sync",duration:75,file:"/img/preloader.svg",pathTimingFunction:c.a.EASE_IN},(function(){t.finished=!0,setTimeout((function(){t.prehidden=!0,setTimeout((function(){t.removed=!0}),600)}),400)}))}},u=d,p=(a("e58d"),a("2877")),m=Object(p["a"])(u,i,r,!1,null,null,null),h=m.exports,f={name:"home",components:{Preloader:h},data:function(){return{isOpen:!1}}},g=f,v=(a("034f"),Object(p["a"])(g,n,o,!1,null,null,null)),x=v.exports,b=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home content-center h-full mx-2"},[a("div",{staticClass:"home"},[a("img",{staticClass:"h-64 w-64 mt-12 rounded-full mx-auto object-cover",attrs:{src:"/img/senior_wall.jpg"}}),t._m(0),a("h4",{staticClass:"text-primary text-xl py-auto"},[t._v("I am a student, developer, and musician located in Bay City, Michigan.")]),a("h4",{staticClass:"text-primary text-l py-auto"},[t._v("I specialize in web development, but also have a fond interest in robotics software and hardware.")]),a("hr",{staticClass:"w-64 mx-auto mt-4"}),a("div",{staticClass:"my-10"},[a("a",{staticClass:"social-btn",attrs:{href:"https://github.com/ZacharySeebeck2020",target:"new"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),a("a",{staticClass:"social-btn",attrs:{href:"https://www.linkedin.com/in/zacharyseebeck/",target:"new"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-secondary text-3xl"},[t._v("Hi there, I'm "),a("span",{staticClass:"text-secondary-darker"},[t._v("Zachary Seebeck")])])}],C={name:"home",components:{}},_=C,k=Object(p["a"])(_,y,w,!1,null,null,null),j=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-2"},[a("div",{staticClass:"about"},[a("div",{staticClass:"flex items-center h-auto lg:pt-16 flex-wrap mx-auto my-16 lg:px-3 lg:my-0"},[t._m(0),a("div",{staticClass:"w-full lg:w-3/5 rounded-lg lg:rounded-l-lg bg-background-darker shadow-lg lg:rounded-r-none opacity-75 mx-6 lg:mx-0",attrs:{id:"profile"}},[a("div",{staticClass:"p-4 md:p-12 text-center lg:text-left"},[a("div",{staticClass:"block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center",staticStyle:{"background-image":"url('/img/senior_lean.jpg')"}}),a("h1",{staticClass:"text-3xl font-bold pt-8 lg:pt-0 text-primary"},[t._v("About Me")]),a("div",{staticClass:"mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"}),t._m(1),a("h2",{staticClass:"text-xl font-bold mt-8 lg:pt-0 text-primary"},[t._v("How To Contact Me")]),a("div",{staticClass:"mx-auto lg:mx-0 w-2/3 pb-3 border-b-2 border-teal-500 opacity-25"}),a("p",{staticClass:"pt-4 text-lg text-secondary-lighter"},[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fas","phone"]}}),t._v(": (989) 750-5996")],1),a("p",{staticClass:"pt-1 text-lg text-secondary-lighter"},[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fas","envelope-square"]}}),t._v(": "),a("a",{attrs:{href:"mailto:seebeckzachary@gmail.com"}},[t._v("seebeckzachary@gmail.com")])],1)])])]),t._m(2)])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full lg:w-2/5"},[a("img",{staticClass:"rounded-none lg:rounded-lg shadow-2xl hidden lg:block",attrs:{src:"/img/senior_lean.jpg"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"pt-8 text-lg text-secondary-lighter"},[t._v(" I'm a college student working towards getting my associates in Business And Information Technologies. I currently work for "),a("a",{attrs:{target:"_new",href:"https://ntdealerservices.com"}},[t._v("Newtech Dealer Services")]),t._v(" as a software developer using a range of technology including Laravel, VueJS, MySql, and Couchbase. Previously I've also worked on developing websites with all-in-one content management systems such as Wordpress and developing plugins to meet customer's needs. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center h-auto lg:pt-16 flex-wrap mx-auto my-16 lg:px-3 lg:my-0 hidden md:block"},[a("div",{staticClass:"w-full lg:w-4/5  rounded-lg lg:rounded-l-lg bg-background-darker shadow-lg lg:rounded-r-none opacity-75 mx-6 lg:mx-auto",attrs:{id:"profile"}},[a("div",{staticClass:"p-4 md:p-12 text-center lg:text-center"},[a("h1",{staticClass:"text-3xl font-bold pt-8 lg:pt-0 text-primary"},[t._v("Technology I've Used")]),a("div",{staticClass:"mx-auto lg:mx-0 w-full pt-3 border-b-2 border-teal-500 opacity-25"}),a("div",{staticClass:"pt-3 hidden sm:block"},[a("i",{staticClass:"devicon-amazonwebservices-plain text-secondary text-4xl px-1 flex-auto",attrs:{title:"Amazon Web Services"}}),a("i",{staticClass:"devicon-apache-plain text-secondary text-4xl px-1",attrs:{title:"Apache"}}),a("i",{staticClass:"devicon-vuejs-plain text-secondary text-4xl px-1",attrs:{title:"VueJS"}}),a("i",{staticClass:"devicon-git-plain text-secondary text-4xl px-1",attrs:{title:"Git"}}),a("i",{staticClass:"devicon-csharp-plain text-secondary text-4xl px-1",attrs:{title:"C#"}}),a("i",{staticClass:"devicon-docker-plain text-secondary text-4xl px-1",attrs:{title:"Docker"}}),a("i",{staticClass:"devicon-dot-net-plain text-secondary text-4xl px-1",attrs:{title:"DotNet"}}),a("i",{staticClass:"devicon-github-plain text-secondary text-4xl px-1",attrs:{title:"Github"}}),a("i",{staticClass:"devicon-laravel-plain text-secondary text-4xl px-1",attrs:{title:"Laravel"}}),a("i",{staticClass:"devicon-nginx-plain text-secondary text-4xl px-1",attrs:{title:"Nginx"}}),a("i",{staticClass:"devicon-wordpress-plain text-secondary text-4xl px-1",attrs:{title:"WordPress"}}),a("i",{staticClass:"devicon-visualstudio-plain text-secondary text-4xl px-1",attrs:{title:"Microsoft Visual Studio"}})])])])])}],P={name:"about",components:{}},T=P,A=Object(p["a"])(T,S,O,!1,null,null,null),E=A.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects content-center mx-auto"},[a("h1",{staticClass:"text-primary text-3xl py-auto mb-5"},[t._v("All Of My Projects")]),a("Project",{attrs:{title:"BPA Web App - Epic Win Sporting Goods",desc:"During the Business Professionals of America 2020 season, I was tasked with creating a full e-commerce suite for a company named Epic Win Sporting Goods. I chose to build this app using a mix of different technologies including Laravel, Couchbase, Vue.js, and TailwindCSS. The project was first in the state and a national finalist.",git:"https://github.com/ZacharySeebeck2020/BPA-WebApp-2020",img:"/img/proj/ewsg.png"}}),a("Project",{attrs:{title:"Bay City Santa House",desc:"Our local Bay City Santa House wanted a new website to be able to give parents and children information about the Santa house and to be able to submit forms to volunteer or photos they took while in the Santa house. The site was built on top of Wordpress to give them easy control of how the site looked and functioned should they want to do any changes in the future.",live:"https://baycitysantahouse.com/",img:"/img/proj/santa_house.png"}}),a("Project",{attrs:{title:"C# Chrome Dino Game",desc:"This is a basic implementation of the Chrome Offline Dino Game in C#. It was used during the Bay-Arenac Career Center 10th grade days to give students an introduction to programming and hopefully get them interested in learning more about technology.",git:"https://github.com/ZacharySeebeck2020/Chrome-Dino-Game",img:"/img/proj/dino.png"}}),a("Project",{attrs:{title:"7 Character Display Challenge",desc:"One of the challenges that were given to us, was to try and recreate the 7 character display program that was shown on a Tom Scott video. With 2 notable differences, the program had to be written in C#, and no regular expressions could be used.",git:"https://github.com/ZacharySeebeck2020/Tom-Scott-7CharacterDisplays"}}),a("Project",{attrs:{title:"Computer Programming Final - Joe's Automotive",desc:"After the first year of the Bay-Arenac Carrer Center programming course, I was tasked with making a CMS for Joe's Automotive using C#, WinForms, and SQL Server. This project wanted a fully working customer system, including invoice creation, vehicle tracking, and parts management.",git:"https://github.com/ZacharySeebeck2020/Joes-Automotive",img:"/img/proj/joes_auto.png"}})],1)},I=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xl:max-w-5xl lg:max-w-3xl md:max-w-2xl sm:max-w-md w-full lg:flex mt-5"},[t.img?a("div",{staticClass:"h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",style:{backgroundImage:"url("+t.img+")"},attrs:{title:"Woman holding a mug"}}):t._e(),a("div",{staticClass:"border-r border-b border-l border-t border-accent lg:border-l-1 lg:border-t lg:border-accent bg-background-darker opacity-75 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"},[a("div",{staticClass:"mb-4"},[a("div",{staticClass:"text-white font-bold text-xl mb-2"},[t._v(t._s(t.title))]),a("p",{staticClass:"text-white text-base"},[t._v(t._s(t.desc))])]),a("div",{staticClass:"mb-4 flex justify-center"},[t.git?a("a",{staticClass:"btn",attrs:{href:t.git,target:"_new"}},[a("font-awesome-icon",{attrs:{icon:["fas","code"]}}),t._v(" Source Code")],1):t._e(),t.live?a("a",{staticClass:"btn",attrs:{href:t.live,target:"_new"}},[a("font-awesome-icon",{attrs:{icon:["fas","laptop"]}}),t._v(" Live Site")],1):t._e()])])])},W=[],z={props:["title","desc","img","git","live"]},B=z,D=Object(p["a"])(B,$,W,!1,null,null,null),Z=D.exports,H={name:"projects",components:{Project:Z}},G=H,J=Object(p["a"])(G,M,I,!1,null,null,null),L=J.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"testing content-center"},[a("h1",{staticClass:"text-primary text-3xl py-auto"},[t._v("Oh no!")]),a("hr",{staticClass:"w-64 my-2 mx-auto"}),a("h1",{staticClass:"text-primary text-xl py-auto"},[t._v("That page cant be found.")]),a("router-link",{staticClass:"nav-btn mt-10 max-w-sm mx-auto",attrs:{to:"/"}},[a("font-awesome-icon",{attrs:{icon:["fas","home"]}}),t._v(" Go Home")],1)],1)},V=[],F={name:"pageNotFound",components:{}},q=F,Q=Object(p["a"])(q,N,V,!1,null,null,null),R=Q.exports;s["a"].use(b["a"]);var U=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:E},{path:"/projects",name:"projects",component:L},{path:"/*",name:"404",component:R}],K=new b["a"]({mode:"hash",routes:U}),X=K,Y=a("ecee"),tt=a("c074"),et=a("ad3d"),at=a("f2d1"),st=a("98c9");Y["c"].add(tt["d"],tt["h"],tt["g"],tt["a"],tt["e"],tt["c"],tt["f"],tt["b"]),Y["c"].add(at["b"],at["a"],at["c"],at["d"]),s["a"].component("font-awesome-icon",et["a"]),s["a"].use(st["a"]),s["a"].config.productionTip=!1,new s["a"]({router:X,render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,a){},e58d:function(t,e,a){"use strict";var s=a("28b1"),n=a.n(s);n.a}});
//# sourceMappingURL=app.caaf3254.js.map