#! /bin/bash

cd ./server

sudo apt update
sudo apt upgrade -y
sudo apt install -y docker.io

# Using Ubuntu nodejs install
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt install nodemon

npm install
docker run -d -p 27107:27107 --name  mongoDB mongo
