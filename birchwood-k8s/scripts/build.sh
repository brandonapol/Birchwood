#!/bin/bash

cd "$REPO" || exit
echo "Building blog"
docker build -t "birchwood-blog" -f "$REPO/birchwood-blog/Dockerfile" .
echo "Building server"
docker build -t "birchwood-server" -f "$REPO/birchwood-server/Dockerfile" .
echo "Building CMS"