import { _ as _sfc_main$1 } from "./NuxtImg-B15SxjPM.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-aeFFRLeD.js";
import { i as useRoute, e as useAsyncData, q as queryContent } from "../server.mjs";
import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "FolderContent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const items = ref([]);
    const imageLoaded = ref([]);
    const route = useRoute();
    const currentPath = route.path.replace(/\/$/, "");
    [__temp, __restore] = withAsyncContext(() => useAsyncData(
      "folders",
      () => queryContent(currentPath).sort({ promoted: 1 }).find()
    )), __temp = await __temp, __restore(), __temp;
    const onImageLoad = (index) => {
      imageLoaded.value[index] = true;
    };
    const onImageError = (index) => {
      console.error(`Error loading image at index ${index}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      if (items.value.folder !== "page") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(MasonryWall), {
          items: items.value,
          "ssr-columns": 1,
          gap: 16
        }, {
          default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle({ height: `${item}px` })}" class="masonry-item"${_scopeId}><div class="masonry-image relative"${_scopeId}>`);
              if (!imageLoaded.value[index]) {
                _push2(`<div class="absolute inset-0 flex items-center justify-center bg-gray-200"${_scopeId}><p${_scopeId}>Loading image...</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: item.thumbnail,
                alt: "Post thumbnail",
                class: ["rounded-md mb-4", { "hidden": !imageLoaded.value[index] }],
                onLoad: ($event) => onImageLoad(index),
                onError: ($event) => onImageError(index)
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="masonry-item-text p-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: item._path,
                class: "text-xl font-semibold mb-2"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (item.description) {
                _push2(`<p class="text-gray-600 line-clamp-3"${_scopeId}>${ssrInterpolate(item.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.tags) {
                _push2(`<ul class="text-xs mt-2"${_scopeId}><!--[-->`);
                ssrRenderList(item.tags, (tag, index2) => {
                  _push2(`<li class="inline mr-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: `/tags/${tag}`
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(tag)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(tag), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", {
                  style: { height: `${item}px` },
                  class: "masonry-item"
                }, [
                  createVNode("div", { class: "masonry-image relative" }, [
                    !imageLoaded.value[index] ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "absolute inset-0 flex items-center justify-center bg-gray-200"
                    }, [
                      createVNode("p", null, "Loading image...")
                    ])) : createCommentVNode("", true),
                    createVNode(_component_NuxtImg, {
                      src: item.thumbnail,
                      alt: "Post thumbnail",
                      class: ["rounded-md mb-4", { "hidden": !imageLoaded.value[index] }],
                      onLoad: ($event) => onImageLoad(index),
                      onError: ($event) => onImageError(index)
                    }, null, 8, ["src", "onLoad", "onError", "class"])
                  ]),
                  createVNode("div", { class: "masonry-item-text p-4" }, [
                    createVNode(_component_NuxtLink, {
                      to: item._path,
                      class: "text-xl font-semibold mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    item.description ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-gray-600 line-clamp-3"
                    }, toDisplayString(item.description), 1)) : createCommentVNode("", true),
                    item.tags ? (openBlock(), createBlock("ul", {
                      key: 1,
                      class: "text-xs mt-2"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.tags, (tag, index2) => {
                        return openBlock(), createBlock("li", {
                          key: index2,
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
                  ])
                ], 4)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/FolderContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=FolderContent-dTkrT4rU.js.map
