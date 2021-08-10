import fsp from 'fs/promises'
import {parse, Template} from '.'
import {print} from './print'

export async function generateChart(name: string, templates: Record<string, Template>, data: Record<string, any>) {
  await fsp.mkdir(`tmp/charts/${name}/templates`, {recursive: true})
  for (const key of Object.keys(templates)) {
    await fsp.writeFile(`tmp/charts/${name}/templates/${key}.yaml`, print(parse(templates[key]), data))
  }
}
