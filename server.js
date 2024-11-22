require("dotenv").config();
const express = require("express");

const app = express();

// Middlewares
app.use(express.json());

// Start Server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
