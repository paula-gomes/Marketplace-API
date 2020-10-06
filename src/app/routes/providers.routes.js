
const routesProviders = (app)=>{
    app.get('/providers', (req, resp)=>{
    });

    app.get('/providers/:idprovider', (req, resp)=>{ 
    });

    app.post('/providers/:idprovider', (req, resp)=>{ 
    });

    app.put('/providers/:idprovider', (req, resp)=>{ 
    });

    app.delete('/providers/:idprovider', (req, resp)=>{ 
    });
    
};

module.exports = routesProviders; /* exportou a função para usar no servidor */