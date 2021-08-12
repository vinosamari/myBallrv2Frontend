<template>
  <section
    @click="teamPopup"
    data-aos="flip-up"
    data-aos-offset="80"
    data-aos-duration="950"
    data-aos-easing="ease-in-out-cubic"
  >
    <figure>
      <img
        :src="teamLogo ? teamLogo : require('../assets/img/nba_logo.png')"
        height="60"
        width="60"
        alt="team logo"
      />
      <figcaption class="teamCaption">
        <h2 class="teamName">{{ team.fullName }}</h2>
        <h3 class="teamDivision">
          <small>{{ team.leagues.standard.confName }}</small>
        </h3>
        <nuxt-link class="profileLink" :to="`/teams/${team.teamId}`"
          >Profile</nuxt-link
        >
      </figcaption>
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
      console.log(this.team.teamId);
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
  @apply mx-10  bg-gradient-to-bl  from-myBlueDark to-myBlack p-8 rounded-xl text-white  text-center md:text-center h-auto shadow-customTwo;
}
figure {
  @apply flex justify-evenly gap-10 items-center md:flex-col;
}
img {
  @apply object-cover rounded-md;
}
.teamCaption {
  @apply flex flex-col justify-evenly items-center gap-y-2;
}
.teamName {
  @apply uppercase font-bold tracking-wider text-[1.2rem] leading-loose;
}
h4 {
  @apply text-xs font-openSans font-bold tracking-widest uppercase;
}
.teamDivision {
  @apply mb-2 uppercase tracking-widest text-lg;
}
.profileLink {
  @apply bg-myRed px-3 py-2 rounded-lg uppercase tracking-widest text-myBlack text-xl;
}
</style>