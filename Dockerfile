# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

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
RUN npm install @reduxjs/toolkit millify antd @antd-design/icons react-redux axios chart.js html-react-parser moment react-chartjs-2 react-router-dom html-react-parser

# add app
COPY . ./

# start app
CMD ["npm", "start"]