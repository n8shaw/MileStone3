const express = require('express');
const knex = require('knex');
const app = express();

// Configure knex to use environment variables
knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'database-1.c1iugckwg6rp.us-east-2.rds.amazonaws.com',  // Strings must be wrapped in quotes
    user: 'admin',  // Strings must be wrapped in quotes
    password: 'Password1!',  // Strings must be wrapped in quotes
    database: 'donuts',  // Strings must be wrapped in quotes
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
