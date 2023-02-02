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
 mounted() {
  fetch("https://pokeapi.co/api/v2/pokemon/6/")
      .then((res) => res.json())
      .then((poke) => {
        return poke.sprites.other["official-artwork"].front_shiny;
      })
      .then((url) => {
        const img = document.createElement("img");
        img.setAttribute("src", url);
        const draco = document.querySelector('.draco')
        draco.appendChild(img);
      });
}
  }
</script>

<style scoped>
</style>