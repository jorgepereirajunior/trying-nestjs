FROM node:16.16.0-alpine3.16

RUN apk add bash

RUN npm install --location=global @nestjs/cli

USER node

WORKDIR /home/node/app/