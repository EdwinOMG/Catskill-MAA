import { createApp } from 'vue'
import App from './App.vue'
import '../catskill-maa.scss';

// Router
import router from './router'


const app = createApp(App)

app.use(router)
app.mount('#app')