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
  const res = ast.children.map(item => {
    return traversal(item)
  })
  console.log(res)
}

handler('test/test.md')
