<template>
  <main>
    <search-bar></search-bar>
    <section class="teamCardSection" v-if="teams.length > 0">
      <team-card v-for="team in teams" :key="team.id" :team="team"></team-card>
    </section>
    <div v-else class="offlineMsg">
      <h1>
        <strong>The Internet Connection Appears To Be Offline!</strong>
      </h1>
    </div>
    <p>
      <!-- <strong>{{ this.$store.state.teams }}</strong> -->
    </p>
  </main>
</template>

<script>
import PlayerCard from "~/components/PlayerCard.vue";
import SearchBar from "~/components/SearchBar.vue";
import TeamCard from "~/components/TeamCard.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { SearchBar, TeamCard, PlayerCard },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchAllTeams"]),
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    teams: (state) => state.teams,
  }),

  mounted() {
    this.$store.dispatch("fetchAllTeams");
  },
};
</script>

<style scoped>
main {
  @apply min-h-screen  flex flex-col items-center bg-gradient-to-br from-blue-700 to-red-700 py-4;
}
.teamCardSection {
  @apply grid gap-6 mt-4 md:grid-cols-3;
}
.offlineMsg {
  @apply text-center p-20 uppercase tracking-widest text-xl font-poppins animate-pulse;
}
</style>