import{o as l,c as r,m as p,j as u}from"./index-efa29b2d.js";var i={root:function(e){var s=e.instance,a=e.props;return["p-inputtext p-component",{"p-filled":s.filled,"p-inputtext-sm":a.size==="small","p-inputtext-lg":a.size==="large"}]}},o={name:"BaseInputText",extends:u,props:{modelValue:null,size:{type:String,default:null}},css:{classes:i},provide:function(){return{$parentInstance:this}}},d={name:"InputText",extends:o,emits:["update:modelValue"],methods:{onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},m=["value"];function c(t,e,s,a,f,n){return l(),r("input",p({class:t.cx("root"),value:t.modelValue,onInput:e[0]||(e[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},t.ptm("root",n.ptmParams),{"data-pc-name":"inputtext"}),null,16,m)}d.render=c;export{d as s};
