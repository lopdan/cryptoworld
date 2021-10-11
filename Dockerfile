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
RUN npm install --silent
RUN npm install -g sass
RUN npm install --save react-chartjs-2 chart.js
RUN npm install react-scripts@4.0.3 -g --silent
RUN npm install @ant-design/icons @mui/material @emotion/react @emotion/styled 
RUN npm install @reduxjs/toolkit millify antd react-redux axios chart.js html-react-parser moment react-chartjs-2 react-router-dom html-react-parser
RUN npm i @antd-design/icons
RUN npm i @visx/shape @visx/text
RUN npm i axios cors
RUN npm install dotenv eslint slint-config-airbnb
RUN npm install --save @visx/group

# install all node_modules
RUN npm install

# tests dependencies
RUN npm i --save-dev enzyme enzyme-adapter-react-16

# add app
COPY . ./

# start app
CMD ["npm", "start"]
