import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Configure here instead
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const absolutePath = path.resolve(localFilePath);

    const response = await cloudinary.uploader.upload(absolutePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(absolutePath);

    return response;
  } catch (error) {
    console.log("Cloudinary Error:", error.message);
    throw error;
  }
};

export { uploadOnCloudinary };
