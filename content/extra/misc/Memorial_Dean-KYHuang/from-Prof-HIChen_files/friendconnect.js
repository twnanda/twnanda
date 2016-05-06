window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {/*http://www-a-fc-opensocial.googleusercontent.com/gadgets/js/rpc:core.util.js?c=1*/
window['___jsl'] = window['___jsl'] || {};(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});window['___jsl'] = window['___jsl'] || {};window['___jsl']['uc'] = 'http:\/\/www-a-fc-opensocial.googleusercontent.com\/gadgets\/js\/rpc:core.util.js?c=1';window['___jsl']['u'] = 'http:\/\/www-a-fc-opensocial.googleusercontent.com\/gadgets\/js\/rpc:core.util.js?c=1';window['___jsl']['f'] = ['rpc','core.util'];window['___jsl']['ms'] = 'https://apis.google.com';(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});
/* [start] feature=gapi-globals */
var gapi=window.gapi||{};gapi.client=window.gapi&&window.gapi.client||{};
;
;

/* [end] feature=gapi-globals */

/* [start] feature=globals */
var gadgets=window.gadgets||{},shindig=window.shindig||{},osapi=window.osapi=window.osapi||{},google=window.google||{};
;
;

/* [end] feature=globals */

/* [start] feature=taming */
var safeJSON=window.safeJSON;
var tamings___=window.tamings___||[];
var bridge___;
var caja___=window.caja___;
var ___=window.___;;

/* [end] feature=taming */

/* [start] feature=core.config.base */
window['___cfg'] = window['___cfg'] || window['___gcfg'];;
if(!window.gadgets["config"]){gadgets.config=function(){var f;
var h={};
var b={};
function c(j,l){for(var k in l){if(!l.hasOwnProperty(k)){continue
}if(typeof j[k]==="object"&&typeof l[k]==="object"){c(j[k],l[k])
}else{j[k]=l[k]
}}}function i(){var j=document.scripts||document.getElementsByTagName("script");
if(!j||j.length==0){return null
}var m;
if(f.u){for(var k=0;
!m&&k<j.length;
++k){var l=j[k];
if(l.src&&l.src.indexOf(f.u)==0){m=l
}}}if(!m){m=j[j.length-1]
}if(!m.src){return null
}return m
}function a(j){var k="";
if(j.nodeType==3||j.nodeType==4){k=j.nodeValue
}else{if(j.innerText){k=j.innerText
}else{if(j.innerHTML){k=j.innerHTML
}else{if(j.firstChild){var l=[];
for(var m=j.firstChild;
m;
m=m.nextSibling){l.push(a(m))
}k=l.join("")
}}}}return k
}function e(k){if(!k){return{}
}var j;
while(k.charCodeAt(k.length-1)==0){k=k.substring(0,k.length-1)
}try{j=(new Function("return ("+k+"\n)"))()
}catch(l){}if(typeof j==="object"){return j
}try{j=(new Function("return ({"+k+"\n})"))()
}catch(l){}return typeof j==="object"?j:{}
}function g(n){var p=window.___cfg;
if(p){c(n,p)
}var o=i();
if(!o){return
}var k=a(o);
var j=e(k);
if(f.f&&f.f.length==1){var m=f.f[0];
if(!j[m]){var l={};
l[f.f[0]]=j;
j=l
}}c(n,j)
}function d(o){for(var l in h){if(h.hasOwnProperty(l)){var n=h[l];
for(var m=0,k=n.length;
m<k;
++m){o(l,n[m])
}}}}return{register:function(l,k,j,m){var n=h[l];
if(!n){n=[];
h[l]=n
}n.push({validators:k||{},callback:j,callOnUpdate:m})
},get:function(j){if(j){return b[j]||{}
}return b
},init:function(k,j){f=window.___jsl||{};
c(b,k);
g(b);
var l=window.___config||{};
c(b,l);
d(function(q,p){var o=b[q];
if(o&&!j){var m=p.validators;
for(var n in m){if(m.hasOwnProperty(n)){if(!m[n](o[n])){throw new Error('Invalid config value "'+o[n]+'" for parameter "'+n+'" in component "'+q+'"')
}}}}if(p.callback){p.callback(b)
}})
},update:function(k,p){var o=(window.gapi&&window.gapi["config"]&&window.gapi["config"]["update"]);
if(!p&&o){o(k)
}var n=[];
d(function(q,j){if(k.hasOwnProperty(q)||(p&&b&&b[q])){if(j.callback&&j.callOnUpdate){n.push(j.callback)
}}});
b=p?{}:b||{};
c(b,k);
for(var m=0,l=n.length;
m<l;
++m){n[m](b)
}}}
}()
}else{gadgets.config=window.gadgets["config"];
gadgets.config.register=gadgets.config.register;
gadgets.config.get=gadgets.config.get;
gadgets.config.init=gadgets.config.init;
gadgets.config.update=gadgets.config.update
};;

/* [end] feature=core.config.base */

/* [start] feature=core.log */
gadgets.log=(function(){var e=1;
var a=2;
var f=3;
var c=4;
var d=function(i){b(e,i)
};
gadgets.warn=function(i){b(a,i)
};
gadgets.error=function(i){b(f,i)
};
gadgets.setLogLevel=function(i){h=i
};
function b(k,i){if(k<h||!g){return
}if(k===a&&g.warn){g.warn(i)
}else{if(k===f&&g.error){try{g.error(i)
}catch(j){}}else{if(g.log){g.log(i)
}}}}d.INFO=e;
d.WARNING=a;
d.NONE=c;
var h=e;
var g=window.console?window.console:window.opera?window.opera.postError:undefined;
return d
})();;
;

/* [end] feature=core.log */

/* [start] feature=gapi.util-globals */
gapi.util=window.gapi&&window.gapi.util||{};
;

/* [end] feature=gapi.util-globals */

/* [start] feature=core.config */
(function(){gadgets.config.EnumValidator=function(d){var c=[];
if(arguments.length>1){for(var b=0,a;
(a=arguments[b]);
++b){c.push(a)
}}else{c=d
}return function(f){for(var e=0,g;
(g=c[e]);
++e){if(f===c[e]){return true
}}return false
}
};
gadgets.config.RegExValidator=function(a){return function(b){return a.test(b)
}
};
gadgets.config.ExistsValidator=function(a){return typeof a!=="undefined"
};
gadgets.config.NonEmptyStringValidator=function(a){return typeof a==="string"&&a.length>0
};
gadgets.config.BooleanValidator=function(a){return typeof a==="boolean"
};
gadgets.config.LikeValidator=function(a){return function(c){for(var d in a){if(a.hasOwnProperty(d)){var b=a[d];
if(!b(c[d])){return false
}}}return true
}
}
})();;

/* [end] feature=core.config */

/* [start] feature=core.util.base */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.makeClosure=function(d,f,e){var c=[];
for(var b=2,a=arguments.length;
b<a;
++b){c.push(arguments[b])
}return function(){var g=c.slice();
for(var k=0,h=arguments.length;
k<h;
++k){g.push(arguments[k])
}return f.apply(d,g)
}
};
gadgets.util.makeEnum=function(b){var c,a,d={};
for(c=0;
(a=b[c]);
++c){d[a]=a
}return d
}
})();;

/* [end] feature=core.util.base */

/* [start] feature=core.util.dom */
gadgets.util=gadgets.util||{};
(function(){var c="http://www.w3.org/1999/xhtml";
function b(f,e){var h=e||{};
for(var g in h){if(h.hasOwnProperty(g)){f[g]=h[g]
}}}function d(g,f){var e=["<",g];
var i=f||{};
for(var h in i){if(i.hasOwnProperty(h)){e.push(" ");
e.push(h);
e.push('="');
e.push(gadgets.util.escapeString(i[h]));
e.push('"')
}}e.push("></");
e.push(g);
e.push(">");
return e.join("")
}function a(f){var g="";
if(f.nodeType==3||f.nodeType==4){g=f.nodeValue
}else{if(f.innerText){g=f.innerText
}else{if(f.innerHTML){g=f.innerHTML
}else{if(f.firstChild){var e=[];
for(var h=f.firstChild;
h;
h=h.nextSibling){e.push(a(h))
}g=e.join("")
}}}}return g
}gadgets.util.createElement=function(f){var e;
if((!document.body)||document.body.namespaceURI){try{e=document.createElementNS(c,f)
}catch(g){}}return e||document.createElement(f)
};
gadgets.util.createIframeElement=function(g){var i=gadgets.util.createElement("iframe");
try{var e=d("iframe",g);
var f=gadgets.util.createElement(e);
if(f&&((!i)||((f.tagName==i.tagName)&&(f.namespaceURI==i.namespaceURI)))){i=f
}}catch(h){}b(i,g);
return i
};
gadgets.util.getBodyElement=function(){if(document.body){return document.body
}try{var f=document.getElementsByTagNameNS(c,"body");
if(f&&(f.length==1)){return f[0]
}}catch(e){}return document.documentElement||document
};
gadgets.util.getInnerText=function(e){return a(e)
}
})();;

/* [end] feature=core.util.dom */

/* [start] feature=core.util.event */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.attachBrowserEvent=function(c,b,d,a){if(typeof c.addEventListener!="undefined"){c.addEventListener(b,d,a)
}else{if(typeof c.attachEvent!="undefined"){c.attachEvent("on"+b,d)
}else{gadgets.warn("cannot attachBrowserEvent: "+b)
}}};
gadgets.util.removeBrowserEvent=function(c,b,d,a){if(c.removeEventListener){c.removeEventListener(b,d,a)
}else{if(c.detachEvent){c.detachEvent("on"+b,d)
}else{gadgets.warn("cannot removeBrowserEvent: "+b)
}}}
})();;

/* [end] feature=core.util.event */

/* [start] feature=core.util.onload */
gadgets.util=gadgets.util||{};
(function(){var a=[];
gadgets.util.registerOnLoadHandler=function(b){a.push(b)
};
gadgets.util.runOnLoadHandlers=function(){for(var c=0,b=a.length;
c<b;
++c){a[c]()
}}
})();;

/* [end] feature=core.util.onload */

/* [start] feature=core.util.string */
gadgets.util=gadgets.util||{};
(function(){var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true,65282:true,65287:true,65308:true,65310:true,65340:true};
function b(c,d){return String.fromCharCode(d)
}gadgets.util.escape=function(c,g){if(!c){return c
}else{if(typeof c==="string"){return gadgets.util.escapeString(c)
}else{if(typeof c==="array"){for(var f=0,d=c.length;
f<d;
++f){c[f]=gadgets.util.escape(c[f])
}}else{if(typeof c==="object"&&g){var e={};
for(var h in c){if(c.hasOwnProperty(h)){e[gadgets.util.escapeString(h)]=gadgets.util.escape(c[h],true)
}}return e
}}}}return c
};
gadgets.util.escapeString=function(g){if(!g){return g
}var d=[],f,h;
for(var e=0,c=g.length;
e<c;
++e){f=g.charCodeAt(e);
h=a[f];
if(h===true){d.push("&#",f,";")
}else{if(h!==false){d.push(g.charAt(e))
}}}return d.join("")
};
gadgets.util.unescapeString=function(c){if(!c){return c
}return c.replace(/&#([0-9]+);/g,b)
}
})();;

/* [end] feature=core.util.string */

/* [start] feature=core.util.urlparams */
gadgets.util=gadgets.util||{};
(function(){var a=null;
function b(e){var f;
var c=e.indexOf("?");
var d=e.indexOf("#");
if(d===-1){f=e.substr(c+1)
}else{f=[e.substr(c+1,d-c-1),"&",e.substr(d+1)].join("")
}return f.split("&")
}gadgets.util.getUrlParameters=function(p){var d=typeof p==="undefined";
if(a!==null&&d){return a
}var l={};
var f=b(p||document.location.href);
var n=window.decodeURIComponent?decodeURIComponent:unescape;
for(var h=0,g=f.length;
h<g;
++h){var m=f[h].indexOf("=");
if(m===-1){continue
}var c=f[h].substring(0,m);
var o=f[h].substring(m+1);
o=o.replace(/\+/g," ");
try{l[c]=n(o)
}catch(k){}}if(d){a=l
}return l
};
gadgets.util.getUrlParameters()
})();;

/* [end] feature=core.util.urlparams */

/* [start] feature=gapi.util.getOrigin */
gapi.util.getOrigin=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);0>a.indexOf("://")&&(a=window.location.protocol+"//"+a);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));var a=a.substring(0,a.indexOf("://")),c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
;

/* [end] feature=gapi.util.getOrigin */

