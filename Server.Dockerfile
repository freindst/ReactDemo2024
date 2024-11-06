FROM node:18-alpine

WORKDIR /usr/src/server
COPY ./server/package.json ./server/package-lock.json .
RUN npm install --production

COPY ./server ./
EXPOSE 5000

CMD ["node", "server.js"]