const ProductModel = require('../models/ProductsModel');

class ProductController {
	static getAllProducts() {
		return (req, res) => {
			ProductModel.getAllProducts()
				.then((row) => res.send(row))
				.catch((err) =>
					console.log('Request failed to return all products' + err)
				);
		};
	}

	static getAllProductsFromSupplier() {
		return (req, res) => {
			ProductModel.getAllProductsFromSupplier(req.params.supplier_id)
				.then((rows) => res.send(rows))
				.catch((err) =>
					console.log('Request failed to return all products' + err)
				);
		};
	}

	static getOneProductFromSupplier() {
		return (req, res) => {
			ProductModel.getOneProductFromSupplier(
				req.params.id,
				req.params.supplier_id
			)
				.then((row) => res.send(row))
				.catch((err) => console.log('Request failed to return products' + err));
		};
	}

	static getOneProduct() {
		return (req, res) => {
			ProductModel.getOneProduct(req.params.id)
				.then((row) => res.send(row))
				.catch((err) =>
					console.log('Request failed to return one product' + err)
				);
		};
	}

	static addProduct() {
		return (req, res) => {
			const params = [
				req.body.rating,
				req.body.name,
				req.body.description,
				req.body.price,
				req.body.in_stock,
				req.body.supplier_id,
			];
			ProductModel.addProduct(...params)
				.then(() => res.send('Add product ok'))
				.catch((err) => console.log('Request failed to add Product' + err));
		};
	}

	static updateProduct() {
		return (req, res) => {
			const params = [
				req.body.rating,
				req.body.name,
				req.body.description,
				req.body.price,
				req.body.in_stock,
				req.body.supplier_id,
				req.params.id,
			];
			ProductModel.updateProduct(...params)
				.then(() => res.send('Product updated'))
				.catch((err) => console.log('Request failed to update Product' + err));
		};
	}

	static deleteProduct() {
		return (req, res) => {
			ProductModel.deleteProduct(req.params.id)
				.then(() => res.send('Product deleted'))
				.catch((err) => console.log('Request failed to delete Product' + err));
		};
	}
}

module.exports = ProductController;
