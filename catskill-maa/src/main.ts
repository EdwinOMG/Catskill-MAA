import { createApp } from 'vue'
import App from './App.vue'
import '../catskill-maa.scss';
import '@splidejs/vue-splide/css/skyblue';

// Router
import router from './router'


const app = createApp(App)


app.use(router)
app.mount('#app')