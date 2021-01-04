import Vue from "vue";
// for multi image uploader
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
var _ = require('lodash');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// import "@/assets/css/icofont.min.css";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.prototype._ = _;

Vue.prototype.$appPath = "@/";
Vue.prototype.$assetsPath = "@/assets/";

Vue.prototype.Fire =  new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
