const paragraph2bg = (child) => {
  const children = child.children
  let data = ''
  children.forEach(child => {
    if (child.type === 'string') {
      data = data + child.value
    }
    if (child.type === 'break') {
      data = data + '\n'
    }
    if (child.type === 'inlineCode') {
      data = data + '`' + child.value + '`'
    }
  })
  return data
}

const heading2bg = (child) => {}