const db = require('../../config/database/database');

class SuppliersDAO {

	static getAll() {
		const QUERY = `
			SELECT
				*
			FROM
				suppliers;`;

		return db.query(QUERY);
	};

	static getSingle( valuesArr ) {
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					suppliers
				WHERE
					id = $1;`,
			values: valuesArr
		};

		return db.query(QUERY);
	};

	static post( valuesArr ) {
		const QUERY = {
			text: `
				INSERT INTO suppliers
					( trading_name , phone , company_name , cnpj , address )
				VALUES
					( $1 , $2 , $3 , $4 , $5 );`,
			values: valuesArr
		};

		return db.query(QUERY);
	};

	static put( valuesArr ) {
		const QUERY = {
			text: `
				UPDATE
					suppliers
				SET
					trading_name = $1,
					phone = $2,
					company_name = $3,
					cnpj = $4,
					address = $5
				WHERE
					id = $6;`,
			values: valuesArr
		};

		return db.query(QUERY);
	};

	static delete( valuesArr ) {
		const QUERY = {
			text: `
				DELETE FROM
					suppliers
				WHERE
					id = $1;`,
			values: valuesArr
		};
		
		return db.query(QUERY);
	};

};


module.exports = SuppliersDAO;