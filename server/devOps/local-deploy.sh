#!/usr/bin/env bash
echo "\033[93m============================================================================"
echo "\033[34m [1/4] - Create TarBall"
echo "\033[93m============================================================================"
echo "\033[39m"
tar -czf build.tar ./dist ./node_modules
echo "\033[93m============================================================================"
echo "\033[34m [2/4] - Copy TarBall to remote machine"
echo "\033[93m============================================================================"
echo "\033[39m"
scp -r ./build.tar aviad@52.174.53.118:/home/aviad/eibo-server-build/build.tar
echo "\033[93m============================================================================"
echo "\033[34m [3/4] - Extract TarBall on remote machine"
echo "\033[93m============================================================================"
echo "\033[39m"
ssh aviad@52.174.53.118 /home/aviad/eibo-server-build/remote-deploy.sh
echo "\033[93m============================================================================"
echo "\033[34m [4/4] - Remove local TarBall"
echo "\033[93m============================================================================"
echo "\033[39m"
rm build.tar
echo "\033[96m======================= Done! ============================"
echo "\033[39m"
