import{Q as u}from"./QImg.522e6591.js";import{Q as i}from"./QInput.84270e16.js";import{_ as h,o as n,c as a,a as r,d as l,w as m,Q as p,e as c,F as b,f as w}from"./index.a0f3755b.js";import"./use-key-composition.58400924.js";import"./use-dark.60048890.js";import"./focus-manager.8e1b27e8.js";var f="/mobile/assets/mclogo.c571daeb.jpeg";const v={data(){return{username:null,password:null,isPwd:!0}},methods:{submit(){const t={login:this.username,password:this.password};this.$store.dispatch("user/login",t).then(e=>{this.message=e.success===!0?"":e.message,e.success===!0&&this.$router.replace("/award")}).catch(e=>{console.warn(e)})},submitDesktop(){const t={login:this.username,password:this.password};this.$store.dispatch("user/login",t).then(e=>{this.message=e.success===!0?"":e.message,e.success===!0&&this.$router.replace("/award")}).catch(e=>{console.warn(e)})}},created(){this.$store.dispatch("user/tryAutoLogin").then(t=>{t===!0?this.$router.replace("/award"):this.$router.replace("/")})}},g={key:0,class:"column items-center"},V={class:"q-pa-md fixed-center full-width"},y={key:1},k={class:"q-pa-md fixed-center full-width"};function q(t,e,P,_,s,d){return n(),a(b,null,[t.$q.platform.is.mobile?(n(),a("div",g,[r("div",null,[l(u,{src:f,width:"50vw",class:"q-mt-xl"})]),r("div",V,[l(i,{class:"q-my-md",label:"username",outlined:"",filled:"",modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=o=>s.username=o)},null,8,["modelValue"]),l(i,{class:"q-mb-md",label:"password",outlined:"",type:s.isPwd?"password":"text",filled:"",modelValue:s.password,"onUpdate:modelValue":e[2]||(e[2]=o=>s.password=o)},{append:m(()=>[l(w,{name:s.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=o=>s.isPwd=!s.isPwd),color:"font"},null,8,["name"])]),_:1},8,["type","modelValue"]),l(p,{class:"q-pa-md full-width",color:"blue-10",label:"Log In",rounded:"",onClick:d.submit},null,8,["onClick"])])])):c("",!0),t.$q.platform.is.desktop?(n(),a("div",y,[r("div",null,[l(u,{src:f,width:"50vw",class:"q-mt-xl"})]),r("div",k,[l(i,{class:"q-my-md",label:"username",outlined:"",filled:"",modelValue:s.username,"onUpdate:modelValue":e[3]||(e[3]=o=>s.username=o)},null,8,["modelValue"]),l(i,{class:"q-mb-md",label:"password",outlined:"",type:s.isPwd?"password":"text",filled:"",modelValue:s.password,"onUpdate:modelValue":e[5]||(e[5]=o=>s.password=o)},{append:m(()=>[l(w,{name:s.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[4]||(e[4]=o=>s.isPwd=!s.isPwd),color:"font"},null,8,["name"])]),_:1},8,["type","modelValue"]),l(p,{class:"q-pa-md full-width",color:"blue-10",label:"Log In",rounded:"",onClick:d.submitDesktop},null,8,["onClick"])])])):c("",!0)],64)}var L=h(v,[["render",q]]);export{L as default};