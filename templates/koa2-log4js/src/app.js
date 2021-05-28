/**
 * server
 */
import Koa from 'koa'
import log4js from 'koa-log4'
import getLogger from './utils/log4js'
import chalk from 'chalk'
import cors from '@koa/cors'
import rootRouter from './routers'

const app = new Koa()

// * logs
if (process.env.NODE_ENV === 'development') {
	app.use(getLogger())
} else {
	app.use(getLogger('access'))
}

// * cors
app.use(cors())

app.use(async (ctx, next) => {
	if (ctx.request.url === '/') {
		ctx.body = '<h1>Hello World!</h1>'
	}

	await next()
})

// routers
rootRouter.prefix(process.env.BASENAME) // see .env file
app.use(rootRouter.routes()).use(rootRouter.allowedMethods())

/**
 * error handle
 */
app.on('error', (error, ctx) => {
	if (process.env.NODE_ENV === 'development') {
		log4js.getLogger().error(error.message, ctx.request)
	} else {
		log4js.getLogger('error').error(error, ctx.request)
	}
})

// start
app.listen(process.env.PORT, (error) => {
	if (error) {
		if (process.env.NODE_ENV === 'development') {
			log4js.getLogger().error(error.message, ctx.request)
		} else {
			log4js.getLogger('error').error(error, ctx.request)
		}

		process.exit()
	}

	console.log(chalk.cyan('server running on http://localhost:' + process.env.PORT + ' ...'))
})
