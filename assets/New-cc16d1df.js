import{C as $e,H as we,g,l as Ve,f as ke,m as Me,D as Ce,p as k,E as Ae,_ as Oe,h as Se,o as p,c as u,a as o,b as r,u as e,x as b,i as ne,w as te,e as $,t as n,k as _,q as Ne,j as z,F as De,a6 as ze,s as O,A as Te,B as Ue}from"./index-db823c43.js";import{s as h}from"./dropdown.esm-5342fc5e.js";import{s as F}from"./inputtext.esm-e34ea9b3.js";import{s as ae}from"./focustrap.esm-c79ead7c.js";import{s as de}from"./calendar.esm-60939cd1.js";import{L as xe}from"./Loading-0f8108d4.js";import{s as se,a as Fe}from"./tabpanel.esm-bcd7661e.js";import{s as Le}from"./confirmdialog.esm-2927d2f2.js";import{u as Ge,r as y,i as re}from"./index-328e82dd.js";import{u as Be}from"./store-e47b5b32.js";import{u as Pe}from"./globalStore-17bef350.js";import{E as Re}from"./serverValidation-35937a0f.js";import{w as qe}from"./zscore-9e188e39.js";import"./index.esm-c2c838c8.js";import"./dialog.esm-8dd0afa5.js";const Ye=()=>{const M=Be(),C=Pe(),a=$e(),T=we(),d=g(!0),v=g(!1),P=new Re,R=g(0),oe=Ve(),S=g([{code:"Yangon",name:"Yangon"}]),q=g([]),Y=g([]),L=g(!0),I=g([]),V=g([]),A=g(),w=g([]),W=g([]),E=g([]),N=g([]),H=g([]),J=g([]),j=g([]),G=g([]),Z=g([]),B=g([]),f=g([]),K=async()=>{v.value=!0,await C.fetchAllEnums();const c=C.getAllEnumResponse;if(c){const{options:m}=c.data;I.value=m.screening_type.map(l=>({name:l,code:l})),V.value=m.type.map(l=>({name:l,code:l})),A.value=m.gender.map(l=>({name:l,code:l})),w.value=m.age_group.map(l=>({name:l,code:l})),W.value=m.yes_no.map(l=>({name:l,code:l})),E.value=m.donar.map(l=>({name:l,code:l})),N.value=m.wfh_zscore.map(l=>({name:l,code:l})),J.value=m.bilateral_pitting_odema.map(l=>({name:l,code:l})),H.value=m.appetite_test.map(l=>({name:l,code:l})),j.value=m.immunization_status.map(l=>({name:l,code:l})),G.value=m.type_of_case.map(l=>({name:l,code:l})),Z.value=m.case_category.map(l=>({name:l,code:l})),B.value=m.category_of_criteria.map(l=>({name:l,code:l})),f.value=m.criteria_group.map(l=>({name:l,code:l}))}v.value=!1},U=async()=>{v.value=!0,await C.fetchAllTownship();const c=C.getAllTownshipResponse;if(c){const{options:m}=c.data;q.value=m}v.value=!1},Q=async()=>{L.value=!0,await C.fetchAllWards({township:t.township});const c=C.getAllWardResponse;c&&(Y.value=c,L.value=!1)},X=()=>{const c="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png";return new Promise(m=>{var l=new Image;l.onload=function(){m(!0)},l.onerror=function(){m(!1)};const D=c+"?t="+new Date().getTime();l.timeout=5e3,l.src=D})};ke(async()=>{await X().then(c=>{d.value=c}),d.value=T.query.online!==void 0?JSON.parse(T.query.online):d.value,K(),U(),Q()}),Me(()=>{M.$dispose()});const t=Ce({am_number:"",screening_type:"",state:"Yangon",township:"Hlaingtharya",village:"",patient_name:"",type:"",gender:"",date_of_birth:"",age_group:"",disability:"",phone_number:"",father_name:"",husband_name:"",receiving_cash_assistant:"",yes_which_donar:"",muac_cm:0,weight_kg:0,height_cm:0,wfh_zscore:"",bilateral_pitting_oedema:"",medical_illness_complication:"",appetite_test:"N/A",immunization_status:"",deworming:"",vit_a_supplement:"",type_of_case:"",case_category:"",category_of_criteria:"",criteria_group:"",date_of_admission:null,admitted_year:null,admitted_month:null});function x(){const c=["John","Jane","Sarah","Michael","Emily","David","Anna","James","Laura","Robert"],m=["Doe","Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Wilson"],l=c[Math.floor(Math.random()*c.length)],D=m[Math.floor(Math.random()*m.length)];return`${l} ${D}`}function s(){t.screening_type="Active Screening",t.state="Yangon",t.township="Hlaingtharya",t.village="No (9) Ward",t.patient_name=x(),t.type="Girl",t.gender=Math.random()>.5?"Male":"Female",t.date_of_birth="1990-01-01",t.age_group="12-17 Years",t.disability=Math.random()>.5?"Yes":"No",t.phone_number="09912345678",t.father_name=x(),t.husband_name=x(),t.receiving_cash_assistant=Math.random()>.5?"Yes":"No",t.yes_which_donar=Math.random()>.5?"WFP":"Other",t.muac_cm=(Math.random()*(30-8)+8).toFixed(1),t.weight_kg=(Math.random()*(25-1.5)+1.5).toFixed(1),t.height_cm=(Math.random()*(120-45)+45).toFixed(1),t.wfh_zscore=Math.random()>.5?"SAM":"MAM",t.bilateral_pitting_oedema=Math.random()>.5?"1":"3",t.medical_illness_complication=Math.random()>.5?"Yes":"No",t.appetite_test=Math.random()>.5?"Passed":"Failed",t.immunization_status=Math.random()>.5?"Ongoing":"Complete",t.deworming=Math.random()>.5?"Yes":"No",t.vit_a_supplement=Math.random()>.5?"Yes":"No",t.type_of_case=Math.random()>.5?"MAM":"SAM with Complication",t.case_category=Math.random()>.5?"MAM Refer to SFP":"SAM Refer to OTP",t.category_of_criteria=Math.random()>.5?"New":"Relapse",t.criteria_group=Math.random()>.5?"New":"Relapse",t.date_of_admission=new Date().toISOString().slice(0,10),t.admitted_year=new Date().getFullYear(),t.admitted_month=new Date().getMonth()+1}const ce={screening_type:{required:y},state:{required:y},township:{required:y},village:{required:y},patient_name:{required:y},type:{required:y},gender:{required:y},date_of_birth:{required:y},age_group:{required:y},disability:{required:y},phone_number:{required:y},father_name:{},husband_name:{},receiving_cash_assistant:{},yes_which_donar:{},muac_cm:{},weight_kg:{},height_cm:{},wfh_zscore:{},bilateral_pitting_oedema:{},medical_illness_complication:{},appetite_test:{},immunization_status:{},deworming:{},vit_a_supplement:{},type_of_case:{},case_category:{},category_of_criteria:{},criteria_group:{},date_of_admission:{required:y},admitted_year:{integer:re,required:y},admitted_month:{integer:re,required:y}},le=g(!1),pe=Ge(ce,t),me=c=>{if(le.value=!0,console.log("submit"),!c){R.value=0;return}v.value||_e()},_e=async()=>{P.clear(),v.value=!0;try{await M.add({screening_type:t.screening_type,state:t.state,township:t.township,village:t.village,patient_name:t.patient_name,type:t.type,gender:t.gender,date_of_birth:t.date_of_birth,age_group:t.age_group,disability:t.disability,phone_number:t.phone_number,father_name:t.father_name,husband_name:t.husband_name,receiving_cash_assistant:t.receiving_cash_assistant,yes_which_donar:t.yes_which_donar,muac_cm:t.muac_cm,weight_kg:t.weight_kg,height_cm:t.height_cm,wfh_zscore:t.wfh_zscore,bilateral_pitting_oedema:t.bilateral_pitting_oedema,medical_illness_complication:t.medical_illness_complication,appetite_test:t.appetite_test,immunization_status:t.immunization_status,deworming:t.deworming,vit_a_supplement:t.vit_a_supplement,type_of_case:t.type_of_case,case_category:t.case_category,category_of_criteria:t.category_of_criteria,criteria_group:t.criteria_group,date_of_admission:t.date_of_admission,admitted_year:t.admitted_year,admitted_month:t.admitted_month},d.value),M.getAddResponse&&(ee("Case for patient "+t.patient_name+" is created.","success"),a.push({name:"caseList",query:{online:d.value}})),v.value=!1}catch(c){v.value=!1,c.status===422&&ee(c.data.message,1e4)}};k([d],async()=>{d.value==!0&&await X().then(c=>{d.value=c}),console.log(d.value),a.push({path:T.path,query:{...T.query,online:d.value}})}),k(()=>t.township,()=>{Q()}),k(()=>t.date_of_admission,()=>{be()}),k(()=>t.date_of_birth,()=>{const c=new Date(t.date_of_birth),m=new Date;let l=(m.getFullYear()-c.getFullYear())*12;if(l-=c.getMonth(),l+=m.getMonth(),m.getDate()<c.getDate()&&l--,l<6){ee("At lease, 6 Months of Age is required");return}if(l>=6&&l<=23){t.age_group=w.value[0].name;return}else if(l>=24&&l<=59){t.age_group=w.value[1].name;return}else if(l>=12*12&&l<=17*12){t.age_group=w.value[2].name;return}else if(l>=18*12&&l<=59*12){t.age_group=w.value[3].name;return}else t.age_group=""}),k(()=>t.type,()=>{switch(t.type){case V.value[0].name:t.gender=A.value[0].name;break;case V.value[1].name:t.gender=A.value[1].name;break;case V.value[2].name:t.gender=A.value[1].name,ie();break;case V.value[3].name:t.gender=A.value[1].name,ie();break}}),k(()=>[t.age_group,t.height_cm,t.weight_kg],()=>{ue()}),k(()=>[t.bilateral_pitting_oedema,t.appetite_test,t.medical_illness_complication,t.muac_cm,t.wfh_zscore],()=>{ge()}),k(()=>[t.type_of_case],()=>{he()}),k(()=>[t.category_of_criteria],()=>{fe()});const ie=()=>{t.father_name="",t.muac_cm=0,t.weight_kg=0,t.height_cm=0,t.wfh_zscore="",t.appetite_test="",t.immunization_status="",t.vit_a_supplement=""},ue=()=>{if(w.value.some(m=>m.name==t.age_group)){if(t.weight_kg!==0&&t.height_cm!==0){const m=t.age_group===w.value[0].name?"m24under":"m24to59",l=t.type===V.value[0].name?"boy":"girl",D=qe[m][l].find(ve=>ve.length===t.height_cm);if(D!==void 0)if(t.weight_kg<D.minus3){t.wfh_zscore=N.value[0].name;return}else if(t.weight_kg<D.minus2){t.wfh_zscore=N.value[1].name;return}else t.wfh_zscore=N.value[2].name}}else ee("Firstly, you need to set Date of Birth, then Age Group will be defined and WFH ZScore will be automatically selected","warn")},ge=()=>{if(t.bilateral_pitting_oedema!=""&&t.appetite_test!=""&&t.medical_illness_complication!=""&&t.muac_cm!=0&&t.wfh_zscore!=""){if(t.bilateral_pitting_oedema=="3"&&t.appetite_test=="Failed"&&t.medical_illness_complication=="Yes"&&t.muac_cm<11.5&&t.wfh_zscore=="SAM <-3"){t.type_of_case="SAM with Complication";return}if((t.bilateral_pitting_oedema=="1"||t.bilateral_pitting_oedema=="2")&&t.appetite_test=="Passed"&&t.medical_illness_complication=="No"&&t.muac_cm<11.5&&t.wfh_zscore=="SAM <-3"){t.type_of_case="SAM without Complication";return}if(t.bilateral_pitting_oedema=="No Bilateral Pitting Oedema"&&t.appetite_test=="N/A"&&t.medical_illness_complication=="No"&&t.muac_cm>=11.5&&t.muac_cm<12.5&&t.wfh_zscore=="MAM ≥-3 and <-2"){t.type_of_case="MAM";return}if(t.bilateral_pitting_oedema=="No Bilateral Pitting Oedema"&&t.appetite_test=="N/A"&&t.medical_illness_complication=="No"&&t.muac_cm>=12.5&&t.wfh_zscore=="Normal ≥-2"){t.type_of_case="No Acute Malnutrition";return}else t.type_of_case=""}},he=()=>{switch(t.type_of_case){case"SAM with Complication":t.case_category="SAM with Complication Refer to ITP";break;case"SAM without Complication":t.case_category="SAM Refer to OTP";break;case"MAM":t.case_category="MAM Refer to SFP";break;case"No Acute Malnutrition":t.case_category="";break}},fe=()=>{switch(t.category_of_criteria){case"New":t.criteria_group="New";break;case"Relapse":t.criteria_group="Relapse";break;case"Return NR":t.criteria_group="Default";break;case"Return Default":t.criteria_group="Default";break;case"Transfer in OTP":t.criteria_group="Transfer";break;case"Transfer from TSFP":t.criteria_group="Transfer"}},be=()=>{const c=new Date(t.date_of_admission);t.admitted_year=c.getFullYear(),t.admitted_month=c.getMonth()+1},ye=()=>{oe.require({message:"Are you sure you want to cancel?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-primary p-button-text",acceptClass:"p-button-danger p-button-text",accept:()=>{a.push({name:"caseList",query:{online:d.value}})},reject:()=>{}})},ee=(c,m="error",l=5e3)=>{Ae.emit("show-toast",{severity:m,summary:"",detail:c,life:l})};return{isLoading:v,v$:pe,submitted:le,handleSubmit:me,errors:P,villageDisabled:L,stateOptions:S,townshipOptions:q,villageOptions:Y,donarOptions:E,yesNoOptions:W,ageGroupOptions:w,genderOptions:A,typeOptions:V,screeningTypeOptions:I,bilateralPittingOedemaOptions:J,zScoreOptions:N,appetiteTestOptions:H,immunizationStatusOptions:j,typeOfCasesOptions:G,caseCategoriesOptions:Z,criteriaOptions:B,criteriaGroupsOptions:f,confirmCancel:ye,generateFakeData:s,isOnline:d,activeTab:R}};const i=M=>(Te("data-v-689a36c5"),M=M(),Ue(),M),Ie={class:"card"},We={class:"flex align-items-right"},Ee={class:"flex-1"},He={class:"flex-2"},Je={class:"flex-2"},je={class:"field col-12 md:col-6 lg:col-6"},Ze=i(()=>o("span",{class:"p-error"},"*",-1)),Ke={key:0,class:"p-error"},Qe={class:"field col-12 md:col-6 lg:col-6"},Xe=i(()=>o("span",{class:"p-error"},"*",-1)),et={key:0,class:"p-error"},tt={class:"field col-12 md:col-6 lg:col-6"},ot=i(()=>o("span",{class:"p-error"},"*",-1)),at={key:0,class:"p-error"},st={class:"field col-12 md:col-6 lg:col-6"},lt=i(()=>o("span",{class:"p-error"},"*",-1)),it={key:0,class:"p-error"},nt={class:"field col-12 md:col-6 lg:col-6"},dt=i(()=>o("span",{class:"p-error"},"*",-1)),rt={key:0,class:"p-error"},ct={class:"field col-12 md:col-6 lg:col-6"},pt=i(()=>o("span",{class:"p-error"},"*",-1)),mt={key:0,class:"p-error"},_t={class:"field col-12 md:col-6 lg:col-6"},ut=i(()=>o("span",{class:"p-error"},"*",-1)),gt={key:0,class:"p-error"},ht={class:"field col-12 md:col-6 lg:col-6"},ft=i(()=>o("span",{class:"p-error"},"*",-1)),bt={key:0,class:"p-error"},yt={class:"field col-12 md:col-6 lg:col-6"},vt=i(()=>o("span",{class:"p-error"},"*",-1)),$t={key:0,class:"p-error"},wt={class:"field col-12 md:col-6 lg:col-6"},Vt=i(()=>o("span",{class:"p-error"},"*",-1)),kt={key:0,class:"p-error"},Mt={class:"field col-12 md:col-6 lg:col-6"},Ct=i(()=>o("span",{class:"p-error"},"*",-1)),At={key:0,class:"p-error"},Ot={key:0,class:"field col-12 md:col-6 lg:col-6"},St={key:0,class:"p-error"},Nt={key:1,class:"field col-12 md:col-6 lg:col-6"},Dt={key:0,class:"p-error"},zt={class:"field col-12 md:col-6 lg:col-6"},Tt=i(()=>o("label",{for:"receiving_cash_assistant"},"Receiving Cash Assistant",-1)),Ut={key:0,class:"p-error"},xt={key:2,class:"field col-12 md:col-6 lg:col-6"},Ft=i(()=>o("label",{for:"yes_which_donar"},"If Yes, Which Donar?",-1)),Lt={key:0,class:"p-error"},Gt={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},Bt={class:"field col-12 md:col-6 lg:col-6"},Pt=i(()=>o("label",{for:"muac_cm"},"MUAC in cm [8 to 30]",-1)),Rt={key:0,class:"field col-12 md:col-6 lg:col-6"},qt=i(()=>o("label",{for:"weight_kg"},"Weight in kg [1.5 to 25]",-1)),Yt={key:1,class:"field col-12 md:col-6 lg:col-6"},It=i(()=>o("label",{for:"height_cm"},"Height in cm [45 to 120]",-1)),Wt={key:2,class:"field col-12 md:col-6 lg:col-6"},Et={key:0,class:"p-error"},Ht={class:"field col-12 md:col-6 lg:col-6"},Jt=i(()=>o("label",{for:"bilateral_pitting_oedema"},"Bilateral Pitting Oedema",-1)),jt={class:"field col-12 md:col-6 lg:col-6"},Zt=i(()=>o("label",{for:"medical_illness_complication"},"Medical Illness Complication",-1)),Kt={key:3,class:"field col-12 md:col-6 lg:col-6"},Qt=i(()=>o("label",{for:"appetite_test"},"Appetite Test",-1)),Xt={key:4,class:"field col-12 md:col-6 lg:col-6"},eo=i(()=>o("label",{for:"immunization_status"},"Immunization Status",-1)),to={class:"field col-12 md:col-6 lg:col-6"},oo=i(()=>o("label",{for:"deworming"},"Deworming",-1)),ao={key:5,class:"field col-12 md:col-6 lg:col-6"},so=i(()=>o("label",{for:"vit_a_supplement"},"Vitamin A Supplement",-1)),lo={class:"field col-12 md:col-6 lg:col-6"},io=i(()=>o("label",{for:"type_of_case"},"Type of Case",-1)),no={class:"field col-12 md:col-6 lg:col-6"},ro=i(()=>o("label",{for:"case_category"},"Case Category",-1)),co={class:"field col-12 md:col-6 lg:col-6"},po=i(()=>o("label",{for:"category_of_criteria"},"Category of Criteria",-1)),mo={class:"field col-12 md:col-6 lg:col-6"},_o=i(()=>o("label",{for:"criteria_group"},"Criteria Group",-1)),uo={class:"field col-12 md:col-6 lg:col-6"},go=i(()=>o("label",{for:"date_of_admission"},"Date of Admission",-1)),ho={class:"field col-12 md:col-6 lg:col-6"},fo=i(()=>o("label",{for:"admitted_year"},"Admitted Year",-1)),bo={class:"field col-12 md:col-6 lg:col-6"},yo=i(()=>o("label",{for:"admitted_month"},"Admitted Month",-1)),vo={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},$o={class:"w-full"},wo=i(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Biographic Info")],-1)),Vo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Screening Type",-1)),ko={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Mo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"State",-1)),Co={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ao=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Township",-1)),Oo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},So=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Village/Ward",-1)),No={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Do=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Patient Name",-1)),zo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},To=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type",-1)),Uo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},xo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Gender",-1)),Fo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Lo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Birth",-1)),Go={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Bo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Group",-1)),Po={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ro=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Disability",-1)),qo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Yo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Phone Number",-1)),Io={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Wo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Father's Name",-1)),Eo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ho=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Husband's Name",-1)),Jo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},jo=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Receiving Cash Assistant",-1)),Zo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ko=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"If Yes, Which Donar?",-1)),Qo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Xo=i(()=>o("tr",null,[o("th",{colspan:"2"},"...")],-1)),ea=i(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Medical Examination")],-1)),ta=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"MUAC (cm)",-1)),oa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},aa=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Weight (kg)",-1)),sa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},la=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Height (cm)",-1)),ia={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},na=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"WFH Z-Score",-1)),da={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ra=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Bilateral Pitting Oedema",-1)),ca={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},pa=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Medical Illness Complication",-1)),ma={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},_a=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Appetite Test",-1)),ua={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ga=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Immunization Status",-1)),ha={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},fa=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Deworming",-1)),ba={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ya=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Vitamin A Supplement",-1)),va={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},$a=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type of Case",-1)),wa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Va=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Case Category",-1)),ka={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ma=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Category of Criteria",-1)),Ca={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Aa=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Criteria Group",-1)),Oa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Sa=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Admission",-1)),Na={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Da=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Year",-1)),za={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ta=i(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Month",-1)),Ua={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},xa={class:"flex justify-content-end"},Fa={class:"mr-2"},La={class:"mr-2"},Ga={class:"mr-2"},Ba={class:"mr-2"},Pa={class:"mr-2"},Ra={__name:"New",setup(M){const{isLoading:C,v$:a,handleSubmit:T,submitted:d,villageDisabled:v,stateOptions:P,townshipOptions:R,villageOptions:oe,yesNoOptions:S,donarOptions:q,ageGroupOptions:Y,genderOptions:L,typeOptions:I,screeningTypeOptions:V,bilateralPittingOedemaOptions:A,zScoreOptions:w,appetiteTestOptions:W,immunizationStatusOptions:E,typeOfCasesOptions:N,caseCategoriesOptions:H,criteriaOptions:J,criteriaGroupsOptions:j,confirmCancel:G,generateFakeData:Z,isOnline:B,activeTab:f}=Ye(),K=g("yy-mm-dd"),U=g(null),Q=()=>{setTimeout(()=>{U.value&&(U.value.scrollTop=U.value.scrollHeight)},100)};return(X,t)=>{const x=Se("tooltip");return p(),u(De,null,[o("div",Ie,[o("div",We,[o("div",Ee,[r(e(ze),{value:e(B)?"Online Mode":"Offline Mode",class:b(e(B)?"p-badge-success":"badge-secondary")},null,8,["value","class"])]),o("div",He,[ne(r(e(O),{onClick:e(Z),icon:"pi pi-database",text:"",rounded:""},null,8,["onClick"]),[[x,"Fake Data for Testing",void 0,{top:!0}]])]),o("div",Je,[ne(r(e(O),{onClick:e(G),severity:"secondary",icon:"pi pi-times",text:"",rounded:""},null,8,["onClick"]),[[x,"Cancel",void 0,{top:!0}]])])]),r(e(Fe),{activeIndex:e(f),"onUpdate:activeIndex":t[33]||(t[33]=s=>Ne(f)?f.value=s:null),scrollable:!0},{default:te(()=>[r(e(se),{header:"Biographic Info"},{default:te(()=>[o("div",{ref_key:"biContainer",ref:U,class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},[o("div",je,[o("label",{for:"screening_type",class:b({"p-error":e(a).screening_type.$invalid&&e(d)})},[$("Screening Type"),Ze],2),r(e(h),{id:"screening_type",modelValue:e(a).screening_type.$model,"onUpdate:modelValue":t[0]||(t[0]=s=>e(a).screening_type.$model=s),options:e(V),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).screening_type.$invalid&&e(d)||e(a).screening_type.$pending.$response?(p(),u("small",Ke,n(e(a).screening_type.required.$message.replace("Value","Screening Type")),1)):_("",!0)]),o("div",Qe,[o("label",{for:"state",class:b({"p-error":e(a).state.$invalid&&e(d)})},[$("State"),Xe],2),r(e(h),{id:"state",modelValue:e(a).state.$model,"onUpdate:modelValue":t[1]||(t[1]=s=>e(a).state.$model=s),options:e(P),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).state.$invalid&&e(d)||e(a).state.$pending.$response?(p(),u("small",et,n(e(a).state.required.$message.replace("Value","State")),1)):_("",!0)]),o("div",tt,[o("label",{for:"township",class:b({"p-error":e(a).township.$invalid&&e(d)})},[$("Township"),ot],2),r(e(h),{id:"township",modelValue:e(a).township.$model,"onUpdate:modelValue":t[2]||(t[2]=s=>e(a).township.$model=s),options:e(R),optionLabel:"name",optionValue:"name"},null,8,["modelValue","options"]),e(a).township.$invalid&&e(d)?(p(),u("small",at,n(e(a).township.$message),1)):_("",!0)]),o("div",st,[o("label",{for:"village",class:b({"p-error":e(a).village.$invalid&&e(d)})},[$("Village/Ward"),lt],2),r(e(h),{disabled:e(v),id:"village",modelValue:e(a).village.$model,"onUpdate:modelValue":t[3]||(t[3]=s=>e(a).village.$model=s),options:e(oe),optionLabel:"name_en",optionValue:"name_en"},null,8,["disabled","modelValue","options"]),e(a).village.$invalid&&e(d)?(p(),u("small",it,n(e(a).village.required.$message.replace("Value","Village or Ward")),1)):_("",!0)]),o("div",nt,[o("label",{for:"patient_name",class:b({"p-error":e(a).patient_name.$invalid&&e(d)})},[$("Patient Name"),dt],2),r(e(F),{id:"patient_name",modelValue:e(a).patient_name.$model,"onUpdate:modelValue":t[4]||(t[4]=s=>e(a).patient_name.$model=s)},null,8,["modelValue"]),e(a).patient_name.$invalid&&e(d)?(p(),u("small",rt,n(e(a).patient_name.required.$message.replace("Value","Patient Name")),1)):_("",!0)]),o("div",ct,[o("label",{for:"type",class:b({"p-error":e(a).type.$invalid&&e(d)})},[$("Type"),pt],2),r(e(h),{id:"type",modelValue:e(a).type.$model,"onUpdate:modelValue":t[5]||(t[5]=s=>e(a).type.$model=s),options:e(I),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).type.$invalid&&e(d)?(p(),u("small",mt,n(e(a).type.required.$message.replace("Value","Type")),1)):_("",!0)]),o("div",_t,[o("label",{for:"gender",class:b({"p-error":e(a).gender.$invalid&&e(d)})},[$("Gender"),ut],2),r(e(h),{id:"gender",modelValue:e(a).gender.$model,"onUpdate:modelValue":t[6]||(t[6]=s=>e(a).gender.$model=s),options:e(L),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).gender.$invalid&&e(d)?(p(),u("small",gt,n(e(a).gender.required.$message.replace("Value","Type")),1)):_("",!0)]),o("div",ht,[o("label",{for:"date_of_birth",class:b({"p-error":e(a).date_of_birth.$invalid&&e(d)})},[$("Date of Birth"),ft],2),r(e(de),{id:"date_of_birth",modelValue:e(a).date_of_birth.$model,"onUpdate:modelValue":t[7]||(t[7]=s=>e(a).date_of_birth.$model=s),dateFormat:K.value,manualInput:"true"},null,8,["modelValue","dateFormat"]),e(a).date_of_birth.$invalid&&e(d)?(p(),u("small",bt,n(e(a).date_of_birth.required.$message.replace("Value","Date of Birth")),1)):_("",!0)]),o("div",yt,[o("label",{for:"age_group",class:b({"p-error":e(a).age_group.$invalid&&e(d)})},[$("Age Group"),vt],2),r(e(h),{id:"age_group",modelValue:e(a).age_group.$model,"onUpdate:modelValue":t[8]||(t[8]=s=>e(a).age_group.$model=s),options:e(Y),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).age_group.$invalid&&e(d)?(p(),u("small",$t,n(e(a).age_group.required.$message.replace("Value","Age Group")),1)):_("",!0)]),o("div",wt,[o("label",{for:"disability",class:b({"p-error":e(a).disability.$invalid&&e(d)})},[$("Disability"),Vt],2),r(e(h),{id:"disability",modelValue:e(a).disability.$model,"onUpdate:modelValue":t[9]||(t[9]=s=>e(a).disability.$model=s),options:e(S),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).disability.$invalid&&e(d)?(p(),u("small",kt,n(e(a).disability.required.$message.replace("Value","Disability")),1)):_("",!0)]),o("div",Mt,[o("label",{for:"phone_number",class:b({"p-error":e(a).phone_number.$invalid&&e(d)})},[$("Phone Number"),Ct],2),r(e(F),{id:"phone_number",modelValue:e(a).phone_number.$model,"onUpdate:modelValue":t[10]||(t[10]=s=>e(a).phone_number.$model=s)},null,8,["modelValue"]),e(a).phone_number.$invalid&&e(d)?(p(),u("small",At,n(e(a).phone_number.required.$message.replace("Value","Phone Number")),1)):_("",!0)]),e(a).type.$model=="Boy"||e(a).type.$model=="Girl"?(p(),u("div",Ot,[o("label",{for:"father_name",class:b({"p-error":e(a).father_name.$invalid&&e(d)})},"Father's Name",2),r(e(F),{id:"father_name",modelValue:e(a).father_name.$model,"onUpdate:modelValue":t[11]||(t[11]=s=>e(a).father_name.$model=s)},null,8,["modelValue"]),e(a).father_name.$invalid&&e(d)?(p(),u("small",St,n(e(a).father_name.$message),1)):_("",!0)])):_("",!0),e(a).type.$model=="Pregnant Woman or Girl"||e(a).type.$model=="Breastfeeding Woman or Girl"?(p(),u("div",Nt,[o("label",{for:"husband_name",class:b({"p-error":e(a).husband_name.$invalid&&e(d)})},"Husband's Name",2),r(e(F),{id:"husband_name",modelValue:e(a).husband_name.$model,"onUpdate:modelValue":t[12]||(t[12]=s=>e(a).husband_name.$model=s)},null,8,["modelValue"]),e(a).husband_name.$invalid&&e(d)?(p(),u("small",Dt,n(e(a).husband_name.$message),1)):_("",!0)])):_("",!0),o("div",zt,[Tt,r(e(h),{id:"receiving_cash_assistant",onChange:t[13]||(t[13]=s=>Q()),modelValue:e(a).receiving_cash_assistant.$model,"onUpdate:modelValue":t[14]||(t[14]=s=>e(a).receiving_cash_assistant.$model=s),options:e(S),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).receiving_cash_assistant.$invalid&&e(d)?(p(),u("small",Ut,n(e(a).receiving_cash_assistant.$message),1)):_("",!0)]),e(a).receiving_cash_assistant.$model=="Yes"?(p(),u("div",xt,[Ft,r(e(h),{id:"yes_which_donar",modelValue:e(a).yes_which_donar.$model,"onUpdate:modelValue":t[15]||(t[15]=s=>e(a).yes_which_donar.$model=s),options:e(q),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).yes_which_donar.$invalid&&e(d)?(p(),u("small",Lt,n(e(a).yes_which_donar.$message),1)):_("",!0)])):_("",!0)],512)]),_:1}),r(e(se),{header:"Medical Examination"},{default:te(()=>[o("div",Gt,[o("div",Bt,[Pt,r(e(ae),{modelValue:e(a).muac_cm.$model,"onUpdate:modelValue":t[16]||(t[16]=s=>e(a).muac_cm.$model=s),id:"muac_cm",minFractionDigits:2},null,8,["modelValue"])]),e(a).type.$model=="Boy"||e(a).type.$model=="Girl"?(p(),u("div",Rt,[qt,r(e(ae),{modelValue:e(a).weight_kg.$model,"onUpdate:modelValue":t[17]||(t[17]=s=>e(a).weight_kg.$model=s),id:"weight_kg",minFractionDigits:2},null,8,["modelValue"])])):_("",!0),e(a).type.$model=="Boy"||e(a).type.$model=="Girl"?(p(),u("div",Yt,[It,r(e(ae),{type:"number",modelValue:e(a).height_cm.$model,"onUpdate:modelValue":t[18]||(t[18]=s=>e(a).height_cm.$model=s),id:"height_cm",minFractionDigits:2},null,8,["modelValue"])])):_("",!0),e(a).type.$model=="Boy"||e(a).type.$model=="Girl"?(p(),u("div",Wt,[o("label",{for:"wfh_zscore",class:b({"p-error":e(a).wfh_zscore.$invalid&&e(d)})},"WFH Z-Score",2),r(e(h),{id:"wfh_zscore",modelValue:e(a).wfh_zscore.$model,"onUpdate:modelValue":t[19]||(t[19]=s=>e(a).wfh_zscore.$model=s),options:e(w),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(a).type.$invalid&&e(d)?(p(),u("small",Et,n(e(a).type.$message),1)):_("",!0)])):_("",!0),o("div",Ht,[Jt,r(e(h),{modelValue:e(a).bilateral_pitting_oedema.$model,"onUpdate:modelValue":t[20]||(t[20]=s=>e(a).bilateral_pitting_oedema.$model=s),options:e(A),id:"bilateral_pitting_oedema",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",jt,[Zt,r(e(h),{modelValue:e(a).medical_illness_complication.$model,"onUpdate:modelValue":t[21]||(t[21]=s=>e(a).medical_illness_complication.$model=s),options:e(S),id:"medical_illness_complication",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),e(a).type.$model=="Boy"||e(a).type.$model=="Girl"?(p(),u("div",Kt,[Qt,r(e(h),{modelValue:e(a).appetite_test.$model,"onUpdate:modelValue":t[22]||(t[22]=s=>e(a).appetite_test.$model=s),options:e(W),id:"appetite_test",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):_("",!0),e(a).type.$model=="Boy"||e(a).type.$model=="Girl"?(p(),u("div",Xt,[eo,r(e(h),{modelValue:e(a).immunization_status.$model,"onUpdate:modelValue":t[23]||(t[23]=s=>e(a).immunization_status.$model=s),options:e(E),id:"immunization_status",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):_("",!0),o("div",to,[oo,r(e(h),{modelValue:e(a).deworming.$model,"onUpdate:modelValue":t[24]||(t[24]=s=>e(a).deworming.$model=s),options:e(S),id:"deworming",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),e(a).type.$model=="Boy"||e(a).type.$model=="Girl"?(p(),u("div",ao,[so,r(e(h),{modelValue:e(a).vit_a_supplement.$model,"onUpdate:modelValue":t[25]||(t[25]=s=>e(a).vit_a_supplement.$model=s),options:e(S),id:"vit_a_supplement",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):_("",!0),o("div",lo,[io,r(e(h),{modelValue:e(a).type_of_case.$model,"onUpdate:modelValue":t[26]||(t[26]=s=>e(a).type_of_case.$model=s),options:e(N),id:"type_of_case",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",no,[ro,r(e(h),{modelValue:e(a).case_category.$model,"onUpdate:modelValue":t[27]||(t[27]=s=>e(a).case_category.$model=s),options:e(H),id:"case_category",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",co,[po,r(e(h),{modelValue:e(a).category_of_criteria.$model,"onUpdate:modelValue":t[28]||(t[28]=s=>e(a).category_of_criteria.$model=s),options:e(J),id:"category_of_criteria",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",mo,[_o,r(e(h),{modelValue:e(a).criteria_group.$model,"onUpdate:modelValue":t[29]||(t[29]=s=>e(a).criteria_group.$model=s),options:e(j),id:"criteria_group",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",uo,[go,r(e(de),{modelValue:e(a).date_of_admission.$model,"onUpdate:modelValue":t[30]||(t[30]=s=>e(a).date_of_admission.$model=s),id:"date_of_admission",dateFormat:K.value,maxDate:new Date},null,8,["modelValue","dateFormat","maxDate"])]),o("div",ho,[fo,r(e(F),{modelValue:e(a).admitted_year.$model,"onUpdate:modelValue":t[31]||(t[31]=s=>e(a).admitted_year.$model=s),id:"admitted_year",disabled:""},null,8,["modelValue"])]),o("div",bo,[yo,r(e(F),{modelValue:e(a).admitted_month.$model,"onUpdate:modelValue":t[32]||(t[32]=s=>e(a).admitted_month.$model=s),id:"admitted_month",disabled:""},null,8,["modelValue"])])])]),_:1}),r(e(se),{header:"Review"},{default:te(()=>[o("div",vo,[o("table",$o,[wo,o("tr",null,[Vo,o("td",ko,n(e(a).screening_type.$model),1)]),o("tr",null,[Mo,o("td",Co,n(e(a).state.$model),1)]),o("tr",null,[Ao,o("td",Oo,n(e(a).township.$model),1)]),o("tr",null,[So,o("td",No,n(e(a).village.$model),1)]),o("tr",null,[Do,o("td",zo,n(e(a).patient_name.$model),1)]),o("tr",null,[To,o("td",Uo,n(e(a).type.$model),1)]),o("tr",null,[xo,o("td",Fo,n(e(a).gender.$model),1)]),o("tr",null,[Lo,o("td",Go,n(e(a).date_of_birth.$model),1)]),o("tr",null,[Bo,o("td",Po,n(e(a).age_group.$model),1)]),o("tr",null,[Ro,o("td",qo,n(e(a).disability.$model),1)]),o("tr",null,[Yo,o("td",Io,n(e(a).phone_number.$model),1)]),o("tr",null,[Wo,o("td",Eo,n(e(a).father_name.$model),1)]),o("tr",null,[Ho,o("td",Jo,n(e(a).husband_name.$model),1)]),o("tr",null,[jo,o("td",Zo,n(e(a).receiving_cash_assistant.$model),1)]),o("tr",null,[Ko,o("td",Qo,n(e(a).yes_which_donar.$model),1)]),Xo,ea,o("tr",null,[ta,o("td",oa,n(e(a).muac_cm.$model),1)]),o("tr",null,[aa,o("td",sa,n(e(a).weight_kg.$model),1)]),o("tr",null,[la,o("td",ia,n(e(a).height_cm.$model),1)]),o("tr",null,[na,o("td",da,n(e(a).wfh_zscore.$model),1)]),o("tr",null,[ra,o("td",ca,n(e(a).bilateral_pitting_oedema.$model),1)]),o("tr",null,[pa,o("td",ma,n(e(a).medical_illness_complication.$model),1)]),o("tr",null,[_a,o("td",ua,n(e(a).appetite_test.$model),1)]),o("tr",null,[ga,o("td",ha,n(e(a).immunization_status.$model),1)]),o("tr",null,[fa,o("td",ba,n(e(a).deworming.$model),1)]),o("tr",null,[ya,o("td",va,n(e(a).vit_a_supplement.$model),1)]),o("tr",null,[$a,o("td",wa,n(e(a).type_of_case.$model),1)]),o("tr",null,[Va,o("td",ka,n(e(a).case_category.$model),1)]),o("tr",null,[Ma,o("td",Ca,n(e(a).category_of_criteria.$model),1)]),o("tr",null,[Aa,o("td",Oa,n(e(a).criteria_group.$model),1)]),o("tr",null,[Sa,o("td",Na,n(e(a).date_of_admission.$model),1)]),o("tr",null,[Da,o("td",za,n(e(a).admitted_year.$model),1)]),o("tr",null,[Ta,o("td",Ua,n(e(a).admitted_month.$model),1)])])])]),_:1})]),_:1},8,["activeIndex"]),o("div",xa,[o("div",Fa,[X.$can("index","User")?(p(),z(e(O),{key:0,label:"Cancel",severity:"secondary",text:"",onClick:e(G)},null,8,["onClick"])):_("",!0)]),o("div",La,[e(f)==0?(p(),z(e(O),{key:0,label:"Next  >>",onClick:t[34]||(t[34]=s=>f.value=1),severity:"primary",text:""})):_("",!0)]),o("div",Ga,[e(f)==1?(p(),z(e(O),{key:0,label:"<<  Prev",onClick:t[35]||(t[35]=s=>f.value=0),severity:"primary",text:""})):_("",!0)]),o("div",Ba,[e(f)==2?(p(),z(e(O),{key:0,label:"<<  Prev",onClick:t[36]||(t[36]=s=>f.value=1),severity:"primary",text:""})):_("",!0)]),o("div",Pa,[e(f)==1?(p(),z(e(O),{key:0,label:"Next  >>",onClick:t[37]||(t[37]=s=>f.value=2),severity:"primary",text:""})):_("",!0)]),o("div",null,[e(f)==2?(p(),z(e(O),{key:0,onClick:t[38]||(t[38]=s=>e(T)(!e(a).$invalid)),label:"Create",severity:"primary"})):_("",!0)])]),e(C)?(p(),z(xe,{key:0})):_("",!0)]),r(e(Le))],64)}}},as=Oe(Ra,[["__scopeId","data-v-689a36c5"]]);export{as as default};
