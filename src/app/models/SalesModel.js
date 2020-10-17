const SalesDAO = require('../../config/DAO/SalesDAO');

class SalesModel {
  constructor() {
    throw new Error('This class has no instance!');
  }

  static getAll() {
    return SalesDAO.getAll();
  }

  static getUser(req) {
    const { userId } = req.params;

    return SalesDAO.getUser( [ userId ] );
  }

  static getProduct(req) {
    const { productId } = req.params;

    return  SalesDAO.getProduct( [ productId ] );
  }

  static post( req ) {
    const { 
      userId,
      productId
    } = req.body;

    return  SalesDAO.post( [ userId , productId ] );
  }

  static delete( req ) {
    const { saleId } = req.params;

    return  SalesDAO.execute( [ saleId ] );
  }
}

module.exports = SalesModel;