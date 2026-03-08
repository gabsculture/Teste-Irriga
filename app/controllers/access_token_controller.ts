import User from '#models/user'
import { loginValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'
import JwtService from '#services/jwt_service'

export default class AccessTokenController {
  async store({ request, serialize }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = JwtService.sign({
      sub: user.id,
      email: user.email,
    })

    return serialize({
      user: UserTransformer.transform(user),
      token,
      type: 'bearer',
    })
  }

}