FROM node:20

WORKDIR /home/wallet-service/app

COPY ./microservices/wallet-service/package.json  .

COPY ./proto /home/proto

RUN yarn install

COPY ./microservices/wallet-service/ .

RUN yarn build

COPY ./proto/*.proto ./dist/proto/

EXPOSE 4500

CMD ["yarn", "start:prod"]