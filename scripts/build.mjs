import { execFile } from 'node:child_process'
import { cp, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(rootDir, 'dist')
const tscEntrypoint = resolve(rootDir, 'node_modules/typescript/bin/tsc')

const copyDirectories = async () => {
  for (const directory of ['assets', 'components', 'styles']) {
    await cp(resolve(rootDir, directory), resolve(distDir, directory), {
      recursive: true,
    })
  }
}

await rm(distDir, { force: true, recursive: true })
await mkdir(distDir, { recursive: true })

await execFileAsync(
  process.execPath,
  [tscEntrypoint, '-p', 'tsconfig.build.json'],
  { cwd: rootDir },
)

await copyDirectories()
