# Use a imagem oficial do Node.js baseada no Ubuntu como base
FROM node:22-bullseye-slim AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do projeto
COPY . .

# Construa o projeto Angular
RUN npm run build --prod

# Use a imagem oficial do Nginx baseada no Ubuntu como base para o estágio de produção
FROM nginx:stable

# Instale o curl (opcional, mas útil para testes e depuração)
RUN apt-get update && apt-get install -y curl

# Copie os arquivos estáticos construídos para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80 para o Nginx
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]
