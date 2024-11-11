import{u as J,o as f,c as b,a as c,m as z,j as Q,z as h,E as X,W as Z,K as ee,A as te,L as se,M as ne,B as E,N as ae,_ as ie,r as oe,l as le,G as n,g as B,I as T,i as S,q as re,b as k,t as P,w,F as U,p as A,e as K,n as ue,k as W,H as ce,P as de,Q as pe}from"./index-3b5f40df.js";import{m as fe,u as me,a as ye,s as he,b as ge,c as be,d as ve}from"./device-5d74d076.js";import{s as _e}from"./selectbutton.esm-4baed3ef.js";import{s as we}from"./inputtext.esm-cc037207.js";import{s as Se}from"./confirmdialog.esm-aa3d5ada.js";import{u as ke}from"./store-06ce5c2d.js";import"./paginator.esm-b57398a2.js";import"./dropdown.esm-755470ff.js";import"./dialog.esm-d99cc5c1.js";import"./index.esm-b588718c.js";var Oe=`
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
`,Pe={root:{position:"relative"}},Ce={root:function(t){var a=t.instance,o=t.props;return["p-inputswitch p-component",{"p-inputswitch-checked":a.checked,"p-disabled":o.disabled,"p-focus":a.focused}]},slider:"p-inputswitch-slider"},xe=J(Oe,{name:"inputswitch",manual:!0}),Ve=xe.load,Le={name:"BaseInputSwitch",extends:Q,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:Ce,inlineStyles:Pe,loadStyle:Ve},provide:function(){return{$parentInstance:this}}},G={name:"InputSwitch",extends:Le,emits:["click","update:modelValue","change","input","focus","blur"],data:function(){return{focused:!1}},methods:{onClick:function(t){if(!this.disabled){var a=this.checked?this.falseValue:this.trueValue;this.$emit("click",t),this.$emit("update:modelValue",a),this.$emit("change",t),this.$emit("input",a),this.$refs.input.focus()}},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue===this.trueValue}}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,o)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?H(Object(a),!0).forEach(function(o){$e(e,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))})}return e}function $e(e,t,a){return t=Ie(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ie(e){var t=Me(e,"string");return V(t)==="symbol"?t:String(t)}function Me(e,t){if(V(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var o=a.call(e,t||"default");if(V(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var je=["id","checked","disabled","aria-checked","aria-labelledby","aria-label"];function De(e,t,a,o,r,g){return f(),b("div",z({class:e.cx("root"),style:e.sx("root"),onClick:t[2]||(t[2]=function(v){return g.onClick(v)})},e.ptm("root"),{"data-pc-name":"inputswitch"}),[c("div",z({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[c("input",z({ref:"input",id:e.inputId,type:"checkbox",role:"switch",class:e.inputClass,style:e.inputStyle,checked:g.checked,disabled:e.disabled,"aria-checked":g.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=function(v){return g.onFocus(v)}),onBlur:t[1]||(t[1]=function(v){return g.onBlur(v)})},Y(Y({},e.inputProps),e.ptm("hiddenInput"))),null,16,je)],16),c("span",z({class:e.cx("slider")},e.ptm("slider")),null,16)],16)}G.render=De;const ze=()=>{const e=h(!0),t=ke(),a=X(),o=Z(),r=h(!0),g=h(),v=ee(),L=h(),p=h({}),O=h(),$=h(0),C=h(""),R=h(["Ongoing","Edited","Completed","Discharged"]),I=h([{field:"id",header:"ID",selected:!1,style:"min-width: 5rem",frozen:!1},{field:"am_number",header:"AM Number",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"length_of_stay",header:"Length of Stay",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"patient_name",header:"Patient",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"village",header:"Ward/Village",sortable:!0,selected:!0,style:"min-width: 5rem"}]),d=h(""),x=()=>{const i="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png";return new Promise(m=>{var y=new Image;y.onload=function(){m(!0)},y.onerror=function(){m(!1)};const q=i+"?t="+new Date().getTime();y.timeout=5e3,y.src=q})};te(async()=>{await x().then(i=>{r.value=i}),r.value=o.query.online!==void 0?JSON.parse(o.query.online):r.value,u(),_()}),se(()=>{t.$dispose()});const _=async()=>{e.value=!0,await t.fetchAll({page:p.value.page+=1,per_page:p.value.rows,order:fe(p.value.multiSortMeta),search:C.value,status:d.value},r.value);const i=t.getAllResponse;i&&(O.value=i.data,$.value=i.meta.total),e.value=!1},F=async()=>{await x().then(i=>{i?v.require({message:"Are you sure you want to upload all Offline Cases?",header:"Confirmation",icon:"pi pi-question text-primary-900",rejectClass:"p-button-secondary p-button-text",acceptClass:"p-button-primary p-button-text",accept:async()=>{e.value=!0;let m=0;O.value.forEach(async y=>{await M(y),m++,m==O.value.length&&(D("Switching to online mode ...","info"),O.value=null,r.value=!0,u(),_())})},reject:()=>{}}):D("You are offline, cannot sync!","error")})},M=async i=>{try{await t.add(i.data,!0),t.getAddResponse&&(await t.deleteOfflineCase({id:parseInt(i.id)}),D("Case - Patient: "+i.patient_name+" Uploaded","success"))}catch{e.value=!1}},u=()=>{p.value={page:0,rows:L.value.rows,multiSortMeta:[],first:0}},j=i=>{p.value=i,p.value.multiSortMeta=[],_()},N=i=>{p.value=i,p.value.page=0,p.value.first=0,_()},s=i=>{g.value.toggle(i)},l=ne(()=>I.value.filter(i=>i.selected));E([C],me(()=>{u(),_()},500)),E([d],()=>{u(),_()}),E([r],async()=>{r.value==!0&&await x().then(i=>{r.value=i,i==!1&&D("You are offline, cannot change to online mode!","error")}),console.log(r.value),a.push({path:o.path,query:{...o.query,online:r.value}}),u(),_()});const D=(i,m="error")=>{ae.emit("show-toast",{severity:m,summary:"",detail:i,life:3e3})};return{dt:L,lazyParams:p,totalRecords:$,records:O,isLoading:e,search:C,statusOptions:R,selectedStatus:d,onPage:j,onSort:N,toggleColumnMenu:s,selectedColumns:l,columns:I,columnMenu:g,isOnline:r,syncOfflineCase:F,calculateLengthOfStay:(i,m)=>{let y=null;const q=new Date(i);return y=(new Date(m)-q)/(1e3*60*60*24),y=Math.round(y),y}}};const Be=e=>(de("data-v-c54ef3da"),e=e(),pe(),e),Re={class:"card mb-4"},Fe={class:"flex justify-content-left"},Ne={key:1,class:"flex-1"},qe={class:"input-switch-container flex-2"},Ee={class:"offline-label text-lg"},Te={class:"card"},Ue={class:"flex flex-wrap flex-row-reverse align-items-center"},Ae={class:"p-input-icon-left mr-2 mb-2 flex-1"},Ke=Be(()=>c("i",{class:"pi pi-search"},null,-1)),We=["for"],He={key:0},Ye={key:1},Ge={key:2},Je={key:3},Qe={class:"text-center w-full"},Xe={class:"mt-2"},Ze={__name:"List",setup(e){const{statusOptions:t,selectedStatus:a,dt:o,lazyParams:r,totalRecords:g,records:v,isLoading:L,search:p,onPage:O,onSort:$,selectedColumns:C,columns:R,columnMenu:I,isOnline:d,syncOfflineCase:x,calculateLengthOfStay:_}=ze(),{isMobile:F}=ye();return(M,u)=>{const j=oe("router-link"),N=le("tooltip");return f(),b(U,null,[c("div",null,[c("div",Re,[c("div",Fe,[n(d)?(f(),B(n(_e),{key:0,class:"flex-1",modelValue:n(a),"onUpdate:modelValue":u[0]||(u[0]=s=>T(a)?a.value=s:null),options:n(t),"aria-labelledby":"basic"},null,8,["modelValue","options"])):S("",!0),n(d)?S("",!0):(f(),b("div",Ne,[re(k(n(W),{onClick:n(x),icon:"pi pi-sync",label:"Sync",text:""},null,8,["onClick"]),[[N,"Upload Offline Cases",void 0,{top:!0}]])])),c("div",qe,[c("span",Ee,P(n(d)?"Online":"Offline"),1),k(n(G),{modelValue:n(d),"onUpdate:modelValue":u[1]||(u[1]=s=>T(d)?d.value=s:null),inputClass:"success",class:"input-switch"},null,8,["modelValue"])])])]),c("div",Te,[k(n(ve),{ref_key:"dt",ref:o,dataKey:"id",lazy:!0,paginator:!0,value:n(v),onPage:u[3]||(u[3]=s=>n(O)(s)),onSort:u[4]||(u[4]=s=>n($)(s)),sortMode:"multiple",multiSortMeta:n(r).multiSortMeta,totalRecords:n(g),rows:5,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:n(r).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{first} to {last} of total {totalRecords}",loading:n(L),responsiveLayout:"scroll",selectionMode:"single"},{header:w(()=>[c("div",Ue,[M.$can("create","MyCase")?(f(),B(j,{key:0,to:{name:"newCase",query:{online:n(d)}}},{default:w(()=>[k(n(W),{class:"mb-2 flex-2",label:"New",icon:"pi pi-plus",severity:"primary"})]),_:1},8,["to"])):S("",!0),c("span",Ae,[Ke,k(n(we),{modelValue:n(p),"onUpdate:modelValue":u[2]||(u[2]=s=>T(p)?p.value=s:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),k(n(he),{ref_key:"columnMenu",ref:I,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:w(()=>[(f(!0),b(U,null,A(n(R),s=>(f(),b("div",{key:s.field,class:"field-checkbox"},[k(n(ge),{inputId:s.field,name:"column",modelValue:s.selected,binary:!0,onChange:l=>s.selected=!s.selected,disabled:s.frozen},null,8,["inputId","modelValue","onChange","disabled"]),c("label",{for:s.field},P(s.header),9,We)]))),128))]),_:1},512)])]),empty:w(()=>[K(" No records found. ")]),loading:w(()=>[K(" Loading records data. Please wait. ")]),default:w(()=>[(f(!0),b(U,null,A(n(C),s=>(f(),B(n(be),{key:s.field,field:s.field,header:s.header,sortable:s.sortable,frozen:!n(F)&&s.frozen,alignFrozen:s.alignFrozen,style:ce(s.style)},{body:w(({data:l})=>[M.$can("create","MyCase")?(f(),B(j,{key:0,class:"text-black-alpha-90",to:n(d)?{name:"editCase",params:{id:l.id}}:{name:"editCaseOffline",params:{id:l.id}}},{default:w(()=>[s.field==="am_number"?(f(),b("div",He,P(l.am_number),1)):S("",!0),s.field==="length_of_stay"?(f(),b("div",Ye,P(n(_)(n(d)?l.medical_examination&&l.medical_examination.date_of_admission!==void 0?l.medical_examination.date_of_admission:"":l.data.date_of_admission,new Date().toISOString().split("T")[0]))+" Days ",1)):S("",!0),s.field==="patient_name"?(f(),b("div",Ge,P(n(d)?l.biographic_info&&l.biographic_info.patient_name!==void 0?l.biographic_info.patient_name:"":l.patient_name),1)):S("",!0),s.field==="village"?(f(),b("div",Je,P(n(d)?l.biographic_info&&l.biographic_info.village!==void 0?l.biographic_info.village:"":l.village),1)):S("",!0)]),_:2},1032,["to"])):S("",!0)]),_:2},1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),k(n(Se),null,{message:w(s=>[c("div",Qe,[c("i",{class:ue([s.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),c("div",Xe,P(s.message.message),1)])]),_:1})],64)}}},ft=ie(Ze,[["__scopeId","data-v-c54ef3da"]]);export{ft as default};
