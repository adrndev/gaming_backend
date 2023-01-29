FROM node:current

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g typescript nodemon ts-node

RUN npm install

COPY . .

CMD ["npm", "start"]