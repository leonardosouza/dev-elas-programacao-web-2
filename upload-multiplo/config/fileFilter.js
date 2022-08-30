module.exports = (req, file, cb) => {
  const { mimetype } = file;
  const supported = ["image/jpeg", "image/png"];
  if (supported.includes(mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
