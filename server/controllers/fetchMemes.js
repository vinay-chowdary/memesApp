const { logger, Meme } = require('./requirements')



// fetch latest 100 memes from database

const fetchMemes = async (req, res) => {
    try {
        const { startMeme: start, memesPerPage: limit } = res.results;
        const memes = await Meme.find({}).limit(limit).skip(start).sort({ '_id': -1 })
        res.results.startMeme += 1;
        const response = { ...res.results, memes }
        res.status(200).json(response)
    }
    catch (err) {
        logger.log('error', err.message)
        res.status(500).json({ message: err.message })
    }
}

module.exports = fetchMemes;