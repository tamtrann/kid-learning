<template>
  <div class="thread">
    <button class="btn btn--dark-gray thread__btn" @click="newThread = true">Câu hỏi mới</button>
    <div class="thread__new" v-show="newThread">
      <img :src="user.avatar.url" :alt="user.name" class="thread__avatar">
      <el-input v-model="newContent" id="newContent" type="text" @keyup.enter.native="submitQuestion"></el-input>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      newThread: false,
      newContent: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    submitQuestion () {
      this.$emit('SubmitQuestion', this.newContent)
      this.newContent = ''
    }
  }
}
</script>
