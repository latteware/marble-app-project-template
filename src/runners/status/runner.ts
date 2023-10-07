import { status } from '../../tasks/status'

export const handler = async function (ev: any): Promise<void> {
  console.log('Hello world!!!', ev)

  const res = await status.run(ev)

  console.log('Charly, copy?', res)
}
