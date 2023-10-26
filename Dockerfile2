FROM node:18 as builder
#set la workdir
WORKDIR /app
#copie du package.json et package-lock.json dans le container
COPY package*.json ./

#installations de typescript et @types/node, puis init de l'index.ts

COPY package*.json ./
RUN npm install 
COPY . . 
RUN npx tsc 

FROM node:18
#set la workdir
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build/index.js ./

RUN npm install --production

#fin du docker
CMD node index.js

#ouvrir "Docker Desktop" en arrière plan
#Entrer dans un terminal "docker build -t 2eimage -f Dockerfile2 ."
#entrer "docker run -it --rm -p 8080:8000 -e PING_LISTEN_PORT=8000 test-node"
#Entrer "curl http://localhost:8080/ping -v"
#dans une barre de recherche entrer "http://localhost:8080/ping"