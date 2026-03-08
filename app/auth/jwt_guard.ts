import type { HttpContext } from '@adonisjs/core/http'
import { symbols } from '@adonisjs/auth'
import type {
    GuardContract,
    UserProviderContract,
} from '@adonisjs/auth/types'
import { verifyJwt } from '#services/jwt_service'
import User from '#models/user'

export class JwtGuard<UserProvider extends UserProviderContract<unknown>>
    implements GuardContract<UserProvider[typeof symbols.PROVIDER_REAL_USER]> {
    declare [symbols.GUARD_KNOWN_EVENTS]: {}

    driverName = 'jwt'
    authenticationAttempted = false
    isAuthenticated = false

    user?: UserProvider[typeof symbols.PROVIDER_REAL_USER]

    constructor(
        protected ctx: HttpContext,
        protected userProvider: UserProvider
    ) { }

    getUserOrFail() {
        if (!this.user) {
            throw new Error('User not authenticated')
        }
        return this.user
    }

    async authenticate() {

        this.authenticationAttempted = true

        const authHeader = this.ctx.request.header('Authorization')

        if (!authHeader) {
            throw new Error('Authorization header is missing')
        }
        const [type, token] = authHeader.split(' ')

        if (type !== 'Bearer' || !token) {
            throw new Error('Invalid authorization header format')
        }

        const payload = verifyJwt(token)

        const providerUser = await this.userProvider.findById(payload.sub)

        if (!providerUser) {
            throw new Error('User not found')
        }

        this.user = providerUser.getOriginal() as UserProvider[typeof symbols.PROVIDER_REAL_USER]
        this.isAuthenticated = true
        return this.user
    }

    async check() {
        try {
            await this.authenticate()
            return true 
        } catch {
            return false
        }
    }
}
