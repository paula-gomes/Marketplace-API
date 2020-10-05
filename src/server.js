/**
 * This file intializes the application
 * The app variable is imported from the custom-express.js file
 * The aplication routes are imported here
 */

// Application import
const app = require('./config/custom-express');

const clientsRoutes = require ('./app/routes/clients.routes');
const salesRoutes = require('../app/routes/sales.routes');

clientsRoutes(app);
salesRoutes(app);

// Other variables
const PORT = process.env.PORT || 8080;

// Server initialization
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));