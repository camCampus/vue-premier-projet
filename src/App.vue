<script>


export default {

  data() {
    return {}
  },
  methods: {
    onListClick() {
      alert("CAM-TOWN BEST CITY =)")
    }
  }
}
</script>
<template>
  <div class="main-container">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Cities">List Of Cities</router-link>
      <router-link to="/City">City</router-link>
    </div>
    <div class="page-render">
      <router-view></router-view>
      <button @click="onListClick" >CLICK</button>
    </div>

  </div>

  <video playsinline autoplay loop muted>
    <source src="src/assets/broken-bridge-pixel-moewalls.com.mp4" >
  </video>




</template>

<style scoped>
video {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
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
  color: black;
  cursor: pointer;
  font-size: calc(1rem + 0.5vw);
}
.main-container {
  height: 100vh;
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
