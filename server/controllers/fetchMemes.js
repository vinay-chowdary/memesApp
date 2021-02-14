const { logger, Meme } = require('./requirements')



// fetch latest 100 memes from database at once

const fetchMemes = async (_, res) => {

    try {
        // const { startMeme: start, memesPerPage: limit, totalPages } = res.results;

        //  get 100 memes from database according to start meme(page)
        const memes = await Meme.find({}).sort({ '_id': -1 })


        // display that Meme start from 1 not 0
        // res.results.startMeme += 1;


        // const response = { ...res.results, memes }

        //  if there are no memes return empty error instead of all other data
        // totalPages !== 0 ? res.status(200).json(response) : 
        res.status(200).json(memes)

    }
    catch (err) {

        //  if anything goes wrong it will be internal server error(status:500)

        logger.log('error', err.message)
        res.status(500).json({ message: err.message })
    }
}

module.exports = fetchMemes;