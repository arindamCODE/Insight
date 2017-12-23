FROM mhart/alpine-node:8

RUN apk update \
   && apk add python build-base \
   && npm install -g yarn

RUN mkdir -p /nodejs
WORKDIR /nodejs

COPY package.json .

RUN yarn

EXPOSE 8080

COPY . .

CMD ["npm", "start"]
