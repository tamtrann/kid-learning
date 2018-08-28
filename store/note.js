export const state = () => ({
  notes: []
})

export const mutations = {
  SET_NOTES (state, payload) {
    state.notes = payload.slice()
  },
  REMOVE_NOTE (state, payload) {
    let noteIndex = state.notes.findIndex(function (note) {
      return note.id === payload.id
    })
    state
      .notes
      .splice(noteIndex, 1)
  },
  EDIT_NOTE (state, payload) {
    let noteIndex = state.notes.findIndex(note => (note.id === payload.id))
    state.notes[noteIndex].name = payload.note.name
    state.notes[noteIndex].content = payload.note.content
  }
}

export const getters = {
  notes: state => {
    return lessonId => state.notes.filter(note => note.lesson === lessonId || note.lesson.id === lessonId)
  }
}
