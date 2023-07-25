import { expect } from 'chai'

import { Sample } from '../../src/index'

describe('Sample', function () {
  it('Should return config', async function () {
    const sample = new Sample({
      name: 'sample',
      age: 18
    })

    const config = sample.getConfig()

    expect(config.name).to.equal('sample')
    expect(config.age).to.equal(18)
  })

  it('Should update config', async function () {
    const sample = new Sample({
      name: 'sample',
      age: 18
    })

    sample.setConfig({
      name: 'sample',
      age: 19
    })

    const config = sample.getConfig()

    expect(config.name).to.equal('sample')
    expect(config.age).to.equal(19)
  })

  it('Should be able to initialize without config', async function () {
    const sample = new Sample()

    const config = sample.getConfig()

    expect(config.name).to.equal('sample')
    expect(config.age).to.equal(18)
  })
})
