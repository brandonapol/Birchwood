#!/bin/zsh

export REPO=~/Documents/code/Birchwood

osascript -e 'tell app "Terminal"
    do script "cd '"$REPO/birchwood-server"' && echo Starting server && npm run start"
end tell'
sleep 2
# osascript -e 'tell app "Terminal"
#     do script "cd '"$REPO/birchwood-blog"' && echo Starting blog && npm run start"
# end tell'
