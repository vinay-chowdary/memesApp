const router = require('express').Router()
const { fetchMemes, postMeme, paginate, getMemeById, patchMeme } = require('../controllers')



router.route('/')
    /*
    @swagger
    */
    .get(paginate(), fetchMemes)
    .post(postMeme)

router.route('/:id')
    .get(getMemeById)
    .patch(patchMeme)

module.exports = router