if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Access-61c340a5.js",revision:null},{url:"assets/calendar.esm-c14c651e.js",revision:null},{url:"assets/confirmdialog.esm-1e676f76.js",revision:null},{url:"assets/dataview.esm-b851026a.js",revision:null},{url:"assets/device-66c051d5.js",revision:null},{url:"assets/dialog.esm-0d200068.js",revision:null},{url:"assets/dropdown.esm-73a4fc35.js",revision:null},{url:"assets/Edit-083bd045.css",revision:null},{url:"assets/Edit-475ae0ef.js",revision:null},{url:"assets/Edit-5546927a.css",revision:null},{url:"assets/Edit-98e444c8.js",revision:null},{url:"assets/Edit-9b0024e1.js",revision:null},{url:"assets/Edit-cb6990b2.css",revision:null},{url:"assets/EditOffline-7e26b062.css",revision:null},{url:"assets/EditOffline-c7d9763e.js",revision:null},{url:"assets/Error-3ccbd037.js",revision:null},{url:"assets/focustrap.esm-ab8cb822.js",revision:null},{url:"assets/globalStore-86620f0f.js",revision:null},{url:"assets/index-16b788c6.js",revision:null},{url:"assets/Index-4d9bd6dc.js",revision:null},{url:"assets/index-6e211574.css",revision:null},{url:"assets/index-bd0ec6da.js",revision:null},{url:"assets/index.esm-98116968.js",revision:null},{url:"assets/index.esm-fd88f9de.js",revision:null},{url:"assets/inputtext.esm-8875acc8.js",revision:null},{url:"assets/List-183a0dd9.js",revision:null},{url:"assets/List-39acaa2e.css",revision:null},{url:"assets/List-40f695c5.css",revision:null},{url:"assets/List-6764e477.js",revision:null},{url:"assets/List-8973b87b.js",revision:null},{url:"assets/List-c642f229.css",revision:null},{url:"assets/List-e759b4e0.js",revision:null},{url:"assets/List-ea88e635.css",revision:null},{url:"assets/Loading-06509e4c.css",revision:null},{url:"assets/Loading-e632f6fd.js",revision:null},{url:"assets/Login-33a81ef7.css",revision:null},{url:"assets/Login-3f3a311b.js",revision:null},{url:"assets/logo-f7699efc.js",revision:null},{url:"assets/New-6306add1.js",revision:null},{url:"assets/New-94ceac1b.css",revision:null},{url:"assets/New-c70056bd.js",revision:null},{url:"assets/New-db2d093e.css",revision:null},{url:"assets/NotFound-2a7614c1.js",revision:null},{url:"assets/paginator.esm-9987b5ab.js",revision:null},{url:"assets/password.esm-a894b697.js",revision:null},{url:"assets/placeholder-d775c172.js",revision:null},{url:"assets/Profile-13c306f0.js",revision:null},{url:"assets/Profile-34a41126.css",revision:null},{url:"assets/radiobutton.esm-9e63defd.js",revision:null},{url:"assets/selectbutton.esm-b7c9e594.js",revision:null},{url:"assets/serverValidation-35937a0f.js",revision:null},{url:"assets/sidebar.esm-6f19fe91.js",revision:null},{url:"assets/store-2680b74c.js",revision:null},{url:"assets/store-80aa0fc9.js",revision:null},{url:"assets/store-a06efbce.js",revision:null},{url:"assets/store-f78068e4.js",revision:null},{url:"assets/tabpanel.esm-5161b9d3.js",revision:null},{url:"assets/View-48c8c5b0.css",revision:null},{url:"assets/View-8948d717.js",revision:null},{url:"index.html",revision:"8fdd844025baff7057f85de51a467425"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"themes/lara-dark-indigo/theme-teal.css",revision:"e63fe6dbea5512eefadd504fd483ebed"},{url:"themes/lara-dark-indigo/theme.css",revision:"a809701a0ad391e8e9cf6a81f78c5cc0"},{url:"themes/lara-light-indigo/theme-teal.css",revision:"9533ab3a04b73ccd9bfb1f265fd8b64d"},{url:"themes/lara-light-indigo/theme.css",revision:"22a098e1fda1071a35b9c29a47e3f83d"},{url:"layout/images/logo192.png",revision:"ce538dea2b62cc55fa816c945a9a4a1c"},{url:"layout/images/logo256.png",revision:"f7e4cd69304693db8e41bae436a5b57d"},{url:"layout/images/logo512.png",revision:"e2bea5c150d911b71e6100ff747006a2"},{url:"manifest.webmanifest",revision:"daf10b880e0bf9d2d3517b897f12b4bd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
