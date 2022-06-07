import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import userMixin from "./mixins/user.mixin";
import store from "./store/index";

Vue.config.productionTip = false;

Vue.mixin(userMixin);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
