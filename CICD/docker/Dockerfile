FROM node:10.21.0-alpine3.11

WORKDIR /app

RUN npm install -g serve

ARG REACT_APP_SERVICE_URL

ADD package.json .
ADD yarn.lock .

RUN yarn

ADD public ./public
ADD src ./src

RUN yarn build

CMD serve -s build
