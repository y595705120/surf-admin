import{s as o}from"./store-79386fb6.js";import{g as I,m as D,c as v,i as B}from"./index-63b5471f.js";import{H as L,_ as S}from"./index-dcab27dc.js";import{h as $,q as n,a8 as z,o as s,k as t,$ as U,z as a,O as r,P as i,Z as p,Y as u,m as l,p as g,a5 as m,W as c,V as E}from"./vue-5a2488fc.js";import"./storage-19836658.js";const q=["onClick"],A={class:"goods-footer"},F={key:0,class:"goods-tag"},H={class:"goods-title"},O={class:"goods-data"},P={class:"download-count"},W={key:0,class:"goods-price"},Y={class:"original-price"},Z={class:"current-price"},j={key:1,class:"goods-price"},G=$({__name:"tabs",setup(J){const h=()=>{B()};return(b,y)=>{const k=n("el-image"),f=n("el-tag"),T=n("Icon"),V=n("el-empty"),w=n("el-tab-pane"),x=n("el-tabs"),C=z("loading");return s(),t("div",null,[U((s(),r(x,{"element-loading-text":b.$t("module.Loading"),modelValue:a(o).table.params.activeTab,"onUpdate:modelValue":y[0]||(y[0]=d=>a(o).table.params.activeTab=d),type:"border-card",class:"store-tabs",onTabChange:h},{default:i(()=>[(s(!0),t(p,null,u(a(o).table.category,d=>(s(),r(w,{name:d.id.toString(),key:d.id,label:d.name,class:"store-tab-pane"},{default:i(()=>[a(o).table.modules[a(o).table.params.activeTab]&&a(o).table.modules[a(o).table.params.activeTab].length>0?(s(!0),t(p,{key:0},u(a(o).table.modules[a(o).table.params.activeTab],e=>(s(),t("div",{class:"goods",key:e.uid},[l("div",{onClick:_=>a(I)(e.uid),class:"goods-item suspension"},[g(k,{loading:"lazy",fit:"contain",class:"goods-img",src:e.logo?e.logo:a(L)("/static/images/local-module-logo.png")},null,8,["src"]),l("div",A,[e.tags&&e.tags.length>0?(s(),t("div",F,[(s(!0),t(p,null,u(e.tags,(_,N)=>(s(),r(f,{type:_.type,key:N},{default:i(()=>[m(c(_.name),1)]),_:2},1032,["type"]))),128))])):E("",!0),l("div",H,c(e.title),1),l("div",O,[l("span",P,[g(T,{name:"fa fa-download",color:"#c0c4cc",size:"13"}),m(" "+c(e.downloads?e.downloads:"-"),1)]),e.state===a(D).UNINSTALLED?(s(),t("span",W,[l("span",Y,c(a(v)(e.original_price,e.currency_select)),1),l("span",Z,c(a(v)(e.present_price,e.currency_select)),1)])):(s(),t("div",j,[g(f,{effect:"dark",type:e.stateTag.type},{default:i(()=>[m(c(e.stateTag.text),1)]),_:2},1032,["type"])]))])])],8,q)]))),128)):(s(),r(V,{key:1,class:"modules-empty",description:b.$t("module.No more")},null,8,["description"]))]),_:2},1032,["name","label"]))),128))]),_:1},8,["element-loading-text","modelValue"])),[[C,a(o).loading.table]])])}}});const ee=S(G,[["__scopeId","data-v-2df99a09"]]);export{ee as default};
