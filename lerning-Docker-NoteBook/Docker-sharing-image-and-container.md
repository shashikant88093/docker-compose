# Docker Image Sharing and Container Management

## Docker Image Sharing

Docker provides a way to share images and containers through Docker Hub or private registries.  
Docker Hub is a public registry that allows users to share images with the community.  
Users can push their images to Docker Hub and pull images from it.

To push an image to Docker Hub, you need to log in to your Docker Hub account using the command:

## docker login
```bash
docker login
```
After logging in, you can tag your image with your Docker Hub username and push it:

```bash
docker tag <image_name> <your_dockerhub_username>/<image_name>
docker push <your_dockerhub_username>/<image_name>
```
To pull an image from Docker Hub, you can use the command:

```bash 
docker pull <your_dockerhub_username>/<image_name>
```
