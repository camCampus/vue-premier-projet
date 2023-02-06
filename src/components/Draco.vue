
<template>
  <div class="draco">
  <img :src=url>
  </div>
</template>

<script>

  export default {
    name: "Draco",
    data()  {
      return {
        url:""
      }
    },
    methods: {
      async getUrl() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/6/")
        const resJson = await res.json()
        return this.url = await resJson.sprites.other["official-artwork"].front_shiny
            },
    },
    created() {
      this.getUrl();
    },

}
</script>

<style scoped>
</style>