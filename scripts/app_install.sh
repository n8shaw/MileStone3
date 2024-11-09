#!/bin/bash
chmod +x /home/ec2-user/MileStone3/scripts/*.sh
cd /home/ec2-user/MileStone3
export NVM_DIR="/home/ec2-user/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
npm install
