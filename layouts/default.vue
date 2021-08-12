<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>
export default {
  mounted() {
    AOS.refreshHard()
  },
}
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  @apply text-[0.85rem] md:text-sm lg:text-base;
}
body {
  @apply font-poppins bg-myMainBlue;
}
</style>