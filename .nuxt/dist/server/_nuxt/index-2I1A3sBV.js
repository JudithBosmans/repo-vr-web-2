import { _ as _sfc_main$1 } from "./Drawer-CzD7ZIVy.js";
import { _ as _sfc_main$2 } from "./NuxtImg-B4s9a08Y.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BP9xcAbs.js";
import { _ as __nuxt_component_2 } from "./client-only-BTgv9BoC.js";
import { withAsyncContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { h as useAsyncData, q as queryContent } from "../server.mjs";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
/* empty css              */
import "./MainNavigation-BmCN6jAd.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "vue-router";
import "ufo";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "dayjs";
import "ohash";
import "cookie-es";
import "minisearch";
import "fs";
import "path";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("posts", () => {
      return queryContent("/page").sort({ promoted: 1 }).find();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="pr-5">`);
      _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
      _push(`</div><main class="mx-auto max-w-4xl space-y-6 px-4 mb-20"><div class="text-xl font-bold"> Pages </div><div class="masonry"><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<div class="masonry-item"><div class="masonry-image">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: post.thumbnail,
          alt: "Post thumbnail",
          class: "w-full h-64 object-cover rounded-md mb-4",
          width: 750,
          height: 550
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post._path,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="masonry-item-text p-4"${_scopeId}><h2 class="text-xl font-semibold mb-2"${_scopeId}>${ssrInterpolate(post.title)}</h2>`);
              if (post.description) {
                _push2(`<p class="text-gray-600 line-clamp-3"${_scopeId}>${ssrInterpolate(post.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "masonry-item-text p-4" }, [
                  createVNode("h2", { class: "text-xl font-semibold mb-2" }, toDisplayString(post.title), 1),
                  post.description ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-gray-600 line-clamp-3"
                  }, toDisplayString(post.description), 1)) : createCommentVNode("", true),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      post.tags ? (openBlock(), createBlock("article", {
                        key: 0,
                        class: "text-xs mt-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (item, index) => {
                          return openBlock(), createBlock("li", {
                            key: index,
                            class: "inline mr-2"
                          }, [
                            createVNode(_component_NuxtLink, {
                              to: `/tags/${item}`
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-2I1A3sBV.js.map
