
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'seba1234',
  port: 5432,
});

app.get('/jugadores', async (req, res) => {
  const result = await db.query('SELECT * FROM jugadores');
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('API corriendo en http://localhost:3000');
});
