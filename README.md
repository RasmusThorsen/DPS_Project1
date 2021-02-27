# DPS_Project1
This repository contains the solution made by group 8 for the first project in the course Distributed and Pervasive Systems at Aarhus University.

## Project structure
The repository contains two node.js projects and a simple web-page. 
The `/API` contains the API for this project, which can be started by running:

`cd API`

`npm install`

`npm start`

The same approach can be used to run the loadtest, which is located in the `/LoadTest`-folder. With the API-running one can simply open the `index.html` file in a browser, and start fetching fortune-cookies.

## Kubernetes
The Kubernetes deployment specification can be found in `Deployment.yaml` which contains both the Deployment and the corresponding Service. The cluster can be started by running

`kubectl apply -f Deployment.yaml`
## Installing Prometheus
Down below is the commands used for installing promethues operator in the Local Docker for Desktop Kubernetes Cluster

Download the helm for your OS from here: [Helm download](https://github.com/helm/helm/releases)

`Kubectl create ns monitoring`

`helm repo add stable https://charts.helm.sh/stable`

`helm install --namespace monitoring --name-template prometheus --set grafana.service.type=LoadBalancer --set grafana.service.port=3000 --set prometheus.service.type=LoadBalancer stable/prometheus-operator`