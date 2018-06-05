<template>
  <div>
    <select-question v-for="question in questions" :key="question.question" :question="question"></select-question>
    <el-button type="primary" @click="getScore()">Finish</el-button>
  </div>
</template>

<style lang="scss">
</style>

<script>
  import { mapGetters } from "vuex";

  import SelectQuestion from "~/components/exercise/SelectQuestion";

  export default {
    data() {
      return {
        scoreIsShown: false
      }
    },
    components: {
      SelectQuestion
    },
    computed: {
      ...mapGetters({
        questions: "exercise/questions",
        score: "exercise/score"
      }),
    },
    methods: {
      getScore() {
        this.$alert("Your score:" + this.score, "Congratulations", {
          confirmButtonText: "OK",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
