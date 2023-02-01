<template>
<div class="draco"></div>
</template>

<script>

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

export default {
  name: "Draco"
}
</script>

<style scoped>

</style>