class SalesDAO {
  constructor(db) {
    this._db = db;
  }

  getAll() {
    const QUERY = `
      SELECT
        *
      FROM
        sales
    `;

    return new Promise((resolve,reject) => {
      this._db.all(QUERY, (err,res) => {
        if (err)
          return reject(`Unable to list sales \n Error: ${err}`);

        return resolve(res);
      })
    })
  }

  getUser(user) {
    const QUERY = `
      SELECT
        *
      FROM
        sales
      WHERE
        user_id = ?;
    `;

    return new Promise((resolve,reject) => {
      this._db.all(QUERY, user, (err,res) => {
        if (err)
          return reject(`Unable to list purchases. \n Error: ${err}`);

        return resolve(res);
      })
    })
  }

  getProduct(product) {
    const QUERY = `
      SELECT
        *
      FROM
        sales
      WHERE
        product_id = ?;
    `;

    return new Promise((resolve,reject) => {
      this._db.all(QUERY, product, (err,res) => {
        if (err)
          return reject(`Unable to list sales. \n Error: ${err}`);

        return resolve(res);
      })
    })
  }

  post(purchase) {
    const QUERY = `
      INSERT INTO
        sales (user_id,product_id)
      VALUES
        ( ? , ? );
    `;

    return new Promise((resolve,reject) => {
      this._db.run(QUERY, purchase, err => {
        if (err)
          return reject(`Unable to complete the sale. \n Error: ${err}`);

        return resolve('Sale successfull!');
      })
    })
  }

  delete(sale) {
    const QUERY = `
      DELETE FROM
        sales
      WHERE
        id = ?;
    `;

    return new Promise((resolve,reject) => {
      this._db.run(QUERY, sale, err => {
        if (err)
          return reject(`Unable to cancel sale. \n Error: ${err}`);

        return resolve('Sale canceled');
      })
    })
  }
}