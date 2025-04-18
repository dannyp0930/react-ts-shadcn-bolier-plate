const { defineConfig } = require('cypress')
const dotenv = require('dotenv')

const env = process.env.CYPRESS_ENV || 'local'
let envFile = '.env.development.local'

if (env === 'dev') {
  envFile = '.env.development'
} else if (env === 'prod') {
  envFile = '.env.production'
}

dotenv.config({ path: envFile })

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: process.env.VITE_BASE_URL,
    env: {
      API_URL: process.env.VITE_API_URL,
    },
  },
})
