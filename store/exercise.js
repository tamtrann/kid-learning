export const state = () => ({questions: []})

export const mutations = {
  fetch(state, payload) {
    state.questions = payload.results.slice();
  },
  updateAnswer(state, payload) {
    let questionIndex = state.questions.findIndex(question => question.question == payload.question);
    state.questions[questionIndex].answer = payload.answer;
  }
}

export const getters = {
  questions: state => {
    return state.questions;
  },
  score: state => {
    return state.questions.filter(question => question.answer == question["correct_answer"]).length;
  }
}
