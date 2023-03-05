
(()=>{var N0=Object.create;var Ra=Object.defineProperty;var O0=Object.getOwnPropertyDescriptor;var S0=Object.getOwnPropertyNames,$c=Object.getOwnPropertySymbols,I0=Object.getPrototypeOf,Kc=Object.prototype.hasOwnProperty,D0=Object.prototype.propertyIsEnumerable;var zc=(r,o,u)=>o in r?Ra(r,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[o]=u,Yc=(r,o)=>{for(var u in o||(o={}))Kc.call(o,u)&&zc(r,u,o[u]);if($c)for(var u of $c(o))D0.call(o,u)&&zc(r,u,o[u]);return r};var C0=(r,o)=>()=>(o||r((o={exports:{}}).exports,o),o.exports);var M0=(r,o,u,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let h of S0(o))!Kc.call(r,h)&&h!==u&&Ra(r,h,{get:()=>o[h],enumerable:!(l=O0(o,h))||l.enumerable});return r};var jr=(r,o,u)=>(u=r!=null?N0(I0(r)):{},M0(o||!r||!r.__esModule?Ra(u,"default",{value:r,enumerable:!0}):u,r));var Tt=(r,o,u)=>new Promise((l,h)=>{var m=E=>{try{T(u.next(E))}catch(x){h(x)}},_=E=>{try{T(u.throw(E))}catch(x){h(x)}},T=E=>E.done?l(E.value):Promise.resolve(E.value).then(m,_);T((u=u.apply(r,o)).next())});var Yn=C0((_n,Kn)=>{(function(){var r,o="4.17.21",u=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",h="Expected a function",m="Invalid `variable` option passed into `_.template`",_="__lodash_hash_undefined__",T=500,E="__lodash_placeholder__",x=1,k=2,D=4,O=1,M=2,N=1,I=2,j=4,R=8,F=16,$=32,X=64,de=128,ve=256,Pe=512,Et=30,kt="...",Vt=800,Qe=16,ye=1,ot=2,Xn=3,st=1/0,Je=9007199254740991,Qn=17976931348623157e292,se=0/0,ce=4294967295,Jn=ce-1,nn=ce>>>1,Zn=[["ary",de],["bind",N],["bindKey",I],["curry",R],["curryRight",F],["flip",Pe],["partial",$],["partialRight",X],["rearg",ve]],ue="[object Arguments]",re="[object Array]",Nt="[object AsyncFunction]",le="[object Boolean]",Tn="[object Date]",qu="[object DOMException]",er="[object Error]",tr="[object Function]",go="[object GeneratorFunction]",Ze="[object Map]",An="[object Number]",Vu="[object Null]",ht="[object Object]",mo="[object Promise]",Gu="[object Proxy]",En="[object RegExp]",et="[object Set]",kn="[object String]",nr="[object Symbol]",ju="[object Undefined]",Nn="[object WeakMap]",$u="[object WeakSet]",On="[object ArrayBuffer]",rn="[object DataView]",pi="[object Float32Array]",gi="[object Float64Array]",mi="[object Int8Array]",vi="[object Int16Array]",bi="[object Int32Array]",xi="[object Uint8Array]",yi="[object Uint8ClampedArray]",wi="[object Uint16Array]",_i="[object Uint32Array]",zu=/\b__p \+= '';/g,Ku=/\b(__p \+=) '' \+/g,Yu=/(__e\(.*?\)|\b__t\)) \+\n'';/g,vo=/&(?:amp|lt|gt|quot|#39);/g,bo=/[&<>"']/g,Xu=RegExp(vo.source),Qu=RegExp(bo.source),Ju=/<%-([\s\S]+?)%>/g,Zu=/<%([\s\S]+?)%>/g,xo=/<%=([\s\S]+?)%>/g,el=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tl=/^\w*$/,nl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ti=/[\\^$.*+?()[\]{}|]/g,rl=RegExp(Ti.source),Ai=/^\s+/,il=/\s/,al=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ol=/\{\n\/\* \[wrapped with (.+)\] \*/,sl=/,? & /,cl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ul=/[()=,{}\[\]\/\s]/,ll=/\\(\\)?/g,fl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,yo=/\w*$/,dl=/^[-+]0x[0-9a-f]+$/i,hl=/^0b[01]+$/i,pl=/^\[object .+?Constructor\]$/,gl=/^0o[0-7]+$/i,ml=/^(?:0|[1-9]\d*)$/,vl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rr=/($^)/,bl=/['\n\r\u2028\u2029\\]/g,ir="\\ud800-\\udfff",xl="\\u0300-\\u036f",yl="\\ufe20-\\ufe2f",wl="\\u20d0-\\u20ff",wo=xl+yl+wl,_o="\\u2700-\\u27bf",To="a-z\\xdf-\\xf6\\xf8-\\xff",_l="\\xac\\xb1\\xd7\\xf7",Tl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Al="\\u2000-\\u206f",El=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ao="A-Z\\xc0-\\xd6\\xd8-\\xde",Eo="\\ufe0e\\ufe0f",ko=_l+Tl+Al+El,Ei="['\u2019]",kl="["+ir+"]",No="["+ko+"]",ar="["+wo+"]",Oo="\\d+",Nl="["+_o+"]",So="["+To+"]",Io="[^"+ir+ko+Oo+_o+To+Ao+"]",ki="\\ud83c[\\udffb-\\udfff]",Ol="(?:"+ar+"|"+ki+")",Do="[^"+ir+"]",Ni="(?:\\ud83c[\\udde6-\\uddff]){2}",Oi="[\\ud800-\\udbff][\\udc00-\\udfff]",an="["+Ao+"]",Co="\\u200d",Mo="(?:"+So+"|"+Io+")",Sl="(?:"+an+"|"+Io+")",Po="(?:"+Ei+"(?:d|ll|m|re|s|t|ve))?",Ro="(?:"+Ei+"(?:D|LL|M|RE|S|T|VE))?",Lo=Ol+"?",Bo="["+Eo+"]?",Il="(?:"+Co+"(?:"+[Do,Ni,Oi].join("|")+")"+Bo+Lo+")*",Dl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Cl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ho=Bo+Lo+Il,Ml="(?:"+[Nl,Ni,Oi].join("|")+")"+Ho,Pl="(?:"+[Do+ar+"?",ar,Ni,Oi,kl].join("|")+")",Rl=RegExp(Ei,"g"),Ll=RegExp(ar,"g"),Si=RegExp(ki+"(?="+ki+")|"+Pl+Ho,"g"),Bl=RegExp([an+"?"+So+"+"+Po+"(?="+[No,an,"$"].join("|")+")",Sl+"+"+Ro+"(?="+[No,an+Mo,"$"].join("|")+")",an+"?"+Mo+"+"+Po,an+"+"+Ro,Cl,Dl,Oo,Ml].join("|"),"g"),Hl=RegExp("["+Co+ir+wo+Eo+"]"),Ul=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Wl=-1,ne={};ne[pi]=ne[gi]=ne[mi]=ne[vi]=ne[bi]=ne[xi]=ne[yi]=ne[wi]=ne[_i]=!0,ne[ue]=ne[re]=ne[On]=ne[le]=ne[rn]=ne[Tn]=ne[er]=ne[tr]=ne[Ze]=ne[An]=ne[ht]=ne[En]=ne[et]=ne[kn]=ne[Nn]=!1;var te={};te[ue]=te[re]=te[On]=te[rn]=te[le]=te[Tn]=te[pi]=te[gi]=te[mi]=te[vi]=te[bi]=te[Ze]=te[An]=te[ht]=te[En]=te[et]=te[kn]=te[nr]=te[xi]=te[yi]=te[wi]=te[_i]=!0,te[er]=te[tr]=te[Nn]=!1;var ql={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Vl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},jl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$l=parseFloat,zl=parseInt,Uo=typeof global=="object"&&global&&global.Object===Object&&global,Kl=typeof self=="object"&&self&&self.Object===Object&&self,be=Uo||Kl||Function("return this")(),Ii=typeof _n=="object"&&_n&&!_n.nodeType&&_n,Gt=Ii&&typeof Kn=="object"&&Kn&&!Kn.nodeType&&Kn,Fo=Gt&&Gt.exports===Ii,Di=Fo&&Uo.process,qe=function(){try{var p=Gt&&Gt.require&&Gt.require("util").types;return p||Di&&Di.binding&&Di.binding("util")}catch{}}(),Wo=qe&&qe.isArrayBuffer,qo=qe&&qe.isDate,Vo=qe&&qe.isMap,Go=qe&&qe.isRegExp,jo=qe&&qe.isSet,$o=qe&&qe.isTypedArray;function Re(p,b,v){switch(v.length){case 0:return p.call(b);case 1:return p.call(b,v[0]);case 2:return p.call(b,v[0],v[1]);case 3:return p.call(b,v[0],v[1],v[2])}return p.apply(b,v)}function Yl(p,b,v,C){for(var U=-1,Q=p==null?0:p.length;++U<Q;){var ge=p[U];b(C,ge,v(ge),p)}return C}function Ve(p,b){for(var v=-1,C=p==null?0:p.length;++v<C&&b(p[v],v,p)!==!1;);return p}function Xl(p,b){for(var v=p==null?0:p.length;v--&&b(p[v],v,p)!==!1;);return p}function zo(p,b){for(var v=-1,C=p==null?0:p.length;++v<C;)if(!b(p[v],v,p))return!1;return!0}function Ot(p,b){for(var v=-1,C=p==null?0:p.length,U=0,Q=[];++v<C;){var ge=p[v];b(ge,v,p)&&(Q[U++]=ge)}return Q}function or(p,b){var v=p==null?0:p.length;return!!v&&on(p,b,0)>-1}function Ci(p,b,v){for(var C=-1,U=p==null?0:p.length;++C<U;)if(v(b,p[C]))return!0;return!1}function ie(p,b){for(var v=-1,C=p==null?0:p.length,U=Array(C);++v<C;)U[v]=b(p[v],v,p);return U}function St(p,b){for(var v=-1,C=b.length,U=p.length;++v<C;)p[U+v]=b[v];return p}function Mi(p,b,v,C){var U=-1,Q=p==null?0:p.length;for(C&&Q&&(v=p[++U]);++U<Q;)v=b(v,p[U],U,p);return v}function Ql(p,b,v,C){var U=p==null?0:p.length;for(C&&U&&(v=p[--U]);U--;)v=b(v,p[U],U,p);return v}function Pi(p,b){for(var v=-1,C=p==null?0:p.length;++v<C;)if(b(p[v],v,p))return!0;return!1}var Jl=Ri("length");function Zl(p){return p.split("")}function ef(p){return p.match(cl)||[]}function Ko(p,b,v){var C;return v(p,function(U,Q,ge){if(b(U,Q,ge))return C=Q,!1}),C}function sr(p,b,v,C){for(var U=p.length,Q=v+(C?1:-1);C?Q--:++Q<U;)if(b(p[Q],Q,p))return Q;return-1}function on(p,b,v){return b===b?hf(p,b,v):sr(p,Yo,v)}function tf(p,b,v,C){for(var U=v-1,Q=p.length;++U<Q;)if(C(p[U],b))return U;return-1}function Yo(p){return p!==p}function Xo(p,b){var v=p==null?0:p.length;return v?Bi(p,b)/v:se}function Ri(p){return function(b){return b==null?r:b[p]}}function Li(p){return function(b){return p==null?r:p[b]}}function Qo(p,b,v,C,U){return U(p,function(Q,ge,ee){v=C?(C=!1,Q):b(v,Q,ge,ee)}),v}function nf(p,b){var v=p.length;for(p.sort(b);v--;)p[v]=p[v].value;return p}function Bi(p,b){for(var v,C=-1,U=p.length;++C<U;){var Q=b(p[C]);Q!==r&&(v=v===r?Q:v+Q)}return v}function Hi(p,b){for(var v=-1,C=Array(p);++v<p;)C[v]=b(v);return C}function rf(p,b){return ie(b,function(v){return[v,p[v]]})}function Jo(p){return p&&p.slice(0,ns(p)+1).replace(Ai,"")}function Le(p){return function(b){return p(b)}}function Ui(p,b){return ie(b,function(v){return p[v]})}function Sn(p,b){return p.has(b)}function Zo(p,b){for(var v=-1,C=p.length;++v<C&&on(b,p[v],0)>-1;);return v}function es(p,b){for(var v=p.length;v--&&on(b,p[v],0)>-1;);return v}function af(p,b){for(var v=p.length,C=0;v--;)p[v]===b&&++C;return C}var of=Li(ql),sf=Li(Vl);function cf(p){return"\\"+jl[p]}function uf(p,b){return p==null?r:p[b]}function sn(p){return Hl.test(p)}function lf(p){return Ul.test(p)}function ff(p){for(var b,v=[];!(b=p.next()).done;)v.push(b.value);return v}function Fi(p){var b=-1,v=Array(p.size);return p.forEach(function(C,U){v[++b]=[U,C]}),v}function ts(p,b){return function(v){return p(b(v))}}function It(p,b){for(var v=-1,C=p.length,U=0,Q=[];++v<C;){var ge=p[v];(ge===b||ge===E)&&(p[v]=E,Q[U++]=v)}return Q}function cr(p){var b=-1,v=Array(p.size);return p.forEach(function(C){v[++b]=C}),v}function df(p){var b=-1,v=Array(p.size);return p.forEach(function(C){v[++b]=[C,C]}),v}function hf(p,b,v){for(var C=v-1,U=p.length;++C<U;)if(p[C]===b)return C;return-1}function pf(p,b,v){for(var C=v+1;C--;)if(p[C]===b)return C;return C}function cn(p){return sn(p)?mf(p):Jl(p)}function tt(p){return sn(p)?vf(p):Zl(p)}function ns(p){for(var b=p.length;b--&&il.test(p.charAt(b)););return b}var gf=Li(Gl);function mf(p){for(var b=Si.lastIndex=0;Si.test(p);)++b;return b}function vf(p){return p.match(Si)||[]}function bf(p){return p.match(Bl)||[]}var xf=function p(b){b=b==null?be:Dt.defaults(be.Object(),b,Dt.pick(be,Fl));var v=b.Array,C=b.Date,U=b.Error,Q=b.Function,ge=b.Math,ee=b.Object,Wi=b.RegExp,yf=b.String,Ge=b.TypeError,ur=v.prototype,wf=Q.prototype,un=ee.prototype,lr=b["__core-js_shared__"],fr=wf.toString,Z=un.hasOwnProperty,_f=0,rs=function(){var e=/[^.]+$/.exec(lr&&lr.keys&&lr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),dr=un.toString,Tf=fr.call(ee),Af=be._,Ef=Wi("^"+fr.call(Z).replace(Ti,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hr=Fo?b.Buffer:r,Ct=b.Symbol,pr=b.Uint8Array,is=hr?hr.allocUnsafe:r,gr=ts(ee.getPrototypeOf,ee),as=ee.create,os=un.propertyIsEnumerable,mr=ur.splice,ss=Ct?Ct.isConcatSpreadable:r,In=Ct?Ct.iterator:r,jt=Ct?Ct.toStringTag:r,vr=function(){try{var e=Xt(ee,"defineProperty");return e({},"",{}),e}catch{}}(),kf=b.clearTimeout!==be.clearTimeout&&b.clearTimeout,Nf=C&&C.now!==be.Date.now&&C.now,Of=b.setTimeout!==be.setTimeout&&b.setTimeout,br=ge.ceil,xr=ge.floor,qi=ee.getOwnPropertySymbols,Sf=hr?hr.isBuffer:r,cs=b.isFinite,If=ur.join,Df=ts(ee.keys,ee),me=ge.max,Te=ge.min,Cf=C.now,Mf=b.parseInt,us=ge.random,Pf=ur.reverse,Vi=Xt(b,"DataView"),Dn=Xt(b,"Map"),Gi=Xt(b,"Promise"),ln=Xt(b,"Set"),Cn=Xt(b,"WeakMap"),Mn=Xt(ee,"create"),yr=Cn&&new Cn,fn={},Rf=Qt(Vi),Lf=Qt(Dn),Bf=Qt(Gi),Hf=Qt(ln),Uf=Qt(Cn),wr=Ct?Ct.prototype:r,Pn=wr?wr.valueOf:r,ls=wr?wr.toString:r;function s(e){if(fe(e)&&!W(e)&&!(e instanceof K)){if(e instanceof je)return e;if(Z.call(e,"__wrapped__"))return fc(e)}return new je(e)}var dn=function(){function e(){}return function(t){if(!oe(t))return{};if(as)return as(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function _r(){}function je(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}s.templateSettings={escape:Ju,evaluate:Zu,interpolate:xo,variable:"",imports:{_:s}},s.prototype=_r.prototype,s.prototype.constructor=s,je.prototype=dn(_r.prototype),je.prototype.constructor=je;function K(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ce,this.__views__=[]}function Ff(){var e=new K(this.__wrapped__);return e.__actions__=Ie(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ie(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ie(this.__views__),e}function Wf(){if(this.__filtered__){var e=new K(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function qf(){var e=this.__wrapped__.value(),t=this.__dir__,n=W(e),i=t<0,a=n?e.length:0,c=eh(0,a,this.__views__),f=c.start,d=c.end,g=d-f,y=i?d:f-1,w=this.__iteratees__,A=w.length,S=0,P=Te(g,this.__takeCount__);if(!n||!i&&a==g&&P==g)return Ps(e,this.__actions__);var B=[];e:for(;g--&&S<P;){y+=t;for(var V=-1,H=e[y];++V<A;){var z=w[V],Y=z.iteratee,Ue=z.type,Se=Y(H);if(Ue==ot)H=Se;else if(!Se){if(Ue==ye)continue e;break e}}B[S++]=H}return B}K.prototype=dn(_r.prototype),K.prototype.constructor=K;function $t(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Vf(){this.__data__=Mn?Mn(null):{},this.size=0}function Gf(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function jf(e){var t=this.__data__;if(Mn){var n=t[e];return n===_?r:n}return Z.call(t,e)?t[e]:r}function $f(e){var t=this.__data__;return Mn?t[e]!==r:Z.call(t,e)}function zf(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Mn&&t===r?_:t,this}$t.prototype.clear=Vf,$t.prototype.delete=Gf,$t.prototype.get=jf,$t.prototype.has=$f,$t.prototype.set=zf;function pt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Kf(){this.__data__=[],this.size=0}function Yf(e){var t=this.__data__,n=Tr(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():mr.call(t,n,1),--this.size,!0}function Xf(e){var t=this.__data__,n=Tr(t,e);return n<0?r:t[n][1]}function Qf(e){return Tr(this.__data__,e)>-1}function Jf(e,t){var n=this.__data__,i=Tr(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}pt.prototype.clear=Kf,pt.prototype.delete=Yf,pt.prototype.get=Xf,pt.prototype.has=Qf,pt.prototype.set=Jf;function gt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Zf(){this.size=0,this.__data__={hash:new $t,map:new(Dn||pt),string:new $t}}function ed(e){var t=Rr(this,e).delete(e);return this.size-=t?1:0,t}function td(e){return Rr(this,e).get(e)}function nd(e){return Rr(this,e).has(e)}function rd(e,t){var n=Rr(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}gt.prototype.clear=Zf,gt.prototype.delete=ed,gt.prototype.get=td,gt.prototype.has=nd,gt.prototype.set=rd;function zt(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new gt;++t<n;)this.add(e[t])}function id(e){return this.__data__.set(e,_),this}function ad(e){return this.__data__.has(e)}zt.prototype.add=zt.prototype.push=id,zt.prototype.has=ad;function nt(e){var t=this.__data__=new pt(e);this.size=t.size}function od(){this.__data__=new pt,this.size=0}function sd(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function cd(e){return this.__data__.get(e)}function ud(e){return this.__data__.has(e)}function ld(e,t){var n=this.__data__;if(n instanceof pt){var i=n.__data__;if(!Dn||i.length<u-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new gt(i)}return n.set(e,t),this.size=n.size,this}nt.prototype.clear=od,nt.prototype.delete=sd,nt.prototype.get=cd,nt.prototype.has=ud,nt.prototype.set=ld;function fs(e,t){var n=W(e),i=!n&&Jt(e),a=!n&&!i&&Bt(e),c=!n&&!i&&!a&&mn(e),f=n||i||a||c,d=f?Hi(e.length,yf):[],g=d.length;for(var y in e)(t||Z.call(e,y))&&!(f&&(y=="length"||a&&(y=="offset"||y=="parent")||c&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||xt(y,g)))&&d.push(y);return d}function ds(e){var t=e.length;return t?e[ta(0,t-1)]:r}function fd(e,t){return Lr(Ie(e),Kt(t,0,e.length))}function dd(e){return Lr(Ie(e))}function ji(e,t,n){(n!==r&&!rt(e[t],n)||n===r&&!(t in e))&&mt(e,t,n)}function Rn(e,t,n){var i=e[t];(!(Z.call(e,t)&&rt(i,n))||n===r&&!(t in e))&&mt(e,t,n)}function Tr(e,t){for(var n=e.length;n--;)if(rt(e[n][0],t))return n;return-1}function hd(e,t,n,i){return Mt(e,function(a,c,f){t(i,a,n(a),f)}),i}function hs(e,t){return e&&ut(t,xe(t),e)}function pd(e,t){return e&&ut(t,Ce(t),e)}function mt(e,t,n){t=="__proto__"&&vr?vr(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function $i(e,t){for(var n=-1,i=t.length,a=v(i),c=e==null;++n<i;)a[n]=c?r:ka(e,t[n]);return a}function Kt(e,t,n){return e===e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function $e(e,t,n,i,a,c){var f,d=t&x,g=t&k,y=t&D;if(n&&(f=a?n(e,i,a,c):n(e)),f!==r)return f;if(!oe(e))return e;var w=W(e);if(w){if(f=nh(e),!d)return Ie(e,f)}else{var A=Ae(e),S=A==tr||A==go;if(Bt(e))return Bs(e,d);if(A==ht||A==ue||S&&!a){if(f=g||S?{}:nc(e),!d)return g?jd(e,pd(f,e)):Gd(e,hs(f,e))}else{if(!te[A])return a?e:{};f=rh(e,A,d)}}c||(c=new nt);var P=c.get(e);if(P)return P;c.set(e,f),Dc(e)?e.forEach(function(H){f.add($e(H,t,n,H,e,c))}):Sc(e)&&e.forEach(function(H,z){f.set(z,$e(H,t,n,z,e,c))});var B=y?g?da:fa:g?Ce:xe,V=w?r:B(e);return Ve(V||e,function(H,z){V&&(z=H,H=e[z]),Rn(f,z,$e(H,t,n,z,e,c))}),f}function gd(e){var t=xe(e);return function(n){return ps(n,e,t)}}function ps(e,t,n){var i=n.length;if(e==null)return!i;for(e=ee(e);i--;){var a=n[i],c=t[a],f=e[a];if(f===r&&!(a in e)||!c(f))return!1}return!0}function gs(e,t,n){if(typeof e!="function")throw new Ge(h);return qn(function(){e.apply(r,n)},t)}function Ln(e,t,n,i){var a=-1,c=or,f=!0,d=e.length,g=[],y=t.length;if(!d)return g;n&&(t=ie(t,Le(n))),i?(c=Ci,f=!1):t.length>=u&&(c=Sn,f=!1,t=new zt(t));e:for(;++a<d;){var w=e[a],A=n==null?w:n(w);if(w=i||w!==0?w:0,f&&A===A){for(var S=y;S--;)if(t[S]===A)continue e;g.push(w)}else c(t,A,i)||g.push(w)}return g}var Mt=qs(ct),ms=qs(Ki,!0);function md(e,t){var n=!0;return Mt(e,function(i,a,c){return n=!!t(i,a,c),n}),n}function Ar(e,t,n){for(var i=-1,a=e.length;++i<a;){var c=e[i],f=t(c);if(f!=null&&(d===r?f===f&&!He(f):n(f,d)))var d=f,g=c}return g}function vd(e,t,n,i){var a=e.length;for(n=q(n),n<0&&(n=-n>a?0:a+n),i=i===r||i>a?a:q(i),i<0&&(i+=a),i=n>i?0:Mc(i);n<i;)e[n++]=t;return e}function vs(e,t){var n=[];return Mt(e,function(i,a,c){t(i,a,c)&&n.push(i)}),n}function we(e,t,n,i,a){var c=-1,f=e.length;for(n||(n=ah),a||(a=[]);++c<f;){var d=e[c];t>0&&n(d)?t>1?we(d,t-1,n,i,a):St(a,d):i||(a[a.length]=d)}return a}var zi=Vs(),bs=Vs(!0);function ct(e,t){return e&&zi(e,t,xe)}function Ki(e,t){return e&&bs(e,t,xe)}function Er(e,t){return Ot(t,function(n){return yt(e[n])})}function Yt(e,t){t=Rt(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[lt(t[n++])];return n&&n==i?e:r}function xs(e,t,n){var i=t(e);return W(e)?i:St(i,n(e))}function Ne(e){return e==null?e===r?ju:Vu:jt&&jt in ee(e)?Zd(e):dh(e)}function Yi(e,t){return e>t}function bd(e,t){return e!=null&&Z.call(e,t)}function xd(e,t){return e!=null&&t in ee(e)}function yd(e,t,n){return e>=Te(t,n)&&e<me(t,n)}function Xi(e,t,n){for(var i=n?Ci:or,a=e[0].length,c=e.length,f=c,d=v(c),g=1/0,y=[];f--;){var w=e[f];f&&t&&(w=ie(w,Le(t))),g=Te(w.length,g),d[f]=!n&&(t||a>=120&&w.length>=120)?new zt(f&&w):r}w=e[0];var A=-1,S=d[0];e:for(;++A<a&&y.length<g;){var P=w[A],B=t?t(P):P;if(P=n||P!==0?P:0,!(S?Sn(S,B):i(y,B,n))){for(f=c;--f;){var V=d[f];if(!(V?Sn(V,B):i(e[f],B,n)))continue e}S&&S.push(B),y.push(P)}}return y}function wd(e,t,n,i){return ct(e,function(a,c,f){t(i,n(a),c,f)}),i}function Bn(e,t,n){t=Rt(t,e),e=oc(e,t);var i=e==null?e:e[lt(Ke(t))];return i==null?r:Re(i,e,n)}function ys(e){return fe(e)&&Ne(e)==ue}function _d(e){return fe(e)&&Ne(e)==On}function Td(e){return fe(e)&&Ne(e)==Tn}function Hn(e,t,n,i,a){return e===t?!0:e==null||t==null||!fe(e)&&!fe(t)?e!==e&&t!==t:Ad(e,t,n,i,Hn,a)}function Ad(e,t,n,i,a,c){var f=W(e),d=W(t),g=f?re:Ae(e),y=d?re:Ae(t);g=g==ue?ht:g,y=y==ue?ht:y;var w=g==ht,A=y==ht,S=g==y;if(S&&Bt(e)){if(!Bt(t))return!1;f=!0,w=!1}if(S&&!w)return c||(c=new nt),f||mn(e)?Zs(e,t,n,i,a,c):Qd(e,t,g,n,i,a,c);if(!(n&O)){var P=w&&Z.call(e,"__wrapped__"),B=A&&Z.call(t,"__wrapped__");if(P||B){var V=P?e.value():e,H=B?t.value():t;return c||(c=new nt),a(V,H,n,i,c)}}return S?(c||(c=new nt),Jd(e,t,n,i,a,c)):!1}function Ed(e){return fe(e)&&Ae(e)==Ze}function Qi(e,t,n,i){var a=n.length,c=a,f=!i;if(e==null)return!c;for(e=ee(e);a--;){var d=n[a];if(f&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++a<c;){d=n[a];var g=d[0],y=e[g],w=d[1];if(f&&d[2]){if(y===r&&!(g in e))return!1}else{var A=new nt;if(i)var S=i(y,w,g,e,t,A);if(!(S===r?Hn(w,y,O|M,i,A):S))return!1}}return!0}function ws(e){if(!oe(e)||sh(e))return!1;var t=yt(e)?Ef:pl;return t.test(Qt(e))}function kd(e){return fe(e)&&Ne(e)==En}function Nd(e){return fe(e)&&Ae(e)==et}function Od(e){return fe(e)&&qr(e.length)&&!!ne[Ne(e)]}function _s(e){return typeof e=="function"?e:e==null?Me:typeof e=="object"?W(e)?Es(e[0],e[1]):As(e):Gc(e)}function Ji(e){if(!Wn(e))return Df(e);var t=[];for(var n in ee(e))Z.call(e,n)&&n!="constructor"&&t.push(n);return t}function Sd(e){if(!oe(e))return fh(e);var t=Wn(e),n=[];for(var i in e)i=="constructor"&&(t||!Z.call(e,i))||n.push(i);return n}function Zi(e,t){return e<t}function Ts(e,t){var n=-1,i=De(e)?v(e.length):[];return Mt(e,function(a,c,f){i[++n]=t(a,c,f)}),i}function As(e){var t=pa(e);return t.length==1&&t[0][2]?ic(t[0][0],t[0][1]):function(n){return n===e||Qi(n,e,t)}}function Es(e,t){return ma(e)&&rc(t)?ic(lt(e),t):function(n){var i=ka(n,e);return i===r&&i===t?Na(n,e):Hn(t,i,O|M)}}function kr(e,t,n,i,a){e!==t&&zi(t,function(c,f){if(a||(a=new nt),oe(c))Id(e,t,f,n,kr,i,a);else{var d=i?i(ba(e,f),c,f+"",e,t,a):r;d===r&&(d=c),ji(e,f,d)}},Ce)}function Id(e,t,n,i,a,c,f){var d=ba(e,n),g=ba(t,n),y=f.get(g);if(y){ji(e,n,y);return}var w=c?c(d,g,n+"",e,t,f):r,A=w===r;if(A){var S=W(g),P=!S&&Bt(g),B=!S&&!P&&mn(g);w=g,S||P||B?W(d)?w=d:he(d)?w=Ie(d):P?(A=!1,w=Bs(g,!0)):B?(A=!1,w=Hs(g,!0)):w=[]:Vn(g)||Jt(g)?(w=d,Jt(d)?w=Pc(d):(!oe(d)||yt(d))&&(w=nc(g))):A=!1}A&&(f.set(g,w),a(w,g,i,c,f),f.delete(g)),ji(e,n,w)}function ks(e,t){var n=e.length;if(!!n)return t+=t<0?n:0,xt(t,n)?e[t]:r}function Ns(e,t,n){t.length?t=ie(t,function(c){return W(c)?function(f){return Yt(f,c.length===1?c[0]:c)}:c}):t=[Me];var i=-1;t=ie(t,Le(L()));var a=Ts(e,function(c,f,d){var g=ie(t,function(y){return y(c)});return{criteria:g,index:++i,value:c}});return nf(a,function(c,f){return Vd(c,f,n)})}function Dd(e,t){return Os(e,t,function(n,i){return Na(e,i)})}function Os(e,t,n){for(var i=-1,a=t.length,c={};++i<a;){var f=t[i],d=Yt(e,f);n(d,f)&&Un(c,Rt(f,e),d)}return c}function Cd(e){return function(t){return Yt(t,e)}}function ea(e,t,n,i){var a=i?tf:on,c=-1,f=t.length,d=e;for(e===t&&(t=Ie(t)),n&&(d=ie(e,Le(n)));++c<f;)for(var g=0,y=t[c],w=n?n(y):y;(g=a(d,w,g,i))>-1;)d!==e&&mr.call(d,g,1),mr.call(e,g,1);return e}function Ss(e,t){for(var n=e?t.length:0,i=n-1;n--;){var a=t[n];if(n==i||a!==c){var c=a;xt(a)?mr.call(e,a,1):ia(e,a)}}return e}function ta(e,t){return e+xr(us()*(t-e+1))}function Md(e,t,n,i){for(var a=-1,c=me(br((t-e)/(n||1)),0),f=v(c);c--;)f[i?c:++a]=e,e+=n;return f}function na(e,t){var n="";if(!e||t<1||t>Je)return n;do t%2&&(n+=e),t=xr(t/2),t&&(e+=e);while(t);return n}function G(e,t){return xa(ac(e,t,Me),e+"")}function Pd(e){return ds(vn(e))}function Rd(e,t){var n=vn(e);return Lr(n,Kt(t,0,n.length))}function Un(e,t,n,i){if(!oe(e))return e;t=Rt(t,e);for(var a=-1,c=t.length,f=c-1,d=e;d!=null&&++a<c;){var g=lt(t[a]),y=n;if(g==="__proto__"||g==="constructor"||g==="prototype")return e;if(a!=f){var w=d[g];y=i?i(w,g,d):r,y===r&&(y=oe(w)?w:xt(t[a+1])?[]:{})}Rn(d,g,y),d=d[g]}return e}var Is=yr?function(e,t){return yr.set(e,t),e}:Me,Ld=vr?function(e,t){return vr(e,"toString",{configurable:!0,enumerable:!1,value:Sa(t),writable:!0})}:Me;function Bd(e){return Lr(vn(e))}function ze(e,t,n){var i=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var c=v(a);++i<a;)c[i]=e[i+t];return c}function Hd(e,t){var n;return Mt(e,function(i,a,c){return n=t(i,a,c),!n}),!!n}function Nr(e,t,n){var i=0,a=e==null?i:e.length;if(typeof t=="number"&&t===t&&a<=nn){for(;i<a;){var c=i+a>>>1,f=e[c];f!==null&&!He(f)&&(n?f<=t:f<t)?i=c+1:a=c}return a}return ra(e,t,Me,n)}function ra(e,t,n,i){var a=0,c=e==null?0:e.length;if(c===0)return 0;t=n(t);for(var f=t!==t,d=t===null,g=He(t),y=t===r;a<c;){var w=xr((a+c)/2),A=n(e[w]),S=A!==r,P=A===null,B=A===A,V=He(A);if(f)var H=i||B;else y?H=B&&(i||S):d?H=B&&S&&(i||!P):g?H=B&&S&&!P&&(i||!V):P||V?H=!1:H=i?A<=t:A<t;H?a=w+1:c=w}return Te(c,Jn)}function Ds(e,t){for(var n=-1,i=e.length,a=0,c=[];++n<i;){var f=e[n],d=t?t(f):f;if(!n||!rt(d,g)){var g=d;c[a++]=f===0?0:f}}return c}function Cs(e){return typeof e=="number"?e:He(e)?se:+e}function Be(e){if(typeof e=="string")return e;if(W(e))return ie(e,Be)+"";if(He(e))return ls?ls.call(e):"";var t=e+"";return t=="0"&&1/e==-st?"-0":t}function Pt(e,t,n){var i=-1,a=or,c=e.length,f=!0,d=[],g=d;if(n)f=!1,a=Ci;else if(c>=u){var y=t?null:Yd(e);if(y)return cr(y);f=!1,a=Sn,g=new zt}else g=t?[]:d;e:for(;++i<c;){var w=e[i],A=t?t(w):w;if(w=n||w!==0?w:0,f&&A===A){for(var S=g.length;S--;)if(g[S]===A)continue e;t&&g.push(A),d.push(w)}else a(g,A,n)||(g!==d&&g.push(A),d.push(w))}return d}function ia(e,t){return t=Rt(t,e),e=oc(e,t),e==null||delete e[lt(Ke(t))]}function Ms(e,t,n,i){return Un(e,t,n(Yt(e,t)),i)}function Or(e,t,n,i){for(var a=e.length,c=i?a:-1;(i?c--:++c<a)&&t(e[c],c,e););return n?ze(e,i?0:c,i?c+1:a):ze(e,i?c+1:0,i?a:c)}function Ps(e,t){var n=e;return n instanceof K&&(n=n.value()),Mi(t,function(i,a){return a.func.apply(a.thisArg,St([i],a.args))},n)}function aa(e,t,n){var i=e.length;if(i<2)return i?Pt(e[0]):[];for(var a=-1,c=v(i);++a<i;)for(var f=e[a],d=-1;++d<i;)d!=a&&(c[a]=Ln(c[a]||f,e[d],t,n));return Pt(we(c,1),t,n)}function Rs(e,t,n){for(var i=-1,a=e.length,c=t.length,f={};++i<a;){var d=i<c?t[i]:r;n(f,e[i],d)}return f}function oa(e){return he(e)?e:[]}function sa(e){return typeof e=="function"?e:Me}function Rt(e,t){return W(e)?e:ma(e,t)?[e]:lc(J(e))}var Ud=G;function Lt(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ze(e,t,n)}var Ls=kf||function(e){return be.clearTimeout(e)};function Bs(e,t){if(t)return e.slice();var n=e.length,i=is?is(n):new e.constructor(n);return e.copy(i),i}function ca(e){var t=new e.constructor(e.byteLength);return new pr(t).set(new pr(e)),t}function Fd(e,t){var n=t?ca(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function Wd(e){var t=new e.constructor(e.source,yo.exec(e));return t.lastIndex=e.lastIndex,t}function qd(e){return Pn?ee(Pn.call(e)):{}}function Hs(e,t){var n=t?ca(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Us(e,t){if(e!==t){var n=e!==r,i=e===null,a=e===e,c=He(e),f=t!==r,d=t===null,g=t===t,y=He(t);if(!d&&!y&&!c&&e>t||c&&f&&g&&!d&&!y||i&&f&&g||!n&&g||!a)return 1;if(!i&&!c&&!y&&e<t||y&&n&&a&&!i&&!c||d&&n&&a||!f&&a||!g)return-1}return 0}function Vd(e,t,n){for(var i=-1,a=e.criteria,c=t.criteria,f=a.length,d=n.length;++i<f;){var g=Us(a[i],c[i]);if(g){if(i>=d)return g;var y=n[i];return g*(y=="desc"?-1:1)}}return e.index-t.index}function Fs(e,t,n,i){for(var a=-1,c=e.length,f=n.length,d=-1,g=t.length,y=me(c-f,0),w=v(g+y),A=!i;++d<g;)w[d]=t[d];for(;++a<f;)(A||a<c)&&(w[n[a]]=e[a]);for(;y--;)w[d++]=e[a++];return w}function Ws(e,t,n,i){for(var a=-1,c=e.length,f=-1,d=n.length,g=-1,y=t.length,w=me(c-d,0),A=v(w+y),S=!i;++a<w;)A[a]=e[a];for(var P=a;++g<y;)A[P+g]=t[g];for(;++f<d;)(S||a<c)&&(A[P+n[f]]=e[a++]);return A}function Ie(e,t){var n=-1,i=e.length;for(t||(t=v(i));++n<i;)t[n]=e[n];return t}function ut(e,t,n,i){var a=!n;n||(n={});for(var c=-1,f=t.length;++c<f;){var d=t[c],g=i?i(n[d],e[d],d,n,e):r;g===r&&(g=e[d]),a?mt(n,d,g):Rn(n,d,g)}return n}function Gd(e,t){return ut(e,ga(e),t)}function jd(e,t){return ut(e,ec(e),t)}function Sr(e,t){return function(n,i){var a=W(n)?Yl:hd,c=t?t():{};return a(n,e,L(i,2),c)}}function hn(e){return G(function(t,n){var i=-1,a=n.length,c=a>1?n[a-1]:r,f=a>2?n[2]:r;for(c=e.length>3&&typeof c=="function"?(a--,c):r,f&&Oe(n[0],n[1],f)&&(c=a<3?r:c,a=1),t=ee(t);++i<a;){var d=n[i];d&&e(t,d,i,c)}return t})}function qs(e,t){return function(n,i){if(n==null)return n;if(!De(n))return e(n,i);for(var a=n.length,c=t?a:-1,f=ee(n);(t?c--:++c<a)&&i(f[c],c,f)!==!1;);return n}}function Vs(e){return function(t,n,i){for(var a=-1,c=ee(t),f=i(t),d=f.length;d--;){var g=f[e?d:++a];if(n(c[g],g,c)===!1)break}return t}}function $d(e,t,n){var i=t&N,a=Fn(e);function c(){var f=this&&this!==be&&this instanceof c?a:e;return f.apply(i?n:this,arguments)}return c}function Gs(e){return function(t){t=J(t);var n=sn(t)?tt(t):r,i=n?n[0]:t.charAt(0),a=n?Lt(n,1).join(""):t.slice(1);return i[e]()+a}}function pn(e){return function(t){return Mi(qc(Wc(t).replace(Rl,"")),e,"")}}function Fn(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=dn(e.prototype),i=e.apply(n,t);return oe(i)?i:n}}function zd(e,t,n){var i=Fn(e);function a(){for(var c=arguments.length,f=v(c),d=c,g=gn(a);d--;)f[d]=arguments[d];var y=c<3&&f[0]!==g&&f[c-1]!==g?[]:It(f,g);if(c-=y.length,c<n)return Ys(e,t,Ir,a.placeholder,r,f,y,r,r,n-c);var w=this&&this!==be&&this instanceof a?i:e;return Re(w,this,f)}return a}function js(e){return function(t,n,i){var a=ee(t);if(!De(t)){var c=L(n,3);t=xe(t),n=function(d){return c(a[d],d,a)}}var f=e(t,n,i);return f>-1?a[c?t[f]:f]:r}}function $s(e){return bt(function(t){var n=t.length,i=n,a=je.prototype.thru;for(e&&t.reverse();i--;){var c=t[i];if(typeof c!="function")throw new Ge(h);if(a&&!f&&Pr(c)=="wrapper")var f=new je([],!0)}for(i=f?i:n;++i<n;){c=t[i];var d=Pr(c),g=d=="wrapper"?ha(c):r;g&&va(g[0])&&g[1]==(de|R|$|ve)&&!g[4].length&&g[9]==1?f=f[Pr(g[0])].apply(f,g[3]):f=c.length==1&&va(c)?f[d]():f.thru(c)}return function(){var y=arguments,w=y[0];if(f&&y.length==1&&W(w))return f.plant(w).value();for(var A=0,S=n?t[A].apply(this,y):w;++A<n;)S=t[A].call(this,S);return S}})}function Ir(e,t,n,i,a,c,f,d,g,y){var w=t&de,A=t&N,S=t&I,P=t&(R|F),B=t&Pe,V=S?r:Fn(e);function H(){for(var z=arguments.length,Y=v(z),Ue=z;Ue--;)Y[Ue]=arguments[Ue];if(P)var Se=gn(H),Fe=af(Y,Se);if(i&&(Y=Fs(Y,i,a,P)),c&&(Y=Ws(Y,c,f,P)),z-=Fe,P&&z<y){var pe=It(Y,Se);return Ys(e,t,Ir,H.placeholder,n,Y,pe,d,g,y-z)}var it=A?n:this,_t=S?it[e]:e;return z=Y.length,d?Y=hh(Y,d):B&&z>1&&Y.reverse(),w&&g<z&&(Y.length=g),this&&this!==be&&this instanceof H&&(_t=V||Fn(_t)),_t.apply(it,Y)}return H}function zs(e,t){return function(n,i){return wd(n,e,t(i),{})}}function Dr(e,t){return function(n,i){var a;if(n===r&&i===r)return t;if(n!==r&&(a=n),i!==r){if(a===r)return i;typeof n=="string"||typeof i=="string"?(n=Be(n),i=Be(i)):(n=Cs(n),i=Cs(i)),a=e(n,i)}return a}}function ua(e){return bt(function(t){return t=ie(t,Le(L())),G(function(n){var i=this;return e(t,function(a){return Re(a,i,n)})})})}function Cr(e,t){t=t===r?" ":Be(t);var n=t.length;if(n<2)return n?na(t,e):t;var i=na(t,br(e/cn(t)));return sn(t)?Lt(tt(i),0,e).join(""):i.slice(0,e)}function Kd(e,t,n,i){var a=t&N,c=Fn(e);function f(){for(var d=-1,g=arguments.length,y=-1,w=i.length,A=v(w+g),S=this&&this!==be&&this instanceof f?c:e;++y<w;)A[y]=i[y];for(;g--;)A[y++]=arguments[++d];return Re(S,a?n:this,A)}return f}function Ks(e){return function(t,n,i){return i&&typeof i!="number"&&Oe(t,n,i)&&(n=i=r),t=wt(t),n===r?(n=t,t=0):n=wt(n),i=i===r?t<n?1:-1:wt(i),Md(t,n,i,e)}}function Mr(e){return function(t,n){return typeof t=="string"&&typeof n=="string"||(t=Ye(t),n=Ye(n)),e(t,n)}}function Ys(e,t,n,i,a,c,f,d,g,y){var w=t&R,A=w?f:r,S=w?r:f,P=w?c:r,B=w?r:c;t|=w?$:X,t&=~(w?X:$),t&j||(t&=~(N|I));var V=[e,t,a,P,A,B,S,d,g,y],H=n.apply(r,V);return va(e)&&sc(H,V),H.placeholder=i,cc(H,e,t)}function la(e){var t=ge[e];return function(n,i){if(n=Ye(n),i=i==null?0:Te(q(i),292),i&&cs(n)){var a=(J(n)+"e").split("e"),c=t(a[0]+"e"+(+a[1]+i));return a=(J(c)+"e").split("e"),+(a[0]+"e"+(+a[1]-i))}return t(n)}}var Yd=ln&&1/cr(new ln([,-0]))[1]==st?function(e){return new ln(e)}:Ca;function Xs(e){return function(t){var n=Ae(t);return n==Ze?Fi(t):n==et?df(t):rf(t,e(t))}}function vt(e,t,n,i,a,c,f,d){var g=t&I;if(!g&&typeof e!="function")throw new Ge(h);var y=i?i.length:0;if(y||(t&=~($|X),i=a=r),f=f===r?f:me(q(f),0),d=d===r?d:q(d),y-=a?a.length:0,t&X){var w=i,A=a;i=a=r}var S=g?r:ha(e),P=[e,t,n,i,a,w,A,c,f,d];if(S&&lh(P,S),e=P[0],t=P[1],n=P[2],i=P[3],a=P[4],d=P[9]=P[9]===r?g?0:e.length:me(P[9]-y,0),!d&&t&(R|F)&&(t&=~(R|F)),!t||t==N)var B=$d(e,t,n);else t==R||t==F?B=zd(e,t,d):(t==$||t==(N|$))&&!a.length?B=Kd(e,t,n,i):B=Ir.apply(r,P);var V=S?Is:sc;return cc(V(B,P),e,t)}function Qs(e,t,n,i){return e===r||rt(e,un[n])&&!Z.call(i,n)?t:e}function Js(e,t,n,i,a,c){return oe(e)&&oe(t)&&(c.set(t,e),kr(e,t,r,Js,c),c.delete(t)),e}function Xd(e){return Vn(e)?r:e}function Zs(e,t,n,i,a,c){var f=n&O,d=e.length,g=t.length;if(d!=g&&!(f&&g>d))return!1;var y=c.get(e),w=c.get(t);if(y&&w)return y==t&&w==e;var A=-1,S=!0,P=n&M?new zt:r;for(c.set(e,t),c.set(t,e);++A<d;){var B=e[A],V=t[A];if(i)var H=f?i(V,B,A,t,e,c):i(B,V,A,e,t,c);if(H!==r){if(H)continue;S=!1;break}if(P){if(!Pi(t,function(z,Y){if(!Sn(P,Y)&&(B===z||a(B,z,n,i,c)))return P.push(Y)})){S=!1;break}}else if(!(B===V||a(B,V,n,i,c))){S=!1;break}}return c.delete(e),c.delete(t),S}function Qd(e,t,n,i,a,c,f){switch(n){case rn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case On:return!(e.byteLength!=t.byteLength||!c(new pr(e),new pr(t)));case le:case Tn:case An:return rt(+e,+t);case er:return e.name==t.name&&e.message==t.message;case En:case kn:return e==t+"";case Ze:var d=Fi;case et:var g=i&O;if(d||(d=cr),e.size!=t.size&&!g)return!1;var y=f.get(e);if(y)return y==t;i|=M,f.set(e,t);var w=Zs(d(e),d(t),i,a,c,f);return f.delete(e),w;case nr:if(Pn)return Pn.call(e)==Pn.call(t)}return!1}function Jd(e,t,n,i,a,c){var f=n&O,d=fa(e),g=d.length,y=fa(t),w=y.length;if(g!=w&&!f)return!1;for(var A=g;A--;){var S=d[A];if(!(f?S in t:Z.call(t,S)))return!1}var P=c.get(e),B=c.get(t);if(P&&B)return P==t&&B==e;var V=!0;c.set(e,t),c.set(t,e);for(var H=f;++A<g;){S=d[A];var z=e[S],Y=t[S];if(i)var Ue=f?i(Y,z,S,t,e,c):i(z,Y,S,e,t,c);if(!(Ue===r?z===Y||a(z,Y,n,i,c):Ue)){V=!1;break}H||(H=S=="constructor")}if(V&&!H){var Se=e.constructor,Fe=t.constructor;Se!=Fe&&"constructor"in e&&"constructor"in t&&!(typeof Se=="function"&&Se instanceof Se&&typeof Fe=="function"&&Fe instanceof Fe)&&(V=!1)}return c.delete(e),c.delete(t),V}function bt(e){return xa(ac(e,r,pc),e+"")}function fa(e){return xs(e,xe,ga)}function da(e){return xs(e,Ce,ec)}var ha=yr?function(e){return yr.get(e)}:Ca;function Pr(e){for(var t=e.name+"",n=fn[t],i=Z.call(fn,t)?n.length:0;i--;){var a=n[i],c=a.func;if(c==null||c==e)return a.name}return t}function gn(e){var t=Z.call(s,"placeholder")?s:e;return t.placeholder}function L(){var e=s.iteratee||Ia;return e=e===Ia?_s:e,arguments.length?e(arguments[0],arguments[1]):e}function Rr(e,t){var n=e.__data__;return oh(t)?n[typeof t=="string"?"string":"hash"]:n.map}function pa(e){for(var t=xe(e),n=t.length;n--;){var i=t[n],a=e[i];t[n]=[i,a,rc(a)]}return t}function Xt(e,t){var n=uf(e,t);return ws(n)?n:r}function Zd(e){var t=Z.call(e,jt),n=e[jt];try{e[jt]=r;var i=!0}catch{}var a=dr.call(e);return i&&(t?e[jt]=n:delete e[jt]),a}var ga=qi?function(e){return e==null?[]:(e=ee(e),Ot(qi(e),function(t){return os.call(e,t)}))}:Ma,ec=qi?function(e){for(var t=[];e;)St(t,ga(e)),e=gr(e);return t}:Ma,Ae=Ne;(Vi&&Ae(new Vi(new ArrayBuffer(1)))!=rn||Dn&&Ae(new Dn)!=Ze||Gi&&Ae(Gi.resolve())!=mo||ln&&Ae(new ln)!=et||Cn&&Ae(new Cn)!=Nn)&&(Ae=function(e){var t=Ne(e),n=t==ht?e.constructor:r,i=n?Qt(n):"";if(i)switch(i){case Rf:return rn;case Lf:return Ze;case Bf:return mo;case Hf:return et;case Uf:return Nn}return t});function eh(e,t,n){for(var i=-1,a=n.length;++i<a;){var c=n[i],f=c.size;switch(c.type){case"drop":e+=f;break;case"dropRight":t-=f;break;case"take":t=Te(t,e+f);break;case"takeRight":e=me(e,t-f);break}}return{start:e,end:t}}function th(e){var t=e.match(ol);return t?t[1].split(sl):[]}function tc(e,t,n){t=Rt(t,e);for(var i=-1,a=t.length,c=!1;++i<a;){var f=lt(t[i]);if(!(c=e!=null&&n(e,f)))break;e=e[f]}return c||++i!=a?c:(a=e==null?0:e.length,!!a&&qr(a)&&xt(f,a)&&(W(e)||Jt(e)))}function nh(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Z.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function nc(e){return typeof e.constructor=="function"&&!Wn(e)?dn(gr(e)):{}}function rh(e,t,n){var i=e.constructor;switch(t){case On:return ca(e);case le:case Tn:return new i(+e);case rn:return Fd(e,n);case pi:case gi:case mi:case vi:case bi:case xi:case yi:case wi:case _i:return Hs(e,n);case Ze:return new i;case An:case kn:return new i(e);case En:return Wd(e);case et:return new i;case nr:return qd(e)}}function ih(e,t){var n=t.length;if(!n)return e;var i=n-1;return t[i]=(n>1?"& ":"")+t[i],t=t.join(n>2?", ":" "),e.replace(al,`{
/* [wrapped with `+t+`] */
`)}function ah(e){return W(e)||Jt(e)||!!(ss&&e&&e[ss])}function xt(e,t){var n=typeof e;return t=t??Je,!!t&&(n=="number"||n!="symbol"&&ml.test(e))&&e>-1&&e%1==0&&e<t}function Oe(e,t,n){if(!oe(n))return!1;var i=typeof t;return(i=="number"?De(n)&&xt(t,n.length):i=="string"&&t in n)?rt(n[t],e):!1}function ma(e,t){if(W(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||He(e)?!0:tl.test(e)||!el.test(e)||t!=null&&e in ee(t)}function oh(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function va(e){var t=Pr(e),n=s[t];if(typeof n!="function"||!(t in K.prototype))return!1;if(e===n)return!0;var i=ha(n);return!!i&&e===i[0]}function sh(e){return!!rs&&rs in e}var ch=lr?yt:Pa;function Wn(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||un;return e===n}function rc(e){return e===e&&!oe(e)}function ic(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==r||e in ee(n))}}function uh(e){var t=Fr(e,function(i){return n.size===T&&n.clear(),i}),n=t.cache;return t}function lh(e,t){var n=e[1],i=t[1],a=n|i,c=a<(N|I|de),f=i==de&&n==R||i==de&&n==ve&&e[7].length<=t[8]||i==(de|ve)&&t[7].length<=t[8]&&n==R;if(!(c||f))return e;i&N&&(e[2]=t[2],a|=n&N?0:j);var d=t[3];if(d){var g=e[3];e[3]=g?Fs(g,d,t[4]):d,e[4]=g?It(e[3],E):t[4]}return d=t[5],d&&(g=e[5],e[5]=g?Ws(g,d,t[6]):d,e[6]=g?It(e[5],E):t[6]),d=t[7],d&&(e[7]=d),i&de&&(e[8]=e[8]==null?t[8]:Te(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=a,e}function fh(e){var t=[];if(e!=null)for(var n in ee(e))t.push(n);return t}function dh(e){return dr.call(e)}function ac(e,t,n){return t=me(t===r?e.length-1:t,0),function(){for(var i=arguments,a=-1,c=me(i.length-t,0),f=v(c);++a<c;)f[a]=i[t+a];a=-1;for(var d=v(t+1);++a<t;)d[a]=i[a];return d[t]=n(f),Re(e,this,d)}}function oc(e,t){return t.length<2?e:Yt(e,ze(t,0,-1))}function hh(e,t){for(var n=e.length,i=Te(t.length,n),a=Ie(e);i--;){var c=t[i];e[i]=xt(c,n)?a[c]:r}return e}function ba(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var sc=uc(Is),qn=Of||function(e,t){return be.setTimeout(e,t)},xa=uc(Ld);function cc(e,t,n){var i=t+"";return xa(e,ih(i,ph(th(i),n)))}function uc(e){var t=0,n=0;return function(){var i=Cf(),a=Qe-(i-n);if(n=i,a>0){if(++t>=Vt)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Lr(e,t){var n=-1,i=e.length,a=i-1;for(t=t===r?i:t;++n<t;){var c=ta(n,a),f=e[c];e[c]=e[n],e[n]=f}return e.length=t,e}var lc=uh(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(nl,function(n,i,a,c){t.push(a?c.replace(ll,"$1"):i||n)}),t});function lt(e){if(typeof e=="string"||He(e))return e;var t=e+"";return t=="0"&&1/e==-st?"-0":t}function Qt(e){if(e!=null){try{return fr.call(e)}catch{}try{return e+""}catch{}}return""}function ph(e,t){return Ve(Zn,function(n){var i="_."+n[0];t&n[1]&&!or(e,i)&&e.push(i)}),e.sort()}function fc(e){if(e instanceof K)return e.clone();var t=new je(e.__wrapped__,e.__chain__);return t.__actions__=Ie(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function gh(e,t,n){(n?Oe(e,t,n):t===r)?t=1:t=me(q(t),0);var i=e==null?0:e.length;if(!i||t<1)return[];for(var a=0,c=0,f=v(br(i/t));a<i;)f[c++]=ze(e,a,a+=t);return f}function mh(e){for(var t=-1,n=e==null?0:e.length,i=0,a=[];++t<n;){var c=e[t];c&&(a[i++]=c)}return a}function vh(){var e=arguments.length;if(!e)return[];for(var t=v(e-1),n=arguments[0],i=e;i--;)t[i-1]=arguments[i];return St(W(n)?Ie(n):[n],we(t,1))}var bh=G(function(e,t){return he(e)?Ln(e,we(t,1,he,!0)):[]}),xh=G(function(e,t){var n=Ke(t);return he(n)&&(n=r),he(e)?Ln(e,we(t,1,he,!0),L(n,2)):[]}),yh=G(function(e,t){var n=Ke(t);return he(n)&&(n=r),he(e)?Ln(e,we(t,1,he,!0),r,n):[]});function wh(e,t,n){var i=e==null?0:e.length;return i?(t=n||t===r?1:q(t),ze(e,t<0?0:t,i)):[]}function _h(e,t,n){var i=e==null?0:e.length;return i?(t=n||t===r?1:q(t),t=i-t,ze(e,0,t<0?0:t)):[]}function Th(e,t){return e&&e.length?Or(e,L(t,3),!0,!0):[]}function Ah(e,t){return e&&e.length?Or(e,L(t,3),!0):[]}function Eh(e,t,n,i){var a=e==null?0:e.length;return a?(n&&typeof n!="number"&&Oe(e,t,n)&&(n=0,i=a),vd(e,t,n,i)):[]}function dc(e,t,n){var i=e==null?0:e.length;if(!i)return-1;var a=n==null?0:q(n);return a<0&&(a=me(i+a,0)),sr(e,L(t,3),a)}function hc(e,t,n){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return n!==r&&(a=q(n),a=n<0?me(i+a,0):Te(a,i-1)),sr(e,L(t,3),a,!0)}function pc(e){var t=e==null?0:e.length;return t?we(e,1):[]}function kh(e){var t=e==null?0:e.length;return t?we(e,st):[]}function Nh(e,t){var n=e==null?0:e.length;return n?(t=t===r?1:q(t),we(e,t)):[]}function Oh(e){for(var t=-1,n=e==null?0:e.length,i={};++t<n;){var a=e[t];i[a[0]]=a[1]}return i}function gc(e){return e&&e.length?e[0]:r}function Sh(e,t,n){var i=e==null?0:e.length;if(!i)return-1;var a=n==null?0:q(n);return a<0&&(a=me(i+a,0)),on(e,t,a)}function Ih(e){var t=e==null?0:e.length;return t?ze(e,0,-1):[]}var Dh=G(function(e){var t=ie(e,oa);return t.length&&t[0]===e[0]?Xi(t):[]}),Ch=G(function(e){var t=Ke(e),n=ie(e,oa);return t===Ke(n)?t=r:n.pop(),n.length&&n[0]===e[0]?Xi(n,L(t,2)):[]}),Mh=G(function(e){var t=Ke(e),n=ie(e,oa);return t=typeof t=="function"?t:r,t&&n.pop(),n.length&&n[0]===e[0]?Xi(n,r,t):[]});function Ph(e,t){return e==null?"":If.call(e,t)}function Ke(e){var t=e==null?0:e.length;return t?e[t-1]:r}function Rh(e,t,n){var i=e==null?0:e.length;if(!i)return-1;var a=i;return n!==r&&(a=q(n),a=a<0?me(i+a,0):Te(a,i-1)),t===t?pf(e,t,a):sr(e,Yo,a,!0)}function Lh(e,t){return e&&e.length?ks(e,q(t)):r}var Bh=G(mc);function mc(e,t){return e&&e.length&&t&&t.length?ea(e,t):e}function Hh(e,t,n){return e&&e.length&&t&&t.length?ea(e,t,L(n,2)):e}function Uh(e,t,n){return e&&e.length&&t&&t.length?ea(e,t,r,n):e}var Fh=bt(function(e,t){var n=e==null?0:e.length,i=$i(e,t);return Ss(e,ie(t,function(a){return xt(a,n)?+a:a}).sort(Us)),i});function Wh(e,t){var n=[];if(!(e&&e.length))return n;var i=-1,a=[],c=e.length;for(t=L(t,3);++i<c;){var f=e[i];t(f,i,e)&&(n.push(f),a.push(i))}return Ss(e,a),n}function ya(e){return e==null?e:Pf.call(e)}function qh(e,t,n){var i=e==null?0:e.length;return i?(n&&typeof n!="number"&&Oe(e,t,n)?(t=0,n=i):(t=t==null?0:q(t),n=n===r?i:q(n)),ze(e,t,n)):[]}function Vh(e,t){return Nr(e,t)}function Gh(e,t,n){return ra(e,t,L(n,2))}function jh(e,t){var n=e==null?0:e.length;if(n){var i=Nr(e,t);if(i<n&&rt(e[i],t))return i}return-1}function $h(e,t){return Nr(e,t,!0)}function zh(e,t,n){return ra(e,t,L(n,2),!0)}function Kh(e,t){var n=e==null?0:e.length;if(n){var i=Nr(e,t,!0)-1;if(rt(e[i],t))return i}return-1}function Yh(e){return e&&e.length?Ds(e):[]}function Xh(e,t){return e&&e.length?Ds(e,L(t,2)):[]}function Qh(e){var t=e==null?0:e.length;return t?ze(e,1,t):[]}function Jh(e,t,n){return e&&e.length?(t=n||t===r?1:q(t),ze(e,0,t<0?0:t)):[]}function Zh(e,t,n){var i=e==null?0:e.length;return i?(t=n||t===r?1:q(t),t=i-t,ze(e,t<0?0:t,i)):[]}function ep(e,t){return e&&e.length?Or(e,L(t,3),!1,!0):[]}function tp(e,t){return e&&e.length?Or(e,L(t,3)):[]}var np=G(function(e){return Pt(we(e,1,he,!0))}),rp=G(function(e){var t=Ke(e);return he(t)&&(t=r),Pt(we(e,1,he,!0),L(t,2))}),ip=G(function(e){var t=Ke(e);return t=typeof t=="function"?t:r,Pt(we(e,1,he,!0),r,t)});function ap(e){return e&&e.length?Pt(e):[]}function op(e,t){return e&&e.length?Pt(e,L(t,2)):[]}function sp(e,t){return t=typeof t=="function"?t:r,e&&e.length?Pt(e,r,t):[]}function wa(e){if(!(e&&e.length))return[];var t=0;return e=Ot(e,function(n){if(he(n))return t=me(n.length,t),!0}),Hi(t,function(n){return ie(e,Ri(n))})}function vc(e,t){if(!(e&&e.length))return[];var n=wa(e);return t==null?n:ie(n,function(i){return Re(t,r,i)})}var cp=G(function(e,t){return he(e)?Ln(e,t):[]}),up=G(function(e){return aa(Ot(e,he))}),lp=G(function(e){var t=Ke(e);return he(t)&&(t=r),aa(Ot(e,he),L(t,2))}),fp=G(function(e){var t=Ke(e);return t=typeof t=="function"?t:r,aa(Ot(e,he),r,t)}),dp=G(wa);function hp(e,t){return Rs(e||[],t||[],Rn)}function pp(e,t){return Rs(e||[],t||[],Un)}var gp=G(function(e){var t=e.length,n=t>1?e[t-1]:r;return n=typeof n=="function"?(e.pop(),n):r,vc(e,n)});function bc(e){var t=s(e);return t.__chain__=!0,t}function mp(e,t){return t(e),e}function Br(e,t){return t(e)}var vp=bt(function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,a=function(c){return $i(c,e)};return t>1||this.__actions__.length||!(i instanceof K)||!xt(n)?this.thru(a):(i=i.slice(n,+n+(t?1:0)),i.__actions__.push({func:Br,args:[a],thisArg:r}),new je(i,this.__chain__).thru(function(c){return t&&!c.length&&c.push(r),c}))});function bp(){return bc(this)}function xp(){return new je(this.value(),this.__chain__)}function yp(){this.__values__===r&&(this.__values__=Cc(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function wp(){return this}function _p(e){for(var t,n=this;n instanceof _r;){var i=fc(n);i.__index__=0,i.__values__=r,t?a.__wrapped__=i:t=i;var a=i;n=n.__wrapped__}return a.__wrapped__=e,t}function Tp(){var e=this.__wrapped__;if(e instanceof K){var t=e;return this.__actions__.length&&(t=new K(this)),t=t.reverse(),t.__actions__.push({func:Br,args:[ya],thisArg:r}),new je(t,this.__chain__)}return this.thru(ya)}function Ap(){return Ps(this.__wrapped__,this.__actions__)}var Ep=Sr(function(e,t,n){Z.call(e,n)?++e[n]:mt(e,n,1)});function kp(e,t,n){var i=W(e)?zo:md;return n&&Oe(e,t,n)&&(t=r),i(e,L(t,3))}function Np(e,t){var n=W(e)?Ot:vs;return n(e,L(t,3))}var Op=js(dc),Sp=js(hc);function Ip(e,t){return we(Hr(e,t),1)}function Dp(e,t){return we(Hr(e,t),st)}function Cp(e,t,n){return n=n===r?1:q(n),we(Hr(e,t),n)}function xc(e,t){var n=W(e)?Ve:Mt;return n(e,L(t,3))}function yc(e,t){var n=W(e)?Xl:ms;return n(e,L(t,3))}var Mp=Sr(function(e,t,n){Z.call(e,n)?e[n].push(t):mt(e,n,[t])});function Pp(e,t,n,i){e=De(e)?e:vn(e),n=n&&!i?q(n):0;var a=e.length;return n<0&&(n=me(a+n,0)),Vr(e)?n<=a&&e.indexOf(t,n)>-1:!!a&&on(e,t,n)>-1}var Rp=G(function(e,t,n){var i=-1,a=typeof t=="function",c=De(e)?v(e.length):[];return Mt(e,function(f){c[++i]=a?Re(t,f,n):Bn(f,t,n)}),c}),Lp=Sr(function(e,t,n){mt(e,n,t)});function Hr(e,t){var n=W(e)?ie:Ts;return n(e,L(t,3))}function Bp(e,t,n,i){return e==null?[]:(W(t)||(t=t==null?[]:[t]),n=i?r:n,W(n)||(n=n==null?[]:[n]),Ns(e,t,n))}var Hp=Sr(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});function Up(e,t,n){var i=W(e)?Mi:Qo,a=arguments.length<3;return i(e,L(t,4),n,a,Mt)}function Fp(e,t,n){var i=W(e)?Ql:Qo,a=arguments.length<3;return i(e,L(t,4),n,a,ms)}function Wp(e,t){var n=W(e)?Ot:vs;return n(e,Wr(L(t,3)))}function qp(e){var t=W(e)?ds:Pd;return t(e)}function Vp(e,t,n){(n?Oe(e,t,n):t===r)?t=1:t=q(t);var i=W(e)?fd:Rd;return i(e,t)}function Gp(e){var t=W(e)?dd:Bd;return t(e)}function jp(e){if(e==null)return 0;if(De(e))return Vr(e)?cn(e):e.length;var t=Ae(e);return t==Ze||t==et?e.size:Ji(e).length}function $p(e,t,n){var i=W(e)?Pi:Hd;return n&&Oe(e,t,n)&&(t=r),i(e,L(t,3))}var zp=G(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Oe(e,t[0],t[1])?t=[]:n>2&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),Ns(e,we(t,1),[])}),Ur=Nf||function(){return be.Date.now()};function Kp(e,t){if(typeof t!="function")throw new Ge(h);return e=q(e),function(){if(--e<1)return t.apply(this,arguments)}}function wc(e,t,n){return t=n?r:t,t=e&&t==null?e.length:t,vt(e,de,r,r,r,r,t)}function _c(e,t){var n;if(typeof t!="function")throw new Ge(h);return e=q(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=r),n}}var _a=G(function(e,t,n){var i=N;if(n.length){var a=It(n,gn(_a));i|=$}return vt(e,i,t,n,a)}),Tc=G(function(e,t,n){var i=N|I;if(n.length){var a=It(n,gn(Tc));i|=$}return vt(t,i,e,n,a)});function Ac(e,t,n){t=n?r:t;var i=vt(e,R,r,r,r,r,r,t);return i.placeholder=Ac.placeholder,i}function Ec(e,t,n){t=n?r:t;var i=vt(e,F,r,r,r,r,r,t);return i.placeholder=Ec.placeholder,i}function kc(e,t,n){var i,a,c,f,d,g,y=0,w=!1,A=!1,S=!0;if(typeof e!="function")throw new Ge(h);t=Ye(t)||0,oe(n)&&(w=!!n.leading,A="maxWait"in n,c=A?me(Ye(n.maxWait)||0,t):c,S="trailing"in n?!!n.trailing:S);function P(pe){var it=i,_t=a;return i=a=r,y=pe,f=e.apply(_t,it),f}function B(pe){return y=pe,d=qn(z,t),w?P(pe):f}function V(pe){var it=pe-g,_t=pe-y,jc=t-it;return A?Te(jc,c-_t):jc}function H(pe){var it=pe-g,_t=pe-y;return g===r||it>=t||it<0||A&&_t>=c}function z(){var pe=Ur();if(H(pe))return Y(pe);d=qn(z,V(pe))}function Y(pe){return d=r,S&&i?P(pe):(i=a=r,f)}function Ue(){d!==r&&Ls(d),y=0,i=g=a=d=r}function Se(){return d===r?f:Y(Ur())}function Fe(){var pe=Ur(),it=H(pe);if(i=arguments,a=this,g=pe,it){if(d===r)return B(g);if(A)return Ls(d),d=qn(z,t),P(g)}return d===r&&(d=qn(z,t)),f}return Fe.cancel=Ue,Fe.flush=Se,Fe}var Yp=G(function(e,t){return gs(e,1,t)}),Xp=G(function(e,t,n){return gs(e,Ye(t)||0,n)});function Qp(e){return vt(e,Pe)}function Fr(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Ge(h);var n=function(){var i=arguments,a=t?t.apply(this,i):i[0],c=n.cache;if(c.has(a))return c.get(a);var f=e.apply(this,i);return n.cache=c.set(a,f)||c,f};return n.cache=new(Fr.Cache||gt),n}Fr.Cache=gt;function Wr(e){if(typeof e!="function")throw new Ge(h);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Jp(e){return _c(2,e)}var Zp=Ud(function(e,t){t=t.length==1&&W(t[0])?ie(t[0],Le(L())):ie(we(t,1),Le(L()));var n=t.length;return G(function(i){for(var a=-1,c=Te(i.length,n);++a<c;)i[a]=t[a].call(this,i[a]);return Re(e,this,i)})}),Ta=G(function(e,t){var n=It(t,gn(Ta));return vt(e,$,r,t,n)}),Nc=G(function(e,t){var n=It(t,gn(Nc));return vt(e,X,r,t,n)}),eg=bt(function(e,t){return vt(e,ve,r,r,r,t)});function tg(e,t){if(typeof e!="function")throw new Ge(h);return t=t===r?t:q(t),G(e,t)}function ng(e,t){if(typeof e!="function")throw new Ge(h);return t=t==null?0:me(q(t),0),G(function(n){var i=n[t],a=Lt(n,0,t);return i&&St(a,i),Re(e,this,a)})}function rg(e,t,n){var i=!0,a=!0;if(typeof e!="function")throw new Ge(h);return oe(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),kc(e,t,{leading:i,maxWait:t,trailing:a})}function ig(e){return wc(e,1)}function ag(e,t){return Ta(sa(t),e)}function og(){if(!arguments.length)return[];var e=arguments[0];return W(e)?e:[e]}function sg(e){return $e(e,D)}function cg(e,t){return t=typeof t=="function"?t:r,$e(e,D,t)}function ug(e){return $e(e,x|D)}function lg(e,t){return t=typeof t=="function"?t:r,$e(e,x|D,t)}function fg(e,t){return t==null||ps(e,t,xe(t))}function rt(e,t){return e===t||e!==e&&t!==t}var dg=Mr(Yi),hg=Mr(function(e,t){return e>=t}),Jt=ys(function(){return arguments}())?ys:function(e){return fe(e)&&Z.call(e,"callee")&&!os.call(e,"callee")},W=v.isArray,pg=Wo?Le(Wo):_d;function De(e){return e!=null&&qr(e.length)&&!yt(e)}function he(e){return fe(e)&&De(e)}function gg(e){return e===!0||e===!1||fe(e)&&Ne(e)==le}var Bt=Sf||Pa,mg=qo?Le(qo):Td;function vg(e){return fe(e)&&e.nodeType===1&&!Vn(e)}function bg(e){if(e==null)return!0;if(De(e)&&(W(e)||typeof e=="string"||typeof e.splice=="function"||Bt(e)||mn(e)||Jt(e)))return!e.length;var t=Ae(e);if(t==Ze||t==et)return!e.size;if(Wn(e))return!Ji(e).length;for(var n in e)if(Z.call(e,n))return!1;return!0}function xg(e,t){return Hn(e,t)}function yg(e,t,n){n=typeof n=="function"?n:r;var i=n?n(e,t):r;return i===r?Hn(e,t,r,n):!!i}function Aa(e){if(!fe(e))return!1;var t=Ne(e);return t==er||t==qu||typeof e.message=="string"&&typeof e.name=="string"&&!Vn(e)}function wg(e){return typeof e=="number"&&cs(e)}function yt(e){if(!oe(e))return!1;var t=Ne(e);return t==tr||t==go||t==Nt||t==Gu}function Oc(e){return typeof e=="number"&&e==q(e)}function qr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Je}function oe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function fe(e){return e!=null&&typeof e=="object"}var Sc=Vo?Le(Vo):Ed;function _g(e,t){return e===t||Qi(e,t,pa(t))}function Tg(e,t,n){return n=typeof n=="function"?n:r,Qi(e,t,pa(t),n)}function Ag(e){return Ic(e)&&e!=+e}function Eg(e){if(ch(e))throw new U(l);return ws(e)}function kg(e){return e===null}function Ng(e){return e==null}function Ic(e){return typeof e=="number"||fe(e)&&Ne(e)==An}function Vn(e){if(!fe(e)||Ne(e)!=ht)return!1;var t=gr(e);if(t===null)return!0;var n=Z.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&fr.call(n)==Tf}var Ea=Go?Le(Go):kd;function Og(e){return Oc(e)&&e>=-Je&&e<=Je}var Dc=jo?Le(jo):Nd;function Vr(e){return typeof e=="string"||!W(e)&&fe(e)&&Ne(e)==kn}function He(e){return typeof e=="symbol"||fe(e)&&Ne(e)==nr}var mn=$o?Le($o):Od;function Sg(e){return e===r}function Ig(e){return fe(e)&&Ae(e)==Nn}function Dg(e){return fe(e)&&Ne(e)==$u}var Cg=Mr(Zi),Mg=Mr(function(e,t){return e<=t});function Cc(e){if(!e)return[];if(De(e))return Vr(e)?tt(e):Ie(e);if(In&&e[In])return ff(e[In]());var t=Ae(e),n=t==Ze?Fi:t==et?cr:vn;return n(e)}function wt(e){if(!e)return e===0?e:0;if(e=Ye(e),e===st||e===-st){var t=e<0?-1:1;return t*Qn}return e===e?e:0}function q(e){var t=wt(e),n=t%1;return t===t?n?t-n:t:0}function Mc(e){return e?Kt(q(e),0,ce):0}function Ye(e){if(typeof e=="number")return e;if(He(e))return se;if(oe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=oe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Jo(e);var n=hl.test(e);return n||gl.test(e)?zl(e.slice(2),n?2:8):dl.test(e)?se:+e}function Pc(e){return ut(e,Ce(e))}function Pg(e){return e?Kt(q(e),-Je,Je):e===0?e:0}function J(e){return e==null?"":Be(e)}var Rg=hn(function(e,t){if(Wn(t)||De(t)){ut(t,xe(t),e);return}for(var n in t)Z.call(t,n)&&Rn(e,n,t[n])}),Rc=hn(function(e,t){ut(t,Ce(t),e)}),Gr=hn(function(e,t,n,i){ut(t,Ce(t),e,i)}),Lg=hn(function(e,t,n,i){ut(t,xe(t),e,i)}),Bg=bt($i);function Hg(e,t){var n=dn(e);return t==null?n:hs(n,t)}var Ug=G(function(e,t){e=ee(e);var n=-1,i=t.length,a=i>2?t[2]:r;for(a&&Oe(t[0],t[1],a)&&(i=1);++n<i;)for(var c=t[n],f=Ce(c),d=-1,g=f.length;++d<g;){var y=f[d],w=e[y];(w===r||rt(w,un[y])&&!Z.call(e,y))&&(e[y]=c[y])}return e}),Fg=G(function(e){return e.push(r,Js),Re(Lc,r,e)});function Wg(e,t){return Ko(e,L(t,3),ct)}function qg(e,t){return Ko(e,L(t,3),Ki)}function Vg(e,t){return e==null?e:zi(e,L(t,3),Ce)}function Gg(e,t){return e==null?e:bs(e,L(t,3),Ce)}function jg(e,t){return e&&ct(e,L(t,3))}function $g(e,t){return e&&Ki(e,L(t,3))}function zg(e){return e==null?[]:Er(e,xe(e))}function Kg(e){return e==null?[]:Er(e,Ce(e))}function ka(e,t,n){var i=e==null?r:Yt(e,t);return i===r?n:i}function Yg(e,t){return e!=null&&tc(e,t,bd)}function Na(e,t){return e!=null&&tc(e,t,xd)}var Xg=zs(function(e,t,n){t!=null&&typeof t.toString!="function"&&(t=dr.call(t)),e[t]=n},Sa(Me)),Qg=zs(function(e,t,n){t!=null&&typeof t.toString!="function"&&(t=dr.call(t)),Z.call(e,t)?e[t].push(n):e[t]=[n]},L),Jg=G(Bn);function xe(e){return De(e)?fs(e):Ji(e)}function Ce(e){return De(e)?fs(e,!0):Sd(e)}function Zg(e,t){var n={};return t=L(t,3),ct(e,function(i,a,c){mt(n,t(i,a,c),i)}),n}function em(e,t){var n={};return t=L(t,3),ct(e,function(i,a,c){mt(n,a,t(i,a,c))}),n}var tm=hn(function(e,t,n){kr(e,t,n)}),Lc=hn(function(e,t,n,i){kr(e,t,n,i)}),nm=bt(function(e,t){var n={};if(e==null)return n;var i=!1;t=ie(t,function(c){return c=Rt(c,e),i||(i=c.length>1),c}),ut(e,da(e),n),i&&(n=$e(n,x|k|D,Xd));for(var a=t.length;a--;)ia(n,t[a]);return n});function rm(e,t){return Bc(e,Wr(L(t)))}var im=bt(function(e,t){return e==null?{}:Dd(e,t)});function Bc(e,t){if(e==null)return{};var n=ie(da(e),function(i){return[i]});return t=L(t),Os(e,n,function(i,a){return t(i,a[0])})}function am(e,t,n){t=Rt(t,e);var i=-1,a=t.length;for(a||(a=1,e=r);++i<a;){var c=e==null?r:e[lt(t[i])];c===r&&(i=a,c=n),e=yt(c)?c.call(e):c}return e}function om(e,t,n){return e==null?e:Un(e,t,n)}function sm(e,t,n,i){return i=typeof i=="function"?i:r,e==null?e:Un(e,t,n,i)}var Hc=Xs(xe),Uc=Xs(Ce);function cm(e,t,n){var i=W(e),a=i||Bt(e)||mn(e);if(t=L(t,4),n==null){var c=e&&e.constructor;a?n=i?new c:[]:oe(e)?n=yt(c)?dn(gr(e)):{}:n={}}return(a?Ve:ct)(e,function(f,d,g){return t(n,f,d,g)}),n}function um(e,t){return e==null?!0:ia(e,t)}function lm(e,t,n){return e==null?e:Ms(e,t,sa(n))}function fm(e,t,n,i){return i=typeof i=="function"?i:r,e==null?e:Ms(e,t,sa(n),i)}function vn(e){return e==null?[]:Ui(e,xe(e))}function dm(e){return e==null?[]:Ui(e,Ce(e))}function hm(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=Ye(n),n=n===n?n:0),t!==r&&(t=Ye(t),t=t===t?t:0),Kt(Ye(e),t,n)}function pm(e,t,n){return t=wt(t),n===r?(n=t,t=0):n=wt(n),e=Ye(e),yd(e,t,n)}function gm(e,t,n){if(n&&typeof n!="boolean"&&Oe(e,t,n)&&(t=n=r),n===r&&(typeof t=="boolean"?(n=t,t=r):typeof e=="boolean"&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=wt(e),t===r?(t=e,e=0):t=wt(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var a=us();return Te(e+a*(t-e+$l("1e-"+((a+"").length-1))),t)}return ta(e,t)}var mm=pn(function(e,t,n){return t=t.toLowerCase(),e+(n?Fc(t):t)});function Fc(e){return Oa(J(e).toLowerCase())}function Wc(e){return e=J(e),e&&e.replace(vl,of).replace(Ll,"")}function vm(e,t,n){e=J(e),t=Be(t);var i=e.length;n=n===r?i:Kt(q(n),0,i);var a=n;return n-=t.length,n>=0&&e.slice(n,a)==t}function bm(e){return e=J(e),e&&Qu.test(e)?e.replace(bo,sf):e}function xm(e){return e=J(e),e&&rl.test(e)?e.replace(Ti,"\\$&"):e}var ym=pn(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),wm=pn(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),_m=Gs("toLowerCase");function Tm(e,t,n){e=J(e),t=q(t);var i=t?cn(e):0;if(!t||i>=t)return e;var a=(t-i)/2;return Cr(xr(a),n)+e+Cr(br(a),n)}function Am(e,t,n){e=J(e),t=q(t);var i=t?cn(e):0;return t&&i<t?e+Cr(t-i,n):e}function Em(e,t,n){e=J(e),t=q(t);var i=t?cn(e):0;return t&&i<t?Cr(t-i,n)+e:e}function km(e,t,n){return n||t==null?t=0:t&&(t=+t),Mf(J(e).replace(Ai,""),t||0)}function Nm(e,t,n){return(n?Oe(e,t,n):t===r)?t=1:t=q(t),na(J(e),t)}function Om(){var e=arguments,t=J(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Sm=pn(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()});function Im(e,t,n){return n&&typeof n!="number"&&Oe(e,t,n)&&(t=n=r),n=n===r?ce:n>>>0,n?(e=J(e),e&&(typeof t=="string"||t!=null&&!Ea(t))&&(t=Be(t),!t&&sn(e))?Lt(tt(e),0,n):e.split(t,n)):[]}var Dm=pn(function(e,t,n){return e+(n?" ":"")+Oa(t)});function Cm(e,t,n){return e=J(e),n=n==null?0:Kt(q(n),0,e.length),t=Be(t),e.slice(n,n+t.length)==t}function Mm(e,t,n){var i=s.templateSettings;n&&Oe(e,t,n)&&(t=r),e=J(e),t=Gr({},t,i,Qs);var a=Gr({},t.imports,i.imports,Qs),c=xe(a),f=Ui(a,c),d,g,y=0,w=t.interpolate||rr,A="__p += '",S=Wi((t.escape||rr).source+"|"+w.source+"|"+(w===xo?fl:rr).source+"|"+(t.evaluate||rr).source+"|$","g"),P="//# sourceURL="+(Z.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Wl+"]")+`
`;e.replace(S,function(H,z,Y,Ue,Se,Fe){return Y||(Y=Ue),A+=e.slice(y,Fe).replace(bl,cf),z&&(d=!0,A+=`' +
__e(`+z+`) +
'`),Se&&(g=!0,A+=`';
`+Se+`;
__p += '`),Y&&(A+=`' +
((__t = (`+Y+`)) == null ? '' : __t) +
'`),y=Fe+H.length,H}),A+=`';
`;var B=Z.call(t,"variable")&&t.variable;if(!B)A=`with (obj) {
`+A+`
}
`;else if(ul.test(B))throw new U(m);A=(g?A.replace(zu,""):A).replace(Ku,"$1").replace(Yu,"$1;"),A="function("+(B||"obj")+`) {
`+(B?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(d?", __e = _.escape":"")+(g?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+A+`return __p
}`;var V=Vc(function(){return Q(c,P+"return "+A).apply(r,f)});if(V.source=A,Aa(V))throw V;return V}function Pm(e){return J(e).toLowerCase()}function Rm(e){return J(e).toUpperCase()}function Lm(e,t,n){if(e=J(e),e&&(n||t===r))return Jo(e);if(!e||!(t=Be(t)))return e;var i=tt(e),a=tt(t),c=Zo(i,a),f=es(i,a)+1;return Lt(i,c,f).join("")}function Bm(e,t,n){if(e=J(e),e&&(n||t===r))return e.slice(0,ns(e)+1);if(!e||!(t=Be(t)))return e;var i=tt(e),a=es(i,tt(t))+1;return Lt(i,0,a).join("")}function Hm(e,t,n){if(e=J(e),e&&(n||t===r))return e.replace(Ai,"");if(!e||!(t=Be(t)))return e;var i=tt(e),a=Zo(i,tt(t));return Lt(i,a).join("")}function Um(e,t){var n=Et,i=kt;if(oe(t)){var a="separator"in t?t.separator:a;n="length"in t?q(t.length):n,i="omission"in t?Be(t.omission):i}e=J(e);var c=e.length;if(sn(e)){var f=tt(e);c=f.length}if(n>=c)return e;var d=n-cn(i);if(d<1)return i;var g=f?Lt(f,0,d).join(""):e.slice(0,d);if(a===r)return g+i;if(f&&(d+=g.length-d),Ea(a)){if(e.slice(d).search(a)){var y,w=g;for(a.global||(a=Wi(a.source,J(yo.exec(a))+"g")),a.lastIndex=0;y=a.exec(w);)var A=y.index;g=g.slice(0,A===r?d:A)}}else if(e.indexOf(Be(a),d)!=d){var S=g.lastIndexOf(a);S>-1&&(g=g.slice(0,S))}return g+i}function Fm(e){return e=J(e),e&&Xu.test(e)?e.replace(vo,gf):e}var Wm=pn(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),Oa=Gs("toUpperCase");function qc(e,t,n){return e=J(e),t=n?r:t,t===r?lf(e)?bf(e):ef(e):e.match(t)||[]}var Vc=G(function(e,t){try{return Re(e,r,t)}catch(n){return Aa(n)?n:new U(n)}}),qm=bt(function(e,t){return Ve(t,function(n){n=lt(n),mt(e,n,_a(e[n],e))}),e});function Vm(e){var t=e==null?0:e.length,n=L();return e=t?ie(e,function(i){if(typeof i[1]!="function")throw new Ge(h);return[n(i[0]),i[1]]}):[],G(function(i){for(var a=-1;++a<t;){var c=e[a];if(Re(c[0],this,i))return Re(c[1],this,i)}})}function Gm(e){return gd($e(e,x))}function Sa(e){return function(){return e}}function jm(e,t){return e==null||e!==e?t:e}var $m=$s(),zm=$s(!0);function Me(e){return e}function Ia(e){return _s(typeof e=="function"?e:$e(e,x))}function Km(e){return As($e(e,x))}function Ym(e,t){return Es(e,$e(t,x))}var Xm=G(function(e,t){return function(n){return Bn(n,e,t)}}),Qm=G(function(e,t){return function(n){return Bn(e,n,t)}});function Da(e,t,n){var i=xe(t),a=Er(t,i);n==null&&!(oe(t)&&(a.length||!i.length))&&(n=t,t=e,e=this,a=Er(t,xe(t)));var c=!(oe(n)&&"chain"in n)||!!n.chain,f=yt(e);return Ve(a,function(d){var g=t[d];e[d]=g,f&&(e.prototype[d]=function(){var y=this.__chain__;if(c||y){var w=e(this.__wrapped__),A=w.__actions__=Ie(this.__actions__);return A.push({func:g,args:arguments,thisArg:e}),w.__chain__=y,w}return g.apply(e,St([this.value()],arguments))})}),e}function Jm(){return be._===this&&(be._=Af),this}function Ca(){}function Zm(e){return e=q(e),G(function(t){return ks(t,e)})}var e0=ua(ie),t0=ua(zo),n0=ua(Pi);function Gc(e){return ma(e)?Ri(lt(e)):Cd(e)}function r0(e){return function(t){return e==null?r:Yt(e,t)}}var i0=Ks(),a0=Ks(!0);function Ma(){return[]}function Pa(){return!1}function o0(){return{}}function s0(){return""}function c0(){return!0}function u0(e,t){if(e=q(e),e<1||e>Je)return[];var n=ce,i=Te(e,ce);t=L(t),e-=ce;for(var a=Hi(i,t);++n<e;)t(n);return a}function l0(e){return W(e)?ie(e,lt):He(e)?[e]:Ie(lc(J(e)))}function f0(e){var t=++_f;return J(e)+t}var d0=Dr(function(e,t){return e+t},0),h0=la("ceil"),p0=Dr(function(e,t){return e/t},1),g0=la("floor");function m0(e){return e&&e.length?Ar(e,Me,Yi):r}function v0(e,t){return e&&e.length?Ar(e,L(t,2),Yi):r}function b0(e){return Xo(e,Me)}function x0(e,t){return Xo(e,L(t,2))}function y0(e){return e&&e.length?Ar(e,Me,Zi):r}function w0(e,t){return e&&e.length?Ar(e,L(t,2),Zi):r}var _0=Dr(function(e,t){return e*t},1),T0=la("round"),A0=Dr(function(e,t){return e-t},0);function E0(e){return e&&e.length?Bi(e,Me):0}function k0(e,t){return e&&e.length?Bi(e,L(t,2)):0}return s.after=Kp,s.ary=wc,s.assign=Rg,s.assignIn=Rc,s.assignInWith=Gr,s.assignWith=Lg,s.at=Bg,s.before=_c,s.bind=_a,s.bindAll=qm,s.bindKey=Tc,s.castArray=og,s.chain=bc,s.chunk=gh,s.compact=mh,s.concat=vh,s.cond=Vm,s.conforms=Gm,s.constant=Sa,s.countBy=Ep,s.create=Hg,s.curry=Ac,s.curryRight=Ec,s.debounce=kc,s.defaults=Ug,s.defaultsDeep=Fg,s.defer=Yp,s.delay=Xp,s.difference=bh,s.differenceBy=xh,s.differenceWith=yh,s.drop=wh,s.dropRight=_h,s.dropRightWhile=Th,s.dropWhile=Ah,s.fill=Eh,s.filter=Np,s.flatMap=Ip,s.flatMapDeep=Dp,s.flatMapDepth=Cp,s.flatten=pc,s.flattenDeep=kh,s.flattenDepth=Nh,s.flip=Qp,s.flow=$m,s.flowRight=zm,s.fromPairs=Oh,s.functions=zg,s.functionsIn=Kg,s.groupBy=Mp,s.initial=Ih,s.intersection=Dh,s.intersectionBy=Ch,s.intersectionWith=Mh,s.invert=Xg,s.invertBy=Qg,s.invokeMap=Rp,s.iteratee=Ia,s.keyBy=Lp,s.keys=xe,s.keysIn=Ce,s.map=Hr,s.mapKeys=Zg,s.mapValues=em,s.matches=Km,s.matchesProperty=Ym,s.memoize=Fr,s.merge=tm,s.mergeWith=Lc,s.method=Xm,s.methodOf=Qm,s.mixin=Da,s.negate=Wr,s.nthArg=Zm,s.omit=nm,s.omitBy=rm,s.once=Jp,s.orderBy=Bp,s.over=e0,s.overArgs=Zp,s.overEvery=t0,s.overSome=n0,s.partial=Ta,s.partialRight=Nc,s.partition=Hp,s.pick=im,s.pickBy=Bc,s.property=Gc,s.propertyOf=r0,s.pull=Bh,s.pullAll=mc,s.pullAllBy=Hh,s.pullAllWith=Uh,s.pullAt=Fh,s.range=i0,s.rangeRight=a0,s.rearg=eg,s.reject=Wp,s.remove=Wh,s.rest=tg,s.reverse=ya,s.sampleSize=Vp,s.set=om,s.setWith=sm,s.shuffle=Gp,s.slice=qh,s.sortBy=zp,s.sortedUniq=Yh,s.sortedUniqBy=Xh,s.split=Im,s.spread=ng,s.tail=Qh,s.take=Jh,s.takeRight=Zh,s.takeRightWhile=ep,s.takeWhile=tp,s.tap=mp,s.throttle=rg,s.thru=Br,s.toArray=Cc,s.toPairs=Hc,s.toPairsIn=Uc,s.toPath=l0,s.toPlainObject=Pc,s.transform=cm,s.unary=ig,s.union=np,s.unionBy=rp,s.unionWith=ip,s.uniq=ap,s.uniqBy=op,s.uniqWith=sp,s.unset=um,s.unzip=wa,s.unzipWith=vc,s.update=lm,s.updateWith=fm,s.values=vn,s.valuesIn=dm,s.without=cp,s.words=qc,s.wrap=ag,s.xor=up,s.xorBy=lp,s.xorWith=fp,s.zip=dp,s.zipObject=hp,s.zipObjectDeep=pp,s.zipWith=gp,s.entries=Hc,s.entriesIn=Uc,s.extend=Rc,s.extendWith=Gr,Da(s,s),s.add=d0,s.attempt=Vc,s.camelCase=mm,s.capitalize=Fc,s.ceil=h0,s.clamp=hm,s.clone=sg,s.cloneDeep=ug,s.cloneDeepWith=lg,s.cloneWith=cg,s.conformsTo=fg,s.deburr=Wc,s.defaultTo=jm,s.divide=p0,s.endsWith=vm,s.eq=rt,s.escape=bm,s.escapeRegExp=xm,s.every=kp,s.find=Op,s.findIndex=dc,s.findKey=Wg,s.findLast=Sp,s.findLastIndex=hc,s.findLastKey=qg,s.floor=g0,s.forEach=xc,s.forEachRight=yc,s.forIn=Vg,s.forInRight=Gg,s.forOwn=jg,s.forOwnRight=$g,s.get=ka,s.gt=dg,s.gte=hg,s.has=Yg,s.hasIn=Na,s.head=gc,s.identity=Me,s.includes=Pp,s.indexOf=Sh,s.inRange=pm,s.invoke=Jg,s.isArguments=Jt,s.isArray=W,s.isArrayBuffer=pg,s.isArrayLike=De,s.isArrayLikeObject=he,s.isBoolean=gg,s.isBuffer=Bt,s.isDate=mg,s.isElement=vg,s.isEmpty=bg,s.isEqual=xg,s.isEqualWith=yg,s.isError=Aa,s.isFinite=wg,s.isFunction=yt,s.isInteger=Oc,s.isLength=qr,s.isMap=Sc,s.isMatch=_g,s.isMatchWith=Tg,s.isNaN=Ag,s.isNative=Eg,s.isNil=Ng,s.isNull=kg,s.isNumber=Ic,s.isObject=oe,s.isObjectLike=fe,s.isPlainObject=Vn,s.isRegExp=Ea,s.isSafeInteger=Og,s.isSet=Dc,s.isString=Vr,s.isSymbol=He,s.isTypedArray=mn,s.isUndefined=Sg,s.isWeakMap=Ig,s.isWeakSet=Dg,s.join=Ph,s.kebabCase=ym,s.last=Ke,s.lastIndexOf=Rh,s.lowerCase=wm,s.lowerFirst=_m,s.lt=Cg,s.lte=Mg,s.max=m0,s.maxBy=v0,s.mean=b0,s.meanBy=x0,s.min=y0,s.minBy=w0,s.stubArray=Ma,s.stubFalse=Pa,s.stubObject=o0,s.stubString=s0,s.stubTrue=c0,s.multiply=_0,s.nth=Lh,s.noConflict=Jm,s.noop=Ca,s.now=Ur,s.pad=Tm,s.padEnd=Am,s.padStart=Em,s.parseInt=km,s.random=gm,s.reduce=Up,s.reduceRight=Fp,s.repeat=Nm,s.replace=Om,s.result=am,s.round=T0,s.runInContext=p,s.sample=qp,s.size=jp,s.snakeCase=Sm,s.some=$p,s.sortedIndex=Vh,s.sortedIndexBy=Gh,s.sortedIndexOf=jh,s.sortedLastIndex=$h,s.sortedLastIndexBy=zh,s.sortedLastIndexOf=Kh,s.startCase=Dm,s.startsWith=Cm,s.subtract=A0,s.sum=E0,s.sumBy=k0,s.template=Mm,s.times=u0,s.toFinite=wt,s.toInteger=q,s.toLength=Mc,s.toLower=Pm,s.toNumber=Ye,s.toSafeInteger=Pg,s.toString=J,s.toUpper=Rm,s.trim=Lm,s.trimEnd=Bm,s.trimStart=Hm,s.truncate=Um,s.unescape=Fm,s.uniqueId=f0,s.upperCase=Wm,s.upperFirst=Oa,s.each=xc,s.eachRight=yc,s.first=gc,Da(s,function(){var e={};return ct(s,function(t,n){Z.call(s.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),s.VERSION=o,Ve(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){s[e].placeholder=s}),Ve(["drop","take"],function(e,t){K.prototype[e]=function(n){n=n===r?1:me(q(n),0);var i=this.__filtered__&&!t?new K(this):this.clone();return i.__filtered__?i.__takeCount__=Te(n,i.__takeCount__):i.__views__.push({size:Te(n,ce),type:e+(i.__dir__<0?"Right":"")}),i},K.prototype[e+"Right"]=function(n){return this.reverse()[e](n).reverse()}}),Ve(["filter","map","takeWhile"],function(e,t){var n=t+1,i=n==ye||n==Xn;K.prototype[e]=function(a){var c=this.clone();return c.__iteratees__.push({iteratee:L(a,3),type:n}),c.__filtered__=c.__filtered__||i,c}}),Ve(["head","last"],function(e,t){var n="take"+(t?"Right":"");K.prototype[e]=function(){return this[n](1).value()[0]}}),Ve(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");K.prototype[e]=function(){return this.__filtered__?new K(this):this[n](1)}}),K.prototype.compact=function(){return this.filter(Me)},K.prototype.find=function(e){return this.filter(e).head()},K.prototype.findLast=function(e){return this.reverse().find(e)},K.prototype.invokeMap=G(function(e,t){return typeof e=="function"?new K(this):this.map(function(n){return Bn(n,e,t)})}),K.prototype.reject=function(e){return this.filter(Wr(L(e)))},K.prototype.slice=function(e,t){e=q(e);var n=this;return n.__filtered__&&(e>0||t<0)?new K(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(t=q(t),n=t<0?n.dropRight(-t):n.take(t-e)),n)},K.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},K.prototype.toArray=function(){return this.take(ce)},ct(K.prototype,function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=s[i?"take"+(t=="last"?"Right":""):t],c=i||/^find/.test(t);!a||(s.prototype[t]=function(){var f=this.__wrapped__,d=i?[1]:arguments,g=f instanceof K,y=d[0],w=g||W(f),A=function(z){var Y=a.apply(s,St([z],d));return i&&S?Y[0]:Y};w&&n&&typeof y=="function"&&y.length!=1&&(g=w=!1);var S=this.__chain__,P=!!this.__actions__.length,B=c&&!S,V=g&&!P;if(!c&&w){f=V?f:new K(this);var H=e.apply(f,d);return H.__actions__.push({func:Br,args:[A],thisArg:r}),new je(H,S)}return B&&V?e.apply(this,d):(H=this.thru(A),B?i?H.value()[0]:H.value():H)})}),Ve(["pop","push","shift","sort","splice","unshift"],function(e){var t=ur[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);s.prototype[e]=function(){var a=arguments;if(i&&!this.__chain__){var c=this.value();return t.apply(W(c)?c:[],a)}return this[n](function(f){return t.apply(W(f)?f:[],a)})}}),ct(K.prototype,function(e,t){var n=s[t];if(n){var i=n.name+"";Z.call(fn,i)||(fn[i]=[]),fn[i].push({name:t,func:n})}}),fn[Ir(r,I).name]=[{name:"wrapper",func:r}],K.prototype.clone=Ff,K.prototype.reverse=Wf,K.prototype.value=qf,s.prototype.at=vp,s.prototype.chain=bp,s.prototype.commit=xp,s.prototype.next=yp,s.prototype.plant=_p,s.prototype.reverse=Tp,s.prototype.toJSON=s.prototype.valueOf=s.prototype.value=Ap,s.prototype.first=s.prototype.head,In&&(s.prototype[In]=wp),s},Dt=xf();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(be._=Dt,define(function(){return Dt})):Gt?((Gt.exports=Dt)._=Dt,Ii._=Dt):be._=Dt}).call(_n)});function Xe(r){for(var o=arguments.length,u=Array(o>1?o-1:0),l=1;l<o;l++)u[l-1]=arguments[l];if(!1)var h,m;throw Error("[Immer] minified error nr: "+r+(u.length?" "+u.map(function(_){return"'"+_+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function At(r){return!!r&&!!r[ae]}function at(r){var o;return!!r&&(function(u){if(!u||typeof u!="object")return!1;var l=Object.getPrototypeOf(u);if(l===null)return!0;var h=Object.hasOwnProperty.call(l,"constructor")&&l.constructor;return h===Object||typeof h=="function"&&Function.toString.call(h)===W0}(r)||Array.isArray(r)||!!r[nu]||!!(!((o=r.constructor)===null||o===void 0)&&o[nu])||Ga(r)||ja(r))}function Zt(r,o,u){u===void 0&&(u=!1),yn(r)===0?(u?Object.keys:xn)(r).forEach(function(l){u&&typeof l=="symbol"||o(l,r[l],r)}):r.forEach(function(l,h){return o(h,l,r)})}function yn(r){var o=r[ae];return o?o.i>3?o.i-4:o.i:Array.isArray(r)?1:Ga(r)?2:ja(r)?3:0}function bn(r,o){return yn(r)===2?r.has(o):Object.prototype.hasOwnProperty.call(r,o)}function P0(r,o){return yn(r)===2?r.get(o):r[o]}function ru(r,o,u){var l=yn(r);l===2?r.set(o,u):l===3?r.add(u):r[o]=u}function iu(r,o){return r===o?r!==0||1/r==1/o:r!=r&&o!=o}function Ga(r){return U0&&r instanceof Map}function ja(r){return F0&&r instanceof Set}function Ht(r){return r.o||r.t}function $a(r){if(Array.isArray(r))return Array.prototype.slice.call(r);var o=su(r);delete o[ae];for(var u=xn(o),l=0;l<u.length;l++){var h=u[l],m=o[h];m.writable===!1&&(m.writable=!0,m.configurable=!0),(m.get||m.set)&&(o[h]={configurable:!0,writable:!0,enumerable:m.enumerable,value:r[h]})}return Object.create(Object.getPrototypeOf(r),o)}function za(r,o){return o===void 0&&(o=!1),Ka(r)||At(r)||!at(r)||(yn(r)>1&&(r.set=r.add=r.clear=r.delete=R0),Object.freeze(r),o&&Zt(r,function(u,l){return za(l,!0)},!0)),r}function R0(){Xe(2)}function Ka(r){return r==null||typeof r!="object"||Object.isFrozen(r)}function ft(r){var o=Va[r];return o||Xe(18,r),o}function L0(r,o){Va[r]||(Va[r]=o)}function Fa(){return jn}function La(r,o){o&&(ft("Patches"),r.u=[],r.s=[],r.v=o)}function $r(r){Wa(r),r.p.forEach(B0),r.p=null}function Wa(r){r===jn&&(jn=r.l)}function Xc(r){return jn={p:[],l:jn,h:r,m:!0,_:0}}function B0(r){var o=r[ae];o.i===0||o.i===1?o.j():o.O=!0}function Ba(r,o){o._=o.p.length;var u=o.p[0],l=r!==void 0&&r!==u;return o.h.g||ft("ES5").S(o,r,l),l?(u[ae].P&&($r(o),Xe(4)),at(r)&&(r=zr(o,r),o.l||Kr(o,r)),o.u&&ft("Patches").M(u[ae].t,r,o.u,o.s)):r=zr(o,u,[]),$r(o),o.u&&o.v(o.u,o.s),r!==ou?r:void 0}function zr(r,o,u){if(Ka(o))return o;var l=o[ae];if(!l)return Zt(o,function(T,E){return Qc(r,l,o,T,E,u)},!0),o;if(l.A!==r)return o;if(!l.P)return Kr(r,l.t,!0),l.t;if(!l.I){l.I=!0,l.A._--;var h=l.i===4||l.i===5?l.o=$a(l.k):l.o,m=h,_=!1;l.i===3&&(m=new Set(h),h.clear(),_=!0),Zt(m,function(T,E){return Qc(r,l,h,T,E,u,_)}),Kr(r,h,!1),u&&r.u&&ft("Patches").N(l,u,r.u,r.s)}return l.o}function Qc(r,o,u,l,h,m,_){if(At(h)){var T=zr(r,h,m&&o&&o.i!==3&&!bn(o.R,l)?m.concat(l):void 0);if(ru(u,l,T),!At(T))return;r.m=!1}else _&&u.add(h);if(at(h)&&!Ka(h)){if(!r.h.D&&r._<1)return;zr(r,h),o&&o.A.l||Kr(r,h)}}function Kr(r,o,u){u===void 0&&(u=!1),!r.l&&r.h.D&&r.m&&za(o,u)}function Ha(r,o){var u=r[ae];return(u?Ht(u):r)[o]}function Jc(r,o){if(o in r)for(var u=Object.getPrototypeOf(r);u;){var l=Object.getOwnPropertyDescriptor(u,o);if(l)return l;u=Object.getPrototypeOf(u)}}function Ut(r){r.P||(r.P=!0,r.l&&Ut(r.l))}function Ua(r){r.o||(r.o=$a(r.t))}function qa(r,o,u){var l=Ga(o)?ft("MapSet").F(o,u):ja(o)?ft("MapSet").T(o,u):r.g?function(h,m){var _=Array.isArray(h),T={i:_?1:0,A:m?m.A:Fa(),P:!1,I:!1,R:{},l:m,t:h,k:null,o:null,j:null,C:!1},E=T,x=$n;_&&(E=[T],x=Gn);var k=Proxy.revocable(E,x),D=k.revoke,O=k.proxy;return T.k=O,T.j=D,O}(o,u):ft("ES5").J(o,u);return(u?u.A:Fa()).p.push(l),l}function H0(r){return At(r)||Xe(22,r),function o(u){if(!at(u))return u;var l,h=u[ae],m=yn(u);if(h){if(!h.P&&(h.i<4||!ft("ES5").K(h)))return h.t;h.I=!0,l=Zc(u,m),h.I=!1}else l=Zc(u,m);return Zt(l,function(_,T){h&&P0(h.t,_)===T||ru(l,_,o(T))}),m===3?new Set(l):l}(r)}function Zc(r,o){switch(o){case 2:return new Map(r);case 3:return Array.from(r)}return $a(r)}function au(){function r(_,T){var E=m[_];return E?E.enumerable=T:m[_]=E={configurable:!0,enumerable:T,get:function(){var x=this[ae];return $n.get(x,_)},set:function(x){var k=this[ae];$n.set(k,_,x)}},E}function o(_){for(var T=_.length-1;T>=0;T--){var E=_[T][ae];if(!E.P)switch(E.i){case 5:l(E)&&Ut(E);break;case 4:u(E)&&Ut(E)}}}function u(_){for(var T=_.t,E=_.k,x=xn(E),k=x.length-1;k>=0;k--){var D=x[k];if(D!==ae){var O=T[D];if(O===void 0&&!bn(T,D))return!0;var M=E[D],N=M&&M[ae];if(N?N.t!==O:!iu(M,O))return!0}}var I=!!T[ae];return x.length!==xn(T).length+(I?0:1)}function l(_){var T=_.k;if(T.length!==_.t.length)return!0;var E=Object.getOwnPropertyDescriptor(T,T.length-1);if(E&&!E.get)return!0;for(var x=0;x<T.length;x++)if(!T.hasOwnProperty(x))return!0;return!1}function h(_){_.O&&Xe(3,JSON.stringify(Ht(_)))}var m={};L0("ES5",{J:function(_,T){var E=Array.isArray(_),x=function(D,O){if(D){for(var M=Array(O.length),N=0;N<O.length;N++)Object.defineProperty(M,""+N,r(N,!0));return M}var I=su(O);delete I[ae];for(var j=xn(I),R=0;R<j.length;R++){var F=j[R];I[F]=r(F,D||!!I[F].enumerable)}return Object.create(Object.getPrototypeOf(O),I)}(E,_),k={i:E?5:4,A:T?T.A:Fa(),P:!1,I:!1,R:{},l:T,t:_,k:x,o:null,O:!1,C:!1};return Object.defineProperty(x,ae,{value:k,writable:!0}),x},S:function(_,T,E){E?At(T)&&T[ae].A===_&&o(_.p):(_.u&&function x(k){if(k&&typeof k=="object"){var D=k[ae];if(D){var O=D.t,M=D.k,N=D.R,I=D.i;if(I===4)Zt(M,function(X){X!==ae&&(O[X]!==void 0||bn(O,X)?N[X]||x(M[X]):(N[X]=!0,Ut(D)))}),Zt(O,function(X){M[X]!==void 0||bn(M,X)||(N[X]=!1,Ut(D))});else if(I===5){if(l(D)&&(Ut(D),N.length=!0),M.length<O.length)for(var j=M.length;j<O.length;j++)N[j]=!1;else for(var R=O.length;R<M.length;R++)N[R]=!0;for(var F=Math.min(M.length,O.length),$=0;$<F;$++)M.hasOwnProperty($)||(N[$]=!0),N[$]===void 0&&x(M[$])}}}}(_.p[0]),o(_.p))},K:function(_){return _.i===4?u(_):l(_)}})}var eu,jn,Ya=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",U0=typeof Map<"u",F0=typeof Set<"u",tu=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",ou=Ya?Symbol.for("immer-nothing"):((eu={})["immer-nothing"]=!0,eu),nu=Ya?Symbol.for("immer-draftable"):"__$immer_draftable",ae=Ya?Symbol.for("immer-state"):"__$immer_state";var W0=""+Object.prototype.constructor,xn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(r){return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))}:Object.getOwnPropertyNames,su=Object.getOwnPropertyDescriptors||function(r){var o={};return xn(r).forEach(function(u){o[u]=Object.getOwnPropertyDescriptor(r,u)}),o},Va={},$n={get:function(r,o){if(o===ae)return r;var u=Ht(r);if(!bn(u,o))return function(h,m,_){var T,E=Jc(m,_);return E?"value"in E?E.value:(T=E.get)===null||T===void 0?void 0:T.call(h.k):void 0}(r,u,o);var l=u[o];return r.I||!at(l)?l:l===Ha(r.t,o)?(Ua(r),r.o[o]=qa(r.A.h,l,r)):l},has:function(r,o){return o in Ht(r)},ownKeys:function(r){return Reflect.ownKeys(Ht(r))},set:function(r,o,u){var l=Jc(Ht(r),o);if(l?.set)return l.set.call(r.k,u),!0;if(!r.P){var h=Ha(Ht(r),o),m=h?.[ae];if(m&&m.t===u)return r.o[o]=u,r.R[o]=!1,!0;if(iu(u,h)&&(u!==void 0||bn(r.t,o)))return!0;Ua(r),Ut(r)}return r.o[o]===u&&(u!==void 0||o in r.o)||Number.isNaN(u)&&Number.isNaN(r.o[o])||(r.o[o]=u,r.R[o]=!0),!0},deleteProperty:function(r,o){return Ha(r.t,o)!==void 0||o in r.t?(r.R[o]=!1,Ua(r),Ut(r)):delete r.R[o],r.o&&delete r.o[o],!0},getOwnPropertyDescriptor:function(r,o){var u=Ht(r),l=Reflect.getOwnPropertyDescriptor(u,o);return l&&{writable:!0,configurable:r.i!==1||o!=="length",enumerable:l.enumerable,value:u[o]}},defineProperty:function(){Xe(11)},getPrototypeOf:function(r){return Object.getPrototypeOf(r.t)},setPrototypeOf:function(){Xe(12)}},Gn={};Zt($n,function(r,o){Gn[r]=function(){return arguments[0]=arguments[0][0],o.apply(this,arguments)}}),Gn.deleteProperty=function(r,o){return Gn.set.call(this,r,o,void 0)},Gn.set=function(r,o,u){return $n.set.call(this,r[0],o,u,r[0])};var q0=function(){function r(u){var l=this;this.g=tu,this.D=!0,this.produce=function(h,m,_){if(typeof h=="function"&&typeof m!="function"){var T=m;m=h;var E=l;return function(I){var j=this;I===void 0&&(I=T);for(var R=arguments.length,F=Array(R>1?R-1:0),$=1;$<R;$++)F[$-1]=arguments[$];return E.produce(I,function(X){var de;return(de=m).call.apply(de,[j,X].concat(F))})}}var x;if(typeof m!="function"&&Xe(6),_!==void 0&&typeof _!="function"&&Xe(7),at(h)){var k=Xc(l),D=qa(l,h,void 0),O=!0;try{x=m(D),O=!1}finally{O?$r(k):Wa(k)}return typeof Promise<"u"&&x instanceof Promise?x.then(function(I){return La(k,_),Ba(I,k)},function(I){throw $r(k),I}):(La(k,_),Ba(x,k))}if(!h||typeof h!="object"){if((x=m(h))===void 0&&(x=h),x===ou&&(x=void 0),l.D&&za(x,!0),_){var M=[],N=[];ft("Patches").M(h,x,M,N),_(M,N)}return x}Xe(21,h)},this.produceWithPatches=function(h,m){if(typeof h=="function")return function(x){for(var k=arguments.length,D=Array(k>1?k-1:0),O=1;O<k;O++)D[O-1]=arguments[O];return l.produceWithPatches(x,function(M){return h.apply(void 0,[M].concat(D))})};var _,T,E=l.produce(h,m,function(x,k){_=x,T=k});return typeof Promise<"u"&&E instanceof Promise?E.then(function(x){return[x,_,T]}):[E,_,T]},typeof u?.useProxies=="boolean"&&this.setUseProxies(u.useProxies),typeof u?.autoFreeze=="boolean"&&this.setAutoFreeze(u.autoFreeze)}var o=r.prototype;return o.createDraft=function(u){at(u)||Xe(8),At(u)&&(u=H0(u));var l=Xc(this),h=qa(this,u,void 0);return h[ae].C=!0,Wa(l),h},o.finishDraft=function(u,l){var h=u&&u[ae],m=h.A;return La(m,l),Ba(void 0,m)},o.setAutoFreeze=function(u){this.D=u},o.setUseProxies=function(u){u&&!tu&&Xe(20),this.g=u},o.applyPatches=function(u,l){var h;for(h=l.length-1;h>=0;h--){var m=l[h];if(m.path.length===0&&m.op==="replace"){u=m.value;break}}h>-1&&(l=l.slice(h+1));var _=ft("Patches").$;return At(u)?_(u,l):this.produce(u,function(T){return _(T,l)})},r}(),We=new q0,V0=We.produce,Tv=We.produceWithPatches.bind(We),Av=We.setAutoFreeze.bind(We),Ev=We.setUseProxies.bind(We),kv=We.applyPatches.bind(We),Nv=We.createDraft.bind(We),Ov=We.finishDraft.bind(We),Yr=V0;function Ft(r){return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ft(r)}function Xa(r,o){if(Ft(r)!=="object"||r===null)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var l=u.call(r,o||"default");if(Ft(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function Qa(r){var o=Xa(r,"string");return Ft(o)==="symbol"?o:String(o)}function Ja(r,o,u){return o=Qa(o),o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r}function cu(r,o){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable})),u.push.apply(u,l)}return u}function Xr(r){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?cu(Object(u),!0).forEach(function(l){Ja(r,l,u[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):cu(Object(u)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(u,l))})}return r}function Ee(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var uu=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Za=function(){return Math.random().toString(36).substring(7).split("").join(".")},Qr={INIT:"@@redux/INIT"+Za(),REPLACE:"@@redux/REPLACE"+Za(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Za()}};function G0(r){if(typeof r!="object"||r===null)return!1;for(var o=r;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(r)===o}function eo(r,o,u){var l;if(typeof o=="function"&&typeof u=="function"||typeof u=="function"&&typeof arguments[3]=="function")throw new Error(Ee(0));if(typeof o=="function"&&typeof u>"u"&&(u=o,o=void 0),typeof u<"u"){if(typeof u!="function")throw new Error(Ee(1));return u(eo)(r,o)}if(typeof r!="function")throw new Error(Ee(2));var h=r,m=o,_=[],T=_,E=!1;function x(){T===_&&(T=_.slice())}function k(){if(E)throw new Error(Ee(3));return m}function D(I){if(typeof I!="function")throw new Error(Ee(4));if(E)throw new Error(Ee(5));var j=!0;return x(),T.push(I),function(){if(!!j){if(E)throw new Error(Ee(6));j=!1,x();var F=T.indexOf(I);T.splice(F,1),_=null}}}function O(I){if(!G0(I))throw new Error(Ee(7));if(typeof I.type>"u")throw new Error(Ee(8));if(E)throw new Error(Ee(9));try{E=!0,m=h(m,I)}finally{E=!1}for(var j=_=T,R=0;R<j.length;R++){var F=j[R];F()}return I}function M(I){if(typeof I!="function")throw new Error(Ee(10));h=I,O({type:Qr.REPLACE})}function N(){var I,j=D;return I={subscribe:function(F){if(typeof F!="object"||F===null)throw new Error(Ee(11));function $(){F.next&&F.next(k())}$();var X=j($);return{unsubscribe:X}}},I[uu]=function(){return this},I}return O({type:Qr.INIT}),l={dispatch:O,subscribe:D,getState:k,replaceReducer:M},l[uu]=N,l}function j0(r){Object.keys(r).forEach(function(o){var u=r[o],l=u(void 0,{type:Qr.INIT});if(typeof l>"u")throw new Error(Ee(12));if(typeof u(void 0,{type:Qr.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ee(13))})}function lu(r){for(var o=Object.keys(r),u={},l=0;l<o.length;l++){var h=o[l];typeof r[h]=="function"&&(u[h]=r[h])}var m=Object.keys(u),_,T;try{j0(u)}catch(E){T=E}return function(x,k){if(x===void 0&&(x={}),T)throw T;if(!1)var D;for(var O=!1,M={},N=0;N<m.length;N++){var I=m[N],j=u[I],R=x[I],F=j(R,k);if(typeof F>"u"){var $=k&&k.type;throw new Error(Ee(14))}M[I]=F,O=O||F!==R}return O=O||m.length!==Object.keys(x).length,O?M:x}}function wn(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return o.length===0?function(l){return l}:o.length===1?o[0]:o.reduce(function(l,h){return function(){return l(h.apply(void 0,arguments))}})}function fu(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return function(l){return function(){var h=l.apply(void 0,arguments),m=function(){throw new Error(Ee(15))},_={getState:h.getState,dispatch:function(){return m.apply(void 0,arguments)}},T=o.map(function(E){return E(_)});return m=wn.apply(void 0,T)(h.dispatch),Xr(Xr({},h),{},{dispatch:m})}}}function du(r){var o=function(l){var h=l.dispatch,m=l.getState;return function(_){return function(T){return typeof T=="function"?T(h,m,r):_(T)}}};return o}var hu=du();hu.withExtraArgument=du;var to=hu;var $0=function(){var r=function(o,u){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,h){l.__proto__=h}||function(l,h){for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&(l[m]=h[m])},r(o,u)};return function(o,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");r(o,u);function l(){this.constructor=o}o.prototype=u===null?Object.create(u):(l.prototype=u.prototype,new l)}}(),z0=function(r,o){var u={label:0,sent:function(){if(m[0]&1)throw m[1];return m[1]},trys:[],ops:[]},l,h,m,_;return _={next:T(0),throw:T(1),return:T(2)},typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function T(x){return function(k){return E([x,k])}}function E(x){if(l)throw new TypeError("Generator is already executing.");for(;u;)try{if(l=1,h&&(m=x[0]&2?h.return:x[0]?h.throw||((m=h.return)&&m.call(h),0):h.next)&&!(m=m.call(h,x[1])).done)return m;switch(h=0,m&&(x=[x[0]&2,m.value]),x[0]){case 0:case 1:m=x;break;case 4:return u.label++,{value:x[1],done:!1};case 5:u.label++,h=x[1],x=[0];continue;case 7:x=u.ops.pop(),u.trys.pop();continue;default:if(m=u.trys,!(m=m.length>0&&m[m.length-1])&&(x[0]===6||x[0]===2)){u=0;continue}if(x[0]===3&&(!m||x[1]>m[0]&&x[1]<m[3])){u.label=x[1];break}if(x[0]===6&&u.label<m[1]){u.label=m[1],m=x;break}if(m&&u.label<m[2]){u.label=m[2],u.ops.push(x);break}m[2]&&u.ops.pop(),u.trys.pop();continue}x=o.call(r,u)}catch(k){x=[6,k],h=0}finally{l=m=0}if(x[0]&5)throw x[1];return{value:x[0]?x[1]:void 0,done:!0}}},Jr=function(r,o){for(var u=0,l=o.length,h=r.length;u<l;u++,h++)r[h]=o[u];return r},K0=Object.defineProperty,Y0=Object.defineProperties,X0=Object.getOwnPropertyDescriptors,pu=Object.getOwnPropertySymbols,Q0=Object.prototype.hasOwnProperty,J0=Object.prototype.propertyIsEnumerable,gu=function(r,o,u){return o in r?K0(r,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[o]=u},Wt=function(r,o){for(var u in o||(o={}))Q0.call(o,u)&&gu(r,u,o[u]);if(pu)for(var l=0,h=pu(o);l<h.length;l++){var u=h[l];J0.call(o,u)&&gu(r,u,o[u])}return r},no=function(r,o){return Y0(r,X0(o))},Z0=function(r,o,u){return new Promise(function(l,h){var m=function(E){try{T(u.next(E))}catch(x){h(x)}},_=function(E){try{T(u.throw(E))}catch(x){h(x)}},T=function(E){return E.done?l(E.value):Promise.resolve(E.value).then(m,_)};T((u=u.apply(r,o)).next())})};var ev=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wn:wn.apply(null,arguments)},$v=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(r){return r}};function tv(r){if(typeof r!="object"||r===null)return!1;var o=Object.getPrototypeOf(r);if(o===null)return!0;for(var u=o;Object.getPrototypeOf(u)!==null;)u=Object.getPrototypeOf(u);return o===u}var nv=function(r){$0(o,r);function o(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];var h=r.apply(this,u)||this;return Object.setPrototypeOf(h,o.prototype),h}return Object.defineProperty(o,Symbol.species,{get:function(){return o},enumerable:!1,configurable:!0}),o.prototype.concat=function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];return r.prototype.concat.apply(this,u)},o.prototype.prepend=function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];return u.length===1&&Array.isArray(u[0])?new(o.bind.apply(o,Jr([void 0],u[0].concat(this)))):new(o.bind.apply(o,Jr([void 0],u.concat(this))))},o}(Array);function ao(r){return at(r)?Yr(r,function(){}):r}function rv(r){return typeof r=="boolean"}function iv(){return function(o){return av(o)}}function av(r){r===void 0&&(r={});var o=r.thunk,u=o===void 0?!0:o,l=r.immutableCheck,h=l===void 0?!0:l,m=r.serializableCheck,_=m===void 0?!0:m,T=new nv;if(u&&(rv(u)?T.push(to):T.push(to.withExtraArgument(u.extraArgument))),!1){if(h)var E;if(_)var x}return T}var ro=!0;function bu(r){var o=iv(),u=r||{},l=u.reducer,h=l===void 0?void 0:l,m=u.middleware,_=m===void 0?o():m,T=u.devTools,E=T===void 0?!0:T,x=u.preloadedState,k=x===void 0?void 0:x,D=u.enhancers,O=D===void 0?void 0:D,M;if(typeof h=="function")M=h;else if(tv(h))M=lu(h);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var N=_;if(typeof N=="function"&&(N=N(o),!ro&&!Array.isArray(N)))throw new Error("when using a middleware builder function, an array of middleware must be returned");if(!ro&&N.some(function($){return typeof $!="function"}))throw new Error("each middleware provided to configureStore must be a function");var I=fu.apply(void 0,N),j=wn;E&&(j=ev(Wt({trace:!ro},typeof E=="object"&&E)));var R=[I];Array.isArray(O)?R=Jr([I],O):typeof O=="function"&&(R=O(R));var F=j.apply(void 0,R);return eo(M,k,F)}function qt(r,o){function u(){for(var l=[],h=0;h<arguments.length;h++)l[h]=arguments[h];if(o){var m=o.apply(void 0,l);if(!m)throw new Error("prepareAction did not return an object");return Wt(Wt({type:r,payload:m.payload},"meta"in m&&{meta:m.meta}),"error"in m&&{error:m.error})}return{type:r,payload:l[0]}}return u.toString=function(){return""+r},u.type=r,u.match=function(l){return l.type===r},u}function xu(r){var o={},u=[],l,h={addCase:function(m,_){var T=typeof m=="string"?m:m.type;if(T in o)throw new Error("addCase cannot be called with two reducers for the same action type");return o[T]=_,h},addMatcher:function(m,_){return u.push({matcher:m,reducer:_}),h},addDefaultCase:function(m){return l=m,h}};return r(h),[o,u,l]}function ov(r){return typeof r=="function"}function sv(r,o,u,l){u===void 0&&(u=[]);var h=typeof o=="function"?xu(o):[o,u,l],m=h[0],_=h[1],T=h[2],E;if(ov(r))E=function(){return ao(r())};else{var x=ao(r);E=function(){return x}}function k(D,O){D===void 0&&(D=E());var M=Jr([m[O.type]],_.filter(function(N){var I=N.matcher;return I(O)}).map(function(N){var I=N.reducer;return I}));return M.filter(function(N){return!!N}).length===0&&(M=[T]),M.reduce(function(N,I){if(I)if(At(N)){var j=N,R=I(j,O);return R===void 0?N:R}else{if(at(N))return Yr(N,function(F){return I(F,O)});var R=I(N,O);if(R===void 0){if(N===null)return N;throw Error("A case reducer on a non-draftable value must not return undefined")}return R}return N},D)}return k.getInitialState=E,k}function cv(r,o){return r+"/"+o}function yu(r){var o=r.name;if(!o)throw new Error("`name` is a required option for createSlice");typeof process<"u";var u=typeof r.initialState=="function"?r.initialState:ao(r.initialState),l=r.reducers||{},h=Object.keys(l),m={},_={},T={};h.forEach(function(k){var D=l[k],O=cv(o,k),M,N;"reducer"in D?(M=D.reducer,N=D.prepare):M=D,m[k]=M,_[O]=M,T[k]=N?qt(O,N):qt(O)});function E(){var k=typeof r.extraReducers=="function"?xu(r.extraReducers):[r.extraReducers],D=k[0],O=D===void 0?{}:D,M=k[1],N=M===void 0?[]:M,I=k[2],j=I===void 0?void 0:I,R=Wt(Wt({},O),_);return sv(u,function(F){for(var $ in R)F.addCase($,R[$]);for(var X=0,de=N;X<de.length;X++){var ve=de[X];F.addMatcher(ve.matcher,ve.reducer)}j&&F.addDefaultCase(j)})}var x;return{name:o,reducer:function(k,D){return x||(x=E()),x(k,D)},actions:T,caseReducers:m,getInitialState:function(){return x||(x=E()),x.getInitialState()}}}var uv="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",lv=function(r){r===void 0&&(r=21);for(var o="",u=r;u--;)o+=uv[Math.random()*64|0];return o},fv=["name","message","stack","code"],io=function(){function r(o,u){this.payload=o,this.meta=u}return r}(),mu=function(){function r(o,u){this.payload=o,this.meta=u}return r}(),dv=function(r){if(typeof r=="object"&&r!==null){for(var o={},u=0,l=fv;u<l.length;u++){var h=l[u];typeof r[h]=="string"&&(o[h]=r[h])}return o}return{message:String(r)}},Xv=function(){function r(o,u,l){var h=qt(o+"/fulfilled",function(k,D,O,M){return{payload:k,meta:no(Wt({},M||{}),{arg:O,requestId:D,requestStatus:"fulfilled"})}}),m=qt(o+"/pending",function(k,D,O){return{payload:void 0,meta:no(Wt({},O||{}),{arg:D,requestId:k,requestStatus:"pending"})}}),_=qt(o+"/rejected",function(k,D,O,M,N){return{payload:M,error:(l&&l.serializeError||dv)(k||"Rejected"),meta:no(Wt({},N||{}),{arg:O,requestId:D,rejectedWithValue:!!M,requestStatus:"rejected",aborted:k?.name==="AbortError",condition:k?.name==="ConditionError"})}}),T=!1,E=typeof AbortController<"u"?AbortController:function(){function k(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return k.prototype.abort=function(){},k}();function x(k){return function(D,O,M){var N=l?.idGenerator?l.idGenerator(k):lv(),I=new E,j,R=!1;function F(X){j=X,I.abort()}var $=function(){return Z0(this,null,function(){var X,de,ve,Pe,Et,kt,Vt;return z0(this,function(Qe){switch(Qe.label){case 0:return Qe.trys.push([0,4,,5]),Pe=(X=l?.condition)==null?void 0:X.call(l,k,{getState:O,extra:M}),pv(Pe)?[4,Pe]:[3,2];case 1:Pe=Qe.sent(),Qe.label=2;case 2:if(Pe===!1||I.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=!0,Et=new Promise(function(ye,ot){return I.signal.addEventListener("abort",function(){return ot({name:"AbortError",message:j||"Aborted"})})}),D(m(N,k,(de=l?.getPendingMeta)==null?void 0:de.call(l,{requestId:N,arg:k},{getState:O,extra:M}))),[4,Promise.race([Et,Promise.resolve(u(k,{dispatch:D,getState:O,extra:M,requestId:N,signal:I.signal,abort:F,rejectWithValue:function(ye,ot){return new io(ye,ot)},fulfillWithValue:function(ye,ot){return new mu(ye,ot)}})).then(function(ye){if(ye instanceof io)throw ye;return ye instanceof mu?h(ye.payload,N,k,ye.meta):h(ye,N,k)})])];case 3:return ve=Qe.sent(),[3,5];case 4:return kt=Qe.sent(),ve=kt instanceof io?_(null,N,k,kt.payload,kt.meta):_(kt,N,k),[3,5];case 5:return Vt=l&&!l.dispatchConditionRejection&&_.match(ve)&&ve.meta.condition,Vt||D(ve),[2,ve]}})})}();return Object.assign($,{abort:F,requestId:N,arg:k,unwrap:function(){return $.then(hv)}})}}return Object.assign(x,{pending:m,rejected:_,fulfilled:h,typePrefix:o})}return r.withTypes=function(){return r},r}();function hv(r){if(r.meta&&r.meta.rejectedWithValue)throw r.payload;if(r.error)throw r.error;return r.payload}function pv(r){return r!==null&&typeof r=="object"&&typeof r.then=="function"}var gv="task",wu="listener",_u="completed",oo="cancelled",Qv="task-"+oo,Jv="task-"+_u,Zv=wu+"-"+oo,eb=wu+"-"+_u,tb=function(){function r(o){this.code=o,this.name="TaskAbortError",this.message=gv+" "+oo+" (reason: "+o+")"}return r}();var so="listenerMiddleware";var nb=qt(so+"/add"),rb=qt(so+"/removeAll"),ib=qt(so+"/remove");var vu,ab=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(r){return(vu||(vu=Promise.resolve())).then(r).catch(function(o){return setTimeout(function(){throw o},0)})},mv=function(r){return function(o){setTimeout(o,r)}},ob=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:mv(10);au();var Tu="EMPTY",zn="NOT_EMPTY",Au=yu({name:"portfolioStore",initialState:{tokenPortfolio:void 0,portfolioState:zn},reducers:{setPortfolioStore:(r,o)=>{r.tokenPortfolio=o.payload.tokenPortfolio,r.portfolioState=o.payload.portfolioState}}}),vv=bu({reducer:{portfolioStore:Au.reducer}}),{setPortfolioStore:co}=Au.actions,en=vv;var dt=jr(Yn());var _e="https://arch.cypherd.io";var Zr={chainName:"ethereum-goerli",name:"Ethereum-Goerli",symbol:"GTH",id:0,backendName:"ETH_GOERLI",chain_id:"0x5",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:5},ei={chainName:"polygon-mumbai",name:"Polygon Mumbai",symbol:"MATIC",id:0,backendName:"POLYGON_MUMBAI",chain_id:"0x13881",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:80001},ti={chainName:"ethereum",name:"Ethereum",symbol:"ETH",id:0,backendName:"ETH",chain_id:"0x1",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:1},ni={chainName:"ethereum",name:"Polygon",symbol:"MATIC",id:1,backendName:"POLYGON",chain_id:"0x89",native_token_address:"0x0000000000000000000000000000000000001010",chainIdNumber:137},ri={chainName:"ethereum",name:"Binance Smart Chain",symbol:"BNB",id:2,backendName:"BSC",chain_id:"0x38",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:56},ii={chainName:"ethereum",name:"Avalanche",symbol:"AVAX",id:3,backendName:"AVALANCHE",chain_id:"0xa86a",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:43114},ai={chainName:"ethereum",name:"Fantom",symbol:"FTM",id:5,backendName:"FANTOM",chain_id:"0xfa",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:250},oi={chainName:"evmos",name:"Evmos",symbol:"EVMOS",id:6,backendName:"EVMOS",chain_id:"0x2329",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",secondaryAddress:"0x93581991f68dbae1ea105233b67f7fa0d6bdee7b",chainIdNumber:9001},si={chainName:"ethereum",name:"Arbitrum One",symbol:"ETH",id:10,backendName:"ARBITRUM",chain_id:"0xa4b1",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:42161},ci={chainName:"cosmos",name:"Cosmos",symbol:"COSMOS",id:7,backendName:"COSMOS",chain_id:"0x0",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:0,coinGeckoId:"cosmos"},ui={chainName:"osmosis",name:"Osmosis",symbol:"OSMO",id:8,backendName:"OSMOSIS",chain_id:"0x1",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:0,coinGeckoId:"osmosis"},li={chainName:"juno",name:"Juno",symbol:"JUNO",id:9,backendName:"JUNO",chain_id:"juno-1",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:0,coinGeckoId:"juno-network"},fi={chainName:"ethereum",name:"Optimism",symbol:"ETH",id:11,backendName:"OPTIMISM",chain_id:"0xa",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:10},di={chainName:"stargaze",name:"Stargaze",symbol:"STARS",id:12,backendName:"STARGAZE",chain_id:"stargaze-1",native_token_address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainIdNumber:0,coinGeckoId:"stargaze"},fb={POLYGON_MUMBAI:{chainId:`0x${Number(80001).toString(16)}`,chainName:"POLYGON MUMBAI",nativeCurrency:{name:"MATIC TESTNET",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc.ankr.com/polygon_mumbai"],blockExplorerUrls:["https://mumbai.polygonscan.com"]},ETH_GOERLI:{chainId:`0x${Number(5).toString(16)}`,chainName:"Ethereum GOERLI",nativeCurrency:{name:"Ether goerli",symbol:"GTH",decimals:18},rpcUrls:["https://rpc.ankr.com/eth_goerli"],blockExplorerUrls:["https://goerli.etherscan.io"]},ETH:{chainId:`0x${Number(1).toString(16)}`,chainName:"Ethereum Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://api.mycryptoapi.com/eth","https://cloudflare-eth.com"],blockExplorerUrls:["https://etherscan.io"]},POLYGON:{chainId:`0x${Number(137).toString(16)}`,chainName:"Polygon Mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com/"],blockExplorerUrls:["https://polygonscan.com/"]},BSC:{chainId:`0x${Number(56).toString(16)}`,chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"Binance Chain Native Token",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","wss://bsc-ws-node.nariox.org"],blockExplorerUrls:["https://bscscan.com"]},AVALANCHE:{chainId:`0x${Number(43114).toString(16)}`,chainName:"Avalanche Mainnet",nativeCurrency:{name:"Avalanche",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"],blockExplorerUrls:["https://snowtrace.io"]},FANTOM:{chainId:`0x${Number(250).toString(16)}`,chainName:"Fantom Opera",nativeCurrency:{name:"Fantom",symbol:"FTM",decimals:18},rpcUrls:["https://fantom-mainnet.gateway.pokt.network/v1/lb/62759259ea1b320039c9e7ac"],blockExplorerUrls:["https://ftmscan.com"]},ARBITRUM:{chainId:`0x${Number(42161).toString(16)}`,chainName:"Arbitrum One",nativeCurrency:{name:"Arbitrum One Ether",symbol:"ETH",decimals:18},rpcUrls:["https://rpc.ankr.com/arbitrum"],blockExplorerUrls:["https://arbiscan.io/"]},OPTIMISM:{chainId:`0x${Number(10).toString(16)}`,chainName:"Optimism",nativeCurrency:{name:"Optimism Ether",symbol:"ETH",decimals:18},rpcUrls:["https://mainnet.optimism.io"],blockExplorerUrls:["https://optimistic.etherscan.io/"]},EVMOS:{chainId:`0x${Number(9001).toString(16)}`,chainName:"Evmos",nativeCurrency:{name:"Evmos",symbol:"EVMOS",decimals:18},rpcUrls:["https://eth.bd.evmos.org:8545"],blockExplorerUrls:["https://evm.evmos.org"]}};var Eu=new Map([["ETH","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],["ETH_GOERLI","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],["POLYGON_MUMBAI","0x0000000000000000000000000000000000001010"],["ARBITRUM","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],["OPTIMISM","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],["POLYGON","0x0000000000000000000000000000000000001010"],["AVALANCHE","0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],["BSC","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],["FANTOM","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],["EVMOS","0x93581991f68dbae1ea105233b67f7fa0d6bdee7b"]]),ku=["0x1","0x89","0x38","0xa86a","0xfa","0x2329","0xa4b1","0xa","0x13881","0x5"],tn=new Map([["0x1","ETH"],["0x5","ETH_GOERLI"],["0x13881","POLYGON_MUMBAI"],["0x89","POLYGON"],["0x38","BSC"],["0xa86a","AVALANCHE"],["0xfa","FANTOM"],["0x2329","EVMOS"],["0xa4b1","ARBITRUM"],["0xa","OPTIMISM"]]),Nu=new Map([["ETH","0x1"],["ETH_GOERLI","0x5"],["POLYGON_MUMBAI","0x13881"],["POLYGON","0x89"],["BSC","0x38"],["AVALANCHE","0xa86a"],["FANTOM","0xfa"],["EVMOS","0x2329"],["ARBITRUM","0xa4b1"],["OPTIMISM","0xa"]]);var uo=jr(Yn());function Ou(r,o){let u=parseFloat((0,uo.get)(r,"totalValue",0)),l=parseFloat((0,uo.get)(o,"totalValue",0));return u<l?1:u>l?-1:0}var Su=r=>Tt(void 0,null,function*(){var Vt,Qe,ye,ot,Xn,st,Je,Qn;let o=0,u=0,l,h,m,_,T,E,x,k,D,O,M,N,I,j,R=!0,$=yield(yield fetch(`${_e}/v1/swap/evm/chains`,{method:"GET"})).json(),X=$==null?void 0:$.chains;X!=null&&X.includes(parseInt(globalThis.cypherWalletDetails.fromChainId,16))||(console.log("the chain itself is not supported."),R=!1);function de(se,ce){return se.filter(function(nn){return nn.address.toLowerCase()===ce.toLowerCase()}).length>0}function ve(se,ce=""){return se==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"||(console.log("chainId in check : ",ce),se==="0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000"&&ce==="0xa")?"0x0000000000000000000000000000000000000000":se}let Pe=[];if(R){let ce=yield(yield fetch(`${_e}/v1/swap/evm/chains/`+parseInt(globalThis.cypherWalletDetails.fromChainId,16)+"/tokens",{method:"GET"})).json();Pe=ce==null?void 0:ce.tokens}R&&!de(Pe,ve(globalThis.cypherWalletDetails.fromTokenContractAddress,globalThis.cypherWalletDetails.fromChainId))&&(console.log("not supported : ",globalThis.cypherWalletDetails.fromChainId),R=!1);let Et=[];for(let se=0;se<r.length;se++){let ce=[],Jn=((Vt=r[se])==null?void 0:Vt.token_holdings)||[];for(let re of Jn){let Nt=Nu.get((Qe=r[se])==null?void 0:Qe.chain_id);if(console.log("chain Id is  : ",Nt),Nt===globalThis.cypherWalletDetails.fromChainId&&R&&(de(Pe,ve(re.contract_address,Nt))||(console.log("not supported : ",re.name),R=!1)),(Nt===globalThis.cypherWalletDetails.fromChainId&&re.contract_address===globalThis.cypherWalletDetails.fromTokenContractAddress||Nt!==globalThis.cypherWalletDetails.fromChainId||Nt===globalThis.cypherWalletDetails.fromChainId&&R)&&re.actual_balance*re.price>=10&&re.is_verified){let le={name:re.name,symbol:re.symbol,logoUrl:re.logo_url,price:re.price,contractAddress:re.contract_address,balance:re.balance,contractDecimals:re.contract_decimals,totalValue:re.total_value,actualBalance:re.actual_balance,isVerified:re.is_verified,coinGeckoId:re.coin_gecko_id,about:re.about,price24h:re.price24h};switch((ye=r[se])==null?void 0:ye.chain_id){case Zr.backendName:le.chainDetails=Zr;break;case ei.backendName:le.chainDetails=ei;break;case ti.backendName:le.chainDetails=ti;break;case ni.backendName:le.chainDetails=ni;break;case ri.backendName:le.chainDetails=ri;break;case ii.backendName:le.chainDetails=ii;break;case ai.backendName:le.chainDetails=ai;break;case si.backendName:le.chainDetails=si;break;case fi.backendName:le.chainDetails=fi;break;case oi.backendName:le.chainDetails=oi;break;case ci.backendName:le.chainDetails=ci;break;case ui.backendName:le.chainDetails=ui;break;case li.backendName:le.chainDetails=li;break;case di.backendName:le.chainDetails=di;break}ce.push(le),Et.push(le)}}let nn=(ot=r[se])!=null&&ot.total_value?parseFloat((Xn=r[se])==null?void 0:Xn.total_value):0,Zn=(st=r[se])!=null&&st.unverfied_total_value?parseFloat((Je=r[se])==null?void 0:Je.unverfied_total_value):0,ue={chainUnVerifiedBalance:Zn,chainTotalBalance:nn,holdings:ce,timestamp:new Date().toISOString()};switch(u+=nn,o+=Zn,ue.holdings.sort(Ou),(Qn=r[se])==null?void 0:Qn.chain_id){case ti.backendName:l=ue;break;case Zr.backendName:I=ue;break;case ei.backendName:j=ue;break;case ni.backendName:h=ue;break;case ri.backendName:m=ue;break;case ii.backendName:_=ue;break;case ai.backendName:T=ue;break;case si.backendName:E=ue;break;case fi.backendName:x=ue;break;case oi.backendName:k=ue;break;case ci.backendName:D=ue;break;case ui.backendName:N=ue;break;case li.backendName:O=ue;break;case di.backendName:M=ue;break}}return Et.sort(Ou),{totalBalance:u,totalUnverifiedBalance:o,eth:l,polygon:h,bsc:m,avalanche:_,optimism:x,totalHoldings:Et,fantom:T,arbitrum:E,evmos:k,cosmos:D,osmosis:N,juno:O,stargaze:M,ethGoerli:I,polygonMumbai:j}});var bv=(r,o=[],u="GET")=>{let l={method:u};return u==="GET"&&(r+=o.map(({key:m,value:_})=>encodeURIComponent(m)+"="+encodeURIComponent(_)).join("&")),console.log("the url :: ",r),fetch(r,l).then(h=>h.json())},lo=(r,o)=>bv(r,o,"GET");function Du(r){let o=tn.get(r);if(o==null)return"";let u=Eu.get(o);return u==null?"":u}var Iu=(r,o)=>Tt(void 0,null,function*(){let u=`${_e}/v1/portfolio/tokenDetail?`,l=[{key:"chain",value:tn.get(r)},{key:"tokenAddress",value:o}],h=yield lo(u,l);return console.log(h),h}),Cu=r=>Tt(void 0,null,function*(){var m;let o=`${_e}/v1/portfolio/balances?`,u=[{key:"address[]",value:[r]}];(m=globalThis.cypherWalletDetails)!=null&&m.isTestnet&&(u=[{key:"address[]",value:[r]},{key:"chains[]",value:["ETH_GOERLI"]},{key:"chains[]",value:["POLYGON_MUMBAI"]}]);let l=yield lo(o,u),h=yield Su(l.chain_portfolios);return console.log("portfolio",h),h&&(h.totalUnverifiedBalance>0||h.totalBalance>0)?en.dispatch(co({tokenPortfolio:h,portfolioState:zn})):en.dispatch(co({tokenPortfolio:h,portfolioState:Tu})),h}),Mu=(r,o,u)=>Tt(void 0,null,function*(){let l=en.getState().portfolioStore;if(dt.default.get(l,["portfolioState"],"")===zn){let m=dt.default.get(l,["tokenPortfolio","totalHoldings"]).find(_=>dt.default.get(_,["contractAddress"]).toLowerCase()===o.toLowerCase()&&dt.default.get(_,["chainDetails","chain_id"])===r);return console.log("the token requested : ",m),m!==void 0&&dt.default.get(m,"actualBalance")>=u}return!1}),Pu=(r,o)=>Tt(void 0,null,function*(){let u=en.getState().portfolioStore;if(dt.default.get(u,["portfolioState"],"")===zn){let h=dt.default.get(u,["tokenPortfolio","totalHoldings"]).find(m=>dt.default.get(m,["contractAddress"]).toLowerCase()===o.toLowerCase()&&dt.default.get(m,["chainDetails","chain_id"])===r);if(console.log("the token requested : ",h),h!==void 0)return h;{let m=yield Iu(r,o);return{name:m.name,logoUrl:m.logo_url,contractDecimals:m.contract_decimals,symbol:m.symbol,coinGeckoId:m.coin_gecko_id,contractAddress:o,price:m.price,chainDetails:{backendName:`${tn.get(r)}`,chainName:`${tn.get(r)}`,chain_id:`${r}`}}}}else{let l=yield Iu(r,o);return{name:l.name,logoUrl:l.logo_url,contractDecimals:l.contract_decimals,symbol:l.symbol,coinGeckoId:l.coin_gecko_id,contractAddress:o,price:l.price,chainDetails:{backendName:`${tn.get(r)}`,chainName:`${tn.get(r)}`,chain_id:`${r}`}}}});var Fu=jr(Yn());var ke=jr(Yn());function xv(r){return r.charAt(0).toUpperCase()+r.slice(1)}var hi=r=>{let o=r.map(l=>`
    <tr>
      <td>
        <div id="cyd-chain">
          <img id="td-chain-icon" src="https://public.cypherd.io/icons/logos/${ke.default.get(l,["chainDetails","backendName"],"").toLowerCase()}.png" alt="${ke.default.get(l,["chainDetails","backendName"],"").toLowerCase()} logo" width="20" height="20"/>
          <p class='text-[14px]'>${ke.default.get(l,["chainDetails","backendName"],"")}</p>
        </div>
      </td>
      <td>
        <div id="cyd-token">
          <img id="td-token-icon" src="${ke.default.get(l,["logoUrl"])}" alt="${ke.default.get(l,["name"])} logo" width="20" height="20">
          <p class='text-[14px]'>${ke.default.get(l,["name"])}</p>
        </div>
      </td>
      <td>
        <p id="td-usd-value" class='text-[14px] font-semibold'>$ ${(ke.default.get(l,["actualBalance"])*ke.default.get(l,["price"])).toFixed(2)}</p>
      </td>
      <td>
        <p id="td-token-balance" class='text-[14px]'>${Number(ke.default.get(l,["actualBalance"])).toFixed(5)}</p>
      </td>
      <td>
        <button class="blue-button text-[14px]" onclick='bridgePopup(${JSON.stringify(ke.default.omit(l,["about"]))})'>Exchange</button>
      </td>
    </tr>
  `).join(" ");return`
    <div id="popup">
      <div class="flex justify-end w-full mt-[20px] mr-[20px] ">
        <img onclick="closePopup()" src="https://public.cypherd.io/icons/close_icon.svg" class="cursor-pointer">
      </div>
      <div id="icon-flex-box">
        <img src="https://public.cypherd.io/icons/logos/${ke.default.get(globalThis.requiredTokenDetail,["chainDetails","backendName"]).toLowerCase()}.png" alt="${ke.default.get(globalThis.requiredTokenDetail,["chainDetails","backendName"]).toLowerCase()} logo" width="52" height="52">
        <img src="${ke.default.get(globalThis.requiredTokenDetail,["logoUrl"])}" alt="Arbitrum logo" width="52" height="52">
      </div>
      <div id=cyd-tokenList-header class='my-[20px]'>
        <h2 class='text-[23px] font-semibold'>You need ${ke.default.get(globalThis.requiredTokenDetail,["symbol"]).toUpperCase()} in ${xv(ke.default.get(globalThis.requiredTokenDetail,["chainDetails","backendName"]).toLowerCase())} to use this dApp</h2>
        <p class='text-[16px] font-semibold'>You can exchange with below tokens in your wallet  </p>
      </div>
      <div id="tokens-available-flex-box">
        <table width="100%">
          ${o}
        </table>
      </div>
      <div class='flex flex-row justify-center w-[100%] py-[25px] bg-[#3C4143] rounded-b-[30px] mt-[15px]'>
        <a class='flex flex-row items-center text-[14px] text-white' href="https://www.cypherwallet.io/" target="_blank">
          Powered by  <img src="https://public.cypherd.io/icons/logos/cypher.png" class="ml-[10px] mr-[3px]" alt="Arbitrum logo" width="18" height="18" resizeMode="contain"> Cypher
        </a>
      </div>
    </div>
  `};var fo=`'<div class="rounded-[30px] z-50" id="bridge-popup-css">'+
  '<div class=" !bg-[#F5F5F5] rounded-t-[30px] p-5 flex flex-col justify-center items-center w-full h-full">'+
    '<div class="flex justify-end w-full mt-[5px] ">'+
      '<img onclick="closePopup()" src="https://public.cypherd.io/icons/close_icon.svg" class="cursor-pointer">'+
    '</div>'+
    '<h2 class="font-semibold text-[28px] my-10 text-[#434343]">Enter Token Amount</h2>'+
    '<h3 class="font-extrabold text-[22px] text-[#434343]">USD</h3>'+
    '<div class="flex justify-evenly w-full items-center">'+
      '<div class="rounded-full flex items-center justify-center h-[48px] w-[48px] bg-white cursor-pointer" id="bp-max-button" onclick="onMax()">'+
        '<p class="text-[12px] text-[#2081E1]">MAX</p>'+
      '</div>'+
      '<div id="bp-amount-input">'+
        '<input type="text" class="text-center focus:outline-none font-extrabold text-[70px] text-[#434343] bg-[#F5F5F5]" id="bp-amount-value" placeholder="0.00">'+
      '</div>'+
      '<div class="rounded-full flex items-center justify-center h-[48px] w-[48px] cursor-pointer" id="bp-switch-button">'+
      '</div>'+
    '</div>'+
    '<div class="flex">'+
      '<p class="mr-2 text-[18px] text-black" id="bp-token-value">00</p>'+
      '<p class="text-[18px] text-black">' + tokenDetail.symbol + '</p>'+
    '</div>'+
    '<div class="flex my-[3]">'+
      '<p class="text-[14px] text-black" id="bp-min-amount">Min amount: $' + Math.max(10, requiredUsdValue(globalThis.requiredTokenDetail, globalThis.exchangingTokenDetail)).toFixed(2) + '</p>'+
    '</div>'+
    '<div class="bg-white border border-[#E4E4E4] p-2 flex rounded-2xl w-3/4 mt-6">'+
      '<img src="' + tokenDetail.logoUrl + '" alt="' + tokenDetail.logoUrl + '"  class="h-[55px] w-[55px] rounded-lg">'+
      '<div class="w-full ml-3" id="bp-balance-detail">'+
        '<div id="bp-balance-detail-usd" class="flex justify-between">'+
          '<p class="text-[#474747] text-[18px] font-semibold">' + tokenDetail.chainDetails.backendName + '</p>'+
          '<p class="text-[#474747] text-[18px] font-semibold" id="bp-balance-detail-usd-value">$' + (tokenDetail.actualBalance * tokenDetail.price).toFixed(2) + '</p>'+
        '</div>'+
        '<div id="bp-balance-detail-token" class="flex justify-between">'+
          '<p class="text-[#929292] text-[16px] font-normal">' + tokenDetail.symbol + '</p>'+
          '<p class="text-[#929292] text-[16px] font-normal" id="bp-balance-detail-token-value">' + parseFloat(tokenDetail.actualBalance).toFixed(6) + '</p>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'+

  '<div id="bp-submit-button-container" class="bg-white py-10 w-full flex items-center justify-center rounded-b-[30px]">'+
    '<button class="bg-[#2081E2] h-[45px] w-[60%] rounded-lg text-white text-[16px] font-semibold" onclick="bridgeSubmitConditionCheck(' + tokenDetail.chainDetails.chain_id + ', ' + "'" +  tokenDetail.chainDetails.backendName + "'" + ')">Submit</button>'+
  '</div>'+
'</div>'`;var ho=`'<div class="flex flex-col justify-evenly items-center w-[33%] h-[45%] m-auto bg-[#fefefe] rounded-[30px]">'+
  '<div class="flex justify-end w-full px-[20px] ">'+
    '<img onclick="closePopup()" src="https://public.cypherd.io/icons/close_icon.svg" class="cursor-pointer">'+
  '</div>'+
  '<div id="bp-heading">'+
    '<h2 class="text-[25px] font-bold">Summary</h2>'+
  '</div>'+
  '<div id="bp-summary-container">'+
    '<div class="bp-summary-row exchange-row py-[15px] px-[10px] bg-[#f5f5f5]">'+
      '<p class="w-[30%] text-[14px] font-semibold">Exchange from</p>'+
      '<div class="flex flex-row items-center w-[30%]">'+
        '<img src="https://public.cypherd.io/icons/logos/' + globalThis.exchangingTokenDetail.chainDetails.backendName.toLowerCase() + '.png" alt="' + chainName + ' logo" width="22" height="22">'+
        '<p class="text-[14px] ml-[7px]">'+ globalThis.exchangingTokenDetail.chainDetails.backendName +'</p>'+
      '</div>'+
      '<div class="flex flex-row items-center w-[30%]">'+
        '<img src="' + globalThis.exchangingTokenDetail.logoUrl + '" alt="' + globalThis.exchangingTokenDetail.name + ' logo" width="22" height="22">'+
        '<p class="text-[14px] ml-[7px]">'+ globalThis.exchangingTokenDetail.name +'</p>'+
      '</div>'+
    '</div>'+
    '<div class="bp-summary-row amount-row py-[15px] px-[10px] bg-[#fafafa]">'+
      '<p class="w-[30%] text-[14px]">Amount Sending</p>'+
      '<p class="w-[30%] text-[14px]">' + parseFloat(globalThis.bridgeInputDetails.tokenValueEntered).toFixed(6) + ' ' + globalThis.exchangingTokenDetail.symbol + '</p>'+
      '<p class="w-[30%] text-[14px]">$' + parseFloat(globalThis.bridgeInputDetails.usdValueEntered).toFixed(2) +'</p>'+
    '</div>'+
    '<div class="bp-summary-row exchange-row py-[15px] px-[10px] bg-[#f5f5f5]">'+
      '<p class="w-[30%] text-[14px] font-semibold">Exchange to</p>'+
      '<div class="flex flex-row items-center w-[30%]">'+
        '<img src="https://public.cypherd.io/icons/logos/' + globalThis.requiredTokenDetail.chainDetails.backendName.toLowerCase() + '.png" alt="' + chainName + ' logo" width="22" height="22">'+
        '<p class="text-[14px] ml-[7px]">'+ globalThis.requiredTokenDetail.chainDetails.backendName +'</p>'+
      '</div>'+
      '<div class="flex flex-row items-center w-[30%]">'+
        '<img src="' + globalThis.requiredTokenDetail.logoUrl + '" alt="' + globalThis.requiredTokenDetail.name + ' logo" width="22" height="22">'+
        '<p class="text-[14px] ml-[7px]">'+ globalThis.requiredTokenDetail.name +'</p>'+
      '</div>'+
    '</div>'+
    '<div class="bp-summary-row amount-row py-[15px] px-[10px] bg-[#fafafa]">'+
      '<p class="w-[30%] text-[14px]">Amount Receiving</p>'+
      '<p id="token-received" class="w-[30%] text-[14px]"> ...' + globalThis.requiredTokenDetail.symbol + '</p>'+
      '<p id="usd-received" class="w-[30%] text-[14px]">$ ... </p>'+
    '</div>'+
  '</div>'+
  '<div class=" flex flex-row justify-center items-center w-[100%]">'+
    '<button id="bridge-submit-blue-button" disabled class="blue-button disabled-button bg-[#2081E2] text-[16px] font-semibold border-none text-white h-[45px] w-[60%] rounded-[3px]" onclick="onBridgeClick()">Exchange</button>'+
  '</div>'+
'</div>'`;var Ru=`'<div class="rounded-[30px] z-50" id="bridge-popup-css">'+
  '<div class=" !bg-[#F5F5F5] rounded-t-[30px] p-5 flex flex-col justify-center items-center w-full h-full">'+
    '<div class="flex justify-end w-full ">'+
      '<img onclick="closePopup()" src="https://public.cypherd.io/icons/close_icon.svg" class="cursor-pointer">'+
    '</div>'+
    '<div id="bp-heading">'+
      '<h2 class="font-semibold text-[28px] my-10 text-[#434343] text-center">Switch to '+ fetchEthereumChainData("0x" + chainId.toString(16)).chainName +' for this exchange</h2>'+
    '</div>'+
    '<div class="flex items-start justify-evenly w-3/4">'+
      '<div id="bp-switch-chain-container">'+
        '<img src="https://public.cypherd.io/icons/logos/' + fetchChainDetails(currentChainId).backendName.toLowerCase() + '.png" alt="' + chainName + ' logo" width="42" height="42">'+
        '<p class="text-[#929292] font-normal text-[16px] text-center mt-2 mb-1">' + fetchEthereumChainData(currentChainId).nativeCurrency.symbol + '</p>'+
        '<p class="text-[#474747] font-semibold text-[18px] text-center">' + fetchEthereumChainData(currentChainId).chainName +'</p>'+
      '</div>'+
      '<div id="bp-switch-icon-container">'+
        '<img src="https://public.cypherd.io/icons/logos/switch_network.png" alt="switch icon" width="100" height="100">'+
      '</div>'+
      '<div id="bp-switch-chain-container">'+
        '<img src="https://public.cypherd.io/icons/logos/' + chainName.toLowerCase() + '.png" alt="' + chainName + ' logo" width="42" height="42">'+
        '<p class="text-[#929292] font-normal text-[16px] text-center mt-2 mb-">' + fetchEthereumChainData("0x" + chainId.toString(16)).nativeCurrency.symbol + '</p>'+
        '<p class="text-[#474747] font-semibold text-[18px] text-center">'+ chainName +'</p>'+
      '</div>'+
    '</div>'+
  '</div>'+

  '<div class="bg-white py-10 w-full flex items-center justify-center rounded-b-[30px]">'+
    '<button class="bg-[#2081E2] h-[45px] w-[60%] rounded-lg text-white text-[16px] font-semibold" onclick="navigateAfterSwitch(' + "'0x" + chainId.toString(16) + "'" + ', ' + "'" +  chainName + "'" + ')">Switch</button>'+
  '</div>'+
'</div>'`;var Lu=`'<div class="flex flex-col rounded-[30px] bg-white py-[25px] w-[30%]">'+
      '<div class="flex justify-end w-full px-[20px]">'+
        '<img onclick="closePopup()" src="https://public.cypherd.io/icons/close_icon.svg" class="cursor-pointer">'+
      '</div>'+
      '<div class="flex flex-1 flex-col justify-center self-center items-center px-[30px] w-[72%]">'+
          '<h2 class="text-[20px] text-center font-semibold mt-[40px]">Transaction submitted</h2>'+
          '<p class="text-[16px] text-center mt-[10px]">Your transaction is being processed. This can take upto 5 mins</p>'+
          '<img class="mt-[5px]" src="https://public.cypherd.io/icons/logos/loading.gif" alt="loading gif" width="300" height="300">'+
      '</div>'+
    '</div>'`;var Bu=`'<div id="bridge-popup-css" class="rounded-[30px] px-[50px] py-[12px] justify-evenly">'+
'<div id="bp-heading" class="flex flex-col justify-center items-center">'+
  '<img src="https://public.cypherd.io/icons/logos/success.png" alt="successLogo" width="42" height="42">'+
  '<h2 class="text-[23px] font-semibold mt-[3px]">Congrats</h2>'+
'</div>'+
'<p class="text-center text-[18px] mt-[5px]">You have '+ (globalThis?.bridgeQuote?.transferAmount)?.toString() + ' ' + globalThis?.requiredTokenDetail?.chainDetails?.symbol + ' added in ' + globalThis?.requiredTokenDetail?.chainDetails?.backendName + '. You can now use dapp. Switch chain back to ' + globalThis?.requiredTokenDetail?.chainDetails?.backendName + '</p>'+
'<div id="bp-switch-container" class="mt-[5px]">'+
  '<div id="bp-switch-chain-container">'+
    '<img src="https://public.cypherd.io/icons/logos/' + globalThis?.exchangingTokenDetail?.chainDetails?.backendName?.toLowerCase() + '.png" alt="' + globalThis?.exchangingTokenDetail?.chainDetails?.backendName + ' logo" width="42" height="42">'+
    '<p class="text-[14px]">' + globalThis?.exchangingTokenDetail?.symbol + '</p>'+
    '<p class="text-[16px] font-semibold">'+ globalThis?.exchangingTokenDetail?.chainDetails?.backendName +'</p>'+
  '</div>'+
  '<div id="bp-switch-icon-container">'+
    '<img src="https://public.cypherd.io/icons/logos/switch_network.png" alt="switch icon" width="120" height="120">'+
  '</div>'+
  '<div id="bp-switch-chain-container">'+
    '<img src="https://public.cypherd.io/icons/logos/' + globalThis?.requiredTokenDetail?.chainDetails?.backendName?.toLowerCase() + '.png" alt="' + globalThis?.requiredTokenDetail?.chainDetails?.backendName?.toLowerCase() + ' logo" width="42" height="42">'+
    '<p class="text-[14px]">' + globalThis?.requiredTokenDetail?.symbol + '</p>'+
    '<p class="text-[16px] font-semibold">'+ globalThis?.requiredTokenDetail?.chainDetails?.backendName +'</p>'+
  '</div>'+
'</div>'+
  '<div class=" flex flex-row justify-center items-center w-[100%] mt-[10px]">'+
    '<button class="bg-[#2081E2] text-[16px] font-semibold border-none text-white h-[45px] w-[60%] rounded-[3px]" onclick="switchNetwork(' + "'" + globalThis.requiredTokenDetail.chainDetails.chain_id.toString(16) + "'" + ', ' + "'" +  globalThis.requiredTokenDetail.chainDetails.backendName + "'" + '); closePopup(); globalThis.callBack(true)">Switch</button>'+
  '</div>'+
'</div>'`;var po=`'<div id="bridge-popup-css" class="rounded-[30px] px-[50px] py-[12px] justify-evenly">'+
'<div id="bp-heading" class="flex flex-col justify-center items-center">'+
  '<img src="https://public.cypherd.io/icons/logos/success.png" alt="successLogo" width="42" height="42">'+
  '<h2 class="text-[23px] font-semibold mt-[3px]">Congrats</h2>'+
'</div>'+
'<p class="text-center text-[18px] mt-[5px]">You have '+ parseFloat(globalThis.bridgeQuote ? globalThis?.bridgeQuote?.transferAmount : globalThis.swapQuoteData?.toToken?.amount)?.toFixed(6) + ' ' + globalThis?.requiredTokenDetail?.chainDetails?.symbol + ' added in ' + globalThis?.requiredTokenDetail?.chainDetails?.backendName + '. You can now use dapp.</p>'+

  '<div class=" flex flex-row justify-center items-center w-[100%] mt-[50px]">'+
    '<button class="bg-[#2081E2] text-[16px] font-semibold border-none text-white h-[45px] w-[60%] rounded-[3px]" onclick="closePopup(); globalThis.callBack(true)">OK</button>'+
  '</div>'+
'</div>'`;var Hu=()=>`
    <script defer>

      var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      console.log(Web3.utils.toChecksumAddress('0x71d357ef7e29f07473f9edfb2140f14605c9f309'));

      fetch( '${_e}/v1/swap/evm/chains', {
        method: 'GET',
      } ).then(
        function (response) {
          console.log('raw response : ', response);
          return response.json()
        }).then(
          function (data) {
            console.log('the chains swappable are :::: ', data.chains);
            globalThis.swapSupportedChains = data.chains;
          }
        );

      function isSwap () {
        return (globalThis.requiredTokenDetail.chainDetails.backendName === globalThis.exchangingTokenDetail.chainDetails.backendName);
      }

      async function ConnectMetaMask() {
        if (window.ethereum) {
          try {
            const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const resp = fetch('${_e}/v1/authentication/sign-message/'+walletAddress[0], {
              method: 'GET',
            }).then(function(response){
              return response.json()})
              .then(function(data)
              {
                console.log('the data from connectMetaMask : ', data);
                SignWithMetaMask({ message: data.message, walletAddress: walletAddress[0] });
              });
          } catch (error) {
            console.log({ titleText: 'Please install an Ethereum based wallet extension to connect t' });
          }
        }
      }

      async function SignWithMetaMask({
        message,
        walletAddress,
      }) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const signature = await signer.signMessage(message);
        await GetAuthToken({ signature, walletAddress });
      }

      async function GetAuthToken({
        signature,
        walletAddress,
      }) {
        const resp = fetch('${_e}/v1/authentication/verify-message/'+walletAddress, {
          method: 'POST',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({ signature: signature })
        }).then(function(response){
          return response.json()})
          .then(function(data)
          {
            console.log('the data get aut token : ', data);
            globalThis.AUTH_TOKEN = data.token;
            globalThis.REFRESH_TOKEN = data.refreshToken;
          });
      }

      function showBridgePopup (tokenDetail) {
        console.log('pressed token details is', JSON.parse(tokenDetail));
      }

      function requiredUsdValue (requiredTokenDetail, exchangingTokenDetail) {
        const amountRequired = (globalThis.cypherWalletDetails.fromTokenRequiredBalance * requiredTokenDetail.price) - (exchangingTokenDetail.actualBalance * exchangingTokenDetail.price);
        console.log('amountRequired : ', amountRequired);
        return amountRequired;
      }

      async function getSwapSupportedChainList () {
        await fetch( '${_e}/v1/swap/evm/chains', {
          method: 'GET',
        } ).then(
          function (response) {
            console.log('raw response : ', response);
            return response.json()
          }).then(
            function (data) {
              console.log('response from act', data.chains);
              return 'hi';
            });
      }

      function isTokenSwapSupported (tokenArray, tokenToCheck) {
        console.log('tokenArray', tokenArray);
        console.log('tokenToCheck', tokenToCheck);

        const tokenPresent =  tokenArray.filter(function (token)
        {
          return token.address.toLowerCase() === tokenToCheck.toLowerCase();
        });
        return tokenPresent.length > 0;
      }

      function swapContractAddressCheck(contractAddress, chainId = '') {
        if (contractAddress === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
          console.log('contractAddress check: ');
          return '0x0000000000000000000000000000000000000000';
        }
        console.log('chainId in check : ', chainId);
        if (contractAddress === '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000' && chainId === '0xa') {
          console.log('contractAddress check: ');
          return '0x0000000000000000000000000000000000000000';
        }
        return contractAddress;
      }

      async function bridgePopup (tokenDetail) {
        globalThis.exchangingTokenDetail = tokenDetail;
        console.log("Pressed", tokenDetail);
        if (isSwap()) {
          if (globalThis.swapSupportedChains?.includes(parseInt(globalThis.exchangingTokenDetail.chainDetails.chain_id, 16))) {
            console.log('the chain swappable');
            const swapSupportedChainList = fetch( '${_e}/v1/swap/evm/chains/' + parseInt(globalThis.exchangingTokenDetail.chainDetails.chain_id, 16) + '/tokens', {
              method: 'GET',
            } ).then(
              function (response) {
                console.log('raw response : ', response);
                return response.json()
              }).then(
                function (data) {
                  console.log('current chain Id : ', parseInt(globalThis.exchangingTokenDetail.chainDetails.chain_id, 16), 'name: ', globalThis.exchangingTokenDetail.contractAddress);
                  if (isTokenSwapSupported(data.tokens, swapContractAddressCheck(globalThis.exchangingTokenDetail.contractAddress, globalThis.exchangingTokenDetail.chainDetails.chain_id))) {
                    console.log('token and chain swappable');
                    document.getElementById("popupBackground").innerHTML = ${fo};
                  } else {
                    toastMixin.fire({
                      title: 'Sorry...',
                      text: 'Swap is not currently supported for ' + globalThis.exchangingTokenDetail.name + ' token. Please choose other tokens.',
                      icon: 'error'
                    });
                  }
                });
          } else {
            toastMixin.fire({
              title: 'Sorry...',
              text: 'Swap is not currently supported for ' + globalThis.exchangingTokenDetail.chainDetails.backendName + ' chain. Please choose any token from other chains.',
              icon: 'error'
            });
          }
        } else {
          console.log('bridge case :: ');
          document.getElementById("popupBackground").innerHTML = ${fo};
        }
      }

      const popupBackgroundParentElement = document.querySelector("#popupBackground");
      function updateUsdValue (event) {
        console.log('event', event.target);
        if (event.target && event.target.matches("input[type='text']")) {
          console.log('iniside');
          const tokenValueElement = document.querySelector("#bp-token-value");
          const price = parseFloat(globalThis.exchangingTokenDetail.price);
          const newValue = (parseFloat(event.target.value) / price).toFixed(6);
          console.log('newValue', newValue);
          tokenValueElement.innerHTML = newValue.toString();
        }
      };
      popupBackgroundParentElement.addEventListener("input",updateUsdValue);

      function backToNoBalanceHTML () {
        document.getElementById("popupBackground").innerHTML = ${hi};
      }

      function closePopup () {
        const popupBackground = document.getElementById("popupBackground");
        popupBackground.remove();
        window.location.reload();
        console.log('reload Triggered');
      }

      async function fetchCurrentNetwork () {
        if (window.ethereum) {
          const currentChainId = await window.ethereum.request({
            method: 'eth_chainId',
          });
          return currentChainId;
        } else {
          toastMixin.fire({
            title: 'Oops...',
            text: 'Not connected to any Network',
            icon: 'error'
          });
        }
      }

      async function checkNetwork (targetNetworkId) {
        console.log("the chain id received is : ", targetNetworkId);
        if (window.ethereum) {
          const currentChainId = await window.ethereum.request({
            method: 'eth_chainId',
          });

          console.log("the current chain id : ", currentChainId);
          console.log('check', currentChainId === targetNetworkId);
          // return true if network id is the same
          if (currentChainId === targetNetworkId) {
            return true;
          } else {
            return false;
          }
          // return false is network id is different
        } else {
          toastMixin.fire({
            title: 'Oops...',
            text: 'Not connected to any Network',
            icon: 'error'
          });
          return false;
        }
      };

      const gasFeeReservation = {
        AVALANCHE: 0.001,
        BSC: 0.001,
        COSMOS: 0.1,
        EVMOS: 0.1,
        FANTOM: 0.1,
        JUNO: 0.1,
        OSMOSIS: 0.1,
        POLYGON: 0.1,
        ETH: 0.001,
        ARBITRUM: 0.001,
        OPTIMISM: 0.001,
        STARGAZE: 0.1,
      };

      function fetchChainDetails (chainId) {
        switch(chainId) {
          case "0x5": {
            return {
              chainName: 'ethereum-goerli',
              name: 'Ethereum-Goerli',
              symbol: 'GTH',
              id: 0,
              backendName: 'ETH_GOERLI',
              chain_id: '0x5',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              chainIdNumber: 5,
              rpcEndpoint: 'https://rpc.ankr.com/eth_goerli',
            };
            break;
          }
          case "0x13881": {
            return {
              chainName: 'polygon-mumbai',
              name: 'Polygon Mumbai',
              symbol: 'MATIC',
              id: 0,
              backendName: 'POLYGON_MUMBAI',
              chain_id: '0x13881',
              native_token_address: '0x0000000000000000000000000000000000001010',
              chainIdNumber: 80001,
              rpcEndpoint: 'https://rpc.ankr.com/eth_goerli',
            };
            break;
          }
          case "0x1": {
            return {
              chainName: 'ethereum',
              name: 'Ethereum',
              symbol: 'ETH',
              id: 0,
              backendName: 'ETH',
              chain_id: '0x1',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              chainIdNumber: 1,
              rpcEndpoint: 'https://rpc.ankr.com/eth',
            };
            break;
          }
          case "0x89": {
            return {
              chainName: 'ethereum',
              name: 'Polygon',
              symbol: 'MATIC',
              id: 1,
              backendName: 'POLYGON',
              chain_id: '0x89',
              native_token_address: '0x0000000000000000000000000000000000001010',
              rpcEndpoint: 'https://rpc.ankr.com/polygon',
              chainIdNumber: 137
            }
            break;
          }
          case "0x38": {
            return {
              chainName: 'ethereum',
              name: 'Binance Smart Chain',
              symbol: 'BNB',
              id: 2,
              backendName: 'BSC',
              chain_id: '0x38',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              rpcEndpoint: 'https://rpc.ankr.com/bsc',
              chainIdNumber: 56
            }
            break;
          }
          case "0xa86a": {
            return {
              chainName: 'ethereum',
              name: 'Avalanche',
              symbol: 'AVAX',
              id: 3,
              backendName: 'AVALANCHE',
              chain_id: '0xa86a',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              rpcEndpoint: 'https://rpc.ankr.com/avalanche',
              chainIdNumber: 43114
            }
            break;
          }
          case "0xfa": {
            return  {
              chainName: 'ethereum',
              name: 'Fantom',
              symbol: 'FTM',
              id: 5,
              backendName: 'FANTOM',
              chain_id: '0xfa',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              rpcEndpoint: 'https://rpc.ankr.com/fantom',
              chainIdNumber: 250
            }
            break;
          }
          case "0xa4b1": {
            return {
              chainName: 'ethereum',
              name: 'Arbitrum One',
              symbol: 'ETH',
              id: 10,
              backendName: 'ARBITRUM',
              chain_id: '0xa4b1',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              rpcEndpoint: 'https://arb1.arbitrum.io/rpc',
              chainIdNumber: 42161
            }
            break;
          }
          case "0xa": {
            return {
              chainName: 'ethereum',
              name: 'Optimism',
              symbol: 'ETH',
              id: 11,
              backendName: 'OPTIMISM',
              chain_id: '0xa',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              rpcEndpoint: 'https://opt-mainnet.g.alchemy.com/v2/_xYARKGN55iQpuX94lySfkcZ7GTW-a4C',
              chainIdNumber: 10
            }
            break;
          }
          case "0x2329": {
            return {
              chainName: 'evmos',
              name: 'Evmos',
              symbol: 'EVMOS',
              id: 6,
              backendName: 'EVMOS',
              chain_id: '0x2329',
              native_token_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
              secondaryAddress: '0x93581991f68dbae1ea105233b67f7fa0d6bdee7b',
              rpcEndpoint: 'https://evmos-json-rpc.stakely.io',
              chainIdNumber: 9001
            }
          }
          default: {return{}};
        };
      };

      function fetchEthereumChainData (chainId) {
        console.log('chainId inside switch', chainId);
        switch(chainId) {
          case "0x13881": {return {
            chainId: '0x${Number(80001).toString(16)}',
            chainName: 'Polygon Mumbai',
            nativeCurrency: {
              name: 'Matic',
              symbol: 'Matic',
              decimals: 18,
            },
            rpcUrls: ['https://rpc.ankr.com/polygon_mumbai'],
            blockExplorerUrls: ['https://mumbai.polygonscan.com'],
            }
            break;
          }
          case "0x5": {return {
            chainId: '0x${Number(5).toString(16)}',
            chainName: 'Ethereum Goreli',
            nativeCurrency: {
              name: 'Ether',
              symbol: 'GTH',
              decimals: 18,
            },
            rpcUrls: ['https://rpc.ankr.com/eth_goerli'],
            blockExplorerUrls: ['https://goreli.etherscan.io'],
            }
            break;
          }
          case "0x1": {return {
            chainId: '0x${Number(1).toString(16)}',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: {
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://api.mycryptoapi.com/eth', 'https://cloudflare-eth.com'],
            blockExplorerUrls: ['https://etherscan.io'],
            }
            break;
          }
          case "0x89": {return {
            chainId: '0x${Number(137).toString(16)}',
            chainName: 'Polygon Mainnet',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18,
            },
            rpcUrls: ['https://polygon-rpc.com/'],
            blockExplorerUrls: ['https://polygonscan.com/'],
            }
            break;
          }
          case "0x38": {return {
            chainId: "0x${Number(56).toString(16)}",
            chainName: 'Binance Smart Chain Mainnet',
            nativeCurrency: {
              name: 'Binance Chain Native Token',
              symbol: 'BNB',
              decimals: 18,
            },
            rpcUrls: [
              'https://bsc-dataseed1.binance.org',
              'https://bsc-dataseed2.binance.org',
              'https://bsc-dataseed3.binance.org',
              'https://bsc-dataseed4.binance.org',
              'https://bsc-dataseed1.defibit.io',
              'https://bsc-dataseed2.defibit.io',
              'https://bsc-dataseed3.defibit.io',
              'https://bsc-dataseed4.defibit.io',
              'https://bsc-dataseed1.ninicoin.io',
              'https://bsc-dataseed2.ninicoin.io',
              'https://bsc-dataseed3.ninicoin.io',
              'https://bsc-dataseed4.ninicoin.io',
              'wss://bsc-ws-node.nariox.org',
            ],
            blockExplorerUrls: ['https://bscscan.com'],
            }
            break;
          }
          case "0xa86a": {return {
            chainId: "0x${Number(43114).toString(16)}",
            chainName: 'Avalanche Mainnet',
            nativeCurrency: {
              name: 'Avalanche',
              symbol: 'AVAX',
              decimals: 18,
            },
            rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://snowtrace.io'],
            }
            break;
          }
          case "0xfa": {return  {
            chainId: "0x${Number(250).toString(16)}",
            chainName: 'Fantom Opera',
            nativeCurrency: {
              name: 'Fantom',
              symbol: 'FTM',
              decimals: 18,
            },
            rpcUrls: ['https://fantom-mainnet.gateway.pokt.network/v1/lb/62759259ea1b320039c9e7ac'],
            blockExplorerUrls: ['https://ftmscan.com'],
            }
            break;
          }
          case "0xa4b1": {return {
            chainId: "0x${Number(42161).toString(16)}",
            chainName: 'Arbitrum One',
            nativeCurrency: {
              name: 'Arbitrum One Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://rpc.ankr.com/arbitrum'],
            blockExplorerUrls: ['https://arbiscan.io/'],
            }
            break;
          }
          case "0xa": {return {
            chainId: "0x${Number(10).toString(16)}",
            chainName: 'Optimism',
            nativeCurrency: {
              name: 'Optimism Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://mainnet.optimism.io'],
            blockExplorerUrls: ['https://optimistic.etherscan.io/'],
            }
            break;
          }
          case "0x2329": {return {
            chainId: "0x${Number(9001).toString(16)}",
            chainName: 'Evmos',
            nativeCurrency: {
              name: 'Evmos',
              symbol: 'EVMOS',
              decimals: 18,
            },
            rpcUrls: ['https://eth.bd.evmos.org:8545'],
            blockExplorerUrls: ['https://evm.evmos.org'],
            }
            break;
          }
          default: {return{}};
        };
      };

      const CONTRACT_DECIMAL_TO_ETHER_UNITS = {
        6: 'picoether',
        9: 'gwei',
        18: 'ether',
      };

      const EVM_CHAINS_NATIVE_TOKEN_MAP = new Map([
        ['ETH', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
        ['ARBITRUM', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
        ['OPTIMISM', '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000'],
        ['POLYGON', '0x0000000000000000000000000000000000001010'],
        ['AVALANCHE', '0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'],
        ['BSC', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
        ['FANTOM', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
        ['EVMOS', '0x93581991f68dbae1ea105233b67f7fa0d6bdee7b']
      ]);

      async function switchNetwork (targetNetworkId, chainName) {
          try {
            console.log("the chainId sb : ", targetNetworkId);
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: targetNetworkId }],
            });
            return true;
          } catch (error) {
            console.log(error);
            try {
              console.log("the chainId : ", targetNetworkId);
              console.log("the fetched data : ", {...fetchEthereumChainData(targetNetworkId)});
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{...fetchEthereumChainData(targetNetworkId)}],
              });
              return true;
            } catch (error) {
              return false;
            }
            return false;
          }

        // refresh
      };

      async function bridgeSubmitConditionCheck (chainId, chainName) {
        const usdValueEntered = document.querySelector("#bp-amount-value").value;
        const amountRequired = requiredUsdValue(globalThis.requiredTokenDetail, globalThis.exchangingTokenDetail);
        if (parseFloat(usdValueEntered) >= Math.max(10, amountRequired)) {
          await bridgeSubmit (chainId, chainName);
        } else {
          toastMixin.fire({
            title: 'Oops...',
            text: 'Please Enter a value greater than the minimum amount ( $' + Math.max(10, amountRequired).toFixed(2) + ' ).',
            icon: 'error'
          });
        }
      }

      async function bridgeSubmit (chainId, chainName) {
        console.log("bridge submit pressed", chainId);
        const usdValueEntered = document.querySelector("#bp-amount-value").value;
        const tokenValueEntered = document.querySelector("#bp-token-value").textContent;
        const usdBalance = document.querySelector("#bp-balance-detail-usd-value");
        const numericUsdBalance = parseFloat(usdBalance.textContent.slice(1));
        const tokenBalance = document.querySelector("#bp-balance-detail-token-value").textContent;
        globalThis.bridgeInputDetails = { usdValueEntered, tokenValueEntered, numericUsdBalance, tokenBalance };
        console.log(parseFloat(numericUsdBalance), parseFloat(usdValueEntered));
        if (parseFloat(numericUsdBalance) >= parseFloat(usdValueEntered)) {
          console.log("Bridge Eligible", "0x" + chainId.toString(16));
          console.log("The current Network is : ", await checkNetwork("0x" + chainId.toString(16)));
          const currentChainId = await fetchCurrentNetwork();
          if (await checkNetwork("0x" + chainId.toString(16))) {
            console.log('global vallue ', globalThis.requiredTokenDetail);
            await onGetQuote();
            document.getElementById("popupBackground").innerHTML = ${ho};
          } else {
            console.log('chainId', chainId);
            console.log('symbol', chainId, fetchEthereumChainData("0x" + chainId.toString(16)).nativeCurrency.symbol);
            console.log('current chain id', currentChainId);
            document.getElementById("popupBackground").innerHTML = ${Ru};
          }
        } else {
          toastMixin.fire({
            title: 'Oops...',
            text: 'Value entered is greater than your balance',
            icon: 'error'
          });
        }
      }

      async function navigateAfterSwitch (chainId, chainName) {
        console.log('insde switch call', chainId, chainName);
        if (await switchNetwork(chainId, chainName)) {
          await onGetQuote();
          document.getElementById("popupBackground").innerHTML = ${ho};
        }
      }

      async function getAllowanceApproval({
        chain,
        contractAddress,
        contractData,
        gasLimit,
        gasPrice,
        isNative
      }) {
        try {
          console.log('data passed to getAllowanceApproval : ', 'chain : ', chain,
          'contractAddress : ',contractAddress,
          'contractData : ',contractData,
          'gasLimit : ', gasLimit,
          'gasPrice : ', gasPrice);
          const rpcEndpoint = fetchChainDetails(globalThis.exchangingTokenDetail.chainDetails.chain_id).rpcEndpoint;

          const web3 = new Web3(rpcEndpoint);

          let userAddress = globalThis.cypherWalletDetails.address;

          if (chain === '${"EVMOS"}') {
            userAddress = web3.utils.toChecksumAddress(userAddress);
          }
          const tx = {
            from: userAddress,
            to: contractAddress,
            gasPrice: web3.utils.toWei(gasPrice.toFixed(9), 'gwei').toString(),
            gas: gasLimit,
            value: isNative ? web3.utils.toWei(Number(globalThis.bridgeInputDetails.tokenValueEntered).toFixed(globalThis.exchangingTokenDetail?.contractDecimals), 'ether') : '0x0',
            data: contractData,
          };

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();

          const response = await signer.sendTransaction(tx);

          const receipt = await response.wait();
          return { hash: receipt?.hash, isError: false };

        } catch (e) {
          return { isError: true, error: e.toString() };
        }
      }

      async function getSwapAllowanceApproval () {
        console.log('swap DAta : ', globalThis.swapQuoteData, globalThis.swapQuoteData.gas);
        const approvalResp = await getAllowanceApproval({
          chain: globalThis.exchangingTokenDetail.chainDetails.backendName,
          contractData: globalThis.allowanceData.contractData,
          gasLimit: globalThis.swapQuoteData.data.gas,
          gasPrice: globalThis.allowanceData.gasPrice.gasPrice,
          contractAddress: swapContractAddressCheck(globalThis.exchangingTokenDetail.contractAddress, globalThis.exchangingTokenDetail.chainDetails.chain_id),
          isNative: EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName) === globalThis.exchangingTokenDetail?.contractAddress
        });
        console.log('approvalResp :: ', approvalResp);
        if (!approvalResp.isError) {
          globalThis.allowanceData = { ...globalThis.allowanceData, isAllowance: false };
          console.log('we can swap');
        } else {
          console.log('error in getSwapAllowanceApproval');
          toastMixin.fire({
            title: 'Oops...',
            text: approvalResp.error.toString(),
            icon: 'error'
          });
        }
      };

      async function checkAllowance({
        chain,
        contractAddress,
        routerAddress,
        amount,
        contractDecimal,
        isNative
      }) {
        console.log('data passed :: ', chain,
        contractAddress,
        routerAddress,
        amount,
        contractDecimal);
        await switchNetwork(globalThis.exchangingTokenDetail?.chainDetails?.chain_id, globalThis.exchangingTokenDetail?.chainDetails?.chainName);

        const contractABI = [
          {
            constant: true,
            inputs: [
              {
                name: '',
                type: 'address',
              },
              {
                name: '',
                type: 'address',
              },
            ],
            name: 'allowance',
            outputs: [
              {
                name: '',
                type: 'uint256',
              },
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
          },
          {
            constant: false,
            inputs: [
              {
                name: 'guy',
                type: 'address',
              },
              {
                name: 'wad',
                type: 'uint256',
              },
            ],
            name: 'approve',
            outputs: [
              {
                name: '',
                type: 'bool',
              },
            ],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ];

        const rpcEndpoint = fetchChainDetails(globalThis.exchangingTokenDetail.chainDetails.chain_id).rpcEndpoint;

        const web3 = new Web3(rpcEndpoint);

        let userAddress = globalThis.cypherWalletDetails.address;

        console.log('userAddress is : ', userAddress);

        if (chain === '${"EVMOS"}') {
          userAddress = web3.utils.toChecksumAddress(userAddress);
        }

        const gasPrice = await getGasPrice(chain);
        console.log('gaPrivce', gasPrice);

        const contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log('going to call contract');
        const response = await contract.methods.allowance(userAddress, routerAddress).call();
        console.log('response from contract', response);


        const etherUnit = CONTRACT_DECIMAL_TO_ETHER_UNITS[globalThis.exchangingTokenDetail.contractDecimals];
        const tokenAmount = web3.utils.toWei(amount, etherUnit).toString();
        if (Number(tokenAmount) > Number(response)) {
          if (Number(amount) < 1000) amount = '1000';
          const tokens = web3.utils.toWei((Number(amount) * 10).toString());
          const resp = contract.methods.approve(routerAddress, tokens).encodeABI();
          const gasLimit = await web3.eth.estimateGas({
            from: userAddress,
            to: contractAddress,
            value: isNative ? web3.utils.toWei(Number(globalThis.bridgeInputDetails.tokenValueEntered).toFixed(globalThis.exchangingTokenDetail?.contractDecimals), 'ether') : '0x0',
            data: resp,
          });
          return { isError: false, isAllowance: true, contractData: resp, gasLimit: gasLimit, gasPrice };
        }
        return { isError: false, isAllowance: false };
      }

      async function swapTokens({
        chain,
        chainId,
        routerAddress,
        contractData,
        isNative,
        amount,
      }) {
        try {
          console.log('data passsed to swapTokens : ', chain,
          chainId,
          routerAddress,
          contractData,
          isNative,
          amount);
          const rpcEndpoint = fetchChainDetails(globalThis.exchangingTokenDetail.chainDetails.chain_id).rpcEndpoint;

          const web3 = new Web3(rpcEndpoint);

          let userAddress = globalThis.cypherWalletDetails.address;

          if (chain === '${"EVMOS"}') {
            userAddress = web3.utils.toChecksumAddress(userAddress);
          }
          const gasPrice = await getGasPrice(chain);

          const gasLimit = await web3.eth.estimateGas({
            from: userAddress,
            to: routerAddress,
            value: isNative ? web3.utils.toWei(Number(globalThis.bridgeInputDetails.tokenValueEntered).toFixed(globalThis.exchangingTokenDetail?.contractDecimals), 'ether') : '0x0',
            data: contractData,
          });

          const tx = {
            chainId: chainId,
            value: isNative ? web3.utils.toWei(String(amount), 'ether') : '0x0',
            to: routerAddress,
            data: contractData,
            gas: web3.utils.toHex(2 * Number(gasLimit)),
            gasPrice: web3.utils.toWei(gasPrice.gasPrice.toFixed(9), 'gwei'),
          };

          console.log('tx : ', tx);
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          console.log('provider : ', provider, 'signer :', signer);

          const response = await signer.sendTransaction(tx);
          console.log('response send : ', response);

          const receipt = await response.wait();
          return { hash: receipt?.hash, isError: false };

        } catch (e) {
          return { isError: true, error: e.toString() };
        }
      }

      async function swap () {
        const swapResp = await swapTokens({
          chain: globalThis.exchangingTokenDetail.chainDetails.backendName,
          chainId: globalThis.swapQuoteData.data.chainId,
          routerAddress: globalThis.swapQuoteData.router,
          contractData: swapQuoteData.data.data,
          isNative: EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName) === globalThis.exchangingTokenDetail?.contractAddress,
          amount: globalThis.bridgeInputDetails.tokenValueEntered.toString(),
        });
        if (!swapResp.isError) {
          console.log('swap completee ... ');
          document.getElementById("popupBackground").innerHTML = ${po};
        } else {
          toastMixin.fire({
            title: 'Swap Failed',
            text: swapResp.error.toString(),
            icon: 'error'
          });
        }
      };

      async function onGetQuote () {
        if (isSwap()) {
          const payload = {
            fromTokenList: [
              {
                address: swapContractAddressCheck(globalThis.exchangingTokenDetail.contractAddress, globalThis.exchangingTokenDetail.chainDetails.chain_id),
                amount: globalThis.bridgeInputDetails.tokenValueEntered.toString(),
              },
            ],
            toToken: swapContractAddressCheck(globalThis.requiredTokenDetail.contractAddress, globalThis.requiredTokenDetail.chainDetails.chain_id),
            slippage: 0.4,
            walletAddress: globalThis.cypherWalletDetails.address,
          };
          const response = fetch('${_e}/v1/swap/evm/chains/' + globalThis.exchangingTokenDetail.chainDetails.chain_id + '/quote', {
            method: 'POST',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(payload)
          }).then(function(response){
            return response.json()})
            .then(async function(data)
            {
              console.log('the data from swap : ', data);
              globalThis.swapQuoteData = {...data};
              document.getElementById("token-received").textContent = parseFloat(data.toToken.amount).toFixed(6) + ' ' + globalThis.requiredTokenDetail.symbol;
              document.getElementById("usd-received").textContent = '$ ' + parseFloat(data.value).toFixed(2);

              console.log(':: check ::', EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName), globalThis.exchangingTokenDetail?.contractAddress, EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName) !== globalThis.exchangingTokenDetail?.contractAddress)

              if (!data.isError) {
                if (EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName) !== globalThis.exchangingTokenDetail?.contractAddress) {
                  const allowanceResp = await checkAllowance({
                    chain: globalThis.exchangingTokenDetail.chainDetails.backendName,
                    contractAddress: swapContractAddressCheck(globalThis.exchangingTokenDetail.contractAddress, globalThis.exchangingTokenDetail.chainDetails.chain_id),
                    routerAddress: data?.router,
                    amount: globalThis.bridgeInputDetails.tokenValueEntered,
                    contractDecimal: globalThis.exchangingTokenDetail.contractDecimals,
                    isNative: EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName) === globalThis.exchangingTokenDetail?.contractAddress
                  });
                  console.log('gasPrice in allowance : ', allowanceResp, allowanceResp.gasPrice);
                  if (!allowanceResp.isError) {
                    if (
                      allowanceResp.isAllowance &&
                      allowanceResp.gasLimit &&
                      allowanceResp.contractData &&
                      allowanceResp.gasPrice
                    ){
                      console.log('check allowance checked ...');
                      globalThis.allowanceData = {
                        isAllowance: true,
                        gasLimit: allowanceResp.gasLimit,
                        contractData: allowanceResp.contractData,
                        gasPrice: allowanceResp.gasPrice,
                      };
                      document.getElementById("bridge-submit-blue-button").disabled = false;
                      document.getElementById("bridge-submit-blue-button").classList.remove("disabled-button");
                    } else {
                      console.log('check allowance skipped');
                      globalThis.allowanceData = {
                        isAllowance: false
                      };
                      document.getElementById("bridge-submit-blue-button").disabled = false;
                      document.getElementById("bridge-submit-blue-button").classList.remove("disabled-button");
                    }
                  } else {
                    toastMixin.fire({
                      title: 'Oops...',
                      text: allowanceResp.error,
                      icon: 'error'
                    });
                  }
                } else {
                  console.log('check allowance skipped');
                  globalThis.allowanceData = {
                    isAllowance: false
                  };
                  document.getElementById("bridge-submit-blue-button").disabled = false;
                  document.getElementById("bridge-submit-blue-button").classList.remove("disabled-button");
                }
              } else {
                if (data.error?.errors) {
                  toastMixin.fire({
                    title: 'Oops...',
                    text: String(data.error?.errors[0]?.message),
                    icon: 'error'
                  });
                } else {
                  toastMixin.fire({
                    title: 'Oops...',
                    text: data.error.message,
                    icon: 'error'
                  });
                }
                setLoading(false);
              }});
        } else {
          console.log('on get quore: ');
          const reqQuoteData = {
            fromAddress: globalThis.cypherWalletDetails.address,
            toAddress: globalThis.cypherWalletDetails.address,
            fromChain: globalThis.exchangingTokenDetail.chainDetails.backendName,
            toChain: globalThis.requiredTokenDetail.chainDetails.backendName,
            fromTokenAddress: globalThis.exchangingTokenDetail.contractAddress,
            fromTokenDecimal: globalThis.exchangingTokenDetail.contractDecimals,
            toTokenAddress: globalThis.requiredTokenDetail.contractAddress,
            toTokenDecimal: globalThis.requiredTokenDetail.contractDecimals,
            fromAmount: 1,
            fromTokenLabel: globalThis.exchangingTokenDetail.name,
            toTokenLabel: globalThis.requiredTokenDetail.name,
            fromTokenSymbol: globalThis.exchangingTokenDetail.symbol,
            toTokenSymbol: globalThis.requiredTokenDetail.symbol.toUpperCase(),
            fromTokenCoingeckoId: globalThis.exchangingTokenDetail.coinGeckoId,
            toTokenCoingeckoId: globalThis.requiredTokenDetail.coinGeckoId,
          };
          console.log('reqQuoteData', reqQuoteData);
          const result = fetch('${_e}/v1/bridge/quote', {
            method: 'POST',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(reqQuoteData)
          }).then(function(response){
            return response.json()})
            .then(function(data)
            {
              console.log('the data from bridge : ', data);
              console.log('the data from bridge status: ', data.errors);

              if(data?.errors?.length > 0) {
                toastMixin.fire({
                  title: 'Oops...',
                  text: data.errors[0].message,
                  icon: 'error'
                });
              } else {
                globalThis.bridgeQuote = data;
                document.getElementById("token-received").textContent = data.transferAmount.toFixed(6) + ' ' + globalThis.requiredTokenDetail.symbol;
                document.getElementById("usd-received").textContent = '$ ' + data.usdValue.toFixed(2);
                document.getElementById("bridge-submit-blue-button").disabled = false;
                document.getElementById("bridge-submit-blue-button").classList.remove("disabled-button");
              }
            });
          console.log('result from POST', result);
        }
      }

      async function getGasPrice(chain) {
        console.log('in getGasPrice');

        let response = await fetch('${_e}/v1/prices/gas/' + chain);
        response = await response.json();
        console.log('await fetch gasprice response : ', response);
        return response;
      }

      async function estimateGasLimit({
        amountToSend,
        contractAddress,
        fromAddress,
        toAddress,
        web3,
        isNative
      }) {
        console.log('in estimateGAsLimit');

        const contract = new web3.eth.Contract(
          [
            {
              name: 'transfer',
              type: 'function',
              inputs: [
                {
                  name: '_to',
                  type: 'address',
                },
                {
                  type: 'uint256',
                  name: '_tokens',
                },
              ],
              constant: false,
              outputs: [],
              payable: false,
            },
          ],
          contractAddress,
        );

        const contractData = contract.methods.transfer(toAddress, amountToSend).encodeABI();
        console.log('contractData : ', contractData ,{
          from: fromAddress,
          to: contractAddress,
          value: isNative ? web3.utils.toWei(Number(globalThis.bridgeInputDetails.tokenValueEntered).toFixed(globalThis.exchangingTokenDetail?.contractDecimals), 'ether') : '0x0',
          data: contractData,
        });

        const gasLimit = await web3.eth.estimateGas({
          from: fromAddress,
          to: contractAddress,
          value: isNative ? web3.utils.toWei(Number(globalThis.bridgeInputDetails.tokenValueEntered).toFixed(globalThis.exchangingTokenDetail?.contractDecimals), 'ether') : '0x0',
          data: contractData,
        });

        console.log('gasLimit : ', gasLimit);

        return gasLimit;
      }

      async function sendNativeCoin({
        fromAddress,
        toAddress,
        gasPrice,
        gasLimit,
        amountToSend,
      }) {
        console.log('in sendNativeToken');

        const tx = {
          from: fromAddress,
          to: toAddress,
          value: amountToSend,
          gasLimit: gasLimit,
          gasPrice: gasPrice,
        };

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const response = await signer.sendTransaction(tx);

        const receipt = await response.wait();
        return receipt?.hash;
      }

      async function sendToken({
        contractAddress,
        toAddress,
        amount,
        gasLimit,
      }) {
        console.log('in sendToken');
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log('ehters.BrowserProvider', provider);
        const signer = await provider.getSigner();

        const contractAbiFragment = [
          {
            name: 'transfer',
            type: 'function',
            inputs: [
              {
                name: '_to',
                type: 'address',
              },
              {
                type: 'uint256',
                name: '_tokens',
              },
            ],
            constant: false,
            outputs: [],
            payable: false,
            gas: gasLimit,
          },
        ];

        const contract = new ethers.Contract(contractAddress, contractAbiFragment, signer);

        const response = await contract.transfer(toAddress, amount);

        const receipt = await response.wait();

        return receipt?.hash;
      }

      async function send({
        chain,
        amountToSend,
        toAddress,
        contractAddress,
        contractDecimal,
      }) {
        try {
          console.log('in Send top');
          console.log('in Send');
          console.log('printing ... ', '${globalThis.exchangingTokenDetail}');
          const rpcEndpoint = fetchChainDetails(globalThis.exchangingTokenDetail.chainDetails.chain_id).rpcEndpoint;
          console.log('rpc', rpcEndpoint);
          const web3 = new Web3(rpcEndpoint);


          let userAddress = globalThis.cypherWalletDetails.address;

          console.log('rpc', rpcEndpoint, 'web3', web3, 'userAddress', userAddress);
          console.log('chain', chain);

          if (chain === '${"EVMOS"}') {
            userAddress = web3.utils.toChecksumAddress(userAddress);
            console.log('chain evmos', chain);
          }

          console.log('chain', chain);
          const gasPrice = await getGasPrice(chain);
          console.log('gaPrivce', gasPrice);
          console.log('CONTRACT_DECIMAL_TO_ETHER_UNITS[globalThis.exchangingTokenDetail.contractDecimals]',  CONTRACT_DECIMAL_TO_ETHER_UNITS[globalThis.exchangingTokenDetail.contractDecimals]);
          const etherUnit = CONTRACT_DECIMAL_TO_ETHER_UNITS[globalThis.exchangingTokenDetail.contractDecimals];
          console.log('etherUnit', etherUnit);
          const parsedSendingAmount = web3.utils.toWei(amountToSend.toString(), etherUnit).toString();

          const isNativeToken = EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName) === globalThis.exchangingTokenDetail?.contractAddress;
          console.log('isNativeToken', isNativeToken);
          await switchNetwork(globalThis.exchangingTokenDetail?.chainDetails?.chain_id, chain);
          const gasLimit = await estimateGasLimit({
            amountToSend: parsedSendingAmount,
            contractAddress,
            fromAddress: userAddress,
            toAddress,
            web3,
            isNative: EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail?.chainDetails?.backendName) === globalThis.exchangingTokenDetail?.contractAddress
          });

          console.log('gasLimit Received : ', gasLimit);

          if (isNativeToken) {
            const txnHash = await sendNativeCoin({
              fromAddress: userAddress,
              toAddress,
              gasPrice: web3.utils.toWei(gasPrice.gasPrice.toString(), 'gwei').toString(),
              gasLimit: gasLimit.toString(),
              amountToSend: parsedSendingAmount,
            });
            return { isError: false, hash: txnHash };
          } else {
            console.log('going to Send Token');
            const txnHash = await sendToken({ contractAddress, toAddress, amount: parsedSendingAmount, gasLimit });
            return { isError: false, hash: txnHash };
          }
        } catch (error) {
          toastMixin.fire({
            title: 'Oops...',
            text: error,
            icon: 'error'
          });
          console.log('error', error);
          return { isError: true, error: error };
        }
        return { isError: true };
      }

      const onDepositFund = async (hash) => {
        return new Promise((resolve)=>{
          console.log('in deposit');
        const depositPostBody = {
          address: globalThis.cypherWalletDetails.address,
          quoteUUID: globalThis.bridgeQuote.quoteUuid,
          txnHash: hash,
        };
        console.log('body : ', depositPostBody);
        const resp = fetch('${_e}/v1/bridge/quote/' + globalThis.bridgeQuote.quoteUuid + '/deposit', {
          method: 'POST',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(depositPostBody)
        }).then(function(response){
            return response.json()})
          .then(function(data)
          {
            console.log('deposit data : ', data, data);
            if (!data.isError) {
              console.log('SucessFully Bridged the amount.');
              resolve(data);
            } else {
              toastMixin.fire({
                title: 'Please contact Cypher support',
                text: data.error.message,
                icon: 'error'
              });
              console.log({ titleText: data.error.message + ' Please contact Cypher support ', });
            }
          });
        })
      };

      async function bridge () {
        console.log(globalThis.exchangingTokenDetail);
        console.log('in bridge', {
          amountToSend: parseFloat(globalThis.bridgeInputDetails.tokenValueEntered),
          contractAddress: globalThis.exchangingTokenDetail?.contractAddress,
          toAddress: globalThis.bridgeQuote?.step1TargetWallet,
          chain: globalThis.exchangingTokenDetail?.chainDetails?.backendName,
          contractDecimal: globalThis.exchangingTokenDetail?.contractDecimals,
        });
        const resp = await send({
          amountToSend: parseFloat(globalThis.bridgeInputDetails.tokenValueEntered),
          contractAddress: globalThis.exchangingTokenDetail?.contractAddress,
          toAddress: globalThis.bridgeQuote?.step1TargetWallet,
          chain: globalThis.exchangingTokenDetail?.chainDetails?.backendName,
          contractDecimal: globalThis.exchangingTokenDetail?.contractDecimals,
        });

        return new Promise((resolve)=>{
          if (!resp.isError && resp.hash) {
            console.log('resp', resp);
            const bridgeResponse = onDepositFund(resp?.hash).then(function(response) {
                console.log('bridgeResponse :: ', response);
                console.log('bridge Response', response, response?.message);
                console.log('bridge Response', response, response['message']);
                resolve(response);
              }
            );
          } else {
            toastMixin.fire({
              title: 'Oops...',
              text: resp?.error?.message.toString(),
              icon: 'error'
            });
            console.log({ titleText: resp?.error?.message.toString() });
          }
        });
      }

      async function onBridgeClick () {
        document.getElementById("popupBackground").innerHTML = ${Lu};
        if (isSwap()) {
          console.log('allowance data : ', globalThis.allowanceData);
          if (globalThis.allowanceData.isAllowance) {
            await getSwapAllowanceApproval();
          }
          await swap();
          console.log('swap complete ...');
        } else {
          bridgeResult = bridge().then(async function(response){
            console.log('bridgeResult', response, response?.message);
            console.log('bridgeResult', response, response['message']);

            if (response?.message === "success") {
              console.log('success');

              const interval = setInterval(() => {
                console.log("fetching from activity ... ");
                const status = fetch( '${_e}/v1/activities/status/bridge/' + globalThis.bridgeQuote.quoteUuid, {
                  method: 'GET',
                } ).then(
                  function (response) {
                    console.log('raw response : ', response);
                    return response.json()
                  }).then(
                    async function (data) {
                      console.log('response from act', data);
                      if (data?.activityStatus?.status === "COMPLETED") {
                        if(await checkNetwork(globalThis.requiredTokenDetail.chainDetails.chain_id)) {
                          console.log('true state');
                          document.getElementById("popupBackground").innerHTML = ${po};
                        } else {
                          console.log('false state');
                          document.getElementById("popupBackground").innerHTML = ${Bu};
                        }
                        clearInterval(interval);
                      }
                    });
              }, 10000);
            }
          });
        }
      }

      async function onMax () {
        const reserve = gasFeeReservation[globalThis.exchangingTokenDetail.chainDetails.backendName];
        if (globalThis.exchangingTokenDetail.contractAddress === EVM_CHAINS_NATIVE_TOKEN_MAP.get(globalThis.exchangingTokenDetail.chainDetails.backendName)) {
          if (reserve && (globalThis.exchangingTokenDetail.actualBalance * globalThis.exchangingTokenDetail.price - reserve)) {
            const usdValueAfterReduction = (globalThis.exchangingTokenDetail.actualBalance * globalThis.exchangingTokenDetail.price - reserve);
            document.getElementById("bp-amount-value").value = usdValueAfterReduction.toFixed(2).toString();
            document.getElementById("bp-token-value").textContent = (parseFloat(usdValueAfterReduction) / globalThis.exchangingTokenDetail.price).toFixed(6).toString();
          } else {
            console.log({ titleText: 'Insufficient funds for gas' });
            toastMixin.fire({
              title: 'Oops...',
              text: 'Insufficient funds for gas',
              icon: 'error'
            });
          }
        } else {
          document.getElementById("bp-amount-value").value = (globalThis.exchangingTokenDetail.actualBalance * globalThis.exchangingTokenDetail.price).toFixed(2).toString();
          document.getElementById("bp-token-value").textContent = (parseFloat(globalThis.exchangingTokenDetail.actualBalance) / globalThis.exchangingTokenDetail.price).toFixed(6).toString();
        }
      };
    <\/script>`;var Uu=`
.swal2-container {
  z-index: 2147483647;
}

#popupBackground {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 2147483646;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: black;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(5px);
}

#popup {
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 60%;
  height: auto;
  border-radius: 30px;
}

#icon-flex-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  margin-top: 30px;
}

#tokens-available-flex-box {
  width: 80%;
  overflow: scroll;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
}

#cyd-tokenList-header{
  text-align: center
}

#token-detail-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
}

#token-detail-0 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #f5f5f5;
  padding: 10px;
}

table {
  border-collapse: collapse;
}

tr{
  height: 75px;
}

td{
  padding-left: 10px;
}

tr:nth-child(odd) {
  background-color: #f5f5f5;
}

#cyd-chain{
  display: flex;
  flex-direction: row;
  align-items: center;
}

#cyd-token{
  display: flex;
  flex-direction: row;
  align-items: center;
}

#td-chain-icon {
  margin-right: 10px
}

#td-token-icon {
  margin-right: 10px
}

.blue-button{
  background-color: #2081E2;
  border: none;
  color: white;
  height: 35px;
  width: 90px;
  border-radius: 3px;
  float: right;
  margin-right: 10px
}

.disabled-button {
  background-color: gray;
  color: black;
}

#bridge-popup-css {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 30%;
  background-color: #fefefe;
}

#bp-amount-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: stretch;
  width: 250px;
}

#bp-token-value-flex-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


#bp-balance-detail {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#bp-balance-detail-usd {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 25px;
}

#bp-balance-detail-token {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 25px;
  align-items: center;
}


#bp-switch-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
}

#bp-switch-chain-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
}

#bp-summary-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: -20px;
  margin-right: -20px;
}

.bp-summary-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
`;var yv=r=>new Promise(o=>setTimeout(o,r)),wv=r=>{console.log("\u{1F680} ~ User operation Completed:",r)},Wu=_=>Tt(void 0,[_],function*({address:r,targetChainIdHex:o,requiredTokenContractAddress:u,requiredTokenBalance:l,isTestnet:h,callBack:m=wv}){if(screen.width<768)return;yield yv(1e3);let T=r.toLowerCase(),E=u==null?void 0:u.toLowerCase();if(!ku.includes(o)){console.log(o+"not supported");return}if(h&&!["0x5","0x13881"].includes(o)){console.log(o+"not supported for testnet operations");return}(E===void 0||E==="")&&(E=Du(o)),globalThis.cypherWalletDetails={address:T.toLowerCase(),fromChainId:o,fromTokenContractAddress:E,fromTokenRequiredBalance:l,callBack:m,isTestnet:h};let x=document.createElement("script");x.src="https://cdn.jsdelivr.net/npm/web3@1.8.2/dist/web3.min.js",x.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(x);let k=document.createElement("script");k.src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.0.7/ethers.umd.min.js",k.type="application/javascript",document.getElementsByTagName("head")[0].appendChild(k);let D=document.createElement("script");D.src="https://cdn.tailwindcss.com",D.type="application/javascript",document.getElementsByTagName("head")[0].appendChild(D);let O=document.createElement("script");O.src="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.2/dist/sweetalert2.all.min.js",O.type="application/javascript",document.getElementsByTagName("head")[0].appendChild(O);let M=document.createElement("div");M.id="popupBackground";let N=yield Cu(T.toLowerCase());console.log("balances logged",N);let I=en.getState().portfolioStore;console.log("token holdings from store : ",I);let j=document.createElement("style"),R=yield Pu(o,E);globalThis.requiredTokenDetail=Yc({},R),l===0||!(yield Mu(o,E,l))?(M.innerHTML=hi(Fu.default.get(I,["tokenPortfolio","totalHoldings"])),j.innerHTML=Uu):(console.log("Hurray!!, you have enough Balance. Continue using the dapp."),m(!0)),globalThis.document.body.appendChild(M),globalThis.document.body.appendChild(j);let F=document.createRange();F.setStart(globalThis.document.body,0),globalThis.document.body.appendChild(F.createContextualFragment(Hu()))});window.Cypher=Wu;console.log('Method "Cypher" was added to the window object. You can try it yourself by just entering "await Cypher()"');})();
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
