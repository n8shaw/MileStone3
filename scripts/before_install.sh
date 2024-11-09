#!/bin/bash

# Make sure we're in the correct directory
cd /home/ec2-user/MileStone3

# Remove any existing node_modules (to ensure a fresh install)
sudo rm -rf /home/ec2-user/MileStone3/package-lock.json
sudo rm -rf /home/ec2-user/MileStone3/*


# Install project dependencies
sudo npm install

# Optional: Install pm2 to manage the app
sudo npm install -g pm2
