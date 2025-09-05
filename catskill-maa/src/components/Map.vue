<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue'

const APIKEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const center = { lat: 41.77097496721765, lng: -74.65850133820045 }

// Load Google Map component only when mounted
const GoogleMap = ref<any>(null)
const Marker = ref<any>(null)

onMounted(async () => {
  const module = await import('vue3-google-map')
  GoogleMap.value = module.GoogleMap
  Marker.value = module.Marker
})
</script>

<template>
  <div style="width:100%; height:300px; position: relative;">
    <div v-if="!GoogleMap" class="map-placeholder">
      Loading map…
    </div>
    <component
      v-else
      :is="GoogleMap"
      :api-key="APIKEY"
      :center="center"
      :zoom="15"
      style="width: 100%; height: 100%;"
    >
      <component :is="Marker" :options="{ position: center }" />
    </component>
  </div>
</template>
<style scoped>
.map-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  color: #555;
  font-size: 1rem;
}
</style>