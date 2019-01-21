/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.0
 *
 */

(function ($) {

    jQuery.fn.extend({
        slimScroll: function (options) {

            var defaults = {

                // width in pixels of the visible scroll area
                width: 'auto',

                // height in pixels of the visible scroll area
                height: '250px',

                // width in pixels of the scrollbar and rail
                size: '7px',

                // scrollbar color, accepts any hex/color value
                color: '#000',

                // scrollbar position - left/right
                position: 'right',

                // distance in pixels between the side edge and the scrollbar
                distance: '1px',

                // default scroll position on load - top / bottom / $('selector')
                start: 'top',

                // sets scrollbar opacity
                opacity: .4,

                // enables always-on mode for the scrollbar
                alwaysVisible: false,

                // check if we should hide the scrollbar when user is hovering over
                disableFadeOut: false,

                // sets visibility of the rail
                railVisible: false,

                // sets rail color
                railColor: '#333',

                // sets rail opacity
                railOpacity: .2,

                // whether  we should use jQuery UI Draggable to enable bar dragging
                railDraggable: true,

                // defautlt CSS class of the slimscroll rail
                railClass: 'slimScrollRail',

                // defautlt CSS class of the slimscroll bar
                barClass: 'slimScrollBar',

                // defautlt CSS class of the slimscroll wrapper
                wrapperClass: 'slimScrollDiv',

                // check if mousewheel should scroll the window if we reach top/bottom
                allowPageScroll: false,

                // scroll amount applied to each mouse wheel step
                wheelStep: 20,

                // scroll amount applied when user is using gestures
                touchScrollStep: 200,

                // sets border radius
                borderRadius: '7px',

                // sets border radius of the rail
                railBorderRadius: '7px'
            };

            var o = $.extend(defaults, options);

            // do it for every element that matches selector
            this.each(function () {

                var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
                  barHeight, percentScroll, lastScroll,
                  divS = '<div></div>',
                  minBarHeight = 30,
                  releaseScroll = false;

                // used in event handlers and for better minification
                var me = $(this);

                // ensure we are not binding it again
                if (me.parent().hasClass(o.wrapperClass)) {
                    // start from last bar position
                    var offset = me.scrollTop();

                    // find bar and rail
                    bar = me.parent().find('.' + o.barClass);
                    rail = me.parent().find('.' + o.railClass);

                    getBarHeight();

                    // check if we should scroll existing instance
                    if ($.isPlainObject(options)) {
                        // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
                        if ('height' in options && options.height == 'auto') {
                            me.parent().css('height', 'auto');
                            me.css('height', 'auto');
                            var height = me.parent().parent().height();
                            me.parent().css('height', height);
                            me.css('height', height);
                        }

                        if ('scrollTo' in options) {
                            // jump to a static point
                            offset = parseInt(o.scrollTo);
                        }
                        else if ('scrollBy' in options) {
                            // jump by value pixels
                            offset += parseInt(o.scrollBy);
                        }
                        else if ('destroy' in options) {
                            // remove slimscroll elements
                            bar.remove();
                            rail.remove();
                            me.unwrap();
                            return;
                        }

                        // scroll content by the given offset
                        scrollContent(offset, false, true);
                    }

                    return;
                }

                // optionally set height to the parent's height
                o.height = (o.height == 'auto') ? me.parent().height() : o.height;

                // wrap content
                var wrapper = $(divS)
                  .addClass(o.wrapperClass)
                  .css({
                      position: 'relative',
                      overflow: 'hidden',
                      width: o.width,
                      height: o.height
                  });

                // update style for the div
                me.css({
                    overflow: 'hidden',
                    width: o.width,
                    height: o.height
                });

                // create scrollbar rail
                var rail = $(divS)
                  .addClass(o.railClass)
                  .css({
                      width: o.size,
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
                      'border-radius': o.railBorderRadius,
                      background: o.railColor,
                      opacity: o.railOpacity,
                      zIndex: 90
                  });

                // create scrollbar
                var bar = $(divS)
                  .addClass(o.barClass)
                  .css({
                      background: o.color,
                      width: o.size,
                      position: 'absolute',
                      top: 0,
                      opacity: o.opacity,
                      display: o.alwaysVisible ? 'block' : 'none',
                      'border-radius': o.borderRadius,
                      BorderRadius: o.borderRadius,
                      MozBorderRadius: o.borderRadius,
                      WebkitBorderRadius: o.borderRadius,
                      zIndex: 99
                  });

                // set position
                var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
                rail.css(posCss);
                bar.css(posCss);

                // wrap it
                me.wrap(wrapper);

                // append to parent div
                me.parent().append(bar);
                me.parent().append(rail);

                // make it draggable and no longer dependent on the jqueryUI
                if (o.railDraggable) {
                    bar.bind("mousedown", function (e) {
                        var $doc = $(document);
                        isDragg = true;
                        t = parseFloat(bar.css('top'));
                        pageY = e.pageY;

                        $doc.bind("mousemove.slimscroll", function (e) {
                            currTop = t + e.pageY - pageY;
                            bar.css('top', currTop);
                            scrollContent(0, bar.position().top, false);// scroll content
                        });

                        $doc.bind("mouseup.slimscroll", function (e) {
                            isDragg = false; hideBar();
                            $doc.unbind('.slimscroll');
                        });
                        return false;
                    }).bind("selectstart.slimscroll", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        return false;
                    });
                }

                // on rail over
                rail.hover(function () {
                    showBar();
                }, function () {
                    hideBar();
                });

                // on bar over
                bar.hover(function () {
                    isOverBar = true;
                }, function () {
                    isOverBar = false;
                });

                // show on parent mouseover
                me.hover(function () {
                    isOverPanel = true;
                    showBar();
                    hideBar();
                }, function () {
                    isOverPanel = false;
                    hideBar();
                });

                // support for mobile
                me.bind('touchstart', function (e, b) {
                    if (e.originalEvent.touches.length) {
                        // record where touch started
                        touchDif = e.originalEvent.touches[0].pageY;
                    }
                });

                me.bind('touchmove', function (e) {
                    // prevent scrolling the page if necessary
                    if (!releaseScroll) {
                        e.originalEvent.preventDefault();
                    }
                    if (e.originalEvent.touches.length) {
                        // see how far user swiped
                        var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
                        // scroll content
                        scrollContent(diff, true);
                        touchDif = e.originalEvent.touches[0].pageY;
                    }
                });

                // set up initial height
                getBarHeight();

                // check start position
                if (o.start === 'bottom') {
                    // scroll content to bottom
                    bar.css({ top: me.outerHeight() - bar.outerHeight() });
                    scrollContent(0, true);
                }
                else if (o.start !== 'top') {
                    // assume jQuery selector
                    scrollContent($(o.start).position().top, null, true);

                    // make sure bar stays hidden
                    if (!o.alwaysVisible) { bar.hide(); }
                }

                // attach scroll events
                attachWheel();

                function _onWheel(e) {
                    // use mouse wheel only when mouse is over
                    if (!isOverPanel) { return; }

                    var e = e || window.event;

                    var delta = 0;
                    if (e.wheelDelta) { delta = -e.wheelDelta / 120; }
                    if (e.detail) { delta = e.detail / 3; }

                    var target = e.target || e.srcTarget || e.srcElement;
                    /* console.log($(target).closest('.' + o.wrapperClass).attr("class"));
                     console.log(me.parent().attr("class"));*/
                    if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
                        // scroll content

                        scrollContent(delta, true);
                    }

                    // stop window scroll
                    if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
                    if (!releaseScroll) { e.returnValue = false; }
                }

                function scrollContent(y, isWheel, isJump) {

                    releaseScroll = false;
                    var delta = y;
                    var maxTop = me.outerHeight() - bar.outerHeight();

                    if (isWheel) {
                        // move bar with mouse wheel
                        delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

                        // move bar, make sure it doesn't go out
                        delta = Math.min(Math.max(delta, 0), maxTop);

                        // if scrolling down, make sure a fractional change to the
                        // scroll position isn't rounded away when the scrollbar's CSS is set
                        // this flooring of delta would happened automatically when
                        // bar.css is set below, but we floor here for clarity
                        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

                        // scroll the scrollbar
                        bar.css({ top: delta + 'px' });
                    }

                    // calculate actual scroll amount
                    percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
                    delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

                    if (isJump) {
                        delta = y;
                        var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
                        offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
                        bar.css({ top: offsetTop + 'px' });
                    }

                    // scroll content
                    me.scrollTop(delta);

                    // fire scrolling event
                    me.trigger('slimscrolling', ~~delta);

                    // ensure bar is visible
                    showBar();

                    // trigger hide when scroll is stopped
                    hideBar();
                }

                function attachWheel() {
                    if (window.addEventListener) {
                        this.addEventListener('DOMMouseScroll', _onWheel, false);
                        this.addEventListener('mousewheel', _onWheel, false);
                        //this.addEventListener('MozMousePixelScroll', _onWheel, false );
                    }
                    else {
                        document.attachEvent("onmousewheel", _onWheel)
                    }
                }

                function getBarHeight() {
                    // calculate scrollbar height and make sure it is not too small
                    barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
                    bar.css({ height: barHeight + 'px' });

                    // hide scrollbar if content is not long enough
                    var display = barHeight == me.outerHeight() ? 'none' : 'block';
                    bar.css({ display: display });
                }

                function showBar() {
                    // recalculate bar height
                    getBarHeight();
                    clearTimeout(queueHide);

                    // when bar reached top or bottom
                    if (percentScroll == ~~percentScroll) {
                        //release wheel
                        releaseScroll = o.allowPageScroll;

                        // publish approporiate event
                        if (lastScroll != percentScroll) {
                            var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                            me.trigger('slimscroll', msg);
                        }
                    }
                    else {
                        releaseScroll = false;
                    }
                    lastScroll = percentScroll;

                    // show only when required
                    if (barHeight >= me.outerHeight()) {
                        //allow window scroll
                        releaseScroll = true;
                        return;
                    }
                    bar.stop(true, true).fadeIn('fast');
                    if (o.railVisible) { rail.stop(true, true).fadeIn('fast'); }
                }

                function hideBar() {
                    // only hide when options allow it
                    if (!o.alwaysVisible) {
                        queueHide = setTimeout(function () {
                            if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
                                bar.fadeOut('slow');
                                rail.fadeOut('slow');
                            }
                        }, 1000);
                    }
                }

            });

            // maintain chainability
            return this;
        }
    });

    jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    });

})(jQuery);
/*!
 * Waves v0.7.5
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2016 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */


