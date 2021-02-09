const Meme = require('../models/meme.model')

const paginate = () => async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 100;
    const start = (page - 1) * limit
    const paginatedResults = {};
    const totalDocuments = await Meme.countDocuments().exec()
    const totalPages = Math.ceil(totalDocuments / limit);
    if (page > totalPages) {
        res.status(404).json({
            message: {
                reason: "page number exceeded", totalPages: totalPages
            }
        })
    }
    else {
        paginatedResults.startMeme = start;
        paginatedResults.memesPerPage = limit;
        paginatedResults.totalPages = totalPages;
        if (start > 0) {
            paginatedResults.previous = {
                page: page - 1
            }
        }
        if (page !== totalPages) {
            paginatedResults.next = {
                page: page + 1
            }
        }
        res.results = paginatedResults;
        next();
    }
}

module.exports = paginate;