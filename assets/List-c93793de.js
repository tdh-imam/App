import{g as o,f as V,m as N,n as F,p as z,_ as I,r as B,o as r,c,a as n,b as p,w as l,j as C,u as t,k as h,q as D,F as L,v as R,e as $,x as A,t as y,s as T,y as U,A as E,B as K}from"./index-ae04caa3.js";import{m as O,u as j,a as q,s as H,b as G,c as J,d as Q}from"./device-979e2faa.js";import{s as W}from"./inputtext.esm-64326cd5.js";import{s as X}from"./confirmdialog.esm-6920f1d4.js";import{u as Y}from"./store-03aab8da.js";import"./paginator.esm-995680d0.js";import"./dropdown.esm-1966edcb.js";import"./dialog.esm-151f92d8.js";import"./index.esm-928191ab.js";const Z=()=>{const i=o(!0),f=Y(),_=o(),w=o(),a=o({}),b=o(),m=o(0),g=o(""),M=o(["Edited","Discharged"]),k=o([{field:"id",header:"ID",selected:!1,style:"min-width: 5rem",frozen:!1},{field:"am_number",header:"AM Number",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"user_full_name",header:"CM",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"patient_name",header:"Patient",sortable:!0,selected:!0,style:"min-width: 5rem"}]),P=o(null);V(()=>{v(),u()}),N(()=>{f.$dispose()});const u=async()=>{i.value=!0,await f.fetchAll({page:a.value.page+=1,per_page:a.value.rows,order:O(a.value.multiSortMeta),search:g.value});const s=f.getAllResponse;s&&(b.value=s.data,m.value=s.meta.total),i.value=!1},v=()=>{a.value={page:0,rows:w.value.rows,multiSortMeta:[],first:0}},x=s=>{a.value=s,a.value.multiSortMeta=[],u()},d=s=>{a.value=s,a.value.page=0,a.value.first=0,u()},S=s=>{_.value.toggle(s)},e=F(()=>k.value.filter(s=>s.selected));return z([g],j(()=>{v(),u()},500)),z([P],()=>{v(),u()}),{dt:w,lazyParams:a,totalRecords:m,records:b,isLoading:i,search:g,statusOptions:M,selectedStatus:P,onPage:x,onSort:d,toggleColumnMenu:S,selectedColumns:e,columns:k,columnMenu:_}};const ee=i=>(E("data-v-9e507fce"),i=i(),K(),i),te={class:"card"},se={class:"flex flex-wrap flex-row-reverse align-items-center"},ae={class:"p-input-icon-left mr-2 mb-2 flex-1"},oe=ee(()=>n("i",{class:"pi pi-search"},null,-1)),re=["for"],le={key:0},ne={key:1},ie={key:2},de={class:"text-center w-full"},ue={class:"mt-2"},ce={__name:"List",setup(i){const{dt:f,lazyParams:_,totalRecords:w,records:a,isLoading:b,search:m,onPage:g,onSort:M,selectedColumns:k,columns:P,columnMenu:u}=Z(),{isMobile:v}=q();return(x,d)=>{const S=B("router-link");return r(),c(L,null,[n("div",null,[n("div",te,[p(t(Q),{ref_key:"dt",ref:f,dataKey:"id",lazy:!0,paginator:!0,value:t(a),onPage:d[1]||(d[1]=e=>t(g)(e)),onSort:d[2]||(d[2]=e=>t(M)(e)),sortMode:"multiple",multiSortMeta:t(_).multiSortMeta,totalRecords:t(w),rows:100,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:t(_).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{first} to {last} of total {totalRecords}",loading:t(b),responsiveLayout:"scroll",selectionMode:"single"},{header:l(()=>[n("div",se,[x.$can("create","User")?(r(),C(S,{key:0,to:{name:"newCase"}},{default:l(()=>[p(t(T),{class:"mb-2 flex-2",label:"New",icon:"pi pi-plus",severity:"primary"})]),_:1})):h("",!0),n("span",ae,[oe,p(t(W),{modelValue:t(m),"onUpdate:modelValue":d[0]||(d[0]=e=>D(m)?m.value=e:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),p(t(H),{ref_key:"columnMenu",ref:u,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:l(()=>[(r(!0),c(L,null,R(t(P),e=>(r(),c("div",{key:e.field,class:"field-checkbox"},[p(t(G),{inputId:e.field,name:"column",modelValue:e.selected,binary:!0,onChange:s=>e.selected=!e.selected,disabled:e.frozen},null,8,["inputId","modelValue","onChange","disabled"]),n("label",{for:e.field},y(e.header),9,re)]))),128))]),_:1},512)])]),empty:l(()=>[$(" No records found. ")]),loading:l(()=>[$(" Loading records data. Please wait. ")]),default:l(()=>[(r(!0),c(L,null,R(t(k),e=>(r(),C(t(J),{key:e.field,field:e.field,header:e.header,sortable:e.sortable,frozen:!t(v)&&e.frozen,alignFrozen:e.alignFrozen,style:U(e.style)},{body:l(({data:s})=>[x.$can("view","Case")?(r(),C(S,{key:0,class:"text-black-alpha-90",to:{name:"showCase",params:{id:s.id}}},{default:l(()=>[e.field==="am_number"?(r(),c("div",le,y(s.am_number),1)):h("",!0),e.field==="user_full_name"?(r(),c("div",ne,y(s.user_full_name),1)):h("",!0),e.field==="patient_name"?(r(),c("div",ie,y(s.patient_name),1)):h("",!0)]),_:2},1032,["to"])):h("",!0)]),_:2},1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),p(t(X),null,{message:l(e=>[n("div",de,[n("i",{class:A([e.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),n("div",ue,y(e.message.message),1)])]),_:1})],64)}}},be=I(ce,[["__scopeId","data-v-9e507fce"]]);export{be as default};
