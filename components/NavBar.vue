<template>
  <nav>
    <p class="logo">logo</p>
    <div class="otherLinks">
      <p>Compare</p>
      <p>Register</p>
      <p>Login</p>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  @apply bg-blue-800 h-[10vh] w-screen flex items-center justify-between border-0 px-4;
}
.otherLinks {
  @apply flex gap-x-3;
}
.logo {
  @apply uppercase text-lg tracking-widest;
}
</style>