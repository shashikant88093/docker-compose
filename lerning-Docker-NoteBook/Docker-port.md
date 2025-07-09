# How use ENV in Docker ?
# =========================

# Using environment variables in Docker allows you to configure your containers dynamically at runtime. This is particularly useful for setting configuration options, secrets, or any other data that may change between deployments or environments.

# ## Setting Environment Variables in Docker
# You can set environment variables in Docker in several ways:
# 1. **Using the `-e` flag**: When running a container, you can use the `-e` flag to set environment variables. For example:
```bash
docker run -e MY_ENV_VAR=value my_image
```

# 2. **Using a `.env` file**: You can create a `.env` file in the same directory as your Docker Compose file and define your environment variables there. Docker Compose will automatically read this file and set the variables for your services.
# Example `.env` file:
```env
MY_ENV_VAR=value
ANOTHER_VAR=another_value
```
# 3. **Using the `environment` section in a Docker Compose file**: You can define environment variables directly in your Docker Compose file under the `environment` section for each service.
```yaml
version: '3.8'
services:
  app:
    image: my_image
    environment:
      MY_ENV_VAR: value
      ANOTHER_VAR: another_value
```
# 4. **Using the `--env-file` option**: When running a container, you can specify an environment file using the `--env-file` option.
```bash

docker run --env-file .env my_image
```
# 5. **Using the `ARG` instruction in a Dockerfile**: You can define build-time variables using the `ARG` instruction in your Dockerfile. These variables can be passed at build time and used to set environment variables.
```dockerfile
FROM node:20
ARG MY_BUILD_ARG
ENV MY_ENV_VAR=$MY_BUILD_ARG
WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "server.js"]
```
# ## Accessing Environment Variables in Your Application
# In your application code, you can access environment variables using the appropriate method for your programming language. For example, in Node.js, you can access environment variables using `process.env`:
```javascript   
const myEnvVar = process.env.MY_ENV_VAR;
console.log(`My environment variable is: ${myEnvVar}`);
```
# ## Best Practices
# - **Use `.env` files for local development**: This allows you to keep sensitive
#   information out of your source code and easily switch configurations.
# - **Avoid hardcoding sensitive information**: Use environment variables to store secrets, API keys
#   and other sensitive data instead of hardcoding them in your application code.
# - **Document your environment variables**: Provide clear documentation for the environment variables your application requires    
#   and their expected values. This helps other developers understand how to configure the application.
# - **Use default values**: When accessing environment variables in your application, consider providing default values to avoid errors if a variable is not set.
# - **Use Docker secrets for sensitive data**: For sensitive information like passwords or API keys, consider using Docker secrets instead of environment variables. This provides an additional layer of security.
# - **Keep environment variables consistent**: Ensure that the same environment variables are used across different environments (development, staging, production) to avoid configuration issues.
# - **Use descriptive names**: Use clear and descriptive names for your environment variables to make it easier to understand their purpose.