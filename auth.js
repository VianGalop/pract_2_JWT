import jwt from 'jsonwebtoken'

const secretKey = 'La_clave'

export const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '2m' }) // caduca en 1m
}

export const verifyToken = (token) => {
  return jwt.verify(token, secretKey) // verifuca caducidad
}

/* Math.floor(Date.now() / 1000) - 30  */
