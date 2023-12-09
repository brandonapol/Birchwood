#!/bin/bash

minikube start --driver=podman --cpus=4 --memory=3072 --disk-size=20g

export REPO="/Users/brandonapol/Documents/code/Birchwood/"
cd $REPO

kubectl apply -f $REPO/birchwood-k8s/namespaces/

# Install blog


# Install CMS

# Install server

podman build -t "birchwood-server" -f "$REPO/birchwood-server/Dockerfile"
helm install "birchwood-server" -n "server"

# Install MongoDB
# helm repo add bitnami https://charts.bitnami.com/bitnami
# helm dependency build $REPO/birchwood-k8s/cluster-nodes/mongo
# helm install mongo -n mongo $REPO/birchwood-k8s/cluster-nodes/mongo -f $REPO/birchwood-k8s/cluster-nodes/mongo/values.yaml
# helm install my-mongodb bitnami/mongodb --version 14.4.2