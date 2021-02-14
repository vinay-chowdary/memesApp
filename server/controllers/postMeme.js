const { fetch, logger, Meme } = require('./requirements')
const isImage = require('./isImage')
const isDuplicate = require('./isDuplicate')



//  insert the meme into database if it doesn't exist previously and if all the fields are provided 

const postMeme = async (req, res) => {
    try {
        const { name, caption, url } = req.body
        if (name && caption && url) {                           // if all the fields are provided

            await isImage(url);                                 //  check url has image
            const meme = { name, url, caption };
            await isDuplicate(meme)                             //  check for duplicate meme

            const [{ _id }] = await Meme.insertMany([meme])     //  insert data into database
            res.header("Content-Type", 'application/json');
            res.status(201).json({ id: _id });

        }
        else
            throw new Error(JSON.stringify({ status: 409, message: "all fields are required, check spellings of keys, name,caption,url" }))

    }

    catch (err) {

        logger.log('error', err.message)
        const { status, message } = JSON.parse(err.message)
        res.header("content-type", 'application/json');
        res.json({ message })

    }
}

module.exports = postMeme;