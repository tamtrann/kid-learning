<template>
  <div class="notes">
    <h2 class="notes__heading">Ghi chú</h2>
    <note-taker-new-note @AddNote="onAddNote"/>
    <!-- {{ lessonId }} -->
    <ul class="notes__list">
      <li
        is="note-taker-note"
        v-for="note in notes(lessonId)"
        :key="note.id"
        :note="note"/>
      <span class="notes__remaining">{{ remaining }} ghi chú</span>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoteTakerNote from '~/components/NoteTakerNote'
import NoteTakerNewNote from '~/components/NoteTakerNewNote'

export default {
  components: {
    NoteTakerNote,
    NoteTakerNewNote
  },
  props: {
    lessonId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      notes: 'note/notes'
    }),
    remaining () {
      return this.notes(this.lessonId).length
    }
  },
  methods: {
    onAddNote (newNote) {
      this.$emit('AddNote', newNote)
    }
  }
}
</script>

<style lang="scss">
.notes {
  @include block-center;

  background: $color-white;
  max-width: 600px;
  position: relative;

  &__heading {
    color: #2e3d49;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      border-bottom: 1px solid #ededed;
    }
  }

  &__remaining {
    margin: 1rem 0;
  }

  input {
    border: none;
    font-weight: $font-weight-light;
    padding-left: 0;

    @include placeholder {
      // font-style: italic;
      font-weight: $font-weight-light;
    }

    &:focus {
      box-shadow: none;
    }
  }
}

.note {
  margin-top: rem(10);
  position: relative;

  &__remove {
    background-color: transparent;
    border: none;
    color: $color-red;
    opacity: 0;
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 0;

    .note:hover & {
      opacity: 0.8;
    }
  }

  &__new {
    background: rgba(0, 0, 0, 0.003);
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    margin: 0;
    // padding: 16px 16px 16px 60px;
    position: relative;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    font-weight: $font-weight-bold;
    padding-right: rem(30);
  }
}
</style>
