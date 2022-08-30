exports.upload = (req, res) => {
  const multer = require("multer");
  const storage = require("../config/diskStorage")(multer);
  const fileFilter = require("../config/fileFilter");
  const limits = require("../config/limits");
  const multipleUpload = multer({ storage, fileFilter, limits }).array("files");
  
  multipleUpload(req, res, (err) => {
    if(req.files.length > 0) {
      res.render("success", { images: req.files });
    } else {
      res.render("error");
    }
  });

};

exports.index = (req, res) => {
  res.render("index");
};

exports.success = (req, res) => {
  res.render("success");
};

exports.error = (req, res) => {
  res.render("error");
};
