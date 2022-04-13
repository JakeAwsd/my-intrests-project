const fs = require("fs");
const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    //Check file upload
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    // Save an image model to the sql database
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      avatar: fs.readFileSync(
        __basedir + "/public/images" + req.file.filename
      ),
    }).then((image) => {
        //If the process worked then save to a temp folder
      fs.writeFileSync(
        __basedir + "/public/temp" + image.name,
        image.avatar
      );
      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};