import{e as Y,_ as q}from"./index-a4f58e3c.js";import{b as M}from"./admin-a37c7656.js";import{h as N,ap as T,w as b,E,q as l,a8 as m,o as u,O as g,P as e,$ as y,k as F,a5 as o,p as a,z as s,W as d,m as H,X as S,l as W}from"./vue-5a2488fc.js";const $={class:"title"},j=N({__name:"dayData",setup(O){const t=T("baTable"),{t:D}=Y(),n=b({}),_=b({id:"",date:""}),p=i=>{console.log(i),M(i).then(r=>{n.value=r.data.countInfo})},C=()=>{p(_.value)};return E(()=>{_.value.id=t.form.items.id,p(_.value)}),(i,r)=>{const k=l("el-date-picker"),f=l("el-button"),h=l("el-form-item"),c=l("el-descriptions-item"),x=l("el-descriptions"),w=l("el-scrollbar"),V=l("el-dialog"),z=m("drag"),B=m("zoom"),I=m("loading");return u(),g(V,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["dayData"].includes(s(t).form.operate),onClose:s(t).toggleForm,"destroy-on-close":!0},{header:e(()=>[y((u(),F("div",$,[o(" 日报数据 ")])),[[z,[".ba-operate-dialog",".el-dialog__header"]],[B,".ba-operate-dialog"]])]),footer:e(()=>[a(f,{onClick:r[1]||(r[1]=v=>s(t).toggleForm(""))},{default:e(()=>[o(d(s(D)("Cancel")),1)]),_:1})]),default:e(()=>[y((u(),g(w,{class:"ba-table-form-scrollbar"},{default:e(()=>[H("div",{class:S(["ba-operate-form","ba-"+s(t).form.operate+"-form"]),style:W("width: calc(100% - "+s(t).form.labelWidth/2+"px)")},[a(h,{label:"时间"},{default:e(()=>[a(k,{modelValue:_.value.date,"onUpdate:modelValue":r[0]||(r[0]=v=>_.value.date=v),type:"daterange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"]),a(f,{type:"primary",style:{"margin-left":"10px"},onClick:C},{default:e(()=>[o("搜索")]),_:1})]),_:1}),a(x,{title:"推广日报",column:"1",border:""},{default:e(()=>[a(c,{label:"新增用户："},{default:e(()=>[o(d(n.value.new_user),1)]),_:1}),a(c,{label:"首充人数："},{default:e(()=>[o(d(n.value.re_f_user_num),1)]),_:1}),a(c,{label:"总充值金额："},{default:e(()=>[o(d(n.value.r_money),1)]),_:1}),a(c,{label:"总提现金额："},{default:e(()=>[o(d(n.value.w_money),1)]),_:1}),a(c,{label:"充值营收："},{default:e(()=>[o(d(n.value.ys),1)]),_:1})]),_:1})],6)]),_:1})),[[I,s(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const A=q(j,[["__scopeId","data-v-032f84e3"]]);export{A as default};