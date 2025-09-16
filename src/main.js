import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/theme.scss';
import 'bootstrap';
import { createApp, nextTick } from 'vue'
import router from '../router'
import App from '/src/App.vue'
import '@/assets/reduced-motion.css'

const app = createApp(App)

// Add a data attribute on <html> so CSS/JS can key off it if needed
const applyRMAttr = () => {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  document.documentElement.setAttribute('data-reduced-motion', reduce ? 'reduce' : 'no-preference')
}
applyRMAttr()
window.matchMedia?.('(prefers-reduced-motion: reduce)')?.addEventListener('change', applyRMAttr)

router.afterEach(async () => {
  await nextTick()
  document.getElementById('app-main')?.focus()
})

app.use(router).mount('#app')