import { e as useAsyncData, q as queryContent } from './server.mjs';
import { ref, withAsyncContext, useSSRContext } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/h3/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/devalue/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/destr/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/klona/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/scule/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unified/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-character/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/slugify/slugify.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-parse/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-rehype/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-emoji/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-gfm/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-external-links/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-raw/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/detab/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/hast-util-to-string/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/github-slugger/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/minisearch/dist/es/index.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ipx/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/cookie-es/dist/index.mjs';
import 'fs';
import 'path';

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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/PageNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PageNavigation-DetHqJrY.mjs.map
