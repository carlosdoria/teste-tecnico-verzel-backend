import { Router } from 'express'

import authAdminMiddleware from '../app/middlewares/auth'

import { userRoutes } from './user.routes'
import { moduleRoutes } from './module.routes'
import { classRoutes } from './class.routes'

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/module', moduleRoutes)
routes.use('/class', classRoutes)

routes.use(authAdminMiddleware)
routes.get('/admin/test', (req, res) => res.status(400).json({
  test1: req.userId,
  test2: req.username,
  test3: req.isAdmin,
}))

export { routes }
