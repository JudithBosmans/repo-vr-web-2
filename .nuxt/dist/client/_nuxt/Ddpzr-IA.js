import{_ as $}from"./D3xdXvd2.js";import{_ as E}from"./BseNzrC0.js";import{r as v,f as N,B as w,D as B,G as V,K as A,o as s,c as a,b as i,w as m,a as u,a4 as D,E as d,a3 as F,d as h,t as _,F as I,C as P,j}from"./Dju4AcFz.js";import{R as z}from"./bP8pfDQD.js";const R={key:0,class:"mt-5"},S={class:"masonry-image relative"},q={key:0,class:"absolute inset-0 flex items-center justify-center bg-gray-200"},G={class:"masonry-item-text p-4"},K={key:0,class:"text-gray-600 line-clamp-3"},M={key:1,class:"text-xs mt-2"},W={__name:"FolderContent",async setup(T){let o,f;const r=v([]),n=v([]),x=N().path.replace(/\/$/,""),{data:p}=([o,f]=w(()=>B("folders",()=>V(x).sort({promoted:1}).find())),o=await o,f(),o);A(()=>{p.value&&(r.value=p.value.filter(e=>e.folder&&e.folder==="page"&&e.folder!=="folder"),n.value=Array(r.value.length).fill(!1))});const b=e=>{n.value[e]=!0},k=e=>{console.error(`Error loading image at index ${e}`)};return(e,g)=>{const C=$,y=E;return r.value.folder!=="page"?(s(),a("div",R,[i(j(z),{items:r.value,"ssr-columns":1,gap:16},{default:m(({item:t,index:l})=>[u("div",{style:D({height:`${t}px`}),class:"masonry-item"},[u("div",S,[n.value[l]?d("",!0):(s(),a("div",q,g[0]||(g[0]=[u("p",null,"Loading image...",-1)]))),i(C,{src:t.thumbnail,alt:"Post thumbnail",class:F(["rounded-md mb-4",{hidden:!n.value[l]}]),onLoad:c=>b(l),onError:c=>k(l)},null,8,["src","onLoad","onError","class"])]),u("div",G,[i(y,{to:t._path,class:"text-xl font-semibold mb-2"},{default:m(()=>[h(_(t.title),1)]),_:2},1032,["to"]),t.description?(s(),a("p",K,_(t.description),1)):d("",!0),t.tags?(s(),a("ul",M,[(s(!0),a(I,null,P(t.tags,(c,L)=>(s(),a("li",{key:L,class:"inline mr-2"},[i(y,{to:`/tags/${c}`},{default:m(()=>[h(_(c),1)]),_:2},1032,["to"])]))),128))])):d("",!0)])],4)]),_:1},8,["items"])])):d("",!0)}}};export{W as default};
