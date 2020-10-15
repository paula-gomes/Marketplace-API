const db = require('../../config/database/database');
class ClientDao {

    static getAllClients(query) {
        return db.query(query);
    }

    static getOneClient(query) {
        return db.query(query);
    }

    static addClient(query) {
        return db.query(query);
    }

    static updateClient(query) {
        return db.query(query);
    }

    static deleteClient(query) {
        return db.query(query);
    }
};

module.exports = ClientDao;

// class SalesDAO {
//   static execute(query) {
//     return db.query(query);
//   }
// }

// module.exports = SalesDAO;