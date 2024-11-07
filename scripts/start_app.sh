#!/bin/bash
# Start your Deno application
cd /home/ec2-user/deno-app
/home/ec2-user/.deno/bin/deno run --allow-net --allow-env app.ts > /dev/null 2>&1 &
