const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/datasets', (req, res) => {
  res.json([
    { id: 1, name: 'Data Kependudukan', year: 2025 },
    { id: 2, name: 'Data Pendidikan', year: 2025 }
  ]);
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
