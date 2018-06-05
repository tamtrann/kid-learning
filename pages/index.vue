<template>
  <section class="container">
    <h1 class="title">kid-learning</h1>
    <h2 class="subtitle">Nuxt.js project</h2>
    <div class="links">
      <a href="https://nuxtjs.org/" target="_blank" class="btn btn--green">Documentation</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="btn btn--gray">GitHub</a>
    </div>
    <note-taker></note-taker>
    <exercise></exercise>
  </section>
</template>

<script>
import Exercise from "~/components/Exercise";
import NoteTaker from "~/components/NoteTaker";

export default {
  components: {
    Exercise,
    NoteTaker,
  },
  middleware: ["exercise"]
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
