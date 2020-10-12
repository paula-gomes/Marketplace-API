const SuppliersController = require("../controllers/SuppliersController");

const routesSuppliers = (app)=>{
    app.get('/suppliers', SuppliersController.listAll() );

    app.get('/suppliers/:id', SuppliersController.listOne() );

    app.post('/suppliers/newSupplier', SuppliersController.insertNew());

    app.put('/suppliers/:id',SuppliersController.modify());

    app.delete('/suppliers/:id', SuppliersController.cancel());
    
};

module.exports = routesSuppliers; /* exportou a função para usar no servidor */