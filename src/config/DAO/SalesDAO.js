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
          return reject(`Unable to list all sales \n Error: ${err}`);

        return resolve(res);
      })
    })
  }

  getUser(id) {
    const QUERY = `
      SELECT
        *
      FROM
        sales
      WHERE
        id = ?
    `;

    return new Promise((resolve,reject) => {
      this._db.all(QUERY, [id], (err,res) => {
        if (err)
          return reject(`Unable to list all sales \n Error: ${err}`);

        return resolve(res);
      })
    })
  }

  getProduct() {}

  post() {}

  delete() {}
}