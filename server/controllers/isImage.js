const { fetch, logger, Meme } = require("./requirements");

//  check whether the the given url is of Image.

const isImage = async (url) => {
  const checkExtension = url.match(/\.(jpg|jpeg|png|gif)/);
  try {
    var { status, headers } = await fetch(url, { method: "HEAD" });
  } catch (err) {
    logger.log("error", "cannot find the url, please check it again");
    throw new Error(
      JSON.stringify({
        status: 400,
        message: "check the image url(doesn't find image)",
      })
    );
  }
  if (status === 200 && checkExtension) return true;
  else if (status === 200 && !checkExtension) {
    const Headers = [...headers];
    Headers.forEach((header) => {
      if (header[0] === "content-type") {
        if (header[1].match(/image\/(jpg|jpeg|png|gif)/)) {
          return true;
        }
      }
    });
    throw new Error(JSON.stringify({ status, message: "image not found" }));
  } else
    throw new Error(JSON.stringify({ status, message: "image not found" }));
};

module.exports = isImage;
