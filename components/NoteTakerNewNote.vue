<template>
  <div class="note__new">
    <el-input placeholder="Tên ghi chú" v-model="newNote.name"></el-input>
    <el-input type="textarea" :rows="4" placeholder="Nội dung ghi chú"
      v-model="newNote.content"
      @keydown.native.exact.enter.prevent="addNote"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newNote: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    addNote () {
      if (this.newNote.name.trim() && this.newNote.content.trim()) {
        this.$emit('AddNote', this.newNote)
        // this.add({ note: this.newNote })
        this.newNote = {
          name: '',
          content: ''
        }
      }
    }
  }
}
</script>
