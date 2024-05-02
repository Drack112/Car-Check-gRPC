FROM node:20

WORKDIR /home/authentication-service/app

COPY ./microservices/authentication-service/package.json  .

COPY ./proto /home/proto

RUN yarn install

COPY ./microservices/authentication-service/ .

RUN yarn build

COPY ./proto/*.proto ./dist/proto/

EXPOSE 5302

CMD ["yarn", "start:prod"]