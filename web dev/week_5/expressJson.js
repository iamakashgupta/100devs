const express = require('express');
const app = express();

// Use express.json() middleware
app.use(express.json());

// Define a route that handles POST requests
app.post('/', (req, res) => {
  const data = req.body; // Access the parsed JSON data
  console.log(data);

  // Send a response
  res.json({ message: 'Data received successfully' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});