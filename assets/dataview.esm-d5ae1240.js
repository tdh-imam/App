import{s as S}from"./paginator.esm-645f04a1.js";import{O as y,r as b,o as l,c as g,J as u,X as i,k as p,j as w,z as P,w as m,x as v,a as h,F as k,v as T,a3 as R}from"./index-51fee3b8.js";var $={root:function(e){var r=e.props;return["p-dataview p-component",{"p-dataview-list":r.layout==="list","p-dataview-grid":r.layout==="grid"}]},header:"p-dataview-header",paginator:function(e){var r=e.instance;return r.paginatorTop?"p-paginator-top":r.paginatorBottom?"p-paginator-bottom":""},content:"p-dataview-content",grid:"p-grid p-nogutter grid grid-nogutter",column:"p-col col",emptyMessage:"p-dataview-emptymessage",footer:"p-dataview-footer"},O={name:"BaseDataView",extends:R,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},css:{classes:$},provide:function(){return{$parentInstance:this}}};function L(t){return z(t)||B(t)||F(t)||A()}function A(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(t,e){if(t){if(typeof t=="string")return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}}function B(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function z(t){if(Array.isArray(t))return c(t)}function c(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,f=new Array(e);r<e;r++)f[r]=t[r];return f}var D={name:"DataView",extends:O,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(e){this.d_first=e},rows:function(e){this.d_rows=e},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(e,r){return this.dataKey?y.resolveFieldData(e,this.dataKey):r},onPage:function(e){this.d_first=e.first,this.d_rows=e.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",e)},sort:function(){var e=this;if(this.value){var r=L(this.value),f=new Intl.Collator(void 0,{numeric:!0}).compare;return r.sort(function(d,o){var s=y.resolveFieldData(d,e.sortField),a=y.resolveFieldData(o,e.sortField),n=null;return s==null&&a!=null?n=-1:s!=null&&a==null?n=1:s==null&&a==null?n=0:typeof s=="string"&&typeof a=="string"?n=f(s,a):n=s<a?-1:s>a?1:0,e.sortOrder*n}),r}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var e=this.value;if(e&&e.length&&this.sortField&&(e=this.sort()),this.paginator){var r=this.lazy?0:this.d_first;return e.slice(r,r+this.d_rows)}else return e}else return null}},components:{DVPaginator:S}};function N(t,e,r,f,d,o){var s=b("DVPaginator");return l(),g("div",u({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"dataview"}),[t.$slots.header?(l(),g("div",u({key:0,class:t.cx("header")},t.ptm("header")),[i(t.$slots,"header")],16)):p("",!0),o.paginatorTop?(l(),w(s,{key:1,rows:d.d_rows,first:d.d_first,totalRecords:o.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:v(t.cx("paginator")),alwaysShow:t.alwaysShowPaginator,onPage:e[0]||(e[0]=function(a){return o.onPage(a)}),unstyled:t.unstyled,pt:t.ptm("paginator")},P({_:2},[t.$slots.paginatorstart?{name:"start",fn:m(function(){return[i(t.$slots,"paginatorstart")]}),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:m(function(){return[i(t.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):p("",!0),h("div",u({class:t.cx("content")},t.ptm("content")),[h("div",u({class:t.cx("grid")},t.ptm("grid")),[(l(!0),g(k,null,T(o.items,function(a,n){return l(),g(k,{key:o.getKey(a,n)},[t.$slots.list&&t.layout==="list"?i(t.$slots,"list",{key:0,data:a,index:n}):p("",!0),t.$slots.grid&&t.layout==="grid"?i(t.$slots,"grid",{key:1,data:a,index:n}):p("",!0)],64)}),128)),o.empty?(l(),g("div",u({key:0,class:t.cx("column")},t.ptm("column")),[h("div",u({class:t.cx("emptyMessage")},t.ptm("emptyMessage")),[i(t.$slots,"empty")],16)],16)):p("",!0)],16)],16),o.paginatorBottom?(l(),w(s,{key:2,rows:d.d_rows,first:d.d_first,totalRecords:o.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:v(t.cx("paginator")),alwaysShow:t.alwaysShowPaginator,onPage:e[1]||(e[1]=function(a){return o.onPage(a)}),unstyled:t.unstyled,pt:t.ptm("paginator")},P({_:2},[t.$slots.paginatorstart?{name:"start",fn:m(function(){return[i(t.$slots,"paginatorstart")]}),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:m(function(){return[i(t.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):p("",!0),t.$slots.footer?(l(),g("div",u({key:3,class:t.cx("footer")},t.ptm("footer")),[i(t.$slots,"footer")],16)):p("",!0)],16)}D.render=N;export{D as s};
