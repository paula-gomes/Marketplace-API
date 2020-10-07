const ProvidersModel= require('../../config/models/ProvidersModel');//import class

class ProvidersController{
        constructor(){
            throw ('erro')
        }
        static listProviders(){
            return function(req,res){
                ProvidersModel.getProviders()
                .then(provider =>{
                    res.send(provider)
            })
            .catch(err => console.log(err));
        }
    }

        static oneProvider(){
            return function(req,res){
                ProvidersModel.getSingleProvider(req)
                .then(provider =>{
                    res.send(provider)
            })
            .catch(err => console.log(err));
        }
    }
        static insertProvider(){
            return function(req,res){
                ProvidersModel.postProvider(req)
                .then(provider =>{
                   console.log(provider);
            })
            .catch(err => console.log(err));
        }
    }

        static cancelProvider(){
            return function(req,res){
                providersDAO.deleteProvider(req)
                .then(provider =>{
                   console.log(provider);
            })
            .catch(err => console.log(err));
        }

    }
        static modifyProvider(){
            return function(req,res){
                ProvidersModel.replaceProvider(req)
                .then(provider =>{
                console.log(provider);
            })
            .catch(err => console.log(err));
        }   

    }

}

module.exports = ProvidersController;
