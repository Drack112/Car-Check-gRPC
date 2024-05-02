FROM node:20

WORKDIR /home/order-service/app

COPY ./microservices/order-service/package.json  .

COPY ./proto /home/proto

RUN yarn install

COPY ./microservices/order-service/ .

RUN yarn build

COPY ./proto/*.proto ./dist/proto/

EXPOSE 4503

CMD ["yarn", "start:prod"]