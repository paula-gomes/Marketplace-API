const SessionsDAO = require('../../config/DAO/SessionsDAO');

class SessionsModel {
  static createSession( req ) {
		const {
      email,
      pwrd
		} = req.body;

		return SessionsDAO.createSession( [ email , pwrd ] );
	}

	static endSession( req ) {
		const {
			token
		} = req.body;

		return SessionsDAO.endSession( [ token ] );
	}
}

module.exports = SessionsModel;