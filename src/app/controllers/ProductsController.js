const ProductModel = require('../models/ProductsModel');

class ProductController {
	
	static getAllProducts() {
		return (req, res) => {
			ProductModel.getAllProducts()
				.then( response => res.send(response.rows))
				.catch( error => console.log('Request failed to return all products\n' + error) );
		};
	}

	static getOneProduct() {
		return (req, res) => {
			ProductModel.getOneProduct(req)
				.then( response => res.send(response.rows))
				.catch( error => console.log('Request failed to return one product\n' + error) );
		};
	}

	static getAllProductsFromSupplier() {
		return (req, res) => {
			ProductModel.getAllProductsFromSupplier(req)
				.then( response => res.send(response.rows))
				.catch( error => console.log('Request failed to return all products\n' + error) );
		};
	}

	static getOneProductFromSupplier() {
		return (req, res) => {
			ProductModel.getOneProductFromSupplier(req)
				.then( response => res.send(response.rows))
				.catch( error => console.log('Request failed to return products\n' + error));
		};
	}


	static addProduct() {
		return (req, res) => {
			ProductModel.addProduct(req)
				.then(() => res.send('Product added!'))
				.catch( error => console.log('Request failed to add Product\n' + error));
		};
	}

	static updateProduct() {
		return (req, res) => {
			ProductModel.updateProduct(req)
				.then(() => res.send('Product updated!'))
				.catch( error => console.log('Request failed to update Product\n' + error));
		};
	}

	static deleteProduct() {
		return (req, res) => {
			ProductModel.deleteProduct(req)
				.then(() => res.send('Product deleted!'))
				.catch( error => console.log('Request failed to delete Product\n' + error));
		};
	}
}

module.exports = ProductController;