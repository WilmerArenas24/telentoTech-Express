# Seleccionar la imagen
FROM node:20-alpine

# espacio de trabajo
WORKDIR /app

# copiamos el archivo package.jason
COPY package*.json ./

# ejecutamos las instalaciones de las dependencias
RUN npm install

# copiamos los demas archivos que estan en el proyecto
COPY . ./

# ejecutamos el proyecto
CMD ["npm", "start"]