/* [start] feature=core.json */
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var a=/___$/;
function b(d,e){var c=this[d];
return c
}return{parse:function(d){try{return window.JSON.parse(d)
}catch(c){return false
}},stringify:function(d){var h=window.JSON.stringify;
function f(e){return h.call(this,e,b)
}var g=(Array.prototype.toJSON&&h([{x:1}])==='"[{\\"x\\": 1}]"')?f:h;
try{return g(d,function(i,e){return !a.test(i)?e:void 0
})
}catch(c){return null
}}}
})()
};;
;
if(!(window.JSON&&window.JSON.parse&&window.JSON.stringify)){gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/[\"\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(/___$/.test(k)){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}return""
}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
gadgets.json.flatten=function(c){var d={};
if(c===null||c===undefined){return d
}for(var a in c){if(c.hasOwnProperty(a)){var b=c[a];
if(null===b||undefined===b){continue
}d[a]=(typeof b==="string")?b:gadgets.json.stringify(b)
}}return d
};;

/* [end] feature=core.json */

/* [start] feature=core.util */
gadgets.util=gadgets.util||{};
(function(){var b={};
var a={};
function c(d){b=d["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,c)
}gadgets.util.getFeatureParameters=function(d){return typeof b[d]==="undefined"?null:b[d]
};
gadgets.util.hasFeature=function(d){return typeof b[d]!=="undefined"
};
gadgets.util.getServices=function(){return a
}
})();;

/* [end] feature=core.util */

/* [start] feature=rpc */
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var e,d;
var c=true;
function b(h,i,g){if(typeof window.addEventListener!="undefined"){window.addEventListener(h,i,g)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("on"+h,i)
}}}function a(h,i,g){if(window.removeEventListener){window.removeEventListener(h,i,g)
}else{if(window.detachEvent){window.detachEvent("on"+h,i)
}}}function f(h){var i=gadgets.json.parse(h.data);
if(!i||!i.f){return
}var g=gadgets.rpc.getTargetOrigin(i.f);
if(c&&(typeof h.origin!=="undefined"?h.origin!==g:h.domain!==/^.+:\/\/([^:]+).*/.exec(g)[1])){return
}e(i,h.origin)
}return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(h,i){function g(k){var j=k&&k.rpc||{};
if(String(j.disableForceSecure)==="true"){c=false
}}gadgets.config.register("rpc",null,g);
e=h;
d=i;
b("message",f,false);
d("..",true);
return true
},setup:function(h,g){d(h,true);
return true
},call:function(h,k,j){var g=gadgets.rpc.getTargetOrigin(h);
var i=gadgets.rpc._getTargetWin(h);
if(g){window.setTimeout(function(){i.postMessage(gadgets.json.stringify(j),g)
},0)
}else{gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}return true
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.frameElement){gadgets.rpctx.frameElement=function(){var e="__g2c_rpc";
var b="__c2g_rpc";
var d;
var c;
function a(g,k,j){try{if(k!==".."){var f=window.frameElement;
if(typeof f[e]==="function"){if(typeof f[e][b]!=="function"){f[e][b]=function(l){d(gadgets.json.parse(l))
}
}f[e](gadgets.json.stringify(j));
return true
}}else{var i=document.getElementById(g);
if(typeof i[e]==="function"&&typeof i[e][b]==="function"){i[e][b](gadgets.json.stringify(j));
return true
}}}catch(h){}return false
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(f,g){d=f;
c=g;
return true
},setup:function(j,f){if(j!==".."){try{var i=document.getElementById(j);
i[e]=function(k){d(gadgets.json.parse(k))
}
}catch(h){return false
}}if(j===".."){c("..",true);
var g=function(){window.setTimeout(function(){gadgets.rpc.call(j,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(g)
}return true
},call:function(f,h,g){return a(f,h,g)
}}
}()
};;
;
;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.nix){gadgets.rpctx.nix=function(){var c="GRPC____NIXVBS_wrapper";
var d="GRPC____NIXVBS_get_wrapper";
var f="GRPC____NIXVBS_handle_message";
var b="GRPC____NIXVBS_create_channel";
var a=10;
var j=500;
var i={};
var h;
var g=0;
function e(){var l=i[".."];
if(l){return
}if(++g>a){gadgets.warn("Nix transport setup failed, falling back...");
h("..",false);
return
}if(!l&&window.opener&&"GetAuthToken" in window.opener){l=window.opener;
if(l.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var k=gadgets.rpc.getAuthToken("..");
l.CreateChannel(window[d]("..",k),k);
i[".."]=l;
window.opener=null;
h("..",true);
return
}}window.setTimeout(function(){e()
},j)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(l,m){h=m;
if(typeof window[d]!=="unknown"){window[f]=function(o){window.setTimeout(function(){l(gadgets.json.parse(o))
},0)
};
window[b]=function(o,q,p){if(gadgets.rpc.getAuthToken(o)===p){i[o]=q;
h(o,true)
}};
var k="Class "+c+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+f+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+b+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+d+"(name, auth)\nDim wrap\nSet wrap = New "+c+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+d+" = wrap\nEnd Function";
try{window.execScript(k,"vbscript")
}catch(n){return false
}}return true
},setup:function(o,k){if(o===".."){e();
return true
}try{var m=document.getElementById(o);
var n=window[d](o,k);
m.contentWindow.opener=n
}catch(l){return false
}return true
},call:function(k,n,m){try{if(i[k]){i[k].SendMessage(gadgets.json.stringify(m))
}}catch(l){return false
}return true
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.rmr){gadgets.rpctx.rmr=function(){var h=500;
var f=10;
var i={};
var a=gadgets.util.getUrlParameters()["parent"];
var c;
var j;
function l(q,o,p,n){var r=function(){document.body.appendChild(q);
q.src="about:blank";
if(n){q.onload=function(){m(n)
}
}q.src=o+"#"+p
};
if(document.body){r()
}else{gadgets.util.registerOnLoadHandler(function(){r()
})
}}function d(q){if(typeof i[q]==="object"){return
}var r=document.createElement("iframe");
var o=r.style;
o.position="absolute";
o.top="0px";
o.border="0";
o.opacity="0";
o.width="10px";
o.height="1px";
r.id="rmrtransport-"+q;
r.name=r.id;
var p=gadgets.rpc.getRelayUrl(q);
var n=gadgets.rpc.getOrigin(a);
if(!p){p=n+"/robots.txt"
}i[q]={frame:r,receiveWindow:null,relayUri:p,relayOrigin:n,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0,verifySendToken:String(Math.random()),verifyRecvToken:null,originVerified:false};
if(q!==".."){l(r,p,b(q))
}e(q)
}function e(p){var r=null;
i[p].searchCounter++;
try{var o=gadgets.rpc._getTargetWin(p);
if(p===".."){r=o.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{r=o.frames["rmrtransport-.."]
}}catch(q){}var n=false;
if(r){n=g(p,r)
}if(!n){if(i[p].searchCounter>f){return
}window.setTimeout(function(){e(p)
},h)
}}function k(o,q,u,t){var p=null;
if(u!==".."){p=i[".."]
}else{p=i[o]
}if(p){if(q!==gadgets.rpc.ACK){p.queue.push(t)
}if(p.waiting||(p.queue.length===0&&!(q===gadgets.rpc.ACK&&t&&t.ackAlone===true))){return true
}if(p.queue.length>0){p.waiting=true
}var n=p.relayUri+"#"+b(o);
try{p.frame.contentWindow.location=n;
var r=p.width==10?20:10;
p.frame.style.width=r+"px";
p.width=r
}catch(s){return false
}}return true
}function b(o){var p=i[o];
var n={id:p.sendId};
if(p){n.d=Array.prototype.slice.call(p.queue,0);
var q={s:gadgets.rpc.ACK,id:p.recvId};
if(!p.originVerified){q.sendToken=p.verifySendToken
}if(p.verifyRecvToken){q.recvToken=p.verifyRecvToken
}n.d.push(q)
}return gadgets.json.stringify(n)
}function m(y){var v=i[y];
var r=v.receiveWindow.location.hash.substring(1);
var z=gadgets.json.parse(decodeURIComponent(r))||{};
var o=z.d||[];
var p=false;
var u=false;
var w=0;
var n=(v.recvId-z.id);
for(var q=0;
q<o.length;
++q){var t=o[q];
if(t.s===gadgets.rpc.ACK){j(y,true);
v.verifyRecvToken=t.sendToken;
if(!v.originVerified&&t.recvToken&&String(t.recvToken)==String(v.verifySendToken)){v.originVerified=true
}if(v.waiting){u=true
}v.waiting=false;
var s=Math.max(0,t.id-v.sendId);
v.queue.splice(0,s);
v.sendId=Math.max(v.sendId,t.id||0);
continue
}p=true;
if(++w<=n){continue
}++v.recvId;
c(t,v.originVerified?v.relayOrigin:undefined)
}if(p||(u&&v.queue.length>0)){var x=(y==="..")?gadgets.rpc.RPC_ID:"..";
k(y,gadgets.rpc.ACK,x,{ackAlone:p})
}}function g(q,t){var p=i[q];
try{var o=false;
o="document" in t;
if(!o){return false
}o=typeof t.document=="object";
if(!o){return false
}var s=t.location.href;
if(s==="about:blank"){return false
}}catch(n){return false
}p.receiveWindow=t;
function r(){m(q)
}if(typeof t.attachEvent==="undefined"){t.onresize=r
}else{t.attachEvent("onresize",r)
}if(q===".."){l(p.frame,p.relayUri,b(q),q)
}else{m(q)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(n,o){c=n;
j=o;
return true
},setup:function(p,n){try{d(p)
}catch(o){gadgets.warn("Caught exception setting up RMR: "+o);
return false
}return true
},call:function(n,p,o){return k(n,o.s,p,o)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.ifpc){gadgets.rpctx.ifpc=function(){var h=[];
var e=0;
var d;
var a=2000;
var g={};
function c(m){var k=[];
for(var n=0,l=m.length;
n<l;
++n){k.push(encodeURIComponent(gadgets.json.stringify(m[n])))
}return k.join("&")
}function b(m){var k;
for(var j=h.length-1;
j>=0;
--j){var n=h[j];
try{if(n&&(n.recyclable||n.readyState==="complete")){n.parentNode.removeChild(n);
if(window.ActiveXObject){h[j]=n=null;
h.splice(j,1)
}else{n.recyclable=false;
k=n;
break
}}}catch(l){}}if(!k){k=document.createElement("iframe");
k.style.border=k.style.width=k.style.height="0px";
k.style.visibility="hidden";
k.style.position="absolute";
k.onload=function(){this.recyclable=true
};
h.push(k)
}k.src=m;
window.setTimeout(function(){document.body.appendChild(k)
},0)
}function f(j,l){for(var k=l-1;
k>=0;
--k){if(typeof j[k]==="undefined"){return false
}}return true
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(i,j){d=j;
d("..",true);
return true
},setup:function(j,i){d(j,true);
return true
},call:function(s,r,q){var l=gadgets.rpc.getRelayUrl(s);
++e;
if(!l){gadgets.warn("No relay file assigned for IFPC");
return false
}var i=null,j=[];
if(q.l){var o=q.a;
i=[l,"#",c([r,e,1,0,c([r,q.s,"","",r].concat(o))])].join("");
j.push(i)
}else{i=[l,"#",s,"&",r,"@",e,"&"].join("");
var t=encodeURIComponent(gadgets.json.stringify(q)),n=a-i.length,p=Math.ceil(t.length/n),m=0,k;
while(t.length>0){k=t.substring(0,n);
t=t.substring(n);
j.push([i,p,"&",m,"&",k].join(""));
m+=1
}}do{b(j.shift())
}while(j.length>0);
return true
},_receiveMessage:function(i,n){var o=i[1],m=parseInt(i[2],10),k=parseInt(i[3],10),l=i[i.length-1],j=m===1;
if(m>1){if(!g[o]){g[o]=[]
}g[o][k]=l;
if(f(g[o],m)){l=g[o].join("");
delete g[o];
j=true
}}if(j){n(gadgets.json.parse(decodeURIComponent(l)))
}}}
}()
};;
if(!window.gadgets||!window.gadgets["rpc"]){gadgets.rpc=function(){var M="__cb";
var S="";
var T="__ack";
var f=500;
var G=10;
var b="|";
var u="callback";
var g="origin";
var r="referer";
var s="legacy__";
var q={};
var W={};
var D={};
var B={};
var z=0;
var l={};
var m={};
var d={};
var n={};
var E={};
var e=null;
var p=null;
var A=(window.top!==window.self);
var v=window.name;
var J=function(){};
var P=0;
var Y=1;
var a=2;
var x=window.console;
var V=x&&x.log&&function(ae){x.log(ae)
}||function(){};
var R=(function(){function ae(af){return function(){V(af+": call ignored")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:ae("init"),setup:ae("setup"),call:ae("call")}
})();
if(gadgets.util){d=gadgets.util.getUrlParameters()
}function K(){if(d.rpctx=="flash"){return gadgets.rpctx.flash
}if(d.rpctx=="rmr"){return gadgets.rpctx.rmr
}return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?(gadgets.rpctx.flash?gadgets.rpctx.flash:(gadgets.rpctx.nix?gadgets.rpctx.nix:gadgets.rpctx.ifpc)):navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function k(aj,ah){if(n[aj]){return
}var af=H;
if(!ah){af=R
}n[aj]=af;
var ae=E[aj]||[];
for(var ag=0;
ag<ae.length;
++ag){var ai=ae[ag];
ai.t=F(aj);
af.call(aj,ai.f,ai)
}E[aj]=[]
}var I=false,U=false;
function N(){if(U){return
}function ae(){I=true
}if(typeof window.addEventListener!="undefined"){window.addEventListener("unload",ae,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onunload",ae)
}}U=true
}function j(ae,ai,af,ah,ag){if(!B[ai]||B[ai]!==af){gadgets.error("Invalid auth token. "+B[ai]+" vs "+af);
J(ai,a)
}ag.onunload=function(){if(m[ai]&&!I){J(ai,Y);
gadgets.rpc.removeReceiver(ai)
}};
N();
ah=gadgets.json.parse(decodeURIComponent(ah))
}function Z(ai,af){if(ai&&typeof ai.s==="string"&&typeof ai.f==="string"&&ai.a instanceof Array){if(B[ai.f]){if(B[ai.f]!==ai.t){gadgets.error("Invalid auth token. "+B[ai.f]+" vs "+ai.t);
J(ai.f,a)
}}if(ai.s===T){window.setTimeout(function(){k(ai.f,true)
},0);
return
}if(ai.c){ai[u]=function(aj){var ak=ai.g?s:"";
gadgets.rpc.call(ai.f,ak+M,null,ai.c,aj)
}
}if(af){var ag=t(af);
ai[g]=af;
var ah=ai.r;
if(!ah||t(ah)!=ag){ah=af
}ai[r]=ah
}var ae=(q[ai.s]||q[S]).apply(ai,ai.a);
if(ai.c&&typeof ae!=="undefined"){gadgets.rpc.call(ai.f,M,null,ai.c,ae)
}}}function t(ag){if(!ag){return""
}ag=((ag.split("#"))[0].split("?"))[0];
ag=ag.toLowerCase();
if(ag.indexOf("//")==0){ag=window.location.protocol+ag
}if(ag.indexOf("://")==-1){ag=window.location.protocol+"//"+ag
}var ah=ag.substring(ag.indexOf("://")+3);
var ae=ah.indexOf("/");
if(ae!=-1){ah=ah.substring(0,ae)
}var aj=ag.substring(0,ag.indexOf("://"));
var ai="";
var ak=ah.indexOf(":");
if(ak!=-1){var af=ah.substring(ak+1);
ah=ah.substring(0,ak);
if((aj==="http"&&af!=="80")||(aj==="https"&&af!=="443")){ai=":"+af
}}return aj+"://"+ah+ai
}function C(af,ae){return"/"+af+(ae?b+ae:"")
}function y(ah){if(ah.charAt(0)=="/"){var af=ah.indexOf(b);
var ag=af>0?ah.substring(1,af):ah.substring(1);
var ae=af>0?ah.substring(af+1):null;
return{id:ag,origin:ae}
}else{return null
}}function ad(ag){if(typeof ag==="undefined"||ag===".."){return window.parent
}var af=y(ag);
if(af){return window.top.frames[af.id]
}ag=String(ag);
var ae=window.frames[ag];
if(ae){return ae
}ae=document.getElementById(ag);
if(ae&&ae.contentWindow){return ae.contentWindow
}return null
}function L(ah){var ag=null;
var ae=O(ah);
if(ae){ag=ae
}else{var af=y(ah);
if(af){ag=af.origin
}else{if(ah==".."){ag=d.parent
}else{ag=document.getElementById(ah).src
}}}return t(ag)
}var H=K();
q[S]=function(){V("Unknown RPC service: "+this.s)
};
q[M]=function(af,ae){var ag=l[af];
if(ag){delete l[af];
ag.call(this,ae)
}};
function X(ag,ae){if(m[ag]===true){return
}if(typeof m[ag]==="undefined"){m[ag]=0
}var af=ad(ag);
if(ag===".."||af!=null){if(H.setup(ag,ae)===true){m[ag]=true;
return
}}if(m[ag]!==true&&m[ag]++<G){window.setTimeout(function(){X(ag,ae)
},f)
}else{n[ag]=R;
m[ag]=true
}}function O(af){var ae=W[af];
if(ae&&ae.substring(0,1)==="/"){if(ae.substring(1,2)==="/"){ae=document.location.protocol+ae
}else{ae=document.location.protocol+"//"+document.location.host+ae
}}return ae
}function ac(af,ae,ag){if(ae&&!/http(s)?:\/\/.+/.test(ae)){if(ae.indexOf("//")==0){ae=window.location.protocol+ae
}else{if(ae.charAt(0)=="/"){ae=window.location.protocol+"//"+window.location.host+ae
}else{if(ae.indexOf("://")==-1){ae=window.location.protocol+"//"+ae
}}}}W[af]=ae;
if(typeof ag!=="undefined"){D[af]=!!ag
}}function F(ae){return B[ae]
}function c(ae,af){af=af||"";
B[ae]=String(af);
X(ae,af)
}function ab(af){var ae=af.passReferrer||"";
var ag=ae.split(":",2);
e=ag[0]||"none";
p=ag[1]||"origin"
}function aa(ae){if(Q(ae)){H=gadgets.rpctx.ifpc;
H.init(Z,k)
}}function Q(ae){return String(ae.useLegacyProtocol)==="true"
}function h(af,ae){function ag(aj){var ai=aj&&aj.rpc||{};
ab(ai);
var ah=ai.parentRelayUrl||"";
ah=t(d.parent||ae)+ah;
ac("..",ah,Q(ai));
aa(ai);
c("..",af)
}if(!d.parent&&ae){ag({});
return
}gadgets.config.register("rpc",null,ag)
}function o(af,aj,al){var ai=null;
if(af.charAt(0)!="/"){if(!gadgets.util){return
}ai=document.getElementById(af);
if(!ai){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+af+", element not found.")
}}var ae=ai&&ai.src;
var ag=aj||gadgets.rpc.getOrigin(ae);
ac(af,ag);
var ak=gadgets.util.getUrlParameters(ae);
var ah=al||ak.rpctoken;
c(af,ah)
}function i(ae,ag,ah){if(ae===".."){var af=ah||d.rpctoken||d.ifpctok||"";
h(af,ag)
}else{o(ae,ag,ah)
}}function w(ag){if(e==="bidir"||(e==="c2p"&&ag==="..")||(e==="p2c"&&ag!=="..")){var af=window.location.href;
var ah="?";
if(p==="query"){ah="#"
}else{if(p==="hash"){return af
}}var ae=af.lastIndexOf(ah);
ae=ae===-1?af.length:ae;
return af.substring(0,ae)
}return null
}return{config:function(ae){if(typeof ae.securityCallback==="function"){J=ae.securityCallback
}},register:function(af,ae){if(af===M||af===T){throw new Error("Cannot overwrite callback/ack service")
}if(af===S){throw new Error("Cannot overwrite default service: use registerDefault")
}q[af]=ae
},unregister:function(ae){if(ae===M||ae===T){throw new Error("Cannot delete callback/ack service")
}if(ae===S){throw new Error("Cannot delete default service: use unregisterDefault")
}delete q[ae]
},registerDefault:function(ae){q[S]=ae
},unregisterDefault:function(){delete q[S]
},forceParentVerifiable:function(){if(!H.isParentVerifiable()){H=gadgets.rpctx.ifpc
}},call:function(ae,ag,al,aj){ae=ae||"..";
var ak="..";
if(ae===".."){ak=v
}else{if(ae.charAt(0)=="/"){ak=C(v,gadgets.rpc.getOrigin(window.location.href))
}}++z;
if(al){l[z]=al
}var ai={s:ag,f:ak,c:al?z:0,a:Array.prototype.slice.call(arguments,3),t:B[ae],l:!!D[ae]};
var af=w(ae);
if(af){ai.r=af
}if(ae!==".."&&y(ae)==null&&!document.getElementById(ae)){return
}var ah=n[ae];
if(!ah&&y(ae)!==null){ah=H
}if(ag.indexOf(s)===0){ah=H;
ai.s=ag.substring(s.length);
ai.c=ai.c?ai.c:z
}ai.g=true;
ai.r=ak;
if(!ah){if(!E[ae]){E[ae]=[ai]
}else{E[ae].push(ai)
}return
}if(D[ae]){ah=gadgets.rpctx.ifpc
}if(ah.call(ae,ak,ai)===false){n[ae]=R;
H.call(ae,ak,ai)
}},getRelayUrl:O,setRelayUrl:ac,setAuthToken:c,setupReceiver:i,getAuthToken:F,removeReceiver:function(ae){delete W[ae];
delete D[ae];
delete B[ae];
delete m[ae];
delete n[ae]
},getRelayChannel:function(){return H.getCode()
},receive:function(af,ae){if(af.length>4){H._receiveMessage(af,Z)
}else{j.apply(null,af.concat(ae))
}},receiveSameDomain:function(ae){ae.a=Array.prototype.slice.call(ae.a);
window.setTimeout(function(){Z(ae)
},0)
},getOrigin:t,getTargetOrigin:L,init:function(){if(H.init(Z,k)===false){H=R
}if(A){i("..")
}else{gadgets.config.register("rpc",null,function(af){var ae=af.rpc||{};
ab(ae);
aa(ae)
})
}},_getTargetWin:ad,_parseSiblingId:y,ACK:T,RPC_ID:v||"..",SEC_ERROR_LOAD_TIMEOUT:P,SEC_ERROR_FRAME_PHISH:Y,SEC_ERROR_FORGED_MSG:a}
}();
gadgets.rpc.init()
}else{if(typeof gadgets.rpc=="undefined"||!gadgets.rpc){gadgets.rpc=window.gadgets["rpc"];
gadgets.rpc.config=gadgets.rpc.config;
gadgets.rpc.register=gadgets.rpc.register;
gadgets.rpc.unregister=gadgets.rpc.unregister;
gadgets.rpc.registerDefault=gadgets.rpc.registerDefault;
gadgets.rpc.unregisterDefault=gadgets.rpc.unregisterDefault;
gadgets.rpc.forceParentVerifiable=gadgets.rpc.forceParentVerifiable;
gadgets.rpc.call=gadgets.rpc.call;
gadgets.rpc.getRelayUrl=gadgets.rpc.getRelayUrl;
gadgets.rpc.setRelayUrl=gadgets.rpc.setRelayUrl;
gadgets.rpc.setAuthToken=gadgets.rpc.setAuthToken;
gadgets.rpc.setupReceiver=gadgets.rpc.setupReceiver;
gadgets.rpc.getAuthToken=gadgets.rpc.getAuthToken;
gadgets.rpc.removeReceiver=gadgets.rpc.removeReceiver;
gadgets.rpc.getRelayChannel=gadgets.rpc.getRelayChannel;
gadgets.rpc.receive=gadgets.rpc.receive;
gadgets.rpc.receiveSameDomain=gadgets.rpc.receiveSameDomain;
gadgets.rpc.getOrigin=gadgets.rpc.getOrigin;
gadgets.rpc.getTargetOrigin=gadgets.rpc.getTargetOrigin;
gadgets.rpc._getTargetWin=gadgets.rpc._getTargetWin;
gadgets.rpc._parseSiblingId=gadgets.rpc._parseSiblingId
}};;
;

/* [end] feature=rpc */
gadgets.config.init({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});
(function(){var j=window['___jsl'];if(j['c']){j['c']();delete j['c'];}})();var friendconnect_serverBase = "http://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://www-a-fc-opensocial.googleusercontent.com/gadgets";
var friendconnect_serverVersion = "0.1-40d37c72_beec7057_5fb1f497_f893192a_ff72ef73.7";
var friendconnect_imageUrl = "http://www.google.com/friendconnect/scs/images";
var friendconnect_lightbox = true;
function fca(a){throw a;}var fcb=void 0,fcc=!0,fcd=null,fce=!1,fcf=gadgets,fcg=Error,fch=friendconnect_serverBase,fci=encodeURIComponent,fcaa=parseInt,fcj=window,fcba=setTimeout,fcca=Object,fck=document,fcl=Array,fcm=Math;function fcda(a,b){return a.length=b}function fcea(a,b){return a.className=b}function fcn(a,b){return a.width=b}function fco(a,b){return a.innerHTML=b}function fcp(a,b){return a.height=b}
var fcq="appendChild",fcr="push",fcfa="toString",fcs="length",fcga="propertyIsEnumerable",fcha="stringify",fc="prototype",fcia="test",fct="width",fcu="round",fcv="slice",fcw="replace",fcx="document",fcja="data",fcy="split",fcz="getElementById",fcA="charAt",fcB="location",fcC="getUrlParameters",fcD="indexOf",fcka="Dialog",fcE="style",fcF="body",fcla="left",fcG="call",fcH="match",fcI="options",fcma="random",fcna="createElement",fcoa="json",fcpa="addEventListener",fcJ="setAttribute",fcqa="href",fcra=
"substring",fcsa="getContentElement",fcK="util",fcta="maxHeight",fcua="type",fcL="apply",fcva="auth",fcwa="reset",fcxa="getSecurityToken",fcya="bind",fcM="name",fcza="display",fcN="height",fcO="register",fcP="join",fcAa="unshift",fcBa="toLowerCase",fcCa="documentElement",fcDa="right",goog=goog||{},fcQ=this,fcFa=function(a,b,c){a=a[fcy](".");c=c||fcQ;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a[fcs]&&(d=a.shift());)!a[fcs]&&fcEa(b)?c[d]=b:c=c[d]?c[d]:c[d]={}},fcGa=function(a){var b=
typeof a;if("object"==b)if(a){if(a instanceof fcl)return"array";if(a instanceof fcca)return b;var c=fcca[fc][fcfa][fcG](a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a[fcs]&&"undefined"!=typeof a.splice&&"undefined"!=typeof a[fcga]&&!a[fcga]("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a[fcG]&&"undefined"!=typeof a[fcga]&&!a[fcga]("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a[fcG])return"object";
return b},fcEa=function(a){return a!==fcb},fcHa=function(a){var b=fcGa(a);return"array"==b||"object"==b&&"number"==typeof a[fcs]},fcR=function(a){return"string"==typeof a},fcIa=function(a){var b=typeof a;return"object"==b&&a!=fcd||"function"==b};fcm.floor(2147483648*fcm[fcma]())[fcfa](36);
var fcS=function(a){var b=fcGa(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=fcS(a[c]);return b}return a},fcJa=function(a,b,c){return a[fcG][fcL](a[fcya],arguments)},fcKa=function(a,b,c){a||fca(fcg());if(2<arguments[fcs]){var d=fcl[fc][fcv][fcG](arguments,2);return function(){var c=fcl[fc][fcv][fcG](arguments);fcl[fc][fcAa][fcL](c,d);return a[fcL](b,c)}}return function(){return a[fcL](b,arguments)}},fcT=function(a,b,c){fcT=Function[fc][fcya]&&
-1!=Function[fc][fcya][fcfa]()[fcD]("native code")?fcJa:fcKa;return fcT[fcL](fcd,arguments)},fcLa=function(a,b){var c=fcl[fc][fcv][fcG](arguments,1);return function(){var b=fcl[fc][fcv][fcG](arguments);b[fcAa][fcL](b,c);return a[fcL](this,b)}},fcMa=function(a,b){for(var c in b)a[c]=b[c]},fcNa=Date.now||function(){return+new Date},fcU=function(a,b,c){fcFa(a,b,c)},fcV=function(a,b){function c(){}c.prototype=b[fc];a.Mc=b[fc];a.prototype=new c;a[fc].constructor=a};
Function[fc].bind=Function[fc][fcya]||function(a,b){if(1<arguments[fcs]){var c=fcl[fc][fcv][fcG](arguments,1);c[fcAa](this,a);return fcT[fcL](fcd,c)}return fcT(this,a)};SHA1=function(){this.c=fcl(5);this.da=fcl(64);this.Hc=fcl(80);this.ta=fcl(64);this.ta[0]=128;for(var a=1;64>a;++a)this.ta[a]=0;this[fcwa]()};SHA1[fc].reset=function(){this.c[0]=1732584193;this.c[1]=4023233417;this.c[2]=2562383102;this.c[3]=271733878;this.c[4]=3285377520;this.J=this.A=0};SHA1[fc].ya=function(a,b){return(a<<b|a>>>32-b)&4294967295};
SHA1[fc].M=function(a){for(var b=this.Hc,c=0;64>c;c+=4){var d=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];b[c/4]=d}for(c=16;80>c;++c)b[c]=this.ya(b[c-3]^b[c-8]^b[c-14]^b[c-16],1);for(var a=this.c[0],d=this.c[1],e=this.c[2],f=this.c[3],j=this.c[4],i,k,c=0;80>c;++c)40>c?20>c?(i=f^d&(e^f),k=1518500249):(i=d^e^f,k=1859775393):60>c?(i=d&e|f&(d|e),k=2400959708):(i=d^e^f,k=3395469782),i=this.ya(a,5)+i+j+k+b[c]&4294967295,j=f,f=e,e=this.ya(d,30),d=a,a=i;this.c[0]=this.c[0]+a&4294967295;this.c[1]=this.c[1]+d&4294967295;
this.c[2]=this.c[2]+e&4294967295;this.c[3]=this.c[3]+f&4294967295;this.c[4]=this.c[4]+j&4294967295};SHA1[fc].update=function(a,b){b||(b=a[fcs]);var c=0;if(0==this.A)for(;c+64<b;)this.M(a[fcv](c,c+64)),c+=64,this.J+=64;for(;c<b;)if(this.da[this.A++]=a[c++],++this.J,64==this.A){this.A=0;for(this.M(this.da);c+64<b;)this.M(a[fcv](c,c+64)),c+=64,this.J+=64}};
SHA1[fc].digest=function(){var a=fcl(20),b=8*this.J;56>this.A?this.update(this.ta,56-this.A):this.update(this.ta,64-(this.A-56));for(var c=63;56<=c;--c)this.da[c]=b&255,b>>>=8;this.M(this.da);for(c=b=0;5>c;++c)for(var d=24;0<=d;d-=8)a[b++]=this.c[c]>>d&255;return a};G_HMAC=function(a,b,c){(!a||"object"!=typeof a||!a[fcwa]||!a.update||!a.digest)&&fca(fcg("Invalid hasher object. Hasher unspecified or does not implement expected interface."));b.constructor!=fcl&&fca(fcg("Invalid key."));c&&"number"!=typeof c&&fca(fcg("Invalid block size."));this.k=a;this.ca=c||16;this.Wb=fcl(this.ca);this.Vb=fcl(this.ca);b[fcs]>this.ca&&(this.k.update(b),b=this.k.digest());for(c=0;c<this.ca;c++)a=c<b[fcs]?b[c]:0,this.Wb[c]=a^G_HMAC.OPAD,this.Vb[c]=a^G_HMAC.IPAD};G_HMAC.OPAD=92;
G_HMAC.IPAD=54;G_HMAC[fc].reset=function(){this.k[fcwa]();this.k.update(this.Vb)};G_HMAC[fc].update=function(a){a.constructor!=fcl&&fca(fcg("Invalid data. Data must be an array."));this.k.update(a)};G_HMAC[fc].digest=function(){var a=this.k.digest();this.k[fcwa]();this.k.update(this.Wb);this.k.update(a);return this.k.digest()};G_HMAC[fc].Ib=function(a){this[fcwa]();this.update(a);return this.digest()};var fcOa=function(a,b){for(var c=1;c<arguments[fcs];c++)var d=(""+arguments[c])[fcw](/\$/g,"$$$$"),a=a[fcw](/\%s/,d);return a},fcPa=function(a,b){var c=(""+a)[fcBa](),d=(""+b)[fcBa]();return c<d?-1:c==d?0:1},fcVa=function(a,b){if(b)return a[fcw](fcQa,"&amp;")[fcw](fcRa,"&lt;")[fcw](fcSa,"&gt;")[fcw](fcTa,"&quot;");if(!fcUa[fcia](a))return a;-1!=a[fcD]("&")&&(a=a[fcw](fcQa,"&amp;"));-1!=a[fcD]("<")&&(a=a[fcw](fcRa,"&lt;"));-1!=a[fcD](">")&&(a=a[fcw](fcSa,"&gt;"));-1!=a[fcD]('"')&&(a=a[fcw](fcTa,"&quot;"));
return a},fcQa=/&/g,fcRa=/</g,fcSa=/>/g,fcTa=/\"/g,fcUa=/[&<>\"]/,fcWa=function(a,b){for(var c=0,d=(""+a)[fcw](/^[\s\xa0]+|[\s\xa0]+$/g,"")[fcy]("."),e=(""+b)[fcw](/^[\s\xa0]+|[\s\xa0]+$/g,"")[fcy]("."),f=fcm.max(d[fcs],e[fcs]),j=0;0==c&&j<f;j++){var i=d[j]||"",k=e[j]||"",l=RegExp("(\\d*)(\\D*)","g"),h=RegExp("(\\d*)(\\D*)","g");do{var g=l.exec(i)||["","",""],m=h.exec(k)||["","",""];if(0==g[0][fcs]&&0==m[0][fcs])break;var c=0==g[1][fcs]?0:fcaa(g[1],10),o=0==m[1][fcs]?0:fcaa(m[1],10),c=(c<o?-1:c>o?
1:0)||((0==g[2][fcs])<(0==m[2][fcs])?-1:(0==g[2][fcs])>(0==m[2][fcs])?1:0)||(g[2]<m[2]?-1:g[2]>m[2]?1:0)}while(0==c)}return c};fcm[fcma]();var fcXa={},fcYa=function(a){return fcXa[a]||(fcXa[a]=(""+a)[fcw](/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};var fcZa,fc_a,fc0a,fc1a,fc2a,fc3a=function(){return fcQ.navigator?fcQ.navigator.userAgent:fcd},fc4a=function(){return fcQ.navigator},fc5a=function(){fc2a=fc1a=fc0a=fc_a=fcZa=fce;var a;if(a=fc3a()){var b=fc4a();fcZa=0==a[fcD]("Opera");fc_a=!fcZa&&-1!=a[fcD]("MSIE");fc1a=(fc0a=!fcZa&&-1!=a[fcD]("WebKit"))&&-1!=a[fcD]("Mobile");fc2a=!fcZa&&!fc0a&&"Gecko"==b.product}};fc5a();
var fc6a=fcZa,fcW=fc_a,fc7a=fc2a,fcX=fc0a,fc8a=fc1a,fc9a=function(){var a=fc4a();return a&&a.platform||""},fc$a=fc9a(),fcab=function(){fc$a[fcD]("Mac");fc$a[fcD]("Win");fc$a[fcD]("Linux");fc4a()&&(fc4a().appVersion||"")[fcD]("X11")};fcab();
var fccb=function(){var a="",b;fc6a&&fcQ.opera?(a=fcQ.opera.version,a="function"==typeof a?a():a):(fc7a?b=/rv\:([^\);]+)(\)|;)/:fcW?b=/MSIE\s+([^\);]+)(\)|;)/:fcX&&(b=/WebKit\/(\S+)/),b&&(a=(a=b.exec(fc3a()))?a[1]:""));return fcW&&(b=fcbb(),b>parseFloat(a))?""+b:a},fcbb=function(){var a=fcQ[fcx];return a?a.documentMode:fcb},fcdb=fccb(),fceb={},fcfb=function(a){return fceb[a]||(fceb[a]=0<=fcWa(fcdb,a))},fcgb={},fchb=function(a){return fcgb[a]||(fcgb[a]=fcW&&!!fck.documentMode&&fck.documentMode>=a)};var fcib=function(a){this.stack=fcg().stack||"";a&&(this.message=""+a)};fcV(fcib,fcg);fcib[fc].name="CustomError";var fcjb=function(a,b){b[fcAa](a);fcib[fcG](this,fcOa[fcL](fcd,b));b.shift()};fcV(fcjb,fcib);fcjb[fc].name="AssertionError";var fckb=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);fca(new fcjb(""+e,f||[]))},fclb=function(a,b,c){a||fckb("",fcd,b,fcl[fc][fcv][fcG](arguments,2));return a};var fcY=fcl[fc],fcmb=fcY[fcD]?function(a,b,c){fclb(a[fcs]!=fcd);return fcY[fcD][fcG](a,b,c)}:function(a,b,c){c=c==fcd?0:0>c?fcm.max(0,a[fcs]+c):c;if(fcR(a))return!fcR(b)||1!=b[fcs]?-1:a[fcD](b,c);for(;c<a[fcs];c++)if(c in a&&a[c]===b)return c;return-1},fcnb=fcY.forEach?function(a,b,c){fclb(a[fcs]!=fcd);fcY.forEach[fcG](a,b,c)}:function(a,b,c){for(var d=a[fcs],e=fcR(a)?a[fcy](""):a,f=0;f<d;f++)f in e&&b[fcG](c,e[f],f,a)},fcob=function(a,b){return 0<=fcmb(a,b)},fcpb=function(a){return fcY.concat[fcL](fcY,
arguments)},fcqb=function(a){if("array"==fcGa(a))return fcpb(a);for(var b=[],c=0,d=a[fcs];c<d;c++)b[c]=a[c];return b},fcrb=function(a,b,c){fclb(a[fcs]!=fcd);return 2>=arguments[fcs]?fcY[fcv][fcG](a,b):fcY[fcv][fcG](a,b,c)};var fcsb=function(a){for(var b=[],c=0,d=0;d<a[fcs];d++){for(var e=a.charCodeAt(d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}return b};var fctb=fcd,fcub=fcd,fcvb=fcd,fcwb=fcd,fcyb=function(a,b){fcHa(a)||fca(fcg("encodeByteArray takes an array as a parameter"));fcxb();for(var c=b?fcvb:fctb,d=[],e=0;e<a[fcs];e+=3){var f=a[e],j=e+1<a[fcs],i=j?a[e+1]:0,k=e+2<a[fcs],l=k?a[e+2]:0,h=f>>2,f=(f&3)<<4|i>>4,i=(i&15)<<2|l>>6,l=l&63;k||(l=64,j||(i=64));d[fcr](c[h],c[f],c[i],c[l])}return d[fcP]("")},fczb=function(a,b){fcxb();for(var c=b?fcwb:fcub,d=[],e=0;e<a[fcs];){var f=c[a[fcA](e++)],j=e<a[fcs],j=j?c[a[fcA](e)]:0;++e;var i=e<a[fcs],i=i?c[a[fcA](e)]:
0;++e;var k=e<a[fcs],k=k?c[a[fcA](e)]:0;++e;(f==fcd||j==fcd||i==fcd||k==fcd)&&fca(fcg());f=f<<2|j>>4;d[fcr](f);64!=i&&(f=j<<4&240|i>>2,d[fcr](f),64!=k&&(f=i<<6&192|k,d[fcr](f)))}return d},fcxb=function(){if(!fctb){fctb={};fcub={};fcvb={};fcwb={};for(var a=0;65>a;a++)fctb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcA](a),fcub[fctb[a]]=a,fcvb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcA](a),fcwb[fcvb[a]]=a}};var fcZ=function(a){this.wb=a},fcAb=/\s*;\s*/;fcZ[fc].Tb=function(a){return!/[;=\s]/[fcia](a)};fcZ[fc].Ub=function(a){return!/[;\r\n]/[fcia](a)};fcZ[fc].set=function(a,b,c,d,e,f){this.Tb(a)||fca(fcg('Invalid cookie name "'+a+'"'));this.Ub(b)||fca(fcg('Invalid cookie value "'+b+'"'));fcEa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";0>c?c="":(c=0==c?new Date(1970,1,1):new Date(fcNa()+1E3*c),c=";expires="+c.toUTCString());this.vc(a+"="+b+e+d+c+f)};
fcZ[fc].get=function(a,b){for(var c=a+"=",d=this.la(),e=0,f;f=d[e];e++)if(0==f[fcD](c))return f.substr(c[fcs]);return b};fcZ[fc].remove=function(a,b,c){var d=this.N(a);this.set(a,"",0,b,c);return d};fcZ[fc].z=function(){return this.ja().keys};fcZ[fc].F=function(){return this.ja().values};fcZ[fc].Q=function(){var a=this.Na();return!a?0:this.la()[fcs]};fcZ[fc].N=function(a){return fcEa(this.get(a))};fcZ[fc].clear=function(){for(var a=this.ja().keys,b=a[fcs]-1;0<=b;b--)this.remove(a[b])};
fcZ[fc].vc=function(a){this.wb.cookie=a};fcZ[fc].Na=function(){return this.wb.cookie};fcZ[fc].la=function(){return(this.Na()||"")[fcy](fcAb)};fcZ[fc].ja=function(){for(var a=this.la(),b=[],c=[],d,e,f=0;e=a[f];f++)d=e[fcD]("="),-1==d?(b[fcr](""),c[fcr](e)):(b[fcr](e[fcra](0,d)),c[fcr](e[fcra](d+1)));return{keys:b,values:c}};var fcBb=new fcZ(fck);fcBb.MAX_COOKIE_LENGTH=3950;var fc_=function(a,b){fcn(this,a);fcp(this,b)};fc_[fc].clone=function(){return new fc_(this[fct],this[fcN])};fc_[fc].toString=function(){return"("+this[fct]+" x "+this[fcN]+")"};fc_[fc].ceil=function(){fcn(this,fcm.ceil(this[fct]));fcp(this,fcm.ceil(this[fcN]));return this};fc_[fc].floor=function(){fcn(this,fcm.floor(this[fct]));fcp(this,fcm.floor(this[fcN]));return this};fc_[fc].round=function(){fcn(this,fcm[fcu](this[fct]));fcp(this,fcm[fcu](this[fcN]));return this};
fc_[fc].scale=function(a){fcn(this,this[fct]*a);fcp(this,this[fcN]*a);return this};var fcCb=function(a,b,c){for(var d in a)b[fcG](c,a[d],d,a)},fcDb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},fcEb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},fcFb="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),fcGb=function(a,b){for(var c,d,e=1;e<arguments[fcs];e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fcFb[fcs];f++)c=fcFb[f],fcca[fc].hasOwnProperty[fcG](d,c)&&(a[c]=d[c])}};var fcHb=!fcW||fchb(9);!fc7a&&!fcW||fcW&&fchb(9)||fc7a&&fcfb("1.9.1");fcW&&fcfb("9");var fcIb=function(a){a=a.className;return fcR(a)&&a[fcH](/\S+/g)||[]},fcKb=function(a,b){var c=fcIb(a),d=fcrb(arguments,1),e=c[fcs]+d[fcs];fcJb(c,d);fcea(a,c[fcP](" "));return c[fcs]==e},fcJb=function(a,b){for(var c=0;c<b[fcs];c++)fcob(a,b[c])||a[fcr](b[c])};var fcLb=function(a){return fcR(a)?fck[fcz](a):a},fcMb=fcLb,fcNb=function(a,b,c,d){a=d||a;b=b&&"*"!=b?b.toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(!fcX||"CSS1Compat"==fck.compatMode||fcfb("528"))&&(b||c))return c=b+(c?"."+c:""),a.querySelectorAll(c);if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){for(var d={},e=0,f=0,j;j=a[f];f++)b==j.nodeName&&(d[e++]=j);fcda(d,e);return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;j=a[f];f++)b=j.className,"function"==
typeof b[fcy]&&fcob(b[fcy](/\s+/),c)&&(d[e++]=j);fcda(d,e);return d}return a},fcPb=function(a,b){fcCb(b,function(b,d){"style"==d?a[fcE].cssText=b:"class"==d?fcea(a,b):"for"==d?a.htmlFor=b:d in fcOb?a[fcJ](fcOb[d],b):0==d.lastIndexOf("aria-",0)?a[fcJ](d,b):a[d]=b})},fcOb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"},fcQb=function(a){var b=
a[fcx];if(fcX&&!fcfb("500")&&!fc8a){"undefined"==typeof a.innerHeight&&(a=fcj);var b=a.innerHeight,c=a[fcx][fcCa].scrollHeight;a==a.top&&c<b&&(b-=15);return new fc_(a.innerWidth,b)}a="CSS1Compat"==b.compatMode?b[fcCa]:b[fcF];return new fc_(a.clientWidth,a.clientHeight)},fc0=function(a,b,c){return fcRb(fck,arguments)},fcRb=function(a,b){var c=b[0],d=b[1];if(!fcHb&&d&&(d[fcM]||d[fcua])){c=["<",c];d[fcM]&&c[fcr](' name="',fcVa(d[fcM]),'"');if(d[fcua]){c[fcr](' type="',fcVa(d[fcua]),'"');var e={};fcGb(e,
d);d=e;delete d[fcua]}c[fcr](">");c=c[fcP]("")}c=a[fcna](c);d&&(fcR(d)?fcea(c,d):"array"==fcGa(d)?fcKb[fcL](fcd,[c].concat(d)):fcPb(c,d));2<b[fcs]&&fcSb(a,c,b,2);return c},fcSb=function(a,b,c,d){function e(c){c&&b[fcq](fcR(c)?a.createTextNode(c):c)}for(;d<c[fcs];d++){var f=c[d];fcHa(f)&&!(fcIa(f)&&0<f.nodeType)?fcnb(fcTb(f)?fcqb(f):f,e):e(f)}},fcTb=function(a){if(a&&"number"==typeof a[fcs]){if(fcIa(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==fcGa(a))return"function"==
typeof a.item}return fce};var fcUb="StopIteration"in fcQ?fcQ.StopIteration:fcg("StopIteration"),fcVb=function(){};fcVb[fc].next=function(){fca(fcUb)};fcVb[fc].__iterator__=function(){return this};var fc1=function(a,b){this.i={};this.e=[];var c=arguments[fcs];if(1<c){c%2&&fca(fcg("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.nb(a)};fc1[fc].r=0;fc1[fc].K=0;fc1[fc].Q=function(){return this.r};fc1[fc].F=function(){this.L();for(var a=[],b=0;b<this.e[fcs];b++){var c=this.e[b];a[fcr](this.i[c])}return a};fc1[fc].z=function(){this.L();return this.e.concat()};fc1[fc].N=function(a){return fcWb(this.i,a)};
fc1[fc].clear=function(){this.i={};fcda(this.e,0);this.K=this.r=0};fc1[fc].remove=function(a){return fcWb(this.i,a)?(delete this.i[a],this.r--,this.K++,this.e[fcs]>2*this.r&&this.L(),fcc):fce};fc1[fc].L=function(){if(this.r!=this.e[fcs]){for(var a=0,b=0;a<this.e[fcs];){var c=this.e[a];fcWb(this.i,c)&&(this.e[b++]=c);a++}fcda(this.e,b)}if(this.r!=this.e[fcs]){for(var d={},b=a=0;a<this.e[fcs];)c=this.e[a],fcWb(d,c)||(this.e[b++]=c,d[c]=1),a++;fcda(this.e,b)}};
fc1[fc].get=function(a,b){return fcWb(this.i,a)?this.i[a]:b};fc1[fc].set=function(a,b){fcWb(this.i,a)||(this.r++,this.e[fcr](a),this.K++);this.i[a]=b};fc1[fc].nb=function(a){var b;a instanceof fc1?(b=a.z(),a=a.F()):(b=fcEb(a),a=fcDb(a));for(var c=0;c<b[fcs];c++)this.set(b[c],a[c])};fc1[fc].clone=function(){return new fc1(this)};
fc1[fc].__iterator__=function(a){this.L();var b=0,c=this.e,d=this.i,e=this.K,f=this,j=new fcVb;j.next=function(){for(;;){e!=f.K&&fca(fcg("The map has changed since the iterator was created"));b>=c[fcs]&&fca(fcUb);var j=c[b++];return a?j:d[j]}};return j};var fcWb=function(a,b){return fcca[fc].hasOwnProperty[fcG](a,b)};var fcYb=function(a,b,c){fcR(b)?fcXb(a,c,b):fcCb(b,fcLa(fcXb,a))},fcXb=function(a,b,c){a[fcE][fcYa(c)]=b},fcZb=function(a,b){var c=9==a.nodeType?a:a.ownerDocument||a[fcx];return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,fcd))?c[b]||c.getPropertyValue(b):""},fc_b=function(a){var b=a.getBoundingClientRect();fcW&&(a=a.ownerDocument,b.left=b[fcla]-(a[fcCa].clientLeft+a[fcF].clientLeft),b.top-=a[fcCa].clientTop+a[fcF].clientTop);return b},fc2b=function(a,b,c){b instanceof
fc_?(c=b[fcN],b=b[fct]):c==fcb&&fca(fcg("missing height argument"));fc0b(a,b);fc1b(a,c)},fc3b=function(a,b){"number"==typeof a&&(a=(b?fcm[fcu](a):a)+"px");return a},fc1b=function(a,b){fcp(a[fcE],fc3b(b,fcc))},fc0b=function(a,b){fcn(a[fcE],fc3b(b,fcc))},fc5b=function(a){if("none"!=(fcZb(a,"display")||(a.currentStyle?a.currentStyle[fcza]:fcd)||a[fcE]&&a[fcE][fcza]))return fc4b(a);var b=a[fcE],c=b[fcza],d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=fc4b(a);
b.display=c;b.position=e;b.visibility=d;return a},fc4b=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=fcX&&!b&&!c;return(!fcEa(b)||d)&&a.getBoundingClientRect?(a=fc_b(a),new fc_(a[fcDa]-a[fcla],a.bottom-a.top)):new fc_(b,c)},fc6b=function(a,b){a[fcE].display=b?"":"none"};var fc7b={},fc8b={};var fc9b=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";a=fcj.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fcj.focus&&a&&a.focus()},fc$b=function(a,b){var c=fcf[fcK][fcC]().communityId;fcf.rpc[fcG](fcd,"signin",fcd,c,a,b)};fcU("goog.peoplesense.util.openPopup",fc9b);fcU("goog.peoplesense.util.finishSignIn",fc$b);var fccc=function(a,b){var c=fcac()+"/friendconnect/invite/friends",d=fci(shindig[fcva][fcxa]());fcbc(c,d,a,b)},fcbc=function(a,b,c,d){a+="?st="+b;c&&(a+="&customMessage="+fci(c));d&&(a+="&customInviteUrl="+fci(d));b=760;fcW&&(b+=25);fc9b(a,""+b,"515","friendconnect_invite")};fcU("goog.peoplesense.util.invite",fccc);fcU("goog.peoplesense.util.inviteFriends",fcbc);var fcdc=function(a){this.url=a};fcdc[fc].l=function(a,b){(0<=this.url[fcD]("?"+a+"=")||0<=this.url[fcD]("&"+a+"="))&&fca(fcg("duplicate: "+a));if(b===fcd||b===fcb)return this;var c=0<=this.url[fcD]("?")?"&":"?";this.url+=c+a+"="+fci(b);return this};fcdc[fc].toString=function(){return this.url};var fcac=function(){return fcj.friendconnect_serverBase},fcec=function(a,b,c,d,e,f,j){b=b||"800";c=c||"550";d=d||"friendconnect";f=f||fce;fcf.rpc[fcG](fcd,"openLightboxIframe",j,a,shindig[fcva][fcxa](),b,c,d,e,fcd,fcd,fcd,f)},fcfc=function(a,b){var c=fcf[fcK][fcC]().psinvite||"",d=new fcdc(fcac()+"/friendconnect/signin/home");d.l("st",fcj.shindig[fcva][fcxa]());d.l("psinvite",c);d.l("iframeId",a);d.l("loginProvider",b);d.l("subscribeOnSignin","1");fc9b(d[fcfa]());return fce},fcgc=function(){var a=
fcf[fcK][fcC]().communityId;fcf.rpc[fcG](fcd,"signout",fcd,a)},fcic=function(a,b){var c=fcac()+"/friendconnect/settings/edit?st="+fci(shindig[fcva][fcxa]())+(a?"&iframeId="+fci(a):"");b&&(c=c+"&"+b);fchc(c)},fcjc=function(a){a=fcac()+"/friendconnect/settings/siteProfile?st="+fci(a);fchc(a)},fchc=function(a){var b=800,c=510;fcW&&(b+=25);fc9b(a,""+b,""+c)},fckc=function(a,b,c,d){var d=d||2,e=fcd;if("text"==b)e=fc0("div",{"class":"gfc-button-text"},fc0("div",{"class":"gfc-icon"},fc0("a",{href:"javascript:void(0);"},
c))),a[fcq](e);else if("long"==b||"standard"==b)e=1==d?fc0("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc0("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc0("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc0("div",{"class":"gfc-button-base-pos"},fc0("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc0("div",{"class":"gfc-button-base-content"},fc0("div",{"class":"gfc-icon"},c)))))):fc0("table",{"class":"gfc-button-base-v2 gfc-button",
cellpadding:"0",cellspacing:"0"},fc0("tbody",{"class":""},fc0("tr",{"class":""},fc0("td",{"class":"gfc-button-base-v2 gfc-button-1"}),fc0("td",{"class":"gfc-button-base-v2 gfc-button-2"},c),fc0("td",{"class":"gfc-button-base-v2 gfc-button-3"})))),a[fcq](e),"standard"==b&&(b=fc0("div",{"class":"gfc-footer-msg"},"with Google Friend Connect"),1==d&&a[fcq](fc0("br")),a[fcq](b));return e},fclc=function(a,b){a||fca("google.friendconnect.renderSignInButton: missing options");var c=a[fcE]||"standard",d=a.text,
e=a.version;if("standard"==c)d=a.text||"Sign in";else if("text"==c||"long"==c)d=a.text||"Sign in with Friend Connect";var f=a.element;f||((f=a.id)||fca("google.friendconnect.renderSignInButton: options[id] and options[element] == null"),(f=fcMb(f))||fca("google.friendconnect.renderSignInButton: element "+a.id+" not found"));fco(f,"");c=fckc(f,c,d,e);fcj[fcpa]?c[fcpa]("click",b,fce):c.attachEvent("onclick",b)},fcmc=function(a,b){b=b||fcT(fcfc,fcd,fcd,fcd,fcd);fclc(a,b)},fcnc=function(a,b){fcf.rpc[fcG](fcd,
"putReloadViewParam",fcd,a,b);var c=fcf.views.getParams();c[a]=b},fcoc=function(a,b){var c=new fcdc("/friendconnect/gadgetshare/friends");c.l("customMessage",a);c.l("customInviteUrl",b);c.l("container","glb");var d=310;fcW&&(d+=25);fcec(c[fcfa](),""+d,"370")};fcU("goog.peoplesense.util.getBaseUrl",fcac);fcU("goog.peoplesense.util.finishSignIn",fc$b);fcU("goog.peoplesense.util.signout",fcgc);fcU("goog.peoplesense.util.signin",fcfc);fcU("goog.peoplesense.util.editSettings",fcic);
fcU("goog.peoplesense.util.editSSProfile",fcjc);fcU("goog.peoplesense.util.setStickyViewParamToken",fcnc);fcU("google.friendconnect.renderSignInButton",fcmc);fcU("goog.peoplesense.util.share",fcoc);fcU("goog.peoplesense.util.userAgent.IE",fcW);var fcpc={},fcqc={},fc2=function(a){this.h=new fc1;this.snippetId=a.id;this.site=a.site;var a=a["view-params"],b=a.skin;this.gc=(b?b.POSITION:"top")||"top";this.Ic={allowAnonymousPost:a.allowAnonymousPost||fce,scope:a.scope||"SITE",docId:a.docId||"",features:a.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:b};this.absoluteBottom=fcW&&!fcfb("7");this.fixedIeSizes=fcW;fcj[fcpa]?fcj[fcpa]("resize",fcT(this.db,this),fce):fcj.attachEvent("onresize",fcT(this.db,this));this.sb()};
fc2[fc].sb=function(){this.site||fca(fcg("Must supply site ID."));this.snippetId||fca(fcg("Must supply a snippet ID."))};fc2[fc].b=10;fc2[fc].Ca=1;fc2[fc].q="fc-friendbar-";fc2[fc].t=fc2[fc].q+"outer";fc2[fc].gb=fc2[fc].t+"-shadow";fc2[fc].render=function(){fck.write(this.Ab());var a=fcLb(this.snippetId);fco(a,this.P())};fc2[fc].Bb=function(){var a=fcLb(this.t);return a=fc5b(a)[fct]};fc2[fc].db=function(){for(var a=this.h.z(),b=0;b<a[fcs];b++)this.sc(a[b]);goog&&fc7b&&fc8b&&fcrc&&fcsc("resize")};
fc2[fc].n=function(){return this.gc};fc2[fc].d=function(a){return this.q+"shadow-"+a};fc2[fc].ka=function(a){return this.q+"menus-"+a};fc2[fc].S=function(a){return this.q+a+"Target"};fc2[fc].ha=function(a){return this.q+a+"Drawer"};fc2[fc].Sa=function(){return this.S("")};fc2[fc].Ta=function(){return this.q+"wallpaper"};fc2[fc].Oa=function(){return this.ha("")};
fc2[fc].Ab=function(){var a=fcj.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",e=a+"shadow_tl.png",f=a+"shadow_tr.png",j=a+"shadow_br.png",a=a+"shadow_cr.png",i=function(a,b){return fcW?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'", sizingMethod="scale");':"background-image: url("+a+");background-repeat: "+b+"; "},k="position:absolute; top:";"top"!=this.n()&&(k="position:fixed; bottom:",this.absoluteBottom&&(k="position:absolute; bottom:"));
var l=c;"top"!=this.n()&&(l=b);var h=0,g=[];g[h++]='<style type="text/css">';"top"!=this.n()&&this.absoluteBottom&&(g[h++]="html, body {height: 100%; overflow: auto; };");g[h++]="#"+this.t+" {";g[h++]="background:#E0ECFF;";g[h++]="left:0;";g[h++]="height: "+(fcW?"35px;":"36px;");"top"!=this.n()&&this.absoluteBottom&&(g[h++]="margin-right: 20px;");g[h++]="padding:0;";g[h++]=k+" 0;";g[h++]="width:100%;";g[h++]="z-index:5000;";g[h++]="}";g[h++]="#"+this.gb+" {";g[h++]=i(l,"repeat-x");g[h++]="left:0;";
g[h++]="height:"+this.b+"px;";"top"!=this.n()&&this.absoluteBottom&&(g[h++]="margin-right: 20px;");g[h++]="padding:0;";g[h++]=k+(fcW?"35px;":"36px;");g[h++]="width:100%;";g[h++]="z-index:4998;";g[h++]="}";g[h++]="."+this.Oa()+" {";g[h++]="display: block;";g[h++]="padding:0;";g[h++]=k+(fcW?"34px;":"35px;");g[h++]="z-index:4999;";g[h++]="}";g[h++]="."+this.Ta()+" {";g[h++]="background: white;";g[h++]="height: 100%;";g[h++]="margin-right: "+this.b+"px;";g[h++]="}";g[h++]="."+this.Sa()+" {";g[h++]="border: "+
this.Ca+"px solid #ccc;";g[h++]="height: 100%;";g[h++]="left: 0;";g[h++]="background-image: url("+fcj.friendconnect_imageUrl+"/loading.gif);";g[h++]="background-position: center;";g[h++]="background-repeat: no-repeat;";g[h++]="}";g[h++]="."+this.d("cr")+" {";g[h++]=i(a,"repeat-y");g[h++]="height: 100%;";g[h++]="position:absolute;";g[h++]="right: 0;";g[h++]="top: 0;";g[h++]="width:"+this.b+"px;";g[h++]="}";g[h++]="."+this.d("bl")+" {";g[h++]=i(d,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";
g[h++]="width:"+this.b+"px;";g[h++]="}";g[h++]="."+this.d("tl")+" {";g[h++]=i(e,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="left:0px;";g[h++]="width:"+this.b+"px;";g[h++]="}";g[h++]="."+this.d("bc")+" {";g[h++]=i(c,"repeat-x");g[h++]="height: "+this.b+"px;";g[h++]="left: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="right: "+this.b+"px;";g[h++]="}";g[h++]="."+this.d("tc")+" {";g[h++]=i(b,"repeat-x");g[h++]="height: "+this.b+"px;";g[h++]="left: "+this.b+"px;";
g[h++]="margin-left: "+this.b+"px;";g[h++]="margin-right: "+this.b+"px;";g[h++]="right: "+this.b+"px;";g[h++]="}";g[h++]="."+this.d("br")+" {";g[h++]=i(j,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="right: 0;";g[h++]="width: "+this.b+"px;";g[h++]="}";g[h++]="."+this.d("tr")+" {";g[h++]=i(f,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="right: 0;";g[h++]="top: 0;";g[h++]="width: "+this.b+"px;";g[h++]="}";g[h++]="</style>";return g[fcP]("")};
fc2[fc].P=function(){var a=['<div id="'+this.t+'"></div>','<div id="'+this.gb+'"></div>','<div id="'+this.ka(this.h.Q())+'"></div>'];return a[fcP]("")};fc2[fc].ub=function(a,b,c,d){this.h.N(a)||(b=new fc3(this,a,b,c,d),c=this.h.Q(),d=fcLb(this.ka(c)),fco(d,b.P()+'<div id="'+this.ka(c+1)+'"></div>'),this.h.set(a,b))};fc2[fc].oa=function(a){(a=this.h.get(a))&&a.drawer&&fc6b(a.drawer,fce)};fc2[fc].ic=function(a){if(a=this.h.get(a))a.rendered=fce};
fc2[fc].refresh=function(){for(var a=this.h.z(),b=0;b<a[fcs];b++){var c=a[b];this.oa(c);this.ic(c)}};fc2[fc].cc=function(a){for(var b=this.h.F(),c=0;c<b[fcs];c++){var d=b[c];if(d.id==a){d.Fc();break}}};fc2[fc].bc=function(a){for(var b=this.h.F(),c=0;c<b[fcs];c++){var d=b[c];if(d.id==a){d.Zb();break}}};fc2[fc].sc=function(a){if((a=this.h.get(a))&&a.drawer&&a.Va())a.fa(),a.Ka(),a.Ba()};
fc2[fc].Ec=function(a,b){var c=this.h.get(a);if(c){c.drawer||(c.drawer=fcLb(this.ha(c[fcM])),c.target=fcLb(this.S(c[fcM])),c.sha_bc=fcNb(fck,"div","top"==this.n()?this.d("bc"):this.d("tc"),c.drawer)[0],c.sha_cr=fcNb(fck,"div",this.d("cr"),c.drawer)[0]);for(var d=this.h.z(),e=0;e<d[fcs];e++){var f=d[e];a!==f&&this.oa(f)}c.fa(b);fc6b(c.drawer,fcc);fcj.setTimeout(function(){c.Ba();c.Ka();c.render()},0)}};
var fc3=function(a,b,c,d,e){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=e||{};fcp(this,this.skin.HEIGHT||"0");this.url=fcj.friendconnect_serverBase+c;this.sha_bc=this.target=this.drawer=fcd;this.rendered=fce;this.fa()};
fc3[fc].fa=function(a){fcGb(this.constraints,a||{});fcGb(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcla]&&this.constraints[fcDa]){var a=this.bar.Bb(),b=this.constraints[fcla],c=this.constraints[fcDa],a=a-(b+c);a%2&&(a-=1,this.skin.right=this.skin[fcDa]+1);fcn(this.skin,a);delete this.skin[fcla]}};
fc3[fc].Ba=function(){if(this.drawer){if(this.skin[fct]){var a=this.bar.Ca,b=this.bar.b,c=fcW?2:0;fc2b(this.target,this.skin[fct],"");fc2b(this.sha_bc,this.skin[fct]-b+2*a-c,"");this.skin.rightShadow?fc2b(this.drawer,this.skin[fct]+b+2*a-c,""):fc2b(this.drawer,this.skin[fct]+2*a-c,"")}this.skin[fcDa]&&(this.drawer[fcE].right=this.skin[fcDa]+0+"px")}};
fc3[fc].Ka=function(){if(fcW&&this.drawer){var a=fc5b(this.target),b=a[fct]-this.bar.b,a=a[fcN];0>b&&(b=0);this.sha_bc&&this.sha_bc[fcE]&&fc2b(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcE]&&fc2b(this.sha_cr,"",a)}};
fc3[fc].P=function(){var a="display:none;",b="position: relative; ",c="",d="",e="",f="",j=!!this.skin.rightShadow;j||(c+="display: none; ",e+="display: none; ",d+="right: 0px; ",f+="margin-right: 0px; ");for(var i in this.skin){var k=Number(this.skin[i]);j&&0==fcPa(i,"width")&&(k+=this.bar.b);0==fcPa(i,"height")&&(b+=i+": "+k+"px; ");"rightShadow"!=i&&(0==fcPa(i,"height")&&(k+=this.bar.b),0==fcPa(i,"width")&&(k+=2),a+=i+": "+k+"px; ");fcW&&0==fcPa(i,"width")&&(k=j?k-2*this.bar.b:k-this.bar.b,d+=i+
": "+k+"px; ")}fcW&&0<(this[fcN]|0)&&(j=(this[fcN]|0)+2,c+="height: "+j+"px; ");j=0;i=[];i[j++]='<div id="'+this.bar.ha(this[fcM])+'"class="'+this.bar.Oa()+'"style="'+a+'"> ';"bottom"==this.bar.n()&&(i[j++]='<div class="'+this.bar.d("tl")+'"></div> <div class="'+this.bar.d("tc")+'"style="'+d+'"></div> <div class="'+this.bar.d("tr")+'"style="'+e+'"></div> ');i[j++]='<div style="'+b+'"> <div class="'+this.bar.Ta()+'"style="'+f+'"><div id="'+this.bar.S(this[fcM])+'"class="'+this.bar.Sa()+'"></div> <div class="'+
this.bar.d("cr")+'"style="'+c+'"></div> </div> </div> ';"top"==this.bar.n()&&(i[j++]='<div class="'+this.bar.d("bl")+'"></div> <div class="'+this.bar.d("bc")+'"style="'+d+'"></div> <div class="'+this.bar.d("br")+'"style="'+e+'"></div> ');i[j++]="</div> ";return i[fcP]("")};fc3[fc].Fc=function(){this.rendered=this.Va()};fc3[fc].Zb=function(){};fc3[fc].Va=function(){return!!this.drawer&&"none"!=this.drawer[fcE][fcza]};
fc3[fc].render=function(){if(this.rendered==fce){var a={};a.url=this.url;a.id=this.bar.S(this[fcM]);a.site=this.bar.site;a["view-params"]=fcS(this.bar.Ic);"profile"==this[fcM]&&(a["view-params"].profileId="VIEWER");this.skin&&fcGb(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcM];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.gc;fcp(a,"1px");fcpc&&fcqc&&fc4&&(this.id=fc4.render(a))}};fcU("google.friendconnect.FriendBar",fc2);var fctc="0123456789abcdefghijklmnopqrstuv",fcvc=function(a){a=new fcuc(a);a.ra()%5&&fca(fcg());for(var b=[],c=0;0<a.ra();c++)b[c]=fctc[fcA](a.ec(5));return b[fcP]("")},fcuc=function(a){this.G=this.o=0;this.ea=a};fcuc[fc].ra=function(){return 8*(this.ea[fcs]-this.G)-this.o};
fcuc[fc].ec=function(a){var b=0;a>this.ra()&&fca(fcg());if(0<this.o){var b=255>>this.o&this.ea[this.G],c=8-this.o,d=fcm.min(a%8,c),c=c-d,b=b>>c,a=a-d;this.o+=d;8==this.o&&(this.o=0,this.G++)}for(;8<=a;)b<<=8,b|=this.ea[this.G],this.G++,a-=8;0<a&&(b<<=a,b|=this.ea[this.G]>>8-a,this.o=a);return b};var fcwc=(new Date).getTime(),fc5=function(){},fcxc=function(){},fcyc=function(){},fczc=function(){};fcV(fczc,fcyc);var fcAc=function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);if(this.viewParams)for(var c in this.viewParams)/^FC_RELOAD_.*$/[fcia](c)&&(this.viewParams[c]=fcd)};fcAc[fc].render=function(a){var b=this;a&&(b.Gc(),this.Db(function(c){fcYb(a,"visibility","hidden");fco(a,c);b.refresh(a,c);c=function(a){fcYb(a,"visibility","visible")};c=fcLa(c,a);fcba(c,500);b.chrome=a}))};
fcAc[fc].Db=function(a){return this.Jb(a)};var fc6=function(a){fcAc[fcG](this,a);this.W="../../";this.rpcToken=""+fcm[fcu](2147483647*fcm[fcma]())};fcV(fc6,fcAc);fc6[fc].lb="gfc_iframe_";fc6[fc].mb="friendconnect";fc6[fc].La="";fc6[fc].tc="rpc_relay.html";fc6[fc].Z=function(a){this.W=a};fc6[fc].Gc=function(){return this.La=""+fcm[fcu](2147483647*fcm[fcma]())};fc6[fc].ia=function(){return this.lb+this.La+"_"+this.id};
fc6[fc].refresh=function(a,b){var c=fc4.Lc,d,e={},f=fc4.Ma(this.communityId),j=f[fcy]("~"),i=fc4.vb;if(i&&1<j[fcs]){d=j[2];var j=j[1],k=[this.specUrl,this.communityId,j,i][fcP](":");e.sig=fc4.hash(d,k);e.userId=j;e.dateStamp=i}e.container=this.mb;e.mid=this.id;e.nocache=fc4.fc;e.view=this.aa;e.parent=fc4.U;this.debug&&(e.debug="1");this.specUrl&&(e.url=this.specUrl);this.communityId&&(i=fcf[fcK][fcC]().profileId,e.communityId=this.communityId,(d=fcf[fcK][fcC]().psinvite)&&(e.psinvite=d),i&&(e.profileId=
i));e.caller=fcBc();e.rpctoken=this.rpcToken;i=fce;d="";j=/Version\/3\..*Safari/;if((j=fcX&&fc3a()[fcH](j))||!fc4.T[this.specUrl]&&this.viewParams)e["view-params"]=fcf[fcoa][fcha](this.viewParams),d="?viewParams="+fci(e["view-params"]),i=fcc;this.prefs&&(e.prefs=fcf[fcoa][fcha](this.prefs));this.viewParams&&this.sendViewParamsToServer&&(e["view-params"]=fcf[fcoa][fcha](this.viewParams));this.locale&&(e.locale=this.locale);this.secureToken&&(e.st=this.secureToken);j=fc4.Ra(this.specUrl);d=j+"ifr"+
d+(this.hashData?"&"+this.hashData:"");1!=fc4.Kc||i||f||this.secureToken?f&&!e.sig&&(e.fcauth=f):e.sig||(c="get");f=this.ia();fcCc(f,d,c,e,a,b,this.rpcToken)};var fc7=function(){this.j={};this.U="http://"+fck[fcB].host;this.aa="default";this.fc=1};fcV(fc7,fcxc);fc7[fc].v=fcAc;fc7[fc].B=new fczc;fc7[fc].fb=function(a){this.fc=a};fc7[fc].Ja=function(a){this.Kc=a};fc7[fc].Qa=function(a){return"gadget_"+a};fc7[fc].w=function(a){return this.j[this.Qa(a)]};fc7[fc].O=function(a){return new this.v(a)};
fc7[fc].ob=function(a){a.id=this.Kb();this.j[this.Qa(a.id)]=a};fc7[fc].dc=0;fc7[fc].Kb=function(){return this.dc++};var fcEc=function(){fc7[fcG](this);this.B=new fcDc};fcV(fcEc,fc7);fcEc[fc].v=fc6;fcEc[fc].Y=function(a){a[fcH](/^http[s]?:\/\//)||(a=fck[fcB][fcqa][fcH](/^[^?#]+\//)[0]+a);this.U=a};fcEc[fc].I=function(a){var b=this.B.Pa(a);a.render(b)};var fcDc=function(){this.zb={}};fcV(fcDc,fcyc);fcDc[fc].pb=function(a,b){this.zb[a]=b;var c=fck[fcz](b).className;!c&&0==c[fcs]&&fcea(fck[fcz](b),"gadgets-gadget-container")};
fcDc[fc].Pa=function(a){return(a=this.zb[a.id])?fck[fcz](a):fcd};var fc8=function(a){fc6[fcG](this,a);a=a||{};this.aa=a.view||"profile"};fcV(fc8,fc6);fc8[fc].rb="canvas.html";fc8[fc].xb="/friendconnect/embed/";var fcBc=function(){var a="1"==fcf[fcK][fcC]().canvas||"1"==fcf[fcK][fcC]().embed,b=fcd;a&&(b=fcf[fcK][fcC]().caller);b||(a=fck[fcB],b=a.search[fcw](/([&?]?)psinvite=[^&]*(&?)/,function(a,b,e){return e?b:""}),b=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+a.pathname+b);return b};
fc8[fc].Cc=function(a){this.aa=a};fc8[fc].na=function(){return this.aa};fc8[fc].getBodyId=function(){return this.ia()+"_body"};
fc8[fc].Jb=function(a){var b=this.specUrl;b===fcb&&(b="");var b=(fc4.Ra(b)||this.W)+this.tc,c=this.ia();fcf.rpc.setRelayUrl(c,b);b='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c;b=0==this[fcN]?b+'" style="width:1px; height:1px;':b+'" style="width:100%;';this.viewParams.opaque&&(b+="background-color:white;");b+='"';b+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(b+=' allowtransparency="true"');b+=this[fcN]?' height="'+this[fcN]+'"':"";b+=this[fct]?' width="'+this[fct]+'"':
"";b+="></iframe>";this.showEmbedThis&&(b+='<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+this.divId+"'); return false;\">Embed this</a>");b+="</div>";a(b)};
fc8[fc].Cb=function(){var a=fcBc(),a="canvas=1&caller="+fci(a),b=fcf[fcK][fcC]().psinvite;b&&(a+="&psinvite="+fci(b));a+="&site="+fci(this.communityId);b=fcS(this.viewParams);if(b.skin!=fcd)for(var c="BG_IMAGE,BG_COLOR,FONT_COLOR,BG_POSITION,BG_REPEAT,ANCHOR_COLOR,FONT_FACE,BORDER_COLOR,CONTENT_BG_COLOR,CONTENT_HEADLINE_COLOR,CONTENT_LINK_COLOR,CONTENT_SECONDARY_TEXT_COLOR,CONTENT_SECONDARY_LINK_COLOR,CONTENT_TEXT_COLOR,ENDCAP_BG_COLOR,ENDCAP_LINK_COLOR,ENDCAP_TEXT_COLOR,CONTENT_VISITED_LINK_COLOR,ALTERNATE_BG_COLOR".split(","),d=
0;d<c[fcs];d++)delete b.skin[c[d]];b=fci(fcf[fcoa][fcha](b));b=b[fcw]("\\","%5C");return fc4.U+this.rb+"?url="+fci(this.specUrl)+(a?"&"+a:"")+"&view-params="+b};fc8[fc].D=function(a){a=a||fch+this.xb+this.communityId;return this.Eb(a,"embed=1")};fc8[fc].C=function(a){return'<iframe src="'+this.D(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc8[fc].Eb=function(a,b){var c=fci(fcf[fcoa][fcha](this.viewParams)),c=c[fcw]("\\","%5C");return a+"?url="+fci(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc8[fc].Nb=function(){var a="1"==fcf[fcK][fcC]().canvas||"1"==fcf[fcK][fcC]().embed,b=fcd;a&&((b=fcf[fcK][fcC]().caller)||(b="javascript:history.go(-1)"));return b};fc8[fc].Ob=function(a){var b=fcd;"canvas"==a?b=this.Cb():"profile"==a&&(b=this.Nb());return b};
var fc9=function(){fcEc[fcG](this);fcf.rpc[fcO]("signin",fc5[fc].signin);fcf.rpc[fcO]("signout",fc5[fc].signout);fcf.rpc[fcO]("resize_iframe",fc5[fc].eb);fcf.rpc[fcO]("set_title",fc5[fc].setTitle);fcf.rpc[fcO]("requestNavigateTo",fc5[fc].cb);fcf.rpc[fcO]("api_loaded",fc5[fc].Aa);fcf.rpc[fcO]("createFriendBarMenu",fc5[fc].Fa);fcf.rpc[fcO]("showFriendBarMenu",fc5[fc].hb);fcf.rpc[fcO]("hideFriendBarMenu",fc5[fc].Ua);fcf.rpc[fcO]("putReloadViewParam",fc5[fc].Za);fcf.rpc[fcO]("getViewParams",fc5[fc].Ia);
fcf.rpc[fcO]("getContainerBaseTime",fc5[fc].Ha);fcf.rpc[fcO]("openLightboxIframe",fc5[fc].Ya);fcf.rpc[fcO]("showMemberProfile",fc5[fc].jb);fcf.rpc[fcO]("closeLightboxIframe",fcT(this.u,this));fcf.rpc[fcO]("setLightboxIframeTitle",fcT(this.yc,this));fcf.rpc[fcO]("refreshAndCloseIframeLightbox",fcT(this.hc,this));var a=fcFc;a[fcO]();a.kb(this,"load",this.Qb);a.kb(this,"start",this.Rb);this.W="../../";this.Y("");this.fb(0);this.Ja(1);this.qa=fcd;this.apiVersion="0.8";this.openSocialSecurityToken=fcd;
this.X="";this.Ga={};this.Yb=fcd;this.Xb=fce;this.vb=this.ac=this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcd;this.Lc="post"};fcV(fc9,fcEc);fc9[fc].wc=function(a){this.vb=a};fc9[fc].v=fc8;fc9[fc].T={};fc9[fc].Ac=function(a){this.qa=a};fc9[fc].Ra=function(a){var b=fc9[fc].T[a];b||(0!==this.qa[fcD]("http://")?(a=this.tb(a),b=["http://",a,this.qa][fcP]("")):b=this.qa);return b};
fc9[fc].tb=function(a){var b=new SHA1,a=fcsb(a);b.update(a);b=b.digest();return b=fcvc(b)};
var fcGc=function(a,b){var c=b?b:fcj.top,d=c.frames;try{if(c.frameElement.id==a)return c}catch(e){}for(c=0;c<d[fcs];++c){var f=fcGc(a,d[c]);if(f)return f}return fcd},fcCc=function(a,b,c,d,e,f,j){var i="gfc_load_"+a,b='<html><head><style type="text/css">body {background:transparent;}</style>'+(fcW?'<script type="text/javascript">window.goback=function(){history.go(-1);};setTimeout("goback();", 0);<\/script>':"")+"</head><body><form onsubmit='window.goback=function(){};return false;' style='margin:0;padding:0;' id='"+
i+"' method='"+c+"' ' action='"+fcf[fcK].escapeString(b)+"'>",k;for(k in d)b+="<input type='hidden' name='"+k+"' value='' >";var b=b+"</form></body></html>",c=fcGc(a),l;try{l=c[fcx]||c.contentWindow[fcx]}catch(h){e&&f&&(fco(e,""),fco(e,f),c=fcGc(a),l=c[fcx]||c.contentWindow[fcx])}j&&fcf.rpc.setAuthToken(a,j);l.open();l.write(b);l.close();a=l[fcz](i);for(k in d)a[k].value=d[k];if(fcW)a.onsubmit();a.submit()};
fc9[fc].yb=function(){var a=fcf[fcK][fcC]().fcsite,b=fcf[fcK][fcC]().fcprofile;a&&b&&fc4.za(b,a)};fc9[fc].xc=function(a,b){this.T[a]=b};fc9[fc].V=function(){var a=/Version\/3\..*Safari/;if(a=fcX&&fc3a()[fcH](a))fck[fcB].reload();else{fc4.g!=fcd&&fc4.g.refresh();for(var b in fc4.j)a=fc4.j[b],this.I(a);this.lastIframeLightboxOpenArguments!=fcd&&(b=this.lastIframeLightboxOpenArguments,this.u(),this.sa[fcL](this,b))}};
fc9[fc].Y=function(a){a[fcH](/^http[s]?:\/\//)||(a=a&&0<a[fcs]&&"/"==a[fcra](0,1)?fck[fcB][fcqa][fcH](/^http[s]?:\/\/[^\/]+\//)[0]+a[fcra](1):fck[fcB][fcqa][fcH](/^[^?#]+\//)[0]+a);this.U=a};fc9[fc].ga=function(a){return"fcauth"+a};fc9[fc].ma=function(a){return"fcauth"+a+"-s"};fc9[fc].hash=function(a,b){var c=new SHA1,d=fczb(a,fcc),c=new G_HMAC(c,d,64),d=fcsb(b),c=c.Ib(d);(new Date).getTime();return fcyb(c,fcc)};
fc9[fc].Ma=function(a){return a=fcBb.get(this.ga(a))||fcBb.get(this.ma(a))||this.Ga[a]||""};fc9[fc].Z=function(a){this.W=a};fc9[fc].Bc=function(a){this.X=a};fc9[fc].O=function(a){a=new this.v(a);a.Z(this.W);return a};fc9[fc].na=function(){return this.aa};fc9[fc].zc=function(a){this.ac=a};var fc$=function(a){return(a=a[fcH](/_([0-9]+)$/))?fcaa(a[1],10):fcd};
fc9[fc].$=function(a,b,c,d,e,f){this.Jc||(this.ba(fcj.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.X),this.Jc=fcc);var j=fcHc(d);if(this.Yb!=(j?"rtl":"ltr"))this.ba(fcj.friendconnect_serverBase+"/friendconnect/styles/lightbox"+(j?"-rtl":"")+".css?d="+this.X),this.Yb=j?"rtl":"ltr";this.Xb||(this.qb(fcj.friendconnect_serverBase+"/friendconnect/script/lightbox.js?d="+this.X),this.Xb=fcc);b=b||0;if(goog.ui&&goog.ui[fcka]){this.u();var b=new goog.ui[fcka]("lightbox-dialog",fcc),
i=this;goog.events.listen(b,goog.ui[fcka].EventType.AFTER_HIDE,function(){i.lastLightboxCallback&&i.lastLightboxCallback();i.Ea()});b.setDraggable(fcc);b.setDisposeOnHide(fcc);b.setBackgroundElementOpacity(0.5);b.setButtonSet(new goog.ui[fcka].ButtonSet);this.lastLightboxDialog=b;this.lastLightboxCallback=c||fcd;c=b.getDialogElement();e=e||702;fcYb(c,"width",""+e+"px");f&&fcYb(c,"height",""+f+"px");a(b);b.getDialogElement()[fcE].direction=j?"rtl":"ltr"}else 5>b?(b++,a=fcT(this.$,this,a,b,c,d,e,f),
fcba(a,1E3)):(this.Ea(),fca(fcg("lightbox.js failed to load")))};fc9[fc].u=function(a){var b=this.lastLightboxDialog,c=this.lastLightboxCallback;this.lastLightboxCallback=fcd;b!=fcd&&(this.lastLightboxDialog.dispatchEvent(goog.ui[fcka].EventType.AFTER_HIDE),b.dispose(),c!=fcd&&c(a))};fc9[fc].Ea=function(){this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcd};fc9[fc].yc=function(a){this.lastLightboxDialog&&this.lastLightboxDialog.setTitle(a)};
fc9[fc].hc=function(){this.u();this.V()};fc5[fc].cb=function(a,b){var c=fc$(this.f),c=fc4.w(c),d=fcS(c.originalParams);b&&(d["view-params"]=d["view-params"]||{},d["view-params"]=b);d.locale=c.locale;if(c.useLightBoxForCanvas)d.presentation=a,fc4.lastLightboxDialog!=fcd?fc4.u():fc4.ib(d);else if((c=c.Ob(a))&&fck[fcB][fcqa]!=c)if("1"==fcf[fcK][fcC]().embed)try{fcj.parent.location=c}catch(e){fcj.top.location=c}else fck[fcB].href=c};
fc9[fc].ib=function(a,b){var a=a||{},c=a.locale,d=fcHc(c),e=this;this.u();this.$(function(b){var c=fc0("div",{},fc0("div",{id:"gadget-signin",style:"background-color:#ffffff;height:32px;"}),fc0("div",{id:"gadget-lb-canvas",style:"background-color:#ffffff;"}));b.getTitleTextElement()[fcq](fc0("div",{id:"gfc-canvas-title",style:"color:#000000;"}));b[fcsa]()[fcq](c);b.setVisible(fcc);var c=fcS(a),i=fcQb(fcj),k=fcm[fcu](0.7*i[fcN]),i={BORDER_COLOR:"#cccccc",ENDCAP_BG_COLOR:"#e0ecff",ENDCAP_TEXT_COLOR:"#333333",
ENDCAP_LINK_COLOR:"#0000cc",ALTERNATE_BG_COLOR:"#ffffff",CONTENT_BG_COLOR:"#ffffff",CONTENT_LINK_COLOR:"#0000cc",CONTENT_TEXT_COLOR:"#333333",CONTENT_SECONDARY_LINK_COLOR:"#7777cc",CONTENT_SECONDARY_TEXT_COLOR:"#666666",CONTENT_HEADLINE_COLOR:"#333333"};c.id="gadget-lb-canvas";fcp(c,fcm.min(498,k)+"px");c.maxHeight=k;c.keepMax&&(fcp(c,k),fcYb(b[fcsa](),"height",k+35+"px"));c["view-params"]=c["view-params"]||{};c["view-params"].opaque=fcc;c["view-params"].skin=c["view-params"].skin||{};fcMa(c["view-params"].skin,
i);e.render(c);k={id:"gadget-signin",presentation:"canvas"};k.site=c.site;k.titleDivId="gfc-canvas-title";k["view-params"]={};k["view-params"].opaque=fcc;k.keepMax=c.keepMax;c.securityToken&&(k.securityToken=c.securityToken);c=fcS(i);c.ALIGNMENT=d?"left":"right";e.ab(k,c);b.reposition()},fcb,b,c)};fc5[fc].hb=function(a,b){fc4.g!=fcd&&fc4.g.Ec(a,b)};fc5[fc].Ua=function(a){fc4.g!=fcd&&fc4.g.oa(a)};
fc5[fc].Ya=function(a,b,c,d,e,f,j,i,k,l){var h=this.f,a=a+(0<=a[fcD]("?")?"&":"?")+"iframeId="+h;fc4.sa(a,b,c,d,e,f,j,i,k,l,this.callback)};
fc9[fc].sa=function(a,b,c,d,e,f,j,i,k,l,h){var g=fcQb(fcj);d!=fcd||(d=fcm[fcu](0.7*g[fcN]));c!=fcd||(c=fcm[fcu](0.7*g[fct]));for(var m=[],g=0;g<arguments[fcs]&&10>g;g++)m[fcr](arguments[g]);"/"==!a[0]&&fca(fcg("lightbox iframes must be relative to fc server"));var o=this,n=f?fcS(f):{},q=""+fcm[fcu](2147483647*fcm[fcma]()),p="gfc_lbox_iframe_"+q;fcf.rpc.setAuthToken(p,q);b||(b=fc4.openSocialSecurityToken);var r=fc4.openSocialSiteId;fc4.$(function(c){o.lastIframeLightboxOpenArguments=m;var g="st="+
fci(b)+"&parent="+fci(fc4.U)+"&rpctoken="+fci(q);i||(n.iframeId=p,n.iurl=a,a=fch+"/friendconnect/lightbox");var f=d-54;fcp(n,f);var h='<iframe id="'+p,h=h+('" width="100%" height="'+f+'" frameborder="0" scrolling="auto"></iframe>');c.setContent(h);e&&(c.setTitle(e),l&&(f=c.getTitleTextElement(),fcKb(f,"lightbox-dialog-title-small-text")));c.setVisible(fcc);k||(n.fcauth=fc4.Ma(r));a+=(0<=a[fcD]("?")?"&":"?")+g+"&communityId="+r;fcCc(p,a,"POST",n,fcd,fcd,fcd)},fcb,h,fcb,c,d)};
fc5[fc].Ia=function(){var a=fc$(this.f),a=fc4.w(a);return a.viewParams};fc5[fc].Ha=function(){return fcwc};fc5[fc].Za=function(a,b){var c=fc$(this.f),c=fc4.w(c);c.viewParams[a]=b};fc9[fc].Qb=function(a,b){fc4.g!=fcd&&fc4.g.bc(b)};fc9[fc].Rb=function(a,b){fc4.g!=fcd&&fc4.g.cc(b)};fc5[fc].Fa=function(a,b,c,d){fc4.g!=fcd&&fc4.g.ub(a,b,c,d)};fc9[fc].I=function(a){var b=this.B.Pa(a);a.render(b);this.B.postProcessGadget&&this.B.postProcessGadget(a)};
fc5[fc].signout=function(a){fc4.$a(fc4.ga(a));fc4.$a(fc4.ma(a));fc4.Ga={};fc4.V();return fce};fc9[fc].$a=function(a){for(var b=fck[fcB].pathname,b=b[fcy]("/"),c=0;c<b[fcs];c++){for(var d=fcl(c+1),e=0;e<c+1;e++)d[e]=b[e];fcBb.remove(a,d[fcP]("/")+"/")}};
fc5[fc].eb=function(a){var b=fck[fcz](this.f);b&&0<a&&fcp(b[fcE],a+"px");(b=fck[fcz](this.f+"_body"))&&0<a&&fcp(b[fcE],a+"px");if(b=fc$(this.f)){var c=fc4.w(b);if(c){if((b=fck[fcz](c.divId))&&0<a)c&&c[fcta]&&c[fcta]<a&&(a=c[fcta],b[fcE].overflowY="auto"),fcp(b[fcE],a+"px");!c.keepMax&&"canvas"==c.na()&&fc4.lastLightboxDialog&&fc4.lastLightboxDialog.reposition();fcYb(c.chrome,"visibility","visible")}}};fc5[fc].setTitle=function(a){var b=fc$(this.f),b=fc4.w(b);(b=b.titleDivId)&&fco(fck[fcz](b),fcf[fcK].escapeString(a))};
fc5[fc].signin=function(a,b,c){fcBb.set(fc4.ga(a),b,31104E3,c);fcBb.set(fc4.ma(a),b,-1,c);fc4.Ga[a]=b;fc4.V()};var fcJc=function(a){fclc(a,fcIc)};fc9[fc].nc=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/members.xml";this.render(this.s(a,c))};fc9[fc].pc=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/review.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.s(a,c))};
fc9[fc].ua=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/wall.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.s(a,c))};fc9[fc].ab=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/signin.xml";fcp(c,32);this.render(this.s(a,c))};
fc9[fc].kc=function(a,b){b&&this.m(b,a);a.prefs=a.prefs||{};a.sendViewParamsToServer=fcc;a.prefs.hints=fcj.google_hints;var c={};c.url=fch+"/friendconnect/gadgets/ads.xml";fcp(c,90);this.render(this.s(a,c))};fc9[fc].xa=function(a,b){if(a.id){b&&this.m(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.g=new fc2(a);this.g.render();var c={};c.url=fch+"/friendconnect/gadgets/friendbar.xml";a.id=this.g.t;fcp(a,"1");this.render(this.s(a,c))}};fc9[fc].mc=fc9[fc].xa;
fc9[fc].wa=function(a,b){a=a||{};a.url=fch+"/friendconnect/gadgets/signin.xml";a.site=a.site||fcf[fcK][fcC]().site;fcp(a,32);this.va(a,b)};fc9[fc].lc=fc9[fc].wa;fc9[fc].rc=fc9[fc].ua;fc9[fc].m=function(a,b){var c=b["view-params"];c||(c={},b["view-params"]=c);c.skin=a};fc9[fc].s=function(a,b){var c=this.Xa(b,a);if(b["view-params"]){var d=b["view-params"];a["view-params"]&&(d=this.Xa(d,a["view-params"]));c["view-params"]=d}return c};fc9[fc].oc=function(a,b){b&&this.m(b,a);this.render(a)};
fc9[fc].Xa=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)"undefined"==typeof c[d]&&(c[d]=a[d]);return c};
fc9[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.O({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcN],locale:a.locale||this.ac,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas||"undefined"==typeof a.useLightBoxForCanvas&&fcj.friendconnect_lightbox,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug,maxHeight:a[fcta],sendViewParamsToServer:a.sendViewParamsToServer,
keepMax:a.keepMax});a.presentation&&b.Cc(a.presentation);this.ob(b);this.B.pb(b.id,a.id);fcba(function(){fc4.I(b)},0);return b.id};fc9[fc].qc=function(a,b){a=a||{};a.presentation="canvas";this.bb(a,b)};
fc9[fc].bb=function(a,b,c){a=a||{};a.url=fcf[fcK][fcC]().url;a.site=fcf[fcK][fcC]().site||a.site;var d=fcf[fcK][fcC]()["view-params"];d&&(a["view-params"]=fcf[fcoa].parse(decodeURIComponent(d)));c&&(a["view-params"]=a["view-params"]||{},a["view-params"].useFixedHeight=fcc,fcp(a["view-params"],c),b=b||{},b.HEIGHT=""+c);this.va(a,b)};fc9[fc].va=function(a,b){a=a||{};b&&this.m(b,a);"1"==fcf[fcK][fcC]().canvas?a.presentation="canvas":"1"==fcf[fcK][fcC]().embed&&(a.presentation="embed");fc4.render(a)};
fc9[fc].Pb=function(){var a=fcf[fcK][fcC]().caller;a&&fck[fcB][fcqa]!=a&&8<a[fcs]&&("http://"==a.substr(0,7)[fcBa]()||"https://"==a.substr(0,8)[fcBa]())?fck[fcB].href=a:(a=fcf[fcK][fcC]().site)?fck[fcB].href=fch+"/friendconnect/directory/site?id="+a:fcj.history.go(-1)};fc9[fc].H="";fc9[fc].Lb=function(){return this.H};fc9[fc].uc=function(a){this.apiVersion=a};fc9[fc].ba=function(a){var b=fck[fcna]("link");b[fcJ]("rel","stylesheet");b[fcJ]("type","text/css");b[fcJ]("href",a);fck.getElementsByTagName("head")[0][fcq](b)};
fc9[fc].qb=function(a){var b=fck[fcna]("script");b[fcJ]("src",a);b[fcJ]("type","text/javascript");fck.getElementsByTagName("head")[0][fcq](b)};fc9[fc].Da=function(a){fck[fcF]?a():fcj[fcpa]?fcj[fcpa]("load",a,fce):fcj.attachEvent("onload",a)};fc9[fc].pa=function(a){a.site||fca("API not loaded, please pass in a 'site'");this.ba(fcj.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.X);this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.Da(fcT(this.Wa,this,a,"fc-opensocial-api"))};
fc9[fc].$b=fc9[fc].pa;fc9[fc].Sb=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.Wa(b,"gfc-"+a)};fc9[fc].jc=function(a){var b={},c;for(c in this.j){var d=this.j[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.j=b;(a=fck[fcz]("gfc-"+a))&&a.parentNode&&a.parentNode.removeChild&&a.parentNode.removeChild(a)};fc9[fc].Fb=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc9[fc].Mb=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fcKc=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcI][fcs];c++)a[fcI][c].selected&&b[fcr](a[fcI][c].value);c=a.getAttribute("x-max");try{c*=1}catch(d){c=0}if(c&&b[fcs]>c&&a["x-selected"]){b=a["x-selected"];for(c=0;c<a[fcI][fcs];c++){a[fcI][c].selected=fce;for(var e=0;e<b[fcs];e++)if(a[fcI][c].value==b[e]){a[fcI][c].selected=fcc;break}}}}else b=a[fcI][a.selectedIndex].value;a["x-selected"]=b;(c=a.getAttribute("x-var"))&&fcj.opensocial[fcja]&&fcj.opensocial[fcja].getDataContext().putDataSet(c,
b);if(c=a.getAttribute("x-onselect"))if(fcj[c]&&"function"==typeof fcj[c])fcj[c](b);else a["x-onselect-fn"]?a["x-onselect-fn"][fcL](a):a["x-onselect-fn"]=new Function(c)};
fc9[fc].Wa=function(a,b){fcj.opensocial.template.Loader.loadContent(this.Mb());fcj.opensocial.template.Loader.loadContent(this.Fb());fcj.opensocial[fcja].processDocumentMarkup();var c=fck[fcna]("div");c.id=b;fcp(c[fcE],"0px");fcn(c[fcE],"0px");c[fcE].position="absolute";c[fcE].visibility="hidden";fck[fcF][fcq](c);var d={};d.url=fch+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fcp(d,0);d.id=c.id;d.site=a.site;d["view-params"]=a["view-params"];this.render(d)};
fc5[fc].Aa=function(){fc4.H=this.f;fc4.openSocialSecurityToken=this.a[0];var a=fc4.openSocialSecurityToken;fcj.opensocial[fcja].executeRequests();fcj.opensocial.template.process();fc4.apiLoadedCallback&&(a=fcLa(fc4.apiLoadedCallback,a),fcba(a,0))};fc9[fc].R=function(a){var b=fcd,c;for(c in this.j)if(this.j[c].divId==a){b=this.j[c];break}return b};fc9[fc].D=function(a,b){var c=this.R(a),d=fcd;c&&(d=c.D(b));return d};fc9[fc].C=function(a,b){var c=this.R(a),d=fcd;c&&(d=c.C(b));return d};
fc9[fc].Dc=function(a,b){this.$(function(c){var d=fck.createTextNode("Copy & paste this code into your site.");c[fcsa]()[fcq](d);c[fcsa]()[fcq](fck[fcna]("br"));var d=fc4.C(a,b),e=fck[fcna]("textarea");fco(e,d);e[fcJ]("style","width:500px;");c[fcsa]()[fcq](e);c.setVisible(fcc)})};var fcLc="ar,dv,fa,iw,he,ku,pa,sd,tk,ug,ur,yi".split(","),fcHc=function(a){var b=fce;a?(a=a[fcy]("_")[0],b=fcob(fcLc,a)):b=(a=fcZb(fck[fcF],"direction"))&&"rtl"==a;return b};
fc5[fc].jb=function(a,b){var c=0,d=fcd;try{var e=fc$(this.f),f=fc4.w(e),d=f.secureToken,c=f.communityId}catch(j){}b&&(c=b);fc4.za(a,c,this.callback,d)};fc9[fc].za=function(a,b,c,d){b=b||this.openSocialSiteId;a={keepMax:fcc,presentation:"canvas",url:fch+"/friendconnect/gadgets/members.xml",site:b,"view-params":{profileId:a}};d&&(a.securityToken=d);this.ib(a,c)};fc9[fc].Hb=function(a){var b=fcd;if((a=this.R(a))&&a.secureToken)b=a.secureToken;return b};
fc9[fc].Gb=function(a){var b=fcd;if((a=this.R(a))&&a.communityId)b=a.communityId;return b};var fcIc=function(a){fc4.H&&fcfc(fc4.H,a)},fcMc=function(){fc5[fc].signout(fc4.openSocialSiteId)},fcNc=function(){fcic(fc4.H)},fcOc=function(a,b){fccc(a,b)},fcrc=function(){this.p={}};fcrc[fc].register=function(){fcf.rpc[fcO]("subscribeEventType",fc5[fc].subscribe);fcf.rpc[fcO]("publishEvent",fc5[fc].publish)};fc5[fc].subscribe=function(a){var b=fcFc;b.p[a]=b.p[a]||[];a=b.p[a];a[a[fcs]]={frameId:this}};
fcrc[fc].kb=function(a,b,c){var d=this;d.p[b]=d.p[b]||[];b=d.p[b];b[b[fcs]]={container:a,callback:c}};fc5[fc].publish=function(a){var b=fcFc,c=0;this.f&&(c=fc$(this.f));b.p[a]=b.p[a]||[];for(var b=b.p[a],d=0;d<b[fcs];d++)b[d].container?b[d].callback[fcG](b[d].container,a,c):fcf.rpc[fcG](b[d].frameId,a,fcd,a,c)};var fcsc=fcT(fc5[fc].publish,new fc5),fcFc=new fcrc,fc4=new fc9;fc4.Da(fc4.yb);fcU("google.friendconnect.container",fc4);fcU("google.friendconnect.container.refreshGadgets",fc4.V);
fcU("google.friendconnect.container.setParentUrl",fc4.Y);fcU("google.friendconnect.container.setServerBase",fc4.Z);fcU("google.friendconnect.container.setServerVersion",fc4.Bc);fcU("google.friendconnect.container.createGadget",fc4.O);fcU("google.friendconnect.container.openLightboxIframe",fc4.sa);fcU("google.friendconnect.container.renderGadget",fc4.I);fcU("google.friendconnect.container.render",fc4.render);fcU("google.friendconnect.container.goBackToSite",fc4.Pb);
fcU("google.friendconnect.container.renderMembersGadget",fc4.nc);fcU("google.friendconnect.container.renderReviewGadget",fc4.pc);fcU("google.friendconnect.container.renderCommentsGadget",fc4.ua);fcU("google.friendconnect.container.renderSignInGadget",fc4.ab);fcU("google.friendconnect.container.renderFriendBar",fc4.mc);fcU("google.friendconnect.container.renderSocialBar",fc4.xa);fcU("google.friendconnect.container.renderCanvasSignInGadget",fc4.lc);
fcU("google.friendconnect.container.renderUrlCanvasGadget",fc4.qc);fcU("google.friendconnect.container.renderEmbedSignInGadget",fc4.wa);fcU("google.friendconnect.container.renderUrlEmbedGadget",fc4.bb);fcU("google.friendconnect.container.renderEmbedGadget",fc4.va);fcU("google.friendconnect.container.renderWallGadget",fc4.rc);fcU("google.friendconnect.container.renderAdsGadget",fc4.kc);fcU("google.friendconnect.container.renderOpenSocialGadget",fc4.oc);
fcU("google.friendconnect.container.setNoCache",fc4.fb);fcU("google.friendconnect.container.enableProxy",fc4.Ja);fcU("google.friendconnect.container.setDomain",fc4.xc);fcU("google.friendconnect.container.setLockedDomainSuffix",fc4.Ac);fcU("google.friendconnect.container.setLocale",fc4.zc);fcU("google.friendconnect.container.loadOpenSocialApi",fc4.$b);fcU("google.friendconnect.container.initOpenSocialApi",fc4.pa);fcU("google.friendconnect.container.getOpenSocialApiIframeId",fc4.Lb);
fcU("google.friendconnect.container.setApiVersion",fc4.uc);fcU("google.friendconnect.container.getEmbedUrl",fc4.D);fcU("google.friendconnect.container.getEmbedHtml",fc4.C);fcU("google.friendconnect.container.getGadgetSecurityToken",fc4.Hb);fcU("google.friendconnect.container.getGadgetCommunityId",fc4.Gb);fcU("google.friendconnect.container.showEmbedDialog",fc4.Dc);fcU("google.friendconnect.container.showMemberProfile",fc4.za);fcU("google.friendconnect.requestSignIn",fcIc);
fcU("google.friendconnect.requestSignOut",fcMc);fcU("google.friendconnect.requestSettings",fcNc);fcU("google.friendconnect.requestInvite",fcOc);fcU("google.friendconnect.renderSignInButton",fcJc);fcU("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc4.Sb);fcU("google.friendconnect.container.removeOpenSocialApiViaIframe",fc4.jc);fcU("google.friendconnect.userAgent.WEBKIT",fcX);fcU("google.friendconnect.userAgent.IE",fcW);fcU("google.friendconnect.PeopleSelectorOnChange",fcKc);
fcU("google.friendconnect.container.setDateStamp_",fc4.wc);
google.friendconnect.container.setServerBase('http://www-a-fc-opensocial.googleusercontent.com/ps/');google.friendconnect.container.setServerVersion('0.1-40d37c72_beec7057_5fb1f497_f893192a_ff72ef73.7');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/activities.xml', 'http://q8j0igk2u2f6kf7jogh6s66md2d7r154-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ads.xml', 'http://t767uouk8skpac15v8ue0n16regb3m2t-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ask.xml', 'http://uofgf6lm45rimd9jp6hn983ul6n2en81-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/friendbar.xml', 'http://p7rjrrl49ose4gob99eonlvp0drmce3d-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/content_reveal.xml', 'http://n0mc7q283f00tpk3uifa7sjv4hmrults-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/chat.xml', 'http://4mmefl67as0q39gf1o4pnocubqmdgei0-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/donate.xml', 'http://7v4nflqvq38notsghmcr5a9t6o9g6kn4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/lamegame.xml', 'http://ffbrstu9puk7qmt45got9mqe5k7ijrs4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/map.xml', 'http://k0dfp8trn0hi5d2spmo7jmc88n6kr1cc-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/members.xml', 'http://r1rk9np7bpcsfoeekl0khkd2juj27q3o-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/newsletterSubscribe.xml', 'http://k830suiki828goudg9448o6bp0tpu5r3-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/poll.xml', 'http://1ivjd75aqp679vbgohjv74tlhn13rgdu-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/recommended_pages.xml', 'http://iqavu79a908u5vcecp0pq80hhbhkv33b-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/review.xml', 'http://r85jiaoot111joesr8bilfhfeslcc496-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/sample.xml', 'http://785aoao97uti9iqffknjp5e0kn2ljlm4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/signin.xml', 'http://8fkcem1ves287v3g5lu9gep1j91p3kk1-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/wall.xml', 'http://o29lt44ell30t7ljcdfr8lq2mjakv2co-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'http://mc8tdi0ripmbpds25eboaupdulritrp6-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setLockedDomainSuffix('-a-fc-opensocial.googleusercontent.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
google.friendconnect.container.setDateStamp_('13628b0f5be');