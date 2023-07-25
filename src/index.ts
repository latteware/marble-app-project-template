interface Config {
  name: string
  age: number
}

export const Sample = class Sample {
  public _config: Config

  constructor (config?: Config) {
    this._config = config ?? { name: 'sample', age: 18 }
  }

  setConfig (config: Config): void {
    this._config = config
  }

  getConfig (): Config {
    return this._config
  }
}
