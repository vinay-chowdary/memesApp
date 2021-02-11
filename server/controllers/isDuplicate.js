//  check if the current meme already exists
const Meme = require('../models/meme.model')
const isDuplicate = async (meme) => {
    const duplicate = await Meme.findOne(meme)
    if (duplicate)
        throw new Error(JSON.stringify({ status: 409, message: { duplicateFound: true, duplicate } }))
    else return false
}

module.exports = isDuplicate;
