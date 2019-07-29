#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'
import { md2bg } from '../'

const main = () => {
  if (process.argv.length < 3) {
    console.log('need file path args')
    console.log('npx md2bg <file path>')
    return
  }
  const file = process.argv[2]
  try {
    fs.statSync(path.resolve(file))
  } catch {
    console.log(`no such a file: ${file}`)
    return
  }
  const res = md2bg(file)
  console.log(res)
}

main()