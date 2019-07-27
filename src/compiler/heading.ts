const headingCompiler = (yields) => {
  let header = '*'.repeat(yields.depth)
  yields.forEach(child => {
    header = header + child.value
  })
  header = header + '\n'
  return header
}

export default { headingCompiler }