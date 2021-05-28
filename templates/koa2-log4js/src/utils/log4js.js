/**
 * App logs
 */
import log4js from 'koa-log4'
import path from 'path'

// config
log4js.configure({
	appenders: {
		access: {
			type: 'dateFile',
			filename: path.join(process.cwd(), 'logs/', 'access.log'),
			pattern: '-yyyy-MM-dd',
			alwaysIncludePattern: true,
			daysToKeep: 180,
			keepFileExt: true,
		},
		error: {
			type: 'dateFile',
			filename: path.join(process.cwd(), 'logs/', 'errors.log'),
			pattern: '-yyyy-MM-dd',
			alwaysIncludePattern: true,
			daysToKeep: 90,
			keepFileExt: true,
		},
		out: {
			type: 'console',
		},
	},
	categories: {
		default: { appenders: ['out'], level: 'debug' },
		access: { appenders: ['access'], level: 'info' },
		error: { appenders: ['error'], level: 'error' },
	},
})

/**
 * Get logger
 *
 * @param {'out' | 'access' | 'error'} type - one of ['out', 'access', 'error']
 * @returns
 */
export default function getLogger(type = 'out') {
	return log4js.koaLogger(log4js.getLogger(type))
}
