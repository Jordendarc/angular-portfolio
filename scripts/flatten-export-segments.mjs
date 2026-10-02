// Works around a Next.js static-export bug on Windows: prefetch payloads that the client
// requests as `out/work/__next.work.__PAGE__.txt` get written as `out/work/__next.work/__PAGE__.txt`
// because the exporter joins the name with backslashes. This moves them to the name the client
// asks for. On macOS/Linux the export is already correct and this does nothing.
import { readdir, rename, rm } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'

const outDir = join(import.meta.dirname, '..', 'out')

async function filesUnder(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true })
  return entries.filter((entry) => entry.isFile()).map((entry) => join(entry.parentPath, entry.name))
}

async function flatten(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const path = join(dir, entry.name)
    if (!entry.name.startsWith('__next.')) {
      await flatten(path)
      continue
    }
    for (const file of await filesUnder(path)) {
      const flatName = `${entry.name}.${relative(path, file).split(sep).join('.')}`
      await rename(file, join(dir, flatName))
    }
    await rm(path, { recursive: true })
  }
}

await flatten(outDir)
