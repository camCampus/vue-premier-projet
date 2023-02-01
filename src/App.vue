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
 | <router-link to="/">Accueil</router-link> |
  <router-link to="/Cities">Villes</router-link> |
  <router-view></router-view>

<button @click="onListClick" >CLICK</button>
</template>

<style scoped>


</style>
