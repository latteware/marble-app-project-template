import { Task } from '@marble-seeds/task'

export const status = new Task(async function (argv) {
  const status = { status: 'Ok' }

  return status
}, {
  boundaries: {}
})
