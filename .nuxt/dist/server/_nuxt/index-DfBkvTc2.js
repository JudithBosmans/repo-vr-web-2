import { u as useColorMode, C as ColorMode, _ as _sfc_main$2 } from "./Drawer-By_gAcDd.js";
import { f as useRouter } from "../server.mjs";
import { ref, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "rellax";
import _sfc_main$1 from "./Floating-CC2cIyrC.js";
import About from "./About-Hfv8cyhR.js";
import "lodash-unified";
import "@vue/shared";
import "@vueuse/core";
import "./client-only-BTgv9BoC.js";
import "hookable";
import "./nuxt-link-aeFFRLeD.js";
import "ufo";
/* empty css              */
import "./MainNavigation-DW17bEHy.js";
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
import "dayjs";
import "ohash";
import "cookie-es";
import "minisearch";
import "fs";
import "path";
import "three/addons/loaders/GLTFLoader.js";
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
      () => colorMode.preference === "dark" ? "/assets/flower4.glb" : "/assets/straw.glb"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (isLoading.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Loading...</p></div>`);
      } else if (hasError.value) {
        _push(`<div class="flex items-center justify-center h-screen"><p>Error loading settings. Please try again later.</p></div>`);
      } else {
        _push(`<div class="h-screen relative"><div class="relative h-full"><div class="relative z-10 pr-5 bg-transparent">`);
        _push(ssrRenderComponent(_component_Drawer, null, null, _parent));
        _push(`</div><div class="info flex flex-col items-center justify-center h-screen relative"><div class="text-left p-1 titleText"><div id="titleHome" class="titleText"><h2 class="absolute top-[65%] left-[50%] translate-Y-[-30%] translate-x-[-50%] z-10000"><span class="text-[32vw]">Judith</span> <br><span class="text-[10vw]">Bosmans</span></h2></div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
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
//# sourceMappingURL=index-DfBkvTc2.js.map
