const SuppliersModel = require('../models/SuppliersModel'); //import class

class SuppliersController {
    constructor() {
        throw ('erro')
    }
    static listAll() {
        return  (req, res) => {
            SuppliersModel.getAll()
                .then(suppliers => {
                    res.send(suppliers.rows)
                })
                .catch(err => console.log(err));
        }
    }

    static listOne() {
        return (req, res) => {
            SuppliersModel.getSingle(req)
                .then(supplier => {
                    res.send(supplier.rows)
                })
                .catch(err => console.log(err));
        }
    }
    static insertNew() {
        return (req, res) => {
            SuppliersModel.post(req)
                .then( () => {
                    res.send('Supplier added!');
                })
                .catch(err => console.log(err));
        }
    }

    static modify() {
        return (req, res) => {
            SuppliersModel.put(req)
                .then( () => {
                    res.send('Supplier modified!');
                })
                .catch(err => res.send(err.message));
        }

    }
    static cancel() {
        return (req, res) => {
            SuppliersModel.delete(req)
                .then( () => {
                    res.send('Supplier deleted!');
                })
                .catch(err => console.log(err));
        }

    }

}

module.exports = SuppliersController;