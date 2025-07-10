FROM node:20-apline

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./app

CMD ["node","index.js"]