require('dotenv').config();
require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();
const routes = require('./routes');
const session = require('express-session');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
	session({
		secret: process.env.SECRET_STRING,
		resave: false,
		saveUninitialized: false,
	})
);
app.use('/user', routes.user);
app.use('/player', routes.player);
app.use('/attack', routes.attack);

app.listen(port, () => console.log('connected to port ' + port));
