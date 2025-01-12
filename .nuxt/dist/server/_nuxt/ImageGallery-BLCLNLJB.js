import { _ as __nuxt_component_2 } from "./client-only-BTgv9BoC.js";
/* empty css              */
import { ref, withAsyncContext, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import { b as useRoute, h as useAsyncData, q as queryContent } from "../server.mjs";
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
import "ufo";
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
  __name: "ImageGallery",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref([]);
    const route = useRoute();
    const actualPath = route.path.replace(/\/$/, "");
    [__temp, __restore] = withAsyncContext(() => useAsyncData("post", () => queryContent(actualPath).findOne())), __temp = await __temp, __restore(), __temp;
    ref(false);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/ImageGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ImageGallery-BLCLNLJB.js.map
