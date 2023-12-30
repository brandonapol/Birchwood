#!/bin/bash

minikube start --cpus=4 --memory=3072 --disk-size=20g

export REPO="/Users/brandonapol/Documents/code/Birchwood/"
cd "$REPO" || exit

kubectl apply -f $REPO/birchwood-k8s/namespaces/

./build.sh 
./install.sh 
