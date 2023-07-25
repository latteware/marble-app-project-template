import { server, Route, Router } from '@marble-seeds/api'

import { status } from './tasks/status'

const srv = server()

const routers = new Router({
  routes: [
    Route.plugTask({
      box: status,
      method: 'get',
      path: '/status'
    })
  ],
  prefix: '/api'
})

routers.add(srv)

srv.listen({
  port: 8080
}, function () {
  console.log('running on port 8080')
})
