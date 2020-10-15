class ProductDao {
	constructor(db) {
		this._db = db;
	}

	getAllProducts() {
		return new Promise((resolve, reject) => {
			this._db.all(`SELECT * FROM products`, (err, rows) => {
				if (err) {
					return reject(`not able to show products. Error: ${err}`);
				}
				return resolve(rows);
			});
		});
	}

	getAllProductsFromSupplier(supplier_id) {
		return new Promise((resolve, reject) => {
			this._db.all(
				`SELECT * FROM products WHERE supplier_id = ?`,
				[supplier_id],
				(err, rows) => {
					if (err) {
						return reject(`not able to show products. Error: ${err}`);
					}
					return resolve(rows);
				}
			);
		});
	}

	getOneProductFromSupplier(id, supplier_id) {
		return new Promise((resolve, reject) => {
			this._db.all(
				`SELECT * FROM products WHERE id = ? AND supplier_id = ?`,
				[id, supplier_id],
				(err, row) => {
					if (err) {
						return reject(`not able to show products. Error: ${err}`);
					}
					return resolve(row);
				}
			);
		});
	}

	getOneProduct(id) {
		return new Promise((resolve, reject) => {
			this._db.all(`SELECT * FROM products WHERE id = ?`, [id], (err, row) => {
				if (err) {
					return reject(`not able to show product. Error: ${err}`);
				}
				return resolve(row);
			});
		});
	}

	addProduct(rating, name, description, price, in_stock, supplier_id) {
		return new Promise((resolve, reject) => {
			this._db.run(
				`INSERT INTO products(rating, name, description, price, in_stock, supplier_id) VALUES (?, ?, ?, ?, ?, ?)`,
				[rating, name, description, price, in_stock, supplier_id],
				(err) => {
					if (err) {
						return reject(`not able to add product. Error: ${err}`);
					}
					return resolve(`product added successfully`);
				}
			);
		});
	}

	updateProduct(rating, name, description, price, in_stock, supplier_id, id) {
		return new Promise((resolve, reject) => {
			this._db.run(
				`UPDATE products SET 
				rating = ?,
				name = ?,
				description = ?,
				price = ?,
				in_stock = ?,
				supplier_id = ?
				WHERE id = ?`,
				[rating, name, description, price, in_stock, supplier_id, id],
				(err) => {
					if (err) {
						return reject(`not able to update product. Error: ${err}`);
					}
					return resolve(`product updated successfully`);
				}
			);
		});
	}

	deleteProduct(id) {
		return new Promise((resolve, reject) => {
			this._db.run(`DELETE FROM products WHERE id = ?`, [id], (err) => {
				if (err) {
					return reject(`not able to dele product. Error: ${err}`);
				}
				return resolve(`product deleted successfully`);
			});
		});
	}
}

module.exports = ProductDao;
