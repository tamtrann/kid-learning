<template>
  <div class="note__new">
    <el-input
      v-model="newNote.name"
      placeholder="Tên ghi chú"/>
    <el-input
      v-model="newNote.content"
      :rows="4"
      type="textarea"
      placeholder="Nội dung ghi chú"
      @keydown.native.exact.enter.prevent="addNote"/>
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
        this.newNote = {
          name: '',
          content: ''
        }
      }
    }
  }
}
</script>
