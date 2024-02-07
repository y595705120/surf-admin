import{c as R,r as a,v as u,n as p,b as L,w as A,u as D,x as e}from"./index-a4f58e3c.js";import{ah as m,ai as E,J as d,aj as I,ak as T}from"./vue-5a2488fc.js";const x=function(i="shade",t){const r=document.querySelector(".layout-container"),o=document.createElement("div");o.setAttribute("class","ba-layout-shade "+i),r.appendChild(o),R(o,"click",()=>l(t))},l=function(i=()=>{}){const t=document.querySelector(".ba-layout-shade");t&&t.remove(),i()},P=async i=>{try{const t=await a.push(i);m(t,E.aborted)?d({message:u.global.t("utils.Navigation failed, navigation guard intercepted!"),type:"error"}):m(t,E.duplicated)&&d({message:u.global.t("utils.Navigation failed, it is at the navigation target position!"),type:"warning"})}catch(t){d({message:u.global.t("utils.Navigation failed, invalid route!"),type:"error"}),console.error(t)}},O=i=>{var _,n;const t=[];a.getRoutes().forEach(s=>{s.path&&t.push(s.path)});let o=!1;for(const s in i){if(((_=i[s].meta)==null?void 0:_.menu_type)=="tab"&&t.indexOf(i[s].path)!==-1)return i[s];if(i[s].children&&((n=i[s].children)!=null&&n.length)&&(o=O(i[s].children),o))return o}return o},F=i=>{var r;switch((r=i.meta)==null?void 0:r.menu_type){case"iframe":case"tab":P({path:i.path});break;case"link":window.open(i.path,"_blank");break;default:d({message:u.global.t("utils.Navigation failed, the menu type is unrecognized!"),type:"error"});break}const t=D();t.layout.shrink&&l(()=>{t.setLayout("menuCollapse",!0)})},N=i=>{w(Object.assign({"/src/views/backend/activity/teamaward/index.vue":()=>e(()=>import("./index-743af221.js"),["assets/index-743af221.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-d933b841.js","assets/index-167b3218.js"]),"/src/views/backend/activity/teamaward/popupForm.vue":()=>e(()=>import("./popupForm-b1bcab66.js"),["assets/popupForm-b1bcab66.js","assets/popupForm.vue_vue_type_script_setup_true_lang-d933b841.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/activity/turntable/index.vue":()=>e(()=>import("./index-e77f8839.js"),["assets/index-e77f8839.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-bb421553.js","assets/index-167b3218.js"]),"/src/views/backend/activity/turntable/popupForm.vue":()=>e(()=>import("./popupForm-c73e54a4.js"),["assets/popupForm-c73e54a4.js","assets/popupForm.vue_vue_type_script_setup_true_lang-bb421553.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/activity/userinvitamoney/index.vue":()=>e(()=>import("./index-50850dd7.js"),["assets/index-50850dd7.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-02275229.js","assets/index-167b3218.js"]),"/src/views/backend/activity/userinvitamoney/popupForm.vue":()=>e(()=>import("./popupForm-44c1f3a2.js"),["assets/popupForm-44c1f3a2.js","assets/popupForm.vue_vue_type_script_setup_true_lang-02275229.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/auth/admin/countAdminData.vue":()=>e(()=>import("./countAdminData-2a8698d3.js"),["assets/countAdminData-2a8698d3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/admin-a37c7656.js"]),"/src/views/backend/auth/admin/countData.vue":()=>e(()=>import("./countData-61cc1f7a.js"),["assets/countData-61cc1f7a.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/admin-a37c7656.js"]),"/src/views/backend/auth/admin/dayData.vue":()=>e(()=>import("./dayData-48c07be8.js"),["assets/dayData-48c07be8.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/admin-a37c7656.js"]),"/src/views/backend/auth/admin/googleInfo.vue":()=>e(()=>import("./googleInfo-53cddf09.js"),["assets/googleInfo-53cddf09.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js"]),"/src/views/backend/auth/admin/index.vue":()=>e(()=>import("./index-8ed7a23a.js"),["assets/index-8ed7a23a.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-e34781d0.js","assets/validate-d21f834d.js","assets/index-167b3218.js","assets/admin-a37c7656.js","assets/rateForm-5d1976cf.js","assets/googleInfo-53cddf09.js","assets/countData-61cc1f7a.js","assets/dayData-48c07be8.js","assets/countAdminData-2a8698d3.js"]),"/src/views/backend/auth/admin/popupForm.vue":()=>e(()=>import("./popupForm-e34781d0.js"),["assets/popupForm-e34781d0.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/validate-d21f834d.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/auth/admin/rateForm.vue":()=>e(()=>import("./rateForm-5d1976cf.js"),["assets/rateForm-5d1976cf.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/validate-d21f834d.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/auth/adminLog/index.vue":()=>e(()=>import("./index-d45171c6.js"),["assets/index-d45171c6.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/info-74ad7bce.js"]),"/src/views/backend/auth/adminLog/info.vue":()=>e(()=>import("./info-74ad7bce.js"),["assets/info-74ad7bce.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js"]),"/src/views/backend/auth/bill/index.vue":()=>e(()=>import("./index-dd14a886.js"),["assets/index-dd14a886.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js"]),"/src/views/backend/auth/group/index.vue":()=>e(()=>import("./index-577086da.js"),["assets/index-577086da.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-2a91dd27.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/auth/group/popupForm.vue":()=>e(()=>import("./popupForm-2a91dd27.js"),["assets/popupForm-2a91dd27.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/auth/rule/index.vue":()=>e(()=>import("./index-8e70bf72.js"),["assets/index-8e70bf72.js","assets/popupForm.vue_vue_type_script_setup_true_lang-82327858.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/auth/rule/popupForm.vue":()=>e(()=>import("./popupForm-24b67070.js"),["assets/popupForm-24b67070.js","assets/popupForm.vue_vue_type_script_setup_true_lang-82327858.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/content/article/index.vue":()=>e(()=>import("./index-491c9659.js"),["assets/index-491c9659.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-07a544ea.js","assets/index-167b3218.js","assets/validate-d21f834d.js","assets/langInput-db5239d9.js","assets/langImage-4a34f92b.js"]),"/src/views/backend/content/article/popupForm.vue":()=>e(()=>import("./popupForm-503f3899.js"),["assets/popupForm-503f3899.js","assets/popupForm.vue_vue_type_script_setup_true_lang-07a544ea.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js","assets/langInput-db5239d9.js","assets/langImage-4a34f92b.js"]),"/src/views/backend/content/images/index.vue":()=>e(()=>import("./index-986bc81f.js"),["assets/index-986bc81f.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4c26b2a0.js","assets/index-167b3218.js","assets/validate-d21f834d.js","assets/langImage-4a34f92b.js"]),"/src/views/backend/content/images/popupForm.vue":()=>e(()=>import("./popupForm-bba0a5d0.js"),["assets/popupForm-bba0a5d0.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4c26b2a0.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js","assets/langImage-4a34f92b.js"]),"/src/views/backend/content/notice/index.vue":()=>e(()=>import("./index-9fe11d64.js"),["assets/index-9fe11d64.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-1229fe6e.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/content/notice/popupForm.vue":()=>e(()=>import("./popupForm-63d4d9a6.js"),["assets/popupForm-63d4d9a6.js","assets/popupForm.vue_vue_type_script_setup_true_lang-1229fe6e.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/crud/design.vue":()=>e(()=>import("./design-dea7d393.js"),["assets/design-dea7d393.js","assets/vue-5a2488fc.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/index-f6e7dd17.js","assets/index-167b3218.js","assets/crud-1f6adee3.js","assets/validate-d21f834d.js"]),"/src/views/backend/crud/index.vue":()=>e(()=>import("./index-aecc4a88.js"),["assets/index-aecc4a88.js","assets/start-c92eac27.js","assets/vue-5a2488fc.js","assets/crud-1f6adee3.js","assets/index-a4f58e3c.js","assets/validate-d21f834d.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/index-167b3218.js","assets/log.vue_vue_type_style_index_0_lang-59e542f4.js","assets/design-dea7d393.js"]),"/src/views/backend/crud/log.vue":()=>e(()=>import("./log-a021d3fe.js"),["assets/log-a021d3fe.js","assets/log.vue_vue_type_style_index_0_lang-59e542f4.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/crud-1f6adee3.js","assets/validate-d21f834d.js"]),"/src/views/backend/crud/start.vue":()=>e(()=>import("./start-c92eac27.js"),["assets/start-c92eac27.js","assets/vue-5a2488fc.js","assets/crud-1f6adee3.js","assets/index-a4f58e3c.js","assets/validate-d21f834d.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/index-167b3218.js","assets/log.vue_vue_type_style_index_0_lang-59e542f4.js"]),"/src/views/backend/dashboard.vue":()=>e(()=>import("./dashboard-c9f720e3.js"),["assets/dashboard-c9f720e3.js","assets/echarts-80671391.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/examples/export/index.vue":()=>e(()=>import("./index-f2705d80.js"),["assets/index-f2705d80.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-26c7f367.js","assets/index-167b3218.js","assets/validate-d21f834d.js","assets/file-download-cdff80a5.js"]),"/src/views/backend/examples/export/popupForm.vue":()=>e(()=>import("./popupForm-d05d4d78.js"),["assets/popupForm-d05d4d78.js","assets/popupForm.vue_vue_type_script_setup_true_lang-26c7f367.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/finance/recharge/index.vue":()=>e(()=>import("./index-553527fc.js"),["assets/index-553527fc.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/finance/withdraw/index.vue":()=>e(()=>import("./index-87498f4c.js"),["assets/index-87498f4c.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-0b5aa8a4.js","assets/index-167b3218.js","assets/validate-d21f834d.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/finance/withdraw/popupForm.vue":()=>e(()=>import("./popupForm-73ca78d0.js"),["assets/popupForm-73ca78d0.js","assets/popupForm.vue_vue_type_script_setup_true_lang-0b5aa8a4.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/game/category/index.vue":()=>e(()=>import("./index-9f7ad0f8.js"),["assets/index-9f7ad0f8.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-125277b5.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/game/category/popupForm.vue":()=>e(()=>import("./popupForm-78cc6153.js"),["assets/popupForm-78cc6153.js","assets/popupForm.vue_vue_type_script_setup_true_lang-125277b5.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/game/games/index.vue":()=>e(()=>import("./index-8dc2a3df.js"),["assets/index-8dc2a3df.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-b2253a95.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/game/games/popupForm.vue":()=>e(()=>import("./popupForm-9bc2c2eb.js"),["assets/popupForm-9bc2c2eb.js","assets/popupForm.vue_vue_type_script_setup_true_lang-b2253a95.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/login.vue":()=>e(()=>import("./login-acef9b6a.js"),["assets/login-acef9b6a.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-62a01ec6.js","assets/validate-d21f834d.js"]),"/src/views/backend/module/components/baAccount.vue":()=>e(()=>import("./baAccount-e8a767e2.js"),["assets/baAccount-e8a767e2.js","assets/vue-5a2488fc.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js","assets/store-594fffe3.js","assets/storage-19836658.js"]),"/src/views/backend/module/components/buy.vue":()=>e(()=>import("./buy-5818cb00.js"),["assets/buy-5818cb00.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js"]),"/src/views/backend/module/components/commonDialog.vue":()=>e(()=>import("./commonDialog-a3dfe8b9.js"),["assets/commonDialog-a3dfe8b9.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/installConflict-5cb8cc1e.js","assets/index-f28bb21c.js","assets/commonDone-d2ef97c1.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/uploadInstall-7165339a.js","assets/confirmFileConflict-617aa9e6.js"]),"/src/views/backend/module/components/commonDone.vue":()=>e(()=>import("./commonDone-d2ef97c1.js"),["assets/commonDone-d2ef97c1.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/module/components/confirmFileConflict.vue":()=>e(()=>import("./confirmFileConflict-617aa9e6.js"),["assets/confirmFileConflict-617aa9e6.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js"]),"/src/views/backend/module/components/goodsInfo.vue":()=>e(()=>import("./goodsInfo-ec36a6f7.js"),["assets/goodsInfo-ec36a6f7.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js","assets/buy-5818cb00.js","assets/pay-51a2ca54.js"]),"/src/views/backend/module/components/installConflict.vue":()=>e(()=>import("./installConflict-5cb8cc1e.js"),["assets/installConflict-5cb8cc1e.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js"]),"/src/views/backend/module/components/pay.vue":()=>e(()=>import("./pay-51a2ca54.js"),["assets/pay-51a2ca54.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js"]),"/src/views/backend/module/components/tableHeader.vue":()=>e(()=>import("./tableHeader-9d2b0f02.js"),["assets/tableHeader-9d2b0f02.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js"]),"/src/views/backend/module/components/tabs.vue":()=>e(()=>import("./tabs-1cd7388f.js"),["assets/tabs-1cd7388f.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js"]),"/src/views/backend/module/components/uploadInstall.vue":()=>e(()=>import("./uploadInstall-7165339a.js"),["assets/uploadInstall-7165339a.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/store-594fffe3.js","assets/storage-19836658.js","assets/index-f28bb21c.js"]),"/src/views/backend/module/index.vue":()=>e(()=>import("./index-5ae76f75.js"),["assets/index-5ae76f75.js","assets/store-594fffe3.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/storage-19836658.js","assets/index-f28bb21c.js","assets/tableHeader-9d2b0f02.js","assets/baAccount-e8a767e2.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js","assets/tabs-1cd7388f.js","assets/goodsInfo-ec36a6f7.js","assets/buy-5818cb00.js","assets/pay-51a2ca54.js","assets/commonDialog-a3dfe8b9.js","assets/installConflict-5cb8cc1e.js","assets/commonDone-d2ef97c1.js","assets/uploadInstall-7165339a.js","assets/confirmFileConflict-617aa9e6.js"]),"/src/views/backend/routine/adminInfo.vue":()=>e(()=>import("./adminInfo-8848faf6.js"),["assets/adminInfo-8848faf6.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/validate-d21f834d.js"]),"/src/views/backend/routine/attachment/index.vue":()=>e(()=>import("./index-5f43c399.js"),["assets/index-5f43c399.js","assets/popupForm-629531e3.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-f6e7dd17.js","assets/index-c6449983.js"]),"/src/views/backend/routine/attachment/popupForm.vue":()=>e(()=>import("./popupForm-629531e3.js"),["assets/popupForm-629531e3.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-f6e7dd17.js"]),"/src/views/backend/routine/config/add.vue":()=>e(()=>import("./add-0d928e92.js"),["assets/add-0d928e92.js","assets/add.vue_vue_type_script_setup_true_lang-995784bd.js","assets/vue-5a2488fc.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/routine/config/index.vue":()=>e(()=>import("./index-c8363069.js"),["assets/index-c8363069.js","assets/vue-5a2488fc.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/index-f6e7dd17.js","assets/add.vue_vue_type_script_setup_true_lang-995784bd.js","assets/validate-d21f834d.js"]),"/src/views/backend/routine/dataexport/index.vue":()=>e(()=>import("./index-acd942db.js"),["assets/index-acd942db.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-5ba05a81.js","assets/index-167b3218.js","assets/validate-d21f834d.js","assets/dataexport-ba86c2e0.js"]),"/src/views/backend/routine/dataexport/popupForm.vue":()=>e(()=>import("./popupForm-5ba05a81.js"),["assets/popupForm-5ba05a81.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js","assets/dataexport-ba86c2e0.js"]),"/src/views/backend/routine/dataexport/taskControl.vue":()=>e(()=>import("./taskControl-b640b78b.js"),["assets/taskControl-b640b78b.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/dataexport-ba86c2e0.js"]),"/src/views/backend/routine/paylists/index.vue":()=>e(()=>import("./index-6710c05a.js"),["assets/index-6710c05a.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-fea639f3.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/routine/paylists/popupForm.vue":()=>e(()=>import("./popupForm-6f2b5ad4.js"),["assets/popupForm-6f2b5ad4.js","assets/popupForm.vue_vue_type_script_setup_true_lang-fea639f3.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/security/dataRecycle/index.vue":()=>e(()=>import("./index-0bb30df5.js"),["assets/index-0bb30df5.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-71de0ede.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/security/dataRecycle/popupForm.vue":()=>e(()=>import("./popupForm-71de0ede.js"),["assets/popupForm-71de0ede.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/security/dataRecycleLog/index.vue":()=>e(()=>import("./index-7e34d0aa.js"),["assets/index-7e34d0aa.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/info-ed93ea2e.js"]),"/src/views/backend/security/dataRecycleLog/info.vue":()=>e(()=>import("./info-ed93ea2e.js").then(_=>_.a),["assets/info-ed93ea2e.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js"]),"/src/views/backend/security/sensitiveData/index.vue":()=>e(()=>import("./index-803138e2.js"),["assets/index-803138e2.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-f47c19ce.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/security/sensitiveData/popupForm.vue":()=>e(()=>import("./popupForm-f47c19ce.js"),["assets/popupForm-f47c19ce.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/security/sensitiveDataLog/index.vue":()=>e(()=>import("./index-f4074671.js"),["assets/index-f4074671.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/info-52d7cd9b.js"]),"/src/views/backend/security/sensitiveDataLog/info.vue":()=>e(()=>import("./info-52d7cd9b.js").then(_=>_.a),["assets/info-52d7cd9b.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js"]),"/src/views/backend/service/batchemail/index.vue":()=>e(()=>import("./index-84910b69.js"),["assets/index-84910b69.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-87c2ee22.js","assets/index-167b3218.js","assets/langInput-db5239d9.js"]),"/src/views/backend/service/batchemail/popupForm.vue":()=>e(()=>import("./popupForm-06862bde.js"),["assets/popupForm-06862bde.js","assets/popupForm.vue_vue_type_script_setup_true_lang-87c2ee22.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/langInput-db5239d9.js"]),"/src/views/backend/service/emaildata/index.vue":()=>e(()=>import("./index-87e467e3.js"),["assets/index-87e467e3.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-eabb3e3b.js","assets/index-167b3218.js","assets/langInput-db5239d9.js"]),"/src/views/backend/service/emaildata/popupForm.vue":()=>e(()=>import("./popupForm-79f537b2.js"),["assets/popupForm-79f537b2.js","assets/popupForm.vue_vue_type_script_setup_true_lang-eabb3e3b.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/langInput-db5239d9.js"]),"/src/views/backend/user/agentData/index.vue":()=>e(()=>import("./index-132345e6.js"),["assets/index-132345e6.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/avatarlists/index.vue":()=>e(()=>import("./index-fab9b785.js"),["assets/index-fab9b785.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-227fb60d.js","assets/index-167b3218.js"]),"/src/views/backend/user/avatarlists/popupForm.vue":()=>e(()=>import("./popupForm-3039dada.js"),["assets/popupForm-3039dada.js","assets/popupForm.vue_vue_type_script_setup_true_lang-227fb60d.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/betlog/index.vue":()=>e(()=>import("./index-c76ab36e.js"),["assets/index-c76ab36e.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js","assets/file-download-cdff80a5.js"]),"/src/views/backend/user/coding/index.vue":()=>e(()=>import("./index-a38d4aca.js"),["assets/index-a38d4aca.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/info.vue_vue_type_script_setup_true_lang-c82b7c51.js","assets/infoTable.vue_vue_type_script_setup_true_lang-07f54cb0.js","assets/file-download-cdff80a5.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/coding/info.vue":()=>e(()=>import("./info-552f08e0.js"),["assets/info-552f08e0.js","assets/info.vue_vue_type_script_setup_true_lang-c82b7c51.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/infoTable.vue_vue_type_script_setup_true_lang-07f54cb0.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/file-download-cdff80a5.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/coding/infoTable.vue":()=>e(()=>import("./infoTable-33cc26e1.js"),["assets/infoTable-33cc26e1.js","assets/infoTable.vue_vue_type_script_setup_true_lang-07f54cb0.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/file-download-cdff80a5.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/ecology/index.vue":()=>e(()=>import("./index-4f235e54.js"),["assets/index-4f235e54.js","assets/r_data.vue_vue_type_script_setup_true_lang-f89cf979.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/n_r_data.vue_vue_type_script_setup_true_lang-e5c2ee13.js","assets/new_data.vue_vue_type_script_setup_true_lang-b879678d.js"]),"/src/views/backend/user/ecology/n_r_data.vue":()=>e(()=>import("./n_r_data-07089209.js"),["assets/n_r_data-07089209.js","assets/n_r_data.vue_vue_type_script_setup_true_lang-e5c2ee13.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/ecology/new_data.vue":()=>e(()=>import("./new_data-f0c0f12b.js"),["assets/new_data-f0c0f12b.js","assets/new_data.vue_vue_type_script_setup_true_lang-b879678d.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/ecology/r_data.vue":()=>e(()=>import("./r_data-c99671ca.js"),["assets/r_data-c99671ca.js","assets/r_data.vue_vue_type_script_setup_true_lang-f89cf979.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/gamedaylog/index.vue":()=>e(()=>import("./index-e5d67e2c.js"),["assets/index-e5d67e2c.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/group/index.vue":()=>e(()=>import("./index-7b41f9c3.js"),["assets/index-7b41f9c3.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-66383ddd.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/group/popupForm.vue":()=>e(()=>import("./popupForm-66383ddd.js"),["assets/popupForm-66383ddd.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/moneyList/index.vue":()=>e(()=>import("./index-dbfdaf42.js"),["assets/index-dbfdaf42.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js","assets/file-download-cdff80a5.js"]),"/src/views/backend/user/moneyLog/index.vue":()=>e(()=>import("./index-a621f4c1.js"),["assets/index-a621f4c1.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-0c828e6c.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/moneyLog/popupForm.vue":()=>e(()=>import("./popupForm-0c828e6c.js").then(_=>_.p),["assets/popupForm-0c828e6c.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/reward/index.vue":()=>e(()=>import("./index-df1052c8.js"),["assets/index-df1052c8.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/rule/index.vue":()=>e(()=>import("./index-bca67b45.js"),["assets/index-bca67b45.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-9e98c961.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/rule/popupForm.vue":()=>e(()=>import("./popupForm-9e98c961.js"),["assets/popupForm-9e98c961.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/scoreLog/index.vue":()=>e(()=>import("./index-4e13e4fa.js"),["assets/index-4e13e4fa.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm-3d0ffb46.js","assets/index-167b3218.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/scoreLog/popupForm.vue":()=>e(()=>import("./popupForm-3d0ffb46.js").then(_=>_.p),["assets/popupForm-3d0ffb46.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/validate-d21f834d.js"]),"/src/views/backend/user/user/addUser.vue":()=>e(()=>import("./addUser-97a26ea9.js"),["assets/addUser-97a26ea9.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/user/baoList.vue":()=>e(()=>import("./baoList-3ae31a7c.js"),["assets/baoList-3ae31a7c.js","assets/baoList.vue_vue_type_script_setup_true_lang-6ef99f2f.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/user/index.vue":()=>e(()=>import("./index-e4b73bcd.js"),["assets/index-e4b73bcd.js","assets/addUser-97a26ea9.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/popupForm-aa2850e6.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js","assets/userBalance-f9b77613.js","assets/userInvite-b8b86ec8.js","assets/file-download-cdff80a5.js","assets/sendBao-6dff7dd4.js","assets/baoList.vue_vue_type_script_setup_true_lang-6ef99f2f.js"]),"/src/views/backend/user/user/popupForm.vue":()=>e(()=>import("./popupForm-aa2850e6.js"),["assets/popupForm-aa2850e6.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/user/sendBao.vue":()=>e(()=>import("./sendBao-6dff7dd4.js"),["assets/sendBao-6dff7dd4.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/baoList.vue_vue_type_script_setup_true_lang-6ef99f2f.js","assets/index-c6449983.js","assets/index-f6e7dd17.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/user/userBalance.vue":()=>e(()=>import("./userBalance-f9b77613.js"),["assets/userBalance-f9b77613.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/user/userInvite.vue":()=>e(()=>import("./userInvite-b8b86ec8.js"),["assets/userInvite-b8b86ec8.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/userInvitaCount/index.vue":()=>e(()=>import("./index-4fc5c42c.js"),["assets/index-4fc5c42c.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/userbalancelog/index.vue":()=>e(()=>import("./index-4a5a3388.js"),["assets/index-4a5a3388.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/usercount/index.vue":()=>e(()=>import("./index-10b25031.js"),["assets/index-10b25031.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"]),"/src/views/backend/user/vipconfig/index.vue":()=>e(()=>import("./index-a2a38e24.js"),["assets/index-a2a38e24.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/popupForm.vue_vue_type_script_setup_true_lang-239b006a.js","assets/index-167b3218.js"]),"/src/views/backend/user/vipconfig/popupForm.vue":()=>e(()=>import("./popupForm-3d90c395.js"),["assets/popupForm-3d90c395.js","assets/popupForm.vue_vue_type_script_setup_true_lang-239b006a.js","assets/vue-5a2488fc.js","assets/index-a4f58e3c.js","assets/index-167b3218.js","assets/index-c6449983.js","assets/index-f6e7dd17.js"]),"/src/views/backend/user/winLose/index.vue":()=>e(()=>import("./index-75af4a8a.js"),["assets/index-75af4a8a.js","assets/index-c6449983.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js","assets/index-f6e7dd17.js","assets/userInfo.vue_vue_type_script_setup_true_lang-7d28b576.js","assets/sass.default-3d7d7514.js"])}),i,p.name);const r="/"+p.name+"/",o=L();o.setTabsViewRoutes(b(i,r)),o.fillAuthNode(V(i,r))},b=(i,t="/",r=["menu","menu_dir"])=>{const o=[];for(const _ in i){if(i[_].extend=="add_rules_only"||!r.includes(i[_].type)||i[_].type=="menu_dir"&&i[_].children&&!i[_].children.length||["route","menu","nav_user_menu","nav"].includes(i[_].type)&&(i[_].menu_type=="tab"&&!i[_].component||["link","iframe"].includes(i[_].menu_type)&&!i[_].url))continue;const n=["link","iframe"].includes(i[_].menu_type)?i[_].url:t+i[_].path;let s=[];i[_].children&&i[_].children.length>0&&(s=b(i[_].children,t,r)),o.push({path:n,name:i[_].name,component:i[_].component,meta:{id:i[_].id,title:i[_].title,icon:i[_].icon,keepalive:i[_].keepalive,menu_type:i[_].menu_type,type:i[_].type},children:s})}return o},V=(i,t="/")=>{const r=new Map([]);return k(i,r,t,t),r},k=(i,t,r="/",o="/")=>{const _=[];for(const n in i)i[n].type=="button"&&_.push(r+i[n].name),i[n].children&&i[n].children.length>0&&k(i[n].children,t,r,r+i[n].name);_&&_.length>0&&t.set(o,_)},w=(i,t,r,o=!1)=>{for(const _ in t)t[_].extend!="add_menu_only"&&((t[_].menu_type=="tab"&&i[t[_].component]||t[_].menu_type=="iframe")&&h(i,t[_],r,o),t[_].children&&t[_].children.length>0&&w(i,t[_].children,r,o))},h=(i,t,r,o)=>{let _="",n;if(t.menu_type=="iframe"?(_=(A()?"/admin":"/user")+"/iframe/"+encodeURIComponent(t.url),n=()=>e(()=>import("./iframe-a6e9b0f2.js"),["assets/iframe-a6e9b0f2.js","assets/layout-6c43bb14.js","assets/index-a4f58e3c.js","assets/vue-5a2488fc.js"])):(_=r?t.path:"/"+t.path,n=i[t.component]),t.menu_type=="tab"&&o){const c=g(t.name);if(c.length){for(const v in c)if(a.hasRoute(c[v])){r=c[v];break}}}const s={path:_,name:t.name,component:n,meta:{title:t.title,extend:t.extend,icon:t.icon,keepalive:t.keepalive,menu_type:t.menu_type,type:t.type,url:t.url,addtab:!0}};r?a.addRoute(r,s):a.addRoute(s)},g=i=>{const t=I(i.split("/")),r=[],o=[];for(const _ in t)r.push(t[_]),parseInt(_)!=t.length-1&&o.push(r.join("/"));return T(o)};export{l as c,O as g,N as h,F as o,P as r,x as s};
