//  this file is to export common modules used by controllers

const fetch = require('node-fetch')
const logger = require('../logs/logger')
const Meme = require('../models/meme.model')

module.exports = { fetch, logger, Meme }