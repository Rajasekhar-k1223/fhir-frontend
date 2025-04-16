FROM node:20 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-stage /app/dist/fhir-angular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
