<template>
  <div style="height:600px; width:800px;">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, 3.219482]">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="item in stock"
      :lat-lng="item"></l-marker>
    </l-map>
  </div>
</template>

<script>
  import "leaflet/dist/leaflet.css";
  import {LMap, LTileLayer, LMarker} from "@vue-leaflet/vue-leaflet";
  import {useProductStore} from "@/stores/ProductStore";

  export default {

    name: "CitiesMap",
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    data() {
      return {
        zoom: 6,
        stock:[],
      }
    },
    setup() {
      const store = useProductStore()
      return {store}
    },
    methods: {
      getStoreData(){
        this.store.product.forEach( (e) => {
          this.stock.push(e)
        })
      },

    },
    mounted() {
      this.getStoreData()
      console.log("stock", this.stock)
    }
  }

</script>

<style scoped>

</style>