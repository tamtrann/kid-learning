<template>
  <div class="book">
    <div class="book-sidebar">
      <div class="book-buttons">
        <nuxt-link to="/dashboard" class="btn">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
        <button class="btn" @click="showNote = true">
          <i class="fas fa-sticky-note"></i>
        </button>
        <button class="btn" @click="$modal.show('mindmap')">
          <i class="fas fa-project-diagram"></i>
        </button>
        <button class="btn" @click="$modal.show('thread')">
          <i class="fas fa-question"></i>
        </button>
      </div>
      <div class="book-lessons">
        <!-- @change="toLesson()" -->
        <el-collapse v-model="activePart" accordion>
          <el-collapse-item v-for="part in book.parts" :key="part.id" :title="part.name" :name="part.name">
            <el-collapse v-model="activeChapter" accordion>
              <el-collapse-item v-for="chapter in part.chapters" :key="chapter.id" :title="chapter.name" :name="chapter.name">
                <el-collapse v-model="page" accordion>
                  <el-collapse-item v-for="lesson in chapter.lessons" :key="lesson.id" :title="lesson.name" :name="lesson.page">
                    <p class="book-intro">{{ lesson.introduction }}</p>
                    <button v-if="lesson.exercises" v-for="(exercise, index) in lesson.exercises" :key="index"
                            class="btn btn--simple text-white" @click="getExercise(exercise)"><i class="far fa-file-alt"></i>
                      {{ exercise.title }}
                    </button>
                    <!-- <thread-modal v-if="lesson.questions" :threads="lesson.questions"/> -->
                  </el-collapse-item>
                </el-collapse>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="book-reader">
      <iframe
        :src="'/books/' + this.$route.params.book +'/index.html#p=' + page"
        type="application/pdf"
        frameborder="0"
        ref="book"
      ></iframe>
    </div>
    <vk-offcanvas flipped overlay :show.sync="showNote">
      <note-taker/>
    </vk-offcanvas>
    <thread-modal/>
  </div>
</template>

<script>
import NoteTaker from '~/components/NoteTaker'
import ThreadModal from '~/components/ThreadModal'

export default {
  data () {
    return {
      activePart: '',
      activeChapter: '',
      activeLesson: '',
      page: 0,
      showNote: false
    }
  },
  props: ['book'],
  components: {
    NoteTaker,
    ThreadModal
  },
  methods: {
    getExercise (exercise) {
      this.$store.commit('exercise/SET_QUESTIONS', exercise)
      this.$modal.show('exercise')
    }
  },
  watch: {
    page (val, oldVal) {
      if (val && val !== oldVal) {
        this.$refs.book.contentWindow.location.reload()
      }
    }
  }
}
</script>

<style lang="scss">
.book {
  display: flex;
  align-items: flex-start;

  &-reader {
    box-shadow: $box-shadow-normal;
    position: relative;
    flex-grow: 1;
    // padding-bottom: 56.25%;
    // height: 0;
    // overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
    }
  }

  &-sidebar {
    background-color: #2e3d49;
    box-shadow: $box-shadow-light;
    width: 300px;
    height: 100vh;
    min-height: 400px;
    padding: 46px rem(25);
    position: relative;

    .btn {
      background-color: none;
      border: none;
      color: $color-white;
      font-weight: $font-weight-semi;
      opacity: 0.7;
      padding: 0;

      &:hover {
        opacity: 1;
      }
    }
  }

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(20);
  }

  &-intro {
    color: rgba($color: $color-white, $alpha: 0.6);
    margin-bottom: rem(15);
  }

  &-lessons {
    height: -webkit-fill-available;
    overflow: scroll;
    z-index: 1;
  }

  .btn {
    box-shadow: none;
  }
}

.el-collapse {
  border: none;
  list-style: none;
  padding-left: 0;

  &-item {
    cursor: pointer;
    padding: rem(15) 0;

    &__arrow {
      line-height: inherit;
      margin-left: 4px;
    }

    &__content {
      margin-top: rem(10);
      padding-bottom: 0;
    }

    &__header {
      @extend %default-transition-style;

      background-color: transparent;
      border-bottom: none;
      color: $color-white;
      font-family: $font-primary;
      font-size: $font-size-p;
      font-weight: $font-weight-bold;
      height: auto;
      line-height: 1.5;
      opacity: 0.5;

      &:hover,
      &.is-active {
        opacity: 1;
      }

      &:focus {
        color: $color-white;
      }
    }

    &__wrap {
      background-color: transparent;
      border-bottom: none;
    }
  }
}
</style>
