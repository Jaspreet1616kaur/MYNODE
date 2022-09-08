import {
  getSpecificComments,
  postComments,
  getAllComments,
} from "../controller/commentsController.js";

import express from "express";
import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.post("/", jwtAuth, postComments);
router.get("/getSpecificComments/:id", jwtAuth, getSpecificComments);
router.get("/allComments", getAllComments);
export default router;
