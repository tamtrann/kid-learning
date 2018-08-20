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
    req.session.user = response.data.user
    return res.json(JSON.parse(JSON.stringify(response.data)))
  }).catch(function (error) {
    console.log(error)
  })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.user
  res.json({ ok: true })
})

router.post('/answer', (req, res) => {
  axios.post('https://thesiseducation.herokuapp.com/answer', {
    content: req.body.answer,
    isChecked: false,
    question: req.body.id,
    user: req.session.user.id
  }).then(function (response) {
    return res.json(JSON.parse(JSON.stringify(response.data)))
  }).catch(function (error) {
    console.log(error)
  })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
