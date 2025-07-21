
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

app.use(cors());

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'seba1234',
  port: 5432,
});

app.get('/jugadores', async (req, res) => {
  const result = await db.query('SELECT * FROM jugadores ORDER BY ranking ASC');
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('API corriendo en http://localhost:3000');
});
