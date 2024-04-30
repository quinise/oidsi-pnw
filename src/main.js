import PortalVue from 'portal-vue'
import { createApp } from 'vue'
import router from '/router.js'
import App from '/src/App.vue'

createApp(App)
  .use(PortalVue)
  .use(router)
  .mount('#app')
