#!/usr/bin/env node
'use strict'

const { exec, spawn } = require('child_process')
const webpackWatch = spawn('npm', ['run', 'build:watch'])

exec('printenv', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    process.exit(1)
  }

  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})

exec('nginx', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    process.exit(1)
  }

  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})

webpackWatch.stdout.on('data', data => {
  console.log(`stdout: ${data}`)
})

webpackWatch.stderr.on('data', data => {
  console.log(`stderr: ${data}`)
})

webpackWatch.on('close', code => {
  console.log(`child process exited with code ${code}`)
})
