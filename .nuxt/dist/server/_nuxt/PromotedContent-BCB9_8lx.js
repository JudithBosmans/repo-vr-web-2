import { _ as _sfc_main$1 } from "./NuxtImg-B15SxjPM.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-aeFFRLeD.js";
import { _ as __nuxt_component_2 } from "./client-only-BTgv9BoC.js";
import { e as useAsyncData, q as queryContent } from "../server.mjs";
import { ref, withAsyncContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import MasonryWall from "@yeger/vue-masonry-wall";
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
  __name: "PromotedContent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const folders = ref([]);
    [__temp, __restore] = withAsyncContext(() => useAsyncData(
      "folders",
      () => queryContent("/").sort({ promoted: 1 }).find()
    )), __temp = await __temp, __restore(), __temp;
    const items = folders;
    const loadingImages = ref({});
    function handleImageLoad(index) {
      loadingImages.value[index] = false;
    }
    function handleImageError(index) {
      loadingImages.value[index] = "error";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container animate-fade animate-once animate-delay-[500ms] mt-10 mb-20">`);
      _push(ssrRenderComponent(unref(MasonryWall), {
        items: unref(items),
        "ssr-columns": 1,
        gap: 16,
        class: "mt-5"
      }, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ height: `${item}px` })}" class="masonry-item"${_scopeId}><div class="masonry-image relative"${_scopeId}>`);
            if (loadingImages.value[index] !== false) {
              _push2(`<div class="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md"${_scopeId}>`);
              if (loadingImages.value[index] !== "error") {
                _push2(`<p${_scopeId}>Loading image...</p>`);
              } else {
                _push2(`<p class="text-red-500"${_scopeId}>Error loading image</p>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: item.thumbnail,
              alt: "Post thumbnail",
              class: "rounded-md mb-4",
              loading: "lazy",
              onLoad: ($event) => handleImageLoad(index),
              onError: ($event) => handleImageError(index)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: item._path,
              class: "block"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="masonry-item-text p-4"${_scopeId2}><h2 class="text-xl font-semibold mb-2"${_scopeId2}>${ssrInterpolate(item.title)}</h2>`);
                  if (item.description) {
                    _push3(`<p class="text-gray-600 line-clamp-3"${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "masonry-item-text p-4" }, [
                      createVNode("h2", { class: "text-xl font-semibold mb-2" }, toDisplayString(item.title), 1),
                      item.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-gray-600 line-clamp-3"
                      }, toDisplayString(item.description), 1)) : createCommentVNode("", true),
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          item.tags ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: "text-xs mt-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.tags, (tag, tagIndex) => {
                              return openBlock(), createBlock("li", {
                                key: tagIndex,
                                class: "inline mr-2"
                              }, [
                                createVNode(_component_NuxtLink, {
                                  to: `/tags/${tag}`
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tag), 1)
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                style: { height: `${item}px` },
                class: "masonry-item"
              }, [
                createVNode("div", { class: "masonry-image relative" }, [
                  loadingImages.value[index] !== false ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md"
                  }, [
                    loadingImages.value[index] !== "error" ? (openBlock(), createBlock("p", { key: 0 }, "Loading image...")) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-red-500"
                    }, "Error loading image"))
                  ])) : createCommentVNode("", true),
                  createVNode(_component_NuxtImg, {
                    src: item.thumbnail,
                    alt: "Post thumbnail",
                    class: "rounded-md mb-4",
                    loading: "lazy",
                    onLoad: ($event) => handleImageLoad(index),
                    onError: ($event) => handleImageError(index)
                  }, null, 8, ["src", "onLoad", "onError"])
                ]),
                createVNode(_component_NuxtLink, {
                  to: item._path,
                  class: "block"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "masonry-item-text p-4" }, [
                      createVNode("h2", { class: "text-xl font-semibold mb-2" }, toDisplayString(item.title), 1),
                      item.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-gray-600 line-clamp-3"
                      }, toDisplayString(item.description), 1)) : createCommentVNode("", true),
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          item.tags ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: "text-xs mt-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.tags, (tag, tagIndex) => {
                              return openBlock(), createBlock("li", {
                                key: tagIndex,
                                class: "inline mr-2"
                              }, [
                                createVNode(_component_NuxtLink, {
                                  to: `/tags/${tag}`
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tag), 1)
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
                  ]),
                  _: 2
                }, 1032, ["to"])
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/PromotedContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PromotedContent-BCB9_8lx.js.map
