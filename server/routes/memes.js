const router = require("express").Router();
const {
  fetchMemes,
  postMeme,
  paginate,
  getMemeById,
  patchMeme,
  deleteAllMemes,
} = require("../controllers");

router
  .route("/")
  /*
    @swagger
    */
  .get(fetchMemes)
  .post(postMeme)
  .delete(deleteAllMemes);

router.route("/:id").get(getMemeById).patch(patchMeme);

module.exports = router;
