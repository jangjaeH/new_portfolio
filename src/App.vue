<template>
  <div id="app">
    <ScrollSlide />
  </div>
</template>

<script>
import ScrollSlide from "./components/ScrollSlide.vue";

export default {
  data() {
    return {};
  },
  components: {
    ScrollSlide,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
