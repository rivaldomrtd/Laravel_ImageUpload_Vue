import{l as w,j as k,m as x,b as s,o as m,g as b,p as y,u as v,c as i,w as d,a as t,H as V,t as $,i as c,d as r,L as B,e as p,n as C,f as L}from"./app.29f3d902.js";import{_ as U,a as N}from"./AppWelcome.2802642b.js";import{_ as f,a as _,b as g}from"./TextInput.57b07666.js";import{_ as R}from"./PrimaryButton.7e931184.js";import"./NavLink.71323b58.js";const S=["value"],q={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const u=l,n=w({get(){return u.checked},set(a){e("update:checked",a)}});return(a,o)=>k((m(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>y(n)?n.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,S)),[[x,s(n)]])}},F={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],j={class:"mt-4"},D={class:"block mt-4"},H={class:"flex items-center"},M=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),z={class:"flex items-center justify-end mt-4"},J={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=v({username:"",password:"",remember:!1}),u=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,a)=>(m(),i(U,null,{default:d(()=>[t(N,null,{default:d(()=>[t(s(V),{title:"Log in"}),l.status?(m(),b("div",F,$(l.status),1)):c("",!0),r("form",{onSubmit:L(u,["prevent"])},[r("div",null,[t(f,{for:"username",value:"Username"}),t(_,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:s(e).username,"onUpdate:modelValue":a[0]||(a[0]=o=>s(e).username=o),required:"",autocomplete:"username"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",j,[t(f,{for:"password",value:"Password"}),t(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",D,[r("label",H,[t(q,{name:"remember",checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=o=>s(e).remember=o)},null,8,["checked"]),M])]),r("div",z,[l.canResetPassword?(m(),i(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:d(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),t(R,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[p(" Log in ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})]),_:1}))}};export{J as default};