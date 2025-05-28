<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'
const apiKey = import.meta.env.VUE_APP_API_KEY;
const center =  { lat: 41.77097496721765, lng: -74.65850133820045}
</script>

<template>
    <GoogleMap 
    :api-key="apiKey"
    style="width: 100%; height: 300px;"
    :center="center"
    :zoom="15"
    >
    <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<style scoped>

</style>