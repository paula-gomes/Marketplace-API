const db = require('../../config/database/database');
const SalesController = require('../controllers/SalesController');

const salesController = new SalesController(db);
module.exports = (app) => {
  
  app.get('/sales', salesController.listAll());

  //app.get('/sales/:userId', salesController.listUserPurchases());

  //app.get('/sales/:productId', salesController.listProductSales());

  //app.post('/sales/newSale', salesController.insertNew());

  //app.delete('/sales/cancelSale/:saleId', salesController.cancelSale());
}