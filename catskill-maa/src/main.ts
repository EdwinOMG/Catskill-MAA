import { createApp } from 'vue'
import App from './App.vue'
import '../catskill-maa.scss';
import '@splidejs/vue-splide/css/skyblue';

// Router
import router from './router'

router.afterEach((to) => {
  if (window.gtag) {
    window.gtag('config', 'G-JMEPN102FC', {
      page_path: to.fullPath,
    });
  }
});

const app = createApp(App)

const goToSection = () => {
     router.push({ path: '/#contact' });
   };

   
app.use(router)
app.mount('#app')