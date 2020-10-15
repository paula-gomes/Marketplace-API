const dataProductDao = require('../../config/DAO/ProductsDAO');
const db = require('../../config/database/database');

const instanceDao = new dataProductDao(db);

class ProductModel {
	static getAllProducts() {
		return instanceDao.getAllProducts();
	}

	static getOneProduct(id) {
		return instanceDao.getOneProduct(id);
	}

	static getAllProductsFromSupplier(supplier_id) {
		return instanceDao.getAllProductsFromSupplier(supplier_id);
	}

	static getOneProductFromSupplier(id, supplier_id) {
		return instanceDao.getOneProductFromSupplier(id, supplier_id);
	}

	static addProduct(rating, name, description, price, in_stock, supplier_id) {
		return instanceDao.addProduct(
			rating,
			name,
			description,
			price,
			in_stock,
			supplier_id
		);
	}

	static updateProduct(
		rating,
		name,
		description,
		price,
		in_stock,
		supplier_id,
		id
	) {
		return instanceDao.updateProduct(
			rating,
			name,
			description,
			price,
			in_stock,
			supplier_id,
			id
		);
	}

	static deleteProduct(id) {
		return instanceDao.deleteProduct(id);
	}
}

module.exports = ProductModel;
