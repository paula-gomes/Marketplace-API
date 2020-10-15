const db = require('../../config/database/database');

class SuppliersDAO{

    static getAll(query){
        return db.query(query);
    };

    static getSingle(query){
        return db.query(query);
    };

    static post(query){
        return db.query(query);
    };

    static put(query){
        return db.query(query);
    };
    
    static delete(query){
        return db.query(query);
    };

};


module.exports = SuppliersDAO;