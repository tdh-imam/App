if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Access-cb477cf2.js",revision:null},{url:"assets/calendar.esm-64ac1493.js",revision:null},{url:"assets/confirmdialog.esm-aed65223.js",revision:null},{url:"assets/dataview.esm-33dc52a1.js",revision:null},{url:"assets/device-342b9969.js",revision:null},{url:"assets/dialog.esm-515ddfca.js",revision:null},{url:"assets/dropdown.esm-df9c1159.js",revision:null},{url:"assets/Edit-083bd045.css",revision:null},{url:"assets/Edit-11cad8eb.js",revision:null},{url:"assets/Edit-50bd96fd.js",revision:null},{url:"assets/Edit-5546927a.css",revision:null},{url:"assets/Edit-867d7b15.js",revision:null},{url:"assets/Edit-cb6990b2.css",revision:null},{url:"assets/EditOffline-7e26b062.css",revision:null},{url:"assets/EditOffline-82efea23.js",revision:null},{url:"assets/Error-2b21bae4.js",revision:null},{url:"assets/focustrap.esm-682312e5.js",revision:null},{url:"assets/globalStore-426c4d14.js",revision:null},{url:"assets/index-43104978.js",revision:null},{url:"assets/index-6e211574.css",revision:null},{url:"assets/Index-8a207088.js",revision:null},{url:"assets/index-baccd9ce.js",revision:null},{url:"assets/index.esm-5dbdb85d.js",revision:null},{url:"assets/index.esm-8b65236d.js",revision:null},{url:"assets/inputtext.esm-0d6963f5.js",revision:null},{url:"assets/List-15bf2adb.js",revision:null},{url:"assets/List-26ebcf21.js",revision:null},{url:"assets/List-39acaa2e.css",revision:null},{url:"assets/List-40f695c5.css",revision:null},{url:"assets/List-5c00e6f8.js",revision:null},{url:"assets/List-6f316f98.js",revision:null},{url:"assets/List-c642f229.css",revision:null},{url:"assets/List-ea88e635.css",revision:null},{url:"assets/Loading-06509e4c.css",revision:null},{url:"assets/Loading-8e2278db.js",revision:null},{url:"assets/Login-33a81ef7.css",revision:null},{url:"assets/Login-749dea5b.js",revision:null},{url:"assets/logo-f7699efc.js",revision:null},{url:"assets/New-4b7353cf.js",revision:null},{url:"assets/New-94ceac1b.css",revision:null},{url:"assets/New-db2d093e.css",revision:null},{url:"assets/New-e4d74e01.js",revision:null},{url:"assets/NotFound-7b145992.js",revision:null},{url:"assets/paginator.esm-83536605.js",revision:null},{url:"assets/password.esm-01c24aea.js",revision:null},{url:"assets/placeholder-6caedaa9.js",revision:null},{url:"assets/Profile-34a41126.css",revision:null},{url:"assets/Profile-87d42bb7.js",revision:null},{url:"assets/radiobutton.esm-6c3d5afa.js",revision:null},{url:"assets/selectbutton.esm-ffc48c35.js",revision:null},{url:"assets/serverValidation-35937a0f.js",revision:null},{url:"assets/sidebar.esm-3d0452b1.js",revision:null},{url:"assets/store-1bf7a53b.js",revision:null},{url:"assets/store-2edd193f.js",revision:null},{url:"assets/store-99844f00.js",revision:null},{url:"assets/store-c6487b60.js",revision:null},{url:"assets/tabpanel.esm-e516f6b5.js",revision:null},{url:"assets/View-48c8c5b0.css",revision:null},{url:"assets/View-8aafc104.js",revision:null},{url:"index.html",revision:"cae5679380cf012abcc570d94ce802d9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"themes/lara-dark-indigo/theme-teal.css",revision:"e63fe6dbea5512eefadd504fd483ebed"},{url:"themes/lara-dark-indigo/theme.css",revision:"a809701a0ad391e8e9cf6a81f78c5cc0"},{url:"themes/lara-light-indigo/theme-teal.css",revision:"9533ab3a04b73ccd9bfb1f265fd8b64d"},{url:"themes/lara-light-indigo/theme.css",revision:"22a098e1fda1071a35b9c29a47e3f83d"},{url:"layout/images/logo192.png",revision:"ce538dea2b62cc55fa816c945a9a4a1c"},{url:"layout/images/logo256.png",revision:"f7e4cd69304693db8e41bae436a5b57d"},{url:"layout/images/logo512.png",revision:"e2bea5c150d911b71e6100ff747006a2"},{url:"manifest.webmanifest",revision:"daf10b880e0bf9d2d3517b897f12b4bd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
