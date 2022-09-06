import {
  getSpecificComments,
  postComments,
} from "../controller/commentsController.js";

import express from "express";
import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.post("/", jwtAuth, postComments);
router.get("/getSpecificComments/:id", jwtAuth, getSpecificComments);

export default router;
