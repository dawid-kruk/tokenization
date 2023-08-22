# vue-frontend/Dockerfile

# Use the node image as a starting point.
FROM node:19

# Set the working directory inside the container.
WORKDIR /app

# Copy local code and package.json to the container image.
COPY package*.json ./
COPY . .

# Install dependencies.
RUN npm install

# Build the Vue app.
RUN npm run build

# Use a production server to serve the app.
FROM nginx:1.17-alpine

# Copy the build static content to the Nginx default directory.
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port the app runs on.
EXPOSE 80

# Start Nginx server.
CMD ["nginx", "-g", "daemon off;"]