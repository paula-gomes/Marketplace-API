class ClientDao {

    constructor(db) {
        this._db = db;
    }

    getAllClients() {

        return new Promise((resolve, reject) => {

            this._db.all(`SELECT * FROM users`, [], (err, row) => {
                if (err) {
                    return reject(`not able to show clients ${err}`);
                }
                    return resolve(row);
            })
        })
    }

    getOneClient(id) {

        return new Promise((resolve, reject) => {

            this._db.all(`SELECT * FROM users where id= ?`, [id], (err, row) => {
                if (err) {
                    return reject(`not able to find client ${err}`);
                }
                    return resolve(row);
            })
        })
    }

    addClient(name, email, pwrd, cpf, phone, address) {

        return new Promise((resolve, reject) => {

            this._db.run(
                `INSERT INTO users(name,email,pwrd,cpf,phone,address) VALUES (?,?,?,?,?,?)`,
                [name, email, pwrd, cpf, phone, address],
                (err) => {
                    if (err) {
                        return reject(`not able to add client ${err}`)
                    }
                        return resolve();
                });

        });
    }

    updateClient(name, email, password, cpf, phone, address, id) {

        return new Promise((resolve, reject) => {

            this._db.run(
                `UPDATE users SET 
					name=?, 
					email=?, 
					pwrd=?, 
					cpf=?, 
					phone=?, 
					address=? 
					WHERE id=?`,
                [name, email, password, cpf, phone, address, id],
                (err) => {
                    if (err) {
                        return reject(`not able to modify client ${err}`)
                    }
                        return resolve();
                });

        });
    }

    deleteClient(id) {

        return new Promise((resolve, reject) => {

            this._db.run(`DELETE FROM users where id= ?`, [id],
                (err) => {
                    if (err) {
                        return reject(`not able to delete client ${err}`);
                    }
                        return resolve();
                })
        });
    }
};

module.exports = ClientDao;