<template>
  <main>
    <search-bar></search-bar>
    <section class="teamCardSection">
      <team-card v-for="(i, index) in 30" :key="index"></team-card>
    </section>
  </main>
</template>

<script>
import SearchBar from "~/components/SearchBar.vue";
import TeamCard from "~/components/TeamCard.vue";
export default {
  components: { SearchBar, TeamCard },
  data() {
    return {
      teams: [],
    };
  },
};
</script>

<style scoped>
main {
  @apply min-h-screen  flex flex-col items-center bg-red-600 py-4;
}
.teamCardSection {
  @apply grid  gap-6 mt-4 md:grid-cols-3;
}
</style>