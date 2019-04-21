FROM node:9-alpine

# Set workdir
WORKDIR /home/angularapp

# Install global dependencies
RUN npm install -g npm@latest
RUN npm install -g @angular/cli
RUN npm install -g firebase-tools

# Install dependencies
COPY package.json ./
RUN npm install
COPY functions/package.json ./functions/
RUN cd ./functions && npm install && cd ../

# Bundle source
COPY . /home/angularapp

# Build & deploy
RUN node ./git.version.js
RUN ng build --prod
RUN firebase deploy --token $FIREBASE_TOKEN