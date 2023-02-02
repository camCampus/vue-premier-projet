<template>
<h1>Weather - List Of Cities</h1>
  <city :name="name"
  :weather="weather"
  :temperature="temperature"
  :updated-at="updateAt"></city>
</template>

<script>
import City from "@/views/City.vue";
import city from "@/views/City.vue";

export default {
  computed: {
    city() {
      return city
    }
  },
  components:{
    City
  },
  name: "CitiesList",
  data() {
    return {
      name:"Cam-Town",
      weather:"Sunshine",
      temperature:26.5,
      updateAt: new Date().toLocaleDateString()
    }
  }
}
</script>

<style scoped>

</style>