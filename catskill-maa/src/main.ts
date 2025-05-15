import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Tailwind CSS
import './assets/main.css'

// VueUse Motion
import { MotionPlugin } from '@vueuse/motion'



const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)
app.mount('#app')
