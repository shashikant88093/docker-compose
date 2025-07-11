
# Docker Commands to Run the Multi-Container App with Data Persistence

## Build the Images

```sh
docker build -t myapp-web ./web
docker build -t myapp-db ./db
```

## Create a Network

```sh
docker network create myapp-network
```

## Start the Containers with Data Persistence

```sh
docker run -d --name myapp-db --network myapp-network -v myapp-db-data:/var/lib/mysql myapp-db
docker run -d --name myapp-web --network myapp-network -p 80:80 myapp-web
```

- The `-v myapp-db-data:/var/lib/mysql` flag ensures data persistence for the database container.
- The `--network myapp-network` flag connects both containers to the same network.

## Stop and Remove the Containers

```sh
docker stop myapp-web myapp-db
docker rm myapp-web myapp-db
```

## Remove the Volume (if needed)

```sh
docker volume rm myapp-db-data
```

## Rebuild and Restart After Code Changes

1. Stop and remove the containers as shown above.
2. Rebuild the images:

    ```sh
    docker build -t myapp-web ./web
    docker build -t myapp-db ./db
    ```

3. Start the containers again as shown above.

## View Container Logs

```sh
docker logs -f myapp-web
docker logs -f myapp-db
```

## Run a Specific Service

- To run only the web service:

    ```sh
    docker run -d --name myapp-web --network myapp-network -p 80:80 myapp-web
    ```

- To run only the database service:

    ```sh
    docker run -d --name myapp-db --network myapp-network -v myapp-db-data:/var/lib/mysql myapp-db
    ```
