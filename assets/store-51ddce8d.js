import{a4 as t,a5 as r}from"./index-db823c43.js";const n={cases:"/cases",case_report:"/case-report"},a={getAll:async e=>{try{return(await t.get(n.case_report,{params:e})).data}catch{return null}},getOne:async e=>{try{return(await t.get(`${n.cases}/${e.id}`)).data}catch{return null}}},c=r({id:"useCaseStore",state:()=>({listResponse:null,oneResponse:null}),getters:{getAllResponse(e){return e.listResponse},getOneResponse(e){return e.oneResponse}},actions:{async fetchAll(e){const s=await a.getAll(e);this.listResponse=s},async fetchOne(e){const s=await a.getOne(e);this.oneResponse=s}}});export{c as u};
