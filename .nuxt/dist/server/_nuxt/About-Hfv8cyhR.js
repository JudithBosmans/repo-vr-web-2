import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "destr";
import "klona";
import "dayjs";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "ohash";
import "cookie-es";
import "minisearch";
import "fs";
import "path";
const _imports_0 = publicAssetsURL("/img/profile.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_lazy_load = resolveDirective("lazy-load");
  let _temp0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-[70vh]" }, _attrs))}><section class="w-[85%] px-6"><div class="flex items-center justify-between flex-wrap md:flex-nowrap"><div class="flex items-center justify-center flex-col w-30%"><img${ssrRenderAttrs(_temp0 = mergeProps({
    "data-src": _imports_0,
    alt: "Profile Picture",
    class: "rounded-full w-[140px] h-[140px] object-cover"
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<div class="bodyText text-left"><p> Developer <br> Designer </p></div></div><div class="flex flex-col space-y-4 md:flex-grow min-w-[45vw] max-w-[55vw]"><p class="bodyText text-left text-base mb-[2vh]"> Passionate about creating beautiful and interactive web experiences. I love turning complex problems into simple and intuitive designs. My goal is to build products that provide value and delight to the users. </p><ul class="bodyText grid grid-cols-2 gap-4 md:grid-cols-3"><li class="flex items-center space-x-5"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> HTML </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> CSS </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> JavaScript </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> React &amp; Vue </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> Adobe Suite </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> UX/UI </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> Growth Mindset </li></ul></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About as default
};
//# sourceMappingURL=About-Hfv8cyhR.js.map
