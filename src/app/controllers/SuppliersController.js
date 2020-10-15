const { response } = require('../../config/custom-express');
const SuppliersModel = require('../models/SuppliersModel'); //import class

class SuppliersController {
    constructor() {
        throw ('erro')
    }
    static listAll() {
        return function (req, res) {
            SuppliersModel.getAll()
                .then(suppliers => {
                    res.send(suppliers)
                })
                .catch(err => console.log(err));
        }
    }

    static listOne() {
        return function (req, res) {
            SuppliersModel.getSingle(req.params.id)
                .then(supplier => {
                    res.send(supplier)
                })
                .catch(err => console.log(err));
        }
    }
    static insertNew() {
        return function (req, res) {
            SuppliersModel.post(req)
                .then(supplier => {
                    console.log(supplier);
                    res.send(supplier);
                })
                .catch(err => console.log(err));
        }
    }

    static modify() {
        return function (req, res) {
            SuppliersModel.put(req)
                .then(supplier => {
                    console.log(supplier);
                    res.send(supplier);
                })
                .catch(err => console.log(err));
        }

    }
    static cancel() {
        return function (req, res) {
            SuppliersModel.delete(req.params.id)
                .then(supplier => {
                    console.log(supplier);
                    res.send(supplier);
                })
                .catch(err => console.log(err));
        }

    }

}

module.exports = SuppliersController;