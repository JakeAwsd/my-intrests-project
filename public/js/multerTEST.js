// const express = require("express");
const multer = require("multer");

// const app = express();

const fileStorageEngine = multer.diskStorage({
destination: (req, file, cb) => {
    cb(null, './images');
},

filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
},
});

const upload = multer({ storage: fileStorageEngine});

//replace this with fetch method

// app.post("/single", upload.single('avatar'), (req, res) => {
//     console.log(req.file);
//     res.send("Single FIle Upload Successful")
// });

const formData = new FormData()
formData.append('blob', new Blob(['Hello World!\n']), 'test')

fetch('/single', {
  method: 'GET',
  body: formData
})
.then(r => r.json())
.then(data => {
  console.log(data)
})

app.listen(5000);
