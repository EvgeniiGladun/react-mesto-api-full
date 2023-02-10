require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET = '337fd74160df4d86dd7435ef560348417d7817c70a5f195c3682f6efab0c3c1b' } = process.env;

const { NOT_FOUND_USER } = require('../constants');
const Unauthorized = require('../errors/Unauthorized');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  const JWT = req.cookies.jwt;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    if (!JWT) {
      throw next(new Unauthorized(NOT_FOUND_USER));
    }
  }

  const token = !authorization ? JWT : authorization.replace('Bearer ', '');
  let payload = '';

  try {
    // попытаемся верифицировать токен
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw next(new Unauthorized(NOT_FOUND_USER));
  }

  req.user = payload;
  return next();
};

module.exports = {
  auth,
  JWT_SECRET,
};
