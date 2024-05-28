// app.js
const express = require("express");
const bodyParser = require("body-parser");
const simpleGit = require("simple-git");
const git = simpleGit.default();

const app = express();
const PORT = 80;
// Middleware to parse JSON bodies
app.use(bodyParser.json());

async function git_pull() {
    await git.pull()
}

// Webhook endpoint
app.post("/webhook", (req, res) => {
    const event = req.body;
    // Process the event
    //console.log("Received event:", event);
    // Example: Handle different event types
    
    // Respond to acknowledge receipt of the event
    res.status(202).send('Accepted');

    const githubEvent = req.headers['x-github-event'];
    if (githubEvent == "push") {
        console.log("New changes.")
        git_pull();
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});