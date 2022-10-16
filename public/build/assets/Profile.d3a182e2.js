import{_ as g}from"./AuthenticatedLayout.643c3039.js";import{a as c}from"./NavLink.71323b58.js";import{o as f,g as p,d as s,r as h,H as v,u as I,s as n,a as e,w as l,F as V,n as w,e as B,f as F}from"./app.29f3d902.js";import{b as L,_ as P,a as U}from"./TextInput.57b07666.js";import{_ as k}from"./PrimaryButton.7e931184.js";const E={},H={class:"min-h-screen flex flex-col sm:center items-center pt-6 sm:pt-0 bg-gray-100"},N={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};function T(m,t){return f(),p("div",H,[s("div",N,[h(m.$slots,"default")])])}const $=c(E,[["render",T]]),A={components:{AuthenticatedLayout:g,FormInput:$,InputError:L,InputLabel:P,TextInput:U,PrimaryButton:k,Head:v},setup(m){return{form:I({name:m.post.name,username:m.post.username,email:m.post.email})}},props:{user:Object},methods:{submit(){this.form.put(route("users.update"))}}},C=s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight",style:{"text-align":"center"}}," Profile Update ",-1),j={class:"flex items-center justify-end mt-4"};function q(m,t,S,o,z,d){const _=n("Head"),r=n("InputLabel"),u=n("TextInput"),i=n("InputError"),x=n("PrimaryButton"),b=n("FormInput"),y=n("AuthenticatedLayout");return f(),p(V,null,[e(_,{title:"Profile"}),e(y,null,{header:l(()=>[C]),default:l(()=>[e(b,null,{default:l(()=>[s("form",{onSubmit:t[3]||(t[3]=F((...a)=>d.submit&&d.submit(...a),["prevent"]))},[s("div",null,[e(r,{for:"name",value:"Name"}),e(u,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:o.form.name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.name=a),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(i,{class:"mt-2"})]),s("div",null,[e(r,{for:"username",value:"Username"}),e(u,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:o.form.username,"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.username=a)},null,8,["modelValue"]),e(i,{class:"mt-2"})]),s("div",null,[e(r,{for:"email",value:"Email"}),e(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":t[2]||(t[2]=a=>o.form.email=a),required:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2"})]),s("div",j,[e(x,{class:w(["ml-4",{"opacity-25":o.form.processing}]),disabled:o.form.processing},{default:l(()=>[B(" Update ")]),_:1},8,["class","disabled"])])],32)]),_:1})]),_:1})],64)}const K=c(A,[["render",q]]);export{K as default};