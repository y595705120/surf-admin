import{h as x,w as S,ap as F,r as z,q as s,a8 as d,o as n,O as p,P as m,$ as f,k as B,a5 as g,W as _,z as e,m as y,l as v,p as r,X as I,a4 as N,as as W,V as $}from"./vue-5a2488fc.js";import{e as D}from"./index-dcab27dc.js";import{F as t}from"./index-404d6f90.js";const T={class:"title"},A=x({__name:"popupForm",setup(E){const u=S(),l=F("baTable"),{t:o}=D(),b=z({});return(K,a)=>{const V=s("el-form"),h=s("el-scrollbar"),c=s("el-button"),w=s("el-dialog"),k=d("drag"),P=d("zoom"),U=d("loading"),C=d("blur");return n(),p(w,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(l).form.operate),onClose:e(l).toggleForm,width:"50%"},{header:m(()=>[f((n(),B("div",T,[g(_(e(l).form.operate?e(o)(e(l).form.operate):""),1)])),[[k,[".ba-operate-dialog",".el-dialog__header"]],[P,".ba-operate-dialog"]])]),footer:m(()=>[y("div",{style:v("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[r(c,{onClick:a[15]||(a[15]=i=>e(l).toggleForm())},{default:m(()=>[g(_(e(o)("Cancel")),1)]),_:1}),f((n(),p(c,{loading:e(l).form.submitLoading,onClick:a[16]||(a[16]=i=>e(l).onSubmit(u.value)),type:"primary"},{default:m(()=>[g(_(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[C]])],4)]),default:m(()=>[f((n(),p(h,{class:"ba-table-form-scrollbar"},{default:m(()=>[y("div",{class:I(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:v("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?$("",!0):(n(),p(V,{key:0,ref_key:"formRef",ref:u,onSubmit:a[13]||(a[13]=N(()=>{},["prevent"])),onKeyup:a[14]||(a[14]=W(i=>e(l).onSubmit(u.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:b},{default:m(()=>[r(t,{label:e(o)("user.vipconfig.vip_level"),type:"string",prop:"vip_level",modelValue:e(l).form.items.vip_level,"onUpdate:modelValue":a[0]||(a[0]=i=>e(l).form.items.vip_level=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.vip_level")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.recharge_money"),type:"string",prop:"recharge_money",modelValue:e(l).form.items.recharge_money,"onUpdate:modelValue":a[1]||(a[1]=i=>e(l).form.items.recharge_money=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.recharge_money")})},null,8,["label","modelValue","placeholder"]),r(t,{label:"总打码量",type:"string",prop:"pay_money",modelValue:e(l).form.items.pay_money,"onUpdate:modelValue":a[2]||(a[2]=i=>e(l).form.items.pay_money=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.pay_money")})},null,8,["modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.cashout_num"),type:"string",prop:"cashout_num",modelValue:e(l).form.items.cashout_num,"onUpdate:modelValue":a[3]||(a[3]=i=>e(l).form.items.cashout_num=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.cashout_num")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.cashout_rate"),type:"string",prop:"cashout_rate",modelValue:e(l).form.items.cashout_rate,"onUpdate:modelValue":a[4]||(a[4]=i=>e(l).form.items.cashout_rate=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.cashout_rate")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.cashout_money"),type:"string",prop:"cashout_money",modelValue:e(l).form.items.cashout_money,"onUpdate:modelValue":a[5]||(a[5]=i=>e(l).form.items.cashout_money=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.cashout_money")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.day_cashout_money"),type:"string",prop:"day_cashout_money",modelValue:e(l).form.items.day_cashout_money,"onUpdate:modelValue":a[6]||(a[6]=i=>e(l).form.items.day_cashout_money=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.day_cashout_money")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.wager_rate"),type:"string",prop:"wager_rate",modelValue:e(l).form.items.wager_rate,"onUpdate:modelValue":a[7]||(a[7]=i=>e(l).form.items.wager_rate=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.wager_rate")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.sing_in"),type:"string",prop:"sing_in",modelValue:e(l).form.items.sing_in,"onUpdate:modelValue":a[8]||(a[8]=i=>e(l).form.items.sing_in=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.sing_in")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.image_url"),type:"image",modelValue:e(l).form.items.image_url,"onUpdate:modelValue":a[9]||(a[9]=i=>e(l).form.items.image_url=i),prop:"image_url",placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.image_url")}),"input-attr":{returnFullUrl:!0}},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.commission_money"),type:"string",prop:"commission_money",modelValue:e(l).form.items.commission_money,"onUpdate:modelValue":a[10]||(a[10]=i=>e(l).form.items.commission_money=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.commission_money")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.week_money"),type:"string",prop:"week_money",modelValue:e(l).form.items.week_money,"onUpdate:modelValue":a[11]||(a[11]=i=>e(l).form.items.week_money=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.week_money")})},null,8,["label","modelValue","placeholder"]),r(t,{label:e(o)("user.vipconfig.month_money"),type:"string",prop:"month_money",modelValue:e(l).form.items.month_money,"onUpdate:modelValue":a[12]||(a[12]=i=>e(l).form.items.month_money=i),placeholder:e(o)("Please input field",{field:e(o)("user.vipconfig.month_money")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[U,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{A as _};
