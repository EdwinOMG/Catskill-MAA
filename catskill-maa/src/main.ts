import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css';

// Router
import router from './router'


const app = createApp(App)

app.use(router)
app.mount('#app')