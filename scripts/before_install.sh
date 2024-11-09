#!/bin/bash

# Ensure the directory exists
mkdir -p /home/ec2-user/MileStone3

# Navigate to the directory
cd /home/ec2-user/MileStone3

# Check if the directory is empty, only clone if it is
if [ ! -d ".git" ]; then
  # Clone the repository (replace with your actual repo URL)
  git clone https://github.com/n8shaw/MileStone3.git .
else
  echo "Repository already cloned. Skipping git clone."
fi

# Checkout the specific branch (replace with your branch name)
git checkout nate

# Install Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 16
nvm use 16

# Install dependencies
npm install
