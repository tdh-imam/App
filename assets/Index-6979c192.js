import{f as n,g as o,o as s,c,a as r,h as i,u,i as p,s as d}from"./index-caa2c3ca.js";const f={class:"grid"},h={__name:"Index",setup(m){const t=n(!1);let e=null;o(()=>{window.addEventListener("beforeinstallprompt",l=>{l.preventDefault(),t.value=!0,e=l})});const a=()=>{e&&(e.prompt(),e.userChoice.then(l=>{l.outcome==="accepted"?console.log("PWA installed"):console.log("PWA installation declined"),t.value=!1,e=null}))};return(l,_)=>(s(),c("div",null,[r("div",f,[t.value?(s(),i(u(d),{key:0,onClick:a,class:"mb-2 flex-2",label:"Install",icon:"pi pi-plus",severity:"primary"})):p("",!0)])]))}};export{h as default};
