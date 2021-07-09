# see docs: https://docs.docker.com/engine/reference/builder/

FROM node:build-1.0.0 AS builder

ENV NODE_ENV=production

# # install dependencies
# RUN apk update && apk add --no-cache --virtual .build-deps curl \
# && curl -sf https://gobinaries.com/tj/node-prune | sh \
# && apk del .build-deps

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci --production --registry=https://registry.npm.taobao.org/ && npm cache clean --force

RUN node-prune

# ------------------------------------------
FROM node:base-1.0.0

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
# https://github.com/krallin/tini#using-tini
# Add Tini
# RUN apk add --no-cache tini
# ENTRYPOINT ["/sbin/tini", "--"]

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY --from=builder /home/node/app/node_modules ./node_modules

COPY . .

EXPOSE 8080
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd
CMD [ "node", "index.js" ]