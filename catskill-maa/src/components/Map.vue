<script setup lang="ts">
import { computed } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const hasApiKey = computed(() => Boolean(apiKey))
const center = { lat: 41.77097496721765, lng: -74.65850133820045 }
</script>

<template>
  <div class="map-wrapper">
    <GoogleMap
      v-if="hasApiKey"
      :api-key="apiKey"
      style="width: 100%; height: 320px;"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
    <div v-else class="map-fallback" role="alert">
      Add your Google Maps API key to <code>VITE_GOOGLE_MAPS_API_KEY</code> to display the map.
    </div>
  </div>
</template>

<style scoped>
.map-wrapper {
  padding-top: 120px;
}

.map-fallback {
  width: 100%;
  height: 320px;
  display: grid;
  place-items: center;
  background: #f0f4ff;
  color: #1f2937;
  border: 2px dashed #9ca3af;
  border-radius: 12px;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .map-wrapper {
    padding-top: 80px;
  }
}
</style>
