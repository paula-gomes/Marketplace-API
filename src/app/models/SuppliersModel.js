const SuppliersDAO = require('../../config/DAO/SuppliersDAO');

class SuppliersModel {
	static getAll() {
		return SuppliersDAO.getAll();
	}

	static getSingle(req) {
		const { id } = req.params;

		return SuppliersDAO.getSingle( [ id ] );
	}
	
	static post(req) {
		const {
			trading_name,
			phone,
			company_name,
			cnpj,
			address
		} = req.body;

		return SuppliersDAO.post( [ trading_name , phone , company_name , cnpj , address ] );
	}

	static put(req) {
		const { id } = req.params;
		const {
			trading_name,
			phone,
			company_name,
			cnpj,
			address
		} = req.body;

		return SuppliersDAO.put( [ trading_name , phone , company_name , cnpj , address , id ] );
	}

	static delete(req) {
		const { id } = req.params;

		return SuppliersDAO.delete( [ id ] );
	}
}
module.exports = SuppliersModel
