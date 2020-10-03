const app = require ('./config/custom-express');
const routes = require ('./app/routes/routesClients');
const port = 3000;

routes(app);

app.listen(port, () => console.log('Server initialized'));

module.exports = app;