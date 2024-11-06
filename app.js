const express = require('express');
const app = express();
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'your-rds-endpoint.amazonaws.com',
    user: 'your-username',
    password: 'your-password',
    database: 'icecreamdonuts',
    port: 3306
  }
});

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, images)
app.use(express.static('public'));

// Route to display donuts
app.get('/', (req, res) => {
  knex.select('url', 'item_name')
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
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
