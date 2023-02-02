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
  props: ["name","weather","temperature","updatedAt" ],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#city {
  height: fit-content;
  width: 100%;
  max-width: 500px;
  background: rgba(245,223,235,0.9);
  border-radius: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: #344a53;
  font-size: calc(1rem + 1vw);
  margin: 1vw;

}
#city ul {
  list-style: none;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 3vw;
}
span {
  font-weight: bold;
}
</style>