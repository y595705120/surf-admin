import{d as c,b as d,T as m,a as p}from"./index-a4c9ce56.js";import{e as u,M as b}from"./index-dcab27dc.js";import{_ as f}from"./popupForm.vue_vue_type_script_setup_true_lang-f176f082.js";import{h as _,w as v,af as h,E as y,q as g,o,k,z as t,O as q,V as w,p as l}from"./vue-5a2488fc.js";import"./index-f3986603.js";import"./index-404d6f90.js";import"./langInput-1434ee4f.js";const E={class:"default-main ba-table-box"},R=_({name:"service/emaildata",__name:"index",setup(T){const{t:e}=u(),s=v(),i=c(["edit","delete"]),a=new d(new b("/admin/service.EmailData/"),{pk:"id",column:[{label:e("service.emaildata.id"),prop:"id",align:"center",width:70,operator:!1,sortable:"custom"},{label:e("service.emaildata.type"),prop:"type",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{1:e("service.emaildata.type 1"),2:e("service.emaildata.type 2")}},{label:e("service.emaildata.cate"),prop:"cate",align:"center",operator:!1,sortable:!1,replaceValue:{1:e("service.emaildata.cate 1"),2:e("service.emaildata.cate 2")},render:"tag"},{label:e("service.emaildata.uid"),prop:"uid",align:"center",operator:"eq",sortable:!1},{label:e("service.emaildata.send_time"),prop:"send_time",align:"center",operator:!1,sortable:!1,render:"datetime"},{label:e("service.emaildata.money"),prop:"money",align:"center",operator:!1,sortable:!1},{label:e("service.emaildata.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("service.emaildata.update_time"),prop:"update_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("service.emaildata.send_status"),prop:"send_status",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{1:e("service.emaildata.send_status 1"),2:e("service.emaildata.send_status 2")}},{label:e("service.emaildata.multiple"),prop:"multiple",align:"center",operator:!1,sortable:!1},{label:"添加人",prop:"admin.username",align:"center",operatorPlaceholder:e("Fuzzy query"),render:"tags",operator:"LIKE"},{label:e("service.emaildata.state"),prop:"state",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{1:e("service.emaildata.state 1"),0:e("service.emaildata.state 0")}},{label:e("Operate"),align:"center",width:100,render:"buttons",buttons:i,operator:!1,fixed:"right"}],dblClickNotEditColumn:["all"]},{defaultItems:{type:"1",cate:0,uid:0,send_type:"1",send_time:0,money:0,send_status:"1",multiple:0,state:"0",title:{},content:{}}});return h("baTable",a),y(()=>{var r;a.table.ref=s.value,a.mount(),(r=a.getIndex())==null||r.then(()=>{a.initSort(),a.dragSort()})}),(r,V)=>{const n=g("el-alert");return o(),k("div",E,[t(a).table.remark?(o(),q(n,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):w("",!0),l(m,{buttons:["refresh","add","comSearch","columnDisplay"],"quick-search-placeholder":t(e)("Quick search placeholder",{fields:t(e)("service.emaildata.quick Search Fields")})},null,8,["quick-search-placeholder"]),l(p,{ref_key:"tableRef",ref:s},null,512),l(f)])}}});export{R as default};