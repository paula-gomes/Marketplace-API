const ClientModel = require('../models/ClientsModel');

class ClientController {

    static getAllClients() {

        return (( req , res ) => {
            ClientModel.getAllClients()
                .then( response => res.send(response.rows))
                .catch((err) => console.log('Request failed to return all clients\n' + err));
        });
    }

    static getOneClient() {

        return (( req , res ) => {
            ClientModel.getOneClient( req )
                .then( response => res.send(response.rows))
                .catch((err) => console.log('Request failed to return one client\n' + err))
        });
    }

    static getOneClientEmail() {

        return (( req , res ) => {
            ClientModel.getOneClientEmail( req )
                .then( response => res.send(response.rows))
                .catch((err) => console.log('Request failed to return one client\n' + err))
        });
    }


    static addClient() {

        return (( req , res ) => {
            ClientModel.addClient( req )
                .then(() => res.send('Client added!'))
                .catch((err) => console.log('Request failed to add Client\n' + err))
        });
    }

    static updateClient() {
        return (( req , res ) => {
            ClientModel.updateClient( req )
                .then(() => res.send('Client updated!'))
                .catch((err) => console.log('Request failed to update Client\n' + err))
        });
    }

    static deleteClient() {

        return (( req , res ) => {
            ClientModel.deleteClient( req )
                .then(() => res.send('Client deleted!'))
                .catch((err) => console.log('Request failed to delete Client\n' + err))
        });
    }    
}

module.exports = ClientController;