import { _ as _sfc_main$1 } from "./Drawer-CzD7ZIVy.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BP9xcAbs.js";
import { ref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "lodash-unified";
import "@vue/shared";
import "../server.mjs";
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
import "destr";
import "klona";
import "dayjs";
import "@vueuse/core";
import "ohash";
import "cookie-es";
import "minisearch";
import "fs";
import "path";
import "./client-only-BTgv9BoC.js";
/* empty css              */
import "./MainNavigation-BmCN6jAd.js";
const _sfc_main = {
  __name: "HomepageImage",
  __ssrInlineRender: true,
  setup(__props) {
    const settings = ref(null);
    const isLoading = ref(true);
    const hasError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (isLoading.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Loading...</p></div>`);
      } else if (hasError.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Error loading homepage settings. Please try again later.</p></div>`);
      } else {
        _push(`<div class="back bg-cover bg-center h-full" style="${ssrRenderStyle({
          backgroundImage: settings.value.thumbnail ? `url(${settings.value.thumbnail})` : ""
        })}"><div class="pr-5">`);
        _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
        _push(`</div><div class="info flex flex-col items-center justify-center h-screen"><div class="container text-left p-1 lg:p-20"><div class="container opacity-80 animate-fade animate-once animate-delay-[100ms] p-10 lg:p-20 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80"><div class="text-xl font-bold">${ssrInterpolate(settings.value.homepage_title)}</div><div class="text-sm opacity-80">${ssrInterpolate(settings.value.body)}</div><div class="flex mt-10">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "https://github.com/bureaupixel/",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex-col hidden"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"${_scopeId}><path fill="currentColor" d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"${_scopeId}></path></svg></div><div class="flex-col"${_scopeId}><span class="text-xs opacity-80"${_scopeId}>This dataset is based on a Bureaupixel Github repository with a MIT License. Feel free to download and install it on your local machine.</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex-col hidden" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 256 256"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"
                    })
                  ]))
                ]),
                createVNode("div", { class: "flex-col" }, [
                  createVNode("span", { class: "text-xs opacity-80" }, "This dataset is based on a Bureaupixel Github repository with a MIT License. Feel free to download and install it on your local machine.")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/HomepageImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=HomepageImage-CKRcGC_Z.js.map
