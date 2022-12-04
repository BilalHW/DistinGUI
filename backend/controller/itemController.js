const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");
const Item = require("../models/itemModel");

// @desc    Get Category
// @route   GET /api/Category
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find()
  .select("_id name  description price image category")
  .populate({ path: "category", select: "_id name" })
  .exec();

  res.status(200).json(items);
});

// @desc    Set Item
// @route   POST /api/Item
const addItems = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a item");
  }
  try {
    const category = await Category.findOne({name: req.body.category}).lean().exec();
    if(category){
        const item = await Item.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            category: category.name
            
        })
            res.status(200).json(item);
    }else{
        res.status(404).json({err: "Category not found"})
    }
 
  } catch (error) {
    console.log(error)
    res.status(502).json({err: error.message})
  }

  
});

// @desc    Update Item
// @route   PUT /api/Item/:id
const updateItem = asyncHandler(async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            res.status(400);
            throw new Error("Item not found");
        }
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(505).json({err: error.message})
    }
    
    });

// @desc    Delete Category
// @route   DELETE /api/Category/:id
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(400);
    throw new Error("Item not found");
  }
  await item.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getItems,
  addItems,
  updateItem,
  deleteItem,
};
