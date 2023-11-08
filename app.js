const lambdaHandler = async (event) => {
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

// Export the Lambda handler function
module.exports.lambdaHandler = lambdaHandler;
