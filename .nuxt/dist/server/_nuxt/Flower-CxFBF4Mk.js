import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_lazy_load = resolveDirective("lazy-load");
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sketchfab-embed-wrapper" }, _attrs))}><iframe${ssrRenderAttrs(_temp0 = mergeProps({
    title: "Securigera Varia",
    frameborder: "0",
    allowfullscreen: "",
    mozallowfullscreen: "true",
    webkitallowfullscreen: "true",
    allow: "autoplay; fullscreen; xr-spatial-tracking",
    "xr-spatial-tracking": "",
    "execution-while-out-of-viewport": "",
    "execution-while-not-rendered": "",
    "web-share": "",
    "data-src": "https://sketchfab.com/models/172aa25c2fcc4db0a31199ef8d9920ae/embed?autostart=1&transparent=1&dnt=1",
    class: "w-[100vw] h-[100vh]"
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Flower.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Flower = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Flower as default
};
//# sourceMappingURL=Flower-CxFBF4Mk.js.map
