#!/bin/bash

# Ensure the directory exists and navigate there
mkdir -p /home/ec2-user/MileStone3
cd /home/ec2-user/MileStone3

# If the directory is not empty, remove existing files
rm -rf *

# Clone the repository (replace with your actual repo URL)
git clone https://github.com/n8shaw/MileStone3.git .

# Install Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 16
nvm use 16

# Install dependencies
npm install

