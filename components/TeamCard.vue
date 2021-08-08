<template>
  <section>
    <figure>
      <img src="https://picsum.photos/100" alt="teamImg" />
      <figcaption>
        <p>Team Name</p>
        <p>Team City</p>
      </figcaption>
    </figure>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  @apply m-10 bg-blue-800 p-4 rounded-xl;
}
figure {
  @apply flex justify-between gap-10 items-center;
}
img {
  @apply rounded-full;
}
</style>