const SuppliersDAO = require('../../config/DAO/SuppliersDAO');

class SuppliersModel {
	static getAll() {
		const QUERY = `
    	SELECT
        *
      FROM
        suppliers;`;

		return SuppliersDAO.getAll(QUERY);
	}

	static getSingle(req) {
		const { id } = req.params;
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					suppliers
				WHERE
					id = $1;`,
			values: [ id ]
		};

		return SuppliersDAO.getSingle(QUERY);
	}
	
	static post(req) {
		const {
			trading_name,
			phone,
			company_name,
			cnpj,
			address
		} = req.body;
		const QUERY = {
			text: `
				INSERT INTO suppliers
					( trading_name , phone , company_name , cnpj , address )
				VALUES
					( $1 , $2 , $3 , $4 , $5 );`,
			values: [ trading_name , phone , company_name , cnpj , address ]
		};

		return SuppliersDAO.post(QUERY);
	}

	static put(req) {
		const {
			trading_name,
			phone,
			company_name,
			cnpj,
			address
		} = req.body;
		const { id } = req.params;
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
			values: [ trading_name , phone , company_name , cnpj , address , id ]
		};

		return SuppliersDAO.put(QUERY);
	}

	static delete(req) {
		const { id } = req.params;
		const QUERY = {
			text: `
				DELETE FROM
					suppliers
				WHERE
					id = $1;`,
			values: [ id ]
		};

		return SuppliersDAO.delete(QUERY);
	}
}
module.exports = SuppliersModel