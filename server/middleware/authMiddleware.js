import jwt from 'jsonwebtoken'
const SECRET_KEY = process.env.SECRET_KEY

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']
  if (!token) return res.status(401).json({ message: 'No token provided' })

  jwt.verify(token.split(' ')[1], SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' })
    req.user = user
    next()
  })
}

export default authenticateToken
