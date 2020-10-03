const SalesDAO = require('../../config/DAO/SalesDAO');

class SalesController {
  constructor(db) {
    this._salesDAO = new SalesDAO(db);
  }

  listAll() {
    return (req,res) => {
      this._salesDAO.getAll()
        .then(sales => {

        })
        .catch(err => console.log(err));
    }
  }

  listUserPurchases() {
    return (req,res) => {

      const { userId } = req.params;

      this._salesDAO.getAll(userId)
        .then(sales => {

        })
        .catch(err => console.log(err));
    }
  }

  listProductSales() {}

  insertNew() {}

  cancelSale() {}
}