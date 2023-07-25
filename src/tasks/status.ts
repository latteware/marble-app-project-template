// import path from 'path'

import { Task } from '@marble-seeds/task'
// import { RecordTape } from '@marble-seeds/record-tape'

export const status = new Task(async function (argv) {
  const status = { status: 'Ok' }

  return status
}, {
  boundaries: {}
})

if (require.main === module) {
  status.setCliHandlers()
  status.run({}).catch((err) => {
    console.error(err.message)
  })
}
