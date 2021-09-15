# see docs: https://docs.docker.com/engine/reference/builder/

FROM node-alpine-build:1.0.0 AS builder

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci --production --registry=https://registry.npm.taobao.org/ && npm cache clean --force

RUN node-prune

# ------------------------------------------
FROM node-alpine-base:1.0.0

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY --from=builder /home/node/app/node_modules ./node_modules

COPY . .

ENV PORT=8080

EXPOSE 8080

RUN chown -R node:node /home/node/app/

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd
CMD [ "node", "index.js" ]