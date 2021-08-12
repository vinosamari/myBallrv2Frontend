<template>
  <main>
    <!-- <search-bar></search-bar> -->
    <section class="teamCardSection" v-if="teams.length > 0">
      <team-card
        v-for="team in teams"
        :key="team.teamId"
        :team="team"
      ></team-card>
    </section>
    <div v-else class="offlineMsg">
      <h1>
        <strong>No Teams Available At This Time. Try Again Later.</strong>
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
    // this arrow function == this.teams = this.$store.state.teams
    teams: (state) => state.teams,
  }),

  mounted() {
    this.$store.dispatch("fetchAllTeams");
    // console.log(this.$store.getters.getNBAOnlyTeams);
  },
};
</script>

<style scoped>
main {
  @apply min-h-screen  flex flex-col items-center bg-blue-700  py-4;
}
.teamCardSection {
  @apply grid gap-6 mt-4 md:grid-cols-3 min-h-screen;
}
.offlineMsg {
  @apply text-center p-20 uppercase font-openSans
    tracking-widest text-4xl animate-pulse font-black mt-36;
}
</style>