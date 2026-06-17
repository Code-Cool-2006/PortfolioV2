FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
# Change this line in your Dockerfile
CMD ["npm", "run", "preview", "--", "--host", "3000"]