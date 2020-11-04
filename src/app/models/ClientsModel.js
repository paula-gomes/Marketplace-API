const { Client } = require('pg');
const ClientDAO = require('../../config/DAO/ClientsDAO');

class ClientModel {

	static getAllClients() {
		

		return ClientDAO.getAllClients();
	}

	static getOneClient( req ) {
		const {
			id
		} = req.params;

		return ClientDAO.getOneClient( [ id ] );
	}

	static validateClient( req ) {
		const {
			email
		} = req.params;

		return ClientDAO.validateClient( [ email ] );
	}

	static addClient( req ) {
		const {
			name,
			email,
			password,
			cpf,
			phone,
			address
		} = req.body;

		return ClientDAO.addClient( [ name , email , password , cpf , phone , address ] );
	}

	static updateClient( req ) {
		const { id } = req.params;
		const {
			name,
			email,
			password,
			cpf,
			phone,
			address
		} = req.body;

		return ClientDAO.updateClient( [ name , email , password , cpf , phone , address , id ] );
	}

	static deleteClient( req ) {
		const { id } = req.params;

		return ClientDAO.deleteClient( [ id ] );
	}
}

module.exports = ClientModel;