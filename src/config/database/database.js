const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL || "postgres://bdliqkxv:K7GY-YQKYz0MCF3CR5G5bdZnRP5Kpops@tuffi.db.elephantsql.com:5432/bdliqkxv"});

process.on('SIGINT', () => {
  console.log('\nDatabase connection terminated');
  process.exit(0);
});

module.exports = pool;