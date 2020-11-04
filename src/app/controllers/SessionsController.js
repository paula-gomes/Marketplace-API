const SessionsModel = require('../models/SessionsModel');

class SessionsController {
  static createSession() {
    return ( ( req , res ) => {
      SessionsModel.createSession( req )
        .then( resp => res.json({
          token: resp,
          userId: resp.split('-')[0]
        }) )
        .catch( err => res.send( JSON.stringify(err) ) )
    })
  }

  static endSession() {
    return ( ( req , res ) => {
      SessionsModel.endSession( req )
        .then( () => res.send('Session Ended') )
        .catch( err => {
          res.send('Error terminating session');
          console.log( err );
        })
    })
  }
}

module.exports = SessionsController;