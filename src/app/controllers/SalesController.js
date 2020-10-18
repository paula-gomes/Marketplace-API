const SalesModel = require('../models/SalesModel');

class SalesController {
  constructor() {
    throw new Error('This class has no instance!');
  }

  static listAll() {
    return (req,res) => 
      SalesModel.getAll()
        .then(sales => {res.send(sales.rows)})
        .catch(error => {
          console.log(error);
          res.send('Unable to complete action\n' + error.message);
        });
  }

  static listUserPurchases() {
    return (req,res) => {
      SalesModel.getUser(req)
        .then(sales => {res.send(sales.rows)})
        .catch(error => {
          console.log(error);
          res.send('Unable to complete action\n' + error.message);
        });
    }
  }

  static listProductSales() {
    return (req,res) => {
      SalesModel.getProduct(req)
        .then(sales => { res.send(sales.rows) })
        .catch(error => {
          console.log(error);
          res.send('Unable to complete action\n' + error.message);
        });
    }
  }

  static insertNew() {
    return (req,res) => {
      SalesModel.post( req )
      .then( () => res.send('Sale added!'))
      .catch( error => {
        console.log(error);
        res.send('Unable to complete action\n' + error.message);
      });
    }
  }

  static cancelSale() {
    return (req,res) => {
      SalesModel.delete( req )
      .then( () => res.send('Sale deleted!'))
      .catch( error => {
        console.log(error);
        res.send('Unable to complete action\n' + error.message);
      });
    }
  }
}

module.exports = SalesController;