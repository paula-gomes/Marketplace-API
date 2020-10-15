const productController = require('../controllers/ProductsController');

module.exports = (app) => {
	app.get('/products', productController.getAllProducts());

	app.get('/products/:id', productController.getOneProduct());

	app.get(
		'/products-from-supplier/:supplier_id',
		productController.getAllProductsFromSupplier()
	);

	app.get(
		'/one-product-from-supplier/:id/:supplier_id',
		productController.getOneProductFromSupplier()
	);

	app.post('/products', productController.addProduct());

	app.put('/products/:id', productController.updateProduct());

	app.delete('/products/:id', productController.deleteProduct());
};
