const ClientDAO = require('../../config/DAO/ClientsDAO');

class ClientModel {

	static getAllClients() {
		const QUERY = `
			SELECT
				*
			FROM
				users;`;

		return ClientDAO.getAllClients(QUERY);
	}

	static getOneClient(req) {
		const {
			id
		} = req.params;
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					users
				WHERE
					id = $1;`,
			values: [id]
		};

		return ClientDAO.getOneClient(QUERY);
	}

	static addClient(req) {
		const {
			name,
			email,
			password,
			cpf,
			phone,
			address
		} = req.body;
		const QUERY = {
			text: `
				INSERT INTO users
					( name , email , pwrd , cpf , phone , address )
				VALUES
					( $1 , $2 , $3 , $4 , $5 , $6 );`,
			values: [name, email, password, cpf, phone, address]
		};

		return ClientDAO.addClient(QUERY);
	}

	static updateClient(req) {
		const {
			name,
			email,
			password,
			cpf,
			phone,
			address
		} = req.body;
		const {
			id
		} = req.params;
		const QUERY = {
			text: `
				UPDATE users SET
					name = $1,
					email = $2, 
					pwrd = $3,
					cpf = $4,
					phone = $5,
					address = $6
				WHERE
					id = $7;`,
			values: [ name, email, password, cpf, phone, address, id ]
		};

		return ClientDAO.updateClient(QUERY);
	}

	static deleteClient(req) {
		const { id } = req.params;
		const QUERY = {
			text: `
				DELETE FROM
					users
				WHERE
					id = $1;`,
			values: [ id ]
		};

		return ClientDAO.deleteClient(QUERY);
	}
}

module.exports = ClientModel;