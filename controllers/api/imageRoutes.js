const router = require('express').Router();
const { Image } = require('../../models');
const upload = require('../../utils/upload');
const uploadController = require("../upload");

// router.post("/upload", upload.single("file"), uploadController.uploadFiles);

router.post('/upload', async (req, res) => {
    try {
      const userData = await upload.single("file");
      uploadController.uploadFiles;

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

module.exports = router;
