#!/usr/bin/env node
import fs from 'node:fs'
import { render } from './index.js'

const resume = JSON.parse(fs.readFileSync(process.stdin.fd, 'utf-8'))
const html = render(resume)

process.stdout.write(html)
