<template>
  <main>
    <div class="container-fluid">
      <book-reader
        :book="book"
        @GetExercise="getExercise" @GetNotes="getNotes" @ShowNote="showNote"/>
      <vk-offcanvas flipped overlay :show.sync="noteIsShow">
        <note-taker :lessonId="notesId"/>
      </vk-offcanvas>
      <thread-modal :threads="threads" @AddQuestion="onAddQuestion" @AddAnswer="onAddAnswer"/>
      <exercise-modal/>
      <mindmap-modal/>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import BookReader from '~/components/BookReader'
import NoteTaker from '~/components/NoteTaker'
import ExerciseModal from '~/components/ExerciseModal'
import MindmapModal from '~/components/MindmapModal'
import ThreadModal from '~/components/ThreadModal'

export default {
  data () {
    return {
      book: {},
      noteIsShow: false,
      threads: [],
      notesId: ''
    }
  },
  components: {
    BookReader,
    NoteTaker,
    ExerciseModal,
    MindmapModal,
    ThreadModal
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
    })

    axios.get(`https://thesiseducation.herokuapp.com/question`).then(res => {
      this.threads = res.data.slice()
    })
  },
  methods: {
    async onAddAnswer (answer, id) {
      try {
        await this.$store.dispatch('ADD_ANSWER', {
          answer,
          id
        })
        axios.get(`https://thesiseducation.herokuapp.com/question`).then(res => {
          this.threads = res.data.slice()
        })
      } catch (e) {
        this.error = e.message
      }
    },
    async onAddQuestion (question) {
      try {
        await this.$store.dispatch('ADD_QUESTION', {
          question: question,
          lessonId: this.notesId
        })
        axios.get(`https://thesiseducation.herokuapp.com/question`).then(res => {
          this.threads = res.data.slice()
        })
      } catch (e) {
        this.error = e.message
      }
    },
    getExercise (exercise) {
      this.$store.commit('exercise/SET_QUESTIONS', exercise)
      this.$modal.show('exercise')
    },
    getNotes (lessonId) {
      this.notesId = lessonId
    },
    showNote () {
      this.noteIsShow = true
    }
  }
}
</script>
