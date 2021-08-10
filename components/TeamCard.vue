<template>
  <section @click="teamPopup">
    <figure>
      <img :src="teamLogo" />
      <figcaption>
        <h2>{{ team.fullName }}</h2>
        <h3>
          <small>{{ team.city }}</small>
        </h3>
        <nuxt-link to="`/teams/${team.id}`">Team Profile</nuxt-link>
      </figcaption>
      <!-- <div>
        <player-card
          :key="player.id"
          v-for="player in players"
          :player="player"
        ></player-card>
      </div> -->
    </figure>
  </section>
</template>

<script>
export default {
  data() {
    return {
      players: [],
    };
  },
  props: ["team"],
  methods: {
    teamPopup() {
      console.log(this.team.id);
    },
  },
  computed: {
    teamLogo() {
      return this.team.logo;
    },
  },
};
</script>

<style scoped>
section {
  @apply mx-10 mb-8  bg-gradient-to-br  from-blue-700 to-red-700 p-4 rounded-xl text-white shadow-2xl text-center md:text-right border-4 border-gray-700;
}
figure {
  @apply flex justify-evenly gap-10 items-center md:flex-col;
}
img {
  @apply rounded-full;
}
h2 {
  @apply uppercase font-bold tracking-wider mb-4;
}
h4 {
  @apply text-xs font-openSans font-bold tracking-widest uppercase;
}
h3 {
  @apply mb-2 capitalize text-lg;
}
</style>