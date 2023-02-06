<template>
  <h1>List Of Cities</h1>

  <div class="search">
    <h2>City name</h2>
    <input v-model="valueInput" >
    <input type="submit" value="Search" @click="onClick">
  </div>

  <div class="mainNavCard">
    <CitiesList :valForChild="cityName"/>
  </div>

</template>
<script >
import CitiesList from "@/components/CitiesList.vue";

export default {
  components: {
    CitiesList
  },

  data() {
    return {
      cityName:"",
      valueInput:""
    }
  },
  methods: {
    onClick(){
      this.cityName = this.valueInput
    }
  }
}
</script>

<style scoped>
  * {
    color: #344a53;
  }
.mainNavCard {
  height: fit-content;
  color: #324850;
  padding: 1vw;
  margin: 6vh 0;
  border-radius: 10px;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
}
h1 {
    color: #324850;
  margin: 2vh 0;
}

</style>