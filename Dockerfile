FROM amazon/aws-lambda-nodejs:latest
COPY app.js package*.json ./
RUN npm install
CMD ["app.lambdaHandler"]
