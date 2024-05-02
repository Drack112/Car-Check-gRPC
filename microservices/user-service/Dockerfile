FROM node:20

WORKDIR /home/user-service/app

COPY ./microservices/user-service/package.json  .

COPY ./proto /home/proto

RUN yarn install

COPY ./microservices/user-service/ .

RUN yarn build

COPY ./proto/*.proto ./dist/proto/

EXPOSE 4502

CMD ["yarn", "start:prod"]