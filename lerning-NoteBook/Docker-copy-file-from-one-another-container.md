# CMD to copy file form one container to another container
## Copying Files Between Docker Containers

To copy a file from one container to another, use the following steps:

1. **Copy the file from the source container to the host:**

    ```sh
    docker cp <container_id_1>:/path/to/file /tmp/file
    ```

2. **Copy the file from the host to the destination container:**

    ```sh
    docker cp /tmp/file <container_id_2>:/path/to/destination
    ```

### Example

Copy `config.json` from `container1` to `container2`:

```sh
docker cp container1:/app/config.json /tmp/config.json
docker cp /tmp/config.json container2:/app/config.json
```

### Additional Examples

Copy a local folder `test/` to a container:

```sh
docker cp test/ feb3fd39e6cf:/test
```

Copy a folder `/test` from a container to the local machine:

```sh
docker cp feb3fd39e6cf:/test test
```