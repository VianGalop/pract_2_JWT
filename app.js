/* app.post('/login', (req, res) => {
  // Aquí verificarías las credenciales del usuario, por simplicidad, omitiremos este paso
  const { username, password } = req.body
  // Supongamos que la autenticación es exitosa
  const token = generateToken({ username })

  res.json({ token })
})

app.get('/protected', (req, res) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' })
  }

  try {
    const decoded = verifyToken(token)
    next()
    res.json({ message: `Bienvenido, ${decoded.username}!` })
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' })
  }
}) */
