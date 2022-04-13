// import multer module
const multer = require("multer");

// Only allow images to pass
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
    //determines where the file goes
  destination: (req, file, cb) => {
    cb(null, __basedir + "/public/images");
  },
  //determines the name of the file
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-test-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;