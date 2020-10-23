const SalesDAO = require('../../config/DAO/SalesDAO');

class SalesModel {
  constructor() {
    throw new Error('This class has no instance!');
  }

  static getAll() {
    return SalesDAO.getAll();
  }

  static getUser(req) {
    const { user_id } = req.params;

    return SalesDAO.getUser( [ user_id ] );
  }

  static getProduct(req) {
    const { product_id } = req.params;

    return  SalesDAO.getProduct( [ product_id ] );
  }

  static post( req ) {
    const { 
      user_id,
      product_id
    } = req.body;

    return  SalesDAO.post( [ user_id , product_id ] );
  }

  static delete( req ) {
    const { saleId } = req.params;

    return  SalesDAO.execute( [ saleId ] );
  }
}

module.exports = SalesModel;