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

// Suppress Facebook SDK errors in development
if (import.meta.env.DEV) {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const message = typeof args[0] === 'string' ? args[0] : '';
    const hasErrorUtils = args.some((arg: any) => 
      typeof arg === 'object' && arg?.stack?.includes?.('ErrorUtils')
    );
    
    if (
      message.includes('ErrorUtils') || 
      message.includes('fburl.com') ||
      message.includes('Permissions policy violation') ||
      hasErrorUtils
    ) {
      return;
    }
    originalError(...args);
  };

  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    const message = typeof args[0] === 'string' ? args[0] : '';
    if (message.includes('Violation') && message.includes('Permissions policy')) {
      return;
    }
    originalWarn(...args);
  };
}