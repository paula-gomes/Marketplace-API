const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/config/database/data.sqlite');

process.on('SIGINT', () => 
  db.close(() => {
    console.log('Database connection terminated');
    process.exit(0);
  })
);

module.exports = db;