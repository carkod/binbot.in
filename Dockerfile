## Build app
FROM node:20.19.0 AS build-app
WORKDIR /app
COPY . .
RUN npm install && npm run build

## Serve prod bundle
FROM ubuntu:latest
RUN apt update && apt install -y nginx
COPY --from=build-app /app/dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/sites-enabled/default
RUN rm -rf /app/node_modules /app/.env.local
CMD ["nginx", "-g", "daemon off;"]
STOPSIGNAL SIGTERM
EXPOSE 80 4000
