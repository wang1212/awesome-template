# docker-deploy-nodejs

Use docker to deploy nodejs application.

## Usage

1. Build the base image for the **build phase**

```sh
docker build --file ./Dockerfile.build --no-cache --tag node:build-1.0.0 .
```

2. Build the basic image of the **production environment**

```sh
docker build --file ./Dockerfile.base --no-cache --tag node:base-1.0.0 .
```

3. Build the **final production environment** image

```sh
docker build --no-cache --tag node-app:1.0.0 .
```

4. Run the container locally

```sh
docker run -dp 8080:8080 node-app:1.0.0
```

## More

- Analyze the size of each layer of the built image

```sh
docker image history node:base-1.0.0
```
