import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({
    msg: "Test the message i want.",
  });
});
export default router;
