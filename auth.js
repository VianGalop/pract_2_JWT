import jwt from 'jsonwebtoken'

const secretKey = 'La_clave'

export const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: Math.floor(Date.now() / 1000) - 30 }) // caduca en 1m
}

export const verifyToken = (token) => {
  return jwt.verify(token, secretKey, { expiresIn: Math.floor(Date.now() / 1000) - 30 }) // verifuca caducidad
}

/* Math.floor(Date.now() / 1000) - 30  */
