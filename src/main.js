import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from './filters/dateFilter' 
import Vuelidate from 'vuelidate'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min.js'


Vue.config.productionTip = false;
Vue.filter('date', dateFilter)

Vue.use(Vuelidate)
Vue.use(messagePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
