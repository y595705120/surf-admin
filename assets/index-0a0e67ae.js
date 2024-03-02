import{d as W,b as E,T as D,a as z}from"./index-be535443.js";import{s as f,e as V,M as q,K as l}from"./index-a237e875.js";import{_ as R}from"./popupForm.vue_vue_type_script_setup_true_lang-d698612f.js";import{_ as $}from"./userInfo.vue_vue_type_script_setup_true_lang-24fcda37.js";import{h as F,w as U,af as G,E as K,q as p,a8 as L,o as i,k as m,z as s,O as b,V as h,p as c,P as o,m as u,$ as x,a5 as k,W as _,aa as M}from"./vue-5a2488fc.js";import"./index-9b0b81ef.js";import"./index-bb90bcb7.js";import"./validate-8f99773c.js";import"./sass.default-9c4822b8.js";function j(r){return f({url:"/admin/finance.Withdraw/payment",method:"POST",data:r},{showSuccessMessage:!0})}function J(r){return f({url:"/admin/finance.Withdraw/reloadStatus",method:"POST",data:r},{showSuccessMessage:!0})}function Q(r){return f({url:"/admin/finance.Withdraw/payStatus",method:"POST",data:r},{showSuccessMessage:!0})}function A(r){return f({url:"/admin/finance.Withdraw/successStatus",method:"POST",data:r},{showSuccessMessage:!0})}function I(r){return f({url:"/admin/finance.Withdraw/errorStatus",method:"POST",data:r},{showSuccessMessage:!0})}function X(r){return f({url:"/admin/finance.Withdraw/moshouStatus",method:"POST",data:r},{showSuccessMessage:!0})}function Y(r){return f({url:"/admin/finance.Withdraw/moshouUserStatus",method:"POST",data:r},{showSuccessMessage:!0})}function Z(r){return f({url:"/admin/finance.Withdraw/overStatus",method:"POST",data:r},{showSuccessMessage:!0})}const ee={class:"default-main ba-table-box"},te={class:"mlr-12",style:{"margin-left":"10px"}},ae=u("span",{class:"table-header-operate-text"},"批量通过",-1),re={class:"mlr-12",style:{"margin-left":"10px"}},ne=u("span",{class:"table-header-operate-text"},"批量拒绝",-1),oe={class:"mlr-12",style:{"margin-left":"10px"}},se=u("span",{class:"table-header-operate-text"},"批量代付",-1),le={key:0,class:"el-tag el-tag--danger el-tag--default el-tag--light"},ie={key:1,class:"el-tag el-tag--default el-tag--light"},ce=u("br",null,null,-1),de={key:2,class:"el-tag el-tag--danger el-tag--default el-tag--light"},ue={key:3,class:"el-tag el-tag--default el-tag--light"},fe=u("br",null,null,-1),xe=F({name:"finance/withdraw",__name:"index",setup(r){const O=()=>{A({ids:t.getSelectionIds()}).then(e=>{e.code==1&&t.onTableHeaderAction("refresh",{})})},C=()=>{Q({ids:t.getSelectionIds()}).then(e=>{e.code==1&&t.onTableHeaderAction("refresh",{})})},H=()=>{M.prompt("请输入拒绝理由","审核拒绝",{confirmButtonText:"确认",cancelButtonText:"取消"}).then(({value:e})=>{I({ids:t.getSelectionIds(),des:e}).then(n=>{n.code==1&&t.onTableHeaderAction("refresh",{})})})},{t:a}=V(),B=U();let w=[{render:"tipButton",name:"info",title:"发起代付",text:"",type:"danger",icon:"fa fa-hand-pointer-o",class:"table-row-info",disabledTip:!1,click:e=>{j({id:e.id}).then(n=>{n.code==1&&t.onTableHeaderAction("refresh",{})})},display:e=>{if(l("payment")&&e.status==2)return!0}},{render:"tipButton",name:"info",title:"初始化",text:"",type:"warning",icon:"fa fa-superpowers",class:"table-row-info",disabledTip:!1,click:e=>{J({id:e.id}).then(n=>{n.code==1&&t.onTableHeaderAction("refresh",{})})},display:e=>{if(e.status==2||e.status==5&&!e.pay_order_id&&l("reloadStatus"))return!0}},{render:"tipButton",name:"info",title:"拒绝并没收",text:"",type:"warning",icon:"fa fa-exclamation",class:"table-row-info",disabledTip:!1,click:e=>{X({id:e.id}).then(n=>{n.code==1&&t.onTableHeaderAction("refresh",{})})},display:e=>{if(e.status==1&&l("moshouStatus"))return!0}},{render:"tipButton",name:"info",title:"拒绝没收并封号",text:"",type:"danger",icon:"fa fa-exclamation",class:"table-row-info",disabledTip:!1,click:e=>{Y({id:e.id}).then(n=>{n.code==1&&t.onTableHeaderAction("refresh",{})})},display:e=>{if(e.status==1&&l("moshouStatus"))return!0}},{render:"confirmButton",name:"success",title:"审核通过",text:"",type:"success",icon:"fa fa-check",class:"table-row-info",popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消",confirmButtonType:"danger",title:"确定通过审核吗？"},disabledTip:!1,click:e=>{A({ids:e.id}).then(n=>{n.code==1&&t.onTableHeaderAction("refresh",{})})},display:e=>{if(e.status==1&&l("successStatus"))return!0}},{render:"confirmButton",name:"errors",title:"审核拒绝",text:"",type:"danger",icon:"fa fa-close",class:"table-row-info",popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消",confirmButtonType:"danger",title:"确定拒绝审核吗？"},disabledTip:!1,click:e=>{M.prompt("请输入拒绝理由","审核拒绝",{confirmButtonText:"确认",cancelButtonText:"取消"}).then(({value:n})=>{I({ids:e.id,des:n}).then(y=>{y.code==1&&t.onTableHeaderAction("refresh",{})})})},display:e=>{if(e.status==1&&l("errorStatus"))return!0}},{render:"tipButton",name:"info",title:"前端显示完成",text:"",type:"success",icon:"fa fa-check",class:"table-row-info",disabledTip:!1,click:e=>{Z({id:e.id}).then(n=>{n.code==1&&t.onTableHeaderAction("refresh",{})})},display:e=>{if(e.status!=6&&e.status!=5&&l("overStatus"))return!0}}];w=w.concat(W(["edit"]));const t=new E(new q("/admin/finance.Withdraw/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:a("finance.withdraw.id"),prop:"id",align:"center",width:70,operator:!1,sortable:"custom"},{label:a("finance.withdraw.uid"),prop:"uid",align:"center",operator:"=",sortable:!1,render:"slot",slotName:"id"},{label:"剩余金币",prop:"balance",align:"center",operator:!1,sortable:!1},{label:"备注",prop:"remark",align:"center",operator:!1,sortable:!1},{label:"总充值",prop:"count_r_money",align:"center",operator:!1,sortable:!1},{label:a("finance.withdraw.money"),prop:"money",align:"center",operator:!1,sortable:!1},{label:"赠送金币",prop:"money",align:"center",operator:!1,sortable:!1,render:"slot",slotName:"money",width:300},{label:"总提现",prop:"count_w_money",align:"center",operator:!1,sortable:!1},{label:"到账账号",prop:"account",align:"center",operator:!1,sortable:!1},{label:a("finance.withdraw.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:a("finance.withdraw.update_time"),prop:"update_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:a("finance.withdraw.status"),prop:"status",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{1:a("finance.withdraw.status 1"),2:a("finance.withdraw.status  2"),3:a("finance.withdraw.status 3"),4:a("finance.withdraw.status 4"),5:a("finance.withdraw.status 5"),6:a("finance.withdraw.status 6")},custom:{1:"info",2:"success",3:"warning",4:"primary",5:"success",6:"danger"}},{label:a("finance.withdraw.order"),prop:"order",align:"center",operatorPlaceholder:a("Fuzzy query"),operator:"LIKE",sortable:!1},{label:a("finance.withdraw.names"),prop:"names",align:"center",operatorPlaceholder:a("Fuzzy query"),operator:!1,sortable:!1},{label:a("finance.withdraw.t_money"),prop:"t_money",align:"center",operator:!1,sortable:!1},{label:"拒绝原因",prop:"error_msg",align:"center",operator:!1,sortable:!1},{label:a("finance.withdraw.pay_order_id"),prop:"pay_order_id",align:"center",operator:"eq",sortable:!1},{label:"操作人",prop:"admin_name",align:"center",operator:!1,sortable:!1},{label:a("Operate"),align:"center",width:100,render:"buttons",buttons:w,operator:!1,fixed:"right"}],dblClickNotEditColumn:["all"]},{defaultItems:{}}),N=e=>{t.form.extend.user_id=e,t.form.operate="userInfoDialog"};return G("baTable",t),K(()=>{var e;t.table.ref=B.value,t.mount(),t.table.filter.search=[{field:"status",val:"5,6",operator:"NOT IN",render:"tags"}],(e=t.getIndex())==null||e.then(()=>{t.initSort(),t.dragSort()})}),(e,n)=>{const y=p("el-alert"),g=p("el-button"),S=p("el-popconfirm"),P=p("el-tooltip"),v=p("el-table-column"),T=L("blur");return i(),m("div",ee,[s(t).table.remark?(i(),b(y,{key:0,class:"ba-table-alert",title:s(t).table.remark,type:"info","show-icon":""},null,8,["title"])):h("",!0),c(D,{buttons:["refresh","add","edit","delete","comSearch","columnDisplay"]},{default:o(()=>[c(S,{onConfirm:O,"confirm-button-text":"确定","cancel-button-text":"取消",confirmButtonType:"success",title:"确定批量通过选中的数据吗？",disabled:!(s(t).table.selection.length>0)},{reference:o(()=>[u("div",te,[s(l)("successStatus")?x((i(),b(g,{key:0,disabled:!(s(t).table.selection.length>0),class:"table-header-operate",type:"success"},{default:o(()=>[ae]),_:1},8,["disabled"])),[[T]]):h("",!0)])]),_:1},8,["disabled"]),c(S,{onConfirm:H,"confirm-button-text":"确定","cancel-button-text":"取消",confirmButtonType:"success",title:"确定批量拒绝选中的数据吗？",disabled:!(s(t).table.selection.length>0)},{reference:o(()=>[u("div",re,[s(l)("errorStatus")?x((i(),b(g,{key:0,disabled:!(s(t).table.selection.length>0),class:"table-header-operate",type:"danger"},{default:o(()=>[ne]),_:1},8,["disabled"])),[[T]]):h("",!0)])]),_:1},8,["disabled"]),c(S,{onConfirm:C,"confirm-button-text":"确定","cancel-button-text":"取消",confirmButtonType:"success",title:"确定批量代付选中的数据吗？",disabled:!(s(t).table.selection.length>0)},{reference:o(()=>[u("div",oe,[s(l)("payStatus")?x((i(),b(g,{key:0,disabled:!(s(t).table.selection.length>0),class:"table-header-operate",type:"warning"},{default:o(()=>[se]),_:1},8,["disabled"])),[[T]]):h("",!0)])]),_:1},8,["disabled"])]),_:1}),c(z,{ref_key:"tableRef",ref:B},{id:o(()=>[c(v,{prop:"id",label:"UID",align:"center"},{default:o(d=>[c(P,{class:"box-item",effect:"dark",content:"点击查看详情",placement:"top-start"},{default:o(()=>[c(g,{size:"small",type:"primary",onClick:pe=>N(d.row.uid)},{default:o(()=>[k(_(d.row.uid),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),money:o(()=>[c(v,{prop:"money",label:"赠送金币",align:"center",width:"200"},{default:o(d=>[k(" 邮箱领取： "),d.row.email_money>0?(i(),m("span",le,_(d.row.email_money),1)):(i(),m("span",ie,_(d.row.email_money),1)),ce,k(" 后台手动： "),d.row.sd_money>0?(i(),m("span",de,_(d.row.sd_money),1)):(i(),m("span",ue,_(d.row.sd_money),1)),fe]),_:1})]),_:1},512),c(R),s(t).form.operate=="userInfoDialog"?(i(),b($,{key:1})):h("",!0)])}}});export{xe as default};
