const router = require('express').Router()
const { fetchMemes, postMeme, paginate, getMemeById } = require('../controllers')

router.route('/')
    .get(paginate(), fetchMemes)
    .post(postMeme)

router.route('/:id')
    .get(getMemeById);

module.exports = router