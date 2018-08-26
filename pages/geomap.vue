<template>
  <main>
    <geo-map :stats="stats"/>
  </main>
</template>

<script>
import axios from 'axios'
import GeoMap from '~/components/GeoMap'

export default {
  data () {
    return {
      stats: []
    }
  },
  components: {
    GeoMap
  },
  mounted () {
    axios.get(`https://thesiseducation.herokuapp.com/geosetting`).then(res => {
      this.stats = res.data.slice()
      this.stats.forEach(item => {
        item.data = this.convertObjectToArray(item.data).slice()
      })
      // console.log(this.setting[0].data)
      // this.setting = JSON.parse(JSON.stringify(res.data))
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
