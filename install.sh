#! /bin/bash

cd ./server

sudo apt update
sudo apt upgrade -y
sudo apt install -y docker.io

# Using Ubuntu nodejs install
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

npm install nodemon

npm install
npm run client-install
sudo groupadd docker
sudo gpasswd -a $USER docker
sudo docker run -d -p 27017:27017 --name mdb mongo
