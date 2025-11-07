const jwt = require('jsonwebtoken');

/**
 * Generate JWT token for user authentication
 * @param {string} userId - User's MongoDB _id
 * @param {string} role - User's role (student/organizer)
 * @returns {string} JWT token
 */
const generateToken = (userId, role) => {
  const payload = {
    id: userId,
    role: role,
  };

  const options = {
    expiresIn: '7d', // Token expires in 7 days
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

/**
 * Verify JWT token
 * @param {string} token - JWT token to verify
 * @returns {object} Decoded token payload
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
