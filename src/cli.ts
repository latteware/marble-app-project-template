import './lib/config'
import path from 'path'
import { TaskRunner } from '@marble-seeds/task-runner'

import { status } from './tasks/status'

const runner = new TaskRunner()

// ToDo: Make set Tape resillient so it can run with no tape found
const logsFolder = path.resolve(__dirname, '../logs')
runner.setTapeFolderSync(logsFolder)

runner.load('status', status)

const cli = async function (): Promise<void> {
  const { action, taskName, args } = TaskRunner.getArgs()

  console.log('Args: ', { action, taskName, args })

  if (action === 'list') {
    const listItems: string[] = runner.getTaskList()
    console.log('Available tasks:')
    listItems.forEach(taskName => {
      console.log(`- ${taskName}`)
    })
  } else if (action === 'run') {
    const res = await runner.run(taskName, args)
    console.log('Success:', res)
  } else if (action === 'clean-log') {
    await runner.cleanLog(taskName)
  } else {
    throw new Error('Invalid action')
  }
}

cli().catch((err) => {
  console.log('Error!!!', err)

  process.exit(1)
})
