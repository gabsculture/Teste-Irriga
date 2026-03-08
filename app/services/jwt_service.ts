import jwt from 'jsonwebtoken'
  const JWT_SECRET = process.env.JWT_SECRET || 'chave-secreta'

  export type JwtPayload = {
    sub: number
    email: string
    }

  export default class JwtService {
    public static sign(payload: JwtPayload) {
      return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
      })
    }
  }

  export function verifyJwt(token: string) {
    return jwt.verify(token, JWT_SECRET) as JwtPayload
  }