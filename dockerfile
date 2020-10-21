FROM nginx:1.17.1-alpine
COPY /dist/AngularDocker /usr/share/nginx/html
