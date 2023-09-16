const multer = require("multer")
const maxSize = 6 * 1024 * 1024 // 6MB
const path = require("path")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads")
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname)
    cb(null, `IMG-${Date.now()}` + ext)
  },
})

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Only images allowed!"), false)
  }
  cb(null, true)
}

const upload = multer({
  storage: storage,
  fileFilter: imageFileFilter,
  limits: { fileSize: maxSize },
}).single('photo')

module.exports = upload