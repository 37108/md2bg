import { traversal } from './traversal'

const compiler = {
  text: (yields): string => yields.value,
  paragraph: (yields): string => {
    return yields.children.map(item => traversal(item)).join('')
  },
  heading: (yields): string => {
    return `${'*'.repeat(yields.depth)} ${yields.children.map(item => traversal(item)).join('')}`
  },
  strong: (yields): string => {
    return `''${yields.children.map(item => traversal(item)).join('')}''`
  },
  emphasis: (yields): string => {
    return `'''${yields.children.map(item => traversal(item)).join('')}'''`
  },
  delete: (yields): string => {
    return `%%${yields.children.map(item => traversal(item)).join('')}%%`
  },
  blockquote: (yields): string => {
    return `> ${yields.children.map(item => traversal(item)).join('')}`
  },
  code: (yields): string => {
    return `{code}\n${yields.value}\n{/code}`
  },
  inlineCode: (yields): string => {
    return `{code}${yields.value}{/code}`
  },
  break: (yields): string => {
    return '&br;'
  },
  link: (yields): string => {
    const url = yields.url
    const title = yields.children.map(item => traversal(item)).join('')
    return `[[${title}:${url}]]`
  },
  table: (yields): string => {
    const header = `${traversal(yields.children[0])}h\n`
    const body = yields.children
      .slice(1)
      .map(item => traversal(item))
      .join('\n')
    return header + body
  },
  tableRow: (yields): string => {
    const items = yields.children.map(item => traversal(item)).join(' | ')
    return '| ' + items + ' |'
  },
  tableCell: (yields): string => {
    return yields.children.map(item => traversal(item)).join('')
  },
  list: (yields, options): string => {
    let nest = 0
    if ('nest' in options) {
      nest = options.nest
    }
    return yields.children
      .map(item => traversal(item, { nest: nest + 1, ordered: yields.ordered }))
      .join('')
  },
  listItem: (yields, options): string => {
    const index = options.ordered ? '+' : '-'
    return yields.children
      .map(item => {
        if (item.type !== 'list' && yields.checked === null) {
          return `${index.repeat(options.nest)} ${item.children.map(i => traversal(i)).join('')}\n`
        }
        if (item.type !== 'list' && yields.checked) {
          return `${index.repeat(options.nest)} [x] ${item.children
            .map(i => traversal(i))
            .join('')}\n`
        }
        if (item.type !== 'list' && !yields.checked) {
          return `${index.repeat(options.nest)} [ ] ${item.children
            .map(i => traversal(i))
            .join('')}\n`
        }
        return traversal(item, options)
      })
      .join('')
  },
}

export { compiler }
