export const state = () => ({
  notes: []
})

export const mutations = {
  add(state, payload) {
    state
      .notes
      .push({
        id: Math.random().toString(36).substr(2, 9),
        note: payload.note
      });
  },
  remove(state, payload) {
    let noteIndex = state.notes.findIndex(function(note) {
      return note.id == payload.id;
    });
    state
      .notes
      .splice(noteIndex, 1);
  },
  edit(state, payload) {
    let noteIndex = state.notes.findIndex(function(note) {
      return note.id == payload.id;
    });
    state.notes[noteIndex].note = payload.note;
  }
}

export const getters = {
  notes(state) {
    return state.notes
  }
}
