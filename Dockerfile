# Using latest Node image
FROM node:alpine3.10

# Setting working directory
WORKDIR /home/node/app

# Copying package.json and package-lock.json files to main directory
COPY package*.json ./

# Init
RUN npm install

# Bundle app source
COPY . .

# Set port
EXPOSE 8080

# Run server
CMD ["node", "app.js"]