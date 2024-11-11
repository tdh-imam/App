import{z as o,A as V,L as I,M as N,B as z,_ as F,r as B,o as r,c,a as n,b as m,w as l,g as L,G as t,i as h,I as D,F as C,p as R,e as $,n as A,t as y,k as T,H as U,P as E,Q as H}from"./index-4f94937a.js";import{m as K,u as O,a as G,s as Q,b as j,c as q,d as J}from"./device-a64efa73.js";import{s as W}from"./inputtext.esm-6cf2667e.js";import{s as X}from"./confirmdialog.esm-edc8c15c.js";import{u as Y}from"./store-1abbaa04.js";import"./paginator.esm-b183ae5d.js";import"./dropdown.esm-3ad035dd.js";import"./dialog.esm-a83cdbdd.js";import"./index.esm-93f34c2d.js";const Z=()=>{const i=o(!0),f=Y(),_=o(),b=o(),a=o({}),w=o(),p=o(0),g=o(""),S=o(["Edited","Discharged"]),k=o([{field:"id",header:"ID",selected:!1,style:"min-width: 5rem",frozen:!1},{field:"am_number",header:"AM Number",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"user_full_name",header:"CM",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"patient_name",header:"Patient",sortable:!0,selected:!0,style:"min-width: 5rem"}]),P=o(null);V(()=>{v(),u()}),I(()=>{f.$dispose()});const u=async()=>{i.value=!0,await f.fetchAll({page:a.value.page+=1,per_page:a.value.rows,order:K(a.value.multiSortMeta),search:g.value});const s=f.getAllResponse;s&&(w.value=s.data,p.value=s.meta.total),i.value=!1},v=()=>{a.value={page:0,rows:b.value.rows,multiSortMeta:[],first:0}},x=s=>{a.value=s,a.value.multiSortMeta=[],u()},d=s=>{a.value=s,a.value.page=0,a.value.first=0,u()},M=s=>{_.value.toggle(s)},e=N(()=>k.value.filter(s=>s.selected));return z([g],O(()=>{v(),u()},500)),z([P],()=>{v(),u()}),{dt:b,lazyParams:a,totalRecords:p,records:w,isLoading:i,search:g,statusOptions:S,selectedStatus:P,onPage:x,onSort:d,toggleColumnMenu:M,selectedColumns:e,columns:k,columnMenu:_}};const ee=i=>(E("data-v-659ab897"),i=i(),H(),i),te={class:"card"},se={class:"flex flex-wrap flex-row-reverse align-items-center"},ae={class:"p-input-icon-left mr-2 mb-2 flex-1"},oe=ee(()=>n("i",{class:"pi pi-search"},null,-1)),re=["for"],le={key:0},ne={key:1},ie={key:2},de={class:"text-center w-full"},ue={class:"mt-2"},ce={__name:"List",setup(i){const{dt:f,lazyParams:_,totalRecords:b,records:a,isLoading:w,search:p,onPage:g,onSort:S,selectedColumns:k,columns:P,columnMenu:u}=Z(),{isMobile:v}=G();return(x,d)=>{const M=B("router-link");return r(),c(C,null,[n("div",null,[n("div",te,[m(t(J),{ref_key:"dt",ref:f,dataKey:"id",lazy:!0,paginator:!0,value:t(a),onPage:d[1]||(d[1]=e=>t(g)(e)),onSort:d[2]||(d[2]=e=>t(S)(e)),sortMode:"multiple",multiSortMeta:t(_).multiSortMeta,totalRecords:t(b),rows:100,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:t(_).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{first} to {last} of total {totalRecords}",loading:t(w),responsiveLayout:"scroll",selectionMode:"single"},{header:l(()=>[n("div",se,[x.$can("create","User")?(r(),L(M,{key:0,to:{name:"newCase"}},{default:l(()=>[m(t(T),{class:"mb-2 flex-2",label:"New",icon:"pi pi-plus",severity:"primary"})]),_:1})):h("",!0),n("span",ae,[oe,m(t(W),{modelValue:t(p),"onUpdate:modelValue":d[0]||(d[0]=e=>D(p)?p.value=e:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),m(t(Q),{ref_key:"columnMenu",ref:u,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:l(()=>[(r(!0),c(C,null,R(t(P),e=>(r(),c("div",{key:e.field,class:"field-checkbox"},[m(t(j),{inputId:e.field,name:"column",modelValue:e.selected,binary:!0,onChange:s=>e.selected=!e.selected,disabled:e.frozen},null,8,["inputId","modelValue","onChange","disabled"]),n("label",{for:e.field},y(e.header),9,re)]))),128))]),_:1},512)])]),empty:l(()=>[$(" No records found. ")]),loading:l(()=>[$(" Loading records data. Please wait. ")]),default:l(()=>[(r(!0),c(C,null,R(t(k),e=>(r(),L(t(q),{key:e.field,field:e.field,header:e.header,sortable:e.sortable,frozen:!t(v)&&e.frozen,alignFrozen:e.alignFrozen,style:U(e.style)},{body:l(({data:s})=>[x.$can("view","Case")?(r(),L(M,{key:0,class:"text-black-alpha-90",to:{name:"showCase",params:{id:s.id}}},{default:l(()=>[e.field==="am_number"?(r(),c("div",le,y(s.am_number),1)):h("",!0),e.field==="user_full_name"?(r(),c("div",ne,y(s.user_full_name),1)):h("",!0),e.field==="patient_name"?(r(),c("div",ie,y(s.patient_name),1)):h("",!0)]),_:2},1032,["to"])):h("",!0)]),_:2},1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),m(t(X),null,{message:l(e=>[n("div",de,[n("i",{class:A([e.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),n("div",ue,y(e.message.message),1)])]),_:1})],64)}}},we=F(ce,[["__scopeId","data-v-659ab897"]]);export{we as default};