;(function(window, factory) {
    'use strict';

    // AMD. Register as an anonymous module.  Wrap in function so we have access
    // to root via `this`.
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory.apply(window);
        });
    }

    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    else if (typeof exports === 'object') {
        module.exports = factory.call(window);
    }

    // Browser globals.
    else {
        window.Waves = factory.call(window);
    }
})(typeof global === 'object' ? global : this, function() {
    'use strict';

    var Waves            = Waves || {};
    var $$               = document.querySelectorAll.bind(document);
    var toString         = Object.prototype.toString;
    var isTouchAvailable = 'ontouchstart' in window;


    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function isObject(value) {
        var type = typeof value;
        return type === 'function' || type === 'object' && !!value;
    }

    function isDOMNode(obj) {
        return isObject(obj) && obj.nodeType > 0;
    }

    function getWavesElements(nodes) {
        var stringRepr = toString.call(nodes);

        if (stringRepr === '[object String]') {
            return $$(nodes);
        } else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
            return nodes;
        } else if (isDOMNode(nodes)) {
            return [nodes];
        }

        return [];
    }

    function offset(elem) {
        var docElem, win,
            box = { top: 0, left: 0 },
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(styleObj) {
        var style = '';

        for (var prop in styleObj) {
            if (styleObj.hasOwnProperty(prop)) {
                style += (prop + ':' + styleObj[prop] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect duration
        duration: 750,

        // Effect delay (check for scroll before showing effect)
        delay: 200,

        show: function(e, element, velocity) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            element = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple waves-rippling';
            element.appendChild(ripple);

            // Get click coordinate and element width
            var pos       = offset(element);
            var relativeY = 0;
            var relativeX = 0;
            // Support for touch devices
            if('touches' in e && e.touches.length) {
                relativeY   = (e.touches[0].pageY - pos.top);
                relativeX   = (e.touches[0].pageX - pos.left);
            }
            //Normal case
            else {
                relativeY   = (e.pageY - pos.top);
                relativeX   = (e.pageX - pos.left);
            }
            // Support for synthetic events
            relativeX = relativeX >= 0 ? relativeX : 0;
            relativeY = relativeY >= 0 ? relativeY : 0;

            var scale     = 'scale(' + ((element.clientWidth / 100) * 3) + ')';
            var translate = 'translate(0,0)';

            if (velocity) {
                translate = 'translate(' + (velocity.x) + 'px, ' + (velocity.y) + 'px)';
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-translate', translate);

            // Set ripple position
            var rippleStyle = {
                top: relativeY + 'px',
                left: relativeX + 'px'
            };

            ripple.classList.add('waves-notransition');
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.classList.remove('waves-notransition');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale + ' ' + translate;
            rippleStyle['-moz-transform'] = scale + ' ' + translate;
            rippleStyle['-ms-transform'] = scale + ' ' + translate;
            rippleStyle['-o-transform'] = scale + ' ' + translate;
            rippleStyle.transform = scale + ' ' + translate;
            rippleStyle.opacity = '1';

            var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
            rippleStyle['-webkit-transition-duration'] = duration + 'ms';
            rippleStyle['-moz-transition-duration']    = duration + 'ms';
            rippleStyle['-o-transition-duration']      = duration + 'ms';
            rippleStyle['transition-duration']         = duration + 'ms';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e, element) {
            element = element || this;

            var ripples = element.getElementsByClassName('waves-rippling');

            for (var i = 0, len = ripples.length; i < len; i++) {
                removeRipple(e, element, ripples[i]);
            }
        }
    };

    /**
     * Collection of wrapper for HTML element that only have single tag
     * like <input> and <img>
     */
    var TagWrapper = {

        // Wrap <input> tag so it can perform the effect
        input: function(element) {

            var parent = element.parentNode;

            // If input already have parent just pass through
            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
                return;
            }

            // Put element class and style to the specified parent
            var wrapper       = document.createElement('i');
            wrapper.className = element.className + ' waves-input-wrapper';
            element.className = 'waves-button-input';

            // Put element as child
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);

            // Apply element color and background color to wrapper
            var elementStyle    = window.getComputedStyle(element, null);
            var color           = elementStyle.color;
            var backgroundColor = elementStyle.backgroundColor;

            wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);
            element.setAttribute('style', 'background-color:rgba(0,0,0,0);');

        },

        // Wrap <img> tag so it can perform the effect
        img: function(element) {

            var parent = element.parentNode;

            // If input already have parent just pass through
            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
                return;
            }

            // Put element as child
            var wrapper  = document.createElement('i');
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);

        }
    };

    /**
     * Hide the effect and remove the ripple. Must be
     * a separate function to pass the JSLint...
     */
    function removeRipple(e, el, ripple) {

        // Check if the ripple still exist
        if (!ripple) {
            return;
        }

        ripple.classList.remove('waves-rippling');

        var relativeX = ripple.getAttribute('data-x');
        var relativeY = ripple.getAttribute('data-y');
        var scale     = ripple.getAttribute('data-scale');
        var translate = ripple.getAttribute('data-translate');

        // Get delay beetween mousedown and mouse leave
        var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
        var delay = 350 - diff;

        if (delay < 0) {
            delay = 0;
        }

        if (e.type === 'mousemove') {
            delay = 150;
        }

        // Fade out ripple after delay
        var duration = e.type === 'mousemove' ? 2500 : Effect.duration;

        setTimeout(function() {

            var style = {
                top: relativeY + 'px',
                left: relativeX + 'px',
                opacity: '0',

                // Duration
                '-webkit-transition-duration': duration + 'ms',
                '-moz-transition-duration': duration + 'ms',
                '-o-transition-duration': duration + 'ms',
                'transition-duration': duration + 'ms',
                '-webkit-transform': scale + ' ' + translate,
                '-moz-transform': scale + ' ' + translate,
                '-ms-transform': scale + ' ' + translate,
                '-o-transform': scale + ' ' + translate,
                'transform': scale + ' ' + translate
            };

            ripple.setAttribute('style', convertStyle(style));

            setTimeout(function() {
                try {
                    el.removeChild(ripple);
                } catch (e) {
                    return false;
                }
            }, duration);

        }, delay);
    }


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {

        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,

        allowEvent: function(e) {

            var allow = true;

            if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
                allow = false;
            }

            return allow;
        },
        registerEvent: function(e) {
            var eType = e.type;

            if (eType === 'touchstart') {

                TouchHandler.touches += 1; // push

            } else if (/^(touchend|touchcancel)$/.test(eType)) {

                setTimeout(function() {
                    if (TouchHandler.touches) {
                        TouchHandler.touches -= 1; // pop after 500ms
                    }
                }, 500);

            }
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {

        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (target.classList.contains('waves-effect') && (!(target instanceof SVGElement))) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {

        // Disable effect if element has "disabled" property on it
        // In some cases, the event is not triggered by the current element
        // if (e.target.getAttribute('disabled') !== null) {
        //     return;
        // }

        var element = getWavesEffectElement(e);

        if (element !== null) {

            // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
            if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
                return;
            }

            TouchHandler.registerEvent(e);

            if (e.type === 'touchstart' && Effect.delay) {

                var hidden = false;

                var timer = setTimeout(function () {
                    timer = null;
                    Effect.show(e, element);
                }, Effect.delay);

                var hideEffect = function(hideEvent) {

                    // if touch hasn't moved, and effect not yet started: start effect now
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                        Effect.show(e, element);
                    }
                    if (!hidden) {
                        hidden = true;
                        Effect.hide(hideEvent, element);
                    }
                };

                var touchMove = function(moveEvent) {
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    hideEffect(moveEvent);
                };

                element.addEventListener('touchmove', touchMove, false);
                element.addEventListener('touchend', hideEffect, false);
                element.addEventListener('touchcancel', hideEffect, false);

            } else {

                Effect.show(e, element);

                if (isTouchAvailable) {
                    element.addEventListener('touchend', Effect.hide, false);
                    element.addEventListener('touchcancel', Effect.hide, false);
                }

                element.addEventListener('mouseup', Effect.hide, false);
                element.addEventListener('mouseleave', Effect.hide, false);
            }
        }
    }

    Waves.init = function(options) {
        var body = document.body;

        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        if ('delay' in options) {
            Effect.delay = options.delay;
        }

        if (isTouchAvailable) {
            body.addEventListener('touchstart', showEffect, false);
            body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
            body.addEventListener('touchend', TouchHandler.registerEvent, false);
        }

        body.addEventListener('mousedown', showEffect, false);
    };


    /**
     * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
     * waves classes to a set of elements. Set drag to true if the ripple mouseover
     * or skimming effect should be applied to the elements.
     */
    Waves.attach = function(elements, classes) {

        elements = getWavesElements(elements);

        if (toString.call(classes) === '[object Array]') {
            classes = classes.join(' ');
        }

        classes = classes ? ' ' + classes : '';

        var element, tagName;

        for (var i = 0, len = elements.length; i < len; i++) {

            element = elements[i];
            tagName = element.tagName.toLowerCase();

            if (['input', 'img'].indexOf(tagName) !== -1) {
                TagWrapper[tagName](element);
                element = element.parentElement;
            }

            if (element.className.indexOf('waves-effect') === -1) {
                element.className += ' waves-effect' + classes;
            }
        }
    };


    /**
     * Cause a ripple to appear in an element via code.
     */
    Waves.ripple = function(elements, options) {
        elements = getWavesElements(elements);
        var elementsLen = elements.length;

        options          = options || {};
        options.wait     = options.wait || 0;
        options.position = options.position || null; // default = centre of element


        if (elementsLen) {
            var element, pos, off, centre = {}, i = 0;
            var mousedown = {
                type: 'mousedown',
                button: 1
            };
            var hideRipple = function(mouseup, element) {
                return function() {
                    Effect.hide(mouseup, element);
                };
            };

            for (; i < elementsLen; i++) {
                element = elements[i];
                pos = options.position || {
                    x: element.clientWidth / 2,
                    y: element.clientHeight / 2
                };

                off      = offset(element);
                centre.x = off.left + pos.x;
                centre.y = off.top + pos.y;

                mousedown.pageX = centre.x;
                mousedown.pageY = centre.y;

                Effect.show(mousedown, element);

                if (options.wait >= 0 && options.wait !== null) {
                    var mouseup = {
                        type: 'mouseup',
                        button: 1
                    };

                    setTimeout(hideRipple(mouseup, element), options.wait);
                }
            }
        }
    };

    /**
     * Remove all ripples from an element.
     */
    Waves.calm = function(elements) {
        elements = getWavesElements(elements);
        var mouseup = {
            type: 'mouseup',
            button: 1
        };

        for (var i = 0, len = elements.length; i < len; i++) {
            Effect.hide(mouseup, elements[i]);
        }
    };

    /**
     * Deprecated API fallback
     */
    Waves.displayEffect = function(options) {
        console.error('Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect');
        Waves.init(options);
    };

    return Waves;
});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.on('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.off('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*! bootstrap3-wysihtml5-bower 2013-11-22 */

var wysihtml5={version:"0.3.0",commands:{},dom:{},quirks:{},toolbar:{},lang:{},selection:{},views:{},INVISIBLE_SPACE:"﻿",EMPTY_FUNCTION:function(){},ELEMENT_NODE:1,TEXT_NODE:3,BACKSPACE_KEY:8,ENTER_KEY:13,ESCAPE_KEY:27,SPACE_KEY:32,DELETE_KEY:46};window.rangy=function(){function a(a,b){var c=typeof a[b];return c==j||!(c!=i||!a[b])||"unknown"==c}function b(a,b){return!(typeof a[b]!=i||!a[b])}function c(a,b){return typeof a[b]!=k}function d(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function e(a){return a&&p(a,o)&&r(a,n)}function f(a){window.alert("Rangy not supported in your browser. Reason: "+a),s.initialized=!0,s.supported=!1}function g(){if(!s.initialized){var c,d=!1,g=!1;for(a(document,"createRange")&&(c=document.createRange(),p(c,m)&&r(c,l)&&(d=!0),c.detach()),(c=b(document,"body")?document.body:document.getElementsByTagName("body")[0])&&a(c,"createTextRange")&&(c=c.createTextRange(),e(c)&&(g=!0)),!d&&!g&&f("Neither Range nor TextRange are implemented"),s.initialized=!0,s.features={implementsDomRange:d,implementsTextRange:g},d=u.concat(t),g=0,c=d.length;c>g;++g)try{d[g](s)}catch(h){b(window,"console")&&a(window.console,"log")&&window.console.log("Init listener threw an exception. Continuing.",h)}}}function h(a){this.name=a,this.supported=this.initialized=!1}var i="object",j="function",k="undefined",l="startContainer startOffset endContainer endOffset collapsed commonAncestorContainer START_TO_START START_TO_END END_TO_START END_TO_END".split(" "),m="setStart setStartBefore setStartAfter setEnd setEndBefore setEndAfter collapse selectNode selectNodeContents compareBoundaryPoints deleteContents extractContents cloneContents insertNode surroundContents cloneRange toString detach".split(" "),n="boundingHeight boundingLeft boundingTop boundingWidth htmlText text".split(" "),o="collapse compareEndPoints duplicate getBookmark moveToBookmark moveToElementText parentElement pasteHTML select setEndPoint getBoundingClientRect".split(" "),p=d(a),q=d(b),r=d(c),s={version:"1.2.2",initialized:!1,supported:!0,util:{isHostMethod:a,isHostObject:b,isHostProperty:c,areHostMethods:p,areHostObjects:q,areHostProperties:r,isTextRange:e},features:{},modules:{},config:{alertOnWarn:!1,preferTextRange:!1}};s.fail=f,s.warn=function(a){a="Rangy warning: "+a,s.config.alertOnWarn?window.alert(a):typeof window.console!=k&&typeof window.console.log!=k&&window.console.log(a)},{}.hasOwnProperty?s.util.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}:f("hasOwnProperty not supported");var t=[],u=[];s.init=g,s.addInitListener=function(a){s.initialized?a(s):t.push(a)};var v=[];s.addCreateMissingNativeApiListener=function(a){v.push(a)},s.createMissingNativeApi=function(a){a=a||window,g();for(var b=0,c=v.length;c>b;++b)v[b](a)},h.prototype.fail=function(a){throw this.initialized=!0,this.supported=!1,Error("Module '"+this.name+"' failed to load: "+a)},h.prototype.warn=function(a){s.warn("Module "+this.name+": "+a)},h.prototype.createError=function(a){return Error("Error in Rangy "+this.name+" module: "+a)},s.createModule=function(a,b){var c=new h(a);s.modules[a]=c,u.push(function(a){b(a,c),c.initialized=!0,c.supported=!0})},s.requireModules=function(a){for(var b,c,d=0,e=a.length;e>d;++d){if(c=a[d],b=s.modules[c],!(b&&b instanceof h))throw Error("Module '"+c+"' not found");if(!b.supported)throw Error("Module '"+c+"' not supported")}};var w=!1,q=function(){w||(w=!0,s.initialized||g())};if(typeof window==k)f("No window found");else{if(typeof document!=k)return a(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",q,!1),a(window,"addEventListener")?window.addEventListener("load",q,!1):a(window,"attachEvent")?window.attachEvent("onload",q):f("Window does not have required addEventListener or attachEvent method"),s;f("No document found")}}(),rangy.createModule("DomUtil",function(a,b){function c(a){for(var b=0;a=a.previousSibling;)b++;return b}function d(a,b){var c,d=[];for(c=a;c;c=c.parentNode)d.push(c);for(c=b;c;c=c.parentNode)if(p(d,c))return c;return null}function e(a,b,c){for(c=c?a:a.parentNode;c;){if(a=c.parentNode,a===b)return c;c=a}return null}function f(a){return a=a.nodeType,3==a||4==a||8==a}function g(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a}function h(a){if(9==a.nodeType)return a;if(typeof a.ownerDocument!=m)return a.ownerDocument;if(typeof a.document!=m)return a.document;if(a.parentNode)return h(a.parentNode);throw Error("getDocument: no document found for node")}function i(a){return a?f(a)?'"'+a.data+'"':1==a.nodeType?"<"+a.nodeName+(a.id?' id="'+a.id+'"':"")+">["+a.childNodes.length+"]":a.nodeName:"[No node]"}function j(a){this._next=this.root=a}function k(a,b){this.node=a,this.offset=b}function l(a){this.code=this[a],this.codeName=a,this.message="DOMException: "+this.codeName}var m="undefined",n=a.util;n.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||b.fail("document missing a Node creation method"),n.isHostMethod(document,"getElementsByTagName")||b.fail("document missing getElementsByTagName method");var o=document.createElement("div");n.areHostMethods(o,["insertBefore","appendChild","cloneNode"])||b.fail("Incomplete Element implementation"),n.isHostProperty(o,"innerHTML")||b.fail("Element is missing innerHTML property"),o=document.createTextNode("test"),n.areHostMethods(o,["splitText","deleteData","insertData","appendData","cloneNode"])||b.fail("Incomplete Text Node implementation");var p=function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1};j.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a,b=this._current=this._next;if(this._current){if(a=b.firstChild,!a)for(a=null;b!==this.root&&!(a=b.nextSibling);)b=b.parentNode;this._next=a}return this._current},detach:function(){this._current=this._next=this.root=null}},k.prototype={equals:function(a){return this.node===a.node&this.offset==a.offset},inspect:function(){return"[DomPosition("+i(this.node)+":"+this.offset+")]"}},l.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},l.prototype.toString=function(){return this.message},a.dom={arrayContains:p,isHtmlNamespace:function(a){var b;return typeof a.namespaceURI==m||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==b},parentElement:function(a){return a=a.parentNode,1==a.nodeType?a:null},getNodeIndex:c,getNodeLength:function(a){var b;return f(a)?a.length:(b=a.childNodes)?b.length:0},getCommonAncestor:d,isAncestorOf:function(a,b,c){for(b=c?b:b.parentNode;b;){if(b===a)return!0;b=b.parentNode}return!1},getClosestAncestorIn:e,isCharacterDataNode:f,insertAfter:g,splitDataNode:function(a,b){var c=a.cloneNode(!1);return c.deleteData(0,b),a.deleteData(b,a.length-b),g(c,a),c},getDocument:h,getWindow:function(a){if(a=h(a),typeof a.defaultView!=m)return a.defaultView;if(typeof a.parentWindow!=m)return a.parentWindow;throw Error("Cannot get a window object for node")},getIframeWindow:function(a){if(typeof a.contentWindow!=m)return a.contentWindow;if(typeof a.contentDocument!=m)return a.contentDocument.defaultView;throw Error("getIframeWindow: No Window object found for iframe element")},getIframeDocument:function(a){if(typeof a.contentDocument!=m)return a.contentDocument;if(typeof a.contentWindow!=m)return a.contentWindow.document;throw Error("getIframeWindow: No Document object found for iframe element")},getBody:function(a){return n.isHostObject(a,"body")?a.body:a.getElementsByTagName("body")[0]},getRootContainer:function(a){for(var b;b=a.parentNode;)a=b;return a},comparePoints:function(a,b,f,g){var h;if(a==f)return b===g?0:g>b?-1:1;if(h=e(f,a,!0))return b<=c(h)?-1:1;if(h=e(a,f,!0))return c(h)<g?-1:1;if(b=d(a,f),a=a===b?b:e(a,b,!0),f=f===b?b:e(f,b,!0),a===f)throw Error("comparePoints got to case 4 and childA and childB are the same!");for(b=b.firstChild;b;){if(b===a)return-1;if(b===f)return 1;b=b.nextSibling}throw Error("Should not be here!")},inspectNode:i,fragmentFromNodeChildren:function(a){for(var b,c=h(a).createDocumentFragment();b=a.firstChild;)c.appendChild(b);return c},createIterator:function(a){return new j(a)},DomPosition:k},a.DOMException=l}),rangy.createModule("DomRange",function(a){function b(a,b){return 3!=a.nodeType&&(H.isAncestorOf(a,b.startContainer,!0)||H.isAncestorOf(a,b.endContainer,!0))}function c(a){return H.getDocument(a.startContainer)}function d(a,b,c){if(b=a._listeners[b])for(var d=0,e=b.length;e>d;++d)b[d].call(a,{target:a,args:c})}function e(a){return new I(a.parentNode,H.getNodeIndex(a))}function f(a){return new I(a.parentNode,H.getNodeIndex(a)+1)}function g(a,b,c){var d=11==a.nodeType?a.firstChild:a;return H.isCharacterDataNode(b)?c==b.length?H.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:H.splitDataNode(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]),d}function h(a){for(var b,d,e=c(a.range).createDocumentFragment();d=a.next();){if(b=a.isPartiallySelectedSubtree(),d=d.cloneNode(!b),b&&(b=a.getSubtreeIterator(),d.appendChild(h(b)),b.detach(!0)),10==d.nodeType)throw new J("HIERARCHY_REQUEST_ERR");e.appendChild(d)}return e}function i(a,b,c){for(var d,e,c=c||{stop:!1};d=a.next();)if(a.isPartiallySelectedSubtree()){if(!1===b(d)){c.stop=!0;break}if(d=a.getSubtreeIterator(),i(d,b,c),d.detach(!0),c.stop)break}else for(d=H.createIterator(d);e=d.next();)if(!1===b(e))return c.stop=!0,void 0}function j(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),j(b),b.detach(!0)):a.remove()}function k(a){for(var b,d,e=c(a.range).createDocumentFragment();b=a.next();){if(a.isPartiallySelectedSubtree()?(b=b.cloneNode(!1),d=a.getSubtreeIterator(),b.appendChild(k(d)),d.detach(!0)):a.remove(),10==b.nodeType)throw new J("HIERARCHY_REQUEST_ERR");e.appendChild(b)}return e}function l(a,b,c){var d,e=!(!b||!b.length),f=!!c;e&&(d=RegExp("^("+b.join("|")+")$"));var g=[];return i(new n(a,!1),function(a){(!e||d.test(a.nodeType))&&(!f||c(a))&&g.push(a)}),g}function m(a){return"["+("undefined"==typeof a.getName?"Range":a.getName())+"("+H.inspectNode(a.startContainer)+":"+a.startOffset+", "+H.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function n(a,b){if(this.range=a,this.clonePartiallySelectedTextNodes=b,!a.collapsed){this.sc=a.startContainer,this.so=a.startOffset,this.ec=a.endContainer,this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&H.isCharacterDataNode(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==c||H.isCharacterDataNode(this.sc)?H.getClosestAncestorIn(this.sc,c,!0):this.sc.childNodes[this.so],this._last=this.ec!==c||H.isCharacterDataNode(this.ec)?H.getClosestAncestorIn(this.ec,c,!0):this.ec.childNodes[this.eo-1])}}function o(a){this.code=this[a],this.codeName=a,this.message="RangeException: "+this.codeName}function p(a,b,c){this.nodes=l(a,b,c),this._next=this.nodes[0],this._position=0}function q(a){return function(b,c){for(var d,e=c?b:b.parentNode;e;){if(d=e.nodeType,H.arrayContains(a,d))return e;e=e.parentNode}return null}}function r(a,b){if(R(a,b))throw new o("INVALID_NODE_TYPE_ERR")}function s(a){if(!a.startContainer)throw new J("INVALID_STATE_ERR")}function t(a,b){if(!H.arrayContains(b,a.nodeType))throw new o("INVALID_NODE_TYPE_ERR")}function u(a,b){if(0>b||b>(H.isCharacterDataNode(a)?a.length:a.childNodes.length))throw new J("INDEX_SIZE_ERR")}function v(a,b){if(P(a,!0)!==P(b,!0))throw new J("WRONG_DOCUMENT_ERR")}function w(a){if(Q(a,!0))throw new J("NO_MODIFICATION_ALLOWED_ERR")}function x(a,b){if(!a)throw new J(b)}function y(a){if(s(a),!((H.arrayContains(L,a.startContainer.nodeType)||P(a.startContainer,!0))&&(H.arrayContains(L,a.endContainer.nodeType)||P(a.endContainer,!0))&&a.startOffset<=(H.isCharacterDataNode(a.startContainer)?a.startContainer.length:a.startContainer.childNodes.length)&&a.endOffset<=(H.isCharacterDataNode(a.endContainer)?a.endContainer.length:a.endContainer.childNodes.length)))throw Error("Range error: Range is no longer valid after DOM mutation ("+a.inspect()+")")}function z(){}function A(a){a.START_TO_START=W,a.START_TO_END=X,a.END_TO_END=Y,a.END_TO_START=Z,a.NODE_BEFORE=$,a.NODE_AFTER=_,a.NODE_BEFORE_AND_AFTER=ab,a.NODE_INSIDE=bb}function B(a){A(a),A(a.prototype)}function C(a,b){return function(){y(this);var c=this.startContainer,d=this.startOffset,e=this.commonAncestorContainer,g=new n(this,!0);return c!==e&&(c=H.getClosestAncestorIn(c,e,!0),d=f(c),c=d.node,d=d.offset),i(g,w),g.reset(),e=a(g),g.detach(),b(this,c,d,c,d),e}}function D(c,d,g){function h(a,b){return function(c){s(this),t(c,K),t(O(c),L),c=(a?e:f)(c),(b?i:l)(this,c.node,c.offset)}}function i(a,b,c){var e=a.endContainer,f=a.endOffset;(b!==a.startContainer||c!==a.startOffset)&&((O(b)!=O(e)||1==H.comparePoints(b,c,e,f))&&(e=b,f=c),d(a,b,c,e,f))}function l(a,b,c){var e=a.startContainer,f=a.startOffset;(b!==a.endContainer||c!==a.endOffset)&&((O(b)!=O(e)||-1==H.comparePoints(b,c,e,f))&&(e=b,f=c),d(a,e,f,b,c))}c.prototype=new z,a.util.extend(c.prototype,{setStart:function(a,b){s(this),r(a,!0),u(a,b),i(this,a,b)},setEnd:function(a,b){s(this),r(a,!0),u(a,b),l(this,a,b)},setStartBefore:h(!0,!0),setStartAfter:h(!1,!0),setEndBefore:h(!0,!1),setEndAfter:h(!1,!1),collapse:function(a){y(this),a?d(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):d(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){s(this),r(a,!0),d(this,a,0,a,H.getNodeLength(a))},selectNode:function(a){s(this),r(a,!1),t(a,K);var b=e(a),a=f(a);d(this,b.node,b.offset,a.node,a.offset)},extractContents:C(k,d),deleteContents:C(j,d),canSurroundContents:function(){y(this),w(this.startContainer),w(this.endContainer);var a=new n(this,!0),c=a._first&&b(a._first,this)||a._last&&b(a._last,this);return a.detach(),!c},detach:function(){g(this)},splitBoundaries:function(){y(this);var a=this.startContainer,b=this.startOffset,c=this.endContainer,e=this.endOffset,f=a===c;H.isCharacterDataNode(c)&&e>0&&e<c.length&&H.splitDataNode(c,e),H.isCharacterDataNode(a)&&b>0&&b<a.length&&(a=H.splitDataNode(a,b),f?(e-=b,c=a):c==a.parentNode&&e>=H.getNodeIndex(a)&&e++,b=0),d(this,a,b,c,e)},normalizeBoundaries:function(){y(this);var a=this.startContainer,b=this.startOffset,c=this.endContainer,e=this.endOffset,f=function(a){var b=a.nextSibling;b&&b.nodeType==a.nodeType&&(c=a,e=a.length,a.appendData(b.data),b.parentNode.removeChild(b))},g=function(d){var f=d.previousSibling;if(f&&f.nodeType==d.nodeType){a=d;var g=d.length;b=f.length,d.insertData(0,f.data),f.parentNode.removeChild(f),a==c?(e+=b,c=a):c==d.parentNode&&(f=H.getNodeIndex(d),e==f?(c=d,e=g):e>f&&e--)}},h=!0;H.isCharacterDataNode(c)?c.length==e&&f(c):(e>0&&(h=c.childNodes[e-1])&&H.isCharacterDataNode(h)&&f(h),h=!this.collapsed),h?H.isCharacterDataNode(a)?0==b&&g(a):b<a.childNodes.length&&(f=a.childNodes[b])&&H.isCharacterDataNode(f)&&g(f):(a=c,b=e),d(this,a,b,c,e)},collapseToPoint:function(a,b){s(this),r(a,!0),u(a,b),(a!==this.startContainer||b!==this.startOffset||a!==this.endContainer||b!==this.endOffset)&&d(this,a,b,a,b)}}),B(c)}function E(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset,a.commonAncestorContainer=a.collapsed?a.startContainer:H.getCommonAncestor(a.startContainer,a.endContainer)}function F(a,b,c,e,f){var g=a.startContainer!==b||a.startOffset!==c,h=a.endContainer!==e||a.endOffset!==f;a.startContainer=b,a.startOffset=c,a.endContainer=e,a.endOffset=f,E(a),d(a,"boundarychange",{startMoved:g,endMoved:h})}function G(a){this.startContainer=a,this.startOffset=0,this.endContainer=a,this.endOffset=0,this._listeners={boundarychange:[],detach:[]},E(this)}a.requireModules(["DomUtil"]);var H=a.dom,I=H.DomPosition,J=a.DOMException;n.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next;return a&&(this._next=a!==this._last?a.nextSibling:null,H.isCharacterDataNode(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so))),a},remove:function(){var a,b,c=this._current;!H.isCharacterDataNode(c)||c!==this.sc&&c!==this.ec?c.parentNode&&c.parentNode.removeChild(c):(a=c===this.sc?this.so:0,b=c===this.ec?this.eo:c.length,a!=b&&c.deleteData(a,b-a))},isPartiallySelectedSubtree:function(){return b(this._current,this.range)},getSubtreeIterator:function(){var a;if(this.isSingleCharacterDataNode)a=this.range.cloneRange(),a.collapse();else{a=new G(c(this.range));var b=this._current,d=b,e=0,f=b,g=H.getNodeLength(b);H.isAncestorOf(b,this.sc,!0)&&(d=this.sc,e=this.so),H.isAncestorOf(b,this.ec,!0)&&(f=this.ec,g=this.eo),F(a,d,e,f,g)}return new n(a,this.clonePartiallySelectedTextNodes)},detach:function(a){a&&this.range.detach(),this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}},o.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},o.prototype.toString=function(){return this.message},p.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){return this._current=this._next,this._next=this.nodes[++this._position],this._current},detach:function(){this._current=this._next=this.nodes=null}};var K=[1,3,4,5,7,8,10],L=[2,9,11],M=[1,3,4,5,7,8,10,11],N=[1,3,4,5,7,8],O=H.getRootContainer,P=q([9,11]),Q=q([5,6,10,12]),R=q([6,10,12]),S=document.createElement("style"),T=!1;try{S.innerHTML="<b>x</b>",T=3==S.firstChild.nodeType}catch(U){}a.features.htmlParsingConforms=T;var V="startContainer startOffset endContainer endOffset collapsed commonAncestorContainer".split(" "),W=0,X=1,Y=2,Z=3,$=0,_=1,ab=2,bb=3;z.prototype={attachListener:function(a,b){this._listeners[a].push(b)},compareBoundaryPoints:function(a,b){y(this),v(this.startContainer,b.startContainer);var c=a==Z||a==W?"start":"end",d=a==X||a==W?"start":"end";return H.comparePoints(this[c+"Container"],this[c+"Offset"],b[d+"Container"],b[d+"Offset"])},insertNode:function(a){if(y(this),t(a,M),w(this.startContainer),H.isAncestorOf(a,this.startContainer,!0))throw new J("HIERARCHY_REQUEST_ERR");this.setStartBefore(g(a,this.startContainer,this.startOffset))},cloneContents:function(){y(this);var a,b;return this.collapsed?c(this).createDocumentFragment():this.startContainer===this.endContainer&&H.isCharacterDataNode(this.startContainer)?(a=this.startContainer.cloneNode(!0),a.data=a.data.slice(this.startOffset,this.endOffset),b=c(this).createDocumentFragment(),b.appendChild(a),b):(b=new n(this,!0),a=h(b),b.detach(),a)},canSurroundContents:function(){y(this),w(this.startContainer),w(this.endContainer);var a=new n(this,!0),c=a._first&&b(a._first,this)||a._last&&b(a._last,this);return a.detach(),!c},surroundContents:function(a){if(t(a,N),!this.canSurroundContents())throw new o("BAD_BOUNDARYPOINTS_ERR");var b=this.extractContents();if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);g(a,this.startContainer,this.startOffset),a.appendChild(b),this.selectNode(a)},cloneRange:function(){y(this);for(var a,b=new G(c(this)),d=V.length;d--;)a=V[d],b[a]=this[a];return b},toString:function(){y(this);var a=this.startContainer;if(a===this.endContainer&&H.isCharacterDataNode(a))return 3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"";var b=[],a=new n(this,!0);return i(a,function(a){(3==a.nodeType||4==a.nodeType)&&b.push(a.data)}),a.detach(),b.join("")},compareNode:function(a){y(this);var b=a.parentNode,c=H.getNodeIndex(a);if(!b)throw new J("NOT_FOUND_ERR");return a=this.comparePoint(b,c),b=this.comparePoint(b,c+1),0>a?b>0?ab:$:b>0?_:bb},comparePoint:function(a,b){return y(this),x(a,"HIERARCHY_REQUEST_ERR"),v(a,this.startContainer),0>H.comparePoints(a,b,this.startContainer,this.startOffset)?-1:0<H.comparePoints(a,b,this.endContainer,this.endOffset)?1:0},createContextualFragment:T?function(a){var b=this.startContainer,c=H.getDocument(b);if(!b)throw new J("INVALID_STATE_ERR");var d=null;return 1==b.nodeType?d=b:H.isCharacterDataNode(b)&&(d=H.parentElement(b)),d=null===d||"HTML"==d.nodeName&&H.isHtmlNamespace(H.getDocument(d).documentElement)&&H.isHtmlNamespace(d)?c.createElement("body"):d.cloneNode(!1),d.innerHTML=a,H.fragmentFromNodeChildren(d)}:function(a){s(this);var b=c(this).createElement("body");return b.innerHTML=a,H.fragmentFromNodeChildren(b)},toHtml:function(){y(this);var a=c(this).createElement("div");return a.appendChild(this.cloneContents()),a.innerHTML},intersectsNode:function(a,b){if(y(this),x(a,"NOT_FOUND_ERR"),H.getDocument(a)!==c(this))return!1;var d=a.parentNode,e=H.getNodeIndex(a);x(d,"NOT_FOUND_ERR");var f=H.comparePoints(d,e,this.endContainer,this.endOffset),d=H.comparePoints(d,e+1,this.startContainer,this.startOffset);return b?0>=f&&d>=0:0>f&&d>0},isPointInRange:function(a,b){return y(this),x(a,"HIERARCHY_REQUEST_ERR"),v(a,this.startContainer),0<=H.comparePoints(a,b,this.startContainer,this.startOffset)&&0>=H.comparePoints(a,b,this.endContainer,this.endOffset)},intersectsRange:function(a,b){if(y(this),c(a)!=c(this))throw new J("WRONG_DOCUMENT_ERR");var d=H.comparePoints(this.startContainer,this.startOffset,a.endContainer,a.endOffset),e=H.comparePoints(this.endContainer,this.endOffset,a.startContainer,a.startOffset);return b?0>=d&&e>=0:0>d&&e>0},intersection:function(a){if(this.intersectsRange(a)){var b=H.comparePoints(this.startContainer,this.startOffset,a.startContainer,a.startOffset),c=H.comparePoints(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange();return-1==b&&d.setStart(a.startContainer,a.startOffset),1==c&&d.setEnd(a.endContainer,a.endOffset),d}return null},union:function(a){if(this.intersectsRange(a,!0)){var b=this.cloneRange();return-1==H.comparePoints(a.startContainer,a.startOffset,this.startContainer,this.startOffset)&&b.setStart(a.startContainer,a.startOffset),1==H.comparePoints(a.endContainer,a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset),b}throw new o("Ranges do not intersect")},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==bb},containsNodeContents:function(a){return 0<=this.comparePoint(a,0)&&0>=this.comparePoint(a,H.getNodeLength(a))},containsRange:function(a){return this.intersection(a).equals(a)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);return 0<c.length?(b.setStart(c[0],0),a=c.pop(),b.setEnd(a,a.length),a=this.containsRange(b),b.detach(),a):this.containsNodeContents(a)},createNodeIterator:function(a,b){return y(this),new p(this,a,b)},getNodes:function(a,b){return y(this),l(this,a,b)},getDocument:function(){return c(this)},collapseBefore:function(a){s(this),this.setEndBefore(a),this.collapse(!1)},collapseAfter:function(a){s(this),this.setStartAfter(a),this.collapse(!0)},getName:function(){return"DomRange"},equals:function(a){return G.rangesEqual(this,a)},inspect:function(){return m(this)}},D(G,F,function(a){s(a),a.startContainer=a.startOffset=a.endContainer=a.endOffset=null,a.collapsed=a.commonAncestorContainer=null,d(a,"detach",null),a._listeners=null}),a.rangePrototype=z.prototype,G.rangeProperties=V,G.RangeIterator=n,G.copyComparisonConstants=B,G.createPrototypeRange=D,G.inspect=m,G.getRangeDocument=c,G.rangesEqual=function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset},a.DomRange=G,a.RangeException=o}),rangy.createModule("WrappedRange",function(a){function b(a,b,c,d){var g=a.duplicate();g.collapse(c);var h=g.parentElement();if(e.isAncestorOf(b,h,!0)||(h=b),!h.canHaveHTML)return new f(h.parentNode,e.getNodeIndex(h));var i,b=e.getDocument(h).createElement("span"),j=c?"StartToStart":"StartToEnd";do h.insertBefore(b,b.previousSibling),g.moveToElementText(b);while(0<(i=g.compareEndPoints(j,a))&&b.previousSibling);if(j=b.nextSibling,-1==i&&j&&e.isCharacterDataNode(j)){if(g.setEndPoint(c?"EndToStart":"EndToEnd",a),/[\r\n]/.test(j.data))for(h=g.duplicate(),c=h.text.replace(/\r\n/g,"\r").length,c=h.moveStart("character",c);-1==h.compareEndPoints("StartToEnd",h);)c++,h.moveStart("character",1);else c=g.text.length;h=new f(j,c)}else j=(d||!c)&&b.previousSibling,h=(c=(d||c)&&b.nextSibling)&&e.isCharacterDataNode(c)?new f(c,0):j&&e.isCharacterDataNode(j)?new f(j,j.length):new f(h,e.getNodeIndex(b));return b.parentNode.removeChild(b),h}function c(a,b){var c,d,f=a.offset,g=e.getDocument(a.node),h=g.body.createTextRange(),i=e.isCharacterDataNode(a.node);return i?(c=a.node,d=c.parentNode):(c=a.node.childNodes,c=f<c.length?c[f]:null,d=a.node),g=g.createElement("span"),g.innerHTML="&#feff;",c?d.insertBefore(g,c):d.appendChild(g),h.moveToElementText(g),h.collapse(!b),d.removeChild(g),i&&h[b?"moveStart":"moveEnd"]("character",f),h}a.requireModules(["DomUtil","DomRange"]);var d,e=a.dom,f=e.DomPosition,g=a.DomRange;if(!a.features.implementsDomRange||a.features.implementsTextRange&&a.config.preferTextRange){if(a.features.implementsTextRange){d=function(a){this.textRange=a,this.refresh()},d.prototype=new g(document),d.prototype.refresh=function(){var a,c,d=this.textRange;a=d.parentElement();var f=d.duplicate();f.collapse(!0),c=f.parentElement(),f=d.duplicate(),f.collapse(!1),d=f.parentElement(),c=c==d?c:e.getCommonAncestor(c,d),c=c==a?c:e.getCommonAncestor(a,c),0==this.textRange.compareEndPoints("StartToEnd",this.textRange)?c=a=b(this.textRange,c,!0,!0):(a=b(this.textRange,c,!0,!1),c=b(this.textRange,c,!1,!1)),this.setStart(a.node,a.offset),this.setEnd(c.node,c.offset)},g.copyComparisonConstants(d);var h=function(){return this}();"undefined"==typeof h.Range&&(h.Range=d),a.createNativeRange=function(a){return a=a||document,a.body.createTextRange()}}}else(function(){function b(a){for(var b,c=h.length;c--;)b=h[c],a[b]=a.nativeRange[b]}var c,f,h=g.rangeProperties;d=function(a){if(!a)throw Error("Range must be specified");this.nativeRange=a,b(this)},g.createPrototypeRange(d,function(a,b,c,d,e){var f=a.endContainer!==d||a.endOffset!=e;(a.startContainer!==b||a.startOffset!=c||f)&&(a.setEnd(d,e),a.setStart(b,c))},function(a){a.nativeRange.detach(),a.detached=!0;for(var b,c=h.length;c--;)b=h[c],a[b]=null}),c=d.prototype,c.selectNode=function(a){this.nativeRange.selectNode(a),b(this)},c.deleteContents=function(){this.nativeRange.deleteContents(),b(this)},c.extractContents=function(){var a=this.nativeRange.extractContents();return b(this),a},c.cloneContents=function(){return this.nativeRange.cloneContents()},c.surroundContents=function(a){this.nativeRange.surroundContents(a),b(this)},c.collapse=function(a){this.nativeRange.collapse(a),b(this)},c.cloneRange=function(){return new d(this.nativeRange.cloneRange())},c.refresh=function(){b(this)},c.toString=function(){return this.nativeRange.toString()};var i=document.createTextNode("test");e.getBody(document).appendChild(i);var j=document.createRange();j.setStart(i,0),j.setEnd(i,0);try{j.setStart(i,1),c.setStart=function(a,c){this.nativeRange.setStart(a,c),b(this)},c.setEnd=function(a,c){this.nativeRange.setEnd(a,c),b(this)},f=function(a){return function(c){this.nativeRange[a](c),b(this)}}}catch(k){c.setStart=function(a,c){try{this.nativeRange.setStart(a,c)}catch(d){this.nativeRange.setEnd(a,c),this.nativeRange.setStart(a,c)}b(this)},c.setEnd=function(a,c){try{this.nativeRange.setEnd(a,c)}catch(d){this.nativeRange.setStart(a,c),this.nativeRange.setEnd(a,c)}b(this)},f=function(a,c){return function(d){try{this.nativeRange[a](d)}catch(e){this.nativeRange[c](d),this.nativeRange[a](d)}b(this)}}}c.setStartBefore=f("setStartBefore","setEndBefore"),c.setStartAfter=f("setStartAfter","setEndAfter"),c.setEndBefore=f("setEndBefore","setStartBefore"),c.setEndAfter=f("setEndAfter","setStartAfter"),j.selectNodeContents(i),c.selectNodeContents=j.startContainer==i&&j.endContainer==i&&0==j.startOffset&&j.endOffset==i.length?function(a){this.nativeRange.selectNodeContents(a),b(this)}:function(a){this.setStart(a,0),this.setEnd(a,g.getEndOffset(a))},j.selectNodeContents(i),j.setEnd(i,3),f=document.createRange(),f.selectNodeContents(i),f.setEnd(i,4),f.setStart(i,2),c.compareBoundaryPoints=-1==j.compareBoundaryPoints(j.START_TO_END,f)&1==j.compareBoundaryPoints(j.END_TO_START,f)?function(a,b){return b=b.nativeRange||b,a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&(a=b.START_TO_END),this.nativeRange.compareBoundaryPoints(a,b)}:function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)},a.util.isHostMethod(j,"createContextualFragment")&&(c.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)}),e.getBody(document).removeChild(i),j.detach(),f.detach()})(),a.createNativeRange=function(a){return a=a||document,a.createRange()};a.features.implementsTextRange&&(d.rangeToTextRange=function(a){if(a.collapsed)return c(new f(a.startContainer,a.startOffset),!0);var b=c(new f(a.startContainer,a.startOffset),!0),d=c(new f(a.endContainer,a.endOffset),!1),a=e.getDocument(a.startContainer).body.createTextRange();return a.setEndPoint("StartToStart",b),a.setEndPoint("EndToEnd",d),a}),d.prototype.getName=function(){return"WrappedRange"},a.WrappedRange=d,a.createRange=function(b){return b=b||document,new d(a.createNativeRange(b))},a.createRangyRange=function(a){return a=a||document,new g(a)},a.createIframeRange=function(b){return a.createRange(e.getIframeDocument(b))},a.createIframeRangyRange=function(b){return a.createRangyRange(e.getIframeDocument(b))},a.addCreateMissingNativeApiListener(function(b){b=b.document,"undefined"==typeof b.createRange&&(b.createRange=function(){return a.createRange(this)}),b=b=null})}),rangy.createModule("WrappedSelection",function(a,b){function c(a){return(a||window).getSelection()}function d(a){return(a||window).document.selection}function e(a,b,c){var d=c?"end":"start",c=c?"start":"end";a.anchorNode=b[d+"Container"],a.anchorOffset=b[d+"Offset"],a.focusNode=b[c+"Container"],a.focusOffset=b[c+"Offset"]}function f(a){a.anchorNode=a.focusNode=null,a.anchorOffset=a.focusOffset=0,a.rangeCount=0,a.isCollapsed=!0,a._ranges.length=0}function g(b){var c;return b instanceof t?(c=b._selectionNativeRange,c||(c=a.createNativeRange(r.getDocument(b.startContainer)),c.setEnd(b.endContainer,b.endOffset),c.setStart(b.startContainer,b.startOffset),b._selectionNativeRange=c,b.attachListener("detach",function(){this._selectionNativeRange=null}))):b instanceof u?c=b.nativeRange:a.features.implementsDomRange&&b instanceof r.getWindow(b.startContainer).Range&&(c=b),c}function h(a){var b,c=a.getNodes();a:if(c.length&&1==c[0].nodeType){b=1;for(var d=c.length;d>b;++b)if(!r.isAncestorOf(c[0],c[b])){b=!1;break a}b=!0}else b=!1;if(!b)throw Error("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return c[0]}function i(a,b){var c=new u(b);a._ranges=[c],e(a,c,!1),a.rangeCount=1,a.isCollapsed=c.collapsed}function j(b){if(b._ranges.length=0,"None"==b.docSelection.type)f(b);else{var c=b.docSelection.createRange();if(c&&"undefined"!=typeof c.text)i(b,c);else{b.rangeCount=c.length;for(var d,g=r.getDocument(c.item(0)),h=0;h<b.rangeCount;++h)d=a.createRange(g),d.selectNode(c.item(h)),b._ranges.push(d);b.isCollapsed=1==b.rangeCount&&b._ranges[0].collapsed,e(b,b._ranges[b.rangeCount-1],!1)}}}function k(a,b){for(var c=a.docSelection.createRange(),d=h(b),e=r.getDocument(c.item(0)),e=r.getBody(e).createControlRange(),f=0,g=c.length;g>f;++f)e.add(c.item(f));try{e.add(d)}catch(i){throw Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}e.select(),j(a)}function l(a,b,c){this.nativeSelection=a,this.docSelection=b,this._ranges=[],this.win=c,this.refresh()}function m(a,b){for(var c,d=r.getDocument(b[0].startContainer),d=r.getBody(d).createControlRange(),e=0;rangeCount>e;++e){c=h(b[e]);
try{d.add(c)}catch(f){throw Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)")}}d.select(),j(a)}function n(a,b){if(a.anchorNode&&r.getDocument(a.anchorNode)!==r.getDocument(b))throw new v("WRONG_DOCUMENT_ERR")}function o(a){var b=[],c=new w(a.anchorNode,a.anchorOffset),d=new w(a.focusNode,a.focusOffset),e="function"==typeof a.getName?a.getName():"Selection";if("undefined"!=typeof a.rangeCount)for(var f=0,g=a.rangeCount;g>f;++f)b[f]=t.inspect(a.getRangeAt(f));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}a.requireModules(["DomUtil","DomRange","WrappedRange"]),a.config.checkSelectionRanges=!0;var p,q,r=a.dom,s=a.util,t=a.DomRange,u=a.WrappedRange,v=a.DOMException,w=r.DomPosition,x=a.util.isHostMethod(window,"getSelection"),y=a.util.isHostObject(document,"selection"),z=y&&(!x||a.config.preferTextRange);z?(p=d,a.isSelectionValid=function(a){var a=(a||window).document,b=a.selection;return"None"!=b.type||r.getDocument(b.createRange().parentElement())==a}):x?(p=c,a.isSelectionValid=function(){return!0}):b.fail("Neither document.selection or window.getSelection() detected."),a.getNativeSelection=p;var x=p(),A=a.createNativeRange(document),B=r.getBody(document),C=s.areHostObjects(x,s.areHostProperties(x,["anchorOffset","focusOffset"]));a.features.selectionHasAnchorAndFocus=C;var D=s.isHostMethod(x,"extend");a.features.selectionHasExtend=D;var E="number"==typeof x.rangeCount;a.features.selectionHasRangeCount=E;var F=!1,G=!0;s.areHostMethods(x,["addRange","getRangeAt","removeAllRanges"])&&"number"==typeof x.rangeCount&&a.features.implementsDomRange&&function(){var a=document.createElement("iframe");B.appendChild(a);var b=r.getIframeDocument(a);b.open(),b.write("<html><head></head><body>12</body></html>"),b.close();var c=r.getIframeWindow(a).getSelection(),d=b.documentElement.lastChild.firstChild,b=b.createRange();b.setStart(d,1),b.collapse(!0),c.addRange(b),G=1==c.rangeCount,c.removeAllRanges();var e=b.cloneRange();b.setStart(d,0),e.setEnd(d,2),c.addRange(b),c.addRange(e),F=2==c.rangeCount,b.detach(),e.detach(),B.removeChild(a)}(),a.features.selectionSupportsMultipleRanges=F,a.features.collapsedNonEditableSelectionsSupported=G;var H,I=!1;B&&s.isHostMethod(B,"createControlRange")&&(H=B.createControlRange(),s.areHostProperties(H,["item","add"])&&(I=!0)),a.features.implementsControlRange=I,q=C?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return a.rangeCount?a.getRangeAt(a.rangeCount-1).collapsed:!1};var J;if(s.isHostMethod(x,"getRangeAt")?J=function(a,b){try{return a.getRangeAt(b)}catch(c){return null}}:C&&(J=function(b){var c=r.getDocument(b.anchorNode),c=a.createRange(c);return c.setStart(b.anchorNode,b.anchorOffset),c.setEnd(b.focusNode,b.focusOffset),c.collapsed!==this.isCollapsed&&(c.setStart(b.focusNode,b.focusOffset),c.setEnd(b.anchorNode,b.anchorOffset)),c}),a.getSelection=function(a){var a=a||window,b=a._rangySelection,c=p(a),e=y?d(a):null;return b?(b.nativeSelection=c,b.docSelection=e,b.refresh(a)):(b=new l(c,e,a),a._rangySelection=b),b},a.getIframeSelection=function(b){return a.getSelection(r.getIframeWindow(b))},H=l.prototype,!z&&C&&s.areHostMethods(x,["removeAllRanges","addRange"])){H.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),f(this)};var K=function(b,c){var d=t.getRangeDocument(c),d=a.createRange(d);d.collapseToPoint(c.endContainer,c.endOffset),b.nativeSelection.addRange(g(d)),b.nativeSelection.extend(c.startContainer,c.startOffset),b.refresh()};H.addRange=E?function(b,c){if(I&&y&&"Control"==this.docSelection.type)k(this,b);else if(c&&D)K(this,b);else{var d;F?d=this.rangeCount:(this.removeAllRanges(),d=0),this.nativeSelection.addRange(g(b)),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==d+1?(a.config.checkSelectionRanges&&(d=J(this.nativeSelection,this.rangeCount-1))&&!t.rangesEqual(d,b)&&(b=new u(d)),this._ranges[this.rangeCount-1]=b,e(this,b,N(this.nativeSelection)),this.isCollapsed=q(this)):this.refresh()}}:function(a,b){b&&D?K(this,a):(this.nativeSelection.addRange(g(a)),this.refresh())},H.setRanges=function(a){if(I&&a.length>1)m(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;c>b;++b)this.addRange(a[b])}}}else{if(!(s.isHostMethod(x,"empty")&&s.isHostMethod(A,"select")&&I&&z))return b.fail("No means of selecting a Range or TextRange was found"),!1;H.removeAllRanges=function(){try{if(this.docSelection.empty(),"None"!=this.docSelection.type){var a;if(this.anchorNode)a=r.getDocument(this.anchorNode);else if("Control"==this.docSelection.type){var b=this.docSelection.createRange();b.length&&(a=r.getDocument(b.item(0)).body.createTextRange())}a&&(a.body.createTextRange().select(),this.docSelection.empty())}}catch(c){}f(this)},H.addRange=function(a){"Control"==this.docSelection.type?k(this,a):(u.rangeToTextRange(a).select(),this._ranges[0]=a,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,e(this,a,!1))},H.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?m(this,a):b&&this.addRange(a[0])}}H.getRangeAt=function(a){if(0>a||a>=this.rangeCount)throw new v("INDEX_SIZE_ERR");return this._ranges[a]};var L;if(z)L=function(b){var c;a.isSelectionValid(b.win)?c=b.docSelection.createRange():(c=r.getBody(b.win.document).createTextRange(),c.collapse(!0)),"Control"==b.docSelection.type?j(b):c&&"undefined"!=typeof c.text?i(b,c):f(b)};else if(s.isHostMethod(x,"getRangeAt")&&"number"==typeof x.rangeCount)L=function(b){if(I&&y&&"Control"==b.docSelection.type)j(b);else if(b._ranges.length=b.rangeCount=b.nativeSelection.rangeCount,b.rangeCount){for(var c=0,d=b.rangeCount;d>c;++c)b._ranges[c]=new a.WrappedRange(b.nativeSelection.getRangeAt(c));e(b,b._ranges[b.rangeCount-1],N(b.nativeSelection)),b.isCollapsed=q(b)}else f(b)};else{if(!C||"boolean"!=typeof x.isCollapsed||"boolean"!=typeof A.collapsed||!a.features.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;L=function(a){var b;b=a.nativeSelection,b.anchorNode?(b=J(b,0),a._ranges=[b],a.rangeCount=1,b=a.nativeSelection,a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset,a.isCollapsed=q(a)):f(a)}}H.refresh=function(a){var b=a?this._ranges.slice(0):null;if(L(this),a){if(a=b.length,a!=this._ranges.length)return!1;for(;a--;)if(!t.rangesEqual(b[a],this._ranges[a]))return!1;return!0}};var M=function(a,b){var c=a.getAllRanges(),d=!1;a.removeAllRanges();for(var e=0,g=c.length;g>e;++e)d||b!==c[e]?a.addRange(c[e]):d=!0;a.rangeCount||f(a)};H.removeRange=I?function(a){if("Control"==this.docSelection.type){for(var b,c=this.docSelection.createRange(),a=h(a),d=r.getDocument(c.item(0)),d=r.getBody(d).createControlRange(),e=!1,f=0,g=c.length;g>f;++f)b=c.item(f),b!==a||e?d.add(c.item(f)):e=!0;d.select(),j(this)}else M(this,a)}:function(a){M(this,a)};var N;!z&&C&&a.features.implementsDomRange?(N=function(a){var b=!1;return a.anchorNode&&(b=1==r.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)),b},H.isBackwards=function(){return N(this)}):N=H.isBackwards=function(){return!1},H.toString=function(){for(var a=[],b=0,c=this.rangeCount;c>b;++b)a[b]=""+this._ranges[b];return a.join("")},H.collapse=function(b,c){n(this,b);var d=a.createRange(r.getDocument(b));d.collapseToPoint(b,c),this.removeAllRanges(),this.addRange(d),this.isCollapsed=!0},H.collapseToStart=function(){if(!this.rangeCount)throw new v("INVALID_STATE_ERR");var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)},H.collapseToEnd=function(){if(!this.rangeCount)throw new v("INVALID_STATE_ERR");var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)},H.selectAllChildren=function(b){n(this,b);var c=a.createRange(r.getDocument(b));c.selectNodeContents(b),this.removeAllRanges(),this.addRange(c)},H.deleteFromDocument=function(){if(I&&y&&"Control"==this.docSelection.type){for(var a,b=this.docSelection.createRange();b.length;)a=b.item(0),b.remove(a),a.parentNode.removeChild(a);this.refresh()}else if(this.rangeCount){b=this.getAllRanges(),this.removeAllRanges(),a=0;for(var c=b.length;c>a;++a)b[a].deleteContents();this.addRange(b[c-1])}},H.getAllRanges=function(){return this._ranges.slice(0)},H.setSingleRange=function(a){this.setRanges([a])},H.containsNode=function(a,b){for(var c=0,d=this._ranges.length;d>c;++c)if(this._ranges[c].containsNode(a,b))return!0;return!1},H.toHtml=function(){var a="";if(this.rangeCount){for(var a=t.getRangeDocument(this._ranges[0]).createElement("div"),b=0,c=this._ranges.length;c>b;++b)a.appendChild(this._ranges[b].cloneContents());a=a.innerHTML}return a},H.getName=function(){return"WrappedSelection"},H.inspect=function(){return o(this)},H.detach=function(){this.win=this.anchorNode=this.focusNode=this.win._rangySelection=null},l.inspect=o,a.Selection=l,a.selectionPrototype=H,a.addCreateMissingNativeApiListener(function(b){"undefined"==typeof b.getSelection&&(b.getSelection=function(){return a.getSelection(this)}),b=null})});var Base=function(){};Base.extend=function(a,b){var c=Base.prototype.extend;Base._prototyping=!0;var d=new this;c.call(d,a),d.base=function(){},delete Base._prototyping;var e=d.constructor,f=d.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==f)this._constructing=!0,e.apply(this,arguments),delete this._constructing;else if(null!=arguments[0])return(arguments[0].extend||c).call(arguments[0],d)};return f.ancestor=this,f.extend=this.extend,f.forEach=this.forEach,f.implement=this.implement,f.prototype=d,f.toString=this.toString,f.valueOf=function(a){return"object"==a?f:e.valueOf()},c.call(f,b),"function"==typeof f.init&&f.init(),f},Base.prototype={extend:function(a,b){if(1<arguments.length){var c=this[a];if(c&&"function"==typeof b&&(!c.valueOf||c.valueOf()!=b.valueOf())&&/\bbase\b/.test(b)){var d=b.valueOf(),b=function(){var a=this.base||Base.prototype.base;this.base=c;var b=d.apply(this,arguments);return this.base=a,b};b.valueOf=function(a){return"object"==a?b:d},b.toString=Base.toString}this[a]=b}else if(a){var e=Base.prototype.extend;!Base._prototyping&&"function"!=typeof this&&(e=this.extend||e);for(var f={toSource:null},g=["constructor","toString","valueOf"],h=Base._prototyping?0:1;i=g[h++];)a[i]!=f[i]&&e.call(this,i,a[i]);for(var i in a)f[i]||e.call(this,i,a[i])}return this}},Base=Base.extend({constructor:function(a){this.extend(a)}},{ancestor:Object,version:"1.1",forEach:function(a,b,c){for(var d in a)void 0===this.prototype[d]&&b.call(c,a[d],d,a)},implement:function(){for(var a=0;a<arguments.length;a++)"function"==typeof arguments[a]?arguments[a](this.prototype):this.prototype.extend(arguments[a]);return this},toString:function(){return""+this.valueOf()}}),wysihtml5.browser=function(){var a=navigator.userAgent,b=document.createElement("div"),c=-1!==a.indexOf("MSIE")&&-1===a.indexOf("Opera"),d=-1!==a.indexOf("Gecko")&&-1===a.indexOf("KHTML"),e=-1!==a.indexOf("AppleWebKit/"),f=-1!==a.indexOf("Chrome/"),g=-1!==a.indexOf("Opera/");return{USER_AGENT:a,supported:function(){var a=this.USER_AGENT.toLowerCase(),c="contentEditable"in b,d=document.execCommand&&document.queryCommandSupported&&document.queryCommandState,e=document.querySelector&&document.querySelectorAll,a=this.isIos()&&5>(/ipad|iphone|ipod/.test(a)&&a.match(/ os (\d+).+? like mac os x/)||[,0])[1]||-1!==a.indexOf("opera mobi")||-1!==a.indexOf("hpwos/");return c&&d&&e&&!a},isTouchDevice:function(){return this.supportsEvent("touchmove")},isIos:function(){var a=this.USER_AGENT.toLowerCase();return-1!==a.indexOf("webkit")&&-1!==a.indexOf("mobile")},supportsSandboxedIframes:function(){return c},throwsMixedContentWarningWhenIframeSrcIsEmpty:function(){return!("querySelector"in document)},displaysCaretInEmptyContentEditableCorrectly:function(){return!d},hasCurrentStyleProperty:function(){return"currentStyle"in b},insertsLineBreaksOnReturn:function(){return d},supportsPlaceholderAttributeOn:function(a){return"placeholder"in a},supportsEvent:function(a){var c;return(c="on"+a in b)||(b.setAttribute("on"+a,"return;"),c="function"==typeof b["on"+a]),c},supportsEventsInIframeCorrectly:function(){return!g},firesOnDropOnlyWhenOnDragOverIsCancelled:function(){return e||d},supportsDataTransfer:function(){try{return e&&(window.Clipboard||window.DataTransfer).prototype.getData}catch(a){return!1}},supportsHTML5Tags:function(a){return a=a.createElement("div"),a.innerHTML="<article>foo</article>","<article>foo</article>"===a.innerHTML.toLowerCase()},supportsCommand:function(){var a={formatBlock:c,insertUnorderedList:c||g||e,insertOrderedList:c||g||e},b={insertHTML:d};return function(c,d){if(!a[d]){try{return c.queryCommandSupported(d)}catch(e){}try{return c.queryCommandEnabled(d)}catch(f){return!!b[d]}}return!1}}(),doesAutoLinkingInContentEditable:function(){return c},canDisableAutoLinking:function(){return this.supportsCommand(document,"AutoUrlDetect")},clearsContentEditableCorrectly:function(){return d||g||e},supportsGetAttributeCorrectly:function(){return"1"!=document.createElement("td").getAttribute("rowspan")},canSelectImagesInContentEditable:function(){return d||c||g},clearsListsInContentEditableCorrectly:function(){return d||c||e},autoScrollsToCaret:function(){return!e},autoClosesUnclosedTags:function(){var a,c=b.cloneNode(!1);return c.innerHTML="<p><div></div>",c=c.innerHTML.toLowerCase(),a="<p></p><div></div>"===c||"<p><div></div></p>"===c,this.autoClosesUnclosedTags=function(){return a},a},supportsNativeGetElementsByClassName:function(){return-1!==(""+document.getElementsByClassName).indexOf("[native code]")},supportsSelectionModify:function(){return"getSelection"in window&&"modify"in window.getSelection()},supportsClassList:function(){return"classList"in b},needsSpaceAfterLineBreak:function(){return g},supportsSpeechApiOn:function(b){return 11<=(a.match(/Chrome\/(\d+)/)||[,0])[1]&&("onwebkitspeechchange"in b||"speech"in b)},crashesWhenDefineProperty:function(a){return c&&("XMLHttpRequest"===a||"XDomainRequest"===a)},doesAsyncFocus:function(){return c},hasProblemsSettingCaretAfterImg:function(){return c},hasUndoInContextMenu:function(){return d||f||g}}}(),wysihtml5.lang.array=function(a){return{contains:function(b){if(a.indexOf)return-1!==a.indexOf(b);for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1},without:function(b){for(var b=wysihtml5.lang.array(b),c=[],d=0,e=a.length;e>d;d++)b.contains(a[d])||c.push(a[d]);return c},get:function(){for(var b=0,c=a.length,d=[];c>b;b++)d.push(a[b]);return d}}},wysihtml5.lang.Dispatcher=Base.extend({observe:function(a,b){return this.events=this.events||{},this.events[a]=this.events[a]||[],this.events[a].push(b),this},on:function(){return this.observe.apply(this,wysihtml5.lang.array(arguments).get())},fire:function(a,b){this.events=this.events||{};for(var c=this.events[a]||[],d=0;d<c.length;d++)c[d].call(this,b);return this},stopObserving:function(a,b){this.events=this.events||{};var c,d,e=0;if(a){for(c=this.events[a]||[],d=[];e<c.length;e++)c[e]!==b&&b&&d.push(c[e]);this.events[a]=d}else this.events={};return this}}),wysihtml5.lang.object=function(a){return{merge:function(b){for(var c in b)a[c]=b[c];return this},get:function(){return a},clone:function(){var b,c={};for(b in a)c[b]=a[b];return c},isArray:function(){return"[object Array]"===Object.prototype.toString.call(a)}}},function(){var a=/^\s+/,b=/\s+$/;wysihtml5.lang.string=function(c){return c=""+c,{trim:function(){return c.replace(a,"").replace(b,"")},interpolate:function(a){for(var b in a)c=this.replace("#{"+b+"}").by(a[b]);return c},replace:function(a){return{by:function(b){return c.split(a).join(b)}}}}}}(),function(a){function b(a){return a.replace(e,function(a,b){var c=(b.match(f)||[])[1]||"",d=h[c],b=b.replace(f,"");b.split(d).length>b.split(c).length&&(b+=c,c="");var e=d=b;return b.length>g&&(e=e.substr(0,g)+"..."),"www."===d.substr(0,4)&&(d="http://"+d),'<a href="'+d+'">'+e+"</a>"+c})}function c(f){if(!d.contains(f.nodeName)){if(f.nodeType!==a.TEXT_NODE||!f.data.match(e)){for(h=a.lang.array(f.childNodes).get(),g=h.length,i=0;g>i;i++)c(h[i]);return f}var g,h=f.parentNode;g=h.ownerDocument;var i=g._wysihtml5_tempElement;for(i||(i=g._wysihtml5_tempElement=g.createElement("div")),g=i,g.innerHTML="<span></span>"+b(f.data),g.removeChild(g.firstChild);g.firstChild;)h.insertBefore(g.firstChild,f);h.removeChild(f)}}var d=a.lang.array("CODE PRE A SCRIPT HEAD TITLE STYLE".split(" ")),e=/((https?:\/\/|www\.)[^\s<]{3,})/gi,f=/([^\w\/\-](,?))$/i,g=100,h={")":"(","]":"[","}":"{"};a.dom.autoLink=function(a){var b;a:{b=a;for(var e;b.parentNode;){if(b=b.parentNode,e=b.nodeName,d.contains(e)){b=!0;break a}if("body"===e)break}b=!1}return b?a:(a===a.ownerDocument.documentElement&&(a=a.ownerDocument.body),c(a))},a.dom.autoLink.URL_REG_EXP=e}(wysihtml5),function(a){var b=a.browser.supportsClassList(),c=a.dom;c.addClass=function(a,d){return b?a.classList.add(d):(c.hasClass(a,d)||(a.className+=" "+d),void 0)},c.removeClass=function(a,c){return b?a.classList.remove(c):(a.className=a.className.replace(RegExp("(^|\\s+)"+c+"(\\s+|$)")," "),void 0)},c.hasClass=function(a,c){if(b)return a.classList.contains(c);var d=a.className;return 0<d.length&&(d==c||RegExp("(^|\\s)"+c+"(\\s|$)").test(d))}}(wysihtml5),wysihtml5.dom.contains=function(){var a=document.documentElement;return a.contains?function(a,b){return b.nodeType!==wysihtml5.ELEMENT_NODE&&(b=b.parentNode),a!==b&&a.contains(b)}:a.compareDocumentPosition?function(a,b){return!!(16&a.compareDocumentPosition(b))}:void 0}(),wysihtml5.dom.convertToList=function(){function a(a,b){var c=a.createElement("li");return b.appendChild(c),c}return function(b,c){if("UL"===b.nodeName||"OL"===b.nodeName||"MENU"===b.nodeName)return b;var d,e,f,g,h,i=b.ownerDocument,j=i.createElement(c),k=b.querySelectorAll("br"),l=k.length;for(h=0;l>h;h++)for(d=k[h];(e=d.parentNode)&&e!==b&&e.lastChild===d;){if("block"===wysihtml5.dom.getStyle("display").from(e)){e.removeChild(d);break}wysihtml5.dom.insert(d).after(d.parentNode)}for(k=wysihtml5.lang.array(b.childNodes).get(),l=k.length,h=0;l>h;h++)g=g||a(i,j),d=k[h],e="block"===wysihtml5.dom.getStyle("display").from(d),f="BR"===d.nodeName,e?(g=g.firstChild?a(i,j):g,g.appendChild(d),g=null):f?g=g.firstChild?null:g:g.appendChild(d);return b.parentNode.replaceChild(j,b),j}}(),wysihtml5.dom.copyAttributes=function(a){return{from:function(b){return{to:function(c){for(var d,e=0,f=a.length;f>e;e++)d=a[e],"undefined"!=typeof b[d]&&""!==b[d]&&(c[d]=b[d]);return{andTo:arguments.callee}}}}}},function(a){var b=["-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing"],c=function(c){var d;a:for(var e=0,f=b.length;f>e;e++)if("border-box"===a.getStyle(b[e]).from(c)){d=b[e];break a}return d?parseInt(a.getStyle("width").from(c),10)<c.offsetWidth:!1};a.copyStyles=function(d){return{from:function(e){c(e)&&(d=wysihtml5.lang.array(d).without(b));for(var f,g="",h=d.length,i=0;h>i;i++)f=d[i],g+=f+":"+a.getStyle(f).from(e)+";";return{to:function(b){return a.setStyles(g).on(b),{andTo:arguments.callee}}}}}}}(wysihtml5.dom),function(a){a.dom.delegate=function(b,c,d,e){return a.dom.observe(b,d,function(d){for(var f=d.target,g=a.lang.array(b.querySelectorAll(c));f&&f!==b;){if(g.contains(f)){e.call(f,d);break}f=f.parentNode}})}}(wysihtml5),wysihtml5.dom.getAsDom=function(){var a="abbr article aside audio bdi canvas command datalist details figcaption figure footer header hgroup keygen mark meter nav output progress rp rt ruby svg section source summary time track video wbr".split(" ");return function(b,c){var d,c=c||document;if("object"==typeof b&&b.nodeType)d=c.createElement("div"),d.appendChild(b);else if(wysihtml5.browser.supportsHTML5Tags(c))d=c.createElement("div"),d.innerHTML=b;else{if(d=c,!d._wysihtml5_supportsHTML5Tags){for(var e=0,f=a.length;f>e;e++)d.createElement(a[e]);d._wysihtml5_supportsHTML5Tags=!0}d=c,e=d.createElement("div"),e.style.display="none",d.body.appendChild(e);try{e.innerHTML=b}catch(g){}d.body.removeChild(e),d=e}return d}}(),wysihtml5.dom.getParentElement=function(){function a(a,b){return b&&b.length?"string"==typeof b?a===b:wysihtml5.lang.array(b).contains(a):!0}return function(b,c,d){if(d=d||50,c.className||c.classRegExp){a:{for(var e=c.nodeName,f=c.className,c=c.classRegExp;d--&&b&&"BODY"!==b.nodeName;){var g;if((g=b.nodeType===wysihtml5.ELEMENT_NODE)&&(g=a(b.nodeName,e))){g=f;var h=(b.className||"").match(c)||[];g=g?h[h.length-1]===g:!!h.length}if(g)break a;b=b.parentNode}b=null}return b}a:{for(e=c.nodeName,f=d;f--&&b&&"BODY"!==b.nodeName;){if(a(b.nodeName,e))break a;b=b.parentNode}b=null}return b}}(),wysihtml5.dom.getStyle=function(){function a(a){return a.replace(c,function(a){return a.charAt(1).toUpperCase()})}var b={"float":"styleFloat"in document.createElement("div").style?"styleFloat":"cssFloat"},c=/\-[a-z]/g;return function(c){return{from:function(d){if(d.nodeType===wysihtml5.ELEMENT_NODE){var e=d.ownerDocument,f=b[c]||a(c),g=d.style,h=d.currentStyle,i=g[f];if(i)return i;if(h)try{return h[f]}catch(j){}var k,f=e.defaultView||e.parentWindow,e=("height"===c||"width"===c)&&"TEXTAREA"===d.nodeName;if(f.getComputedStyle)return e&&(k=g.overflow,g.overflow="hidden"),d=f.getComputedStyle(d,null).getPropertyValue(c),e&&(g.overflow=k||""),d}}}}}(),wysihtml5.dom.hasElementWithTagName=function(){var a={},b=1;return function(c,d){var e=(c._wysihtml5_identifier||(c._wysihtml5_identifier=b++))+":"+d,f=a[e];return f||(f=a[e]=c.getElementsByTagName(d)),0<f.length}}(),function(a){var b={},c=1;a.dom.hasElementWithClassName=function(d,e){if(!a.browser.supportsNativeGetElementsByClassName())return!!d.querySelector("."+e);var f=(d._wysihtml5_identifier||(d._wysihtml5_identifier=c++))+":"+e,g=b[f];return g||(g=b[f]=d.getElementsByClassName(e)),0<g.length}}(wysihtml5),wysihtml5.dom.insert=function(a){return{after:function(b){b.parentNode.insertBefore(a,b.nextSibling)},before:function(b){b.parentNode.insertBefore(a,b)},into:function(b){b.appendChild(a)}}},wysihtml5.dom.insertCSS=function(a){return a=a.join("\n"),{into:function(b){var c=b.head||b.getElementsByTagName("head")[0],d=b.createElement("style");d.type="text/css",d.styleSheet?d.styleSheet.cssText=a:d.appendChild(b.createTextNode(a)),c&&c.appendChild(d)}}},wysihtml5.dom.observe=function(a,b,c){for(var d,e,b="string"==typeof b?[b]:b,f=0,g=b.length;g>f;f++)e=b[f],a.addEventListener?a.addEventListener(e,c,!1):(d=function(b){"target"in b||(b.target=b.srcElement),b.preventDefault=b.preventDefault||function(){this.returnValue=!1},b.stopPropagation=b.stopPropagation||function(){this.cancelBubble=!0},c.call(a,b)},a.attachEvent("on"+e,d));return{stop:function(){for(var e,f=0,g=b.length;g>f;f++)e=b[f],a.removeEventListener?a.removeEventListener(e,c,!1):a.detachEvent("on"+e,d)}}},wysihtml5.dom.parse=function(){function a(b,e){var f,g=b.childNodes,h=g.length;f=c[b.nodeType];var i=0;if(f=f&&f(b),!f)return null;for(i=0;h>i;i++)(newChild=a(g[i],e))&&f.appendChild(newChild);return e&&1>=f.childNodes.length&&f.nodeName.toLowerCase()===d&&!f.attributes.length?f.firstChild:f}function b(a,b){var c,b=b.toLowerCase();if((c="IMG"==a.nodeName)&&(c="src"==b)){var d;try{d=a.complete&&!a.mozMatchesSelector(":-moz-broken")}catch(e){a.complete&&"complete"===a.readyState&&(d=!0)}c=!0===d}return c?a.src:h&&"outerHTML"in a?-1!=a.outerHTML.toLowerCase().indexOf(" "+b+"=")?a.getAttribute(b):null:a.getAttribute(b)}var c={1:function(a){var c,f,h=g.tags;if(f=a.nodeName.toLowerCase(),c=a.scopeName,a._wysihtml5)return null;if(a._wysihtml5=1,"wysihtml5-temp"===a.className)return null;if(c&&"HTML"!=c&&(f=c+":"+f),"outerHTML"in a&&!wysihtml5.browser.autoClosesUnclosedTags()&&"P"===a.nodeName&&"</p>"!==a.outerHTML.slice(-4).toLowerCase()&&(f="div"),f in h){if(c=h[f],!c||c.remove)return null;c="string"==typeof c?{rename_tag:c}:c}else{if(!a.firstChild)return null;c={rename_tag:d}}f=a.ownerDocument.createElement(c.rename_tag||f);var h={},k=c.set_class,l=c.add_class,m=c.set_attributes,n=c.check_attributes,o=g.classes,p=0,q=[];c=[];var r,s=[],t=[];if(m&&(h=wysihtml5.lang.object(m).clone()),n)for(r in n)(m=i[n[r]])&&(m=m(b(a,r)),"string"==typeof m&&(h[r]=m));if(k&&q.push(k),l)for(r in l)(m=j[l[r]])&&(k=m(b(a,r)),"string"==typeof k&&q.push(k));for(o["_wysihtml5-temp-placeholder"]=1,(t=a.getAttribute("class"))&&(q=q.concat(t.split(e))),l=q.length;l>p;p++)a=q[p],o[a]&&c.push(a);for(o=c.length;o--;)a=c[o],wysihtml5.lang.array(s).contains(a)||s.unshift(a);s.length&&(h["class"]=s.join(" "));for(r in h)try{f.setAttribute(r,h[r])}catch(u){}return h.src&&("undefined"!=typeof h.width&&f.setAttribute("width",h.width),"undefined"!=typeof h.height&&f.setAttribute("height",h.height)),f},3:function(a){return a.ownerDocument.createTextNode(a.data)}},d="span",e=/\s+/,f={tags:{},classes:{}},g={},h=!wysihtml5.browser.supportsGetAttributeCorrectly(),i={url:function(){var a=/^https?:\/\//i;return function(b){return b&&b.match(a)?b.replace(a,function(a){return a.toLowerCase()}):null}}(),alt:function(){var a=/[^ a-z0-9_\-]/gi;return function(b){return b?b.replace(a,""):""}}(),numbers:function(){var a=/\D/g;return function(b){return(b=(b||"").replace(a,""))||null}}()},j={align_img:function(){var a={left:"wysiwyg-float-left",right:"wysiwyg-float-right"};return function(b){return a[(""+b).toLowerCase()]}}(),align_text:function(){var a={left:"wysiwyg-text-align-left",right:"wysiwyg-text-align-right",center:"wysiwyg-text-align-center",justify:"wysiwyg-text-align-justify"};return function(b){return a[(""+b).toLowerCase()]}}(),clear_br:function(){var a={left:"wysiwyg-clear-left",right:"wysiwyg-clear-right",both:"wysiwyg-clear-both",all:"wysiwyg-clear-both"};return function(b){return a[(""+b).toLowerCase()]}}(),size_font:function(){var a={1:"wysiwyg-font-size-xx-small",2:"wysiwyg-font-size-small",3:"wysiwyg-font-size-medium",4:"wysiwyg-font-size-large",5:"wysiwyg-font-size-x-large",6:"wysiwyg-font-size-xx-large",7:"wysiwyg-font-size-xx-large","-":"wysiwyg-font-size-smaller","+":"wysiwyg-font-size-larger"};return function(b){return a[(""+b).charAt(0)]}}()};return function(b,c,d,e){wysihtml5.lang.object(g).merge(f).merge(c).get();for(var d=d||b.ownerDocument||document,c=d.createDocumentFragment(),h="string"==typeof b,b=h?wysihtml5.dom.getAsDom(b,d):b;b.firstChild;)d=b.firstChild,b.removeChild(d),(d=a(d,e))&&c.appendChild(d);return b.innerHTML="",b.appendChild(c),h?wysihtml5.quirks.getCorrectInnerHTML(b):b}}(),wysihtml5.dom.removeEmptyTextNodes=function(a){for(var b=wysihtml5.lang.array(a.childNodes).get(),c=b.length,d=0;c>d;d++)a=b[d],a.nodeType===wysihtml5.TEXT_NODE&&""===a.data&&a.parentNode.removeChild(a)},wysihtml5.dom.renameElement=function(a,b){for(var c,d=a.ownerDocument.createElement(b);c=a.firstChild;)d.appendChild(c);return wysihtml5.dom.copyAttributes(["align","className"]).from(a).to(d),a.parentNode.replaceChild(d,a),d},wysihtml5.dom.replaceWithChildNodes=function(a){if(a.parentNode)if(a.firstChild){for(var b=a.ownerDocument.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);a.parentNode.replaceChild(b,a)}else a.parentNode.removeChild(a)},function(a){function b(a){var b=a.ownerDocument.createElement("br");a.appendChild(b)}a.resolveList=function(c){if("MENU"===c.nodeName||"UL"===c.nodeName||"OL"===c.nodeName){var d,e,f,g=c.ownerDocument.createDocumentFragment(),h=c.previousElementSibling||c.previousSibling;for(h&&"block"!==a.getStyle("display").from(h)&&b(g);f=c.firstChild;){for(d=f.lastChild;h=f.firstChild;)e=(e=h===d)&&"block"!==a.getStyle("display").from(h)&&"BR"!==h.nodeName,g.appendChild(h),e&&b(g);f.parentNode.removeChild(f)}c.parentNode.replaceChild(g,c)}}}(wysihtml5.dom),function(a){var b=document,c="parent top opener frameElement frames localStorage globalStorage sessionStorage indexedDB".split(" "),d="open close openDialog showModalDialog alert confirm prompt openDatabase postMessage XMLHttpRequest XDomainRequest".split(" "),e=["referrer","write","open","close"];a.dom.Sandbox=Base.extend({constructor:function(b,c){this.callback=b||a.EMPTY_FUNCTION,this.config=a.lang.object({}).merge(c).get(),this.iframe=this._createIframe()},insertInto:function(a){"string"==typeof a&&(a=b.getElementById(a)),a.appendChild(this.iframe)},getIframe:function(){return this.iframe},getWindow:function(){this._readyError()},getDocument:function(){this._readyError()},destroy:function(){var a=this.getIframe();a.parentNode.removeChild(a)},_readyError:function(){throw Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet")},_createIframe:function(){var c=this,d=b.createElement("iframe");return d.className="wysihtml5-sandbox",a.dom.setAttributes({security:"restricted",allowtransparency:"true",frameborder:0,width:0,height:0,marginwidth:0,marginheight:0}).on(d),a.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty()&&(d.src="javascript:'<html></html>'"),d.onload=function(){d.onreadystatechange=d.onload=null,c._onLoadIframe(d)},d.onreadystatechange=function(){/loaded|complete/.test(d.readyState)&&(d.onreadystatechange=d.onload=null,c._onLoadIframe(d))},d},_onLoadIframe:function(f){if(a.dom.contains(b.documentElement,f)){var g=this,h=f.contentWindow,i=f.contentWindow.document,j=this._getHtml({charset:b.characterSet||b.charset||"utf-8",stylesheets:this.config.stylesheets});if(i.open("text/html","replace"),i.write(j),i.close(),this.getWindow=function(){return f.contentWindow},this.getDocument=function(){return f.contentWindow.document},h.onerror=function(a,b,c){throw Error("wysihtml5.Sandbox: "+a,b,c)},!a.browser.supportsSandboxedIframes()){var k,j=0;for(k=c.length;k>j;j++)this._unset(h,c[j]);for(j=0,k=d.length;k>j;j++)this._unset(h,d[j],a.EMPTY_FUNCTION);for(j=0,k=e.length;k>j;j++)this._unset(i,e[j]);this._unset(i,"cookie","",!0)}this.loaded=!0,setTimeout(function(){g.callback(g)},0)}},_getHtml:function(b){var c,d=b.stylesheets,e="",f=0;if(d="string"==typeof d?[d]:d)for(c=d.length;c>f;f++)e+='<link rel="stylesheet" href="'+d[f]+'">';return b.stylesheets=e,a.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(b)},_unset:function(b,c,d,e){try{b[c]=d}catch(f){}try{b.__defineGetter__(c,function(){return d})}catch(g){}if(e)try{b.__defineSetter__(c,function(){})}catch(h){}if(!a.browser.crashesWhenDefineProperty(c))try{var i={get:function(){return d}};e&&(i.set=function(){}),Object.defineProperty(b,c,i)}catch(j){}}})}(wysihtml5),function(){var a={className:"class"};wysihtml5.dom.setAttributes=function(b){return{on:function(c){for(var d in b)c.setAttribute(a[d]||d,b[d])}}}}(),wysihtml5.dom.setStyles=function(a){return{on:function(b){if(b=b.style,"string"==typeof a)b.cssText+=";"+a;else for(var c in a)"float"===c?(b.cssFloat=a[c],b.styleFloat=a[c]):b[c]=a[c]}}},function(a){a.simulatePlaceholder=function(b,c,d){var e=function(){c.hasPlaceholderSet()&&c.clear(),a.removeClass(c.element,"placeholder")},f=function(){c.isEmpty()&&(c.setValue(d),a.addClass(c.element,"placeholder"))};b.observe("set_placeholder",f).observe("unset_placeholder",e).observe("focus:composer",e).observe("paste:composer",e).observe("blur:composer",f),f()}}(wysihtml5.dom),function(a){var b=document.documentElement;"textContent"in b?(a.setTextContent=function(a,b){a.textContent=b},a.getTextContent=function(a){return a.textContent}):"innerText"in b?(a.setTextContent=function(a,b){a.innerText=b},a.getTextContent=function(a){return a.innerText}):(a.setTextContent=function(a,b){a.nodeValue=b},a.getTextContent=function(a){return a.nodeValue})}(wysihtml5.dom),wysihtml5.quirks.cleanPastedHTML=function(){var a={"a u":wysihtml5.dom.replaceWithChildNodes};return function(b,c,d){var e,f,g,c=c||a,d=d||b.ownerDocument||document,h="string"==typeof b,i=0,b=h?wysihtml5.dom.getAsDom(b,d):b;for(g in c)for(e=b.querySelectorAll(g),d=c[g],f=e.length;f>i;i++)d(e[i]);return h?b.innerHTML:b}}(),function(a){var b=a.dom;a.quirks.ensureProperClearing=function(){var a=function(){var a=this;setTimeout(function(){var b=a.innerHTML.toLowerCase();("<p>&nbsp;</p>"==b||"<p>&nbsp;</p><p>&nbsp;</p>"==b)&&(a.innerHTML="")
},0)};return function(c){b.observe(c.element,["cut","keydown"],a)}}(),a.quirks.ensureProperClearingOfLists=function(){var c=["OL","UL","MENU"];return function(d){b.observe(d.element,"keydown",function(e){if(e.keyCode===a.BACKSPACE_KEY){var f=d.selection.getSelectedNode(),e=d.element;e.firstChild&&a.lang.array(c).contains(e.firstChild.nodeName)&&(f=b.getParentElement(f,{nodeName:c}))&&f==e.firstChild&&1>=f.childNodes.length&&(f.firstChild?""===f.firstChild.innerHTML:1)&&f.parentNode.removeChild(f)}})}}()}(wysihtml5),function(a){a.quirks.getCorrectInnerHTML=function(b){var c=b.innerHTML;if(-1===c.indexOf("%7E"))return c;var d,e,f,g,b=b.querySelectorAll("[href*='~'], [src*='~']");for(g=0,f=b.length;f>g;g++)d=b[g].href||b[g].src,e=a.lang.string(d).replace("~").by("%7E"),c=a.lang.string(c).replace(e).by(d);return c}}(wysihtml5),function(a){var b=a.dom,c="LI P H1 H2 H3 H4 H5 H6".split(" "),d=["UL","OL","MENU"];a.quirks.insertLineBreakOnReturn=function(e){function f(c){if(c=b.getParentElement(c,{nodeName:["P","DIV"]},2)){var d=document.createTextNode(a.INVISIBLE_SPACE);b.insert(d).before(c),b.replaceWithChildNodes(c),e.selection.selectNode(d)}}b.observe(e.element.ownerDocument,"keydown",function(g){var h=g.keyCode;if(!(g.shiftKey||h!==a.ENTER_KEY&&h!==a.BACKSPACE_KEY)){var i=e.selection.getSelectedNode();(i=b.getParentElement(i,{nodeName:c},4))?"LI"!==i.nodeName||h!==a.ENTER_KEY&&h!==a.BACKSPACE_KEY?i.nodeName.match(/H[1-6]/)&&h===a.ENTER_KEY&&setTimeout(function(){f(e.selection.getSelectedNode())},0):setTimeout(function(){var a,c=e.selection.getSelectedNode();c&&((a=b.getParentElement(c,{nodeName:d},2))||f(c))},0):h===a.ENTER_KEY&&!a.browser.insertsLineBreaksOnReturn()&&(e.commands.exec("insertLineBreak"),g.preventDefault())}})}}(wysihtml5),function(a){a.quirks.redraw=function(b){a.dom.addClass(b,"wysihtml5-quirks-redraw"),a.dom.removeClass(b,"wysihtml5-quirks-redraw");try{var c=b.ownerDocument;c.execCommand("italic",!1,null),c.execCommand("italic",!1,null)}catch(d){}}}(wysihtml5),function(a){var b=a.dom;a.Selection=Base.extend({constructor:function(a){window.rangy.init(),this.editor=a,this.composer=a.composer,this.doc=this.composer.doc},getBookmark:function(){var a=this.getRange();return a&&a.cloneRange()},setBookmark:function(a){a&&this.setSelection(a)},setBefore:function(a){var b=rangy.createRange(this.doc);return b.setStartBefore(a),b.setEndBefore(a),this.setSelection(b)},setAfter:function(a){var b=rangy.createRange(this.doc);return b.setStartAfter(a),b.setEndAfter(a),this.setSelection(b)},selectNode:function(c){var d=rangy.createRange(this.doc),e=c.nodeType===a.ELEMENT_NODE,f="canHaveHTML"in c?c.canHaveHTML:"IMG"!==c.nodeName,g=e?c.innerHTML:c.data,g=""===g||g===a.INVISIBLE_SPACE,h=b.getStyle("display").from(c),h="block"===h||"list-item"===h;if(g&&e&&f)try{c.innerHTML=a.INVISIBLE_SPACE}catch(i){}f?d.selectNodeContents(c):d.selectNode(c),f&&g&&e?d.collapse(h):f&&g&&(d.setStartAfter(c),d.setEndAfter(c)),this.setSelection(d)},getSelectedNode:function(a){return a&&this.doc.selection&&"Control"===this.doc.selection.type&&(a=this.doc.selection.createRange())&&a.length?a.item(0):(a=this.getSelection(this.doc),a.focusNode===a.anchorNode?a.focusNode:(a=this.getRange(this.doc))?a.commonAncestorContainer:this.doc.body)},executeAndRestore:function(b,c){var d=this.doc.body,e=c&&d.scrollTop,f=c&&d.scrollLeft,g='<span class="_wysihtml5-temp-placeholder">'+a.INVISIBLE_SPACE+"</span>",h=this.getRange(this.doc);if(h){g=h.createContextualFragment(g),h.insertNode(g);try{b(h.startContainer,h.endContainer)}catch(i){setTimeout(function(){throw i},0)}(caretPlaceholder=this.doc.querySelector("._wysihtml5-temp-placeholder"))?(h=rangy.createRange(this.doc),h.selectNode(caretPlaceholder),h.deleteContents(),this.setSelection(h)):d.focus(),c&&(d.scrollTop=e,d.scrollLeft=f);try{caretPlaceholder.parentNode.removeChild(caretPlaceholder)}catch(j){}}else b(d,d)},executeAndRestoreSimple:function(a){var b,c,d,e=this.getRange(),f=this.doc.body;if(e){b=e.getNodes([3]),f=b[0]||e.startContainer,d=b[b.length-1]||e.endContainer,b=f===e.startContainer?e.startOffset:0,c=d===e.endContainer?e.endOffset:d.length;try{a(e.startContainer,e.endContainer)}catch(g){setTimeout(function(){throw g},0)}a=rangy.createRange(this.doc);try{a.setStart(f,b)}catch(h){}try{a.setEnd(d,c)}catch(i){}try{this.setSelection(a)}catch(j){}}else a(f,f)},insertHTML:function(a){var a=rangy.createRange(this.doc).createContextualFragment(a),b=a.lastChild;this.insertNode(a),b&&this.setAfter(b)},insertNode:function(a){var b=this.getRange();b&&b.insertNode(a)},surround:function(a){var b=this.getRange();if(b)try{b.surroundContents(a),this.selectNode(a)}catch(c){a.appendChild(b.extractContents()),b.insertNode(a)}},scrollIntoView:function(){var b,c=this.doc,d=c.documentElement.scrollHeight>c.documentElement.offsetHeight;if((b=c._wysihtml5ScrollIntoViewElement)||(b=c.createElement("span"),b.innerHTML=a.INVISIBLE_SPACE),b=c._wysihtml5ScrollIntoViewElement=b,d){this.insertNode(b);var d=b,e=0;if(d.parentNode)do e+=d.offsetTop||0,d=d.offsetParent;while(d);d=e,b.parentNode.removeChild(b),d>c.body.scrollTop&&(c.body.scrollTop=d)}},selectLine:function(){a.browser.supportsSelectionModify()?this._selectLine_W3C():this.doc.selection&&this._selectLine_MSIE()},_selectLine_W3C:function(){var a=this.doc.defaultView.getSelection();a.modify("extend","left","lineboundary"),a.modify("extend","right","lineboundary")},_selectLine_MSIE:function(){var a,b=this.doc.selection.createRange(),c=b.boundingTop,d=this.doc.body.scrollWidth;if(b.moveToPoint){for(0===c&&(a=this.doc.createElement("span"),this.insertNode(a),c=a.offsetTop,a.parentNode.removeChild(a)),c+=1,a=-10;d>a;a+=2)try{b.moveToPoint(a,c);break}catch(e){}for(a=this.doc.selection.createRange();d>=0;d--)try{a.moveToPoint(d,c);break}catch(f){}b.setEndPoint("EndToEnd",a),b.select()}},getText:function(){var a=this.getSelection();return a?a.toString():""},getNodes:function(a,b){var c=this.getRange();return c?c.getNodes([a],b):[]},getRange:function(){var a=this.getSelection();return a&&a.rangeCount&&a.getRangeAt(0)},getSelection:function(){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow)},setSelection:function(a){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow).setSingleRange(a)}})}(wysihtml5),function(a,b){function c(a,c){return b.dom.isCharacterDataNode(a)?0==c?!!a.previousSibling:c==a.length?!!a.nextSibling:!0:c>0&&c<a.childNodes.length}function d(a,c,e){var f;if(b.dom.isCharacterDataNode(c)&&(0==e?(e=b.dom.getNodeIndex(c),c=c.parentNode):e==c.length?(e=b.dom.getNodeIndex(c)+1,c=c.parentNode):f=b.dom.splitDataNode(c,e)),!f){f=c.cloneNode(!1),f.id&&f.removeAttribute("id");for(var g;g=c.childNodes[e];)f.appendChild(g);b.dom.insertAfter(f,c)}return c==a?f:d(a,f.parentNode,b.dom.getNodeIndex(f))}function e(b){this.firstTextNode=(this.isElementMerge=b.nodeType==a.ELEMENT_NODE)?b.lastChild:b,this.textNodes=[this.firstTextNode]}function f(a,b,c,d){this.tagNames=a||[g],this.cssClass=b||"",this.similarClassRegExp=c,this.normalize=d,this.applyToAnyTagName=!1}var g="span",h=/\s+/g;e.prototype={doMerge:function(){for(var a,b,c=[],d=0,e=this.textNodes.length;e>d;++d)a=this.textNodes[d],b=a.parentNode,c[d]=a.data,d&&(b.removeChild(a),b.hasChildNodes()||b.parentNode.removeChild(b));return this.firstTextNode.data=c=c.join("")},getLength:function(){for(var a=this.textNodes.length,b=0;a--;)b+=this.textNodes[a].length;return b},toString:function(){for(var a=[],b=0,c=this.textNodes.length;c>b;++b)a[b]="'"+this.textNodes[b].data+"'";return"[Merge("+a.join(",")+")]"}},f.prototype={getAncestorWithClass:function(c){for(var d;c;){if(this.cssClass)if(d=this.cssClass,c.className){var e=c.className.match(this.similarClassRegExp)||[];d=e[e.length-1]===d}else d=!1;else d=!0;if(c.nodeType==a.ELEMENT_NODE&&b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase())&&d)return c;c=c.parentNode}return!1},postApply:function(a,b){for(var c,d,f,g=a[0],h=a[a.length-1],i=[],j=g,k=h,l=0,m=h.length,n=0,o=a.length;o>n;++n)d=a[n],(f=this.getAdjacentMergeableTextNode(d.parentNode,!1))?(c||(c=new e(f),i.push(c)),c.textNodes.push(d),d===g&&(j=c.firstTextNode,l=j.length),d===h&&(k=c.firstTextNode,m=c.getLength())):c=null;if((g=this.getAdjacentMergeableTextNode(h.parentNode,!0))&&(c||(c=new e(h),i.push(c)),c.textNodes.push(g)),i.length){for(n=0,o=i.length;o>n;++n)i[n].doMerge();b.setStart(j,l),b.setEnd(k,m)}},getAdjacentMergeableTextNode:function(b,c){var d=b.nodeType==a.TEXT_NODE,e=d?b.parentNode:b,f=c?"nextSibling":"previousSibling";if(d){if((d=b[f])&&d.nodeType==a.TEXT_NODE)return d}else if((d=e[f])&&this.areElementsMergeable(b,d))return d[c?"firstChild":"lastChild"];return null},areElementsMergeable:function(a,c){var d;if((d=b.dom.arrayContains(this.tagNames,(a.tagName||"").toLowerCase()))&&(d=b.dom.arrayContains(this.tagNames,(c.tagName||"").toLowerCase()))&&(d=a.className.replace(h," ")==c.className.replace(h," ")))a:if(a.attributes.length!=c.attributes.length)d=!1;else{d=0;for(var e,f,g=a.attributes.length;g>d;++d)if(e=a.attributes[d],f=e.name,"class"!=f&&(f=c.attributes.getNamedItem(f),e.specified!=f.specified||e.specified&&e.nodeValue!==f.nodeValue)){d=!1;break a}d=!0}return d},createContainer:function(a){return a=a.createElement(this.tagNames[0]),this.cssClass&&(a.className=this.cssClass),a},applyToTextNode:function(a){var c=a.parentNode;1==c.childNodes.length&&b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase())?this.cssClass&&(a=this.cssClass,c.className?(c.className&&(c.className=c.className.replace(this.similarClassRegExp,"")),c.className+=" "+a):c.className=a):(c=this.createContainer(b.dom.getDocument(a)),a.parentNode.insertBefore(c,a),c.appendChild(a))},isRemovable:function(c){return b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase())&&a.lang.string(c.className).trim()==this.cssClass},undoToTextNode:function(a,b,e){if(b.containsNode(e)||(a=b.cloneRange(),a.selectNode(e),a.isPointInRange(b.endContainer,b.endOffset)&&c(b.endContainer,b.endOffset)&&(d(e,b.endContainer,b.endOffset),b.setEndAfter(e)),a.isPointInRange(b.startContainer,b.startOffset)&&c(b.startContainer,b.startOffset)&&(e=d(e,b.startContainer,b.startOffset))),this.similarClassRegExp&&e.className&&(e.className=e.className.replace(this.similarClassRegExp,"")),this.isRemovable(e)){for(b=e,e=b.parentNode;b.firstChild;)e.insertBefore(b.firstChild,b);e.removeChild(b)}},applyToRange:function(b){var c=b.getNodes([a.TEXT_NODE]);if(!c.length)try{var d=this.createContainer(b.endContainer.ownerDocument);return b.surroundContents(d),this.selectNode(b,d),void 0}catch(e){}if(b.splitBoundaries(),c=b.getNodes([a.TEXT_NODE]),c.length){for(var f=0,g=c.length;g>f;++f)d=c[f],this.getAncestorWithClass(d)||this.applyToTextNode(d);b.setStart(c[0],0),d=c[c.length-1],b.setEnd(d,d.length),this.normalize&&this.postApply(c,b)}},undoToRange:function(b){var c,d,e=b.getNodes([a.TEXT_NODE]);e.length?(b.splitBoundaries(),e=b.getNodes([a.TEXT_NODE])):(e=b.endContainer.ownerDocument.createTextNode(a.INVISIBLE_SPACE),b.insertNode(e),b.selectNode(e),e=[e]);for(var f=0,g=e.length;g>f;++f)c=e[f],(d=this.getAncestorWithClass(c))&&this.undoToTextNode(c,b,d);1==g?this.selectNode(b,e[0]):(b.setStart(e[0],0),c=e[e.length-1],b.setEnd(c,c.length),this.normalize&&this.postApply(e,b))},selectNode:function(b,c){var d=c.nodeType===a.ELEMENT_NODE,e="canHaveHTML"in c?c.canHaveHTML:!0,f=d?c.innerHTML:c.data;if((f=""===f||f===a.INVISIBLE_SPACE)&&d&&e)try{c.innerHTML=a.INVISIBLE_SPACE}catch(g){}b.selectNodeContents(c),f&&d?b.collapse(!1):f&&(b.setStartAfter(c),b.setEndAfter(c))},getTextSelectedByRange:function(a,b){var c=b.cloneRange();c.selectNodeContents(a);var d=c.intersection(b),d=d?d.toString():"";return c.detach(),d},isAppliedToRange:function(b){var c,d=[],e=b.getNodes([a.TEXT_NODE]);if(!e.length)return(c=this.getAncestorWithClass(b.startContainer))?[c]:!1;for(var f,g=0,h=e.length;h>g;++g){if(f=this.getTextSelectedByRange(e[g],b),c=this.getAncestorWithClass(e[g]),""!=f&&!c)return!1;d.push(c)}return d},toggleRange:function(a){this.isAppliedToRange(a)?this.undoToRange(a):this.applyToRange(a)}},a.selection.HTMLApplier=f}(wysihtml5,rangy),wysihtml5.Commands=Base.extend({constructor:function(a){this.editor=a,this.composer=a.composer,this.doc=this.composer.doc},support:function(a){return wysihtml5.browser.supportsCommand(this.doc,a)},exec:function(a,b){var c=wysihtml5.commands[a],d=wysihtml5.lang.array(arguments).get(),e=c&&c.exec,f=null;if(this.editor.fire("beforecommand:composer"),e)d.unshift(this.composer),f=e.apply(c,d);else try{f=this.doc.execCommand(a,!1,b)}catch(g){}return this.editor.fire("aftercommand:composer"),f},state:function(a){var b=wysihtml5.commands[a],c=wysihtml5.lang.array(arguments).get(),d=b&&b.state;if(d)return c.unshift(this.composer),d.apply(b,c);try{return this.doc.queryCommandState(a)}catch(e){return!1}},value:function(a){var b=wysihtml5.commands[a],c=b&&b.value;if(c)return c.call(b,this.composer,a);try{return this.doc.queryCommandValue(a)}catch(d){return null}}}),function(a){a.commands.bold={exec:function(b,c){return a.commands.formatInline.exec(b,c,"b")},state:function(b,c){return a.commands.formatInline.state(b,c,"b")},value:function(){}}}(wysihtml5),function(a){function b(b,f){var g,h,i,j=b.doc,k="_wysihtml5-temp-"+ +new Date,l=0;for(a.commands.formatInline.exec(b,c,d,k,/non-matching-class/g),g=j.querySelectorAll(d+"."+k),k=g.length;k>l;l++)for(i in h=g[l],h.removeAttribute("class"),f)h.setAttribute(i,f[i]);l=h,1===k&&(i=e.getTextContent(h),k=!!h.querySelector("*"),i=""===i||i===a.INVISIBLE_SPACE,!k&&i&&(e.setTextContent(h,f.text||h.href),j=j.createTextNode(" "),b.selection.setAfter(h),b.selection.insertNode(j),l=j)),b.selection.setAfter(l)}var c,d="A",e=a.dom;a.commands.createLink={exec:function(a,c,d){var f=this.state(a,c);f?a.selection.executeAndRestore(function(){for(var a,b,c,d=f.length,g=0;d>g;g++)a=f[g],b=e.getParentElement(a,{nodeName:"code"}),c=e.getTextContent(a),c.match(e.autoLink.URL_REG_EXP)&&!b?e.renameElement(a,"code"):e.replaceWithChildNodes(a)}):(d="object"==typeof d?d:{href:d},b(a,d))},state:function(b,c){return a.commands.formatInline.state(b,c,"A")},value:function(){return c}}}(wysihtml5),function(a){var b=/wysiwyg-font-size-[a-z\-]+/g;a.commands.fontSize={exec:function(c,d,e){return a.commands.formatInline.exec(c,d,"span","wysiwyg-font-size-"+e,b)},state:function(c,d,e){return a.commands.formatInline.state(c,d,"span","wysiwyg-font-size-"+e,b)},value:function(){}}}(wysihtml5),function(a){var b=/wysiwyg-color-[a-z]+/g;a.commands.foreColor={exec:function(c,d,e){return a.commands.formatInline.exec(c,d,"span","wysiwyg-color-"+e,b)},state:function(c,d,e){return a.commands.formatInline.state(c,d,"span","wysiwyg-color-"+e,b)},value:function(){}}}(wysihtml5),function(a){function b(b){for(b=b.previousSibling;b&&b.nodeType===a.TEXT_NODE&&!a.lang.string(b.data).trim();)b=b.previousSibling;return b}function c(b){for(b=b.nextSibling;b&&b.nodeType===a.TEXT_NODE&&!a.lang.string(b.data).trim();)b=b.nextSibling;return b}function d(a){return"BR"===a.nodeName||"block"===g.getStyle("display").from(a)?!0:!1}function e(b,c,d,e){if(e)var f=g.observe(b,"DOMNodeInserted",function(b){var c,b=b.target;b.nodeType===a.ELEMENT_NODE&&(c=g.getStyle("display").from(b),"inline"!==c.substr(0,6)&&(b.className+=" "+e))});b.execCommand(c,!1,d),f&&f.stop()}function f(a,d){a.selection.selectLine(),a.selection.surround(d);var e=c(d),f=b(d);e&&"BR"===e.nodeName&&e.parentNode.removeChild(e),f&&"BR"===f.nodeName&&f.parentNode.removeChild(f),(e=d.lastChild)&&"BR"===e.nodeName&&e.parentNode.removeChild(e),a.selection.selectNode(d)}var g=a.dom,h="H1 H2 H3 H4 H5 H6 P BLOCKQUOTE DIV".split(" ");a.commands.formatBlock={exec:function(i,j,k,l,m){var n,o=i.doc,p=this.state(i,j,k,l,m),k="string"==typeof k?k.toUpperCase():k;if(p)i.selection.executeAndRestoreSimple(function(){m&&(p.className=p.className.replace(m,""));var e=!!a.lang.string(p.className).trim();if(e||p.nodeName!==(k||"DIV"))e&&g.renameElement(p,"DIV");else{var e=p,f=e.ownerDocument,h=c(e),i=b(e);h&&!d(h)&&e.parentNode.insertBefore(f.createElement("br"),h),i&&!d(i)&&e.parentNode.insertBefore(f.createElement("br"),e),g.replaceWithChildNodes(p)}});else{if((null===k||a.lang.array(h).contains(k))&&(n=i.selection.getSelectedNode(),p=g.getParentElement(n,{nodeName:h})))return i.selection.executeAndRestoreSimple(function(){if(k&&(p=g.renameElement(p,k)),l){var a=p;a.className?(a.className=a.className.replace(m,""),a.className+=" "+l):a.className=l}}),void 0;i.commands.support(j)?e(o,j,k||"DIV",l):(p=o.createElement(k||"DIV"),l&&(p.className=l),f(i,p))}},state:function(a,b,c,d,e){return c="string"==typeof c?c.toUpperCase():c,a=a.selection.getSelectedNode(),g.getParentElement(a,{nodeName:c,className:d,classRegExp:e})},value:function(){}}}(wysihtml5),function(a){function b(b,e,f){var g=b+":"+e;if(!d[g]){var h=d,i=a.selection.HTMLApplier,j=c[b],b=j?[b.toLowerCase(),j.toLowerCase()]:[b.toLowerCase()];h[g]=new i(b,e,f,!0)}return d[g]}var c={strong:"b",em:"i",b:"strong",i:"em"},d={};a.commands.formatInline={exec:function(a,c,d,e,f){return(c=a.selection.getRange())?(b(d,e,f).toggleRange(c),a.selection.setSelection(c),void 0):!1},state:function(d,e,f,g,h){var e=d.doc,i=c[f]||f;return!a.dom.hasElementWithTagName(e,f)&&!a.dom.hasElementWithTagName(e,i)||g&&!a.dom.hasElementWithClassName(e,g)?!1:(d=d.selection.getRange(),d?b(f,g,h).isAppliedToRange(d):!1)},value:function(){}}}(wysihtml5),function(a){a.commands.insertHTML={exec:function(a,b,c){a.commands.support(b)?a.doc.execCommand(b,!1,c):a.selection.insertHTML(c)},state:function(){return!1},value:function(){}}}(wysihtml5),function(a){a.commands.insertImage={exec:function(b,c,d){var e,d="object"==typeof d?d:{src:d},f=b.doc,c=this.state(b);if(c)b.selection.setBefore(c),d=c.parentNode,d.removeChild(c),a.dom.removeEmptyTextNodes(d),"A"===d.nodeName&&!d.firstChild&&(b.selection.setAfter(d),d.parentNode.removeChild(d)),a.quirks.redraw(b.element);else{c=f.createElement("IMG");for(e in d)c[e]=d[e];b.selection.insertNode(c),a.browser.hasProblemsSettingCaretAfterImg()?(d=f.createTextNode(a.INVISIBLE_SPACE),b.selection.insertNode(d),b.selection.setAfter(d)):b.selection.setAfter(c)}},state:function(b){var c;return a.dom.hasElementWithTagName(b.doc,"IMG")?(c=b.selection.getSelectedNode())?"IMG"===c.nodeName?c:c.nodeType!==a.ELEMENT_NODE?!1:(c=b.selection.getText(),(c=a.lang.string(c).trim())?!1:(b=b.selection.getNodes(a.ELEMENT_NODE,function(a){return"IMG"===a.nodeName}),1!==b.length?!1:b[0])):!1:!1},value:function(a){return(a=this.state(a))&&a.src}}}(wysihtml5),function(a){var b="<br>"+(a.browser.needsSpaceAfterLineBreak()?" ":"");a.commands.insertLineBreak={exec:function(c,d){c.commands.support(d)?(c.doc.execCommand(d,!1,null),a.browser.autoScrollsToCaret()||c.selection.scrollIntoView()):c.commands.exec("insertHTML",b)},state:function(){return!1},value:function(){}}}(wysihtml5),function(a){a.commands.insertOrderedList={exec:function(b,c){var d,e=b.doc,f=b.selection.getSelectedNode(),g=a.dom.getParentElement(f,{nodeName:"OL"}),h=a.dom.getParentElement(f,{nodeName:"UL"}),f="_wysihtml5-temp-"+(new Date).getTime();b.commands.support(c)?e.execCommand(c,!1,null):g?b.selection.executeAndRestoreSimple(function(){a.dom.resolveList(g)}):h?b.selection.executeAndRestoreSimple(function(){a.dom.renameElement(h,"ol")}):(b.commands.exec("formatBlock","div",f),d=e.querySelector("."+f),e=""===d.innerHTML||d.innerHTML===a.INVISIBLE_SPACE,b.selection.executeAndRestoreSimple(function(){g=a.dom.convertToList(d,"ol")}),e&&b.selection.selectNode(g.querySelector("li")))},state:function(b){return b=b.selection.getSelectedNode(),a.dom.getParentElement(b,{nodeName:"OL"})},value:function(){}}}(wysihtml5),function(a){a.commands.insertUnorderedList={exec:function(b,c){var d,e=b.doc,f=b.selection.getSelectedNode(),g=a.dom.getParentElement(f,{nodeName:"UL"}),h=a.dom.getParentElement(f,{nodeName:"OL"}),f="_wysihtml5-temp-"+(new Date).getTime();b.commands.support(c)?e.execCommand(c,!1,null):g?b.selection.executeAndRestoreSimple(function(){a.dom.resolveList(g)}):h?b.selection.executeAndRestoreSimple(function(){a.dom.renameElement(h,"ul")}):(b.commands.exec("formatBlock","div",f),d=e.querySelector("."+f),e=""===d.innerHTML||d.innerHTML===a.INVISIBLE_SPACE,b.selection.executeAndRestoreSimple(function(){g=a.dom.convertToList(d,"ul")}),e&&b.selection.selectNode(g.querySelector("li")))},state:function(b){return b=b.selection.getSelectedNode(),a.dom.getParentElement(b,{nodeName:"UL"})},value:function(){}}}(wysihtml5),function(a){a.commands.italic={exec:function(b,c){return a.commands.formatInline.exec(b,c,"i")},state:function(b,c){return a.commands.formatInline.state(b,c,"i")},value:function(){}}}(wysihtml5),function(a){var b=/wysiwyg-text-align-[a-z]+/g;a.commands.justifyCenter={exec:function(c){return a.commands.formatBlock.exec(c,"formatBlock",null,"wysiwyg-text-align-center",b)},state:function(c){return a.commands.formatBlock.state(c,"formatBlock",null,"wysiwyg-text-align-center",b)},value:function(){}}}(wysihtml5),function(a){var b=/wysiwyg-text-align-[a-z]+/g;a.commands.justifyLeft={exec:function(c){return a.commands.formatBlock.exec(c,"formatBlock",null,"wysiwyg-text-align-left",b)},state:function(c){return a.commands.formatBlock.state(c,"formatBlock",null,"wysiwyg-text-align-left",b)},value:function(){}}}(wysihtml5),function(a){var b=/wysiwyg-text-align-[a-z]+/g;a.commands.justifyRight={exec:function(c){return a.commands.formatBlock.exec(c,"formatBlock",null,"wysiwyg-text-align-right",b)},state:function(c){return a.commands.formatBlock.state(c,"formatBlock",null,"wysiwyg-text-align-right",b)},value:function(){}}}(wysihtml5),function(a){a.commands.underline={exec:function(b,c){return a.commands.formatInline.exec(b,c,"u")},state:function(b,c){return a.commands.formatInline.state(b,c,"u")},value:function(){}}}(wysihtml5),function(a){var b='<span id="_wysihtml5-undo" class="_wysihtml5-temp">'+a.INVISIBLE_SPACE+"</span>",c='<span id="_wysihtml5-redo" class="_wysihtml5-temp">'+a.INVISIBLE_SPACE+"</span>",d=a.dom;a.UndoManager=a.lang.Dispatcher.extend({constructor:function(a){this.editor=a,this.composer=a.composer,this.element=this.composer.element,this.history=[this.composer.getValue()],this.position=1,this.composer.commands.support("insertHTML")&&this._observe()},_observe:function(){var e,f=this,g=this.composer.sandbox.getDocument();if(d.observe(this.element,"keydown",function(a){if(!a.altKey&&(a.ctrlKey||a.metaKey)){var b=a.keyCode,c=90===b&&a.shiftKey||89===b;90!==b||a.shiftKey?c&&(f.redo(),a.preventDefault()):(f.undo(),a.preventDefault())}}),d.observe(this.element,"keydown",function(a){a=a.keyCode,a!==e&&(e=a,(8===a||46===a)&&f.transact())}),a.browser.hasUndoInContextMenu()){var h,i,j=function(){for(var a;a=g.querySelector("._wysihtml5-temp");)a.parentNode.removeChild(a);clearInterval(h)};d.observe(this.element,"contextmenu",function(){j(),f.composer.selection.executeAndRestoreSimple(function(){f.element.lastChild&&f.composer.selection.setAfter(f.element.lastChild),g.execCommand("insertHTML",!1,b),g.execCommand("insertHTML",!1,c),g.execCommand("undo",!1,null)}),h=setInterval(function(){g.getElementById("_wysihtml5-redo")?(j(),f.redo()):g.getElementById("_wysihtml5-undo")||(j(),f.undo())},400),i||(i=!0,d.observe(document,"mousedown",j),d.observe(g,["mousedown","paste","cut","copy"],j))})}this.editor.observe("newword:composer",function(){f.transact()}).observe("beforecommand:composer",function(){f.transact()})},transact:function(){var a=this.history[this.position-1],b=this.composer.getValue();b!=a&&(40<(this.history.length=this.position)&&(this.history.shift(),this.position--),this.position++,this.history.push(b))},undo:function(){this.transact(),1>=this.position||(this.set(this.history[--this.position-1]),this.editor.fire("undo:composer"))},redo:function(){this.position>=this.history.length||(this.set(this.history[++this.position-1]),this.editor.fire("redo:composer"))},set:function(a){this.composer.setValue(a),this.editor.focus(!0)}})}(wysihtml5),wysihtml5.views.View=Base.extend({constructor:function(a,b,c){this.parent=a,this.element=b,this.config=c,this._observeViewChange()},_observeViewChange:function(){var a=this;this.parent.observe("beforeload",function(){a.parent.observe("change_view",function(b){b===a.name?(a.parent.currentView=a,a.show(),setTimeout(function(){a.focus()},0)):a.hide()})})},focus:function(){if(this.element.ownerDocument.querySelector(":focus")!==this.element)try{this.element.focus()}catch(a){}},hide:function(){this.element.style.display="none"},show:function(){this.element.style.display=""},disable:function(){this.element.setAttribute("disabled","disabled")},enable:function(){this.element.removeAttribute("disabled")}}),function(a){var b=a.dom,c=a.browser;a.views.Composer=a.views.View.extend({name:"composer",CARET_HACK:"<br>",constructor:function(a,b,c){this.base(a,b,c),this.textarea=this.parent.textarea,this._initSandbox()},clear:function(){this.element.innerHTML=c.displaysCaretInEmptyContentEditableCorrectly()?"":this.CARET_HACK},getValue:function(b){var c=this.isEmpty()?"":a.quirks.getCorrectInnerHTML(this.element);return b&&(c=this.parent.parse(c)),c=a.lang.string(c).replace(a.INVISIBLE_SPACE).by("")},setValue:function(a,b){b&&(a=this.parent.parse(a)),this.element.innerHTML=a},show:function(){this.iframe.style.display=this._displayStyle||"",this.disable(),this.enable()},hide:function(){this._displayStyle=b.getStyle("display").from(this.iframe),"none"===this._displayStyle&&(this._displayStyle=null),this.iframe.style.display="none"},disable:function(){this.element.removeAttribute("contentEditable"),this.base()},enable:function(){this.element.setAttribute("contentEditable","true"),this.base()},focus:function(b){a.browser.doesAsyncFocus()&&this.hasPlaceholderSet()&&this.clear(),this.base();var c=this.element.lastChild;b&&c&&("BR"===c.nodeName?this.selection.setBefore(this.element.lastChild):this.selection.setAfter(this.element.lastChild))},getTextContent:function(){return b.getTextContent(this.element)},hasPlaceholderSet:function(){return this.getTextContent()==this.textarea.element.getAttribute("placeholder")},isEmpty:function(){var a=this.element.innerHTML;return""===a||a===this.CARET_HACK||this.hasPlaceholderSet()||""===this.getTextContent()&&!this.element.querySelector("blockquote, ul, ol, img, embed, object, table, iframe, svg, video, audio, button, input, select, textarea")},_initSandbox:function(){var a=this;this.sandbox=new b.Sandbox(function(){a._create()},{stylesheets:this.config.stylesheets}),this.iframe=this.sandbox.getIframe();var c=document.createElement("input");c.type="hidden",c.name="_wysihtml5_mode",c.value=1;var d=this.textarea.element;b.insert(this.iframe).after(d),b.insert(c).after(d)},_create:function(){var d=this;this.doc=this.sandbox.getDocument(),this.element=this.doc.body,this.textarea=this.parent.textarea,this.element.innerHTML=this.textarea.getValue(!0),this.enable(),this.selection=new a.Selection(this.parent),this.commands=new a.Commands(this.parent),b.copyAttributes("className spellcheck title lang dir accessKey".split(" ")).from(this.textarea.element).to(this.element),b.addClass(this.element,this.config.composerClassName),this.config.style&&this.style(),this.observe();var e=this.config.name;e&&(b.addClass(this.element,e),b.addClass(this.iframe,e)),(e="string"==typeof this.config.placeholder?this.config.placeholder:this.textarea.element.getAttribute("placeholder"))&&b.simulatePlaceholder(this.parent,this,e),this.commands.exec("styleWithCSS",!1),this._initAutoLinking(),this._initObjectResizing(),this._initUndoManager(),(this.textarea.element.hasAttribute("autofocus")||document.querySelector(":focus")==this.textarea.element)&&setTimeout(function(){d.focus()},100),a.quirks.insertLineBreakOnReturn(this),c.clearsContentEditableCorrectly()||a.quirks.ensureProperClearing(this),c.clearsListsInContentEditableCorrectly()||a.quirks.ensureProperClearingOfLists(this),this.initSync&&this.config.sync&&this.initSync(),this.textarea.hide(),this.parent.fire("beforeload").fire("load")},_initAutoLinking:function(){var d=this,e=c.canDisableAutoLinking(),f=c.doesAutoLinkingInContentEditable();if(e&&this.commands.exec("autoUrlDetect",!1),this.config.autoLink){(!f||f&&e)&&this.parent.observe("newword:composer",function(){d.selection.executeAndRestore(function(a,c){b.autoLink(c.parentNode)})});var g=this.sandbox.getDocument().getElementsByTagName("a"),h=b.autoLink.URL_REG_EXP,i=function(c){return c=a.lang.string(b.getTextContent(c)).trim(),"www."===c.substr(0,4)&&(c="http://"+c),c};b.observe(this.element,"keydown",function(a){if(g.length){var c,a=d.selection.getSelectedNode(a.target.ownerDocument),e=b.getParentElement(a,{nodeName:"A"},4);e&&(c=i(e),setTimeout(function(){var a=i(e);a!==c&&a.match(h)&&e.setAttribute("href",a)},0))}})}},_initObjectResizing:function(){var d=["width","height"],e=d.length,f=this.element;this.commands.exec("enableObjectResizing",this.config.allowObjectResizing),this.config.allowObjectResizing?c.supportsEvent("resizeend")&&b.observe(f,"resizeend",function(b){for(var c,b=b.target||b.srcElement,g=b.style,h=0;e>h;h++)c=d[h],g[c]&&(b.setAttribute(c,parseInt(g[c],10)),g[c]="");a.quirks.redraw(f)}):c.supportsEvent("resizestart")&&b.observe(f,"resizestart",function(a){a.preventDefault()})},_initUndoManager:function(){new a.UndoManager(this.parent)}})}(wysihtml5),function(a){var b=a.dom,c=document,d=window,e=c.createElement("div"),f="background-color color cursor font-family font-size font-style font-variant font-weight line-height letter-spacing text-align text-decoration text-indent text-rendering word-break word-wrap word-spacing".split(" "),g="background-color border-collapse border-bottom-color border-bottom-style border-bottom-width border-left-color border-left-style border-left-width border-right-color border-right-style border-right-width border-top-color border-top-style border-top-width clear display float margin-bottom margin-left margin-right margin-top outline-color outline-offset outline-width outline-style padding-left padding-right padding-top padding-bottom position top left right bottom z-index vertical-align text-align -webkit-box-sizing -moz-box-sizing -ms-box-sizing box-sizing -webkit-box-shadow -moz-box-shadow -ms-box-shadow box-shadow -webkit-border-top-right-radius -moz-border-radius-topright border-top-right-radius -webkit-border-bottom-right-radius -moz-border-radius-bottomright border-bottom-right-radius -webkit-border-bottom-left-radius -moz-border-radius-bottomleft border-bottom-left-radius -webkit-border-top-left-radius -moz-border-radius-topleft border-top-left-radius width height".split(" "),h="width height top left right bottom".split(" "),i=["html             { height: 100%; }","body             { min-height: 100%; padding: 0; margin: 0; margin-top: -1px; padding-top: 1px; }","._wysihtml5-temp { display: none; }",a.browser.isGecko?"body.placeholder { color: graytext !important; }":"body.placeholder { color: #a9a9a9 !important; }","body[disabled]   { background-color: #eee !important; color: #999 !important; cursor: default !important; }","img:-moz-broken  { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],j=function(a){if(a.setActive)try{a.setActive()}catch(e){}else{var f=a.style,g=c.documentElement.scrollTop||c.body.scrollTop,h=c.documentElement.scrollLeft||c.body.scrollLeft,f={position:f.position,top:f.top,left:f.left,WebkitUserSelect:f.WebkitUserSelect};b.setStyles({position:"absolute",top:"-99999px",left:"-99999px",WebkitUserSelect:"none"}).on(a),a.focus(),b.setStyles(f).on(a),d.scrollTo&&d.scrollTo(h,g)}};a.views.Composer.prototype.style=function(){var k=this,l=c.querySelector(":focus"),m=this.textarea.element,n=m.hasAttribute("placeholder"),o=n&&m.getAttribute("placeholder");this.focusStylesHost=this.focusStylesHost||e.cloneNode(!1),this.blurStylesHost=this.blurStylesHost||e.cloneNode(!1),n&&m.removeAttribute("placeholder"),m===l&&m.blur(),b.copyStyles(g).from(m).to(this.iframe).andTo(this.blurStylesHost),b.copyStyles(f).from(m).to(this.element).andTo(this.blurStylesHost),b.insertCSS(i).into(this.element.ownerDocument),j(m),b.copyStyles(g).from(m).to(this.focusStylesHost),b.copyStyles(f).from(m).to(this.focusStylesHost);
var p=a.lang.array(g).without(["display"]);if(l?l.focus():m.blur(),n&&m.setAttribute("placeholder",o),!a.browser.hasCurrentStyleProperty())var q=b.observe(d,"resize",function(){if(b.contains(document.documentElement,k.iframe)){var a=b.getStyle("display").from(m),c=b.getStyle("display").from(k.iframe);m.style.display="",k.iframe.style.display="none",b.copyStyles(h).from(m).to(k.iframe).andTo(k.focusStylesHost).andTo(k.blurStylesHost),k.iframe.style.display=c,m.style.display=a}else q.stop()});return this.parent.observe("focus:composer",function(){b.copyStyles(p).from(k.focusStylesHost).to(k.iframe),b.copyStyles(f).from(k.focusStylesHost).to(k.element)}),this.parent.observe("blur:composer",function(){b.copyStyles(p).from(k.blurStylesHost).to(k.iframe),b.copyStyles(f).from(k.blurStylesHost).to(k.element)}),this}}(wysihtml5),function(a){var b=a.dom,c=a.browser,d={66:"bold",73:"italic",85:"underline"};a.views.Composer.prototype.observe=function(){var e=this,f=this.getValue(),g=this.sandbox.getIframe(),h=this.element,i=c.supportsEventsInIframeCorrectly()?h:this.sandbox.getWindow(),j=c.supportsEvent("drop")?["drop","paste"]:["dragdrop","paste"];b.observe(g,"DOMNodeRemoved",function(){clearInterval(k),e.parent.fire("destroy:composer")});var k=setInterval(function(){b.contains(document.documentElement,g)||(clearInterval(k),e.parent.fire("destroy:composer"))},250);b.observe(i,"focus",function(){e.parent.fire("focus").fire("focus:composer"),setTimeout(function(){f=e.getValue()},0)}),b.observe(i,"blur",function(){f!==e.getValue()&&e.parent.fire("change").fire("change:composer"),e.parent.fire("blur").fire("blur:composer")}),a.browser.isIos()&&b.observe(h,"blur",function(){var a=h.ownerDocument.createElement("input"),b=document.documentElement.scrollTop||document.body.scrollTop,c=document.documentElement.scrollLeft||document.body.scrollLeft;try{e.selection.insertNode(a)}catch(d){h.appendChild(a)}a.focus(),a.parentNode.removeChild(a),window.scrollTo(c,b)}),b.observe(h,"dragenter",function(){e.parent.fire("unset_placeholder")}),c.firesOnDropOnlyWhenOnDragOverIsCancelled()&&b.observe(h,["dragover","dragenter"],function(a){a.preventDefault()}),b.observe(h,j,function(a){var b,d=a.dataTransfer;d&&c.supportsDataTransfer()&&(b=d.getData("text/html")||d.getData("text/plain")),b?(h.focus(),e.commands.exec("insertHTML",b),e.parent.fire("paste").fire("paste:composer"),a.stopPropagation(),a.preventDefault()):setTimeout(function(){e.parent.fire("paste").fire("paste:composer")},0)}),b.observe(h,"keyup",function(b){b=b.keyCode,(b===a.SPACE_KEY||b===a.ENTER_KEY)&&e.parent.fire("newword:composer")}),this.parent.observe("paste:composer",function(){setTimeout(function(){e.parent.fire("newword:composer")},0)}),c.canSelectImagesInContentEditable()||b.observe(h,"mousedown",function(a){var b=a.target;"IMG"===b.nodeName&&(e.selection.selectNode(b),a.preventDefault())}),b.observe(h,"keydown",function(a){var b=d[a.keyCode];(a.ctrlKey||a.metaKey)&&!a.altKey&&b&&(e.commands.exec(b),a.preventDefault())}),b.observe(h,"keydown",function(b){var c=e.selection.getSelectedNode(!0),d=b.keyCode;!c||"IMG"!==c.nodeName||d!==a.BACKSPACE_KEY&&d!==a.DELETE_KEY||(d=c.parentNode,d.removeChild(c),"A"===d.nodeName&&!d.firstChild&&d.parentNode.removeChild(d),setTimeout(function(){a.quirks.redraw(h)},0),b.preventDefault())});var l={IMG:"Image: ",A:"Link: "};b.observe(h,"mouseover",function(a){var a=a.target,b=a.nodeName;!("A"!==b&&"IMG"!==b)&&!a.hasAttribute("title")&&(b=l[b]+(a.getAttribute("href")||a.getAttribute("src")),a.setAttribute("title",b))})}}(wysihtml5),function(a){a.views.Synchronizer=Base.extend({constructor:function(a,b,c){this.editor=a,this.textarea=b,this.composer=c,this._observe()},fromComposerToTextarea:function(b){this.textarea.setValue(a.lang.string(this.composer.getValue()).trim(),b)},fromTextareaToComposer:function(a){var b=this.textarea.getValue();b?this.composer.setValue(b,a):(this.composer.clear(),this.editor.fire("set_placeholder"))},sync:function(a){"textarea"===this.editor.currentView.name?this.fromTextareaToComposer(a):this.fromComposerToTextarea(a)},_observe:function(){var b,c=this,d=this.textarea.element.form,e=function(){b=setInterval(function(){c.fromComposerToTextarea()},400)},f=function(){clearInterval(b),b=null};e(),d&&(a.dom.observe(d,"submit",function(){c.sync(!0)}),a.dom.observe(d,"reset",function(){setTimeout(function(){c.fromTextareaToComposer()},0)})),this.editor.observe("change_view",function(a){"composer"!==a||b?"textarea"===a&&(c.fromComposerToTextarea(!0),f()):(c.fromTextareaToComposer(!0),e())}),this.editor.observe("destroy:composer",f)}})}(wysihtml5),wysihtml5.views.Textarea=wysihtml5.views.View.extend({name:"textarea",constructor:function(a,b,c){this.base(a,b,c),this._observe()},clear:function(){this.element.value=""},getValue:function(a){var b=this.isEmpty()?"":this.element.value;return a&&(b=this.parent.parse(b)),b},setValue:function(a,b){b&&(a=this.parent.parse(a)),this.element.value=a},hasPlaceholderSet:function(){var a=wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),b=this.element.getAttribute("placeholder")||null,c=this.element.value;return a&&!c||c===b},isEmpty:function(){return!wysihtml5.lang.string(this.element.value).trim()||this.hasPlaceholderSet()},_observe:function(){var a=this.element,b=this.parent,c={focusin:"focus",focusout:"blur"},d=wysihtml5.browser.supportsEvent("focusin")?["focusin","focusout","change"]:["focus","blur","change"];b.observe("beforeload",function(){wysihtml5.dom.observe(a,d,function(a){a=c[a.type]||a.type,b.fire(a).fire(a+":textarea")}),wysihtml5.dom.observe(a,["paste","drop"],function(){setTimeout(function(){b.fire("paste").fire("paste:textarea")},0)})})}}),function(a){var b=a.dom;a.toolbar.Dialog=a.lang.Dispatcher.extend({constructor:function(a,b){this.link=a,this.container=b},_observe:function(){if(!this._observed){var c=this,d=function(a){var b=c._serialize();b==c.elementToChange?c.fire("edit",b):c.fire("save",b),c.hide(),a.preventDefault(),a.stopPropagation()};b.observe(c.link,"click",function(){b.hasClass(c.link,"wysihtml5-command-dialog-opened")&&setTimeout(function(){c.hide()},0)}),b.observe(this.container,"keydown",function(b){var e=b.keyCode;e===a.ENTER_KEY&&d(b),e===a.ESCAPE_KEY&&c.hide()}),b.delegate(this.container,"[data-wysihtml5-dialog-action=save]","click",d),b.delegate(this.container,"[data-wysihtml5-dialog-action=cancel]","click",function(a){c.fire("cancel"),c.hide(),a.preventDefault(),a.stopPropagation()});for(var e=this.container.querySelectorAll("input, select, textarea"),f=0,g=e.length,h=function(){clearInterval(c.interval)};g>f;f++)b.observe(e[f],"change",h);this._observed=!0}},_serialize:function(){for(var a=this.elementToChange||{},b=this.container.querySelectorAll("[data-wysihtml5-dialog-field]"),c=b.length,d=0;c>d;d++)a[b[d].getAttribute("data-wysihtml5-dialog-field")]=b[d].value;return a},_interpolate:function(a){for(var b,c,d=document.querySelector(":focus"),e=this.container.querySelectorAll("[data-wysihtml5-dialog-field]"),f=e.length,g=0;f>g;g++)b=e[g],b!==d&&!(a&&"hidden"===b.type)&&(c=b.getAttribute("data-wysihtml5-dialog-field"),c=this.elementToChange?this.elementToChange[c]||"":b.defaultValue,b.value=c)},show:function(a){var c=this,d=this.container.querySelector("input, select, textarea");if(this.elementToChange=a,this._observe(),this._interpolate(),a&&(this.interval=setInterval(function(){c._interpolate(!0)},500)),b.addClass(this.link,"wysihtml5-command-dialog-opened"),this.container.style.display="",this.fire("show"),d&&!a)try{d.focus()}catch(e){}},hide:function(){clearInterval(this.interval),this.elementToChange=null,b.removeClass(this.link,"wysihtml5-command-dialog-opened"),this.container.style.display="none",this.fire("hide")}})}(wysihtml5),function(a){var b=a.dom,c={position:"relative"},d={left:0,margin:0,opacity:0,overflow:"hidden",padding:0,position:"absolute",top:0,zIndex:1},e={cursor:"inherit",fontSize:"50px",height:"50px",marginTop:"-25px",outline:0,padding:0,position:"absolute",right:"-4px",top:"50%"},f={"x-webkit-speech":"",speech:""};a.toolbar.Speech=function(g,h){var i=document.createElement("input");if(a.browser.supportsSpeechApiOn(i)){var j=document.createElement("div");a.lang.object(d).merge({width:h.offsetWidth+"px",height:h.offsetHeight+"px"}),b.insert(i).into(j),b.insert(j).into(h),b.setStyles(e).on(i),b.setAttributes(f).on(i),b.setStyles(d).on(j),b.setStyles(c).on(h),b.observe(i,"onwebkitspeechchange"in i?"webkitspeechchange":"speechchange",function(){g.execCommand("insertText",i.value),i.value=""}),b.observe(i,"click",function(a){b.hasClass(h,"wysihtml5-command-disabled")&&a.preventDefault(),a.stopPropagation()})}else h.style.display="none"}}(wysihtml5),function(a){var b=a.dom;a.toolbar.Toolbar=Base.extend({constructor:function(b,c){this.editor=b,this.container="string"==typeof c?document.getElementById(c):c,this.composer=b.composer,this._getLinks("command"),this._getLinks("action"),this._observe(),this.show();for(var d=this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"),e=d.length,f=0;e>f;f++)new a.toolbar.Speech(this,d[f])},_getLinks:function(b){for(var c,d,e,f,g,h=this[b+"Links"]=a.lang.array(this.container.querySelectorAll("[data-wysihtml5-"+b+"]")).get(),i=h.length,j=0,k=this[b+"Mapping"]={};i>j;j++)c=h[j],e=c.getAttribute("data-wysihtml5-"+b),f=c.getAttribute("data-wysihtml5-"+b+"-value"),d=this.container.querySelector("[data-wysihtml5-"+b+"-group='"+e+"']"),g=this._getDialog(c,e),k[e+":"+f]={link:c,group:d,name:e,value:f,dialog:g,state:!1}},_getDialog:function(b,c){var d,e,f=this,g=this.container.querySelector("[data-wysihtml5-dialog='"+c+"']");return g&&(d=new a.toolbar.Dialog(b,g),d.observe("show",function(){e=f.composer.selection.getBookmark(),f.editor.fire("show:dialog",{command:c,dialogContainer:g,commandLink:b})}),d.observe("save",function(a){e&&f.composer.selection.setBookmark(e),f._execCommand(c,a),f.editor.fire("save:dialog",{command:c,dialogContainer:g,commandLink:b})}),d.observe("cancel",function(){f.editor.focus(!1),f.editor.fire("cancel:dialog",{command:c,dialogContainer:g,commandLink:b})})),d},execCommand:function(a,b){if(!this.commandsDisabled){var c=this.commandMapping[a+":"+b];c&&c.dialog&&!c.state?c.dialog.show():this._execCommand(a,b)}},_execCommand:function(a,b){this.editor.focus(!1),this.composer.commands.exec(a,b),this._updateLinkStates()},execAction:function(a){var b=this.editor;switch(a){case"change_view":b.currentView===b.textarea?b.fire("change_view","composer"):b.fire("change_view","textarea")}},_observe:function(){for(var a=this,c=this.editor,d=this.container,e=this.commandLinks.concat(this.actionLinks),f=e.length,g=0;f>g;g++)b.setAttributes({href:"javascript:;",unselectable:"on"}).on(e[g]);b.delegate(d,"[data-wysihtml5-command]","mousedown",function(a){a.preventDefault()}),b.delegate(d,"[data-wysihtml5-command]","click",function(b){var c=this.getAttribute("data-wysihtml5-command"),d=this.getAttribute("data-wysihtml5-command-value");a.execCommand(c,d),b.preventDefault()}),b.delegate(d,"[data-wysihtml5-action]","click",function(b){var c=this.getAttribute("data-wysihtml5-action");a.execAction(c),b.preventDefault()}),c.observe("focus:composer",function(){a.bookmark=null,clearInterval(a.interval),a.interval=setInterval(function(){a._updateLinkStates()},500)}),c.observe("blur:composer",function(){clearInterval(a.interval)}),c.observe("destroy:composer",function(){clearInterval(a.interval)}),c.observe("change_view",function(c){setTimeout(function(){a.commandsDisabled="composer"!==c,a._updateLinkStates(),a.commandsDisabled?b.addClass(d,"wysihtml5-commands-disabled"):b.removeClass(d,"wysihtml5-commands-disabled")},0)})},_updateLinkStates:function(){var c,d,e,f=this.commandMapping,g=this.actionMapping;for(c in f)e=f[c],this.commandsDisabled?(d=!1,b.removeClass(e.link,"wysihtml5-command-active"),e.group&&b.removeClass(e.group,"wysihtml5-command-active"),e.dialog&&e.dialog.hide()):(d=this.composer.commands.state(e.name,e.value),a.lang.object(d).isArray()&&(d=1===d.length?d[0]:!0),b.removeClass(e.link,"wysihtml5-command-disabled"),e.group&&b.removeClass(e.group,"wysihtml5-command-disabled")),e.state!==d&&((e.state=d)?(b.addClass(e.link,"wysihtml5-command-active"),e.group&&b.addClass(e.group,"wysihtml5-command-active"),e.dialog&&("object"==typeof d?e.dialog.show(d):e.dialog.hide())):(b.removeClass(e.link,"wysihtml5-command-active"),e.group&&b.removeClass(e.group,"wysihtml5-command-active"),e.dialog&&e.dialog.hide()));for(c in g)f=g[c],"change_view"===f.name&&(f.state=this.editor.currentView===this.editor.textarea,f.state?b.addClass(f.link,"wysihtml5-action-active"):b.removeClass(f.link,"wysihtml5-action-active"))},show:function(){this.container.style.display=""},hide:function(){this.container.style.display="none"}})}(wysihtml5),function(a){var b={name:void 0,style:!0,toolbar:void 0,autoLink:!0,parserRules:{tags:{br:{},span:{},div:{},p:{}},classes:{}},parser:a.dom.parse,composerClassName:"wysihtml5-editor",bodyClassName:"wysihtml5-supported",stylesheets:[],placeholderText:void 0,allowObjectResizing:!0,supportTouchDevices:!0};a.Editor=a.lang.Dispatcher.extend({constructor:function(c,d){if(this.textareaElement="string"==typeof c?document.getElementById(c):c,this.config=a.lang.object({}).merge(b).merge(d).get(),this.currentView=this.textarea=new a.views.Textarea(this,this.textareaElement,this.config),this._isCompatible=a.browser.supported(),!this._isCompatible||!this.config.supportTouchDevices&&a.browser.isTouchDevice()){var e=this;setTimeout(function(){e.fire("beforeload").fire("load")},0)}else{a.dom.addClass(document.body,this.config.bodyClassName),this.currentView=this.composer=new a.views.Composer(this,this.textareaElement,this.config),"function"==typeof this.config.parser&&this._initParser(),this.observe("beforeload",function(){this.synchronizer=new a.views.Synchronizer(this,this.textarea,this.composer),this.config.toolbar&&(this.toolbar=new a.toolbar.Toolbar(this,this.config.toolbar))});try{console.log("Heya! This page is using wysihtml5 for rich text editing. Check out https://github.com/xing/wysihtml5")}catch(f){}}},isCompatible:function(){return this._isCompatible},clear:function(){return this.currentView.clear(),this},getValue:function(a){return this.currentView.getValue(a)},setValue:function(a,b){return a?(this.currentView.setValue(a,b),this):this.clear()},focus:function(a){return this.currentView.focus(a),this},disable:function(){return this.currentView.disable(),this},enable:function(){return this.currentView.enable(),this},isEmpty:function(){return this.currentView.isEmpty()},hasPlaceholderSet:function(){return this.currentView.hasPlaceholderSet()},parse:function(b){var c=this.config.parser(b,this.config.parserRules,this.composer.sandbox.getDocument(),!0);return"object"==typeof b&&a.quirks.redraw(b),c},_initParser:function(){this.observe("paste:composer",function(){var b=this;b.composer.selection.executeAndRestore(function(){a.quirks.cleanPastedHTML(b.composer.element),b.parse(b.composer.element)},!0)}),this.observe("paste:textarea",function(){this.textarea.setValue(this.parse(this.textarea.getValue()))})}})}(wysihtml5);var Handlebars=function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return h[a]||"&amp;"}function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a){return a instanceof g?a.toString():a||0===a?(a=""+a,j.test(a)?a.replace(i,b):a):""}function e(a){return a||0===a?m(a)&&0===a.length?!0:!1:!0}var f={},g=a,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,j=/[&<>"'`]/;f.extend=c;var k=Object.prototype.toString;f.toString=k;var l=function(a){return"function"==typeof a};l(/x/)&&(l=function(a){return"function"==typeof a&&"[object Function]"===k.call(a)});var l;f.isFunction=l;var m=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===k.call(a):!1};return f.isArray=m,f.escapeExpression=d,f.isEmpty=e,f}(a),c=function(){"use strict";function a(){for(var a=Error.prototype.constructor.apply(this,arguments),b=0;b<c.length;b++)this[c[b]]=a[c[b]]}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new Error("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return m(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):l(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d=b.fn,e=b.inverse,f=0,g="";if(m(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(l(a))for(var h=a.length;h>f;f++)c&&(c.index=f,c.first=0===f,c.last=f===a.length-1),g+=d(a[f],{data:c});else for(var i in a)a.hasOwnProperty(i)&&(c&&(c.key=i),g+=d(a[i],{data:c}),f++);return 0===f&&(g=e(this)),g}),a.registerHelper("if",function(a,b){return m(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||g.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return m(a)&&(a=a.call(this)),g.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){p.log(a,b)}var f={},g=a,h=b,i="1.1.2";f.VERSION=i;var j=4;f.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};f.REVISION_CHANGES=k;var l=g.isArray,m=g.isFunction,n=g.toString,o="[object Object]";f.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:p,log:e,registerHelper:function(a,b,c){if(n.call(a)===o){if(c||b)throw new h("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){n.call(a)===o?g.extend(this.partials,a):this.partials[a]=b}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(p.level<=a){var c=p.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};f.logger=p,f.log=e;var q=function(a){var b={};return g.extend(b,a),b};return f.createFrame=q,f}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new Error("No environment passed to template");var c;c=b.compile?function(a,c,d,e,f,g){var i=h.apply(this,arguments);if(i)return i;var j={helpers:e,partials:f,data:g};return f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,j)}:function(a,b){var c=h.apply(this,arguments);if(c)return c;throw new l("The partial "+b+" could not be compiled when running in runtime-only mode")};var e={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:f,noop:i,compilerInfo:null};return function(c,f){f=f||{};var g,h,i=f.partial?f:b;f.partial||(g=f.helpers,h=f.partials);var j=a.call(e,i,c,g,h,f.data);return f.partial||d(e.compilerInfo),j}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e);return f}(),glob="undefined"==typeof window?global:window,Handlebars=glob.Handlebars||require("handlebars");this.wysihtml5=this.wysihtml5||{},this.wysihtml5.tpl=this.wysihtml5.tpl||{},this.wysihtml5.tpl.color=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+='" data-toggle="dropdown" tabindex="-1">\n    <span class="current-color">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.black,typeof g===j?g.apply(b):g))+'</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="black"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="black">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.black,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="silver"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="silver">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.silver,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="gray"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="gray">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.gray,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="maroon"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="maroon">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.maroon,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="red"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="red">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.red,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="purple"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="purple">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.purple,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="green"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="green">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.green,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="olive"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="olive">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.olive,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="navy"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="navy">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.navy,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="blue"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="blue">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.blue,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="orange"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="orange">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.orange,typeof g===j?g.apply(b):g))+"</a></li>\n  </ul>\n</li>\n"}),this.wysihtml5.tpl.emphasis=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li>\n  <div class="btn-group">\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.emphasis,g=null==g||g===!1?g:g.bold,typeof g===j?g.apply(b):g))+'</a>\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.emphasis,g=null==g||g===!1?g:g.italic,typeof g===j?g.apply(b):g))+'</a>\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.emphasis,g=null==g||g===!1?g:g.underline,typeof g===j?g.apply(b):g))+"</a>\n  </div>\n</li>\n"}),this.wysihtml5.tpl["font-styles"]=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+='" data-toggle="dropdown">\n    <span class="glyphicon glyphicon-font"></span>\n    <span class="current-font">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.normal,typeof g===j?g.apply(b):g))+'</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="div" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.normal,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.h1,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.h2,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.h3,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.h4,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.h5,typeof g===j?g.apply(b):g))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.font_styles,g=null==g||g===!1?g:g.h6,typeof g===j?g.apply(b):g))+"</a></li>\n  </ul>\n</li>\n"}),this.wysihtml5.tpl.html=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li>\n  <div class="btn-group">\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-action="change_view" title="'+k((g=b&&b.locale,g=null==g||g===!1?g:g.html,g=null==g||g===!1?g:g.edit,typeof g===j?g.apply(b):g))+'" tabindex="-1">\n      <span class="glyphicon glyphicon-pencil"></span>\n    </a>\n  </div>\n</li>\n'}),this.wysihtml5.tpl.image=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li>\n  <div class="bootstrap-wysihtml5-insert-image-modal modal fade">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>'+k((g=b&&b.locale,g=null==g||g===!1?g:g.image,g=null==g||g===!1?g:g.insert,typeof g===j?g.apply(b):g))+'</h3>\n        </div>\n        <div class="modal-body">\n          <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control">\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.image,g=null==g||g===!1?g:g.cancel,typeof g===j?g.apply(b):g))+'</a>\n          <a class="btn btn-primary" data-dismiss="modal">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.image,g=null==g||g===!1?g:g.insert,typeof g===j?g.apply(b):g))+'</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="insertImage" title="'+k((g=b&&b.locale,g=null==g||g===!1?g:g.image,g=null==g||g===!1?g:g.insert,typeof g===j?g.apply(b):g))+'" tabindex="-1">\n    <span class="glyphicon glyphicon-picture"></span>\n  </a>\n</li>\n'}),this.wysihtml5.tpl.link=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li>\n  <div class="bootstrap-wysihtml5-insert-link-modal modal fade">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>'+k((g=b&&b.locale,g=null==g||g===!1?g:g.link,g=null==g||g===!1?g:g.insert,typeof g===j?g.apply(b):g))+'</h3>\n        </div>\n        <div class="modal-body">\n          <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control">\n          <div class="checkbox"><label> <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked>'+k((g=b&&b.locale,g=null==g||g===!1?g:g.link,g=null==g||g===!1?g:g.target,typeof g===j?g.apply(b):g))+'</label></div>\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.link,g=null==g||g===!1?g:g.cancel,typeof g===j?g.apply(b):g))+'</a>\n          <a href="#" class="btn btn-primary" data-dismiss="modal">'+k((g=b&&b.locale,g=null==g||g===!1?g:g.link,g=null==g||g===!1?g:g.insert,typeof g===j?g.apply(b):g))+'</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="createLink" title="'+k((g=b&&b.locale,g=null==g||g===!1?g:g.link,g=null==g||g===!1?g:g.insert,typeof g===j?g.apply(b):g))+'" tabindex="-1">\n    <span class="glyphicon glyphicon-share"></span>\n  </a>\n</li>\n'
}),this.wysihtml5.tpl.lists=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li>\n  <div class="btn-group">\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="insertUnorderedList" title="'+k((g=b&&b.locale,g=null==g||g===!1?g:g.lists,g=null==g||g===!1?g:g.unordered,typeof g===j?g.apply(b):g))+'" tabindex="-1"><span class="glyphicon glyphicon-list"></span></a>\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="insertOrderedList" title="'+k((g=b&&b.locale,g=null==g||g===!1?g:g.lists,g=null==g||g===!1?g:g.ordered,typeof g===j?g.apply(b):g))+'" tabindex="-1"><span class="glyphicon glyphicon-th-list"></span></a>\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="Outdent" title="'+k((g=b&&b.locale,g=null==g||g===!1?g:g.lists,g=null==g||g===!1?g:g.outdent,typeof g===j?g.apply(b):g))+'" tabindex="-1"><span class="glyphicon glyphicon-indent-right"></span></a>\n    <a class="btn ',h=c["if"].call(b,(g=b&&b.options,null==g||g===!1?g:g.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="Indent" title="'+k((g=b&&b.locale,g=null==g||g===!1?g:g.lists,g=null==g||g===!1?g:g.indent,typeof g===j?g.apply(b):g))+'" tabindex="-1"><span class="glyphicon glyphicon-indent-left"></span></a>\n  </div>\n</li>\n'}),"object"==typeof exports&&exports&&(module.exports=this.wysihtml5.tpl),!function(a,b){"use strict";var c=function(a,c,d){return b.tpl[a]({locale:c,options:d})},d=function(c,d){this.el=c;var e=d||f;for(var g in e.customTemplates)b.tpl[g]=e.customTemplates[g];this.toolbar=this.createToolbar(c,e),this.editor=this.createEditor(d),window.editor=this.editor,a("iframe.wysihtml5-sandbox").each(function(b,c){a(c.contentWindow).off("focus.wysihtml5").on({"focus.wysihtml5":function(){a("li.dropdown").removeClass("open")}})})};d.prototype={constructor:d,createEditor:function(c){c=c||{},c=a.extend(!0,{},c),c.toolbar=this.toolbar[0];var d=new b.Editor(this.el[0],c);if(c&&c.events)for(var e in c.events)d.on(e,c.events[e]);return d},createToolbar:function(b,d){var e=this,h=a("<ul/>",{"class":"wysihtml5-toolbar",style:"display:none"}),i=d.locale||f.locale||"en";for(var j in f){var k=!1;void 0!==d[j]?d[j]===!0&&(k=!0):k=f[j],k===!0&&(h.append(c(j,g[i],d)),"html"===j&&this.initHtml(h),"link"===j&&this.initInsertLink(h),"image"===j&&this.initInsertImage(h))}if(d.toolbar)for(j in d.toolbar)h.append(d.toolbar[j]);return h.find('a[data-wysihtml5-command="formatBlock"]').click(function(b){var c=b.target||b.srcElement,d=a(c);e.toolbar.find(".current-font").text(d.html())}),h.find('a[data-wysihtml5-command="foreColor"]').click(function(b){var c=b.target||b.srcElement,d=a(c);e.toolbar.find(".current-color").text(d.html())}),this.el.before(h),h},initHtml:function(a){var b='a[data-wysihtml5-action="change_view"]';a.find(b).click(function(){a.find("a.btn").not(b).toggleClass("disabled")})},initInsertImage:function(b){var c,d=this,e=b.find(".bootstrap-wysihtml5-insert-image-modal"),f=e.find(".bootstrap-wysihtml5-insert-image-url"),g=e.find("a.btn-primary"),h=f.val(),i=function(){var a=f.val();f.val(h),d.editor.currentView.element.focus(),c&&(d.editor.composer.selection.setBookmark(c),c=null),d.editor.composer.commands.exec("insertImage",a)};f.keypress(function(a){13==a.which&&(i(),e.modal("hide"))}),g.click(i),e.on("shown",function(){f.focus()}),e.on("hide",function(){d.editor.currentView.element.focus()}),b.find("a[data-wysihtml5-command=insertImage]").click(function(){var b=a(this).hasClass("wysihtml5-command-active");return b?!0:(d.editor.currentView.element.focus(!1),c=d.editor.composer.selection.getBookmark(),e.appendTo("body").modal("show"),e.on("click.dismiss.modal",'[data-dismiss="modal"]',function(a){a.stopPropagation()}),!1)})},initInsertLink:function(b){var c,d=this,e=b.find(".bootstrap-wysihtml5-insert-link-modal"),f=e.find(".bootstrap-wysihtml5-insert-link-url"),g=e.find(".bootstrap-wysihtml5-insert-link-target"),h=e.find("a.btn-primary"),i=f.val(),j=function(){var a=f.val();f.val(i),d.editor.currentView.element.focus(),c&&(d.editor.composer.selection.setBookmark(c),c=null);var b=g.prop("checked");d.editor.composer.commands.exec("createLink",{href:a,target:b?"_blank":"_self",rel:b?"nofollow":""})};f.keypress(function(a){13==a.which&&(j(),e.modal("hide"))}),h.click(j),e.on("shown",function(){f.focus()}),e.on("hide",function(){d.editor.currentView.element.focus()}),b.find("a[data-wysihtml5-command=createLink]").click(function(){var b=a(this).hasClass("wysihtml5-command-active");return b?!0:(d.editor.currentView.element.focus(!1),c=d.editor.composer.selection.getBookmark(),e.appendTo("body").modal("show"),e.on("click.dismiss.modal",'[data-dismiss="modal"]',function(a){a.stopPropagation()}),!1)})}};var e={resetDefaults:function(){a.fn.wysihtml5.defaultOptions=a.extend(!0,{},a.fn.wysihtml5.defaultOptionsCache)},bypassDefaults:function(b){return this.each(function(){var c=a(this);c.data("wysihtml5",new d(c,b))})},shallowExtend:function(b){var c=a.extend({},a.fn.wysihtml5.defaultOptions,b||{},a(this).data()),d=this;return e.bypassDefaults.apply(d,[c])},deepExtend:function(b){var c=a.extend(!0,{},a.fn.wysihtml5.defaultOptions,b||{}),d=this;return e.bypassDefaults.apply(d,[c])},init:function(a){var b=this;return e.shallowExtend.apply(b,[a])}};a.fn.wysihtml5=function(b){return e[b]?e[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?(a.error("Method "+b+" does not exist on jQuery.wysihtml5"),void 0):e.init.apply(this,arguments)},a.fn.wysihtml5.Constructor=d;var f=a.fn.wysihtml5.defaultOptions={"font-styles":!0,color:!1,emphasis:!0,lists:!0,html:!1,link:!0,image:!0,events:{},parserRules:{classes:{"wysiwyg-color-silver":1,"wysiwyg-color-gray":1,"wysiwyg-color-white":1,"wysiwyg-color-maroon":1,"wysiwyg-color-red":1,"wysiwyg-color-purple":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-olive":1,"wysiwyg-color-yellow":1,"wysiwyg-color-navy":1,"wysiwyg-color-blue":1,"wysiwyg-color-teal":1,"wysiwyg-color-aqua":1,"wysiwyg-color-orange":1},tags:{b:{},i:{},strong:{},em:{},p:{},br:{},ol:{},ul:{},li:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},blockquote:{},u:1,img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"}},a:{check_attributes:{href:"url"},set_attributes:{target:"_blank",rel:"nofollow"}},span:1,div:1,code:1,pre:1}},locale:"en"};"undefined"==typeof a.fn.wysihtml5.defaultOptionsCache&&(a.fn.wysihtml5.defaultOptionsCache=a.extend(!0,{},a.fn.wysihtml5.defaultOptions));var g=a.fn.wysihtml5.locale={}}(window.jQuery,window.wysihtml5),function(a){a.fn.wysihtml5.locale.en=a.fn.wysihtml5.locale["en-US"]={font_styles:{normal:"Normal text",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"},emphasis:{bold:"Bold",italic:"Italic",underline:"Underline"},lists:{unordered:"Unordered list",ordered:"Ordered list",outdent:"Outdent",indent:"Indent"},link:{insert:"Insert link",cancel:"Cancel",target:"Open link in new window"},image:{insert:"Insert image",cancel:"Cancel"},html:{edit:"Edit HTML"},colours:{black:"Black",silver:"Silver",gray:"Grey",maroon:"Maroon",red:"Red",purple:"Purple",green:"Green",olive:"Olive",navy:"Navy",blue:"Blue",orange:"Orange"}}}(jQuery);






