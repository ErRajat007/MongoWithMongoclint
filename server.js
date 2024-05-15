const express = require('express');
const app = express();
// const routes = require('./app/routes');
const routes = require('./routes/routes');

const bodyParser = require('body-parser');

const { connectDB } = require('./config/db'); // Import the connectDB function


const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the database
connectDB().catch(error => {
  console.error('Failed to connect to the database:', error);
  process.exit(1); 
});

// Register routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});