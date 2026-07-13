import { defineConfig } from '@playwright/test'
import process from 'node:process'

export default defineConfig({
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  testDir: './test',
  testMatch: /.*\.test\.js/,
  use: {
    baseURL: 'http://localhost:8080/',
  },
})
