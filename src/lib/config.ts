import dotenv from 'dotenv'

const result = dotenv.config()

if (result.error !== undefined) {
  console.warn(result.error)
}
