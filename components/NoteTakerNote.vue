<template>
  <li class="note" :class="{ editing: note == editedNote }">
    <el-input v-model="editedNote.name"></el-input>
    <el-input type="textarea" :rows="4" v-model="editedNote.content" ref="input" @keydown.native.exact.enter.prevent="doneEdit" @blur.native="doneEdit" @keyup.native.esc="cancelEdit"></el-input>
    <button class="note__remove" @click="deleteNote"><i class="material-icons">remove</i></button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      editedNote: JSON.parse(JSON.stringify(this.note))
    }
  },
  props: [
    'note'
  ],
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
