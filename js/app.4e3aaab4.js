(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"04cf":function(t,e,a){},"1da5":function(t,e,a){},"224c":function(t,e,a){"use strict";var s=a("1da5"),i=a.n(s);i.a},"24b0":function(t,e,a){},2935:function(t,e,a){},"2db4":function(t,e,a){"use strict";var s=a("38a8"),i=a.n(s);i.a},"31c5":function(t,e,a){},"320c":function(t,e,a){"use strict";var s=a("d50e"),i=a.n(s);i.a},"339e":function(t,e,a){t.exports=a.p+"img/FrequencyPlot.970f0c80.png"},"38a8":function(t,e,a){},"3bc0":function(t,e,a){t.exports=a.p+"img/negative-positive.6d580dd8.jpg"},"3ea6":function(t,e,a){t.exports=a.p+"img/RelativeWordFrequencyDiff.ea5b86c8.png"},"43f4":function(t,e,a){"use strict";var s=a("2935"),i=a.n(s);i.a},4906:function(t,e,a){t.exports=a.p+"img/portrait.b2c89646.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("5f5b"),r=a("b1e0"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-3 min-vh-100",attrs:{id:"app"}},[a("Header"),"/"!==this.$route.path&&"/404"!==this.$route.path?a("NavBar"):t._e(),a("router-view")],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-12 col-md-4 col-lg-4",attrs:{id:"website-title"}},[a("h1",{attrs:{id:"name animate__fadeInDown"},on:{click:t.goHome}},[t._v(" Dylan Lewis ")])]),t._m(0)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 my-auto",attrs:{id:"logos-col"}},[a("div",{staticClass:"d-flex flex-row justify-content-center justify-content-md-end"},[a("a",{attrs:{href:"mailto: drlewis@mit.edu"}},[a("i",{staticClass:"fa fa-envelope-o fa-3x"}),a("i",{staticClass:"fa fa-envelope-o fa-2x"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/dylan-lewis-2020/",target:"_blank"}},[a("i",{staticClass:"fa fa-linkedin-square fa-3x"}),a("i",{staticClass:"fa fa-linkedin-square fa-2x"})]),a("a",{attrs:{href:"https://github.com/dyllew/",target:"_blank"}},[a("i",{staticClass:"fa fa-github fa-3x"}),a("i",{staticClass:"fa fa-github fa-2x"})])])])}],d={name:"Header",methods:{goHome:function(){this.$router.push("/")}}},u=d,m=(a("ec0b"),a("2877")),p=Object(m["a"])(u,c,l,!1,null,"4b615310",null),f=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row pt-2 justify-content-center"},[a("div",{staticClass:"col-md-12",attrs:{id:"nav-bar"}},[a("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),a("router-link",{staticClass:"router-link",attrs:{to:"/projects"}},[t._v("Projects")]),t._v(" | "),a("router-link",{staticClass:"router-link",attrs:{to:"/artwork"}},[t._v("Artwork")]),t._v(" | "),a("router-link",{staticClass:"router-link",attrs:{to:"/resume"}},[t._v("Resume")])],1)])},g=[],v={name:"NavBar"},C=v,b=(a("f21c"),Object(m["a"])(C,h,g,!1,null,"49d285a6",null)),w=b.exports,_={name:"App",components:{Header:f,NavBar:w}},y=_,x=(a("034f"),Object(m["a"])(y,n,o,!1,null,null,null)),k=x.exports,j=a("8c4f"),T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row pt-5 pt-md-0 align-items-center justify-content-center"},[s("div",{staticClass:"col-5 col-md-3"},[s("div",{staticClass:"img-container"},[s("h4",[t._v("About")]),s("div",{staticClass:"img-holder",on:{click:t.goToAbout}},[s("img",{staticClass:"rounded img-fluid upper-img",attrs:{src:a("cbeb")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"about-text"}})])])]),s("div",{staticClass:"col-4 col-md-3 "},[s("div",{staticClass:"img-container"},[s("h4",[t._v("Resume")]),s("div",{staticClass:"img-holder",on:{click:t.goToResume}},[s("img",{staticClass:"rounded img-fluid upper-img",attrs:{src:a("a297")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"artwork-text"}})])])]),s("div",{staticClass:"divider w-100 w-md-0"}),s("div",{staticClass:"col-5 ml-4 mt-4 ml-md-0 mt-md-4 col-md-3"},[s("div",{staticClass:"img-container"},[s("h4",[t._v("Artwork")]),s("div",{staticClass:"img-holder",on:{click:t.goToArtwork}},[s("img",{staticClass:"rounded img-fluid lower-img",attrs:{src:a("4906")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"artwork-text"}})])])]),s("div",{staticClass:"col-5 mt-md-4 ml-md-4 col-md-3"},[s("div",{staticClass:"img-container"},[s("h4",[t._v("Projects")]),s("div",{staticClass:"img-holder",on:{click:t.goToProjects}},[s("img",{staticClass:"rounded img-fluid lower-img",attrs:{src:a("5e93")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"artwork-text"}})])])])])},$=[],P={name:"Home",data:function(){return{windowWidth:window.innerWidth}},methods:{goToAbout:function(){this.$router.push("/about")},goToProjects:function(){this.$router.push("/projects")},goToArtwork:function(){this.$router.push("/artwork")},goToResume:function(){this.$router.push("/resume")}}},O=P,A=(a("7439"),Object(m["a"])(O,T,$,!1,null,"035fcedc",null)),E=A.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row pt-3 pt-md-5 justify-content-center align-items-center"},[s("div",{staticClass:"col-6 col-md-5 col-lg-5 col-xl-3 mr-xl-5"},[s("img",{staticClass:"rounded img-fluid",attrs:{id:"leo-and-dylan-pic",src:a("ee29"),alt:"Leo and Dylan"}})]),s("div",{staticClass:"col-10 col-md-6 col-lg-5 col-xl-5",attrs:{id:"about-description"}},[s("p",{attrs:{id:"intro-paragraph"}},[t._v(" Hey there! I'm a Masters student at MIT studying Computer Science. But more importantly, I am a proud dad to my son, Leo 🐕 ")]),s("p",[t._v(" I'm interested in Software Engineering, Data Science & Machine Learning, and Web Development! You can contact me through "),s("a",{attrs:{href:"mailto: drlewis@mit.edu"}},[t._v("email,")]),t._v(" add me on "),s("a",{attrs:{href:"https://www.linkedin.com/in/dylan-lewis-2020/",target:"_blank"}},[t._v("LinkedIn,")]),t._v(" or checkout my"),s("a",{attrs:{href:"https://github.com/dyllew/",target:"_blank"}},[t._v("GitHub!")])]),s("p",[t._v(" In my freetime, I love to explore nature, make and experiment with different forms of art, develop new skills, and go on adventures with my pup! ")])])])}],D={name:"About"},F=D,B=(a("320c"),Object(m["a"])(F,I,S,!1,null,"744b0384",null)),q=B.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects row align-items-center justify-content-center"},[s("div",{staticClass:"col-12 col-md-5 col-lg-4 pt-3"},[s("div",{staticClass:"card border-info bg-transparent"},[s("h5",{staticClass:"card-header"},[t._v("Boomerang")]),s("img",{staticClass:"card-img-top",attrs:{id:"boomerang-img",src:a("5e93"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[t._v("Boomerang is a full-stack web application where users can efficiently and reliably borrow items from others within their communities")]),s("div",{attrs:{id:"button-holder"}},[s("a",{staticClass:"btn btn-light",attrs:{href:"https://team-aesthetech-boomerang.herokuapp.com/",target:"_blank"}},[t._v("Go to the Boomerang website")]),s("a",{staticClass:"btn btn-primary text-light",on:{click:t.goToBoomerangProjectPage}},[t._v("See Project Details")])])])])]),s("div",{staticClass:"col-12 col-md-6 col-lg-4 pt-3"},[s("div",{staticClass:"card border-info bg-transparent"},[s("h5",{staticClass:"card-header"},[t._v("Trump Campaign Speech Analysis")]),s("img",{staticClass:"card-img-top",attrs:{id:"trump-img",src:a("339e"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[t._v(" Data Science project which investigated how Donald Trump's 2016 campaign speeches may have influenced public sentiment on a regional level ")]),s("a",{staticClass:"btn btn-primary text-light",on:{click:t.goToTrumpSpeechPage}},[t._v("See Project Details")])])])])])},M=[],R={name:"Artwork",methods:{goToBoomerangProjectPage:function(){this.$router.push("/projects/boomerang")},goToTrumpSpeechPage:function(){this.$router.push("projects/trump-speech-analysis")},goHome:function(){this.$router.push("/")}}},L=R,W=(a("6085"),Object(m["a"])(L,H,M,!1,null,"da7c77d2",null)),z=W.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"artwork row align-items-center justify-content-center justify-content-xl-around"},[s("div",{staticClass:"col-8 pt-3 pt-md-0 col-md-3"},[s("h4",[t._v("Portrait")]),s("img",{staticClass:"rounded img-fluid",attrs:{src:a("4906")}})]),s("div",{staticClass:"col-8 pt-4 pt-md-2 col-md-3"},[s("h4",[t._v("Reptile")]),s("img",{staticClass:"rounded img-fluid",attrs:{src:a("a2c3")}})]),s("div",{staticClass:"col-8 pt-4 pt-md-2 col-md-3"},[s("h4",[t._v("4-in-1")]),s("img",{staticClass:"rounded img-fluid",attrs:{src:a("c207")}})])])}],G={name:"Artwork"},J=G,V=Object(m["a"])(J,N,U,!1,null,null,null),Y=V.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"resume row align-items-center justify-content-center"},[a("div",{staticClass:"col-12 mt-4"},[a("a",{staticClass:"btn btn-primary text-light",attrs:{target:"_blank",href:"./assets/Dylan_Lewis_Resume.pdf"}},[t._v("View PDF")])]),a("div",{staticClass:"col-12 mt-2"},[a("embed",{staticClass:"pdf",attrs:{src:"./assets/Dylan_Lewis_Resume.pdf"}})])])}],X={name:"About"},Z=X,tt=(a("ecd0"),Object(m["a"])(Z,K,Q,!1,null,"29203ad4",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center justify-content-center"},[s("div",{staticClass:"col-12"},[s("h1",[t._v("Boomerang")])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"carousel slide",attrs:{id:"boomerangCarousel","data-ride":"carousel","data-interval":"false"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#boomerangCarousel","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#boomerangCarousel","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#boomerangCarousel","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active boomerang-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("5e93"),alt:"First slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Sign Up/Login Page")]),s("p",[t._v("When my group decided on how we wanted to split up the tasks for Boomerang, I decided to design & create the sign up/login page & the create account flow. I thought this would be a good section of the application to practice and enhance my visual design skills and to create a UI that was intuitive. ")])])]),s("div",{staticClass:"carousel-item boomerang-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("e1a7"),alt:"Second slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Create Account Part I")]),s("p",[t._v(" In the sections of Boomerang I built, I created the front-end using Vue.js which is the same front-end framework I used to build this website. The backend was built using Express.js. The fields above checked for user input to ensure that the account username was not already taken and that the each of the fields was in the correct format, notifying the user instantly on submission if their input was invalid. ")])])]),s("div",{staticClass:"carousel-item boomerang-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("a21f"),alt:"Third slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Create Account Part II")]),s("p",[t._v(" Account creation for any app is an important user flow as it lets the user understand both the purpose of an app & how they can engage with it completely. For these reasons, I decided to include descriptions of the main concepts of the application (Communities, Channels, etc.) as this would reduce the time it would take for a user to get immersed in the app. ")])])])])])])])}],it={name:"Boomerang"},rt=it,nt=(a("43f4"),Object(m["a"])(rt,at,st,!1,null,"526024fe",null)),ot=nt.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center justify-content-center"},[s("div",{staticClass:"col-12"},[s("h1",[t._v("Trump Campaign Speech Analysis")])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"carousel slide",attrs:{id:"trumpCarousel","data-ride":"carousel","data-interval":"false"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#trumpCarousel","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#trumpCarousel","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#trumpCarousel","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active trump-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("89e4"),alt:"First slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Main Puzzle")]),s("p",[t._v(" There have been concerns that nationalist, right-wing sentiments have gained momentum over the years of the Trump presidency. Our group wanted to investigate how Donald Trump’s rhetoric may have influenced public sentiment on a regional level. To this end, we analyzed Trump's campaign speeches and the tweets by locals from 4 cities he visited on his campaign and Florida, a swing state. ")])])]),s("div",{staticClass:"carousel-item trump-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("3bc0"),alt:"Second slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Most Frequent Negative and Positive Words in Trump's Campaign Speeches")]),s("p",[t._v(' Trump\'s positive sentiment words tend to be adjectives with "great" far exceeding the rest. Among words with negative sentiment, there are more meaningful words related to his speech topics such as "investigation", "defense", "deficit", & "press". ')])])]),s("div",{staticClass:"carousel-item trump-carousel-item"},[s("img",{staticClass:"col-12 rounded img-fluid",attrs:{src:a("3ea6")}}),s("img",{staticClass:"col-12 rounded img-fluid pt-4",attrs:{src:a("f061")}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Trump's Most Frequently Used Words Across his Entire Campaign & Across Florida Campaign")]),s("p",[t._v(' In Trump\'s speeches across the entire campaign, his most frequent words, normalized on Romney\'s campaign speeches, include, "don\'t", "hillary", "great", "deal", as well as words related to his election platform such as "border", "wall", "mexico", "isis", "trade", and "china". Words used to thwart Hillary Clinton\'s campaign such as "hillary", "email", "lies", "corrupt", "crook", and "fbi" in regards to Clinton\'s email scandal appear more frequently in Trump\'s Florida campaign speeches than across all of his campaign speeches, showing that in swing states, Trump strategizes to mention the scandal more frequently to win voters to tip the scale. ')])])])])])])])}],dt={name:"Trump"},ut=dt,mt=(a("224c"),Object(m["a"])(ut,ct,lt,!1,null,"0ff132ef",null)),pt=mt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col pt-5 justify-content-center"},[a("h2",[t._v("Uh Oh! Looks like you went to a page that doesn't exist on dyllew.github.io")]),a("router-link",{staticClass:"router-link",attrs:{to:"/"}},[t._v("Click this link to go home.")])],1)},ht=[],gt={name:"NotFoundComponent"},vt=gt,Ct=(a("2db4"),Object(m["a"])(vt,ft,ht,!1,null,"4ffa6c61",null)),bt=Ct.exports;s["default"].use(j["a"]);var wt=[{path:"/",component:E},{path:"/about",component:q},{path:"/projects",component:z},{path:"/projects/boomerang",component:ot},{path:"/projects/trump-speech-analysis",component:pt},{path:"/artwork",component:Y},{path:"/resume",component:et},{path:"/404",component:bt},{path:"*",redirect:"/404"}],_t=new j["a"]({mode:"hash",routes:wt}),yt=_t;a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(i["a"]),s["default"].use(r["a"]),new s["default"]({router:yt,render:function(t){return t(k)}}).$mount("#app")},"5e93":function(t,e,a){t.exports=a.p+"img/boomerang-home.2b52b305.jpg"},6085:function(t,e,a){"use strict";var s=a("af9b"),i=a.n(s);i.a},7439:function(t,e,a){"use strict";var s=a("31c5"),i=a.n(s);i.a},"85ec":function(t,e,a){},"89e4":function(t,e,a){t.exports=a.p+"img/trump-campaign.81aaea0e.png"},a21f:function(t,e,a){t.exports=a.p+"img/join-communities.392bb659.png"},a297:function(t,e,a){t.exports=a.p+"img/resume.d7e98b57.png"},a2c3:function(t,e,a){t.exports=a.p+"img/reptile.b479d166.png"},af9b:function(t,e,a){},c207:function(t,e,a){t.exports=a.p+"img/feelings.7216f530.jpg"},cbeb:function(t,e,a){t.exports=a.p+"img/linkedin-profpic.00cde042.jpg"},d50e:function(t,e,a){},ddd9:function(t,e,a){},e1a7:function(t,e,a){t.exports=a.p+"img/create-account.b25be796.png"},ec0b:function(t,e,a){"use strict";var s=a("04cf"),i=a.n(s);i.a},ecd0:function(t,e,a){"use strict";var s=a("24b0"),i=a.n(s);i.a},ee29:function(t,e,a){t.exports=a.p+"img/leo_n_me.2868644e.jpg"},f061:function(t,e,a){t.exports=a.p+"img/RelativeWordFreqDiffFlorida.80584f3b.png"},f21c:function(t,e,a){"use strict";var s=a("ddd9"),i=a.n(s);i.a}});
//# sourceMappingURL=app.4e3aaab4.js.map