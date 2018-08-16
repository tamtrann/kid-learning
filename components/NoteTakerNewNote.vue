<template>
  <div class="note__new">
    <el-input placeholder="Tên ghi chú" v-model="newNote.name"></el-input>
    <el-input type="textarea" :rows="4" placeholder="Nội dung ghi chú" v-model="newNote.content" @keydown.native.exact.enter.prevent="addNote"></el-input>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

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
    ...mapMutations({
      add: 'note/ADD_NOTE'
    }),
    addNote () {
      if (this.newNote.name.trim() && this.newNote.content.trim()) {
        this.add({ note: this.newNote })
        this.newNote = {
          name: '',
          content: ''
        }
      }
    }
  }
}
</script>
