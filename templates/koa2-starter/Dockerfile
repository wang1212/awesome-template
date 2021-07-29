# see docs: https://docs.docker.com/engine/reference/builder/

FROM node:build-1.0.0 AS builder

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci --production --registry=https://registry.npm.taobao.org/ && npm cache clean --force

RUN node-prune

# ------------------------------------------
FROM node:base-1.0.0

ENV NODE_ENV=production
ENV BASE_URL=/api
ENV PORT=8080
EXPOSE 8080

WORKDIR /home/node/app

RUN mkdir -p /home/node/app/logs
RUN chmod 777 /home/node/app/logs

COPY --from=builder /home/node/app/node_modules ./node_modules

COPY . .

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd
CMD [ "node", "index.js" ]