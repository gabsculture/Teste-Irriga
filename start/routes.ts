/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
import PivotsController from '#controllers/pivots_controller'
import IrrigationsController from '#controllers/irrigations_controller'

router.group(() => {
  router.get('/', () => {
    return { hello: 'world' }
  })
  router.resource('/pivots', PivotsController).apiOnly()
  router.resource('/irrigations', IrrigationsController).apiOnly()
  router.post('/irrigations/transferIrrigations', [IrrigationsController, 'transfer'])
}).use(middleware.auth())


router
  .group(() => {
    router
      .group(() => {
        router.post('register', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessToken, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('/profile', [controllers.Profile, 'show'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
  })
  .prefix('/api/v1')
