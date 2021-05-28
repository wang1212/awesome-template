/**
 * root router
 */
import Router from '@koa/router'
import Koa from 'koa'

const rootRouter = new Router()

/**
 * Respond
 *
 * @param {Koa.Context} ctx
 * @returns {Promise}
 */
async function respond(ctx) {
	return Promise.resolve().then(async () => {
		const n = Math.floor(Math.random() * 10)

		switch (n) {
			/* 3xx */
			case 0: {
				ctx.response.redirect('https://www.google.com/')

				break
			}

			case 1: {
				ctx.response.status = 304

				break
			}

			/* 4xx */
			case 2: {
				ctx.response.status = 401

				break
			}

			case 3: {
				ctx.response.status = 403

				break
			}

			case 4: {
				ctx.response.status = 404

				break
			}

			/* 5xx */
			case 5: {
				throw new Error('Error!')

				break
			}

			/* timeout */
			case 6: {
				await new Promise((resolve) => {
					setTimeout(() => {
						resolve()
					}, 1000 * 60)
				})

				ctx.response.body = {
					code: 1001,
					version: 'v1',
					message: 'timeout',
				}

				break
			}

			default: {
				ctx.response.body = {
					code: 1000,
					version: 'v1',
				}
			}
		}
	})
}

rootRouter.get('/', async (ctx, next) => {
	await respond(ctx)
	await next()
})

rootRouter.post('/', async (ctx, next) => {
	await respond(ctx)
	await next()
})

rootRouter.put('/', async (ctx, next) => {
	await respond(ctx)
	await next()
})

rootRouter.del('/', async (ctx, next) => {
	await respond(ctx)
	await next()
})

export default rootRouter
