import{a4 as a,a7 as t,a5 as r}from"./index-eaa4be64.js";const o={option_data:"/options"},i=async s=>{try{return(await t.get("/village_wards.json")).data.data.options.filter(n=>n.township===s)}catch(e){return console.error("Error fetching village wards:",e),[]}},l={getAllUser:async s=>{try{return(await a.get(`${o.option_data}/user`,{params:s})).data}catch{return null}},getAllEnums:async s=>{try{return(await t.get("/enums.json",{params:s})).data}catch{return null}},getAllTownships:async s=>{try{return(await t.get("/townships.json",{params:s})).data}catch{return null}},getAllWards:async s=>{try{return await i(s.township)}catch{return null}}},h=r({id:"useGlobalStore",state:()=>({allUserResponse:null,allEnumResponse:null,allTownshipResponse:null,allWardResponse:null}),getters:{getAllUserResponse(s){return s.allUserResponse},getAllEnumResponse(s){return s.allEnumResponse},getAllTownshipResponse(s){return s.allTownshipResponse},getAllWardResponse(s){return s.allWardResponse}},actions:{async fetchAllUser(s){const e=await l.getAllUser(s);this.allUserResponse=e},async fetchAllEnums(s){if(this.allEnumResponse==null){const e=await l.getAllEnums(s);this.allEnumResponse=e}},async fetchAllTownship(s){if(this.allTownshipResponse==null){const e=await l.getAllTownships(s);this.allTownshipResponse=e}},async fetchAllWards(s){const e=await l.getAllWards(s);this.allWardResponse=e}}});export{h as u};