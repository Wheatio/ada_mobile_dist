import{Q as r}from"./QTable.87be2bec.js";import{Q as i}from"./QPage.aea7938e.js";import{_ as n,o as s,I as m,w as h,d as p}from"./index.0835d3cd.js";import"./use-dark.e535c535.js";import"./QItem.b5da8b2b.js";import"./QSelect.9981794d.js";import"./use-key-composition.c69b71c6.js";import"./focus-manager.8e1b27e8.js";import"./QMenu.9c0ae8ce.js";import"./selection.d17b1b0c.js";import"./focusout.fbc56a61.js";import"./use-tick.a35a1ec4.js";import"./use-timeout.275153e9.js";import"./format.1c072718.js";import"./QDialog.88cddf69.js";import"./use-prevent-scroll.f779b089.js";import"./rtl.b51694b1.js";import"./QCheckbox.6bb5f927.js";const d={data(){return{item:null,tabs:null,tableData:[],columns:[{name:"forename",label:"First Name",field:"firstName"},{name:"lastname",label:"Last Name",field:"lastName"},{name:"point1",label:"Data Point 1",field:"dp1"},{name:"point2",label:"Data Point 2",field:"dp2"},{name:"point3",label:"Data Point 3",field:"dp3"},{name:"point4",label:"Data Point 4",field:"dp4"},{name:"point5",label:"Data Point 5",field:"dp5"}],rows:[],firstNames:["Liam","Emma","Noah","Olivia","William","Ava","James","Isabella","Oliver","Sophia","Benjamin","Charlotte","Elijah","Amelia","Lucas","Mia","Mason","Harper","Logan","Evelyn","Alexander","Abigail","Ethan","Emily","Jacob","Ella","Michael","Elizabeth","Daniel","Camila","Henry","Luna","Jackson","Sofia","Sebastian","Avery","Aiden","Mila","Matthew","Aria","Samuel","Scarlett","David","Penelope","Joseph","Layla","Carter","Chloe","Owen","Victoria","Wyatt","Madison","John","Eleanor","Jack","Grace","Luke","Nora","Jayden","Riley","Dylan","Zoey","Grayson","Hannah","Levi","Hazel","Isaac","Lily","Gabriel","Ellie","Julian","Violet","Mateo","Lillian","Anthony","Zoe","Jaxon","Stella","Lincoln","Aurora","Joshua","Natalie","Christopher","Emilia","Andrew","Everly","Theodore","Leah","Caleb","Aubrey","Ryan","Willow","Asher","Addison","Nathan","Lucy","Thomas","Audrey","Leo","Bella","Aaliyah","Alejandro","Amara","Arjun","Asha","Bao","Carmen","Dante","Diego","Eleni"],lastNames:["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts","Gomez","Phillips","Evans","Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes","Stewart","Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper","Peterson","Bailey","Reed","Kelly","Howard","Ramos","Kim","Cox","Ward","Richardson","Watson","Brooks","Chavez","Wood","James","Bennett","Gray","Mendoza","Ruiz","Hughes","Price","Alvarez","Castillo","Sanders","Patel","Myers","Long","Ross","Foster","Jimenez"]}},props:["title"],methods:{populateRows(){this.rows=[],console.log("Populating Rows");for(let a=0;a<40;a++){const o=this.firstNames[Math.floor(Math.random()*this.firstNames.length)],e=this.lastNames[Math.floor(Math.random()*this.lastNames.length)],t={firstName:o,lastName:e,dp1:Math.floor(Math.random()*100),dp2:Math.floor(Math.random()*100),dp3:Math.floor(Math.random()*100),dp4:Math.floor(Math.random()*100),dp5:Math.floor(Math.random()*100)};this.rows.push(t)}}},watch:{title(){this.populateRows()}},mounted(){this.populateRows()}};function u(a,o,e,t,l,c){return s(),m(i,null,{default:h(()=>[p(r,{title:e.title,columns:l.columns,rows:l.rows},null,8,["title","columns","rows"])]),_:1})}var S=n(d,[["render",u]]);export{S as default};
