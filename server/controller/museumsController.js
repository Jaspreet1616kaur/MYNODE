import museumsModel from "../models /museumsModel.js";
import { v2 as cloudinary } from "cloudinary";

const getAllMuseums = async (req, res) => {
  try {
    const allMuseums = await museumsModel.find({}).populate({
      path: "city",
      select: ["name", "likes"],
    });
    res.status(200).json({
      allMuseums,
      number: allMuseums.length,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
      msg: "server failed",
    });
  }
};
const uploadUserPicture = async (req, res) => {
  console.log("req.boy", req.boy);

  try {
    console.log("req.file :>> ", req.file); //Multer is storing the file in that property(objec) of the request object
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "MuseumPicture",
    });
    console.log("uploadResult", uploadResult); //this show us the object with all the information about the upload, including the public URL in result.url
    res.status(200).json({
      message: "Image upload succesfull",
      imageUrl: uploadResult.url,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "image couldn't be uploaded", error: error });
  }
};

// 16. Create museums function
const newMuseum = async (req, res) => {
  console.log("new museum req");
  console.log("req.body", req.body);
  try {
    const existingMuseum = await museumsModel.findOne({ name: req.body.name });
    if (existingMuseum) {
      res.status(409).json({ msg: "museum already exists" });
    } else {
      const newMuseum = new museumsModel({
        // password: hashedPassword,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        avatarPicture: req.body.avatarPicture,

        // 22. IF we include user Roles, we would have to include it in our newUser object (and Model)
      });
      // 21. I "try" to save my new created user.

      try {
        const savedMuseum = await newMuseum.save();
        res.status(201).json({
          museum: {
            avatarPicture: savedMuseum.avatarPicture,
            name: savedMuseum.name,
            price: savedMuseum.price,
            type: savedMuseum.type,
          },
          msg: "museum upload successfully",
        });
      } catch (error) {
        res
          .status(409)
          .json({ message: "error while saving new museum", error: error });
      }
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "uploading is  not possible", error: error });
  }
};

export { getAllMuseums, uploadUserPicture, newMuseum };
