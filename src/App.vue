<script>
import CitiesList from "@/components/CitiesList.vue";

export default {
  components: {
    CitiesList
  },
  data() {
  },
  methods: {
    onListClick() {
      alert("connard")
    }
  }
}
</script>
<template>
<CitiesList></CitiesList>
<button @click="onListClick" >CLICK</button>
</template>

<style scoped>


</style>
