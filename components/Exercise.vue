<template>
  <div>
    <h3 class="exercise__title">{{ title }}</h3>
    <countdown :time="timeLimitation * 60 * 1000" @countdownend="submit">
      <p slot-scope="props" class="exercise__time">Thời gian còn lại：{{ props.minutes }} phút, {{ props.seconds }} giây.</p>
    </countdown>
    <exercise-question v-for="(exerciseQuestion, index) in exerciseQuestions"
                     :key="index" :question="exerciseQuestion" :index="index"></exercise-question>
    <el-button type="success" @click="submit">HOÀN TẤT</el-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ExerciseQuestion from '~/components/ExerciseQuestion'

export default {
  components: {
    ExerciseQuestion
  },
  computed: {
    ...mapGetters({
      title: 'exercise/title',
      exerciseQuestions: 'exercise/exerciseQuestions',
      grade: 'exercise/grade',
      timeLimitation: 'exercise/timeLimitation'
    })
  },
  methods: {
    ...mapMutations({
      submit: 'exercise/SUBMIT'
    }),
    getScore () {
      this.$alert('Your score:' + this.grade, 'Congratulations', {
        confirmButtonText: 'OK',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.exercise {
  &__title {
    margin-bottom: rem(20);
  }

  &__time {
    color: rgba($color: $color-white, $alpha: 0.8);
    font-weight: $font-weight-bold;
    margin-bottom: rem(10);
  }
}
</style>
