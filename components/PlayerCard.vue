<template>
  <div>
    <p class="fullName">{{ fullName }}</p>
    <p>{{ playerPosition }}</p>
  </div>
</template>

<script>
export default {
  props: ["player"],
  computed: {
    fullName() {
      return `${this.player.firstName} ${this.player.lastName}`;
    },
    playerPosition() {
      return this.player.leagues.standard ? this.player.leagues.standard : "-";
    },
  },
};
</script>

<style scoped>
main {
  @apply bg-blue-900 text-center tracking-widest font-poppins uppercase mb-8 py-2 rounded-2xl shadow-2xl;
}
.fullName {
  @apply mb-4;
}
</style>