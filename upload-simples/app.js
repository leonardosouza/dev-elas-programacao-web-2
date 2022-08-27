const app = require("express")();
const path = require("path");

// importando o modulo
const multer = require("multer");

// config do upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    const fileName = Date.now();
    const ext = originalname.split(".").pop();
    cb(null, `${fileName}.${ext}`);
  }
});

const limits = {
  fileSize: 1024 * 1024 // 1MB
};

const fileFilter = (req, file, cb) => {
  const { mimetype } = file;
  const supported = ["image/jpeg", "image/png"];
  if (supported.includes(mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, limits, fileFilter });

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.post("/upload", upload.single("single"), (req, res) => {
  if(req.file && req.file.size > 0) {
    res.redirect("/success");
  } else {
    res.redirect("/error");
  }
});

app.get("/success", (req, res) => {
  res.sendFile(path.resolve("public/success.html"));
});

app.get("/error", (req, res) => {
  res.sendFile(path.resolve("public/error.html"));
});


app.listen(80, console.log(`Server running...`));
