import { execFile } from 'node:child_process'
import { access } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const buildScript = resolve(rootDir, 'scripts/build.mjs')
const huskyEntrypoint = resolve(rootDir, 'node_modules/husky/bin.js')

await execFileAsync(process.execPath, [buildScript], { cwd: rootDir })

try {
  await access(resolve(rootDir, '.git'))
  await access(huskyEntrypoint)
  await execFileAsync(process.execPath, [huskyEntrypoint], { cwd: rootDir })
} catch {
  // Skip hook installation outside the package repository.
}
