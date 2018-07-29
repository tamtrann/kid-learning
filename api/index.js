import express from 'express'
import axios from 'axios'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  axios.post('https://thesiseducation.herokuapp.com/auth/local', {
    identifier: req.body.identifier,
    password: req.body.password
  }).then(function (response) {
    req.session.user = response.data
    return res.json(JSON.parse(JSON.stringify(response.data)))
    // return JSON.parse(JSON.stringify(res.data))
  }).catch(function (error) {
    console.log(error)
  })
  // if (req.body.username === 'demo' && req.body.password === 'demo') {
  //   req.session.user = { username: 'demo' }
  //   return res.json({ username: 'demo' })
  // }
  // res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.user
  res.json({ ok: true })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
