#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'
import { md2bg } from '../'
import { Command } from 'commander'

const program = new Command()

const readFromStdin = () => {
  const content = fs.readFileSync('/dev/stdin', 'utf8')
  const res = md2bg(content, false)
  console.log(res)
  return
}

const main = () => {
  program
    .option('-s, --stdin', 'read standard input')
    .parse(process.argv)
  if (program.stdin) {
    readFromStdin()
    return
  }
  if (program.args.length == 0) {
    console.log('need file path args')
    console.log('npx md2bg <file path>')
    return
  }
  const file = program.args[0]
  try {
    fs.statSync(path.resolve(file))
  } catch {
    console.log(`no such a file: ${file}`)
    return
  }
  const res = md2bg(file, true)
  console.log(res)
}

main()