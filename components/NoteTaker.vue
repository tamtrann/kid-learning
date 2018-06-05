<template>
  <div class="notes">
    <new-note></new-note>
    <all-note :notes="notes"></all-note>
  </div>
</template>

<style lang="scss">
.notes {
  @include block-center;

  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: 130px 0 40px 0;
  max-width: 600px;
  position: relative;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      border-bottom: 1px solid #ededed;
    }
  }

  &__remaining {
    margin: 1rem 60px;
  }

  input {
    border: none;
    font-size: 24px;
    font-weight: $font-weight-light;
    padding-left: 0;

    @include placeholder {
      color: #212121;
      font-size: 24px;
      font-style: italic;
      font-weight: $font-weight-light;
    }
  }
}

.note {
  display: flex;
  justify-content: space-between;
  padding: 16px 60px;

  &__remove {
    opacity: 0;

    .note:hover & {
      opacity: 1;
    }
  }
  &__new {
    background: rgba(0, 0, 0, 0.003);
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    font-size: 24px;
    margin: 0;
    padding: 16px 16px 16px 60px;
    position: relative;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>

<script>
import { mapGetters } from "vuex";

import AllNote from "~/components/note/AllNote";
import NewNote from "~/components/note/NewNote";

export default {
  components: {
    AllNote,
    NewNote
  },

  computed: {
    ...mapGetters({
      notes: "note/notes"
    })
  }
}
</script>
