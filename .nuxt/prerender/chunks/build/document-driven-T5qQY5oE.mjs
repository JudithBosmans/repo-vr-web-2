import { defineComponent, h, inject, computed, unref, ref, Suspense, nextTick, mergeProps, Transition, provide, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue/index.mjs';
import { l as layouts, a as useNuxtApp, P as PageRouteSymbol, b as useRoute, c as appLayoutTransition, d as _wrapIf, L as LayoutMetaSymbol, e as useRuntimeConfig, f as useContent, g as useRequestEvent } from './server.mjs';
import { useRoute as useRoute$1 } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue-router/dist/vue-router.node.mjs';
import _sfc_main$1 from './ContentRenderer-C7gskBj6.mjs';
import _sfc_main$2 from './DocumentDrivenEmpty-CVfz7tly.mjs';
import _sfc_main$3 from './DocumentDrivenNotFound-4pTrsASA.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue/server-renderer/index.mjs';
import { u as useContentHead } from './head-C8P1xGLN.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/h3/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/destr/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/klona/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/scule/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ohash/dist/index.mjs';
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
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/cookie-es/dist/index.mjs';
import 'fs';
import 'path';
import './ContentRendererMarkdown-DTDnO7C8.mjs';
import 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/property-information/index.js';
import './node-04k6j4dz.mjs';

const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      let layout2 = (_b = (_a = unref(props.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => {
          var _a;
          return name === ((_a = route.meta.layout) != null ? _a : "default");
        }
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "document-driven",
  __ssrInlineRender: true,
  setup(__props) {
    const { contentHead } = useRuntimeConfig().public.content;
    const { page, layout } = useContent();
    if (!page.value && true) {
      const event = useRequestEvent();
      if (event) {
        event.node.res.statusCode = 404;
      }
    }
    if (contentHead) {
      useContentHead(page);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      const _component_DocumentDrivenEmpty = _sfc_main$2;
      const _component_DocumentDrivenNotFound = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: unref(layout) || "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DocumentDrivenEmpty, { value }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_DocumentDrivenNotFound, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }) => [
                  createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["value"])) : (openBlock(), createBlock(_component_DocumentDrivenNotFound, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=document-driven-T5qQY5oE.mjs.map
