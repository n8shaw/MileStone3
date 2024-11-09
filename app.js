const express = require('express');
const knex = require('knex');  // This line is fine, no need to reassign knex
const app = express();

// Configure knex to use environment variables (no need to reassign knex here)
const db = knex({
  client: 'mysql',
  connection: {
    host: 'database-1.c1iugckwg6rp.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Password1!',
    database: 'donuts',
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
