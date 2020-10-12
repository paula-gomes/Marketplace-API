const SuppliersDAO = require('../../config/DAO/SuppliersDAO');
const db = require('../../config/database/database');

const suppliersDAO = new SuppliersDAO(db);

class SuppliersModel{
    static getAll(){
        return suppliersDAO.getAll();
    }
    static getSingle(id){
        return suppliersDAO.getSingle(id);
    }
    static post(req){
        return suppliersDAO.post(req);
    }
    static delete(id){
        return suppliersDAO.delete(id);
    }
    static put(req){
        return suppliersDAO.put(req);
    }
}
module.exports = SuppliersModel