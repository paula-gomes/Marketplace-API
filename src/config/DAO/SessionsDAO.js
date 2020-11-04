const TokenGenerator = require('uuid-token-generator');

const db = require('../database/database');
const ClientsDAO = require('./ClientsDAO');

class SessionsDAO {
  static createSession( valuesArr ) {

    return ClientsDAO.validateClient( valuesArr )
      .then( response => response.rows[0] )
        .then( data => {
          const tokenGen = new TokenGenerator();
          const token = tokenGen.generate();
          const customToken = `${data.id}-${token}`;

          const time = new Date().toISOString();

          const QUERY = {
            text: `
              INSERT INTO sessions
                ( user_id , access_token , joined )
              VALUES
                ( $1 , $2 , $3 );`,
            values: [ data.id , customToken , time ]
          };
          return db.query( QUERY )
            .then( () => customToken)
            .catch( err => err)
        })
      .catch( err => console.log( err ) );
  }
  
  static endSession( valuesArr ) {
    const QUERY = {
      text: `
        DELETE FROM
          sessions
        WHERE
          access_token = $1`,
      values: valuesArr
    };

    return db.query( QUERY );
  }
}

module.exports = SessionsDAO;