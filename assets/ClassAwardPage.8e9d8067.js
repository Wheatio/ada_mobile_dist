import{Q as R}from"./QSelect.f99525f5.js";import{Q as L}from"./QInput.192c0a05.js";import{Q as O}from"./QCheckbox.b4b147d5.js";import{b as V,a as $,Q as v}from"./QItem.ea354670.js";import{Q as b}from"./QMenu.308dbf8e.js";import{v as D,O as k,g as f,R as U,l as q,k as I,t as M,h as B,_ as P,o as d,I as u,w as i,a as A,d as m,c as j,M as T,F,e as C,Q as E,J as S,K as w}from"./index.093bcec8.js";import{Q as z}from"./QPage.43b01384.js";import{a as x}from"./awardAPI.ddf52161.js";import"./use-key-composition.ea1b4e82.js";import"./use-dark.8d7a4edf.js";import"./focus-manager.8e1b27e8.js";import"./selection.eefade81.js";import"./QDialog.40543d0d.js";import"./use-prevent-scroll.dbc91ef6.js";import"./use-timeout.07372709.js";import"./use-tick.e2711675.js";import"./focusout.7793a9df.js";import"./rtl.b51694b1.js";import"./format.a33550d6.js";const K={position:{type:String,default:"bottom-right",validator:t=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(t)},offset:{type:Array,validator:t=>t.length===2},expand:Boolean};function J(){const{props:t,proxy:{$q:e}}=M(),r=D(U,k);if(r===k)return console.error("QPageSticky needs to be child of QLayout"),k;const c=f(()=>{const a=t.position;return{top:a.indexOf("top")>-1,right:a.indexOf("right")>-1,bottom:a.indexOf("bottom")>-1,left:a.indexOf("left")>-1,vertical:a==="top"||a==="bottom",horizontal:a==="left"||a==="right"}}),s=f(()=>r.header.offset),l=f(()=>r.right.offset),o=f(()=>r.footer.offset),n=f(()=>r.left.offset),p=f(()=>{let a=0,h=0;const g=c.value,_=e.lang.rtl===!0?-1:1;g.top===!0&&s.value!==0?h=`${s.value}px`:g.bottom===!0&&o.value!==0&&(h=`${-o.value}px`),g.left===!0&&n.value!==0?a=`${_*n.value}px`:g.right===!0&&l.value!==0&&(a=`${-_*l.value}px`);const y={transform:`translate(${a}, ${h})`};return t.offset&&(y.margin=`${t.offset[1]}px ${t.offset[0]}px`),g.vertical===!0?(n.value!==0&&(y[e.lang.rtl===!0?"right":"left"]=`${n.value}px`),l.value!==0&&(y[e.lang.rtl===!0?"left":"right"]=`${l.value}px`)):g.horizontal===!0&&(s.value!==0&&(y.top=`${s.value}px`),o.value!==0&&(y.bottom=`${o.value}px`)),y}),N=f(()=>`q-page-sticky row flex-center fixed-${t.position} q-page-sticky--${t.expand===!0?"expand":"shrink"}`);function Q(a){const h=q(a.default);return I("div",{class:N.value,style:p.value},t.expand===!0?h:[I("div",h)])}return{$layout:r,getStickyContent:Q}}var X=B({name:"QPageSticky",props:K,setup(t,{slots:e}){const{getStickyContent:r}=J();return()=>r(e)}});const Y={props:["moduleType","category"],data(){return{fullClassLists:[],loadingClassLists:!0,classNameOptions:[],selectedClass:null,selectedStudentsArray:[],description:null,countOfRewardsAndSanctions:[],userRewardsAndSanctions:[],loading:!0}},methods:{award(){this.selectedStudentsArray.forEach((t,e)=>{t&&(console.log("awarding thing to",this.selectedStudentList[0].students[e]),this.awardCommendation(this.selectedStudentList[0].students[e].misId))}),this.$router.push("/award")},getAllStudents(){this.loadingClassLists=!0,x.getStudentsInAllClasses(this.processStudentsInClasses)},processStudentsInClasses(t){this.fullClassLists=t,console.log("class lists: ",this.fullClassLists);const e=t.map(r=>({label:r.code,value:r.misId}));this.classNameOptions=e,this.selectedClass=this.classNameOptions[0].value,this.setUpCheckBoxArray(),this.mergeRewardsIntoStudentArray(),console.log("merged class lists: ",this.fullClassLists)},getUserRewardsandSanctions(){this.loading=!0,x.getUserRewardsAndSanctions(this.processUserRewardsandSanctions,this.userId)},processUserRewardsandSanctions(t){this.userRewardsAndSanctions=t,this.countRewardsAndSanctions(),this.loading=!1},countRewardsAndSanctions(){const t=this.userRewardsAndSanctions,e={};t.forEach(c=>{const{mis_id:s,firstname:l,lastname:o,year:n,moduleType_id:p}=c;switch(e[s]||(e[s]={mis_id:s,firstName:l,lastName:o,year:n,Commendations:0,Distinctions:0,Copies:0,MinorConcerns:0,SeriousConcerns:0}),p){case 4:e[s].Commendations++;break;case 6:e[s].Distinctions++;break;case 7:e[s].Copies++;break;case 11:e[s].MinorConcerns++;break;case 12:e[s].SeriousConcerns++;break}});const r=Object.values(e);r.sort((c,s)=>c.year-s.year),console.log(r),this.countOfRewardsAndSanctions=r},mergeRewardsIntoStudentArray(){console.log("merging commendations test"),console.log("countOfRewardsAndSanctions: ",this.countOfRewardsAndSanctions);for(let t of this.fullClassLists){console.log("trying class ",t.id);for(let e of t.students){let r=this.countOfRewardsAndSanctions.find(c=>c.mis_id===e.misId);r&&(console.log("found one. ",e.misId,r),e.Commendations=r.Commendations,e.Copies=r.Copies,e.Distinctions=r.Distinctions,e.MinorConcerns=r.MinorConcerns,e.SeriousConcerns=r.SeriousConcerns)}}},setUpCheckBoxArray(){this.selectedStudentsArray=[];const t=[];for(let e=0;e<this.selectedStudentList[0].students.length;e++)t.push(!1);this.selectedStudentsArray=t,this.loadingClassLists=!1},awardCommendation(t){const e={date:new Date,categoryId:Number(this.category),moduleTypeId:Number(this.moduleType),teacherId:this.userDetails.isamsId,description:this.description,subjectId:this.currentSubject};console.log("awarding commendation: to ",t,e),x.postAward(this.awardSuccess,this.awardFail,t,e)},awardSuccess(t){this.$q.notify({position:"center",message:"successfully awarded",color:"green"}),this.selectedStudent=null,this.photo=null,this.description=null},awardFail(){this.$q.notify({position:"center",color:"red",message:"awarding failed, check your connection to the internet"})}},watch:{selectedClass(){this.setUpCheckBoxArray()}},computed:{userClasses(){return this.$store.getters["user/getUserClasses"]},selectedStudentList(){return this.fullClassLists.filter(e=>e.misId===this.selectedClass)},disableDueToValidation(){return!(this.selectedStudentsArray.includes(!0)&&this.description)},userSubjects(){return this.$store.getters["user/getUserClasses"]},userId(){return this.$store.getters["user/userId"]},userDetails(){return this.$store.getters["user/getUserDetails"]},awardCategories(){return this.$store.getters["awards/getAwardCategories"]},currentModule(){return this.awardCategories?this.awardCategories.find(e=>Number(e.id)===Number(this.moduleType)):[]},currentCategory(){return this.currentModule?this.currentModule.categories.find(e=>Number(e.id)===Number(this.category)):[]},currentSubject(){return Number(this.category)===33||Number(this.category)===38?63:Number(this.category)===35||Number(this.category)===39?62:this.userClasses[0].id}},mounted(){this.getAllStudents(),this.getUserRewardsandSanctions()}},G={class:"flex-auto q-my-lg",style:{height:"65vh","overflow-y":"auto"}},H={class:"q-gutter-xs"};function W(t,e,r,c,s,l){return d(),u(z,null,{default:i(()=>[A("div",null,[m(R,{class:"q-ma-sm",options:s.classNameOptions,outlined:"",standout:"","map-options":"","emit-value":"",modelValue:s.selectedClass,"onUpdate:modelValue":e[0]||(e[0]=o=>s.selectedClass=o)},null,8,["options","modelValue"]),m(L,{class:"q-mx-xl",outlined:"",label:"description (required)",modelValue:s.description,"onUpdate:modelValue":e[1]||(e[1]=o=>s.description=o),rules:[o=>!!o||"description is required"]},null,8,["modelValue","rules"])]),A("div",G,[s.loadingClassLists?C("",!0):(d(),u(V,{key:0,dense:""},{default:i(()=>[(d(!0),j(F,null,T(l.selectedStudentList[0].students,(o,n)=>(d(),u($,{key:o.id},{default:i(()=>[m(v,{side:""},{default:i(()=>[m(O,{modelValue:s.selectedStudentsArray[n],"onUpdate:modelValue":p=>s.selectedStudentsArray[n]=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),m(v,{clickable:"",onClick:p=>s.selectedStudentsArray[n]=!s.selectedStudentsArray[n]},{default:i(()=>[S(w(o.fullName),1)]),_:2},1032,["onClick"]),m(v,{side:""},{default:i(()=>[A("div",H,[o.Commendations>0?(d(),u(b,{key:0,dense:"",icon:"fas fa-star",color:"green"},{default:i(()=>[S(w(o.Commendations),1)]),_:2},1024)):C("",!0),o.Distinctions>0?(d(),u(b,{key:1,dense:"",icon:"fas fa-award",color:"purple"},{default:i(()=>[S(w(o.Distinctions),1)]),_:2},1024)):C("",!0),o.Copies>0?(d(),u(b,{key:2,dense:"",icon:"fas fa-jedi",color:"amber-5"},{default:i(()=>[S(w(o.Copies),1)]),_:2},1024)):C("",!0),o.MinorConcerns>0?(d(),u(b,{key:3,dense:"",icon:"fas fa-exclamation-triangle",color:"red"},{default:i(()=>[S(w(o.MinorConcerns),1)]),_:2},1024)):C("",!0),o.SeriousConcerns>0?(d(),u(b,{key:4,dense:"",icon:"fas fa-star-exclamation",color:"red"},{default:i(()=>[S(w(o.SeriousConcerns),1)]),_:2},1024)):C("",!0)])]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),m(X,{position:"bottom-right",class:"q-pa-md"},{default:i(()=>[m(E,{rounded:"",class:"q-pa-md",style:{width:"40vw"},color:"primary",label:"Award",onClick:l.award,disable:l.disableDueToValidation},null,8,["onClick","disable"])]),_:1})]),_:1})}var Ce=P(Y,[["render",W]]);export{Ce as default};
