const { format } = require('date-fns');
const fs = require('fs');

const logEvents = async (event, level, message) => {
  try {
    const today = format(new Date(), 'yyyyMMdd');
    const filePath = `logs/${today}.log`;
    const logItem = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}\t${level}\t${event}\t${message}\n`;

    fs.appendFile(filePath, logItem, (err) => {
      if (err) {
        console.log(`Error writing to log file: ${err}`);
      }
    });

    console.log(`${event} - ${message}`);
  } catch (error) {
    console.log(`Error logging event: ${error}`);
  }
};

// Usage example:
logEvents('Login', 'INFO', 'User logged in successfully');