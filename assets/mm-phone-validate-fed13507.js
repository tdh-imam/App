const i={"၀":0,"၁":1,"၂":2,"၃":3,"၄":4,"၅":5,"၆":6,"၇":7,"၈":8,"၉":9},e=t=>{if(!t)throw Error("Please include phoneNumber parameter.");if(t=t.trim(),t.length===0)throw Error("Phone number is empty.");t=t.replace(/[- )(]/g,"");var r=/^\+?950?9\d+$/;if(r.test(t)){var a=/^\+?95950?9\d{7,9}$/;a.test(t)&&(t=t.replace(/9595/,"95"));var s=/^\+?9509\d{7,9}$/;s.test(t)&&(t=t.replace(/9509/,"959"))}return t},n=t=>{var r=e(t),a=/^((09-)|(\+959)|(09\s)|(959)|(09\.))/;return a.test(r)?r.replace(a,"09"):/[၀-၉]/.test(r)?r.split("").map(function(s){return i[s]}).join("").replace(a,"09"):r},c=t=>{t=n(t);var r=/^(09|\+?950?9|\+?95950?9)\d{7,9}$/;return r.test(t)};export{c as i};