<template>
  <main>
    <section class="course-main">
      <div class="container-fluid">
        <book-reader :book="book"/>
        <exercise-modal/>
        <mindmap-modal/>
      </div>
    </section>
    <!-- <geo-chart
      label="Population"
      :data="[
        ['Country', 'Population'],
        ['France', 65700000]]"
        ></geo-chart> -->
  </main>
</template>

<script>
import axios from 'axios'
import ExerciseModal from '~/components/ExerciseModal'
import MindmapModal from '~/components/MindmapModal'
import BookReader from '~/components/BookReader'
import Timeline from '~/components/Timeline'

export default {
  data () {
    return {
      book: {}
    }
  },
  components: {
    ExerciseModal,
    MindmapModal,
    BookReader,
    Timeline
  },
  created () {
    this.book = this.$route.params.book
  },
  mounted () {
    let id = ''
    switch (this.$route.params.book) {
      case 'history-6': {
        id = '5b15e581e8db3027119530bc'
        break
      }
      case 'history-7-p1':
      case 'history-7-p2': {
        id = '5b15e588e8db3027119530bd'
        break
      }
      case 'history-8-p1':
      case 'history-8-p2': {
        id = '5b15e58ee8db3027119530be'
        break
      }
      case 'geography-6': {
        id = '5b2dbbc07a45863cf280ef50'
        break
      }
      case 'geography-7-p1':
      case 'geography-7-p2': {
        id = '5b2dbc027a45863cf280ef51'
        break
      }
      case 'geography-8-p1':
      case 'geography-8-p2': {
        id = '5b2dbc157a45863cf280ef52'
        break
      }
    }
    axios.get(`https://thesiseducation.herokuapp.com/grade/${id}`).then(res => {
      this.book = JSON.parse(JSON.stringify(res.data))
      console.log(res.data)
    })
  }
  // middleware: ['exercise']
}
</script>

<style lang="scss" scoped>
.hero {
  box-shadow: $box-shadow-light;
  min-height: inherit;
}

.course {
  &-header {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    padding: rem(20) 0;
  }

  &-main {
    padding: 0;
  }

  &__class {
    color: $color-text;
    font-size: $font-size-4;
    font-weight: $font-weight-light;
    margin-bottom: 0;
  }

  &__name {
    color: $color-green;
    font-size: $font-size-2;
    font-weight: $font-weight-light;
  }
}
</style>
