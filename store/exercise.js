export const state = () => ({title: '', exerciseQuestions: [], timeLimitation: 0, grade: 0, submitted: false})

export const mutations = {
  SET_QUESTIONS (state, payload) {
    state.title = payload.title
    state.exerciseQuestions = payload.exerciseQuestions.slice()
    state.timeLimitation = payload.timeLimitation
  },
  SET_GRADE (state, amount) {
    state.grade = state.grade + amount
  },
  SUBMIT (state) {
    state.submitted = true
  }
}

export const getters = {
  title: state => state.title,
  exerciseQuestions: state => state.exerciseQuestions,
  grade: state => state.grade,
  submitted: state => state.submitted,
  timeLimitation: state => state.timeLimitation
}
