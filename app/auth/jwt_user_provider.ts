import User from '#models/user'

export function jwtUserProvider() {
  return {
    async findById(identifier: number) {
      const user = await User.find(identifier)

      if (!user) {
        return null
      }

      return {
        getOriginal() {
          return user
        },
      }
    },
  }
}