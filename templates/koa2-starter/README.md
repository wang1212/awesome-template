# koa2-starter

Nodejs development environment based on koa2.

## Ready

Built-in components and recommended best practices.

### Project structure

In order to ensure scalability and low coupling (to adapt to the technical architecture of microservices), it is recommended to abstract the **business as components** for management instead of the traditional **MVC** model.

> [Structure your solution by components](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)

### Use `ECMAScript modules`

The project uses [ES Module](https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules) to write code, not [CommonJS](http://www.commonjs.org/).

### API version control

Version control of api service.

> https://restfulapi.net/versioning/

### Environment variable

Use the [dotenv](https://github.com/motdotla/dotenv) module to handle the environment variables of the **development** environment.

After pulling down the code from the Git repository, copy the _.env.example_ file and rename it to **.env**, and configure the _.env_ file according to the local environment.

_Warning: Please configure the environment variables of the **production** environment through other means instead of this module. [Check the reason](https://github.com/motdotla/dotenv#should-i-commit-my-env-file)_

_Tips: Most of the environment variables in the production environment can use **default values**, and the default values can be configured when using environment variables, such as `process.env.PORT || '8080'`._

### Code Lint

Install **eslint** and **prettier** plugins.

- VS Code Extension
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [eslint-disable-snippets](https://marketplace.visualstudio.com/items?itemName=drKnoxy.eslint-disable-snippets)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Built-in middleware

Out-of-the-box middleware.

#### Logger

Use the [log4js](https://github.com/dominhhai/koa-log4js) module to process logs uniformly.

The configuration file is _src/utils/log4j.js_.

The following configuration is made in the _src/app.js_ file:

```js
app.context.logger = getLogger();
```

So the logger can be referenced by `ctx.logger`.

If you can't access `ctx`, the following way is also possible:

```js
import { getLogger } from 'path/to/utils/log4j.js';

getLogger().info('test logs');
```

#### Security

Use the [helmet](https://github.com/venables/koa-helmet) module to enable security headers.

### Others

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Koa Resources](https://github.com/koajs/koa/wiki)

_Recommended koa middleware._

- [@koa/cors](https://github.com/koajs/cors)
- [koa-proxies](https://github.com/vagusX/koa-proxies)
- [koa-better-http-proxy](https://github.com/nsimmons/koa-better-http-proxy)
- [koa-helmet](https://github.com/venables/koa-helmet)
- [koa-ip](https://github.com/nswbmw/koa-ip)
- [koa-body](https://github.com/koajs/koa-body)
- [koa-bodyparser](https://github.com/koajs/bodyparser)
- [@koa/router](https://github.com/koajs/router)
- [koa-tree-router](https://github.com/steambap/koa-tree-router)
- [koa-joi-router](https://github.com/koajs/joi-router)
- [node-rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)
- [koa-send](https://github.com/koajs/send)
- [koa-static](https://github.com/koajs/static)
- [koa-favicon](https://github.com/koajs/favicon)
- [koa-compress](https://github.com/koajs/compress)
- [koa-etag](https://github.com/koajs/etag)
- [koa-conditional-get](https://github.com/koajs/conditional-get)
- [koa-session](https://github.com/koajs/session)
- [koa-csrf](https://github.com/koajs/csrf)
- [koa-logger](https://github.com/koajs/logger)
- [koa-log4](https://github.com/dominhhai/koa-log4js)
- [koa-response-time](https://github.com/koajs/response-time)
- [koa-useragent](https://github.com/rvboris/koa-useragent)

## Usage

- Local development

```sh
npm run dev
```

- Code Lint

```sh
npm run lint
```

- Local debug

The `dev` command in the _package.json_ file configures the following:

```sh
--inspect=0.0.0.0:9229
```

_This is the [default debugging scheme officially recommended by nodejs](https://nodejs.org/en/docs/guides/debugging-getting-started/)._

After the local service is started, access the api service in the Chrome browser, open DevTools and wait for the **Node.js logo button to appear in the upper left corner** and click to enter the debugging interface.

- Deploy

Adopt a containerized deployment plan and configure the _.dockerignore_ and _Dockerfile_ file appropriately.

> see [docker-deploy-nodejs](./docker-deploy-nodejs)

## Document

### API Document

Use [VS Code Extension: REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) to write api documents, which is also easy to test and write.

Example document _docs/api.http_ file.
