!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/bretagne/",t(0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function o(e){e.target.tagName&&"span"===e.target.tagName.toLowerCase()&&e.target.removeAttribute("style")}function a(){b&&(v.parentVisualizer.style.background="white",v.parentVisualizer.offsetHeight,v.parentVisualizer.style.background="transparent")}function s(e){if(y[e]){var t=y[e][2],n=t.join("', '");if(0===I.length)for(var r=document.getElementsByClassName("fontChunk"),i=0;i<r.length;i++)r[i].parentNode.removeChild(r[i]);if(I.indexOf(e)===-1){for(var o=0;o<t.length;o++){var s=document.createElement("link");s.href="fonts/"+t+".css",s.rel="stylesheet",s.classList.add("fontChunk"),document.getElementsByTagName("head")[0].appendChild(s)}I.push(e)}v.visualizer.style.fontFamily="'"+n+"', sans-serif",a()}}function c(){var e=v.picture.clientHeight+.0385*L+v.fonts.clientHeight-k,t=v.picture.clientHeight+.02*L-k<0,n=T-e-.02*L-20-v.resizer.clientHeight>0,r=T-v.resizer.clientHeight-v.fonts.clientHeight-.04*L>0;window.innerWidth>700&&t&&r?v.fonts.classList.contains("pinned")||v.fonts.classList.add("pinned"):v.fonts.classList.contains("pinned")&&v.fonts.classList.remove("pinned"),window.innerWidth>700&&n&&r?v.resizer.classList.contains("pinned")||v.resizer.classList.add("pinned"):v.resizer.classList.contains("pinned")&&v.resizer.classList.remove("pinned")}function u(){k=m?window.pageYOffset:document.documentElement.scrollTop,c()}function l(){L=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,T=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,c()}function f(e){v.currentSize.textContent=("0"+e).slice(-2)+"pt",v.visualizer.style.fontSize=e+"px",a()}function h(e,t){var n=!e.params.font,r=e.params.font||x,o=y[r];if(o){document.title=n?"Bretagne":"Bretagne — "+i(o[0])+" "+i(o[1]);for(var a=0;a<v.fontItems.length;a++){var c=v.fontItems[a].href.split("/"),u=c[c.length-1];if(r===u){if(v.fontItems[a].classList.contains("link--current"))return;v.fontItems[a].classList.add("link--current")}else v.fontItems[a].classList.remove("link--current")}s(r)}}var d=n(4),p=r(d),m=void 0!==window.pageYOffset,v={picture:document.getElementById("picture"),fonts:document.getElementById("fonts"),fontItems:document.getElementsByClassName("font"),visualizer:document.getElementById("visualizer-font"),resizer:document.getElementById("resizer"),decrease:document.getElementById("resizer-decrease"),increase:document.getElementById("resizer-increase"),currentSize:document.getElementById("resizer-currentsize")};v.parentVisualizer=v.visualizer.parentNode;var g=window.bretagne,w=g.publicPath,y=g.fonts,x=g.defaultSlug,E=[6,8,9,10,11,12,14,18,24,30,36,48,60,72,84,92],b=navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1,z=11,T=void 0,L=void 0,k=0,I=[];v.decrease.addEventListener("click",function(e){z>0&&z--,f(E[z])}),v.increase.addEventListener("click",function(e){z<E.length-1&&z++,f(E[z])}),window.addEventListener("scroll",u),window.addEventListener("resize",l),b&&v.visualizer.addEventListener("keydown",a),v.visualizer.addEventListener("DOMNodeInserted",o),document.addEventListener("DOMContentLoaded",function(){v.visualizer.spellcheck=!1,v.visualizer.focus(),v.visualizer.blur(),v.resizer.classList.remove("hidden"),l(),u()}),p.default.base(w),(0,p.default)("/",h),(0,p.default)("font/:font",h),(0,p.default)()},function(e,t){},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){(function(t){"use strict";function r(e,t){if("function"==typeof e)return r("*",e);if("function"==typeof t)for(var n=new s(e),i=1;i<arguments.length;++i)r.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?r["string"==typeof t?"redirect":"show"](e,t):r.start(e)}function i(e){if(!e.handled){var t;t=y?w+m.hash.replace("#!",""):m.pathname+m.search,t!==e.canonicalPath&&(r.stop(),e.handled=!1,m.href=e.canonicalPath)}}function o(e){return"string"!=typeof e?e:g?decodeURIComponent(e.replace(/\+/g," ")):e}function a(e,t){"/"===e[0]&&0!==e.indexOf(w)&&(e=w+(y?"#!":"")+e);var n=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(w,"")||"/",y&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=t||{},this.state.path=e,this.querystring=~n?o(e.slice(n+1)):"",this.pathname=o(~n?e.slice(0,n):e),this.params={},this.hash="",!y){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=r[0],this.hash=o(r[1])||"",this.querystring=this.querystring.split("#")[0]}}function s(e,t){t=t||{},this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=f(this.path,this.keys=[],t)}function c(e){if(1===u(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var n=e.path?e.path[0]:e.target;n&&"A"!==n.nodeName;)n=n.parentNode;if(n&&"A"===n.nodeName&&!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")){var i=n.getAttribute("href");if((y||n.pathname!==m.pathname||!n.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!n.target&&l(n.href)){var o=n.pathname+n.search+(n.hash||"");"undefined"!=typeof t&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o;0===o.indexOf(w)&&(o=o.substr(w.length)),y&&(o=o.replace("#!","")),w&&a===o||(e.preventDefault(),r.show(a))}}}}function u(e){return e=e||window.event,null===e.which?e.button:e.which}function l(e){var t=m.protocol+"//"+m.hostname;return m.port&&(t+=":"+m.port),e&&0===e.indexOf(t)}var f=n(5);e.exports=r;var h,d,p="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",m="undefined"!=typeof window&&(window.history.location||window.location),v=!0,g=!0,w="",y=!1;r.callbacks=[],r.exits=[],r.current="",r.len=0,r.base=function(e){return 0===arguments.length?w:void(w=e)},r.start=function(e){if(e=e||{},!h&&(h=!0,!1===e.dispatch&&(v=!1),!1===e.decodeURLComponents&&(g=!1),!1!==e.popstate&&window.addEventListener("popstate",x,!1),!1!==e.click&&document.addEventListener(p,c,!1),!0===e.hashbang&&(y=!0),v)){var t=y&&~m.hash.indexOf("#!")?m.hash.substr(2)+m.search:m.pathname+m.search+m.hash;r.replace(t,null,!0,v)}},r.stop=function(){h&&(r.current="",r.len=0,h=!1,document.removeEventListener(p,c,!1),window.removeEventListener("popstate",x,!1))},r.show=function(e,t,n,i){var o=new a(e,t);return r.current=o.path,!1!==n&&r.dispatch(o),!1!==o.handled&&!1!==i&&o.pushState(),o},r.back=function(e,t){r.len>0?(history.back(),r.len--):e?setTimeout(function(){r.show(e,t)}):setTimeout(function(){r.show(w,t)})},r.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&r(e,function(e){setTimeout(function(){r.replace(t)},0)}),"string"==typeof e&&"undefined"==typeof t&&setTimeout(function(){r.replace(e)},0)},r.replace=function(e,t,n,i){var o=new a(e,t);return r.current=o.path,o.init=n,o.save(),!1!==i&&r.dispatch(o),o},r.dispatch=function(e){function t(){var e=r.exits[s++];return e?void e(o,t):n()}function n(){var t=r.callbacks[a++];return e.path!==r.current?void(e.handled=!1):t?void t(e,n):i(e)}var o=d,a=0,s=0;d=e,o?t():n()},r.exit=function(e,t){if("function"==typeof e)return r.exit("*",e);for(var n=new s(e),i=1;i<arguments.length;++i)r.exits.push(n.middleware(arguments[i]))},r.Context=a,a.prototype.pushState=function(){r.len++,history.pushState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},a.prototype.save=function(){history.replaceState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},r.Route=s,s.prototype.middleware=function(e){var t=this;return function(n,r){return t.match(n.path,n.params)?e(n,r):void r()}},s.prototype.match=function(e,t){var n=this.keys,r=e.indexOf("?"),i=~r?e.slice(0,r):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;for(var s=1,c=a.length;s<c;++s){var u=n[s-1],l=o(a[s]);void 0===l&&hasOwnProperty.call(t,u.name)||(t[u.name]=l)}return!0};var x=function(){var e=!1;if("undefined"!=typeof window)return"complete"===document.readyState?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e)if(t.state){var n=t.state.path;r.replace(n,t.state)}else r.show(m.pathname+m.hash,void 0,void 0,!1)}}();r.sameOrigin=l}).call(t,n(6))},function(e,t,n){function r(e){for(var t,n=[],r=0,i=0,o="";null!=(t=v.exec(e));){var a=t[0],c=t[1],u=t.index;if(o+=e.slice(i,u),i=u+a.length,c)o+=c[1];else{o&&(n.push(o),o="");var l=t[2],f=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g="+"===p||"*"===p,w="?"===p||"*"===p,y=l||"/",x=h||d||(m?".*":"[^"+y+"]+?");n.push({name:f||r++,prefix:l||"",delimiter:y,optional:w,repeat:g,pattern:s(x)})}}return i<e.length&&(o+=e.substr(i)),o&&n.push(o),n}function i(e){return o(r(e))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(n){for(var r="",i=n||{},o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var s,c=i[a.name];if(null==c){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(m(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(s=encodeURIComponent(c[u]),!t[o].test(s))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=(0===u?a.prefix:a.delimiter)+s}}else{if(s=encodeURIComponent(c),!t[o].test(s))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=a.prefix+s}}else r+=a}return r}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return c(e,t)}function f(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(p(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",u(n));return c(o,t)}function h(e,t,n){for(var i=r(e),o=d(i,n),a=0;a<i.length;a++)"string"!=typeof i[a]&&t.push(i[a]);return c(o,t)}function d(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,i="",o=e[e.length-1],s="string"==typeof o&&/\/$/.test(o),c=0;c<e.length;c++){var l=e[c];if("string"==typeof l)i+=a(l);else{var f=a(l.prefix),h=l.pattern;l.repeat&&(h+="(?:"+f+h+")*"),h=l.optional?f?"(?:"+f+"("+h+"))?":"("+h+")?":f+"("+h+")",i+=h}}return n||(i=(s?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=r?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+i,u(t))}function p(e,t,n){return t=t||[],m(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?l(e,t,n):m(e)?f(e,t,n):h(e,t,n)}var m=n(3);e.exports=p,e.exports.parse=r,e.exports.compile=i,e.exports.tokensToFunction=o,e.exports.tokensToRegExp=d;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?p=d.concat(p):v=-1,p.length&&s())}function s(){if(!m){var e=i(a);m=!0;for(var t=p.length;t;){for(d=p,p=[];++v<t;)d&&d[v].run();v=-1,t=p.length}d=null,m=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,f,h=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,p=[],m=!1,v=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new c(e,t)),1!==p.length||m||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}}]);