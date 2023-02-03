<!--<template>-->
<!--  {{getDraco}}-->
<!--</template>-->

<!--<script>-->


<!--export default {-->
<!--  name: "Draco",-->
<!--  computed: {-->
<!--    getDraco() {-->
<!--      fetch("https://pokeapi.co/api/v2/pokemon/6/")-->
<!--          .then((res) => res.json())-->
<!--          .then((poke) => {-->
<!--            return poke.sprites.other["official-artwork"].front_shiny;-->
<!--          })-->
<!--          .then((url) => {-->
<!--            const img = document.createElement("img");-->
<!--            img.setAttribute("src", url);-->
<!--            console.log("img", img)-->
<!--            return img-->
<!--          });-->
<!--    }-->

<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--img {-->
<!--  height: fit-content;-->
<!--  width: fit-content;-->

<!--}-->
<!--</style>-->


<template>
  <div class="draco">

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
        return await resJson.sprites.other["official-artwork"].front_shiny
            },
      async displayImg() {
        const img = document.createElement("img");

        const url = this.url
        img.setAttribute("src", url);
        const draco = document.querySelector('.draco')
        draco.appendChild(img);
      }
    },
    created() {
      this.url = this.getUrl();
      console.log(this.url)
    },
    mounted() {
      this.displayImg()
      }
}
</script>

<style scoped>
</style>