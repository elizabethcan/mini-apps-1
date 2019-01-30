// Build your Express app inside server.js
// Use Express to serve up an index.html file and its associated assets

const express = require('express');
const app = express();
const port = 3000;

// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World from server')
});

app.listen(port, () => console.log(`listening on port: ${port}`));

