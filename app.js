const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  return res.send('Bye');
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
