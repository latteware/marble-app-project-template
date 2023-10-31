import '../../lib/config'
import { server, Route, Router } from '@marble-seeds/api'

import { status } from '../../tasks/status'

const srv = server()

const routers = new Router({
  routes: [
    Route.plugTask({
      box: status,
      method: 'get',
      path: '/status'
    })
  ]
})

routers.add(srv)

const apiPort = 3000

srv.listen(apiPort)
console.log(`Api started: <${apiPort}>`)
