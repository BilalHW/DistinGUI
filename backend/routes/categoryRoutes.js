const express = require("express");
const router = express.Router();
const {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");

router.route("/").get(getCategories).post(addCategory);
router.route("/:id").delete(updateCategory).put(deleteCategory);

module.exports = router;