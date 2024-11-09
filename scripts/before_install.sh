#!/bin/bash

# Ensure the directory exists and navigate there
mkdir -p /home/ec2-user/MileStone3
cd /home/ec2-user/MileStone3

# Clone the repository (replace with your actual repo URL)
git clone https://github.com/n8shaw/MileStone3.git .

# Checkout the 'development' branch
git checkout nate

# Install Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 16
nvm use 16

# Install dependencies
npm install

