<template>
  <li class="note" :class="{ editing: note.note == editedNote }">
    <el-input placeholder="Please input" v-model="editedNote" v-todo-focus="note.note == editedNote" @keyup.native.enter="doneEdit()" @blur.native="doneEdit()" @keyup.native.esc="cancelEdit()"></el-input>
    <el-button class="note__remove" type="danger" icon="el-icon-delete" circle @click.native="deleteNote()"></el-button>
  </li>
</template>

<style lang="scss">
</style>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      editedNote: this.note.note
    }
  },
  props: [
    "note"
  ],
  methods: {
    ...mapMutations({
      edit: "note/edit",
      remove: "note/remove"
    }),
    deleteNote() {
      this.remove({ id: this.note.id });
    },
    // editNote: function (note) {
    //   this.beforeEditCache = todo.title;
    //   this.editedTodo = todo;
    // },
    doneEdit: function () {
      if (this.editedNote.trim()) {
        this.edit({ id: this.note.id, note: this.editedNote });
        // this.editedNote = "";
      }
    },
    cancelEdit: function () {
      this.editedNote = this.note.note
    },
  },
  directives: {
    "todo-focus": function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>
