const ProductController = require('../controllers/ProductsController');

module.exports = (app) => {
	app.get( '/products', ProductController.getAllProducts() );

	app.get( '/products/:id', ProductController.getOneProduct() );

	app.get( '/products/supplier/:supplier_id', ProductController.getAllProductsFromSupplier() );

	app.get( '/products/supplier/:supplier_id/:id', ProductController.getOneProductFromSupplier() );

	app.post( '/products', ProductController.addProduct() );

	app.put( '/products/:id', ProductController.updateProduct() );

	app.delete( '/products/:id', ProductController.deleteProduct() );
};
