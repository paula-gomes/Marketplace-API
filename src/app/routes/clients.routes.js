const clientController = require('../controllers/ClientsController');

module.exports = (app) => {

    app.get('/clients', clientController.getAllClients());

    app.get('/clients/:id', clientController.getOneClient());

    app.post('/clients', clientController.addClient());

    app.put('/clients/:id',clientController.updateClient());

    app.delete('/clients/:id',clientController.deleteClient());

};