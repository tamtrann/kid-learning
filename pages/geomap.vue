<template>
  <main>
    <geo-map :stats="stats"/>
  </main>
</template>

<script>
import axios from 'axios'
import GeoMap from '~/components/GeoMap'

export default {
  components: {
    GeoMap
  },
  data () {
    return {
      stats: []
    }
  },
  mounted () {
    axios.get(`https://thesiseducation.herokuapp.com/geosetting`).then(res => {
      this.stats = res.data.slice()
      this.stats.forEach(item => {
        item.data = this.convertObjectToArray(item.data).slice()
      })
    })
  },
  methods: {
    convertObjectToArray (object) {
      let array = object.map(item => Object.keys(item).map(key => {
        if (key === 'data') {
          return item[key].replace(/,/g, '')
        }
        return item[key]
      }))
      return array
    }
  }
}
</script>
