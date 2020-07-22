FROM node:8.11.3

LABEL maintainer="me@johnserrano.co"
WORKDIR /app

COPY package*.json ./

ENV NODE_ENV production
ENV PORT 3000

RUN npm install

COPY . /app

RUN npm install -g webpack@4.15.0 && npm install -g webpack-cli@3.0.8 && npm install -g babel-cli@6.26.0 && npm install -g babel-preset-es2015@6.24.1 && npm install babel-preset-react@6.24.1 && npm install babel-preset-stage-2@6.24.1

RUN npm run webpack-prod

EXPOSE 3000
CMD ["npm", "start"]