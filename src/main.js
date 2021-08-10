import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import FilePond from './vue-plugins/filepond-plugin';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  components: { App, /*FilePond*/ }
}).$mount("#app");
