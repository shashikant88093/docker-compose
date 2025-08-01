# Docker Build Command

- **docker build .** use for build docker image in current directory

  - **docker build -t `image_name` .** use for build docker image with name
  - **docker build -t `image_name`:`tag` .** use for build docker image with name and tag
  - **docker build -t `image_name`:`tag` -f `Dockerfile_path` .** use for build docker image with name, tag and specific Dockerfile path
  - **docker build -t `image_name`:`tag` --build-arg `arg_name`=`arg_value` .** use for build docker image with name, tag and build arguments
  - **docker build -t `image_name`:`tag` --no-cache .** use for build docker image with name, tag and without cache
  - **docker build -t `image_name`:`tag` --pull .** use for build docker image with name, tag and pull latest base image
  - **docker build -t `image_name`:`tag` --platform `platform` .** use for build docker image with name, tag and specific platform (e.g., linux/amd64, linux/arm64)
  - **docker run -p `host_port`:`container_port` -d `image_name`** use for run docker image with port mapping and in detached mode 
  - **docker stop `container_id`** use for stop running container

## Difference between docker start and docker run

- **docker run**: Creates a new container from an image and starts it. It can also accept various options like port mapping, environment variables, etc.
- **docker start**: Starts an existing stopped container. It does not create a new container; it simply resumes a previously created container that is in a stopped state.
- **docker run** is used when you want to create a new instance of a container, while **docker start** is used to restart an existing container that has been stopped.


