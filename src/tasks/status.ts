import { Task } from '@marble-seeds/task'

export const status = new Task(async function (argv) {
  const status = { status: 'Ok', config: process.env.SAMPLE }

  return status
}, {
  boundaries: {}
})
