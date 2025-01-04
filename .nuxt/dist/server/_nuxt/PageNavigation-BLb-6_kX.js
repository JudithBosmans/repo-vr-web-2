import { e as useAsyncData, q as queryContent } from "../server.mjs";
import { ref, withAsyncContext, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "devalue";
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
  __name: "PageNavigation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const groupedPagesFiles = ref({});
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("contentPageFiles", async () => {
      const content = await queryContent("/page").find();
      return content;
    })), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      data.value.forEach((file) => {
        const folder = file._dir || "Uncategorized";
        if (!groupedPagesFiles.value[folder]) {
          groupedPagesFiles.value[folder] = [];
        }
        groupedPagesFiles.value[folder].push(file);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(groupedPagesFiles.value, (files, folder) => {
        _push(`<div class="pt-2"><ul class=""><!--[-->`);
        ssrRenderList(files, (file, index) => {
          _push(`<li><a${ssrRenderAttr("href", file._path)}>${ssrInterpolate(file.title || file._path)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--><hr></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/navs/PageNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PageNavigation-BLb-6_kX.js.map
