import{s as a,i as D,m as h,a as E,d as L,p as _,e as N,g as C,f as A,h as I,u as w}from"./store-79386fb6.js";import{v as i,H as S,f as p,t as k,m as x}from"./index-dcab27dc.js";import{J as m}from"./vue-5a2488fc.js";var d=(e=>(e[e.UNINSTALLED=0]="UNINSTALLED",e[e.INSTALLED=1]="INSTALLED",e[e.WAIT_INSTALL=2]="WAIT_INSTALL",e[e.CONFLICT_PENDING=3]="CONFLICT_PENDING",e[e.DEPENDENT_WAIT_INSTALL=4]="DEPENDENT_WAIT_INSTALL",e[e.DIRECTORY_OCCUPIED=5]="DIRECTORY_OCCUPIED",e[e.DISABLE=6]="DISABLE",e))(d||{});const v=()=>{a.loading.table=!0,a.table.indexLoaded?b():P().then(()=>{b()})},f=()=>{a.table.indexLoaded=!1;for(const e in a.table.modulesEbak)a.table.modulesEbak[e]=void 0;v()},P=()=>D().then(e=>{a.table.indexLoaded=!0,a.sysVersion=e.data.sysVersion,a.installedModule=e.data.installed;const o=[];if(e.data.installed){for(const t in e.data.installed)o.push(e.data.installed[t].uid);a.installedModuleUids=o}}),b=()=>{if(typeof a.table.modulesEbak[a.table.params.activeTab]<"u"){a.table.modules[a.table.params.activeTab]=y(a.table.modulesEbak[a.table.params.activeTab]),a.loading.table=!1;return}const e={};for(const n in a.table.params)a.table.params[n]!=""&&(e[n]=a.table.params[n]);const o=[],t=[];a.installedModule.forEach(n=>{t.push({uid:n.uid,version:n.version})}),e.installed=t,e.sysVersion=a.sysVersion,h(e).then(n=>{e.activeTab=="all"&&(n.data.rows.forEach(l=>{o.push(l.uid)}),a.installedModule.forEach(l=>{o.indexOf(l.uid)===-1&&(a.table.params.quickSearch?l.title.includes(a.table.params.quickSearch)&&n.data.rows.push(l):n.data.rows.push(l))})),a.table.remark=n.data.remark,a.table.modulesEbak[e.activeTab]=n.data.rows.map(l=>{const s=a.installedModuleUids.indexOf(l.uid);return s!==-1?(l.state=a.installedModule[s].state,l.version=a.installedModule[s].version,l.website=a.installedModule[s].website,l.stateTag=O(l.state)):l.state=0,l.new_version&&l.tags&&l.tags.push({name:i.global.t("module.New version"),type:"danger"}),l}),a.table.modules[e.activeTab]=y(a.table.modulesEbak[e.activeTab]),a.table.category=n.data.category}).finally(()=>{a.loading.table=!1})},F=e=>{a.dialog.goodsInfo=!0,a.loading.goodsInfo=!0;const o=a.installedModule.find(t=>t.uid==e);E({uid:e,localVersion:o==null?void 0:o.version,sysVersion:a.sysVersion}).then(t=>{o?(t.data.info.type=="local"?(t.data.info=o,t.data.info.images=[S("/static/images/local-module-logo.png")],t.data.info.type="local"):(t.data.info.type="online",t.data.info.state=o.state,t.data.info.version=o.version),t.data.info.enable=o.state!==d.DISABLE):(t.data.info.state=0,t.data.info.type="online"),a.goodsInfo=t.data.info}).catch(t=>{u(t)&&(a.dialog.goodsInfo=!1)}).finally(()=>{a.loading.goodsInfo=!1})},R=()=>{a.dialog.buy=!0,a.loading.buy=!0,L({goods_id:a.goodsInfo.id}).then(e=>{a.loading.buy=!1,a.buy.info=e.data.info}).catch(e=>{a.dialog.buy=!1,a.loading.buy=!1,u(e)})},V=e=>{a.common.payType=e,a.loading.common=!0,_(a.buy.info.id,e).then(o=>{if(e=="wx"||e=="zfb"){a.dialog.buy=!1,a.dialog.goodsInfo=!1,a.dialog.pay=!0,a.payInfo=o.data;const t=setInterval(()=>{N(a.payInfo.info.sn).then(()=>{a.payInfo.pay.status="success",clearInterval(t),g(o.data.info.uid,o.data.info.id),a.dialog.pay=!1}).catch(()=>{})},3e3)}else g(o.data.info.uid,o.data.info.id)}).catch(o=>{u(o)}).finally(()=>{a.loading.common=!1})},r=e=>{a.common.type="loading",a.common.loadingTitle=e,a.common.loadingComponentKey=x()},g=(e,o)=>{a.dialog.common=!0,r("init"),a.common.dialogTitle=i.global.t("module.Install"),C(e).then(t=>{t.data.state===d.INSTALLED||t.data.state===d.DISABLE||t.data.state===d.DIRECTORY_OCCUPIED?(m({type:"error",message:t.data.state===d.INSTALLED||t.data.state===d.DISABLE?i.global.t("module.Installation cancelled because module already exists!"):i.global.t("module.Installation cancelled because the directory required by the module is occupied!")}),a.dialog.common=!1):(r(t.data.state===d.UNINSTALLED?"download":"install"),T(e,o),a.dialog.baAccount=!1,a.dialog.buy=!1,a.dialog.goodsInfo=!1)})},T=(e,o,t={})=>{a.common.disableHmr=!0,A(e,o,t).then(()=>{a.common.dialogTitle=i.global.t("module.Installation complete"),a.common.moduleState=d.INSTALLED,a.common.type="done"}).catch(n=>{if(!u(n))if(n.code==-1)a.common.uid=n.data.uid,a.common.type="InstallConflict",a.common.dialogTitle=i.global.t("module.A conflict is found Please handle it manually"),a.common.fileConflict=n.data.fileConflict,a.common.dependConflict=n.data.dependConflict;else if(n.code==-2){a.common.type="done",a.common.uid=n.data.uid,a.common.dialogTitle=i.global.t("module.Wait for dependent installation"),a.common.moduleState=d.DEPENDENT_WAIT_INSTALL,a.common.waitInstallDepend=n.data.wait_install,a.common.dependInstallState="executing";const l=p();n.data.wait_install.includes("npm_dependent_wait_install")&&l.addTaskPM("web-install",!0,"module-install:"+n.data.uid,s=>{c(s,"npm_dependent_wait_install")}),n.data.wait_install.includes("nuxt_npm_dependent_wait_install")&&l.addTaskPM("nuxt-install",!0,"module-install:"+n.data.uid,s=>{c(s,"nuxt_npm_dependent_wait_install")}),n.data.wait_install.includes("composer_dependent_wait_install")&&l.addTask("composer.update",!0,"module-install:"+n.data.uid,s=>{c(s,"composer_dependent_wait_install")})}else n.code==0&&(m({type:"error",message:n.msg}),a.dialog.common=!1)}).finally(()=>{a.loading.common=!1,a.common.disableHmr=!0,f()})},c=(e,o)=>{e==k.Success?(a.common.waitInstallDepend=a.common.waitInstallDepend.filter(t=>t!=o),a.common.waitInstallDepend.length==0&&(a.common.dependInstallState="success")):(p().toggle(!0),a.common.dependInstallState="fail"),f()},H=(e=!1)=>{if(a.loading.common=!0,a.common.disableHmr=!0,e){const o={};for(const t in a.common.disableDependConflict)a.common.disableDependConflict[t].solution=="delete"&&(typeof o[a.common.disableDependConflict[t].env]>"u"&&(o[a.common.disableDependConflict[t].env]=[]),o[a.common.disableDependConflict[t].env].push(a.common.disableDependConflict[t].depend));a.common.disableParams.confirmConflict=1,a.common.disableParams.dependConflictSolution=o}I(a.common.disableParams).then(()=>{m({type:"success",message:i.global.t("module.The operation succeeds Please clear the system cache and refresh the browser ~")}),a.dialog.common=!1,f()}).catch(o=>{if(o.code==-1){if(a.dialog.common=!0,a.common.dialogTitle=i.global.t("module.Deal with conflict"),a.common.type="disableConfirmConflict",a.common.disableDependConflict=o.data.dependConflict,o.data.conflictFile&&o.data.conflictFile.length){const t=[];for(const n in o.data.conflictFile)t.push({file:o.data.conflictFile[n]});a.common.disableConflictFile=t}}else if(o.code==-2){a.dialog.common=!0;const t={type:"disable",commands:o.data.wait_install};a.common.uid=a.goodsInfo.uid,M(t),f()}else o.code==-3?g(a.goodsInfo.uid,a.goodsInfo.purchased):m({type:"error",message:o.msg})}).finally(()=>{a.loading.common=!1,a.common.disableHmr=!0})},q=e=>{a.loading.common=!0,I({uid:e,state:1}).then(()=>{a.dialog.common=!0,r("init"),a.common.dialogTitle=i.global.t("Enable"),T(e,0),a.dialog.goodsInfo=!1}).catch(o=>{m({type:"error",message:o.msg})})},u=e=>{const o=w();return e.code==301||e.code==408?(o.removeToken(),a.dialog.baAccount=!0,!0):!1},y=e=>a.table.onlyLocal?e.filter(o=>o.state>d.UNINSTALLED):e,M=e=>{if(e.type=="disable"){a.dialog.common=!0,a.common.type="done",a.common.dialogTitle=i.global.t("module.Wait for dependent installation"),a.common.moduleState=d.DISABLE,a.common.dependInstallState="executing";const o=p();e.commands.forEach(t=>{a.common.waitInstallDepend.push(t.type),t.pm?o.addTaskPM(t.command,!0,"",n=>{c(n,t.type)}):o.addTask(t.command,!0,"",n=>{c(n,t.type)})})}},G=e=>e.nickname+"（"+(e.email||e.mobile||"ID:"+e.id)+"）",Y=(e,o)=>typeof e>"u"||typeof o>"u"?"-":o==0?parseInt(e.toString())+i.global.t("module.Points"):"￥"+e,O=e=>{switch(e){case d.INSTALLED:return{type:"",text:i.global.t("module.installed")};case d.WAIT_INSTALL:return{type:"success",text:i.global.t("module.Wait for installation")};case d.CONFLICT_PENDING:return{type:"danger",text:i.global.t("module.Conflict pending")};case d.DEPENDENT_WAIT_INSTALL:return{type:"warning",text:i.global.t("module.Dependency to be installed")};case d.DISABLE:return{type:"warning",text:i.global.t("Disable")};default:return{type:"info",text:i.global.t("Unknown")}}};export{g as a,f as b,Y as c,H as d,T as e,R as f,F as g,q as h,v as i,u as l,d as m,V as o,G as s};
