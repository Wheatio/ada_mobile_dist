import{g as _,f as p,j as C,k as K,q as V,i as O,a8 as M,h as $,a9 as N,n as G,x as A,aa as J,ab as D,D as h,G as v,v as R,ac as Z,y as ee,ad as te,ae as oe,af as le,r as I,ag as ie,I as ne}from"./index.e55f829b.js";import{u as z,a as F}from"./use-dark.5d3b2fd8.js";var we=_({name:"QList",props:{...z,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=V(),l=F(e,o.proxy.$q),r=p(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:r.value},K(t.default))}});function pe(e,t,o){let l;function r(){l!==void 0&&(M.remove(l),l=void 0)}return O(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>o.value===!0,handler:t},M.add(l)}}}const he={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},be=["beforeShow","show","beforeHide","hide"];function ye({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:r,processOnMount:d}){const s=V(),{props:a,emit:c,proxy:L}=s;let u;function w(i){e.value===!0?y(i):b(i)}function b(i){if(a.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const n=a["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!0),u=i,A(()=>{u===i&&(u=void 0)})),(a.modelValue===null||n===!1)&&f(i)}function f(i){e.value!==!0&&(e.value=!0,c("beforeShow",i),l!==void 0?l(i):c("show",i))}function y(i){if(a.disable===!0)return;const n=a["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!1),u=i,A(()=>{u===i&&(u=void 0)})),(a.modelValue===null||n===!1)&&T(i)}function T(i){e.value!==!1&&(e.value=!1,c("beforeHide",i),r!==void 0?r(i):c("hide",i))}function E(i){a.disable===!0&&i===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):i===!0!==e.value&&(i===!0?f:T)(u)}$(()=>a.modelValue,E),o!==void 0&&N(s)===!0&&$(()=>L.$route.fullPath,()=>{o.value===!0&&e.value===!0&&y()}),d===!0&&G(()=>{E(a.modelValue)});const k={show:b,hide:y,toggle:w};return Object.assign(L,k),k}const re=[null,document,document.body,document.scrollingElement,document.documentElement];function ge(e,t){let o=J(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return re.includes(o)?window:o}function se(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ae(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let S;function qe(){if(S!==void 0)return S;const e=document.createElement("p"),t=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),S=o-l,S}function ue(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let g=0,B,H,q,P=!1,Q,U,X,m=null;function ce(e){de(e)&&R(e)}function de(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Z(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=o||l?e.deltaY:e.deltaX;for(let d=0;d<t.length;d++){const s=t[d];if(ue(s,l))return l?r<0&&s.scrollTop===0?!0:r>0&&s.scrollTop+s.clientHeight===s.scrollHeight:r<0&&s.scrollLeft===0?!0:r>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Y(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function x(e){P!==!0&&(P=!0,requestAnimationFrame(()=>{P=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function j(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(t);B=ae(window),H=se(window),Q=t.style.left,U=t.style.top,X=window.location.href,t.style.left=`-${B}px`,t.style.top=`-${H}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,h.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",x,v.passiveCapture),window.visualViewport.addEventListener("scroll",x,v.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Y,v.passiveCapture))}h.is.desktop===!0&&h.is.mac===!0&&window[`${e}EventListener`]("wheel",ce,v.notPassive),e==="remove"&&(h.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",x,v.passiveCapture),window.visualViewport.removeEventListener("scroll",x,v.passiveCapture)):window.removeEventListener("scroll",Y,v.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Q,t.style.top=U,window.location.href===X&&window.scrollTo(B,H),q=void 0)}function fe(e){let t="add";if(e===!0){if(g++,m!==null){clearTimeout(m),m=null;return}if(g>1)return}else{if(g===0||(g--,g>0))return;if(t="remove",h.is.ios===!0&&h.is.nativeMobile===!0){m!==null&&clearTimeout(m),m=setTimeout(()=>{j(t),m=null},100);return}}j(t)}function Le(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,fe(t))}}}function Te(){let e=null;const t=V();function o(){e!==null&&(clearTimeout(e),e=null)}return ee(o),O(o),{removeTimeout:o,registerTimeout(l,r){o(),te(t)===!1&&(e=setTimeout(l,r))}}}var Ee=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=p(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:o.value},K(t.default))}}),ke=_({name:"QItem",props:{...z,...oe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=V(),r=F(e,l),{hasLink:d,linkAttrs:s,linkClass:a,linkTag:c,navigateOnClick:L}=le(),u=I(null),w=I(null),b=p(()=>e.clickable===!0||d.value===!0||e.tag==="label"),f=p(()=>e.disable!==!0&&b.value===!0),y=p(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=p(()=>{if(e.insetLevel===void 0)return null;const n=l.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function E(n){f.value===!0&&(w.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===u.value?w.value.focus():document.activeElement===w.value&&u.value.focus()),L(n))}function k(n){if(f.value===!0&&ie(n,13)===!0){R(n),n.qKeyEvent=!0;const W=new MouseEvent("click",n);W.qKeyEvent=!0,u.value.dispatchEvent(W)}o("keyup",n)}function i(){const n=ne(t.default,[]);return f.value===!0&&n.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),n}return()=>{const n={ref:u,class:y.value,style:T.value,role:"listitem",onClick:E,onKeyup:k};return f.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,s.value)):b.value===!0&&(n["aria-disabled"]="true"),C(c.value,n,i())}}});export{Ee as Q,be as a,Te as b,ye as c,pe as d,Le as e,se as f,ge as g,ae as h,qe as i,ke as j,we as k,he as u};
