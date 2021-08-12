<template>
  <section>
    <form @submit.prevent="logIn">
      <label for="email">Email</label
      ><input type="email" v-model="email" name="email" id="email" /><label
        for="password"
        >Password</label
      ><input
        type="password"
        v-model="password"
        name="password"
        id="password"
      />
      <button type="submit">Log in</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logIn() {
      console.log(this.email);
      console.log(this.password);
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
section {
  @apply min-h-screen;
}
form {
  @apply flex flex-col justify-evenly items-center mt-28;
}
label {
  @apply uppercase font-black text-xl text-myBlack mt-5 mb-2;
}
input {
  @apply border-0 rounded-lg w-3/4 focus:bg-transparent focus:ring-offset-myBlueLight text-center focus:text-myDullWhite font-poppins shadow-2xl;
}
button {
  @apply bg-myBlueDark px-6 py-3 mt-10 rounded-xl text-white font-black uppercase tracking-wider text-xl;
}
</style>