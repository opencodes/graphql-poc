FROM node:latest

WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

CMD npm run prod
