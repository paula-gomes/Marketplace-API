const dataClientDao = require('../../config/DAO/ClientsDao');
const db = require('../../../db/close_db');

const instanceDao = new dataClientDao(db);
//var paramsClient = [name, email, password, cpf, phone, address];

class ClientModel {

	static getAllClients() {
		return instanceDao.getAllClients();
	}

	static getOneClient(id) {
		return instanceDao.getOneClient(id);
	}

	static addClient(name, email, password, cpf, phone, address) {
		return instanceDao.addClient(name, email, password, cpf, phone, address);
	}

	static updateClient(name, email, password, cpf, phone, address, id) {
		return instanceDao.updateClient(name, email, password, cpf, phone, address, id);
	}

	static deleteClient(id) {
		return instanceDao.deleteClient(id);
	}
}

module.exports = ClientModel;



