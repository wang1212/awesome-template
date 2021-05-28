FROM node:latest

WORKDIR /usr/src/app

# npm proxy
# RUN npm config set registry ''

COPY package*.json ./

# RUN npm ci --only=production
RUN npm install

# source code
COPY . .

# see .env file
EXPOSE 3000
CMD [ "node", "index.js" ]