import { compiler } from '../src/compiler'
import { tableNode, listNode } from './assets/node'

test('text', () => {
  const node = { type: 'text', value: 'Alpha bravo charlie.' }
  expect(compiler['text'](node)).toBe('Alpha bravo charlie.')
})

test('paragraph', () => {
  const node = { type: 'paragraph', children: [{ type: 'text', value: 'Alpha bravo charlie.' }] }
  expect(compiler['paragraph'](node)).toBe('Alpha bravo charlie.')
})

test.each([1, 2, 3, 4, 5, 6])('heading%i', (i: number) => {
  const node = {
    type: 'heading',
    depth: i,
    children: [{ type: 'text', value: 'Alpha' }],
  }
  expect(compiler['heading'](node)).toBe(`${'*'.repeat(i)} Alpha`)
})

test.each([['strong', "''"], ['emphasis', "'''"], ['delete', '%%']])('%s', (type, enclose) => {
  const node = { type, children: [{ type: 'text', value: 'alpha' }] }
  expect(compiler[type](node)).toBe(`${enclose}alpha${enclose}`)
})

test('blockquote', () => {
  const node = { type: 'blockquote', children: [{ type: 'text', value: 'alpha' }] }
  expect(compiler['blockquote'](node)).toBe('> alpha')
})

test('code', () => {
  const node = { type: 'code', lang: null, meta: null, value: 'foo()'}
  expect(compiler['code'](node)).toBe('{code}\nfoo()\n{/code}')
})

test('inlineCode', () => {
  const node = { type: 'inlineCode', value: 'foo()'}
  expect(compiler['inlineCode'](node)).toBe('{code}foo(){/code}')
})

test('link', () => {
  const node = { type: 'link', url: 'https://example.com', title: 'bravo', children: [{type: 'text', value: 'alpha'}]}
  expect(compiler['link'](node)).toBe('[[alpha:https://example.com]]')
})

test('table', () => {
  expect(compiler['table'](tableNode)).toBe('| foo | bar |h\n| baz | qux |')
})

test('list', () => {
  expect(compiler['list'](listNode, {})).toBe('+ [x] foo\n')
})
