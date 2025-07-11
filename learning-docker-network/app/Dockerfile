FROM node:20-alpine3.20

ARG PORT=8000
WORKDIR /app

COPY package*.json ./

RUN apk update && apk upgrade && npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm","run","dev"]