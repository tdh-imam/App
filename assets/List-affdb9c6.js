import{g as n,l as O,f as G,m as J,n as Q,p as H,E as W,_ as X,r as Z,o as g,c as B,a as s,e as k,t as S,b as c,u as t,q as I,w as p,j as F,k as T,F as E,v as K,x as ee,s as A,y as te,z as se,A as le,B as oe}from"./index-7c826dea.js";import{m as ae,u as ne,a as re,s as ie,b as de,c as ce,d as ue}from"./device-d73c99cc.js";import{s as me}from"./calendar.esm-c738eac9.js";import{s as pe}from"./inputtext.esm-36324a3f.js";import{s as Y}from"./dropdown.esm-af9d6f58.js";import{s as fe}from"./confirmdialog.esm-8e197dfb.js";import{u as ge}from"./store-3d9085ec.js";import"./paginator.esm-39d4e2af.js";import"./dialog.esm-18434f6a.js";import"./index.esm-797823f6.js";import"./index.esm-1da07df6.js";const he=()=>{const r=n(!0),u=ge(),P=O(),V=n(),R=n(),M=n(),o=n({}),$=n(),D=n(0),h=n(""),v=n([]),w=n([{name:"Active",code:"Active"},{name:"Inactive",code:"Inactive"}]),z=n([{field:"id",header:"ID",sortable:!0,selected:!0,style:"min-width: 5rem",frozen:!0},{field:"username",header:"Username",sortable:!0,selected:!1,style:"min-width: 5rem"},{field:"full_name",header:"Full Name",sortable:!0,selected:!0,style:"min-width: 15rem"},{field:"mobile_number",header:"Phone Number",sortable:!0,selected:!0,style:"min-width: 15rem"},{field:"email",header:"Email",sortable:!1,selected:!1,style:"min-width: 15rem"},{field:"actions",header:"Actions",sortable:!1,selected:!0,style:"min-width: 10rem",frozen:!0,alignFrozen:"right"}]),y=n(null),b=n(null),i=n("");G(()=>{N(),_(),f()}),J(()=>{u.$dispose()});const N=async()=>{r.value=!0,await u.fetchAllRole();const l=u.getAllRoleResponse;if(l){const{options:d}=l.data;for(let U=0;U<d.length;U+=1)v.value.push({name:d[U].name,code:d[U].id})}},f=async()=>{if(r.value=!0,i.value)for(let d=0;d<i.value.length;d+=1)i.value[d]!==null&&new Date(Date.UTC(i.value[d].getFullYear(),i.value[d].getMonth(),i.value[d].getDate()));await u.fetchAll({page:o.value.page+=1,per_page:o.value.rows,order:ae(o.value.multiSortMeta),search:h.value,role_id:y.value,status:b.value,date_between:i.value});const l=u.getAllResponse;l&&($.value=l.data,D.value=l.meta.total),r.value=!1},_=()=>{o.value={page:0,rows:M.value.rows,multiSortMeta:[],first:0}},j=l=>{o.value=l,o.value.multiSortMeta=[],f()},m=l=>{o.value=l,o.value.page=0,o.value.first=0,f()},a=l=>{P.require({header:"Confirmation",message:"Are you sure want to delete?",icon:"pi pi-exclamation-triangle",acceptLabel:"Yes, delete it",rejectLabel:"Cancel",acceptClass:"p-button-danger",rejectClass:"p-button-secondary p-button-text",accept:()=>{x(l)},reject:()=>{},onHide:()=>{}})},x=async l=>{r.value=!0,await u.delete({id:l}),u.getDeleteResponse.status==200&&(W.emit("show-toast",{severity:"success",summary:"",detail:"Delete Successfully",life:3e3}),_(),f()),r.value=!1},e=l=>{V.value.toggle(l)},C=l=>{R.value.toggle(l)},q=Q(()=>z.value.filter(l=>l.selected));return H([h],ne(()=>{_(),f()},500)),H([y,b,i],()=>{_(),f()}),{dt:M,lazyParams:o,totalRecords:D,records:$,isLoading:r,search:h,roles:v,statuses:w,selectedRole:y,selectedStatus:b,selectedDateBetween:i,actionMenu:V,toggleActionMenu:e,showConfirmDialog:a,onPage:j,onSort:m,toggleColumnMenu:C,selectedColumns:q,columns:z,columnMenu:R}};const L=r=>(le("data-v-f9c5c5ff"),r=r(),oe(),r),ve={class:"card mb-4"},_e={class:"grid"},we={class:"field col-12 md:col-6 lg:col-3"},ye={class:"label-sm"},be=L(()=>s("i",{class:"pi pi-filter"},null,-1)),Ce={class:"field col-12 md:col-6 lg:col-3"},ke={class:"label-sm"},Se=L(()=>s("i",{class:"pi pi-filter"},null,-1)),Le={class:"field col-12 md:col-6 lg:col-3"},Pe={class:"label-sm"},Ve=L(()=>s("i",{class:"pi pi-filter"},null,-1)),Re={class:"card"},Me={class:"flex flex-wrap justify-content-between align-items-center"},$e=L(()=>s("h5",{class:"m-0"},null,-1)),De={class:"p-input-icon-left"},ze={class:"mt-3 md:mt-0"},xe={class:"p-input-icon-left w-full md:w-auto"},Ue=L(()=>s("i",{class:"pi pi-search"},null,-1)),Be=["for"],Ie={class:"flex"},Fe={class:"text-center w-full"},Ae={class:"mt-2"},Ne={__name:"List",setup(r){const{dt:u,lazyParams:P,totalRecords:V,records:R,isLoading:M,search:o,roles:$,statuses:D,selectedRole:h,selectedStatus:v,selectedDateBetween:w,showConfirmDialog:z,onPage:y,onSort:b,toggleColumnMenu:i,selectedColumns:N,columns:f,columnMenu:_}=he(),{isMobile:j}=re();return(m,a)=>{const x=Z("router-link");return g(),B(E,null,[s("div",null,[s("div",ve,[s("div",_e,[s("div",we,[s("label",ye,[be,k("  "+S(m.$t("Role")),1)]),c(t(Y),{modelValue:t(h),"onUpdate:modelValue":a[0]||(a[0]=e=>I(h)?h.value=e:null),options:t($),optionLabel:"name",optionValue:"code",placeholder:"Select role",class:"w-full",showClear:""},null,8,["modelValue","options"])]),s("div",Ce,[s("label",ke,[Se,k(" "+S(m.$t("Status")),1)]),c(t(Y),{modelValue:t(v),"onUpdate:modelValue":a[1]||(a[1]=e=>I(v)?v.value=e:null),options:t(D),optionLabel:"name",optionValue:"code",placeholder:"Select status",class:"w-full",showClear:""},null,8,["modelValue","options"])]),s("div",Le,[s("label",Pe,[Ve,k(" "+S(m.$t("Date")),1)]),c(t(me),{placeholder:m.$t("Date Range"),inputId:"selectedDateBetween",modelValue:t(w),"onUpdate:modelValue":a[2]||(a[2]=e=>I(w)?w.value=e:null),selectionMode:"range",manualInput:!1,dateFormat:"dd/mm/yy",class:"w-full",showIcon:"",showButtonBar:!0},null,8,["placeholder","modelValue"])])])]),s("div",Re,[c(t(ue),{ref_key:"dt",ref:u,dataKey:"id",lazy:!0,paginator:!0,value:t(R),onPage:a[4]||(a[4]=e=>t(y)(e)),onSort:a[5]||(a[5]=e=>t(b)(e)),sortMode:"multiple",multiSortMeta:t(P).multiSortMeta,totalRecords:t(V),rows:5,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:t(P).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",loading:t(M),responsiveLayout:"scroll"},{header:p(()=>[s("div",Me,[$e,s("span",De,[s("div",ze,[s("span",xe,[Ue,c(t(pe),{modelValue:t(o),"onUpdate:modelValue":a[3]||(a[3]=e=>I(o)?o.value=e:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),m.$can("create","User")?(g(),F(x,{key:0,to:{name:"newUser"}},{default:p(()=>[c(t(A),{label:"New",icon:"pi pi-plus",class:"ml-0 md:ml-2 mt-2 md:mt-0",severity:"primary"})]),_:1})):T("",!0),c(t(ie),{ref_key:"columnMenu",ref:_,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:p(()=>[(g(!0),B(E,null,K(t(f),e=>(g(),B("div",{key:e.field,class:"field-checkbox"},[c(t(de),{inputId:e.field,name:"column",modelValue:e.selected,binary:!0,onChange:C=>e.selected=!e.selected,disabled:e.frozen},null,8,["inputId","modelValue","onChange","disabled"]),s("label",{for:e.field},S(e.header),9,Be)]))),128))]),_:1},512),c(t(A),{icon:"pi pi-th-large",onClick:t(i),class:"p-button-secondary p-button-outlined ml-2 mt-2 md:mt-0"},null,8,["onClick"])])])])]),empty:p(()=>[k(" No records found. ")]),loading:p(()=>[k(" Loading records data. Please wait. ")]),default:p(()=>[(g(!0),B(E,null,K(t(N),e=>(g(),F(t(ce),{key:e.field,field:e.field,header:e.header,sortable:e.sortable,frozen:!t(j)&&e.frozen,alignFrozen:e.alignFrozen,style:te(e.style)},se({_:2},[e.field==="actions"?{name:"body",fn:p(({data:C})=>[s("div",Ie,[m.$can("update","User")?(g(),F(x,{key:0,to:{name:"editUser",params:{id:C.id}}},{default:p(()=>[c(t(A),{type:"button",icon:"pi pi-pencil",class:"mr-2",text:"",rounded:""})]),_:2},1032,["to"])):T("",!0),m.$can("delete","User")?(g(),F(t(A),{key:1,type:"button",icon:"pi pi-trash",class:"p-button-danger",text:"",rounded:"",onClick:q=>t(z)(C.id)},null,8,["onClick"])):T("",!0)])]),key:"0"}:void 0]),1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),c(t(fe),null,{message:p(e=>[s("div",Fe,[s("i",{class:ee([e.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),s("div",Ae,S(e.message.message),1)])]),_:1})],64)}}},We=X(Ne,[["__scopeId","data-v-f9c5c5ff"]]);export{We as default};
