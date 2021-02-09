const { fetch, logger, Meme } = require('./requirements')



//  check whether the the given url is of Image.

const isImage = async (url) => {
    const checkExtension = url.match(/\.(jpg|jpeg|png|gif)/);
    const { status } = await fetch(url, { method: 'HEAD' });
    if (status === 200 && checkExtension)
        return true
    else
        throw new Error(JSON.stringify({ status, message: "image not found" }));
}



//  check if the current meme already exists

const isDuplicate = async (meme) => {
    const duplicate = await Meme.findOne(meme)
    if (duplicate)
        throw new Error(JSON.stringify({ status: 409, message: { duplicateFound: true, duplicate } }))

}



//  insert the meme into database if it doesn't exist previously and if all the fields are provided 

const postMeme = async (req, res) => {
    try {
        const { name, caption, url } = req.body
        if (name && caption && url) {                           // if all the fields are provided

            await isImage(url);                                 //  check url has image
            const meme = { name, caption, url };
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
        res.header("Content-Type", 'application/json');
        res.status(status).json({ message })

    }
}

module.exports = postMeme;