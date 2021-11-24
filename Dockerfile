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

# Change from root before installing dependencies
USER node

# install all node_modules
RUN npm install

# add app
COPY --chown=node:node . .

# start app
CMD ["npm", "start"]
