<template>
  <div class="thread">
    <button
      class="btn btn--white btn--round thread__btn"
      @click="newThread = true">Câu hỏi mới</button>
    <div
      v-show="newThread"
      class="thread__new" >
      <img
        :src="user.avatar.url"
        :alt="user.name"
        class="thread__avatar">
      <el-input
        id="newContent"
        v-model="newContent"
        type="text"
        @keyup.enter.native="submitQuestion"/>
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
