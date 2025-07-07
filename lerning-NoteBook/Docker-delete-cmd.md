# Docker remove and delete commands images

- **docker rmi `image_name`**: Remove a Docker image by its name.
- **docker rmi `image_id`**: Remove a Docker image by its ID.
- **docker rmi `image_name`:`tag`**: Remove a Docker image by its name and tag.
- **docker rmi `image_name`:`tag` --force**: Forcefully remove a Docker image by its name and tag, even if it is being used by a running container.
- **docker rmi `image_name`:`tag` --no-prune**: Remove a Docker image by its name and tag without pruning the associated layers.
- **docker rmi `image_name`:`tag` --all**: Remove all Docker images with the specified name and tag, including dangling images.
- **docker rmi `image_name`:`tag` --filter `filter_condition`**: Remove Docker images that match a specific filter condition, such as `dangling=true` to remove dangling images.
- **docker rmi `image_name`:`tag` --quiet**: Remove a Docker image by its name and tag, returning only the image ID of the removed image.
- **docker rmi `image_name`:`tag` --no-trunc**: Remove a Docker image by its name and tag without truncating the output, providing the full image ID.

## Docker remove and delete commands for containers

- **docker rm `container_id`**: Remove a Docker container by its ID.
- **docker rm `container_name`**: Remove a Docker container by its name.
- **docker rm `container_id` --force**: Forcefully remove a Docker container by its ID, even if it is running.
- **docker rm `container_id` --volumes**: Remove a Docker container by its ID and also remove its associated volumes.
- **docker rm `container_id` --link**: Remove a Docker container by its ID and also remove its associated links.
- **docker rm `container_id` --all**: Remove all Docker containers, including stopped containers.
- **docker rm `container_id` --filter `filter_condition`**: Remove Docker containers that match a specific filter condition, such as `status=exited` to remove exited containers.
- **docker rm `container_id` --quiet**: Remove a Docker container by its ID, returning only the container ID of the removed container.


## What --rm flag does in docker run command ?

- **docker run --rm `image_name`**: The `--rm` flag automatically removes the container once it stops running. This is useful for temporary containers that you don't need to keep after they finish executing. It helps in cleaning up resources without needing to manually remove the container later.