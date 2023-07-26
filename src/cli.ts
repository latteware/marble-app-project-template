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
    const listItems: string = runner.getTaskList().join(' ,')
    console.log(`Available tasks: ${listItems}`)
  } else if (action === 'run') {
    await runner.run(taskName, args)
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
