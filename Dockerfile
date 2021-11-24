# pull official base image
FROM node:13.12.0-alpine
# install node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /app
# Set tini as entrypoint
ENTRYPOINT ["/app", "--"]
# copy project file
COPY package.json .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# install all node_modules
RUN npm install

# tests dependencies
RUN npm i --save-dev enzyme enzyme-adapter-react-16

# add app
COPY . ./

# start app
CMD ["npm", "start"]
