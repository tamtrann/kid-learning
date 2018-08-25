function shuffle(array) {
  let currentIndex = array.length
  let newArray = array.slice()
  let temporaryValue, randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }

  return newArray;
}

export const state = () => ({
  title: '',
  exerciseQuestions: [],
  timeLimitation: 0,
  grade: 0,
  submitted: false
})

export const mutations = {
  SET_QUESTIONS(state, payload) {
    state.title = payload.title
    state.exerciseQuestions = payload.exerciseQuestions.slice()
    state.timeLimitation = payload.timeLimitation
  },
  SET_GRADE(state, amount) {
    state.grade = state.grade + amount
  },
  SUBMIT(state) {
    state.submitted = true
  }
}

export const getters = {
  title: state => state.title,
  exerciseQuestions: state => shuffle(state.exerciseQuestions),
  grade: state => state.grade,
  submitted: state => state.submitted,
  timeLimitation: state => state.timeLimitation
}
