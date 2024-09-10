FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_WEATHER_API_KEY=56b1cb06f1fe4abf80135749240609
ENV VITE_IP_INFO_TOKEN=5a92aa06c3e94b

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]