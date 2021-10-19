# see docs: https://docs.docker.com/engine/reference/builder/
# see file template: https://github.com/wang1212/awesome-template/blob/main/templates/docker-deploy-nodejs/Dockerfile

FROM node-alpine-build:1.0.0 AS builder-compile

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci --registry=https://registry.npm.taobao.org/ && npm cache clean --force

COPY . .

ENV NODE_ENV=production
RUN npm run build

# ------------------------------------------
FROM node-alpine-build:1.0.0 AS builder-install-depends

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci --production --registry=https://registry.npm.taobao.org/ && npm cache clean --force

RUN node-prune

# ------------------------------------------
FROM node-alpine-base:1.0.0

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY --from=builder-compile /home/node/app/dist ./dist
COPY --from=builder-install-depends /home/node/app/node_modules ./node_modules

COPY . .

ENV BASE_URL=/api
ENV PORT=8080

EXPOSE 8080

RUN chown -R node:node /home/node/app/

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd
CMD [ "node", "--experimental-specifier-resolution=node", "dist/index.js" ]