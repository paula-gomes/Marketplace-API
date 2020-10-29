const db = require('../../config/database/database');

class ProductDao {

	static getAllProducts() {
		const QUERY = `
			SELECT
				*
			FROM
				products;`;

		return db.query(QUERY);
	}

	static getOneProduct( valuesArr ) {
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					products
				WHERE
					id = $1;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static getAllProductsFromSupplier( valuesArr ) {
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					products
				WHERE
					supplier_id = $1;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static getOneProductFromSupplier( valuesArr ) {
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					products
				WHERE
					id = $1 AND
					supplier_id = $2;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}


	static addProduct( valuesArr ) {
		const QUERY = {
			text: `
				INSERT INTO products
					(rating, name, description, price, in_stock, supplier_id , img)
				VALUES
					( $1 , $2 , $3 , $4 , $5 , $6 , $7);`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static updateProduct( valuesArr ) {
		const QUERY = {
			text: `
				UPDATE
					products
				SET
					rating = $1,
					name = $2,
					description = $3,
					price = $4,
					in_stock = $5,
					supplier_id = $6,
					img = $7
				WHERE
					id = $8;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static deleteProduct( valuesArr ) {
		const QUERY = {
			text: `
				DELETE FROM
					products
				WHERE
					id = $1;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}
}

module.exports = ProductDao;