#!/bin/bash

# Create the directory if it doesn't exist
mkdir -p /home/ec2-user/MileStone3
cd /home/ec2-user/MileStone3

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install a compatible version of Node.js (v16 is known to be more compatible with older GLIBC versions)
nvm install 16

# Use Node.js v16
nvm use 16

# Install project dependencies
npm install
