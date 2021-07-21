import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";
import cmake from "highlight.js/lib/languages/cmake";
import hljsVuePlugin from "@highlightjs/vue-plugin";

import "highlight.js/styles/default.css";
import "./style/index.css";

hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("cmake", cmake);

createApp(App).use(hljsVuePlugin).use(store).use(router).mount("#app");
