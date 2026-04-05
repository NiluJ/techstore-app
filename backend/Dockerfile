# Use Node LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend
CMD ["node", "server.js"]