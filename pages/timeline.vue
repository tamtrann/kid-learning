<template>
  <main>
    <timeline :milestones="milestones"/>
  </main>
</template>

<script>
import axios from 'axios'
import Timeline from '~/components/Timeline'

export default {
  components: {
    Timeline
  },
  data () {
    return {
      milestones: []
    }
  },
  mounted () {
    axios.get(`https://thesiseducation.herokuapp.com/milestone`).then(res => {
      this.milestones = res.data.slice()
    })
  },
}
</script>
