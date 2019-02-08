import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import MaterialVue from 'vue-material'

Vue.use(BootstrapVue)
Vue.use(MaterialVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
