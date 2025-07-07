FROM node:24-alpine

WORKDIR /app-one

COPY package*.json /app-one/

RUN npm install

COPY . /app-one/

EXPOSE 8001

CMD [ "npm","run","dev" ]