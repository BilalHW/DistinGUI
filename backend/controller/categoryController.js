const asyncHandler = require("express-async-handler");

const Category = require("../models/categoryModel");
const User = require("../models/itemModel");

// @desc    Get Category
// @route   GET /api/Category
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json(categories);
});

// @desc    Set Category
// @route   POST /api/Category
const addCategory = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a category");
  }

  const category = await Category.create({
    name: req.body.name,
    items: req.user.items,
  });

  res.status(200).json(category);
});

// @desc    Update Category
// @route   PUT /api/Category/:id
const updateCategory = asyncHandler(async (req, res) => {
  const Category = await Category.findById(req.params.id);

  if (!Category) {
    res.status(400);
    throw new Error("Category not found");
  }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   // Make sure the logged in user matches the Category user
//   if (Category.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("User not authorized");
//   }

  const updatedCategory = await Category.findByIdAndUpdate(req.params.Objectid, req.body, {
    new: true,
  });

  res.status(200).json(updatedCategory);
});

// @desc    Delete Category
// @route   DELETE /api/Category/:id
const deleteCategory = asyncHandler(async (req, res) => {
  const Category = await Category.findById(req.params.id);

  if (!Category) {
    res.status(400);
    throw new Error("Category not found");
  }

  // Make sure the logged in user matches the Category user

  await Category.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
