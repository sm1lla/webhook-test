// app.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 80;
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
    const event = req.body;
    // Process the event
    console.log("Received event:", event);
    // Example: Handle different event types
    
    // Respond to acknowledge receipt of the event
    res.status(202).send('Accepted');

    const githubEvent = request.headers['x-github-event'];
    if (githubEvent == "push") {
        console.log("New changes.")
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});