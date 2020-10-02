const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/config/database/data.sqlite');
const SCHEMA = require('./tableSchema');


// Table Creation
db.serialize( () => {
  db.run( SCHEMA.USERS, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  db.run( SCHEMA.SUPPLIERS, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  db.run( SCHEMA.PRODUCTS, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  db.run( SCHEMA.SALES, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
});