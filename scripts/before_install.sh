#!/bin/bash

# Make sure we're in the correct directory
cd /home/ec2-user/MileStone3

# Remove any existing node_modules (to ensure a fresh install)
rm -rf node_modules

# Install project dependencies
npm install

# Optional: Install pm2 to manage the app
npm install -g pm2
