/**
 * File for the sales PATH routes
*/

// Database instance require
const db = require('../../config/database/database');

// Controller for API CRUD methods require
const SalesController = require('../controllers/SalesController');

// Controller instance created
const salesController = new SalesController(db);

// Sales routes export
module.exports = (app) => {
  
  // List of all sales
  app.get('/sales', salesController.listAll());

  // List of purchases made by an specific user
  app.get('/sales/users/:userId', salesController.listUserPurchases());

  // List of sales of an specific product
  app.get('/sales/products/:productId', salesController.listProductSales());

  // Insertion of a new sale
  app.post('/sales/newSale/:userId/:productId', salesController.insertNew());

  // Deletion/cancel of a sale
  app.delete('/sales/cancelSale/:saleId', salesController.cancelSale());
}