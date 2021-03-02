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
app.use('/api/v1/user', routes.user);
app.use('/api/v1/player', routes.player);
app.use('/api/v1/attack', routes.attack);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(port, () => console.log('connected to port ' + port));
