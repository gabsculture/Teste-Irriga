/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  pivots: {
    index: typeof routes['pivots.index']
    store: typeof routes['pivots.store']
    show: typeof routes['pivots.show']
    update: typeof routes['pivots.update']
    destroy: typeof routes['pivots.destroy']
  }
  irrigations: {
    index: typeof routes['irrigations.index']
    store: typeof routes['irrigations.store']
    show: typeof routes['irrigations.show']
    update: typeof routes['irrigations.update']
    destroy: typeof routes['irrigations.destroy']
    transfer: typeof routes['irrigations.transfer']
  }
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessToken: {
      store: typeof routes['auth.access_token.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
  }
}
