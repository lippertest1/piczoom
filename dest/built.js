/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.2.0
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.2.0
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
/**
 * Compiled inline version. (Library mode)
 */

/*jshint smarttabs:true, undef:true, latedef:true, curly:true, bitwise:true, camelcase:true */
/*globals $code */

(function(exports, undefined) {
	"use strict";

	var modules = {};

	function require(ids, callback) {
		var module, defs = [];

		for (var i = 0; i < ids.length; ++i) {
			module = modules[ids[i]] || resolve(ids[i]);
			if (!module) {
				throw 'module definition dependecy not found: ' + ids[i];
			}

			defs.push(module);
		}

		callback.apply(null, defs);
	}

	function define(id, dependencies, definition) {
		if (typeof id !== 'string') {
			throw 'invalid module definition, module id must be defined and be a string';
		}

		if (dependencies === undefined) {
			throw 'invalid module definition, dependencies must be specified';
		}

		if (definition === undefined) {
			throw 'invalid module definition, definition function must be specified';
		}

		require(dependencies, function() {
			modules[id] = definition.apply(null, arguments);
		});
	}

	function defined(id) {
		return !!modules[id];
	}

	function resolve(id) {
		var target = exports;
		var fragments = id.split(/[.\/]/);

		for (var fi = 0; fi < fragments.length; ++fi) {
			if (!target[fragments[fi]]) {
				return;
			}

			target = target[fragments[fi]];
		}

		return target;
	}

	function expose(ids) {
		for (var i = 0; i < ids.length; i++) {
			var target = exports;
			var id = ids[i];
			var fragments = id.split(/[.\/]/);

			for (var fi = 0; fi < fragments.length - 1; ++fi) {
				if (target[fragments[fi]] === undefined) {
					target[fragments[fi]] = {};
				}

				target = target[fragments[fi]];
			}

			target[fragments[fragments.length - 1]] = modules[id];
		}
	}

// Included from: src/javascript/core/utils/Basic.js

/**
 * Basic.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Basic', [], function() {
	/**
	Gets the true type of the built-in object (better version of typeof).
	@author Angus Croll (http://javascriptweblog.wordpress.com/)

	@method typeOf
	@for Utils
	@static
	@param {Object} o Object to check.
	@return {String} Object [[Class]]
	*/
	var typeOf = function(o) {
		var undef;

		if (o === undef) {
			return 'undefined';
		} else if (o === null) {
			return 'null';
		} else if (o.nodeType) {
			return 'node';
		}

		// the snippet below is awesome, however it fails to detect null, undefined and arguments types in IE lte 8
		return ({}).toString.call(o).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	};
		
	/**
	Extends the specified object with another object.

	@method extend
	@static
	@param {Object} target Object to extend.
	@param {Object} [obj]* Multiple objects to extend with.
	@return {Object} Same as target, the extended object.
	*/
	var extend = function(target) {
		var undef;

		each(arguments, function(arg, i) {
			if (i > 0) {
				each(arg, function(value, key) {
					if (value !== undef) {
						if (typeOf(target[key]) === typeOf(value) && !!~inArray(typeOf(value), ['array', 'object'])) {
							extend(target[key], value);
						} else {
							target[key] = value;
						}
					}
				});
			}
		});
		return target;
	};
		
	/**
	Executes the callback function for each item in array/object. If you return false in the
	callback it will break the loop.

	@method each
	@static
	@param {Object} obj Object to iterate.
	@param {function} callback Callback function to execute for each item.
	*/
	var each = function(obj, callback) {
		var length, key, i, undef;

		if (obj) {
			try {
				length = obj.length;
			} catch(ex) {
				length = undef;
			}

			if (length === undef) {
				// Loop object items
				for (key in obj) {
					if (obj.hasOwnProperty(key)) {
						if (callback(obj[key], key) === false) {
							return;
						}
					}
				}
			} else {
				// Loop array items
				for (i = 0; i < length; i++) {
					if (callback(obj[i], i) === false) {
						return;
					}
				}
			}
		}
	};

	/**
	Checks if object is empty.
	
	@method isEmptyObj
	@static
	@param {Object} o Object to check.
	@return {Boolean}
	*/
	var isEmptyObj = function(obj) {
		var prop;

		if (!obj || typeOf(obj) !== 'object') {
			return true;
		}

		for (prop in obj) {
			return false;
		}

		return true;
	};

	/**
	Recieve an array of functions (usually async) to call in sequence, each  function
	receives a callback as first argument that it should call, when it completes. Finally,
	after everything is complete, main callback is called. Passing truthy value to the
	callback as a first argument will interrupt the sequence and invoke main callback
	immediately.

	@method inSeries
	@static
	@param {Array} queue Array of functions to call in sequence
	@param {Function} cb Main callback that is called in the end, or in case of erro
	*/
	var inSeries = function(queue, cb) {
		var i = 0, length = queue.length;

		if (typeOf(cb) !== 'function') {
			cb = function() {};
		}

		if (!queue || !queue.length) {
			cb();
		}

		function callNext(i) {
			if (typeOf(queue[i]) === 'function') {
				queue[i](function(error) {
					/*jshint expr:true */
					++i < length && !error ? callNext(i) : cb(error);
				});
			}
		}
		callNext(i);
	};


	/**
	Recieve an array of functions (usually async) to call in parallel, each  function
	receives a callback as first argument that it should call, when it completes. After 
	everything is complete, main callback is called. Passing truthy value to the
	callback as a first argument will interrupt the process and invoke main callback
	immediately.

	@method inParallel
	@static
	@param {Array} queue Array of functions to call in sequence
	@param {Function} cb Main callback that is called in the end, or in case of erro
	*/
	var inParallel = function(queue, cb) {
		var count = 0, num = queue.length, cbArgs = new Array(num);

		each(queue, function(fn, i) {
			fn(function(error) {
				if (error) {
					return cb(error);
				}
				
				var args = [].slice.call(arguments);
				args.shift(); // strip error - undefined or not

				cbArgs[i] = args;
				count++;

				if (count === num) {
					cbArgs.unshift(null);
					cb.apply(this, cbArgs);
				} 
			});
		});
	};
	
	
	/**
	Find an element in array and return it's index if present, otherwise return -1.
	
	@method inArray
	@static
	@param {Mixed} needle Element to find
	@param {Array} array
	@return {Int} Index of the element, or -1 if not found
	*/
	var inArray = function(needle, array) {
		if (array) {
			if (Array.prototype.indexOf) {
				return Array.prototype.indexOf.call(array, needle);
			}
		
			for (var i = 0, length = array.length; i < length; i++) {
				if (array[i] === needle) {
					return i;
				}
			}
		}
		return -1;
	};


	/**
	Returns elements of first array if they are not present in second. And false - otherwise.

	@private
	@method arrayDiff
	@param {Array} needles
	@param {Array} array
	@return {Array|Boolean}
	*/
	var arrayDiff = function(needles, array) {
		var diff = [];

		if (typeOf(needles) !== 'array') {
			needles = [needles];
		}

		if (typeOf(array) !== 'array') {
			array = [array];
		}

		for (var i in needles) {
			if (inArray(needles[i], array) === -1) {
				diff.push(needles[i]);
			}	
		}
		return diff.length ? diff : false;
	};


	/**
	Find intersection of two arrays.

	@private
	@method arrayIntersect
	@param {Array} array1
	@param {Array} array2
	@return {Array} Intersection of two arrays or null if there is none
	*/
	var arrayIntersect = function(array1, array2) {
		var result = [];
		each(array1, function(item) {
			if (inArray(item, array2) !== -1) {
				result.push(item);
			}
		});
		return result.length ? result : null;
	};
	
	
	/**
	Forces anything into an array.
	
	@method toArray
	@static
	@param {Object} obj Object with length field.
	@return {Array} Array object containing all items.
	*/
	var toArray = function(obj) {
		var i, arr = [];

		for (i = 0; i < obj.length; i++) {
			arr[i] = obj[i];
		}

		return arr;
	};
	
			
	/**
	Generates an unique ID. This is 99.99% unique since it takes the current time and 5 random numbers.
	The only way a user would be able to get the same ID is if the two persons at the same exact milisecond manages
	to get 5 the same random numbers between 0-65535 it also uses a counter so each call will be guaranteed to be page unique.
	It's more probable for the earth to be hit with an ansteriod. Y
	
	@method guid
	@static
	@param {String} prefix to prepend (by default 'o' will be prepended).
	@method guid
	@return {String} Virtually unique id.
	*/
	var guid = (function() {
		var counter = 0;
		
		return function(prefix) {
			var guid = new Date().getTime().toString(32), i;

			for (i = 0; i < 5; i++) {
				guid += Math.floor(Math.random() * 65535).toString(32);
			}
			
			return (prefix || 'o_') + guid + (counter++).toString(32);
		};
	}());
	

	/**
	Trims white spaces around the string
	
	@method trim
	@static
	@param {String} str
	@return {String}
	*/
	var trim = function(str) {
		if (!str) {
			return str;
		}
		return String.prototype.trim ? String.prototype.trim.call(str) : str.toString().replace(/^\s*/, '').replace(/\s*$/, '');
	};


	/**
	Parses the specified size string into a byte value. For example 10kb becomes 10240.
	
	@method parseSizeStr
	@static
	@param {String/Number} size String to parse or number to just pass through.
	@return {Number} Size in bytes.
	*/
	var parseSizeStr = function(size) {
		if (typeof(size) !== 'string') {
			return size;
		}
		
		var muls = {
				t: 1099511627776,
				g: 1073741824,
				m: 1048576,
				k: 1024
			},
			mul;

		size = /^([0-9]+)([mgk]?)$/.exec(size.toLowerCase().replace(/[^0-9mkg]/g, ''));
		mul = size[2];
		size = +size[1];
		
		if (muls.hasOwnProperty(mul)) {
			size *= muls[mul];
		}
		return size;
	};
	

	return {
		guid: guid,
		typeOf: typeOf,
		extend: extend,
		each: each,
		isEmptyObj: isEmptyObj,
		inSeries: inSeries,
		inParallel: inParallel,
		inArray: inArray,
		arrayDiff: arrayDiff,
		arrayIntersect: arrayIntersect,
		toArray: toArray,
		trim: trim,
		parseSizeStr: parseSizeStr
	};
});

// Included from: src/javascript/core/I18n.js

/**
 * I18n.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/core/I18n", [
	"moxie/core/utils/Basic"
], function(Basic) {
	var i18n = {};

	return {
		/**
		 * Extends the language pack object with new items.
		 *
		 * @param {Object} pack Language pack items to add.
		 * @return {Object} Extended language pack object.
		 */
		addI18n: function(pack) {
			return Basic.extend(i18n, pack);
		},

		/**
		 * Translates the specified string by checking for the english string in the language pack lookup.
		 *
		 * @param {String} str String to look for.
		 * @return {String} Translated string or the input string if it wasn't found.
		 */
		translate: function(str) {
			return i18n[str] || str;
		},

		/**
		 * Shortcut for translate function
		 *
		 * @param {String} str String to look for.
		 * @return {String} Translated string or the input string if it wasn't found.
		 */
		_: function(str) {
			return this.translate(str);
		},

		/**
		 * Pseudo sprintf implementation - simple way to replace tokens with specified values.
		 *
		 * @param {String} str String with tokens
		 * @return {String} String with replaced tokens
		 */
		sprintf: function(str) {
			var args = [].slice.call(arguments, 1);

			return str.replace(/%[a-z]/g, function() {
				var value = args.shift();
				return Basic.typeOf(value) !== 'undefined' ? value : '';
			});
		}
	};
});

// Included from: src/javascript/core/utils/Mime.js

/**
 * Mime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/core/utils/Mime", [
	"moxie/core/utils/Basic",
	"moxie/core/I18n"
], function(Basic, I18n) {
	
	var mimeData = "" +
		"application/msword,doc dot," +
		"application/pdf,pdf," +
		"application/pgp-signature,pgp," +
		"application/postscript,ps ai eps," +
		"application/rtf,rtf," +
		"application/vnd.ms-excel,xls xlb," +
		"application/vnd.ms-powerpoint,ppt pps pot," +
		"application/zip,zip," +
		"application/x-shockwave-flash,swf swfl," +
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx," +
		"application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx," +
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx," +
		"application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx," +
		"application/vnd.openxmlformats-officedocument.presentationml.template,potx," +
		"application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx," +
		"application/x-javascript,js," +
		"application/json,json," +
		"audio/mpeg,mp3 mpga mpega mp2," +
		"audio/x-wav,wav," +
		"audio/x-m4a,m4a," +
		"audio/ogg,oga ogg," +
		"audio/aiff,aiff aif," +
		"audio/flac,flac," +
		"audio/aac,aac," +
		"audio/ac3,ac3," +
		"audio/x-ms-wma,wma," +
		"image/bmp,bmp," +
		"image/gif,gif," +
		"image/jpeg,jpg jpeg jpe," +
		"image/photoshop,psd," +
		"image/png,png," +
		"image/svg+xml,svg svgz," +
		"image/tiff,tiff tif," +
		"text/plain,asc txt text diff log," +
		"text/html,htm html xhtml," +
		"text/css,css," +
		"text/csv,csv," +
		"text/rtf,rtf," +
		"video/mpeg,mpeg mpg mpe m2v," +
		"video/quicktime,qt mov," +
		"video/mp4,mp4," +
		"video/x-m4v,m4v," +
		"video/x-flv,flv," +
		"video/x-ms-wmv,wmv," +
		"video/avi,avi," +
		"video/webm,webm," +
		"video/3gpp,3gpp 3gp," +
		"video/3gpp2,3g2," +
		"video/vnd.rn-realvideo,rv," +
		"video/ogg,ogv," + 
		"video/x-matroska,mkv," +
		"application/vnd.oasis.opendocument.formula-template,otf," +
		"application/octet-stream,exe";
	
	
	var Mime = {

		mimes: {},

		extensions: {},

		// Parses the default mime types string into a mimes and extensions lookup maps
		addMimeType: function (mimeData) {
			var items = mimeData.split(/,/), i, ii, ext;
			
			for (i = 0; i < items.length; i += 2) {
				ext = items[i + 1].split(/ /);

				// extension to mime lookup
				for (ii = 0; ii < ext.length; ii++) {
					this.mimes[ext[ii]] = items[i];
				}
				// mime to extension lookup
				this.extensions[items[i]] = ext;
			}
		},


		extList2mimes: function (filters, addMissingExtensions) {
			var self = this, ext, i, ii, type, mimes = [];
			
			// convert extensions to mime types list
			for (i = 0; i < filters.length; i++) {
				ext = filters[i].extensions.split(/\s*,\s*/);

				for (ii = 0; ii < ext.length; ii++) {
					
					// if there's an asterisk in the list, then accept attribute is not required
					if (ext[ii] === '*') {
						return [];
					}
					
					type = self.mimes[ext[ii]];
					if (!type) {
						if (addMissingExtensions && /^\w+$/.test(ext[ii])) {
							mimes.push('.' + ext[ii]);
						} else {
							return []; // accept all
						}
					} else if (Basic.inArray(type, mimes) === -1) {
						mimes.push(type);
					}
				}
			}
			return mimes;
		},


		mimes2exts: function(mimes) {
			var self = this, exts = [];
			
			Basic.each(mimes, function(mime) {
				if (mime === '*') {
					exts = [];
					return false;
				}

				// check if this thing looks like mime type
				var m = mime.match(/^(\w+)\/(\*|\w+)$/);
				if (m) {
					if (m[2] === '*') { 
						// wildcard mime type detected
						Basic.each(self.extensions, function(arr, mime) {
							if ((new RegExp('^' + m[1] + '/')).test(mime)) {
								[].push.apply(exts, self.extensions[mime]);
							}
						});
					} else if (self.extensions[mime]) {
						[].push.apply(exts, self.extensions[mime]);
					}
				}
			});
			return exts;
		},


		mimes2extList: function(mimes) {
			var accept = [], exts = [];

			if (Basic.typeOf(mimes) === 'string') {
				mimes = Basic.trim(mimes).split(/\s*,\s*/);
			}

			exts = this.mimes2exts(mimes);
			
			accept.push({
				title: I18n.translate('Files'),
				extensions: exts.length ? exts.join(',') : '*'
			});
			
			// save original mimes string
			accept.mimes = mimes;

			return accept;
		},


		getFileExtension: function(fileName) {
			var matches = fileName && fileName.match(/\.([^.]+)$/);
			if (matches) {
				return matches[1].toLowerCase();
			}
			return '';
		},

		getFileMime: function(fileName) {
			return this.mimes[this.getFileExtension(fileName)] || '';
		}
	};

	Mime.addMimeType(mimeData);

	return Mime;
});

// Included from: src/javascript/core/utils/Env.js

/**
 * Env.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/core/utils/Env", [
	"moxie/core/utils/Basic"
], function(Basic) {
	
	// UAParser.js v0.6.2
	// Lightweight JavaScript-based User-Agent string parser
	// https://github.com/faisalman/ua-parser-js
	//
	// Copyright © 2012-2013 Faisalman <fyzlman@gmail.com>
	// Dual licensed under GPLv2 & MIT

	var UAParser = (function (undefined) {

	    //////////////
	    // Constants
	    /////////////


	    var EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        MAJOR       = 'major',
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet';


	    ///////////
	    // Helper
	    //////////


	    var util = {
	        has : function (str1, str2) {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        }
	    };


	    ///////////////
	    // Map helper
	    //////////////


	    var mapper = {

	        rgx : function () {

	            // loop through all regexes maps
	            for (var result, i = 0, j, k, p, q, matches, match, args = arguments; i < args.length; i += 2) {

	                var regex = args[i],       // even sequence (0,2,4,..)
	                    props = args[i + 1];   // odd sequence (1,3,5,..)

	                // construct object barebones
	                if (typeof(result) === UNDEF_TYPE) {
	                    result = {};
	                    for (p in props) {
	                        q = props[p];
	                        if (typeof(q) === OBJ_TYPE) {
	                            result[q[0]] = undefined;
	                        } else {
	                            result[q] = undefined;
	                        }
	                    }
	                }

	                // try matching uastring with regexes
	                for (j = k = 0; j < regex.length; j++) {
	                    matches = regex[j].exec(this.getUA());
	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof(q) === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof(q[1]) == FUNC_TYPE) {
	                                        // assign modified match
	                                        result[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        result[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                result[q] = match ? match : undefined;
	                            }
	                        }
	                        break;
	                    }
	                }

	                if(!!matches) break; // break the loop immediately if match found
	            }
	            return result;
	        },

	        str : function (str, map) {

	            for (var i in map) {
	                // check if array
	                if (typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };


	    ///////////////
	    // String map
	    //////////////


	    var maps = {

	        browser : {
	            oldsafari : {
	                major : {
	                    '1' : ['/8', '/1', '/3'],
	                    '2' : '/4',
	                    '?' : '/'
	                },
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },

	        device : {
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },

	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };


	    //////////////
	    // Regex map
	    /////////////


	    var regexes = {

	        browser : [[

	            // Presto based
	            /(opera\smini)\/((\d+)?[\w\.-]+)/i,                                 // Opera Mini
	            /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,                // Opera Mobi/Tablet
	            /(opera).+version\/((\d+)?[\w\.]+)/i,                               // Opera > 9.80
	            /(opera)[\/\s]+((\d+)?[\w\.]+)/i                                    // Opera < 9.80
	            
	            ], [NAME, VERSION, MAJOR], [

	            /\s(opr)\/((\d+)?[\w\.]+)/i                                         // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION, MAJOR], [

	            // Mixed
	            /(kindle)\/((\d+)?[\w\.]+)/i,                                       // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,                                  // Internet Explorer

	            // Webkit/KHTML based
	            /(rekonq)((?:\/)[\w\.]+)*/i,                                        // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron
	            ], [NAME, VERSION, MAJOR], [

	            /(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i                   // IE11
	            ], [[NAME, 'IE'], VERSION, MAJOR], [

	            /(yabrowser)\/((\d+)?[\w\.]+)/i                                     // Yandex
	            ], [[NAME, 'Yandex'], VERSION, MAJOR], [

	            /(comodo_dragon)\/((\d+)?[\w\.]+)/i                                 // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION, MAJOR], [

	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION, MAJOR], [

	            /(dolfin)\/((\d+)?[\w\.]+)/i                                        // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION, MAJOR], [

	            /((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i                       // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION, MAJOR], [

	            /((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i          // Android Browser
	            ], [[NAME, 'Android Browser'], VERSION, MAJOR], [

	            /version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i                 // Mobile Safari
	            ], [VERSION, MAJOR, [NAME, 'Mobile Safari']], [

	            /version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i              // Safari & Safari Mobile
	            ], [VERSION, MAJOR, NAME], [

	            /webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i                   // Safari < 3.0
	            ], [NAME, [MAJOR, mapper.str, maps.browser.oldsafari.major], [VERSION, mapper.str, maps.browser.oldsafari.version]], [

	            /(konqueror)\/((\d+)?[\w\.]+)/i,                                    // Konqueror
	            /(webkit|khtml)\/((\d+)?[\w\.]+)/i
	            ], [NAME, VERSION, MAJOR], [

	            // Gecko based
	            /(navigator|netscape)\/((\d+)?[\w\.-]+)/i                           // Netscape
	            ], [[NAME, 'Netscape'], VERSION, MAJOR], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,                    // Mozilla

	            // Other
	            /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i,
	                                                                                // UCBrowser/Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/QQBrowser
	            /(links)\s\(((\d+)?[\w\.]+)/i,                                      // Links
	            /(gobrowser)\/?((\d+)?[\w\.]+)*/i,                                  // GoBrowser
	            /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,                             // ICE Browser
	            /(mosaic)[\/\s]((\d+)?[\w\.]+)/i                                    // Mosaic
	            ], [NAME, VERSION, MAJOR]
	        ],

	        engine : [[

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows based
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)\/([\w\.]+)/i,                                              // Tizen
	            /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION],[
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [

	            // Console
	            /(nintendo|playstation)\s([wids3portablevu]+)/i,                    // Nintendo/Playstation

	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [

	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [

	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[

	            /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i             // iOS
	            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i                                    // Mac OS
	            ], [NAME, [VERSION, /_/g, '.']], [

	            // Other
	            /(haiku)\s(\w+)/i,                                                  // Haiku
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };


	    /////////////////
	    // Constructor
	    ////////////////


	    var UAParser = function (uastring) {

	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);

	        this.getBrowser = function () {
	            return mapper.rgx.apply(this, regexes.browser);
	        };
	        this.getEngine = function () {
	            return mapper.rgx.apply(this, regexes.engine);
	        };
	        this.getOS = function () {
	            return mapper.rgx.apply(this, regexes.os);
	        };
	        this.getResult = function() {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            return this;
	        };
	        this.setUA(ua);
	    };

	    return new UAParser().getResult();
	})();


	function version_compare(v1, v2, operator) {
	  // From: http://phpjs.org/functions
	  // +      original by: Philippe Jausions (http://pear.php.net/user/jausions)
	  // +      original by: Aidan Lister (http://aidanlister.com/)
	  // + reimplemented by: Kankrelune (http://www.webfaktory.info/)
	  // +      improved by: Brett Zamir (http://brett-zamir.me)
	  // +      improved by: Scott Baker
	  // +      improved by: Theriault
	  // *        example 1: version_compare('8.2.5rc', '8.2.5a');
	  // *        returns 1: 1
	  // *        example 2: version_compare('8.2.50', '8.2.52', '<');
	  // *        returns 2: true
	  // *        example 3: version_compare('5.3.0-dev', '5.3.0');
	  // *        returns 3: -1
	  // *        example 4: version_compare('4.1.0.52','4.01.0.51');
	  // *        returns 4: 1

	  // Important: compare must be initialized at 0.
	  var i = 0,
	    x = 0,
	    compare = 0,
	    // vm maps textual PHP versions to negatives so they're less than 0.
	    // PHP currently defines these as CASE-SENSITIVE. It is important to
	    // leave these as negatives so that they can come before numerical versions
	    // and as if no letters were there to begin with.
	    // (1alpha is < 1 and < 1.1 but > 1dev1)
	    // If a non-numerical value can't be mapped to this table, it receives
	    // -7 as its value.
	    vm = {
	      'dev': -6,
	      'alpha': -5,
	      'a': -5,
	      'beta': -4,
	      'b': -4,
	      'RC': -3,
	      'rc': -3,
	      '#': -2,
	      'p': 1,
	      'pl': 1
	    },
	    // This function will be called to prepare each version argument.
	    // It replaces every _, -, and + with a dot.
	    // It surrounds any nonsequence of numbers/dots with dots.
	    // It replaces sequences of dots with a single dot.
	    //    version_compare('4..0', '4.0') == 0
	    // Important: A string of 0 length needs to be converted into a value
	    // even less than an unexisting value in vm (-7), hence [-8].
	    // It's also important to not strip spaces because of this.
	    //   version_compare('', ' ') == 1
	    prepVersion = function (v) {
	      v = ('' + v).replace(/[_\-+]/g, '.');
	      v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.');
	      return (!v.length ? [-8] : v.split('.'));
	    },
	    // This converts a version component to a number.
	    // Empty component becomes 0.
	    // Non-numerical component becomes a negative number.
	    // Numerical component becomes itself as an integer.
	    numVersion = function (v) {
	      return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));
	    };

	  v1 = prepVersion(v1);
	  v2 = prepVersion(v2);
	  x = Math.max(v1.length, v2.length);
	  for (i = 0; i < x; i++) {
	    if (v1[i] == v2[i]) {
	      continue;
	    }
	    v1[i] = numVersion(v1[i]);
	    v2[i] = numVersion(v2[i]);
	    if (v1[i] < v2[i]) {
	      compare = -1;
	      break;
	    } else if (v1[i] > v2[i]) {
	      compare = 1;
	      break;
	    }
	  }
	  if (!operator) {
	    return compare;
	  }

	  // Important: operator is CASE-SENSITIVE.
	  // "No operator" seems to be treated as "<."
	  // Any other values seem to make the function return null.
	  switch (operator) {
	  case '>':
	  case 'gt':
	    return (compare > 0);
	  case '>=':
	  case 'ge':
	    return (compare >= 0);
	  case '<=':
	  case 'le':
	    return (compare <= 0);
	  case '==':
	  case '=':
	  case 'eq':
	    return (compare === 0);
	  case '<>':
	  case '!=':
	  case 'ne':
	    return (compare !== 0);
	  case '':
	  case '<':
	  case 'lt':
	    return (compare < 0);
	  default:
	    return null;
	  }
	}


	var can = (function() {
		var caps = {
				define_property: (function() {
					/* // currently too much extra code required, not exactly worth it
					try { // as of IE8, getters/setters are supported only on DOM elements
						var obj = {};
						if (Object.defineProperty) {
							Object.defineProperty(obj, 'prop', {
								enumerable: true,
								configurable: true
							});
							return true;
						}
					} catch(ex) {}

					if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) {
						return true;
					}*/
					return false;
				}()),

				create_canvas: (function() {
					// On the S60 and BB Storm, getContext exists, but always returns undefined
					// so we actually have to call getContext() to verify
					// github.com/Modernizr/Modernizr/issues/issue/97/
					var el = document.createElement('canvas');
					return !!(el.getContext && el.getContext('2d'));
				}()),

				return_response_type: function(responseType) {
					try {
						if (Basic.inArray(responseType, ['', 'text', 'document']) !== -1) {
							return true;
						} else if (window.XMLHttpRequest) {
							var xhr = new XMLHttpRequest();
							xhr.open('get', '/'); // otherwise Gecko throws an exception
							if ('responseType' in xhr) {
								xhr.responseType = responseType;
								// as of 23.0.1271.64, Chrome switched from throwing exception to merely logging it to the console (why? o why?)
								if (xhr.responseType !== responseType) {
									return false;
								}
								return true;
							}
						}
					} catch (ex) {}
					return false;
				},

				// ideas for this heavily come from Modernizr (http://modernizr.com/)
				use_data_uri: (function() {
					var du = new Image();

					du.onload = function() {
						caps.use_data_uri = (du.width === 1 && du.height === 1);
					};
					
					setTimeout(function() {
						du.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
					}, 1);
					return false;
				}()),

				use_data_uri_over32kb: function() { // IE8
					return caps.use_data_uri && (Env.browser !== 'IE' || Env.version >= 9);
				},

				use_data_uri_of: function(bytes) {
					return (caps.use_data_uri && bytes < 33000 || caps.use_data_uri_over32kb());
				},

				use_fileinput: function() {
					var el = document.createElement('input');
					el.setAttribute('type', 'file');
					return !el.disabled;
				}
			};

		return function(cap) {
			var args = [].slice.call(arguments);
			args.shift(); // shift of cap
			return Basic.typeOf(caps[cap]) === 'function' ? caps[cap].apply(this, args) : !!caps[cap];
		};
	}());


	var Env = {
		can: can,
		
		browser: UAParser.browser.name,
		version: parseFloat(UAParser.browser.major),
		os: UAParser.os.name, // everybody intuitively types it in a lowercase for some reason
		osVersion: UAParser.os.version,

		verComp: version_compare,
		
		swf_url: "../flash/Moxie.swf",
		xap_url: "../silverlight/Moxie.xap",
		global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
	};

	// for backward compatibility
	// @deprecated Use `Env.os` instead
	Env.OS = Env.os;

	return Env;
});

// Included from: src/javascript/core/utils/Dom.js

/**
 * Dom.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Dom', ['moxie/core/utils/Env'], function(Env) {

	/**
	Get DOM Element by it's id.

	@method get
	@for Utils
	@param {String} id Identifier of the DOM Element
	@return {DOMElement}
	*/
	var get = function(id) {
		if (typeof id !== 'string') {
			return id;
		}
		return document.getElementById(id);
	};

	/**
	Checks if specified DOM element has specified class.

	@method hasClass
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Class name
	*/
	var hasClass = function(obj, name) {
		if (!obj.className) {
			return false;
		}

		var regExp = new RegExp("(^|\\s+)"+name+"(\\s+|$)");
		return regExp.test(obj.className);
	};

	/**
	Adds specified className to specified DOM element.

	@method addClass
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Class name
	*/
	var addClass = function(obj, name) {
		if (!hasClass(obj, name)) {
			obj.className = !obj.className ? name : obj.className.replace(/\s+$/, '') + ' ' + name;
		}
	};

	/**
	Removes specified className from specified DOM element.

	@method removeClass
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Class name
	*/
	var removeClass = function(obj, name) {
		if (obj.className) {
			var regExp = new RegExp("(^|\\s+)"+name+"(\\s+|$)");
			obj.className = obj.className.replace(regExp, function($0, $1, $2) {
				return $1 === ' ' && $2 === ' ' ? ' ' : '';
			});
		}
	};

	/**
	Returns a given computed style of a DOM element.

	@method getStyle
	@static
	@param {Object} obj DOM element like object.
	@param {String} name Style you want to get from the DOM element
	*/
	var getStyle = function(obj, name) {
		if (obj.currentStyle) {
			return obj.currentStyle[name];
		} else if (window.getComputedStyle) {
			return window.getComputedStyle(obj, null)[name];
		}
	};


	/**
	Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.

	@method getPos
	@static
	@param {Element} node HTML element or element id to get x, y position from.
	@param {Element} root Optional root element to stop calculations at.
	@return {object} Absolute position of the specified element object with x, y fields.
	*/
	var getPos = function(node, root) {
		var x = 0, y = 0, parent, doc = document, nodeRect, rootRect;

		node = node;
		root = root || doc.body;

		// Returns the x, y cordinate for an element on IE 6 and IE 7
		function getIEPos(node) {
			var bodyElm, rect, x = 0, y = 0;

			if (node) {
				rect = node.getBoundingClientRect();
				bodyElm = doc.compatMode === "CSS1Compat" ? doc.documentElement : doc.body;
				x = rect.left + bodyElm.scrollLeft;
				y = rect.top + bodyElm.scrollTop;
			}

			return {
				x : x,
				y : y
			};
		}

		// Use getBoundingClientRect on IE 6 and IE 7 but not on IE 8 in standards mode
		if (node && node.getBoundingClientRect && Env.browser === 'IE' && (!doc.documentMode || doc.documentMode < 8)) {
			nodeRect = getIEPos(node);
			rootRect = getIEPos(root);

			return {
				x : nodeRect.x - rootRect.x,
				y : nodeRect.y - rootRect.y
			};
		}

		parent = node;
		while (parent && parent != root && parent.nodeType) {
			x += parent.offsetLeft || 0;
			y += parent.offsetTop || 0;
			parent = parent.offsetParent;
		}

		parent = node.parentNode;
		while (parent && parent != root && parent.nodeType) {
			x -= parent.scrollLeft || 0;
			y -= parent.scrollTop || 0;
			parent = parent.parentNode;
		}

		return {
			x : x,
			y : y
		};
	};

	/**
	Returns the size of the specified node in pixels.

	@method getSize
	@static
	@param {Node} node Node to get the size of.
	@return {Object} Object with a w and h property.
	*/
	var getSize = function(node) {
		return {
			w : node.offsetWidth || node.clientWidth,
			h : node.offsetHeight || node.clientHeight
		};
	};

	return {
		get: get,
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		getStyle: getStyle,
		getPos: getPos,
		getSize: getSize
	};
});

// Included from: src/javascript/core/Exceptions.js

/**
 * Exceptions.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/Exceptions', [
	'moxie/core/utils/Basic'
], function(Basic) {
	function _findKey(obj, value) {
		var key;
		for (key in obj) {
			if (obj[key] === value) {
				return key;
			}
		}
		return null;
	}

	return {
		RuntimeError: (function() {
			var namecodes = {
				NOT_INIT_ERR: 1,
				NOT_SUPPORTED_ERR: 9,
				JS_ERR: 4
			};

			function RuntimeError(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": RuntimeError " + this.code;
			}
			
			Basic.extend(RuntimeError, namecodes);
			RuntimeError.prototype = Error.prototype;
			return RuntimeError;
		}()),
		
		OperationNotAllowedException: (function() {
			
			function OperationNotAllowedException(code) {
				this.code = code;
				this.name = 'OperationNotAllowedException';
			}
			
			Basic.extend(OperationNotAllowedException, {
				NOT_ALLOWED_ERR: 1
			});
			
			OperationNotAllowedException.prototype = Error.prototype;
			
			return OperationNotAllowedException;
		}()),

		ImageError: (function() {
			var namecodes = {
				WRONG_FORMAT: 1,
				MAX_RESOLUTION_ERR: 2
			};

			function ImageError(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": ImageError " + this.code;
			}
			
			Basic.extend(ImageError, namecodes);
			ImageError.prototype = Error.prototype;

			return ImageError;
		}()),

		FileException: (function() {
			var namecodes = {
				NOT_FOUND_ERR: 1,
				SECURITY_ERR: 2,
				ABORT_ERR: 3,
				NOT_READABLE_ERR: 4,
				ENCODING_ERR: 5,
				NO_MODIFICATION_ALLOWED_ERR: 6,
				INVALID_STATE_ERR: 7,
				SYNTAX_ERR: 8
			};

			function FileException(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": FileException " + this.code;
			}
			
			Basic.extend(FileException, namecodes);
			FileException.prototype = Error.prototype;
			return FileException;
		}()),
		
		DOMException: (function() {
			var namecodes = {
				INDEX_SIZE_ERR: 1,
				DOMSTRING_SIZE_ERR: 2,
				HIERARCHY_REQUEST_ERR: 3,
				WRONG_DOCUMENT_ERR: 4,
				INVALID_CHARACTER_ERR: 5,
				NO_DATA_ALLOWED_ERR: 6,
				NO_MODIFICATION_ALLOWED_ERR: 7,
				NOT_FOUND_ERR: 8,
				NOT_SUPPORTED_ERR: 9,
				INUSE_ATTRIBUTE_ERR: 10,
				INVALID_STATE_ERR: 11,
				SYNTAX_ERR: 12,
				INVALID_MODIFICATION_ERR: 13,
				NAMESPACE_ERR: 14,
				INVALID_ACCESS_ERR: 15,
				VALIDATION_ERR: 16,
				TYPE_MISMATCH_ERR: 17,
				SECURITY_ERR: 18,
				NETWORK_ERR: 19,
				ABORT_ERR: 20,
				URL_MISMATCH_ERR: 21,
				QUOTA_EXCEEDED_ERR: 22,
				TIMEOUT_ERR: 23,
				INVALID_NODE_TYPE_ERR: 24,
				DATA_CLONE_ERR: 25
			};

			function DOMException(code) {
				this.code = code;
				this.name = _findKey(namecodes, code);
				this.message = this.name + ": DOMException " + this.code;
			}
			
			Basic.extend(DOMException, namecodes);
			DOMException.prototype = Error.prototype;
			return DOMException;
		}()),
		
		EventException: (function() {
			function EventException(code) {
				this.code = code;
				this.name = 'EventException';
			}
			
			Basic.extend(EventException, {
				UNSPECIFIED_EVENT_TYPE_ERR: 0
			});
			
			EventException.prototype = Error.prototype;
			
			return EventException;
		}())
	};
});

// Included from: src/javascript/core/EventTarget.js

/**
 * EventTarget.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/EventTarget', [
	'moxie/core/Exceptions',
	'moxie/core/utils/Basic'
], function(x, Basic) {
	/**
	Parent object for all event dispatching components and objects

	@class EventTarget
	@constructor EventTarget
	*/
	function EventTarget() {
		// hash of event listeners by object uid
		var eventpool = {};
				
		Basic.extend(this, {
			
			/**
			Unique id of the event dispatcher, usually overriden by children

			@property uid
			@type String
			*/
			uid: null,
			
			/**
			Can be called from within a child  in order to acquire uniqie id in automated manner

			@method init
			*/
			init: function() {
				if (!this.uid) {
					this.uid = Basic.guid('uid_');
				}
			},

			/**
			Register a handler to a specific event dispatched by the object

			@method addEventListener
			@param {String} type Type or basically a name of the event to subscribe to
			@param {Function} fn Callback function that will be called when event happens
			@param {Number} [priority=0] Priority of the event handler - handlers with higher priorities will be called first
			@param {Object} [scope=this] A scope to invoke event handler in
			*/
			addEventListener: function(type, fn, priority, scope) {
				var self = this, list;
				
				type = Basic.trim(type);
				
				if (/\s/.test(type)) {
					// multiple event types were passed for one handler
					Basic.each(type.split(/\s+/), function(type) {
						self.addEventListener(type, fn, priority, scope);
					});
					return;
				}
				
				type = type.toLowerCase();
				priority = parseInt(priority, 10) || 0;
				
				list = eventpool[this.uid] && eventpool[this.uid][type] || [];
				list.push({fn : fn, priority : priority, scope : scope || this});
				
				if (!eventpool[this.uid]) {
					eventpool[this.uid] = {};
				}
				eventpool[this.uid][type] = list;
			},
			
			/**
			Check if any handlers were registered to the specified event

			@method hasEventListener
			@param {String} type Type or basically a name of the event to check
			@return {Mixed} Returns a handler if it was found and false, if - not
			*/
			hasEventListener: function(type) {
				return type ? !!(eventpool[this.uid] && eventpool[this.uid][type]) : !!eventpool[this.uid];
			},
			
			/**
			Unregister the handler from the event, or if former was not specified - unregister all handlers

			@method removeEventListener
			@param {String} type Type or basically a name of the event
			@param {Function} [fn] Handler to unregister
			*/
			removeEventListener: function(type, fn) {
				type = type.toLowerCase();
	
				var list = eventpool[this.uid] && eventpool[this.uid][type], i;
	
				if (list) {
					if (fn) {
						for (i = list.length - 1; i >= 0; i--) {
							if (list[i].fn === fn) {
								list.splice(i, 1);
								break;
							}
						}
					} else {
						list = [];
					}
	
					// delete event list if it has become empty
					if (!list.length) {
						delete eventpool[this.uid][type];
						
						// and object specific entry in a hash if it has no more listeners attached
						if (Basic.isEmptyObj(eventpool[this.uid])) {
							delete eventpool[this.uid];
						}
					}
				}
			},
			
			/**
			Remove all event handlers from the object

			@method removeAllEventListeners
			*/
			removeAllEventListeners: function() {
				if (eventpool[this.uid]) {
					delete eventpool[this.uid];
				}
			},
			
			/**
			Dispatch the event

			@method dispatchEvent
			@param {String/Object} Type of event or event object to dispatch
			@param {Mixed} [...] Variable number of arguments to be passed to a handlers
			@return {Boolean} true by default and false if any handler returned false
			*/
			dispatchEvent: function(type) {
				var uid, list, args, tmpEvt, evt = {}, result = true, undef;
				
				if (Basic.typeOf(type) !== 'string') {
					// we can't use original object directly (because of Silverlight)
					tmpEvt = type;

					if (Basic.typeOf(tmpEvt.type) === 'string') {
						type = tmpEvt.type;

						if (tmpEvt.total !== undef && tmpEvt.loaded !== undef) { // progress event
							evt.total = tmpEvt.total;
							evt.loaded = tmpEvt.loaded;
						}
						evt.async = tmpEvt.async || false;
					} else {
						throw new x.EventException(x.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
					}
				}
				
				// check if event is meant to be dispatched on an object having specific uid
				if (type.indexOf('::') !== -1) {
					(function(arr) {
						uid = arr[0];
						type = arr[1];
					}(type.split('::')));
				} else {
					uid = this.uid;
				}
				
				type = type.toLowerCase();
								
				list = eventpool[uid] && eventpool[uid][type];

				if (list) {
					// sort event list by prority
					list.sort(function(a, b) { return b.priority - a.priority; });
					
					args = [].slice.call(arguments);
					
					// first argument will be pseudo-event object
					args.shift();
					evt.type = type;
					args.unshift(evt);

					// Dispatch event to all listeners
					var queue = [];
					Basic.each(list, function(handler) {
						// explicitly set the target, otherwise events fired from shims do not get it
						args[0].target = handler.scope;
						// if event is marked as async, detach the handler
						if (evt.async) {
							queue.push(function(cb) {
								setTimeout(function() {
									cb(handler.fn.apply(handler.scope, args) === false);
								}, 1);
							});
						} else {
							queue.push(function(cb) {
								cb(handler.fn.apply(handler.scope, args) === false); // if handler returns false stop propagation
							});
						}
					});
					if (queue.length) {
						Basic.inSeries(queue, function(err) {
							result = !err;
						});
					}
				}
				return result;
			},
			
			/**
			Alias for addEventListener

			@method bind
			@protected
			*/
			bind: function() {
				this.addEventListener.apply(this, arguments);
			},
			
			/**
			Alias for removeEventListener

			@method unbind
			@protected
			*/
			unbind: function() {
				this.removeEventListener.apply(this, arguments);
			},
			
			/**
			Alias for removeAllEventListeners

			@method unbindAll
			@protected
			*/
			unbindAll: function() {
				this.removeAllEventListeners.apply(this, arguments);
			},
			
			/**
			Alias for dispatchEvent

			@method trigger
			@protected
			*/
			trigger: function() {
				return this.dispatchEvent.apply(this, arguments);
			},
			
			
			/**
			Converts properties of on[event] type to corresponding event handlers,
			is used to avoid extra hassle around the process of calling them back

			@method convertEventPropsToHandlers
			@private
			*/
			convertEventPropsToHandlers: function(handlers) {
				var h;
						
				if (Basic.typeOf(handlers) !== 'array') {
					handlers = [handlers];
				}

				for (var i = 0; i < handlers.length; i++) {
					h = 'on' + handlers[i];
					
					if (Basic.typeOf(this[h]) === 'function') {
						this.addEventListener(handlers[i], this[h]);
					} else if (Basic.typeOf(this[h]) === 'undefined') {
						this[h] = null; // object must have defined event properties, even if it doesn't make use of them
					}
				}
			}
			
		});
	}

	EventTarget.instance = new EventTarget(); 

	return EventTarget;
});

// Included from: src/javascript/core/utils/Encode.js

/**
 * Encode.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Encode', [], function() {

	/**
	Encode string with UTF-8

	@method utf8_encode
	@for Utils
	@static
	@param {String} str String to encode
	@return {String} UTF-8 encoded string
	*/
	var utf8_encode = function(str) {
		return unescape(encodeURIComponent(str));
	};
	
	/**
	Decode UTF-8 encoded string

	@method utf8_decode
	@static
	@param {String} str String to decode
	@return {String} Decoded string
	*/
	var utf8_decode = function(str_data) {
		return decodeURIComponent(escape(str_data));
	};
	
	/**
	Decode Base64 encoded string (uses browser's default method if available),
	from: https://raw.github.com/kvz/phpjs/master/functions/url/base64_decode.js

	@method atob
	@static
	@param {String} data String to decode
	@return {String} Decoded string
	*/
	var atob = function(data, utf8) {
		if (typeof(window.atob) === 'function') {
			return utf8 ? utf8_decode(window.atob(data)) : window.atob(data);
		}

		// http://kevin.vanzonneveld.net
		// +   original by: Tyler Akins (http://rumkin.com)
		// +   improved by: Thunder.m
		// +      input by: Aman Gupta
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   bugfixed by: Onno Marsman
		// +   bugfixed by: Pellentesque Malesuada
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +      input by: Brett Zamir (http://brett-zamir.me)
		// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
		// *     returns 1: 'Kevin van Zonneveld'
		// mozilla has this native
		// - but breaks in 2.0.0.12!
		//if (typeof this.window.atob == 'function') {
		//    return atob(data);
		//}
		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
			ac = 0,
			dec = "",
			tmp_arr = [];

		if (!data) {
			return data;
		}

		data += '';

		do { // unpack four hexets into three octets using index points in b64
			h1 = b64.indexOf(data.charAt(i++));
			h2 = b64.indexOf(data.charAt(i++));
			h3 = b64.indexOf(data.charAt(i++));
			h4 = b64.indexOf(data.charAt(i++));

			bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

			o1 = bits >> 16 & 0xff;
			o2 = bits >> 8 & 0xff;
			o3 = bits & 0xff;

			if (h3 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1);
			} else if (h4 == 64) {
				tmp_arr[ac++] = String.fromCharCode(o1, o2);
			} else {
				tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
			}
		} while (i < data.length);

		dec = tmp_arr.join('');

		return utf8 ? utf8_decode(dec) : dec;
	};
	
	/**
	Base64 encode string (uses browser's default method if available),
	from: https://raw.github.com/kvz/phpjs/master/functions/url/base64_encode.js

	@method btoa
	@static
	@param {String} data String to encode
	@return {String} Base64 encoded string
	*/
	var btoa = function(data, utf8) {
		if (utf8) {
			utf8_encode(data);
		}

		if (typeof(window.btoa) === 'function') {
			return window.btoa(data);
		}

		// http://kevin.vanzonneveld.net
		// +   original by: Tyler Akins (http://rumkin.com)
		// +   improved by: Bayron Guevara
		// +   improved by: Thunder.m
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   bugfixed by: Pellentesque Malesuada
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   improved by: Rafał Kukawski (http://kukawski.pl)
		// *     example 1: base64_encode('Kevin van Zonneveld');
		// *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
		// mozilla has this native
		// - but breaks in 2.0.0.12!
		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
			ac = 0,
			enc = "",
			tmp_arr = [];

		if (!data) {
			return data;
		}

		do { // pack three octets into four hexets
			o1 = data.charCodeAt(i++);
			o2 = data.charCodeAt(i++);
			o3 = data.charCodeAt(i++);

			bits = o1 << 16 | o2 << 8 | o3;

			h1 = bits >> 18 & 0x3f;
			h2 = bits >> 12 & 0x3f;
			h3 = bits >> 6 & 0x3f;
			h4 = bits & 0x3f;

			// use hexets to index into b64, and append result to encoded string
			tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
		} while (i < data.length);

		enc = tmp_arr.join('');

		var r = data.length % 3;

		return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
	};


	return {
		utf8_encode: utf8_encode,
		utf8_decode: utf8_decode,
		atob: atob,
		btoa: btoa
	};
});

// Included from: src/javascript/runtime/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/runtime/Runtime', [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/EventTarget"
], function(Basic, Dom, EventTarget) {
	var runtimeConstructors = {}, runtimes = {};

	/**
	Common set of methods and properties for every runtime instance

	@class Runtime

	@param {Object} options
	@param {String} type Sanitized name of the runtime
	@param {Object} [caps] Set of capabilities that differentiate specified runtime
	@param {Object} [modeCaps] Set of capabilities that do require specific operational mode
	@param {String} [preferredMode='browser'] Preferred operational mode to choose if no required capabilities were requested
	*/
	function Runtime(options, type, caps, modeCaps, preferredMode) {
		/**
		Dispatched when runtime is initialized and ready.
		Results in RuntimeInit on a connected component.

		@event Init
		*/

		/**
		Dispatched when runtime fails to initialize.
		Results in RuntimeError on a connected component.

		@event Error
		*/

		var self = this
		, _shim
		, _uid = Basic.guid(type + '_')
		, defaultMode = preferredMode || 'browser'
		;

		options = options || {};

		// register runtime in private hash
		runtimes[_uid] = this;

		/**
		Default set of capabilities, which can be redifined later by specific runtime

		@private
		@property caps
		@type Object
		*/
		caps = Basic.extend({
			// Runtime can: 
			// provide access to raw binary data of the file
			access_binary: false,
			// provide access to raw binary data of the image (image extension is optional) 
			access_image_binary: false,
			// display binary data as thumbs for example
			display_media: false,
			// make cross-domain requests
			do_cors: false,
			// accept files dragged and dropped from the desktop
			drag_and_drop: false,
			// filter files in selection dialog by their extensions
			filter_by_extension: true,
			// resize image (and manipulate it raw data of any file in general)
			resize_image: false,
			// periodically report how many bytes of total in the file were uploaded (loaded)
			report_upload_progress: false,
			// provide access to the headers of http response 
			return_response_headers: false,
			// support response of specific type, which should be passed as an argument
			// e.g. runtime.can('return_response_type', 'blob')
			return_response_type: false,
			// return http status code of the response
			return_status_code: true,
			// send custom http header with the request
			send_custom_headers: false,
			// pick up the files from a dialog
			select_file: false,
			// select whole folder in file browse dialog
			select_folder: false,
			// select multiple files at once in file browse dialog
			select_multiple: true,
			// send raw binary data, that is generated after image resizing or manipulation of other kind
			send_binary_string: false,
			// send cookies with http request and therefore retain session
			send_browser_cookies: true,
			// send data formatted as multipart/form-data
			send_multipart: true,
			// slice the file or blob to smaller parts
			slice_blob: false,
			// upload file without preloading it to memory, stream it out directly from disk
			stream_upload: false,
			// programmatically trigger file browse dialog
			summon_file_dialog: false,
			// upload file of specific size, size should be passed as argument
			// e.g. runtime.can('upload_filesize', '500mb')
			upload_filesize: true,
			// initiate http request with specific http method, method should be passed as argument
			// e.g. runtime.can('use_http_method', 'put')
			use_http_method: true
		}, caps);
			
	
		// default to the mode that is compatible with preferred caps
		if (options.preferred_caps) {
			defaultMode = Runtime.getMode(modeCaps, options.preferred_caps, defaultMode);
		}
		
		// small extension factory here (is meant to be extended with actual extensions constructors)
		_shim = (function() {
			var objpool = {};
			return {
				exec: function(uid, comp, fn, args) {
					if (_shim[comp]) {
						if (!objpool[uid]) {
							objpool[uid] = {
								context: this,
								instance: new _shim[comp]()
							};
						}
						if (objpool[uid].instance[fn]) {
							return objpool[uid].instance[fn].apply(this, args);
						}
					}
				},

				removeInstance: function(uid) {
					delete objpool[uid];
				},

				removeAllInstances: function() {
					var self = this;
					Basic.each(objpool, function(obj, uid) {
						if (Basic.typeOf(obj.instance.destroy) === 'function') {
							obj.instance.destroy.call(obj.context);
						}
						self.removeInstance(uid);
					});
				}
			};
		}());


		// public methods
		Basic.extend(this, {
			/**
			Specifies whether runtime instance was initialized or not

			@property initialized
			@type {Boolean}
			@default false
			*/
			initialized: false, // shims require this flag to stop initialization retries

			/**
			Unique ID of the runtime

			@property uid
			@type {String}
			*/
			uid: _uid,

			/**
			Runtime type (e.g. flash, html5, etc)

			@property type
			@type {String}
			*/
			type: type,

			/**
			Runtime (not native one) may operate in browser or client mode.

			@property mode
			@private
			@type {String|Boolean} current mode or false, if none possible
			*/
			mode: Runtime.getMode(modeCaps, (options.required_caps), defaultMode),

			/**
			id of the DOM container for the runtime (if available)

			@property shimid
			@type {String}
			*/
			shimid: _uid + '_container',

			/**
			Number of connected clients. If equal to zero, runtime can be destroyed

			@property clients
			@type {Number}
			*/
			clients: 0,

			/**
			Runtime initialization options

			@property options
			@type {Object}
			*/
			options: options,

			/**
			Checks if the runtime has specific capability

			@method can
			@param {String} cap Name of capability to check
			@param {Mixed} [value] If passed, capability should somehow correlate to the value
			@param {Object} [refCaps] Set of capabilities to check the specified cap against (defaults to internal set)
			@return {Boolean} true if runtime has such capability and false, if - not
			*/
			can: function(cap, value) {
				var refCaps = arguments[2] || caps;

				// if cap var is a comma-separated list of caps, convert it to object (key/value)
				if (Basic.typeOf(cap) === 'string' && Basic.typeOf(value) === 'undefined') {
					cap = Runtime.parseCaps(cap);
				}

				if (Basic.typeOf(cap) === 'object') {
					for (var key in cap) {
						if (!this.can(key, cap[key], refCaps)) {
							return false;
						}
					}
					return true;
				}

				// check the individual cap
				if (Basic.typeOf(refCaps[cap]) === 'function') {
					return refCaps[cap].call(this, value);
				} else {
					return (value === refCaps[cap]);
				}
			},

			/**
			Returns container for the runtime as DOM element

			@method getShimContainer
			@return {DOMElement}
			*/
			getShimContainer: function() {
				var container, shimContainer = Dom.get(this.shimid);

				// if no container for shim, create one
				if (!shimContainer) {
					container = this.options.container ? Dom.get(this.options.container) : document.body;

					// create shim container and insert it at an absolute position into the outer container
					shimContainer = document.createElement('div');
					shimContainer.id = this.shimid;
					shimContainer.className = 'moxie-shim moxie-shim-' + this.type;

					Basic.extend(shimContainer.style, {
						position: 'absolute',
						top: '0px',
						left: '0px',
						width: '1px',
						height: '1px',
						overflow: 'hidden'
					});

					container.appendChild(shimContainer);
					container = null;
				}

				return shimContainer;
			},

			/**
			Returns runtime as DOM element (if appropriate)

			@method getShim
			@return {DOMElement}
			*/
			getShim: function() {
				return _shim;
			},

			/**
			Invokes a method within the runtime itself (might differ across the runtimes)

			@method shimExec
			@param {Mixed} []
			@protected
			@return {Mixed} Depends on the action and component
			*/
			shimExec: function(component, action) {
				var args = [].slice.call(arguments, 2);
				return self.getShim().exec.call(this, this.uid, component, action, args);
			},

			/**
			Operaional interface that is used by components to invoke specific actions on the runtime
			(is invoked in the scope of component)

			@method exec
			@param {Mixed} []*
			@protected
			@return {Mixed} Depends on the action and component
			*/
			exec: function(component, action) { // this is called in the context of component, not runtime
				var args = [].slice.call(arguments, 2);

				if (self[component] && self[component][action]) {
					return self[component][action].apply(this, args);
				}
				return self.shimExec.apply(this, arguments);
			},

			/**
			Destroys the runtime (removes all events and deletes DOM structures)

			@method destroy
			*/
			destroy: function() {
				if (!self) {
					return; // obviously already destroyed
				}

				var shimContainer = Dom.get(this.shimid);
				if (shimContainer) {
					shimContainer.parentNode.removeChild(shimContainer);
				}

				if (_shim) {
					_shim.removeAllInstances();
				}

				this.unbindAll();
				delete runtimes[this.uid];
				this.uid = null; // mark this runtime as destroyed
				_uid = self = _shim = shimContainer = null;
			}
		});

		// once we got the mode, test against all caps
		if (this.mode && options.required_caps && !this.can(options.required_caps)) {
			this.mode = false;
		}	
	}


	/**
	Default order to try different runtime types

	@property order
	@type String
	@static
	*/
	Runtime.order = 'html5,flash,silverlight,html4';


	/**
	Retrieves runtime from private hash by it's uid

	@method getRuntime
	@private
	@static
	@param {String} uid Unique identifier of the runtime
	@return {Runtime|Boolean} Returns runtime, if it exists and false, if - not
	*/
	Runtime.getRuntime = function(uid) {
		return runtimes[uid] ? runtimes[uid] : false;
	};


	/**
	Register constructor for the Runtime of new (or perhaps modified) type

	@method addConstructor
	@static
	@param {String} type Runtime type (e.g. flash, html5, etc)
	@param {Function} construct Constructor for the Runtime type
	*/
	Runtime.addConstructor = function(type, constructor) {
		constructor.prototype = EventTarget.instance;
		runtimeConstructors[type] = constructor;
	};


	/**
	Get the constructor for the specified type.

	method getConstructor
	@static
	@param {String} type Runtime type (e.g. flash, html5, etc)
	@return {Function} Constructor for the Runtime type
	*/
	Runtime.getConstructor = function(type) {
		return runtimeConstructors[type] || null;
	};


	/**
	Get info about the runtime (uid, type, capabilities)

	@method getInfo
	@static
	@param {String} uid Unique identifier of the runtime
	@return {Mixed} Info object or null if runtime doesn't exist
	*/
	Runtime.getInfo = function(uid) {
		var runtime = Runtime.getRuntime(uid);

		if (runtime) {
			return {
				uid: runtime.uid,
				type: runtime.type,
				mode: runtime.mode,
				can: function() {
					return runtime.can.apply(runtime, arguments);
				}
			};
		}
		return null;
	};


	/**
	Convert caps represented by a comma-separated string to the object representation.

	@method parseCaps
	@static
	@param {String} capStr Comma-separated list of capabilities
	@return {Object}
	*/
	Runtime.parseCaps = function(capStr) {
		var capObj = {};

		if (Basic.typeOf(capStr) !== 'string') {
			return capStr || {};
		}

		Basic.each(capStr.split(','), function(key) {
			capObj[key] = true; // we assume it to be - true
		});

		return capObj;
	};

	/**
	Test the specified runtime for specific capabilities.

	@method can
	@static
	@param {String} type Runtime type (e.g. flash, html5, etc)
	@param {String|Object} caps Set of capabilities to check
	@return {Boolean} Result of the test
	*/
	Runtime.can = function(type, caps) {
		var runtime
		, constructor = Runtime.getConstructor(type)
		, mode
		;
		if (constructor) {
			runtime = new constructor({
				required_caps: caps
			});
			mode = runtime.mode;
			runtime.destroy();
			return !!mode;
		}
		return false;
	};


	/**
	Figure out a runtime that supports specified capabilities.

	@method thatCan
	@static
	@param {String|Object} caps Set of capabilities to check
	@param {String} [runtimeOrder] Comma-separated list of runtimes to check against
	@return {String} Usable runtime identifier or null
	*/
	Runtime.thatCan = function(caps, runtimeOrder) {
		var types = (runtimeOrder || Runtime.order).split(/\s*,\s*/);
		for (var i in types) {
			if (Runtime.can(types[i], caps)) {
				return types[i];
			}
		}
		return null;
	};


	/**
	Figure out an operational mode for the specified set of capabilities.

	@method getMode
	@static
	@param {Object} modeCaps Set of capabilities that depend on particular runtime mode
	@param {Object} [requiredCaps] Supplied set of capabilities to find operational mode for
	@param {String|Boolean} [defaultMode='browser'] Default mode to use 
	@return {String|Boolean} Compatible operational mode
	*/
	Runtime.getMode = function(modeCaps, requiredCaps, defaultMode) {
		var mode = null;

		if (Basic.typeOf(defaultMode) === 'undefined') { // only if not specified
			defaultMode = 'browser';
		}

		if (requiredCaps && !Basic.isEmptyObj(modeCaps)) {
			// loop over required caps and check if they do require the same mode
			Basic.each(requiredCaps, function(value, cap) {
				if (modeCaps.hasOwnProperty(cap)) {
					var capMode = modeCaps[cap](value);

					// make sure we always have an array
					if (typeof(capMode) === 'string') {
						capMode = [capMode];
					}
					
					if (!mode) {
						mode = capMode;
					} else if (!(mode = Basic.arrayIntersect(mode, capMode))) {
						// if cap requires conflicting mode - runtime cannot fulfill required caps
						return (mode = false);
					}
				}
			});

			if (mode) {
				return Basic.inArray(defaultMode, mode) !== -1 ? defaultMode : mode[0];
			} else if (mode === false) {
				return false;
			}
		}
		return defaultMode; 
	};


	/**
	Capability check that always returns true

	@private
	@static
	@return {True}
	*/
	Runtime.capTrue = function() {
		return true;
	};

	/**
	Capability check that always returns false

	@private
	@static
	@return {False}
	*/
	Runtime.capFalse = function() {
		return false;
	};

	/**
	Evaluate the expression to boolean value and create a function that always returns it.

	@private
	@static
	@param {Mixed} expr Expression to evaluate
	@return {Function} Function returning the result of evaluation
	*/
	Runtime.capTest = function(expr) {
		return function() {
			return !!expr;
		};
	};

	return Runtime;
});

// Included from: src/javascript/runtime/RuntimeClient.js

/**
 * RuntimeClient.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/runtime/RuntimeClient', [
	'moxie/core/Exceptions',
	'moxie/core/utils/Basic',
	'moxie/runtime/Runtime'
], function(x, Basic, Runtime) {
	/**
	Set of methods and properties, required by a component to acquire ability to connect to a runtime

	@class RuntimeClient
	*/
	return function RuntimeClient() {
		var runtime;

		Basic.extend(this, {
			/**
			Connects to the runtime specified by the options. Will either connect to existing runtime or create a new one.
			Increments number of clients connected to the specified runtime.

			@method connectRuntime
			@param {Mixed} options Can be a runtme uid or a set of key-value pairs defining requirements and pre-requisites
			*/
			connectRuntime: function(options) {
				var comp = this, ruid;

				function initialize(items) {
					var type, constructor;

					// if we ran out of runtimes
					if (!items.length) {
						comp.trigger('RuntimeError', new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));
						runtime = null;
						return;
					}

					type = items.shift();
					constructor = Runtime.getConstructor(type);
					if (!constructor) {
						initialize(items);
						return;
					}

					// try initializing the runtime
					runtime = new constructor(options);

					runtime.bind('Init', function() {
						// mark runtime as initialized
						runtime.initialized = true;

						// jailbreak ...
						setTimeout(function() {
							runtime.clients++;
							// this will be triggered on component
							comp.trigger('RuntimeInit', runtime);
						}, 1);
					});

					runtime.bind('Error', function() {
						runtime.destroy(); // runtime cannot destroy itself from inside at a right moment, thus we do it here
						initialize(items);
					});

					/*runtime.bind('Exception', function() { });*/

					// check if runtime managed to pick-up operational mode
					if (!runtime.mode) {
						runtime.trigger('Error');
						return;
					}

					runtime.init();
				}

				// check if a particular runtime was requested
				if (Basic.typeOf(options) === 'string') {
					ruid = options;
				} else if (Basic.typeOf(options.ruid) === 'string') {
					ruid = options.ruid;
				}

				if (ruid) {
					runtime = Runtime.getRuntime(ruid);
					if (runtime) {
						runtime.clients++;
						return runtime;
					} else {
						// there should be a runtime and there's none - weird case
						throw new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR);
					}
				}

				// initialize a fresh one, that fits runtime list and required features best
				initialize((options.runtime_order || Runtime.order).split(/\s*,\s*/));
			},

			/**
			Returns the runtime to which the client is currently connected.

			@method getRuntime
			@return {Runtime} Runtime or null if client is not connected
			*/
			getRuntime: function() {
				if (runtime && runtime.uid) {
					return runtime;
				}
				runtime = null; // make sure we do not leave zombies rambling around
				return null;
			},

			/**
			Disconnects from the runtime. Decrements number of clients connected to the specified runtime.

			@method disconnectRuntime
			*/
			disconnectRuntime: function() {
				if (runtime && --runtime.clients <= 0) {
					runtime.destroy();
					runtime = null;
				}
			}

		});
	};


});

// Included from: src/javascript/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/Blob', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Encode',
	'moxie/runtime/RuntimeClient'
], function(Basic, Encode, RuntimeClient) {
	
	var blobpool = {};

	/**
	@class Blob
	@constructor
	@param {String} ruid Unique id of the runtime, to which this blob belongs to
	@param {Object} blob Object "Native" blob object, as it is represented in the runtime
	*/
	function Blob(ruid, blob) {

		function _sliceDetached(start, end, type) {
			var blob, data = blobpool[this.uid];

			if (Basic.typeOf(data) !== 'string' || !data.length) {
				return null; // or throw exception
			}

			blob = new Blob(null, {
				type: type,
				size: end - start
			});
			blob.detach(data.substr(start, blob.size));

			return blob;
		}

		RuntimeClient.call(this);

		if (ruid) {	
			this.connectRuntime(ruid);
		}

		if (!blob) {
			blob = {};
		} else if (Basic.typeOf(blob) === 'string') { // dataUrl or binary string
			blob = { data: blob };
		}

		Basic.extend(this, {
			
			/**
			Unique id of the component

			@property uid
			@type {String}
			*/
			uid: blob.uid || Basic.guid('uid_'),
			
			/**
			Unique id of the connected runtime, if falsy, then runtime will have to be initialized 
			before this Blob can be used, modified or sent

			@property ruid
			@type {String}
			*/
			ruid: ruid,
	
			/**
			Size of blob

			@property size
			@type {Number}
			@default 0
			*/
			size: blob.size || 0,
			
			/**
			Mime type of blob

			@property type
			@type {String}
			@default ''
			*/
			type: blob.type || '',
			
			/**
			@method slice
			@param {Number} [start=0]
			*/
			slice: function(start, end, type) {		
				if (this.isDetached()) {
					return _sliceDetached.apply(this, arguments);
				}
				return this.getRuntime().exec.call(this, 'Blob', 'slice', this.getSource(), start, end, type);
			},

			/**
			Returns "native" blob object (as it is represented in connected runtime) or null if not found

			@method getSource
			@return {Blob} Returns "native" blob object or null if not found
			*/
			getSource: function() {
				if (!blobpool[this.uid]) {
					return null;	
				}
				return blobpool[this.uid];
			},

			/** 
			Detaches blob from any runtime that it depends on and initialize with standalone value

			@method detach
			@protected
			@param {DOMString} [data=''] Standalone value
			*/
			detach: function(data) {
				if (this.ruid) {
					this.getRuntime().exec.call(this, 'Blob', 'destroy', blobpool[this.uid]);
					this.disconnectRuntime();
					this.ruid = null;
				}

				data = data || '';

				// if dataUrl, convert to binary string
				var matches = data.match(/^data:([^;]*);base64,/);
				if (matches) {
					this.type = matches[1];
					data = Encode.atob(data.substring(data.indexOf('base64,') + 7));
				}

				this.size = data.length;

				blobpool[this.uid] = data;
			},

			/**
			Checks if blob is standalone (detached of any runtime)
			
			@method isDetached
			@protected
			@return {Boolean}
			*/
			isDetached: function() {
				return !this.ruid && Basic.typeOf(blobpool[this.uid]) === 'string';
			},
			
			/** 
			Destroy Blob and free any resources it was using

			@method destroy
			*/
			destroy: function() {
				this.detach();
				delete blobpool[this.uid];
			}
		});

		
		if (blob.data) {
			this.detach(blob.data); // auto-detach if payload has been passed
		} else {
			blobpool[this.uid] = blob;	
		}
	}
	
	return Blob;
});

// Included from: src/javascript/file/File.js

/**
 * File.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/File', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Mime',
	'moxie/file/Blob'
], function(Basic, Mime, Blob) {
	/**
	@class File
	@extends Blob
	@constructor
	@param {String} ruid Unique id of the runtime, to which this blob belongs to
	@param {Object} file Object "Native" file object, as it is represented in the runtime
	*/
	function File(ruid, file) {
		var name, type;

		if (!file) { // avoid extra errors in case we overlooked something
			file = {};
		}

		// figure out the type
		if (file.type && file.type !== '') {
			type = file.type;
		} else {
			type = Mime.getFileMime(file.name);
		}

		// sanitize file name or generate new one
		if (file.name) {
			name = file.name.replace(/\\/g, '/');
			name = name.substr(name.lastIndexOf('/') + 1);
		} else {
			var prefix = type.split('/')[0];
			name = Basic.guid((prefix !== '' ? prefix : 'file') + '_');
			
			if (Mime.extensions[type]) {
				name += '.' + Mime.extensions[type][0]; // append proper extension if possible
			}
		}

		Blob.apply(this, arguments);
		
		Basic.extend(this, {
			/**
			File mime type

			@property type
			@type {String}
			@default ''
			*/
			type: type || '',

			/**
			File name

			@property name
			@type {String}
			@default UID
			*/
			name: name || Basic.guid('file_'),
			
			/**
			Date of last modification

			@property lastModifiedDate
			@type {String}
			@default now
			*/
			lastModifiedDate: file.lastModifiedDate || (new Date()).toLocaleString() // Thu Aug 23 2012 19:40:00 GMT+0400 (GET)
		});
	}

	File.prototype = Blob.prototype;

	return File;
});

// Included from: src/javascript/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileInput', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Mime',
	'moxie/core/utils/Dom',
	'moxie/core/Exceptions',
	'moxie/core/EventTarget',
	'moxie/core/I18n',
	'moxie/file/File',
	'moxie/runtime/Runtime',
	'moxie/runtime/RuntimeClient'
], function(Basic, Mime, Dom, x, EventTarget, I18n, File, Runtime, RuntimeClient) {
	/**
	Provides a convenient way to create cross-browser file-picker. Generates file selection dialog on click,
	converts selected files to _File_ objects, to be used in conjunction with _Image_, preloaded in memory
	with _FileReader_ or uploaded to a server through _XMLHttpRequest_.

	@class FileInput
	@constructor
	@extends EventTarget
	@uses RuntimeClient
	@param {Object|String|DOMElement} options If options is string or node, argument is considered as _browse\_button_.
		@param {String|DOMElement} options.browse_button DOM Element to turn into file picker.
		@param {Array} [options.accept] Array of mime types to accept. By default accepts all.
		@param {String} [options.file='file'] Name of the file field (not the filename).
		@param {Boolean} [options.multiple=false] Enable selection of multiple files.
		@param {Boolean} [options.directory=false] Turn file input into the folder input (cannot be both at the same time).
		@param {String|DOMElement} [options.container] DOM Element to use as a container for file-picker. Defaults to parentNode 
		for _browse\_button_.
		@param {Object|String} [options.required_caps] Set of required capabilities, that chosen runtime must support.

	@example
		<div id="container">
			<a id="file-picker" href="javascript:;">Browse...</a>
		</div>

		<script>
			var fileInput = new mOxie.FileInput({
				browse_button: 'file-picker', // or document.getElementById('file-picker')
				container: 'container',
				accept: [
					{title: "Image files", extensions: "jpg,gif,png"} // accept only images
				],
				multiple: true // allow multiple file selection
			});

			fileInput.onchange = function(e) {
				// do something to files array
				console.info(e.target.files); // or this.files or fileInput.files
			};

			fileInput.init(); // initialize
		</script>
	*/
	var dispatches = [
		/**
		Dispatched when runtime is connected and file-picker is ready to be used.

		@event ready
		@param {Object} event
		*/
		'ready',

		/**
		Dispatched right after [ready](#event_ready) event, and whenever [refresh()](#method_refresh) is invoked. 
		Check [corresponding documentation entry](#method_refresh) for more info.

		@event refresh
		@param {Object} event
		*/

		/**
		Dispatched when selection of files in the dialog is complete.

		@event change
		@param {Object} event
		*/
		'change',

		'cancel', // TODO: might be useful

		/**
		Dispatched when mouse cursor enters file-picker area. Can be used to style element
		accordingly.

		@event mouseenter
		@param {Object} event
		*/
		'mouseenter',

		/**
		Dispatched when mouse cursor leaves file-picker area. Can be used to style element
		accordingly.

		@event mouseleave
		@param {Object} event
		*/
		'mouseleave',

		/**
		Dispatched when functional mouse button is pressed on top of file-picker area.

		@event mousedown
		@param {Object} event
		*/
		'mousedown',

		/**
		Dispatched when functional mouse button is released on top of file-picker area.

		@event mouseup
		@param {Object} event
		*/
		'mouseup'
	];

	function FileInput(options) {
		var self = this,
			container, browseButton, defaults;

		// if flat argument passed it should be browse_button id
		if (Basic.inArray(Basic.typeOf(options), ['string', 'node']) !== -1) {
			options = { browse_button : options };
		}

		// this will help us to find proper default container
		browseButton = Dom.get(options.browse_button);
		if (!browseButton) {
			// browse button is required
			throw new x.DOMException(x.DOMException.NOT_FOUND_ERR);
		}

		// figure out the options
		defaults = {
			accept: [{
				title: I18n.translate('All Files'),
				extensions: '*'
			}],
			name: 'file',
			multiple: false,
			required_caps: false,
			container: browseButton.parentNode || document.body
		};
		
		options = Basic.extend({}, defaults, options);

		// convert to object representation
		if (typeof(options.required_caps) === 'string') {
			options.required_caps = Runtime.parseCaps(options.required_caps);
		}
					
		// normalize accept option (could be list of mime types or array of title/extensions pairs)
		if (typeof(options.accept) === 'string') {
			options.accept = Mime.mimes2extList(options.accept);
		}

		container = Dom.get(options.container);
		// make sure we have container
		if (!container) {
			container = document.body;
		}

		// make container relative, if it's not
		if (Dom.getStyle(container, 'position') === 'static') {
			container.style.position = 'relative';
		}

		container = browseButton = null; // IE
						
		RuntimeClient.call(self);
		
		Basic.extend(self, {
			/**
			Unique id of the component

			@property uid
			@protected
			@readOnly
			@type {String}
			@default UID
			*/
			uid: Basic.guid('uid_'),
			
			/**
			Unique id of the connected runtime, if any.

			@property ruid
			@protected
			@type {String}
			*/
			ruid: null,

			/**
			Unique id of the runtime container. Useful to get hold of it for various manipulations.

			@property shimid
			@protected
			@type {String}
			*/
			shimid: null,
			
			/**
			Array of selected mOxie.File objects

			@property files
			@type {Array}
			@default null
			*/
			files: null,

			/**
			Initializes the file-picker, connects it to runtime and dispatches event ready when done.

			@method init
			*/
			init: function() {
				self.convertEventPropsToHandlers(dispatches);

				self.bind('RuntimeInit', function(e, runtime) {
					self.ruid = runtime.uid;
					self.shimid = runtime.shimid;

					self.bind("Ready", function() {
						self.trigger("Refresh");
					}, 999);

					self.bind("Change", function() {
						var files = runtime.exec.call(self, 'FileInput', 'getFiles');

						self.files = [];

						Basic.each(files, function(file) {
							// ignore empty files (IE10 for example hangs if you try to send them via XHR)
							if (file.size === 0) {
								return true; 
							}
							self.files.push(new File(self.ruid, file));
						});
					}, 999);

					// re-position and resize shim container
					self.bind('Refresh', function() {
						var pos, size, browseButton, shimContainer;
						
						browseButton = Dom.get(options.browse_button);
						shimContainer = Dom.get(runtime.shimid); // do not use runtime.getShimContainer(), since it will create container if it doesn't exist

						if (browseButton) {
							pos = Dom.getPos(browseButton, Dom.get(options.container));
							size = Dom.getSize(browseButton);

							if (shimContainer) {
								Basic.extend(shimContainer.style, {
									top     : pos.y + 'px',
									left    : pos.x + 'px',
									width   : size.w + 'px',
									height  : size.h + 'px'
								});
							}
						}
						shimContainer = browseButton = null;
					});
					
					runtime.exec.call(self, 'FileInput', 'init', options);
				});

				// runtime needs: options.required_features, options.runtime_order and options.container
				self.connectRuntime(Basic.extend({}, options, {
					required_caps: {
						select_file: true
					}
				}));
			},

			/**
			Disables file-picker element, so that it doesn't react to mouse clicks.

			@method disable
			@param {Boolean} [state=true] Disable component if - true, enable if - false
			*/
			disable: function(state) {
				var runtime = this.getRuntime();
				if (runtime) {
					runtime.exec.call(this, 'FileInput', 'disable', Basic.typeOf(state) === 'undefined' ? true : state);
				}
			},


			/**
			Reposition and resize dialog trigger to match the position and size of browse_button element.

			@method refresh
			*/
			refresh: function() {
				self.trigger("Refresh");
			},


			/**
			Destroy component.

			@method destroy
			*/
			destroy: function() {
				var runtime = this.getRuntime();
				if (runtime) {
					runtime.exec.call(this, 'FileInput', 'destroy');
					this.disconnectRuntime();
				}

				if (Basic.typeOf(this.files) === 'array') {
					// no sense in leaving associated files behind
					Basic.each(this.files, function(file) {
						file.destroy();
					});
				} 
				this.files = null;
			}
		});
	}

	FileInput.prototype = EventTarget.instance;

	return FileInput;
});

// Included from: src/javascript/file/FileDrop.js

/**
 * FileDrop.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileDrop', [
	'moxie/core/I18n',
	'moxie/core/utils/Dom',
	'moxie/core/Exceptions',
	'moxie/core/utils/Basic',
	'moxie/file/File',
	'moxie/runtime/RuntimeClient',
	'moxie/core/EventTarget',
	'moxie/core/utils/Mime'
], function(I18n, Dom, x, Basic, File, RuntimeClient, EventTarget, Mime) {
	/**
	Turn arbitrary DOM element to a drop zone accepting files. Converts selected files to _File_ objects, to be used 
	in conjunction with _Image_, preloaded in memory with _FileReader_ or uploaded to a server through 
	_XMLHttpRequest_.

	@example
		<div id="drop_zone">
			Drop files here
		</div>
		<br />
		<div id="filelist"></div>

		<script type="text/javascript">
			var fileDrop = new mOxie.FileDrop('drop_zone'), fileList = mOxie.get('filelist');

			fileDrop.ondrop = function() {
				mOxie.each(this.files, function(file) {
					fileList.innerHTML += '<div>' + file.name + '</div>';
				});
			};

			fileDrop.init();
		</script>

	@class FileDrop
	@constructor
	@extends EventTarget
	@uses RuntimeClient
	@param {Object|String} options If options has typeof string, argument is considered as options.drop_zone
		@param {String|DOMElement} options.drop_zone DOM Element to turn into a drop zone
		@param {Array} [options.accept] Array of mime types to accept. By default accepts all
		@param {Object|String} [options.required_caps] Set of required capabilities, that chosen runtime must support
	*/
	var dispatches = [
		/**
		Dispatched when runtime is connected and drop zone is ready to accept files.

		@event ready
		@param {Object} event
		*/
		'ready', 

		/**
		Dispatched when dragging cursor enters the drop zone.

		@event dragenter
		@param {Object} event
		*/
		'dragenter',

		/**
		Dispatched when dragging cursor leaves the drop zone.

		@event dragleave
		@param {Object} event
		*/
		'dragleave', 

		/**
		Dispatched when file is dropped onto the drop zone.

		@event drop
		@param {Object} event
		*/
		'drop', 

		/**
		Dispatched if error occurs.

		@event error
		@param {Object} event
		*/
		'error'
	];

	function FileDrop(options) {
		var self = this, defaults;

		// if flat argument passed it should be drop_zone id
		if (typeof(options) === 'string') {
			options = { drop_zone : options };
		}

		// figure out the options
		defaults = {
			accept: [{
				title: I18n.translate('All Files'),
				extensions: '*'
			}],
			required_caps: {
				drag_and_drop: true
			}
		};
		
		options = typeof(options) === 'object' ? Basic.extend({}, defaults, options) : defaults;

		// this will help us to find proper default container
		options.container = Dom.get(options.drop_zone) || document.body;

		// make container relative, if it is not
		if (Dom.getStyle(options.container, 'position') === 'static') {
			options.container.style.position = 'relative';
		}
					
		// normalize accept option (could be list of mime types or array of title/extensions pairs)
		if (typeof(options.accept) === 'string') {
			options.accept = Mime.mimes2extList(options.accept);
		}

		RuntimeClient.call(self);

		Basic.extend(self, {
			uid: Basic.guid('uid_'),

			ruid: null,

			files: null,

			init: function() {
	
				self.convertEventPropsToHandlers(dispatches);
		
				self.bind('RuntimeInit', function(e, runtime) {
					self.ruid = runtime.uid;

					self.bind("Drop", function() {
						var files = runtime.exec.call(self, 'FileDrop', 'getFiles');

						self.files = [];

						Basic.each(files, function(file) {
							self.files.push(new File(self.ruid, file));
						});
					}, 999);

					runtime.exec.call(self, 'FileDrop', 'init', options);

					self.dispatchEvent('ready');
				});
							
				// runtime needs: options.required_features, options.runtime_order and options.container
				self.connectRuntime(options); // throws RuntimeError
			},

			destroy: function() {
				var runtime = this.getRuntime();
				if (runtime) {
					runtime.exec.call(this, 'FileDrop', 'destroy');
					this.disconnectRuntime();
				}
				this.files = null;
			}
		});
	}

	FileDrop.prototype = EventTarget.instance;

	return FileDrop;
});

// Included from: src/javascript/runtime/RuntimeTarget.js

/**
 * RuntimeTarget.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/runtime/RuntimeTarget', [
	'moxie/core/utils/Basic',
	'moxie/runtime/RuntimeClient',
	"moxie/core/EventTarget"
], function(Basic, RuntimeClient, EventTarget) {
	/**
	Instance of this class can be used as a target for the events dispatched by shims,
	when allowing them onto components is for either reason inappropriate

	@class RuntimeTarget
	@constructor
	@protected
	@extends EventTarget
	*/
	function RuntimeTarget() {
		this.uid = Basic.guid('uid_');
		
		RuntimeClient.call(this);

		this.destroy = function() {
			this.disconnectRuntime();
			this.unbindAll();
		};
	}

	RuntimeTarget.prototype = EventTarget.instance;

	return RuntimeTarget;
});

// Included from: src/javascript/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileReader', [
	'moxie/core/utils/Basic',
	'moxie/core/utils/Encode',
	'moxie/core/Exceptions',
	'moxie/core/EventTarget',
	'moxie/file/Blob',
	'moxie/file/File',
	'moxie/runtime/RuntimeTarget'
], function(Basic, Encode, x, EventTarget, Blob, File, RuntimeTarget) {
	/**
	Utility for preloading o.Blob/o.File objects in memory. By design closely follows [W3C FileReader](http://www.w3.org/TR/FileAPI/#dfn-filereader)
	interface. Where possible uses native FileReader, where - not falls back to shims.

	@class FileReader
	@constructor FileReader
	@extends EventTarget
	@uses RuntimeClient
	*/
	var dispatches = [

		/** 
		Dispatched when the read starts.

		@event loadstart
		@param {Object} event
		*/
		'loadstart', 

		/** 
		Dispatched while reading (and decoding) blob, and reporting partial Blob data (progess.loaded/progress.total).

		@event progress
		@param {Object} event
		*/
		'progress', 

		/** 
		Dispatched when the read has successfully completed.

		@event load
		@param {Object} event
		*/
		'load', 

		/** 
		Dispatched when the read has been aborted. For instance, by invoking the abort() method.

		@event abort
		@param {Object} event
		*/
		'abort', 

		/** 
		Dispatched when the read has failed.

		@event error
		@param {Object} event
		*/
		'error', 

		/** 
		Dispatched when the request has completed (either in success or failure).

		@event loadend
		@param {Object} event
		*/
		'loadend'
	];
	
	function FileReader() {
		var self = this, _fr;
				
		Basic.extend(this, {
			/**
			UID of the component instance.

			@property uid
			@type {String}
			*/
			uid: Basic.guid('uid_'),

			/**
			Contains current state of FileReader object. Can take values of FileReader.EMPTY, FileReader.LOADING
			and FileReader.DONE.

			@property readyState
			@type {Number}
			@default FileReader.EMPTY
			*/
			readyState: FileReader.EMPTY,
			
			/**
			Result of the successful read operation.

			@property result
			@type {String}
			*/
			result: null,
			
			/**
			Stores the error of failed asynchronous read operation.

			@property error
			@type {DOMError}
			*/
			error: null,
			
			/**
			Initiates reading of File/Blob object contents to binary string.

			@method readAsBinaryString
			@param {Blob|File} blob Object to preload
			*/
			readAsBinaryString: function(blob) {
				_read.call(this, 'readAsBinaryString', blob);
			},
			
			/**
			Initiates reading of File/Blob object contents to dataURL string.

			@method readAsDataURL
			@param {Blob|File} blob Object to preload
			*/
			readAsDataURL: function(blob) {
				_read.call(this, 'readAsDataURL', blob);
			},
			
			/**
			Initiates reading of File/Blob object contents to string.

			@method readAsText
			@param {Blob|File} blob Object to preload
			*/
			readAsText: function(blob) {
				_read.call(this, 'readAsText', blob);
			},
			
			/**
			Aborts preloading process.

			@method abort
			*/
			abort: function() {
				this.result = null;
				
				if (Basic.inArray(this.readyState, [FileReader.EMPTY, FileReader.DONE]) !== -1) {
					return;
				} else if (this.readyState === FileReader.LOADING) {
					this.readyState = FileReader.DONE;
				}

				if (_fr) {
					_fr.getRuntime().exec.call(this, 'FileReader', 'abort');
				}
				
				this.trigger('abort');
				this.trigger('loadend');
			},

			/**
			Destroy component and release resources.

			@method destroy
			*/
			destroy: function() {
				this.abort();

				if (_fr) {
					_fr.getRuntime().exec.call(this, 'FileReader', 'destroy');
					_fr.disconnectRuntime();
				}

				self = _fr = null;
			}
		});
		
		
		function _read(op, blob) {
			_fr = new RuntimeTarget();

			function error(err) {
				self.readyState = FileReader.DONE;
				self.error = err;
				self.trigger('error');
				loadEnd();
			}

			function loadEnd() {
				_fr.destroy();
				_fr = null;
				self.trigger('loadend');
			}

			function exec(runtime) {
				_fr.bind('Error', function(e, err) {
					error(err);
				});

				_fr.bind('Progress', function(e) {
					self.result = runtime.exec.call(_fr, 'FileReader', 'getResult');
					self.trigger(e);
				});
				
				_fr.bind('Load', function(e) {
					self.readyState = FileReader.DONE;
					self.result = runtime.exec.call(_fr, 'FileReader', 'getResult');
					self.trigger(e);
					loadEnd();
				});

				runtime.exec.call(_fr, 'FileReader', 'read', op, blob);
			}

			this.convertEventPropsToHandlers(dispatches);

			if (this.readyState === FileReader.LOADING) {
				return error(new x.DOMException(x.DOMException.INVALID_STATE_ERR));
			}

			this.readyState = FileReader.LOADING;
			this.trigger('loadstart');

			// if source is o.Blob/o.File
			if (blob instanceof Blob) {
				if (blob.isDetached()) {
					var src = blob.getSource();
					switch (op) {
						case 'readAsText':
						case 'readAsBinaryString':
							this.result = src;
							break;
						case 'readAsDataURL':
							this.result = 'data:' + blob.type + ';base64,' + Encode.btoa(src);
							break;
					}
					this.readyState = FileReader.DONE;
					this.trigger('load');
					loadEnd();
				} else {
					exec(_fr.connectRuntime(blob.ruid));
				}
			} else {
				error(new x.DOMException(x.DOMException.NOT_FOUND_ERR));
			}
		}
	}
	
	/**
	Initial FileReader state

	@property EMPTY
	@type {Number}
	@final
	@static
	@default 0
	*/
	FileReader.EMPTY = 0;

	/**
	FileReader switches to this state when it is preloading the source

	@property LOADING
	@type {Number}
	@final
	@static
	@default 1
	*/
	FileReader.LOADING = 1;

	/**
	Preloading is complete, this is a final state

	@property DONE
	@type {Number}
	@final
	@static
	@default 2
	*/
	FileReader.DONE = 2;

	FileReader.prototype = EventTarget.instance;

	return FileReader;
});

// Included from: src/javascript/core/utils/Url.js

/**
 * Url.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Url', [], function() {
	/**
	Parse url into separate components and fill in absent parts with parts from current url,
	based on https://raw.github.com/kvz/phpjs/master/functions/url/parse_url.js

	@method parseUrl
	@for Utils
	@static
	@param {String} url Url to parse (defaults to empty string if undefined)
	@return {Object} Hash containing extracted uri components
	*/
	var parseUrl = function(url, currentUrl) {
		var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment']
		, i = key.length
		, ports = {
			http: 80,
			https: 443
		}
		, uri = {}
		, regex = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/
		, m = regex.exec(url || '')
		;
					
		while (i--) {
			if (m[i]) {
				uri[key[i]] = m[i];
			}
		}

		// when url is relative, we set the origin and the path ourselves
		if (!uri.scheme) {
			// come up with defaults
			if (!currentUrl || typeof(currentUrl) === 'string') {
				currentUrl = parseUrl(currentUrl || document.location.href);
			}

			uri.scheme = currentUrl.scheme;
			uri.host = currentUrl.host;
			uri.port = currentUrl.port;

			var path = '';
			// for urls without trailing slash we need to figure out the path
			if (/^[^\/]/.test(uri.path)) {
				path = currentUrl.path;
				// if path ends with a filename, strip it
				if (!/(\/|\/[^\.]+)$/.test(path)) {
					path = path.replace(/\/[^\/]+$/, '/');
				} else {
					path += '/';
				}
			}
			uri.path = path + (uri.path || ''); // site may reside at domain.com or domain.com/subdir
		}

		if (!uri.port) {
			uri.port = ports[uri.scheme] || 80;
		} 
		
		uri.port = parseInt(uri.port, 10);

		if (!uri.path) {
			uri.path = "/";
		}

		delete uri.source;

		return uri;
	};

	/**
	Resolve url - among other things will turn relative url to absolute

	@method resolveUrl
	@static
	@param {String} url Either absolute or relative
	@return {String} Resolved, absolute url
	*/
	var resolveUrl = function(url) {
		var ports = { // we ignore default ports
			http: 80,
			https: 443
		}
		, urlp = parseUrl(url)
		;

		return urlp.scheme + '://' + urlp.host + (urlp.port !== ports[urlp.scheme] ? ':' + urlp.port : '') + urlp.path + (urlp.query ? urlp.query : '');
	};

	/**
	Check if specified url has the same origin as the current document

	@method hasSameOrigin
	@param {String|Object} url
	@return {Boolean}
	*/
	var hasSameOrigin = function(url) {
		function origin(url) {
			return [url.scheme, url.host, url.port].join('/');
		}
			
		if (typeof url === 'string') {
			url = parseUrl(url);
		}	
		
		return origin(parseUrl()) === origin(url);
	};

	return {
		parseUrl: parseUrl,
		resolveUrl: resolveUrl,
		hasSameOrigin: hasSameOrigin
	};
});

// Included from: src/javascript/file/FileReaderSync.js

/**
 * FileReaderSync.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/file/FileReaderSync', [
	'moxie/core/utils/Basic',
	'moxie/runtime/RuntimeClient',
	'moxie/core/utils/Encode'
], function(Basic, RuntimeClient, Encode) {
	/**
	Synchronous FileReader implementation. Something like this is available in WebWorkers environment, here
	it can be used to read only preloaded blobs/files and only below certain size (not yet sure what that'd be,
	but probably < 1mb). Not meant to be used directly by user.

	@class FileReaderSync
	@private
	@constructor
	*/
	return function() {
		RuntimeClient.call(this);

		Basic.extend(this, {
			uid: Basic.guid('uid_'),

			readAsBinaryString: function(blob) {
				return _read.call(this, 'readAsBinaryString', blob);
			},
			
			readAsDataURL: function(blob) {
				return _read.call(this, 'readAsDataURL', blob);
			},
			
			/*readAsArrayBuffer: function(blob) {
				return _read.call(this, 'readAsArrayBuffer', blob);
			},*/
			
			readAsText: function(blob) {
				return _read.call(this, 'readAsText', blob);
			}
		});

		function _read(op, blob) {
			if (blob.isDetached()) {
				var src = blob.getSource();
				switch (op) {
					case 'readAsBinaryString':
						return src;
					case 'readAsDataURL':
						return 'data:' + blob.type + ';base64,' + Encode.btoa(src);
					case 'readAsText':
						var txt = '';
						for (var i = 0, length = src.length; i < length; i++) {
							txt += String.fromCharCode(src[i]);
						}
						return txt;
				}
			} else {
				var result = this.connectRuntime(blob.ruid).exec.call(this, 'FileReaderSync', 'read', op, blob);
				this.disconnectRuntime();
				return result;
			}
		}
	};
});

// Included from: src/javascript/xhr/FormData.js

/**
 * FormData.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/xhr/FormData", [
	"moxie/core/Exceptions",
	"moxie/core/utils/Basic",
	"moxie/file/Blob"
], function(x, Basic, Blob) {
	/**
	FormData

	@class FormData
	@constructor
	*/
	function FormData() {
		var _blob, _fields = [];

		Basic.extend(this, {
			/**
			Append another key-value pair to the FormData object

			@method append
			@param {String} name Name for the new field
			@param {String|Blob|Array|Object} value Value for the field
			*/
			append: function(name, value) {
				var self = this, valueType = Basic.typeOf(value);

				// according to specs value might be either Blob or String
				if (value instanceof Blob) {
					_blob = {
						name: name,
						value: value // unfortunately we can only send single Blob in one FormData
					};
				} else if ('array' === valueType) {
					name += '[]';

					Basic.each(value, function(value) {
						self.append(name, value);
					});
				} else if ('object' === valueType) {
					Basic.each(value, function(value, key) {
						self.append(name + '[' + key + ']', value);
					});
				} else if ('null' === valueType || 'undefined' === valueType || 'number' === valueType && isNaN(value)) {
					self.append(name, "false");
				} else {
					_fields.push({
						name: name,
						value: value.toString()
					});
				}
			},

			/**
			Checks if FormData contains Blob.

			@method hasBlob
			@return {Boolean}
			*/
			hasBlob: function() {
				return !!this.getBlob();
			},

			/**
			Retrieves blob.

			@method getBlob
			@return {Object} Either Blob if found or null
			*/
			getBlob: function() {
				return _blob && _blob.value || null;
			},

			/**
			Retrieves blob field name.

			@method getBlobName
			@return {String} Either Blob field name or null
			*/
			getBlobName: function() {
				return _blob && _blob.name || null;
			},

			/**
			Loop over the fields in FormData and invoke the callback for each of them.

			@method each
			@param {Function} cb Callback to call for each field
			*/
			each: function(cb) {
				Basic.each(_fields, function(field) {
					cb(field.value, field.name);
				});

				if (_blob) {
					cb(_blob.value, _blob.name);
				}
			},

			destroy: function() {
				_blob = null;
				_fields = [];
			}
		});
	}

	return FormData;
});

// Included from: src/javascript/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/xhr/XMLHttpRequest", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/core/EventTarget",
	"moxie/core/utils/Encode",
	"moxie/core/utils/Url",
	"moxie/runtime/Runtime",
	"moxie/runtime/RuntimeTarget",
	"moxie/file/Blob",
	"moxie/file/FileReaderSync",
	"moxie/xhr/FormData",
	"moxie/core/utils/Env",
	"moxie/core/utils/Mime"
], function(Basic, x, EventTarget, Encode, Url, Runtime, RuntimeTarget, Blob, FileReaderSync, FormData, Env, Mime) {

	var httpCode = {
		100: 'Continue',
		101: 'Switching Protocols',
		102: 'Processing',

		200: 'OK',
		201: 'Created',
		202: 'Accepted',
		203: 'Non-Authoritative Information',
		204: 'No Content',
		205: 'Reset Content',
		206: 'Partial Content',
		207: 'Multi-Status',
		226: 'IM Used',

		300: 'Multiple Choices',
		301: 'Moved Permanently',
		302: 'Found',
		303: 'See Other',
		304: 'Not Modified',
		305: 'Use Proxy',
		306: 'Reserved',
		307: 'Temporary Redirect',

		400: 'Bad Request',
		401: 'Unauthorized',
		402: 'Payment Required',
		403: 'Forbidden',
		404: 'Not Found',
		405: 'Method Not Allowed',
		406: 'Not Acceptable',
		407: 'Proxy Authentication Required',
		408: 'Request Timeout',
		409: 'Conflict',
		410: 'Gone',
		411: 'Length Required',
		412: 'Precondition Failed',
		413: 'Request Entity Too Large',
		414: 'Request-URI Too Long',
		415: 'Unsupported Media Type',
		416: 'Requested Range Not Satisfiable',
		417: 'Expectation Failed',
		422: 'Unprocessable Entity',
		423: 'Locked',
		424: 'Failed Dependency',
		426: 'Upgrade Required',

		500: 'Internal Server Error',
		501: 'Not Implemented',
		502: 'Bad Gateway',
		503: 'Service Unavailable',
		504: 'Gateway Timeout',
		505: 'HTTP Version Not Supported',
		506: 'Variant Also Negotiates',
		507: 'Insufficient Storage',
		510: 'Not Extended'
	};

	function XMLHttpRequestUpload() {
		this.uid = Basic.guid('uid_');
	}
	
	XMLHttpRequestUpload.prototype = EventTarget.instance;

	/**
	Implementation of XMLHttpRequest

	@class XMLHttpRequest
	@constructor
	@uses RuntimeClient
	@extends EventTarget
	*/
	var dispatches = ['loadstart', 'progress', 'abort', 'error', 'load', 'timeout', 'loadend']; // & readystatechange (for historical reasons)
	
	var NATIVE = 1, RUNTIME = 2;
					
	function XMLHttpRequest() {
		var self = this,
			// this (together with _p() @see below) is here to gracefully upgrade to setter/getter syntax where possible
			props = {
				/**
				The amount of milliseconds a request can take before being terminated. Initially zero. Zero means there is no timeout.

				@property timeout
				@type Number
				@default 0
				*/
				timeout: 0,

				/**
				Current state, can take following values:
				UNSENT (numeric value 0)
				The object has been constructed.

				OPENED (numeric value 1)
				The open() method has been successfully invoked. During this state request headers can be set using setRequestHeader() and the request can be made using the send() method.

				HEADERS_RECEIVED (numeric value 2)
				All redirects (if any) have been followed and all HTTP headers of the final response have been received. Several response members of the object are now available.

				LOADING (numeric value 3)
				The response entity body is being received.

				DONE (numeric value 4)

				@property readyState
				@type Number
				@default 0 (UNSENT)
				*/
				readyState: XMLHttpRequest.UNSENT,

				/**
				True when user credentials are to be included in a cross-origin request. False when they are to be excluded
				in a cross-origin request and when cookies are to be ignored in its response. Initially false.

				@property withCredentials
				@type Boolean
				@default false
				*/
				withCredentials: false,

				/**
				Returns the HTTP status code.

				@property status
				@type Number
				@default 0
				*/
				status: 0,

				/**
				Returns the HTTP status text.

				@property statusText
				@type String
				*/
				statusText: "",

				/**
				Returns the response type. Can be set to change the response type. Values are:
				the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
				
				@property responseType
				@type String
				*/
				responseType: "",

				/**
				Returns the document response entity body.
				
				Throws an "InvalidStateError" exception if responseType is not the empty string or "document".

				@property responseXML
				@type Document
				*/
				responseXML: null,

				/**
				Returns the text response entity body.
				
				Throws an "InvalidStateError" exception if responseType is not the empty string or "text".

				@property responseText
				@type String
				*/
				responseText: null,

				/**
				Returns the response entity body (http://www.w3.org/TR/XMLHttpRequest/#response-entity-body).
				Can become: ArrayBuffer, Blob, Document, JSON, Text
				
				@property response
				@type Mixed
				*/
				response: null
			},

			_async = true,
			_url,
			_method,
			_headers = {},
			_user,
			_password,
			_encoding = null,
			_mimeType = null,

			// flags
			_sync_flag = false,
			_send_flag = false,
			_upload_events_flag = false,
			_upload_complete_flag = false,
			_error_flag = false,
			_same_origin_flag = false,

			// times
			_start_time,
			_timeoutset_time,

			_finalMime = null,
			_finalCharset = null,

			_options = {},
			_xhr,
			_responseHeaders = '',
			_responseHeadersBag
			;

		
		Basic.extend(this, props, {
			/**
			Unique id of the component

			@property uid
			@type String
			*/
			uid: Basic.guid('uid_'),
			
			/**
			Target for Upload events

			@property upload
			@type XMLHttpRequestUpload
			*/
			upload: new XMLHttpRequestUpload(),
			

			/**
			Sets the request method, request URL, synchronous flag, request username, and request password.

			Throws a "SyntaxError" exception if one of the following is true:

			method is not a valid HTTP method.
			url cannot be resolved.
			url contains the "user:password" format in the userinfo production.
			Throws a "SecurityError" exception if method is a case-insensitive match for CONNECT, TRACE or TRACK.

			Throws an "InvalidAccessError" exception if one of the following is true:

			Either user or password is passed as argument and the origin of url does not match the XMLHttpRequest origin.
			There is an associated XMLHttpRequest document and either the timeout attribute is not zero,
			the withCredentials attribute is true, or the responseType attribute is not the empty string.


			@method open
			@param {String} method HTTP method to use on request
			@param {String} url URL to request
			@param {Boolean} [async=true] If false request will be done in synchronous manner. Asynchronous by default.
			@param {String} [user] Username to use in HTTP authentication process on server-side
			@param {String} [password] Password to use in HTTP authentication process on server-side
			*/
			open: function(method, url, async, user, password) {
				var urlp;
				
				// first two arguments are required
				if (!method || !url) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}
				
				// 2 - check if any code point in method is higher than U+00FF or after deflating method it does not match the method
				if (/[\u0100-\uffff]/.test(method) || Encode.utf8_encode(method) !== method) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}

				// 3
				if (!!~Basic.inArray(method.toUpperCase(), ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'TRACE', 'TRACK'])) {
					_method = method.toUpperCase();
				}
				
				
				// 4 - allowing these methods poses a security risk
				if (!!~Basic.inArray(_method, ['CONNECT', 'TRACE', 'TRACK'])) {
					throw new x.DOMException(x.DOMException.SECURITY_ERR);
				}

				// 5
				url = Encode.utf8_encode(url);
				
				// 6 - Resolve url relative to the XMLHttpRequest base URL. If the algorithm returns an error, throw a "SyntaxError".
				urlp = Url.parseUrl(url);

				_same_origin_flag = Url.hasSameOrigin(urlp);
																
				// 7 - manually build up absolute url
				_url = Url.resolveUrl(url);
		
				// 9-10, 12-13
				if ((user || password) && !_same_origin_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				_user = user || urlp.user;
				_password = password || urlp.pass;
				
				// 11
				_async = async || true;
				
				if (_async === false && (_p('timeout') || _p('withCredentials') || _p('responseType') !== "")) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}
				
				// 14 - terminate abort()
				
				// 15 - terminate send()

				// 18
				_sync_flag = !_async;
				_send_flag = false;
				_headers = {};
				_reset.call(this);

				// 19
				_p('readyState', XMLHttpRequest.OPENED);
				
				// 20
				this.convertEventPropsToHandlers(['readystatechange']); // unify event handlers
				this.dispatchEvent('readystatechange');
			},
			
			/**
			Appends an header to the list of author request headers, or if header is already
			in the list of author request headers, combines its value with value.

			Throws an "InvalidStateError" exception if the state is not OPENED or if the send() flag is set.
			Throws a "SyntaxError" exception if header is not a valid HTTP header field name or if value
			is not a valid HTTP header field value.
			
			@method setRequestHeader
			@param {String} header
			@param {String|Number} value
			*/
			setRequestHeader: function(header, value) {
				var uaHeaders = [ // these headers are controlled by the user agent
						"accept-charset",
						"accept-encoding",
						"access-control-request-headers",
						"access-control-request-method",
						"connection",
						"content-length",
						"cookie",
						"cookie2",
						"content-transfer-encoding",
						"date",
						"expect",
						"host",
						"keep-alive",
						"origin",
						"referer",
						"te",
						"trailer",
						"transfer-encoding",
						"upgrade",
						"user-agent",
						"via"
					];
				
				// 1-2
				if (_p('readyState') !== XMLHttpRequest.OPENED || _send_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 3
				if (/[\u0100-\uffff]/.test(header) || Encode.utf8_encode(header) !== header) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}

				// 4
				/* this step is seemingly bypassed in browsers, probably to allow various unicode characters in header values
				if (/[\u0100-\uffff]/.test(value) || Encode.utf8_encode(value) !== value) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}*/

				header = Basic.trim(header).toLowerCase();
				
				// setting of proxy-* and sec-* headers is prohibited by spec
				if (!!~Basic.inArray(header, uaHeaders) || /^(proxy\-|sec\-)/.test(header)) {
					return false;
				}

				// camelize
				// browsers lowercase header names (at least for custom ones)
				// header = header.replace(/\b\w/g, function($1) { return $1.toUpperCase(); });
				
				if (!_headers[header]) {
					_headers[header] = value;
				} else {
					// http://tools.ietf.org/html/rfc2616#section-4.2 (last paragraph)
					_headers[header] += ', ' + value;
				}
				return true;
			},

			/**
			Returns all headers from the response, with the exception of those whose field name is Set-Cookie or Set-Cookie2.

			@method getAllResponseHeaders
			@return {String} reponse headers or empty string
			*/
			getAllResponseHeaders: function() {
				return _responseHeaders || '';
			},

			/**
			Returns the header field value from the response of which the field name matches header, 
			unless the field name is Set-Cookie or Set-Cookie2.

			@method getResponseHeader
			@param {String} header
			@return {String} value(s) for the specified header or null
			*/
			getResponseHeader: function(header) {
				header = header.toLowerCase();

				if (_error_flag || !!~Basic.inArray(header, ['set-cookie', 'set-cookie2'])) {
					return null;
				}

				if (_responseHeaders && _responseHeaders !== '') {
					// if we didn't parse response headers until now, do it and keep for later
					if (!_responseHeadersBag) {
						_responseHeadersBag = {};
						Basic.each(_responseHeaders.split(/\r\n/), function(line) {
							var pair = line.split(/:\s+/);
							if (pair.length === 2) { // last line might be empty, omit
								pair[0] = Basic.trim(pair[0]); // just in case
								_responseHeadersBag[pair[0].toLowerCase()] = { // simply to retain header name in original form
									header: pair[0],
									value: Basic.trim(pair[1])
								};
							}
						});
					}
					if (_responseHeadersBag.hasOwnProperty(header)) {
						return _responseHeadersBag[header].header + ': ' + _responseHeadersBag[header].value;
					}
				}
				return null;
			},
			
			/**
			Sets the Content-Type header for the response to mime.
			Throws an "InvalidStateError" exception if the state is LOADING or DONE.
			Throws a "SyntaxError" exception if mime is not a valid media type.

			@method overrideMimeType
			@param String mime Mime type to set
			*/
			overrideMimeType: function(mime) {
				var matches, charset;
			
				// 1
				if (!!~Basic.inArray(_p('readyState'), [XMLHttpRequest.LOADING, XMLHttpRequest.DONE])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2
				mime = Basic.trim(mime.toLowerCase());

				if (/;/.test(mime) && (matches = mime.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))) {
					mime = matches[1];
					if (matches[2]) {
						charset = matches[2];
					}
				}

				if (!Mime.mimes[mime]) {
					throw new x.DOMException(x.DOMException.SYNTAX_ERR);
				}

				// 3-4
				_finalMime = mime;
				_finalCharset = charset;
			},
			
			/**
			Initiates the request. The optional argument provides the request entity body.
			The argument is ignored if request method is GET or HEAD.

			Throws an "InvalidStateError" exception if the state is not OPENED or if the send() flag is set.

			@method send
			@param {Blob|Document|String|FormData} [data] Request entity body
			@param {Object} [options] Set of requirements and pre-requisities for runtime initialization
			*/
			send: function(data, options) {					
				if (Basic.typeOf(options) === 'string') {
					_options = { ruid: options };
				} else if (!options) {
					_options = {};
				} else {
					_options = options;
				}
													
				this.convertEventPropsToHandlers(dispatches);
				this.upload.convertEventPropsToHandlers(dispatches);
															
				// 1-2
				if (this.readyState !== XMLHttpRequest.OPENED || _send_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}
				
				// 3					
				// sending Blob
				if (data instanceof Blob) {
					_options.ruid = data.ruid;
					_mimeType = data.type || 'application/octet-stream';
				}
				
				// FormData
				else if (data instanceof FormData) {
					if (data.hasBlob()) {
						var blob = data.getBlob();
						_options.ruid = blob.ruid;
						_mimeType = blob.type || 'application/octet-stream';
					}
				}
				
				// DOMString
				else if (typeof data === 'string') {
					_encoding = 'UTF-8';
					_mimeType = 'text/plain;charset=UTF-8';
					
					// data should be converted to Unicode and encoded as UTF-8
					data = Encode.utf8_encode(data);
				}

				// if withCredentials not set, but requested, set it automatically
				if (!this.withCredentials) {
					this.withCredentials = (_options.required_caps && _options.required_caps.send_browser_cookies) && !_same_origin_flag;
				}

				// 4 - storage mutex
				// 5
				_upload_events_flag = (!_sync_flag && this.upload.hasEventListener()); // DSAP
				// 6
				_error_flag = false;
				// 7
				_upload_complete_flag = !data;
				// 8 - Asynchronous steps
				if (!_sync_flag) {
					// 8.1
					_send_flag = true;
					// 8.2
					// this.dispatchEvent('loadstart'); // will be dispatched either by native or runtime xhr
					// 8.3
					//if (!_upload_complete_flag) {
						// this.upload.dispatchEvent('loadstart');	// will be dispatched either by native or runtime xhr
					//}
				}
				// 8.5 - Return the send() method call, but continue running the steps in this algorithm.
				_doXHR.call(this, data);
			},
			
			/**
			Cancels any network activity.
			
			@method abort
			*/
			abort: function() {
				_error_flag = true;
				_sync_flag = false;

				if (!~Basic.inArray(_p('readyState'), [XMLHttpRequest.UNSENT, XMLHttpRequest.OPENED, XMLHttpRequest.DONE])) {
					_p('readyState', XMLHttpRequest.DONE);
					_send_flag = false;

					if (_xhr) {
						_xhr.getRuntime().exec.call(_xhr, 'XMLHttpRequest', 'abort', _upload_complete_flag);
					} else {
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}

					_upload_complete_flag = true;
				} else {
					_p('readyState', XMLHttpRequest.UNSENT);
				}
			},

			destroy: function() {
				if (_xhr) {
					if (Basic.typeOf(_xhr.destroy) === 'function') {
						_xhr.destroy();
					}
					_xhr = null;
				}

				this.unbindAll();

				if (this.upload) {
					this.upload.unbindAll();
					this.upload = null;
				}
			}
		});

		/* this is nice, but maybe too lengthy

		// if supported by JS version, set getters/setters for specific properties
		o.defineProperty(this, 'readyState', {
			configurable: false,

			get: function() {
				return _p('readyState');
			}
		});

		o.defineProperty(this, 'timeout', {
			configurable: false,

			get: function() {
				return _p('timeout');
			},

			set: function(value) {

				if (_sync_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				// timeout still should be measured relative to the start time of request
				_timeoutset_time = (new Date).getTime();

				_p('timeout', value);
			}
		});

		// the withCredentials attribute has no effect when fetching same-origin resources
		o.defineProperty(this, 'withCredentials', {
			configurable: false,

			get: function() {
				return _p('withCredentials');
			},

			set: function(value) {
				// 1-2
				if (!~o.inArray(_p('readyState'), [XMLHttpRequest.UNSENT, XMLHttpRequest.OPENED]) || _send_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 3-4
				if (_anonymous_flag || _sync_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				// 5
				_p('withCredentials', value);
			}
		});

		o.defineProperty(this, 'status', {
			configurable: false,

			get: function() {
				return _p('status');
			}
		});

		o.defineProperty(this, 'statusText', {
			configurable: false,

			get: function() {
				return _p('statusText');
			}
		});

		o.defineProperty(this, 'responseType', {
			configurable: false,

			get: function() {
				return _p('responseType');
			},

			set: function(value) {
				// 1
				if (!!~o.inArray(_p('readyState'), [XMLHttpRequest.LOADING, XMLHttpRequest.DONE])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2
				if (_sync_flag) {
					throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
				}

				// 3
				_p('responseType', value.toLowerCase());
			}
		});

		o.defineProperty(this, 'responseText', {
			configurable: false,

			get: function() {
				// 1
				if (!~o.inArray(_p('responseType'), ['', 'text'])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2-3
				if (_p('readyState') !== XMLHttpRequest.DONE && _p('readyState') !== XMLHttpRequest.LOADING || _error_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				return _p('responseText');
			}
		});

		o.defineProperty(this, 'responseXML', {
			configurable: false,

			get: function() {
				// 1
				if (!~o.inArray(_p('responseType'), ['', 'document'])) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				// 2-3
				if (_p('readyState') !== XMLHttpRequest.DONE || _error_flag) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				return _p('responseXML');
			}
		});

		o.defineProperty(this, 'response', {
			configurable: false,

			get: function() {
				if (!!~o.inArray(_p('responseType'), ['', 'text'])) {
					if (_p('readyState') !== XMLHttpRequest.DONE && _p('readyState') !== XMLHttpRequest.LOADING || _error_flag) {
						return '';
					}
				}

				if (_p('readyState') !== XMLHttpRequest.DONE || _error_flag) {
					return null;
				}

				return _p('response');
			}
		});

		*/

		function _p(prop, value) {
			if (!props.hasOwnProperty(prop)) {
				return;
			}
			if (arguments.length === 1) { // get
				return Env.can('define_property') ? props[prop] : self[prop];
			} else { // set
				if (Env.can('define_property')) {
					props[prop] = value;
				} else {
					self[prop] = value;
				}
			}
		}
		
		/*
		function _toASCII(str, AllowUnassigned, UseSTD3ASCIIRules) {
			// TODO: http://tools.ietf.org/html/rfc3490#section-4.1
			return str.toLowerCase();
		}
		*/
		
		
		function _doXHR(data) {
			var self = this;
			
			_start_time = new Date().getTime();

			_xhr = new RuntimeTarget();

			function loadEnd() {
				_xhr.destroy();
				_xhr = null;
				self.dispatchEvent('loadend');
				self = null;
			}

			function exec(runtime) {
				_xhr.bind('LoadStart', function(e) {
					_p('readyState', XMLHttpRequest.LOADING);
					self.dispatchEvent('readystatechange');

					self.dispatchEvent(e);
					
					if (_upload_events_flag) {
						self.upload.dispatchEvent(e);
					}
				});
				
				_xhr.bind('Progress', function(e) {
					if (_p('readyState') !== XMLHttpRequest.LOADING) {
						_p('readyState', XMLHttpRequest.LOADING); // LoadStart unreliable (in Flash for example)
						self.dispatchEvent('readystatechange');
					}
					self.dispatchEvent(e);
				});
				
				_xhr.bind('UploadProgress', function(e) {
					if (_upload_events_flag) {
						self.upload.dispatchEvent({
							type: 'progress',
							lengthComputable: false,
							total: e.total,
							loaded: e.loaded
						});
					}
				});
				
				_xhr.bind('Load', function(e) {
					_p('readyState', XMLHttpRequest.DONE);
					_p('status', Number(runtime.exec.call(_xhr, 'XMLHttpRequest', 'getStatus') || 0));
					_p('statusText', httpCode[_p('status')] || "");
					
					_p('response', runtime.exec.call(_xhr, 'XMLHttpRequest', 'getResponse', _p('responseType')));

					if (!!~Basic.inArray(_p('responseType'), ['text', ''])) {
						_p('responseText', _p('response'));
					} else if (_p('responseType') === 'document') {
						_p('responseXML', _p('response'));
					}

					_responseHeaders = runtime.exec.call(_xhr, 'XMLHttpRequest', 'getAllResponseHeaders');

					self.dispatchEvent('readystatechange');
					
					if (_p('status') > 0) { // status 0 usually means that server is unreachable
						if (_upload_events_flag) {
							self.upload.dispatchEvent(e);
						}
						self.dispatchEvent(e);
					} else {
						_error_flag = true;
						self.dispatchEvent('error');
					}
					loadEnd();
				});

				_xhr.bind('Abort', function(e) {
					self.dispatchEvent(e);
					loadEnd();
				});
				
				_xhr.bind('Error', function(e) {
					_error_flag = true;
					_p('readyState', XMLHttpRequest.DONE);
					self.dispatchEvent('readystatechange');
					_upload_complete_flag = true;
					self.dispatchEvent(e);
					loadEnd();
				});

				runtime.exec.call(_xhr, 'XMLHttpRequest', 'send', {
					url: _url,
					method: _method,
					async: _async,
					user: _user,
					password: _password,
					headers: _headers,
					mimeType: _mimeType,
					encoding: _encoding,
					responseType: self.responseType,
					withCredentials: self.withCredentials,
					options: _options
				}, data);
			}

			// clarify our requirements
			if (typeof(_options.required_caps) === 'string') {
				_options.required_caps = Runtime.parseCaps(_options.required_caps);
			}

			_options.required_caps = Basic.extend({}, _options.required_caps, {
				return_response_type: self.responseType
			});

			if (data instanceof FormData) {
				_options.required_caps.send_multipart = true;
			}

			if (!_same_origin_flag) {
				_options.required_caps.do_cors = true;
			}
			

			if (_options.ruid) { // we do not need to wait if we can connect directly
				exec(_xhr.connectRuntime(_options));
			} else {
				_xhr.bind('RuntimeInit', function(e, runtime) {
					exec(runtime);
				});
				_xhr.bind('RuntimeError', function(e, err) {
					self.dispatchEvent('RuntimeError', err);
				});
				_xhr.connectRuntime(_options);
			}
		}
	
		
		function _reset() {
			_p('responseText', "");
			_p('responseXML', null);
			_p('response', null);
			_p('status', 0);
			_p('statusText', "");
			_start_time = _timeoutset_time = null;
		}
	}

	XMLHttpRequest.UNSENT = 0;
	XMLHttpRequest.OPENED = 1;
	XMLHttpRequest.HEADERS_RECEIVED = 2;
	XMLHttpRequest.LOADING = 3;
	XMLHttpRequest.DONE = 4;
	
	XMLHttpRequest.prototype = EventTarget.instance;

	return XMLHttpRequest;
});

// Included from: src/javascript/runtime/Transporter.js

/**
 * Transporter.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/runtime/Transporter", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Encode",
	"moxie/runtime/RuntimeClient",
	"moxie/core/EventTarget"
], function(Basic, Encode, RuntimeClient, EventTarget) {
	function Transporter() {
		var mod, _runtime, _data, _size, _pos, _chunk_size;

		RuntimeClient.call(this);

		Basic.extend(this, {
			uid: Basic.guid('uid_'),

			state: Transporter.IDLE,

			result: null,

			transport: function(data, type, options) {
				var self = this;

				options = Basic.extend({
					chunk_size: 204798
				}, options);

				// should divide by three, base64 requires this
				if ((mod = options.chunk_size % 3)) {
					options.chunk_size += 3 - mod;
				}

				_chunk_size = options.chunk_size;

				_reset.call(this);
				_data = data;
				_size = data.length;

				if (Basic.typeOf(options) === 'string' || options.ruid) {
					_run.call(self, type, this.connectRuntime(options));
				} else {
					// we require this to run only once
					var cb = function(e, runtime) {
						self.unbind("RuntimeInit", cb);
						_run.call(self, type, runtime);
					};
					this.bind("RuntimeInit", cb);
					this.connectRuntime(options);
				}
			},

			abort: function() {
				var self = this;

				self.state = Transporter.IDLE;
				if (_runtime) {
					_runtime.exec.call(self, 'Transporter', 'clear');
					self.trigger("TransportingAborted");
				}

				_reset.call(self);
			},


			destroy: function() {
				this.unbindAll();
				_runtime = null;
				this.disconnectRuntime();
				_reset.call(this);
			}
		});

		function _reset() {
			_size = _pos = 0;
			_data = this.result = null;
		}

		function _run(type, runtime) {
			var self = this;

			_runtime = runtime;

			//self.unbind("RuntimeInit");

			self.bind("TransportingProgress", function(e) {
				_pos = e.loaded;

				if (_pos < _size && Basic.inArray(self.state, [Transporter.IDLE, Transporter.DONE]) === -1) {
					_transport.call(self);
				}
			}, 999);

			self.bind("TransportingComplete", function() {
				_pos = _size;
				self.state = Transporter.DONE;
				_data = null; // clean a bit
				self.result = _runtime.exec.call(self, 'Transporter', 'getAsBlob', type || '');
			}, 999);

			self.state = Transporter.BUSY;
			self.trigger("TransportingStarted");
			_transport.call(self);
		}

		function _transport() {
			var self = this,
				chunk,
				bytesLeft = _size - _pos;

			if (_chunk_size > bytesLeft) {
				_chunk_size = bytesLeft;
			}

			chunk = Encode.btoa(_data.substr(_pos, _chunk_size));
			_runtime.exec.call(self, 'Transporter', 'receive', chunk, _size);
		}
	}

	Transporter.IDLE = 0;
	Transporter.BUSY = 1;
	Transporter.DONE = 2;

	Transporter.prototype = EventTarget.instance;

	return Transporter;
});

// Included from: src/javascript/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define("moxie/image/Image", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/Exceptions",
	"moxie/file/FileReaderSync",
	"moxie/xhr/XMLHttpRequest",
	"moxie/runtime/Runtime",
	"moxie/runtime/RuntimeClient",
	"moxie/runtime/Transporter",
	"moxie/core/utils/Env",
	"moxie/core/EventTarget",
	"moxie/file/Blob",
	"moxie/file/File",
	"moxie/core/utils/Encode"
], function(Basic, Dom, x, FileReaderSync, XMLHttpRequest, Runtime, RuntimeClient, Transporter, Env, EventTarget, Blob, File, Encode) {
	/**
	Image preloading and manipulation utility. Additionally it provides access to image meta info (Exif, GPS) and raw binary data.

	@class Image
	@constructor
	@extends EventTarget
	*/
	var dispatches = [
		'progress',

		/**
		Dispatched when loading is complete.

		@event load
		@param {Object} event
		*/
		'load',

		'error',

		/**
		Dispatched when resize operation is complete.
		
		@event resize
		@param {Object} event
		*/
		'resize',

		/**
		Dispatched when visual representation of the image is successfully embedded
		into the corresponsing container.

		@event embedded
		@param {Object} event
		*/
		'embedded'
	];

	function Image() {
		RuntimeClient.call(this);

		Basic.extend(this, {
			/**
			Unique id of the component

			@property uid
			@type {String}
			*/
			uid: Basic.guid('uid_'),

			/**
			Unique id of the connected runtime, if any.

			@property ruid
			@type {String}
			*/
			ruid: null,

			/**
			Name of the file, that was used to create an image, if available. If not equals to empty string.

			@property name
			@type {String}
			@default ""
			*/
			name: "",

			/**
			Size of the image in bytes. Actual value is set only after image is preloaded.

			@property size
			@type {Number}
			@default 0
			*/
			size: 0,

			/**
			Width of the image. Actual value is set only after image is preloaded.

			@property width
			@type {Number}
			@default 0
			*/
			width: 0,

			/**
			Height of the image. Actual value is set only after image is preloaded.

			@property height
			@type {Number}
			@default 0
			*/
			height: 0,

			/**
			Mime type of the image. Currently only image/jpeg and image/png are supported. Actual value is set only after image is preloaded.

			@property type
			@type {String}
			@default ""
			*/
			type: "",

			/**
			Holds meta info (Exif, GPS). Is populated only for image/jpeg. Actual value is set only after image is preloaded.

			@property meta
			@type {Object}
			@default {}
			*/
			meta: {},

			/**
			Alias for load method, that takes another mOxie.Image object as a source (see load).

			@method clone
			@param {Image} src Source for the image
			@param {Boolean} [exact=false] Whether to activate in-depth clone mode
			*/
			clone: function() {
				this.load.apply(this, arguments);
			},

			/**
			Loads image from various sources. Currently the source for new image can be: mOxie.Image, mOxie.Blob/mOxie.File, 
			native Blob/File, dataUrl or URL. Depending on the type of the source, arguments - differ. When source is URL, 
			Image will be downloaded from remote destination and loaded in memory.

			@example
				var img = new mOxie.Image();
				img.onload = function() {
					var blob = img.getAsBlob();
					
					var formData = new mOxie.FormData();
					formData.append('file', blob);

					var xhr = new mOxie.XMLHttpRequest();
					xhr.onload = function() {
						// upload complete
					};
					xhr.open('post', 'upload.php');
					xhr.send(formData);
				};
				img.load("http://www.moxiecode.com/images/mox-logo.jpg"); // notice file extension (.jpg)
			

			@method load
			@param {Image|Blob|File|String} src Source for the image
			@param {Boolean|Object} [mixed]
			*/
			load: function() {
				// this is here because to bind properly we need an uid first, which is created above
				this.bind('Load Resize', function() {
					_updateInfo.call(this);
				}, 999);

				this.convertEventPropsToHandlers(dispatches);

				_load.apply(this, arguments);
			},

			/**
			Downsizes the image to fit the specified width/height. If crop is supplied, image will be cropped to exact dimensions.

			@method downsize
			@param {Number} width Resulting width
			@param {Number} [height=width] Resulting height (optional, if not supplied will default to width)
			@param {Boolean} [crop=false] Whether to crop the image to exact dimensions
			@param {Boolean} [preserveHeaders=true] Whether to preserve meta headers (on JPEGs after resize)
			*/
			downsize: function(width, height, crop, preserveHeaders) {
				try {
					if (!this.size) { // only preloaded image objects can be used as source
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}

					// no way to reliably intercept the crash due to high resolution, so we simply avoid it
					if (this.width > Image.MAX_RESIZE_WIDTH || this.height > Image.MAX_RESIZE_HEIGHT) {
						throw new x.ImageError(x.ImageError.MAX_RESOLUTION_ERR);
					}

					if (!width && !height || Basic.typeOf(crop) === 'undefined') {
						crop = false;
					}

					width = width || this.width;
					height = height || this.height;

					preserveHeaders = (Basic.typeOf(preserveHeaders) === 'undefined' ? true : !!preserveHeaders);

					this.getRuntime().exec.call(this, 'Image', 'downsize', width, height, crop, preserveHeaders);
				} catch(ex) {
					// for now simply trigger error event
					this.trigger('error', ex);
				}
			},

			/**
			Alias for downsize(width, height, true). (see downsize)
			
			@method crop
			@param {Number} width Resulting width
			@param {Number} [height=width] Resulting height (optional, if not supplied will default to width)
			@param {Boolean} [preserveHeaders=true] Whether to preserve meta headers (on JPEGs after resize)
			*/
			crop: function(width, height, preserveHeaders) {
				this.downsize(width, height, true, preserveHeaders);
			},

			getAsCanvas: function() {
				if (!Env.can('create_canvas')) {
					throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
				}

				var runtime = this.connectRuntime(this.ruid);
				return runtime.exec.call(this, 'Image', 'getAsCanvas');
			},

			/**
			Retrieves image in it's current state as mOxie.Blob object. Cannot be run on empty or image in progress (throws
			DOMException.INVALID_STATE_ERR).

			@method getAsBlob
			@param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
			@param {Number} [quality=90] Applicable only together with mime type image/jpeg
			@return {Blob} Image as Blob
			*/
			getAsBlob: function(type, quality) {
				if (!this.size) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}

				if (!type) {
					type = 'image/jpeg';
				}

				if (type === 'image/jpeg' && !quality) {
					quality = 90;
				}

				return this.getRuntime().exec.call(this, 'Image', 'getAsBlob', type, quality);
			},

			/**
			Retrieves image in it's current state as dataURL string. Cannot be run on empty or image in progress (throws
			DOMException.INVALID_STATE_ERR).

			@method getAsDataURL
			@param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
			@param {Number} [quality=90] Applicable only together with mime type image/jpeg
			@return {String} Image as dataURL string
			*/
			getAsDataURL: function(type, quality) {
				if (!this.size) {
					throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
				}
				return this.getRuntime().exec.call(this, 'Image', 'getAsDataURL', type, quality);
			},

			/**
			Retrieves image in it's current state as binary string. Cannot be run on empty or image in progress (throws
			DOMException.INVALID_STATE_ERR).

			@method getAsBinaryString
			@param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
			@param {Number} [quality=90] Applicable only together with mime type image/jpeg
			@return {String} Image as binary string
			*/
			getAsBinaryString: function(type, quality) {
				var dataUrl = this.getAsDataURL(type, quality);
				return Encode.atob(dataUrl.substring(dataUrl.indexOf('base64,') + 7));
			},

			/**
			Embeds the image, or better to say, it's visual representation into the specified node. Depending on the runtime
			in use, might be a canvas, or image (actual ) element or shim object (Flash or SilverLight - very rare, used for
			legacy browsers that do not have canvas or proper dataURI support).

			@method embed
			@param {DOMElement} el DOM element to insert the image object into
			@param {Object} options Set of key/value pairs controlling the mime type, dimensions and cropping factor of resulting
			representation
			*/
			embed: function(el) {
				var self = this
				, imgCopy
				, type, quality, crop
				, options = arguments[1] || {}
				, width = this.width
				, height = this.height
				, runtime // this has to be outside of all the closures to contain proper runtime
				;

				function onResize() {
					// if possible, embed a canvas element directly
					if (Env.can('create_canvas')) {
						var canvas = imgCopy.getAsCanvas();
						if (canvas) {
							el.appendChild(canvas);
							canvas = null;
							imgCopy.destroy();
							self.trigger('embedded');
							return;
						}
					}

					var dataUrl = imgCopy.getAsDataURL(type, quality);
					if (!dataUrl) {
						throw new x.ImageError(x.ImageError.WRONG_FORMAT);
					}

					if (Env.can('use_data_uri_of', dataUrl.length)) {
						el.innerHTML = '<img src="' + dataUrl + '" width="' + imgCopy.width + '" height="' + imgCopy.height + '" />';
						imgCopy.destroy();
						self.trigger('embedded');
					} else {
						var tr = new Transporter();

						tr.bind("TransportingComplete", function() {
							runtime = self.connectRuntime(this.result.ruid);

							self.bind("Embedded", function() {
								// position and size properly
								Basic.extend(runtime.getShimContainer().style, {
									//position: 'relative',
									top: '0px',
									left: '0px',
									width: imgCopy.width + 'px',
									height: imgCopy.height + 'px'
								});

								// some shims (Flash/SilverLight) reinitialize, if parent element is hidden, reordered or it's
								// position type changes (in Gecko), but since we basically need this only in IEs 6/7 and
								// sometimes 8 and they do not have this problem, we can comment this for now
								/*tr.bind("RuntimeInit", function(e, runtime) {
									tr.destroy();
									runtime.destroy();
									onResize.call(self); // re-feed our image data
								});*/

								runtime = null;
							}, 999);

							runtime.exec.call(self, "ImageView", "display", this.result.uid, width, height);
							imgCopy.destroy();
						});

						tr.transport(Encode.atob(dataUrl.substring(dataUrl.indexOf('base64,') + 7)), type, Basic.extend({}, options, {
							required_caps: {
								display_media: true
							},
							runtime_order: 'flash,silverlight',
							container: el
						}));
					}
				}

				try {
					if (!(el = Dom.get(el))) {
						throw new x.DOMException(x.DOMException.INVALID_NODE_TYPE_ERR);
					}

					if (!this.size) { // only preloaded image objects can be used as source
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}

					if (this.width > Image.MAX_RESIZE_WIDTH || this.height > Image.MAX_RESIZE_HEIGHT) {
						throw new x.ImageError(x.ImageError.MAX_RESOLUTION_ERR);
					}

					type = options.type || this.type || 'image/jpeg';
					quality = options.quality || 90;
					crop = Basic.typeOf(options.crop) !== 'undefined' ? options.crop : false;

					// figure out dimensions for the thumb
					if (options.width) {
						width = options.width;
						height = options.height || width;
					} else {
						// if container element has > 0 dimensions, take them
						var dimensions = Dom.getSize(el);
						if (dimensions.w && dimensions.h) { // both should be > 0
							width = dimensions.w;
							height = dimensions.h;
						}
					}

					imgCopy = new Image();

					imgCopy.bind("Resize", function() {
						onResize.call(self);
					});

					imgCopy.bind("Load", function() {
						imgCopy.downsize(width, height, crop, false);
					});

					imgCopy.clone(this, false);

					return imgCopy;
				} catch(ex) {
					// for now simply trigger error event
					this.trigger('error', ex);
				}
			},

			/**
			Properly destroys the image and frees resources in use. If any. Recommended way to dispose mOxie.Image object.

			@method destroy
			*/
			destroy: function() {
				if (this.ruid) {
					this.getRuntime().exec.call(this, 'Image', 'destroy');
					this.disconnectRuntime();
				}
				this.unbindAll();
			}
		});


		function _updateInfo(info) {
			if (!info) {
				info = this.getRuntime().exec.call(this, 'Image', 'getInfo');
			}

			this.size = info.size;
			this.width = info.width;
			this.height = info.height;
			this.type = info.type;
			this.meta = info.meta;

			// update file name, only if empty
			if (this.name === '') {
				this.name = info.name;
			}
		}
		

		function _load(src) {
			var srcType = Basic.typeOf(src);

			try {
				// if source is Image
				if (src instanceof Image) {
					if (!src.size) { // only preloaded image objects can be used as source
						throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
					}
					_loadFromImage.apply(this, arguments);
				}
				// if source is o.Blob/o.File
				else if (src instanceof Blob) {
					if (!~Basic.inArray(src.type, ['image/jpeg', 'image/png'])) {
						throw new x.ImageError(x.ImageError.WRONG_FORMAT);
					}
					_loadFromBlob.apply(this, arguments);
				}
				// if native blob/file
				else if (Basic.inArray(srcType, ['blob', 'file']) !== -1) {
					_load.call(this, new File(null, src), arguments[1]);
				}
				// if String
				else if (srcType === 'string') {
					// if dataUrl String
					if (/^data:[^;]*;base64,/.test(src)) {
						_load.call(this, new Blob(null, { data: src }), arguments[1]);
					}
					// else assume Url, either relative or absolute
					else {
						_loadFromUrl.apply(this, arguments);
					}
				}
				// if source seems to be an img node
				else if (srcType === 'node' && src.nodeName.toLowerCase() === 'img') {
					_load.call(this, src.src, arguments[1]);
				}
				else {
					throw new x.DOMException(x.DOMException.TYPE_MISMATCH_ERR);
				}
			} catch(ex) {
				// for now simply trigger error event
				this.trigger('error', ex);
			}
		}


		function _loadFromImage(img, exact) {
			var runtime = this.connectRuntime(img.ruid);
			this.ruid = runtime.uid;
			runtime.exec.call(this, 'Image', 'loadFromImage', img, (Basic.typeOf(exact) === 'undefined' ? true : exact));
		}


		function _loadFromBlob(blob, options) {
			var self = this;

			self.name = blob.name || '';

			function exec(runtime) {
				self.ruid = runtime.uid;
				runtime.exec.call(self, 'Image', 'loadFromBlob', blob);
			}

			if (blob.isDetached()) {
				this.bind('RuntimeInit', function(e, runtime) {
					exec(runtime);
				});

				// convert to object representation
				if (options && typeof(options.required_caps) === 'string') {
					options.required_caps = Runtime.parseCaps(options.required_caps);
				}

				this.connectRuntime(Basic.extend({
					required_caps: {
						access_image_binary: true,
						resize_image: true
					}
				}, options));
			} else {
				exec(this.connectRuntime(blob.ruid));
			}
		}


		function _loadFromUrl(url, options) {
			var self = this, xhr;

			xhr = new XMLHttpRequest();

			xhr.open('get', url);
			xhr.responseType = 'blob';

			xhr.onprogress = function(e) {
				self.trigger(e);
			};

			xhr.onload = function() {
				_loadFromBlob.call(self, xhr.response, true);
			};

			xhr.onerror = function(e) {
				self.trigger(e);
			};

			xhr.onloadend = function() {
				xhr.destroy();
			};

			xhr.bind('RuntimeError', function(e, err) {
				self.trigger('RuntimeError', err);
			});

			xhr.send(null, options);
		}
	}

	// virtual world will crash on you if image has a resolution higher than this:
	Image.MAX_RESIZE_WIDTH = 6500;
	Image.MAX_RESIZE_HEIGHT = 6500; 

	Image.prototype = EventTarget.instance;

	return Image;
});

// Included from: src/javascript/runtime/html5/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global File:true */

/**
Defines constructor for HTML5 runtime.

@class moxie/runtime/html5/Runtime
@private
*/
define("moxie/runtime/html5/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime",
	"moxie/core/utils/Env"
], function(Basic, x, Runtime, Env) {
	
	var type = "html5", extensions = {};
	
	function Html5Runtime(options) {
		var I = this
		, Test = Runtime.capTest
		, True = Runtime.capTrue
		;

		var caps = Basic.extend({
				access_binary: Test(window.FileReader || window.File && window.File.getAsDataURL),
				access_image_binary: function() {
					return I.can('access_binary') && !!extensions.Image;
				},
				display_media: Test(Env.can('create_canvas') || Env.can('use_data_uri_over32kb')),
				do_cors: Test(window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()),
				drag_and_drop: Test(function() {
					// this comes directly from Modernizr: http://www.modernizr.com/
					var div = document.createElement('div');
					// IE has support for drag and drop since version 5, but doesn't support dropping files from desktop
					return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && (Env.browser !== 'IE' || Env.version > 9);
				}()),
				filter_by_extension: Test(function() { // if you know how to feature-detect this, please suggest
					return (Env.browser === 'Chrome' && Env.version >= 28) || (Env.browser === 'IE' && Env.version >= 10);
				}()),
				return_response_headers: True,
				return_response_type: function(responseType) {
					if (responseType === 'json' && !!window.JSON) { // we can fake this one even if it's not supported
						return true;
					} 
					return Env.can('return_response_type', responseType);
				},
				return_status_code: True,
				report_upload_progress: Test(window.XMLHttpRequest && new XMLHttpRequest().upload),
				resize_image: function() {
					return I.can('access_binary') && Env.can('create_canvas');
				},
				select_file: function() {
					return Env.can('use_fileinput') && window.File;
				},
				select_folder: function() {
					return I.can('select_file') && Env.browser === 'Chrome' && Env.version >= 21;
				},
				select_multiple: function() {
					// it is buggy on Safari Windows and iOS
					return I.can('select_file') && 
						!(Env.browser === 'Safari' && Env.os === 'Windows') && 
						!(Env.os === 'iOS' && Env.verComp(Env.osVersion, "7.0.4", '<'));
				},
				send_binary_string: Test(window.XMLHttpRequest && (new XMLHttpRequest().sendAsBinary || (window.Uint8Array && window.ArrayBuffer))),
				send_custom_headers: Test(window.XMLHttpRequest),
				send_multipart: function() {
					return !!(window.XMLHttpRequest && new XMLHttpRequest().upload && window.FormData) || I.can('send_binary_string');
				},
				slice_blob: Test(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
				stream_upload: function(){
					return I.can('slice_blob') && I.can('send_multipart');
				},
				summon_file_dialog: Test(function() { // yeah... some dirty sniffing here...
					return (Env.browser === 'Firefox' && Env.version >= 4) ||
						(Env.browser === 'Opera' && Env.version >= 12) ||
						(Env.browser === 'IE' && Env.version >= 10) ||
						!!~Basic.inArray(Env.browser, ['Chrome', 'Safari']);
				}()),
				upload_filesize: True
			}, 
			arguments[2]
		);

		Runtime.call(this, options, (arguments[1] || type), caps);


		Basic.extend(this, {

			init : function() {
				this.trigger("Init");
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					destroy = I = null;
				};
			}(this.destroy))
		});

		Basic.extend(this.getShim(), extensions);
	}

	Runtime.addConstructor(type, Html5Runtime);

	return extensions;
});

// Included from: src/javascript/runtime/html5/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/Blob
@private
*/
define("moxie/runtime/html5/file/Blob", [
	"moxie/runtime/html5/Runtime",
	"moxie/file/Blob"
], function(extensions, Blob) {

	function HTML5Blob() {
		function w3cBlobSlice(blob, start, end) {
			var blobSlice;

			if (window.File.prototype.slice) {
				try {
					blob.slice();	// depricated version will throw WRONG_ARGUMENTS_ERR exception
					return blob.slice(start, end);
				} catch (e) {
					// depricated slice method
					return blob.slice(start, end - start);
				}
			// slice method got prefixed: https://bugzilla.mozilla.org/show_bug.cgi?id=649672
			} else if ((blobSlice = window.File.prototype.webkitSlice || window.File.prototype.mozSlice)) {
				return blobSlice.call(blob, start, end);
			} else {
				return null; // or throw some exception
			}
		}

		this.slice = function() {
			return new Blob(this.getRuntime().uid, w3cBlobSlice.apply(this, arguments));
		};
	}

	return (extensions.Blob = HTML5Blob);
});

// Included from: src/javascript/core/utils/Events.js

/**
 * Events.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

define('moxie/core/utils/Events', [
	'moxie/core/utils/Basic'
], function(Basic) {
	var eventhash = {}, uid = 'moxie_' + Basic.guid();
	
	// IE W3C like event funcs
	function preventDefault() {
		this.returnValue = false;
	}

	function stopPropagation() {
		this.cancelBubble = true;
	}

	/**
	Adds an event handler to the specified object and store reference to the handler
	in objects internal Plupload registry (@see removeEvent).
	
	@method addEvent
	@for Utils
	@static
	@param {Object} obj DOM element like object to add handler to.
	@param {String} name Name to add event listener to.
	@param {Function} callback Function to call when event occurs.
	@param {String} [key] that might be used to add specifity to the event record.
	*/
	var addEvent = function(obj, name, callback, key) {
		var func, events;
					
		name = name.toLowerCase();

		// Add event listener
		if (obj.addEventListener) {
			func = callback;
			
			obj.addEventListener(name, func, false);
		} else if (obj.attachEvent) {
			func = function() {
				var evt = window.event;

				if (!evt.target) {
					evt.target = evt.srcElement;
				}

				evt.preventDefault = preventDefault;
				evt.stopPropagation = stopPropagation;

				callback(evt);
			};

			obj.attachEvent('on' + name, func);
		}
		
		// Log event handler to objects internal mOxie registry
		if (!obj[uid]) {
			obj[uid] = Basic.guid();
		}
		
		if (!eventhash.hasOwnProperty(obj[uid])) {
			eventhash[obj[uid]] = {};
		}
		
		events = eventhash[obj[uid]];
		
		if (!events.hasOwnProperty(name)) {
			events[name] = [];
		}
				
		events[name].push({
			func: func,
			orig: callback, // store original callback for IE
			key: key
		});
	};
	
	
	/**
	Remove event handler from the specified object. If third argument (callback)
	is not specified remove all events with the specified name.
	
	@method removeEvent
	@static
	@param {Object} obj DOM element to remove event listener(s) from.
	@param {String} name Name of event listener to remove.
	@param {Function|String} [callback] might be a callback or unique key to match.
	*/
	var removeEvent = function(obj, name, callback) {
		var type, undef;
		
		name = name.toLowerCase();
		
		if (obj[uid] && eventhash[obj[uid]] && eventhash[obj[uid]][name]) {
			type = eventhash[obj[uid]][name];
		} else {
			return;
		}
			
		for (var i = type.length - 1; i >= 0; i--) {
			// undefined or not, key should match
			if (type[i].orig === callback || type[i].key === callback) {
				if (obj.removeEventListener) {
					obj.removeEventListener(name, type[i].func, false);
				} else if (obj.detachEvent) {
					obj.detachEvent('on'+name, type[i].func);
				}
				
				type[i].orig = null;
				type[i].func = null;
				type.splice(i, 1);
				
				// If callback was passed we are done here, otherwise proceed
				if (callback !== undef) {
					break;
				}
			}
		}
		
		// If event array got empty, remove it
		if (!type.length) {
			delete eventhash[obj[uid]][name];
		}
		
		// If mOxie registry has become empty, remove it
		if (Basic.isEmptyObj(eventhash[obj[uid]])) {
			delete eventhash[obj[uid]];
			
			// IE doesn't let you remove DOM object property with - delete
			try {
				delete obj[uid];
			} catch(e) {
				obj[uid] = undef;
			}
		}
	};
	
	
	/**
	Remove all kind of events from the specified object
	
	@method removeAllEvents
	@static
	@param {Object} obj DOM element to remove event listeners from.
	@param {String} [key] unique key to match, when removing events.
	*/
	var removeAllEvents = function(obj, key) {		
		if (!obj || !obj[uid]) {
			return;
		}
		
		Basic.each(eventhash[obj[uid]], function(events, name) {
			removeEvent(obj, name, key);
		});
	};

	return {
		addEvent: addEvent,
		removeEvent: removeEvent,
		removeAllEvents: removeAllEvents
	};
});

// Included from: src/javascript/runtime/html5/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/FileInput
@private
*/
define("moxie/runtime/html5/file/FileInput", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Events",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Env"
], function(extensions, Basic, Dom, Events, Mime, Env) {
	
	function FileInput() {
		var _files = [], _options;

		Basic.extend(this, {
			init: function(options) {
				var comp = this, I = comp.getRuntime(), input, shimContainer, mimes, browseButton, zIndex, top;

				_options = options;
				_files = [];

				// figure out accept string
				mimes = _options.accept.mimes || Mime.extList2mimes(_options.accept, I.can('filter_by_extension'));

				shimContainer = I.getShimContainer();


				_options.multiple= false;
				if(options.direct){
					shimContainer.innerHTML = '<input id="' + I.uid +'" type="input" style="font-size:999px;opacity:0;"' +
						(_options.multiple && I.can('select_multiple') ? 'multiple' : '') + 
						(_options.directory && I.can('select_folder') ? 'webkitdirectory directory' : '') + // Chrome 11+
						(mimes ? ' accept="' + mimes.join(',') + '"' : '') + ' />';
				}
				else{
					shimContainer.innerHTML = '<input id="' + I.uid +'" type="file" style="font-size:999px;opacity:0;"' +
						(_options.multiple && I.can('select_multiple') ? 'multiple' : '') + 
						(_options.directory && I.can('select_folder') ? 'webkitdirectory directory' : '') + // Chrome 11+
						(mimes ? ' accept="' + mimes.join(',') + '"' : '') + ' />';
				}
				input = Dom.get(I.uid);

				// prepare file input to be placed underneath the browse_button element
				Basic.extend(input.style, {
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				});


				browseButton = Dom.get(_options.browse_button);

				// Route click event to the input[type=file] element for browsers that support such behavior
				if (I.can('summon_file_dialog')) {
					if (Dom.getStyle(browseButton, 'position') === 'static') {
						browseButton.style.position = 'relative';
					}

					zIndex = parseInt(Dom.getStyle(browseButton, 'z-index'), 10) || 1;

					browseButton.style.zIndex = zIndex;
					shimContainer.style.zIndex = zIndex - 1;

					Events.addEvent(browseButton, 'click', function(e) {
						var input = Dom.get(I.uid);
						if (input && !input.disabled) { // for some reason FF (up to 8.0.1 so far) lets to click disabled input[type=file]
							input.click();
						}
						e.preventDefault();
					}, comp.uid);
				}

				/* Since we have to place input[type=file] on top of the browse_button for some browsers,
				browse_button loses interactivity, so we restore it here */
				top = I.can('summon_file_dialog') ? browseButton : shimContainer;

				Events.addEvent(top, 'mouseover', function() {
					comp.trigger('mouseenter');
				}, comp.uid);

				Events.addEvent(top, 'mouseout', function() {
					comp.trigger('mouseleave');
				}, comp.uid);

				Events.addEvent(top, 'mousedown', function() {
					comp.trigger('mousedown');
				}, comp.uid);

				Events.addEvent(Dom.get(_options.container), 'mouseup', function() {
					comp.trigger('mouseup');
				}, comp.uid);

				console.log(input);
				input.onchange = function onChange() { // there should be only one handler for this
					_files = [];
					// alert("input.onchange");

					if (_options.directory) {
						// folders are represented by dots, filter them out (Chrome 11+)
						Basic.each(this.files, function(file) {
							if (file.name !== ".") { // if it doesn't looks like a folder
								_files.push(file);
							}
						});
					} else {
						_files = [].slice.call(this.files);
					}

					// clearing the value enables the user to select the same file again if they want to
					if (Env.browser !== 'IE') {
						this.value = '';
					} else {
						// in IE input[type="file"] is read-only so the only way to reset it is to re-insert it
						var clone = this.cloneNode(true);
						this.parentNode.replaceChild(clone, this);
						clone.onchange = onChange;
					}
					comp.trigger('change');
				};
				if(options.direct){
					input.onclick = function onChange() { // there should be only one handler for this
						// _files = [];
						// // alert("input.onchange");

						// if (_options.directory) {
						// 	// folders are represented by dots, filter them out (Chrome 11+)
						// 	Basic.each(this.files, function(file) {
						// 		if (file.name !== ".") { // if it doesn't looks like a folder
						// 			_files.push(file);
						// 		}
						// 	});
						// } else {
						// 	_files = [].slice.call(this.files);
						// }

						// // clearing the value enables the user to select the same file again if they want to
						// if (Env.browser !== 'IE') {
						// 	this.value = '';
						// } else {
						// 	// in IE input[type="file"] is read-only so the only way to reset it is to re-insert it
						// 	var clone = this.cloneNode(true);
						// 	this.parentNode.replaceChild(clone, this);
						// 	clone.onchange = onChange;
						// }
						comp.trigger('change');
					};
				}

				// ready event is perfectly asynchronous
				comp.trigger({
					type: 'ready',
					async: true
				});

				shimContainer = null;
			},

			getFiles: function() {
				return _files;
			},

			disable: function(state) {
				var I = this.getRuntime(), input;

				if ((input = Dom.get(I.uid))) {
					input.disabled = !!state;
				}
			},

			destroy: function() {
				var I = this.getRuntime()
				, shim = I.getShim()
				, shimContainer = I.getShimContainer()
				;
				
				Events.removeAllEvents(shimContainer, this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.container), this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.browse_button), this.uid);
				
				if (shimContainer) {
					shimContainer.innerHTML = '';
				}

				shim.removeInstance(this.uid);

				_files = _options = shimContainer = shim = null;
			}
		});
	}

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/html5/file/FileDrop.js

/**
 * FileDrop.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/FileDrop
@private
*/
define("moxie/runtime/html5/file/FileDrop", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Events",
	"moxie/core/utils/Mime"
], function(extensions, Basic, Dom, Events, Mime) {
	
	function FileDrop() {
		var _files = [], _allowedExts = [], _options;

		Basic.extend(this, {
			init: function(options) {
				var comp = this, dropZone;

				_options = options;
				_allowedExts = _extractExts(_options.accept);
				dropZone = _options.container;

				Events.addEvent(dropZone, 'dragover', function(e) {
					e.preventDefault();
					e.stopPropagation();
					e.dataTransfer.dropEffect = 'copy';
				}, comp.uid);

				Events.addEvent(dropZone, 'drop', function(e) {
					e.preventDefault();
					e.stopPropagation();

					_files = [];

					// Chrome 21+ accepts folders via Drag'n'Drop
					if (e.dataTransfer.items && e.dataTransfer.items[0].webkitGetAsEntry) {
						_readItems(e.dataTransfer.items, function() {
							comp.trigger("drop");
						});
					} else {
						Basic.each(e.dataTransfer.files, function(file) {
							if (_isAcceptable(file)) {
								_files.push(file);
							}
						});
						comp.trigger("drop");
					}
				}, comp.uid);

				Events.addEvent(dropZone, 'dragenter', function(e) {
					e.preventDefault();
					e.stopPropagation();
					comp.trigger("dragenter");
				}, comp.uid);

				Events.addEvent(dropZone, 'dragleave', function(e) {
					e.preventDefault();
					e.stopPropagation();
					comp.trigger("dragleave");
				}, comp.uid);
			},

			getFiles: function() {
				return _files;
			},

			destroy: function() {
				Events.removeAllEvents(_options && Dom.get(_options.container), this.uid);
				_files = _allowedExts = _options = null;
			}
		});

		
		function _extractExts(accept) {
			var exts = [];
			for (var i = 0; i < accept.length; i++) {
				[].push.apply(exts, accept[i].extensions.split(/\s*,\s*/));
			}
			return Basic.inArray('*', exts) === -1 ? exts : [];
		}


		function _isAcceptable(file) {
			var ext = Mime.getFileExtension(file.name);
			return !ext || !_allowedExts.length || Basic.inArray(ext, _allowedExts) !== -1;
		}


		function _readItems(items, cb) {
			var entries = [];
			Basic.each(items, function(item) {
				var entry = item.webkitGetAsEntry();
				// Address #998 (https://code.google.com/p/chromium/issues/detail?id=332579)
				if (entry) {
					// file() fails on OSX when the filename contains a special character (e.g. umlaut): see #61
					if (entry.isFile) {
						var file = item.getAsFile();
						if (_isAcceptable(file)) {
							_files.push(file);
						}
					} else {
						entries.push(entry);
					}
				}
			});

			if (entries.length) {
				_readEntries(entries, cb);
			} else {
				cb();
			}
		}


		function _readEntries(entries, cb) {
			var queue = [];
			Basic.each(entries, function(entry) {
				queue.push(function(cbcb) {
					_readEntry(entry, cbcb);
				});
			});
			Basic.inSeries(queue, function() {
				cb();
			});
		}

		function _readEntry(entry, cb) {
			if (entry.isFile) {
				entry.file(function(file) {
					if (_isAcceptable(file)) {
						_files.push(file);
					}
					cb();
				}, function() {
					// fire an error event maybe
					cb();
				});
			} else if (entry.isDirectory) {
				_readDirEntry(entry, cb);
			} else {
				cb(); // not file, not directory? what then?..
			}
		}

		function _readDirEntry(dirEntry, cb) {
			var entries = [], dirReader = dirEntry.createReader();

			// keep quering recursively till no more entries
			function getEntries(cbcb) {
				dirReader.readEntries(function(moreEntries) {
					if (moreEntries.length) {
						[].push.apply(entries, moreEntries);
						getEntries(cbcb);
					} else {
						cbcb();
					}
				}, cbcb);
			}

			// ...and you thought FileReader was crazy...
			getEntries(function() {
				_readEntries(entries, cb);
			}); 
		}
	}

	return (extensions.FileDrop = FileDrop);
});

// Included from: src/javascript/runtime/html5/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/file/FileReader
@private
*/
define("moxie/runtime/html5/file/FileReader", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Encode",
	"moxie/core/utils/Basic"
], function(extensions, Encode, Basic) {
	
	function FileReader() {
		var _fr, _convertToBinary = false;

		Basic.extend(this, {

			read: function(op, blob) {
				var target = this;

				_fr = new window.FileReader();

				_fr.addEventListener('progress', function(e) {
					target.trigger(e);
				});

				_fr.addEventListener('load', function(e) {
					target.trigger(e);
				});

				_fr.addEventListener('error', function(e) {
					target.trigger(e, _fr.error);
				});

				_fr.addEventListener('loadend', function() {
					_fr = null;
				});

				if (Basic.typeOf(_fr[op]) === 'function') {
					_convertToBinary = false;
					_fr[op](blob.getSource());
				} else if (op === 'readAsBinaryString') { // readAsBinaryString is depricated in general and never existed in IE10+
					_convertToBinary = true;
					_fr.readAsDataURL(blob.getSource());
				}
			},

			getResult: function() {
				return _fr && _fr.result ? (_convertToBinary ? _toBinary(_fr.result) : _fr.result) : null;
			},

			abort: function() {
				if (_fr) {
					_fr.abort();
				}
			},

			destroy: function() {
				_fr = null;
			}
		});

		function _toBinary(str) {
			return Encode.atob(str.substring(str.indexOf('base64,') + 7));
		}
	}

	return (extensions.FileReader = FileReader);
});

// Included from: src/javascript/runtime/html5/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global ActiveXObject:true */

/**
@class moxie/runtime/html5/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/html5/xhr/XMLHttpRequest", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Url",
	"moxie/file/File",
	"moxie/file/Blob",
	"moxie/xhr/FormData",
	"moxie/core/Exceptions",
	"moxie/core/utils/Env"
], function(extensions, Basic, Mime, Url, File, Blob, FormData, x, Env) {
	
	function XMLHttpRequest() {
		var self = this
		, _xhr
		, _filename
		;

		Basic.extend(this, {
			send: function(meta, data) {
				var target = this
				, isGecko2_5_6 = (Env.browser === 'Mozilla' && Env.version >= 4 && Env.version < 7)
				, isAndroidBrowser = Env.browser === 'Android Browser'
				, mustSendAsBinary = false
				;

				// extract file name
				_filename = meta.url.replace(/^.+?\/([\w\-\.]+)$/, '$1').toLowerCase();

				_xhr = _getNativeXHR();
				_xhr.open(meta.method, meta.url, meta.async, meta.user, meta.password);


				// prepare data to be sent
				if (data instanceof Blob) {
					if (data.isDetached()) {
						mustSendAsBinary = true;
					}
					data = data.getSource();
				} else if (data instanceof FormData) {

					if (data.hasBlob()) {
						if (data.getBlob().isDetached()) {
							data = _prepareMultipart.call(target, data); // _xhr must be instantiated and be in OPENED state
							mustSendAsBinary = true;
						} else if ((isGecko2_5_6 || isAndroidBrowser) && Basic.typeOf(data.getBlob().getSource()) === 'blob' && window.FileReader) {
							// Gecko 2/5/6 can't send blob in FormData: https://bugzilla.mozilla.org/show_bug.cgi?id=649150
							// Android browsers (default one and Dolphin) seem to have the same issue, see: #613
							_preloadAndSend.call(target, meta, data);
							return; // _preloadAndSend will reinvoke send() with transmutated FormData =%D
						}	
					}

					// transfer fields to real FormData
					if (data instanceof FormData) { // if still a FormData, e.g. not mangled by _prepareMultipart()
						var fd = new window.FormData();
						data.each(function(value, name) {
							if (value instanceof Blob) {
								fd.append(name, value.getSource());
							} else {
								fd.append(name, value);
							}
						});
						data = fd;
					}
				}


				// if XHR L2
				if (_xhr.upload) {
					if (meta.withCredentials) {
						_xhr.withCredentials = true;
					}

					_xhr.addEventListener('load', function(e) {
						target.trigger(e);
					});

					_xhr.addEventListener('error', function(e) {
						target.trigger(e);
					});

					// additionally listen to progress events
					_xhr.addEventListener('progress', function(e) {
						target.trigger(e);
					});

					_xhr.upload.addEventListener('progress', function(e) {
						target.trigger({
							type: 'UploadProgress',
							loaded: e.loaded,
							total: e.total
						});
					});
				// ... otherwise simulate XHR L2
				} else {
					_xhr.onreadystatechange = function onReadyStateChange() {
						
						// fake Level 2 events
						switch (_xhr.readyState) {
							
							case 1: // XMLHttpRequest.OPENED
								// readystatechanged is fired twice for OPENED state (in IE and Mozilla) - neu
								break;
							
							// looks like HEADERS_RECEIVED (state 2) is not reported in Opera (or it's old versions) - neu
							case 2: // XMLHttpRequest.HEADERS_RECEIVED
								break;
								
							case 3: // XMLHttpRequest.LOADING 
								// try to fire progress event for not XHR L2
								var total, loaded;
								
								try {
									if (Url.hasSameOrigin(meta.url)) { // Content-Length not accessible for cross-domain on some browsers
										total = _xhr.getResponseHeader('Content-Length') || 0; // old Safari throws an exception here
									}

									if (_xhr.responseText) { // responseText was introduced in IE7
										loaded = _xhr.responseText.length;
									}
								} catch(ex) {
									total = loaded = 0;
								}

								target.trigger({
									type: 'progress',
									lengthComputable: !!total,
									total: parseInt(total, 10),
									loaded: loaded
								});
								break;
								
							case 4: // XMLHttpRequest.DONE
								// release readystatechange handler (mostly for IE)
								_xhr.onreadystatechange = function() {};

								// usually status 0 is returned when server is unreachable, but FF also fails to status 0 for 408 timeout
								if (_xhr.status === 0) {
									target.trigger('error');
								} else {
									target.trigger('load');
								}							
								break;
						}
					};
				}
				

				// set request headers
				if (!Basic.isEmptyObj(meta.headers)) {
					Basic.each(meta.headers, function(value, header) {
						_xhr.setRequestHeader(header, value);
					});
				}

				// request response type
				if ("" !== meta.responseType && 'responseType' in _xhr) {
					if ('json' === meta.responseType && !Env.can('return_response_type', 'json')) { // we can fake this one
						_xhr.responseType = 'text';
					} else {
						_xhr.responseType = meta.responseType;
					}
				}

				// send ...
				if (!mustSendAsBinary) {
					_xhr.send(data);
				} else {
					if (_xhr.sendAsBinary) { // Gecko
						_xhr.sendAsBinary(data);
					} else { // other browsers having support for typed arrays
						(function() {
							// mimic Gecko's sendAsBinary
							var ui8a = new Uint8Array(data.length);
							for (var i = 0; i < data.length; i++) {
								ui8a[i] = (data.charCodeAt(i) & 0xff);
							}
							_xhr.send(ui8a.buffer);
						}());
					}
				}

				target.trigger('loadstart');
			},

			getStatus: function() {
				// according to W3C spec it should return 0 for readyState < 3, but instead it throws an exception
				try {
					if (_xhr) {
						return _xhr.status;
					}
				} catch(ex) {}
				return 0;
			},

			getResponse: function(responseType) {
				var I = this.getRuntime();

				try {
					switch (responseType) {
						case 'blob':
							var file = new File(I.uid, _xhr.response);
							
							// try to extract file name from content-disposition if possible (might be - not, if CORS for example)	
							var disposition = _xhr.getResponseHeader('Content-Disposition');
							if (disposition) {
								// extract filename from response header if available
								var match = disposition.match(/filename=([\'\"'])([^\1]+)\1/);
								if (match) {
									_filename = match[2];
								}
							}
							file.name = _filename;

							// pre-webkit Opera doesn't set type property on the blob response
							if (!file.type) {
								file.type = Mime.getFileMime(_filename);
							}
							return file;

						case 'json':
							if (!Env.can('return_response_type', 'json')) {
								return _xhr.status === 200 && !!window.JSON ? JSON.parse(_xhr.responseText) : null;
							}
							return _xhr.response;

						case 'document':
							return _getDocument(_xhr);

						default:
							return _xhr.responseText !== '' ? _xhr.responseText : null; // against the specs, but for consistency across the runtimes
					}
				} catch(ex) {
					return null;
				}				
			},

			getAllResponseHeaders: function() {
				try {
					return _xhr.getAllResponseHeaders();
				} catch(ex) {}
				return '';
			},

			abort: function() {
				if (_xhr) {
					_xhr.abort();
				}
			},

			destroy: function() {
				self = _filename = null;
			}
		});


		// here we go... ugly fix for ugly bug
		function _preloadAndSend(meta, data) {
			var target = this, blob, fr;
				
			// get original blob
			blob = data.getBlob().getSource();
			
			// preload blob in memory to be sent as binary string
			fr = new window.FileReader();
			fr.onload = function() {
				// overwrite original blob
				data.append(data.getBlobName(), new Blob(null, {
					type: blob.type,
					data: fr.result
				}));
				// invoke send operation again
				self.send.call(target, meta, data);
			};
			fr.readAsBinaryString(blob);
		}

		
		function _getNativeXHR() {
			if (window.XMLHttpRequest && !(Env.browser === 'IE' && Env.version < 8)) { // IE7 has native XHR but it's buggy
				return new window.XMLHttpRequest();
			} else {
				return (function() {
					var progIDs = ['Msxml2.XMLHTTP.6.0', 'Microsoft.XMLHTTP']; // if 6.0 available, use it, otherwise failback to default 3.0
					for (var i = 0; i < progIDs.length; i++) {
						try {
							return new ActiveXObject(progIDs[i]);
						} catch (ex) {}
					}
				})();
			}
		}
		
		// @credits Sergey Ilinsky	(http://www.ilinsky.com/)
		function _getDocument(xhr) {
			var rXML = xhr.responseXML;
			var rText = xhr.responseText;
			
			// Try parsing responseText (@see: http://www.ilinsky.com/articles/XMLHttpRequest/#bugs-ie-responseXML-content-type)
			if (Env.browser === 'IE' && rText && rXML && !rXML.documentElement && /[^\/]+\/[^\+]+\+xml/.test(xhr.getResponseHeader("Content-Type"))) {
				rXML = new window.ActiveXObject("Microsoft.XMLDOM");
				rXML.async = false;
				rXML.validateOnParse = false;
				rXML.loadXML(rText);
			}
	
			// Check if there is no error in document
			if (rXML) {
				if ((Env.browser === 'IE' && rXML.parseError !== 0) || !rXML.documentElement || rXML.documentElement.tagName === "parsererror") {
					return null;
				}
			}
			return rXML;
		}


		function _prepareMultipart(fd) {
			var boundary = '----moxieboundary' + new Date().getTime()
			, dashdash = '--'
			, crlf = '\r\n'
			, multipart = ''
			, I = this.getRuntime()
			;

			if (!I.can('send_binary_string')) {
				throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
			}

			_xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);

			// append multipart parameters
			fd.each(function(value, name) {
				// Firefox 3.6 failed to convert multibyte characters to UTF-8 in sendAsBinary(), 
				// so we try it here ourselves with: unescape(encodeURIComponent(value))
				if (value instanceof Blob) {
					// Build RFC2388 blob
					multipart += dashdash + boundary + crlf +
						'Content-Disposition: form-data; name="' + name + '"; filename="' + unescape(encodeURIComponent(value.name || 'blob')) + '"' + crlf +
						'Content-Type: ' + (value.type || 'application/octet-stream') + crlf + crlf +
						value.getSource() + crlf;
				} else {
					multipart += dashdash + boundary + crlf +
						'Content-Disposition: form-data; name="' + name + '"' + crlf + crlf +
						unescape(encodeURIComponent(value)) + crlf;
				}
			});

			multipart += dashdash + boundary + dashdash + crlf;

			return multipart;
		}
	}

	return (extensions.XMLHttpRequest = XMLHttpRequest);
});

// Included from: src/javascript/runtime/html5/utils/BinaryReader.js

/**
 * BinaryReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/utils/BinaryReader
@private
*/
define("moxie/runtime/html5/utils/BinaryReader", [], function() {
	return function() {
		var II = false, bin;

		// Private functions
		function read(idx, size) {
			var mv = II ? 0 : -8 * (size - 1), sum = 0, i;

			for (i = 0; i < size; i++) {
				sum |= (bin.charCodeAt(idx + i) << Math.abs(mv + i*8));
			}

			return sum;
		}

		function putstr(segment, idx, length) {
			length = arguments.length === 3 ? length : bin.length - idx - 1;
			bin = bin.substr(0, idx) + segment + bin.substr(length + idx);
		}

		function write(idx, num, size) {
			var str = '', mv = II ? 0 : -8 * (size - 1), i;

			for (i = 0; i < size; i++) {
				str += String.fromCharCode((num >> Math.abs(mv + i*8)) & 255);
			}

			putstr(str, idx, size);
		}

		// Public functions
		return {
			II: function(order) {
				if (order === undefined) {
					return II;
				} else {
					II = order;
				}
			},

			init: function(binData) {
				II = false;
				bin = binData;
			},

			SEGMENT: function(idx, length, segment) {
				switch (arguments.length) {
					case 1:
						return bin.substr(idx, bin.length - idx - 1);
					case 2:
						return bin.substr(idx, length);
					case 3:
						putstr(segment, idx, length);
						break;
					default: return bin;
				}
			},

			BYTE: function(idx) {
				return read(idx, 1);
			},

			SHORT: function(idx) {
				return read(idx, 2);
			},

			LONG: function(idx, num) {
				if (num === undefined) {
					return read(idx, 4);
				} else {
					write(idx, num, 4);
				}
			},

			SLONG: function(idx) { // 2's complement notation
				var num = read(idx, 4);

				return (num > 2147483647 ? num - 4294967296 : num);
			},

			STRING: function(idx, size) {
				var str = '';

				for (size += idx; idx < size; idx++) {
					str += String.fromCharCode(read(idx, 1));
				}

				return str;
			}
		};
	};
});

// Included from: src/javascript/runtime/html5/image/JPEGHeaders.js

/**
 * JPEGHeaders.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
 
/**
@class moxie/runtime/html5/image/JPEGHeaders
@private
*/
define("moxie/runtime/html5/image/JPEGHeaders", [
	"moxie/runtime/html5/utils/BinaryReader"
], function(BinaryReader) {
	
	return function JPEGHeaders(data) {
		var headers = [], read, idx, marker, length = 0;

		read = new BinaryReader();
		read.init(data);

		// Check if data is jpeg
		if (read.SHORT(0) !== 0xFFD8) {
			return;
		}

		idx = 2;

		while (idx <= data.length) {
			marker = read.SHORT(idx);

			// omit RST (restart) markers
			if (marker >= 0xFFD0 && marker <= 0xFFD7) {
				idx += 2;
				continue;
			}

			// no headers allowed after SOS marker
			if (marker === 0xFFDA || marker === 0xFFD9) {
				break;
			}

			length = read.SHORT(idx + 2) + 2;

			// APPn marker detected
			if (marker >= 0xFFE1 && marker <= 0xFFEF) {
				headers.push({
					hex: marker,
					name: 'APP' + (marker & 0x000F),
					start: idx,
					length: length,
					segment: read.SEGMENT(idx, length)
				});
			}

			idx += length;
		}

		read.init(null); // free memory

		return {
			headers: headers,

			restore: function(data) {
				var max, i;

				read.init(data);

				idx = read.SHORT(2) == 0xFFE0 ? 4 + read.SHORT(4) : 2;

				for (i = 0, max = headers.length; i < max; i++) {
					read.SEGMENT(idx, 0, headers[i].segment);
					idx += headers[i].length;
				}

				data = read.SEGMENT();
				read.init(null);
				return data;
			},

			strip: function(data) {
				var headers, jpegHeaders, i;

				jpegHeaders = new JPEGHeaders(data);
				headers = jpegHeaders.headers;
				jpegHeaders.purge();

				read.init(data);

				i = headers.length;
				while (i--) {
					read.SEGMENT(headers[i].start, headers[i].length, '');
				}
				
				data = read.SEGMENT();
				read.init(null);
				return data;
			},

			get: function(name) {
				var array = [];

				for (var i = 0, max = headers.length; i < max; i++) {
					if (headers[i].name === name.toUpperCase()) {
						array.push(headers[i].segment);
					}
				}
				return array;
			},

			set: function(name, segment) {
				var array = [], i, ii, max;

				if (typeof(segment) === 'string') {
					array.push(segment);
				} else {
					array = segment;
				}

				for (i = ii = 0, max = headers.length; i < max; i++) {
					if (headers[i].name === name.toUpperCase()) {
						headers[i].segment = array[ii];
						headers[i].length = array[ii].length;
						ii++;
					}
					if (ii >= array.length) {
						break;
					}
				}
			},

			purge: function() {
				headers = [];
				read.init(null);
				read = null;
			}
		};
	};
});

// Included from: src/javascript/runtime/html5/image/ExifParser.js

/**
 * ExifParser.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/ExifParser
@private
*/
define("moxie/runtime/html5/image/ExifParser", [
	"moxie/core/utils/Basic",
	"moxie/runtime/html5/utils/BinaryReader"
], function(Basic, BinaryReader) {
	
	return function ExifParser() {
		// Private ExifParser fields
		var data, tags, Tiff, offsets = {}, tagDescs;

		data = new BinaryReader();

		tags = {
			tiff : {
				/*
				The image orientation viewed in terms of rows and columns.

				1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
				2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
				3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
				4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
				5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
				6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
				7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
				8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
				*/
				0x0112: 'Orientation',
				0x010E: 'ImageDescription',
				0x010F: 'Make',
				0x0110: 'Model',
				0x0131: 'Software',
				0x8769: 'ExifIFDPointer',
				0x8825:	'GPSInfoIFDPointer'
			},
			exif : {
				0x9000: 'ExifVersion',
				0xA001: 'ColorSpace',
				0xA002: 'PixelXDimension',
				0xA003: 'PixelYDimension',
				0x9003: 'DateTimeOriginal',
				0x829A: 'ExposureTime',
				0x829D: 'FNumber',
				0x8827: 'ISOSpeedRatings',
				0x9201: 'ShutterSpeedValue',
				0x9202: 'ApertureValue'	,
				0x9207: 'MeteringMode',
				0x9208: 'LightSource',
				0x9209: 'Flash',
				0x920A: 'FocalLength',
				0xA402: 'ExposureMode',
				0xA403: 'WhiteBalance',
				0xA406: 'SceneCaptureType',
				0xA404: 'DigitalZoomRatio',
				0xA408: 'Contrast',
				0xA409: 'Saturation',
				0xA40A: 'Sharpness'
			},
			gps : {
				0x0000: 'GPSVersionID',
				0x0001: 'GPSLatitudeRef',
				0x0002: 'GPSLatitude',
				0x0003: 'GPSLongitudeRef',
				0x0004: 'GPSLongitude'
			}
		};

		tagDescs = {
			'ColorSpace': {
				1: 'sRGB',
				0: 'Uncalibrated'
			},

			'MeteringMode': {
				0: 'Unknown',
				1: 'Average',
				2: 'CenterWeightedAverage',
				3: 'Spot',
				4: 'MultiSpot',
				5: 'Pattern',
				6: 'Partial',
				255: 'Other'
			},

			'LightSource': {
				1: 'Daylight',
				2: 'Fliorescent',
				3: 'Tungsten',
				4: 'Flash',
				9: 'Fine weather',
				10: 'Cloudy weather',
				11: 'Shade',
				12: 'Daylight fluorescent (D 5700 - 7100K)',
				13: 'Day white fluorescent (N 4600 -5400K)',
				14: 'Cool white fluorescent (W 3900 - 4500K)',
				15: 'White fluorescent (WW 3200 - 3700K)',
				17: 'Standard light A',
				18: 'Standard light B',
				19: 'Standard light C',
				20: 'D55',
				21: 'D65',
				22: 'D75',
				23: 'D50',
				24: 'ISO studio tungsten',
				255: 'Other'
			},

			'Flash': {
				0x0000: 'Flash did not fire.',
				0x0001: 'Flash fired.',
				0x0005: 'Strobe return light not detected.',
				0x0007: 'Strobe return light detected.',
				0x0009: 'Flash fired, compulsory flash mode',
				0x000D: 'Flash fired, compulsory flash mode, return light not detected',
				0x000F: 'Flash fired, compulsory flash mode, return light detected',
				0x0010: 'Flash did not fire, compulsory flash mode',
				0x0018: 'Flash did not fire, auto mode',
				0x0019: 'Flash fired, auto mode',
				0x001D: 'Flash fired, auto mode, return light not detected',
				0x001F: 'Flash fired, auto mode, return light detected',
				0x0020: 'No flash function',
				0x0041: 'Flash fired, red-eye reduction mode',
				0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
				0x0047: 'Flash fired, red-eye reduction mode, return light detected',
				0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
				0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
				0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
				0x0059: 'Flash fired, auto mode, red-eye reduction mode',
				0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
				0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
			},

			'ExposureMode': {
				0: 'Auto exposure',
				1: 'Manual exposure',
				2: 'Auto bracket'
			},

			'WhiteBalance': {
				0: 'Auto white balance',
				1: 'Manual white balance'
			},

			'SceneCaptureType': {
				0: 'Standard',
				1: 'Landscape',
				2: 'Portrait',
				3: 'Night scene'
			},

			'Contrast': {
				0: 'Normal',
				1: 'Soft',
				2: 'Hard'
			},

			'Saturation': {
				0: 'Normal',
				1: 'Low saturation',
				2: 'High saturation'
			},

			'Sharpness': {
				0: 'Normal',
				1: 'Soft',
				2: 'Hard'
			},

			// GPS related
			'GPSLatitudeRef': {
				N: 'North latitude',
				S: 'South latitude'
			},

			'GPSLongitudeRef': {
				E: 'East longitude',
				W: 'West longitude'
			}
		};

		function extractTags(IFD_offset, tags2extract) {
			var length = data.SHORT(IFD_offset), i, ii,
				tag, type, count, tagOffset, offset, value, values = [], hash = {};

			for (i = 0; i < length; i++) {
				// Set binary reader pointer to beginning of the next tag
				offset = tagOffset = IFD_offset + 12 * i + 2;

				tag = tags2extract[data.SHORT(offset)];

				if (tag === undefined) {
					continue; // Not the tag we requested
				}

				type = data.SHORT(offset+=2);
				count = data.LONG(offset+=2);

				offset += 4;
				values = [];

				switch (type) {
					case 1: // BYTE
					case 7: // UNDEFINED
						if (count > 4) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.BYTE(offset + ii);
						}

						break;

					case 2: // STRING
						if (count > 4) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						hash[tag] = data.STRING(offset, count - 1);

						continue;

					case 3: // SHORT
						if (count > 2) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.SHORT(offset + ii*2);
						}

						break;

					case 4: // LONG
						if (count > 1) {
							offset = data.LONG(offset) + offsets.tiffHeader;
						}

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.LONG(offset + ii*4);
						}

						break;

					case 5: // RATIONAL
						offset = data.LONG(offset) + offsets.tiffHeader;

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.LONG(offset + ii*4) / data.LONG(offset + ii*4 + 4);
						}

						break;

					case 9: // SLONG
						offset = data.LONG(offset) + offsets.tiffHeader;

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.SLONG(offset + ii*4);
						}

						break;

					case 10: // SRATIONAL
						offset = data.LONG(offset) + offsets.tiffHeader;

						for (ii = 0; ii < count; ii++) {
							values[ii] = data.SLONG(offset + ii*4) / data.SLONG(offset + ii*4 + 4);
						}

						break;

					default:
						continue;
				}

				value = (count == 1 ? values[0] : values);

				if (tagDescs.hasOwnProperty(tag) && typeof value != 'object') {
					hash[tag] = tagDescs[tag][value];
				} else {
					hash[tag] = value;
				}
			}

			return hash;
		}

		function getIFDOffsets() {
			var idx = offsets.tiffHeader;

			// Set read order of multi-byte data
			data.II(data.SHORT(idx) == 0x4949);

			// Check if always present bytes are indeed present
			if (data.SHORT(idx+=2) !== 0x002A) {
				return false;
			}

			offsets.IFD0 = offsets.tiffHeader + data.LONG(idx += 2);
			Tiff = extractTags(offsets.IFD0, tags.tiff);

			if ('ExifIFDPointer' in Tiff) {
				offsets.exifIFD = offsets.tiffHeader + Tiff.ExifIFDPointer;
				delete Tiff.ExifIFDPointer;
			}

			if ('GPSInfoIFDPointer' in Tiff) {
				offsets.gpsIFD = offsets.tiffHeader + Tiff.GPSInfoIFDPointer;
				delete Tiff.GPSInfoIFDPointer;
			}
			return true;
		}

		// At the moment only setting of simple (LONG) values, that do not require offset recalculation, is supported
		function setTag(ifd, tag, value) {
			var offset, length, tagOffset, valueOffset = 0;

			// If tag name passed translate into hex key
			if (typeof(tag) === 'string') {
				var tmpTags = tags[ifd.toLowerCase()];
				for (var hex in tmpTags) {
					if (tmpTags[hex] === tag) {
						tag = hex;
						break;
					}
				}
			}
			offset = offsets[ifd.toLowerCase() + 'IFD'];
			length = data.SHORT(offset);

			for (var i = 0; i < length; i++) {
				tagOffset = offset + 12 * i + 2;

				if (data.SHORT(tagOffset) == tag) {
					valueOffset = tagOffset + 8;
					break;
				}
			}

			if (!valueOffset) {
				return false;
			}

			data.LONG(valueOffset, value);
			return true;
		}


		// Public functions
		return {
			init: function(segment) {
				// Reset internal data
				offsets = {
					tiffHeader: 10
				};

				if (segment === undefined || !segment.length) {
					return false;
				}

				data.init(segment);

				// Check if that's APP1 and that it has EXIF
				if (data.SHORT(0) === 0xFFE1 && data.STRING(4, 5).toUpperCase() === "EXIF\0") {
					return getIFDOffsets();
				}
				return false;
			},

			TIFF: function() {
				return Tiff;
			},

			EXIF: function() {
				var Exif;

				// Populate EXIF hash
				Exif = extractTags(offsets.exifIFD, tags.exif);

				// Fix formatting of some tags
				if (Exif.ExifVersion && Basic.typeOf(Exif.ExifVersion) === 'array') {
					for (var i = 0, exifVersion = ''; i < Exif.ExifVersion.length; i++) {
						exifVersion += String.fromCharCode(Exif.ExifVersion[i]);
					}
					Exif.ExifVersion = exifVersion;
				}

				return Exif;
			},

			GPS: function() {
				var GPS;

				GPS = extractTags(offsets.gpsIFD, tags.gps);

				// iOS devices (and probably some others) do not put in GPSVersionID tag (why?..)
				if (GPS.GPSVersionID && Basic.typeOf(GPS.GPSVersionID) === 'array') {
					GPS.GPSVersionID = GPS.GPSVersionID.join('.');
				}

				return GPS;
			},

			setExif: function(tag, value) {
				// Right now only setting of width/height is possible
				if (tag !== 'PixelXDimension' && tag !== 'PixelYDimension') {return false;}

				return setTag('exif', tag, value);
			},


			getBinary: function() {
				return data.SEGMENT();
			},

			purge: function() {
				data.init(null);
				data = Tiff = null;
				offsets = {};
			}
		};
	};
});

// Included from: src/javascript/runtime/html5/image/JPEG.js

/**
 * JPEG.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/JPEG
@private
*/
define("moxie/runtime/html5/image/JPEG", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/html5/image/JPEGHeaders",
	"moxie/runtime/html5/utils/BinaryReader",
	"moxie/runtime/html5/image/ExifParser"
], function(Basic, x, JPEGHeaders, BinaryReader, ExifParser) {
	
	function JPEG(binstr) {
		var _binstr, _br, _hm, _ep, _info, hasExif;

		function _getDimensions() {
			var idx = 0, marker, length;

			// examine all through the end, since some images might have very large APP segments
			while (idx <= _binstr.length) {
				marker = _br.SHORT(idx += 2);

				if (marker >= 0xFFC0 && marker <= 0xFFC3) { // SOFn
					idx += 5; // marker (2 bytes) + length (2 bytes) + Sample precision (1 byte)
					return {
						height: _br.SHORT(idx),
						width: _br.SHORT(idx += 2)
					};
				}
				length = _br.SHORT(idx += 2);
				idx += length - 2;
			}
			return null;
		}

		_binstr = binstr;

		_br = new BinaryReader();
		_br.init(_binstr);

		// check if it is jpeg
		if (_br.SHORT(0) !== 0xFFD8) {
			throw new x.ImageError(x.ImageError.WRONG_FORMAT);
		}

		// backup headers
		_hm = new JPEGHeaders(binstr);

		// extract exif info
		_ep = new ExifParser();
		hasExif = !!_ep.init(_hm.get('app1')[0]);

		// get dimensions
		_info = _getDimensions.call(this);

		Basic.extend(this, {
			type: 'image/jpeg',

			size: _binstr.length,

			width: _info && _info.width || 0,

			height: _info && _info.height || 0,

			setExif: function(tag, value) {
				if (!hasExif) {
					return false; // or throw an exception
				}

				if (Basic.typeOf(tag) === 'object') {
					Basic.each(tag, function(value, tag) {
						_ep.setExif(tag, value);
					});
				} else {
					_ep.setExif(tag, value);
				}

				// update internal headers
				_hm.set('app1', _ep.getBinary());
			},

			writeHeaders: function() {
				if (!arguments.length) {
					// if no arguments passed, update headers internally
					return (_binstr = _hm.restore(_binstr));
				}
				return _hm.restore(arguments[0]);
			},

			stripHeaders: function(binstr) {
				return _hm.strip(binstr);
			},

			purge: function() {
				_purge.call(this);
			}
		});

		if (hasExif) {
			this.meta = {
				tiff: _ep.TIFF(),
				exif: _ep.EXIF(),
				gps: _ep.GPS()
			};
		}

		function _purge() {
			if (!_ep || !_hm || !_br) { 
				return; // ignore any repeating purge requests
			}
			_ep.purge();
			_hm.purge();
			_br.init(null);
			_binstr = _info = _hm = _ep = _br = null;
		}
	}

	return JPEG;
});

// Included from: src/javascript/runtime/html5/image/PNG.js

/**
 * PNG.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/PNG
@private
*/
define("moxie/runtime/html5/image/PNG", [
	"moxie/core/Exceptions",
	"moxie/core/utils/Basic",
	"moxie/runtime/html5/utils/BinaryReader"
], function(x, Basic, BinaryReader) {
	
	function PNG(binstr) {
		var _binstr, _br, _hm, _ep, _info;

		_binstr = binstr;

		_br = new BinaryReader();
		_br.init(_binstr);

		// check if it's png
		(function() {
			var idx = 0, i = 0
			, signature = [0x8950, 0x4E47, 0x0D0A, 0x1A0A]
			;

			for (i = 0; i < signature.length; i++, idx += 2) {
				if (signature[i] != _br.SHORT(idx)) {
					throw new x.ImageError(x.ImageError.WRONG_FORMAT);
				}
			}
		}());

		function _getDimensions() {
			var chunk, idx;

			chunk = _getChunkAt.call(this, 8);

			if (chunk.type == 'IHDR') {
				idx = chunk.start;
				return {
					width: _br.LONG(idx),
					height: _br.LONG(idx += 4)
				};
			}
			return null;
		}

		function _purge() {
			if (!_br) {
				return; // ignore any repeating purge requests
			}
			_br.init(null);
			_binstr = _info = _hm = _ep = _br = null;
		}

		_info = _getDimensions.call(this);

		Basic.extend(this, {
			type: 'image/png',

			size: _binstr.length,

			width: _info.width,

			height: _info.height,

			purge: function() {
				_purge.call(this);
			}
		});

		// for PNG we can safely trigger purge automatically, as we do not keep any data for later
		_purge.call(this);

		function _getChunkAt(idx) {
			var length, type, start, CRC;

			length = _br.LONG(idx);
			type = _br.STRING(idx += 4, 4);
			start = idx += 4;
			CRC = _br.LONG(idx + length);

			return {
				length: length,
				type: type,
				start: start,
				CRC: CRC
			};
		}
	}

	return PNG;
});

// Included from: src/javascript/runtime/html5/image/ImageInfo.js

/**
 * ImageInfo.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/ImageInfo
@private
*/
define("moxie/runtime/html5/image/ImageInfo", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/html5/image/JPEG",
	"moxie/runtime/html5/image/PNG"
], function(Basic, x, JPEG, PNG) {
	/**
	Optional image investigation tool for HTML5 runtime. Provides the following features:
	- ability to distinguish image type (JPEG or PNG) by signature
	- ability to extract image width/height directly from it's internals, without preloading in memory (fast)
	- ability to extract APP headers from JPEGs (Exif, GPS, etc)
	- ability to replace width/height tags in extracted JPEG headers
	- ability to restore APP headers, that were for example stripped during image manipulation

	@class ImageInfo
	@constructor
	@param {String} binstr Image source as binary string
	*/
	return function(binstr) {
		var _cs = [JPEG, PNG], _img;

		// figure out the format, throw: ImageError.WRONG_FORMAT if not supported
		_img = (function() {
			for (var i = 0; i < _cs.length; i++) {
				try {
					return new _cs[i](binstr);
				} catch (ex) {
					// console.info(ex);
				}
			}
			throw new x.ImageError(x.ImageError.WRONG_FORMAT);
		}());

		Basic.extend(this, {
			/**
			Image Mime Type extracted from it's depths

			@property type
			@type {String}
			@default ''
			*/
			type: '',

			/**
			Image size in bytes

			@property size
			@type {Number}
			@default 0
			*/
			size: 0,

			/**
			Image width extracted from image source

			@property width
			@type {Number}
			@default 0
			*/
			width: 0,

			/**
			Image height extracted from image source

			@property height
			@type {Number}
			@default 0
			*/
			height: 0,

			/**
			Sets Exif tag. Currently applicable only for width and height tags. Obviously works only with JPEGs.

			@method setExif
			@param {String} tag Tag to set
			@param {Mixed} value Value to assign to the tag
			*/
			setExif: function() {},

			/**
			Restores headers to the source.

			@method writeHeaders
			@param {String} data Image source as binary string
			@return {String} Updated binary string
			*/
			writeHeaders: function(data) {
				return data;
			},

			/**
			Strip all headers from the source.

			@method stripHeaders
			@param {String} data Image source as binary string
			@return {String} Updated binary string
			*/
			stripHeaders: function(data) {
				return data;
			},

			/**
			Dispose resources.

			@method purge
			*/
			purge: function() {}
		});

		Basic.extend(this, _img);

		this.purge = function() {
			_img.purge();
			_img = null;
		};
	};
});

// Included from: src/javascript/runtime/html5/image/MegaPixel.js

/**
(The MIT License)

Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Mega pixel image rendering library for iOS6 Safari
 *
 * Fixes iOS6 Safari's image file rendering issue for large size image (over mega-pixel),
 * which causes unexpected subsampling when drawing it in canvas.
 * By using this library, you can safely render the image with proper stretching.
 *
 * Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>
 * Released under the MIT license
 */

/**
@class moxie/runtime/html5/image/MegaPixel
@private
*/
define("moxie/runtime/html5/image/MegaPixel", [], function() {

	/**
	 * Rendering image element (with resizing) into the canvas element
	 */
	function renderImageToCanvas(img, canvas, options) {
		var iw = img.naturalWidth, ih = img.naturalHeight;
		var width = options.width, height = options.height;
		var x = options.x || 0, y = options.y || 0;
		var ctx = canvas.getContext('2d');
		if (detectSubsampling(img)) {
			iw /= 2;
			ih /= 2;
		}
		var d = 1024; // size of tiling canvas
		var tmpCanvas = document.createElement('canvas');
		tmpCanvas.width = tmpCanvas.height = d;
		var tmpCtx = tmpCanvas.getContext('2d');
		var vertSquashRatio = detectVerticalSquash(img, iw, ih);
		var sy = 0;
		while (sy < ih) {
			var sh = sy + d > ih ? ih - sy : d;
			var sx = 0;
			while (sx < iw) {
				var sw = sx + d > iw ? iw - sx : d;
				tmpCtx.clearRect(0, 0, d, d);
				tmpCtx.drawImage(img, -sx, -sy);
				var dx = (sx * width / iw + x) << 0;
				var dw = Math.ceil(sw * width / iw);
				var dy = (sy * height / ih / vertSquashRatio + y) << 0;
				var dh = Math.ceil(sh * height / ih / vertSquashRatio);
				ctx.drawImage(tmpCanvas, 0, 0, sw, sh, dx, dy, dw, dh);
				sx += d;
			}
			sy += d;
		}
		tmpCanvas = tmpCtx = null;
	}

	/**
	 * Detect subsampling in loaded image.
	 * In iOS, larger images than 2M pixels may be subsampled in rendering.
	 */
	function detectSubsampling(img) {
		var iw = img.naturalWidth, ih = img.naturalHeight;
		if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
			var canvas = document.createElement('canvas');
			canvas.width = canvas.height = 1;
			var ctx = canvas.getContext('2d');
			ctx.drawImage(img, -iw + 1, 0);
			// subsampled image becomes half smaller in rendering size.
			// check alpha channel value to confirm image is covering edge pixel or not.
			// if alpha value is 0 image is not covering, hence subsampled.
			return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
		} else {
			return false;
		}
	}


	/**
	 * Detecting vertical squash in loaded image.
	 * Fixes a bug which squash image vertically while drawing into canvas for some images.
	 */
	function detectVerticalSquash(img, iw, ih) {
		var canvas = document.createElement('canvas');
		canvas.width = 1;
		canvas.height = ih;
		var ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		var data = ctx.getImageData(0, 0, 1, ih).data;
		// search image edge pixel position in case it is squashed vertically.
		var sy = 0;
		var ey = ih;
		var py = ih;
		while (py > sy) {
			var alpha = data[(py - 1) * 4 + 3];
			if (alpha === 0) {
				ey = py;
			} else {
			sy = py;
			}
			py = (ey + sy) >> 1;
		}
		canvas = null;
		var ratio = (py / ih);
		return (ratio === 0) ? 1 : ratio;
	}

	return {
		isSubsampled: detectSubsampling,
		renderTo: renderImageToCanvas
	};
});

// Included from: src/javascript/runtime/html5/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html5/image/Image
@private
*/
define("moxie/runtime/html5/image/Image", [
	"moxie/runtime/html5/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/core/utils/Encode",
	"moxie/file/File",
	"moxie/runtime/html5/image/ImageInfo",
	"moxie/runtime/html5/image/MegaPixel",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Env"
], function(extensions, Basic, x, Encode, File, ImageInfo, MegaPixel, Mime, Env) {
	
	function HTML5Image() {
		var me = this
		, _img, _imgInfo, _canvas, _binStr, _blob
		, _modified = false // is set true whenever image is modified
		, _preserveHeaders = true
		;

		Basic.extend(this, {
			loadFromBlob: function(blob) {
				var comp = this, I = comp.getRuntime()
				, asBinary = arguments.length > 1 ? arguments[1] : true
				;

				if (!I.can('access_binary')) {
					throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
				}

				_blob = blob;

				if (blob.isDetached()) {
					_binStr = blob.getSource();
					_preload.call(this, _binStr);
					return;
				} else {
					_readAsDataUrl.call(this, blob.getSource(), function(dataUrl) {
						if (asBinary) {
							_binStr = _toBinary(dataUrl);
						}
						_preload.call(comp, dataUrl);
					});
				}
			},

			loadFromImage: function(img, exact) {
				this.meta = img.meta;

				_blob = new File(null, {
					name: img.name,
					size: img.size,
					type: img.type
				});

				_preload.call(this, exact ? (_binStr = img.getAsBinaryString()) : img.getAsDataURL());
			},

			getInfo: function() {
				var I = this.getRuntime(), info;

				if (!_imgInfo && _binStr && I.can('access_image_binary')) {
					_imgInfo = new ImageInfo(_binStr);
				}

				info = {
					width: _getImg().width || 0,
					height: _getImg().height || 0,
					type: _blob.type || Mime.getFileMime(_blob.name),
					size: _binStr && _binStr.length || _blob.size || 0,
					name: _blob.name || '',
					meta: _imgInfo && _imgInfo.meta || this.meta || {}
				};

				return info;
			},

			downsize: function() {
				_downsize.apply(this, arguments);
			},

			getAsCanvas: function() {
				if (_canvas) {
					_canvas.id = this.uid + '_canvas';
				}
				return _canvas;
			},

			getAsBlob: function(type, quality) {
				if (type !== this.type) {
					// if different mime type requested prepare image for conversion
					_downsize.call(this, this.width, this.height, false);
				}
				return new File(null, {
					name: _blob.name || '',
					type: type,
					data: me.getAsBinaryString.call(this, type, quality)
				});
			},

			getAsDataURL: function(type) {
				var quality = arguments[1] || 90;

				// if image has not been modified, return the source right away
				if (!_modified) {
					return _img.src;
				}

				if ('image/jpeg' !== type) {
					return _canvas.toDataURL('image/png');
				} else {
					try {
						// older Geckos used to result in an exception on quality argument
						return _canvas.toDataURL('image/jpeg', quality/100);
					} catch (ex) {
						return _canvas.toDataURL('image/jpeg');
					}
				}
			},

			getAsBinaryString: function(type, quality) {
				// if image has not been modified, return the source right away
				if (!_modified) {
					// if image was not loaded from binary string
					if (!_binStr) {
						_binStr = _toBinary(me.getAsDataURL(type, quality));
					}
					return _binStr;
				}

				if ('image/jpeg' !== type) {
					_binStr = _toBinary(me.getAsDataURL(type, quality));
				} else {
					var dataUrl;

					// if jpeg
					if (!quality) {
						quality = 90;
					}

					try {
						// older Geckos used to result in an exception on quality argument
						dataUrl = _canvas.toDataURL('image/jpeg', quality/100);
					} catch (ex) {
						dataUrl = _canvas.toDataURL('image/jpeg');
					}

					_binStr = _toBinary(dataUrl);

					if (_imgInfo) {
						_binStr = _imgInfo.stripHeaders(_binStr);

						if (_preserveHeaders) {
							// update dimensions info in exif
							if (_imgInfo.meta && _imgInfo.meta.exif) {
								_imgInfo.setExif({
									PixelXDimension: this.width,
									PixelYDimension: this.height
								});
							}

							// re-inject the headers
							_binStr = _imgInfo.writeHeaders(_binStr);
						}

						// will be re-created from fresh on next getInfo call
						_imgInfo.purge();
						_imgInfo = null;
					}
				}

				_modified = false;

				return _binStr;
			},

			destroy: function() {
				me = null;
				_purge.call(this);
				this.getRuntime().getShim().removeInstance(this.uid);
			}
		});


		function _getImg() {
			if (!_canvas && !_img) {
				throw new x.ImageError(x.DOMException.INVALID_STATE_ERR);
			}
			return _canvas || _img;
		}


		function _toBinary(str) {
			return Encode.atob(str.substring(str.indexOf('base64,') + 7));
		}


		function _toDataUrl(str, type) {
			return 'data:' + (type || '') + ';base64,' + Encode.btoa(str);
		}


		function _preload(str) {
			var comp = this;

			_img = new Image();
			_img.onerror = function() {
				_purge.call(this);
				comp.trigger('error', new x.ImageError(x.ImageError.WRONG_FORMAT));
			};
			_img.onload = function() {
				comp.trigger('load');
			};

			_img.src = /^data:[^;]*;base64,/.test(str) ? str : _toDataUrl(str, _blob.type);
		}


		function _readAsDataUrl(file, callback) {
			var comp = this, fr;

			// use FileReader if it's available
			if (window.FileReader) {
				fr = new FileReader();
				fr.onload = function() {
					callback(this.result);
				};
				fr.onerror = function() {
					comp.trigger('error', new x.FileException(x.FileException.NOT_READABLE_ERR));
				};
				fr.readAsDataURL(file);
			} else {
				return callback(file.getAsDataURL());
			}
		}

		function _downsize(width, height, crop, preserveHeaders) {
			var self = this
			, scale
			, mathFn
			, x = 0
			, y = 0
			, img
			, destWidth
			, destHeight
			, orientation
			;

			_preserveHeaders = preserveHeaders; // we will need to check this on export (see getAsBinaryString())

			// take into account orientation tag
			orientation = (this.meta && this.meta.tiff && this.meta.tiff.Orientation) || 1;

			if (Basic.inArray(orientation, [5,6,7,8]) !== -1) { // values that require 90 degree rotation
				// swap dimensions
				var tmp = width;
				width = height;
				height = tmp;
			}

			img = _getImg();

			// unify dimensions
			mathFn = !crop ? Math.min : Math.max;
			scale = mathFn(width/img.width, height/img.height);
		
			// we only downsize here
			if (scale > 1 && (!crop || preserveHeaders)) { // when cropping one of dimensions may still exceed max, so process it anyway
				this.trigger('Resize');
				return;
			}

			// prepare canvas if necessary
			if (!_canvas) {
				_canvas = document.createElement("canvas");
			}

			// calculate dimensions of proportionally resized image
			destWidth = Math.round(img.width * scale);	
			destHeight = Math.round(img.height * scale);


			// scale image and canvas
			if (crop) {
				_canvas.width = width;
				_canvas.height = height;

				// if dimensions of the resulting image still larger than canvas, center it
				if (destWidth > width) {
					x = Math.round((destWidth - width) / 2);
				}

				if (destHeight > height) {
					y = Math.round((destHeight - height) / 2);
				}
			} else {
				_canvas.width = destWidth;
				_canvas.height = destHeight;
			}

			// rotate if required, according to orientation tag
			if (!_preserveHeaders) {
				_rotateToOrientaion(_canvas.width, _canvas.height, orientation);
			}

			_drawToCanvas.call(this, img, _canvas, -x, -y, destWidth, destHeight);

			this.width = _canvas.width;
			this.height = _canvas.height;

			_modified = true;
			self.trigger('Resize');
		}


		function _drawToCanvas(img, canvas, x, y, w, h) {
			if (Env.OS === 'iOS') { 
				// avoid squish bug in iOS6
				MegaPixel.renderTo(img, canvas, { width: w, height: h, x: x, y: y });
			} else {
				var ctx = canvas.getContext('2d');
				ctx.drawImage(img, x, y, w, h);
			}
		}


		/**
		* Transform canvas coordination according to specified frame size and orientation
		* Orientation value is from EXIF tag
		* @author Shinichi Tomita <shinichi.tomita@gmail.com>
		*/
		function _rotateToOrientaion(width, height, orientation) {
			switch (orientation) {
				case 5:
				case 6:
				case 7:
				case 8:
					_canvas.width = height;
					_canvas.height = width;
					break;
				default:
					_canvas.width = width;
					_canvas.height = height;
			}

			/**
			1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
			2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
			3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
			4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
			5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
			6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
			7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
			8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
			*/

			var ctx = _canvas.getContext('2d');
			switch (orientation) {
				case 2:
					// horizontal flip
					ctx.translate(width, 0);
					ctx.scale(-1, 1);
					break;
				case 3:
					// 180 rotate left
					ctx.translate(width, height);
					ctx.rotate(Math.PI);
					break;
				case 4:
					// vertical flip
					ctx.translate(0, height);
					ctx.scale(1, -1);
					break;
				case 5:
					// vertical flip + 90 rotate right
					ctx.rotate(0.5 * Math.PI);
					ctx.scale(1, -1);
					break;
				case 6:
					// 90 rotate right
					ctx.rotate(0.5 * Math.PI);
					ctx.translate(0, -height);
					break;
				case 7:
					// horizontal flip + 90 rotate right
					ctx.rotate(0.5 * Math.PI);
					ctx.translate(width, -height);
					ctx.scale(-1, 1);
					break;
				case 8:
					// 90 rotate left
					ctx.rotate(-0.5 * Math.PI);
					ctx.translate(-width, 0);
					break;
			}
		}


		function _purge() {
			if (_imgInfo) {
				_imgInfo.purge();
				_imgInfo = null;
			}
			_binStr = _img = _canvas = _blob = null;
			_modified = false;
		}
	}

	return (extensions.Image = HTML5Image);
});

// Included from: src/javascript/runtime/flash/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global ActiveXObject:true */

/**
Defines constructor for Flash runtime.

@class moxie/runtime/flash/Runtime
@private
*/
define("moxie/runtime/flash/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Env",
	"moxie/core/utils/Dom",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime"
], function(Basic, Env, Dom, x, Runtime) {
	
	var type = 'flash', extensions = {};

	/**
	Get the version of the Flash Player

	@method getShimVersion
	@private
	@return {Number} Flash Player version
	*/
	function getShimVersion() {
		var version;

		try {
			version = navigator.plugins['Shockwave Flash'];
			version = version.description;
		} catch (e1) {
			try {
				version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
			} catch (e2) {
				version = '0.0';
			}
		}
		version = version.match(/\d+/g);
		return parseFloat(version[0] + '.' + version[1]);
	}

	/**
	Constructor for the Flash Runtime

	@class FlashRuntime
	@extends Runtime
	*/
	function FlashRuntime(options) {
		var I = this, initTimer;

		options = Basic.extend({ swf_url: Env.swf_url }, options);

		Runtime.call(this, options, type, {
			access_binary: function(value) {
				return value && I.mode === 'browser';
			},
			access_image_binary: function(value) {
				return value && I.mode === 'browser';
			},
			display_media: Runtime.capTrue,
			do_cors: Runtime.capTrue,
			drag_and_drop: false,
			report_upload_progress: function() {
				return I.mode === 'client';
			},
			resize_image: Runtime.capTrue,
			return_response_headers: false,
			return_response_type: function(responseType) {
				if (responseType === 'json' && !!window.JSON) {
					return true;
				} 
				return !Basic.arrayDiff(responseType, ['', 'text', 'document']) || I.mode === 'browser';
			},
			return_status_code: function(code) {
				return I.mode === 'browser' || !Basic.arrayDiff(code, [200, 404]);
			},
			select_file: Runtime.capTrue,
			select_multiple: Runtime.capTrue,
			send_binary_string: function(value) {
				return value && I.mode === 'browser';
			},
			send_browser_cookies: function(value) {
				return value && I.mode === 'browser';
			},
			send_custom_headers: function(value) {
				return value && I.mode === 'browser';
			},
			send_multipart: Runtime.capTrue,
			slice_blob: Runtime.capTrue,
			stream_upload: function(value) {
				return value && I.mode === 'browser';
			},
			summon_file_dialog: false,
			upload_filesize: function(size) {
				return Basic.parseSizeStr(size) <= 2097152 || I.mode === 'client';
			},
			use_http_method: function(methods) {
				return !Basic.arrayDiff(methods, ['GET', 'POST']);
			}
		}, { 
			// capabilities that require specific mode
			access_binary: function(value) {
				return value ? 'browser' : 'client';
			},
			access_image_binary: function(value) {
				return value ? 'browser' : 'client';
			},
			report_upload_progress: function(value) {
				return value ? 'browser' : 'client';
			},
			return_response_type: function(responseType) {
				return Basic.arrayDiff(responseType, ['', 'text', 'json', 'document']) ? 'browser' : ['client', 'browser'];
			},
			return_status_code: function(code) {
				return Basic.arrayDiff(code, [200, 404]) ? 'browser' : ['client', 'browser'];
			},
			send_binary_string: function(value) {
				return value ? 'browser' : 'client';
			},
			send_browser_cookies: function(value) {
				return value ? 'browser' : 'client';
			},
			send_custom_headers: function(value) {
				return value ? 'browser' : 'client';
			},
			stream_upload: function(value) {
				return value ? 'client' : 'browser';
			},
			upload_filesize: function(size) {
				return Basic.parseSizeStr(size) >= 2097152 ? 'client' : 'browser';
			}
		}, 'client');


		// minimal requirement for Flash Player version
		if (getShimVersion() < 10) {
			this.mode = false; // with falsy mode, runtime won't operable, no matter what the mode was before
		}


		Basic.extend(this, {

			getShim: function() {
				return Dom.get(this.uid);
			},

			shimExec: function(component, action) {
				var args = [].slice.call(arguments, 2);
				return I.getShim().exec(this.uid, component, action, args);
			},

			init: function() {
				var html, el, container;

				container = this.getShimContainer();

				// if not the minimal height, shims are not initialized in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
				Basic.extend(container.style, {
					position: 'absolute',
					top: '-8px',
					left: '-8px',
					width: '9px',
					height: '9px',
					overflow: 'hidden'
				});

				// insert flash object
				html = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' +  options.swf_url + '" ';

				if (Env.browser === 'IE') {
					html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
				}

				html += 'width="100%" height="100%" style="outline:0">'  +
					'<param name="movie" value="' + options.swf_url + '" />' +
					'<param name="flashvars" value="uid=' + escape(this.uid) + '&target=' + Env.global_event_dispatcher + '" />' +
					'<param name="wmode" value="transparent" />' +
					'<param name="allowscriptaccess" value="always" />' +
				'</object>';

				if (Env.browser === 'IE') {
					el = document.createElement('div');
					container.appendChild(el);
					el.outerHTML = html;
					el = container = null; // just in case
				} else {
					container.innerHTML = html;
				}

				// Init is dispatched by the shim
				initTimer = setTimeout(function() {
					if (I && !I.initialized) { // runtime might be already destroyed by this moment
						I.trigger("Error", new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));
					}
				}, 5000);
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					clearTimeout(initTimer); // initialization check might be still onwait
					options = initTimer = destroy = I = null;
				};
			}(this.destroy))

		}, extensions);
	}

	Runtime.addConstructor(type, FlashRuntime);

	return extensions;
});

// Included from: src/javascript/runtime/flash/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/Blob
@private
*/
define("moxie/runtime/flash/file/Blob", [
	"moxie/runtime/flash/Runtime",
	"moxie/file/Blob"
], function(extensions, Blob) {

	var FlashBlob = {
		slice: function(blob, start, end, type) {
			var self = this.getRuntime();

			if (start < 0) {
				start = Math.max(blob.size + start, 0);
			} else if (start > 0) {
				start = Math.min(start, blob.size);
			}

			if (end < 0) {
				end = Math.max(blob.size + end, 0);
			} else if (end > 0) {
				end = Math.min(end, blob.size);
			}

			blob = self.shimExec.call(this, 'Blob', 'slice', start, end, type || '');

			if (blob) {
				blob = new Blob(self.uid, blob);
			}
			return blob;
		}
	};

	return (extensions.Blob = FlashBlob);
});

// Included from: src/javascript/runtime/flash/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/FileInput
@private
*/
define("moxie/runtime/flash/file/FileInput", [
	"moxie/runtime/flash/Runtime"
], function(extensions) {
	
	var FileInput = {		
		init: function(options) {
			this.getRuntime().shimExec.call(this, 'FileInput', 'init', {
				name: options.name,
				accept: options.accept,
				multiple: options.multiple
			});
			this.trigger('ready');
		}
	};

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/flash/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/FileReader
@private
*/
define("moxie/runtime/flash/file/FileReader", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Encode"
], function(extensions, Encode) {

	var _result = '';

	function _formatData(data, op) {
		switch (op) {
			case 'readAsText':
				return Encode.atob(data, 'utf8');
			case 'readAsBinaryString':
				return Encode.atob(data);
			case 'readAsDataURL':
				return data;
		}
		return null;
	}

	var FileReader = {
		read: function(op, blob) {
			var target = this, self = target.getRuntime();

			// special prefix for DataURL read mode
			if (op === 'readAsDataURL') {
				_result = 'data:' + (blob.type || '') + ';base64,';
			}

			target.bind('Progress', function(e, data) {
				if (data) {
					_result += _formatData(data, op);
				}
			});

			return self.shimExec.call(this, 'FileReader', 'readAsBase64', blob.uid);
		},

		getResult: function() {
			return _result;
		},

		destroy: function() {
			_result = null;
		}
	};

	return (extensions.FileReader = FileReader);
});

// Included from: src/javascript/runtime/flash/file/FileReaderSync.js

/**
 * FileReaderSync.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/file/FileReaderSync
@private
*/
define("moxie/runtime/flash/file/FileReaderSync", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Encode"
], function(extensions, Encode) {
	
	function _formatData(data, op) {
		switch (op) {
			case 'readAsText':
				return Encode.atob(data, 'utf8');
			case 'readAsBinaryString':
				return Encode.atob(data);
			case 'readAsDataURL':
				return data;
		}
		return null;
	}

	var FileReaderSync = {
		read: function(op, blob) {
			var result, self = this.getRuntime();

			result = self.shimExec.call(this, 'FileReaderSync', 'readAsBase64', blob.uid);
			if (!result) {
				return null; // or throw ex
			}

			// special prefix for DataURL read mode
			if (op === 'readAsDataURL') {
				result = 'data:' + (blob.type || '') + ';base64,' + result;
			}

			return _formatData(result, op, blob.type);
		}
	};

	return (extensions.FileReaderSync = FileReaderSync);
});

// Included from: src/javascript/runtime/flash/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/flash/xhr/XMLHttpRequest", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Basic",
	"moxie/file/Blob",
	"moxie/file/File",
	"moxie/file/FileReaderSync",
	"moxie/xhr/FormData",
	"moxie/runtime/Transporter"
], function(extensions, Basic, Blob, File, FileReaderSync, FormData, Transporter) {
	
	var XMLHttpRequest = {

		send: function(meta, data) {
			var target = this, self = target.getRuntime();

			function send() {
				meta.transport = self.mode;
				self.shimExec.call(target, 'XMLHttpRequest', 'send', meta, data);
			}


			function appendBlob(name, blob) {
				self.shimExec.call(target, 'XMLHttpRequest', 'appendBlob', name, blob.uid);
				data = null;
				send();
			}


			function attachBlob(blob, cb) {
				var tr = new Transporter();

				tr.bind("TransportingComplete", function() {
					cb(this.result);
				});

				tr.transport(blob.getSource(), blob.type, {
					ruid: self.uid
				});
			}

			// copy over the headers if any
			if (!Basic.isEmptyObj(meta.headers)) {
				Basic.each(meta.headers, function(value, header) {
					self.shimExec.call(target, 'XMLHttpRequest', 'setRequestHeader', header, value.toString()); // Silverlight doesn't accept integers into the arguments of type object
				});
			}

			// transfer over multipart params and blob itself
			if (data instanceof FormData) {
				var blobField;
				data.each(function(value, name) {
					if (value instanceof Blob) {
						blobField = name;
					} else {
						self.shimExec.call(target, 'XMLHttpRequest', 'append', name, value);
					}
				});

				if (!data.hasBlob()) {
					data = null;
					send();
				} else {
					var blob = data.getBlob();
					if (blob.isDetached()) {
						attachBlob(blob, function(attachedBlob) {
							blob.destroy();
							appendBlob(blobField, attachedBlob);		
						});
					} else {
						appendBlob(blobField, blob);
					}
				}
			} else if (data instanceof Blob) {
				if (data.isDetached()) {
					attachBlob(data, function(attachedBlob) {
						data.destroy();
						data = attachedBlob.uid;
						send();
					});
				} else {
					data = data.uid;
					send();
				}
			} else {
				send();
			}
		},

		getResponse: function(responseType) {
			var frs, blob, self = this.getRuntime();

			blob = self.shimExec.call(this, 'XMLHttpRequest', 'getResponseAsBlob');

			if (blob) {
				blob = new File(self.uid, blob);

				if ('blob' === responseType) {
					return blob;
				}

				try { 
					frs = new FileReaderSync();

					if (!!~Basic.inArray(responseType, ["", "text"])) {
						return frs.readAsText(blob);
					} else if ('json' === responseType && !!window.JSON) {
						return JSON.parse(frs.readAsText(blob));
					}
				} finally {
					blob.destroy();
				}
			}
			return null;
		},

		abort: function(upload_complete_flag) {
			var self = this.getRuntime();

			self.shimExec.call(this, 'XMLHttpRequest', 'abort');

			this.dispatchEvent('readystatechange');
			// this.dispatchEvent('progress');
			this.dispatchEvent('abort');

			//if (!upload_complete_flag) {
				// this.dispatchEvent('uploadprogress');
			//}
		}
	};

	return (extensions.XMLHttpRequest = XMLHttpRequest);
});

// Included from: src/javascript/runtime/flash/runtime/Transporter.js

/**
 * Transporter.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/runtime/Transporter
@private
*/
define("moxie/runtime/flash/runtime/Transporter", [
	"moxie/runtime/flash/Runtime",
	"moxie/file/Blob"
], function(extensions, Blob) {

	var Transporter = {
		getAsBlob: function(type) {
			var self = this.getRuntime()
			, blob = self.shimExec.call(this, 'Transporter', 'getAsBlob', type)
			;
			if (blob) {
				return new Blob(self.uid, blob);
			}
			return null;
		}
	};

	return (extensions.Transporter = Transporter);
});

// Included from: src/javascript/runtime/flash/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/flash/image/Image
@private
*/
define("moxie/runtime/flash/image/Image", [
	"moxie/runtime/flash/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/Transporter",
	"moxie/file/Blob",
	"moxie/file/FileReaderSync"
], function(extensions, Basic, Transporter, Blob, FileReaderSync) {
	
	var Image = {
		loadFromBlob: function(blob) {
			var comp = this, self = comp.getRuntime();

			function exec(srcBlob) {
				self.shimExec.call(comp, 'Image', 'loadFromBlob', srcBlob.uid);
				comp = self = null;
			}

			if (blob.isDetached()) { // binary string
				var tr = new Transporter();
				tr.bind("TransportingComplete", function() {
					exec(tr.result.getSource());
				});
				tr.transport(blob.getSource(), blob.type, { ruid: self.uid });
			} else {
				exec(blob.getSource());
			}
		},

		loadFromImage: function(img) {
			var self = this.getRuntime();
			return self.shimExec.call(this, 'Image', 'loadFromImage', img.uid);
		},

		getAsBlob: function(type, quality) {
			var self = this.getRuntime()
			, blob = self.shimExec.call(this, 'Image', 'getAsBlob', type, quality)
			;
			if (blob) {
				return new Blob(self.uid, blob);
			}
			return null;
		},

		getAsDataURL: function() {
			var self = this.getRuntime()
			, blob = self.Image.getAsBlob.apply(this, arguments)
			, frs
			;
			if (!blob) {
				return null;
			}
			frs = new FileReaderSync();
			return frs.readAsDataURL(blob);
		}
	};

	return (extensions.Image = Image);
});

// Included from: src/javascript/runtime/silverlight/Runtime.js

/**
 * RunTime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global ActiveXObject:true */

/**
Defines constructor for Silverlight runtime.

@class moxie/runtime/silverlight/Runtime
@private
*/
define("moxie/runtime/silverlight/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/utils/Env",
	"moxie/core/utils/Dom",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime"
], function(Basic, Env, Dom, x, Runtime) {
	
	var type = "silverlight", extensions = {};

	function isInstalled(version) {
		var isVersionSupported = false, control = null, actualVer,
			actualVerArray, reqVerArray, requiredVersionPart, actualVersionPart, index = 0;

		try {
			try {
				control = new ActiveXObject('AgControl.AgControl');

				if (control.IsVersionSupported(version)) {
					isVersionSupported = true;
				}

				control = null;
			} catch (e) {
				var plugin = navigator.plugins["Silverlight Plug-In"];

				if (plugin) {
					actualVer = plugin.description;

					if (actualVer === "1.0.30226.2") {
						actualVer = "2.0.30226.2";
					}

					actualVerArray = actualVer.split(".");

					while (actualVerArray.length > 3) {
						actualVerArray.pop();
					}

					while ( actualVerArray.length < 4) {
						actualVerArray.push(0);
					}

					reqVerArray = version.split(".");

					while (reqVerArray.length > 4) {
						reqVerArray.pop();
					}

					do {
						requiredVersionPart = parseInt(reqVerArray[index], 10);
						actualVersionPart = parseInt(actualVerArray[index], 10);
						index++;
					} while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);

					if (requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart)) {
						isVersionSupported = true;
					}
				}
			}
		} catch (e2) {
			isVersionSupported = false;
		}

		return isVersionSupported;
	}

	/**
	Constructor for the Silverlight Runtime

	@class SilverlightRuntime
	@extends Runtime
	*/
	function SilverlightRuntime(options) {
		var I = this, initTimer;

		options = Basic.extend({ xap_url: Env.xap_url }, options);

		Runtime.call(this, options, type, {
			access_binary: Runtime.capTrue,
			access_image_binary: Runtime.capTrue,
			display_media: Runtime.capTrue,
			do_cors: Runtime.capTrue,
			drag_and_drop: false,
			report_upload_progress: Runtime.capTrue,
			resize_image: Runtime.capTrue,
			return_response_headers: function(value) {
				return value && I.mode === 'client';
			},
			return_response_type: function(responseType) {
				if (responseType !== 'json') {
					return true;
				} else {
					return !!window.JSON;
				}
			},
			return_status_code: function(code) {
				return I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);
			},
			select_file: Runtime.capTrue,
			select_multiple: Runtime.capTrue,
			send_binary_string: Runtime.capTrue,
			send_browser_cookies: function(value) {
				return value && I.mode === 'browser';
			},
			send_custom_headers: function(value) {
				return value && I.mode === 'client';
			},
			send_multipart: Runtime.capTrue,
			slice_blob: Runtime.capTrue,
			stream_upload: true,
			summon_file_dialog: false,
			upload_filesize: Runtime.capTrue,
			use_http_method: function(methods) {
				return I.mode === 'client' || !Basic.arrayDiff(methods, ['GET', 'POST']);
			}
		}, { 
			// capabilities that require specific mode
			return_response_headers: function(value) {
				return value ? 'client' : 'browser';
			},
			return_status_code: function(code) {
				return Basic.arrayDiff(code, [200, 404]) ? 'client' : ['client', 'browser'];
			},
			send_browser_cookies: function(value) {
				return value ? 'browser' : 'client';
			},
			send_custom_headers: function(value) {
				return value ? 'client' : 'browser';
			},
			use_http_method: function(methods) {
				return Basic.arrayDiff(methods, ['GET', 'POST']) ? 'client' : ['client', 'browser'];
			}
		});


		// minimal requirement
		if (!isInstalled('2.0.31005.0') || Env.browser === 'Opera') {
			this.mode = false;
		}


		Basic.extend(this, {
			getShim: function() {
				return Dom.get(this.uid).content.Moxie;
			},

			shimExec: function(component, action) {
				var args = [].slice.call(arguments, 2);
				return I.getShim().exec(this.uid, component, action, args);
			},

			init : function() {
				var container;

				container = this.getShimContainer();

				container.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">' +
					'<param name="source" value="' + options.xap_url + '"/>' +
					'<param name="background" value="Transparent"/>' +
					'<param name="windowless" value="true"/>' +
					'<param name="enablehtmlaccess" value="true"/>' +
					'<param name="initParams" value="uid=' + this.uid + ',target=' + Env.global_event_dispatcher + '"/>' +
				'</object>';

				// Init is dispatched by the shim
				initTimer = setTimeout(function() {
					if (I && !I.initialized) { // runtime might be already destroyed by this moment
						I.trigger("Error", new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));
					}
				}, Env.OS !== 'Windows'? 10000 : 5000); // give it more time to initialize in non Windows OS (like Mac)
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					clearTimeout(initTimer); // initialization check might be still onwait
					options = initTimer = destroy = I = null;
				};
			}(this.destroy))

		}, extensions);
	}

	Runtime.addConstructor(type, SilverlightRuntime); 

	return extensions;
});

// Included from: src/javascript/runtime/silverlight/file/Blob.js

/**
 * Blob.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/Blob
@private
*/
define("moxie/runtime/silverlight/file/Blob", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/file/Blob"
], function(extensions, Basic, Blob) {
	return (extensions.Blob = Basic.extend({}, Blob));
});

// Included from: src/javascript/runtime/silverlight/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileInput
@private
*/
define("moxie/runtime/silverlight/file/FileInput", [
	"moxie/runtime/silverlight/Runtime"
], function(extensions) {
	
	var FileInput = {
		init: function(options) {

			function toFilters(accept) {
				var filter = '';
				for (var i = 0; i < accept.length; i++) {
					filter += (filter !== '' ? '|' : '') + accept[i].title + " | *." + accept[i].extensions.replace(/,/g, ';*.');
				}
				return filter;
			}
			
			this.getRuntime().shimExec.call(this, 'FileInput', 'init', toFilters(options.accept), options.name, options.multiple);
			this.trigger('ready');
		}
	};

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/silverlight/file/FileDrop.js

/**
 * FileDrop.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileDrop
@private
*/
define("moxie/runtime/silverlight/file/FileDrop", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Dom", 
	"moxie/core/utils/Events"
], function(extensions, Dom, Events) {

	// not exactly useful, since works only in safari (...crickets...)
	var FileDrop = {
		init: function() {
			var comp = this, self = comp.getRuntime(), dropZone;

			dropZone = self.getShimContainer();

			Events.addEvent(dropZone, 'dragover', function(e) {
				e.preventDefault();
				e.stopPropagation();
				e.dataTransfer.dropEffect = 'copy';
			}, comp.uid);

			Events.addEvent(dropZone, 'dragenter', function(e) {
				e.preventDefault();
				var flag = Dom.get(self.uid).dragEnter(e);
				// If handled, then stop propagation of event in DOM
				if (flag) {
					e.stopPropagation();
				}
			}, comp.uid);

			Events.addEvent(dropZone, 'drop', function(e) {
				e.preventDefault();
				var flag = Dom.get(self.uid).dragDrop(e);
				// If handled, then stop propagation of event in DOM
				if (flag) {
					e.stopPropagation();
				}
			}, comp.uid);

			return self.shimExec.call(this, 'FileDrop', 'init');
		}
	};

	return (extensions.FileDrop = FileDrop);
});

// Included from: src/javascript/runtime/silverlight/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileReader
@private
*/
define("moxie/runtime/silverlight/file/FileReader", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/file/FileReader"
], function(extensions, Basic, FileReader) {
	return (extensions.FileReader = Basic.extend({}, FileReader));
});

// Included from: src/javascript/runtime/silverlight/file/FileReaderSync.js

/**
 * FileReaderSync.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/file/FileReaderSync
@private
*/
define("moxie/runtime/silverlight/file/FileReaderSync", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/file/FileReaderSync"
], function(extensions, Basic, FileReaderSync) {
	return (extensions.FileReaderSync = Basic.extend({}, FileReaderSync));
});

// Included from: src/javascript/runtime/silverlight/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/silverlight/xhr/XMLHttpRequest", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/xhr/XMLHttpRequest"
], function(extensions, Basic, XMLHttpRequest) {
	return (extensions.XMLHttpRequest = Basic.extend({}, XMLHttpRequest));
});

// Included from: src/javascript/runtime/silverlight/runtime/Transporter.js

/**
 * Transporter.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/silverlight/runtime/Transporter
@private
*/
define("moxie/runtime/silverlight/runtime/Transporter", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/runtime/Transporter"
], function(extensions, Basic, Transporter) {
	return (extensions.Transporter = Basic.extend({}, Transporter));
});

// Included from: src/javascript/runtime/silverlight/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */
 
/**
@class moxie/runtime/silverlight/image/Image
@private
*/
define("moxie/runtime/silverlight/image/Image", [
	"moxie/runtime/silverlight/Runtime",
	"moxie/core/utils/Basic",
	"moxie/runtime/flash/image/Image"
], function(extensions, Basic, Image) {
	return (extensions.Image = Basic.extend({}, Image, {

		getInfo: function() {
			var self = this.getRuntime()
			, grps = ['tiff', 'exif', 'gps']
			, info = { meta: {} }
			, rawInfo = self.shimExec.call(this, 'Image', 'getInfo')
			;

			if (rawInfo.meta) {
				Basic.each(grps, function(grp) {
					var meta = rawInfo.meta[grp]
					, tag
					, i
					, length
					, value
					;
					if (meta && meta.keys) {
						info.meta[grp] = {};
						for (i = 0, length = meta.keys.length; i < length; i++) {
							tag = meta.keys[i];
							value = meta[tag];
							if (value) {
								// convert numbers
								if (/^(\d|[1-9]\d+)$/.test(value)) { // integer (make sure doesn't start with zero)
									value = parseInt(value, 10);
								} else if (/^\d*\.\d+$/.test(value)) { // double
									value = parseFloat(value);
								}
								info.meta[grp][tag] = value;
							}
						}
					}
				});
			}

			info.width = parseInt(rawInfo.width, 10);
			info.height = parseInt(rawInfo.height, 10);
			info.size = parseInt(rawInfo.size, 10);
			info.type = rawInfo.type;
			info.name = rawInfo.name;

			return info;
		}
	}));
});

// Included from: src/javascript/runtime/html4/Runtime.js

/**
 * Runtime.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global File:true */

/**
Defines constructor for HTML4 runtime.

@class moxie/runtime/html4/Runtime
@private
*/
define("moxie/runtime/html4/Runtime", [
	"moxie/core/utils/Basic",
	"moxie/core/Exceptions",
	"moxie/runtime/Runtime",
	"moxie/core/utils/Env"
], function(Basic, x, Runtime, Env) {
	
	var type = 'html4', extensions = {};

	function Html4Runtime(options) {
		var I = this
		, Test = Runtime.capTest
		, True = Runtime.capTrue
		;

		Runtime.call(this, options, type, {
			access_binary: Test(window.FileReader || window.File && File.getAsDataURL),
			access_image_binary: false,
			display_media: Test(extensions.Image && (Env.can('create_canvas') || Env.can('use_data_uri_over32kb'))),
			do_cors: false,
			drag_and_drop: false,
			filter_by_extension: Test(function() { // if you know how to feature-detect this, please suggest
				return (Env.browser === 'Chrome' && Env.version >= 28) || (Env.browser === 'IE' && Env.version >= 10);
			}()),
			resize_image: function() {
				return extensions.Image && I.can('access_binary') && Env.can('create_canvas');
			},
			report_upload_progress: false,
			return_response_headers: false,
			return_response_type: function(responseType) {
				if (responseType === 'json' && !!window.JSON) {
					return true;
				} 
				return !!~Basic.inArray(responseType, ['text', 'document', '']);
			},
			return_status_code: function(code) {
				return !Basic.arrayDiff(code, [200, 404]);
			},
			select_file: function() {
				return Env.can('use_fileinput');
			},
			select_multiple: false,
			send_binary_string: false,
			send_custom_headers: false,
			send_multipart: true,
			slice_blob: false,
			stream_upload: function() {
				return I.can('select_file');
			},
			summon_file_dialog: Test(function() { // yeah... some dirty sniffing here...
				return (Env.browser === 'Firefox' && Env.version >= 4) ||
					(Env.browser === 'Opera' && Env.version >= 12) ||
					!!~Basic.inArray(Env.browser, ['Chrome', 'Safari']);
			}()),
			upload_filesize: True,
			use_http_method: function(methods) {
				return !Basic.arrayDiff(methods, ['GET', 'POST']);
			}
		});


		Basic.extend(this, {
			init : function() {
				this.trigger("Init");
			},

			destroy: (function(destroy) { // extend default destroy method
				return function() {
					destroy.call(I);
					destroy = I = null;
				};
			}(this.destroy))
		});

		Basic.extend(this.getShim(), extensions);
	}

	Runtime.addConstructor(type, Html4Runtime);

	return extensions;
});

// Included from: src/javascript/runtime/html4/file/FileInput.js

/**
 * FileInput.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/file/FileInput
@private
*/
define("moxie/runtime/html4/file/FileInput", [
	"moxie/runtime/html4/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Events",
	"moxie/core/utils/Mime",
	"moxie/core/utils/Env"
], function(extensions, Basic, Dom, Events, Mime, Env) {
	
	function FileInput() {
		var _uid, _files = [], _mimes = [], _options;

		function addInput() {
			var comp = this, I = comp.getRuntime(), shimContainer, browseButton, currForm, form, input, uid;

			uid = Basic.guid('uid_');

			shimContainer = I.getShimContainer(); // we get new ref everytime to avoid memory leaks in IE

			if (_uid) { // move previous form out of the view
				currForm = Dom.get(_uid + '_form');
				if (currForm) {
					Basic.extend(currForm.style, { top: '100%' });
				}
			}

			// build form in DOM, since innerHTML version not able to submit file for some reason
			form = document.createElement('form');
			form.setAttribute('id', uid + '_form');
			form.setAttribute('method', 'post');
			form.setAttribute('enctype', 'multipart/form-data');
			form.setAttribute('encoding', 'multipart/form-data');

			Basic.extend(form.style, {
				overflow: 'hidden',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			});

			input = document.createElement('input');
			input.setAttribute('id', uid);
			input.setAttribute('type', 'file');
			input.setAttribute('name', _options.name || 'Filedata');
			input.setAttribute('accept', _mimes.join(','));

			Basic.extend(input.style, {
				fontSize: '999px',
				opacity: 0
			});

			form.appendChild(input);
			shimContainer.appendChild(form);

			// prepare file input to be placed underneath the browse_button element
			Basic.extend(input.style, {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			});

			if (Env.browser === 'IE' && Env.version < 10) {
				Basic.extend(input.style, {
					filter : "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
				});
			}

			input.onchange = function() { // there should be only one handler for this
				var file;

				if (!this.value) {
					return;
				}

				if (this.files) {
					file = this.files[0];
				} else {
					file = {
						name: this.value
					};
				}

				_files = [file];

				this.onchange = function() {}; // clear event handler
				addInput.call(comp);

				// after file is initialized as o.File, we need to update form and input ids
				comp.bind('change', function onChange() {
					var input = Dom.get(uid), form = Dom.get(uid + '_form'), file;

					comp.unbind('change', onChange);

					if (comp.files.length && input && form) {
						file = comp.files[0];

						input.setAttribute('id', file.uid);
						form.setAttribute('id', file.uid + '_form');

						// set upload target
						form.setAttribute('target', file.uid + '_iframe');
					}
					input = form = null;
				}, 998);

				input = form = null;
				comp.trigger('change');
			};


			// route click event to the input
			if (I.can('summon_file_dialog')) {
				browseButton = Dom.get(_options.browse_button);
				Events.removeEvent(browseButton, 'click', comp.uid);
				Events.addEvent(browseButton, 'click', function(e) {
					if (input && !input.disabled) { // for some reason FF (up to 8.0.1 so far) lets to click disabled input[type=file]
						input.click();
					}
					e.preventDefault();
				}, comp.uid);
			}

			_uid = uid;

			shimContainer = currForm = browseButton = null;
		}

		Basic.extend(this, {
			init: function(options) {
				var comp = this, I = comp.getRuntime(), shimContainer;

				// figure out accept string
				_options = options;
				_mimes = options.accept.mimes || Mime.extList2mimes(options.accept, I.can('filter_by_extension'));

				shimContainer = I.getShimContainer();

				(function() {
					var browseButton, zIndex, top;

					browseButton = Dom.get(options.browse_button);

					// Route click event to the input[type=file] element for browsers that support such behavior
					if (I.can('summon_file_dialog')) {
						if (Dom.getStyle(browseButton, 'position') === 'static') {
							browseButton.style.position = 'relative';
						}

						zIndex = parseInt(Dom.getStyle(browseButton, 'z-index'), 10) || 1;

						browseButton.style.zIndex = zIndex;
						shimContainer.style.zIndex = zIndex - 1;
					}

					/* Since we have to place input[type=file] on top of the browse_button for some browsers,
					browse_button loses interactivity, so we restore it here */
					top = I.can('summon_file_dialog') ? browseButton : shimContainer;

					Events.addEvent(top, 'mouseover', function() {
						comp.trigger('mouseenter');
					}, comp.uid);

					Events.addEvent(top, 'mouseout', function() {
						comp.trigger('mouseleave');
					}, comp.uid);

					Events.addEvent(top, 'mousedown', function() {
						comp.trigger('mousedown');
					}, comp.uid);

					Events.addEvent(Dom.get(options.container), 'mouseup', function() {
						comp.trigger('mouseup');
					}, comp.uid);

					browseButton = null;
				}());

				addInput.call(this);

				shimContainer = null;

				// trigger ready event asynchronously
				comp.trigger({
					type: 'ready',
					async: true
				});
			},

			getFiles: function() {
				return _files;
			},

			disable: function(state) {
				var input;

				if ((input = Dom.get(_uid))) {
					input.disabled = !!state;
				}
			},

			destroy: function() {
				var I = this.getRuntime()
				, shim = I.getShim()
				, shimContainer = I.getShimContainer()
				;
				
				Events.removeAllEvents(shimContainer, this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.container), this.uid);
				Events.removeAllEvents(_options && Dom.get(_options.browse_button), this.uid);
				
				if (shimContainer) {
					shimContainer.innerHTML = '';
				}

				shim.removeInstance(this.uid);

				_uid = _files = _mimes = _options = shimContainer = shim = null;
			}
		});
	}

	return (extensions.FileInput = FileInput);
});

// Included from: src/javascript/runtime/html4/file/FileReader.js

/**
 * FileReader.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/file/FileReader
@private
*/
define("moxie/runtime/html4/file/FileReader", [
	"moxie/runtime/html4/Runtime",
	"moxie/runtime/html5/file/FileReader"
], function(extensions, FileReader) {
	return (extensions.FileReader = FileReader);
});

// Included from: src/javascript/runtime/html4/xhr/XMLHttpRequest.js

/**
 * XMLHttpRequest.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/xhr/XMLHttpRequest
@private
*/
define("moxie/runtime/html4/xhr/XMLHttpRequest", [
	"moxie/runtime/html4/Runtime",
	"moxie/core/utils/Basic",
	"moxie/core/utils/Dom",
	"moxie/core/utils/Url",
	"moxie/core/Exceptions",
	"moxie/core/utils/Events",
	"moxie/file/Blob",
	"moxie/xhr/FormData"
], function(extensions, Basic, Dom, Url, x, Events, Blob, FormData) {
	
	function XMLHttpRequest() {
		var _status, _response, _iframe;

		function cleanup(cb) {
			var target = this, uid, form, inputs, i, hasFile = false;

			if (!_iframe) {
				return;
			}

			uid = _iframe.id.replace(/_iframe$/, '');

			form = Dom.get(uid + '_form');
			if (form) {
				inputs = form.getElementsByTagName('input');
				i = inputs.length;

				while (i--) {
					switch (inputs[i].getAttribute('type')) {
						case 'hidden':
							inputs[i].parentNode.removeChild(inputs[i]);
							break;
						case 'file':
							hasFile = true; // flag the case for later
							break;
					}
				}
				inputs = [];

				if (!hasFile) { // we need to keep the form for sake of possible retries
					form.parentNode.removeChild(form);
				}
				form = null;
			}

			// without timeout, request is marked as canceled (in console)
			setTimeout(function() {
				Events.removeEvent(_iframe, 'load', target.uid);
				if (_iframe.parentNode) { // #382
					_iframe.parentNode.removeChild(_iframe);
				}

				// check if shim container has any other children, if - not, remove it as well
				var shimContainer = target.getRuntime().getShimContainer();
				if (!shimContainer.children.length) {
					shimContainer.parentNode.removeChild(shimContainer);
				}

				shimContainer = _iframe = null;
				cb();
			}, 1);
		}

		Basic.extend(this, {
			send: function(meta, data) {
				var target = this, I = target.getRuntime(), uid, form, input, blob;

				_status = _response = null;

				function createIframe() {
					var container = I.getShimContainer() || document.body
					, temp = document.createElement('div')
					;

					// IE 6 won't be able to set the name using setAttribute or iframe.name
					temp.innerHTML = '<iframe id="' + uid + '_iframe" name="' + uid + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';
					_iframe = temp.firstChild;
					container.appendChild(_iframe);

					/* _iframe.onreadystatechange = function() {
						console.info(_iframe.readyState);
					};*/

					Events.addEvent(_iframe, 'load', function() { // _iframe.onload doesn't work in IE lte 8
						var el;

						try {
							el = _iframe.contentWindow.document || _iframe.contentDocument || window.frames[_iframe.id].document;

							// try to detect some standard error pages
							if (/^4(0[0-9]|1[0-7]|2[2346])\s/.test(el.title)) { // test if title starts with 4xx HTTP error
								_status = el.title.replace(/^(\d+).*$/, '$1');
							} else {
								_status = 200;
								// get result
								_response = Basic.trim(el.body.innerHTML);

								// we need to fire these at least once
								target.trigger({
									type: 'progress',
									loaded: _response.length,
									total: _response.length
								});

								if (blob) { // if we were uploading a file
									target.trigger({
										type: 'uploadprogress',
										loaded: blob.size || 1025,
										total: blob.size || 1025
									});
								}
							}
						} catch (ex) {
							if (Url.hasSameOrigin(meta.url)) {
								// if response is sent with error code, iframe in IE gets redirected to res://ieframe.dll/http_x.htm
								// which obviously results to cross domain error (wtf?)
								_status = 404;
							} else {
								cleanup.call(target, function() {
									target.trigger('error');
								});
								return;
							}
						}	
					
						cleanup.call(target, function() {
							target.trigger('load');
						});
					}, target.uid);
				} // end createIframe

				// prepare data to be sent and convert if required
				if (data instanceof FormData && data.hasBlob()) {
					blob = data.getBlob();
					uid = blob.uid;
					input = Dom.get(uid);
					form = Dom.get(uid + '_form');
					if (!form) {
						throw new x.DOMException(x.DOMException.NOT_FOUND_ERR);
					}
				} else {
					uid = Basic.guid('uid_');

					form = document.createElement('form');
					form.setAttribute('id', uid + '_form');
					form.setAttribute('method', meta.method);
					form.setAttribute('enctype', 'multipart/form-data');
					form.setAttribute('encoding', 'multipart/form-data');
					form.setAttribute('target', uid + '_iframe');

					I.getShimContainer().appendChild(form);
				}

				if (data instanceof FormData) {
					data.each(function(value, name) {
						if (value instanceof Blob) {
							if (input) {
								input.setAttribute('name', name);
							}
						} else {
							var hidden = document.createElement('input');

							Basic.extend(hidden, {
								type : 'hidden',
								name : name,
								value : value
							});

							// make sure that input[type="file"], if it's there, comes last
							if (input) {
								form.insertBefore(hidden, input);
							} else {
								form.appendChild(hidden);
							}
						}
					});
				}

				// set destination url
				form.setAttribute("action", meta.url);

				createIframe();
				form.submit();
				target.trigger('loadstart');
			},

			getStatus: function() {
				return _status;
			},

			getResponse: function(responseType) {
				if ('json' === responseType) {
					// strip off <pre>..</pre> tags that might be enclosing the response
					if (Basic.typeOf(_response) === 'string' && !!window.JSON) {
						try {
							return JSON.parse(_response.replace(/^\s*<pre[^>]*>/, '').replace(/<\/pre>\s*$/, ''));
						} catch (ex) {
							return null;
						}
					} 
				} else if ('document' === responseType) {

				}
				return _response;
			},

			abort: function() {
				var target = this;

				if (_iframe && _iframe.contentWindow) {
					if (_iframe.contentWindow.stop) { // FireFox/Safari/Chrome
						_iframe.contentWindow.stop();
					} else if (_iframe.contentWindow.document.execCommand) { // IE
						_iframe.contentWindow.document.execCommand('Stop');
					} else {
						_iframe.src = "about:blank";
					}
				}

				cleanup.call(this, function() {
					// target.dispatchEvent('readystatechange');
					target.dispatchEvent('abort');
				});
			}
		});
	}

	return (extensions.XMLHttpRequest = XMLHttpRequest);
});

// Included from: src/javascript/runtime/html4/image/Image.js

/**
 * Image.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/**
@class moxie/runtime/html4/image/Image
@private
*/
define("moxie/runtime/html4/image/Image", [
	"moxie/runtime/html4/Runtime",
	"moxie/runtime/html5/image/Image"
], function(extensions, Image) {
	return (extensions.Image = Image);
});

expose(["moxie/core/utils/Basic","moxie/core/I18n","moxie/core/utils/Mime","moxie/core/utils/Env","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/core/EventTarget","moxie/core/utils/Encode","moxie/runtime/Runtime","moxie/runtime/RuntimeClient","moxie/file/Blob","moxie/file/File","moxie/file/FileInput","moxie/file/FileDrop","moxie/runtime/RuntimeTarget","moxie/file/FileReader","moxie/core/utils/Url","moxie/file/FileReaderSync","moxie/xhr/FormData","moxie/xhr/XMLHttpRequest","moxie/runtime/Transporter","moxie/image/Image","moxie/core/utils/Events"]);
})(this);/**
 * o.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global moxie:true */

/**
Globally exposed namespace with the most frequently used public classes and handy methods.

@class o
@static
@private
*/
(function() {
	"use strict";

	var o = {}, inArray = moxie.core.utils.Basic.inArray;

	// directly add some public classes
	// (we do it dynamically here, since for custom builds we cannot know beforehand what modules were included)
	(function addAlias(ns) {
		var name, itemType;
		for (name in ns) {
			itemType = typeof(ns[name]);
			if (itemType === 'object' && !~inArray(name, ['Exceptions', 'Env', 'Mime'])) {
				addAlias(ns[name]);
			} else if (itemType === 'function') {
				o[name] = ns[name];
			}
		}
	})(window.moxie);

	// add some manually
	o.Env = window.moxie.core.utils.Env;
	o.Mime = window.moxie.core.utils.Mime;
	o.Exceptions = window.moxie.core.Exceptions;

	// expose globally
	window.mOxie = o;
	if (!window.o) {
		window.o = o;
	}
	return o;
})();

/**
 * Plupload - multi-runtime File Uploader
 * v2.1.1
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
/**
 * Plupload - multi-runtime File Uploader
 * v2.1.1
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
/**
 * Plupload.js
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 */

/*global mOxie:true */

;(function(window, o, undef) {

var delay = window.setTimeout
, fileFilters = {}
;

// convert plupload features to caps acceptable by mOxie
function normalizeCaps(settings) {		
	var features = settings.required_features, caps = {};

	function resolve(feature, value, strict) {
		// Feature notation is deprecated, use caps (this thing here is required for backward compatibility)
		var map = { 
			chunks: 'slice_blob',
			jpgresize: 'send_binary_string',
			pngresize: 'send_binary_string',
			progress: 'report_upload_progress',
			multi_selection: 'select_multiple',
			dragdrop: 'drag_and_drop',
			drop_element: 'drag_and_drop',
			headers: 'send_custom_headers',
			canSendBinary: 'send_binary',
			triggerDialog: 'summon_file_dialog'
		};

		if (map[feature]) {
			caps[map[feature]] = value;
		} else if (!strict) {
			caps[feature] = value;
		}
	}

	if (typeof(features) === 'string') {
		plupload.each(features.split(/\s*,\s*/), function(feature) {
			resolve(feature, true);
		});
	} else if (typeof(features) === 'object') {
		plupload.each(features, function(value, feature) {
			resolve(feature, value);
		});
	} else if (features === true) {
		// check settings for required features
		if (!settings.multipart) { // special care for multipart: false
			caps.send_binary_string = true;
		}

		if (settings.chunk_size > 0) {
			caps.slice_blob = true;
		}

		if (settings.resize.enabled) {
			caps.send_binary_string = true;
		}
		
		plupload.each(settings, function(value, feature) {
			resolve(feature, !!value, true); // strict check
		});
	}
	
	return caps;
}

/** 
 * @module plupload	
 * @static
 */
var plupload = {
	/**
	 * Plupload version will be replaced on build.
	 *
	 * @property VERSION
	 * @for Plupload
	 * @static
	 * @final
	 */
	VERSION : '2.1.1',

	/**
	 * Inital state of the queue and also the state ones it's finished all it's uploads.
	 *
	 * @property STOPPED
	 * @static
	 * @final
	 */
	STOPPED : 1,

	/**
	 * Upload process is running
	 *
	 * @property STARTED
	 * @static
	 * @final
	 */
	STARTED : 2,

	/**
	 * File is queued for upload
	 *
	 * @property QUEUED
	 * @static
	 * @final
	 */
	QUEUED : 1,

	/**
	 * File is being uploaded
	 *
	 * @property UPLOADING
	 * @static
	 * @final
	 */
	UPLOADING : 2,

	/**
	 * File has failed to be uploaded
	 *
	 * @property FAILED
	 * @static
	 * @final
	 */
	FAILED : 4,

	/**
	 * File has been uploaded successfully
	 *
	 * @property DONE
	 * @static
	 * @final
	 */
	DONE : 5,

	// Error constants used by the Error event

	/**
	 * Generic error for example if an exception is thrown inside Silverlight.
	 *
	 * @property GENERIC_ERROR
	 * @static
	 * @final
	 */
	GENERIC_ERROR : -100,

	/**
	 * HTTP transport error. For example if the server produces a HTTP status other than 200.
	 *
	 * @property HTTP_ERROR
	 * @static
	 * @final
	 */
	HTTP_ERROR : -200,

	/**
	 * Generic I/O error. For exampe if it wasn't possible to open the file stream on local machine.
	 *
	 * @property IO_ERROR
	 * @static
	 * @final
	 */
	IO_ERROR : -300,

	/**
	 * Generic I/O error. For exampe if it wasn't possible to open the file stream on local machine.
	 *
	 * @property SECURITY_ERROR
	 * @static
	 * @final
	 */
	SECURITY_ERROR : -400,

	/**
	 * Initialization error. Will be triggered if no runtime was initialized.
	 *
	 * @property INIT_ERROR
	 * @static
	 * @final
	 */
	INIT_ERROR : -500,

	/**
	 * File size error. If the user selects a file that is too large it will be blocked and an error of this type will be triggered.
	 *
	 * @property FILE_SIZE_ERROR
	 * @static
	 * @final
	 */
	FILE_SIZE_ERROR : -600,

	/**
	 * File extension error. If the user selects a file that isn't valid according to the filters setting.
	 *
	 * @property FILE_EXTENSION_ERROR
	 * @static
	 * @final
	 */
	FILE_EXTENSION_ERROR : -601,

	/**
	 * Duplicate file error. If prevent_duplicates is set to true and user selects the same file again.
	 *
	 * @property FILE_DUPLICATE_ERROR
	 * @static
	 * @final
	 */
	FILE_DUPLICATE_ERROR : -602,

	/**
	 * Runtime will try to detect if image is proper one. Otherwise will throw this error.
	 *
	 * @property IMAGE_FORMAT_ERROR
	 * @static
	 * @final
	 */
	IMAGE_FORMAT_ERROR : -700,

	/**
	 * While working on the image runtime will try to detect if the operation may potentially run out of memeory and will throw this error.
	 *
	 * @property IMAGE_MEMORY_ERROR
	 * @static
	 * @final
	 */
	IMAGE_MEMORY_ERROR : -701,

	/**
	 * Each runtime has an upper limit on a dimension of the image it can handle. If bigger, will throw this error.
	 *
	 * @property IMAGE_DIMENSIONS_ERROR
	 * @static
	 * @final
	 */
	IMAGE_DIMENSIONS_ERROR : -702,

	/**
	 * Mime type lookup table.
	 *
	 * @property mimeTypes
	 * @type Object
	 * @final
	 */
	mimeTypes : o.mimes,

	/**
	 * In some cases sniffing is the only way around :(
	 */
	ua: o.ua,

	/**
	 * Gets the true type of the built-in object (better version of typeof).
	 * @credits Angus Croll (http://javascriptweblog.wordpress.com/)
	 *
	 * @method typeOf
	 * @static
	 * @param {Object} o Object to check.
	 * @return {String} Object [[Class]]
	 */
	typeOf: o.typeOf,

	/**
	 * Extends the specified object with another object.
	 *
	 * @method extend
	 * @static
	 * @param {Object} target Object to extend.
	 * @param {Object..} obj Multiple objects to extend with.
	 * @return {Object} Same as target, the extended object.
	 */
	extend : o.extend,

	/**
	 * Generates an unique ID. This is 99.99% unique since it takes the current time and 5 random numbers.
	 * The only way a user would be able to get the same ID is if the two persons at the same exact milisecond manages
	 * to get 5 the same random numbers between 0-65535 it also uses a counter so each call will be guaranteed to be page unique.
	 * It's more probable for the earth to be hit with an ansteriod. You can also if you want to be 100% sure set the plupload.guidPrefix property
	 * to an user unique key.
	 *
	 * @method guid
	 * @static
	 * @return {String} Virtually unique id.
	 */
	guid : o.guid,

	/**
	 * Get array of DOM Elements by their ids.
	 * 
	 * @method get
	 * @for Utils
	 * @param {String} id Identifier of the DOM Element
	 * @return {Array}
	*/
	get : function get(ids) {
		var els = [], el;

		if (o.typeOf(ids) !== 'array') {
			ids = [ids];
		}

		var i = ids.length;
		while (i--) {
			el = o.get(ids[i]);
			if (el) {
				els.push(el);
			}
		}

		return els.length ? els : null;
	},

	/**
	 * Executes the callback function for each item in array/object. If you return false in the
	 * callback it will break the loop.
	 *
	 * @method each
	 * @static
	 * @param {Object} obj Object to iterate.
	 * @param {function} callback Callback function to execute for each item.
	 */
	each : o.each,

	/**
	 * Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.
	 *
	 * @method getPos
	 * @static
	 * @param {Element} node HTML element or element id to get x, y position from.
	 * @param {Element} root Optional root element to stop calculations at.
	 * @return {object} Absolute position of the specified element object with x, y fields.
	 */
	getPos : o.getPos,

	/**
	 * Returns the size of the specified node in pixels.
	 *
	 * @method getSize
	 * @static
	 * @param {Node} node Node to get the size of.
	 * @return {Object} Object with a w and h property.
	 */
	getSize : o.getSize,

	/**
	 * Encodes the specified string.
	 *
	 * @method xmlEncode
	 * @static
	 * @param {String} s String to encode.
	 * @return {String} Encoded string.
	 */
	xmlEncode : function(str) {
		var xmlEncodeChars = {'<' : 'lt', '>' : 'gt', '&' : 'amp', '"' : 'quot', '\'' : '#39'}, xmlEncodeRegExp = /[<>&\"\']/g;

		return str ? ('' + str).replace(xmlEncodeRegExp, function(chr) {
			return xmlEncodeChars[chr] ? '&' + xmlEncodeChars[chr] + ';' : chr;
		}) : str;
	},

	/**
	 * Forces anything into an array.
	 *
	 * @method toArray
	 * @static
	 * @param {Object} obj Object with length field.
	 * @return {Array} Array object containing all items.
	 */
	toArray : o.toArray,

	/**
	 * Find an element in array and return it's index if present, otherwise return -1.
	 *
	 * @method inArray
	 * @static
	 * @param {mixed} needle Element to find
	 * @param {Array} array
	 * @return {Int} Index of the element, or -1 if not found
	 */
	inArray : o.inArray,

	/**
	 * Extends the language pack object with new items.
	 *
	 * @method addI18n
	 * @static
	 * @param {Object} pack Language pack items to add.
	 * @return {Object} Extended language pack object.
	 */
	addI18n : o.addI18n,

	/**
	 * Translates the specified string by checking for the english string in the language pack lookup.
	 *
	 * @method translate
	 * @static
	 * @param {String} str String to look for.
	 * @return {String} Translated string or the input string if it wasn't found.
	 */
	translate : o.translate,

	/**
	 * Checks if object is empty.
	 *
	 * @method isEmptyObj
	 * @static
	 * @param {Object} obj Object to check.
	 * @return {Boolean}
	 */
	isEmptyObj : o.isEmptyObj,

	/**
	 * Checks if specified DOM element has specified class.
	 *
	 * @method hasClass
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Class name
	 */
	hasClass : o.hasClass,

	/**
	 * Adds specified className to specified DOM element.
	 *
	 * @method addClass
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Class name
	 */
	addClass : o.addClass,

	/**
	 * Removes specified className from specified DOM element.
	 *
	 * @method removeClass
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Class name
	 */
	removeClass : o.removeClass,

	/**
	 * Returns a given computed style of a DOM element.
	 *
	 * @method getStyle
	 * @static
	 * @param {Object} obj DOM element like object.
	 * @param {String} name Style you want to get from the DOM element
	 */
	getStyle : o.getStyle,

	/**
	 * Adds an event handler to the specified object and store reference to the handler
	 * in objects internal Plupload registry (@see removeEvent).
	 *
	 * @method addEvent
	 * @static
	 * @param {Object} obj DOM element like object to add handler to.
	 * @param {String} name Name to add event listener to.
	 * @param {Function} callback Function to call when event occurs.
	 * @param {String} (optional) key that might be used to add specifity to the event record.
	 */
	addEvent : o.addEvent,

	/**
	 * Remove event handler from the specified object. If third argument (callback)
	 * is not specified remove all events with the specified name.
	 *
	 * @method removeEvent
	 * @static
	 * @param {Object} obj DOM element to remove event listener(s) from.
	 * @param {String} name Name of event listener to remove.
	 * @param {Function|String} (optional) might be a callback or unique key to match.
	 */
	removeEvent: o.removeEvent,

	/**
	 * Remove all kind of events from the specified object
	 *
	 * @method removeAllEvents
	 * @static
	 * @param {Object} obj DOM element to remove event listeners from.
	 * @param {String} (optional) unique key to match, when removing events.
	 */
	removeAllEvents: o.removeAllEvents,

	/**
	 * Cleans the specified name from national characters (diacritics). The result will be a name with only a-z, 0-9 and _.
	 *
	 * @method cleanName
	 * @static
	 * @param {String} s String to clean up.
	 * @return {String} Cleaned string.
	 */
	cleanName : function(name) {
		var i, lookup;

		// Replace diacritics
		lookup = [
			/[\300-\306]/g, 'A', /[\340-\346]/g, 'a',
			/\307/g, 'C', /\347/g, 'c',
			/[\310-\313]/g, 'E', /[\350-\353]/g, 'e',
			/[\314-\317]/g, 'I', /[\354-\357]/g, 'i',
			/\321/g, 'N', /\361/g, 'n',
			/[\322-\330]/g, 'O', /[\362-\370]/g, 'o',
			/[\331-\334]/g, 'U', /[\371-\374]/g, 'u'
		];

		for (i = 0; i < lookup.length; i += 2) {
			name = name.replace(lookup[i], lookup[i + 1]);
		}

		// Replace whitespace
		name = name.replace(/\s+/g, '_');

		// Remove anything else
		name = name.replace(/[^a-z0-9_\-\.]+/gi, '');

		return name;
	},

	/**
	 * Builds a full url out of a base URL and an object with items to append as query string items.
	 *
	 * @method buildUrl
	 * @static
	 * @param {String} url Base URL to append query string items to.
	 * @param {Object} items Name/value object to serialize as a querystring.
	 * @return {String} String with url + serialized query string items.
	 */
	buildUrl : function(url, items) {
		var query = '';

		plupload.each(items, function(value, name) {
			query += (query ? '&' : '') + encodeURIComponent(name) + '=' + encodeURIComponent(value);
		});

		if (query) {
			url += (url.indexOf('?') > 0 ? '&' : '?') + query;
		}

		return url;
	},

	/**
	 * Formats the specified number as a size string for example 1024 becomes 1 KB.
	 *
	 * @method formatSize
	 * @static
	 * @param {Number} size Size to format as string.
	 * @return {String} Formatted size string.
	 */
	formatSize : function(size) {

		if (size === undef || /\D/.test(size)) {
			return plupload.translate('N/A');
		}

		function round(num, precision) {
			return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
		}

		var boundary = Math.pow(1024, 4);

		// TB
		if (size > boundary) {
			return round(size / boundary, 1) + " " + plupload.translate('tb');
		}

		// GB
		if (size > (boundary/=1024)) {
			return round(size / boundary, 1) + " " + plupload.translate('gb');
		}

		// MB
		if (size > (boundary/=1024)) {
			return round(size / boundary, 1) + " " + plupload.translate('mb');
		}

		// KB
		if (size > 1024) {
			return Math.round(size / 1024) + " " + plupload.translate('kb');
		}

		return size + " " + plupload.translate('b');
	},


	/**
	 * Parses the specified size string into a byte value. For example 10kb becomes 10240.
	 *
	 * @method parseSize
	 * @static
	 * @param {String|Number} size String to parse or number to just pass through.
	 * @return {Number} Size in bytes.
	 */
	parseSize : o.parseSizeStr,


	/**
	 * A way to predict what runtime will be choosen in the current environment with the
	 * specified settings.
	 *
	 * @method predictRuntime
	 * @static
	 * @param {Object|String} config Plupload settings to check
	 * @param {String} [runtimes] Comma-separated list of runtimes to check against
	 * @return {String} Type of compatible runtime
	 */
	predictRuntime : function(config, runtimes) {
		var up, runtime;

		up = new plupload.Uploader(config);
		runtime = o.Runtime.thatCan(up.getOption().required_features, runtimes || config.runtimes);
		up.destroy();
		return runtime;
	},

	/**
	 * Registers a filter that will be executed for each file added to the queue.
	 * If callback returns false, file will not be added.
	 *
	 * Callback receives two arguments: a value for the filter as it was specified in settings.filters
	 * and a file to be filtered. Callback is executed in the context of uploader instance.
	 *
	 * @method addFileFilter
	 * @static
	 * @param {String} name Name of the filter by which it can be referenced in settings.filters
	 * @param {String} cb Callback - the actual routine that every added file must pass
	 */
	addFileFilter: function(name, cb) {
		fileFilters[name] = cb;
	}
};


plupload.addFileFilter('mime_types', function(filters, file, cb) {
	if (filters.length && !filters.regexp.test(file.name)) {
		this.trigger('Error', {
			code : plupload.FILE_EXTENSION_ERROR,
			message : plupload.translate('File extension error.'),
			file : file
		});
		cb(false);
	} else {
		cb(true);
	}
});


plupload.addFileFilter('max_file_size', function(maxSize, file, cb) {
	var undef;

	maxSize = plupload.parseSize(maxSize);

	// Invalid file size
	if (file.size !== undef && maxSize && file.size > maxSize) {
		this.trigger('Error', {
			code : plupload.FILE_SIZE_ERROR,
			message : plupload.translate('File size error.'),
			file : file
		});
		cb(false);
	} else {
		cb(true);
	}
});


plupload.addFileFilter('prevent_duplicates', function(value, file, cb) {
	if (value) {
		var ii = this.files.length;
		while (ii--) {
			// Compare by name and size (size might be 0 or undefined, but still equivalent for both)
			if (file.name === this.files[ii].name && file.size === this.files[ii].size) {
				this.trigger('Error', {
					code : plupload.FILE_DUPLICATE_ERROR,
					message : plupload.translate('Duplicate file error.'),
					file : file
				});
				cb(false);
				return;
			}
		}
	}
	cb(true);
});


/**
@class Uploader
@constructor

@param {Object} settings For detailed information about each option check documentation.
	@param {String|DOMElement} settings.browse_button id of the DOM element or DOM element itself to use as file dialog trigger.
	@param {String} settings.url URL of the server-side upload handler.
	@param {Number|String} [settings.chunk_size=0] Chunk size in bytes to slice the file into. Shorcuts with b, kb, mb, gb, tb suffixes also supported. `e.g. 204800 or "204800b" or "200kb"`. By default - disabled.
	@param {String} [settings.container] id of the DOM element to use as a container for uploader structures. Defaults to document.body.
	@param {String|DOMElement} [settings.drop_element] id of the DOM element or DOM element itself to use as a drop zone for Drag-n-Drop.
	@param {String} [settings.file_data_name="file"] Name for the file field in Multipart formated message.
	@param {Object} [settings.filters={}] Set of file type filters.
		@param {Array} [settings.filters.mime_types=[]] List of file types to accept, each one defined by title and list of extensions. `e.g. {title : "Image files", extensions : "jpg,jpeg,gif,png"}`. Dispatches `plupload.FILE_EXTENSION_ERROR`
		@param {String|Number} [settings.filters.max_file_size=0] Maximum file size that the user can pick, in bytes. Optionally supports b, kb, mb, gb, tb suffixes. `e.g. "10mb" or "1gb"`. By default - not set. Dispatches `plupload.FILE_SIZE_ERROR`.
		@param {Boolean} [settings.filters.prevent_duplicates=false] Do not let duplicates into the queue. Dispatches `plupload.FILE_DUPLICATE_ERROR`.
	@param {String} [settings.flash_swf_url] URL of the Flash swf.
	@param {Object} [settings.headers] Custom headers to send with the upload. Hash of name/value pairs.
	@param {Number} [settings.max_retries=0] How many times to retry the chunk or file, before triggering Error event.
	@param {Boolean} [settings.multipart=true] Whether to send file and additional parameters as Multipart formated message.
	@param {Object} [settings.multipart_params] Hash of key/value pairs to send with every file upload.
	@param {Boolean} [settings.multi_selection=true] Enable ability to select multiple files at once in file dialog.
	@param {String|Object} [settings.required_features] Either comma-separated list or hash of required features that chosen runtime should absolutely possess.
	@param {Object} [settings.resize] Enable resizng of images on client-side. Applies to `image/jpeg` and `image/png` only. `e.g. {width : 200, height : 200, quality : 90, crop: true}`
		@param {Number} [settings.resize.width] If image is bigger, it will be resized.
		@param {Number} [settings.resize.height] If image is bigger, it will be resized.
		@param {Number} [settings.resize.quality=90] Compression quality for jpegs (1-100).
		@param {Boolean} [settings.resize.crop=false] Whether to crop images to exact dimensions. By default they will be resized proportionally.
	@param {String} [settings.runtimes="html5,flash,silverlight,html4"] Comma separated list of runtimes, that Plupload will try in turn, moving to the next if previous fails.
	@param {String} [settings.silverlight_xap_url] URL of the Silverlight xap.
	@param {Boolean} [settings.unique_names=false] If true will generate unique filenames for uploaded files.
*/
plupload.Uploader = function(options) {
	/**
	 * Fires when the current RunTime has been initialized.
	 *
	 * @event Init
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires after the init event incase you need to perform actions there.
	 *
	 * @event PostInit
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires when the option is changed in via uploader.setOption().
	 *
	 * @event OptionChanged
	 * @since 2.1
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {String} name Name of the option that was changed
	 * @param {Mixed} value New value for the specified option
	 * @param {Mixed} oldValue Previous value of the option
	 */

	/**
	 * Fires when the silverlight/flash or other shim needs to move.
	 *
	 * @event Refresh
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires when the overall state is being changed for the upload queue.
	 *
	 * @event StateChanged
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires when a file is to be uploaded by the runtime.
	 *
	 * @event UploadFile
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File to be uploaded.
	 */

	/**
	 * Fires when just before a file is uploaded. This event enables you to override settings
	 * on the uploader instance before the file is uploaded.
	 *
	 * @event BeforeUpload
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File to be uploaded.
	 */

	/**
	 * Fires when the file queue is changed. In other words when files are added/removed to the files array of the uploader instance.
	 *
	 * @event QueueChanged
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */

	/**
	 * Fires while a file is being uploaded. Use this event to update the current file upload progress.
	 *
	 * @event UploadProgress
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File that is currently being uploaded.
	 */

	/**
	 * Fires when file is removed from the queue.
	 *
	 * @event FilesRemoved
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Array} files Array of files that got removed.
	 */

	/**
	 * Fires for every filtered file before it is added to the queue.
	 * 
	 * @event FileFiltered
	 * @since 2.1
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file Another file that has to be added to the queue.
	 */

	/**
	 * Fires after files were filtered and added to the queue.
	 *
	 * @event FilesAdded
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Array} files Array of file objects that were added to queue by the user.
	 */

	/**
	 * Fires when a file is successfully uploaded.
	 *
	 * @event FileUploaded
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File that was uploaded.
	 * @param {Object} response Object with response properties.
	 */

	/**
	 * Fires when file chunk is uploaded.
	 *
	 * @event ChunkUploaded
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {plupload.File} file File that the chunk was uploaded for.
	 * @param {Object} response Object with response properties.
	 */

	/**
	 * Fires when all files in a queue are uploaded.
	 *
	 * @event UploadComplete
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Array} files Array of file objects that was added to queue/selected by the user.
	 */

	/**
	 * Fires when a error occurs.
	 *
	 * @event Error
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 * @param {Object} error Contains code, message and sometimes file and other details.
	 */

	/**
	 * Fires when destroy method is called.
	 *
	 * @event Destroy
	 * @param {plupload.Uploader} uploader Uploader instance sending the event.
	 */
	var uid = plupload.guid()
	, settings
	, files = []
	, preferred_caps = {}
	, fileInputs = []
	, fileDrops = []
	, startTime
	, total
	, disabled = false
	, xhr
	;


	// Private methods
	function uploadNext() {
		var file, count = 0, i;

		if (this.state == plupload.STARTED) {
			// Find first QUEUED file
			for (i = 0; i < files.length; i++) {
				if (!file && files[i].status == plupload.QUEUED) {
					file = files[i];
					if (this.trigger("BeforeUpload", file)) {
						file.status = plupload.UPLOADING;
						this.trigger("UploadFile", file);
					}
				} else {
					count++;
				}
			}

			// All files are DONE or FAILED
			if (count == files.length) {
				if (this.state !== plupload.STOPPED) {
					this.state = plupload.STOPPED;
					this.trigger("StateChanged");
				}
				this.trigger("UploadComplete", files);
			}
		}
	}


	function calcFile(file) {
		file.percent = file.size > 0 ? Math.ceil(file.loaded / file.size * 100) : 100;
		calc();
	}


	function calc() {
		var i, file;

		// Reset stats
		total.reset();

		// Check status, size, loaded etc on all files
		for (i = 0; i < files.length; i++) {
			file = files[i];

			if (file.size !== undef) {
				// We calculate totals based on original file size
				total.size += file.origSize;

				// Since we cannot predict file size after resize, we do opposite and
				// interpolate loaded amount to match magnitude of total
				total.loaded += file.loaded * file.origSize / file.size;
			} else {
				total.size = undef;
			}

			if (file.status == plupload.DONE) {
				total.uploaded++;
			} else if (file.status == plupload.FAILED) {
				total.failed++;
			} else {
				total.queued++;
			}
		}

		// If we couldn't calculate a total file size then use the number of files to calc percent
		if (total.size === undef) {
			total.percent = files.length > 0 ? Math.ceil(total.uploaded / files.length * 100) : 0;
		} else {
			total.bytesPerSec = Math.ceil(total.loaded / ((+new Date() - startTime || 1) / 1000.0));
			total.percent = total.size > 0 ? Math.ceil(total.loaded / total.size * 100) : 0;
		}
	}


	function getRUID() {
		var ctrl = fileInputs[0] || fileDrops[0];
		if (ctrl) {
			return ctrl.getRuntime().uid;
		}
		return false;
	}


	function runtimeCan(file, cap) {
		if (file.ruid) {
			var info = o.Runtime.getInfo(file.ruid);
			if (info) {
				return info.can(cap);
			}
		}
		return false;
	}


	function bindEventListeners() {
		this.bind('FilesAdded', onFilesAdded);

		this.bind('CancelUpload', onCancelUpload);
		
		this.bind('BeforeUpload', onBeforeUpload);

		this.bind('UploadFile', onUploadFile);

		this.bind('UploadProgress', onUploadProgress);

		this.bind('StateChanged', onStateChanged);

		this.bind('QueueChanged', calc);

		this.bind('Error', onError);

		this.bind('FileUploaded', onFileUploaded);

		this.bind('Destroy', onDestroy);
	}


	function initControls(settings, cb) {
		var self = this, inited = 0, queue = [];

		// common settings
		var options = {
			direct: settings.direct,
			accept: settings.filters.mime_types,
			runtime_order: settings.runtimes,
			required_caps: settings.required_features,
			preferred_caps: preferred_caps,
			swf_url: settings.flash_swf_url,
			xap_url: settings.silverlight_xap_url
		};

		// add runtime specific options if any
		plupload.each(settings.runtimes.split(/\s*,\s*/), function(runtime) {
			if (settings[runtime]) {
				options[runtime] = settings[runtime];
			}
		});

		// initialize file pickers - there can be many
		if (settings.browse_button) {
			plupload.each(settings.browse_button, function(el) {
				queue.push(function(cb) {
					var fileInput = new o.FileInput(plupload.extend({}, options, {
						name: settings.file_data_name,
						multiple: settings.multi_selection,
						container: settings.container,
						browse_button: el
					}));

					fileInput.onready = function() {
						var info = o.Runtime.getInfo(this.ruid);

						// for backward compatibility
						o.extend(self.features, {
							chunks: info.can('slice_blob'),
							multipart: info.can('send_multipart'),
							multi_selection: info.can('select_multiple')
						});

						inited++;
						fileInputs.push(this);
						cb();
					};

					fileInput.onchange = function() {
						self.addFile(this.files);
					};

					fileInput.bind('mouseenter mouseleave mousedown mouseup touchstart', function(e) {
						if (!disabled) {
							if (settings.browse_button_hover) {
								if ('mouseenter' === e.type) {
									o.addClass(el, settings.browse_button_hover);
								} else if ('mouseleave' === e.type) {
									o.removeClass(el, settings.browse_button_hover);
								}
							}

							if (settings.browse_button_active) {
								if ('mousedown' === e.type) {
									o.addClass(el, settings.browse_button_active);
								} else if ('mouseup' === e.type) {
									o.removeClass(el, settings.browse_button_active);
								}
							}
						}
					});

					fileInput.bind('error runtimeerror', function() {
						fileInput = null;
						cb();
					});

					fileInput.init();
				});
			});
		}

		// initialize drop zones
		if (settings.drop_element) {
			plupload.each(settings.drop_element, function(el) {
				queue.push(function(cb) {
					var fileDrop = new o.FileDrop(plupload.extend({}, options, {
						drop_zone: el
					}));

					fileDrop.onready = function() {
						var info = o.Runtime.getInfo(this.ruid);

						self.features.dragdrop = info.can('drag_and_drop'); // for backward compatibility

						inited++;
						fileDrops.push(this);
						cb();
					};

					fileDrop.ondrop = function() {
						self.addFile(this.files);
					};

					fileDrop.bind('error runtimeerror', function() {
						fileDrop = null;
						cb();
					});

					fileDrop.init();
				});
			});
		}


		o.inSeries(queue, function() {
			if (typeof(cb) === 'function') {
				cb(inited);
			}
		});
	}


	function resizeImage(blob, params, cb) {
		var img = new o.Image();

		try {
			img.onload = function() {
				img.downsize(params.width, params.height, params.crop, params.preserve_headers);
			};

			img.onresize = function() {
				cb(this.getAsBlob(blob.type, params.quality));
				this.destroy();
			};

			img.onerror = function() {
				cb(blob);
			};

			img.load(blob);
		} catch(ex) {
			cb(blob);
		}
	}


	function setOption(option, value, init) {
		var self = this, reinitRequired = false;

		function _setOption(option, value, init) {
			var oldValue = settings[option];

			switch (option) {
				case 'max_file_size':
					if (option === 'max_file_size') {
						settings.max_file_size = settings.filters.max_file_size = value;
					}
					break;

				case 'chunk_size':
					if (value = plupload.parseSize(value)) {
						settings[option] = value;
					}
					break;

				case 'filters':
					// for sake of backward compatibility
					if (plupload.typeOf(value) === 'array') {
						value = {
							mime_types: value
						};
					}

					if (init) {
						plupload.extend(settings.filters, value);
					} else {
						settings.filters = value;
					}

					// if file format filters are being updated, regenerate the matching expressions
					if (value.mime_types) {
						settings.filters.mime_types.regexp = (function(filters) {
							var extensionsRegExp = [];

							plupload.each(filters, function(filter) {
								plupload.each(filter.extensions.split(/,/), function(ext) {
									if (/^\s*\*\s*$/.test(ext)) {
										extensionsRegExp.push('\\.*');
									} else {
										extensionsRegExp.push('\\.' + ext.replace(new RegExp('[' + ('/^$.*+?|()[]{}\\'.replace(/./g, '\\$&')) + ']', 'g'), '\\$&'));
									}
								});
							});

							return new RegExp('(' + extensionsRegExp.join('|') + ')$', 'i');
						}(settings.filters.mime_types));
					}
					break;
	
				case 'resize':
					if (init) {
						plupload.extend(settings.resize, value, {
							enabled: true
						});
					} else {
						settings.resize = value;
					}
					break;

				case 'prevent_duplicates':
					settings.prevent_duplicates = settings.filters.prevent_duplicates = !!value;
					break;

				case 'browse_button':
				case 'drop_element':
						value = plupload.get(value);

				case 'container':
				case 'runtimes':
				case 'multi_selection':
				case 'flash_swf_url':
				case 'silverlight_xap_url':
					settings[option] = value;
					if (!init) {
						reinitRequired = true;
					}
					break;

				default:
					settings[option] = value;
			}

			if (!init) {
				self.trigger('OptionChanged', option, value, oldValue);
			}
		}

		if (typeof(option) === 'object') {
			plupload.each(option, function(value, option) {
				_setOption(option, value, init);
			});
		} else {
			_setOption(option, value, init);
		}

		if (init) {
			// Normalize the list of required capabilities
			settings.required_features = normalizeCaps(plupload.extend({}, settings));

			// Come up with the list of capabilities that can affect default mode in a multi-mode runtimes
			preferred_caps = normalizeCaps(plupload.extend({}, settings, {
				required_features: true
			}));
		} else if (reinitRequired) {
			self.trigger('Destroy');
			
			initControls.call(self, settings, function(inited) {
				if (inited) {
					self.runtime = o.Runtime.getInfo(getRUID()).type;
					self.trigger('Init', { runtime: self.runtime });
					self.trigger('PostInit');
				} else {
					self.trigger('Error', {
						code : plupload.INIT_ERROR,
						message : plupload.translate('Init error.')
					});
				}
			});
		}
	}


	// Internal event handlers
	function onFilesAdded(up, filteredFiles) {
		// Add files to queue				
		[].push.apply(files, filteredFiles);

		up.trigger('QueueChanged');
		up.refresh();
	}


	function onBeforeUpload(up, file) {
		// Generate unique target filenames
		if (settings.unique_names) {
			var matches = file.name.match(/\.([^.]+)$/), ext = "part";
			if (matches) {
				ext = matches[1];
			}
			file.target_name = file.id + '.' + ext;
		}
	}


	function onUploadFile(up, file) {
		var url = up.settings.url
		, chunkSize = up.settings.chunk_size
		, retries = up.settings.max_retries
		, features = up.features
		, offset = 0
		, blob
		;

		// make sure we start at a predictable offset
		if (file.loaded) {
			offset = file.loaded = chunkSize * Math.floor(file.loaded / chunkSize);
		}

		function handleError() {
			if (retries-- > 0) {
				delay(uploadNextChunk, 1000);
			} else {
				file.loaded = offset; // reset all progress

				up.trigger('Error', {
					code : plupload.HTTP_ERROR,
					message : plupload.translate('HTTP Error.'),
					file : file,
					response : xhr.responseText,
					status : xhr.status,
					responseHeaders: xhr.getAllResponseHeaders()
				});
			}
		}

		function uploadNextChunk() {
			var chunkBlob, formData, args, curChunkSize;

			// File upload finished
			if (file.status == plupload.DONE || file.status == plupload.FAILED || up.state == plupload.STOPPED) {
				return;
			}

			// Standard arguments
			args = {name : file.target_name || file.name};

			if (chunkSize && features.chunks && blob.size > chunkSize) { // blob will be of type string if it was loaded in memory 
				curChunkSize = Math.min(chunkSize, blob.size - offset);
				chunkBlob = blob.slice(offset, offset + curChunkSize);
			} else {
				curChunkSize = blob.size;
				chunkBlob = blob;
			}

			// If chunking is enabled add corresponding args, no matter if file is bigger than chunk or smaller
			if (chunkSize && features.chunks) {
				// Setup query string arguments
				if (up.settings.send_chunk_number) {
					args.chunk = Math.ceil(offset / chunkSize);
					args.chunks = Math.ceil(blob.size / chunkSize);
				} else { // keep support for experimental chunk format, just in case
					args.offset = offset;
					args.total = blob.size;
				}
			}

			xhr = new o.XMLHttpRequest();

			// Do we have upload progress support
			if (xhr.upload) {
				xhr.upload.onprogress = function(e) {
					file.loaded = Math.min(file.size, offset + e.loaded);
					up.trigger('UploadProgress', file);
				};
			}

			xhr.onload = function() {
				// check if upload made itself through
				if (xhr.status >= 400) {
					handleError();
					return;
				}

				retries = up.settings.max_retries; // reset the counter

				// Handle chunk response
				if (curChunkSize < blob.size) {
					chunkBlob.destroy();

					offset += curChunkSize;
					file.loaded = Math.min(offset, blob.size);

					up.trigger('ChunkUploaded', file, {
						offset : file.loaded,
						total : blob.size,
						response : xhr.responseText,
						status : xhr.status,
						responseHeaders: xhr.getAllResponseHeaders()
					});

					// stock Android browser doesn't fire upload progress events, but in chunking mode we can fake them
					if (o.Env.browser === 'Android Browser') {
						// doesn't harm in general, but is not required anywhere else
						up.trigger('UploadProgress', file);
					} 
				} else {
					file.loaded = file.size;
				}

				chunkBlob = formData = null; // Free memory

				// Check if file is uploaded
				if (!offset || offset >= blob.size) {
					// If file was modified, destory the copy
					if (file.size != file.origSize) {
						blob.destroy();
						blob = null;
					}

					up.trigger('UploadProgress', file);

					file.status = plupload.DONE;

					up.trigger('FileUploaded', file, {
						response : xhr.responseText,
						status : xhr.status,
						responseHeaders: xhr.getAllResponseHeaders()
					});
				} else {
					// Still chunks left
					delay(uploadNextChunk, 1); // run detached, otherwise event handlers interfere
				}
			};

			xhr.onerror = function() {
				handleError();
			};

			xhr.onloadend = function() {
				this.destroy();
				xhr = null;
			};

			// Build multipart request
			if (up.settings.multipart && features.multipart) {

				args.name = file.target_name || file.name;

				xhr.open("post", url, true);

				// Set custom headers
				plupload.each(up.settings.headers, function(value, name) {
					xhr.setRequestHeader(name, value);
				});

				formData = new o.FormData();

				// Add multipart params
				plupload.each(plupload.extend(args, up.settings.multipart_params), function(value, name) {
					formData.append(name, value);
				});

				// Add file and send it
				formData.append(up.settings.file_data_name, chunkBlob);
				xhr.send(formData, {
					runtime_order: up.settings.runtimes,
					required_caps: up.settings.required_features,
					preferred_caps: preferred_caps,
					swf_url: up.settings.flash_swf_url,
					xap_url: up.settings.silverlight_xap_url
				});
			} else {
				// if no multipart, send as binary stream
				url = plupload.buildUrl(up.settings.url, plupload.extend(args, up.settings.multipart_params));

				xhr.open("post", url, true);

				xhr.setRequestHeader('Content-Type', 'application/octet-stream'); // Binary stream header

				// Set custom headers
				plupload.each(up.settings.headers, function(value, name) {
					xhr.setRequestHeader(name, value);
				});

				xhr.send(chunkBlob, {
					runtime_order: up.settings.runtimes,
					required_caps: up.settings.required_features,
					preferred_caps: preferred_caps,
					swf_url: up.settings.flash_swf_url,
					xap_url: up.settings.silverlight_xap_url
				});
			}
		}

		blob = file.getSource();

		// Start uploading chunks
		if (up.settings.resize.enabled && runtimeCan(blob, 'send_binary_string') && !!~o.inArray(blob.type, ['image/jpeg', 'image/png'])) {
			// Resize if required
			resizeImage.call(this, blob, up.settings.resize, function(resizedBlob) {
				blob = resizedBlob;
				file.size = resizedBlob.size;
				uploadNextChunk();
			});
		} else {
			uploadNextChunk();
		}
	}


	function onUploadProgress(up, file) {
		calcFile(file);
	}


	function onStateChanged(up) {
		if (up.state == plupload.STARTED) {
			// Get start time to calculate bps
			startTime = (+new Date());
		} else if (up.state == plupload.STOPPED) {
			// Reset currently uploading files
			for (var i = up.files.length - 1; i >= 0; i--) {
				if (up.files[i].status == plupload.UPLOADING) {
					up.files[i].status = plupload.QUEUED;
					calc();
				}
			}
		}
	}


	function onCancelUpload() {
		if (xhr) {
			xhr.abort();
		}
	}


	function onFileUploaded(up) {
		calc();

		// Upload next file but detach it from the error event
		// since other custom listeners might want to stop the queue
		delay(function() {
			uploadNext.call(up);
		}, 1);
	}


	function onError(up, err) {
		// Set failed status if an error occured on a file
		if (err.file) {
			err.file.status = plupload.FAILED;
			calcFile(err.file);

			// Upload next file but detach it from the error event
			// since other custom listeners might want to stop the queue
			if (up.state == plupload.STARTED) { // upload in progress
				up.trigger('CancelUpload');
				delay(function() {
					uploadNext.call(up);
				}, 1);
			}
		}
	}


	function onDestroy(up) {
		up.stop();

		// Purge the queue
		plupload.each(files, function(file) {
			file.destroy();
		});
		files = [];

		if (fileInputs.length) {
			plupload.each(fileInputs, function(fileInput) {
				fileInput.destroy();
			});
			fileInputs = [];
		}

		if (fileDrops.length) {
			plupload.each(fileDrops, function(fileDrop) {
				fileDrop.destroy();
			});
			fileDrops = [];
		}

		preferred_caps = {};
		disabled = false;
		startTime = xhr = null;
		total.reset();
	}


	// Default settings
	settings = {
		runtimes: o.Runtime.order,
		max_retries: 0,
		chunk_size: 0,
		multipart: true,
		multi_selection: true,
		file_data_name: 'file',
		flash_swf_url: 'js/Moxie.swf',
		silverlight_xap_url: 'js/Moxie.xap',
		filters: {
			mime_types: [],
			prevent_duplicates: false,
			max_file_size: 0
		},
		resize: {
			enabled: false,
			preserve_headers: true,
			crop: false
		},
		send_chunk_number: true // whether to send chunks and chunk numbers, or total and offset bytes
	};

	
	setOption.call(this, options, null, true);

	// Inital total state
	total = new plupload.QueueProgress(); 

	// Add public methods
	plupload.extend(this, {

		/**
		 * Unique id for the Uploader instance.
		 *
		 * @property id
		 * @type String
		 */
		id : uid,
		uid : uid, // mOxie uses this to differentiate between event targets

		/**
		 * Current state of the total uploading progress. This one can either be plupload.STARTED or plupload.STOPPED.
		 * These states are controlled by the stop/start methods. The default value is STOPPED.
		 *
		 * @property state
		 * @type Number
		 */
		state : plupload.STOPPED,

		/**
		 * Map of features that are available for the uploader runtime. Features will be filled
		 * before the init event is called, these features can then be used to alter the UI for the end user.
		 * Some of the current features that might be in this map is: dragdrop, chunks, jpgresize, pngresize.
		 *
		 * @property features
		 * @type Object
		 */
		features : {},

		/**
		 * Current runtime name.
		 *
		 * @property runtime
		 * @type String
		 */
		runtime : null,

		/**
		 * Current upload queue, an array of File instances.
		 *
		 * @property files
		 * @type Array
		 * @see plupload.File
		 */
		files : files,

		/**
		 * Object with name/value settings.
		 *
		 * @property settings
		 * @type Object
		 */
		settings : settings,

		/**
		 * Total progess information. How many files has been uploaded, total percent etc.
		 *
		 * @property total
		 * @type plupload.QueueProgress
		 */
		total : total,


		/**
		 * Initializes the Uploader instance and adds internal event listeners.
		 *
		 * @method init
		 */
		init : function() {
			var self = this;

			if (typeof(settings.preinit) == "function") {
				settings.preinit(self);
			} else {
				plupload.each(settings.preinit, function(func, name) {
					self.bind(name, func);
				});
			}

			// Check for required options
			if (!settings.browse_button || !settings.url) {
				this.trigger('Error', {
					code : plupload.INIT_ERROR,
					message : plupload.translate('Init error.')
				});
				return;
			}

			bindEventListeners.call(this);

			initControls.call(this, settings, function(inited) {
				if (typeof(settings.init) == "function") {
					settings.init(self);
				} else {
					plupload.each(settings.init, function(func, name) {
						self.bind(name, func);
					});
				}

				if (inited) {
					self.runtime = o.Runtime.getInfo(getRUID()).type;
					self.trigger('Init', { runtime: self.runtime });
					self.trigger('PostInit');
				} else {
					self.trigger('Error', {
						code : plupload.INIT_ERROR,
						message : plupload.translate('Init error.')
					});
				}
			});
		},

		/**
		 * Set the value for the specified option(s).
		 *
		 * @method setOption
		 * @since 2.1
		 * @param {String|Object} option Name of the option to change or the set of key/value pairs
		 * @param {Mixed} [value] Value for the option (is ignored, if first argument is object)
		 */
		setOption: function(option, value) {
			setOption.call(this, option, value, !this.runtime); // until runtime not set we do not need to reinitialize
		},

		/**
		 * Get the value for the specified option or the whole configuration, if not specified.
		 * 
		 * @method getOption
		 * @since 2.1
		 * @param {String} [option] Name of the option to get
		 * @return {Mixed} Value for the option or the whole set
		 */
		getOption: function(option) {
			if (!option) {
				return settings;
			}
			return settings[option];
		},

		/**
		 * Refreshes the upload instance by dispatching out a refresh event to all runtimes.
		 * This would for example reposition flash/silverlight shims on the page.
		 *
		 * @method refresh
		 */
		refresh : function() {
			if (fileInputs.length) {
				plupload.each(fileInputs, function(fileInput) {
					fileInput.trigger('Refresh');
				});
			}
			this.trigger('Refresh');
		},

		/**
		 * Starts uploading the queued files.
		 *
		 * @method start
		 */
		start : function() {
			if (this.state != plupload.STARTED) {
				this.state = plupload.STARTED;
				this.trigger('StateChanged');

				uploadNext.call(this);
			}
		},

		/**
		 * Stops the upload of the queued files.
		 *
		 * @method stop
		 */
		stop : function() {
			if (this.state != plupload.STOPPED) {
				this.state = plupload.STOPPED;
				this.trigger('StateChanged');
				this.trigger('CancelUpload');
			}
		},


		/**
		 * Disables/enables browse button on request.
		 *
		 * @method disableBrowse
		 * @param {Boolean} disable Whether to disable or enable (default: true)
		 */
		disableBrowse : function() {
			disabled = arguments[0] !== undef ? arguments[0] : true;

			if (fileInputs.length) {
				plupload.each(fileInputs, function(fileInput) {
					fileInput.disable(disabled);
				});
			}

			this.trigger('DisableBrowse', disabled);
		},

		/**
		 * Returns the specified file object by id.
		 *
		 * @method getFile
		 * @param {String} id File id to look for.
		 * @return {plupload.File} File object or undefined if it wasn't found;
		 */
		getFile : function(id) {
			var i;
			for (i = files.length - 1; i >= 0; i--) {
				if (files[i].id === id) {
					return files[i];
				}
			}
		},

		/**
		 * Adds file to the queue programmatically. Can be native file, instance of Plupload.File,
		 * instance of mOxie.File, input[type="file"] element, or array of these. Fires FilesAdded, 
		 * if any files were added to the queue. Otherwise nothing happens.
		 *
		 * @method addFile
		 * @since 2.0
		 * @param {plupload.File|mOxie.File|File|Node|Array} file File or files to add to the queue.
		 * @param {String} [fileName] If specified, will be used as a name for the file
		 */
		addFile : function(file, fileName) {
			var self = this
			, queue = [] 
			, files = []
			, ruid
			;

			function filterFile(file, cb) {
				var queue = [];
				o.each(self.settings.filters, function(rule, name) {
					if (fileFilters[name]) {
						queue.push(function(cb) {
							fileFilters[name].call(self, rule, file, function(res) {
								cb(!res);
							});
						});
					}
				});
				o.inSeries(queue, cb);
			}

			/**
			 * @method resolveFile
			 * @private
			 * @param {o.File|o.Blob|plupload.File|File|Blob|input[type="file"]} file
			 */
			function resolveFile(file) {
				var type = o.typeOf(file);

				// o.File
				if (file instanceof o.File) { 
					if (!file.ruid && !file.isDetached()) {
						if (!ruid) { // weird case
							return false;
						}
						file.ruid = ruid;
						file.connectRuntime(ruid);
					}
					resolveFile(new plupload.File(file));
				}
				// o.Blob 
				else if (file instanceof o.Blob) {
					resolveFile(file.getSource());
					file.destroy();
				} 
				// plupload.File - final step for other branches
				else if (file instanceof plupload.File) {
					if (fileName) {
						file.name = fileName;
					}
					
					queue.push(function(cb) {
						// run through the internal and user-defined filters, if any
						filterFile(file, function(err) {
							if (!err) {
								files.push(file);
								self.trigger("FileFiltered", file);
							}
							delay(cb, 1); // do not build up recursions or eventually we might hit the limits
						});
					});
				} 
				// native File or blob
				else if (o.inArray(type, ['file', 'blob']) !== -1) {
					resolveFile(new o.File(null, file));
				} 
				// input[type="file"]
				else if (type === 'node' && o.typeOf(file.files) === 'filelist') {
					// if we are dealing with input[type="file"]
					o.each(file.files, resolveFile);
				} 
				// mixed array of any supported types (see above)
				else if (type === 'array') {
					fileName = null; // should never happen, but unset anyway to avoid funny situations
					o.each(file, resolveFile);
				}
			}

			ruid = getRUID();
			
			resolveFile(file);

			if (queue.length) {
				o.inSeries(queue, function() {
					// if any files left after filtration, trigger FilesAdded
					if (files.length) {
						self.trigger("FilesAdded", files);
					}
				});
			}
		},

		/**
		 * Removes a specific file.
		 *
		 * @method removeFile
		 * @param {plupload.File|String} file File to remove from queue.
		 */
		removeFile : function(file) {
			var id = typeof(file) === 'string' ? file : file.id;

			for (var i = files.length - 1; i >= 0; i--) {
				if (files[i].id === id) {
					return this.splice(i, 1)[0];
				}
			}
		},

		/**
		 * Removes part of the queue and returns the files removed. This will also trigger the FilesRemoved and QueueChanged events.
		 *
		 * @method splice
		 * @param {Number} start (Optional) Start index to remove from.
		 * @param {Number} length (Optional) Lengh of items to remove.
		 * @return {Array} Array of files that was removed.
		 */
		splice : function(start, length) {
			// Splice and trigger events
			var removed = files.splice(start === undef ? 0 : start, length === undef ? files.length : length);

			// if upload is in progress we need to stop it and restart after files are removed
			var restartRequired = false;
			if (this.state == plupload.STARTED) { // upload in progress
				restartRequired = true;
				this.stop();
			}

			this.trigger("FilesRemoved", removed);

			// Dispose any resources allocated by those files
			plupload.each(removed, function(file) {
				file.destroy();
			});

			this.trigger("QueueChanged");
			this.refresh();

			if (restartRequired) {
				this.start();
			}

			return removed;
		},

		/**
		 * Dispatches the specified event name and it's arguments to all listeners.
		 *
		 *
		 * @method trigger
		 * @param {String} name Event name to fire.
		 * @param {Object..} Multiple arguments to pass along to the listener functions.
		 */

		/**
		 * Check whether uploader has any listeners to the specified event.
		 *
		 * @method hasEventListener
		 * @param {String} name Event name to check for.
		 */


		/**
		 * Adds an event listener by name.
		 *
		 * @method bind
		 * @param {String} name Event name to listen for.
		 * @param {function} func Function to call ones the event gets fired.
		 * @param {Object} scope Optional scope to execute the specified function in.
		 */
		bind : function(name, func, scope) {
			var self = this;
			// adapt moxie EventTarget style to Plupload-like
			plupload.Uploader.prototype.bind.call(this, name, function() {
				var args = [].slice.call(arguments);
				args.splice(0, 1, self); // replace event object with uploader instance
				return func.apply(this, args);
			}, 0, scope);
		},

		/**
		 * Removes the specified event listener.
		 *
		 * @method unbind
		 * @param {String} name Name of event to remove.
		 * @param {function} func Function to remove from listener.
		 */

		/**
		 * Removes all event listeners.
		 *
		 * @method unbindAll
		 */


		/**
		 * Destroys Plupload instance and cleans after itself.
		 *
		 * @method destroy
		 */
		destroy : function() {
			this.trigger('Destroy');
			settings = total = null; // purge these exclusively
			this.unbindAll();
		}
	});
};

plupload.Uploader.prototype = o.EventTarget.instance;

/**
 * Constructs a new file instance.
 *
 * @class File
 * @constructor
 * 
 * @param {Object} file Object containing file properties
 * @param {String} file.name Name of the file.
 * @param {Number} file.size File size.
 */
plupload.File = (function() {
	var filepool = {};

	function PluploadFile(file) {

		plupload.extend(this, {

			/**
			 * File id this is a globally unique id for the specific file.
			 *
			 * @property id
			 * @type String
			 */
			id: plupload.guid(),

			/**
			 * File name for example "myfile.gif".
			 *
			 * @property name
			 * @type String
			 */
			name: file.name || file.fileName,

			/**
			 * File type, `e.g image/jpeg`
			 *
			 * @property type
			 * @type String
			 */
			type: file.type || '',

			/**
			 * File size in bytes (may change after client-side manupilation).
			 *
			 * @property size
			 * @type Number
			 */
			size: file.size || file.fileSize,

			/**
			 * Original file size in bytes.
			 *
			 * @property origSize
			 * @type Number
			 */
			origSize: file.size || file.fileSize,

			/**
			 * Number of bytes uploaded of the files total size.
			 *
			 * @property loaded
			 * @type Number
			 */
			loaded: 0,

			/**
			 * Number of percentage uploaded of the file.
			 *
			 * @property percent
			 * @type Number
			 */
			percent: 0,

			/**
			 * Status constant matching the plupload states QUEUED, UPLOADING, FAILED, DONE.
			 *
			 * @property status
			 * @type Number
			 * @see plupload
			 */
			status: plupload.QUEUED,

			/**
			 * Date of last modification.
			 *
			 * @property lastModifiedDate
			 * @type {String}
			 */
			lastModifiedDate: file.lastModifiedDate || (new Date()).toLocaleString(), // Thu Aug 23 2012 19:40:00 GMT+0400 (GET)

			/**
			 * Returns native window.File object, when it's available.
			 *
			 * @method getNative
			 * @return {window.File} or null, if plupload.File is of different origin
			 */
			getNative: function() {
				var file = this.getSource().getSource();
				return o.inArray(o.typeOf(file), ['blob', 'file']) !== -1 ? file : null;
			},

			/**
			 * Returns mOxie.File - unified wrapper object that can be used across runtimes.
			 *
			 * @method getSource
			 * @return {mOxie.File} or null
			 */
			getSource: function() {
				if (!filepool[this.id]) {
					return null;
				}
				return filepool[this.id];
			},

			/**
			 * Destroys plupload.File object.
			 *
			 * @method destroy
			 */
			destroy: function() {
				var src = this.getSource();
				if (src) {
					src.destroy();
					delete filepool[this.id];
				}
			}
		});

		filepool[this.id] = file;
	}

	return PluploadFile;
}());


/**
 * Constructs a queue progress.
 *
 * @class QueueProgress
 * @constructor
 */
 plupload.QueueProgress = function() {
	var self = this; // Setup alias for self to reduce code size when it's compressed

	/**
	 * Total queue file size.
	 *
	 * @property size
	 * @type Number
	 */
	self.size = 0;

	/**
	 * Total bytes uploaded.
	 *
	 * @property loaded
	 * @type Number
	 */
	self.loaded = 0;

	/**
	 * Number of files uploaded.
	 *
	 * @property uploaded
	 * @type Number
	 */
	self.uploaded = 0;

	/**
	 * Number of files failed to upload.
	 *
	 * @property failed
	 * @type Number
	 */
	self.failed = 0;

	/**
	 * Number of files yet to be uploaded.
	 *
	 * @property queued
	 * @type Number
	 */
	self.queued = 0;

	/**
	 * Total percent of the uploaded bytes.
	 *
	 * @property percent
	 * @type Number
	 */
	self.percent = 0;

	/**
	 * Bytes uploaded per second.
	 *
	 * @property bytesPerSec
	 * @type Number
	 */
	self.bytesPerSec = 0;

	/**
	 * Resets the progress to it's initial values.
	 *
	 * @method reset
	 */
	self.reset = function() {
		self.size = self.loaded = self.uploaded = self.failed = self.queued = self.percent = self.bytesPerSec = 0;
	};
};

window.plupload = plupload;

}(window, mOxie));

/**
 * @slide 滑动控件
 * @author zhangliping
 */
    function Slider(slide_container_dom, options) {
        var defaults = {
            widthScale: 1,
            moveFromScale: 1,
            X: true,
            Xfrom: true,
            Xmin: -Infinity,
            Xmax: Infinity,
            Y: true,
            Yfrom: true,
            Ymin: -Infinity,
            Ymax: Infinity,
            resizeInInit: true,
            slideBackScale: 0.25,
            speed: 600,
            startRadius: 50,
            angle: Math.PI / 3,
            offsetShowY: 144,
            offsetNowY: 144,
            offsetHideY: 8,
            offsetPageCount: 0,
            allPageCountPercent: undefined
        };
        this.options = $.extend(defaults, options);

        this.$C = $(slide_container_dom);
        this.W = this.$C.children()[0];
        this.$W = $(this.W);

        this.page_count = this.$W.children().length;
        this.options.allPageCountPercent = this.options.allPageCountPercent || this.page_count;
        this.cur_page = (this.page_count + this.page_count % 2) / 2 - 1;
        //calc page width and set them
        this.page_width = this.$C.width() * this.options.widthScale;
        this.slide_bkrange = this.page_width * this.options.slideBackScale;
        this.all_pageWidth = this.page_width * this.page_count;
        this.options.resizeInInit && this.$W.width(this.all_pageWidth + "px");
        this.options.resizeInInit && this.$W.children(" div").width(this.page_width + "px");

        this.$W.on('touchstart', this.onTouchStart.bind(this));
        this.$W.on('touchmove', this.onTouchMove.bind(this));
        this.$W.on('touchend', this.onTouchEnd.bind(this));
        this.$W.on('touchcancel', this.onTouchEnd.bind(this));
        // this.slideToCurPage(0);
        // console.log(this);
    };

    Slider.prototype.onTouchStart = function(e, efrom) {
        e.data = this;
        !efrom && e && this._onEvent('touchstart', e);
        e.stopPropagation();
        var touches = efrom ? efrom.touches[0] : e.touches[0];

        this.touchFirst_obj = {
            startX: touches.clientX,
            startY: touches.clientY,
            time: +new Date()
        };
        this.$W.removeClass('transition_fast');

        var transfrom_info = window.getComputedStyle(e.currentTarget, null).getPropertyValue("-webkit-transform").split(',');
        this.startTranslateX = transfrom_info && transfrom_info[4] || 0;
        this.startTranslateY = transfrom_info && (transfrom_info[5] || "").replace(/\)/, "").trim() || 0;
    };

    Slider.prototype.onTouchMove = function(e, efrom) {
        e.data = this;
        !efrom && this.movingDir && this._onEvent('touchmove', e);
        e.preventDefault();
        this.touchLast_obj = efrom ? efrom.touches[0] : e.touches[0];
        this.moveX = this.options.X ? this.touchLast_obj.clientX - this.touchFirst_obj.startX : 0;
        this.moveY = this.options.Y ? this.touchLast_obj.clientY - this.touchFirst_obj.startY : 0;

        // use every move data when efrom
        // if (efrom) {
        //     this.movingDir = efrom.data.movingDir;
        //     this.tmpMoveX = this.options.Xfrom ? efrom.data.tmpMoveX * this.options.moveFromScale : 0;
        //     this.tmpMoveY = this.options.Yfrom ? efrom.data.tmpMoveY * this.options.moveFromScale : 0;

        //     this.moveX = this.options.Xfrom ? efrom.data.moveX * this.options.moveFromScale : 0;
        //     this.moveY = this.options.Yfrom ? efrom.data.moveY * this.options.moveFromScale : 0;
        // } else {
        //     if (Math.pow(this.moveX, 2) + Math.pow(this.moveY, 2) < Math.pow(this.options.startRadius, 2)) {
        //         Math.abs(this.moveY) > Math.abs(this.moveX) * Math.tan(this.options.angle) ? (this.movingDir = 'Y') : (this.movingDir = 'X');
        //         this.tmpMoveX = this.moveX;
        //         this.tmpMoveY = this.moveY;
        //     } else {
        //         if (this.movingDir == 'X') {
        //             this.moveY = this.tmpMoveY || 0;
        //         } else {
        //             this.moveX = this.tmpMoveX || 0;
        //         }
        //     }
        // }

        if (this.movingDir == 'Y') {
            !efrom && this._onEvent('touchmoveY', e, this.moveY);
        }
        
        this.currentTranslateX = +this.startTranslateX + +this.moveX ;//- this.tmpMoveX;
        this.currentTranslateY = +this.startTranslateY + +this.moveY ;//- this.tmpMoveY;
// console.log("move ",this.$C[0].className,this);
        this.translate(this.currentTranslateX, this.currentTranslateY, 0);
    };

    Slider.prototype.onTouchEnd = function(e, efrom) {
        e.data = this;
        e.stopPropagation();

        console.log(this.slide_bkrange);
        if (this.currentTranslateX > 0) {
            this.translate(0, this.currentTranslateY, 600);
        } 
        else if (this.currentTranslateX < -this.slide_bkrange) {
            this.translate(-this.slide_bkrange, this.currentTranslateY, 600);
        }

        // if (this.moveX > this.slide_bkrange) {
        //     if (this.cur_page != 0) {
        //         this.cur_page--;
        //     }
        // } else if (this.moveX < -this.slide_bkrange) {
        //     if (this.cur_page != +this.page_count - 1) {
        //         this.cur_page++;
        //     }
        // }
        
        // !efrom && this._onEvent('touchend', e);

        // efrom && (this.cur_page = efrom.data.cur_page);
        // // todo
        // if (this.moveY < -this.options.startRadius || (efrom && efrom.data.moveY < -this.options.startRadius) ) {
        //     this.options.offsetNowY = this.options.offsetHideY;
        // } else if(this.moveY > this.options.startRadius || (efrom && efrom.data.moveY > this.options.startRadius) ) {
        //     this.options.offsetNowY = this.options.offsetShowY;
        // }
// console.log("end ",this.$C[0].className,this);
        // this.slideToCurPage();
        // this.movingDir = undefined;
        // this.moveX = 0;
    };

//     Slider.prototype.slideToCurPage = function(speed) {
//         $(this.$W.children()[this.cur_page]).addClass("current").siblings().removeClass("current");

//         var offsetX = (this.options.Xfrom||this.options.X) ? 100 * (this.options.offsetPageCount - this.cur_page) / this.options.allPageCountPercent + '%' : 0;
//         var offsetY = (this.options.Yfrom||this.options.Y) ? /translateY\([-\d]*px\)/.exec(this.$W.css('-webkit-transform')) : 0;

//         //todo
//         if(this.options.specialFlag){
//             offsetY = this.options.offsetNowY;
//         }
//         else{
//             //has offsetY over the container ? then set it to default.
//             offsetY = offsetY ? (offsetY[0].indexOf('-') > -1 ? offsetY[0] : this.options.offsetNowY) : this.options.offsetNowY;

//             // has offsetY almost to the last children ? then set it back to the deepest it can
//             var lc = this.$W.children('.current').children(":last-child");
//             if (lc.offset() && lc.offset().top < lc.height() * 2 - this.options.offsetNowY) {
//                 var offsetYBottom = lc.height() * (1 - lc.siblings().length);
//                 offsetYBottom >= 0 && (offsetYBottom = this.options.offsetNowY);
//                 offsetY = offsetYBottom;
//             }
//         }

// // console.log(this.$W,offsetY);
//         !this.options.Y && !this.options.Yfrom && (offsetY = 0);
//         this.translate(offsetX, offsetY, speed);
//     };

    Slider.prototype.translate = function(posX, posY, speed) {
        // if(posX==0){debugger;}
        this.setSpeed(speed);
        var posX = posX;
        var posY = posY;
        if(posX < this.options.Xmin) posX = this.options.Xmin;
        if(posX > this.options.Xmax) posX = this.options.Xmax;
        if(posY < this.options.Ymin) posY = this.options.Ymin;
        if(posY > this.options.Ymax) posY = this.options.Ymax;

        if(posX.toString().indexOf("%")<0) posX += "px";
        if(posY.toString().indexOf("%")<0) posY += "px";
        this.$W.css('-webkit-transform', 'translateX(' + posX + ') translateY(' + posY + ') translateZ(0)');
    };

    Slider.prototype.setSpeed = function(speed){
        if(typeof speed != "number") speed = this.options.speed;
        this.W.style.webkitTransitionDuration =
        this.W.style.MozTransitionDuration =
        this.W.style.msTransitionDuration =
        this.W.style.OTransitionDuration =
        this.W.style.transitionDuration = speed + 'ms';
    };

    Slider.prototype._onEvent = function() {
        // console.log("u should rewrite _onEvent function");
    };

    Slider.prototype.setEventHandler = function(fun) {
        this._onEvent = fun;
    };
/*global jQuery, console, define, setTimeout, window*/
//zoom
;(function () {
    'use strict';
    var definePicZoom = function ($) {
        var PicZoom = function (el, options) {
                this.el = $(el);
                this.zoomFactor = 1;
                this.lastScale = 1;
                this.offset = {
                    x: 0,
                    y: 0
                };
                this.options = $.extend({}, this.defaults, options);
                this.setupMarkup();
                this.bindEvents();
                this.update();
                // default enable.
                this.enable();

            },
            sum = function (a, b) {
                return a + b;
            },
            isCloseTo = function (value, expected) {
                return value > expected - 0.01 && value < expected + 0.01;
            };

        PicZoom.prototype = {

            defaults: {
                tapZoomFactor: 2,
                zoomOutFactor: 1.3,
                animationDuration: 300,
                animationInterval: 5,
                maxZoom: 4,
                minZoom: 0.5,
                lockDragAxis: false,
                use2d: true,
                zoomStartEventName: 'pz_zoomstart',
                zoomEndEventName: 'pz_zoomend',
                dragStartEventName: 'pz_dragstart',
                dragEndEventName: 'pz_dragend',
                doubleTapEventName: 'pz_doubletap'
            },

            handleDragStart: function (event) {
                this.el.trigger(this.options.dragStartEventName);
                this.stopAnimation();
                this.lastDragPosition = false;
                this.hasInteraction = true;
                this.handleDrag(event);
            },

            handleDrag: function (event) {

                if (this.zoomFactor > 1.0) {
                    var touch = this.getTouches(event)[0];
                    this.drag(touch, this.lastDragPosition);
                    this.offset = this.sanitizeOffset(this.offset);
                    this.lastDragPosition = touch;
                }
            },

            handleDragEnd: function () {
                this.el.trigger(this.options.dragEndEventName);
                this.end();
            },

            handleZoomStart: function (event) {
                this.el.trigger(this.options.zoomStartEventName);
                this.stopAnimation();
                this.lastScale = 1;
                this.nthZoom = 0;
                this.lastZoomCenter = false;
                this.hasInteraction = true;
                this.startAngle = 0;
            },

            handleFirstZoom: function (event) {
                this.startAngle = this.getRotateAngle(this.getTouches(event));
            },
            handleZoom: function (event, newScale) {

                // a relative scale factor is used
                var touchCenter = this.getTouchCenter(this.getTouches(event)),
                    scale = newScale / this.lastScale;
                this.lastScale = newScale;

                // the first touch events are thrown away since they are not precise
                this.nthZoom += 1;
                if (this.nthZoom > 3) {

                    this.scale(scale, touchCenter);
                    this.drag(touchCenter, this.lastZoomCenter);
                    this.rotate(touchCenter, this.lastZoomCenter);
                    this.rotateAngle = this.getRotateAngle(this.getTouches(event)) - this.startAngle;
                    this.rotateAngle += this.lastAngle||0;

                }
                this.lastZoomCenter = touchCenter;
            },

            handleZoomEnd: function () {
                this.el.trigger(this.options.zoomEndEventName);
                this.end();
            },

            handleDoubleTap: function (event) {
                var center = this.getTouches(event)[0],
                    zoomFactor = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
                    startZoomFactor = this.zoomFactor,
                    updateProgress = (function (progress) {
                        this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                    }).bind(this);

                if (this.hasInteraction) {
                    return;
                }
                if (startZoomFactor > zoomFactor) {
                    center = this.getCurrentZoomCenter();
                }

                this.animate(this.options.animationDuration, this.options.animationInterval, updateProgress, this.swing);
                this.el.trigger(this.options.doubleTapEventName);
            },

            sanitizeOffset: function (offset) {
                var maxX = (this.zoomFactor - 1) * this.getContainerX(),
                    maxY = (this.zoomFactor - 1) * this.getContainerY(),
                    maxOffsetX = Math.max(maxX, 0),
                    maxOffsetY = Math.max(maxY, 0),
                    minOffsetX = Math.min(maxX, 0),
                    minOffsetY = Math.min(maxY, 0);

                return {
                    x: Math.min(Math.max(offset.x, minOffsetX), maxOffsetX),
                    y: Math.min(Math.max(offset.y, minOffsetY), maxOffsetY)
                };
            },

            scaleTo: function (zoomFactor, center) {
                this.scale(zoomFactor / this.zoomFactor, center);
            },

            scale: function (scale, center) {
                scale = this.scaleZoomFactor(scale);
                this.addOffset({
                    x: (scale - 1) * (center.x + this.offset.x),
                    y: (scale - 1) * (center.y + this.offset.y)
                });
            },

            //Scales the zoom factor relative to current state
            //@return the actual scale (can differ because of max min zoom factor)
            scaleZoomFactor: function (scale) {
                var originalZoomFactor = this.zoomFactor;
                this.zoomFactor *= scale;
                this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom));
                return this.zoomFactor / originalZoomFactor;
            },

            drag: function (center, lastCenter) {
                if (lastCenter) {
                  if(this.options.lockDragAxis) {
                    // lock scroll to position that was changed the most
                    if(Math.abs(center.x - lastCenter.x) > Math.abs(center.y - lastCenter.y)) {
                      this.addOffset({
                        x: -(center.x - lastCenter.x),
                        y: 0
                      });
                    }
                    else {
                      this.addOffset({
                        y: -(center.y - lastCenter.y),
                        x: 0
                      });
                    }
                  }
                  else {
                    this.addOffset({
                      y: -(center.y - lastCenter.y),
                      x: -(center.x - lastCenter.x)
                    });
                  }
                }
            },

            rotate: function (center, lastCenter) {

            },

            //return first two touch angle
            getRotateAngle: function (touches) {
                if(touches.length > 1){
                    var delX = touches[1].x-touches[0].x;
                    var delY = touches[1].y-touches[0].y;
                    return delX?Math.atan(delY/delX):0;
                }
            },
            
            //Calculates the touch center of multiple touches
            getTouchCenter: function (touches) {
                return this.getVectorAvg(touches);
            },

            /**
             * Calculates the average of multiple vectors (x, y values)
             */
            getVectorAvg: function (vectors) {
                return {
                    x: vectors.map(function (v) { return v.x; }).reduce(sum) / vectors.length,
                    y: vectors.map(function (v) { return v.y; }).reduce(sum) / vectors.length
                };
            },

            //Adds an offset
            //param offset the offset to add
            //return return true when the offset change was accepted
            addOffset: function (offset) {
                this.offset = {
                    x: this.offset.x + offset.x,
                    y: this.offset.y + offset.y
                };
            },

            sanitize: function () {
                if (this.zoomFactor < this.options.zoomOutFactor) {
                    this.zoomOutAnimation();
                } else if (this.isInsaneOffset(this.offset)) {
                    this.sanitizeOffsetAnimation();
                }
            },

            //Checks if the offset is ok with the current zoom factor
            isInsaneOffset: function (offset) {
                var sanitizedOffset = this.sanitizeOffset(offset);
                return sanitizedOffset.x !== offset.x ||
                    sanitizedOffset.y !== offset.y;
            },

            //Creates an animation moving to a sane offset
            sanitizeOffsetAnimation: function () {
                var targetOffset = this.sanitizeOffset(this.offset),
                    startOffset = {
                        x: this.offset.x,
                        y: this.offset.y
                    },
                    updateProgress = (function (progress) {
                        this.offset.x = startOffset.x + progress * (targetOffset.x - startOffset.x);
                        this.offset.y = startOffset.y + progress * (targetOffset.y - startOffset.y);
                        this.update();
                    }).bind(this);

                this.animate(
                    this.options.animationDuration,
                    this.options.animationInterval,
                    updateProgress,
                    this.swing
                );
            },

            //Zooms back to the original position,(no offset and zoom factor 1)
            zoomOutAnimation: function () {
                var startZoomFactor = this.zoomFactor,
                    zoomFactor = 1,
                    center = this.getCurrentZoomCenter(),
                    updateProgress = (function (progress) {
                        this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                    }).bind(this);

                this.animate(
                    this.options.animationDuration,
                    this.options.animationInterval,
                    updateProgress,
                    this.swing
                );
            },

            updateAspectRatio: function () {
                this.setContainerY(this.getContainerX() / this.getAspectRatio());
            },

            //for the element to fit into the container)
            getInitialZoomFactor: function () {
                // use .offsetWidth instead of width()  height()
                // because jQuery-width() return the original width but Zepto-width() will calculate width with transform.
                return this.container[0].offsetWidth / this.el[0].offsetWidth;
            },

            getAspectRatio: function () {
                return this.el[0].offsetWidth / this.el[0].offsetHeight;
            },

            //Calculates the virtual zoom center for the current offset and zoom factor
            //(used for reverse zoom)
            getCurrentZoomCenter: function () {

                // uses following formula to calculate the zoom center x value
                // offset_left / offset_right = zoomcenter_x / (container_x - zoomcenter_x)
                var length = this.container[0].offsetWidth * this.zoomFactor,
                    offsetLeft  = this.offset.x,
                    offsetRight = length - offsetLeft -this.container[0].offsetWidth,
                    widthOffsetRatio = offsetLeft / offsetRight,
                    centerX = widthOffsetRatio * this.container[0].offsetWidth / (widthOffsetRatio + 1),

                // the same for the zoomcenter y
                    height = this.container[0].offsetHeight * this.zoomFactor,
                    offsetTop  = this.offset.y,
                    offsetBottom = height - offsetTop - this.container[0].offsetHeight,
                    heightOffsetRatio = offsetTop / offsetBottom,
                    centerY = heightOffsetRatio * this.container[0].offsetHeight / (heightOffsetRatio + 1);

                // prevents division by zero
                if (offsetRight === 0) { centerX = this.container[0].offsetWidth; }
                if (offsetBottom === 0) { centerY = this.container[0].offsetHeight; }

                return {
                    x: centerX,
                    y: centerY
                };
            },

            canDrag: function () {
                return !isCloseTo(this.zoomFactor, 1);
            },

            //return array touches
            getTouches: function (event) {
                var position = this.container.offset();
                return Array.prototype.slice.call(event.touches).map(function (touch) {
                    return {
                        x: touch.pageX - position.left,
                        y: touch.pageY - position.top
                    };
                });
            },

            //Animation loop    does not support simultaneous animations
            animate: function (duration, interval, framefn, timefn, callback) {
                var startTime = new Date().getTime(),
                    renderFrame = (function () {
                        if (!this.inAnimation) { return; }
                        var frameTime = new Date().getTime() - startTime,
                            progress = frameTime / duration;
                        if (frameTime >= duration) {
                            framefn(1);
                            if (callback) {
                                callback();
                            }
                            this.update();
                            this.stopAnimation();
                            this.update();
                        } else {
                            if (timefn) {
                                progress = timefn(progress);
                            }
                            framefn(progress);
                            this.update();
                            setTimeout(renderFrame, interval);
                        }
                    }).bind(this);
                this.inAnimation = true;
                renderFrame();
            },

            stopAnimation: function () {
                this.inAnimation = false;
            },

            //Swing timing function for animations
            swing: function (p) {
                return -Math.cos(p * Math.PI) / 2  + 0.5;
            },

            getContainerX: function () {
                return this.container[0].offsetWidth;
            },

            getContainerY: function () {
                return this.container[0].offsetHeight;
            },

            setContainerY: function (y) {
                // y=274;
                return this.container.height(y);
            },

            setupMarkup: function () {
                this.container = $('<div class="pic-zoom-container"></div>');
                this.el.before(this.container);
                this.container.append(this.el);

                this.container.css({
                    'overflow': 'hidden',
                    'position': 'relative'
                });

                // Zepto doesn't recognize `webkitTransform..` style
                this.el.css({
                    '-webkit-transform-origin': '0% 0%',
                    '-moz-transform-origin': '0% 0%',
                    '-ms-transform-origin': '0% 0%',
                    '-o-transform-origin': '0% 0%',
                    'transform-origin': '0% 0%',
                    'position': 'absolute'
                });
            },

            end: function () {
                this.hasInteraction = false;
                this.sanitize();
                this.update();
            },

            //Binds all required event listeners
            bindEvents: function () {
                detectGestures(this.container.get(0), this);
                $(window).on('resize', this.update.bind(this));
                $(this.el).find('img').on('load', this.update.bind(this));
            },

            //Updates the css values according to the current zoom factor and offset
            update: function () {

                if (this.updatePlaned) {
                    return;
                }
                this.updatePlaned = true;

                setTimeout((function () {
                    this.updatePlaned = false;
                    this.updateAspectRatio();

                    // console.log(this.rotateAngle);

                    var zoomFactor = this.getInitialZoomFactor() * this.zoomFactor,
                        offsetX = -this.offset.x / zoomFactor,
                        offsetY = -this.offset.y / zoomFactor,
                        transform3d =   'rotate('+this.rotateAngle+'rad) scale3d('     + zoomFactor + ', '  + zoomFactor + ',1) ' +
                            'translate3d(' + offsetX    + 'px,' + offsetY    + 'px,0px)',
                        transform2d =   'rotate('+this.rotateAngle+'rad) scale('       + zoomFactor + ', '  + zoomFactor + ') ' +
                            'translate('   + offsetX    + 'px,' + offsetY    + 'px)',
                        removeClone = (function () {
                            if (this.clone) {
                                this.clone.remove();
                                delete this.clone;
                            }
                        }).bind(this);

                    // Scale 3d and translate3d are faster (at least on ios)
                    // but they also reduce the quality.
                    // PicZoom uses the 3d transformations during interactions
                    // after interactions it falls back to 2d transformations

                        this.el.css({
                            '-webkit-transform-origin': 50+'% '+50+'%',
                            '-moz-transform-origin': 50+'% '+50+'%',
                            '-ms-transform-origin': 50+'% '+50+'%',
                            '-o-transform-origin': 50+'% '+50+'%',
                            'transform-origin': 50+'% '+50+'%',
                        });


                    if (!this.options.use2d || this.hasInteraction || this.inAnimation) {
                        this.is3d = true;
                        removeClone();
                        this.el.css({
                            '-webkit-transform':  transform3d,
                            '-o-transform':       transform2d,
                            '-ms-transform':      transform2d,
                            '-moz-transform':     transform2d,
                            'transform':        transform3d
                        });
                    } else {

                        // When changing from 3d to 2d transform webkit has some glitches.
                        // To avoid this, a copy of the 3d transformed element is displayed in the
                        // foreground while the element is converted from 3d to 2d transform
                        if (this.is3d) {
                            this.clone = this.el.clone();
                            this.clone.css('pointer-events', 'none');
                            this.clone.appendTo(this.container);
                            setTimeout(removeClone, 200);
                        }
                        this.el.css({
                            '-webkit-transform':  transform2d,
                            '-o-transform':       transform2d,
                            '-ms-transform':      transform2d,
                            '-moz-transform':     transform2d,
                            'transform':        transform2d
                        });
                        this.is3d = false;
                    }
                }).bind(this), 0);
            },

            enable: function() {
              this.enabled = true;
            },

            disable: function() {
              this.enabled = false;
            }
        };

        var detectGestures = function (el, target) {
            var interaction = null,
                fingers = 0,
                lastTouchStart = null,
                startTouches = null,

                setInteraction = function (newInteraction, event) {
                    if (interaction !== newInteraction) {

                        if (interaction && !newInteraction) {
                            switch (interaction) {
                                case "zoom":
                                    target.handleZoomEnd(event);
                                    break;
                                case 'drag':
                                    target.handleDragEnd(event);
                                    break;
                            }
                        }

                        switch (newInteraction) {
                            case 'zoom':
                                target.handleZoomStart(event);
                                break;
                            case 'drag':
                                target.handleDragStart(event);
                                break;
                        }
                    }
                    interaction = newInteraction;
                },

                updateInteraction = function (event) {
                    if (fingers === 2) {
                        setInteraction('zoom');
                    } else if (fingers === 1 && target.canDrag()) {
                        setInteraction('drag', event);
                    } else {
                        setInteraction(null, event);
                    }
                },

                targetTouches = function (touches) {
                    return Array.prototype.slice.call(touches).map(function (touch) {
                        return {
                            x: touch.pageX,
                            y: touch.pageY
                        };
                    });
                },

                getDistance = function (a, b) {
                    var x, y;
                    x = a.x - b.x;
                    y = a.y - b.y;
                    return Math.sqrt(x * x + y * y);
                },

                calculateScale = function (startTouches, endTouches) {
                    var startDistance = getDistance(startTouches[0], startTouches[1]),
                        endDistance = getDistance(endTouches[0], endTouches[1]);
                    return endDistance / startDistance;
                },

                cancelEvent = function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                },

                detectDoubleTap = function (event) {
                    var time = (new Date()).getTime();

                    if (fingers > 1) {
                        lastTouchStart = null;
                    }

                    if (time - lastTouchStart < 300) {
                        cancelEvent(event);

                        target.handleDoubleTap(event);
                        switch (interaction) {
                            case "zoom":
                                target.handleZoomEnd(event);
                                break;
                            case 'drag':
                                target.handleDragEnd(event);
                                break;
                        }
                    }

                    if (fingers === 1) {
                        lastTouchStart = time;
                    }
                },
                firstMove = true;

            el.addEventListener('touchstart', function (event) {
                if(target.enabled) {
                    firstMove = true;
                    fingers = event.touches.length;
                    // detectDoubleTap(event);
                }
            });

            el.addEventListener('touchmove', function (event) {
                if(target.enabled) {
                    if (firstMove) {
                        updateInteraction(event);
                        if (interaction) {
                            switch (interaction) {
                                case 'zoom':
                                    target.handleFirstZoom(event);
                                    break;
                            }
                            cancelEvent(event);
                        }
                        startTouches = targetTouches(event.touches);
                    } else {
                        switch (interaction) {
                            case 'zoom':
                                target.handleZoom(event, calculateScale(startTouches, targetTouches(event.touches)));
                                break;
                            case 'drag':
                                target.handleDrag(event);
                                break;
                        }
                        if (interaction) {
                            cancelEvent(event);
                            target.update();
                        }
                    }

                    firstMove = false;
                }
            });

            el.addEventListener('touchend', function (event) {
                if(target.enabled) {
                    target.lastAngle = target.rotateAngle;
                    fingers = event.touches.length;
                    updateInteraction(event);
                }
            });
        };

        return PicZoom;
    };

    if (typeof define !== 'undefined' && define.amd) {
        define(['zepto'], function ($) {
            return definePicZoom($);
        });
    } else {
        window.PicZoom = definePicZoom(window.$);
    }
}).call(this);


//canvas
;(function() {
    var paint = {
        init: function() {
            this.load();
        },
        load: function() {
            this.x = []; //记录鼠标移动是的X坐标 
            this.y = []; //记录鼠标移动是的Y坐标 
            this.clickDrag = [];
            this.lock = false; //鼠标移动前，判断鼠标是否按下 
            this.isEraser = false;
            //this.Timer=null;//橡皮擦启动计时器 
            //this.radius=5; 
            this.storageColor = "#000000";
            this.eraserRadius = 15; //擦除半径值 
            this.color = ["#000000", "#FFFFFF", "#80FF00", "#00FFFF", "#808080", "#FF8000", "#408080", "#8000FF", "#CCCC00"]; //画笔颜色值 
            this.fontWeight = [2, 5, 8];
            this.$ = function(id) {
                return typeof id == "string" ? document.getElementById(id) : id;
            };
            this.canvas = this.$("canvas");
            if (this.canvas.getContext) {} else {
                alert("您的浏览器不支持 canvas 标签");
                return;
            }
            this.cxt = this.canvas.getContext('2d');
            this.cxt.lineJoin = "round"; //context.lineJoin - 指定两条线段的连接方式 
            this.cxt.lineWidth = 5; //线条的宽度 
            this.iptClear = this.$("clear");
            this.revocation = this.$("revocation");
            this.imgurl = this.$("imgurl"); //图片路径按钮 
            this.w = this.canvas.width; //取画布的宽 
            this.h = this.canvas.height; //取画布的高 
            this.touch = ("createTouch" in document); //判定是否为手持设备 
            this.StartEvent = this.touch ? "touchstart" : "mousedown"; //支持触摸式使用相应的事件替代 
            this.MoveEvent = this.touch ? "touchmove" : "mousemove";
            this.EndEvent = this.touch ? "touchend" : "mouseup";
            this.bind();
        },
        bind: function() {
            var t = this;
            /*清除画布*/
            this.iptClear.onclick = function() {
                t.clear();
            };
            /*鼠标按下事件，记录鼠标位置，并绘制，解锁lock，打开mousemove事件*/
            this.canvas['on' + t.StartEvent] = function(e) {
                var touch = t.touch ? e.touches[0] : e;
                var _x = touch.clientX - touch.target.offsetLeft; //鼠标在画布上的x坐标，以画布左上角为起点 
                var _y = touch.clientY - touch.target.offsetTop+$('body').scrollTop(); //鼠标在画布上的y坐标，以画布左上角为起点 
                if (t.isEraser) {
                    /* 
                    t.cxt.globalCompositeOperation = "destination-out"; 
                    t.cxt.beginPath(); 
                    t.cxt.arc(_x, _y,t.eraserRadius, 0, Math.PI * 2); 
                    t.cxt.strokeStyle = "rgba(250,250,250,0)"; 
                    t.cxt.fill(); 
                    t.cxt.globalCompositeOperation = "source-over"; 
                    */
                    t.resetEraser(_x, _y, touch);
                } else {
                    t.movePoint(_x, _y); //记录鼠标位置 
                    t.drawPoint(); //绘制路线 
                }
                t.lock = true;
                e.stopPropagation();
                e.preventDefault();
            };
            /*鼠标移动事件*/
            this.canvas['on' + t.MoveEvent] = function(e) {
                var touch = t.touch ? e.touches[0] : e;
                if (t.lock) //t.lock为true则执行 
                {
                    var _x = touch.clientX - touch.target.offsetLeft; //鼠标在画布上的x坐标，以画布左上角为起点 
                    var _y = touch.clientY - touch.target.offsetTop+$('body').scrollTop(); //鼠标在画布上的y坐标，以画布左上角为起点 
                    if (t.isEraser) {
                        //if(t.Timer)clearInterval(t.Timer); 
                        //t.Timer=setInterval(function(){ 
                        t.resetEraser(_x, _y, touch);
                        //},10); 
                    } else {
                        t.movePoint(_x, _y, true); //记录鼠标位置 
                        t.drawPoint(); //绘制路线 
                    }
                }
                e.stopPropagation();
                e.preventDefault();
            };
            this.canvas['on' + t.EndEvent] = function(e) {
                /*重置数据*/
                t.lock = false;
                t.x = [];
                t.y = [];
                t.clickDrag = [];
                clearInterval(t.Timer);
                t.Timer = null;
                e.stopPropagation();
                e.preventDefault();
            };
            this.revocation.onclick = function() {
                t.redraw();
            };
            this.changeColor();
            this.imgurl.onclick = function() {
                var base64 = t.getUrl();

                var pic = base64.split(",")[1];
                var url = "http://up.qiniu.com/putb64/-1"; 
                var xhr = new XMLHttpRequest();
                
                xhr.onreadystatechange=function(){
                    if (xhr.readyState==4 && xhr.status=="200"){
                        xhr.responseText;
                        var res=JSON.parse(xhr.responseText);
                        typeof(G)!="undefined"&&G&&G.pic&&(G.pic["sign"] = res.key);
                        goTo('show','finishUpload');
                        // var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
                        // img.title = file[file.length-1].name;
                        // img.src = G.pic.host+G.pic["bkg"];
                    }
                }
                xhr.open("POST", url, true); 
                xhr.setRequestHeader("Content-Type", "application/octet-stream"); 
                xhr.setRequestHeader("Authorization", "UpToken "+G.pic.token); 
                xhr.send(pic);
            };
            /*橡皮擦*/
            this.$("eraser").onclick = function(e) {
                t.isEraser = true;
                t.$("error").style.color = "red";
                t.$("error").innerHTML = "您已使用橡皮擦！";
            };
        },
        movePoint: function(x, y, dragging) {
            /*将鼠标坐标添加到各自对应的数组里*/
            this.x.push(x);
            this.y.push(y);
            this.clickDrag.push(y);
        },
        drawPoint: function(x, y, radius) {
            for (var i = 0; i < this.x.length; i++) //循环数组 
            {
                this.cxt.beginPath(); //context.beginPath() , 准备绘制一条路径 
                if (this.clickDrag[i] && i) { //当是拖动而且i!=0时，从上一个点开始画线。 
                    this.cxt.moveTo(this.x[i - 1], this.y[i - 1]); //context.moveTo(x, y) , 新开一个路径，并指定路径的起点 
                } else {
                    this.cxt.moveTo(this.x[i] - 1, this.y[i]);
                }
                this.cxt.lineTo(this.x[i], this.y[i]); //context.lineTo(x, y) , 将当前点与指定的点用一条笔直的路径连接起来 
                this.cxt.closePath(); //context.closePath() , 如果当前路径是打开的则关闭它 
                this.cxt.stroke(); //context.stroke() , 绘制当前路径 
            }
        },
        clear: function() {
            this.cxt.clearRect(0, 0, this.w, this.h); //清除画布，左上角为起点 
        },
        redraw: function() {
            /*撤销*/
            this.cxt.restore();
        },
        preventDefault: function(e) {
            /*阻止默认*/
            var touch = this.touch ? e.touches[0] : e;
            if (this.touch) touch.preventDefault();
            else window.event.returnValue = false;
        },
        changeColor: function() {
            /*为按钮添加事件*/
            var t = this,
                iptNum = this.$("color").getElementsByTagName("input"),
                fontIptNum = this.$("font").getElementsByTagName("input");
            for (var i = 0, l = iptNum.length; i < l; i++) {
                iptNum[i].index = i;
                iptNum[i].onclick = function() {
                    t.cxt.save();
                    t.cxt.strokeStyle = t.color[this.index];
                    t.storageColor = t.color[this.index];
                    t.$("error").style.color = "#000";
                    t.$("error").innerHTML = "如果有错误，请使用橡皮擦：";
                    t.cxt.strokeStyle = t.storageColor;
                    t.isEraser = false;
                }
            }
            // for (var i = 0, l = fontIptNum.length; i < l; i++) {
            //     t.cxt.save();
            //     fontIptNum[i].index = i;
            //     fontIptNum[i].onclick = function() {
            //         t.changeBackground(this.index);
            //         t.cxt.lineWidth = t.fontWeight[this.index];
            //         t.$("error").style.color = "#000";
            //         t.$("error").innerHTML = "如果有错误，请使用橡皮擦：";
            //         t.isEraser = false;
            //         t.cxt.strokeStyle = t.storageColor;
            //     }
            // }

            for (var i = 0, l = fontIptNum.length; i < l; i++) {
                t.cxt.save();
                fontIptNum[i].index = i;
                fontIptNum[i].onclick = function() {
                    t.cxt.save();
                    t.cxt.strokeStyle = t.color[this.index];
                    t.storageColor = t.color[this.index];
                    if(this.index==0){
                        $("canvas").css("background","#eee")
                    }
                    else{         
                        $("canvas").css("background","#000")
                    }
                    t.clear();
                    t.$("error").style.color = "#000";
                    t.$("error").innerHTML = "如果有错误，请使用橡皮擦：";
                    t.isEraser = false;
                    t.cxt.strokeStyle = t.storageColor;
                }
            }
        },
        changeBackground: function(num) {
            /*添加画笔粗细的提示背景颜色切换，灰色为当前*/
            var fontIptNum = this.$("font").getElementsByTagName("input");
            for (var j = 0, m = fontIptNum.length; j < m; j++) {
                fontIptNum[j].className = "";
                if (j == num) fontIptNum[j].className = "grea";
            }
        },
        getUrl: function() {
            console.log(this.canvas.toDataURL());
            return this.canvas.toDataURL();
            // this.$("html").innerHTML = this.canvas.toDataURL();
        },
        resetEraser: function(_x, _y, touch) {
            /*使用橡皮擦-提醒*/
            var t = this;
            //this.cxt.lineWidth = 30; 
            /*source-over 默认,相交部分由后绘制图形的填充(颜色,渐变,纹理)覆盖,全部浏览器通过*/
            t.cxt.globalCompositeOperation = "destination-out";
            t.cxt.beginPath();
            t.cxt.arc(_x, _y, t.eraserRadius, 0, Math.PI * 2);
            t.cxt.strokeStyle = "rgba(250,250,250,0)";
            t.cxt.fill();
            t.cxt.globalCompositeOperation = "source-over"
        }
    };
    window.paint = paint;
}).call(this);
/*global plupload ,mOxie*/
/*global ActiveXObject */
/*exported Qiniu */
/*exported QiniuJsSDK */

function QiniuJsSDK() {


    this.detectIEVersion = function() {
        var v = 4,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');
        while (
            div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->',
            all[0]
        ) {
            v++;
        }
        return v > 4 ? v : false;
    };

    this.isImage = function(url) {
        var res, suffix = "";
        var imageSuffixes = ["png", "jpg", "jpeg", "gif", "bmp"];
        var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

        if (!url || !suffixMatch.test(url)) {
            return false;
        }
        res = suffixMatch.exec(url);
        suffix = res[1].toLowerCase();
        for (var i = 0, l = imageSuffixes.length; i < l; i++) {
            if (suffix === imageSuffixes[i]) {
                return true;
            }
        }
        return false;
    };

    this.getFileExtension = function(filename) {
        var tempArr = filename.split(".");
        var ext;
        if (tempArr.length === 1 || (tempArr[0] === "" && tempArr.length === 2)) {
            ext = "";
        } else {
            ext = tempArr.pop().toLowerCase(); //get the extension and make it lower-case
        }
        return ext;
    };

    this.getFileName = function(filename) {
        var tempArr = filename.split(".");
        var fName;
        if (tempArr.length === 1 || (tempArr[0] === "" && tempArr.length === 2)) {
            fName = "";
        } else {
            tempArr.pop();
            fName = tempArr.join("."); //get the extension and make it lower-case
        }
        return fName;
    };


    this.utf8_encode = function(argString) {
        // http://kevin.vanzonneveld.net
        // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: sowberry
        // +    tweaked by: Jack
        // +   bugfixed by: Onno Marsman
        // +   improved by: Yves Sucaet
        // +   bugfixed by: Onno Marsman
        // +   bugfixed by: Ulrich
        // +   bugfixed by: Rafal Kukawski
        // +   improved by: kirilloid
        // +   bugfixed by: kirilloid
        // *     example 1: this.utf8_encode('Kevin van Zonneveld');
        // *     returns 1: 'Kevin van Zonneveld'

        if (argString === null || typeof argString === 'undefined') {
            return '';
        }

        var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        var utftext = '',
            start, end, stringl = 0;

        start = end = 0;
        stringl = string.length;
        for (var n = 0; n < stringl; n++) {
            var c1 = string.charCodeAt(n);
            var enc = null;

            if (c1 < 128) {
                end++;
            } else if (c1 > 127 && c1 < 2048) {
                enc = String.fromCharCode(
                    (c1 >> 6) | 192, (c1 & 63) | 128
                );
            } else if (c1 & 0xF800 ^ 0xD800 > 0) {
                enc = String.fromCharCode(
                    (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                );
            } else { // surrogate pairs
                if (c1 & 0xFC00 ^ 0xD800 > 0) {
                    throw new RangeError('Unmatched trail surrogate at ' + n);
                }
                var c2 = string.charCodeAt(++n);
                if (c2 & 0xFC00 ^ 0xDC00 > 0) {
                    throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
                }
                c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
                enc = String.fromCharCode(
                    (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                );
            }
            if (enc !== null) {
                if (end > start) {
                    utftext += string.slice(start, end);
                }
                utftext += enc;
                start = end = n + 1;
            }
        }

        if (end > start) {
            utftext += string.slice(start, stringl);
        }

        return utftext;
    };

    this.base64_encode = function(data) {
        // http://kevin.vanzonneveld.net
        // +   original by: Tyler Akins (http://rumkin.com)
        // +   improved by: Bayron Guevara
        // +   improved by: Thunder.m
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   bugfixed by: Pellentesque Malesuada
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // -    depends on: this.utf8_encode
        // *     example 1: this.base64_encode('Kevin van Zonneveld');
        // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
        // mozilla has this native
        // - but breaks in 2.0.0.12!
        //if (typeof this.window['atob'] == 'function') {
        //    return atob(data);
        //}
        var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = '',
            tmp_arr = [];

        if (!data) {
            return data;
        }

        data = this.utf8_encode(data + '');

        do { // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join('');

        switch (data.length % 3) {
            case 1:
                enc = enc.slice(0, -2) + '==';
                break;
            case 2:
                enc = enc.slice(0, -1) + '=';
                break;
        }

        return enc;
    };

    this.URLSafeBase64Encode = function(v) {
        v = this.base64_encode(v);
        return v.replace(/\//g, '_').replace(/\+/g, '-');
    };

    this.createAjax = function(argument) {
        var xmlhttp = {};
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlhttp;
    };

    this.parseJSON = function(data) {
        // Attempt to parse using the native JSON parser first
        if (window.JSON && window.JSON.parse) {
            return window.JSON.parse(data);
        }

        if (data === null) {
            return data;
        }
        if (typeof data === "string") {

            // Make sure leading/trailing whitespace is removed (IE can't handle it)
            data = this.trim(data);

            if (data) {
                // Make sure the incoming data is actual JSON
                // Logic borrowed from http://json.org/json2.js
                if (/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {

                    return (function() {
                        return data;
                    })();
                }
            }
        }
    };

    this.trim = function(text) {
        return text === null ? "" : this.trim.call(text);
    };

    //Todo ie7 handler / this.parseJSON bug;

    var that = this;

    this.uploader = function(op) {
        if (!op.domain) {
            throw 'uptoken_url or domain is required!';
        }

        if (!op.browse_button) {
            throw 'browse_button is required!';
        }

        var option = {};

        var _Error_Handler = op.init && op.init.Error;
        var _FileUploaded_Handler = op.init && op.init.FileUploaded;

        op.init.Error = function() {};
        op.init.FileUploaded = function() {};

        that.uptoken_url = op.uptoken_url;
        that.token = '';
        that.key_handler = typeof op.init.Key === 'function' ? op.init.Key : '';
        this.domain = op.domain;
        var ctx = '';
        var speedCalInfo = {
            isResumeUpload: false,
            resumeFilesize: 0,
            startTime: '',
            currentTime: ''
        };

        var reset_chunk_size = function() {
            var ie = that.detectIEVersion();
            var BLOCK_BITS, MAX_CHUNK_SIZE, chunk_size;
            var isSpecialSafari = (mOxie.Env.browser === "Safari" && mOxie.Env.version <= 5 && mOxie.Env.os === "Windows" && mOxie.Env.osVersion === "7") || (mOxie.Env.browser === "Safari" && mOxie.Env.os === "iOS" && mOxie.Env.osVersion === "7");
            if (ie && ie <= 9 && op.chunk_size && op.runtimes.indexOf('flash') >= 0) {
                //  link: http://www.plupload.com/docs/Frequently-Asked-Questions#when-to-use-chunking-and-when-not
                //  when plupload chunk_size setting is't null ,it cause bug in ie8/9  which runs  flash runtimes (not support html5) .
                op.chunk_size = 0;

            } else if (isSpecialSafari) {
                // win7 safari / iOS7 safari have bug when in chunk upload mode
                // reset chunk_size to 0
                // disable chunk in special version safari
                op.chunk_size = 0;
            } else {
                BLOCK_BITS = 20;
                MAX_CHUNK_SIZE = 4 << BLOCK_BITS; //4M

                chunk_size = plupload.parseSize(op.chunk_size);
                if (chunk_size > MAX_CHUNK_SIZE) {
                    op.chunk_size = MAX_CHUNK_SIZE;
                }
                // qiniu service  max_chunk_size is 4m
                // reset chunk_size to max_chunk_size(4m) when chunk_size > 4m
            }
        };
        reset_chunk_size();

        var getUpToken = function() {
            if (!op.uptoken) {
                var ajax = that.createAjax();
                ajax.open('GET', that.uptoken_url, true);
                // ajax.setRequestHeader("If-Modified-Since", "0");
                ajax.onreadystatechange = function() {
                    if (ajax.readyState === 4 && ajax.status === 200) {
                        var res = that.parseJSON(ajax.responseText);
                        that.token = res.uptoken;
                        typeof(G)!="undefined"&&G&&G.pic&&(G.pic.token = res.uptoken);
                
                        
                    }
                };
                ajax.send();
            } else {
                that.token = op.uptoken;
            }
            // that.token = 'TCZ4q7OROJf39XpZLh1ogRJjz63d7RPHGVe9S4FN:V3eC5JJZnLkkFNzLEJ4-ChNuR4Q=:eyJzY29wZSI6InZhcnQtY2FtcGFpZ24iLCJkZWFkbGluZSI6MTQzNzkwNjQ3NCwiaW5zZXJ0T25seSI6MCwiZGV0ZWN0TWltZSI6MCwiZnNpemVMaW1pdCI6MCwiY2FsbGJhY2tGZXRjaEtleSI6MH0=';
        };

        //https://github.com/vczero/OurTimes/blob/master/server/util/guid.js
        window.Guid =function(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            }).toUpperCase();
        };
    
        var getFileKey = function(up, file, func) {
            var key = '',
                unique_names = false;
            if (!op.save_key) {
                unique_names = up.getOption && up.getOption('unique_names');
                unique_names = unique_names || (up.settings && up.settings.unique_names);
                if (unique_names) {
                    var ext = that.getFileExtension(file.name);
                    key = ext ? file.id + '.' + ext : file.id;
                } else if (typeof func === 'function') {
                    key = func(up, file);
                } else {
                    // key = file.name + Guid();    
                    var ext = that.getFileExtension(file.name);
                    // key = ext ? that.getFileName(file.name) + "-" + Guid() + '.' + ext : Guid();
                    key = ext ? file.id + '.' + ext : file.id;
                    console.log(key);
                    typeof(G)!="undefined"&&G&&G.pic&&G.pic.type&&(G.pic[G.pic.type] = key);
                }
            }
            return key;
        };

        plupload.extend(option, op, {
            url: 'http://upload.qiniu.com',
            multipart_params: {
                token: ''
            }
        });

        var uploader = new plupload.Uploader(option);

        uploader.bind('Init', function(up, params) {
            getUpToken();
        });
        uploader.init();

        uploader.bind('FilesAdded', function(up, files) {
            var auto_start = up.getOption && up.getOption('auto_start');
            auto_start = auto_start || (up.settings && up.settings.auto_start);
            if (auto_start) {
                plupload.each(files, function(i, file) {
                    up.start();
                });
            }
            up.refresh(); // Reposition Flash/Silverlight
        });

        uploader.bind('BeforeUpload', function(up, file) {
            file.speed = file.speed || 0; // add a key named speed for file obj
            ctx = '';

            var directUpload = function(up, file, func) {
                speedCalInfo.startTime = new Date().getTime();
                var multipart_params_obj;
                if (op.save_key) {
                    multipart_params_obj = {
                        'token': that.token
                    };
                } else {
                    multipart_params_obj = {
                        'key': getFileKey(up, file, func),
                        'token': that.token
                    };
                }

                var x_vars = op.x_vars;
                if (x_vars !== undefined && typeof x_vars === 'object') {
                    for (var x_key in x_vars) {
                        if (x_vars.hasOwnProperty(x_key)) {
                            if (typeof x_vars[x_key] === 'function') {
                                multipart_params_obj['x:' + x_key] = x_vars[x_key](up, file);
                            } else if (typeof x_vars[x_key] !== 'object') {
                                multipart_params_obj['x:' + x_key] = x_vars[x_key];
                            }
                        }
                    }
                }


                up.setOption({
                    'url': 'http://upload.qiniu.com/',
                    'multipart': true,
                    'chunk_size': undefined,
                    'multipart_params': multipart_params_obj
                });
            };


            var chunk_size = up.getOption && up.getOption('chunk_size');
            chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
            if (uploader.runtime === 'html5' && chunk_size) {
                if (file.size < chunk_size) {
                    directUpload(up, file, that.key_handler);
                } else {
                    var localFileInfo = localStorage.getItem(file.name);
                    var blockSize = chunk_size;
                    if (localFileInfo) {
                        localFileInfo = JSON.parse(localFileInfo);
                        var now = (new Date()).getTime();
                        var before = localFileInfo.time || 0;
                        var aDay = 24 * 60 * 60 * 1000; //  milliseconds
                        if (now - before < aDay) {
                            if (localFileInfo.percent !== 100) {
                                if (file.size === localFileInfo.total) {
                                    // 通过文件名和文件大小匹配，找到对应的 localstorage 信息，恢复进度
                                    file.percent = localFileInfo.percent;
                                    file.loaded = localFileInfo.offset;
                                    ctx = localFileInfo.ctx;

                                    //  计算速度时，会用到
                                    speedCalInfo.isResumeUpload = true;
                                    speedCalInfo.resumeFilesize = localFileInfo.offset;
                                    if (localFileInfo.offset + blockSize > file.size) {
                                        blockSize = file.size - localFileInfo.offset;
                                    }
                                } else {
                                    localStorage.removeItem(file.name);
                                }

                            } else {
                                // 进度100%时，删除对应的localStorage，避免 499 bug
                                localStorage.removeItem(file.name);
                            }
                        } else {
                            localStorage.removeItem(file.name);
                        }
                    }
                    speedCalInfo.startTime = new Date().getTime();
                    up.setOption({
                        'url': 'http://upload.qiniu.com/mkblk/' + blockSize,
                        'multipart': false,
                        'chunk_size': chunk_size,
                        'required_features': "chunks",
                        'headers': {
                            'Authorization': 'UpToken ' + that.token
                        },
                        'multipart_params': {}
                    });
                }
            } else {
                directUpload(up, file, that.key_handler);
            }
        });

        uploader.bind('UploadProgress', function(up, file) {
            // 计算速度

            speedCalInfo.currentTime = new Date().getTime();
            var timeUsed = speedCalInfo.currentTime - speedCalInfo.startTime; // ms
            var fileUploaded = file.loaded || 0;
            if (speedCalInfo.isResumeUpload) {
                fileUploaded = file.loaded - speedCalInfo.resumeFilesize;
            }
            file.speed = (fileUploaded / timeUsed * 1000).toFixed(0) || 0; // unit: byte/s
        });

        uploader.bind('ChunkUploaded', function(up, file, info) {
            var res = that.parseJSON(info.response);

            ctx = ctx ? ctx + ',' + res.ctx : res.ctx;
            var leftSize = info.total - info.offset;
            var chunk_size = up.getOption && up.getOption('chunk_size');
            chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
            if (leftSize < chunk_size) {
                up.setOption({
                    'url': 'http://upload.qiniu.com/mkblk/' + leftSize
                });
            }
            localStorage.setItem(file.name, JSON.stringify({
                ctx: ctx,
                percent: file.percent,
                total: info.total,
                offset: info.offset,
                time: (new Date()).getTime()
            }));
        });

        uploader.bind('Error', (function(_Error_Handler) {
            return function(up, err) {
                var errTip = '';
                var file = err.file;
                if (file) {
                    switch (err.code) {
                        case plupload.FAILED:
                            errTip = '上传失败。请稍后再试。';
                            break;
                        case plupload.FILE_SIZE_ERROR:
                            var max_file_size = up.getOption && up.getOption('max_file_size');
                            max_file_size = max_file_size || (up.settings && up.settings.max_file_size);
                            errTip = '浏览器最大可上传' + max_file_size + '。更大文件请使用命令行工具。';
                            break;
                        case plupload.FILE_EXTENSION_ERROR:
                            errTip = '文件验证失败。请稍后重试。';
                            break;
                        case plupload.HTTP_ERROR:
                            var errorObj = that.parseJSON(err.response);
                            var errorText = errorObj.error;
                            switch (err.status) {
                                case 400:
                                    errTip = "请求报文格式错误。";
                                    break;
                                case 401:
                                    errTip = "客户端认证授权失败。请重试或提交反馈。";
                                    break;
                                case 405:
                                    errTip = "客户端请求错误。请重试或提交反馈。";
                                    break;
                                case 579:
                                    errTip = "资源上传成功，但回调失败。";
                                    break;
                                case 599:
                                    errTip = "网络连接异常。请重试或提交反馈。";
                                    break;
                                case 614:
                                    errTip = "文件已存在。";
                                    try {
                                        errorObj = that.parseJSON(errorObj.error);
                                        errorText = errorObj.error || 'file exists';
                                    } catch (e) {
                                        errorText = errorObj.error || 'file exists';
                                    }
                                    break;
                                case 631:
                                    errTip = "指定空间不存在。";
                                    break;
                                case 701:
                                    errTip = "上传数据块校验出错。请重试或提交反馈。";
                                    break;
                                default:
                                    errTip = "未知错误。";
                                    break;
                            }
                            errTip = errTip + '(' + err.status + '：' + errorText + ')';
                            break;
                        case plupload.SECURITY_ERROR:
                            errTip = '安全配置错误。请联系网站管理员。';
                            break;
                        case plupload.GENERIC_ERROR:
                            errTip = '上传失败。请稍后再试。';
                            break;
                        case plupload.IO_ERROR:
                            errTip = '上传失败。请稍后再试。';
                            break;
                        case plupload.INIT_ERROR:
                            errTip = '网站配置错误。请联系网站管理员。';
                            uploader.destroy();
                            break;
                        default:
                            errTip = err.message + err.details;
                            break;
                    }
                    if (_Error_Handler) {
                        _Error_Handler(up, err, errTip);
                    }
                }
                up.refresh(); // Reposition Flash/Silverlight
            };
        })(_Error_Handler));

        uploader.bind('FileUploaded', (function(_FileUploaded_Handler) {
            return function(up, file, info) {

                var last_step = function(up, file, info) {
                    if (op.downtoken_url) {
                        var ajax_downtoken = that.createAjax();
                        ajax_downtoken.open('POST', op.downtoken_url, true);
                        ajax_downtoken.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        ajax_downtoken.onreadystatechange = function() {
                            if (ajax_downtoken.readyState === 4) {
                                if (ajax_downtoken.status === 200) {
                                    var res_downtoken;
                                    try {
                                        res_downtoken = that.parseJSON(ajax_downtoken.responseText);
                                    } catch (e) {
                                        throw ('invalid json format');
                                    }
                                    var info_extended = {};
                                    plupload.extend(info_extended, that.parseJSON(info), res_downtoken);
                                    if (_FileUploaded_Handler) {
                                        _FileUploaded_Handler(up, file, JSON.stringify(info_extended));
                                    }
                                } else {
                                    uploader.trigger('Error', {
                                        status: ajax_downtoken.status,
                                        response: ajax_downtoken.responseText,
                                        file: file,
                                        code: plupload.HTTP_ERROR
                                    });
                                }
                            }
                        };
                        ajax_downtoken.send('key=' + that.parseJSON(info).key + '&domain=' + op.domain);
                    } else if (_FileUploaded_Handler) {
                        _FileUploaded_Handler(up, file, info);
                    }
                };

                var res = that.parseJSON(info.response);
                ctx = ctx ? ctx : res.ctx;
                if (ctx) {
                    var key = '';
                    if (!op.save_key) {
                        key = getFileKey(up, file, that.key_handler);
                        key = key ? '/key/' + that.URLSafeBase64Encode(key) : '';
                    }

                    var x_vars = op.x_vars,
                        x_val = '',
                        x_vars_url = '';
                    if (x_vars !== undefined && typeof x_vars === 'object') {
                        for (var x_key in x_vars) {
                            if (x_vars.hasOwnProperty(x_key)) {
                                if (typeof x_vars[x_key] === 'function') {
                                    x_val = that.URLSafeBase64Encode(x_vars[x_key](up, file));
                                } else if (typeof x_vars[x_key] !== 'object') {
                                    x_val = that.URLSafeBase64Encode(x_vars[x_key]);
                                }
                                x_vars_url += '/x:' + x_key + '/' + x_val;
                            }
                        }
                    }

                    var url = 'http://upload.qiniu.com/mkfile/' + file.size + key + x_vars_url;
                    var ajax = that.createAjax();
                    ajax.open('POST', url, true);
                    ajax.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
                    ajax.setRequestHeader('Authorization', 'UpToken ' + that.token);
                    ajax.onreadystatechange = function() {
                        if (ajax.readyState === 4) {
                            localStorage.removeItem(file.name);
                            if (ajax.status === 200) {
                                var info = ajax.responseText;
                                last_step(up, file, info);
                            } else {
                                uploader.trigger('Error', {
                                    status: ajax.status,
                                    response: ajax.responseText,
                                    file: file,
                                    code: -200
                                });
                            }
                        }
                    };
                    ajax.send(ctx);
                } else {
                    last_step(up, file, info.response);
                }

            };
        })(_FileUploaded_Handler));

        return uploader;
    };

    this.getUrl = function(key) {
        if (!key) {
            return false;
        }
        key = encodeURI(key);
        var domain = this.domain;
        if (domain.slice(domain.length - 1) !== '/') {
            domain = domain + '/';
        }
        return domain + key;
    };

    this.imageView2 = function(op, key) {
        var mode = op.mode || '',
            w = op.w || '',
            h = op.h || '',
            q = op.q || '',
            format = op.format || '';
        if (!mode) {
            return false;
        }
        if (!w && !h) {
            return false;
        }

        var imageUrl = 'imageView2/' + mode;
        imageUrl += w ? '/w/' + w : '';
        imageUrl += h ? '/h/' + h : '';
        imageUrl += q ? '/q/' + q : '';
        imageUrl += format ? '/format/' + format : '';
        if (key) {
            imageUrl = this.getUrl(key) + '?' + imageUrl;
        }
        return imageUrl;
    };


    this.imageMogr2 = function(op, key) {
        var auto_orient = op['auto-orient'] || '',
            thumbnail = op.thumbnail || '',
            strip = op.strip || '',
            gravity = op.gravity || '',
            crop = op.crop || '',
            quality = op.quality || '',
            rotate = op.rotate || '',
            format = op.format || '',
            blur = op.blur || '';
        //Todo check option

        var imageUrl = 'imageMogr2';

        imageUrl += auto_orient ? '/auto-orient' : '';
        imageUrl += thumbnail ? '/thumbnail/' + thumbnail : '';
        imageUrl += strip ? '/strip' : '';
        imageUrl += gravity ? '/gravity/' + gravity : '';
        imageUrl += quality ? '/quality/' + quality : '';
        imageUrl += crop ? '/crop/' + crop : '';
        imageUrl += rotate ? '/rotate/' + rotate : '';
        imageUrl += format ? '/format/' + format : '';
        imageUrl += blur ? '/blur/' + blur : '';

        if (key) {
            imageUrl = this.getUrl(key) + '?' + imageUrl;
        }
        return imageUrl;
    };

    this.watermark = function(op, key) {

        var mode = op.mode;
        if (!mode) {
            return false;
        }

        var imageUrl = 'watermark/' + mode;

        if (mode === 1) {
            var image = op.image || '';
            if (!image) {
                return false;
            }
            imageUrl += image ? '/image/' + this.URLSafeBase64Encode(image) : '';
        } else if (mode === 2) {
            var text = op.text ? op.text : '',
                font = op.font ? op.font : '',
                fontsize = op.fontsize ? op.fontsize : '',
                fill = op.fill ? op.fill : '';
            if (!text) {
                return false;
            }
            imageUrl += text ? '/text/' + this.URLSafeBase64Encode(text) : '';
            imageUrl += font ? '/font/' + this.URLSafeBase64Encode(font) : '';
            imageUrl += fontsize ? '/fontsize/' + fontsize : '';
            imageUrl += fill ? '/fill/' + this.URLSafeBase64Encode(fill) : '';
        } else {
            // Todo mode3
            return false;
        }

        var dissolve = op.dissolve || '',
            gravity = op.gravity || '',
            dx = op.dx || '',
            dy = op.dy || '';

        imageUrl += dissolve ? '/dissolve/' + dissolve : '';
        imageUrl += gravity ? '/gravity/' + gravity : '';
        imageUrl += dx ? '/dx/' + dx : '';
        imageUrl += dy ? '/dy/' + dy : '';

        if (key) {
            imageUrl = this.getUrl(key) + '?' + imageUrl;
        }
        return imageUrl;

    };

    this.imageInfo = function(key) {
        if (!key) {
            return false;
        }
        var url = this.getUrl(key) + '?imageInfo';
        var xhr = this.createAjax();
        var info;
        var that = this;
        xhr.open('GET', url, false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                info = that.parseJSON(xhr.responseText);
            }
        };
        xhr.send();
        return info;
    };


    this.exif = function(key) {
        if (!key) {
            return false;
        }
        var url = this.getUrl(key) + '?exif';
        var xhr = this.createAjax();
        var info;
        var that = this;
        xhr.open('GET', url, false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                info = that.parseJSON(xhr.responseText);
            }
        };
        xhr.send();
        return info;
    };

    this.get = function(type, key) {
        if (!key || !type) {
            return false;
        }
        if (type === 'exif') {
            return this.exif(key);
        } else if (type === 'imageInfo') {
            return this.imageInfo(key);
        }
        return false;
    };


    this.pipeline = function(arr, key) {

        var isArray = Object.prototype.toString.call(arr) === '[object Array]';
        var option, errOp, imageUrl = '';
        if (isArray) {
            for (var i = 0, len = arr.length; i < len; i++) {
                option = arr[i];
                if (!option.fop) {
                    return false;
                }
                switch (option.fop) {
                    case 'watermark':
                        imageUrl += this.watermark(option) + '|';
                        break;
                    case 'imageView2':
                        imageUrl += this.imageView2(option) + '|';
                        break;
                    case 'imageMogr2':
                        imageUrl += this.imageMogr2(option) + '|';
                        break;
                    default:
                        errOp = true;
                        break;
                }
                if (errOp) {
                    return false;
                }
            }
            if (key) {
                imageUrl = this.getUrl(key) + '?' + imageUrl;
                var length = imageUrl.length;
                if (imageUrl.slice(length - 1) === '|') {
                    imageUrl = imageUrl.slice(0, length - 1);
                }
            }
            return imageUrl;
        }
        return false;
    };

}

var Qiniu = new QiniuJsSDK();







//tools
$(function(){
    $.getQuery = function( key , url )
    {
        url = url || window.location.href;
        var rts = [],rt;
        queryReg = new RegExp( '(^|\\?|&)' + key + '=([^&]*)(?=&|#|$)' , 'g' );
        while ( ( rt = queryReg.exec( url ) ) != null )
        {
            rts.push( decodeURIComponent( rt[ 2 ] ) );
        }
        if ( rts.length == 0 ) return null;
        if ( rts.length == 1 ) return rts[ 0 ];
        return rts;
    };

    //https://github.com/vczero/OurTimes/blob/master/server/util/guid.js
    window.Guid =function(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    };

});

commentIdList = [
    {"name":"莫奈",  "comment":"光与影的绝妙组合"},
    {"name":"安格尔", "comment":"这幅作品放到下个世纪也难以被人超越！"},
    {"name":"毕加索", "comment":"这幅作品比我的只差了那么一点点"},
    {"name":"达芬奇", "comment":"你有着热爱艺术的心，就是技术有待提高"},
    {"name":"梵高",  "comment":"幸好我没自挖双目，才能遇见这绝世的佳作"},
    {"name":"德加",  "comment":"还好我们生活在不同的时代"},
    {"name":"德拉克洛瓦",   "comment":"我的艺术理念后继有人了！"},
    {"name":"佛里达", "comment":"你又激发了我的创作灵感"},
    {"name":"戈雅",  "comment":"抽象派与野兽派的完美结合"},
    {"name":"卡拉瓦乔",    "comment":"运气与实力混杂各半造就的成品"},
    {"name":"库贝尔", "comment":"一幅作品中蕴藏着一个别样的世界"},
    {"name":"拉斐尔", "comment":"我看到了人世间的悲欢离合"},
    {"name":"雷诺阿", "comment":"此情此景不禁让我潸然泪下"},
    {"name":"达利",  "comment":"在你的作品中，我仿佛看到了又一个梦境"},
    {"name":"鲁本斯", "comment":"灵与肉，生命与死亡，你与我，感同身受。"},
    {"name":"伦勃朗", "comment":"作品没有好坏，只有喜欢不喜欢"},
    {"name":"马蒂斯", "comment":"我想将这幅作品挂到我家的壁炉上"},
    {"name":"米开朗琪罗",   "comment":"犹如写意的笔墨，挥洒自如"},
    {"name":"米勒",  "comment":"如何用一副作品去探讨一个生与死的主题"},
    {"name":"委拉斯开兹",   "comment":"摄影师与变态，只差一步"}
]
dialogIdList =[
    {"name1":"安格尔", "dialog1":"请问你的作品都在表达什么？","name2":   "毕加索","dialog2": "漂亮就行！"},
    {"name1":"德加",  "dialog1":"你喜欢油画还是素描？","name2":  "德拉克洛瓦","dialog2":   "只要心情对了，白纸也是艺术"},
    {"name1":"夏加尔", "dialog1":"你在画中看到了什么？","name2":  "库尔贝","dialog2": "是朕为你打下的江山啊！"},
    {"name1":"伦勃朗", "dialog1":"有人说你自画像丑","name2":    "毕加索","dialog2": "那是他们没看过我真人，那才叫丑"},
    {"name1":"佛里达", "dialog1":"如果让我来一幅一幅一幅的剖析你的画……","name2": "戈雅","dialog2":  "你会坐牢的我跟你讲"},
    {"name1":"米开朗琪罗",   "dialog1":"我能欣赏一下你的《星空》吗？","name2":  "梵高","dialog2":  "****       *****"},
    {"name1":"拉斐尔", "dialog1":"你见过最美丽的人是蒙娜丽莎还是……","name2":   "达芬奇","dialog2": "是我！"},
    {"name1":"卡拉瓦乔",    "dialog1":"我还以为在这里见不到像样的作品呢！","name2":   "库尔贝","dialog2": "在哪儿呢？！"},
    {"name1":"米勒",  "dialog1":"这幅作品的名字是什么啊？","name2":    "委拉斯开兹","dialog2":   "我画你猜！"},
    {"name1":"毕加索", "dialog1":"听说你很羡慕我？","name2":    "梵高","dialog2":  "卢浮宫没请你去开业剪彩吗？"},
    {"name1":"鲁本斯", "dialog1":"给爷扭个秧歌儿？","name2":    "马蒂斯","dialog2": "老子会画不代表老子会跳！"},
    {"name1":"毕加索", "dialog1":"活的久了真是什么都能见到啊。","name2":  "梵高","dialog2":  "滚开！老不死的！"},
    {"name1":"米开朗琪罗",   "dialog1":"现在几点了？","name2":  "达利","dialog2":  "我的钟，看的是命运，而不是时间。"},
    {"name1":"委拉斯开兹",   "dialog1":"您觉得这幅画能卖多少钱呢？","name2":   "雷诺阿","dialog2": "无价、无~价!"},
    {"name1":"德加",  "dialog1":"除了草垛子，你还会画什么！","name2":   "莫奈","dialog2":  "  总比你整天画舞妹子强，变态大叔！ "},
    {"name1":"德加",  "dialog1":"今天这张跳舞的妹子画的好成功。","name2": "雷诺阿","dialog2": "妹子？什么妹子？哪的妹子？身材如何！ "},
    {"name1":"库尔贝", "dialog1":"年轻人，不用在意画的好坏，美与丑，善与恶，到头来都是一片虚无。","name2": "鲁本斯","dialog2": "画家界最伟大的鸡汤大师，鸡汤界最伟大的画家。"},
    {"name1":"佛里达", "dialog1":"谁说自己画的比我好？！来决斗！","name2": "卡拉瓦乔","dialog2":    "决斗？！我喜欢！在哪里？"}
]
endCommentListG=[
    "你敢点吗？",
    "但求一战！",
    "不服戳我啊！",
    "跪下唱征服！",
    "快来膜拜我！",
    "不来一发吗？",
    "求超越！",
    "代购算神马！",
    "叫我陈关西！"
];

endCommentListB=[
    "心好累！",
    "人艰不拆！",
    "为何要彼此伤害？",
    "我想静静…"
];





window.parseJSON = function(data) {
    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
    }

    if (data === null) {
        return data;
    }
    if (typeof data === "string") {

        // Make sure leading/trailing whitespace is removed (IE can't handle it)
        data = this.trim(data);

        if (data) {
            // Make sure the incoming data is actual JSON
            // Logic borrowed from http://json.org/json2.js
            if (/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {

                return (function() {
                    return data;
                })();
            }
        }
    }
};

window.goTo = function(area,state){
    console.log("goTo area="+area);
    history.pushState({area:area,state:state||""}, "页面标题", "piczoom.html?area="+area+"&state=test")
    view.onshow(area,state);
}

window.addEventListener("popstate", function() {
    console.log("popState history.state="+JSON.stringify(history.state));
    var currentState = history.state;
    // view.onshow(history.state && history.state.area);                                         
});

window.G = {};
G.pic={};
G.pic.host="http://7xkkuk.com2.z0.glb.qiniucdn.com/";
// G.pic[G.pic.type]
// G.pic["bkg"] G.pic["border"] G.pic["sign"]
G.pic.type="bkg";//or border

window.view = {
    init:function(){

        
        this.onload();
    },
    onload:function(){
        this.onshow();
    },
    onshow:function(area, state){
        area = area||$.getQuery("area");

        G.pic.host="http://7xkkuk.com2.z0.glb.qiniucdn.com/";

        var that = this;
        console.log("onshow area="+area);
        //render which view
        $('.viewport-show').hide();
        $('.viewport-intro').hide();
        $('.viewport-canvas').hide();
        if (area) {
            if(area=='all'){
                $('.viewport-show').show();
                $('.viewport-intro').show();
                $('.viewport-canvas').show();
            }
            $('.viewport-'+area).show();
            if(area=="intro"){
                $(".finishUpload").show();
                $("#uploadDiv").show();
            }
        }
        else{
            $('.viewport-show').show();
        }


        if(area == "show" && state != "finishUpload" && state != "confirm"){
            var artId = $.getQuery("artId") || 'ECDB430C-EFD5-45C3-943B-4183AED0684D';
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'http://campaign.vart.cc/201508/api/art/get?artId='+artId, true);
            // ajax.setRequestHeader("If-Modified-Since", "0");
            ajax.onreadystatechange = function() {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    var res = parseJSON(ajax.responseText);
                    console.log(res);
                    that.render(area,res)
                }
            };
            ajax.send();
        }
        else if (area == "show" && state == "finishUpload"){
            that.render(area);
            var img = $(".viewport-show .pic-zoom")[0];
            $(img).attr("style","");

            var slide_dom_string = '<div class="slider-page slide-page-1"></div><div class="slider-page slide-page-2"></div><div class="slider-page slide-page-3"></div><div class="slider-page slide-page-4"></div><div class="slider-page slide-page-5"></div><div class="slider-page slide-page-6"></div><div class="slider-page slide-page-7"></div><div class="slider-page slide-page-8"></div><div class="slider-page slide-page-9"></div><div class="slider-page slide-page-10"></div><div class="slider-page slide-page-11"></div><div class="slider-page slide-page-12"></div><div class="slider-page slide-page-13"></div><div class="slider-page slide-page-14"></div><div class="slider-page slide-page-15"></div>';
            $('#slide_title_div').append(slide_dom_string);
            var slide_title_div = new Slider('.slide_title_outer', {
                widthScale: 1.2/5,
                moveFromScale: 1.2/5,
                X: true,
                Y: false,
                Xfrom: true,
                Yfrom: false,
                resizeInInit: true,
                offsetPageCount: 2,
                allPageCountPercent: 15,
                slideBackScale: 11
            });

            $('.slide_title_outer').on('click', function(e){
                $(e.target).siblings().css("background-color","#fff");
                $(e.target).css("background-color","#3f3f3f");
                G.pic.borderId = /\d+/.exec(e.target.className)[0];

                $(".border_image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");
                $(".-moz-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");
                $(".-webkit-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");
                $(".-o-border-image").css("border-image",$(e.target).css("background-image").replace("qiniucdn.com/n-hk-s","qiniucdn.com/n-hk-l")+" 70 70 round");

            });
        }
        else if (area == "show" && state == "confirm"){
            that.render(area);
        }
        else if(area == "intro"){
            window.uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',
                browse_button: 'uploadDiv',
                container: 'button-container',
                drop_element: 'button-container',
                max_file_size: '100mb',
                flash_swf_url: 'Moxie.swf',
                dragdrop: true,
                chunk_size: '4mb',
                uptoken_url: 'http://campaign.vart.cc/201508/api/qiniu/get',
                domain: 'http://7xkkuk.com2.z0.glb.qiniucdn.com/',
                // downtoken_url: '/downtoken',
                // unique_names: true,
                // save_key: true,
                // x_vars: {
                //     'id': '1234',
                //     'time': function(up, file) {
                //         var time = (new Date()).getTime();
                //         // do something with 'time'
                //         return time;
                //     },
                // },
                auto_start: true,
                init: {
                    'FilesAdded': function(up, files) {
                        console.log("FilesAdded");
                        // $('table').show();
                        // $('#success').hide();
                        // plupload.each(files, function(file) {
                        //     var progress = new FileProgress(file, 'fsUploadProgress');
                        //     progress.setStatus("等待...");
                        // });
                    },
                    'BeforeUpload': function(up, file) {
                        console.log("BeforeUpload");
                        // var progress = new FileProgress(file, 'fsUploadProgress');
                        // var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                        // if (up.runtime === 'html5' && chunk_size) {
                        //     progress.setChunkProgess(chunk_size);
                        // }
                    },
                    'UploadProgress': function(up, file) {
                        console.log("UploadProgress",file.percent + "%");
                        $(".ui-progressbar").css("width",file.percent*0.8 + "%");
                        $(".ui-progressbar").css("height","20px");
                        $(".ui-progressbar-text").show();
                        $(".ui-progressbar-text").css("height","20px");
                        // var progress = new FileProgress(file, 'fsUploadProgress');
                        // var chunk_size = plupload.parseSize(this.getOption('chunk_size'));

                        // progress.setProgress(file.percent + "%", file.speed, chunk_size);
                    },
                    'UploadComplete': function(up, file) {
                        console.log("UploadComplete");
                        // alert(G.pic.type+" "+G.pic[G.pic.type]);
                        if(G&&G.pic&&G.pic["bkg"]){
                            var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
                            img.title = "";
                            img.src = G.pic.host+G.pic["bkg"];
                        }
                        var img = $(".viewport-show .pic-sign img")[0];//document.createElement('img');
                        img.title = "";
                        img.src = "";
                        $(".ui-progressbar-text").hide();
                        goTo('canvas');
                        // $('#success').show();
                    },
                    'FileUploaded': function(up, file, info) {
                        console.log("FileUploaded");
                        // var progress = new FileProgress(file, 'fsUploadProgress');
                        // progress.setComplete(up, info);
                    },
                    'Error': function(up, err, errTip) {
                        console.log("Error");
                        // $('table').show();
                        // var progress = new FileProgress(err.file, 'fsUploadProgress');
                        // progress.setError();
                        // progress.setStatus(errTip);
                    }
                    // ,
                    // 'Key': function(up, file) {
                    //     var key = "";
                    //     // do something with key
                    //     return key
                    // }
                }
            });

            uploader.bind('FileUploaded', function() {
                console.log('hello man,a file is uploaded');
            });
        } 
    },
    render:function(area,res){
        if(area == "show"){
            console.log("render");

            $('.infoBox').hide();
            $(".commentBox").hide();endCommentListG
            $(".borderChoose").hide();

            if(res){
                G&&G.pic&&(G.pic["bkg"] = res.picKey);
                G&&G.pic&&(G.pic["sign"] = res.signKey);
                G&&G.pic&&(G.pic["css"] = res.css);
                G&&G.pic&&(G.pic["score"] = res.score);
                G&&G.pic&&(G.pic["artName"] = res.artName);
                G&&G.pic&&(G.pic["scoreComment"] = res.scoreComment);
                G&&G.pic&&(G.pic["commentIdList"] = res.commentIdList);
            }

            
            if(G&&G.pic&&G.pic["bkg"]){
                var img = $(".viewport-show .pic-zoom img")[0];//document.createElement('img');
                img.title = "";
                img.src = G.pic.host+G.pic["bkg"];
            }
            if(G&&G.pic&&G.pic["sign"]){
                var img = $(".viewport-show .pic-sign img")[0];//document.createElement('img');
                img.title = "";
                img.src = G.pic.host+G.pic["sign"];
            }
            if(G&&G.pic&&G.pic["css"]){
                var img = $(".viewport-show .pic-zoom")[0];
                $(img).attr("style",G.pic["css"]);
            }
            if(G&&G.pic&&G.pic["score"]){
                var div = $(".viewport-show .price-text i")[0];
                var score = G.pic["score"];
                if(score.toString().length>3){
                    scoreStr = score.replace(/(\d)(\d{3})(?=(?:\d{4})*(?!\d))/g,'$1,$2'); 
                }else{
                    scoreStr = score;
                }
                $(div).html("$ "+scoreStr);
            }
            if(G&&G.pic&&G.pic["artName"]){
                var div = $(".viewport-show .name-show div")[0];
                $(div).html("《"+G.pic["artName"]+"》");
            }
            if(G&&G.pic&&G.pic["scoreComment"]){
                G.pic.commentIdList = Math.floor(commentIdList.length * Math.random());
                var name = commentIdList[G.pic.commentIdList%commentIdList.length].name;
                // var comment = commentIdList[G.pic.commentIdList-1].comment;
                var comment = G.pic.scoreComment;
                $(".commentBox-comment .nickname").html(name);
                $(".commentBox-comment .comment-content").html(comment);
                $(".commentBox-comment .avatar").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+name+".jpg)");
            }
            

            if(!history.state || (history.state && !history.state.state) ){
                $('.show-init').show();

                // $(".show-finishUpload").show();
                // $(".borderChoose").show();
            }
            else if(history.state && history.state.state == "finishUpload"){
                $(".show-finishUpload").show();
                $(".borderChoose").show();
            }
            else if(history.state && history.state.state == "confirm"){
                $('.show-confirm').show();

                $.ajax({
                    url:'http://campaign.vart.cc/201508/api/art/post',
                    type:"POST",
                    // contentType:"application/json; charset=utf-8",
                    data:{"":JSON.stringify(G.postData)},
                    success: function(res){
                        console.log("show share",res);
                        var dialogIdRand = Math.floor(Math.random()*dialogIdList.length);
                        var dialog = dialogIdList[dialogIdRand];

                        $(".commentBox-discus .nickname").html(dialog.dialog1);
                        $(".commentBox-discus .nickname-right").html(dialog.dialog2);

                        $(".commentBox-discus .avatar-left").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+dialog.name1+".jpg)");
                        $(".commentBox-discus .avatar-right").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+dialog.name2+".jpg)");

                        $(".fixed-mask").show();
                        setTimeout(function(){
                            $(".fixed-mask").hide();
                        },3000);
                        if(res){
                            G.pic = res;
                            //替换分数和名字
                            //显示评论和对话
                            if(G&&G.pic&&G.pic["score"]){
                                var div = $(".viewport-show .price-text i")[0];
                                var score = G.pic["score"];
                                if(score.toString().length>3){
                                    scoreStr = score.replace(/(\d)(\d{3})(?=(?:\d{4})*(?!\d))/g,'$1,$2'); 
                                }else{
                                    scoreStr = score;
                                }
                                $(div).html("$ "+scoreStr);
                            }
                            if(G&&G.pic&&G.pic["artName"]){
                                var div = $(".viewport-show .name-show div")[0];
                                $(div).html("《"+G.pic["artName"]+"》");
                            }
                            if(G&&G.pic&&G.pic["scoreComment"]){
                                var div = $(".commentBox-comment .comment-content")[0];
                                $(div).html(G.pic["scoreComment"]);
                            }

                                // $(div).html(G.pic["scoreComment"]);
                            $(".show-init").show();
                            $(".show-init-confirm-not").hide();
                            // $(".discusing").hide();
                            
                            var score = G.pic.score;
                            var endComment = "";
                            if(score=="无法估价"){
                                document.title = "VART艺廊为了评估我的作品导致系统全线崩坏，求赞我！";
                            }
                            else{
                                if(score==0){
                                    document.title="VART艺廊为我的作品估价$0,我是1好嘛！";
                                }
                                else if(score==100000){
                                    document.title="VART艺廊为我的作品估价$100000,一定交给国家！";
                                }
                                else if(score<0){
                                    document.title="VART艺廊为我的作品估价$"+score+"这是什么鬼！";
                                }
                                else if(score<999){
                                    document.title="VART艺廊为我的作品估价$"+score+endCommentListG[Math.floor(endCommentListG.length*Math.random())%endCommentListG.length];
                                }
                                else if(score>=999){
                                    document.title="VART艺廊为我的作品估价$"+score+endCommentListB[Math.floor(endCommentListB.length*Math.random())%endCommentListB.length];
                                }
                            }
                            history.replaceState({}, "asdasd", location.href+"area=show&artId="+G.artId);

                        }
                    }
                })

                // var ajax = new XMLHttpRequest();
                // var data = [{"artId":7,"artName":"test007","openId":"","picKey":"lipper.jpg","css":"","borderId":7,"signKey":"FpAAO2CE7pZzNKFdpEUb4HQ_dRY9","uploadDate":"0001-01-01T00:00:00","score":1888,"commentIdList":"1,2,6"}];
                // ajax.open('POST', 'http://192.168.1.116/X_1_FirstWebAPI/api/art/post', true);            
                // // ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                // ajax.setRequestHeader("Content-Type", "application/json;charset=utf-8");
                // ajax.onreadystatechange = function() {
                //     if (ajax.readyState === 4 && ajax.status === 200) {
                //         var res = parseJSON(ajax.responseText);
                //         console.log(res);
                //         $(".commentBox-comment").show();
                //         var name = commentIdList[res.commentIdList-1].name;
                //         var comment = commentIdList[res.commentIdList-1].comment;
                //         $(".commentBox-comment .nickname").html(name);
                //         $(".commentBox-comment .comment-content").html(comment);
                //         $(".commentBox-comment .avatar").css("background-image","url(http://7xkkuk.com2.z0.glb.qiniucdn.com/"+name+".jpg)");

                        
                //     }
                // };
                // ajax.send(JSON.stringify(data));
            }
        }
    }
};

//main
$(function () {
    $('div.pic-zoom').each(function () {
        new PicZoom($(this), {});
    });
    paint.init();
    document.getElementById('canvas').width  = window.innerWidth;
    paint.cxt.lineWidth=2;

    //上传图片按钮
    // var upfile = document.querySelector('#uploadBtn');
    // upfile.onchange = function (evt) {
    //     var files = evt.target.files;
    //     for(var i = 0, f; f = files[i]; i++){
    //         if(!f.type.match('image.*')) continue;
            
    //         var reader = new FileReader();
    //         reader.onload = (function(theFile){
    //             return function(e){
    //             }
    //         })(f);
    //         reader.readAsDataURL(f);
    //     }  
    //     goTo('show');
    // }
    view.init();

    document.querySelector('#button-show').onclick=function(){
        goTo('intro');
    }

    document.querySelector('#confirm').onclick=function(){
        G.artId = Guid();
        G.artName = $("#artName").val();
        if(!G.artName){
            $("#artName").attr("placeholder",'请输入作品名');
            return;
        }
        G.pic.css = JSON.stringify($($(".viewport-show .pic-zoom")[0]).attr("style")).replace(',"webkitTextDecorationSkip":"","webkitTextDecorationStyle":"","webkitTextDecorationsInEffect":"","webkitTextEmphasis":"","webkitTextEmphasisColor":"","webkitTextEmphasisPosition":"","webkitTextEmphasisStyle":"","webkitTextFillColor":"","webkitTextOrientation":"","webkitTextSecurity":"","webkitTextSizeAdjust":"","webkitTextStroke":"","webkitTextStrokeColor":"","webkitTextStrokeWidth":"","webkitTextUnderlinePosition":"","webkitTouchCallout":"","webkitTransform":"","webkitTransformOrigin":"","webkitTransformOriginX":"","webkitTransformOriginY":"","webkitTransformOriginZ":"","webkitTransformStyle":"","webkitTransition":"","webkitTransitionDelay":"","webkitTransitionDuration":"","webkitTransitionProperty":"","webkitTransitionTimingFunction":"","webkitUserDrag":"","webkitUserModify":"","webkitUserSelect":"","webkitWritingMode":"","whiteSpace":"","widows":"","width":"","wordBreak":"","wordSpacing":"","wordWrap":"","writingMode":"","zIndex":"","zoom":"","length":0',"").replace('"alignmentBaseline":"","background":"","backgroundAttachment":"","backgroundBlendMode":"","backgroundClip":"","backgroundColor":"","backgroundImage":"","backgroundOrigin":"","backgroundPosition":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","backgroundRepeatX":"","backgroundRepeatY":"","backgroundSize":"","baselineShift":"","border":"","borderBottom":"","borderBottomColor":"","borderBottomLeftRadius":"","borderBottomRightRadius":"","borderBottomStyle":"","borderBottomWidth":"","borderCollapse":"","borderColor":"","borderImage":"","borderImageOutset":"","borderImageRepeat":"","borderImageSlice":"","borderImageSource":"","borderImageWidth":"","borderLeft":"","borderLeftColor":"","borderLeftStyle":"","borderLeftWidth":"","borderRadius":"","borderRight":"","borderRightColor":"","borderRightStyle":"","borderRightWidth":"","borderSpacing":"","borderStyle":"","borderTop":"","borderTopColor":"","borderTopLeftRadius":"","borderTopRightRadius":"","borderTopStyle":"","borderTopWidth":"","borderWidth":"","bottom":"","boxShadow":"","boxSizing":"","bufferedRendering":"","captionSide":"","clear":"","clip":"","clipPath":"","clipRule":"","color":"","colorInterpolation":"","colorInterpolationFilters":"","colorProfile":"","colorRendering":"","content":"","counterIncrement":"","counterReset":"","cursor":"","direction":"","display":"","dominantBaseline":"","emptyCells":"","enableBackground":"","fill":"","fillOpacity":"","fillRule":"","filter":"","float":"","floodColor":"","floodOpacity":"","font":"","fontFamily":"","fontSize":"","fontStretch":"","fontStyle":"","fontVariant":"","fontWeight":"","glyphOrientationHorizontal":"","glyphOrientationVertical":"","height":"","imageRendering":"","isolation":"","kerning":"","left":"","letterSpacing":"","lightingColor":"","lineHeight":"","listStyle":"","listStyleImage":"","listStylePosition":"","listStyleType":"","margin":"","marginBottom":"","marginLeft":"","marginRight":"","marginTop":"","marker":"","markerEnd":"","markerMid":"","markerStart":"","mask":"","maskType":"","maxHeight":"","maxWidth":"","minHeight":"","minWidth":"","mixBlendMode":"","objectFit":"","opacity":"","orphans":"","outline":"","outlineColor":"","outlineOffset":"","outlineStyle":"","outlineWidth":"","overflow":"","overflowWrap":"","overflowX":"","overflowY":"","padding":"","paddingBottom":"","paddingLeft":"","paddingRight":"","paddingTop":"","page":"","pageBreakAfter":"","pageBreakBefore":"","pageBreakInside":"","paintOrder":"","pointerEvents":"","position":"","quotes":"","resize":"","right":"","shapeRendering":"","size":"","speak":"","src":"","stopColor":"","stopOpacity":"","stroke":"","strokeDasharray":"","strokeDashoffset":"","strokeLinecap":"","strokeLinejoin":"","strokeMiterlimit":"","strokeOpacity":"","strokeWidth":"","tabSize":"","tableLayout":"","textAlign":"","textAnchor":"","textDecoration":"","textIndent":"","textLineThrough":"","textLineThroughColor":"","textLineThroughMode":"","textLineThroughStyle":"","textLineThroughWidth":"","textOverflow":"","textOverline":"","textOverlineColor":"","textOverlineMode":"","textOverlineStyle":"","textOverlineWidth":"","textRendering":"","textShadow":"","textTransform":"","textUnderline":"","textUnderlineColor":"","textUnderlineMode":"","textUnderlineStyle":"","textUnderlineWidth":"","top":"","transition":"","transitionDelay":"","transitionDuration":"","transitionProperty":"","transitionTimingFunction":"","unicodeBidi":"",',"").replace('"webkitBoxOrdinalGroup":"","webkitBoxOrient":"","webkitBoxPack":"","webkitBoxReflect":"","webkitBoxShadow":"","webkitClipPath":"","webkitColorCorrection":"","webkitColumnAxis":"","webkitColumnBreakAfter":"","webkitColumnBreakBefore":"","webkitColumnBreakInside":"","webkitColumnCount":"","webkitColumnFill":"","webkitColumnGap":"","webkitColumnProgression":"","webkitColumnRule":"","webkitColumnRuleColor":"","webkitColumnRuleStyle":"",','');
        G.uploadDate = (new Date()).getTime();

        G.postData = {
            artId : G.artId,
            artName : G.artName,
            openId : "openid",
            picKey : G.pic.bkg,
            css : G.pic.css,
            bordeId : G.pic.borderId,
            signKey : G.pic.sign,
            uploadDate : G.uploadDate ,
            // score : ,
            // commentIdList: "2" 
            dialogIdList:"2"
        }
        goTo('show',"confirm");
    }

    document.querySelector('.fixed-mask').onclick=function(){
        $(this).hide();
    }
    
    document.querySelector('.rule-mask').onclick=function(){
        $(this).hide();
    }

    document.querySelector('.rule-detail').onclick=function(){
        $(".rule-mask").show();
    }
    

    // var area = $.getQuery('area');
    // goTo(area);

});
