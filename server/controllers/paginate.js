const Meme = require('../models/meme.model')

const paginate = () => async (req, res, next) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 100;
    const start = (page - 1) * limit
    const paginatedResults = {};
    let totalDocuments = 0;
    try {
        totalDocuments = await Meme.countDocuments()
    }
    catch (err) {
        console.log(err.message);
    }
    const totalPages = Math.ceil(totalDocuments / limit);


    paginatedResults.memesPerPage = limit;
    paginatedResults.startMeme = start;
    paginatedResults.page = page;
    paginatedResults.totalPages = totalPages;


    //  if there are memes but page number has exceded

    if (totalPages !== 0 && page > totalPages) {
        res.status(404).json({
            message: {
                reason: "page number exceeded", totalPages: totalPages
            }
        })
    }

    //  if there are no memes or page number doesnot exceed

    else {
        if (start > 0) {
            paginatedResults.previous = {
                page: page - 1
            }
        }
        if (page < totalPages) {
            paginatedResults.next = {
                page: page + 1
            }
        }
        res.results = paginatedResults;
        next();
    }
}

module.exports = paginate;