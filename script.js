// server.js
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/set-controls', (req, res) => {
  const { email, pin } = req.body;
  // Store control settings and send response
  res.send('Controls set');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

