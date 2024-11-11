import{E as Ce,W as Ne,z as v,K as Ae,A as Ge,L as De,S as Se,B as C,N as Be,_ as Ue,M as ye,l as Ve,o as u,c as p,a as t,b as _,G as e,n as y,q as te,w as se,e as k,t as r,i as c,I as ze,g as z,F as Fe,aa as Te,k as F,P as We,Q as xe}from"./index-3b5f40df.js";import{s as b}from"./dropdown.esm-755470ff.js";import{s as D}from"./inputtext.esm-cc037207.js";import{s as $e}from"./dialog.esm-d99cc5c1.js";import{s as ke}from"./calendar.esm-b5bf69ae.js";import{L as Pe}from"./Loading-2641aeba.js";import{s as we,a as Ye}from"./tabpanel.esm-a6f4aeda.js";import{s as Le}from"./confirmdialog.esm-aa3d5ada.js";import{u as Ie,r as $,i as Oe}from"./index-3fe508e8.js";import{u as Re}from"./store-06ce5c2d.js";import{u as qe}from"./globalStore-67d1e25b.js";import{E as Ee}from"./serverValidation-35937a0f.js";import{w as He}from"./zscore-9e188e39.js";import{i as Je}from"./mm-phone-validate-fed13507.js";import"./index.esm-21d8f28e.js";const Ke=()=>{const N=Re(),A=qe(),o=Ce(),T=Ne(),m=v(!0),h=v(!1),R=new Ee,q=v(0),ae=Ae(),le=v([{code:"Yangon",name:"Yangon"}]),S=v([]),E=v([]),W=v(!0),H=v([]),M=v([]),G=v(),O=v([]),J=v([]),K=v([]),B=v([]),Z=v([]),j=v([]),x=v([]),P=v([]),f=v([]),d=v([]),w=v([]),Q=v([]),ie=v([{name:"3",code:3},{name:"6",code:6},{name:"9",code:9}]),ne=async()=>{h.value=!0,await A.fetchAllEnums();const a=A.getAllEnumResponse;if(a){const{options:g}=a.data;H.value=g.screening_type.map(i=>({name:i,code:i})),M.value=g.type.map(i=>({name:i,code:i})),G.value=g.gender.map(i=>({name:i,code:i})),O.value=g.age_group.map(i=>({name:i,code:i})),J.value=g.yes_no.map(i=>({name:i,code:i})),K.value=g.donar.map(i=>({name:i,code:i})),B.value=g.wfh_zscore.map(i=>({name:i,code:i})),j.value=g.bilateral_pitting_odema.map(i=>({name:i,code:i})),Z.value=g.appetite_test.map(i=>({name:i,code:i})),x.value=g.immunization_status.map(i=>({name:i,code:i})),P.value=g.type_of_case.map(i=>({name:i,code:i})),f.value=g.case_category.map(i=>({name:i,code:i,visible:!0})),d.value=g.admission_criteria.map(i=>({name:i,code:i,visible:!0})),w.value=g.criteria_group.map(i=>({name:i,code:i,visible:!0})),Q.value=g.food.map(i=>({name:i,code:i}))}h.value=!1},re=async()=>{h.value=!0,await A.fetchAllTownship();const a=A.getAllTownshipResponse;if(a){const{options:g}=a.data;S.value=g}h.value=!1},Y=async()=>{W.value=!0,await A.fetchAllWards({township:s.township});const a=A.getAllWardResponse;a&&(E.value=a,W.value=!1)},U=()=>{const a="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png";return new Promise(g=>{var i=new Image;i.onload=function(){g(!0)},i.onerror=function(){g(!1)};const l=a+"?t="+new Date().getTime();i.timeout=5e3,i.src=l})};Ge(async()=>{await U().then(a=>{m.value=a}),m.value=T.query.online!==void 0?JSON.parse(T.query.online):m.value,ne(),re(),Y()}),De(()=>{N.$dispose()});const L=JSON.parse(localStorage.getItem("userData")),s=Se({am_number:"",screening_type:"",state:"Yangon",township:L.township,village:L.ward_villages!=null?JSON.parse(L.ward_villages)[0]:"",patient_name:"",type:"",gender:"",date_of_birth:"",age_group:"",age_month:"",age_year:"",disability:"",phone_number:"",father_name:"",husband_name:"",receiving_cash_assistant:"",yes_which_donar:"",muac_cm:0,weight_kg:0,height_cm:0,wfh_zscore:"",immunization_status:"",deworming:"",vit_a_supplement:"",type_of_case:"",case_category:"",admission_criteria:"",criteria_group:"",date_of_admission:null,admitted_year:null,admitted_month:null,food:"",food_kg:""});function I(){const a=["John","Jane","Sarah","Michael","Emily","David","Anna","James","Laura","Robert"],g=["Doe","Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Wilson"],i=a[Math.floor(Math.random()*a.length)],l=g[Math.floor(Math.random()*g.length)];return`${i} ${l}`}function de(){s.screening_type="Active Screening",s.state="Yangon",s.township="Hlaingtharya",s.village="No (9) Ward",s.patient_name=I(),s.type="Girl",s.gender=Math.random()>.5?"Male":"Female",s.date_of_birth="1990-01-01",s.age_group="12-17 Years",s.disability=Math.random()>.5?"Yes":"No",s.phone_number="09912345678",s.father_name=I(),s.husband_name=I(),s.receiving_cash_assistant=Math.random()>.5?"Yes":"No",s.yes_which_donar=Math.random()>.5?"WFP":"Other",s.muac_cm=(Math.random()*(30-8)+8).toFixed(1),s.weight_kg=(Math.random()*(25-1.5)+1.5).toFixed(1),s.height_cm=(Math.random()*(120-45)+45).toFixed(1),s.wfh_zscore=Math.random()>.5?"SAM":"MAM",s.immunization_status=Math.random()>.5?"Ongoing":"Complete",s.deworming=Math.random()>.5?"Yes":"No",s.vit_a_supplement=Math.random()>.5?"Yes":"No",s.type_of_case=Math.random()>.5?"New":"Old",s.case_category=Math.random()>.5?"MAM Refer to SFP":"SAM Refer to OTP",s.criteria_group=Math.random()>.5?"New":"Relapse",s.date_of_admission=new Date().toISOString().slice(0,10),s.admitted_year=new Date().getFullYear(),s.admitted_month=new Date().getMonth()+1}const ue={am_number:{},screening_type:{required:$},state:{required:$},township:{required:$},village:{required:$},patient_name:{required:$},type:{required:$},gender:{required:$},date_of_birth:{required:$},age_group:{required:$},age_month:{},age_year:{},disability:{required:$},phone_number:{required:$},father_name:{},husband_name:{},receiving_cash_assistant:{},yes_which_donar:{},muac_cm:{},weight_kg:{},height_cm:{},wfh_zscore:{},immunization_status:{},deworming:{},vit_a_supplement:{},type_of_case:{},case_category:{},admission_criteria:{},criteria_group:{},date_of_admission:{required:$},admitted_year:{integer:Oe,required:$},admitted_month:{integer:Oe,required:$},food:{},food_kg:{}},X=v(!1),ee=Ie(ue,s),ce=a=>{if(X.value=!0,console.log("submit"),!a){q.value=0;return}h.value||me()},me=async()=>{R.clear(),h.value=!0;try{await N.add({am_number:s.am_number,screening_type:s.screening_type,state:s.state,township:s.township,village:s.village,patient_name:s.patient_name,type:s.type,gender:s.gender,date_of_birth:s.date_of_birth,age_month:s.age_month,age_year:s.age_year,age_group:s.age_group,disability:s.disability,phone_number:s.phone_number,father_name:s.father_name,husband_name:s.husband_name,receiving_cash_assistant:s.receiving_cash_assistant,yes_which_donar:s.yes_which_donar,muac_cm:s.muac_cm,weight_kg:s.weight_kg,height_cm:s.height_cm,wfh_zscore:s.wfh_zscore,bilateral_pitting_oedema:s.bilateral_pitting_oedema,medical_illness_complication:s.medical_illness_complication,appetite_test:s.appetite_test,immunization_status:s.immunization_status,deworming:s.deworming,vit_a_supplement:s.vit_a_supplement,type_of_case:s.type_of_case,case_category:s.case_category,admission_criteria:s.admission_criteria,criteria_group:s.criteria_group,date_of_admission:s.date_of_admission,admitted_year:s.admitted_year,admitted_month:s.admitted_month,food:s.food,food_kg:s.food_kg},m.value),N.getAddResponse&&(V("Case for patient "+s.patient_name+" is created.","success"),o.push({name:"caseList",query:{online:m.value}})),h.value=!1}catch(a){h.value=!1,a.status===422&&V(a.data.message,1e4)}};C([m],async()=>{m.value==!0&&await U().then(a=>{m.value=a}),console.log(m.value),o.push({path:T.path,query:{...T.query,online:m.value}})}),C(()=>s.township,()=>{Y()}),C(()=>s.date_of_admission,()=>{he()}),C(()=>s.date_of_birth,()=>{if(s.date_of_birth==null)return;const a=new Date(s.date_of_birth),g=new Date;let i=(g.getFullYear()-a.getFullYear())*12;if(i-=a.getMonth(),i+=g.getMonth(),g.getDate()<a.getDate()&&i--,i<6){V("At lease, 6 Months of Age is required"),s.date_of_birth=null;return}if(["Pregnant Woman or Girl","Breastfeeding Woman or Girl"].includes(s.type)&&parseInt(i/12)<12){V("At lease, 12 years of Age is required if type is Pregnant Woman or Girl or Breastfeeding Woman or Girl. Please change Date of birth."),s.date_of_birth=null;return}if(["Boy","Girl"].includes(s.type)?(s.age_month=i,s.age_year=""):(s.age_year=parseInt(i/12),s.age_month=""),i>=6&&i<=23){s.age_group=O.value[0].name;return}else if(i>=24&&i<=59){s.age_group=O.value[1].name;return}else if(i>=12*12&&i<=17*12){s.age_group=O.value[2].name;return}else if(i>=18*12&&i<=59*12){s.age_group=O.value[3].name;return}else s.age_group=""}),C(()=>s.type,()=>{switch(s.type){case M.value[0].name:s.gender=G.value[0].name;break;case M.value[1].name:s.gender=G.value[1].name;break;case M.value[2].name:s.gender=G.value[1].name,oe();break;case M.value[3].name:s.gender=G.value[1].name,oe();break}}),C(()=>[s.age_group,s.height_cm,s.weight_kg],()=>{pe()}),C(()=>[s.type_of_case],()=>{_e()}),C(()=>[s.criteria_group],()=>{ge()}),C(()=>[s.case_category],()=>{fe()});const oe=()=>{s.father_name="",s.muac_cm=0,s.weight_kg=0,s.height_cm=0,s.wfh_zscore="",s.appetite_test="",s.immunization_status="",s.vit_a_supplement=""},pe=()=>{if(O.value.some(g=>g.name==s.age_group)){if(s.weight_kg!==0&&s.height_cm!==0){const g=s.age_group===O.value[0].name?"m24under":"m24to59",i=s.type===M.value[0].name?"boy":"girl",l=Math.round(s.height_cm),be=He[g][i].find(Me=>Me.length===l);if(be!==void 0)if(s.weight_kg<be.minus3){s.wfh_zscore=B.value[0].name;return}else if(s.weight_kg<be.minus2){s.wfh_zscore=B.value[1].name;return}else s.wfh_zscore=B.value[2].name}}else V("Firstly, you need to set Date of Birth, then Age Group will be defined and WFH ZScore will be automatically selected","warn")},_e=()=>{switch(s.type_of_case){case"New":w.value[0].visible=!0,w.value[1].visible=!1,w.value[2].visible=!1,w.value[3].visible=!1,s.criteria_group="New";break;case"Old":s.criteria_group="Re-admission",w.value[0].visible=!1,w.value[1].visible=!0,w.value[2].visible=!0,w.value[3].visible=!0;break}},ge=()=>{switch(s.criteria_group){case"New":s.case_category="MAM New",f.value[0].visible=!0,f.value[1].visible=!1,f.value[2].visible=!1,f.value[3].visible=!1,f.value[4].visible=!1;break;case"Re-admission":s.case_category="MAM Old",f.value[0].visible=!1,f.value[1].visible=!0,f.value[2].visible=!0,f.value[3].visible=!1,f.value[4].visible=!1;break;case"Relapse":s.case_category="Relapse",f.value[0].visible=!1,f.value[1].visible=!1,f.value[2].visible=!1,f.value[3].visible=!0,f.value[4].visible=!1;break;case"Transfer":s.case_category="Transfer",f.value[0].visible=!1,f.value[1].visible=!1,f.value[2].visible=!1,f.value[3].visible=!1,f.value[4].visible=!0;break}},fe=()=>{switch(s.case_category){case"MAM New":s.admission_criteria="New",d.value[0].visible=!0,d.value[1].visible=!1,d.value[2].visible=!1,d.value[3].visible=!1,d.value[4].visible=!1,d.value[5].visible=!1,d.value[6].visible=!1,d.value[7].visible=!1,d.value[8].visible=!1;break;case"MAM Old":s.admission_criteria="Return from Cured within 2 month",d.value[0].visible=!1,d.value[1].visible=!0,d.value[2].visible=!0,d.value[3].visible=!1,d.value[4].visible=!1,d.value[5].visible=!1,d.value[6].visible=!1,d.value[7].visible=!1,d.value[8].visible=!1;break;case"Return form Defaulter":s.admission_criteria="Return from Default within 2 month",d.value[0].visible=!1,d.value[1].visible=!1,d.value[2].visible=!1,d.value[3].visible=!0,d.value[4].visible=!1,d.value[5].visible=!1,d.value[6].visible=!1,d.value[7].visible=!1,d.value[8].visible=!1;break;case"Relapse":s.admission_criteria="Return from Cured after 2 month",d.value[0].visible=!1,d.value[1].visible=!1,d.value[2].visible=!1,d.value[3].visible=!1,d.value[4].visible=!0,d.value[5].visible=!0,d.value[6].visible=!1,d.value[7].visible=!1,d.value[8].visible=!1;break;case"Transfer":s.admission_criteria="Transfer in Other SFP",d.value[0].visible=!1,d.value[1].visible=!1,d.value[2].visible=!1,d.value[3].visible=!1,d.value[4].visible=!1,d.value[5].visible=!1,d.value[6].visible=!0,d.value[7].visible=!0,d.value[8].visible=!0;break}},he=()=>{const a=new Date(s.date_of_admission);s.admitted_year=a.getFullYear(),s.admitted_month=a.getMonth()+1},ve=()=>{ae.require({message:"Are you sure you want to cancel?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-primary p-button-text",acceptClass:"p-button-danger p-button-text",accept:()=>{o.push({name:"caseList",query:{online:m.value}})},reject:()=>{}})},V=(a,g="error",i=5e3)=>{Be.emit("show-toast",{severity:g,summary:"",detail:a,life:i})};return{isLoading:h,v$:ee,submitted:X,handleSubmit:ce,errors:R,state:s,villageDisabled:W,stateOptions:le,townshipOptions:S,villageOptions:E,donarOptions:K,yesNoOptions:J,ageGroupOptions:O,genderOptions:G,typeOptions:M,screeningTypeOptions:H,bilateralPittingOedemaOptions:j,zScoreOptions:B,appetiteTestOptions:Z,immunizationStatusOptions:x,typeOfCasesOptions:P,caseCategoriesOptions:f,admissionCriteriaOptions:d,criteriaGroupsOptions:w,confirmCancel:ve,generateFakeData:de,isOnline:m,activeTab:q,foodOptions:Q,foodKgOptions:ie}};const n=N=>(We("data-v-3b3e9852"),N=N(),xe(),N),Ze={class:"card"},je={class:"flex align-items-right"},Qe={class:"flex-1"},Xe={class:"flex-2"},eo={class:"field col-12 md:col-6 lg:col-6"},oo=n(()=>t("span",{class:"p-error"},"*",-1)),to={key:0,class:"p-error"},so={class:"field col-12 md:col-6 lg:col-6"},ao=n(()=>t("span",{class:"p-error"},"*",-1)),lo={key:0,class:"p-error"},io={class:"field col-12 md:col-6 lg:col-6"},no=n(()=>t("span",{class:"p-error"},"*",-1)),ro={key:0,class:"p-error"},uo={class:"field col-12 md:col-6 lg:col-6"},co=n(()=>t("span",{class:"p-error"},"*",-1)),mo={key:0,class:"p-error"},po={class:"field col-12 md:col-6 lg:col-6"},_o=n(()=>t("span",{class:"p-error"},"*",-1)),go={key:0,class:"p-error"},fo={class:"field col-12 md:col-6 lg:col-6"},ho=n(()=>t("span",{class:"p-error"},"*",-1)),vo={key:0,class:"p-error"},bo={class:"field col-12 md:col-6 lg:col-6"},yo=n(()=>t("span",{class:"p-error"},"*",-1)),$o={key:0,class:"p-error"},wo={class:"field col-12 md:col-6 lg:col-6"},Vo=n(()=>t("span",{class:"p-error"},"*",-1)),ko={key:0,class:"p-error"},Oo={key:0,class:"field col-12 md:col-6 lg:col-6"},Mo={key:1,class:"field col-12 md:col-6 lg:col-6"},Co={class:"field col-12 md:col-6 lg:col-6"},No=n(()=>t("span",{class:"p-error"},"*",-1)),Ao={key:0,class:"p-error"},Go={class:"field col-12 md:col-6 lg:col-6"},Do=n(()=>t("span",{class:"p-error"},"*",-1)),So={key:0,class:"p-error"},Bo={class:"field col-12 md:col-6 lg:col-6"},Uo=n(()=>t("span",{class:"p-error"},"*",-1)),zo={key:0,class:"p-error"},Fo={key:2,class:"field col-12 md:col-6 lg:col-6"},To={key:0,class:"p-error"},Wo={key:3,class:"field col-12 md:col-6 lg:col-6"},xo={key:0,class:"p-error"},Po={class:"field col-12 md:col-6 lg:col-6"},Yo=n(()=>t("label",{for:"receiving_cash_assistant"},"Receiving Cash Assistant",-1)),Lo={key:0,class:"p-error"},Io={key:4,class:"field col-12 md:col-6 lg:col-6"},Ro=n(()=>t("label",{for:"yes_which_donar"},"If Yes, Which Donar?",-1)),qo={key:0,class:"p-error"},Eo={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},Ho={class:"field col-12 md:col-6 lg:col-6"},Jo=n(()=>t("label",{for:"muac_cm"},"MUAC (cm) [8 to 30]",-1)),Ko={key:0,class:"field col-12 md:col-6 lg:col-6"},Zo=n(()=>t("label",{for:"weight_kg"},"Weight (kg) [1.5 to 25]",-1)),jo={key:1,class:"field col-12 md:col-6 lg:col-6"},Qo=n(()=>t("label",{for:"height_cm"},"Height in cm [45 to 120]",-1)),Xo={key:2,class:"field col-12 md:col-6 lg:col-6"},et={key:0,class:"p-error"},ot={key:3,class:"field col-12 md:col-6 lg:col-6"},tt=n(()=>t("label",{for:"immunization_status"},"Immunization Status",-1)),st={class:"field col-12 md:col-6 lg:col-6"},at=n(()=>t("label",{for:"deworming"},"Deworming",-1)),lt={key:4,class:"field col-12 md:col-6 lg:col-6"},it=n(()=>t("label",{for:"vit_a_supplement"},"Vitamin A Supplement",-1)),nt={class:"field col-12 md:col-6 lg:col-6"},rt=n(()=>t("label",{for:"type_of_case"},"Type of Case",-1)),dt={key:5,class:"field col-12 md:col-6 lg:col-6"},ut=n(()=>t("label",{for:"am_number"},"AM Number",-1)),ct={class:"field col-12 md:col-6 lg:col-6"},mt=n(()=>t("label",{for:"criteria_group"},"Criteria Group",-1)),pt={class:"field col-12 md:col-6 lg:col-6"},_t=n(()=>t("label",{for:"case_category"},"Case Category",-1)),gt={class:"field col-12 md:col-6 lg:col-6"},ft=n(()=>t("label",{for:"admission_criteria"},"Admission Criteria",-1)),ht={class:"field col-12 md:col-6 lg:col-6"},vt=n(()=>t("label",{for:"date_of_admission"},"Date of Admission",-1)),bt={class:"field col-12 md:col-6 lg:col-6"},yt=n(()=>t("label",{for:"admitted_year"},"Admitted Year",-1)),$t={class:"field col-12 md:col-6 lg:col-6"},wt=n(()=>t("label",{for:"admitted_month"},"Admitted Month",-1)),Vt={class:"p-inputtext p-component"},kt={class:"field col-12 md:col-6 lg:col-6"},Ot=n(()=>t("label",{for:"food"},"Food",-1)),Mt={key:6,class:"field col-12 md:col-6 lg:col-6"},Ct=n(()=>t("label",{for:"food_kg"},"Food (kg)",-1)),Nt={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},At={class:"w-full"},Gt=n(()=>t("tr",null,[t("th",{class:"bg-primary",colspan:"2"},"Biographic Info")],-1)),Dt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Screening Type",-1)),St={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Bt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"State",-1)),Ut={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},zt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Township",-1)),Ft={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Tt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Village/Ward",-1)),Wt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},xt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Patient Name",-1)),Pt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Yt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type",-1)),Lt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},It=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Gender",-1)),Rt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},qt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Birth",-1)),Et={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ht=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Group",-1)),Jt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Kt={key:0},Zt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Month",-1)),jt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Qt={key:1},Xt=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Year",-1)),es={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},os=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Disability",-1)),ts={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ss=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Phone Number",-1)),as={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ls={key:2},is=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Father's Name",-1)),ns={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},rs={key:3},ds=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Husband's Name",-1)),us={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},cs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Receiving Cash Assistant",-1)),ms={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ps={key:4},_s=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"If Yes, Which Donar?",-1)),gs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},fs=n(()=>t("tr",null,[t("th",{colspan:"2"},"...")],-1)),hs=n(()=>t("tr",null,[t("th",{class:"bg-primary",colspan:"2"},"Screening")],-1)),vs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"MUAC in cm",-1)),bs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ys={key:5},$s=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Weight in kg",-1)),ws={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Vs={key:6},ks=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Height (cm)",-1)),Os={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ms={key:7},Cs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"WFH Z-Score",-1)),Ns={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},As={key:8},Gs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Immunization Status",-1)),Ds={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ss=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Deworming",-1)),Bs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Us={key:9},zs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Vitamin A Supplement",-1)),Fs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ts=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type of Case",-1)),Ws={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},xs={key:10},Ps=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"AM Number",-1)),Ys={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ls=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Case Category",-1)),Is={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Rs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Criteria Group",-1)),qs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Es=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Admission",-1)),Hs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Js=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Year",-1)),Ks={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Zs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Month",-1)),js={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Qs=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Food",-1)),Xs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ea={key:11},oa=n(()=>t("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Food Kg",-1)),ta={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},sa={class:"flex justify-content-end"},aa={class:"mr-2"},la={class:"mr-2"},ia={class:"mr-2"},na={class:"mr-2"},ra={class:"mr-2"},da={__name:"New",setup(N){const{isLoading:A,v$:o,handleSubmit:T,submitted:m,state:h,villageDisabled:R,stateOptions:q,townshipOptions:ae,villageOptions:le,yesNoOptions:S,donarOptions:E,ageGroupOptions:W,genderOptions:H,typeOptions:M,screeningTypeOptions:G,zScoreOptions:O,immunizationStatusOptions:J,typeOfCasesOptions:K,caseCategoriesOptions:B,admissionCriteriaOptions:Z,criteriaGroupsOptions:j,confirmCancel:x,isOnline:P,activeTab:f,foodOptions:d,foodKgOptions:w}=Ke(),Q=ye(()=>j.value.filter(a=>a.visible)),ie=ye(()=>B.value.filter(a=>a.visible)),ne=ye(()=>Z.value.filter(a=>a.visible)),re=()=>{ee(),T(!o.value.$invalid)},Y=v("yy-mm-dd"),U=v(null),L=()=>{setTimeout(()=>{U.value&&(U.value.scrollTop=U.value.scrollHeight)},100)},s=V=>{const a=["January","February","March","April","May","June","July","August","September","October","November","December"],g=V-1;return g>=0&&g<12?a[g]:"..."},I=()=>{ce()&&oe()&&ee()&&me()&&de()&&ue()&&X()&&(f.value=1)},de=()=>h.disability==""?(window.alert("You must select Disability"),!1):!0,ue=()=>h.date_of_birth==""?(window.alert("You must select Date of Birth"),!1):!0,X=()=>h.age_group==""?(window.alert("You must select Age Group"),!1):!0,ee=()=>h.phone_number?Je(h.phone_number)?!0:(document.getElementById("phone_number").focus(),window.alert("Invalid Phone Number, Please enter the right one"),!1):(window.alert("Phone Number is required to fill, Please enter"),f.value=0,!1),ce=()=>h.type==""?(window.alert("You must select Type"),!1):!0,me=()=>h.receiving_cash_assistant==""?(window.alert("You must select Receiving Cash Assistant"),!1):!0,oe=()=>{if(["Boy","Girl"].includes(h.type))return h.father_name==""?(window.alert("You must enter Father Name"),!1):!0;if(["Breastfeeding Woman or Girl","Pregnant Woman or Girl"].includes(h.type))return h.husband_name==""?(window.alert("You must enter Husband Name"),!1):!0},pe=()=>{fe()&&he()&&ve()&&_e()&&ge()&&(f.value=2)},_e=()=>["Boy","Girl"].includes(h.type)&&h.immunization_status==""?(window.alert("You must select Immunization Status"),!1):!0,ge=()=>h.deworming==""?(window.alert("You must select Deworming"),!1):!0,fe=()=>h.muac_cm!=0?h.muac_cm>8&&h.muac_cm<30?!0:(window.alert("MUAC must be between 8 to 30"),document.getElementById("muac_cm").focus(),!1):!0,he=()=>h.height_cm!=0?h.height_cm>=45&&h.height_cm<=120?!0:(window.alert("Height must be between 45 to 120"),document.getElementById("height_cm").focus(),!1):!0,ve=()=>h.weight_kg!=0?h.weight_kg>1.5&&h.weight_kg<25?!0:(window.alert("Weight must be between 1.5 to 25"),document.getElementById("weight_kg").focus(),!1):!0;return(V,a)=>{const g=Ve("tooltip"),i=Ve("select-all-on-focus");return u(),p(Fe,null,[t("div",Ze,[t("div",je,[t("div",Qe,[_(e(Te),{value:e(P)?"Online Mode":"Offline Mode",class:y(e(P)?"p-badge-success":"badge-secondary")},null,8,["value","class"])]),t("div",Xe,[te(_(e(F),{onClick:e(x),severity:"secondary",icon:"pi pi-times",text:"",rounded:""},null,8,["onClick"]),[[g,"Cancel",void 0,{top:!0}]])])]),_(e(Ye),{activeIndex:e(f),"onUpdate:activeIndex":a[34]||(a[34]=l=>ze(f)?f.value=l:null),scrollable:!0},{default:se(()=>[_(e(we),{header:"Biographic Info"},{default:se(()=>[t("div",{ref_key:"biContainer",ref:U,class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},[t("div",eo,[t("label",{for:"screening_type",class:y({"p-error":e(o).screening_type.$invalid&&e(m)})},[k("Screening Type"),oo],2),_(e(b),{id:"screening_type",modelValue:e(o).screening_type.$model,"onUpdate:modelValue":a[0]||(a[0]=l=>e(o).screening_type.$model=l),options:e(G),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).screening_type.$invalid&&e(m)||e(o).screening_type.$pending.$response?(u(),p("small",to,r(e(o).screening_type.required.$message.replace("Value","Screening Type")),1)):c("",!0)]),t("div",so,[t("label",{for:"state",class:y({"p-error":e(o).state.$invalid&&e(m)})},[k("State"),ao],2),_(e(b),{id:"state",modelValue:e(o).state.$model,"onUpdate:modelValue":a[1]||(a[1]=l=>e(o).state.$model=l),options:e(q),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).state.$invalid&&e(m)||e(o).state.$pending.$response?(u(),p("small",lo,r(e(o).state.required.$message.replace("Value","State")),1)):c("",!0)]),t("div",io,[t("label",{for:"township",class:y({"p-error":e(o).township.$invalid&&e(m)})},[k("Township"),no],2),_(e(b),{filter:"",id:"township",modelValue:e(o).township.$model,"onUpdate:modelValue":a[2]||(a[2]=l=>e(o).township.$model=l),options:e(ae),optionLabel:"name_mm",optionValue:"name"},null,8,["modelValue","options"]),e(o).township.$invalid&&e(m)?(u(),p("small",ro,r(e(o).township.$message),1)):c("",!0)]),t("div",uo,[t("label",{for:"village",class:y({"p-error":e(o).village.$invalid&&e(m)})},[k("Village/Ward"),co],2),_(e(b),{filter:"",disabled:e(R),id:"village",modelValue:e(o).village.$model,"onUpdate:modelValue":a[3]||(a[3]=l=>e(o).village.$model=l),options:e(le),optionLabel:"name_mm",optionValue:"name_en"},null,8,["disabled","modelValue","options"]),e(o).village.$invalid&&e(m)?(u(),p("small",mo,r(e(o).village.required.$message.replace("Value","Village or Ward")),1)):c("",!0)]),t("div",po,[t("label",{for:"patient_name",class:y({"p-error":e(o).patient_name.$invalid&&e(m)})},[k("Patient Name"),_o],2),_(e(D),{id:"patient_name",modelValue:e(o).patient_name.$model,"onUpdate:modelValue":a[4]||(a[4]=l=>e(o).patient_name.$model=l)},null,8,["modelValue"]),e(o).patient_name.$invalid&&e(m)?(u(),p("small",go,r(e(o).patient_name.required.$message.replace("Value","Patient Name")),1)):c("",!0)]),t("div",fo,[t("label",{for:"type",class:y({"p-error":e(o).type.$invalid&&e(m)})},[k("Type"),ho],2),_(e(b),{id:"type",modelValue:e(o).type.$model,"onUpdate:modelValue":a[5]||(a[5]=l=>e(o).type.$model=l),options:e(M),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).type.$invalid&&e(m)?(u(),p("small",vo,r(e(o).type.required.$message.replace("Value","Type")),1)):c("",!0)]),t("div",bo,[t("label",{for:"gender",class:y({"p-error":e(o).gender.$invalid&&e(m)})},[k("Gender"),yo],2),_(e(b),{id:"gender",modelValue:e(o).gender.$model,"onUpdate:modelValue":a[6]||(a[6]=l=>e(o).gender.$model=l),options:e(H),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).gender.$invalid&&e(m)?(u(),p("small",$o,r(e(o).gender.required.$message.replace("Value","Type")),1)):c("",!0)]),t("div",wo,[t("label",{for:"date_of_birth",class:y({"p-error":e(o).date_of_birth.$invalid&&e(m)})},[k("Date of Birth"),Vo],2),_(e(ke),{id:"date_of_birth",modelValue:e(o).date_of_birth.$model,"onUpdate:modelValue":a[7]||(a[7]=l=>e(o).date_of_birth.$model=l),dateFormat:Y.value,manualInput:"true"},null,8,["modelValue","dateFormat"]),e(o).date_of_birth.$invalid&&e(m)?(u(),p("small",ko,r(e(o).date_of_birth.required.$message.replace("Value","Date of Birth")),1)):c("",!0)]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("div",Oo,[t("label",{for:"age_month",class:y({"p-error":e(o).age_month.$invalid&&e(m)})},"Age Month",2),_(e(D),{id:"age_month",modelValue:e(o).age_month.$model,"onUpdate:modelValue":a[8]||(a[8]=l=>e(o).age_month.$model=l),readonly:""},null,8,["modelValue"])])):c("",!0),e(o).type.$model=="Pregnant Woman or Girl"||e(o).type.$model=="Breastfeeding Woman or Girl"?(u(),p("div",Mo,[t("label",{for:"age_year",class:y({"p-error":e(o).age_year.$invalid&&e(m)})},"Age Year",2),_(e(D),{id:"age_year",modelValue:e(o).age_year.$model,"onUpdate:modelValue":a[9]||(a[9]=l=>e(o).age_year.$model=l),readonly:""},null,8,["modelValue"])])):c("",!0),t("div",Co,[t("label",{for:"age_group",class:y({"p-error":e(o).age_group.$invalid&&e(m)})},[k("Age Group"),No],2),_(e(b),{id:"age_group",modelValue:e(o).age_group.$model,"onUpdate:modelValue":a[10]||(a[10]=l=>e(o).age_group.$model=l),options:e(W),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).age_group.$invalid&&e(m)?(u(),p("small",Ao,r(e(o).age_group.required.$message.replace("Value","Age Group")),1)):c("",!0)]),t("div",Go,[t("label",{for:"disability",class:y({"p-error":e(o).disability.$invalid&&e(m)})},[k("Disability"),Do],2),_(e(b),{id:"disability",modelValue:e(o).disability.$model,"onUpdate:modelValue":a[11]||(a[11]=l=>e(o).disability.$model=l),options:e(S),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).disability.$invalid&&e(m)?(u(),p("small",So,r(e(o).disability.required.$message.replace("Value","Disability")),1)):c("",!0)]),t("div",Bo,[t("label",{for:"phone_number",class:y({"p-error":e(o).phone_number.$invalid&&e(m)})},[k("Phone Number"),Uo],2),_(e(D),{ref:"phoneNumber",id:"phone_number",modelValue:e(o).phone_number.$model,"onUpdate:modelValue":a[12]||(a[12]=l=>e(o).phone_number.$model=l)},null,8,["modelValue"]),e(o).phone_number.$invalid&&e(m)?(u(),p("small",zo,r(e(o).phone_number.required.$message.replace("Value","Phone Number")),1)):c("",!0)]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("div",Fo,[t("label",{for:"father_name",class:y({"p-error":e(o).father_name.$invalid&&e(m)})},"Father's Name",2),_(e(D),{id:"father_name",modelValue:e(o).father_name.$model,"onUpdate:modelValue":a[13]||(a[13]=l=>e(o).father_name.$model=l)},null,8,["modelValue"]),e(o).father_name.$invalid&&e(m)?(u(),p("small",To,r(e(o).father_name.$message),1)):c("",!0)])):c("",!0),e(o).type.$model=="Pregnant Woman or Girl"||e(o).type.$model=="Breastfeeding Woman or Girl"?(u(),p("div",Wo,[t("label",{for:"husband_name",class:y({"p-error":e(o).husband_name.$invalid&&e(m)})},"Husband's Name",2),_(e(D),{id:"husband_name",modelValue:e(o).husband_name.$model,"onUpdate:modelValue":a[14]||(a[14]=l=>e(o).husband_name.$model=l)},null,8,["modelValue"]),e(o).husband_name.$invalid&&e(m)?(u(),p("small",xo,r(e(o).husband_name.$message),1)):c("",!0)])):c("",!0),t("div",Po,[Yo,_(e(b),{id:"receiving_cash_assistant",onChange:a[15]||(a[15]=l=>L()),modelValue:e(o).receiving_cash_assistant.$model,"onUpdate:modelValue":a[16]||(a[16]=l=>e(o).receiving_cash_assistant.$model=l),options:e(S),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).receiving_cash_assistant.$invalid&&e(m)?(u(),p("small",Lo,r(e(o).receiving_cash_assistant.$message),1)):c("",!0)]),e(o).receiving_cash_assistant.$model=="Yes"?(u(),p("div",Io,[Ro,_(e(b),{id:"yes_which_donar",modelValue:e(o).yes_which_donar.$model,"onUpdate:modelValue":a[17]||(a[17]=l=>e(o).yes_which_donar.$model=l),options:e(E),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).yes_which_donar.$invalid&&e(m)?(u(),p("small",qo,r(e(o).yes_which_donar.$message),1)):c("",!0)])):c("",!0)],512)]),_:1}),_(e(we),{header:"Screening"},{default:se(()=>[t("div",Eo,[t("div",Ho,[Jo,te(_(e($e),{modelValue:e(o).muac_cm.$model,"onUpdate:modelValue":a[18]||(a[18]=l=>e(o).muac_cm.$model=l),id:"muac_cm",minFractionDigits:2},null,8,["modelValue"]),[[i]])]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("div",Ko,[Zo,te(_(e($e),{modelValue:e(o).weight_kg.$model,"onUpdate:modelValue":a[19]||(a[19]=l=>e(o).weight_kg.$model=l),id:"weight_kg",minFractionDigits:2},null,8,["modelValue"]),[[i]])])):c("",!0),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("div",jo,[Qo,te(_(e($e),{type:"number",modelValue:e(o).height_cm.$model,"onUpdate:modelValue":a[20]||(a[20]=l=>e(o).height_cm.$model=l),id:"height_cm",minFractionDigits:2},null,8,["modelValue"]),[[i]])])):c("",!0),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("div",Xo,[t("label",{for:"wfh_zscore",class:y({"p-error":e(o).wfh_zscore.$invalid&&e(m)})},"WFH Z-Score",2),_(e(b),{id:"wfh_zscore",modelValue:e(o).wfh_zscore.$model,"onUpdate:modelValue":a[21]||(a[21]=l=>e(o).wfh_zscore.$model=l),options:e(O),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(o).type.$invalid&&e(m)?(u(),p("small",et,r(e(o).type.$message),1)):c("",!0)])):c("",!0),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("div",ot,[tt,_(e(b),{modelValue:e(o).immunization_status.$model,"onUpdate:modelValue":a[22]||(a[22]=l=>e(o).immunization_status.$model=l),options:e(J),id:"immunization_status",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):c("",!0),t("div",st,[at,_(e(b),{modelValue:e(o).deworming.$model,"onUpdate:modelValue":a[23]||(a[23]=l=>e(o).deworming.$model=l),options:e(S),id:"deworming",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("div",lt,[it,_(e(b),{modelValue:e(o).vit_a_supplement.$model,"onUpdate:modelValue":a[24]||(a[24]=l=>e(o).vit_a_supplement.$model=l),options:e(S),id:"vit_a_supplement",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):c("",!0),t("div",nt,[rt,_(e(b),{modelValue:e(o).type_of_case.$model,"onUpdate:modelValue":a[25]||(a[25]=l=>e(o).type_of_case.$model=l),options:e(K),id:"type_of_case",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),e(o).type_of_case.$model=="Old"?(u(),p("div",dt,[ut,_(e(D),{id:"am_number",modelValue:e(o).am_number.$model,"onUpdate:modelValue":a[26]||(a[26]=l=>e(o).am_number.$model=l)},null,8,["modelValue"])])):c("",!0),t("div",ct,[mt,_(e(b),{modelValue:e(o).criteria_group.$model,"onUpdate:modelValue":a[27]||(a[27]=l=>e(o).criteria_group.$model=l),options:Q.value,id:"criteria_group",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),t("div",pt,[_t,_(e(b),{modelValue:e(o).case_category.$model,"onUpdate:modelValue":a[28]||(a[28]=l=>e(o).case_category.$model=l),options:ie.value,id:"case_category",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),t("div",gt,[ft,_(e(b),{modelValue:e(o).admission_criteria.$model,"onUpdate:modelValue":a[29]||(a[29]=l=>e(o).admission_criteria.$model=l),options:ne.value,id:"admission_criteria",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),t("div",ht,[vt,_(e(ke),{modelValue:e(o).date_of_admission.$model,"onUpdate:modelValue":a[30]||(a[30]=l=>e(o).date_of_admission.$model=l),id:"date_of_admission",dateFormat:Y.value,maxDate:new Date},null,8,["modelValue","dateFormat","maxDate"])]),t("div",bt,[yt,_(e(D),{modelValue:e(o).admitted_year.$model,"onUpdate:modelValue":a[31]||(a[31]=l=>e(o).admitted_year.$model=l),id:"admitted_year",disabled:""},null,8,["modelValue"])]),t("div",$t,[wt,t("p",Vt,r(s(e(o).admitted_month.$model)),1)]),t("div",kt,[Ot,_(e(b),{id:"food",modelValue:e(o).food.$model,"onUpdate:modelValue":a[32]||(a[32]=l=>e(o).food.$model=l),options:e(d),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),e(o).food.$model!="Not Provided"?(u(),p("div",Mt,[Ct,_(e(b),{id:"food_kg",modelValue:e(o).food_kg.$model,"onUpdate:modelValue":a[33]||(a[33]=l=>e(o).food_kg.$model=l),options:e(w),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):c("",!0)])]),_:1}),_(e(we),{header:"Review"},{default:se(()=>[t("div",Nt,[t("table",At,[Gt,t("tr",null,[Dt,t("td",St,r(e(o).screening_type.$model),1)]),t("tr",null,[Bt,t("td",Ut,r(e(o).state.$model),1)]),t("tr",null,[zt,t("td",Ft,r(e(o).township.$model),1)]),t("tr",null,[Tt,t("td",Wt,r(e(o).village.$model),1)]),t("tr",null,[xt,t("td",Pt,r(e(o).patient_name.$model),1)]),t("tr",null,[Yt,t("td",Lt,r(e(o).type.$model),1)]),t("tr",null,[It,t("td",Rt,r(e(o).gender.$model),1)]),t("tr",null,[qt,t("td",Et,r(e(o).date_of_birth.$model),1)]),t("tr",null,[Ht,t("td",Jt,r(e(o).age_group.$model),1)]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("tr",Kt,[Zt,t("td",jt,r(e(o).age_month.$model),1)])):c("",!0),e(o).type.$model=="Pregnant Woman or Girl"||e(o).type.$model=="Breastfeeding Woman or Girl"?(u(),p("tr",Qt,[Xt,t("td",es,r(e(o).age_year.$model),1)])):c("",!0),t("tr",null,[os,t("td",ts,r(e(o).disability.$model),1)]),t("tr",null,[ss,t("td",as,r(e(o).phone_number.$model),1)]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("tr",ls,[is,t("td",ns,r(e(o).father_name.$model),1)])):c("",!0),e(o).type.$model=="Pregnant Woman or Girl"||e(o).type.$model=="Breastfeeding Woman or Girl"?(u(),p("tr",rs,[ds,t("td",us,r(e(o).husband_name.$model),1)])):c("",!0),t("tr",null,[cs,t("td",ms,r(e(o).receiving_cash_assistant.$model),1)]),e(o).receiving_cash_assistant.$model=="Yes"?(u(),p("tr",ps,[_s,t("td",gs,r(e(o).yes_which_donar.$model),1)])):c("",!0),fs,hs,t("tr",null,[vs,t("td",bs,r(e(o).muac_cm.$model),1)]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("tr",ys,[$s,t("td",ws,r(e(o).weight_kg.$model),1)])):c("",!0),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("tr",Vs,[ks,t("td",Os,r(e(o).height_cm.$model),1)])):c("",!0),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("tr",Ms,[Cs,t("td",Ns,r(e(o).wfh_zscore.$model),1)])):c("",!0),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("tr",As,[Gs,t("td",Ds,r(e(o).immunization_status.$model),1)])):c("",!0),t("tr",null,[Ss,t("td",Bs,r(e(o).deworming.$model),1)]),e(o).type.$model=="Boy"||e(o).type.$model=="Girl"?(u(),p("tr",Us,[zs,t("td",Fs,r(e(o).vit_a_supplement.$model),1)])):c("",!0),t("tr",null,[Ts,t("td",Ws,r(e(o).type_of_case.$model),1)]),e(o).type_of_case.$model=="Old"?(u(),p("tr",xs,[Ps,t("td",Ys,r(e(o).am_number.$model),1)])):c("",!0),t("tr",null,[Ls,t("td",Is,r(e(o).case_category.$model),1)]),t("tr",null,[Rs,t("td",qs,r(e(o).criteria_group.$model),1)]),t("tr",null,[Es,t("td",Hs,r(e(o).date_of_admission.$model),1)]),t("tr",null,[Js,t("td",Ks,r(e(o).admitted_year.$model),1)]),t("tr",null,[Zs,t("td",js,r(e(o).admitted_month.$model),1)]),t("tr",null,[Qs,t("td",Xs,r(e(o).food.$model),1)]),e(o).food.$model!="Not Provided"?(u(),p("tr",ea,[oa,t("td",ta,r(e(o).food_kg.$model),1)])):c("",!0)])])]),_:1})]),_:1},8,["activeIndex"]),t("div",sa,[t("div",aa,[V.$can("index","User")?(u(),z(e(F),{key:0,label:"Cancel",severity:"secondary",text:"",onClick:e(x)},null,8,["onClick"])):c("",!0)]),t("div",la,[e(f)==0?(u(),z(e(F),{key:0,label:"Next  >>",onClick:I,severity:"primary",text:""})):c("",!0)]),t("div",ia,[e(f)==1?(u(),z(e(F),{key:0,label:"<<  Prev",onClick:a[35]||(a[35]=l=>f.value=0),severity:"primary",text:""})):c("",!0)]),t("div",na,[e(f)==2?(u(),z(e(F),{key:0,label:"<<  Prev",onClick:a[36]||(a[36]=l=>f.value=1),severity:"primary",text:""})):c("",!0)]),t("div",ra,[e(f)==1?(u(),z(e(F),{key:0,label:"Next  >>",onClick:pe,severity:"primary",text:""})):c("",!0)]),t("div",null,[e(f)==2?(u(),z(e(F),{key:0,onClick:re,label:"Create",severity:"primary"})):c("",!0)])]),e(A)?(u(),z(Pe,{key:0})):c("",!0)]),_(e(Le))],64)}}},Oa=Ue(da,[["__scopeId","data-v-3b3e9852"]]);export{Oa as default};
