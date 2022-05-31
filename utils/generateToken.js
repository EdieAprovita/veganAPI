const jwt = require('jsonwebtoken');

/**
 * @description Generate a new token for the user
 */

const generateToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
};

module.exports = generateToken;