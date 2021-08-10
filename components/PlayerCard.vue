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
      return `${this.player.first_name} ${this.player.last_name}`;
    },
    playerPosition() {
      return this.player.position ? this.player.position : "-";
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