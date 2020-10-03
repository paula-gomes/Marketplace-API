const clientController = require('../controllers/ClientsController');

module.exports = (app) => {

    app.get('/', clientController.getAllClients());

    app.get('/:id', clientController.getOneClient());

    app.post('/clients', clientController.addClient());

    app.put('/clients/:id',clientController.updateClient());

    app.delete('/clients',clientController.deleteClient());

};
