import{i as m,B as f}from"./index-a4c9ce56.js";import{h as s,j as b,p as t,q as i}from"./vue-5a2488fc.js";import{_ as y}from"./index-dcab27dc.js";const _=s({name:"formItem",props:{label:{type:String},type:{type:String,required:!0,validator:e=>m.includes(e)},modelValue:{required:!0},inputAttr:{type:Object,default:()=>{}},attr:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},prop:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:r}){const n=a=>{r("update:modelValue",a)},l=b(()=>e.attr&&e.attr.blockHelp?e.attr.blockHelp:""),d=()=>{let a=t(f,{type:e.type,attr:{placeholder:e.placeholder,...e.inputAttr},data:e.data,modelValue:e.modelValue,"onUpdate:modelValue":n});return l.value?[a,t("div",{class:"block-help"},l.value)]:a},o=["string","password","number","textarea","datetime","year","date","time","select","selects","remoteSelect","remoteSelects","city","icon","color"],u=["radio","checkbox","switch","array","image","images","file","files","editor"];if(o.includes(e.type))return()=>t(i("el-form-item"),{prop:e.prop,...e.attr,label:e.label},{default:d});if(u.includes(e.type)){let a=e.data&&e.data.title?e.data.title:e.label;const c=()=>[t("div",{class:"ba-form-item-label"},[t("div",null,a),t("div",{class:"ba-form-item-label-tip"},e.data&&e.data.tip?e.data.tip:"")])];return()=>t(i("el-form-item"),{class:"ba-input-item-"+e.type,prop:e.prop,...e.attr,label:e.label},{label:c,default:d})}}});const g=y(_,[["__scopeId","data-v-10a6f784"]]);export{g as F};
