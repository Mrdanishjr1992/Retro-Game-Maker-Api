require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// Middleware
app.use(bodyParser.json());
// Cross Origin Resource Sharing
app.use(cors());

// Home Route
app.get('/', (req, res) => {
  res.send('<h2>Retro-Game-Maker-Api</h2>');
});
// User API Routes
app.use('/user', routes.user);
// Player API Routes
app.use('/player', routes.player);
// Attack API Routes
app.use('/attack', routes.attack);
// Map API Routes
app.use('/map', routes.map);

app.listen(PORT, () => console.log('connected to port ' + PORT));
