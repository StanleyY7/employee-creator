# Base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm i

# Copy the rest of the files
COPY . .

# Expose the default port for the app
EXPOSE 5173

# Start the app with hot reloading
CMD ["npm", "run", "dev"]