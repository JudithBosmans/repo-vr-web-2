import { ref, watch, mergeProps, useSSRContext, markRaw } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/vue/server-renderer/index.mjs';
import { GLTFLoader } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const _sfc_main = {
  __name: "Floating",
  __ssrInlineRender: true,
  props: {
    colorMode: String,
    modelPath: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    let scene;
    const currentModel = ref(null);
    const loadModel = (path) => {
      const loader = new GLTFLoader();
      loader.load(
        path,
        (gltf) => {
          if (currentModel.value) {
            scene.remove(currentModel.value);
          }
          currentModel.value = markRaw(gltf.scene);
          currentModel.value.position.set(0, 0, 0);
          currentModel.value.scale.set(1, 1, 1);
          scene.add(currentModel.value);
        },
        void 0,
        (error) => console.error("Error loading model:", error)
      );
    };
    watch(
      () => props.modelPath,
      (newPath) => {
        loadModel(newPath);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[125vh] w-[100%]" }, _attrs))}><div id="moss-container"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Floating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Floating-CC2cIyrC.mjs.map
