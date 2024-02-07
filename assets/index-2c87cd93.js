import{b as w,T as x,a as D}from"./index-a4c9ce56.js";import{e as I,M as v,K as C,s as T}from"./index-dcab27dc.js";import{_ as N}from"./userInfo.vue_vue_type_script_setup_true_lang-06359704.js";import{f as q}from"./file-download-cdff80a5.js";import{h as B,w as E,af as V,E as z,q as l,a8 as R,o as n,k as S,z as s,O as c,V as b,p as o,P as r,$,a5 as A,W as L,m as F}from"./vue-5a2488fc.js";import"./index-f3986603.js";import"./sass.default-a4465639.js";const K={class:"default-main ba-table-box"},M=F("span",{class:"table-header-operate-text"},"导出",-1),X=B({name:"user/betlog",__name:"index",setup(P){const{t}=I(),m=E(),e=new w(new v("/admin/user.BetLog/"),{pk:"id",column:[{label:"ID",prop:"id",align:"center",width:70,operator:!1,sortable:"custom"},{label:t("user.betlog.uid"),prop:"uid",align:"center",operator:"eq",sortable:!1,render:"slot",slotName:"id"},{label:"母投注id",prop:"parent_bet_id",align:"center",operator:"eq",sortable:!1},{label:"子投注id",prop:"bet_id",align:"center",operator:"eq",sortable:!1},{label:t("user.betlog.game_code"),prop:"game_code",align:"center",operator:"eq"},{label:"投注前余额",prop:"old_balance",align:"center",operator:!1,sortable:!1},{label:t("user.betlog.bet_time"),prop:"bet_time",align:"center",operator:"RANGE",render:"datetime",sortable:!1},{label:t("user.betlog.bet_money"),prop:"bet_money",align:"center",operator:!1,sortable:!1},{label:t("user.betlog.win_money"),prop:"win_money",align:"center",operator:!1,sortable:!1},{label:t("user.betlog.transfer_amount"),prop:"transfer_amount",align:"center",operator:!1,sortable:!1},{label:"游戏名字",prop:"game_name",align:"center",operatorPlaceholder:t("Fuzzy query"),operator:"LIKE"},{label:t("user.betlog.new_money"),prop:"new_money",align:"center",operator:!1,sortable:!1}],dblClickNotEditColumn:["all"]});V("baTable",e);const _=a=>{e.form.extend.user_id=a,e.form.operate="userInfoDialog"},u=()=>{T({url:"/admin/user.BetLog/export",method:"get",params:e.table.filter,responseType:"blob"},{reductDataFormat:!1}).then(a=>{const i=a.headers["content-disposition"].split("filename="),p=decodeURI(i[1]);q(a.data,p)})};return z(()=>{var a;e.table.ref=m.value,e.mount(),(a=e.getIndex())==null||a.then(()=>{e.initSort(),e.dragSort()})}),(a,g)=>{const i=l("el-alert"),p=l("Icon"),d=l("el-button"),h=l("el-tooltip"),y=l("el-table-column"),k=R("blur");return n(),S("div",K,[s(e).table.remark?(n(),c(i,{key:0,class:"ba-table-alert",title:s(e).table.remark,type:"info","show-icon":""},null,8,["title"])):b("",!0),o(x,{buttons:["refresh","comSearch","columnDisplay"]},{default:r(()=>[s(C)("export")?$((n(),c(d,{key:0,class:"table-header-operate",type:"danger",onClick:u},{default:r(()=>[o(p,{color:"#ffffff",name:"el-icon-Download"}),M]),_:1})),[[k]]):b("",!0)]),_:1}),o(D,{ref_key:"tableRef",ref:m},{id:r(()=>[o(y,{prop:"id",label:"ID",align:"center"},{default:r(f=>[o(h,{class:"box-item",effect:"dark",content:"点击查看详情",placement:"top-start"},{default:r(()=>[o(d,{size:"small",type:"primary",onClick:G=>_(f.row.uid)},{default:r(()=>[A(L(f.row.uid),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},512),s(e).form.operate=="userInfoDialog"?(n(),c(N,{key:1})):b("",!0)])}}});export{X as default};
