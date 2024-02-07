import{h as S,w as F,ap as z,r as P,q as n,a8 as s,o as d,O as p,P as i,$ as u,k as B,a5 as c,W as f,z as e,m as _,l as y,p as r,X as D,a4 as I,as as N,V as W}from"./vue-5a2488fc.js";import{e as $}from"./index-dcab27dc.js";import{F as m}from"./index-404d6f90.js";import{b as T}from"./validate-d0780182.js";const q={class:"title"},M=S({__name:"popupForm",setup(E){const g=F(),o=z("baTable"),{t:l}=$(),V=P({cate_name:[T({name:"required",title:l("game.category.cate_name")})]});return(K,a)=>{const v=n("el-form"),w=n("el-scrollbar"),b=n("el-button"),h=n("el-dialog"),C=s("drag"),k=s("zoom"),x=s("loading"),U=s("blur");return d(),p(h,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:i(()=>[u((d(),B("div",q,[c(f(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[C,[".ba-operate-dialog",".el-dialog__header"]],[k,".ba-operate-dialog"]])]),footer:i(()=>[_("div",{style:y("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[r(b,{onClick:a[9]||(a[9]=t=>e(o).toggleForm())},{default:i(()=>[c(f(e(l)("Cancel")),1)]),_:1}),u((d(),p(b,{loading:e(o).form.submitLoading,onClick:a[10]||(a[10]=t=>e(o).onSubmit(g.value)),type:"primary"},{default:i(()=>[c(f(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[U]])],4)]),default:i(()=>[u((d(),p(w,{class:"ba-table-form-scrollbar"},{default:i(()=>[_("div",{class:D(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:y("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?W("",!0):(d(),p(v,{key:0,ref_key:"formRef",ref:g,onSubmit:a[7]||(a[7]=I(()=>{},["prevent"])),onKeyup:a[8]||(a[8]=N(t=>e(o).onSubmit(g.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:V},{default:i(()=>[r(m,{label:e(l)("game.category.cate_name"),type:"string",modelValue:e(o).form.items.cate_name,"onUpdate:modelValue":a[0]||(a[0]=t=>e(o).form.items.cate_name=t),prop:"cate_name",placeholder:e(l)("Please input field",{field:e(l)("game.category.cate_name")})},null,8,["label","modelValue","placeholder"]),r(m,{label:e(l)("game.category.weigh"),type:"number",prop:"weigh","input-attr":{step:1},modelValue:e(o).form.items.weigh,"onUpdate:modelValue":a[1]||(a[1]=t=>e(o).form.items.weigh=t),placeholder:e(l)("Please input field",{field:e(l)("game.category.weigh")})},null,8,["label","modelValue","placeholder"]),r(m,{label:e(l)("game.category.code"),type:"string",modelValue:e(o).form.items.code,"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).form.items.code=t),prop:"code",placeholder:e(l)("Please input field",{field:e(l)("game.category.code")})},null,8,["label","modelValue","placeholder"]),r(m,{label:e(l)("game.category.is_login"),type:"switch",modelValue:e(o).form.items.is_login,"onUpdate:modelValue":a[3]||(a[3]=t=>e(o).form.items.is_login=t),prop:"is_login",data:{content:{0:e(l)("game.category.is_login 0"),1:e(l)("game.category.is_login 1")}}},null,8,["label","modelValue","data"]),r(m,{label:e(l)("game.category.image"),type:"image",modelValue:e(o).form.items.image,"onUpdate:modelValue":a[4]||(a[4]=t=>e(o).form.items.image=t),prop:"image","input-attr":{returnFullUrl:!0}},null,8,["label","modelValue"]),r(m,{label:e(l)("game.category.country_code"),type:"string",modelValue:e(o).form.items.country_code,"onUpdate:modelValue":a[5]||(a[5]=t=>e(o).form.items.country_code=t),prop:"country_code",placeholder:e(l)("Please input field",{field:e(l)("game.category.country_code")})},null,8,["label","modelValue","placeholder"]),r(m,{label:e(l)("game.category.is_id"),type:"switch",modelValue:e(o).form.items.is_id,"onUpdate:modelValue":a[6]||(a[6]=t=>e(o).form.items.is_id=t),prop:"is_id",data:{content:{0:e(l)("game.category.is_id 0"),1:e(l)("game.category.is_id 1")}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[x,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};
