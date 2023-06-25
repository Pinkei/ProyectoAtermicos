const Product = require('../database/models/Productos'); 

exports.index = async (req, res) => {
  const product = await Product.find();
  res.render('products/index', { product }); 
};

exports.new = (req, res) => {
  res.render('products/new');
};

exports.create = async (req, res) => {
  const product = new Product(req.body.product);
  await product.save();
  res.redirect(`/products/${product._id}`);
};  //este tambien me lo crea.

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/show', { product }); 
};  //este anda por lo menos al principio

 exports.edit = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/edit', { product }); 
}; /* es el que no andaaa */


exports.update = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, { ...req.body.product });
  res.redirect(`/products/${product._id}`);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products');
};