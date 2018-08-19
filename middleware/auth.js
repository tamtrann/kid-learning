export default function ({ store, redirect }) {
  if (!store.state.user) {
    return redirect('/')
  } else {
    store.commit('note/SET_NOTES', store.state.user.notes)
  }
}
