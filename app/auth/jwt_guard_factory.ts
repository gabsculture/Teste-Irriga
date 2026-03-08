import type { HttpContext } from '@adonisjs/core/http'
import { jwtUserProvider } from './jwt_user_provider.js'
import { JwtGuard } from './jwt_guard.js'

export function jwtGuard(config: { provider: ReturnType<typeof jwtUserProvider> }) {
  return {
    async resolver(name: string, app: any) {
      return (ctx: HttpContext) => {
        return new JwtGuard(ctx, config.provider)
      }
    },
  }
}