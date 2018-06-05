<template>
  <ul class="notes__list">
    <li is="note" v-for="note in notes" :key="note.id" :note="note"></li>
    <span class="notes__remaining">{{ remaining }} {{ remaining | pluralize }}</span>
  </ul>
</template>

<style lang="scss">
</style>

<script>
import Note from "~/components/note/Note";

export default {
  computed: {
    remaining: function () {
      return this.notes.length
    }
  },
  props: {
    notes: Array
  },
  components: {
    Note
  },
  filters: {
    pluralize: function (n) {
      return n === 1 ? "item" : "items"
    }
  },
};
</script>

