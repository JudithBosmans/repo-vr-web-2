import { u as useColorMode, C as ColorMode, _ as _sfc_main$3 } from "./Drawer-CzD7ZIVy.js";
import { useSSRContext, resolveDirective, mergeProps, ref, computed, unref } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "rellax";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc, i as useRouter } from "../server.mjs";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "./client-only-BTgv9BoC.js";
import "hookable";
import "./nuxt-link-BP9xcAbs.js";
import "ufo";
/* empty css              */
import "./MainNavigation-BmCN6jAd.js";
import "destr";
import "klona";
import "defu";
import "vue-router";
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
const _sfc_main$2 = {
  __name: "Floating",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Floating.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/profile.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_lazy_load = resolveDirective("lazy-load");
  let _temp0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-[70vh]" }, _attrs))}><section class="w-[85%] px-6"><div class="flex items-center justify-between flex-wrap md:flex-nowrap"><div class="flex items-center justify-center flex-col w-30%"><img${ssrRenderAttrs(_temp0 = mergeProps({
    "data-src": _imports_0,
    alt: "Profile Picture",
    class: "rounded-full w-[140px] h-[140px] object-cover"
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<div class="bodyText text-left"><p> Developer <br> Designer </p></div></div><div class="flex flex-col space-y-4 md:flex-grow min-w-[45vw] max-w-[55vw]"><p class="bodyText text-left text-base mb-[2vh]"> Passionate about creating beautiful and interactive web experiences. I love turning complex problems into simple and intuitive designs. My goal is to build products that provide value and delight to the users. </p><ul class="bodyText grid grid-cols-2 gap-4 md:grid-cols-3"><li class="flex items-center space-x-5"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> HTML </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> CSS </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> JavaScript </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> React &amp; Vue </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> Adobe Suite </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> UX/UI </li><li class="flex items-center space-x-2"><svg class="w-6 h-6 text-prettyRed mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> Growth Mindset </li></ul></div></div></section></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref(null);
    ref(null);
    const isLoading = ref(true);
    const hasError = ref(false);
    const colorMode = useColorMode();
    const modelPath = computed(
      () => colorMode.preference === "dark" ? "/assets/strawberry.glb" : "/assets/magnolia.glb"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (isLoading.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Loading...</p></div>`);
      } else if (hasError.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Error loading settings. Please try again later.</p></div>`);
      } else {
        _push(`<div class="h-screen relative"><div class="relative h-full"><div class="relative z-10 pr-5 bg-transparent">`);
        _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
        _push(`</div><div class="info flex flex-col items-center justify-center h-screen relative"><div class="text-left p-1 titleText"><div id="titleHome" class="titleText"><h2 class="absolute top-[65%] left-[50%] translate-Y-[-30%] translate-x-[-50%] z-10000"><span class="text-[32vw]">Judith</span> <br><span class="text-[10vw]">Bosmans</span></h2></div>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          ColorMode: ColorMode.preference,
          modelPath: unref(modelPath)
        }, null, _parent));
        _push(ssrRenderComponent(About, {
          id: "about",
          class: "w-[100vw] absolute top-[100vh] left-0"
        }, null, _parent));
        _push(`</div></div><div class="w-[50%]"><p class="bodyText ml-[2vw] mt-[4vh]"> Lorem ipsum dolor sit amet. Qui modi illum ab quod optio est exercitationem aliquid et consequatur quibusdam sed sint ipsa. Sed consequuntur repellendus vel perferendis rerum ad officia architecto aut quos nostrum sed accusantium repellat. Sit facilis fuga qui officiis laborum non fuga quasi? Aut officia illum aut voluptas doloribus eos voluptatum fugiat aut facilis sint et modi vitae. </p></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BiFuDXNB.js.map
