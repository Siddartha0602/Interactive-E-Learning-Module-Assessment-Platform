const express = require('express');
const cors = require('cors');
const scoreRoutes = require('./routes/score.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/scores', scoreRoutes);

app.get('/', (req, res) => {
  res.send('E-Learning API Server is Running');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});