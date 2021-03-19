FROM node:15.12.0-alpine3.13 AS NODE_15

COPY . /app/

WORKDIR /app/

FROM node:14.16.0-alpine3.13 AS NODE_14

COPY . /app/

WORKDIR /app/
