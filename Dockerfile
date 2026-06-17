FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Install a simple static file server globally
RUN npm install -g serve

EXPOSE 3000

# Serve the 'dist' or 'build' folder on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]