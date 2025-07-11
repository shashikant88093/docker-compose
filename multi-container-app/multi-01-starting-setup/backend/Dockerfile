FROM node:20-apline-3

ARG PORT=8000

WORKDIR /app

COPY package*.json ./app

RUN npm install


COPY . .



EXPOSE ${PORT}

CMD ["node", "app.js"]