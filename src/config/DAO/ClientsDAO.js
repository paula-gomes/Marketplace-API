const db = require('../../config/database/database');
class ClientDao {

	static getAllClients() {
		const QUERY = `
			SELECT
				*
			FROM
				users;`;

		return db.query(QUERY);
	}

	static getOneClient( valuesArr ) {
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					users
				WHERE
					id = $1;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static getOneClientEmail( valuesArr ) {
		const QUERY = {
			text: `
				SELECT
					*
				FROM
					users
				WHERE
					email = $1;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static addClient( valuesArr ) {
		const QUERY = {
			text: `
				INSERT INTO users
					( name , email , pwrd , cpf , phone , address )
				VALUES
					( $1 , $2 , $3 , $4 , $5 , $6 );`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static updateClient( valuesArr ) {
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
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static deleteClient( valuesArr ) {
		const QUERY = {
			text: `
				DELETE FROM
					users
				WHERE
					id = $1;`,
			values: valuesArr
		};

		return db.query(QUERY);
	}

	static validateClient( valuesArr ) {
		const QUERY = {
			text: `
				SELECT
					id
				FROM
					users
				WHERE
					email = $1 AND
					pwrd = $2;`,
			values: valuesArr
		}

		return db.query(QUERY);
	}
};

module.exports = ClientDao;