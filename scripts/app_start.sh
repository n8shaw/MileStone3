#!/bin/bash
cd /home/ec2-user/MileStone3
export NVM_DIR="/home/ec2-user/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
pm2 start app.js
