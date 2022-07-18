## Build app
FROM node:latest as build-app
ARG REACT_APP_SUPABASE_ANON_PUBLIC_KEY
ADD . .
RUN REACT_APP_SUPABASE_ANON_PUBLIC_KEY=${REACT_APP_SUPABASE_ANON_PUBLIC_KEY} \
    yarn install && yarn build

## Serve prod bundle
FROM ubuntu:latest
RUN apt update && apt install -y nginx
COPY --from=build-app build /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/sites-enabled/default
RUN rm -rf node_modules .env.local
CMD ["nginx", "-g", "daemon off;"]
STOPSIGNAL SIGTERM
EXPOSE 80
