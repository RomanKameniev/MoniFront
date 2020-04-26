FROM node:10.15.1-alpine

WORKDIR /app

COPY ./app /app/

RUN yarn

CMD ["yarn", "start"]
