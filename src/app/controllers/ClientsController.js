const ClientModel = require('../models/ClientsModel');

class ClientController {

    static getAllClients() {

        return ((req, res) => {
            ClientModel.getAllClients()
                .then((row) => res.send(row))
                .catch((err) => console.log('Request failed to return all clients' + err));
        });
    }

    static getOneClient() {

        return ((req, res) => {
            ClientModel.getOneClient(req.params.id)
                .then(() => res.send(JSON.stringify(req.body.name)))
                .catch((err) => console.log('Request failed to return one client' + err))
        });
    }

    static addClient() {

        return ((req, res) => {
            const params = [req.body.name, req.body.email, req.body.password, req.body.cpf, req.body.phone, req.body.adress];
            ClientModel.addClient(...params)
                .then(() => res.send(...params))
                .catch((err) => console.log('Request failed to add Client' + err))
        });
    }

    static updateClient() {
        return ((req, res) => {
            const params = [req.body.name, req.body.email, req.body.password, req.body.cpf, req.body.phone, req.body.adress, req.params.id];
            ClientModel.updateClient(...params)
                .then(() => res.send('Client updated'))
                .catch((err) => console.log('Request failed to update Client' + err))
        });
    }

    static deleteClient() {

        return ((req, res) => {
            ClientModel.deleteClient(req.params.id)
                .then(() => res.send('Client deleted'))
                .catch((err) => console.log('Request failed to delete Client' + err))
        });
    }    
}

module.exports = ClientController;