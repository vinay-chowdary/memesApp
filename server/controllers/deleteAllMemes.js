const { logger, Meme } = require("./requirements");

const deleteAllMemes = async (req, res) => {
  try {
    const response = await Meme.deleteMany({});

    res.status(200).json(response);
  } catch (error) {
    logger.log("error", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = deleteAllMemes;
