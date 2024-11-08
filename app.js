const express = require('express');
const knex = require('knex');
const app = express();

// Configure knex to use environment variables
const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306
  }
});

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, images)
app.use(express.static('public'));

// Route to display donuts
app.get('/', (req, res) => {
  db.select('url', 'item_name')
    .from('items')
    .then(items => {
      res.render('index', { items: items });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Error retrieving items");
    });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
