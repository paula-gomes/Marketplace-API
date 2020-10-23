# Marketplace-API

Development of a Marketplace API that operates through REST's architecture. By using HTTP verbs and specific URIs for each route its possible to register,list,update and delete our application's entities: clients, products, suppliers and sales.

# Technologies used

| Name      | description                       |
|:--------------|:----------------------------------|
| `PostgreSQL` | Database |
| `NodeJS`    | Web server environment |
| `Express` | Used as a project Dependency, it's a Web application framework of NodeJS that handdles middlewares, routes, among other functions|
| `Nodemon`| Used as a Development Dependency to automatize server's initialization |
| `Heroku`| Application's deployment tool|

# Entities , routes and methods
 
To access the database's information:
    https://resilia-marketplace.herokuapp.com/ + URI (GET)

####                     Clients

| Method | URI | Description|
|:-----------|:----------------|:-----------|
| `GET` | `/clients`| Returns all of the clients registered in the API's database |
| `GET` | `/clients/id`| Returns the client of an specific id (that is passed as a parameter in the URI)|
| `POST` | `/clients/add` | Register a new client in the API's database, the data must be sent in the request's body in JSON format|
| `PUT` |`/clients/id` | Modifies the information of an specific client(id paramter must be providede in the URI) by sending the new information in the request's body in JSON format|
| `DELETE` | `/clients/id` |Deletes an specific client(id paramater must be providede in the URI)|

####                     Products

| Method | URI | Description|
|:-----------|:----------------|:-----------|
| `GET` | `/products`| Returns all of the products registered in the API's database |
| `GET` | `/products/id`| Returns a product of an specific id (that is passed as a parameter in the URI)|
| `GET` | `/products/supplier/supplier_id`| Returns all of the products of an specific supplier which id is passed as a parameter in the URI |
| `GET` | `/products/supplier/supplier_id/id`| Return the product of an specific id (that is passed as a parameter in the URI) of a determined supplier which id is passed as a parameter in the URI as well|
| `POST` | `/products` | Register a new product in the API's database, the data must be sent in the request's body in JSON format|
| `PUT` |`/products/id` | Modifies the information of an specific product (id paramter must be providede in the URI) by sending the new information in the request's body in JSON format|
| `DELETE` | `/products/id` |Deletes an specific product(id paramater must be providede in the URI)|

####                    Suppliers

| Method | URI | Description|
|:-----------|:----------------|:-----------|
| `GET` | `/suppliers`| Returns all of the suppliers registered in the API's database |
| `GET` | `/suppliers/id`| Returns the supplier of an specific id (that is passed as a parameter in the URI)|
| `POST` | `/suppliers/newSupplier` | Register a new supplier in the API's database, the data must be sent in the request's body in JSON format|
| `PUT` |`/suppliers/id` | Modifies the information of an specific supplier(id paramter must be providede in the URI) by sending the new information in the request's body in JSON format|
| `DELETE` | `/suppliers/id` |Deletes an specific supplier(id paramater must be provided in the URI)|


####                    Sales

| Method | URI | Description|
|:-----------|:----------------|:-----------|
| `GET` | `/sales`| Returns all of the sales registered in the API's database |
| `GET` | `/sales/user/userId`| Returns the purchase of an specific client, which id is passed as a parameter in the URI|
| `GET` | `/sales/product/productId` | Returns all of the sales of an specific product, which id is passed as a parameter in the URI|
| `POST` |`/sales/newSale` | Register a new sale in the API's database, the data must be sent in the request's body in JSON format|
| `DELETE` | `/sales/cancelSale/saleId`| Cancels an specific sale(id paramater must be providede in the URI)|

# Contributors

 - [Amanda Duarte](https://github.com/AmandaDuart)
 - [Jarom Aidukaitis](https://github.com/jaromaidukaitis)
 - [Joaquim Moraes](https://github.com/Joaquim09Castro)
 - [Paula Gomes](https://github.com/paula-gomes)

# Project Status

 <img src="src/img/loading.gif"/>




