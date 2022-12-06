const { Console } = require("console");
const asyncHandler = require("express-async-handler");

const Category = require("../models/categoryModel");
const Items = require("../models/itemModel");

// @desc    Get Category
// @route   GET /api/Category
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
    // res.json({name: "Ali"})
  res.status(200).json(categories);

});

// @desc    Set Category
// @route   POST /api/Category
const addCategory = asyncHandler(async (req, res) => {

  if (!req.body) {
    res.status(400);
    throw new Error("Please add a category");
  }
  try {
      const category = await Category.create({
        name: req.body.name,
  });
  res.status(200).json(category);
  
  } catch (error) {
    // console.log(error)
    res.status(404).json({err: "Category already exist"})
  }


  
});

// @desc    Update Category
// @route   PUT /api/Category/:id
const updateCategory = asyncHandler(async (req, res) => {
  const newcategory = await Category.findById(req.params.id);
  if (!newcategory) {
    res.status(400);
    throw new Error("Category not found");
  }

  const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCategory);
});

// @desc    Delete Category
// @route   DELETE /api/Category/:id
const deleteCategory = asyncHandler(async (req, res) => {
  const unCategory = await Category.findById(req.params.id);
  if (!unCategory) {
    res.status(400);
    throw new Error("Category not found");
  }

  await unCategory.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
