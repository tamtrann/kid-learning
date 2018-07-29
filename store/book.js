export const state = () => ({
  books: [{
    id: '5b15e581e8db3027119530bc',
    name: 'Lịch Sử 6',
    parts: []
  }]
})

export const getters = {
  getBookById: (state) => (id) => {
    return state.books.find(book => book.id === id)
  }
}
