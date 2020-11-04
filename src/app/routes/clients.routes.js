const ClientController = require('../controllers/ClientsController');

module.exports = (app) => {

    app.get('/clients', ClientController.getAllClients());

    app.get('/clients/:id', ClientController.getOneClient());

    app.get('/clients/login/:email', ClientController.validateClient());

    app.post('/clients/add', ClientController.addClient());

    app.put('/clients/:id', ClientController.updateClient());

    app.delete('/clients/:id', ClientController.deleteClient());

};