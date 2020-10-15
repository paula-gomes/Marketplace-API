const db = require('../../config/database/database');

class SalesDAO {
  constructor() {
    throw new Error('This class has no instance');
  }

  static execute(query) {
    return db.query(query);
  }
}

module.exports = SalesDAO;