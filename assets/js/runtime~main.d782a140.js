(()=>{"use strict";var e,a,t,c,r,f={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=f,d.c=b,e=[],d.O=(a,t,c,r)=>{if(!t){var f=1/0;for(i=0;i<e.length;i++){t=e[i][0],c=e[i][1],r=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&r||f>=r)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(b=!1,r<f&&(f=r));if(b){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,c,r]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var f={};a=a||[null,t({}),t([]),t(t)];for(var b=2&c&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,d.d(r,f),r},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({284:"8412b260",867:"33fc5bb8",1235:"a7456010",1703:"2a62fd8e",1724:"dff1c289",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2427:"7847773a",2711:"9e4087bc",2748:"822bd8ab",3028:"935efb9b",3098:"533a09ca",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3900:"691c04b6",3976:"0e384e19",4134:"393be207",4212:"621db11d",4583:"1df93b7f",4733:"09e73f9c",4736:"e44a2883",4813:"6875c492",5557:"d9f32620",5742:"aba21aa0",5898:"f9d6c579",6061:"1f391b9e",6075:"069fcce2",6089:"fd400361",6969:"14eb3368",6979:"09df0339",7098:"a7bd4aaa",7400:"39c506da",7472:"814f3328",7643:"a6aa9e1f",7775:"7ed71c65",8209:"01a85c17",8226:"787203c9",8401:"17896441",8609:"925b3f96",8737:"7661071f",8863:"f55d3e7a",9048:"a94703ab",9262:"18c41134",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{284:"eb84d933",867:"5e9d39d1",1235:"f2ec0f1e",1703:"e0572ac5",1724:"56a603ef",1903:"feb20f1c",1953:"99c30094",1972:"9a681a8a",1974:"eba3fdc2",2427:"64576b06",2465:"0f2708fb",2711:"cd78564b",2748:"b0e808e3",3028:"1f217631",3042:"3c77a21e",3098:"dd792853",3249:"86734890",3637:"d2b9c7e3",3694:"b221346d",3900:"270d43e2",3976:"99b4b2e2",4134:"0ff50e5b",4212:"fee051dd",4583:"9ced7aca",4733:"3d08c0e5",4736:"021ad430",4813:"ee179290",5557:"3cffd132",5742:"285847a3",5898:"e4bedb31",6061:"e5617050",6075:"22def1af",6089:"2d24d7cd",6969:"705f47b4",6979:"cc60b1ab",7098:"5c902ebb",7400:"a830519c",7472:"cbefe7a3",7643:"dfd48597",7775:"a0ce3f07",7982:"06c84713",8209:"a5b19c4c",8226:"0e0dcc33",8401:"5b69d4a8",8609:"95263fcc",8737:"68b8bb19",8863:"92a424d6",9048:"85cbf2c9",9262:"3cf643d1",9325:"1e091b94",9328:"1d51bba2",9647:"171af262",9858:"0c8a5f90"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},r="strix-website:",d.l=(e,a,t,f)=>{if(c[e])c[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",r+t),b.src=e),c[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var r=c[e];if(delete c[e],b.parentNode&&b.parentNode.removeChild(b),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/strix.docs/",d.gca=function(e){return e={17896441:"8401",59362658:"9325","8412b260":"284","33fc5bb8":"867",a7456010:"1235","2a62fd8e":"1703",dff1c289:"1724",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974","7847773a":"2427","9e4087bc":"2711","822bd8ab":"2748","935efb9b":"3028","533a09ca":"3098",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","691c04b6":"3900","0e384e19":"3976","393be207":"4134","621db11d":"4212","1df93b7f":"4583","09e73f9c":"4733",e44a2883:"4736","6875c492":"4813",d9f32620:"5557",aba21aa0:"5742",f9d6c579:"5898","1f391b9e":"6061","069fcce2":"6075",fd400361:"6089","14eb3368":"6969","09df0339":"6979",a7bd4aaa:"7098","39c506da":"7400","814f3328":"7472",a6aa9e1f:"7643","7ed71c65":"7775","01a85c17":"8209","787203c9":"8226","925b3f96":"8609","7661071f":"8737",f55d3e7a:"8863",a94703ab:"9048","18c41134":"9262",e273c56f:"9328","5e95c892":"9647","36994c47":"9858"}[e]||e,d.p+d.u(e)},(()=>{var e={5354:0,1869:0};d.f.j=(a,t)=>{var c=d.o(e,a)?e[a]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>c=e[a]=[t,r]));t.push(c[2]=r);var f=d.p+d.u(a),b=new Error;d.l(f,(t=>{if(d.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var r=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",b.name="ChunkLoadError",b.type=r,b.request=f,c[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var c,r,f=t[0],b=t[1],o=t[2],n=0;if(f.some((a=>0!==e[a]))){for(c in b)d.o(b,c)&&(d.m[c]=b[c]);if(o)var i=o(d)}for(a&&a(t);n<f.length;n++)r=f[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},t=self.webpackChunkstrix_website=self.webpackChunkstrix_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();