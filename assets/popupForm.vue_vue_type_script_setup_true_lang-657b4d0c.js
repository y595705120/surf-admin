import{h as P,w as S,ap as z,r as F,q as p,a8 as d,o as m,O as u,P as s,$ as y,k as B,a5 as _,W as b,z as e,m as V,l as g,p as r,X as D,a4 as I,as as N,V as W}from"./vue-5a2488fc.js";import{e as $}from"./index-a237e875.js";import{F as i}from"./index-bb90bcb7.js";import{b as n}from"./validate-8f99773c.js";const T={class:"title"},M=P({__name:"popupForm",setup(E){const f=S(),l=z("baTable"),{t:o}=$(),h=F({pay_name:[n({name:"required",title:o("routine.paylists.pay_name")})],shop_num:[n({name:"required",title:o("routine.paylists.shop_num")})],key:[n({name:"required",title:o("routine.paylists.key")})],api_url:[n({name:"required",title:o("routine.paylists.api_url")})],class_name:[n({name:"required",title:o("routine.paylists.class_name")})],recharge_notify:[n({name:"required",title:o("routine.paylists.api_url")})],cash_out_notify:[n({name:"required",title:o("routine.paylists.cash_out_notify")})]});return(K,t)=>{const v=p("el-form"),k=p("el-scrollbar"),c=p("el-button"),w=p("el-dialog"),C=d("drag"),U=d("zoom"),q=d("loading"),x=d("blur");return m(),u(w,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(l).form.operate),onClose:e(l).toggleForm,width:"50%"},{header:s(()=>[y((m(),B("div",T,[_(b(e(l).form.operate?e(o)(e(l).form.operate):""),1)])),[[C,[".ba-operate-dialog",".el-dialog__header"]],[U,".ba-operate-dialog"]])]),footer:s(()=>[V("div",{style:g("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[r(c,{onClick:t[12]||(t[12]=a=>e(l).toggleForm())},{default:s(()=>[_(b(e(o)("Cancel")),1)]),_:1}),y((m(),u(c,{loading:e(l).form.submitLoading,onClick:t[13]||(t[13]=a=>e(l).onSubmit(f.value)),type:"primary"},{default:s(()=>[_(b(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[x]])],4)]),default:s(()=>[y((m(),u(k,{class:"ba-table-form-scrollbar"},{default:s(()=>[V("div",{class:D(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:g("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?W("",!0):(m(),u(v,{key:0,ref_key:"formRef",ref:f,onSubmit:t[10]||(t[10]=I(()=>{},["prevent"])),onKeyup:t[11]||(t[11]=N(a=>e(l).onSubmit(f.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:h},{default:s(()=>[r(i,{label:e(o)("routine.paylists.pay_name"),type:"string",modelValue:e(l).form.items.pay_name,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).form.items.pay_name=a),prop:"pay_name",placeholder:e(o)("Please input field",{field:e(o)("routine.paylists.pay_name")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(o)("routine.paylists.shop_num"),type:"string",modelValue:e(l).form.items.shop_num,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).form.items.shop_num=a),prop:"shop_num",placeholder:e(o)("Please input field",{field:e(o)("routine.paylists.shop_num")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(o)("routine.paylists.key"),type:"string",modelValue:e(l).form.items.key,"onUpdate:modelValue":t[2]||(t[2]=a=>e(l).form.items.key=a),prop:"key",placeholder:e(o)("Please input field",{field:e(o)("routine.paylists.key")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(o)("routine.paylists.api_url"),type:"string",modelValue:e(l).form.items.api_url,"onUpdate:modelValue":t[3]||(t[3]=a=>e(l).form.items.api_url=a),prop:"api_url",placeholder:e(o)("Please input field",{field:e(o)("routine.paylists.api_url")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(o)("routine.paylists.class_name"),type:"string",modelValue:e(l).form.items.class_name,"onUpdate:modelValue":t[4]||(t[4]=a=>e(l).form.items.class_name=a),prop:"class_name",placeholder:e(o)("Please input field",{field:e(o)("routine.paylists.class_name")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(o)("routine.paylists.recharge_notify"),type:"string",modelValue:e(l).form.items.recharge_notify,"onUpdate:modelValue":t[5]||(t[5]=a=>e(l).form.items.recharge_notify=a),prop:"recharge_notify",placeholder:e(o)("Please input field",{field:e(o)("routine.paylists.recharge_notify")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(o)("routine.paylists.cash_out_notify"),type:"string",modelValue:e(l).form.items.cash_out_notify,"onUpdate:modelValue":t[6]||(t[6]=a=>e(l).form.items.cash_out_notify=a),prop:"cash_out_notify",placeholder:e(o)("Please input field",{field:e(o)("routine.paylists.cash_out_notify")})},null,8,["label","modelValue","placeholder"]),r(i,{label:"通道充值费率(百分比)",type:"number",modelValue:e(l).form.items.r_rate,"onUpdate:modelValue":t[7]||(t[7]=a=>e(l).form.items.r_rate=a),prop:"r_rate",placeholder:"请输入通道充值费率"},null,8,["modelValue"]),r(i,{label:"通道提现费率(百分比)",type:"number",modelValue:e(l).form.items.w_rate,"onUpdate:modelValue":t[8]||(t[8]=a=>e(l).form.items.w_rate=a),prop:"w_rate",placeholder:"请输入通道提现费率"},null,8,["modelValue"]),r(i,{label:e(o)("routine.paylists.status"),type:"switch",modelValue:e(l).form.items.status,"onUpdate:modelValue":t[9]||(t[9]=a=>e(l).form.items.status=a),prop:"status",data:{content:{0:e(o)("routine.paylists.status 0"),1:e(o)("routine.paylists.status 1")}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[q,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};