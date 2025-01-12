import { _ as _sfc_main$1 } from "./Drawer-CzD7ZIVy.js";
import { _ as _export_sfc, J as _sfc_main$2 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "./client-only-BTgv9BoC.js";
import "hookable";
import "./nuxt-link-BP9xcAbs.js";
import "ufo";
/* empty css              */
import "./MainNavigation-BmCN6jAd.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "dayjs";
import "ohash";
import "cookie-es";
import "minisearch";
import "fs";
import "path";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Drawer = _sfc_main$1;
  const _component_SearchBox = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen" }, _attrs))}><div class="pr-5">`);
  _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
  _push(`</div><div class="container mx-auto max-w-4xl space-y-6 pt-5"><h1 class="text-4xl font-bold"> Search </h1>`);
  _push(ssrRenderComponent(_component_SearchBox, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  search as default
};
//# sourceMappingURL=search-DZnjW2Ff.js.map
