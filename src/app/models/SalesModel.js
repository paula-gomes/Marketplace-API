const SalesDAO = require('../../config/DAO/SalesDAO');

class SalesModel {
  constructor() {
    throw new Error('This class has no instance!');
  }

  static getAll() {
    const QUERY = `
      SELECT
        *
      FROM
        sales;`;

    return SalesDAO.execute(QUERY);
  }

  static getUser(req) {
    const { userId } = req.params;
    const QUERY = {
      text: `
        SELECT
          *
        FROM
          sales
        WHERE
          user_id = $1;`,
      values: [ userId ]
    };

    return SalesDAO.execute(QUERY);
  }

  static getProduct(req) {
    const { productId } = req.params;
    const QUERY = {
      text: `
        SELECT
          *
        FROM
          sales
        WHERE
          product_id = $1;`,
      values: [ productId ]
    };

    return  SalesDAO.execute(QUERY);
  }

  static post( req ) {
    const { userId, productId } = req.body;
    const QUERY = {
      text: `
        INSERT INTO sales
          ( user_id , product_id )
        VALUES
          ( $1 , $2 );`,
      values: [ userId , productId ]
    };

    return  SalesDAO.execute(QUERY);
  }

  static delete( req ) {
    const { saleId } = req.params;
    const QUERY = {
      text: `
        DELETE FROM
          sales
        WHERE
          id = $1;`,
      values: [saleId]
    };

    return  SalesDAO.execute(QUERY);
  }
}

module.exports = SalesModel;