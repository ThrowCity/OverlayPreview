FROM node:22.8

RUN mkdir /frontend

WORKDIR /frontend

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "-s", "out" ]
