<template>
  <div class="home">
    <h1>HOME</h1>
  </div>
  <cities-list />
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