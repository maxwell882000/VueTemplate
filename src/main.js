import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSplide from '@splidejs/vue-splide';
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {createVueWait} from 'vue-wait'
import VueClickAway from "vue3-click-away";
import VueLazyLoad from 'vue3-lazyload'
import VueVirtualScroller from 'vue-virtual-scroller'
import "@egjs/vue3-flicking/dist/flicking.css";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// global scss
import "./fonts.scss";
import "./styles.scss";
import "./override.scss";
import i18n from './i18n'
import Flicking from "@egjs/vue3-flicking";

const VueWait = createVueWait({useVuex: true, registerDirective: true})
createApp(App)
    .use(VueVirtualScroller)
    .use(i18n)
    .use(store)
    .use(router)
    .use(VueClickAway)
    .use(VueSplide)
    .use(VueLazyLoad)
    .use(VueWait)
    .use(BootstrapVue3)
    .use(VueAxios, axios)
    .component("Flicking", Flicking)
    .mount("#app");

