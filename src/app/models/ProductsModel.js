const ProductDao = require('../../config/DAO/ProductsDAO');

class ProductModel {
	static getAllProducts() {
		return ProductDao.getAllProducts();
	}

	static getOneProduct(req) {
		const { id } = req.params;

		return ProductDao.getOneProduct( [ id ] );
	}

	static getAllProductsFromSupplier(req) {
		const { supplier_id } = req.params;

		return ProductDao.getAllProductsFromSupplier( [ supplier_id ] );
	}

	static getOneProductFromSupplier(req) {
		const {
			id,
			supplier_id
		} = req.params;

		return ProductDao.getOneProductFromSupplier( [ id , supplier_id ] );
	}

	static addProduct(req) {
		const {
			rating,
			name,
			description,
			price,
			in_stock,
			supplier_id
		} = req.body;
		
		return ProductDao.addProduct( [ rating , name , description , price , in_stock , supplier_id ] );
	}

	static updateProduct(req) {
		const { id } = req.params;
		const {
			rating,
			name,
			description,
			price,
			in_stock,
			supplier_id
		} = req.body;

		return ProductDao.updateProduct( [ rating , name , description , price , in_stock , supplier_id , id ] );
	}

	static deleteProduct(req) {
		const { id } = req.params;

		return ProductDao.deleteProduct( [ id ] );
	}
}

module.exports = ProductModel;
