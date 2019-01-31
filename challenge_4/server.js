const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello from server');
});

app.listen(port, () => console.log(`now listening on port: ${port}`));

