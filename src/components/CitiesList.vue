<template>
<h1>Weather - List Of Cities</h1>
  <h1>{{myDate}}</h1>
  <div class="wrapper">
    <city
        v-for="item in cities"
        :name="item.name"
        :weather="item.weather"
        :temperature="item.temperature"
        :updated-at="item.updateAt">
    </city>
  </div>

  <div class="wrapper">
    <city v-for="item in cities"
          v-bind="item"></city>
  </div>

<!--  <div  class="wrapper">-->
<!--    <div v-for="item in cities">-->
<!--      <city :name="item.name"/>-->
<!--      <city :weather="item.weather"/>-->
<!--      <city :temperature="item.temperature"/>-->
<!--      <city :updated-at="item.updateAt"/>-->
<!--    </div>-->

<!--  </div>-->
</template>

<script>
import City from "@/components/City.vue";



export default {
  components:{
    City
  },
  name: "CitiesList",
  data() {
    return {
      myDate:"",
      cities: [
        {
          id:1,
          name:"Cam-Town",
          weather:"Sunshine",
          temperature:26.5,
          updateAt:this.getNewDate()
        },
        {
          id:2,
          name: 'Paris',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: this.getNewDate()
        },
        {
          id:3,
          name: 'Brest',
          weather: 'Vent fort',
          temperature: 19.5,
          updatedAt: this.getNewDate()
        }
      ]
    }
  },
  // mounted() {
  //   this.myDate = this.getNewDate()
  // },
  created() {
    this.myDate = this.getNewDate()
  },

  methods: {
      getNewDate: () => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time
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