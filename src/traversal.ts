import { compiler } from './compiler'

const traversal = node => {
  if (compiler[node.type] === undefined) {
    return ''
  }
  return compiler[node.type](node)
}

export { traversal }
