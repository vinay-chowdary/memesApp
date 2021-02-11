const { fetch, logger, Meme } = require('./requirements')



//  check whether the the given url is of Image.

const isImage = async (url) => {
    try {

        const checkExtension = url.match(/\.(jpg|jpeg|png|gif)/);
        const { status, headers } = await fetch(url, { method: 'HEAD' });
        if (status === 200 && checkExtension)
            return true
        else if (status === 200 && !checkExtension) {
            const Headers = [...headers];
            Headers.forEach(header => {
                if (header[0] === 'content-type') {
                    if (header[1].match(/image\/(jpg|jpeg|png|gif)/)) {
                        return true
                    }
                }
            })
        }
        else
            throw new Error(JSON.stringify({ status, message: "image not found" }));
    }
    catch (err) {
        logger.log('error', "cannot deal with base64 format as of now")
        throw new Error(JSON.stringify({ status: 400, message: "cannot deal with base64 encoding, please provide absolute address (https://example.com/imagename.jpg)" }))
    }
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
        res.header("Content-Type", 'application/json');
        res.status(status).json({ message })

    }
}

module.exports = postMeme;