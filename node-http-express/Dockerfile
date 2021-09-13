FROM node:14.15.4-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install --only=production

CMD ["npm", "start"]