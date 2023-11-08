# Lambda container

### Initialize a node project:
npm init -y

### Deploy the Image:

#### login
aws configure

#### create an ECR repo: 
aws ecr create-repository --repository-name ecr-repo --image-scanning-configuration scanOnPush=true

* export repo uri as an Env var:

export $REPO_URI= the uri of your repo

#### Login Docker to ECR (important step)

aws ecr get-login-password | docker login --username AWS --password-stdin $REPO_URI

#### build the image
docker build -t lambda-nodejs:1
or
docker image build lambda-nodejs:1
#### tag the image 
* crucial step
command to tag the image with $REPO_URI:0.0.1 is a crucial step in preparing the Docker image for storage and identification within Amazon Elastic Container Registry (ECR).

docker image tag lambda-nodejs:1 $REPO_URI:1
#### push the image

docker image push $REPO_URI:1
