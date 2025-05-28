<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'
const APIKEY="AIzaSyB9bvPl80g9ntUKtsuTnKF0E1o730i1JPI"
// leaving ts for now im lazy, please dont run up my bill...
const center =  { lat: 41.77097496721765, lng: -74.65850133820045}
</script>

<template>
    <GoogleMap 
    :api-key="APIKEY"
    style="width: 100%; height: 300px;"
    :center="center"
    :zoom="15"
    >
    <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<style scoped>
.google-map {
    padding-top: 120px;
}
</style>