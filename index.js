import express from 'express'
import { generateToken, verifyToken } from './auth.js'
/* import jwt from 'jsonwebtoken' */

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express con JWT!')
})

app.post('/login', (req, res) => {
  // Aquí verificarías las credenciales del usuario, por simplicidad, omitiremos este paso
  const { username, password } = req.body

  if (!username || !password) {
    res.json({ message: 'Faltan datos' })
  } else {
    // Supongamos que la autenticación es exitosa
    const token = generateToken({ username, password })
    res.json({ token })
  }
})

app.get('/verify', (req, res) => {
  const token = req.headers.authorization

  // valida el toquen se encuentre en los headers
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' })
  }

  // validamos el token
  try {
    const decoded = verifyToken(token.split(' ')[1]) // el token se forma de dos  palabra "<bearer> token"
    console.log('decoded', decoded.exp * 1000)
    console.log('fecha:', Date.now())
    if (Date.now() < decoded.exp * 1000) {
      res.status(200).send({ message: 'Token es válido y no ha expirado' })
    } else {
      res.status(401).send({ message: 'Token es inválido o ha expirado' })
      /* res.json({ message: `Bienvenido, ${decoded.usernames}!` }) */
    }
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Servidor iniciando http://localhost:${PORT}`))
