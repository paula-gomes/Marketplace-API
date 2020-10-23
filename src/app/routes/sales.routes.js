/**
 * File for the sales PATH routes
*/
// Controller for API CRUD methods require
const SalesController = require('../controllers/SalesController');


// Sales routes export
module.exports = (app) => {
  
  // List of all sales
  app.get('/sales', SalesController.listAll());
  // List of purchases made by an specific user
  app.get('/sales/user/:user_id', SalesController.listUserPurchases());
  
  // List of sales of an specific product
  app.get('/sales/product/:product_id', SalesController.listProductSales());
  
  // Insertion of a new sale
  app.post('/sales/newSale', SalesController.insertNew());

  // Deletion/cancel of a sale
  app.delete('/sales/cancelSale/:saleId', SalesController.cancelSale());
}