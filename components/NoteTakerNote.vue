<template>
  <li
    :class="{ editing: note == editedNote }"
    class="note">
    <el-input
      v-model="editedNote.name"/>
    <el-input
      ref="input"
      v-model="editedNote.content"
      :rows="4"
      type="textarea"
      @keydown.native.exact.enter.prevent="doneEdit"
      @blur.native="doneEdit"
      @keyup.native.esc="cancelEdit"/>
    <button
      class="note__remove"
      @click="deleteNote"><i class="fa fa-trash"/></button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editedNote: JSON.parse(JSON.stringify(this.note))
    }
  },
  methods: {
    ...mapMutations({
      edit: 'note/EDIT_NOTE',
      remove: 'note/REMOVE_NOTE'
    }),
    deleteNote () {
      this.remove({ id: this.note.id })
    },
    doneEdit: function () {
      if (this.editedNote.name.trim() && this.editedNote.content.trim()) {
        this.edit({ id: this.note.id, note: this.editedNote })
        this.$refs.input.blur()
      }
    },
    cancelEdit: function () {
      this.editedNote = this.note.note
      this.$refs.input.blur()
    }
  }
}
</script>
