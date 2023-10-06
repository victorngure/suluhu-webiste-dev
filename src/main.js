import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLink, faBoltLightning, faGears, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'  
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(BootstrapVue)

library.add( faLink, faBoltLightning, faGears, faAngleDown, faAngleUp, faTwitter, faFacebook, faLinkedin )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
