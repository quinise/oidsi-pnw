import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/about.css';
import './stylesheets/contact.css';
import './stylesheets/contactForm.css';
import './stylesheets/events.css';
import './stylesheets/gallery.css';
import './stylesheets/global.css';
import './stylesheets/home.css';
import './stylesheets/services.css';
import PortalVue from 'portal-vue'
import { createApp } from 'vue'
import router from '/router.js'
import App from '/src/App.vue'

createApp(App)
  .use(PortalVue)
  .use(router)
  .mount('#app')
