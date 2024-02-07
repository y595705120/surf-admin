import{d as k,b as w,T as g,a as y}from"./index-a4c9ce56.js";import{e as C,M as F}from"./index-dcab27dc.js";import S from"./popupForm-f730d461.js";import{g as N,b as T,a as B,c as A}from"./dataexport-e8fceec4.js";import{h as R,w as h,a3 as E,a2 as p,J as I,af as v,E as q,q as L,o as x,k as O,z as d,O as P,V as G,p as u}from"./vue-5a2488fc.js";import"./index-f3986603.js";import"./index-404d6f90.js";import"./validate-d0780182.js";const J={class:"default-main ba-table-box"},W=R({name:"routine/dataexport",__name:"index",setup(D){const{t:i}=C(),f=h(),_=h(),j=E();let c=[{render:"confirmButton",name:"test",title:"routine.dataexport.test",text:"",type:"primary",icon:"fa fa-wrench",class:"table-row-test",popconfirm:{confirmButtonText:i("Confirm"),cancelButtonText:i("Cancel"),confirmButtonType:"primary",width:"180px",title:"将导出前10条数据，请目检数据是否正常且完整"},disabledTip:!1,click:t=>{N(t.id).then(r=>{window.location.href=T(r.data.taskId)})}},{render:"confirmButton",name:"export",title:"routine.dataexport.export",text:"",type:"danger",icon:"fa fa-play-circle",class:"table-row-export",popconfirm:{confirmButtonText:i("Confirm"),cancelButtonText:i("Cancel"),confirmButtonType:"danger",width:"200px",title:"导出为高磁盘I/O操作，大数据导出任务请在闲时执行，确认开始导出任务吗？"},disabledTip:!1,click:t=>{B(t.id).then(r=>{r.data.download?window.location.href=T(r.data.id):j.push({name:"routine/dataexport/taskControl",params:{id:r.data.id}})})}}];c=c.concat(k(["edit","delete"]));const e=new w(new F("/admin/routine.dataexport/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:i("routine.dataexport.id"),prop:"id",align:"center",width:70,sortable:"custom",operator:"RANGE"},{label:i("routine.dataexport.admin_id"),prop:"admin.nickname",operator:"LIKE",align:"center"},{label:i("routine.dataexport.name"),prop:"name",align:"center"},{label:i("routine.dataexport.main_table"),prop:"main_table",align:"center"},{label:i("routine.dataexport.lastprogress"),prop:"lastprogress",align:"center",operator:"RANGE"},{label:i("routine.dataexport.lastexporttime"),prop:"lastexporttime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:i("routine.dataexport.lastfile"),prop:"lastfile",align:"center",operator:!1,render:"url"},{label:i("routine.dataexport.createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:i("Operate"),align:"center",width:160,render:"buttons",buttons:c,operator:!1}],dblClickNotEditColumn:[void 0],defaultOrder:{prop:"id",order:"desc"}},{defaultItems:{xls_max_number:"10000",concurrent_create_xls:"3",memory_limit:"128",lastprogress:"0"}},{toggleForm:({operate:t})=>{t=="Add"&&(e.form.loading=!0,A().then(r=>{e.form.extend.tables=r.data.tables,e.form.loading=!1,e.form.items.joinTableNumber=0,e.form.items.joinTable=[],e.form.items.joinTableAsName=[],e.form.items.joinTableFields=[],e.form.items.joinTablePk=[],e.form.items.joinTableFk=[],e.form.items.joinTableType=[]}))},onSubmit:({formEl:t,operate:r,items:n})=>{const o=[];for(const a in n.fields)o.push(e.form.extend.fieldSelect[n.fields[a]]);const l=[];for(const a in n.joinTable){if(a==e.form.items.joinTableNumber)break;const s=[];for(const b in n.joinTableFields[a])s.push(p(e.form.extend.joinTableFieldSelect[a][n.joinTableFields[a][b]]));l[a]={table:n.joinTable[a],pk:n.joinTablePk[a],fk:n.joinTableFk[a],asname:n.joinTableAsName[a],fields:s,type:n.joinTableType[a]}}r=r.replace(r[0],r[0].toLowerCase());const m=()=>{e.form.submitLoading=!0,e.api.postData(r,{id:e.form.items.id,name:e.form.items.name,main_table:e.form.items.main_table,field_config:o,join_table:l,where_field:p(e.form.items.where),order_field:p(e.form.items.order),xls_max_number:e.form.items.xls_max_number,concurrent_create_xls:e.form.items.concurrent_create_xls,memory_limit:e.form.items.memory_limit,export_number:e.form.items.export_number}).then(a=>{var s;e.onTableHeaderAction("refresh",{}),e.form.submitLoading=!1,(s=e.form.operateIds)==null||s.shift(),e.form.operateIds.length>0?e.toggleForm("Edit",e.form.operateIds):e.toggleForm(),e.runAfter("onSubmit",{res:a})}).catch(()=>{e.form.submitLoading=!1})};return t?(e.form.ref=t,t.validate((a,s)=>{if(a)m();else for(const b in s)I({message:s[b][0].message,type:"error"})})):m(),!1}},{requestEdit:({res:t})=>{e.form.extend.tables=t.data.tables,e.form.extend.onTableChangeCallback=()=>{const o=[];for(const l in t.data.row.field_config){o.push(t.data.row.field_config[l].name);for(const m in e.form.extend.fieldSelect)e.form.extend.fieldSelect[m].name==t.data.row.field_config[l].name&&(e.form.extend.fieldSelect[m]=t.data.row.field_config[l])}e.form.items.fields=o},f.value.onTableChange(t.data.row.main_table),e.form.items.joinTableNumber=t.data.row.join_table.length,e.form.items.joinTable=[],e.form.items.joinTableAsName=[],e.form.items.joinTableFields=[],e.form.items.joinTablePk=[],e.form.items.joinTableFk=[],e.form.items.joinTableType=[],e.form.items.onJoinTableChangeCallback=[];for(const o in t.data.row.join_table)e.form.items.joinTable.push(t.data.row.join_table[o].table),e.form.items.joinTableAsName.push(t.data.row.join_table[o].asname),e.form.items.joinTablePk.push(t.data.row.join_table[o].pk),e.form.items.joinTableFk.push(t.data.row.join_table[o].fk),e.form.items.joinTableType.push(t.data.row.join_table[o].type),f.value.onJoinTableChange(t.data.row.join_table[o].table,o),e.form.items.onJoinTableChangeCallback[o]=()=>{const l=[];for(const m in t.data.row.join_table[o].fields){l.push(t.data.row.join_table[o].fields[m].name);for(const a in e.form.extend.joinTableFieldSelect[o])e.form.extend.joinTableFieldSelect[o][a].name==t.data.row.join_table[o].fields[m].name&&(e.form.extend.joinTableFieldSelect[o][a]=t.data.row.join_table[o].fields[m])}e.form.items.joinTableFields[o]=l};e.form.items.where=t.data.row.where_field;const r=[];for(const o in e.form.items.where)r.push(e.form.items.where[o].field);e.form.items.where_field=r,e.form.items.order=t.data.row.order_field;const n=[];for(const o in e.form.items.order)n.push(e.form.items.order[o].field);e.form.items.order_field=n}});return v("baTable",e),q(()=>{var t;e.table.ref=_.value,e.mount(),(t=e.getIndex())==null||t.then(()=>{e.initSort(),e.dragSort()})}),(t,r)=>{const n=L("el-alert");return x(),O("div",J,[d(e).table.remark?(x(),P(n,{key:0,class:"ba-table-alert",title:d(e).table.remark,type:"info","show-icon":""},null,8,["title"])):G("",!0),u(g,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":d(i)("Quick search placeholder",{fields:d(i)("routine.dataexport.quick Search Fields")})},null,8,["quick-search-placeholder"]),u(y,{ref_key:"tableRef",ref:_},null,512),u(S,{ref_key:"formRef",ref:f},null,512)])}}});export{W as default};