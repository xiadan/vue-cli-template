#!/bin/sh
rm -rf node_modules
rm package-lock.json
rm yarn.lock
npm i
npm run serve
