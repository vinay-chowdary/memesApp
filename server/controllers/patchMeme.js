const { logger, Meme } = require('./requirements')
const isImage = require('./isImage')
const isDuplicate = require('./isDuplicate')

const patchMeme = async (req, res) => {

    try {
        const id = req.params.id;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const { name, caption, url } = req.body;
            const meme = { name, url, caption }
            if (url) {
                await isImage(url)
                if (caption && name) {
                    await isDuplicate(meme)
                }
            }
            const updates = req.body;
            const options = { new: true }
            const memeUpdated = await Meme.findByIdAndUpdate(id, updates, options);
            if (!memeUpdated)
                throw new Error(JSON.stringify({ status: 404, message: "Meme with requested Id is not found" }))
            res.status(200).json(meme)
        }
        else
            throw new Error(JSON.stringify({ status: 404, message: "Invalid object Id" }))


    }
    catch (err) {
        const { status, message } = JSON.parse(err.message);
        logger.log('info', message);
        res.status(status).json({ message })

    }
}

module.exports = patchMeme