/**
 * This file intializes the application
 * The app variable is imported from the custom-express.js file
 * The aplication routes are imported here
 */

// Application import
const app = require('./config/custom-express');

const clientsRoutes = require('./app/routes/clients.routes');
const productsRoutes = require('./app/routes/products.routes');
const salesRoutes = require('../app/routes/sales.routes');
const providersRoutes = require('./src/app/routes/providers.routes');

clientsRoutes(app);
productsRoutes(app);
salesRoutes(app);
providersRoutes(app);

// Other variables
const PORT = process.env.PORT || 8080;

// Server initialization
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
