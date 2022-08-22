import express from "express";
import { signUp, uploadUserPicture } from "../controller/usersController.js";
import { multerUploads } from "../middlewares/multer.js";

const router = express.Router();
//Create a "post" route
// Import multer function, call it in my route , using .single() method from Multer, to allow just one file per upload, with the Form field we assign for it.

router.post("/imageUpload", multerUploads.single("image"), uploadUserPicture);
// const something = () => {
//   console.log("is this running");
// };
// router.get("/all", something);
// Create new signup route
router.post("/signup", signUp);

export default router;
