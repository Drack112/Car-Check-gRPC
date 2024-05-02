FROM node:20

WORKDIR /home/car-service/app

COPY ./microservices/car-service/package.json  .

COPY ./proto /home/proto

RUN yarn install

COPY ./microservices/car-service/ .

RUN yarn build

COPY ./proto/*.proto ./dist/proto/

EXPOSE 4507

CMD ["yarn", "start:prod"]