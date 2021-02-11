const { logger, Meme } = require('./requirements')


const getMemeById = async (req, res) => {

    try {
        const id = req.params.id;

        //  check if objectId id valid according to mongodb
        if (id.match(/^[0-9a-fA-F]{24}$/)) {

            const meme = await Meme.findById(id)

            // if meme is not found
            if (!meme)
                throw new Error(JSON.stringify({ status: 404, message: "Meme with requested Id is not found" }))
            else
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

module.exports = getMemeById;