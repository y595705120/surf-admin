import{b as u,T as f,a as b}from"./index-a4c9ce56.js";import{e as m,M as g,K as h}from"./index-dcab27dc.js";import{N as _,s as x}from"./sass.default-a4465639.js";import{h as s,w as k,af as T,E as y,q as B,o as l,k as I,z as o,O as v,V as w,p as n}from"./vue-5a2488fc.js";const N={class:"default-main ba-table-box",style:{"min-height":"700px"}},C=s({name:"userInfo/gameslog"}),L=s({...C,props:{userId:String},setup(i){const c=i;m();const a=k();let d=[{render:"confirmButton",name:"info",title:"发放",text:"",type:"success",icon:"fa fa-check",class:"table-row-info",disabledTip:!1,popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消",confirmButtonType:"success",title:"此操作不可逆，请谨慎操作，确认发放？"},click:t=>{x({id:t.id}).then(r=>{r.code==1&&e.onTableHeaderAction("refresh",{})})},display:t=>{if(h("sendBao")&&t.status==1)return!0}}];const e=new u(new g("/admin/user.User/"),{column:[{label:"下级ID",prop:"uid",align:"center",operator:!1},{label:"佣金",prop:"money",align:"center",operator:!1},{label:"状态",prop:"status",align:"center",operator:"=",render:"tag",replaceValue:{1:"待发放",2:"已发放"},custom:{1:"primary",2:"success"}},{label:"返利时间",prop:"create_time",align:"center",operator:"RANGE",render:"datetime"},{label:"操作",align:"center",width:"200",render:"buttons",buttons:d,operator:!1,fixed:"right"}],dblClickNotEditColumn:["all"]});return T("baTable",e),e.getIndex=()=>{if(e.runBefore("getIndex")!==!1)return e.table.loading=!0,e.table.filter.search.push({field:"pid",operator:"=",render:_,val:c.userId}),e.api.index(e.table.filter).then(t=>{e.table.data=t.data.list,e.table.total=t.data.total,e.table.remark=t.data.remark,e.table.filter.search.splice(-1,1),e.runAfter("getIndex",{res:t})}).finally(()=>{e.table.loading=!1})},y(()=>{e.api.actionUrl.set("index","/admin/user.User/inviteLog"),e.table.ref=a.value,e.mount(),e.getIndex()}),(t,r)=>{const p=B("el-alert");return l(),I("div",N,[o(e).table.remark?(l(),v(p,{key:0,class:"ba-table-alert",title:o(e).table.remark,type:"info","show-icon":""},null,8,["title"])):w("",!0),n(f,{buttons:["comSearch","columnDisplay"]}),n(b,{ref_key:"tableRef",ref:a},null,512)])}}});export{L as _};
