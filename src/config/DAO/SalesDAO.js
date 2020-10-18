const db = require('../../config/database/database');

class SalesDAO {
  constructor() {
    throw new Error('This class has no instance');
  }

  static getAll() {
    const QUERY = `
    SELECT
      u.name,
      p.name
    FROM
      sales s
    INNER JOIN
      products p
    ON
      p.id = s.product_id
    INNER JOIN
      users u
    ON
      u.id = s.user_id;`;

    return db.query(QUERY);
  }

  static getUser( valuesArr ) {
    const QUERY = {
      text: `
        SELECT
          p.name,
          p.price
        FROM
          sales
        INNER JOIN
          products p
        ON
          p.id = s.product_id
        WHERE
          user_id = $1;`,
      values: valuesArr
    };

    return db.query(QUERY);
  }
  static getProduct( valuesArr ) {
    const QUERY = {
      text: `
        SELECT
          u.name,
          u.email,
          u.address
        FROM
          sales
        INNER JOIN
          users u
        ON
          u.id = s.user_id
        WHERE
          product_id = $1;`,
      values: valuesArr
    };

    return db.query(QUERY);
  }
  static post( valuesArr ) {
    const QUERY = {
      text: `
        INSERT INTO sales
          ( user_id , product_id )
        VALUES
          ( $1 , $2 );`,
      values: valuesArr
    };

    return db.query(QUERY);
  }
  static delete( valuesArr ) {
    const QUERY = {
      text: `
        DELETE FROM
          sales
        WHERE
          id = $1;`,
      values: valuesArr
    };

    return db.query(QUERY);
  }
}

module.exports = SalesDAO;