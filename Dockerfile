
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT = 3005

EXPOSE 3005

CMD ["npm", "run", "dev"]