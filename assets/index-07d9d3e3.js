import{d as i,b as p,T as b,a as d}from"./index-a4c9ce56.js";import{e as m,M as u}from"./index-dcab27dc.js";import{_ as f}from"./popupForm.vue_vue_type_script_setup_true_lang-ec625162.js";import{h as _,w as k,af as g,E as h,q as T,o as r,k as w,z as l,O as x,V as B,p as o}from"./vue-5a2488fc.js";import"./index-f3986603.js";import"./index-404d6f90.js";import"./validate-d0780182.js";const C={class:"default-main ba-table-box"},M=_({name:"content/notice",__name:"index",setup(v){const{t}=m(),n=k(),s=i(["edit","delete"]),e=new p(new u("/admin/content.Notice/"),{pk:"id",column:[{label:t("content.notice.id"),prop:"id",align:"center",width:70,operator:!1,sortable:"custom"},{label:t("content.notice.string"),prop:"string",align:"center",operator:!1,sortable:!1},{label:t("content.notice.status"),prop:"status",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{0:t("content.notice.status 0"),1:t("content.notice.status 1")}},{label:t("Operate"),align:"center",width:100,render:"buttons",buttons:s,operator:!1}],dblClickNotEditColumn:["all"]},{defaultItems:{status:"0"}});return g("baTable",e),h(()=>{var a;e.table.ref=n.value,e.mount(),(a=e.getIndex())==null||a.then(()=>{e.initSort(),e.dragSort()})}),(a,y)=>{const c=T("el-alert");return r(),w("div",C,[l(e).table.remark?(r(),x(c,{key:0,class:"ba-table-alert",title:l(e).table.remark,type:"info","show-icon":""},null,8,["title"])):B("",!0),o(b,{buttons:["refresh","add","edit","delete","comSearch","columnDisplay"]}),o(d,{ref_key:"tableRef",ref:n},null,512),o(f)])}}});export{M as default};