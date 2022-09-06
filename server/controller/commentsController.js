import commentsModel from "../models /commentsModel.js";

const postComments = async (req, res) => {
  console.log("req.body- postComments: ", req.body);
  console.log("req.user- postComments: ", req.user);
  // console.log("req.user- postComments: ", req.user);

  const newComment = new commentsModel({
    userName: req.body.Name,
    museumId: req.body.museumId,
    avatarPicture: req.body.avatarPicture,
    commentText: req.body.commentText,
  });

  try {
    const savedComment = await newComment.save();
    console.log("savedComment", savedComment);
    if (res.headersSent !== true) {
      res.status(200).json({
        savedComment,
        msg: "  update successfull",
      });
    }
  } catch (error) {
    console.log("Error: Can not comments: ", error);
    res.status(401).json({
      msg: "Adding comment is not possible.",
      error: error,
    });
  }
};

const getSpecificComments = async (req, res) => {
  console.log("req.params getSpecificComments:>> ", req.params);

  console.log("req.user - getSpecificComments: ", req.user);
  try {
    const singleComments = await commentsModel.find({
      museumId: req.params.id,
    });

    res.status(200).json({
      singleComments,
    });
  } catch (error) {
    console.log("error get comments: ", error);
  }
};
export { postComments, getSpecificComments };
