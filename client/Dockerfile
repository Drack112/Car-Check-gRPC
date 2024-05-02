FROM node:20

WORKDIR /home/client/app

COPY ./client/package.json  .

COPY ./proto /home/proto

RUN yarn install

COPY ./client/ .

RUN yarn build

COPY ./proto/*.proto ./dist/proto/
COPY ./protp*.proto /home/client/app/proto

EXPOSE 6000

CMD ["yarn", "start:prod"]