import {
  getSpecificComments,
  postComments,
  getAllComments,
  deleteOneComment,
} from "../controller/commentsController.js";

import express from "express";
import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.post("/", jwtAuth, postComments);
router.get("/getSpecificComments/:id", jwtAuth, getSpecificComments);
router.get("/allComments", getAllComments);
router.put("/delete-one-comment", jwtAuth, deleteOneComment);

export default router;
