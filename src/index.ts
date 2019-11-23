import * as fs from 'fs'
import * as path from 'path'
import unified from 'unified'
import markdown from 'remark-parse'
import breaks from 'remark-breaks'

import { traversal } from './traversal'

const readFile = (file: string): string => {
  const filePath = path.resolve(file)
  return fs.readFileSync(filePath, 'utf-8')
}

const parser = (content: string): any => {
  const processor = unified()
    .use(markdown, {})
    .use(breaks)
  return processor.parse(content)
}

/**
 * Convert Markdown document to Backlog format
 * @param {string} mdData file path or Markdown content
 * @param {boolean} isFileName whether mdData is file name or not
 */
const md2bg = (mdData: string, isFileName: boolean) => {
  let content: string
  if (isFileName) {
    content = readFile(mdData)
  } else {
    content = mdData
  }
  const ast = parser(content)
  return ast.children.map(item => traversal(item)).join('\n')
}

export { md2bg }
