# DPS_Project1

# Installing Promethues
Down below is the commands used for installing promethues operator in the Local Docker for Desktop Kubernetes Cluster

Download the helm for your OS from here: [Helm download](https://github.com/helm/helm/releases)

`Kubectl create ns monitoring`

`helm repo add stable https://charts.helm.sh/stable`

`helm install --namespace monitoring --name-template prometheus --set grafana.service.type=LoadBalancer --set grafana.service.port=3000 --set prometheus.service.type=LoadBalancer stable/prometheus-operator`