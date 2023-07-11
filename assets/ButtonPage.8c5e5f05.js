import{f as d,g as Q,r as D,U,j as g,Q as H,k as P,Y as O,ah as R,e as c,q as I,m as S,H as p,J as T,V as E,_ as K,o as m,$ as w,w as s,a0 as J,a as b,d as o,c as W,a4 as Y,a5 as G,a1 as X,a2 as Z,ai as $,aj as ee}from"./index.2d484dc4.js";import{u as te,a as ae,c as le,k as oe,j as ne,Q as k}from"./QItem.366221c4.js";import{u as ie}from"./focus-manager.8e1b27e8.js";import{a as B,Q as se,b as re,c as ce}from"./awardAPI.e47f5bfe.js";import"./use-dark.41d9bb1f.js";const ue=["top","right","bottom","left"],de={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>ue.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function be(e,t){return{formClass:d(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:d(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:d(()=>{if(e.externalLabel===!0){const r=e.hideLabel===null?t.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(r===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const fe=["up","right","down","left"],ge=["left","center","right"];var h=Q({name:"QFab",props:{...de,...te,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>fe.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>ge.includes(e)}},emits:ae,setup(e,{slots:t}){const r=D(null),l=D(e.modelValue===!0),a=ie(),{proxy:{$q:n}}=I(),{formClass:i,labelProps:f}=be(e,l),v=d(()=>e.persistent!==!0),{hide:j,toggle:z}=le({showing:l,hideOnRouteChange:v}),C=d(()=>({opened:l.value})),M=d(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${i.value}`+(l.value===!0?" q-fab--opened":" q-fab--closed")),F=d(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${l.value===!0?"opened":"closed"}`),V=d(()=>{const u={id:a,role:"menu"};return l.value!==!0&&(u["aria-hidden"]="true"),u}),A=d(()=>`q-fab__icon-holder  q-fab__icon-holder--${l.value===!0?"opened":"closed"}`);function _(u,x){const y=t[u],q=`q-fab__${u} absolute-full`;return y===void 0?g(c,{class:q,name:e[x]||n.iconSet.fab[x]}):g("div",{class:q},y(C.value))}function N(){const u=[];return e.hideIcon!==!0&&u.push(g("div",{class:A.value},[_("icon","icon"),_("active-icon","activeIcon")])),(e.label!==""||t.label!==void 0)&&u[f.value.action](g("div",f.value.data,t.label!==void 0?t.label(C.value):[e.label])),O(t.tooltip,u)}return U(R,{showing:l,onChildClick(u){j(u),r.value!==null&&r.value.$el.focus()}}),()=>g("div",{class:M.value},[g(H,{ref:r,class:i.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":a,onClick:z},N),g("div",{class:F.value,...V.value},P(t.default))])}}),pe=Q({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:r}}=I(),l=S(T,p);if(l===p)return console.error("QPage needs to be a deep child of QLayout"),p;if(S(E,p)===p)return console.error("QPage needs to be child of QPageContainer"),p;const n=d(()=>{const f=(l.header.space===!0?l.header.size:0)+(l.footer.space===!0?l.footer.size:0);if(typeof e.styleFn=="function"){const v=l.isContainer.value===!0?l.containerHeight.value:r.screen.height;return e.styleFn(f,v)}return{minHeight:l.isContainer.value===!0?l.containerHeight.value-f+"px":r.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":r.screen.height-f+"px"}}),i=d(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:i.value,style:n.value},P(t.default))}});const he={data(){return{buttonData:[null,null,null,null,null],moduleTypesUsed:[{id:7,label:"Copy"},{id:4,label:"Commendation"},{id:6,label:"Distinction"},{id:11,label:"Minor Concern"},{id:12,label:"Serious Concern"}],rewardCategoriesLoaded:!1,openChooseCategory:!1,loadedCounter:0,selectedModule:null}},methods:{selectCategory(e){this.selectedModule=e,this.openChooseCategory=!0},award(e,t){this.$router.push(`/award/${e}/${t}`)},getCategories(e,t){B.getRewardCategories(this.processCategories,e,t)},processCategories(e,t,r){const l=this.getIcon(t),a=this.getColor(t),n=e.categories.map(i=>({...i,label:i.name,icon:l,color:a}));this.buttonData.splice(r,1,{id:t.id,label:t.label,icon:l,color:a,categories:n}),this.loadedCounter++},getClasses(){B.getClasses(this.processClasses)},processClasses(e){const t=[...new Map(e.map(r=>[r.name,r])).values()].map(({name:r,misId:l})=>({label:r,id:l}));this.$store.dispatch("user/setUserClasses",t)},getIcon(e){if(e.id===4)return"fas fa-star";if(e.id===6)return"fas fa-award";if(e.id===7)return"fas fa-jedi";if(e.id===11)return"fas fa-skull";if(e.id===12)return"fas fa-skull-crossbones"},getColor(e){if(e.id===4||e.id===6)return"green-7";if(e.id===7)return"amber-5";if(e.id===11)return"deep-orange-6";if(e.id===12)return"red-7"}},watch:{loadedCounter(e){e===5&&this.$store.dispatch("awards/setAwardCategories",this.buttonData)}},computed:{appName(){const e=Math.floor(Math.random()*this.appNames.length);return this.appNames[e]},categoriesLoaded(){return this.loadedCounter===5}},created(){this.moduleTypesUsed.forEach((e,t)=>{this.getCategories(e,t)}),this.getClasses()}},L=e=>($("data-v-5d787960"),e=e(),ee(),e),ve=L(()=>b("div",{style:{height:"5vh"}},null,-1)),me={class:"col flex justify-center"},Ce=L(()=>b("div",{style:{height:"20vh"}},null,-1)),_e={class:"row q-my-lg"},xe={class:"col flex justify-center"},ye={class:"col flex justify-center"},qe={class:"row q-my-xl"},De={class:"col flex justify-center"},Se={class:"col flex justify-center"};function we(e,t,r,l,a,n){return n.categoriesLoaded?(m(),w(pe,{key:0,padding:""},{default:s(()=>[b("div",null,[ve,b("div",me,[o(h,{class:"q-ma-md",color:n.getColor(a.buttonData[0]),direction:"up",padding:"30px",label:a.buttonData[0].label,"external-label":"","label-position":"top","hide-label":!1,glossy:"",onClick:t[0]||(t[0]=i=>n.award(a.buttonData[0].id,22))},{icon:s(()=>[o(c,{name:a.buttonData[0].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),"active-icon":s(()=>[o(c,{name:a.buttonData[0].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),_:1},8,["color","label"])]),Ce,b("div",_e,[b("div",xe,[o(h,{class:"q-ma-md",color:n.getColor(a.buttonData[1]),direction:"up",padding:"30px",label:a.buttonData[1].label,"external-label":"","label-position":"top","hide-label":!1,onClick:t[1]||(t[1]=i=>n.selectCategory(a.buttonData[1]))},{icon:s(()=>[o(c,{name:a.buttonData[1].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),"active-icon":s(()=>[o(c,{name:a.buttonData[1].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),_:1},8,["color","label"])]),b("div",ye,[o(h,{class:"q-ma-md",color:n.getColor(a.buttonData[2]),direction:"up",padding:"30px",label:a.buttonData[2].label,"external-label":"","label-position":"top","hide-label":!1,onClick:t[2]||(t[2]=i=>n.award(a.buttonData[2].id,21))},{icon:s(()=>[o(c,{name:a.buttonData[2].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),"active-icon":s(()=>[o(c,{name:a.buttonData[2].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),_:1},8,["color","label"])])]),b("div",qe,[b("div",De,[o(h,{class:"q-ma-md",color:n.getColor(a.buttonData[3]),direction:"up",padding:"30px",label:a.buttonData[3].label,"external-label":"","label-position":"top","hide-label":!1,onClick:t[3]||(t[3]=i=>n.selectCategory(a.buttonData[3]))},{icon:s(()=>[o(c,{name:a.buttonData[3].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),"active-icon":s(()=>[o(c,{name:a.buttonData[3].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),_:1},8,["color","label"])]),b("div",Se,[o(h,{class:"q-ma-md",color:n.getColor(a.buttonData[4]),direction:"up",padding:"30px",label:a.buttonData[4].label,"external-label":"","label-position":"top","hide-label":!1,onClick:t[4]||(t[4]=i=>n.selectCategory(a.buttonData[4]))},{icon:s(()=>[o(c,{name:a.buttonData[4].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),"active-icon":s(()=>[o(c,{name:a.buttonData[4].icon,size:"50px",style:{position:"relative",left:"-13px",top:"-13px"}},null,8,["name"])]),_:1},8,["color","label"])])])]),o(ce,{modelValue:a.openChooseCategory,"onUpdate:modelValue":t[5]||(t[5]=i=>a.openChooseCategory=i)},{default:s(()=>[o(se,null,{default:s(()=>[o(re,null,{default:s(()=>[o(oe,null,{default:s(()=>[(m(!0),W(G,null,Y(a.selectedModule.categories,i=>(m(),w(ne,{key:i.id,clickable:"",onClick:f=>n.award(a.selectedModule.id,i.id)},{default:s(()=>[o(k,{side:""},{default:s(()=>[o(c,{name:this.selectedModule.icon},null,8,["name"])]),_:1}),o(k,null,{default:s(()=>[X(Z(i.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):J("",!0)}var Le=K(he,[["render",we],["__scopeId","data-v-5d787960"]]);export{Le as default};
