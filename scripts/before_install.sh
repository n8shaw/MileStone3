#!/bin/bash

# Create the directory if it doesn't exist
mkdir -p /home/ec2-user/MileStone3
cd /home/ec2-user/MileStone3

# Install Node.js and npm if not already installed
if ! command -v npm &> /dev/null; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm install node
fi

# Install project dependencies
npm install
