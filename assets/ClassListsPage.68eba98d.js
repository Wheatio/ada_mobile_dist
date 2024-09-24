import{Q as x}from"./QBtnToggle.80a12644.js";import{h as D,g as S,k as V,f as Q,_ as k,aC as N,o as r,I as f,w as t,d as a,Q as U,a as c,c as C,M as b,F as h,J as p,K as v}from"./index.0835d3cd.js";import{u as q,a as G,b as T,Q as _}from"./QCheckbox.6bb5f927.js";import{Q as A}from"./QTable.87be2bec.js";import{Q as I,a as L}from"./QCard.31e04df3.js";import{b as g,a as y,Q as d}from"./QItem.b5da8b2b.js";import{Q as O}from"./QDialog.88cddf69.js";import{Q as M}from"./QPage.aea7938e.js";import{d as P}from"./dashboardAPI.5af1c388.js";import"./QBtnGroup.f2b8ed24.js";import"./use-key-composition.c69b71c6.js";import"./use-dark.e535c535.js";import"./focus-manager.8e1b27e8.js";import"./QSelect.9981794d.js";import"./QMenu.9c0ae8ce.js";import"./selection.d17b1b0c.js";import"./focusout.fbc56a61.js";import"./use-tick.a35a1ec4.js";import"./use-timeout.275153e9.js";import"./format.1c072718.js";import"./rtl.b51694b1.js";import"./use-prevent-scroll.f779b089.js";var w=D({name:"QToggle",props:{...q,icon:String,iconColor:String},emits:G,setup(l){function e(o,B){const i=S(()=>(o.value===!0?l.checkedIcon:B.value===!0?l.indeterminateIcon:l.uncheckedIcon)||l.icon),u=S(()=>o.value===!0?l.iconColor:null);return()=>[V("div",{class:"q-toggle__track"}),V("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},i.value!==void 0?[V(Q,{name:i.value,color:u.value})]:void 0)]}return T("toggle",e)}});const F={data(){return{item:null,tabs:null,tableData:[],pagination:{rowsPerPage:0},visibleColumns:["teacher1","teacher2","commendations","distinctions","minorConcerns","seriousConcerns","midyisBand","midyisScore","alisBaselineGcse","alisBaselineTest"],visibleColumnGroups:{baseline:!0,rewards:!0},btnToggleOptions:[{label:"Shell",value:9},{label:"Remove",value:10},{label:"Hundred",value:11},{label:"Lower 6th",value:12},{label:"Upper 6th",value:13},{label:"All",value:0}],selectedButton:null,columns:[{name:"forename",label:"First Name",field:"firstName",align:"left",required:!0},{name:"lastname",label:"Last Name",field:"lastName",align:"left",required:!0},{name:"house",label:"House",field:"house",align:"left",required:!0},{name:"class",label:"Class",field:"className",sortable:!0,required:!0},{name:"teacher1",label:"Teacher",field:"teacher1Initials",sortable:!0,required:!0},{name:"teacher2",label:"Teacher 2",field:"teacher2Initials",sortable:!0,required:!1},{name:"commendations",label:"Comm",field:"commendations",sortable:!0},{name:"distinctions",label:"Dist",field:"distinctions",sortable:!0},{name:"minorConcerns",label:"MC",field:"minorConcerns",sortable:!0},{name:"seriousConcerns",label:"SC",field:"seriousConcerns",sortable:!0},{name:"midyisBand",label:"Midyis Band",field:"midyisBand",sortable:!0,required:!1},{name:"midyisScore",label:"Midyis Score",field:"midyisScore",sortable:!0,required:!1},{name:"alisBaselineGcse",label:"Alis GCSE",field:"alisBaselineGcse",sortable:!0,required:!1},{name:"alisBaselineTest",label:"Alis Test",field:"alisBaselineTest",sortable:!0,required:!1}],classListData:[],filteredClassListData:[],classListArray:[],shellClasses:[],removeClasses:[],hundredClasses:[],l6Classes:[],u6Classes:[],selectedClasses:[],filtersOpen:!1}},props:["title"],methods:{generateRowKey(l){return`${l.studentMisId}-${l.className}`},getClassListData(){P.getHodClassListData(this.globalSubject,this.processClassListData)},processClassListData(l){this.classListData=l,this.filteredClassListData=l,console.log(l),this.createListOfClasses()},createListOfClasses(){let l=new Map;this.classListData.forEach(e=>{let o=`${e.className}-${e.year}`;l.has(o)||l.set(o,{className:e.className,year:e.year,selected:!1})}),this.classListArray=Array.from(l.values()),this.shellClasses=this.classListArray.filter(e=>e.year===9),this.removeClasses=this.classListArray.filter(e=>e.year===10),this.hundredClasses=this.classListArray.filter(e=>e.year===11),this.l6Classes=this.classListArray.filter(e=>e.year===12),this.u6Classes=this.classListArray.filter(e=>e.year===13)},updateSelectedClasses(l){if(l.selected)this.selectedClasses.includes(l.className)||this.selectedClasses.push(l.className);else{const e=this.selectedClasses.indexOf(l.className);e>-1&&this.selectedClasses.splice(e,1)}this.filteredClassListData=this.classListData.filter(e=>this.selectedClasses.includes(e.className))},updateVisibleColumns(){const l=["midyisBand","midyisScore","alisBaselineGcse","alisBaselineTest"],e=["commendations","distinctions","copies","minorConcerns","seriousConcerns"];this.visibleColumns=this.visibleColumns.filter(o=>!l.includes(o)&&!e.includes(o)),this.visibleColumnGroups.baseline&&(this.visibleColumns=this.visibleColumns.concat(l.filter(o=>!this.visibleColumns.includes(o)))),this.visibleColumnGroups.rewards&&(this.visibleColumns=this.visibleColumns.concat(e.filter(o=>!this.visibleColumns.includes(o))))}},computed:{...N({globalSubject:"user/getGlobalSubject"}),computedColumns(){return this.columns.filter(l=>this.visibleColumns.includes(l.name))}},watch:{globalSubject(){this.getClassListData()},selectedButton(l){if(!l){this.filteredClassListData=this.classListData;return}this.filteredClassListData=this.classListData.filter(o=>o.year===l);const e=["alisBaselineGcse","alisBaselineTest","teacher2"];l>=12?e.forEach(o=>{this.visibleColumns.includes(o)||this.visibleColumns.push(o)}):l<=11&&(this.visibleColumns=this.visibleColumns.filter(o=>!e.includes(o)))}},mounted(){this.getClassListData()}},z=c("div",{class:"col-2 q-table__title"},"Column Filters",-1),E={class:"col"},j=c("div",{class:"text-weight-bold"},"Class Filters",-1),R={class:"row"},H={class:"col-2.4"},K={class:"col-2.4"},J={class:"col-2.4"},Y={class:"col-2.4"},W={class:"col-2.4"};function X(l,e,o,B,i,u){return r(),f(M,null,{default:t(()=>[a(x,{flat:"",class:"q-ma-sm",label:"filter",options:i.btnToggleOptions,modelValue:i.selectedButton,"onUpdate:modelValue":e[0]||(e[0]=s=>i.selectedButton=s)},null,8,["options","modelValue"]),a(U,{class:"q-ml-xl",label:"Class Filters",icon:"fa-regular fa-filters",onClick:e[1]||(e[1]=s=>i.filtersOpen=!0)}),a(A,{class:"my-sticky-header-column-table",columns:i.columns,rows:i.filteredClassListData,dense:"",pagination:i.pagination,"visible-columns":i.visibleColumns,"row-key":u.generateRowKey},{top:t(()=>[z,c("div",E,[a(w,{modelValue:i.visibleColumnGroups.baseline,"onUpdate:modelValue":[e[2]||(e[2]=s=>i.visibleColumnGroups.baseline=s),u.updateVisibleColumns],label:"Baseline Data"},null,8,["modelValue","onUpdate:modelValue"]),a(w,{modelValue:i.visibleColumnGroups.rewards,"onUpdate:modelValue":[e[3]||(e[3]=s=>i.visibleColumnGroups.rewards=s),u.updateVisibleColumns],label:"Rewards & Sanctions"},null,8,["modelValue","onUpdate:modelValue"])])]),_:1},8,["columns","rows","pagination","visible-columns","row-key"]),a(O,{modelValue:i.filtersOpen,"onUpdate:modelValue":e[4]||(e[4]=s=>i.filtersOpen=s)},{default:t(()=>[a(I,{style:{width:"80vw","max-width":"900px !important"}},{default:t(()=>[a(L,null,{default:t(()=>[j]),_:1}),a(L,null,{default:t(()=>[c("div",R,[c("div",H,[a(g,{dense:""},{default:t(()=>[(r(!0),C(h,null,b(i.shellClasses,(s,m)=>(r(),f(y,{key:m},{default:t(()=>[a(d,{side:""},{default:t(()=>[a(_,{dense:"",size:"xs",modelValue:s.selected,"onUpdate:modelValue":[n=>s.selected=n,n=>u.updateSelectedClasses(s)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,null,{default:t(()=>[p(v(s.className),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),c("div",K,[a(g,{dense:""},{default:t(()=>[(r(!0),C(h,null,b(i.removeClasses,(s,m)=>(r(),f(y,{key:m},{default:t(()=>[a(d,{side:""},{default:t(()=>[a(_,{dense:"",size:"xs",modelValue:s.selected,"onUpdate:modelValue":[n=>s.selected=n,n=>u.updateSelectedClasses(s)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,null,{default:t(()=>[p(v(s.className),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),c("div",J,[a(g,{dense:""},{default:t(()=>[(r(!0),C(h,null,b(i.hundredClasses,(s,m)=>(r(),f(y,{key:m},{default:t(()=>[a(d,{side:""},{default:t(()=>[a(_,{dense:"",size:"xs",modelValue:s.selected,"onUpdate:modelValue":[n=>s.selected=n,n=>u.updateSelectedClasses(s)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,null,{default:t(()=>[p(v(s.className),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),c("div",Y,[a(g,{dense:""},{default:t(()=>[(r(!0),C(h,null,b(i.l6Classes,(s,m)=>(r(),f(y,{key:m},{default:t(()=>[a(d,{side:""},{default:t(()=>[a(_,{dense:"",size:"xs",modelValue:s.selected,"onUpdate:modelValue":[n=>s.selected=n,n=>u.updateSelectedClasses(s)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,null,{default:t(()=>[p(v(s.className),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),c("div",W,[a(g,{dense:""},{default:t(()=>[(r(!0),C(h,null,b(i.u6Classes,(s,m)=>(r(),f(y,{key:m},{default:t(()=>[a(d,{side:""},{default:t(()=>[a(_,{dense:"",size:"xs",modelValue:s.selected,"onUpdate:modelValue":[n=>s.selected=n,n=>u.updateSelectedClasses(s)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,null,{default:t(()=>[p(v(s.className),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])])]),_:1}),a(L)]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ge=k(F,[["render",X]]);export{ge as default};
