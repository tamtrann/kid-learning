import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'https://thesiseducation.herokuapp.com/'
  // providers: {
  //   github: {
  //     clientId: '',
  //     redirectUri: 'http://localhost:3000'
  //   }
  // }
})
