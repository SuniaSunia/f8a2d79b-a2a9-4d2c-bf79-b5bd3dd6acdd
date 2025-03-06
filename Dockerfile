# Use a specific Node.js version (v16)
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the port Vercel uses
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
