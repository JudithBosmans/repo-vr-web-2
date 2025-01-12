import { _ as __nuxt_component_0 } from "./nuxt-link-BP9xcAbs.js";
import { ref, withAsyncContext, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { h as useAsyncData, q as queryContent } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ufo";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "dayjs";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "ohash";
import "cookie-es";
import "minisearch";
import "fs";
import "path";
const _sfc_main = {
  __name: "MainNavigation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const folders = ref([]);
    [__temp, __restore] = withAsyncContext(() => useAsyncData(
      "folders",
      () => queryContent("/").sort({ numbernavigation: 1 }).find()
    )), __temp = await __temp, __restore(), __temp;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(folders.value, (post) => {
        _push(`<ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li${_scopeId}>${ssrInterpolate(post.title)}</li>`);
            } else {
              return [
                createVNode("li", null, toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</ul>`);
      });
      _push(`<!--]--><hr></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/MainNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MainNavigation-Clcws3Cg.js.map
