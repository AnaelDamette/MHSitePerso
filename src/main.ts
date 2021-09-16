import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";
import "./assets/scss/custom.scss";
import Vue2ToucheEvents from "vue2-touch-events";

Vue.config.productionTip = false;
Vue.use(Vue2ToucheEvents);

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
