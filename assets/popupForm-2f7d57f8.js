import{h as I,w as P,ap as z,r as B,q as m,a8 as i,o as d,O as n,P as r,$ as f,k as D,a5 as _,W as c,z as e,m as V,l as y,p as s,X as N,as as W,V as $}from"./vue-5a2488fc.js";import{e as A,_ as E}from"./index-dcab27dc.js";import{F as p}from"./index-404d6f90.js";import"./index-a4c9ce56.js";import"./index-f3986603.js";const T={class:"title"},K=I({__name:"popupForm",setup(L){const u=P(),o=z("baTable"),{t:l}=A(),w=B({});return(R,t)=>{const b=m("el-input"),v=m("el-form-item"),k=m("el-form"),x=m("el-scrollbar"),g=m("el-button"),C=m("el-dialog"),S=i("drag"),U=i("zoom"),F=i("loading"),h=i("blur");return d(),n(C,{class:"ba-operate-dialog","close-on-click-modal":!1,"destroy-on-close":!0,"model-value":["Add","Edit"].includes(e(o).form.operate),onClose:e(o).toggleForm},{header:r(()=>[f((d(),D("div",T,[_(c(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[S,[".ba-operate-dialog",".el-dialog__header"]],[U,".ba-operate-dialog"]])]),footer:r(()=>[V("div",{style:y("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[s(g,{onClick:t[7]||(t[7]=a=>e(o).toggleForm(""))},{default:r(()=>[_(c(e(l)("Cancel")),1)]),_:1}),f((d(),n(g,{loading:e(o).form.submitLoading,onClick:t[8]||(t[8]=a=>e(o).onSubmit(u.value)),type:"primary"},{default:r(()=>[_(c(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[h]])],4)]),default:r(()=>[f((d(),n(x,{class:"ba-table-form-scrollbar"},{default:r(()=>[V("div",{class:N(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:y("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?$("",!0):(d(),n(k,{key:0,ref_key:"formRef",ref:u,onKeyup:t[6]||(t[6]=W(a=>e(o).onSubmit(u.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:w},{default:r(()=>[s(v,{prop:"username",label:e(l)("user.user.User name")},{default:r(()=>[s(b,{modelValue:e(o).form.items.username,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).form.items.username=a),type:"string",placeholder:e(l)("Please input field",{field:e(l)("user.user.User name")+"("+e(l)("user.user.Login account")+")"})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(p,{label:"VIP等级",modelValue:e(o).form.items.vip,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).form.items.vip=a),type:"remoteSelect","input-attr":{multiple:!1,pk:"id",field:"vip_level","remote-url":"/admin/user.VipConfig/index"},placeholder:"点击选择vip等级"},null,8,["modelValue","input-attr"]),s(p,{label:e(l)("user.user.head portrait"),type:"image",modelValue:e(o).form.items.avatar,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).form.items.avatar=a)},null,8,["label","modelValue"]),s(v,{prop:"password",label:e(l)("user.user.password")},{default:r(()=>[s(b,{modelValue:e(o).form.items.password,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).form.items.password=a),type:"password",placeholder:e(o).form.operate=="Add"?e(l)("Please input field",{field:e(l)("user.user.password")}):e(l)("user.user.Please leave blank if not modified")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(p,{label:e(l)("State"),modelValue:e(o).form.items.status,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).form.items.status=a),type:"radio",data:{content:{2:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"]),s(p,{label:"禁止游戏",modelValue:e(o).form.items.is_game_status,"onUpdate:modelValue":t[5]||(t[5]=a=>e(o).form.items.is_game_status=a),type:"radio",data:{content:{2:e(l)("禁止"),1:e(l)("正常")}}},null,8,["modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[F,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});const H=E(K,[["__scopeId","data-v-f0d973f4"]]);export{H as default};