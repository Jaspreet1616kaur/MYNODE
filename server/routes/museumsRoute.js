import express from "express";
import {
  getAllMuseums,
  uploadUserPicture,
  newMuseum,
} from "../controller/museumsController.js";
import { multerUploads } from "../middlewares/multer.js";
const router = express.Router();

router.post("/imageUploads", multerUploads.single("image"), uploadUserPicture);

// Create new signup route
router.post("/newMuseum", newMuseum);
router.get("/all", getAllMuseums);

export default router;
