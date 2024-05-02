#!/bin/bash

yarn build

mkdir ./dist/proto

cp ../../proto/*.proto ./dist/proto

yarn start:dev
