#! /bin/bash

cd ./server

sudo apt update
npm install
docker run -d -p 27107:27107 --name  mongoDB mongo
