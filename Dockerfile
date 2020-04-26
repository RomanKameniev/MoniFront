FROM node:10.15.1-alpine

WORKDIR /app

COPY ./app /app/

RUN yarn install && yarn build && yarn global add serve

CMD ["serve", "-p", "80", "-s", "build"]

