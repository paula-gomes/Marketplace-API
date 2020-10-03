class ClientDao {

	constructor(db) {
		this._db = db;
	}


	getAllClients() {

		return new Promise((resolve, reject) => {

			this._db.all(`SELECT * FROM CLIENTS`, [], (err, row) => {

				if (err) {
					return reject(`not able to show clients ${err}`);
				}
				return resolve(row);
			})
		})
	}

	getOneClient(id_client) {

		return new Promise((resolve, reject) => {

			this._db.all(`SELECT * FROM CLIENTS where id_client = ?`, [id_client], (err, row) => {

				if (err) {
					return reject(`not able to find client ${err}`);
				}
				return resolve(row);
			})
		})
	}

	addClient(name, email, password, cpf, phone, address) {

		return new Promise((resolve, reject) => {

			this._db.run(
				`INSERT INTO CLIENTS(name,email,password,cpf,phone,address) VALUES (?,?,?,?,?,?)`,
				[name, email, password, cpf, phone, address],
				(err) => {
					if (err) {
						return reject(`not able to add client ${err}`)
					}
					return resolve();
				});

		});
	}

	updateClient(name, email, password, cpf, phone, address,id) {

		return new Promise((resolve, reject) => {

			this._db.run(
				`UPDATE CLIENTS SET 
					name=?, 
					email=?, 
					password=?, 
					cpf=?, 
					phone=?, 
					address=? 
					WHERE id_client=?`,
				[name, email, password, cpf, phone, address,id],
				(err) => {
					if (err) {
						return reject(`not able to modify client ${err}`)
					}
					return resolve();
				});

		});
	}

	deleteClient(id_client){

		return new Promise((resolve, reject) => {

			this._db.run(`DELETE FROM CLIENTS where id_client = ?`, [id_client], 
			(err) => {

				if (err) {
					return reject(`not able to delete client ${err}`);
				}
				return resolve(row);
			})
		})
	}
}

module.exports = ClientDao;