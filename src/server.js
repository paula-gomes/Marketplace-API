/**
 * This file intializes the application
 * The app variable is imported from the custom-express.js file
 */

// Application import
const app = require('./config/custom-express');
const clientsRoutes = require ('./app/routes/clients.routes');

// Other variables
const PORT = process.env.PORT || 8080;

clientsRoutes(app);
// Server initialization
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));