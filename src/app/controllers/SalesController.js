const SalesDAO = require('../../config/DAO/SalesDAO');

class SalesController {
  constructor(db) {
    this._salesDAO = new SalesDAO(db);
  }

  listAll() {
    return (req,res) => {
      this._salesDAO.getAll()
        .then(sales => {
          res.send(sales);
        })
        .catch(err => console.log(err));
    }
  }

  listUserPurchases() {
    return (req,res) => {

      const { userId } = req.params;

      this._salesDAO.getUser( [userId] )
        .then(sales => {
          res.send(sales);
        })
        .catch(err => console.log(err));
    }
  }

  listProductSales() {
    return (req,res) => {

      const { productId } = req.params;

      this._salesDAO.getProduct( [productId] )
        .then(sales => {
          res.send(sales);
        })
        .catch(err => console.log(err));
    }
  }

  insertNew() {
    return (req,res) => {
      const {
        userId,
        productId
      } = req.params;

      this._salesDAO.post( [ userId , productId ] )
      .then( successMsg => res.send(successMsg))
      .catch( err => console.log(err));
    }
  }

  cancelSale() {
    return (req,res) => {
      const { saleId } = req.params;

      this._salesDAO.delete( [saleId] )
      .then( successMsg => res.send(successMsg))
      .catch( err => console.log(err));
    }
  }
}

module.exports = SalesController;