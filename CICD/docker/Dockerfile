# Docker for building
FROM node:10.21.0-alpine3.11 as builder

WORKDIR /app

ARG REACT_APP_SERVICE_URL

ADD package.json .
ADD yarn.lock .

RUN yarn

ADD public ./public
ADD src ./src

RUN yarn build

# Docker for running
FROM node:10.21.0-alpine3.11

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build

CMD serve -s build
