import { compiler } from './compiler'

const traversal = (node, options = {}) => {
  if (compiler[node.type] === undefined) {
    return ''
  }
  if (options !== undefined) {
    return compiler[node.type](node, options)
  }
  return compiler[node.type](node)
}

export { traversal }
