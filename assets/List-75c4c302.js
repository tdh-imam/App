import{K as G,o as f,c as w,a as u,J as z,a3 as Q,g as h,C as X,H as Z,l as ee,f as te,m as se,n as ne,p as E,E as ae,_ as oe,r as le,h as ie,u as n,j as B,q as T,k as O,i as re,b as S,t as P,w as _,F as U,v as A,e as K,x as ue,s as H,y as ce,A as de,B as pe}from"./index-7c826dea.js";import{m as fe,u as me,a as ye,s as he,b as be,c as ge,d as ve}from"./device-d73c99cc.js";import{s as _e}from"./selectbutton.esm-961bbc68.js";import{s as we}from"./inputtext.esm-36324a3f.js";import{s as Se}from"./confirmdialog.esm-8e197dfb.js";import{u as ke}from"./store-d3831fd9.js";import"./paginator.esm-39d4e2af.js";import"./dropdown.esm-af9d6f58.js";import"./dialog.esm-18434f6a.js";import"./index.esm-797823f6.js";var Oe=`
.p-inputswitch {
    display: inline-block;
}

.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
}

.p-inputswitch-slider:before {
    position: absolute;
    content: '';
    top: 50%;
}
`,Pe={root:{position:"relative"}},Ce={root:function(t){var a=t.instance,l=t.props;return["p-inputswitch p-component",{"p-inputswitch-checked":a.checked,"p-disabled":l.disabled,"p-focus":a.focused}]},slider:"p-inputswitch-slider"},xe=G(Oe,{name:"inputswitch",manual:!0}),Ve=xe.load,$e={name:"BaseInputSwitch",extends:Q,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:Ce,inlineStyles:Pe,loadStyle:Ve},provide:function(){return{$parentInstance:this}}},W={name:"InputSwitch",extends:$e,emits:["click","update:modelValue","change","input","focus","blur"],data:function(){return{focused:!1}},methods:{onClick:function(t){if(!this.disabled){var a=this.checked?this.falseValue:this.trueValue;this.$emit("click",t),this.$emit("update:modelValue",a),this.$emit("change",t),this.$emit("input",a),this.$refs.input.focus()}},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue===this.trueValue}}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,l)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?J(Object(a),!0).forEach(function(l){Le(e,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))})}return e}function Le(e,t,a){return t=Ie(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ie(e){var t=Me(e,"string");return V(t)==="symbol"?t:String(t)}function Me(e,t){if(V(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var l=a.call(e,t||"default");if(V(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var je=["id","checked","disabled","aria-checked","aria-labelledby","aria-label"];function De(e,t,a,l,i,b){return f(),w("div",z({class:e.cx("root"),style:e.sx("root"),onClick:t[2]||(t[2]=function(g){return b.onClick(g)})},e.ptm("root"),{"data-pc-name":"inputswitch"}),[u("div",z({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[u("input",z({ref:"input",id:e.inputId,type:"checkbox",role:"switch",class:e.inputClass,style:e.inputStyle,checked:b.checked,disabled:e.disabled,"aria-checked":b.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=function(g){return b.onFocus(g)}),onBlur:t[1]||(t[1]=function(g){return b.onBlur(g)})},Y(Y({},e.inputProps),e.ptm("hiddenInput"))),null,16,je)],16),u("span",z({class:e.cx("slider")},e.ptm("slider")),null,16)],16)}W.render=De;const ze=()=>{const e=h(!0),t=ke(),a=X(),l=Z(),i=h(!0),b=h(),g=ee(),$=h(),c=h({}),k=h(),L=h(0),C=h(""),R=h(["Edited","Discharged"]),I=h([{field:"id",header:"ID",selected:!1,style:"min-width: 5rem",frozen:!1},{field:"am_number",header:"AM Number",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"length_of_stay",header:"Length of Stay",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"patient_name",header:"Patient",sortable:!0,selected:!0,style:"min-width: 5rem"}]),d=h(null),x=()=>{const o="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png";return new Promise(m=>{var y=new Image;y.onload=function(){m(!0)},y.onerror=function(){m(!1)};const q=o+"?t="+new Date().getTime();y.timeout=5e3,y.src=q})};te(async()=>{await x().then(o=>{i.value=o}),i.value=l.query.online!==void 0?JSON.parse(l.query.online):i.value,r(),v()}),se(()=>{t.$dispose()});const v=async()=>{e.value=!0,await t.fetchAll({page:c.value.page+=1,per_page:c.value.rows,order:fe(c.value.multiSortMeta),search:C.value,status:d.value},i.value);const o=t.getAllResponse;o&&(k.value=o.data,L.value=o.meta.total),e.value=!1},F=async()=>{await x().then(o=>{o?g.require({message:"Are you sure you want to upload all Offline Cases?",header:"Confirmation",icon:"pi pi-question text-primary-900",rejectClass:"p-button-secondary p-button-text",acceptClass:"p-button-primary p-button-text",accept:async()=>{e.value=!0;let m=0;k.value.forEach(async y=>{await M(y),m++,m==k.value.length&&(D("Switching to online mode ...","info"),k.value=null,i.value=!0,r(),v())})},reject:()=>{}}):D("You are offline, cannot sync!","error")})},M=async o=>{try{await t.add(o.data,!0),t.getAddResponse&&(await t.deleteOfflineCase({id:parseInt(o.id)}),D("Case - Patient: "+o.patient_name+" Uploaded","success"))}catch{e.value=!1}},r=()=>{c.value={page:0,rows:$.value.rows,multiSortMeta:[],first:0}},j=o=>{c.value=o,c.value.multiSortMeta=[],v()},N=o=>{c.value=o,c.value.page=0,c.value.first=0,v()},s=o=>{b.value.toggle(o)},p=ne(()=>I.value.filter(o=>o.selected));E([C],me(()=>{r(),v()},500)),E([d],()=>{r(),v()}),E([i],async()=>{i.value==!0&&await x().then(o=>{i.value=o,o==!1&&D("You are offline, cannot change to online mode!","error")}),console.log(i.value),a.push({path:l.path,query:{...l.query,online:i.value}}),r(),v()});const D=(o,m="error")=>{ae.emit("show-toast",{severity:m,summary:"",detail:o,life:3e3})};return{dt:$,lazyParams:c,totalRecords:L,records:k,isLoading:e,search:C,statusOptions:R,selectedStatus:d,onPage:j,onSort:N,toggleColumnMenu:s,selectedColumns:p,columns:I,columnMenu:b,isOnline:i,syncOfflineCase:F,calculateLengthOfStay:(o,m)=>{let y=null;const q=new Date(o);return y=(new Date(m)-q)/(1e3*60*60*24),y=Math.round(y),y}}};const Be=e=>(de("data-v-bbd9d54f"),e=e(),pe(),e),Re={class:"card mb-4"},Fe={class:"flex justify-content-left"},Ne={key:1,class:"flex-1"},qe={class:"input-switch-container flex-2"},Ee={class:"offline-label text-lg"},Te={class:"card"},Ue={class:"flex flex-wrap flex-row-reverse align-items-center"},Ae={class:"p-input-icon-left mr-2 mb-2 flex-1"},Ke=Be(()=>u("i",{class:"pi pi-search"},null,-1)),He=["for"],Je={key:0},Ye={key:1},We={key:2},Ge={class:"text-center w-full"},Qe={class:"mt-2"},Xe={__name:"List",setup(e){const{statusOptions:t,selectedStatus:a,dt:l,lazyParams:i,totalRecords:b,records:g,isLoading:$,search:c,onPage:k,onSort:L,selectedColumns:C,columns:R,columnMenu:I,isOnline:d,syncOfflineCase:x,calculateLengthOfStay:v}=ze(),{isMobile:F}=ye();return(M,r)=>{const j=le("router-link"),N=ie("tooltip");return f(),w(U,null,[u("div",null,[u("div",Re,[u("div",Fe,[n(d)?(f(),B(n(_e),{key:0,class:"flex-1",modelValue:n(a),"onUpdate:modelValue":r[0]||(r[0]=s=>T(a)?a.value=s:null),options:n(t),"aria-labelledby":"basic"},null,8,["modelValue","options"])):O("",!0),n(d)?O("",!0):(f(),w("div",Ne,[re(S(n(H),{onClick:n(x),icon:"pi pi-sync",label:"Sync",text:""},null,8,["onClick"]),[[N,"Upload Offline Cases",void 0,{top:!0}]])])),u("div",qe,[u("span",Ee,P(n(d)?"Online":"Offline"),1),S(n(W),{modelValue:n(d),"onUpdate:modelValue":r[1]||(r[1]=s=>T(d)?d.value=s:null),inputClass:"success",class:"input-switch"},null,8,["modelValue"])])])]),u("div",Te,[S(n(ve),{ref_key:"dt",ref:l,dataKey:"id",lazy:!0,paginator:!0,value:n(g),onPage:r[3]||(r[3]=s=>n(k)(s)),onSort:r[4]||(r[4]=s=>n(L)(s)),sortMode:"multiple",multiSortMeta:n(i).multiSortMeta,totalRecords:n(b),rows:5,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:n(i).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{first} to {last} of total {totalRecords}",loading:n($),responsiveLayout:"scroll",selectionMode:"single"},{header:_(()=>[u("div",Ue,[M.$can("create","MyCase")?(f(),B(j,{key:0,to:{name:"newCase",query:{online:n(d)}}},{default:_(()=>[S(n(H),{class:"mb-2 flex-2",label:"New",icon:"pi pi-plus",severity:"primary"})]),_:1},8,["to"])):O("",!0),u("span",Ae,[Ke,S(n(we),{modelValue:n(c),"onUpdate:modelValue":r[2]||(r[2]=s=>T(c)?c.value=s:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),S(n(he),{ref_key:"columnMenu",ref:I,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:_(()=>[(f(!0),w(U,null,A(n(R),s=>(f(),w("div",{key:s.field,class:"field-checkbox"},[S(n(be),{inputId:s.field,name:"column",modelValue:s.selected,binary:!0,onChange:p=>s.selected=!s.selected,disabled:s.frozen},null,8,["inputId","modelValue","onChange","disabled"]),u("label",{for:s.field},P(s.header),9,He)]))),128))]),_:1},512)])]),empty:_(()=>[K(" No records found. ")]),loading:_(()=>[K(" Loading records data. Please wait. ")]),default:_(()=>[(f(!0),w(U,null,A(n(C),s=>(f(),B(n(ge),{key:s.field,field:s.field,header:s.header,sortable:s.sortable,frozen:!n(F)&&s.frozen,alignFrozen:s.alignFrozen,style:ce(s.style)},{body:_(({data:p})=>[M.$can("create","MyCase")?(f(),B(j,{key:0,class:"text-black-alpha-90",to:n(d)?{name:"editCase",params:{id:p.id}}:{name:"editCaseOffline",params:{id:p.id}}},{default:_(()=>[s.field==="am_number"?(f(),w("div",Je,P(p.am_number),1)):O("",!0),s.field==="length_of_stay"?(f(),w("div",Ye,P(n(v)(n(d)?p.medical_examination&&p.medical_examination.date_of_admission!==void 0?p.medical_examination.date_of_admission:"":p.data.date_of_admission,new Date().toISOString().split("T")[0]))+" Days ",1)):O("",!0),s.field==="patient_name"?(f(),w("div",We,P(n(d)?p.biographic_info&&p.biographic_info.patient_name!==void 0?p.biographic_info.patient_name:"":p.patient_name),1)):O("",!0)]),_:2},1032,["to"])):O("",!0)]),_:2},1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),S(n(Se),null,{message:_(s=>[u("div",Ge,[u("i",{class:ue([s.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),u("div",Qe,P(s.message.message),1)])]),_:1})],64)}}},pt=oe(Xe,[["__scopeId","data-v-bbd9d54f"]]);export{pt as default};
