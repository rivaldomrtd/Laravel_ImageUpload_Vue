import{_ as m}from"./AuthenticatedLayout.643c3039.js";import{a as g,_ as f}from"./NavLink.71323b58.js";import{H as b,L as k,s as o,o as i,g as l,a,w as n,F as h,d as t,e as _,y as v,t as d}from"./app.29f3d902.js";const L={components:{BreezeAuthenticatedLayout:m,Head:b,BreezeNavLink:f,Link:k},props:{posts:Object},methods:{truncateText(e){return e.length>30?`${e.substr(0,30)}...`:e},destroy(e){this.$inertia.delete(route("posts.destroy",e))}}},w=t("h2",{class:"text-xl font-semibold leading-tight text-gray-800",style:{"text-align":"center"}}," Post ",-1),B={class:"py-12"},T={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},A={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},z={class:"p-6 bg-white border-b border-gray-200"},C={class:"mb-5 container"},D={class:"center",style:{"text-align":"center"}},H={class:"center",style:{"margin-left":"auto","margin-right":"auto"}},N=t("thead",{class:"font-bold bg-gray-300 border-b-2"},[t("td",{class:"px-4 py-2"},"ID"),t("td",{class:"px-4 py-2"},"Title"),t("td",{class:"px-4 py-2"},"Tanggal"),t("td",{class:"px-4 py-2"},"Description"),t("td",{class:"px-4 py-2"},"Action")],-1),$={class:"px-4 py-2"},V={class:"px-4 py-2"},E={class:"px-4 py-2"},F={class:"px-4 py-2"},I={class:"px-4 py-2 font-extrabold"};function P(e,j,p,G,O,r){const u=o("Head"),c=o("Link"),x=o("pagination"),y=o("BreezeAuthenticatedLayout");return i(),l(h,null,[a(u,{title:"Artikel"}),a(y,null,{header:n(()=>[w]),default:n(()=>[t("div",B,[t("div",T,[t("div",A,[t("div",z,[t("div",C,[t("div",D,[a(c,{class:"px-6 py-2 mb-2 text-green-100 bg-green-500 rounded",href:e.route("posts.create")},{default:n(()=>[_(" + Posts Gallery ")]),_:1},8,["href"])])]),t("table",H,[N,t("tbody",null,[(i(!0),l(h,null,v(p.posts.data,s=>(i(),l("tr",{key:s.id},[t("td",$,d(s.id),1),t("td",V,d(r.truncateText(s.title)),1),t("td",E,d(s.created_at),1),t("td",F,d(r.truncateText(s.description)),1),t("td",I,[a(c,{class:"text-green-700",href:e.route("posts.edit",s.id)},{default:n(()=>[_(" Edit ")]),_:2},1032,["href"]),a(c,{onClick:S=>r.destroy(s.id),class:"text-red-700"},{default:n(()=>[_("Delete")]),_:2},1032,["onClick"])])]))),128))])]),a(x,{links:p.posts.links},null,8,["links"])])])])])]),_:1})],64)}const M=g(L,[["render",P]]);export{M as default};
