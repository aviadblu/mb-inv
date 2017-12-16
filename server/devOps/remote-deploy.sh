#!/usr/bin/env bash
rm -rf /home/aviad/eibo-server-build/build/dist
rm -rf /home/aviad/eibo-server-build/build/node_modules
tar -xf /home/aviad/eibo-server-build/build.tar -C /home/aviad/eibo-server-build/build
rm /home/aviad/eibo-server-build/build.tar

#cd /home/aviad/eibo-server-build/build
#forever start --append --uid "eiboserver" dist/app.js
/home/aviad/eibo-server-build/build/node_modules/forever/bin/forever restart eiboserver

