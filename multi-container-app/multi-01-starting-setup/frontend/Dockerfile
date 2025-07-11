FROM node:20-apline-3
ARG PORT=3000
WORKDIR /app/

COPY package*.com /app/

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm","start"]