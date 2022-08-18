import multer from "multer";
//this path is from node js
import path from "path";
const multerUploads = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let extension = path.extname(file.originalname);
    if (extension !== ".jpg" && extension !== ".jpeg" && extension !== ".png") {
      cb(new Error("file extension not supported"), false);
      return;
    }
    cb(null, true);
  },
});
export { multerUploads };
