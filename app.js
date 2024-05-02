const express = require("express");
const cors = require("cors");

// Create server
const app = express();

// Settings
const port = process.env.PORT ?? 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Listening to the server
app.listen(port, () => {
  console.log(`Listening to server on port: http://127.0.0.1:${port}`);
});
