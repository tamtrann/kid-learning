<template>
  <div>
    <h3 class="exercise__title">{{ title }}</h3>
    <countdown
      :time="timeLimitation * 60 * 1000"
      @countdownend="submit">
      <p
        slot-scope="props"
        class="exercise__time">Thời gian còn lại：{{ props.minutes }} phút, {{ props.seconds }} giây.</p>
    </countdown>
    <exercise-question
      v-for="(exerciseQuestion, index) in exerciseQuestions"
      :key="index"
      :question="exerciseQuestion"
      :index="index"/>
    <button
      class="btn btn--green"
      @click="getScore"><i class="fas fa-check"/>HOÀN TẤT</button>
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
      this.$alert('Điểm đạt được: ' + this.grade + '/' + this.exerciseQuestions.length, 'KẾT QUẢ', {
        // showCancelButton: true,
        confirmButtonText: 'Hoàn tất',
        // cancelButtonText: 'Làm lại',
        callback: action => {
          this.$modal.hide('exercise')
          this.$message({
            type: 'success',
            message: `Cập nhật điểm thành công`
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
    color: $color-theme;
    margin-bottom: rem(20);
  }

  &__time {
    color: rgba($color: $color-red, $alpha: 0.8);
    font-weight: $font-weight-bold;
    margin-bottom: rem(10);
  }
}
</style>
