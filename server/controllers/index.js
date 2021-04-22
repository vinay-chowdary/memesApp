const fetchMemes = require("./fetchMemes");
const postMeme = require("./postMeme");
const paginate = require("./paginate");
const getMemeById = require("./getMemeById");
const patchMeme = require("./patchMeme");
const deleteAllMemes = require("./deleteAllMemes");
module.exports = {
  fetchMemes,
  paginate,
  postMeme,
  getMemeById,
  patchMeme,
  deleteAllMemes,
};
