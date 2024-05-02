#!/bin/bash

yarn build

mkdir -p ./dist/proto

cp ../../proto/*.proto ./dist/proto

yarn start:dev
