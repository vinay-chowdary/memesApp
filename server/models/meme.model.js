const mongoose = require('mongoose')

const memeSchema = new mongoose.Schema({
    name: String,
    caption: String,
    url: String
});

const Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme;