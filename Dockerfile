# Construcción de imagen de app partiendo de imagen liviana de node
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

# Instalación de dependencias
RUN npm install

COPY . .

# Se asignan variables de entorno, necesarias en build time
ENV VITE_WEATHER_API_KEY=56b1cb06f1fe4abf80135749240609
ENV VITE_IP_INFO_TOKEN=5a92aa06c3e94b

# Compilación de archivos
RUN npm run build

# Copia de archivos estáticos de app a sevidor web nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]