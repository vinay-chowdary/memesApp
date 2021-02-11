const fetchMemes = require('./fetchMemes')
const postMeme = require('./postMeme')
const paginate = require('./paginate');
const getMemeById = require('./getMemeById')
const patchMeme = require('./patchMeme')
module.exports = { fetchMemes, paginate, postMeme, getMemeById, patchMeme }