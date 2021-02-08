const router = require('express').Router()
const { insertMany } = require('../models/meme.model')
const Meme = require('../models/meme.model')
const logger = require('../logs/logger')
const fetch = require('node-fetch')

const getImage = async (url) => {
    const raw_data = await fetch(url);
    console.log(raw_data);
    if (raw_data.status < 200 || raw_data.status >= 300) {
        throw new Error("Image not found at provided url")
    }
    else {
        return true
    }
}
router.route('/')
    .get(async (req, res) => {
        try {

            const meme = await Meme.find({}).limit(100).sort({ '_id': -1 })
            res.json(meme)
        }
        catch (err) {
            logger.log('error', err.message)
        }
    })
    .post(async (req, res) => {
        try {
            const { nameOfPerson, caption, url } = req.body
            if (nameOfPerson && caption && url) {
                const tempImage = await getImage(url)
                const data = { nameOfPerson, caption, url };
                const [{ _id }] = await Meme.insertMany([data]);
                res.json({ id: _id, raw_data: tempImage })
            }
            else {
                throw new Error('all fields are Required, name, caption, url')
            }
        }
        catch (err) {
            logger.log('error', err.message)
            res.json({ error: err.message })

        }
    }

    )


module.exports = router