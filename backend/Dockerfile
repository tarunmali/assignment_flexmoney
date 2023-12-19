FROM node:18.17.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000


# Define the command to run your app
CMD ["node", "server.js"]