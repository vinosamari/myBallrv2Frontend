<template>
  <nav>
    <nuxt-link to="/" class="logo">Home</nuxt-link>
    <div class="otherLinks">
      <!-- <nuxt-link to="/">Compare</nuxt-link> -->
      <nuxt-link to="/">Sign Up</nuxt-link>
      <nuxt-link class="loginButton" to="/login">Log In</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  @apply bg-blue-800 h-[10vh] w-screen flex items-center justify-between border-0 px-8 shadow-customOne text-myDullWhite;
}
.otherLinks {
  @apply flex gap-x-5 uppercase py-2 text-sm tracking-widest items-center;
}

.logo {
  @apply uppercase text-lg tracking-widest font-black;
}
.loginButton {
  @apply bg-blue-900 text-myDullWhite font-black px-4 py-3 tracking-widest shadow-2xl rounded-lg;
}
</style>