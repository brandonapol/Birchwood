#!/bin/bash

# Install blog
echo "Installing blog..."
helm install "birchwood-blog" -n "blog"

# Install CMS
echo "Installing CMS..."
helm install birchwood-cms -n cms "$REPO"/birchwood-k8s/cluster-nodes/bw-cms

# Install server
echo "Installing server..."
helm install "birchwood-server" -n "server"

# Install MongoDB
echo "Installing MongDB..."
helm repo add bitnami https://charts.bitnami.com/bitnami
helm dependency build $REPO/birchwood-k8s/cluster-nodes/mongo
helm install mongo -n shared $REPO/birchwood-k8s/cluster-nodes/mongo -f $REPO/birchwood-k8s/cluster-nodes/mongo/values.yaml
helm install my-mongodb bitnami/mongodb --version 14.4.2