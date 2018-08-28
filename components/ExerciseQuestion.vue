<template>
  <div class="question">
    <p class="question__text">{{ index + 1 }}. <span v-html="question.content"/></p>
    <img
      v-if="question.image"
      :src="question.image"
      class="question__img">
    <template v-if="question.type === 'oneChoice'">
      <el-radio-group
        v-model="single"
        @change="checkSingle">
        <el-radio
          v-for="(item, index) in question.answers"
          :key="index"
          :label="item"
          :class="{ 'el-radio--success': submitted && item.isCorrect,
                    'el-radio--danger': submitted && !item.isCorrect,
                    'disabled': submitted }">{{ item.content }}</el-radio>
      </el-radio-group>
    </template>
    <template v-if="question.type === 'multipleChoice'">
      <el-checkbox-group
        v-model="multiple"
        @change="checkMultiple">
        <el-checkbox
          v-for="(item, index) in question.answers"
          :key="index"
          :label="item"
          :class="{ 'el-checkbox--success': submitted && item.isCorrect,
                    'el-checkbox--danger': submitted && !item.isCorrect,
                    'disabled': submitted }">{{ item.content }}</el-checkbox>
      </el-checkbox-group>
    </template>
    <template v-if="question.type === 'fillInTheBlank'">
      <el-input
        v-for="(item, index) in question.answers"
        :key="index"
        :placeholder="index + 1"
        v-model="blank[index]"
        :class="{ 'el-input--success': submitted && item.isCorrect,
                  'el-input--danger': submitted && !item.isCorrect,
                  'disabled': submitted }"
        @change="checkBlank"/>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      single: null,
      multiple: [],
      blank: [],
      isCorrect: false
    }
  },
  computed: {
    ...mapGetters({
      submitted: 'exercise/submitted'
    })
  },
  watch: {
    isCorrect (val, oldVal) {
      if (val === !oldVal) {
        if (this.isCorrect) {
          this.setGrade(1)
        } else {
          this.setGrade(-1)
        }
      }
    }
  },
  methods: {
    ...mapMutations({
      setGrade: 'exercise/SET_GRADE'
    }),
    checkSingle () {
      this.single.isCorrect === true ? this.isCorrect = true : this.isCorrect = false
    },
    checkMultiple () {
      let totalCorrectAnswersCount = this.question.answers.filter(answer => answer.isCorrect === true).length
      let totalAnswersCount = this.multiple.length
      let correctAnswersCount = this.multiple.filter(answer => answer.isCorrect === true).length
      totalCorrectAnswersCount === totalAnswersCount && totalCorrectAnswersCount === correctAnswersCount ? this.isCorrect = true : this.isCorrect = false
    },
    checkBlank () {
      JSON.stringify(this.question.answers) === JSON.stringify(this.blank) ? this.isCorrect = true : this.isCorrect = false
    }
  }
}
</script>

<style lang="scss">
.question {
  margin-bottom: rem(20);

  &__img {
    display: block;
    margin-bottom: rem(16);
  }

  &__text {
    color: rgba($color: $color-text, $alpha: 0.8);
    font-size: $font-size-p;
    font-weight: $font-weight-bold;
    margin-bottom: rem(8);

    p {
      color: inherit;
    }
  }

  .el-radio {
    color: rgba($color: $color-text, $alpha: 0.8);
  }

  .el-input {
    margin-right: rem(10);
    width: auto;
  }
}
</style>
