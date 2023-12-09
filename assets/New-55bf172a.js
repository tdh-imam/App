import{A as ue,D as ge,f as h,u as he,g as fe,h as be,B as ve,j as Q,E as ye,_ as $e,V as Ve,o as p,c as g,a as o,b as r,k as e,q as v,Y as le,w as X,e as V,t as d,n as m,l as we,m as U,F as ke,a6 as Ce,s as D,y as Me,z as Oe}from"./index-bf271bc2.js";import{s as f}from"./dropdown.esm-502d7d03.js";import{s as N}from"./inputtext.esm-bbf7483a.js";import{s as te}from"./focustrap.esm-557106f8.js";import{s as ne}from"./calendar.esm-7aeb8fdd.js";import{L as De}from"./Loading-8d26b6d5.js";import{s as se,a as Ae}from"./tabpanel.esm-48fdc52a.js";import{s as Ue}from"./confirmdialog.esm-9d984b49.js";import{u as xe,r as y,i as ie}from"./index-4af20253.js";import{u as Ne}from"./store-272cfbb3.js";import{u as Se}from"./globalStore-f89a3a69.js";import{E as ze}from"./serverValidation-35937a0f.js";import"./index.esm-07af5976.js";import"./dialog.esm-4c6f0e5e.js";const Fe=()=>{const w=Ne(),k=Se(),t=ue(),L=ge(),c=h(!0),$=h(!1),T=new ze,B=h(0),ee=he(),A=h([{code:"Yangon",name:"Yangon"}]),G=h([]),Y=h([]),S=h(!0),q=h([]),C=h([]),M=h(),O=h([]),I=h([]),P=h([]),W=h([]),R=h([]),E=h([]),H=h([]),z=h([]),J=h([]),F=h([]),b=h([]),j=async()=>{$.value=!0,await k.fetchAllEnums();const _=k.getAllEnumResponse;if(_){const{options:u}=_.data;q.value=u.screening_type.map(i=>({name:i,code:i})),C.value=u.type.map(i=>({name:i,code:i})),M.value=u.gender.map(i=>({name:i,code:i})),O.value=u.age_group.map(i=>({name:i,code:i})),I.value=u.yes_no.map(i=>({name:i,code:i})),P.value=u.donar.map(i=>({name:i,code:i})),W.value=u.wfh_zscore.map(i=>({name:i,code:i})),E.value=u.bilateral_pitting_odema.map(i=>({name:i,code:i})),R.value=u.appetite_test.map(i=>({name:i,code:i})),H.value=u.immunization_status.map(i=>({name:i,code:i})),z.value=u.type_of_case.map(i=>({name:i,code:i})),J.value=u.case_category.map(i=>({name:i,code:i})),F.value=u.category_of_criteria.map(i=>({name:i,code:i})),b.value=u.criteria_group.map(i=>({name:i,code:i}))}$.value=!1},x=async()=>{$.value=!0,await k.fetchAllTownship();const _=k.getAllTownshipResponse;if(_){const{options:u}=_.data;G.value=u}$.value=!1},Z=async()=>{S.value=!0,await k.fetchAllWards({township:s.township});const _=k.getAllWardResponse;_&&(Y.value=_,S.value=!1)};fe(()=>{c.value=L.query.online!==void 0?JSON.parse(L.query.online):!0,j(),x(),Z()}),be(()=>{w.$dispose()});const s=ve({am_number:"",screening_type:"",state:"Yangon",township:"Hlaingtharya",village:"",patient_name:"",type:"",gender:"",date_of_birth:"",age_group:"",disability:"",phone_number:"",father_name:"",husband_name:"",receiving_cash_assistant:"",yes_which_donar:"",muac_cm:"",weight_kg:"",height_cm:"",wfh_zscore:"",bilateral_pitting_oedema:"",medical_illness_complication:"",appetite_test:"",immunization_status:"",deworming:"",vit_a_supplement:"",type_of_case:"",case_category:"",category_of_criteria:"",criteria_group:"",date_of_admission:null,admitted_year:null,admitted_month:null});function a(){const _=["John","Jane","Sarah","Michael","Emily","David","Anna","James","Laura","Robert"],u=["Doe","Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Wilson"],i=_[Math.floor(Math.random()*_.length)],_e=u[Math.floor(Math.random()*u.length)];return`${i} ${_e}`}function K(){s.screening_type="Active Screening",s.state="Yangon",s.township="Hlaingtharya",s.village="No (9) Ward",s.patient_name=a(),s.type="Girl",s.gender=Math.random()>.5?"Male":"Female",s.date_of_birth="1990-01-01",s.age_group="12-17 Years",s.disability=Math.random()>.5?"Yes":"No",s.phone_number="09912345678",s.father_name=a(),s.husband_name=a(),s.receiving_cash_assistant=Math.random()>.5?"Yes":"No",s.yes_which_donar=Math.random()>.5?"WFP":"Other",s.muac_cm=(Math.random()*(30-8)+8).toFixed(1),s.weight_kg=(Math.random()*(25-1.5)+1.5).toFixed(1),s.height_cm=(Math.random()*(120-45)+45).toFixed(1),s.wfh_zscore=Math.random()>.5?"SAM":"MAM",s.bilateral_pitting_oedema=Math.random()>.5?"1":"3",s.medical_illness_complication=Math.random()>.5?"Yes":"No",s.appetite_test=Math.random()>.5?"Pass":"Fail",s.immunization_status=Math.random()>.5?"Ongoing":"Complete",s.deworming=Math.random()>.5?"Yes":"No",s.vit_a_supplement=Math.random()>.5?"Yes":"No",s.type_of_case=Math.random()>.5?"MAM":"SAM with Complication",s.case_category=Math.random()>.5?"MAM Refer to SFP":"SAM Refer to OTP",s.category_of_criteria=Math.random()>.5?"New":"Relapse",s.criteria_group=Math.random()>.5?"New":"Relapse",s.date_of_admission=new Date().toISOString().slice(0,10),s.admitted_year=new Date().getFullYear(),s.admitted_month=new Date().getMonth()+1}const l={screening_type:{required:y},state:{required:y},township:{required:y},village:{required:y},patient_name:{required:y},type:{required:y},gender:{required:y},date_of_birth:{required:y},age_group:{required:y},disability:{required:y},phone_number:{required:y},father_name:{},husband_name:{},receiving_cash_assistant:{},yes_which_donar:{},muac_cm:{},weight_kg:{},height_cm:{},wfh_zscore:{},bilateral_pitting_oedema:{},medical_illness_complication:{},appetite_test:{},immunization_status:{},deworming:{},vit_a_supplement:{},type_of_case:{},case_category:{},category_of_criteria:{},criteria_group:{},date_of_admission:{required:y},admitted_year:{integer:ie,required:y},admitted_month:{integer:ie,required:y}},ae=h(!1),de=xe(l,s),re=_=>{if(ae.value=!0,console.log("submit"),!_){B.value=0;return}$.value||ce()},ce=async()=>{T.clear(),$.value=!0;try{await w.add({screening_type:s.screening_type,state:s.state,township:s.township,village:s.village,patient_name:s.patient_name,type:s.type,gender:s.gender,date_of_birth:s.date_of_birth,age_group:s.age_group,disability:s.disability,phone_number:s.phone_number,father_name:s.father_name,husband_name:s.husband_name,receiving_cash_assistant:s.receiving_cash_assistant,yes_which_donar:s.yes_which_donar,muac_cm:s.muac_cm,weight_kg:s.weight_kg,height_cm:s.height_cm,wfh_zscore:s.wfh_zscore,bilateral_pitting_oedema:s.bilateral_pitting_oedema,medical_illness_complication:s.medical_illness_complication,appetite_test:s.appetite_test,immunization_status:s.immunization_status,deworming:s.deworming,vit_a_supplement:s.vit_a_supplement,type_of_case:s.type_of_case,case_category:s.case_category,category_of_criteria:s.category_of_criteria,criteria_group:s.criteria_group,date_of_admission:s.date_of_admission,admitted_year:s.admitted_year,admitted_month:s.admitted_month},c.value),w.getAddResponse&&(oe("Case for patient "+s.patient_name+" is created.","success"),t.push({name:"caseList",query:{online:c.value}})),$.value=!1}catch(_){$.value=!1,_.status===422&&oe(_.data.message,1e4)}};Q(()=>s.township,()=>{Z()}),Q(()=>s.date_of_admission,()=>{pe()}),Q(()=>s.date_of_birth,()=>{const _=new Date(s.date_of_birth),u=new Date;let i=(u.getFullYear()-_.getFullYear())*12;if(i-=_.getMonth(),i+=u.getMonth(),u.getDate()<_.getDate()&&i--,i<6){oe("At lease, 6 Months of Age is required");return}i>=6&&i<=23?s.age_group=O.value[0].name:i>=24&&i<=59?s.age_group=O.value[1].name:i>=12*12&&i<=17*12?s.age_group=O.value[2].name:i>=18*12&&i<=59*12?s.age_group=O.value[3].name:s.age_group=""}),Q(()=>s.type,()=>{switch(s.type){case C.value[0].name:s.gender=M.value[0].name;break;case C.value[1].name:s.gender=M.value[1].name;break;case C.value[2].name:s.gender=M.value[1].name;break;case C.value[3].name:s.gender=M.value[1].name;break}});const pe=()=>{const _=new Date(s.date_of_admission);s.admitted_year=_.getFullYear(),s.admitted_month=_.getMonth()+1},me=()=>{ee.require({message:"Are you sure you want to cancel?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-primary p-button-text",acceptClass:"p-button-danger p-button-text",accept:()=>{t.push({name:"caseList",query:{online:c.value}})},reject:()=>{}})},oe=(_,u="error",i=5e3)=>{ye.emit("show-toast",{severity:u,summary:"",detail:_,life:i})};return{isLoading:$,v$:de,submitted:ae,handleSubmit:re,errors:T,villageDisabled:S,stateOptions:A,townshipOptions:G,villageOptions:Y,donarOptions:P,yesNoOptions:I,ageGroupOptions:O,genderOptions:M,typeOptions:C,screeningTypeOptions:q,bilateralPittingOedemaOptions:E,zScoreOptions:W,appetiteTestOptions:R,immunizationStatusOptions:H,typeOfCasesOptions:z,caseCategoriesOptions:J,criteriaOptions:F,criteriaGroupsOptions:b,confirmCancel:me,generateFakeData:K,isOnline:c,activeTab:B}};const n=w=>(Me("data-v-0985e502"),w=w(),Oe(),w),Le={class:"card"},Te={class:"flex align-items-right"},Be={class:"flex-1"},Ge={class:"flex-2"},Ye={class:"flex-2"},qe={class:"field col-12 md:col-6 lg:col-6"},Ie=n(()=>o("span",{class:"p-error"},"*",-1)),Pe={key:0,class:"p-error"},We={class:"field col-12 md:col-6 lg:col-6"},Re=n(()=>o("span",{class:"p-error"},"*",-1)),Ee={key:0,class:"p-error"},He={class:"field col-12 md:col-6 lg:col-6"},Je=n(()=>o("span",{class:"p-error"},"*",-1)),je={key:0,class:"p-error"},Ze={class:"field col-12 md:col-6 lg:col-6"},Ke=n(()=>o("span",{class:"p-error"},"*",-1)),Qe={key:0,class:"p-error"},Xe={class:"field col-12 md:col-6 lg:col-6"},eo=n(()=>o("span",{class:"p-error"},"*",-1)),oo={key:0,class:"p-error"},to={class:"field col-12 md:col-6 lg:col-6"},so=n(()=>o("span",{class:"p-error"},"*",-1)),ao={key:0,class:"p-error"},lo={class:"field col-12 md:col-6 lg:col-6"},no=n(()=>o("span",{class:"p-error"},"*",-1)),io={key:0,class:"p-error"},ro={class:"field col-12 md:col-6 lg:col-6"},co=n(()=>o("span",{class:"p-error"},"*",-1)),po={key:0,class:"p-error"},mo={class:"field col-12 md:col-6 lg:col-6"},_o=n(()=>o("span",{class:"p-error"},"*",-1)),uo={key:0,class:"p-error"},go={class:"field col-12 md:col-6 lg:col-6"},ho=n(()=>o("span",{class:"p-error"},"*",-1)),fo={key:0,class:"p-error"},bo={class:"field col-12 md:col-6 lg:col-6"},vo=n(()=>o("span",{class:"p-error"},"*",-1)),yo={key:0,class:"p-error"},$o={key:0,class:"field col-12 md:col-6 lg:col-6"},Vo={key:0,class:"p-error"},wo={key:1,class:"field col-12 md:col-6 lg:col-6"},ko={key:0,class:"p-error"},Co={class:"field col-12 md:col-6 lg:col-6"},Mo=n(()=>o("label",{for:"receiving_cash_assistant"},"Receiving Cash Assistant",-1)),Oo={key:0,class:"p-error"},Do={key:2,class:"field col-12 md:col-6 lg:col-6"},Ao=n(()=>o("label",{for:"yes_which_donar"},"If Yes, Which Donar?",-1)),Uo={key:0,class:"p-error"},xo={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},No={key:0,class:"field col-12 md:col-6 lg:col-6"},So=n(()=>o("label",{for:"muac_cm"},"MUAC in cm [8 to 30]",-1)),zo={key:1,class:"field col-12 md:col-6 lg:col-6"},Fo=n(()=>o("label",{for:"weight_kg"},"Weight in kg [1.5 to 25]",-1)),Lo={key:2,class:"field col-12 md:col-6 lg:col-6"},To=n(()=>o("label",{for:"height_cm"},"Height in cm [45 to 120]",-1)),Bo={key:3,class:"field col-12 md:col-6 lg:col-6"},Go={key:0,class:"p-error"},Yo={class:"field col-12 md:col-6 lg:col-6"},qo=n(()=>o("label",{for:"bilateral_pitting_oedema"},"Bilateral Pitting Oedema",-1)),Io={class:"field col-12 md:col-6 lg:col-6"},Po=n(()=>o("label",{for:"medical_illness_complication"},"Medical Illness Complication",-1)),Wo={class:"field col-12 md:col-6 lg:col-6"},Ro=n(()=>o("label",{for:"appetite_test"},"Appetite Test",-1)),Eo={class:"field col-12 md:col-6 lg:col-6"},Ho=n(()=>o("label",{for:"immunization_status"},"Immunization Status",-1)),Jo={class:"field col-12 md:col-6 lg:col-6"},jo=n(()=>o("label",{for:"deworming"},"Deworming",-1)),Zo={class:"field col-12 md:col-6 lg:col-6"},Ko=n(()=>o("label",{for:"vit_a_supplement"},"Vitamin A Supplement",-1)),Qo={class:"field col-12 md:col-6 lg:col-6"},Xo=n(()=>o("label",{for:"type_of_case"},"Type of Case",-1)),et={class:"field col-12 md:col-6 lg:col-6"},ot=n(()=>o("label",{for:"case_category"},"Case Category",-1)),tt={class:"field col-12 md:col-6 lg:col-6"},st=n(()=>o("label",{for:"category_of_criteria"},"Category of Criteria",-1)),at={class:"field col-12 md:col-6 lg:col-6"},lt=n(()=>o("label",{for:"criteria_group"},"Criteria Group",-1)),nt={class:"field col-12 md:col-6 lg:col-6"},it=n(()=>o("label",{for:"date_of_admission"},"Date of Admission",-1)),dt={class:"field col-12 md:col-6 lg:col-6"},rt=n(()=>o("label",{for:"admitted_year"},"Admitted Year",-1)),ct={class:"field col-12 md:col-6 lg:col-6"},pt=n(()=>o("label",{for:"admitted_month"},"Admitted Month",-1)),mt={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},_t={class:"w-full"},ut=n(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Biographic Info")],-1)),gt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Screening Type",-1)),ht={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ft=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"State",-1)),bt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},vt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Township",-1)),yt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},$t=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Village/Ward",-1)),Vt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},wt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Patient Name",-1)),kt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ct=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type",-1)),Mt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ot=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Gender",-1)),Dt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},At=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Birth",-1)),Ut={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},xt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Group",-1)),Nt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},St=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Disability",-1)),zt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ft=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Phone Number",-1)),Lt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Tt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Father's Name",-1)),Bt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Gt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Husband's Name",-1)),Yt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},qt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Receiving Cash Assistant",-1)),It={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Pt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"If Yes, Which Donar?",-1)),Wt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Rt=n(()=>o("tr",null,[o("th",{colspan:"2"},"...")],-1)),Et=n(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Medical Examination")],-1)),Ht=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"MUAC (cm)",-1)),Jt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},jt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Weight (kg)",-1)),Zt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Kt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Height (cm)",-1)),Qt={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Xt=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"WFH Z-Score",-1)),es={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},os=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Bilateral Pitting Oedema",-1)),ts={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ss=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Medical Illness Complication",-1)),as={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ls=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Appetite Test",-1)),ns={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},is=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Immunization Status",-1)),ds={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},rs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Deworming",-1)),cs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ps=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Vitamin A Supplement",-1)),ms={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},_s=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type of Case",-1)),us={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},gs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Case Category",-1)),hs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},fs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Category of Criteria",-1)),bs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},vs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Criteria Group",-1)),ys={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},$s=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Admission",-1)),Vs={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ws=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Year",-1)),ks={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Cs=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Month",-1)),Ms={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Os={class:"flex justify-content-end"},Ds={class:"mr-2"},As={class:"mr-2"},Us={class:"mr-2"},xs={class:"mr-2"},Ns={class:"mr-2"},Ss={__name:"New",setup(w){const{isLoading:k,v$:t,handleSubmit:L,submitted:c,villageDisabled:$,stateOptions:T,townshipOptions:B,villageOptions:ee,yesNoOptions:A,donarOptions:G,ageGroupOptions:Y,genderOptions:S,typeOptions:q,screeningTypeOptions:C,bilateralPittingOedemaOptions:M,zScoreOptions:O,appetiteTestOptions:I,immunizationStatusOptions:P,typeOfCasesOptions:W,caseCategoriesOptions:R,criteriaOptions:E,criteriaGroupsOptions:H,confirmCancel:z,generateFakeData:J,isOnline:F,activeTab:b}=Fe(),j=h("yy-mm-dd"),x=h(null),Z=()=>{setTimeout(()=>{x.value&&(x.value.scrollTop=x.value.scrollHeight)},100)};return(s,a)=>{const K=Ve("tooltip");return p(),g(ke,null,[o("div",Le,[o("div",Te,[o("div",Be,[r(e(Ce),{value:e(F)?"Online":"Offline",class:v(e(F)?"p-badge-success":"badge-secondary")},null,8,["value","class"])]),o("div",Ge,[le(r(e(D),{onClick:e(J),icon:"pi pi-database",text:"",rounded:""},null,8,["onClick"]),[[K,"Fake Data for Testing",void 0,{top:!0}]])]),o("div",Ye,[le(r(e(D),{onClick:e(z),severity:"secondary",icon:"pi pi-times",text:"",rounded:""},null,8,["onClick"]),[[K,"Cancel",void 0,{top:!0}]])])]),r(e(Ae),{activeIndex:e(b),"onUpdate:activeIndex":a[33]||(a[33]=l=>we(b)?b.value=l:null),scrollable:!0},{default:X(()=>[r(e(se),{header:"Biographic Info"},{default:X(()=>[o("div",{ref_key:"biContainer",ref:x,class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},[o("div",qe,[o("label",{for:"screening_type",class:v({"p-error":e(t).screening_type.$invalid&&e(c)})},[V("Screening Type"),Ie],2),r(e(f),{id:"screening_type",modelValue:e(t).screening_type.$model,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).screening_type.$model=l),options:e(C),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).screening_type.$invalid&&e(c)||e(t).screening_type.$pending.$response?(p(),g("small",Pe,d(e(t).screening_type.required.$message.replace("Value","Screening Type")),1)):m("",!0)]),o("div",We,[o("label",{for:"state",class:v({"p-error":e(t).state.$invalid&&e(c)})},[V("State"),Re],2),r(e(f),{id:"state",modelValue:e(t).state.$model,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).state.$model=l),options:e(T),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).state.$invalid&&e(c)||e(t).state.$pending.$response?(p(),g("small",Ee,d(e(t).state.required.$message.replace("Value","State")),1)):m("",!0)]),o("div",He,[o("label",{for:"township",class:v({"p-error":e(t).township.$invalid&&e(c)})},[V("Township"),Je],2),r(e(f),{id:"township",modelValue:e(t).township.$model,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).township.$model=l),options:e(B),optionLabel:"name",optionValue:"name"},null,8,["modelValue","options"]),e(t).township.$invalid&&e(c)?(p(),g("small",je,d(e(t).township.$message),1)):m("",!0)]),o("div",Ze,[o("label",{for:"village",class:v({"p-error":e(t).village.$invalid&&e(c)})},[V("Village/Ward"),Ke],2),r(e(f),{disabled:e($),id:"village",modelValue:e(t).village.$model,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).village.$model=l),options:e(ee),optionLabel:"name_en",optionValue:"name_en"},null,8,["disabled","modelValue","options"]),e(t).village.$invalid&&e(c)?(p(),g("small",Qe,d(e(t).village.required.$message.replace("Value","Village or Ward")),1)):m("",!0)]),o("div",Xe,[o("label",{for:"patient_name",class:v({"p-error":e(t).patient_name.$invalid&&e(c)})},[V("Patient Name"),eo],2),r(e(N),{id:"patient_name",modelValue:e(t).patient_name.$model,"onUpdate:modelValue":a[4]||(a[4]=l=>e(t).patient_name.$model=l)},null,8,["modelValue"]),e(t).patient_name.$invalid&&e(c)?(p(),g("small",oo,d(e(t).patient_name.required.$message.replace("Value","Patient Name")),1)):m("",!0)]),o("div",to,[o("label",{for:"type",class:v({"p-error":e(t).type.$invalid&&e(c)})},[V("Type"),so],2),r(e(f),{id:"type",modelValue:e(t).type.$model,"onUpdate:modelValue":a[5]||(a[5]=l=>e(t).type.$model=l),options:e(q),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).type.$invalid&&e(c)?(p(),g("small",ao,d(e(t).type.required.$message.replace("Value","Type")),1)):m("",!0)]),o("div",lo,[o("label",{for:"gender",class:v({"p-error":e(t).gender.$invalid&&e(c)})},[V("Gender"),no],2),r(e(f),{id:"gender",modelValue:e(t).gender.$model,"onUpdate:modelValue":a[6]||(a[6]=l=>e(t).gender.$model=l),options:e(S),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).gender.$invalid&&e(c)?(p(),g("small",io,d(e(t).gender.required.$message.replace("Value","Type")),1)):m("",!0)]),o("div",ro,[o("label",{for:"date_of_birth",class:v({"p-error":e(t).date_of_birth.$invalid&&e(c)})},[V("Date of Birth"),co],2),r(e(ne),{id:"date_of_birth",modelValue:e(t).date_of_birth.$model,"onUpdate:modelValue":a[7]||(a[7]=l=>e(t).date_of_birth.$model=l),dateFormat:j.value,manualInput:"true"},null,8,["modelValue","dateFormat"]),e(t).date_of_birth.$invalid&&e(c)?(p(),g("small",po,d(e(t).date_of_birth.required.$message.replace("Value","Date of Birth")),1)):m("",!0)]),o("div",mo,[o("label",{for:"age_group",class:v({"p-error":e(t).age_group.$invalid&&e(c)})},[V("Age Group"),_o],2),r(e(f),{disabled:"true",id:"age_group",modelValue:e(t).age_group.$model,"onUpdate:modelValue":a[8]||(a[8]=l=>e(t).age_group.$model=l),options:e(Y),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).age_group.$invalid&&e(c)?(p(),g("small",uo,d(e(t).age_group.required.$message.replace("Value","Age Group")),1)):m("",!0)]),o("div",go,[o("label",{for:"disability",class:v({"p-error":e(t).disability.$invalid&&e(c)})},[V("Disability"),ho],2),r(e(f),{id:"disability",modelValue:e(t).disability.$model,"onUpdate:modelValue":a[9]||(a[9]=l=>e(t).disability.$model=l),options:e(A),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).disability.$invalid&&e(c)?(p(),g("small",fo,d(e(t).disability.required.$message.replace("Value","Disability")),1)):m("",!0)]),o("div",bo,[o("label",{for:"phone_number",class:v({"p-error":e(t).phone_number.$invalid&&e(c)})},[V("Phone Number"),vo],2),r(e(N),{id:"phone_number",modelValue:e(t).phone_number.$model,"onUpdate:modelValue":a[10]||(a[10]=l=>e(t).phone_number.$model=l)},null,8,["modelValue"]),e(t).phone_number.$invalid&&e(c)?(p(),g("small",yo,d(e(t).phone_number.required.$message.replace("Value","Phone Number")),1)):m("",!0)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(p(),g("div",$o,[o("label",{for:"father_name",class:v({"p-error":e(t).father_name.$invalid&&e(c)})},"Father's Name",2),r(e(N),{id:"father_name",modelValue:e(t).father_name.$model,"onUpdate:modelValue":a[11]||(a[11]=l=>e(t).father_name.$model=l)},null,8,["modelValue"]),e(t).father_name.$invalid&&e(c)?(p(),g("small",Vo,d(e(t).father_name.$message),1)):m("",!0)])):m("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(p(),g("div",wo,[o("label",{for:"husband_name",class:v({"p-error":e(t).husband_name.$invalid&&e(c)})},"Husband's Name",2),r(e(N),{id:"husband_name",modelValue:e(t).husband_name.$model,"onUpdate:modelValue":a[12]||(a[12]=l=>e(t).husband_name.$model=l)},null,8,["modelValue"]),e(t).husband_name.$invalid&&e(c)?(p(),g("small",ko,d(e(t).husband_name.$message),1)):m("",!0)])):m("",!0),o("div",Co,[Mo,r(e(f),{id:"receiving_cash_assistant",onChange:a[13]||(a[13]=l=>Z()),modelValue:e(t).receiving_cash_assistant.$model,"onUpdate:modelValue":a[14]||(a[14]=l=>e(t).receiving_cash_assistant.$model=l),options:e(A),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).receiving_cash_assistant.$invalid&&e(c)?(p(),g("small",Oo,d(e(t).receiving_cash_assistant.$message),1)):m("",!0)]),e(t).receiving_cash_assistant.$model=="Yes"?(p(),g("div",Do,[Ao,r(e(f),{id:"yes_which_donar",modelValue:e(t).yes_which_donar.$model,"onUpdate:modelValue":a[15]||(a[15]=l=>e(t).yes_which_donar.$model=l),options:e(G),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).yes_which_donar.$invalid&&e(c)?(p(),g("small",Uo,d(e(t).yes_which_donar.$message),1)):m("",!0)])):m("",!0)],512)]),_:1}),r(e(se),{header:"Medical Examination"},{default:X(()=>[o("div",xo,[e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(p(),g("div",No,[So,r(e(te),{modelValue:e(t).muac_cm.$model,"onUpdate:modelValue":a[16]||(a[16]=l=>e(t).muac_cm.$model=l),id:"muac_cm",min:8,max:30,minFractionDigits:2},null,8,["modelValue"])])):m("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(p(),g("div",zo,[Fo,r(e(te),{modelValue:e(t).weight_kg.$model,"onUpdate:modelValue":a[17]||(a[17]=l=>e(t).weight_kg.$model=l),id:"weight_kg",min:1.5,max:25,minFractionDigits:2},null,8,["modelValue"])])):m("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(p(),g("div",Lo,[To,r(e(te),{type:"number",modelValue:e(t).height_cm.$model,"onUpdate:modelValue":a[18]||(a[18]=l=>e(t).height_cm.$model=l),id:"height_cm",min:45,max:120,minFractionDigits:2},null,8,["modelValue"])])):m("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(p(),g("div",Bo,[o("label",{for:"wfh_zscore",class:v({"p-error":e(t).wfh_zscore.$invalid&&e(c)})},"WFH Z-Score",2),r(e(f),{id:"wfh_zscore",modelValue:e(t).wfh_zscore.$model,"onUpdate:modelValue":a[19]||(a[19]=l=>e(t).wfh_zscore.$model=l),options:e(O),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).type.$invalid&&e(c)?(p(),g("small",Go,d(e(t).type.$message),1)):m("",!0)])):m("",!0),o("div",Yo,[qo,r(e(f),{modelValue:e(t).bilateral_pitting_oedema.$model,"onUpdate:modelValue":a[20]||(a[20]=l=>e(t).bilateral_pitting_oedema.$model=l),options:e(M),id:"bilateral_pitting_oedema",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",Io,[Po,r(e(f),{modelValue:e(t).medical_illness_complication.$model,"onUpdate:modelValue":a[21]||(a[21]=l=>e(t).medical_illness_complication.$model=l),options:e(A),id:"medical_illness_complication",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",Wo,[Ro,r(e(f),{modelValue:e(t).appetite_test.$model,"onUpdate:modelValue":a[22]||(a[22]=l=>e(t).appetite_test.$model=l),options:e(I),id:"appetite_test",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",Eo,[Ho,r(e(f),{modelValue:e(t).immunization_status.$model,"onUpdate:modelValue":a[23]||(a[23]=l=>e(t).immunization_status.$model=l),options:e(P),id:"immunization_status",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",Jo,[jo,r(e(f),{modelValue:e(t).deworming.$model,"onUpdate:modelValue":a[24]||(a[24]=l=>e(t).deworming.$model=l),options:e(A),id:"deworming",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",Zo,[Ko,r(e(f),{modelValue:e(t).vit_a_supplement.$model,"onUpdate:modelValue":a[25]||(a[25]=l=>e(t).vit_a_supplement.$model=l),options:e(A),id:"vit_a_supplement",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",Qo,[Xo,r(e(f),{modelValue:e(t).type_of_case.$model,"onUpdate:modelValue":a[26]||(a[26]=l=>e(t).type_of_case.$model=l),options:e(W),id:"type_of_case",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",et,[ot,r(e(f),{modelValue:e(t).case_category.$model,"onUpdate:modelValue":a[27]||(a[27]=l=>e(t).case_category.$model=l),options:e(R),id:"case_category",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",tt,[st,r(e(f),{modelValue:e(t).category_of_criteria.$model,"onUpdate:modelValue":a[28]||(a[28]=l=>e(t).category_of_criteria.$model=l),options:e(E),id:"category_of_criteria",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",at,[lt,r(e(f),{modelValue:e(t).criteria_group.$model,"onUpdate:modelValue":a[29]||(a[29]=l=>e(t).criteria_group.$model=l),options:e(H),id:"criteria_group",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",nt,[it,r(e(ne),{modelValue:e(t).date_of_admission.$model,"onUpdate:modelValue":a[30]||(a[30]=l=>e(t).date_of_admission.$model=l),id:"date_of_admission",dateFormat:j.value,maxDate:new Date},null,8,["modelValue","dateFormat","maxDate"])]),o("div",dt,[rt,r(e(N),{modelValue:e(t).admitted_year.$model,"onUpdate:modelValue":a[31]||(a[31]=l=>e(t).admitted_year.$model=l),id:"admitted_year",disabled:""},null,8,["modelValue"])]),o("div",ct,[pt,r(e(N),{modelValue:e(t).admitted_month.$model,"onUpdate:modelValue":a[32]||(a[32]=l=>e(t).admitted_month.$model=l),id:"admitted_month",disabled:""},null,8,["modelValue"])])])]),_:1}),r(e(se),{header:"Review"},{default:X(()=>[o("div",mt,[o("table",_t,[ut,o("tr",null,[gt,o("td",ht,d(e(t).screening_type.$model),1)]),o("tr",null,[ft,o("td",bt,d(e(t).state.$model),1)]),o("tr",null,[vt,o("td",yt,d(e(t).township.$model),1)]),o("tr",null,[$t,o("td",Vt,d(e(t).village.$model),1)]),o("tr",null,[wt,o("td",kt,d(e(t).patient_name.$model),1)]),o("tr",null,[Ct,o("td",Mt,d(e(t).type.$model),1)]),o("tr",null,[Ot,o("td",Dt,d(e(t).gender.$model),1)]),o("tr",null,[At,o("td",Ut,d(e(t).date_of_birth.$model),1)]),o("tr",null,[xt,o("td",Nt,d(e(t).age_group.$model),1)]),o("tr",null,[St,o("td",zt,d(e(t).disability.$model),1)]),o("tr",null,[Ft,o("td",Lt,d(e(t).phone_number.$model),1)]),o("tr",null,[Tt,o("td",Bt,d(e(t).father_name.$model),1)]),o("tr",null,[Gt,o("td",Yt,d(e(t).husband_name.$model),1)]),o("tr",null,[qt,o("td",It,d(e(t).receiving_cash_assistant.$model),1)]),o("tr",null,[Pt,o("td",Wt,d(e(t).yes_which_donar.$model),1)]),Rt,Et,o("tr",null,[Ht,o("td",Jt,d(e(t).muac_cm.$model),1)]),o("tr",null,[jt,o("td",Zt,d(e(t).weight_kg.$model),1)]),o("tr",null,[Kt,o("td",Qt,d(e(t).height_cm.$model),1)]),o("tr",null,[Xt,o("td",es,d(e(t).wfh_zscore.$model),1)]),o("tr",null,[os,o("td",ts,d(e(t).bilateral_pitting_oedema.$model),1)]),o("tr",null,[ss,o("td",as,d(e(t).medical_illness_complication.$model),1)]),o("tr",null,[ls,o("td",ns,d(e(t).appetite_test.$model),1)]),o("tr",null,[is,o("td",ds,d(e(t).immunization_status.$model),1)]),o("tr",null,[rs,o("td",cs,d(e(t).deworming.$model),1)]),o("tr",null,[ps,o("td",ms,d(e(t).vit_a_supplement.$model),1)]),o("tr",null,[_s,o("td",us,d(e(t).type_of_case.$model),1)]),o("tr",null,[gs,o("td",hs,d(e(t).case_category.$model),1)]),o("tr",null,[fs,o("td",bs,d(e(t).category_of_criteria.$model),1)]),o("tr",null,[vs,o("td",ys,d(e(t).criteria_group.$model),1)]),o("tr",null,[$s,o("td",Vs,d(e(t).date_of_admission.$model),1)]),o("tr",null,[ws,o("td",ks,d(e(t).admitted_year.$model),1)]),o("tr",null,[Cs,o("td",Ms,d(e(t).admitted_month.$model),1)])])])]),_:1})]),_:1},8,["activeIndex"]),o("div",Os,[o("div",Ds,[s.$can("index","User")?(p(),U(e(D),{key:0,label:"Cancel",severity:"secondary",text:"",onClick:e(z)},null,8,["onClick"])):m("",!0)]),o("div",As,[e(b)==0?(p(),U(e(D),{key:0,label:"Next  >>",onClick:a[34]||(a[34]=l=>b.value=1),severity:"primary",text:""})):m("",!0)]),o("div",Us,[e(b)==1?(p(),U(e(D),{key:0,label:"<<  Prev",onClick:a[35]||(a[35]=l=>b.value=0),severity:"primary",text:""})):m("",!0)]),o("div",xs,[e(b)==2?(p(),U(e(D),{key:0,label:"<<  Prev",onClick:a[36]||(a[36]=l=>b.value=1),severity:"primary",text:""})):m("",!0)]),o("div",Ns,[e(b)==1?(p(),U(e(D),{key:0,label:"Next  >>",onClick:a[37]||(a[37]=l=>b.value=2),severity:"primary",text:""})):m("",!0)]),o("div",null,[e(b)==2?(p(),U(e(D),{key:0,onClick:a[38]||(a[38]=l=>e(L)(!e(t).$invalid)),label:"Create",severity:"primary"})):m("",!0)])]),e(k)?(p(),U(De,{key:0})):m("",!0)]),r(e(Ue))],64)}}},Js=$e(Ss,[["__scopeId","data-v-0985e502"]]);export{Js as default};
