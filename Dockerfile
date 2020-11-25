FROM node

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn add ts-node

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 6000

CMD yarn start