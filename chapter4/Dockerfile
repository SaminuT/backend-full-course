FROM node:22-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install


COPY . .


EXPOSE 5004

CMD ["node", "./src/server.js"]