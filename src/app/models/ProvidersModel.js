const ProvidersDAO = require('../../config/DAO/ProvidersDAO');
const db = require('../../config/database/database');

const providersDAO = new ProvidersDAO(db);

class ProvidersModel{
    static getProviders(){
        return providersDAO.getProviders();
    }
    static getSingleProvider(id){
        return providersDAO.getSingleProvider(id);
    }
    static postProvider(req){
        return providersDAO.postProvider(req);
    }
    static deleteProvider(id){
        return providersDAO.deleteProvider(id);
    }
    static replaceProvider(req){
        return providersDAO.replaceProvider(req);
    }
}
module.exports = ProvidersModel