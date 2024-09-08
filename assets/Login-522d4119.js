import{aj as b,E as x,z as w,L as h,S as y,_ as k,o as l,c as d,a as t,V,n as m,G as e,b as p,F as L,p as S,t as f,i as _,g as I,k as U,P as B,Q as P}from"./index-efa29b2d.js";import{s as j}from"./password.esm-3d00a8b4.js";import{s as q}from"./inputtext.esm-89bdd4d0.js";import{L as N}from"./Loading-ac92c521.js";import{u as z,r as g}from"./index-0e5f5610.js";const C=()=>{const o=b(),s=x(),u=w(!1),a=w(!1);h(()=>{o.$dispose()});const i=y({username:"",password:""}),r=z({username:{required:g},password:{required:g}},i),n=v=>{u.value=!0,v&&(a.value||c())},c=async()=>{a.value=!0,await o.login({username:i.username.trim(),password:i.password.trim()}),o.getLoginResponse?(a.value=!1,s.replace({name:"dashboard"})):a.value=!1};return{state:i,v$:r,handleSubmit:n,submitted:u,isLoading:a}};const E=o=>(B("data-v-30bc9620"),o=o(),P(),o),F={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},R={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},A={class:"col-12 xl:col-6"},D={class:"h-full w-full m-0 py-7 px-4",style:{"border-radius":"20px","background-color":"#ffffff"}},G=E(()=>t("div",{class:"text-center mb-5"},[t("div",{class:"text-900 text-3xl font-medium mb-3"},"Welcome!"),t("span",{class:"text-600 font-medium"},"Sign in to continue")],-1)),M={class:"w-full md:w-10 mx-auto"},Q={key:0},W={class:"p-error"},H={key:1,class:"p-error"},J={key:2,class:"p-error"},K={__name:"Login",setup(o){const{v$:s,handleSubmit:u,submitted:a,isLoading:i}=C();return($,r)=>(l(),d("div",F,[t("div",R,[t("div",A,[t("div",D,[G,t("form",{onSubmit:r[2]||(r[2]=V(n=>e(u)(!e(s).$invalid),["prevent"]))},[t("div",M,[t("label",{for:"username",class:m(["block text-900 text-xl font-medium mb-2",{"p-error":e(s).username.$invalid&&e(a)}])},"Username",2),p(e(q),{id:"username",modelValue:e(s).username.$model,"onUpdate:modelValue":r[0]||(r[0]=n=>e(s).username.$model=n),class:m([{"p-invalid":e(s).username.$invalid&&e(a)},"w-full"]),type:"text",placeholder:"Username",style:{padding:"1rem"}},null,8,["modelValue","class"]),e(s).username.$error&&e(a)?(l(),d("span",Q,[(l(!0),d(L,null,S(e(s).username.$errors,(n,c)=>(l(),d("span",{id:"email-error",key:c},[t("small",W,f(n.$message),1)]))),128))])):e(s).username.$invalid&&e(a)||e(s).username.$pending.$response?(l(),d("small",H,f(e(s).username.required.$message.replace("Value","Identifier")),1)):_("",!0),t("label",{for:"password",class:m(["block text-900 font-medium text-xl mb-2 mt-3",{"p-error":e(s).password.$invalid&&e(a)}])},"Password",2),p(e(j),{id:"password",modelValue:e(s).password.$model,"onUpdate:modelValue":r[1]||(r[1]=n=>e(s).password.$model=n),placeholder:"Password",class:m(["w-full",{"p-invalid":e(s).password.$invalid&&e(a)}]),"input-class":"w-full","input-style":"padding:1rem",feedback:!1},null,8,["modelValue","class"]),e(s).password.$invalid&&e(a)||e(s).password.$pending.$response?(l(),d("small",J,f(e(s).password.required.$message.replace("Value","Password")),1)):_("",!0),p(e(U),{type:"submit",label:"Sign In",class:"w-full p-3 text-xl mt-5"})])],32)])])]),e(i)?(l(),I(N,{key:0})):_("",!0)]))}},ee=k(K,[["__scopeId","data-v-30bc9620"]]);export{ee as default};
