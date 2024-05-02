FROM node:20

WORKDIR /home/notification-service/app

COPY ./microservices/notification-service/package.json  .

COPY ./proto /home/proto

RUN yarn install

COPY ./microservices/notification-service/ .

RUN yarn build

COPY ./proto/*.proto ./dist/proto/

EXPOSE 4504

CMD ["yarn", "start:prod"]