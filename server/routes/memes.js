const router = require('express').Router()
const { fetchMemes, postMeme, paginate } = require('../controllers')

router.route('/')
    .get(paginate(), fetchMemes)
    .post(postMeme)


module.exports = router