import{u as p}from"./globalStore-86620f0f.js";import{f,g as a,h as d,o,c as m,a as v,i as h,j as _,u as w,k as g,s as k}from"./index-bd0ec6da.js";const b={class:"grid"},I={__name:"Index",setup(y){const l=p();f(()=>{n(),c(),i()});const n=async()=>{await l.fetchAllEnums()},c=async()=>{await l.fetchAllTownship()},i=async()=>{await l.fetchAllWards()},e=a(null),s=a(!1);window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),e.value=t,s.value=!0});const r=()=>{e.value&&(e.value.prompt(),e.value.userChoice.then(t=>{t.outcome==="accepted"?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),e.value=null,s.value=!1}))};return(t,E)=>{const u=d("tooltip");return o(),m("div",null,[v("div",b,[s.value?h((o(),_(w(k),{key:0,onClick:r,icon:"pi pi-sync",label:"Install",text:""},null,512)),[[u,"Install Offline",void 0,{top:!0}]]):g("",!0)])])}}};export{I as default};
