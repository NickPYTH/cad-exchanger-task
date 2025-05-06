FROM node:18-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . ./
RUN npm run build:prod

FROM node:18-alpine AS development
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . ./

EXPOSE 3000
CMD ["npm", "start"]

FROM nginx:alpine AS production

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/app.conf /etc/nginx/conf.d/app.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]