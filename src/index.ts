import * as fs from 'fs'
import * as path from 'path'
import unified from 'unified'
import markdown from 'remark-parse'
import breaks from 'remark-breaks'

import { traversal } from './traversal'

const parser = (file: string): any => {
  const filePath = path.resolve(file)
  const content = fs.readFileSync(filePath, 'utf-8')
  const processor = unified()
    .use(markdown, {})
    .use(breaks)
  return processor.parse(content)
}

const handler = (file: string) => {
  const ast = parser(file)
  return ast.children.map(item => traversal(item)).join('\n')
}

export { handler }
