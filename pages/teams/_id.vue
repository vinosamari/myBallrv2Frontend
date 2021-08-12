<template>
  <section v-if="teamPlayers.length > 0">
    <player-card
      v-for="player in teamPlayers"
      :key="player.id"
      :player="player"
    ></player-card>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      teamPlayers: this.$store.state.players,
    };
  },
  methods: { ...mapActions(["getTeamDetails"]) },
  mounted() {
    let teamID = this.$route.params.id;
    this.getTeamDetails(teamID);
    console.log(this.teamPlayers);
  },
};
</script>

<style scoped>
section {
  @apply min-h-screen flex flex-col justify-center items-center text-myDullWhite;
}
</style>