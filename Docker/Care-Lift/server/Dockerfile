FROM node:20.15.1
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node","index.js"]
