# Stage 1 - build image
FROM node:12-alpine as node
WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm install -g ts-node
CMD ["npm", "start", "src/shared/infra/http/server.ts"]
