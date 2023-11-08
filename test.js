// Simulating a test event (you can change this object as needed for your test)
const testEvent = {
    // Add any event properties your function depends on
    // For example, request information, etc.
};

// Import the Lambda handler
const lambdaFunction = require('./app');

// Simulate Lambda invocation with the test event
lambdaFunction.handler(testEvent)
    .then((result) => {
        console.log('Lambda execution result:', result);
    })
    .catch((error) => {
        console.error('Error executing Lambda:', error);
    });
