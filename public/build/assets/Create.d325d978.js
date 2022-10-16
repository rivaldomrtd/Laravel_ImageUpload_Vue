import{_ as y}from"./AuthenticatedLayout.643c3039.js";import{a as m}from"./NavLink.71323b58.js";import{o as n,g as r,t as b,r as w,H as B,u as $,s as d,a as u,w as p,F as z,d as e,f as V,j as _,x as g,i as k}from"./app.29f3d902.js";const C={props:["value"]},L={class:"block font-medium text-sm text-gray-700"},I={key:0},N={key:1};function A(i,t,a,o,f,l){return n(),r("label",L,[a.value?(n(),r("span",I,b(a.value),1)):(n(),r("span",N,[w(i.$slots,"default")]))])}const F=m(C,[["render",A]]),H={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},S=["value"];function D(i,t,a,o,f,l){return n(),r("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:a.modelValue,onInput:t[0]||(t[0]=c=>i.$emit("update:modelValue",c.target.value)),ref:"input"},null,40,S)}const M=m(H,[["render",D]]),T={components:{BreezeAuthenticatedLayout:y,BreezeLabel:F,BreezeInput:M,Head:B},setup(){return{form:$({title:null,description:null,file:null})}},methods:{submit(){this.form.post(route("images.store"))}}},U=e("h2",{class:"text-xl font-semibold leading-tight text-gray-800",style:{"text-align":"center"}}," Create ",-1),j={class:"py-12"},E={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},q={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},G={class:"p-6 bg-white border-b border-gray-200"},J=e("label",{for:"title"},"Title",-1),K={class:"mt-4"},O=e("label",{for:"title"},"Description",-1),P={className:"mb-4"},Q={key:0,className:"text-red-600"},R=e("div",{class:"flex items-center mt-4"},[e("button",{class:"px-6 py-2 text-white bg-gray-900 rounded"}," Save ")],-1);function W(i,t,a,o,f,l){const c=d("Head"),h=d("BreezeLabel"),x=d("BreezeInput"),v=d("BreezeAuthenticatedLayout");return n(),r(z,null,[u(c,{title:"Artikel-Create"}),u(v,null,{header:p(()=>[U]),default:p(()=>[e("div",j,[e("div",E,[e("div",q,[e("div",G,[e("form",{onSubmit:t[3]||(t[3]=V((...s)=>l.submit&&l.submit(...s),["prevent"]))},[e("div",null,[J,_(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.title=s),class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},null,512),[[g,o.form.title]])]),e("div",K,[O,_(e("textarea",{name:"description",type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>o.form.description=s),class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},`
                                `,512),[[g,o.form.description]])]),e("div",P,[u(h,{for:"file",value:"File"}),u(x,{id:"file",type:"file",class:"mt-1 block w-full",onInput:t[2]||(t[2]=s=>o.form.file=s.target.files[0]),autofocus:""}),o.form.errors.title?(n(),r("span",Q,b(o.form.errors.file),1)):k("",!0)]),R],32)])])])])]),_:1})],64)}const ee=m(T,[["render",W]]);export{ee as default};
