const express = require("express");
const router = express.Router();
const {
  getItems,
  addItems,
  updateItem,
  deleteItem,
} = require("../controller/itemController");

router.route("/").get(getItems).post(addItems);
router.route("/:id").delete(deleteItem).put(updateItem);

module.exports = router;