FROM node:18

# Set the NODE_OPTIONS environment variable to use the legacy OpenSSL provider
ENV NODE_OPTIONS="--openssl-legacy-provider"

# Set up the app
WORKDIR /app
COPY . .
RUN npm install

# Run the app
CMD ["npm", "start"]
