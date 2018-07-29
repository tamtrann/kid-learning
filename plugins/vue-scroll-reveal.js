import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  scale: 1,
  opacity: 0,
  origin: 'bottom',
  duration: 800,
  reset: false,
  viewFactor: 0.6
})
