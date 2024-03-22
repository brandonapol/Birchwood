# Welcome to Birchwood

My name is Brandon. This is my dev playground and personal site. I largely use this application to 
explore and experiment with tooling and alternatives. For example, this application started out as 
React app, migrated to full stack, and now is a NextJS app with a CMS. I semi-regularly swap microservices 
out with different languages and frameworks as I want to learn them, and use this application as a 
Kubernetes environment that I can singularly control.

The goal of this application is primarily my own entertainment and growth, as well as showing off things I 
have learned in a way that I am allowed to share. Work code is great and can show off a lot, but I am not 
readily able to share code from paid work here. So this is me goofing off and showing off at the same time.

I also have mostly kept this a solo venture, so that I can say 'I made that.' 

Some technologies implemented here include NextJS because I wanted to explore the server-side part of the new JS 
frameworks, Istio and Helm for production, and a CMS with Vue frontend and Express (TypeScript) back end. Plan is 
to migrate the back end to Golang soon and then rewrite it again in C# shortly after. I might also try exploring 
data migrations for the database, as well as seeing what it would look like to do mirroring, backups, etc. Oh, and I'm 
going to rewrite the main blog and landing page in HTMX, because other than proof of concept, there's no reason to 
use a bloated megaframwoooooork like NextJS for this. It was educational and 'production grade!!!' but get real.

I'll probably deploy this for like a week as a cluster and then take it down and figure out how to deploy it on a 
home server.

### Running Birchwood

Easiest way is with Minikube. Be aware that this is a full prod application and k8s environment, so 
you probably don't want to run this on your iPhone. I have no idea what the required computer power is, 
so feel free to find out and let me know. There is an `install.sh` script in birchwood-k8s/scripts as well as 
requisite build and deploy scripts for Helm.

There's also a bash command that should start the apps up, but it's no longer maintained. Likewise, the 
docker-compose worked at one point, then I said there were more elegant solutions, and I didn't care anymore.