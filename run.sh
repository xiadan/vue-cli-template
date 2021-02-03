#!/bin/sh
echo "Reset file!"
rm -rf node_modules
rm package-lock.json
rm yarn.lock
echo "Reseted & Start to Install"
node -v
npm -v
npm install
echo "Start to serve"
npm run serve
