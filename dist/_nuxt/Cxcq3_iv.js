import{_}from"./BseNzrC0.js";import{r as d,B as f,D as m,G as p,K as g,o as s,c as l,F as v,C as x,b as y,w as h,a as u,t as k}from"./Dju4AcFz.js";const N={__name:"MainNavigation",async setup(w){let e,o;const r=d([]),{data:i}=([e,o]=f(()=>m("folders",()=>p("/").sort({numbernavigation:1}).find())),e=await e,o(),e);return g(()=>{const n=[...i.value||[]];n.length&&(r.value=n.filter(t=>t.included&&t.included===!0&&t.included!==!1))}),(n,t)=>{const c=_;return s(),l("div",null,[(s(!0),l(v,null,x(r.value,a=>(s(),l("ul",{key:a.slug},[y(c,{to:a._path},{default:h(()=>[u("li",null,k(a.title),1)]),_:2},1032,["to"])]))),128)),t[0]||(t[0]=u("hr",null,null,-1))])}}};export{N as default};