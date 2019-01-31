const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('hello from server');
// });

app.use(express.static(path.join(__dirname, 'client/dist')));

app.listen(port, () => console.log(`now listening on port: ${port}`));

