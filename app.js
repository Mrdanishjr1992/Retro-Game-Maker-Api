require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Cross Origin Resource Sharing
// var corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
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
