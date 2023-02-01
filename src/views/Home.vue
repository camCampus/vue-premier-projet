<template>
  <div class="mainNavCard">
    <h1>Home</h1>
    <cities-list />
  </div>
</template>

<script>
import CitiesList from "@/components/CitiesList.vue";

export default {
  components: {CitiesList},
  data() {
    return {}
  }
}
</script>

<style>
.mainNavCard {
  color: #324850;
  padding: 1vw;
  margin: 1vw;
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  background: rgba(245,223,235,0.9);
}
</style>