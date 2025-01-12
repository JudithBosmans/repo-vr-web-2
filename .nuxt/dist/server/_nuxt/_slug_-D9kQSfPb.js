import { _ as _sfc_main$1 } from "./Drawer-CzD7ZIVy.js";
import _sfc_main$2 from "./ContentList-DQNsVvAT.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BP9xcAbs.js";
import { mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, b as useRoute, u as useHead } from "../server.mjs";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "./client-only-BTgv9BoC.js";
import "hookable";
/* empty css              */
import "./MainNavigation-BmCN6jAd.js";
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
import "ohash";
import "cookie-es";
import "minisearch";
import "fs";
import "path";
import "./ContentQuery-C801UXpm.js";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      params: { slug }
    } = useRoute();
    const filter = slug;
    useHead({
      title: `All articles with ${slug}`,
      meta: [{ name: "description" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$1;
      const _component_ContentList = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-10 mb-20" }, _attrs))} data-v-ae7e372e><div data-v-ae7e372e>`);
      _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
      _push(`</div><div class="text-xl font-bold mb-5" data-v-ae7e372e>All objects from the collection with the tag &quot;${ssrInterpolate(unref(slug))}&quot;</div><section class="page-section" data-v-ae7e372e>`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: "/",
        query: {
          only: ["title", "description", "tags", "_path"],
          where: {
            tags: {
              $contains: unref(filter)
            }
          },
          $sensitivity: "base"
        }
      }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="article-list" data-v-ae7e372e${_scopeId}><!--[-->`);
            ssrRenderList(list, (article) => {
              _push2(`<li class="article-item w-full" data-v-ae7e372e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: article._path
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h1 class="text-2xl font-bold" data-v-ae7e372e${_scopeId2}>${ssrInterpolate(article.title)}</h1><p data-v-ae7e372e${_scopeId2}>${ssrInterpolate(article.description)}</p><ul class="article-tags" data-v-ae7e372e${_scopeId2}></ul><hr data-v-ae7e372e${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("h1", { class: "text-2xl font-bold" }, toDisplayString(article.title), 1),
                      createVNode("p", null, toDisplayString(article.description), 1),
                      createVNode("ul", { class: "article-tags" }),
                      createVNode("hr")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "article-list" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                  return openBlock(), createBlock("li", {
                    key: article._path,
                    class: "article-item w-full"
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: article._path
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-2xl font-bold" }, toDisplayString(article.title), 1),
                        createVNode("p", null, toDisplayString(article.description), 1),
                        createVNode("ul", { class: "article-tags" }),
                        createVNode("hr")
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-ae7e372e${_scopeId}>No articles found.</p>`);
          } else {
            return [
              createVNode("p", null, "No articles found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae7e372e"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-D9kQSfPb.js.map
