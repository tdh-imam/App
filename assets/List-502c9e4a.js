import{z as o,A as se,L as te,M as le,B as Q,N as ae,_ as oe,r as re,o as i,c as p,a as l,b as r,G as e,I as Y,i as v,w as c,F as j,p as J,e as z,n as ne,t as S,k as M,g as q,H as ie,P as de,Q as ue}from"./index-4f94937a.js";import{m as ce,u as fe,a as pe,s as me,b as _e,c as ve,d as ge}from"./device-a64efa73.js";import{s as he}from"./selectbutton.esm-23f9407c.js";import{s as ye}from"./inputtext.esm-6cf2667e.js";import{s as W}from"./dropdown.esm-3ad035dd.js";import{s as be}from"./confirmdialog.esm-edc8c15c.js";import{a as X}from"./dialog.esm-a83cdbdd.js";import{u as Ce}from"./store-ad7fb357.js";import{u as we}from"./globalStore-518151fd.js";import"./paginator.esm-b183ae5d.js";import"./index.esm-93f34c2d.js";const ke=()=>{const d=o(!0),m=Ce(),y=o(),b=o(),n=o({}),L=o(),D=o(0),T=o(""),R=we(),P=o(["Ongoing","Completed","Discharged"]),U=o([{field:"id",header:"ID",selected:!1,style:"min-width: 5rem",frozen:!1},{field:"am_number",header:"AM Number",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"length_of_stay",header:"Length of Stay",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"user_full_name",header:"CM",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"patient_name",header:"Patient",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"actions",header:"Transfers",sortable:!1,selected:!0,style:"min-width: 10rem",frozen:!0,alignFrozen:"right"}]),C=o("Ongoing"),_=o(null),I=o(null),N=o("Transfer case to:"),h=o(!1);se(()=>{w(),g(),G()}),te(()=>{m.$dispose()});const g=async()=>{d.value=!0,await m.fetchAll({page:n.value.page+=1,per_page:n.value.rows,order:ce(n.value.multiSortMeta),search:T.value,status:C.value,user_id:_.value});const t=m.getAllResponse;t&&(L.value=t.data,D.value=t.meta.total),d.value=!1},w=()=>{n.value={page:0,rows:b.value.rows,multiSortMeta:[],first:0}},V=t=>{n.value=t,n.value.multiSortMeta=[],g()},E=t=>{n.value=t,n.value.page=0,n.value.first=0,g()},A=t=>{y.value.toggle(t)},F=le(()=>U.value.filter(t=>t.selected)),$=o(!1),x=o([]);Q([T],fe(()=>{w(),g()},500)),Q([_],()=>{I.value=x.value.find(t=>t.id==_.value).full_name}),Q([_,C],()=>{w(),g()});const G=async()=>{console.log("fetching users"),d.value=!0,await R.fetchAllUser({role:4});const t=R.getAllUserResponse;if(t){const{options:O}=t.data;x.value=O}d.value=!1},H=()=>{if(_.value==null){alert("You need to choose CM");return}if(C.value!="Ongoing"){alert("Only Ongoing cases can be transferred");return}$.value=!0,N.value=`Transfer Ongoing Cases of [${I.value}] to:`,h.value=!0},f=o({user_id:"",case_id:""}),a=async()=>{if(f.value.user_id==""){alert("Select CM");return}d.value=!0;try{if(h.value===!1){await m.transferCase({case_id:f.value.case_id,user_id:f.value.user_id});const t=m.getTransferCaseResponse;t&&u("Case is transferred to "+t.data.data.full_name,"success")}else{await m.transferBulkCase({from_user_id:_.value,to_user_id:f.value.user_id});const t=m.getTransferCaseResponse;t&&u("Case is transferred to "+t.data.data.full_name,"success")}d.value=!1,$.value=!1,n.value.page=n.value.page-1,f.value.user_id="",g()}catch(t){d.value=!1,u(t,"error")}},K=o(!1),s=()=>{},u=(t,O="error",k=5e3)=>{ae.emit("show-toast",{severity:O,summary:"",detail:t,life:k})};return{dt:b,lazyParams:n,totalRecords:D,records:L,isLoading:d,search:T,statusOptions:P,selectedStatus:C,selectedUser:_,onPage:V,onSort:E,toggleColumnMenu:A,selectedColumns:F,columns:U,columnMenu:y,transferTo:f,cmUserOptions:x,transferCase:a,visibleTransfer:$,downloadCases:s,visibleDownload:K,transferTitle:N,isBulkTransfer:h,transferBulkCaseClick:H,calculateLengthOfStay:(t,O)=>{let k=null;const ee=new Date(t);return k=(new Date(O)-ee)/(1e3*60*60*24),k=Math.round(k),k}}};const B=d=>(de("data-v-62254e20"),d=d(),ue(),d),Se={class:"card mb-4"},Me={class:"grid"},Le={class:"field col-12 md:col-6 lg:col-4"},Te=B(()=>l("label",{class:"label-sm"},[l("i",{class:"pi pi-filter"}),z("  Status ")],-1)),Pe={key:0,class:"field col-12 md:col-6 lg:col-4"},Ve=B(()=>l("label",{class:"label-sm"},[l("i",{class:"pi pi-filter"}),z("  CM ")],-1)),$e={key:1,class:"field col-12 md:col-6 lg:col-4"},xe=B(()=>l("label",{class:"label-sm"},[l("i",{class:"pi pi-filter"}),z("  Bulk Transfer ")],-1)),Oe={class:"card"},ze={class:"flex flex-wrap flex-row-reverse align-items-center"},Be={class:"p-input-icon-left mr-2 mb-2 flex-1"},De=B(()=>l("i",{class:"pi pi-search"},null,-1)),Re=["for"],Ue={key:0},Ie={key:1},Ne={key:2},Ae={key:3},Fe={key:1},Ee={class:"text-center w-full"},Ge={class:"mt-2"},He={class:"field col-12"},Ke=B(()=>l("div",{class:"field col-12"},null,-1)),Qe={__name:"List",setup(d){const{statusOptions:m,selectedStatus:y,selectedUser:b,dt:n,lazyParams:L,totalRecords:D,records:T,isLoading:R,search:P,onPage:U,onSort:C,selectedColumns:_,columns:I,columnMenu:N,transferTo:h,transferCase:g,cmUserOptions:w,visibleTransfer:V,downloadCases:E,visibleDownload:A,transferTitle:F,isBulkTransfer:$,transferBulkCaseClick:x,calculateLengthOfStay:G}=ke(),{isMobile:H}=pe();return(f,a)=>{const K=re("router-link");return i(),p(j,null,[l("div",null,[l("div",Se,[l("div",Me,[l("div",Le,[Te,r(e(he),{modelValue:e(y),"onUpdate:modelValue":a[0]||(a[0]=s=>Y(y)?y.value=s:null),options:e(m),"aria-labelledby":"basic",class:"w-full"},null,8,["modelValue","options"])]),f.$can("transfer","BulkCase")?(i(),p("div",Pe,[Ve,r(e(W),{modelValue:e(b),"onUpdate:modelValue":a[1]||(a[1]=s=>Y(b)?b.value=s:null),options:e(w),optionLabel:"full_name",optionValue:"id",placeholder:"Select CM",class:"w-full",showClear:""},null,8,["modelValue","options"])])):v("",!0),f.$can("transfer","BulkCase")?(i(),p("div",$e,[xe,r(e(M),{class:"w-full",label:"All Ongoing Cases",icon:"pi pi-arrow-up-right",onClick:e(x),severity:"primary",outlined:""},null,8,["onClick"])])):v("",!0)])]),l("div",Oe,[r(e(ge),{ref_key:"dt",ref:n,dataKey:"id",lazy:!0,paginator:!0,value:e(T),onPage:a[3]||(a[3]=s=>e(U)(s)),onSort:a[4]||(a[4]=s=>e(C)(s)),sortMode:"multiple",multiSortMeta:e(L).multiSortMeta,totalRecords:e(D),rows:5,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:e(L).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{first} to {last} of total {totalRecords}",loading:e(R),responsiveLayout:"scroll"},{header:c(()=>[l("div",ze,[l("span",Be,[De,r(e(ye),{modelValue:e(P),"onUpdate:modelValue":a[2]||(a[2]=s=>Y(P)?P.value=s:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),r(e(me),{ref_key:"columnMenu",ref:N,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:c(()=>[(i(!0),p(j,null,J(e(I),s=>(i(),p("div",{key:s.field,class:"field-checkbox"},[r(e(_e),{inputId:s.field,name:"column",modelValue:s.selected,binary:!0,onChange:u=>s.selected=!s.selected,disabled:s.frozen},null,8,["inputId","modelValue","onChange","disabled"]),l("label",{for:s.field},S(s.header),9,Re)]))),128))]),_:1},512)])]),empty:c(()=>[z(" No records found. ")]),loading:c(()=>[z(" Loading records data. Please wait. ")]),default:c(()=>[(i(!0),p(j,null,J(e(_),s=>(i(),q(e(ve),{key:s.field,field:s.field,header:s.header,sortable:s.sortable,frozen:!e(H)&&s.frozen,alignFrozen:s.alignFrozen,style:ie(s.style)},{body:c(({data:u})=>[f.$can("view","Case")?(i(),q(K,{key:0,class:"text-black-alpha-90",to:{name:"viewCase",params:{id:u.id}}},{default:c(()=>[s.field==="am_number"?(i(),p("div",Ue,S(u.am_number),1)):v("",!0),s.field==="length_of_stay"?(i(),p("div",Ie,S(e(G)(u.date_of_admission!==void 0?u.date_of_admission:"",new Date().toISOString().split("T")[0]))+" Days ",1)):v("",!0),s.field==="user_full_name"?(i(),p("div",Ne,S(u.user_full_name),1)):v("",!0),s.field==="patient_name"?(i(),p("div",Ae,S(u.patient_name),1)):v("",!0)]),_:2},1032,["to"])):v("",!0),s.field==="actions"?(i(),p("div",Fe,[f.$can("transfer","Case")?(i(),q(e(M),{key:0,type:"button",icon:"pi pi-arrow-up-right",class:"p-button-primary",text:"",rounded:"",onClick:Z=>(V.value=!0,e(h).case_id=u.id,F.value=`Transfer Case [${u.id}] to: `,$.value=!1)},null,8,["onClick"])):v("",!0)])):v("",!0)]),_:2},1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),r(e(be),null,{message:c(s=>[l("div",Ee,[l("i",{class:ne([s.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),l("div",Ge,S(s.message.message),1)])]),_:1}),r(e(X),{closable:!1,visible:e(V),modal:"",style:{width:"25rem"},header:e(F)},{footer:c(()=>[r(e(M),{label:"Cancel",icon:"pi pi-times",onClick:a[6]||(a[6]=s=>V.value=!1),text:""}),r(e(M),{label:"Transfer",icon:"pi pi-check",onClick:e(g),autofocus:""},null,8,["onClick"])]),default:c(()=>[l("div",He,[r(e(W),{id:"transfer_to",modelValue:e(h).user_id,"onUpdate:modelValue":a[5]||(a[5]=s=>e(h).user_id=s),options:e(w),optionLabel:"full_name",optionValue:"id",class:"w-full",filter:""},null,8,["modelValue","options"])])]),_:1},8,["visible","header"]),r(e(X),{closable:!1,visible:e(A),modal:"",style:{width:"25rem"},header:"Download Cases Report"},{footer:c(()=>[r(e(M),{label:"Cancel",icon:"pi pi-times",onClick:a[7]||(a[7]=s=>A.value=!1),text:""}),r(e(M),{label:"Download",icon:"pi pi-check",onClick:e(E),autofocus:""},null,8,["onClick"])]),default:c(()=>[Ke]),_:1},8,["visible"])],64)}}},rs=oe(Qe,[["__scopeId","data-v-62254e20"]]);export{rs as default};
