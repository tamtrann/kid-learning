<template>
  <div class="book">
    <div class="book-sidebar">
      <div class="book-buttons">
        <nuxt-link to="/dashboard" class="btn">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
        <button class="btn" @click="showNote">
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
        <el-collapse v-model="activePart" accordion>
          <el-collapse-item
            v-for="part in book.parts"
            :key="part.id" :title="part.name" :name="part.name"
            class="el-collapse-part">
            <el-collapse v-model="activeChapter" accordion>
              <el-collapse-item
                v-for="chapter in part.chapters"
                :key="chapter.id" :title="chapter.name" :name="chapter.name"
                class="el-collapse-chapter">
                <el-collapse v-model="page" accordion @change="getNotes">
                  <el-collapse-item
                    v-for="lesson in chapter.lessons"
                    :key="lesson.id" :title="lesson.name" :name="lesson.page" :id="lesson.id"
                    class="el-collapse-lesson" ref="lesson">
                    <p class="book-intro">{{ lesson.introduction }}</p>
                    <button
                      v-if="lesson.exercises" v-for="(exercise, index) in lesson.exercises" :key="index"
                      class="btn btn--simple" @click="getExercise(exercise)"><i class="far fa-file-alt"></i>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      activePart: '',
      activeChapter: '',
      activeLesson: '',
      page: 0
    }
  },
  props: ['book'],
  methods: {
    getExercise (exercise) {
      this.$emit('GetExercise', exercise)
    },
    getNotes () {
      let selectedLesson = this.$refs.lesson.find(el => el.isActive)
      let selectedId = selectedLesson.$el.id
      this.$emit('GetNotes', selectedId)
    },
    showNote () {
      this.$emit('ShowNote')
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
  width: 100%;
  height: 100vh;

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
    background-color: $color-white;
    box-shadow: $box-shadow-light;
    overflow: hidden;
    padding: 30px 15px;
    position: fixed;
    width: 100%;
    z-index: 1;

    @include media(">=sm") {
      height: 100%;
      padding: 46px rem(25);
      position: relative;
      width: 300px;
    }

    .btn {
      background-color: none;
      border: none;
      color: $color-text;
      font-size: $font-size-sm;
      font-weight: $font-weight-semi;
      margin-left: 0;
      opacity: 0.7;
      padding: 0;

      &:hover {
        color: $color-theme;
        opacity: 1;
      }
    }
  }

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include media(">=sm") {
      margin-bottom: rem(20);
    }
  }

  &-intro {
    color: rgba($color: $color-text, $alpha: 0.8);
    font-size: $font-size-sm;
    margin-bottom: rem(15);
    text-align: justify;
  }

  &-lessons {
    display: none;

    @include media(">=sm") {
      display: block;
      height: -webkit-fill-available;
      overflow-x: hidden;
      overflow-y: scroll;
      z-index: 2;
    }
  }

  .btn {
    box-shadow: none;
  }
}

.el-collapse {
  &-item {
    &__header {
      .el-collapse-part & {
        font-size: $font-size-p;
        font-weight: $font-weight-bold;
      }

      .el-collapse-chapter & {
        font-size: $font-size-sm;
        font-weight: $font-weight-normal;
        text-transform: uppercase;
      }

      .el-collapse-lesson & {
        letter-spacing: 0.5px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
