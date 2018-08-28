export const state = () => ({
  mindmapList: [{
    id: '1',
    name: 'Mindmap 1',
    nodes: [{
      'text': 'Sơ lược lịch sử',
      'fx': 1,
      'fy': 1,
      'nodes': []
    }],
    connections: []
  }]
})

export const mutations = {
  ADD_MINDMAP (state, payload) {
    state.mindmapList.push(payload)
  },
  UPDATE_MINDMAP (state, payload) {
    let foundIndex = state.mindmapList.findIndex(mindmap => mindmap.id === payload.id)
    state.mindmapList[foundIndex] = JSON.parse(JSON.stringify(payload))
  }
}

export const getters = {
  mindmapList: state => {
    return keyword => keyword ? state.mindmapList.filter(mindmap => mindmap.name.toLowerCase().includes(keyword.toLowerCase())) : state.mindmapList
  }
}
