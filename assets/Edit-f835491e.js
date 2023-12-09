import{I as V,o as b,c as j,H as A,a3 as M,D as N,f as $,g as O,h as H,B,_ as T,r as W,a as e,t as a,k as t,m as y,w as v,b as w,n as x,q as l,l as U,s as k,a6 as I,y as L,z as G}from"./index-bf271bc2.js";import{L as J}from"./Loading-8d26b6d5.js";import{s as F,a as Y}from"./tabpanel.esm-48fdc52a.js";import{s as q}from"./dataview.esm-4142deb8.js";import{s as P}from"./dialog.esm-4c6f0e5e.js";import{u as Z}from"./store-2a86bddf.js";import"./index.esm-07af5976.js";import"./focustrap.esm-557106f8.js";import"./inputtext.esm-bbf7483a.js";import"./paginator.esm-c92cd192.js";import"./dropdown.esm-502d7d03.js";var Q=`
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-fluid .p-inputtextarea {
    width: 100%;
}
`,K={root:function(p){var m=p.instance,d=p.props;return["p-inputtextarea p-inputtext p-component",{"p-filled":m.filled,"p-inputtextarea-resizable ":d.autoResize}]}},X=V(Q,{name:"textarea",manual:!0}),ee=X.load,te={name:"BaseTextarea",extends:M,props:{modelValue:null,autoResize:Boolean},css:{classes:K,loadStyle:ee},provide:function(){return{$parentInstance:this}}},E={name:"Textarea",extends:te,emits:["update:modelValue"],mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){var p=window.getComputedStyle(this.$el);this.$el.style.height="auto",this.$el.style.height="calc(".concat(p.borderTopWidth," + ").concat(p.borderBottomWidth," + ").concat(this.$el.scrollHeight,"px)"),parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(p){this.autoResize&&this.resize(),this.$emit("update:modelValue",p.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},ae=["value"];function se(g,p,m,d,i,f){return b(),j("textarea",A({class:g.cx("root"),value:g.modelValue,onInput:p[0]||(p[0]=function(){return f.onInput&&f.onInput.apply(f,arguments)})},g.ptm("root",f.ptmParams),{"data-pc-name":"textarea"}),null,16,ae)}E.render=se;const ie=()=>{const g=Z(),p=N(),m=$(!1),d=$({disableBiographicInfo:!1,disableMedicalExamination:!1,disableFollowUp:!1,disableDischarge:!1});O(()=>{D()}),H(()=>{g.$dispose()});const i=$(!1),f=$(null),o=$(null),C=s=>{switch(i.value=!1,o.value){case"bi":S(s);break;case"me":z(s);break;case"d":u(s);break}},_=B({id:null,am_number:"Auto",status:"",new:{screening_type:"",state:"",township:"",village:"",patient_name:"",type:"",gender:"",date_of_birth:"",age_group:"",disability:"",phone_number:"",father_name:"",husband_name:"",receiving_cash_assistant:"",yes_which_donar:""},old:{am_number:"",screening_type:"",state:"",township:"",village:"",patient_name:"",type:"",gender:"",date_of_birth:"",age_group:"",disability:"",phone_number:"",father_name:"",husband_name:"",receiving_cash_assistant:"",yes_which_donar:""}}),S=async s=>{if(s=="reject"&&f.value==null){o.value="bi",i.value=!0;return}m.value=!0;try{await g.updateBi({id:_.id,case_id:p.params.id,response:s,feedback:f.value}),g.getUpdateBiResponse&&(o.value=null,f.value=null,D()),m.value=!1}catch{o.value,m.value=!1}},r=B({id:null,status:"",new:{muac_cm:"",weight_kg:"",height_cm:"",wfh_zscore:"",bilateral_pitting_oedema:"",medical_illness_complication:"",appetite_test:"",immunization_status:"",deworming:"",vit_a_supplement:"",type_of_case:"",case_category:"",category_of_criteria:"",criteria_group:"",date_of_admission:"",admitted_year:"",admitted_month:"",status:"Edited"},old:{muac_cm:"",weight_kg:"",height_cm:"",wfh_zscore:"",bilateral_pitting_oedema:"",medical_illness_complication:"",appetite_test:"",immunization_status:"",deworming:"",vit_a_supplement:"",type_of_case:"",case_category:"",category_of_criteria:"",criteria_group:"",date_of_admission:"",admitted_year:"",admitted_month:""}}),z=async s=>{if(s=="reject"&&f.value==null){o.value="me",i.value=!0;return}m.value=!0;try{await g.updateMe({id:r.id,case_id:p.params.id,response:s,feedback:f.value}),g.getUpdateMeResponse&&(o.value=null,f.value=null,D()),m.value=!1}catch{o.value,m.value=!1}},R=$([]),h=B({id:null,status:"",new:{discharge_status:"",discharge_category:"",discharge_with:"",date_of_discharge:"",discharge_year:"",discharge_month:"",discharge_muac_cm:"",discharge_weight_kg:"",discharge_height_cm:"",discharge_wfh_zscore:"",length_of_stay:"",status:"Discharged"},old:{discharge_status:"",discharge_category:"",discharge_with:"",date_of_discharge:"",discharge_year:"",discharge_month:"",discharge_muac_cm:"",discharge_weight_kg:"",discharge_height_cm:"",discharge_wfh_zscore:"",length_of_stay:""}}),u=async s=>{if(s=="reject"&&f.value==null){o.value="d",i.value=!0;return}m.value=!0;try{await g.updateDischarge({id:h.id,case_id:p.params.id,response:s,feedback:f.value}),g.getUpdateDischargeResponse&&(o.value=null,f.value=null,D()),m.value=!1}catch{o.value,m.value=!1}},D=async()=>{m.value=!0,await g.fetchOne({id:p.params.id});const s=g.getOneResponse;if(s){if(d.value.disableDischarge=!["Discharged","Completed"].includes(s.data.status),_.id=s.data.biographic_info.id,_.am_number=s.data.am_number,_.status=s.data.biographic_info.status,_.old.screening_type=s.data.biographic_info.screening_type,_.old.state=s.data.biographic_info.state,_.old.township=s.data.biographic_info.township,_.old.village=s.data.biographic_info.village,_.old.patient_name=s.data.biographic_info.patient_name,_.old.type=s.data.biographic_info.type,_.old.gender=s.data.biographic_info.gender,_.old.date_of_birth=s.data.biographic_info.date_of_birth,_.old.age_group=s.data.biographic_info.age_group,_.old.disability=s.data.biographic_info.disability,_.old.phone_number=s.data.biographic_info.phone_number,_.old.father_name=s.data.biographic_info.father_name,_.old.husband_name=s.data.biographic_info.husband_name,_.old.receiving_cash_assistant=s.data.biographic_info.receiving_cash_assistant,_.old.yes_which_donar=s.data.biographic_info.yes_which_donar,s.data.biographic_info.data!=null){const c=JSON.parse(s.data.biographic_info.data);_.new.screening_type=c.screening_type,_.new.state=c.state,_.new.township=c.township,_.new.village=c.village,_.new.patient_name=c.patient_name,_.new.type=c.type,_.new.gender=c.gender,_.new.date_of_birth=c.date_of_birth,_.new.age_group=c.age_group,_.new.disability=c.disability,_.new.phone_number=c.phone_number,_.new.father_name=c.father_name,_.new.husband_name=c.husband_name,_.new.receiving_cash_assistant=c.receiving_cash_assistant,_.new.yes_which_donar=c.yes_which_donar}if(r.id=s.data.medical_examination.id,r.status=s.data.medical_examination.status,r.old.muac_cm=s.data.medical_examination.muac_cm,r.old.weight_kg=s.data.medical_examination.weight_kg,r.old.height_cm=s.data.medical_examination.height_cm,r.old.wfh_zscore=s.data.medical_examination.wfh_zscore,r.old.bilateral_pitting_oedema=s.data.medical_examination.bilateral_pitting_oedema,r.old.medical_illness_complication=s.data.medical_examination.medical_illness_complication,r.old.appetite_test=s.data.medical_examination.appetite_test,r.old.immunization_status=s.data.medical_examination.immunization_status,r.old.deworming=s.data.medical_examination.deworming,r.old.vit_a_supplement=s.data.medical_examination.vit_a_supplement,r.old.type_of_case=s.data.medical_examination.type_of_case,r.old.case_category=s.data.medical_examination.case_category,r.old.category_of_criteria=s.data.medical_examination.category_of_criteria,r.old.criteria_group=s.data.medical_examination.criteria_group,r.old.date_of_admission=s.data.medical_examination.date_of_admission,r.old.admitted_year=s.data.medical_examination.admitted_year,r.old.admitted_month=s.data.medical_examination.admitted_month,s.data.medical_examination.data!=null){const c=JSON.parse(s.data.medical_examination.data);r.new.muac_cm=c.muac_cm,r.new.weight_kg=c.weight_kg,r.new.height_cm=c.height_cm,r.new.wfh_zscore=c.wfh_zscore,r.new.bilateral_pitting_oedema=c.bilateral_pitting_oedema,r.new.medical_illness_complication=c.medical_illness_complication,r.new.appetite_test=c.appetite_test,r.new.immunization_status=c.immunization_status,r.new.deworming=c.deworming,r.new.vit_a_supplement=c.vit_a_supplement,r.new.type_of_case=c.type_of_case,r.new.case_category=c.case_category,r.new.category_of_criteria=c.category_of_criteria,r.new.criteria_group=c.criteria_group,r.new.date_of_admission=c.date_of_admission,r.new.admitted_year=c.admitted_year,r.new.admitted_month=c.admitted_month}if(R.value=s.data.follow_ups,s.data.discharge!=null&&(h.id=s.data.discharge.id,h.status=s.data.discharge.status,h.old.discharge_status=s.data.discharge.discharge_status,h.old.discharge_category=s.data.discharge.discharge_category,h.old.discharge_with=s.data.discharge.discharge_with,h.old.date_of_discharge=s.data.discharge.date_of_discharge,h.old.discharge_year=s.data.discharge.discharge_year,h.old.discharge_month=s.data.discharge.discharge_month,h.old.discharge_muac_cm=s.data.discharge.discharge_muac_cm,h.old.discharge_weight_kg=s.data.discharge.discharge_weight_kg,h.old.discharge_height_cm=s.data.discharge.discharge_height_cm,h.old.discharge_wfh_zscore=s.data.discharge.discharge_wfh_zscore,h.old.length_of_stay=s.data.discharge.length_of_stay,h.old.status=s.data.discharge.status,s.data.discharge.data!=null)){const c=JSON.parse(s.data.discharge.data);h.new.discharge_status=c.discharge_status,h.new.discharge_category=c.discharge_category,h.new.discharge_with=c.discharge_with,h.new.date_of_discharge=c.date_of_discharge,h.new.discharge_year=c.discharge_year,h.new.discharge_month=c.discharge_month,h.new.discharge_muac_cm=c.discharge_muac_cm,h.new.discharge_weight_kg=c.discharge_weight_kg,h.new.discharge_height_cm=c.discharge_height_cm,h.new.discharge_wfh_zscore=c.discharge_wfh_zscore,h.new.length_of_stay=c.length_of_stay,h.new.status=c.status}}m.value=!1};return{section:d,isLoading:m,biState:_,meState:r,fuRecords:R,dischargeState:h,updateBi:S,updateMe:z,updateDischarge:u,visibleFeedback:i,rejectFeedback:f,continueUpdate:C}};const n=g=>(L("data-v-31686550"),g=g(),G(),g),de={class:"card"},oe={class:"flex justify-content-between flex-wrap mb-1"},ne={class:"flex align-items-center field text-xl font-bold pl-4"},ce=n(()=>e("span",{class:"flex align-items-center"},null,-1)),le={class:"flex align-items-center"},re={class:"m-2"},_e={class:"flex flex-row-reverse mb-2"},he={class:"flex-3"},ge={class:"flex-3 mr-2"},ue={class:"flex-1",style:{padding:"0.75rem 1.25rem","padding-left":"0rem"}},pe={class:"grid p-fluid col-12"},me={class:"col-12"},fe=n(()=>e("tr",null,[e("td"),e("td",{class:"font-bold"},"Old Data"),e("td",{class:"font-bold"},"New Data")],-1)),we=n(()=>e("td",{class:"p-2"},"Screening Type",-1)),be={class:"surface-200 p-2"},ye=n(()=>e("td",{class:"p-2"},"State",-1)),ve={class:"surface-200 p-2"},xe=n(()=>e("td",{class:"p-2"},"Township",-1)),ke={class:"surface-200 p-2"},ze=n(()=>e("td",{class:"p-2"},"Village Tract",-1)),De={class:"surface-200 p-2"},$e=n(()=>e("td",{class:"p-2"},"Patient Name",-1)),Se={class:"surface-200 p-2"},Ce=n(()=>e("td",{class:"p-2"},"Type",-1)),Re={class:"surface-200 p-2"},Fe=n(()=>e("td",{class:"p-2"},"Gender",-1)),Be={class:"surface-200 p-2"},Ie=n(()=>e("td",{class:"p-2"},"Date of Birth",-1)),Ue={class:"surface-200 p-2"},je=n(()=>e("td",{class:"p-2"},"Age Group",-1)),Ee={class:"surface-200 p-2"},Ve=n(()=>e("td",{class:"p-2"},"Disability",-1)),Ae={class:"surface-200 p-2"},Me=n(()=>e("td",{class:"p-2"},"Phone Number",-1)),Ne={class:"surface-200 p-2"},Oe=n(()=>e("td",{class:"p-2"},"Father Name",-1)),He={class:"surface-200 p-2"},Te=n(()=>e("td",{class:"p-2"},"Husband Name",-1)),We={class:"surface-200 p-2"},Le=n(()=>e("td",{class:"p-2"},"Receiving Cash Assistant",-1)),Ge={class:"surface-200 p-2"},Je=n(()=>e("td",{class:"p-2"},"If yes, Which Donar",-1)),Ye={class:"surface-200 p-2"},qe={class:"flex flex-row-reverse mb-2"},Pe={class:"flex-3"},Ze={class:"flex-3 mr-2"},Qe={class:"flex-1",style:{padding:"0.75rem 1.25rem","padding-left":"0rem"}},Ke={class:"col-12"},Xe=n(()=>e("tr",null,[e("td"),e("td",{class:"font-bold"},"Old Data"),e("td",{class:"font-bold"},"New Data")],-1)),et=n(()=>e("td",{class:"p-2"},"MUAC (cm)",-1)),tt={class:"surface-200 p-2"},at=n(()=>e("td",{class:"p-2"},"Weight (kg)",-1)),st={class:"surface-200 p-2"},it=n(()=>e("td",{class:"p-2"},"Height (kg)",-1)),dt={class:"surface-200 p-2"},ot=n(()=>e("td",{class:"p-2"},"WFH Z-Score",-1)),nt={class:"surface-200 p-2"},ct=n(()=>e("td",{class:"p-2"},"Bilateral Pitting Oedema",-1)),lt={class:"surface-200 p-2"},rt=n(()=>e("td",{class:"p-2"},"Medical Illness Complication",-1)),_t={class:"surface-200 p-2"},ht=n(()=>e("td",{class:"p-2"},"Appetite Test",-1)),gt={class:"surface-200 p-2"},ut=n(()=>e("td",{class:"p-2"},"Immunization Status",-1)),pt={class:"surface-200 p-2"},mt=n(()=>e("td",{class:"p-2"},"Deworming",-1)),ft={class:"surface-200 p-2"},wt=n(()=>e("td",{class:"p-2"},"Vitamin-A Supplement",-1)),bt={class:"surface-200 p-2"},yt=n(()=>e("td",{class:"p-2"},"Type of Case",-1)),vt={class:"surface-200 p-2"},xt=n(()=>e("td",{class:"p-2"},"Case Category",-1)),kt={class:"surface-200 p-2"},zt=n(()=>e("td",{class:"p-2"},"Category of Criteria",-1)),Dt={class:"surface-200 p-2"},$t=n(()=>e("td",{class:"p-2"},"Criteria Group",-1)),St={class:"surface-200 p-2"},Ct=n(()=>e("td",{class:"p-2"},"Date of Admission",-1)),Rt={class:"surface-200 p-2"},Ft=n(()=>e("td",{class:"p-2"},"Admitted Year",-1)),Bt={class:"surface-200 p-2"},It=n(()=>e("td",{class:"p-2"},"Admitted Month",-1)),Ut={class:"surface-200 p-2"},jt={class:"mb-2 mt-2 col-12 md:col-6 lg:col-6"},Et={class:"surface-ground"},Vt=n(()=>e("td",{class:"font-bold p-2"},"Visit:",-1)),At={class:"p-2 font-bold"},Mt=n(()=>e("td",{class:"text-color-secondary p-2"},"Date of Visit:",-1)),Nt={class:"p-2"},Ot=n(()=>e("td",{class:"text-color-secondary p-2"},"MUAC (cm):",-1)),Ht={class:"p-2"},Tt=n(()=>e("td",{class:"text-color-secondary p-2"},"Weight (kg):",-1)),Wt={class:"p-2"},Lt=n(()=>e("td",{class:"text-color-secondary p-2"},"Oedema:",-1)),Gt={class:"p-2"},Jt=n(()=>e("td",{class:"text-color-secondary p-2"},"Food Given:",-1)),Yt={class:"p-2"},qt=n(()=>e("td",{class:"text-color-secondary p-2"},"Food Quantity (kg):",-1)),Pt={class:"p-2"},Zt=n(()=>e("td",{class:"text-color-secondary p-2"},"Follow Up Result:",-1)),Qt={class:"flex flex-row-reverse mb-2"},Kt={class:"flex-3"},Xt={class:"flex-3 mr-2"},ea={class:"flex-1",style:{padding:"0.75rem 1.25rem","padding-left":"0rem"}},ta={class:"col-12"},aa=n(()=>e("tr",null,[e("td"),e("td",{class:"font-bold"},"Old Data"),e("td",{class:"font-bold"},"New Data")],-1)),sa=n(()=>e("td",{class:"p-2"},"Discharge State",-1)),ia={class:"surface-200 p-2"},da=n(()=>e("td",{class:"p-2"},"Discharge Category",-1)),oa={class:"surface-200 p-2"},na=n(()=>e("td",{class:"p-2"},"Discharge With",-1)),ca={class:"surface-200 p-2"},la=n(()=>e("td",{class:"p-2"},"Date of Discharge",-1)),ra={class:"surface-200 p-2"},_a=n(()=>e("td",{class:"p-2"},"Discharge Year",-1)),ha={class:"surface-200 p-2"},ga=n(()=>e("td",{class:"p-2"},"Discharge Month",-1)),ua={class:"surface-200 p-2"},pa=n(()=>e("td",{class:"p-2"},"Discharge MUAC (cm)",-1)),ma={class:"surface-200 p-2"},fa=n(()=>e("td",{class:"p-2"},"Discharge Weight (kg)",-1)),wa={class:"surface-200 p-2"},ba=n(()=>e("td",{class:"p-2"},"Discharge Height (cm)",-1)),ya={class:"surface-200 p-2"},va=n(()=>e("td",{class:"p-2"},"Discharge WFH Z-Score",-1)),xa={class:"surface-200 p-2"},ka=n(()=>e("td",{class:"p-2"},"Length of Stay",-1)),za={class:"surface-200 p-2"},Da={class:"inline-flex flex-column gap-2"},$a=n(()=>e("label",null,"Feedback for Reject",-1)),Sa=0,Ca={__name:"Edit",setup(g){const{section:p,isLoading:m,biState:d,meState:i,fuRecords:f,dischargeState:o,updateBi:C,updateMe:_,updateDischarge:S,visibleFeedback:r,rejectFeedback:z,continueUpdate:R}=ie();return(h,u)=>{const D=W("router-link");return b(),j("div",de,[e("div",oe,[e("span",ne,"AM Number - "+a(t(d).am_number),1),ce,e("span",le,[h.$can("index","User")?(b(),y(D,{key:0,to:{name:"editRequestList"}},{default:v(()=>[e("div",re,[w(t(k),{severity:"secondary",icon:"pi pi-times",text:"",rounded:""})])]),_:1})):x("",!0)])]),w(t(Y),{"active-index":Sa,scrollable:!0},{default:v(()=>[w(t(F),{header:"Biographic Info",disabled:t(p).disableBiographicInfo},{default:v(()=>[e("div",_e,[e("div",he,[t(d).status=="Edited"?(b(),y(t(k),{key:0,label:"Approve",onClick:u[0]||(u[0]=s=>t(C)("approve")),icon:"pi pi-check",severity:"primary",text:""})):x("",!0)]),e("div",ge,[t(d).status=="Edited"?(b(),y(t(k),{key:0,label:"Reject",onClick:u[1]||(u[1]=s=>t(C)("reject")),icon:"pi pi-times",severity:"danger",text:""})):x("",!0)]),e("div",ue,[w(t(I),{value:t(d).status,severity:t(d).status=="Ongoing"?"info":t(d).status==="Feedback"?"danger":"warning"},null,8,["value","severity"])])]),e("div",pe,[e("table",me,[fe,e("tr",null,[we,e("td",be,a(t(d).old.screening_type),1),e("td",{class:l([t(d).old.screening_type!=t(d).new.screening_type?"bg-green-100":"surface-200","p-2"])},a(t(d).new.screening_type),3)]),e("tr",null,[ye,e("td",ve,a(t(d).old.state),1),e("td",{class:l([t(d).old.state!=t(d).new.state?"bg-green-100":"surface-200","p-2"])},a(t(d).new.state),3)]),e("tr",null,[xe,e("td",ke,a(t(d).old.township),1),e("td",{class:l([t(d).old.township!=t(d).new.township?"bg-green-100":"surface-200","p-2"])},a(t(d).new.township),3)]),e("tr",null,[ze,e("td",De,a(t(d).old.village),1),e("td",{class:l([t(d).old.village!=t(d).new.village?"bg-green-100":"surface-200","p-2"])},a(t(d).new.village),3)]),e("tr",null,[$e,e("td",Se,a(t(d).old.patient_name),1),e("td",{class:l([t(d).old.patient_name!=t(d).new.patient_name?"bg-green-100":"surface-200","p-2"])},a(t(d).new.patient_name),3)]),e("tr",null,[Ce,e("td",Re,a(t(d).old.type),1),e("td",{class:l([t(d).old.type!=t(d).new.type?"bg-green-100":"surface-200","p-2"])},a(t(d).new.type),3)]),e("tr",null,[Fe,e("td",Be,a(t(d).old.gender),1),e("td",{class:l([t(d).old.gender!=t(d).new.gender?"bg-green-100":"surface-200","p-2"])},a(t(d).new.gender),3)]),e("tr",null,[Ie,e("td",Ue,a(t(d).old.date_of_birth),1),e("td",{class:l([t(d).old.date_of_birth!=t(d).new.date_of_birth?"bg-green-100":"surface-200","p-2"])},a(t(d).new.date_of_birth),3)]),e("tr",null,[je,e("td",Ee,a(t(d).old.age_group),1),e("td",{class:l([t(d).old.age_group!=t(d).new.age_group?"bg-green-100":"surface-200","p-2"])},a(t(d).new.age_group),3)]),e("tr",null,[Ve,e("td",Ae,a(t(d).old.disability),1),e("td",{class:l([t(d).old.disability!=t(d).new.disability?"bg-green-100":"surface-200","p-2"])},a(t(d).new.disability),3)]),e("tr",null,[Me,e("td",Ne,a(t(d).old.phone_number),1),e("td",{class:l([t(d).old.phone_number!=t(d).new.phone_number?"bg-green-100":"surface-200","p-2"])},a(t(d).new.phone_number),3)]),e("tr",null,[Oe,e("td",He,a(t(d).old.father_name),1),e("td",{class:l([t(d).old.father_name!=t(d).new.father_name?"bg-green-100":"surface-200","p-2"])},a(t(d).new.father_name),3)]),e("tr",null,[Te,e("td",We,a(t(d).old.husband_name),1),e("td",{class:l([t(d).old.husband_name!=t(d).new.husband_name?"bg-green-100":"surface-200","p-2"])},a(t(d).new.husband_name),3)]),e("tr",null,[Le,e("td",Ge,a(t(d).old.receiving_cash_assistant),1),e("td",{class:l([t(d).old.receiving_cash_assistant!=t(d).new.receiving_cash_assistant?"bg-green-100":"surface-200","p-2"])},a(t(d).new.receiving_cash_assistant),3)]),e("tr",null,[Je,e("td",Ye,a(t(d).old.yes_which_donar),1),e("td",{class:l([t(d).old.yes_which_donar!=t(d).new.yes_which_donar?"bg-green-100":"surface-200","p-2"])},a(t(d).new.yes_which_donar),3)])])])]),_:1},8,["disabled"]),w(t(F),{header:"Medical Examination",disabled:t(p).disableMedicalExamination},{default:v(()=>[e("div",qe,[e("div",Pe,[t(i).status=="Edited"?(b(),y(t(k),{key:0,label:"Approve",onClick:u[2]||(u[2]=s=>t(_)("approve")),icon:"pi pi-check",severity:"primary",text:""})):x("",!0)]),e("div",Ze,[t(i).status=="Edited"?(b(),y(t(k),{key:0,label:"Reject",onClick:u[3]||(u[3]=s=>t(_)("reject")),icon:"pi pi-times",severity:"danger",text:""})):x("",!0)]),e("div",Qe,[w(t(I),{value:t(i).status,severity:t(i).status=="Ongoing"?"info":t(i).status=="Feedback"?"danger":"warning"},null,8,["value","severity"])])]),e("table",Ke,[Xe,e("tr",null,[et,e("td",tt,a(t(i).old.muac_cm),1),e("td",{class:l([t(i).old.muac_cm!=t(i).new.muac_cm?"bg-green-100":"surface-200","p-2"])},a(t(i).new.muac_cm),3)]),e("tr",null,[at,e("td",st,a(t(i).old.weight_kg),1),e("td",{class:l([t(i).old.weight_kg!=t(i).new.weight_kg?"bg-green-100":"surface-200","p-2"])},a(t(i).new.weight_kg),3)]),e("tr",null,[it,e("td",dt,a(t(i).old.height_cm),1),e("td",{class:l([t(i).old.height_cm!=t(i).new.height_cm?"bg-green-100":"surface-200","p-2"])},a(t(i).new.height_cm),3)]),e("tr",null,[ot,e("td",nt,a(t(i).old.wfh_zscore),1),e("td",{class:l([t(i).old.wfh_zscore!=t(i).new.wfh_zscore?"bg-green-100":"surface-200","p-2"])},a(t(i).new.wfh_zscore),3)]),e("tr",null,[ct,e("td",lt,a(t(i).old.bilateral_pitting_oedema),1),e("td",{class:l([t(i).old.bilateral_pitting_oedema!=t(i).new.bilateral_pitting_oedema?"bg-green-100":"surface-200","p-2"])},a(t(i).new.bilateral_pitting_oedema),3)]),e("tr",null,[rt,e("td",_t,a(t(i).old.medical_illness_complication),1),e("td",{class:l([t(i).old.medical_illness_complication!=t(i).new.medical_illness_complication?"bg-green-100":"surface-200","p-2"])},a(t(i).new.medical_illness_complication),3)]),e("tr",null,[ht,e("td",gt,a(t(i).old.appetite_test),1),e("td",{class:l([t(i).old.appetite_test!=t(i).new.appetite_test?"bg-green-100":"surface-200","p-2"])},a(t(i).new.appetite_test),3)]),e("tr",null,[ut,e("td",pt,a(t(i).old.immunization_status),1),e("td",{class:l([t(i).old.immunization_status!=t(i).new.immunization_status?"bg-green-100":"surface-200","p-2"])},a(t(i).new.immunization_status),3)]),e("tr",null,[mt,e("td",ft,a(t(i).old.deworming),1),e("td",{class:l([t(i).old.deworming!=t(i).new.deworming?"bg-green-100":"surface-200","p-2"])},a(t(i).new.deworming),3)]),e("tr",null,[wt,e("td",bt,a(t(i).old.vit_a_supplement),1),e("td",{class:l([t(i).old.vit_a_supplement!=t(i).new.vit_a_supplement?"bg-green-100":"surface-200","p-2"])},a(t(i).new.vit_a_supplement),3)]),e("tr",null,[yt,e("td",vt,a(t(i).old.type_of_case),1),e("td",{class:l([t(i).old.type_of_case!=t(i).new.type_of_case?"bg-green-100":"surface-200","p-2"])},a(t(i).new.type_of_case),3)]),e("tr",null,[xt,e("td",kt,a(t(i).old.case_category),1),e("td",{class:l([t(i).old.case_category!=t(i).new.case_category?"bg-green-100":"surface-200","p-2"])},a(t(i).new.case_category),3)]),e("tr",null,[zt,e("td",Dt,a(t(i).old.category_of_criteria),1),e("td",{class:l([t(i).old.category_of_criteria!=t(i).new.category_of_criteria?"bg-green-100":"surface-200","p-2"])},a(t(i).new.category_of_criteria),3)]),e("tr",null,[$t,e("td",St,a(t(i).old.criteria_group),1),e("td",{class:l([t(i).old.criteria_group!=t(i).new.criteria_group?"bg-green-100":"surface-200","p-2"])},a(t(i).new.criteria_group),3)]),e("tr",null,[Ct,e("td",Rt,a(t(i).old.date_of_admission),1),e("td",{class:l([t(i).old.date_of_admission!=t(i).new.date_of_admission?"bg-green-100":"surface-200","p-2"])},a(t(i).new.date_of_admission),3)]),e("tr",null,[Ft,e("td",Bt,a(t(i).old.admitted_year),1),e("td",{class:l([t(i).old.admitted_year!=t(i).new.admitted_year?"bg-green-100":"surface-200","p-2"])},a(t(i).new.admitted_year),3)]),e("tr",null,[It,e("td",Ut,a(t(i).old.admitted_month),1),e("td",{class:l([t(i).old.admitted_month!=t(i).new.admitted_month?"bg-green-100":"surface-200","p-2"])},a(t(i).new.admitted_month),3)])])]),_:1},8,["disabled"]),w(t(F),{header:"Follow Up",disabled:t(p).disableFollowUp},{default:v(()=>[w(t(q),{value:t(f)},{list:v(s=>[e("table",jt,[e("tr",Et,[Vt,e("td",At,a(s.data.visit),1)]),e("tr",null,[Mt,e("td",Nt,a(s.data.date_of_visit),1)]),e("tr",null,[Ot,e("td",Ht,a(s.data.muac_cm),1)]),e("tr",null,[Tt,e("td",Wt,a(s.data.weight_kg),1)]),e("tr",null,[Lt,e("td",Gt,a(s.data.oedema),1)]),e("tr",null,[Jt,e("td",Yt,a(s.data.food),1)]),e("tr",null,[qt,e("td",Pt,a(s.data.food_kg),1)]),e("tr",null,[Zt,e("td",{class:l({"p-badge p-component p-badge-success":s.data.follow_up_result=="Complete Follow Up"})},a(s.data.follow_up_result),3)])])]),_:1},8,["value"])]),_:1},8,["disabled"]),w(t(F),{header:"Discharge",disabled:t(p).disableDischarge},{default:v(()=>[e("div",Qt,[e("div",Kt,[t(o).status=="Edited"?(b(),y(t(k),{key:0,label:"Approve",onClick:u[4]||(u[4]=s=>t(S)("approve")),icon:"pi pi-check",severity:"primary",text:""})):x("",!0)]),e("div",Xt,[t(o).status=="Edited"?(b(),y(t(k),{key:0,label:"Reject",onClick:u[5]||(u[5]=s=>t(S)("reject")),icon:"pi pi-times",severity:"danger",text:""})):x("",!0)]),e("div",ea,[w(t(I),{value:t(o).status,severity:t(o).status=="Discharged"?"success":t(o).status=="Feedback"?"danger":"warning"},null,8,["value","severity"])])]),e("table",ta,[aa,e("tr",null,[sa,e("td",ia,a(t(o).old.discharge_status),1),e("td",{class:l([t(o).old.discharge_status!=t(o).new.discharge_status?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_status),3)]),e("tr",null,[da,e("td",oa,a(t(o).old.discharge_category),1),e("td",{class:l([t(o).old.discharge_category!=t(o).new.discharge_category?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_category),3)]),e("tr",null,[na,e("td",ca,a(t(o).old.discharge_with),1),e("td",{class:l([t(o).old.discharge_with!=t(o).new.discharge_with?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_with),3)]),e("tr",null,[la,e("td",ra,a(t(o).old.date_of_discharge),1),e("td",{class:l([t(o).old.date_of_discharge!=t(o).new.date_of_discharge?"bg-green-100":"surface-200","p-2"])},a(t(o).new.date_of_discharge),3)]),e("tr",null,[_a,e("td",ha,a(t(o).old.discharge_year),1),e("td",{class:l([t(o).old.discharge_year!=t(o).new.discharge_year?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_year),3)]),e("tr",null,[ga,e("td",ua,a(t(o).old.discharge_month),1),e("td",{class:l([t(o).old.discharge_month!=t(o).new.discharge_month?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_month),3)]),e("tr",null,[pa,e("td",ma,a(t(o).old.discharge_muac_cm),1),e("td",{class:l([t(o).old.discharge_muac_cm!=t(o).new.discharge_muac_cm?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_muac_cm),3)]),e("tr",null,[fa,e("td",wa,a(t(o).old.discharge_weight_kg),1),e("td",{class:l([t(o).old.discharge_weight_kg!=t(o).new.discharge_weight_kg?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_weight_kg),3)]),e("tr",null,[ba,e("td",ya,a(t(o).old.discharge_height_cm),1),e("td",{class:l([t(o).old.discharge_height_cm!=t(o).new.discharge_height_cm?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_height_cm),3)]),e("tr",null,[va,e("td",xa,a(t(o).old.discharge_wfh_zscore),1),e("td",{class:l([t(o).old.discharge_wfh_zscore!=t(o).new.discharge_wfh_zscore?"bg-green-100":"surface-200","p-2"])},a(t(o).new.discharge_wfh_zscore),3)]),e("tr",null,[ka,e("td",za,a(t(o).old.length_of_stay),1),e("td",{class:l([t(o).old.length_of_stay!=t(o).new.length_of_stay?"bg-green-100":"surface-200","p-2"])},a(t(o).new.length_of_stay),3)])])]),_:1},8,["disabled"])]),_:1}),w(t(P),{visible:t(r),"onUpdate:visible":u[8]||(u[8]=s=>U(r)?r.value=s:null),modal:"",header:"Please Enter!"},{default:v(()=>[e("div",Da,[$a,w(t(E),{modelValue:t(z),"onUpdate:modelValue":u[6]||(u[6]=s=>U(z)?z.value=s:null),rows:"5",cols:"40"},null,8,["modelValue"]),w(t(k),{label:"Continue Reject",onClick:u[7]||(u[7]=()=>{t(R)("reject")}),severity:"danger"})])]),_:1},8,["visible"]),t(m)?(b(),y(J,{key:0})):x("",!0)])}}},Oa=T(Ca,[["__scopeId","data-v-31686550"]]);export{Oa as default};
