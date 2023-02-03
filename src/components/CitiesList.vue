<template>
<h1>Weather - List Of Cities</h1>
  <div class="wrapper">
    <city
        v-for="item in cities"
        :name="item.name"
        :weather="item.weather"
        :temperature="item.temperature"
        :updated-at="item.updatedAt"
    :time-ago="this.t">
    </city>
  </div>

  <div class="wrapper">
    <city v-for="item in cities"
          v-bind="item"></city>
  </div>

</template>

<script>
import City from "@/components/City.vue";
import { format, render, cancel, register } from 'timeago.js';


export default {
  components:{
    City
  },
  name: "CitiesList",
  data() {
    return {
      t:null,
      cities: [
        {
          id:1,
          name:"Cam-Town",
          weather:"Sunshine",
          temperature:26.5,
          updatedAt:this.getNewDate(),
          timeAgo:""
        },
        {
          id:2,
          name: 'Paris',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: this.getNewDate(),
          timeAgo:""
        },
        {
          id:3,
          name: 'Brest',
          weather: 'Vent fort',
          temperature: 19.5,
          updatedAt: this.getNewDate(),
          timeAgo:""
        }
      ]
    }
  },
mounted() {
    setInterval(() => {
      this.t = this.timeAgo()
    },1000)
},
  methods: {
      getNewDate() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time
      },
      timeAgo() {
        return format(new Date(this.myDate))
      }
    }
}
</script>

<style scoped>
.wrapper {
  height: fit-content;
  width: 100%;
  display: flex;
}
@media screen and (max-width: 800px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>