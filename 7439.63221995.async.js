(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7439],{11965:function(Je,ce,B){"use strict";B.d(ce,{Z:function(){return ae}});var d=B(82961);function ae(y,R){var l=typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(!l){if(Array.isArray(y)||(l=(0,d.Z)(y))||R&&y&&typeof y.length=="number"){l&&(y=l);var U=0,w=function(){};return{s:w,n:function(){return U>=y.length?{done:!0}:{done:!1,value:y[U++]}},e:function(N){throw N},f:w}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T=!0,g=!1,J;return{s:function(){l=l.call(y)},n:function(){var N=l.next();return T=N.done,N},e:function(N){g=!0,J=N},f:function(){try{!T&&l.return!=null&&l.return()}finally{if(g)throw J}}}}},29405:function(Je,ce,B){"use strict";B.d(ce,{J$:function(){return lr},ZP:function(){return vr},kY:function(){return Le}});var d=B(67294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ae(e,i,r,a){function n(t){return t instanceof r?t:new r(function(f){f(t)})}return new(r||(r=Promise))(function(t,f){function c(s){try{u(a.next(s))}catch(h){f(h)}}function m(s){try{u(a.throw(s))}catch(h){f(h)}}function u(s){s.done?t(s.value):n(s.value).then(c,m)}u((a=a.apply(e,i||[])).next())})}function y(e,i){var r={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},a,n,t,f;return f={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function c(u){return function(s){return m([u,s])}}function m(u){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,n&&(t=u[0]&2?n.return:u[0]?n.throw||((t=n.return)&&t.call(n),0):n.next)&&!(t=t.call(n,u[1])).done)return t;switch(n=0,t&&(u=[u[0]&2,t.value]),u[0]){case 0:case 1:t=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,n=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(t=r.trys,!(t=t.length>0&&t[t.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!t||u[1]>t[0]&&u[1]<t[3])){r.label=u[1];break}if(u[0]===6&&r.label<t[1]){r.label=t[1],t=u;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(u);break}t[2]&&r.ops.pop(),r.trys.pop();continue}u=i.call(e,r)}catch(s){u=[6,s],n=0}finally{a=t=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var R=function(){},l=R(),U=Object,w=function(e){return e===l},T=function(e){return typeof e=="function"},g=function(e,i){return U.assign({},e,i)},J="undefined",I=function(){return typeof window!=J},N=function(){return typeof document!=J},$e=function(){return I()&&typeof window.requestAnimationFrame!=J},ie=new WeakMap,ze=0,Z=function(e){var i=typeof e,r=e&&e.constructor,a=r==Date,n,t;if(U(e)===e&&!a&&r!=RegExp){if(n=ie.get(e),n)return n;if(n=++ze+"~",ie.set(e,n),r==Array){for(n="@",t=0;t<e.length;t++)n+=Z(e[t])+",";ie.set(e,n)}if(r==U){n="#";for(var f=U.keys(e).sort();!w(t=f.pop());)w(e[t])||(n+=t+":"+Z(e[t])+",");ie.set(e,n)}}else n=a?e.toJSON():i=="symbol"?e.toString():i=="string"?JSON.stringify(e):""+e;return n},le=!0,Be=function(){return le},Te=I(),ve=N(),de=Te&&window.addEventListener?window.addEventListener.bind(window):R,Ze=ve?document.addEventListener.bind(document):R,he=Te&&window.removeEventListener?window.removeEventListener.bind(window):R,Ge=ve?document.removeEventListener.bind(document):R,Ye=function(){var e=ve&&document.visibilityState;return w(e)||e!=="hidden"},Qe=function(e){return Ze("visibilitychange",e),de("focus",e),function(){Ge("visibilitychange",e),he("focus",e)}},Xe=function(e){var i=function(){le=!0,e()},r=function(){le=!1};return de("online",i),de("offline",r),function(){he("online",i),he("offline",r)}},er={isOnline:Be,isVisible:Ye},rr={initFocus:Qe,initReconnect:Xe},ue=!I()||"Deno"in window,tr=function(e){return $e()?window.requestAnimationFrame(e):setTimeout(e,1)},G=ue?d.useEffect:d.useLayoutEffect,me=typeof navigator!="undefined"&&navigator.connection,Oe=!ue&&me&&(["slow-2g","2g"].includes(me.effectiveType)||me.saveData),be=function(e){if(T(e))try{e=e()}catch(a){e=""}var i=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Z(e):"";var r=e?"$swr$"+e:"";return[e,i,r]},k=new WeakMap,De=0,Ie=1,Ae=2,Y=function(e,i,r,a,n,t,f){f===void 0&&(f=!0);var c=k.get(e),m=c[0],u=c[1],s=c[3],h=m[i],v=u[i];if(f&&v)for(var x=0;x<v.length;++x)v[x](r,a,n);return t&&(delete s[i],h&&h[0])?h[0](Ae).then(function(){return e.get(i)}):e.get(i)},nr=0,we=function(){return++nr},Ve=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return ae(void 0,void 0,void 0,function(){var r,a,n,t,f,c,m,u,s,h,v,x,oe,_,b,o,Q,H,M,A,K;return y(this,function(L){switch(L.label){case 0:if(r=e[0],a=e[1],n=e[2],t=e[3],f=typeof t=="boolean"?{revalidate:t}:t||{},c=w(f.populateCache)?!0:f.populateCache,m=f.revalidate!==!1,u=f.rollbackOnError!==!1,s=f.optimisticData,h=be(a),v=h[0],x=h[2],!v)return[2];if(oe=k.get(r),_=oe[2],e.length<3)return[2,Y(r,v,r.get(v),l,l,m,!0)];if(b=n,Q=we(),_[v]=[Q,0],H=!w(s),M=r.get(v),H&&(A=T(s)?s(M):s,r.set(v,A),Y(r,v,A)),T(b))try{b=b(r.get(v))}catch(j){o=j}return b&&T(b.then)?[4,b.catch(function(j){o=j})]:[3,2];case 1:if(b=L.sent(),Q!==_[v][0]){if(o)throw o;return[2,b]}else o&&H&&u&&(c=!0,b=M,r.set(v,M));L.label=2;case 2:return c&&(o||(T(c)&&(b=c(b,M)),r.set(v,b)),r.set(x,g(r.get(x),{error:o}))),_[v][1]=we(),[4,Y(r,v,b,o,l,m,!!c)];case 3:if(K=L.sent(),o)throw o;return[2,c?K:b]}})})},We=function(e,i){for(var r in e)e[r][0]&&e[r][0](i)},xe=function(e,i){if(!k.has(e)){var r=g(rr,i),a={},n=Ve.bind(l,e),t=R;if(k.set(e,[a,{},{},{},n]),!ue){var f=r.initFocus(setTimeout.bind(l,We.bind(l,a,De))),c=r.initReconnect(setTimeout.bind(l,We.bind(l,a,Ie)));t=function(){f&&f(),c&&c(),k.delete(e)}}return[e,n,t]}return[e,k.get(e)[4]]},ar=function(e,i,r,a,n){var t=r.errorRetryCount,f=n.retryCount,c=~~((Math.random()+.5)*(1<<(f<8?f:8)))*r.errorRetryInterval;!w(t)&&f>t||setTimeout(a,c,n)},Me=xe(new Map),Fe=Me[0],ir=Me[1],Ue=g({onLoadingSlow:R,onSuccess:R,onError:R,onErrorRetry:ar,onDiscarded:R,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Oe?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Oe?5e3:3e3,compare:function(e,i){return Z(e)==Z(i)},isPaused:function(){return!1},cache:Fe,mutate:ir,fallback:{}},er),Ne=function(e,i){var r=g(e,i);if(i){var a=e.use,n=e.fallback,t=i.use,f=i.fallback;a&&t&&(r.use=a.concat(t)),n&&f&&(r.fallback=g(n,f))}return r},Ee=(0,d.createContext)({}),ur=function(e){var i=e.value,r=Ne((0,d.useContext)(Ee),i),a=i&&i.provider,n=(0,d.useState)(function(){return a?xe(a(r.cache||Fe),i):l})[0];return n&&(r.cache=n[0],r.mutate=n[1]),G(function(){return n?n[2]:l},[]),(0,d.createElement)(Ee.Provider,g(e,{value:r}))},or=function(e,i){var r=(0,d.useState)({})[1],a=(0,d.useRef)(e),n=(0,d.useRef)({data:!1,error:!1,isValidating:!1}),t=(0,d.useCallback)(function(f){var c=!1,m=a.current;for(var u in f){var s=u;m[s]!==f[s]&&(m[s]=f[s],n.current[s]&&(c=!0))}c&&!i.current&&r({})},[]);return G(function(){a.current=e}),[a,n.current,t]},fr=function(e){return T(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},Le=function(){return g(Ue,(0,d.useContext)(Ee))},sr=function(e){return function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var n=Le(),t=fr(r),f=t[0],c=t[1],m=t[2],u=Ne(n,m),s=e,h=u.use;if(h)for(var v=h.length;v-- >0;)s=h[v](s);return s(f,c||u.fetcher,u)}},Pe=function(e,i,r){var a=i[e]||(i[e]=[]);return a.push(r),function(){var n=a.indexOf(r);n>=0&&(a[n]=a[a.length-1],a.pop())}},pe={dedupe:!0},cr=function(e,i,r){var a=r.cache,n=r.compare,t=r.fallbackData,f=r.suspense,c=r.revalidateOnMount,m=r.refreshInterval,u=r.refreshWhenHidden,s=r.refreshWhenOffline,h=k.get(a),v=h[0],x=h[1],oe=h[2],_=h[3],b=be(e),o=b[0],Q=b[1],H=b[2],M=(0,d.useRef)(!1),A=(0,d.useRef)(!1),K=(0,d.useRef)(o),L=(0,d.useRef)(i),j=(0,d.useRef)(r),E=function(){return j.current},ye=function(){return E().isVisible()&&E().isOnline()},fe=function(O){return a.set(H,g(a.get(H),O))},ke=a.get(o),dr=w(t)?r.fallback[o]:t,F=w(ke)?dr:ke,He=a.get(H)||{},X=He.error,Ke=!M.current,je=function(){return Ke&&!w(c)?c:E().isPaused()?!1:f?w(F)?!1:r.revalidateIfStale:w(F)||r.revalidateIfStale},hr=function(){return!o||!i?!1:He.isValidating?!0:Ke&&je()},Re=hr(),ge=or({data:F,error:X,isValidating:Re},A),$=ge[0],_e=ge[1],se=ge[2],q=(0,d.useCallback)(function(O){return ae(void 0,void 0,void 0,function(){var S,C,D,ee,re,V,p,P,W,Se,te,z,Ce;return y(this,function(ne){switch(ne.label){case 0:if(S=L.current,!o||!S||A.current||E().isPaused())return[2,!1];ee=!0,re=O||{},V=!_[o]||!re.dedupe,p=function(){return!A.current&&o===K.current&&M.current},P=function(){var qe=_[o];qe&&qe[1]===D&&delete _[o]},W={isValidating:!1},Se=function(){fe({isValidating:!1}),p()&&se(W)},fe({isValidating:!0}),se({isValidating:!0}),ne.label=1;case 1:return ne.trys.push([1,3,,4]),V&&(Y(a,o,$.current.data,$.current.error,!0),r.loadingTimeout&&!a.get(o)&&setTimeout(function(){ee&&p()&&E().onLoadingSlow(o,r)},r.loadingTimeout),_[o]=[S.apply(void 0,Q),we()]),Ce=_[o],C=Ce[0],D=Ce[1],[4,C];case 2:return C=ne.sent(),V&&setTimeout(P,r.dedupingInterval),!_[o]||_[o][1]!==D?(V&&p()&&E().onDiscarded(o),[2,!1]):(fe({error:l}),W.error=l,te=oe[o],!w(te)&&(D<=te[0]||D<=te[1]||te[1]===0)?(Se(),V&&p()&&E().onDiscarded(o),[2,!1]):(n($.current.data,C)?W.data=$.current.data:W.data=C,n(a.get(o),C)||a.set(o,C),V&&p()&&E().onSuccess(C,o,r),[3,4]));case 3:return z=ne.sent(),P(),E().isPaused()||(fe({error:z}),W.error=z,V&&p()&&(E().onError(z,o,r),(typeof r.shouldRetryOnError=="boolean"&&r.shouldRetryOnError||T(r.shouldRetryOnError)&&r.shouldRetryOnError(z))&&ye()&&E().onErrorRetry(z,o,r,q,{retryCount:(re.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return ee=!1,Se(),p()&&V&&Y(a,o,W.data,W.error,!1),[2,!0]}})})},[o]),mr=(0,d.useCallback)(Ve.bind(l,a,function(){return K.current}),[]);if(G(function(){L.current=i,j.current=r}),G(function(){if(!!o){var O=o!==K.current,S=q.bind(l,pe),C=function(p,P,W){se(g({error:P,isValidating:W},n($.current.data,p)?l:{data:p}))},D=0,ee=function(p){if(p==De){var P=Date.now();E().revalidateOnFocus&&P>D&&ye()&&(D=P+E().focusThrottleInterval,S())}else if(p==Ie)E().revalidateOnReconnect&&ye()&&S();else if(p==Ae)return q()},re=Pe(o,x,C),V=Pe(o,v,ee);return A.current=!1,K.current=o,M.current=!0,O&&se({data:F,error:X,isValidating:Re}),je()&&(w(F)||ue?S():tr(S)),function(){A.current=!0,re(),V()}}},[o,q]),G(function(){var O;function S(){var D=T(m)?m(F):m;D&&O!==-1&&(O=setTimeout(C,D))}function C(){!$.current.error&&(u||E().isVisible())&&(s||E().isOnline())?q(pe).then(S):S()}return S(),function(){O&&(clearTimeout(O),O=-1)}},[m,u,s,q]),(0,d.useDebugValue)(F),f&&w(F)&&o)throw L.current=i,j.current=r,A.current=!1,w(X)?q(pe):X;return{mutate:mr,get data(){return _e.data=!0,F},get error(){return _e.error=!0,X},get isValidating(){return _e.isValidating=!0,Re}}},lr=U.defineProperty(ur,"default",{value:Ue}),br=function(e){return be(e)[0]},vr=sr(cr)}}]);
