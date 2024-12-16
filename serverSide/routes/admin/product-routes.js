const express = require("express");
const router = express.Router();
const {
  handleImageUpload,
} = require("../../controllers/admin/products-controller");
const { upload } = require("../../helpers/cloudinary");

router.post("/image-upload", upload.single("my-file"), handleImageUpload);

module.exports = router;
