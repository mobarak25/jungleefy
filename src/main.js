

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "@/assets/css/icofont.min.css";

Vue.config.productionTip = false;

Vue.prototype.$appPath = "@/";
Vue.prototype.$assetsPath = "@/assets/";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
