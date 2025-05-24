// src/shims-vue-splide.d.ts
declare module '@splidejs/vue-splide' {
  import { DefineComponent } from 'vue';
  export const Splide: DefineComponent<any, any, any>;
  export const SplideSlide: DefineComponent<any, any, any>;
}