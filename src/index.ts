import * as fs from 'fs'
import * as path from 'path'
import unified from 'unified'
import markdown from 'remark-parse'
import breaks from 'remark-breaks'
import { Node } from 'unist'

const handler = (file: string) => {
  const ast = parser(file)
  compiler(ast)
}

const parser = (file: string): Node => {
  const filePath = path.resolve(file)
  const content = fs.readFileSync(filePath, 'utf-8')
  const processor = unified()
    .use(markdown, {})
    .use(breaks)
  return processor.parse(content)
}

const compiler = (ast: Node) => {
  console.log(ast.children[0].children)

}

const node2bg = (child: any) => {
  if(child.type === 'heading') {}
  if(child.type === 'paragraph') {}
  if(child.type === 'blockquote') {}
  if(child.type === 'table') {}
  if(child.type === 'code') {}
  if(child.type === 'inlineCode') {}
  if(child.type === 'emphasis') {}
  if(child.type === 'strong') {}
  if(child.type === 'delete') {}
  if(child.type === 'break') {}
  if(child.type === 'link') {}
  if(child.type === 'image') {}
  if(child.type === 'list') {}
}

handler('test/test.md')