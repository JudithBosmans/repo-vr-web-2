import{_ as L}from"./D3xdXvd2.js";import{_ as N}from"./BseNzrC0.js";import{_ as $}from"./CsfktEd2.js";import{r as g,B as w,D as B,G as I,K as V,o as e,c as s,a,b as n,w as _,a4 as D,E as m,t as d,F as P,C as j,d as z,j as h}from"./Dju4AcFz.js";import{R as A}from"./bP8pfDQD.js";const F={class:"container animate-fade animate-once animate-delay-[500ms] mt-10 mb-20"},S={class:"masonry-image relative"},q={key:0,class:"absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md"},G={key:0},K={key:1,class:"text-red-500"},M={class:"masonry-item-text p-4"},O={class:"text-xl font-semibold mb-2"},R={key:0,class:"text-gray-600 line-clamp-3"},T={key:0,class:"text-xs mt-2"},Z={__name:"PromotedContent",async setup(H){let r,u;const f=g([]),{data:p}=([r,u]=w(()=>B("folders",()=>I("/").sort({promoted:1}).find())),r=await r,u(),r);V(()=>{p.value&&(f.value=p.value.filter(o=>o.folder))});const v=f,l=g({});function x(o){l.value[o]=!1}function b(o){l.value[o]="error"}return(o,J)=>{const k=L,y=N,C=$;return e(),s("div",null,[a("div",F,[n(h(A),{items:h(v),"ssr-columns":1,gap:16,class:"mt-5"},{default:_(({item:t,index:c})=>[a("div",{style:D({height:`${t}px`}),class:"masonry-item"},[a("div",S,[l.value[c]!==!1?(e(),s("div",q,[l.value[c]!=="error"?(e(),s("p",G,"Loading image...")):(e(),s("p",K,"Error loading image"))])):m("",!0),n(k,{src:t.thumbnail,alt:"Post thumbnail",class:"rounded-md mb-4",loading:"lazy",onLoad:i=>x(c),onError:i=>b(c)},null,8,["src","onLoad","onError"])]),n(y,{to:t._path,class:"block"},{default:_(()=>[a("div",M,[a("h2",O,d(t.title),1),t.description?(e(),s("p",R,d(t.description),1)):m("",!0),n(C,null,{default:_(()=>[t.tags?(e(),s("ul",T,[(e(!0),s(P,null,j(t.tags,(i,E)=>(e(),s("li",{key:E,class:"inline mr-2"},[n(y,{to:`/tags/${i}`},{default:_(()=>[z(d(i),1)]),_:2},1032,["to"])]))),128))])):m("",!0)]),_:2},1024)])]),_:2},1032,["to"])],4)]),_:1},8,["items"])])])}}};export{Z as default};