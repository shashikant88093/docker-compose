# Docker Topics Overview

This document outlines the key Docker concepts and tools you need to understand in order to efficiently build, manage, and deploy containerized applications.

---

## 1. Docker Images

- Docker images serve as the blueprint for containers.
- Composed of multiple layers, built using a Dockerfile.
- Best practices include using minimal base images and caching layers effectively.

---

## 2. Docker Containers

- Containers are runnable instances of Docker images.
- They are lightweight, portable, and isolated.
- Learn container lifecycle: create, start, stop, restart, and remove.

---

## 3. Docker Volumes

- Volumes are the preferred mechanism for persisting data in Docker.
- Managed by Docker and stored outside the container filesystem.
- Useful for sharing data between containers.

---

## 4. Docker Environment Variables

- Used to configure containers at runtime.
- Defined in Dockerfiles, `docker run` commands, or `.env` files.
- Useful for injecting secrets, ports, credentials, or any dynamic config.

---

## 5. Docker Bind Mounts

- Bind mounts allow you to mount files/directories from the host into the container.
- Useful during development to sync source code.
- Unlike volumes, bind mounts rely on host paths.

---

## 6. Docker Read-Only Volumes

- Enhance security by making volume mounts read-only.
- Prevents containers from modifying sensitive or configuration files.

---

## 7. Docker Daemon

- The Docker Daemon (`dockerd`) runs in the background and manages Docker objects.
- Responsible for building, running, and monitoring containers.
- Communicates via REST API and works in conjunction with the Docker CLI.

---

## 8. Docker CLI

- The Docker Command-Line Interface (`docker`) is used to interact with the Docker Daemon.
- Common commands include:
  - `docker build`
  - `docker run`
  - `docker ps`
  - `docker logs`
  - `docker exec`

---

## 9. Dockerfile

- A script with instructions to build Docker images.
- Common directives:
  - `FROM`, `RUN`, `COPY`, `ADD`, `CMD`, `ENTRYPOINT`, `EXPOSE`
- Focus on minimizing layers and keeping images efficient.

---

## 10. Docker Networks

- Docker provides various network drivers: `bridge`, `host`, `overlay`, `none`.
- Networks enable communication between containers.
- Custom networks can be created to isolate and connect groups of containers.

---

## 11. Docker Multi-Stage Builds (Module 5)

- Optimize image builds by using multiple stages in a Dockerfile.
- Separate build and runtime environments to reduce image size.
- Ideal for production-ready, secure, and minimal Docker images.

---

> **Tip:** Use `docker system prune` regularly to clean up unused containers, networks, volumes, and images to save disk space.
