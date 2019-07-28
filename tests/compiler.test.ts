import { compiler } from '../src/compiler'

const textNode = {type: 'text', value: 'Alpha bravo charlie.'}
const heading1Node = {
  type: 'heading',
  depth: 1,
  children: [{type: 'text', value: 'Alpha'}]
}
const heading2Node = {
  type: 'heading',
  depth: 2,
  children: [{type: 'text', value: 'Alpha'}]
}

test('text', () => {
  expect(compiler['text'](textNode)).toBe('Alpha bravo charlie.')
})

test('heading1', () => {
  expect(compiler['heading'](heading1Node)).toBe('* Alpha')
})
test('heading2', () => {
  expect(compiler['heading'](heading2Node)).toBe('** Alpha')
})