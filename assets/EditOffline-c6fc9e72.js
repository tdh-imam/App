import{C as $e,W as we,z as h,J as Ve,A as ke,K as Ce,S as Oe,M as S,N as Ae,_ as Ge,L as ae,l as ze,o as u,c as g,a as o,b as _,E as e,n as y,q as ie,w as X,e as O,t as c,i as p,g as N,F as Ue,aa as xe,k as D,P as Se,Q as De}from"./index-ebe0833f.js";import{s as b}from"./dropdown.esm-4974ace9.js";import{s as z}from"./inputtext.esm-99611d2a.js";import{s as ne}from"./dialog.esm-777a32dc.js";import{s as de}from"./calendar.esm-15bf190e.js";import{L as Be}from"./Loading-5047130a.js";import{s as le,a as Le}from"./tabpanel.esm-371aef31.js";import{s as Me}from"./confirmdialog.esm-b3a077eb.js";import{u as Ne,r as V,i as re}from"./index-84ed8f99.js";import{u as Te}from"./store-7937dc85.js";import{u as Fe}from"./globalStore-40001001.js";import{E as Re}from"./serverValidation-35937a0f.js";import{w as We}from"./zscore-9e188e39.js";import"./index.esm-3c0a224f.js";const Ie=()=>{const k=Te(),U=Fe(),t=$e(),T=we(),m=h(!0),$=h(!1),F=new Re,P=Ve(),ee=h([{code:"Yangon",name:"Yangon"}]),B=h([]),E=h([]),W=h(!0),q=h([]),G=h([]),x=h(),A=h([]),H=h([]),j=h([]),L=h([]),Z=h([]),K=h([]),I=h([]),J=h([]),v=h([]),r=h([]),te=h([]),C=h([]),w=async()=>{$.value=!0,await U.fetchAllEnums();const i=U.getAllEnumResponse;if(i){const{options:f}=i.data;q.value=f.screening_type.map(d=>({name:d,code:d})),G.value=f.type.map(d=>({name:d,code:d})),x.value=f.gender.map(d=>({name:d,code:d})),A.value=f.age_group.map(d=>({name:d,code:d})),H.value=f.yes_no.map(d=>({name:d,code:d})),j.value=f.donar.map(d=>({name:d,code:d})),L.value=f.wfh_zscore.map(d=>({name:d,code:d})),K.value=f.bilateral_pitting_odema.map(d=>({name:d,code:d})),Z.value=f.appetite_test.map(d=>({name:d,code:d})),I.value=f.immunization_status.map(d=>({name:d,code:d})),J.value=f.type_of_case.map(d=>({name:d,code:d})),v.value=f.case_category.map(d=>({name:d,code:d,visible:!0})),r.value=f.admission_criteria.map(d=>({name:d,code:d,visible:!0})),C.value=f.criteria_group.map(d=>({name:d,code:d,visible:!0}))}$.value=!1},Q=async()=>{$.value=!0,await U.fetchAllTownship();const i=U.getAllTownshipResponse;if(i){const{options:f}=i.data;B.value=f}$.value=!1},M=async()=>{W.value=!0,await U.fetchAllWards({township:s.township});const i=U.getAllWardResponse;i&&(E.value=i,W.value=!1)};ke(async()=>{m.value=T.query.online==="true",await w(),await Q(),await M(),await he()}),Ce(()=>{k.$dispose()});const s=Oe({am_number:"",screening_type:"",state:"Yangon",township:"Hlaingtharya",village:"",patient_name:"",type:"",gender:"",date_of_birth:"",age_group:"",age_month:"",age_year:"",disability:"",phone_number:"",father_name:"",husband_name:"",receiving_cash_assistant:"",yes_which_donar:"",muac_cm:"",weight_kg:"",height_cm:"",wfh_zscore:"",immunization_status:"",deworming:"",vit_a_supplement:"",type_of_case:"",case_category:"",admission_criteria:"",criteria_group:"",date_of_admission:null,admitted_year:null,admitted_month:null}),R=async()=>{P.require({message:"Are you sure you want to delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-primary p-button-text",acceptClass:"p-button-danger p-button-text",accept:async()=>{$.value=!0,await k.deleteOfflineCase({id:parseInt(T.params.id)}),k.getDeleteOfflineCaseResponse&&(oe("Deleted successfully","success"),t.push({name:"caseList",query:{online:m.value}})),$.value=!1},reject:()=>{}})},a={screening_type:{required:V},state:{required:V},township:{required:V},village:{required:V},patient_name:{required:V},type:{required:V},gender:{required:V},date_of_birth:{required:V},age_group:{required:V},age_month:{},age_year:{},disability:{required:V},phone_number:{required:V},father_name:{},husband_name:{},receiving_cash_assistant:{},yes_which_donar:{},muac_cm:{},weight_kg:{},height_cm:{},wfh_zscore:{},immunization_status:{},deworming:{},vit_a_supplement:{},type_of_case:{},case_category:{},admission_criteria:{},criteria_group:{},date_of_admission:{},admitted_year:{integer:re,required:V},admitted_month:{integer:re,required:V}},Y=h(!1),l=Ne(a,s),ce=i=>{Y.value=!0,console.log("submit"),i&&($.value||ue())},ue=async()=>{F.clear(),$.value=!0;try{await k.updateOffline({am_number:s.am_number,screening_type:s.screening_type,state:s.state,township:s.township,village:s.village,patient_name:s.patient_name,type:s.type,gender:s.gender,date_of_birth:s.date_of_birth,age_group:s.age_group,age_month:s.age_month,age_year:s.age_year,disability:s.disability,phone_number:s.phone_number,father_name:s.father_name,husband_name:s.husband_name,receiving_cash_assistant:s.receiving_cash_assistant,yes_which_donar:s.yes_which_donar,muac_cm:s.muac_cm,weight_kg:s.weight_kg,height_cm:s.height_cm,wfh_zscore:s.wfh_zscore,immunization_status:s.immunization_status,deworming:s.deworming,vit_a_supplement:s.vit_a_supplement,type_of_case:s.type_of_case,case_category:s.case_category,category_of_criteria:s.category_of_criteria,criteria_group:s.criteria_group,date_of_admission:s.date_of_admission,admitted_year:s.admitted_year,admitted_month:s.admitted_month},parseInt(T.params.id)),k.getAddResponse&&t.push({name:"caseList",query:{online:m.value}}),$.value=!1}catch(i){if($.value=!1,i.status===422){const f=i.data.data;F.record(f)}}};S(()=>s.township,()=>{M()}),S(()=>s.date_of_admission,()=>{fe()}),S(()=>s.date_of_birth,()=>{const i=new Date(s.date_of_birth),f=new Date;let d=(f.getFullYear()-i.getFullYear())*12;if(d-=i.getMonth(),d+=f.getMonth(),f.getDate()<i.getDate()&&d--,d<6){oe("At lease, 6 Months of Age is required");return}if(["Boy","Girl"].includes(s.type)?(s.age_month=d,s.age_year=""):(s.age_year=parseInt(d/12),s.age_month=""),d>=6&&d<=23){s.age_group=A.value[0].name;return}else if(d>=24&&d<=59){s.age_group=A.value[1].name;return}else if(d>=12*12&&d<=17*12){s.age_group=A.value[2].name;return}else if(d>=18*12&&d<=59*12){s.age_group=A.value[3].name;return}else s.age_group=""}),S(()=>s.type,()=>{switch(s.type){case G.value[0].name:s.gender=x.value[0].name;break;case G.value[1].name:s.gender=x.value[1].name;break;case G.value[2].name:s.gender=x.value[1].name;break;case G.value[3].name:s.gender=x.value[1].name;break}}),S(()=>[s.age_group,s.height_cm,s.weight_kg],()=>{pe()}),S(()=>[s.type_of_case],()=>{me()}),S(()=>[s.criteria_group],()=>{_e()}),S(()=>[s.case_category],()=>{ge()});const pe=()=>{if(A.value.some(f=>f.name==s.age_group)){if(s.weight_kg!==0&&s.height_cm!==0){const f=s.age_group===A.value[0].name?"m24under":"m24to59",d=s.type===G.value[0].name?"boy":"girl",be=Math.round(s.height_cm),se=We[f][d].find(ye=>ye.length===be);if(se!==void 0)if(s.weight_kg<se.minus3){s.wfh_zscore=L.value[0].name;return}else if(s.weight_kg<se.minus2){s.wfh_zscore=L.value[1].name;return}else s.wfh_zscore=L.value[2].name}}else oe("Firstly, you need to set Date of Birth, then Age Group will be defined and WFH ZScore will be automatically selected","warn")},me=()=>{switch(s.type_of_case){case"New":C.value[0].visible=!0,C.value[1].visible=!1,C.value[2].visible=!1,C.value[3].visible=!1,s.criteria_group="New";break;case"Old":s.criteria_group="Re-admission",C.value[0].visible=!1,C.value[1].visible=!0,C.value[2].visible=!0,C.value[3].visible=!0;break}},_e=()=>{switch(s.criteria_group){case"New":s.case_category="MAM New",v.value[0].visible=!0,v.value[1].visible=!1,v.value[2].visible=!1,v.value[3].visible=!1,v.value[4].visible=!1;break;case"Re-admission":s.case_category="MAM Old",v.value[0].visible=!1,v.value[1].visible=!0,v.value[2].visible=!0,v.value[3].visible=!1,v.value[4].visible=!1;break;case"Relapse":s.case_category="Relapse",v.value[0].visible=!1,v.value[1].visible=!1,v.value[2].visible=!1,v.value[3].visible=!0,v.value[4].visible=!1;break;case"Transfer":s.case_category="Transfer",v.value[0].visible=!1,v.value[1].visible=!1,v.value[2].visible=!1,v.value[3].visible=!1,v.value[4].visible=!0;break}},ge=()=>{switch(s.case_category){case"MAM New":s.admission_criteria="New",r.value[0].visible=!0,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!1,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"MAM Old":s.admission_criteria="Return from Cured within 2 month",r.value[0].visible=!1,r.value[1].visible=!0,r.value[2].visible=!0,r.value[3].visible=!1,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"Return form Defaulter":s.admission_criteria="Return from Default within 2 month",r.value[0].visible=!1,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!0,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"Relapse":s.admission_criteria="Return from Cured after 2 month",r.value[0].visible=!1,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!1,r.value[4].visible=!0,r.value[5].visible=!0,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"Transfer":s.admission_criteria="Transfer in Other SFP",r.value[0].visible=!1,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!1,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!0,r.value[7].visible=!0,r.value[8].visible=!0;break}},fe=()=>{const i=new Date(s.date_of_admission);s.admitted_year=i.getFullYear(),s.admitted_month=i.getMonth()+1},ve=()=>{P.require({message:"Are you sure you want to cancel?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-primary p-button-text",acceptClass:"p-button-danger p-button-text",accept:()=>{t.push({name:"caseList",query:{online:m.value}})},reject:()=>{}})},oe=(i,f="error")=>{Ae.emit("show-toast",{severity:f,summary:"",detail:i,life:3e3})},he=async()=>{$.value=!0,F.clear(),await k.fetchOne({id:T.params.id},m.value);const i=k.getOneResponse;i&&(s.am_number=i.am_number,s.id=i.id,s.status=i.status,s.screening_type=i.screening_type,s.state=i.state,s.township=i.township,s.village=i.village,s.patient_name=i.patient_name,s.type=i.type,s.gender=i.gender,s.date_of_birth=i.date_of_birth,s.age_group=i.age_group,s.disability=i.disability,s.phone_number=i.phone_number,s.father_name=i.father_name,s.husband_name=i.husband_name,s.receiving_cash_assistant=i.receiving_cash_assistant,s.yes_which_donar=i.yes_which_donar,s.muac_cm=i.muac_cm,s.weight_kg=i.weight_kg,s.height_cm=i.height_cm,s.wfh_zscore=i.wfh_zscore,s.immunization_status=i.immunization_status,s.deworming=i.deworming,s.vit_a_supplement=i.vit_a_supplement,s.type_of_case=i.type_of_case,s.case_category=i.case_category,s.admission_criteria=i.admission_criteria,s.criteria_group=i.criteria_group,s.date_of_admission=i.date_of_admission,s.admitted_year=i.admitted_year,s.admitted_month=i.admitted_month,$.value=!1)};return{isLoading:$,v$:l,submitted:Y,handleSubmit:ce,errors:F,villageDisabled:W,stateOptions:ee,townshipOptions:B,villageOptions:E,donarOptions:j,yesNoOptions:H,ageGroupOptions:A,genderOptions:x,typeOptions:G,screeningTypeOptions:q,bilateralPittingOedemaOptions:K,zScoreOptions:L,appetiteTestOptions:Z,immunizationStatusOptions:I,typeOfCasesOptions:J,caseCategoriesOptions:v,admissionCriteriaOptions:r,criteriaOptions:te,criteriaGroupsOptions:C,confirmCancel:ve,deleteOfflineCase:R,isOnline:m}};const n=k=>(Se("data-v-5f2b982f"),k=k(),De(),k),Ye={class:"card"},Pe={class:"flex align-items-right"},Ee={class:"flex-1"},qe={class:"flex-2"},He={class:"flex-2"},je={class:"field col-12 md:col-6 lg:col-6"},Ze=n(()=>o("span",{class:"p-error"},"*",-1)),Ke={key:0,class:"p-error"},Je={class:"field col-12 md:col-6 lg:col-6"},Qe=n(()=>o("span",{class:"p-error"},"*",-1)),Xe={key:0,class:"p-error"},et={class:"field col-12 md:col-6 lg:col-6"},tt=n(()=>o("span",{class:"p-error"},"*",-1)),ot={key:0,class:"p-error"},st={class:"field col-12 md:col-6 lg:col-6"},at=n(()=>o("span",{class:"p-error"},"*",-1)),lt={key:0,class:"p-error"},it={class:"field col-12 md:col-6 lg:col-6"},nt=n(()=>o("span",{class:"p-error"},"*",-1)),dt={key:0,class:"p-error"},rt={class:"field col-12 md:col-6 lg:col-6"},ct=n(()=>o("span",{class:"p-error"},"*",-1)),ut={key:0,class:"p-error"},pt={class:"field col-12 md:col-6 lg:col-6"},mt=n(()=>o("span",{class:"p-error"},"*",-1)),_t={key:0,class:"p-error"},gt={class:"field col-12 md:col-6 lg:col-6"},ft=n(()=>o("span",{class:"p-error"},"*",-1)),vt={key:0,class:"p-error"},ht={class:"field col-12 md:col-6 lg:col-6"},bt=n(()=>o("span",{class:"p-error"},"*",-1)),yt={key:0,class:"p-error"},$t={key:0,class:"field col-12 md:col-6 lg:col-6"},wt={key:1,class:"field col-12 md:col-6 lg:col-6"},Vt={class:"field col-12 md:col-6 lg:col-6"},kt=n(()=>o("span",{class:"p-error"},"*",-1)),Ct={key:0,class:"p-error"},Ot={class:"field col-12 md:col-6 lg:col-6"},At=n(()=>o("span",{class:"p-error"},"*",-1)),Gt={key:0,class:"p-error"},zt={key:2,class:"field col-12 md:col-6 lg:col-6"},Ut={key:0,class:"p-error"},xt={key:3,class:"field col-12 md:col-6 lg:col-6"},St={key:0,class:"p-error"},Dt={class:"field col-12 md:col-6 lg:col-6"},Bt=n(()=>o("label",{for:"receiving_cash_assistant"},"Receiving Cash Assistant",-1)),Lt={key:0,class:"p-error"},Mt={key:4,class:"field col-12 md:col-6 lg:col-6"},Nt=n(()=>o("label",{for:"yes_which_donar"},"If Yes, Which Donar?",-1)),Tt={key:0,class:"p-error"},Ft={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},Rt={class:"field col-12 md:col-6 lg:col-6"},Wt=n(()=>o("label",{for:"muac_cm"},"MUAC (cm)",-1)),It={key:0,class:"field col-12 md:col-6 lg:col-6"},Yt=n(()=>o("label",{for:"weight_kg"},"Weight (kg)",-1)),Pt={key:1,class:"field col-12 md:col-6 lg:col-6"},Et=n(()=>o("label",{for:"height_cm"},"Height (cm)",-1)),qt={key:2,class:"field col-12 md:col-6 lg:col-6"},Ht={key:0,class:"p-error"},jt={key:3,class:"field col-12 md:col-6 lg:col-6"},Zt=n(()=>o("label",{for:"immunization_status"},"Immunization Status",-1)),Kt={class:"field col-12 md:col-6 lg:col-6"},Jt=n(()=>o("label",{for:"deworming"},"Deworming",-1)),Qt={key:4,class:"field col-12 md:col-6 lg:col-6"},Xt=n(()=>o("label",{for:"vit_a_supplement"},"Vitamin A Supplement",-1)),eo={class:"field col-12 md:col-6 lg:col-6"},to=n(()=>o("label",{for:"type_of_case"},"Type of Case",-1)),oo={class:"field col-12 md:col-6 lg:col-6"},so=n(()=>o("label",{for:"criteria_group"},"Criteria Group",-1)),ao={class:"field col-12 md:col-6 lg:col-6"},lo=n(()=>o("label",{for:"case_category"},"Case Category",-1)),io={class:"field col-12 md:col-6 lg:col-6"},no=n(()=>o("label",{for:"admission_criteria"},"Admission Criteria",-1)),ro={class:"field col-12 md:col-6 lg:col-6"},co=n(()=>o("label",{for:"date_of_admission"},"Date of Admission",-1)),uo={class:"field col-12 md:col-6 lg:col-6"},po=n(()=>o("label",{for:"admitted_year"},"Admitted Year",-1)),mo={class:"field col-12 md:col-6 lg:col-6"},_o=n(()=>o("label",{for:"admitted_month"},"Admitted Month",-1)),go={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},fo={class:"w-full"},vo=n(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Biographic Info")],-1)),ho=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Screening Type",-1)),bo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},yo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"State",-1)),$o={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},wo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Township",-1)),Vo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ko=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Village/Ward",-1)),Co={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Oo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Patient Name",-1)),Ao={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Go=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type",-1)),zo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Uo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Gender",-1)),xo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},So=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Birth",-1)),Do={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Bo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Group",-1)),Lo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Mo={key:0},No=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Month",-1)),To={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Fo={key:1},Ro=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Year",-1)),Wo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Io=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Disability",-1)),Yo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Po=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Phone Number",-1)),Eo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},qo={key:2},Ho=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Father's Name",-1)),jo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Zo={key:3},Ko=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Husband's Name",-1)),Jo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Qo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Receiving Cash Assistant",-1)),Xo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},es={key:4},ts=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"If Yes, Which Donar?",-1)),os={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ss=n(()=>o("tr",null,[o("th",{colspan:"2"},"...")],-1)),as=n(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Screening")],-1)),ls=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"MUAC in cm",-1)),is={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ns={key:5},ds=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Weight in kg",-1)),rs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},cs={key:6},us=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Height (cm)",-1)),ps={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ms={key:7},_s=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"WFH Z-Score",-1)),gs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},fs={key:8},vs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Immunization Status",-1)),hs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},bs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Deworming",-1)),ys={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},$s={key:9},ws=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Vitamin A Supplement",-1)),Vs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ks=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type of Case",-1)),Cs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Os=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Case Category",-1)),As={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Gs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Criteria Group",-1)),zs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Us=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Admission",-1)),xs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ss=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Year",-1)),Ds={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Bs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Month",-1)),Ls={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ms={class:"flex justify-content-end"},Ns={class:"mr-2"},Ts={class:"mr-2"},Fs={class:"mr-2"},Rs={class:"mr-2"},Ws={class:"mr-2"},Is={__name:"EditOffline",setup(k){const{isLoading:U,v$:t,handleSubmit:T,submitted:m,villageDisabled:$,stateOptions:F,townshipOptions:P,villageOptions:ee,yesNoOptions:B,donarOptions:E,ageGroupOptions:W,genderOptions:q,typeOptions:G,screeningTypeOptions:x,zScoreOptions:A,immunizationStatusOptions:H,typeOfCasesOptions:j,caseCategoriesOptions:L,admissionCriteriaOptions:Z,criteriaGroupsOptions:K,confirmCancel:I,deleteOfflineCase:J,isOnline:v}=Ie(),r=ae(()=>K.value.filter(a=>a.visible)),te=ae(()=>L.value.filter(a=>a.visible)),C=ae(()=>Z.value.filter(a=>a.visible)),w=h(0),Q=h("yy-mm-dd"),M=h(null),s=()=>{setTimeout(()=>{M.value&&(M.value.scrollTop=M.value.scrollHeight)},100)};return(R,a)=>{const Y=ze("tooltip");return u(),g(Ue,null,[o("div",Ye,[o("div",Pe,[o("div",Ee,[_(e(xe),{value:e(v)?"Online":"Offline",class:y(e(v)?"p-badge-success":"badge-secondary")},null,8,["value","class"])]),o("div",qe,[ie(_(e(D),{onClick:e(J),icon:"pi pi-trash",text:"",severity:"danger",rounded:""},null,8,["onClick"]),[[Y,"Delete",void 0,{top:!0}]])]),o("div",He,[ie(_(e(D),{severity:"secondary",onClick:e(I),icon:"pi pi-times",text:"",rounded:""},null,8,["onClick"]),[[Y,"Cancel",void 0,{top:!0}]])])]),_(e(Le),{activeIndex:w.value,"onUpdate:activeIndex":a[32]||(a[32]=l=>w.value=l),scrollable:!0},{default:X(()=>[_(e(le),{header:"Biographic Info"},{default:X(()=>[o("div",{ref_key:"biContainer",ref:M,class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},[o("div",je,[o("label",{for:"screening_type",class:y({"p-error":e(t).screening_type.$invalid&&e(m)})},[O("Screening Type"),Ze],2),_(e(b),{id:"screening_type",modelValue:e(t).screening_type.$model,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).screening_type.$model=l),options:e(x),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).screening_type.$invalid&&e(m)||e(t).screening_type.$pending.$response?(u(),g("small",Ke,c(e(t).screening_type.required.$message.replace("Value","Screening Type")),1)):p("",!0)]),o("div",Je,[o("label",{for:"state",class:y({"p-error":e(t).state.$invalid&&e(m)})},[O("State"),Qe],2),_(e(b),{id:"state",modelValue:e(t).state.$model,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).state.$model=l),options:e(F),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).state.$invalid&&e(m)?(u(),g("small",Xe,c(e(t).state.$message),1)):p("",!0)]),o("div",et,[o("label",{for:"township",class:y({"p-error":e(t).township.$invalid&&e(m)})},[O("Township"),tt],2),_(e(b),{id:"township",modelValue:e(t).township.$model,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).township.$model=l),options:e(P),optionLabel:"name_mm",optionValue:"name"},null,8,["modelValue","options"]),e(t).township.$invalid&&e(m)?(u(),g("small",ot,c(e(t).township.$message),1)):p("",!0)]),o("div",st,[o("label",{for:"village",class:y({"p-error":e(t).village.$invalid&&e(m)})},[O("Village/Ward"),at],2),_(e(b),{disabled:e($),id:"village",modelValue:e(t).village.$model,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).village.$model=l),options:e(ee),optionLabel:"name_mm",optionValue:"name_en"},null,8,["disabled","modelValue","options"]),e(t).village.$invalid&&e(m)?(u(),g("small",lt,c(e(t).village.$message),1)):p("",!0)]),o("div",it,[o("label",{for:"patient_name",class:y({"p-error":e(t).patient_name.$invalid&&e(m)})},[O("Patient Name"),nt],2),_(e(z),{id:"patient_name",modelValue:e(t).patient_name.$model,"onUpdate:modelValue":a[4]||(a[4]=l=>e(t).patient_name.$model=l)},null,8,["modelValue"]),e(t).patient_name.$invalid&&e(m)?(u(),g("small",dt,c(e(t).patient_name.$message),1)):p("",!0)]),o("div",rt,[o("label",{for:"type",class:y({"p-error":e(t).type.$invalid&&e(m)})},[O("Type"),ct],2),_(e(b),{id:"type",modelValue:e(t).type.$model,"onUpdate:modelValue":a[5]||(a[5]=l=>e(t).type.$model=l),options:e(G),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).type.$invalid&&e(m)?(u(),g("small",ut,c(e(t).type.$message),1)):p("",!0)]),o("div",pt,[o("label",{for:"gender",class:y({"p-error":e(t).gender.$invalid&&e(m)})},[O("Gender"),mt],2),_(e(b),{id:"gender",modelValue:e(t).gender.$model,"onUpdate:modelValue":a[6]||(a[6]=l=>e(t).gender.$model=l),options:e(q),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).gender.$invalid&&e(m)?(u(),g("small",_t,c(e(t).gender.$message),1)):p("",!0)]),o("div",gt,[o("label",{for:"date_of_birth",class:y({"p-error":e(t).date_of_birth.$invalid&&e(m)})},[O("Date of Birth"),ft],2),_(e(de),{id:"date_of_birth",modelValue:e(t).date_of_birth.$model,"onUpdate:modelValue":a[7]||(a[7]=l=>e(t).date_of_birth.$model=l),dateFormat:Q.value,manualInput:"true"},null,8,["modelValue","dateFormat"]),e(t).date_of_birth.$invalid&&e(m)?(u(),g("small",vt,c(e(t).date_of_birth.$message),1)):p("",!0)]),o("div",ht,[o("label",{for:"age_group",class:y({"p-error":e(t).age_group.$invalid&&e(m)})},[O("Age Group"),bt],2),_(e(b),{id:"age_group",modelValue:e(t).age_group.$model,"onUpdate:modelValue":a[8]||(a[8]=l=>e(t).age_group.$model=l),options:e(W),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).age_group.$invalid&&e(m)?(u(),g("small",yt,c(e(t).age_group.$message),1)):p("",!0)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("div",$t,[o("label",{for:"age_month",class:y({"p-error":e(t).age_month.$invalid&&e(m)})},"Age Month",2),_(e(z),{id:"age_month",modelValue:e(t).age_month.$model,"onUpdate:modelValue":a[9]||(a[9]=l=>e(t).age_month.$model=l),readonly:""},null,8,["modelValue"])])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),g("div",wt,[o("label",{for:"age_year",class:y({"p-error":e(t).age_year.$invalid&&e(m)})},"Age Year",2),_(e(z),{id:"age_year",modelValue:e(t).age_year.$model,"onUpdate:modelValue":a[10]||(a[10]=l=>e(t).age_year.$model=l),readonly:""},null,8,["modelValue"])])):p("",!0),o("div",Vt,[o("label",{for:"disability",class:y({"p-error":e(t).disability.$invalid&&e(m)})},[O("Disability"),kt],2),_(e(b),{id:"disability",modelValue:e(t).disability.$model,"onUpdate:modelValue":a[11]||(a[11]=l=>e(t).disability.$model=l),options:e(B),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).disability.$invalid&&e(m)?(u(),g("small",Ct,c(e(t).disability.$message),1)):p("",!0)]),o("div",Ot,[o("label",{for:"phone_number",class:y({"p-error":e(t).phone_number.$invalid&&e(m)})},[O("Phone Number"),At],2),_(e(z),{id:"phone_number",modelValue:e(t).phone_number.$model,"onUpdate:modelValue":a[12]||(a[12]=l=>e(t).phone_number.$model=l)},null,8,["modelValue"]),e(t).phone_number.$invalid&&e(m)?(u(),g("small",Gt,c(e(t).phone_number.$message),1)):p("",!0)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("div",zt,[o("label",{for:"father_name",class:y({"p-error":e(t).father_name.$invalid&&e(m)})},"Father's Name",2),_(e(z),{id:"father_name",modelValue:e(t).father_name.$model,"onUpdate:modelValue":a[13]||(a[13]=l=>e(t).father_name.$model=l)},null,8,["modelValue"]),e(t).father_name.$invalid&&e(m)?(u(),g("small",Ut,c(e(t).father_name.$message),1)):p("",!0)])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),g("div",xt,[o("label",{for:"husband_name",class:y({"p-error":e(t).husband_name.$invalid&&e(m)})},"Husband's Name",2),_(e(z),{id:"husband_name",modelValue:e(t).husband_name.$model,"onUpdate:modelValue":a[14]||(a[14]=l=>e(t).husband_name.$model=l)},null,8,["modelValue"]),e(t).husband_name.$invalid&&e(m)?(u(),g("small",St,c(e(t).husband_name.$message),1)):p("",!0)])):p("",!0),o("div",Dt,[Bt,_(e(b),{id:"receiving_cash_assistant",onChange:a[15]||(a[15]=l=>s()),modelValue:e(t).receiving_cash_assistant.$model,"onUpdate:modelValue":a[16]||(a[16]=l=>e(t).receiving_cash_assistant.$model=l),options:e(B),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).receiving_cash_assistant.$invalid&&e(m)?(u(),g("small",Lt,c(e(t).receiving_cash_assistant.$message),1)):p("",!0)]),e(t).receiving_cash_assistant.$model=="Yes"?(u(),g("div",Mt,[Nt,_(e(b),{id:"yes_which_donar",modelValue:e(t).yes_which_donar.$model,"onUpdate:modelValue":a[17]||(a[17]=l=>e(t).yes_which_donar.$model=l),options:e(E),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).yes_which_donar.$invalid&&e(m)?(u(),g("small",Tt,c(e(t).yes_which_donar.$message),1)):p("",!0)])):p("",!0)],512)]),_:1}),_(e(le),{header:"Screening"},{default:X(()=>[o("div",Ft,[o("div",Rt,[Wt,_(e(ne),{modelValue:e(t).muac_cm.$model,"onUpdate:modelValue":a[18]||(a[18]=l=>e(t).muac_cm.$model=l),id:"muac_cm",min:8,max:30,minFractionDigits:2},null,8,["modelValue"])]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("div",It,[Yt,_(e(ne),{modelValue:e(t).weight_kg.$model,"onUpdate:modelValue":a[19]||(a[19]=l=>e(t).weight_kg.$model=l),id:"weight_kg",min:1.5,max:25,minFractionDigits:2},null,8,["modelValue"])])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("div",Pt,[Et,_(e(z),{type:"number",modelValue:e(t).height_cm.$model,"onUpdate:modelValue":a[20]||(a[20]=l=>e(t).height_cm.$model=l),id:"height_cm",min:45,max:120,minFractionDigits:2},null,8,["modelValue"])])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("div",qt,[o("label",{for:"wfh_zscore",class:y({"p-error":e(t).wfh_zscore.$invalid&&e(m)})},"WFH Z-Score",2),_(e(b),{id:"wfh_zscore",modelValue:e(t).wfh_zscore.$model,"onUpdate:modelValue":a[21]||(a[21]=l=>e(t).wfh_zscore.$model=l),options:e(A),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).type.$invalid&&e(m)?(u(),g("small",Ht,c(e(t).type.$message),1)):p("",!0)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("div",jt,[Zt,_(e(b),{modelValue:e(t).immunization_status.$model,"onUpdate:modelValue":a[22]||(a[22]=l=>e(t).immunization_status.$model=l),options:e(H),id:"immunization_status",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):p("",!0),o("div",Kt,[Jt,_(e(b),{modelValue:e(t).deworming.$model,"onUpdate:modelValue":a[23]||(a[23]=l=>e(t).deworming.$model=l),options:e(B),id:"deworming",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("div",Qt,[Xt,_(e(b),{modelValue:e(t).vit_a_supplement.$model,"onUpdate:modelValue":a[24]||(a[24]=l=>e(t).vit_a_supplement.$model=l),options:e(B),id:"vit_a_supplement",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):p("",!0),o("div",eo,[to,_(e(b),{modelValue:e(t).type_of_case.$model,"onUpdate:modelValue":a[25]||(a[25]=l=>e(t).type_of_case.$model=l),options:e(j),id:"type_of_case",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",oo,[so,_(e(b),{modelValue:e(t).criteria_group.$model,"onUpdate:modelValue":a[26]||(a[26]=l=>e(t).criteria_group.$model=l),options:r.value,id:"criteria_group",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",ao,[lo,_(e(b),{modelValue:e(t).case_category.$model,"onUpdate:modelValue":a[27]||(a[27]=l=>e(t).case_category.$model=l),options:te.value,id:"case_category",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",io,[no,_(e(b),{modelValue:e(t).admission_criteria.$model,"onUpdate:modelValue":a[28]||(a[28]=l=>e(t).admission_criteria.$model=l),options:C.value,id:"admission_criteria",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",ro,[co,_(e(de),{modelValue:e(t).date_of_admission.$model,"onUpdate:modelValue":a[29]||(a[29]=l=>e(t).date_of_admission.$model=l),id:"date_of_admission",dateFormat:Q.value,maxDate:new Date},null,8,["modelValue","dateFormat","maxDate"])]),o("div",uo,[po,_(e(z),{modelValue:e(t).admitted_year.$model,"onUpdate:modelValue":a[30]||(a[30]=l=>e(t).admitted_year.$model=l),id:"admitted_year",disabled:""},null,8,["modelValue"])]),o("div",mo,[_o,_(e(z),{modelValue:e(t).admitted_month.$model,"onUpdate:modelValue":a[31]||(a[31]=l=>e(t).admitted_month.$model=l),id:"admitted_month",disabled:""},null,8,["modelValue"])])])]),_:1}),_(e(le),{header:"Review"},{default:X(()=>[o("div",go,[o("table",fo,[vo,o("tr",null,[ho,o("td",bo,c(e(t).screening_type.$model),1)]),o("tr",null,[yo,o("td",$o,c(e(t).state.$model),1)]),o("tr",null,[wo,o("td",Vo,c(e(t).township.$model),1)]),o("tr",null,[ko,o("td",Co,c(e(t).village.$model),1)]),o("tr",null,[Oo,o("td",Ao,c(e(t).patient_name.$model),1)]),o("tr",null,[Go,o("td",zo,c(e(t).type.$model),1)]),o("tr",null,[Uo,o("td",xo,c(e(t).gender.$model),1)]),o("tr",null,[So,o("td",Do,c(e(t).date_of_birth.$model),1)]),o("tr",null,[Bo,o("td",Lo,c(e(t).age_group.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("tr",Mo,[No,o("td",To,c(e(t).age_month.$model),1)])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),g("tr",Fo,[Ro,o("td",Wo,c(e(t).age_year.$model),1)])):p("",!0),o("tr",null,[Io,o("td",Yo,c(e(t).disability.$model),1)]),o("tr",null,[Po,o("td",Eo,c(e(t).phone_number.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("tr",qo,[Ho,o("td",jo,c(e(t).father_name.$model),1)])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),g("tr",Zo,[Ko,o("td",Jo,c(e(t).husband_name.$model),1)])):p("",!0),o("tr",null,[Qo,o("td",Xo,c(e(t).receiving_cash_assistant.$model),1)]),e(t).receiving_cash_assistant.$model=="Yes"?(u(),g("tr",es,[ts,o("td",os,c(e(t).yes_which_donar.$model),1)])):p("",!0),ss,as,o("tr",null,[ls,o("td",is,c(e(t).muac_cm.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("tr",ns,[ds,o("td",rs,c(e(t).weight_kg.$model),1)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("tr",cs,[us,o("td",ps,c(e(t).height_cm.$model),1)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("tr",ms,[_s,o("td",gs,c(e(t).wfh_zscore.$model),1)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("tr",fs,[vs,o("td",hs,c(e(t).immunization_status.$model),1)])):p("",!0),o("tr",null,[bs,o("td",ys,c(e(t).deworming.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),g("tr",$s,[ws,o("td",Vs,c(e(t).vit_a_supplement.$model),1)])):p("",!0),o("tr",null,[ks,o("td",Cs,c(e(t).type_of_case.$model),1)]),o("tr",null,[Os,o("td",As,c(e(t).case_category.$model),1)]),o("tr",null,[Gs,o("td",zs,c(e(t).criteria_group.$model),1)]),o("tr",null,[Us,o("td",xs,c(e(t).date_of_admission.$model),1)]),o("tr",null,[Ss,o("td",Ds,c(e(t).admitted_year.$model),1)]),o("tr",null,[Bs,o("td",Ls,c(e(t).admitted_month.$model),1)])])])]),_:1})]),_:1},8,["activeIndex"]),o("div",Ms,[o("div",Ns,[R.$can("index","MyCase")?(u(),N(e(D),{key:0,label:"Cancel",severity:"secondary",text:"",onClick:e(I)},null,8,["onClick"])):p("",!0)]),o("div",Ts,[w.value==0?(u(),N(e(D),{key:0,label:"Next  >>",onClick:a[33]||(a[33]=l=>w.value=1),severity:"primary",text:""})):p("",!0)]),o("div",Fs,[w.value==1?(u(),N(e(D),{key:0,label:"<<  Prev",onClick:a[34]||(a[34]=l=>w.value=0),severity:"primary",text:""})):p("",!0)]),o("div",Rs,[w.value==2?(u(),N(e(D),{key:0,label:"<<  Prev",onClick:a[35]||(a[35]=l=>w.value=1),severity:"primary",text:""})):p("",!0)]),o("div",Ws,[w.value==1?(u(),N(e(D),{key:0,label:"Next  >>",onClick:a[36]||(a[36]=l=>w.value=2),severity:"primary",text:""})):p("",!0)]),o("div",null,[w.value==2?(u(),N(e(D),{key:0,onClick:a[37]||(a[37]=l=>e(T)(!e(t).$invalid)),label:"Save",severity:"primary"})):p("",!0)])]),e(U)?(u(),N(Be,{key:0})):p("",!0)]),_(e(Me))],64)}}},sa=Ge(Is,[["__scopeId","data-v-5f2b982f"]]);export{sa as default};
