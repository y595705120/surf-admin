import{h as S,w as G,r as A,q as d,a8 as C,o as m,k as v,p as t,P as n,z as o,$ as w,m as r,W as u,O as z,a5 as f,as as K}from"./vue-5a2488fc.js";import{F as $}from"./index-404d6f90.js";import{b as _}from"./validate-d0780182.js";import{e as L,m as B,_ as M}from"./index-dcab27dc.js";import{u as O,s as g,b as E,c as T}from"./store-79386fb6.js";import"./index-a4c9ce56.js";import"./index-f3986603.js";import"./storage-19836658.js";const W={key:0,class:"userinfo"},j={class:"user-avatar-box"},H=["src"],J={class:"username"},Q={class:"user-integral"},X={class:"userinfo-buttons"},Y={key:1,class:"ba-login"},Z={class:"ba-title"},ee=["src"],oe={target:"_blank",class:"ba-account-register",href:"https://uni.buildadmin.com/user/login?type=register",rel:"noopener noreferrer"},ae=S({__name:"baAccount",setup(te){const{t:s}=L(),i=O(),b=G(),a=A({loading:!1,form:{tab:"login",username:"",password:"",captcha:"",captchaId:B(),keep:!1}}),U=A({username:[_({name:"required",title:s("module.User name")})],captcha:[_({name:"required",title:s("module.Verification Code")})],password:[_({name:"required",title:s("module.Password")}),_({name:"password"})]}),F=c=>{window.open(c)},y=()=>{b.value&&b.value.validate(c=>{c?(a.loading=!0,T("post",a.form).then(e=>{console.log(e.data.userInfo,"12312"),g.dialog.baAccount=!1,a.loading=!1,i.dataFill(e.data.userInfo)}).catch(()=>{a.loading=!1,h()})):h()})},h=()=>{a.form.captcha="",a.form.captchaId=B()};return(c,e)=>{const P=d("Icon"),p=d("el-button"),q=d("el-input"),k=d("el-col"),x=d("el-row"),V=d("el-form-item"),D=d("el-form"),R=d("el-dialog"),I=C("blur"),N=C("loading");return m(),v("div",null,[t(R,{modelValue:o(g).dialog.baAccount,"onUpdate:modelValue":e[7]||(e[7]=l=>o(g).dialog.baAccount=l),class:"ba-account-dialog",width:"25%",title:o(s)("module.Member information")},{default:n(()=>[o(i).token?w((m(),v("div",W,[r("div",j,[r("img",{class:"user-avatar",src:o(i).avatar,alt:""},null,8,H),t(P,{class:"user-avatar-gender",name:o(i).getGenderIcon().name,size:"14",color:o(i).getGenderIcon().color},null,8,["name","color"])]),r("p",J,u(o(i).nickname),1),r("p",Q,[r("span",null,u(c.$t("module.Integral")+" "+o(i).score),1),r("span",null,u(c.$t("module.Balance")+" "+o(i).money),1)]),r("div",X,[w((m(),z(p,{onClick:e[0]||(e[0]=l=>F("https://uni.buildadmin.com/user/account/moduleOrders")),size:"default",type:"primary"},{default:n(()=>[f(u(c.$t("module.My module")),1)]),_:1})),[[I]]),w((m(),z(p,{onClick:e[1]||(e[1]=l=>o(i).logout()),size:"default",type:"warning"},{default:n(()=>[f(u(c.$t("module.Logout login")),1)]),_:1})),[[I]])])])),[[N,o(g).loading.common]]):(m(),v("div",Y,[r("h3",Z,u(o(s)("module.Log in to the buildadmin module marketplace")),1),t(D,{onKeyup:e[6]||(e[6]=K(l=>y(),["enter"])),ref_key:"baAccountFormRef",ref:b,rules:U,class:"ba-account-login-form",model:a.form},{default:n(()=>[t($,{modelValue:a.form.username,"onUpdate:modelValue":e[2]||(e[2]=l=>a.form.username=l),type:"string",prop:"username",placeholder:o(s)("module.Please enter buildadmin account name or email"),"input-attr":{size:"large"}},null,8,["modelValue","placeholder"]),t($,{modelValue:a.form.password,"onUpdate:modelValue":e[3]||(e[3]=l=>a.form.password=l),type:"password",prop:"password",placeholder:o(s)("module.Please enter the buildadmin account password"),"input-attr":{size:"large"}},null,8,["modelValue","placeholder"]),t(V,{prop:"captcha"},{default:n(()=>[t(x,{class:"w100"},{default:n(()=>[t(k,{span:16},{default:n(()=>[t(q,{modelValue:a.form.captcha,"onUpdate:modelValue":e[4]||(e[4]=l=>a.form.captcha=l),size:"large",clearable:"",autocomplete:"off",placeholder:o(s)("module.Please enter the login verification code")},null,8,["modelValue","placeholder"])]),_:1}),t(k,{class:"captcha-box",span:8},{default:n(()=>[r("img",{onClick:h,class:"captcha-img",src:o(E)()+"&id="+a.form.captchaId},null,8,ee)]),_:1})]),_:1})]),_:1}),t(V,{class:"form-buttons"},{default:n(()=>[t(p,{onClick:e[5]||(e[5]=l=>y()),loading:a.loading,round:"",type:"primary",size:"large"},{default:n(()=>[f(u(o(s)("module.Sign in")),1)]),_:1},8,["loading"]),r("a",oe,[t(p,{round:"",plain:"",type:"info",size:"large"},{default:n(()=>[f(u(o(s)("module.Register")),1)]),_:1})])]),_:1})]),_:1},8,["rules","model"])]))]),_:1},8,["modelValue","title"])])}}});const me=M(ae,[["__scopeId","data-v-8f6334a6"]]);export{me as default};