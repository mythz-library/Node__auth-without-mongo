const fs = require("fs");
const path = require("path");

// Log file path
const logFilePath = path.join(__dirname, "../logs/app.log");

// Function to log messages
const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    }
  });
};

module.exports = log;
