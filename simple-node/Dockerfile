FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . /app

EXPOSE 8000

CMD ["npm", "run", "dev"]