const ProvidersController = require("../controllers/ProvidersController");

const routesProviders = (app)=>{
    app.get('/providers', ProvidersController.listProviders() );

    app.get('/providers/:idprovider', ProvidersController.oneProvider() );

    app.post('/providers/newProvider', ProvidersController.insertProvider());

    app.put('/providers/:idprovider',ProvidersController.modifyProvider());

    app.delete('/providers/:idprovider', ProvidersController.cancelProvider() );
    
};

module.exports = routesProviders; /* exportou a função para usar no servidor */