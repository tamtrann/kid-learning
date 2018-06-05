import axios from 'axios';

export default function({param, store}) {
  return axios.get('http://localhost:3001/results')
  .then((res) => {
    store.commit('exercise/fetch', {results: res.data});
  })
}
