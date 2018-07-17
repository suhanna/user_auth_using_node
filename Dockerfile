FROM node:4
MAINTAINER suhanna CH

COPY package.json package.json 
RUN npm install

COPY . .  
CMD ["npm","start"] 