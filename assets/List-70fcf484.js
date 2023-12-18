import{K as G,o as p,c as S,a as i,J as B,a3 as Q,g as f,C as X,H as Z,l as ee,f as te,m as se,n as ae,p as N,E as ne,_ as oe,r as re,h as le,u as a,j as D,q,k as C,i as ie,b as _,t as x,w as g,F as E,v as U,e as A,x as ue,s as T,y as ce,A as de,B as pe}from"./index-db823c43.js";import{m as fe,u as me,a as ye,s as he,b as be,c as ve,d as ge}from"./device-b479d7f5.js";import{s as we}from"./selectbutton.esm-0f222073.js";import{s as _e}from"./inputtext.esm-e34ea9b3.js";import{s as Se}from"./confirmdialog.esm-2927d2f2.js";import{u as ke}from"./store-e47b5b32.js";import"./paginator.esm-772e6e59.js";import"./dropdown.esm-5342fc5e.js";import"./focustrap.esm-c79ead7c.js";import"./index.esm-0a254abb.js";import"./dialog.esm-8dd0afa5.js";var Pe=`
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
`,Ce={root:{position:"relative"}},Oe={root:function(t){var n=t.instance,r=t.props;return["p-inputswitch p-component",{"p-inputswitch-checked":n.checked,"p-disabled":r.disabled,"p-focus":n.focused}]},slider:"p-inputswitch-slider"},Ve=G(Pe,{name:"inputswitch",manual:!0}),xe=Ve.load,$e={name:"BaseInputSwitch",extends:Q,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},css:{classes:Oe,inlineStyles:Ce,loadStyle:xe},provide:function(){return{$parentInstance:this}}},J={name:"InputSwitch",extends:$e,emits:["click","update:modelValue","change","input","focus","blur"],data:function(){return{focused:!1}},methods:{onClick:function(t){if(!this.disabled){var n=this.checked?this.falseValue:this.trueValue;this.$emit("click",t),this.$emit("update:modelValue",n),this.$emit("change",t),this.$emit("input",n),this.$refs.input.focus()}},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue===this.trueValue}}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(e)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K(Object(n),!0).forEach(function(r){je(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function je(e,t,n){return t=Ie(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ie(e){var t=Le(e,"string");return $(t)==="symbol"?t:String(t)}function Le(e,t){if($(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if($(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Me=["id","checked","disabled","aria-checked","aria-labelledby","aria-label"];function ze(e,t,n,r,l,m){return p(),S("div",B({class:e.cx("root"),style:e.sx("root"),onClick:t[2]||(t[2]=function(h){return m.onClick(h)})},e.ptm("root"),{"data-pc-name":"inputswitch"}),[i("div",B({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[i("input",B({ref:"input",id:e.inputId,type:"checkbox",role:"switch",class:e.inputClass,style:e.inputStyle,checked:m.checked,disabled:e.disabled,"aria-checked":m.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=function(h){return m.onFocus(h)}),onBlur:t[1]||(t[1]=function(h){return m.onBlur(h)})},H(H({},e.inputProps),e.ptm("hiddenInput"))),null,16,Me)],16),i("span",B({class:e.cx("slider")},e.ptm("slider")),null,16)],16)}J.render=ze;const Be=()=>{const e=f(!0),t=ke(),n=X(),r=Z(),l=f(!0),m=f(),h=ee(),j=f(),u=f({}),k=f(),I=f(0),O=f(""),R=f(["Edited","Discharged"]),L=f([{field:"id",header:"ID",selected:!1,style:"min-width: 5rem",frozen:!1},{field:"am_number",header:"AM Number",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"patient_name",header:"Patient",sortable:!0,selected:!0,style:"min-width: 5rem"}]),c=f(null),V=()=>{const o="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png";return new Promise(v=>{var P=new Image;P.onload=function(){v(!0)},P.onerror=function(){v(!1)};const W=o+"?t="+new Date().getTime();P.timeout=5e3,P.src=W})};te(async()=>{await V().then(o=>{l.value=o}),l.value=r.query.online!==void 0?JSON.parse(r.query.online):l.value,w(),b()}),se(()=>{t.$dispose()});const b=async()=>{e.value=!0,await t.fetchAll({page:u.value.page+=1,per_page:u.value.rows,order:fe(u.value.multiSortMeta),search:O.value,status:c.value},l.value);const o=t.getAllResponse;o&&(k.value=o.data,I.value=o.meta.total),e.value=!1},M=async()=>{await V().then(o=>{o?h.require({message:"Are you sure you want to upload all Offline Cases?",header:"Confirmation",icon:"pi pi-question text-primary-900",rejectClass:"p-button-secondary p-button-text",acceptClass:"p-button-primary p-button-text",accept:async()=>{e.value=!0;let v=0;k.value.forEach(async P=>{await d(P),v++,v==k.value.length&&(z("Switching to online mode ...","info"),k.value=null,l.value=!0,w(),b())})},reject:()=>{}}):z("You are offline, cannot sync!","error")})},d=async o=>{try{await t.add(o.data,!0),t.getAddResponse&&(await t.deleteOfflineCase({id:parseInt(o.id)}),z("Case - Patient: "+o.patient_name+" Uploaded","success"))}catch{e.value=!1}},w=()=>{u.value={page:0,rows:j.value.rows,multiSortMeta:[],first:0}},F=o=>{u.value=o,u.value.multiSortMeta=[],b()},s=o=>{u.value=o,u.value.page=0,u.value.first=0,b()},y=o=>{m.value.toggle(o)},Y=ae(()=>L.value.filter(o=>o.selected));N([O],me(()=>{w(),b()},500)),N([c],()=>{w(),b()}),N([l],async()=>{l.value==!0&&await V().then(o=>{l.value=o,o==!1&&z("You are offline, cannot change to online mode!","error")}),console.log(l.value),n.push({path:r.path,query:{...r.query,online:l.value}}),w(),b()});const z=(o,v="error")=>{ne.emit("show-toast",{severity:v,summary:"",detail:o,life:3e3})};return{dt:j,lazyParams:u,totalRecords:I,records:k,isLoading:e,search:O,statusOptions:R,selectedStatus:c,onPage:F,onSort:s,toggleColumnMenu:y,selectedColumns:Y,columns:L,columnMenu:m,isOnline:l,syncOfflineCase:M}};const De=e=>(de("data-v-1fdf397a"),e=e(),pe(),e),Re={class:"card mb-4"},Fe={class:"flex justify-content-left"},Ne={key:1,class:"flex-1"},qe={class:"input-switch-container flex-2"},Ee={class:"offline-label text-lg"},Ue={class:"card"},Ae={class:"flex flex-wrap flex-row-reverse align-items-center"},Te={class:"p-input-icon-left mr-2 mb-2 flex-1"},Ke=De(()=>i("i",{class:"pi pi-search"},null,-1)),He=["for"],Je={key:0},Ye={key:1},We={class:"text-center w-full"},Ge={class:"mt-2"},Qe={__name:"List",setup(e){const{statusOptions:t,selectedStatus:n,dt:r,lazyParams:l,totalRecords:m,records:h,isLoading:j,search:u,onPage:k,onSort:I,selectedColumns:O,columns:R,columnMenu:L,isOnline:c,syncOfflineCase:V}=Be(),{isMobile:b}=ye();return(M,d)=>{const w=re("router-link"),F=le("tooltip");return p(),S(E,null,[i("div",null,[i("div",Re,[i("div",Fe,[a(c)?(p(),D(a(we),{key:0,class:"flex-1",modelValue:a(n),"onUpdate:modelValue":d[0]||(d[0]=s=>q(n)?n.value=s:null),options:a(t),"aria-labelledby":"basic"},null,8,["modelValue","options"])):C("",!0),a(c)?C("",!0):(p(),S("div",Ne,[ie(_(a(T),{onClick:a(V),icon:"pi pi-sync",label:"Sync",text:""},null,8,["onClick"]),[[F,"Upload Offline Cases",void 0,{top:!0}]])])),i("div",qe,[i("span",Ee,x(a(c)?"Online":"Offline"),1),_(a(J),{modelValue:a(c),"onUpdate:modelValue":d[1]||(d[1]=s=>q(c)?c.value=s:null),inputClass:"success",class:"input-switch"},null,8,["modelValue"])])])]),i("div",Ue,[_(a(ge),{ref_key:"dt",ref:r,dataKey:"id",lazy:!0,paginator:!0,value:a(h),onPage:d[3]||(d[3]=s=>a(k)(s)),onSort:d[4]||(d[4]=s=>a(I)(s)),sortMode:"multiple",multiSortMeta:a(l).multiSortMeta,totalRecords:a(m),rows:5,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:a(l).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{first} to {last} of total {totalRecords}",loading:a(j),responsiveLayout:"scroll",selectionMode:"single"},{header:g(()=>[i("div",Ae,[M.$can("create","MyCase")?(p(),D(w,{key:0,to:{name:"newCase",query:{online:a(c)}}},{default:g(()=>[_(a(T),{class:"mb-2 flex-2",label:"New",icon:"pi pi-plus",severity:"primary"})]),_:1},8,["to"])):C("",!0),i("span",Te,[Ke,_(a(_e),{modelValue:a(u),"onUpdate:modelValue":d[2]||(d[2]=s=>q(u)?u.value=s:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),_(a(he),{ref_key:"columnMenu",ref:L,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:g(()=>[(p(!0),S(E,null,U(a(R),s=>(p(),S("div",{key:s.field,class:"field-checkbox"},[_(a(be),{inputId:s.field,name:"column",modelValue:s.selected,binary:!0,onChange:y=>s.selected=!s.selected,disabled:s.frozen},null,8,["inputId","modelValue","onChange","disabled"]),i("label",{for:s.field},x(s.header),9,He)]))),128))]),_:1},512)])]),empty:g(()=>[A(" No records found. ")]),loading:g(()=>[A(" Loading records data. Please wait. ")]),default:g(()=>[(p(!0),S(E,null,U(a(O),s=>(p(),D(a(ve),{key:s.field,field:s.field,header:s.header,sortable:s.sortable,frozen:!a(b)&&s.frozen,alignFrozen:s.alignFrozen,style:ce(s.style)},{body:g(({data:y})=>[M.$can("create","MyCase")?(p(),D(w,{key:0,class:"text-black-alpha-90",to:a(c)?{name:"editCase",params:{id:y.id}}:{name:"editCaseOffline",params:{id:y.id}}},{default:g(()=>[s.field==="am_number"?(p(),S("div",Je,x(y.am_number),1)):C("",!0),s.field==="patient_name"?(p(),S("div",Ye,x(a(c)?y.biographic_info&&y.biographic_info.patient_name!==void 0?y.biographic_info.patient_name:"":y.patient_name),1)):C("",!0)]),_:2},1032,["to"])):C("",!0)]),_:2},1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),_(a(Se),null,{message:g(s=>[i("div",We,[i("i",{class:ue([s.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),i("div",Ge,x(s.message.message),1)])]),_:1})],64)}}},ut=oe(Qe,[["__scopeId","data-v-1fdf397a"]]);export{ut as default};
