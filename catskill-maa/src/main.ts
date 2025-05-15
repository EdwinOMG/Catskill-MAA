import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import Aura from '@primeuix/themes/aura';

// Optional: VueUse Motion if you're still using it
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(MotionPlugin) // keep only if you still use it
app.mount('#app')