(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},r=[];function s(t){return o.p+"js/"+({about:"about",pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{about:"dbc2d5ba",pdfjsWorker:"358d2e0f"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i=a[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise(function(e,n){i=a[t]=[e,n]});e.push(i[2]=n);var r,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),r=function(e){l.onerror=l.onload=null,clearTimeout(u);var i=a[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,i[1](s)}a[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,c.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0143":function(t,e,i){},"0803":function(t,e,i){},1:function(t,e){},1010:function(t,e,i){"use strict";var n=i("0803"),a=i.n(n);a.a},"14ed":function(t,e,i){"use strict";var n=i("4c31"),a=i.n(n);a.a},"1b63":function(t,e,i){},"1b9a":function(t,e,i){},"1ced":function(t,e,i){},"1e8a":function(t,e,i){"use strict";var n=i("abae"),a=i.n(n);a.a},2:function(t,e){},2015:function(t,e,i){"use strict";var n=i("0143"),a=i.n(n);a.a},"25b1":function(t,e,i){"use strict";var n=i("b5db"),a=i.n(n);a.a},3:function(t,e){},"3bcb":function(t,e,i){"use strict";var n=i("71dc"),a=i.n(n);a.a},4:function(t,e){},"464c":function(t,e,i){},"4c31":function(t,e,i){},"4c3e":function(t,e,i){"use strict";var n=i("afe2"),a=i.n(n);a.a},"4e54":function(t,e,i){},"4ee2":function(t,e,i){},"4fc9":function(t,e,i){"use strict";var n=i("97de"),a=i.n(n);a.a},5552:function(t,e,i){"use strict";var n=i("b8c3"),a=i.n(n);a.a},"56bc":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("7f7f"),i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",[i("router-view")],1)],1)},r=[],s=(i("7faf"),i("2877")),o={},c=Object(s["a"])(o,a,r,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("HomeHeader"),i("HomeSwiper",{attrs:{list:t.swiperList}}),i("HomeIcons",{attrs:{list:t.iconList}}),i("HomeRecommend",{attrs:{list:t.recommendList}}),i("HomeWeekend",{attrs:{list:t.weekendList}})],1)},f=[],m=i("be94"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._m(1),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n            "+t._s(this.city)+"\n            "),i("i",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left"},[i("div",{staticClass:"iconfont back-icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-input"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n        输入城市/景点/游玩主题\n    ")])}],g=i("2f62"),v={name:"HomeHeader",computed:Object(m["a"])({},Object(g["c"])(["city"]))},b=v,_=(i("e668"),Object(s["a"])(b,p,h,!1,null,"36acee6f",null));_.options.__file="HomeHeader.vue";var y=_.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSwiper?i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},w=[],j={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:!0},swiperList:[{id:"001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"},{id:"002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg"},{id:"003",imgUrl:"http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg"}]}},computed:{showSwiper:function(){return this.list.length}}},k=j,x=(i("1010"),Object(s["a"])(k,C,w,!1,null,"4ac18382",null));x.options.__file="HomeSwiper.vue";var S=x.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",t._l(t.pages,function(e,n){return i("swiper-slide",{key:n},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}})]),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},z=[],E=(i("ac6a"),{name:"HomeIcons",props:{list:Array},data:function(){return{iconList:[{id:"001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"景点门票票票好票票票"},{id:"002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",desc:"景点门票"},{id:"003",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",desc:"景点门票"},{id:"004",imgUrl:"https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",desc:"景点门票"},{id:"005",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",desc:"景点门票"},{id:"006",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",desc:"景点门票"},{id:"007",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png",desc:"景点门票"},{id:"008",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",desc:"本地玩乐"},{id:"009",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",desc:"亲子游"}]}},computed:{pages:function(){var t=[];return this.list.length&&this.list.forEach(function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)}),t}}}),I=E,$=(i("b90a"),Object(s["a"])(I,O,z,!1,null,"383f52fe",null));$.options.__file="HomeIcons.vue";var L=$.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热门推荐")]),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},U=[],A={name:"HomeRecommend",props:{list:Array},data:function(){return{recommendList:[{id:"001",imgUrl:"http://img1.qunarzz.com/sight/p0/1412/f4/ceb0a95c3d11daee35c46eed064c4303.water.jpg_200x200_6d00c8b5.jpg",title:"清东陵",desc:"福临的陵寝，背靠昌瑞山，前朝金星山，位居陵区中轴线上，规模宏大。"},{id:"002",imgUrl:"http://img1.qunarzz.com/sight/p39/201211/00/86d1e4c007f206c493835fbb.jpg_200x200_e5841767.jpg",title:"月坨岛",desc:"“美景”、“美趣”和“美味”三美尤其让人惊艳。无论是赶海拾贝、还是涉水弄雕，是飞艇驽空，还是渔猎垂钓，都富蕴着风情万千"},{id:"003",imgUrl:"http://img1.qunarzz.com/sight/p0/1805/c7/c727f996cbfdeea5a3.img.jpg_200x200_aee92ddd.jpg",title:"滦县青龙山",desc:"河北省滦县青龙山原名清凉山，位于滦县中南部"},{id:"004",imgUrl:"http://img1.qunarzz.com/sight/p0/1703/34/34057084480826dba3.img.jpg_200x200_206dc70f.jpg",title:"塔寺峪景区",desc:"塔寺峪景区位于河北省迁安市大五里乡境内，地处迁安市、迁西县的交界地带。距市政府所在地迁安市区 23.3 公里。"},{id:"005",imgUrl:"http://img1.qunarzz.com/sight/p0/201301/14/783eddccf276834793835fbb.jpg_200x200_3c0be82c.jpg",title:"山叶口景区",desc:"山叶口景区座落于迁安市西部大五里乡山叶口村，总面积14平方公里"},{id:"006",imgUrl:"http://img1.qunarzz.com/sight/p0/1708/bd/bddb4147430026cba3.img.jpg_200x200_f97fe273.jpg",title:"挂云山景区",desc:"挂云山最高峰海拔629.5米，是迁安市的第二高峰，挂云山以山美、境幽、峰奇、石怪、水灵闻名于京东。"}]}}},P=A,q=(i("57d0"),Object(s["a"])(P,H,U,!1,null,"71280533",null));q.options.__file="HomeRecommend.vue";var D=q.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪")]),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},R=[],N={name:"HomeWeekend",props:{list:Array},data:function(){return{recommendList:[{id:"001",imgUrl:"http://img1.qunarzz.com/sight/source/1511/2b/5e0923cd15e06.jpg_r_640x214_b9c024c1.jpg",title:"清东陵",desc:"福临的陵寝，背靠昌瑞山，前朝金星山，位居陵区中轴线上，规模宏大。"},{id:"002",imgUrl:"http://img1.qunarzz.com/sight/source/1509/79/e3036d299610f8.jpg_r_640x214_ac8d495d.jpg",title:"月坨岛",desc:"“美景”、“美趣”和“美味”三美尤其让人惊艳。无论是赶海拾贝、还是涉水弄雕，是飞艇驽空，还是渔猎垂钓，都富蕴着风情万千"},{id:"003",imgUrl:"http://img1.qunarzz.com/sight/p0/1805/c7/c727f996cbfdeea5a3.img.jpg_200x200_aee92ddd.jpg",title:"滦县青龙山",desc:"河北省滦县青龙山原名清凉山，位于滦县中南部"},{id:"004",imgUrl:"http://img1.qunarzz.com/sight/p0/1703/34/34057084480826dba3.img.jpg_200x200_206dc70f.jpg",title:"塔寺峪景区",desc:"塔寺峪景区位于河北省迁安市大五里乡境内，地处迁安市、迁西县的交界地带。距市政府所在地迁安市区 23.3 公里。"},{id:"005",imgUrl:"http://img1.qunarzz.com/sight/p0/201301/14/783eddccf276834793835fbb.jpg_200x200_3c0be82c.jpg",title:"山叶口景区",desc:"山叶口景区座落于迁安市西部大五里乡山叶口村，总面积14平方公里"},{id:"006",imgUrl:"http://img1.qunarzz.com/sight/p0/1708/bd/bddb4147430026cba3.img.jpg_200x200_f97fe273.jpg",title:"挂云山景区",desc:"挂云山最高峰海拔629.5米，是迁安市的第二高峰，挂云山以山美、境幽、峰奇、石怪、水灵闻名于京东。"}]}}},B=N,G=(i("c86a"),Object(s["a"])(B,T,R,!1,null,"afb51c5e",null));G.options.__file="HomeWeekend.vue";var W=G.exports,M=i("bc3a"),F=i.n(M),Y={name:"Home",components:{HomeHeader:y,HomeSwiper:S,HomeIcons:L,HomeRecommend:D,HomeWeekend:W},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:Object(m["a"])({},Object(g["c"])(["city"])),methods:{getHomeInfo:function(){this.lastCity=this.city,F.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&this.getHomeInfo()}},J=Y,Q=(i("6379"),Object(s["a"])(J,d,f,!1,null,"39bfd7d0",null));Q.options.__file="Home.vue";var V=Q.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("PurePdf",{attrs:{pdfurl:t.pdfurls,scale:t.scale},on:{onErr:t.onErr}})],1)},X=[],Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("BSReader",[i("div",{attrs:{id:"pdfWrapper"}},[t.isloading?i("div",{staticClass:"loading-pdf"},[t._v(t._s(t.loadingTxt))]):t._e()])])},tt=[],et=i("9511"),it=i.n(et),nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"bs-reader",on:{click:t.readerClick}},[i("transition",[t._t("default")],2)],1)},at=[],rt=i("1fba"),st={name:"BSReader",methods:{readerClick:function(){console.log(this.scroll.y),event._constructed}},mounted:function(){this.scroll=new rt["a"](this.$refs.wrapper,{click:!0})}},ot=st,ct=(i("f2db"),Object(s["a"])(ot,nt,at,!1,null,"3d4c6ad2",null));ct.options.__file="BSReader.vue";var lt=ct.exports,ut={name:"PurePdf",props:{pdfurl:{default:""},scale:{default:1}},components:{BSReader:lt},data:function(){return{pafDoc:null,pageNum:1,pageRendering:!1,pageNumPending:null,isloading:!0,loadingTxt:"拼命加载中..."}},mounted:function(){var t=this,e=document.getElementById("pdfWrapper");it.a.getDocument(t.pdfurl).then(function(i){t.isloading=!0,t.pdfDoc=i;for(var n=t.pdfDoc.numPages,a=1;a<=n;a++){var r="canvas".concat(a),s=document.createElement("canvas");s.setAttribute("id",r),s.setAttribute("class","canvas-item"),e.appendChild(s),t.renderPage(a),n===a&&(t.isloading=!1)}}).catch(function(e){t.loadingTxt="加载失败，请稍后重试",t.$emit("onErr",e)})},methods:{renderPage:function(t){var e=this,i="canvas".concat(t),n=document.getElementById(i),a=n.getContext("2d");e.pageRendering=!0,e.pdfDoc.getPage(t).then(function(t){var i=t.getViewport(e.scale);n.height=i.height,n.width=i.width;var r={canvasContext:a,viewport:i};t.render(r)})}}},dt=ut,ft=(i("9a71"),Object(s["a"])(dt,Z,tt,!1,null,null,null));ft.options.__file="PurePdf.vue";var mt=ft.exports,pt={name:"Pdf",data:function(){return{pdfurls:"http://qiniu.loveliyuan.com/28.pdf",scale:1}},components:{PurePdf:mt},methods:{onErr:function(t){console.log("pdf加载失败，请重试"),console.log("错误信息：",t)}}},ht=pt,gt=(i("8868"),Object(s["a"])(ht,K,X,!1,null,"7e93bd08",null));gt.options.__file="Pdf.vue";var vt=gt.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("CityHeader"),i("CitySearch",{attrs:{cities:t.cities}}),i("CityList",{attrs:{city:t.city,hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),i("CityAlphabet",{attrs:{letters:t.letters},on:{change:t.handleLetterChangeClick}})],1)},_t=[],yt=(i("456d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._v("\n    城市选择\n    "),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont back-icon"},[t._v("")])])],1)}),Ct=[],wt={name:"CityHeader"},jt=wt,kt=(i("2015"),Object(s["a"])(jt,yt,Ct,!1,null,"51827e15",null));kt.options.__file="CityHeader.vue";var xt=kt.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配的内容")])],2)])])},Ot=[],zt=(i("386d"),{name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.name.indexOf(t.keyword)>-1||i.spell.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:Object(m["a"])({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(g["b"])(["changeCity"])),mounted:function(){this.scroll=new rt["a"](this.$refs.search)}}),Et=zt,It=(i("25b1"),Object(s["a"])(Et,St,Ot,!1,null,"7c83d6ba",null));It.options.__file="CitySearch.vue";var $t=It.exports,Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._l(t.cities,function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n                    "+t._s(e.name)+"\n                ")])}))])})],2)])},Ht=[],Ut={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},computed:Object(m["a"])({},Object(g["c"])(["city"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},methods:Object(m["a"])({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(g["b"])(["changeCity"])),mounted:function(){this.scroll=new rt["a"](this.$refs.wrapper)}},At=Ut,Pt=(i("62ab"),Object(s["a"])(At,Lt,Ht,!1,null,"4a3f46df",null));Pt.options.__file="CityList.vue";var qt=Pt.exports,Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(e))])}))},Tt=[],Rt={name:"CityAlphabet",props:{letters:Array},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs["A"][0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,n=Math.floor((i-e.startY)/20);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},Nt=Rt,Bt=(i("b79e"),Object(s["a"])(Nt,Dt,Tt,!1,null,"f9e66b24",null));Bt.options.__file="CityAlphabet.vue";var Gt=Bt.exports,Wt={name:"City",data:function(){return{city:"",hotCities:[],cities:{},letters:[],letter:""}},components:{CityHeader:xt,CitySearch:$t,CityList:qt,CityAlphabet:Gt},methods:{getCityInfo:function(){F.a.get("api/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.city=e.city,this.hotCities=e.hotCities,this.cities=e.cities,this.letters=Object.keys(e.cities)}},handleLetterChangeClick:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},Mt=Wt,Ft=(i("14ed"),Object(s["a"])(Mt,bt,_t,!1,null,"a3e0f544",null));Ft.options.__file="City.vue";var Yt=Ft.exports,Jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("DetailBanner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,bannerImgs:t.bannerImgs}}),i("DetailHeader"),i("DetailList",{attrs:{list:t.list}}),i("div",{staticClass:"content"})],1)},Qt=[],Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleClickBanner}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),i("div",{staticClass:"banner-number"},[i("i",{staticClass:"iconfont arrow-icon"},[t._v("")]),t._v(t._s(this.bannerImgs.length))])])]),i("FadeAnimation",[i("CommonGallery",{directives:[{name:"show",rawName:"v-show",value:t.hasShowGallery,expression:"hasShowGallery"}],attrs:{images:t.bannerImgs},on:{close:t.handleClickSiwper}})],1)],1)},Kt=[],Xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{click:t.handleClickSwiper}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.images,function(t){return i("swiper-slide",{key:t.id,staticClass:"swiper-zoom-container"},[i("img",{staticClass:"wrapper-img",attrs:{src:t.imgUrl,alt:""}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},Zt=[],te=(i("c5f6"),{name:"CommonGallery",props:{images:{type:Array,default:function(){return[]}},slide:{type:Number,default:function(){return 1}}},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction",clickable:!0},observer:!0,observeParents:!0,zoom:!0,initialSlide:this.slide}}},methods:{handleClickSwiper:function(){this.$emit("close")}}}),ee=te,ie=(i("fbcc"),Object(s["a"])(ee,Xt,Zt,!1,null,"6253e834",null));ie.options.__file="Gallery.vue";var ne=ie.exports,ae=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[t._t("default")],2)},re=[],se={name:"FadeAnimation"},oe=se,ce=(i("1e8a"),Object(s["a"])(oe,ae,re,!1,null,"b9fd7e10",null));ce.options.__file="FadeAnimation.vue";var le=ce.exports,ue={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{hasShowGallery:!1,images:[{id:"001",imgUrl:"https://dimg06.c-ctrip.com/images/35070o000000flw6b524E_C_300_256_Q80.jpg"},{id:"002",imgUrl:"http://img1.qunarzz.com/sight/p0/1505/aa/aad740b42ce7c6f6.water.jpg_r_800x800_657fc51e.jpg"},{id:"003",imgUrl:"http://img1.qunarzz.com/sight/p0/1505/86/86140f3a99985f50.water.jpg_r_800x800_f7923a14.jpg"}]}},components:{CommonGallery:ne,FadeAnimation:le},methods:{handleClickBanner:function(){this.hasShowGallery=!0},handleClickSiwper:function(){this.hasShowGallery=!1}}},de=ue,fe=(i("d3e1"),Object(s["a"])(de,Vt,Kt,!1,null,"c49ddfb8",null));fe.options.__file="DetailBanner.vue";var me=fe.exports,pe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"iconfont header-abs-back-icon"},[t._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[t._v("\n        景点详情\n        "),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header-fixed-back-icon"},[t._v("")])])],1)],1)},he=[],ge={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},ve=ge,be=(i("75b6"),Object(s["a"])(ve,pe,he,!1,null,"052cddc2",null));be.options.__file="DetailHeader.vue";var _e=be.exports,ye=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n            "+t._s(e.title)+"\n        ")]),e.children?i("div",{staticClass:"item-children"},[i("DetailList",{attrs:{list:e.children}})],1):t._e()])}))},Ce=[],we={name:"DetailList",props:{list:Array}},je=we,ke=(i("3bcb"),Object(s["a"])(je,ye,Ce,!1,null,"605a46d9",null));ke.options.__file="DetailList.vue";var xe=ke.exports,Se={name:"Detail",data:function(){return{sightName:"",bannerImg:"",bannerImgs:[],list:[]}},components:{DetailBanner:me,DetailHeader:_e,DetailList:xe},methods:{getDetailInfo:function(){F.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;console.log(e.sightName),this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.bannerImgs=e.gallaryImgs,this.list=e.categoryList}}},created:function(){this.getDetailInfo()},activated:function(){this.getDetailInfo()}},Oe=Se,ze=(i("4fc9"),Object(s["a"])(Oe,Jt,Qt,!1,null,"f97ab1ee",null));ze.options.__file="Detail.vue";var Ee=ze.exports,Ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i(t.ReaderCategory,{tag:"component"})],1)},$e=[],Le=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PurePdf",{attrs:{pdfurl:t.pdfurls,scale:t.scale},on:{onErr:t.onErr}})},He=[],Ue={name:"ReaderPdf",data:function(){return{pdfurls:"http://qiniu.loveliyuan.com/28.pdf",scale:1}},components:{PurePdf:mt},methods:{onErr:function(t){console.log("pdf加载失败，请重试"),console.log("错误信息：",t)}}},Ae=Ue,Pe=(i("e57c"),Object(s["a"])(Ae,Le,He,!1,null,"4f432c5a",null));Pe.options.__file="ReaderPdf.vue";var qe=Pe.exports,De=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ScrollImage")},Te=[],Re=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("BSReader",[i("div",{attrs:{id:"imgWrapper"}},t._l(t.imgArray,function(e,n){return i("div",{key:n,staticClass:"img",on:{click:function(e){t.imgClick(n)}}},[i("img",{attrs:{src:e.imgUrl,alt:"",width:"100%"}})])}))]),t.hasShowGallery?i("CommonGallery",{attrs:{images:t.imgArray,slide:t.slide},on:{close:t.handleClickSiwper}}):t._e()],1)},Ne=[],Be={name:"ScrollImage",components:{BSReader:lt,CommonGallery:ne},data:function(){return{hasShowGallery:!1,slide:0,imgArray:[{id:"001",imgUrl:"http://img1.3lian.com/img013/v5/21/d/84.jpg"},{id:"002",imgUrl:"http://pic34.photophoto.cn/20150314/0034034877183417_b.jpg"},{id:"003",imgUrl:"http://img0.imgtn.bdimg.com/it/u=260329114,3367670618&fm=26&gp=0.jpg"},{id:"004",imgUrl:"http://pic17.photophoto.cn/20101221/0020032849878089_b.jpg"}]}},methods:{imgClick:function(t){this.slide=t,this.hasShowGallery=!0},handleClickSiwper:function(){this.hasShowGallery=!1}}},Ge=Be,We=(i("8222"),Object(s["a"])(Ge,Re,Ne,!1,null,"0a58673f",null));We.options.__file="ScrollImage.vue";var Me=We.exports,Fe={name:"ReaderImage",components:{ScrollImage:Me}},Ye=Fe,Je=(i("5552"),Object(s["a"])(Ye,De,Te,!1,null,"22ce4ece",null));Je.options.__file="ReaderImage.vue";var Qe=Je.exports,Ve={name:"Reader",components:{ReaderPdf:qe,ReaderImage:Qe},data:function(){return{ReaderCategory:"ReaderImage"}}},Ke=Ve,Xe=(i("e325"),Object(s["a"])(Ke,Ie,$e,!1,null,"0bd7d214",null));Xe.options.__file="Reader.vue";var Ze=Xe.exports,ti=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("\n    登录中......\n")])},ei=[],ii={name:"Login",methods:Object(m["a"])({},Object(g["b"])(["setToken"]),{Login:function(t){t&&(this.setToken(t.data),this.$router.push("/reader"))},getAuthUrl:function(t){window.location.href=t.data}}),mounted:function(){var t=this.$route.query.code;t?this.axios.get("http://api.loveliyuan.com/login?code="+t).then(this.Login).catch():this.axios.get("http://api.loveliyuan.com/get_authorized_url").then(this.getAuthUrl).catch()}},ni=ii,ai=(i("4c3e"),Object(s["a"])(ni,ti,ei,!1,null,"676aaa1c",null));ai.options.__file="Login.vue";var ri=ai.exports;n["a"].use(u["a"]);var si=new u["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:V},{path:"/city",name:"city",component:Yt},{path:"/detail/:id",name:"detail",component:Ee},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}},{path:"/pdf",name:"pdf",component:vt},{path:"/reader",name:"reader",component:Ze},{path:"/login",name:"login",component:ri}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),oi="石家庄",ci=null;try{localStorage.city&&(oi=localStorage.city),localStorage.token&&(ci=localStorage.token)}catch(gi){}var li={city:oi,token:ci},ui={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(gi){}},setToken:function(t,e){t.token=e;try{localStorage.token=e}catch(gi){}}};n["a"].use(g["a"]);var di=new g["a"].Store({state:li,mutations:ui,actions:{}}),fi=i("fe3c"),mi=i.n(fi),pi=i("7212"),hi=i.n(pi);i("4ee2"),i("a07f"),i("b37a"),i("dfa4");n["a"].config.productionTip=!1,mi.a.attach(document.body),n["a"].use(hi.a),n["a"].prototype.axios=F.a,si.beforeEach(function(t,e,i){console.log(di.state.token);var n=["login"],a=di.state.token;n.indexOf(t.name)<0&&(a||si.push({path:"/login"})),i()}),new n["a"]({router:si,store:di,render:function(t){return t(l)}}).$mount("#app")},"57d0":function(t,e,i){"use strict";var n=i("56bc"),a=i.n(n);a.a},"5fa1":function(t,e,i){},"62ab":function(t,e,i){"use strict";var n=i("d3ba"),a=i.n(n);a.a},6379:function(t,e,i){"use strict";var n=i("464c"),a=i.n(n);a.a},"71dc":function(t,e,i){},"75b6":function(t,e,i){"use strict";var n=i("c63e"),a=i.n(n);a.a},"7d50":function(t,e,i){},"7faf":function(t,e,i){"use strict";var n=i("8fba"),a=i.n(n);a.a},8222:function(t,e,i){"use strict";var n=i("c8a1"),a=i.n(n);a.a},8868:function(t,e,i){"use strict";var n=i("1b9a"),a=i.n(n);a.a},"8ebb":function(t,e,i){},"8fba":function(t,e,i){},"94e9":function(t,e,i){},"97de":function(t,e,i){},"9a71":function(t,e,i){"use strict";var n=i("8ebb"),a=i.n(n);a.a},a036:function(t,e,i){},a07f:function(t,e,i){},abae:function(t,e,i){},af25:function(t,e,i){},afe2:function(t,e,i){},b37a:function(t,e,i){},b5db:function(t,e,i){},b79e:function(t,e,i){"use strict";var n=i("7d50"),a=i.n(n);a.a},b8c3:function(t,e,i){},b90a:function(t,e,i){"use strict";var n=i("af25"),a=i.n(n);a.a},c63e:function(t,e,i){},c86a:function(t,e,i){"use strict";var n=i("94e9"),a=i.n(n);a.a},c8a1:function(t,e,i){},d3ba:function(t,e,i){},d3e1:function(t,e,i){"use strict";var n=i("e6c0"),a=i.n(n);a.a},e325:function(t,e,i){"use strict";var n=i("a036"),a=i.n(n);a.a},e57c:function(t,e,i){"use strict";var n=i("5fa1"),a=i.n(n);a.a},e668:function(t,e,i){"use strict";var n=i("1ced"),a=i.n(n);a.a},e6c0:function(t,e,i){},f2db:function(t,e,i){"use strict";var n=i("4e54"),a=i.n(n);a.a},fbcc:function(t,e,i){"use strict";var n=i("1b63"),a=i.n(n);a.a}});
//# sourceMappingURL=app.37e2db60.js.map