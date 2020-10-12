module.exports = {
  USERS: `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(80) NOT NULL,
      email VARCHAR(120) NOT NULL,
      pwrd TEXT NOT NULL,
      cpf CHAR(9) NOT NULL,
      phone VARCHAR(9),
      address TEXT NOT NULL
    )
  `,

  SUPPLIERS: `
  CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trading_name VARCHAR(120) NOT NULL,
    phone VARCHAR(9) NOT NULL,
    company_name VARCHAR(120) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    address TEXT NOT NULL
  )
`,

  PRODUCTS: `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      rating DECIMAL(2,2) NOT NULL
        CHECK(rating < 10.01),
      name VARCHAR(120) NOT NULL,
      description TEXT NOT NULL,
      price DECIMAL(6,2) NOT NULL,
      in_stock INTEGER NOT NULL
        DEFAULT 0,
      supplier_id INTEGER,
      FOREIGN KEY(supplier_id) REFERENCES suppliers(id)
    )
  `,

  SALES: `
    CREATE TABLE IF NOT EXISTS sales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INT,
      user_id INT,
      FOREIGN KEY(product_id) REFERENCES products(id),
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `,
};