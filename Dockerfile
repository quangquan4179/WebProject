FROM node:16-alpine3.13 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 

CMD [ "npm", "start" ]