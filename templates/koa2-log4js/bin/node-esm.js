#!/usr/bin/env node

/**
 * Node - run es module
 */
'use strict'

require = require('esm')(module)

const args = process.argv.slice(2)
const path = require('path')

if (!args.length) {
	console.error('[ERROR] Need to specify es module file path to run.')
	process.exit()
}

require(path.join('..', args[0].trim()))
