## Build app
FROM node:latest as build-app
ADD . .
RUN yarn install && npx tailwindcss -i ./src/assets/styles.css -o ./dist/assets/styles.css

## Serve prod bundle
FROM ubuntu:latest
RUN apt update && apt install -y nginx
COPY --from=build-app dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/sites-enabled/default
RUN rm -rf node_modules .env.local
CMD ["nginx", "-g", "daemon off;"]
STOPSIGNAL SIGTERM
EXPOSE 80
