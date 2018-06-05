<template>
  <div>
    <p v-html="question.question"></p>
    <el-radio-group v-model="answer" @change="submitAnswer()">
      <el-radio v-for="(answer, index) in question.answers" :key="index" :label="answer">{{ answer }}</el-radio>
    </el-radio-group>
  </div>
</template>

<style lang="scss">
</style>

<script>
  import { mapMutations } from "vuex";

  export default {
  data() {
    return {
      answer: this.question.answer
    }
    },
    props: [
      "question"
    ],
    methods: {
      ...mapMutations({
        updateAnswer: "exercise/updateAnswer"
      }),
      submitAnswer() {
        this.updateAnswer({ question: this.question.question, answer: this.answer});
      }
    }
  }
</script>
