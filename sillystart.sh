#!/bin/zsh

export REPO=~/Documents/code/Birchwood

osascript -e 'tell app "Terminal"
    do script "cd '"$REPO"' && echo Starting db && podman run --rm --name mongo6-birchwood -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -e MONGO_INITDB_DATABASE=test -v mongo-data:/data/db birchwood-1"
end tell'
sleep 2
osascript -e 'tell app "Terminal"
    do script "cd '"$REPO/birchwood-server"' && echo Starting server && npm run start"
end tell'
sleep 2
# osascript -e 'tell app "Terminal"
#     do script "cd '"$REPO/birchwood-blog"' && echo Starting blog && npm run start"
# end tell'

echo "bingbong"
