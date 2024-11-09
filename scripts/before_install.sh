#!/bin/bash

# Make sure we're in the correct directory
cd /home/ec2-user/MileStone3

# Remove the package-lock.json file if it exists
if [ -f "package-lock.json" ]; then
  sudo rm -f package-lock.json
fi

# Remove the existing node_modules directory
if [ -d "node_modules" ]; then
  sudo rm -rf node_modules
fi

# Optional: Remove other files or directories as needed
# sudo rm -rf some_other_file_or_dir

# Install project dependencies
sudo npm install

# Optional: Install pm2 to manage the app
sudo npm install -g pm2
