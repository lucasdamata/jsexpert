import { writeFile, readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export const save = async (data) => {
  // nao tem __filename, __dirname
  // como obter o __filename: const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const filePath = path.resolve(__dirname,'..', 'database.json')

  const currentData = JSON.parse((await readFile(filePath)))
  currentData.push(data)

  await writeFile(filePath, JSON.stringify(currentData))
}