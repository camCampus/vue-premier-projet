<script>
export default {
  data() {
    return {}
  },
}
</script>

<template>
  <div class="main-container">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Cities">List Of Cities</router-link>
      <router-link to="/Map">Map</router-link>
    </div>
    <div class="page-render">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.nav {
  height: 8vh;
  width: 100%;
  background-color: #fdd6d9;
  display: flex;
  align-items: center;
  justify-content: right;
}
.nav > * {
  margin: 1vh;
  text-decoration: none;
  color: #344a53;
  cursor: pointer;
  font-size: calc(1rem + 0.5vw);
}
.main-container {
  min-height: 100vh;
  width: 100%;
}
.page-render {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}
</style>
