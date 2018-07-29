export const state = () => ({
  notes: []
})

export const mutations = {
  add (state, payload) {
    state
      .notes
      .push({
        id: Math.random().toString(36).substr(2, 9),
        name: payload.note.name,
        content: payload.note.content
      })
  },
  remove (state, payload) {
    let noteIndex = state.notes.findIndex(function (note) {
      return note.id === payload.id
    })
    state
      .notes
      .splice(noteIndex, 1)
  },
  edit (state, payload) {
    let noteIndex = state.notes.findIndex(note => (note.id === payload.id))
    state.notes[noteIndex].name = payload.note.name
    state.notes[noteIndex].content = payload.note.content
  }
}

export const getters = {
  notes (state) {
    return state.notes
  }
}
