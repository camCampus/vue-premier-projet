<template>
<div id="city">
  <ul>
    <li><span>Name: </span>{{name}}</li>
    <li><span>Weather: </span>{{weather}}</li>
    <li><span>Temperature: </span>{{temperature}}C°</li>
    <li><span>UpdatedAt: </span>{{updatedAt}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {

      name: 'CAM-TOWN',
      weather: 'Always perfect weather',
      temperature: 26.55,
      updatedAt: new Date().toLocaleDateString()
    }
  }
}
</script>

<style scoped>
#city {
  height: fit-content;
  width: 100%;
  max-width: 500px;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: black;

}
#city ul {
  list-style: none;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 5vw;
}
span {
  font-size: 20px;
  font-weight: bold;
}
</style>