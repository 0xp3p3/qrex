var QRCode=function(t){"use strict";var r;function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function o(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function a(t,r,e){return r&&o(t.prototype,r),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function u(t){var r=function(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r);if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof r?r:r+""}var c=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];function s(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17}function f(t){return c[t]}function h(t){for(var r=0;0!==t;)r++,t>>>=1;return r}function l(){return void 0!==r}function d(t){return r(t)}var v={bit:1},g={bit:0},p={bit:3},w={bit:2};function m(t,r){if((e=t)&&void 0!==e.bit&&e.bit>=0&&e.bit<4)return t;var e;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return v;case"m":case"medium":return g;case"q":case"quartile":return p;case"h":case"high":return w;default:throw new Error("Unknown EC Level: ".concat(t))}}(t)}catch(t){return r}}var y=function(){return a((function t(){n(this,t),this.buffer=[],this.length=0}),[{key:"get",value:function(t){var r=Math.floor(t/8);return 1==(this.buffer[r]>>>7-t%8&1)}},{key:"put",value:function(t,r){for(var e=0;e<r;e++)this.putBit(1==(t>>>r-e-1&1))}},{key:"getLengthInBits",value:function(){return this.length}},{key:"putBit",value:function(t){var r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),t&&(this.buffer[r]|=128>>>this.length%8),this.length++}}])}(),b=function(){return a((function t(r){if(n(this,t),!r||r<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=r,this.data=new Uint8Array(r*r),this.reservedBit=new Uint8Array(r*r)}),[{key:"set",value:function(t,r,e,n){var o=t*this.size+r;this.data[o]=e,n&&(this.reservedBit[o]=!0)}},{key:"get",value:function(t,r){return this.data[t*this.size+r]}},{key:"xor",value:function(t,r,e){this.data[t*this.size+r]^=e}},{key:"isReserved",value:function(t,r){return this.reservedBit[t*this.size+r]}}])}();function E(t){for(var r=[],e=function(t){if(1===t)return[];for(var r=Math.floor(t/7)+2,e=s(t),n=145===e?26:2*Math.ceil((e-13)/(2*r-2)),o=[e-7],a=1;a<r-1;a++)o[a]=o[a-1]-n;return o.push(6),o.reverse()}(t),n=e.length,o=0;o<n;o++)for(var a=0;a<n;a++)0===o&&0===a||0===o&&a===n-1||o===n-1&&0===a||r.push([e[o],e[a]]);return r}var A={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},B=3,k=3,x=40,T=10;function R(t){return null!=(r=t)&&""!==r&&!isNaN(r)&&r>=0&&r<=7?Number.parseInt(t,10):void 0;var r}function P(t){for(var r=t.size,e=0,n=0,o=0,a=null,i=null,u=0;u<r;u++){n=o=0,a=i=null;for(var c=0;c<r;c++){var s=t.get(u,c);s===a?n++:(n>=5&&(e+=B+(n-5)),a=s,n=1),(s=t.get(c,u))===i?o++:(o>=5&&(e+=B+(o-5)),i=s,o=1)}n>=5&&(e+=B+(n-5)),o>=5&&(e+=B+(o-5))}return e}function L(t){for(var r=t.size,e=0,n=0;n<r-1;n++)for(var o=0;o<r-1;o++){var a=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==a&&0!==a||e++}return e*k}function M(t){for(var r=t.size,e=0,n=0,o=0,a=0;a<r;a++){n=o=0;for(var i=0;i<r;i++)n=n<<1&2047|t.get(a,i),i>=10&&(1488===n||93===n)&&e++,o=o<<1&2047|t.get(i,a),i>=10&&(1488===o||93===o)&&e++}return e*x}function I(t){for(var r=0,e=t.data.length,n=0;n<e;n++)r+=t.data[n];return Math.abs(Math.ceil(100*r/e/5)-10)*T}function N(t,r,e){switch(t){case A.PATTERN000:return(r+e)%2==0;case A.PATTERN001:return r%2==0;case A.PATTERN010:return e%3==0;case A.PATTERN011:return(r+e)%3==0;case A.PATTERN100:return(Math.floor(r/2)+Math.floor(e/3))%2==0;case A.PATTERN101:return r*e%2+r*e%3==0;case A.PATTERN110:return(r*e%2+r*e%3)%2==0;case A.PATTERN111:return(r*e%3+(r+e)%2)%2==0;default:throw new Error("bad maskPattern:".concat(t))}}function C(t,r){for(var e=r.size,n=0;n<e;n++)for(var o=0;o<e;o++)r.isReserved(o,n)||r.xor(o,n,N(t,o,n))}var z=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],U=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];function _(t,r){switch(r){case v:return U[4*(t-1)];case g:return U[4*(t-1)+1];case p:return U[4*(t-1)+2];case w:return U[4*(t-1)+3];default:return}}var F=new Uint8Array(512),S=new Uint8Array(256);function O(t,r){return 0===t||0===r?0:F[S[t]+S[r]]}function j(t,r){for(var e=new Uint8Array(t.length+r.length-1),n=0;n<t.length;n++)for(var o=0;o<r.length;o++)e[n+o]^=O(t[n],r[o]);return e}!function(){for(var t=1,r=0;r<255;r++)F[r]=t,S[t]=r,256&(t<<=1)&&(t^=285);for(var e=255;e<512;e++)F[e]=F[e-255]}();var q=function(){return a((function t(r){n(this,t),this.genPoly=void 0,this.degree=r,this.degree&&this.initialize(this.degree)}),[{key:"initialize",value:function(t){this.degree=t,this.genPoly=function(t){for(var r,e=new Uint8Array([1]),n=0;n<t;n++)e=j(e,new Uint8Array([1,(r=n,F[r])]));return e}(this.degree)}},{key:"encode",value:function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var r=new Uint8Array(t.length+this.degree);r.set(t);var e=function(t,r){for(var e=new Uint8Array(t);e.length-r.length>=0;){for(var n=e[0],o=0;o<r.length;o++)e[o]^=O(r[o],n);for(var a=0;a<e.length&&0===e[a];)a++;e=e.slice(a)}return e}(r,this.genPoly),n=this.degree-e.length;if(n>0){var o=new Uint8Array(this.degree);return o.set(e,n),o}return e}}])}();function Q(t){return!isNaN(t)&&t>=1&&t<=40}var $="[0-9]+",D="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";D=D.replace(/u/g,"\\u");var J="(?:(?![A-Z0-9 $%*+\\-./:]|".concat(D,")(?:.|[\r\n]))+"),Z=new RegExp(D,"g"),H=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),K=new RegExp(J,"g"),Y=new RegExp($,"g"),G=new RegExp("[A-Z $%*+\\-./:]+","g"),V=new RegExp("^".concat(D,"$")),W=new RegExp("^".concat($,"$")),X=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");var tt={id:"Numeric",bit:1,ccBits:[10,12,14]},rt={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},et={id:"Byte",bit:4,ccBits:[8,16,16]},nt={id:"Kanji",bit:8,ccBits:[8,10,12]},ot={bit:-1};function at(t,r){if(!t.ccBits)throw new Error("Invalid mode: ".concat(t));if(!Q(r))throw new Error("Invalid version: ".concat(r));return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]}function it(t){return r=t,W.test(r)?tt:function(t){return X.test(t)}(t)?rt:function(t){return V.test(t)}(t)?nt:et;var r}function ut(t){if(null!=t&&t.id)return t.id;throw new Error("Invalid mode")}function ct(t,r){if((null==(e=t)?void 0:e.bit)&&e.ccBits)return t;var e;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return tt;case"alphanumeric":return rt;case"kanji":return nt;case"byte":return et;default:throw new Error("Unknown mode: ".concat(t))}}(t)}catch(t){return r}}var st=h(7973);function ft(t,r){return at(t,r)+4}function ht(t,r){var e,n=0,o=i(t);try{for(o.s();!(e=o.n()).done;){var a=e.value;n+=ft(a.mode,r)+a.getBitsLength()}}catch(t){o.e(t)}finally{o.f()}return n}function lt(t,r,e){if(!Q(t))throw new Error("Invalid QR Code version");void 0===e&&(e=et);var n=8*(f(t)-_(t,r));if(e===ot)return n;var o=n-ft(e,t);switch(e){case tt:return Math.floor(o/10*3);case rt:return Math.floor(o/11*2);case nt:return Math.floor(o/13);default:return Math.floor(o/8)}}function dt(t,r){var e,n=m(r,g);if(Array.isArray(t)){if(t.length>1)return function(t,r){for(var e=1;e<=40;e++)if(ht(t,e)<=lt(e,r,ot))return e}(t,n);if(0===t.length)return 1;e=t[0]}else e=t;return function(t,r,e){for(var n=1;n<=40;n++)if(r<=lt(n,e,t))return n}(e.mode,e.getLength(),n)}var vt=h(1335);function gt(t){this.mode=tt,this.data=t.toString()}gt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},gt.prototype.getLength=function(){return this.data.length},gt.prototype.getBitsLength=function(){return gt.getBitsLength(this.data.length)},gt.prototype.write=function(t){var r,e,n;for(r=0;r+3<=this.data.length;r+=3)e=this.data.substr(r,3),n=Number.parseInt(e,10),t.put(n,10);var o=this.data.length-r;o>0&&(e=this.data.substr(r),n=Number.parseInt(e,10),t.put(n,3*o+1))};var pt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"],wt=function(){function t(r){n(this,t),this.mode=rt,this.data=r}return a(t,[{key:"getLength",value:function(){return this.data.length}},{key:"getBitsLength",value:function(){return t.getBitsLength(this.data.length)}},{key:"write",value:function(t){var r;for(r=0;r+2<=this.data.length;r+=2){var e=45*pt.indexOf(this.data[r]);e+=pt.indexOf(this.data[r+1]),t.put(e,11)}this.data.length%2&&t.put(pt.indexOf(this.data[r]),6)}}],[{key:"getBitsLength",value:function(t){return 11*Math.floor(t/2)+t%2*6}}])}(),mt=function(){return a((function t(r){n(this,t),this.mode=et,this.data="string"==typeof r?(new TextEncoder).encode(r):new Uint8Array(r)}),[{key:"getLength",value:function(){return this.data.length}},{key:"write",value:function(t){for(var r=0,e=this.data.length;r<e;r++)t.put(this.data[r],8)}}],[{key:"getBitsLength",value:function(t){return 8*t}}])}();mt.prototype.getBitsLength=function(){return mt.getBitsLength(this.data.length)};var yt=function(){return a((function t(r){n(this,t),this.mode=nt,this.data=r}),[{key:"getLength",value:function(){return this.data.length}},{key:"write",value:function(t){var r;for(r=0;r<this.data.length;r++){var e=d(this.data[r]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: ".concat(this.data[r],"\nMake sure your charset is UTF-8"));e-=49472}e=192*(e>>>8&255)+(255&e),t.put(e,13)}}}],[{key:"getBitsLength",value:function(t){return 13*t}}])}();function bt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}yt.prototype.getBitsLength=function(){return yt.getBitsLength(this.data.length)};var Et,At={exports:{}};var Bt=(Et||(Et=1,function(t){var r={single_source_shortest_paths:function(t,e,n){var o={},a={};a[e]=0;var i,u,c,s,f,h,l,d=r.PriorityQueue.make();for(d.push(e,0);!d.empty();)for(c in u=(i=d.pop()).value,s=i.cost,f=t[u]||{})f.hasOwnProperty(c)&&(h=s+f[c],l=a[c],(void 0===a[c]||l>h)&&(a[c]=h,d.push(c,h),o[c]=u));if(void 0!==n&&void 0===a[n]){var v=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(v)}return o},extract_shortest_path_from_predecessor_list:function(t,r){for(var e=[],n=r;n;)e.push(n),t[n],n=t[n];return e.reverse(),e},find_path:function(t,e,n){var o=r.single_source_shortest_paths(t,e,n);return r.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,o={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,r){return t.cost-r.cost},push:function(t,r){var e={value:t,cost:r};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r}(At)),At.exports),kt=bt(Bt);function xt(t){return unescape(encodeURIComponent(t)).length}function Tt(t,r,e){for(var n,o=[];null!==(n=t.exec(e));)o.push({data:n[0],index:n.index,mode:r,length:n[0].length});return o}function Rt(t){var r,e,n=Tt(Y,tt,t),o=Tt(G,rt,t);return l()?(r=Tt(K,et,t),e=Tt(Z,nt,t)):(r=Tt(H,et,t),e=[]),n.concat(o,r,e).sort((function(t,r){return t.index-r.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function Pt(t,r){switch(r){case tt:return gt.getBitsLength(t);case rt:return wt.getBitsLength(t);case nt:return yt.getBitsLength(t);case et:return mt.getBitsLength(t)}}function Lt(t,r){var e,n=it(t);if((e=ct(r,n))!==et&&e.bit<n.bit)throw new Error('"'.concat(t,'" cannot be encoded with mode ').concat(ut(e),".\n Suggested mode is: ").concat(ut(n)));switch(e!==nt||l()||(e=et),e){case tt:return new gt(t);case rt:return new wt(t);case nt:return new yt(t);case et:return new mt(t)}}function Mt(t){return t.reduce((function(t,r){return"string"==typeof r?t.push(Lt(r,null)):r.data&&t.push(Lt(r.data,r.mode)),t}),[])}function It(t,r){for(var e=function(t){for(var r=[],e=0;e<t.length;e++){var n=t[e];switch(n.mode){case tt:r.push([n,{data:n.data,mode:rt,length:n.length},{data:n.data,mode:et,length:n.length}]);break;case rt:r.push([n,{data:n.data,mode:et,length:n.length}]);break;case nt:r.push([n,{data:n.data,mode:et,length:xt(n.data)}]);break;case et:r.push([{data:n.data,mode:et,length:xt(n.data)}])}}return r}(Rt(t)),n=function(t,r){for(var e={},n={start:{}},o=["start"],a=0;a<t.length;a++){for(var i=t[a],u=[],c=0;c<i.length;c++){var s=i[c],f="".concat(a).concat(c);u.push(f),e[f]={node:s,lastCount:0},n[f]={};for(var h=0;h<o.length;h++){var l=o[h];e[l]&&e[l].node.mode===s.mode?(n[l][f]=Pt(e[l].lastCount+s.length,s.mode)-Pt(e[l].lastCount,s.mode),e[l].lastCount+=s.length):(e[l]&&(e[l].lastCount=s.length),n[l][f]=Pt(s.length,s.mode)+4+at(s.mode,r))}}o=u}for(var d=0;d<o.length;d++)n[o[d]].end=0;return{map:n,table:e}}(e,r),o=kt(n.map,"start","end"),a=[],i=1;i<o.length-1;i++)a.push(n.table[o[i]].node);return Mt(function(t){return t.reduce((function(t,r){var e=t.length-1>=0?t[t.length-1]:null;return e&&e.mode===r.mode?(t[t.length-1].data+=r.data,t):(t.push(r),t)}),[])}(a))}function Nt(t,r){for(var e=t.size,n=function(t){var r=s(t);return[[0,0],[r-7,0],[0,r-7]]}(r),o=0;o<n.length;o++)for(var a=n[o][0],i=n[o][1],u=-1;u<=7;u++)if(!(a+u<=-1||e<=a+u))for(var c=-1;c<=7;c++)i+c<=-1||e<=i+c||(u>=0&&u<=6&&(0===c||6===c)||c>=0&&c<=6&&(0===u||6===u)||u>=2&&u<=4&&c>=2&&c<=4?t.set(a+u,i+c,!0,!0):t.set(a+u,i+c,!1,!0))}function Ct(t,r){for(var e,n,o,a=t.size,i=function(t){if(!Q(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;h(r)-st>=0;)r^=7973<<h(r)-st;return t<<12|r}(r),u=0;u<18;u++)e=Math.floor(u/3),n=u%3+a-8-3,o=1==(i>>u&1),t.set(e,n,o,!0),t.set(n,e,o,!0)}function zt(t,r,e){var n,o,a=t.size,i=function(t,r){for(var e=t.bit<<3|r,n=e<<10;h(n)-vt>=0;)n^=1335<<h(n)-vt;return 21522^(e<<10|n)}(r,e);for(n=0;n<15;n++)o=1==(i>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(a-15+n,8,o,!0),n<8?t.set(8,a-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(a-8,8,1,!0)}function Ut(t,r,e){var n,o=new y,a=i(e);try{for(a.s();!(n=a.n()).done;){var u=n.value;o.put(u.mode.bit,4),o.put(u.getLength(),at(u.mode,t)),u.write(o)}}catch(t){a.e(t)}finally{a.f()}var c=8*(f(t)-_(t,r));for(o.getLengthInBits()+4<=c&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);for(var s=(c-o.getLengthInBits())/8,h=0;h<s;h++)o.put(h%2?17:236,8);return function(t,r,e){for(var n=f(r),o=_(r,e),a=n-o,i=function(t,r){switch(r){case v:return z[4*(t-1)];case g:return z[4*(t-1)+1];case p:return z[4*(t-1)+2];case w:return z[4*(t-1)+3];default:return}}(r,e),u=i-n%i,c=Math.floor(n/i),s=Math.floor(a/i),h=s+1,l=c-s,d=new q(l),m=0,y=new Array(i),b=new Array(i),E=0,A=new Uint8Array(t.buffer),B=0;B<i;B++){var k=B<u?s:h;y[B]=A.slice(m,m+k),b[B]=d.encode(y[B]),m+=k,E=Math.max(E,k)}var x,T,R=new Uint8Array(n),P=0;for(x=0;x<E;x++)for(T=0;T<i;T++)x<y[T].length&&(R[P++]=y[T][x]);for(x=0;x<l;x++)for(T=0;T<i;T++)R[P++]=b[T][x];return R}(o,t,r)}function _t(t,r,e,n){var o;if(Array.isArray(t))o=Mt(t);else{if("string"!=typeof t)throw new Error("Invalid data");var a=r;if(!a){var i=function(t){return Mt(Rt(t))}(t);a=dt(i,e)}o=It(t,a||40)}var u=dt(o,e);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(r){if(r<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: ".concat(u,".\n"))}else r=u;var c=Ut(r,e,o),f=s(r),h=new b(f);return Nt(h,r),function(t){for(var r=t.size,e=8;e<r-8;e++){var n=e%2==0;t.set(e,6,n,!0),t.set(6,e,n,!0)}}(h),function(t,r){for(var e=E(r),n=0;n<e.length;n++)for(var o=e[n][0],a=e[n][1],i=-2;i<=2;i++)for(var u=-2;u<=2;u++)-2===i||2===i||-2===u||2===u||0===i&&0===u?t.set(o+i,a+u,!0,!0):t.set(o+i,a+u,!1,!0)}(h,r),zt(h,e,0),r>=7&&Ct(h,r),function(t,r){for(var e=t.size,n=-1,o=e-1,a=7,i=0,u=e-1;u>0;u-=2)for(6===u&&u--;;){for(var c=0;c<2;c++)if(!t.isReserved(o,u-c)){var s=!1;i<r.length&&(s=1==(r[i]>>>a&1)),t.set(o,u-c,s),-1==--a&&(i++,a=7)}if((o+=n)<0||e<=o){o-=n,n=-n;break}}}(h,c),isNaN(n)&&(n=function(t,r){for(var e=Object.keys(A).length,n=0,o=1/0,a=0;a<e;a++){r(a),C(a,t);var i=P(t)+L(t)+M(t)+I(t);C(a,t),i<o&&(o=i,n=a)}return n}(h,zt.bind(null,h,e))),C(n,h),zt(h,e,n),{modules:h,version:r,errorCorrectionLevel:e,maskPattern:n,segments:o}}function Ft(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var r=t.slice().replace("#","").split("");if(r.length<3||5===r.length||r.length>8)throw new Error("Invalid hex color: ".concat(t));3!==r.length&&4!==r.length||(r=Array.prototype.concat.apply([],r.map((function(t){return[t,t]})))),6===r.length&&r.push("F","F");var e=Number.parseInt(r.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#".concat(r.slice(0,6).join(""))}}function St(t){t||(t={}),t.color||(t.color={});var r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,e=t.width&&t.width>=21?t.width:void 0,n=t.scale||4;return{width:e,scale:e?4:n,margin:r,color:{dark:Ft(t.color.dark||"#000000ff"),light:Ft(t.color.light||"#ffffffff")},image:t.image,type:t.type,rendererOpts:t.rendererOpts||{}}}function Ot(t,r){return r.width&&r.width>=t+2*r.margin?r.width/(t+2*r.margin):r.scale}function jt(t,r,e){var n=e,o=r;void 0!==n||r&&r.getContext||(n=r,r=void 0),r||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),n=St(n),console.log(n);var a=function(t,r){var e=Ot(t,r);return Math.floor((t+2*r.margin)*e)}(t.modules.size,n),i=o.getContext("2d"),u=i.createImageData(a,a);if(function(t,r,e){for(var n=r.modules.size,o=r.modules.data,a=Ot(n,e),i=Math.floor((n+2*e.margin)*a),u=e.margin*a,c=[e.color.light,e.color.dark],s=0;s<i;s++)for(var f=0;f<i;f++){var h=4*(s*i+f),l=e.color.light;s>=u&&f>=u&&s<i-u&&f<i-u&&(l=c[o[Math.floor((s-u)/a)*n+Math.floor((f-u)/a)]?1:0]),t[h++]=l.r,t[h++]=l.g,t[h++]=l.b,t[h]=l.a}}(u.data,t,n),function(t,r,e){t.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=e,r.width=e,r.style.height="".concat(e,"px"),r.style.width="".concat(e,"px")}(i,o,a),i.putImageData(u,0,0),n.image){var c=new Image;c.onload=function(){var r=Ot(t.modules.size,n);console.log(a,t.modules.size,r),i.clearRect(a/2-6*r,a/2-6*r,12*r,12*r),i.drawImage(c,a/2-5*r,a/2-5*r,10*r,10*r),URL.revokeObjectURL(n.image)},c.onerror=function(){console.error("Error loading the image from the blob URL.")},c.src=n.image}return o}function qt(t,r){var e=t.a/255,n="".concat(r,'="').concat(t.hex,'"');return e<1?"".concat(n," ").concat(r,'-opacity="').concat(e.toFixed(2).slice(1),'"'):n}function Qt(t,r,e){var n=t+r;return void 0!==e&&(n+=" ".concat(e)),n}function $t(t,r,e){var n=St(r),o=t.modules.size,a=t.modules.data,i=o+2*n.margin,u=n.color.light.a?"<path ".concat(qt(n.color.light,"fill"),' d="M0 0h').concat(i,"v").concat(i,'H0z"/>'):"",c="<path ".concat(qt(n.color.dark,"stroke"),' d="').concat(function(t,r,e){for(var n="",o=0,a=!1,i=0,u=0;u<t.length;u++){var c=Math.floor(u%r),s=Math.floor(u/r);c||a||(a=!0),t[u]?(i++,u>0&&c>0&&t[u-1]||(n+=a?Qt("M",c+e,.5+s+e):Qt("m",o,0),o=0,a=!1),c+1<r&&t[u+1]||(n+=Qt("h",i),i=0)):o++}return n}(a,o,n.margin),'"/>'),s='viewBox="0 0 '.concat(i," ").concat(i,'"'),f=n.width?'width="'.concat(n.width,'" height="').concat(n.width,'" '):"";return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(f).concat(s,' shape-rendering="crispEdges">').concat(u).concat(c,"</svg>\n")}function Dt(t,r,e,n,o){var a=[].slice.call(arguments,1),i=a.length,u="function"==typeof a[i-1];if(!(u||"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then))throw new Error("Callback required as last argument");if(!u){if(i<1)throw new Error("Too few arguments provided");return 1===i?(e=r,r=n=void 0):2!==i||r.getContext||(n=e,e=r,r=void 0),new Promise((function(o,a){try{var i=Jt(e,n);o(t(i,r,n))}catch(t){a(t)}}))}if(i<2)throw new Error("Too few arguments provided");2===i?(o=e,e=r,r=n=void 0):3===i&&(r.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=e,e=r,r=void 0));try{var c=Jt(e,n);o(null,t(c,r,n))}catch(t){o(t)}}var Jt=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var n,o,a,i,u=g;return void 0!==e&&(u=m(e.errorCorrectionLevel,g),n=Q(a=e.version)?Number.parseInt(a,10):i,o=R(e.maskPattern),e.toSJISFunc&&function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t}(e.toSJISFunc)),_t(t,n,u,o)},Zt=Dt.bind(null,jt),Ht=Dt.bind(null,(function(t,r,e){var n=e;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});var o=jt(t,r,n),a=n.type||"image/png",i=n.rendererOpts||{};return o.toDataURL(a,i.quality)})),Kt=Dt.bind(null,(function(t,r,e){return $t(t,e)}));return t.create=Jt,t.toCanvas=Zt,t.toDataURL=Ht,t.toString=Kt,t}({});
