(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2585)}])},8623:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(4298),a=n(8148);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{id:"google-analytics",strategy:"afterInteractive",children:"\n          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','".concat(a.cv,"');\n        ")}),(0,r.jsx)("noscript",{dangerouslySetInnerHTML:{__html:'<iframe src="https://www.googletagmanager.com/ns.html?id='.concat(a.cv,'"\n            height="0" width="0" style="display:none;visibility:hidden"></iframe>')}})]})}},8148:function(e,t,n){"use strict";n.d(t,{Vb:function(){return r},ge:function(){return i},im:function(){return a},JG:function(){return o},or:function(){return s},GR:function(){return l},cv:function(){return c}});var r="\u9a62\u5b50",i="\u9a62\u5f62\u5de5\u4f5c\u5ba4",a="\u7121\u540d\uff0d\u5e7d\u6e2f\u8ff7\u57ce",o="\u5e7d\u6697\u6e2f\u5167\u4e00\u7fa4\u50ad\u5175\u6b63\u9ed8\u9ed8\u7684\u6d3b\u52d5\u8457\uff0c\u56e0\u70ba\u5404\u81ea\u7684\u5229\u76ca\u548c\u751f\u6d3b\u7d44\u6210\u4e86\u4e00\u500b\u5718\u9ad4\u9032\u884c\u5404\u7a2e\u6d3b\u52d5\u3002",s="https://frenkieli.github.io/Gloomhaven_Troops",l="674189663950207",c="GTM-PVD92NV"},2585:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return L},default:function(){return D}});var r=n(5893),i=n(7294),a=n(9008),o=n(8148),s=n(8623),l=n(9477),c=n(9365),h=n(2792),d=n.n(h),u=n(1217);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"canvasElement",null),g(this,"scene",null),g(this,"camera",null),g(this,"renderer",null),g(this,"stats",null),g(this,"loader",{}),g(this,"loadingManager",null),g(this,"setProgress",null),g(this,"sizes",{width:window.innerWidth,height:window.innerHeight}),this.canvasElement=t,this.setProgress=n}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.initScene(),this.initCamera(),this.initLoadingManager(),this.initLoader(),window.addEventListener("resize",this.resizeTHREE.bind(this)),this.loader.gltfLoader.load("./3dmodel/beast_tyrant.gltf",(function(t){t.scene.scale.x=30,t.scene.scale.y=30,t.scene.scale.z=30,t.scene.position.z=90,t.scene.position.y=90,t.scene.rotation.x=Math.PI/2,t.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0)})),e.scene.add(t.scene)})),this.initRenderer()}},{key:"initScene",value:function(){this.scene=new l.xsS}},{key:"initCamera",value:function(){this.camera=new l.cPb(75,window.innerWidth/window.innerHeight,.1,3e3),this.camera.position.set(0,-420,420),this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.lookAt(this.scene.position),this.scene.add(this.camera)}},{key:"initRenderer",value:function(){this.renderer=new l.CP7({canvas:this.canvasElement,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.render()}},{key:"initLoadingManager",value:function(){var e=this;this.loadingManager=new l.lLk,this.loadingManager.onStart=function(e,t,n){console.log("Started loading file: "+e+".\nLoaded "+t+" of "+n+" files.")},this.loadingManager.onLoad=function(){console.log("Loading complete!")},this.loadingManager.onProgress=function(t,n,r){e.setProgress(n/r*100),console.log("Loading file: "+t+".\nLoaded "+n+" of "+r+" files.")},this.loadingManager.onError=function(e){console.log("There was an error loading "+e)}}},{key:"initLoader",value:function(){this.loader.textrue=new l.dpR(this.loadingManager),this.loader.gltfLoader=new u.E(this.loadingManager)}},{key:"initTool",value:function(){var e=new l.y8_(99999);this.scene.add(e),this.stats=new(d()),this.stats.setMode(0);var t=document.createElement("div");t.className="absolute t-0 l-0",t.appendChild(this.stats.domElement),document.body.appendChild(t),new c.z(this.camera,this.canvasElement).enableDamping=!0}},{key:"resizeTHREE",value:function(){this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}},{key:"render",value:function(){requestAnimationFrame(this.render.bind(this)),this.stats&&this.stats.update(),this.renderer.render(this.scene,this.camera)}}])&&f(t.prototype,n),r&&f(t,r),e}(),p=JSON.parse('["1_sealand","2_sandland","3_woodland","4_stonilyland","5_iceland","6_cellarland","7_swampland","8_lavaland","9_grassland"]');function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e,t,n){return(v=w()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&b(i,n.prototype),i}).apply(null,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"mainTHREE",null),x(this,"material",{}),x(this,"hexMatrix",[]),x(this,"topographyDescription",{construct:{lightDesc:[{color:[16777215,2,3e3,2],position:[{x:0,y:0},260]}],hexDesc:[[1,1,1,1,1],[1,1,1,1,1,1],[2,2,2,2,2],[2,2,2,2,2,2],[3,3,3,3,3],[3,3,3,3,3,3],[4,4,4,4,4],[4,4,4,4,4,4],[5,5,5,5,5],[5,5,5,5,5,5],[6,6,6,6,6],[6,6,6,6,6,6],[7,7,7,7,7],[7,7,7,7,7,7],[8,8,8,8,8],[8,8,8,8,8,8],[9,9,9,9,9],[9,9,9,9,9,9]]}}),this.mainTHREE=t;for(var n=0;n<p.length;n++){var r=p[n].split("_");this.material[r[0]]={name:r[1],textrue:t.loader.textrue.load("./three/textrue/"+p[n]+".jpg"),normalMap:t.loader.textrue.load("./three/normalmap/"+p[n]+".jpg")}}}var t,n,r;return t=e,(n=[{key:"setTopography",value:function(e){var t=this;this.hexMatrix=[];var n=25,r=n*Math.sqrt(3),i=this.topographyDescription[e],a=i.hexDesc,o=i.lightDesc,s=2*r+(a.length-1)*r;a.forEach((function(e,i){var a=t,o=s/2-(r+i*r),l=100+6*(e.length-1)*n;t.hexMatrix.push([]),e.forEach((function(e,t){var r=l/2-(50+6*t*n),s=a.createHex(e,n);s.position.set(r,o,0),a.hexMatrix[i].push(s),a.mainTHREE.scene.add(s)}))})),o.forEach((function(e){var n,r=t.createLight(e);Array.isArray(e.position[0])?(n=t.hexMatrix[e.position[0][0]][e.position[0][1]].position,console.log(n)):n={x:e.position[0].x,y:e.position[0].y},r.position.set(n.x,n.y,e.position[1]);var i=new l.xG9(r);t.mainTHREE.scene.add(r),t.mainTHREE.scene.add(i)}))}},{key:"createHex",value:function(e,t){var n=new l.fHI(2*t-2,2*t-2,10,6),r=new l.Wid({map:this.material[e].textrue,normalMap:this.material[e].normalMap}),i=new l.Kj0(n,r);return i.rotation.y=Math.PI/-2,i.rotation.x=Math.PI/-2,i.roleType="topography",i.receiveShadow=!0,i}},{key:"createLight",value:function(e){var t=v(l.cek,E(e.color));return t.castShadow=!0,t}}])&&y(t.prototype,n),r&&y(t,r),e}();n(4051);var M={0:"brute",1:"cragheart",2:"mindthief",3:"scoundrel",4:"spellweaver",5:"tinkerer",6:"beast_tyrant",7:"berserker",8:"doomstalker",9:"elementalist",10:"nightshroud",11:"plagueherald",12:"quartermaster",13:"sawbones",14:"soothsinger",15:"summoner",16:"sunkeeper",brute:0,cragheart:1,mindthief:2,scoundrel:3,spellweaver:4,tinkerer:5,beast_tyrant:6,berserker:7,doomstalker:8,elementalist:9,nightshroud:10,plagueherald:11,quartermaster:12,sawbones:13,soothsinger:14,summoner:15,sunkeeper:16};function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=Object.keys(M).length/2,T=function(){function e(t,n){var r=this,i=function(e){var t=r;console.log(e),r.mainTHREE.loader.gltfLoader.load("./3dmodel/".concat(M[e],".gltf"),(function(n){t.threeModel[M[e]]=n}))};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"mainTHREE",null),_(this,"mainTopography",null),_(this,"threeModel",{}),this.mainTHREE=t,this.mainTopography=n;for(var a=0;a<C;a++)i(a)}var t,n,r;return t=e,(n=[{key:"comeOut",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=0;t<e.length;t++);}}])&&k(t.prototype,n),r&&k(t,r),e}(),R=n(7041),P=n.n(R),S=n(4298);console.log({src:"/Gloomhaven_Troops/_next/static/media/map.16cc68e9.jpg",height:603,width:728,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKkS3f/EABoQAAICAwAAAAAAAAAAAAAAAAERAgMABDH/2gAIAQEAAT8A2JUSpLDC6s//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQIBAT8AHC//xAAXEQADAQAAAAAAAAAAAAAAAAAAASER/9oACAEDAQE/AMrrP//Z"});var L=!0;function D(e){e.characterList;var t=(0,i.useRef)(),n=(0,i.useRef)(),l=(0,i.useRef)(),c=(0,i.useState)(0),h=c[0],d=c[1];return(0,i.useEffect)((function(){var e=new m(document.getElementById("gloomhaven"),d);e.init(),e.initTool();var t=new j(e);t.setTopography("construct");new T(e,t)}),[]),(0,i.useEffect)((function(){100===h&&(console.log("100"),n.current.classList.add("opacity-0"),l.current.classList.add("cursor-pointer"),l.current.classList.remove("opacity-0"))}),[h]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{rel:"shortcut icon",href:o.or+"/images/icon.jpg"}),(0,r.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"192x192",href:o.or+"/images/icon.jpg"}),(0,r.jsx)("title",{children:o.im}),(0,r.jsx)("meta",{name:"author",content:o.Vb}),(0,r.jsx)("meta",{name:"copyright",content:o.ge}),(0,r.jsx)("meta",{name:"name",content:o.im}),(0,r.jsx)("meta",{name:"image",content:o.or+"/images/share.jpg"}),(0,r.jsx)("meta",{name:"description",content:o.JG}),(0,r.jsx)("meta",{property:"og:title",content:o.im}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"article:section",content:"table of contents"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.facebook.com/lyumage"}),(0,r.jsx)("meta",{property:"og:image",content:o.or+"/images/share.jpg"}),(0,r.jsx)("meta",{property:"og:description",content:o.JG}),(0,r.jsx)("meta",{property:"og:site_name",content:o.im}),(0,r.jsx)("meta",{property:"fb:app_id",content:o.GR})]}),(0,r.jsx)(S.default,{src:"./lib/html2canvas.js"}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{ref:t,className:"\n        uppercase tracking-widest md:tracking-one ".concat(P()["font-DotGothic16"]," \n        z-10 fixed top-0 right-0 bottom-0 left-0 \n        cursor-default select-none\n        text-white bg-black"),children:(0,r.jsxs)("div",{className:" h-full w-full flex flex-col justify-center items-center ",children:[(0,r.jsx)("h1",{className:"text-4xl md:text-7xl font-black leading-normal md:leading-normal",children:"gloomhaven"}),(0,r.jsx)("h2",{className:"text-xl md:text-3xl font-medium leading-normal md:leading-normal",children:o.im}),(0,r.jsxs)("div",{ref:n,className:" fixed bottom-20 w-1/2 h-6 border border-solid border-white rounded-2xl overflow-hidden duration-300 ",children:[(0,r.jsx)("span",{className:" tracking-widest absolute left-1/2 top-1/2 translate-x-center translate-y-center text-white mix-blend-difference ",children:Math.floor(h)+"%"}),(0,r.jsx)("div",{className:" h-full bg-white rounded-2xl duration-100 ",style:{width:h+"%"}})]}),(0,r.jsx)("div",{ref:l,className:" duration-300 opacity-0 fixed bottom-20 overflow-hidden text-white text-6xl md:text-9xl ",onClick:function(){100===h&&(console.log("start"),html2canvas(t.current,{removeContainer:!0,useCORS:!0,scrollY:0,scrollX:0,dpi:96,onrendered:function(){console.log("\u5b8c\u6210")}}).then((function(e){var n=document.createElement("img");n.src=e.toDataURL(),n.onload=function(){var e=document.createElement("canvas"),r=e.getContext("2d");e.width=n.width,e.height=n.height,r.drawImage(n,0,0,window.innerWidth,window.innerHeight),e.className="z-10 fixed top-0 left-0",document.body.appendChild(e),t.current.remove(),function(e){for(var t=e.getContext("2d"),n=Math.ceil(e.width/10),r=Math.ceil(e.height/10),i=[],a=0;a<n;a++){i[a]=[];for(var o=0;o<r;o++)i[a].push([10*a,10*o,10,10])}var s=Math.floor(i.length*i[0].length/100),l=setInterval((function(){for(var n=0;n<s;n++){var r=Math.floor(Math.random()*i.length),a=Math.floor(Math.random()*i[r].length);if(t.beginPath(),t.globalCompositeOperation="destination-out",t.fillStyle="#fa0",t.rect(i[r][a][0],i[r][a][1],i[r][a][2],i[r][a][3]),t.fill(),t.closePath(),i[r].splice(a,1),0===i[r].length&&(i.splice(r,1),console.log("\u6d88\u5931\u4e00\u500b")),0===i.length){e.remove(),clearInterval(l),console.log("\u95dc\u9589");break}}}),2)}(e)}})))},children:"START"})]})}),(0,r.jsx)("div",{children:(0,r.jsx)("canvas",{id:"gloomhaven"})})]})}},7041:function(e){e.exports={"font-DotGothic16":"styles_font-DotGothic16__yhzH6"}}},function(e){e.O(0,[737,322,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);