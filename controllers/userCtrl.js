const db = require('../models');

const login = (req, res) => {
	db.User.findOne({ username: req.body.username }, (err, foundUser) => {
		if (err) {
			console.log(err);
		}
		if (!foundUser) {
			return res.json('No user found');
		}
		// Verify the submitted email and password match
		if (foundUser.password === req.body.password) {
			return res.json(foundUser.username);
		}
	});
};

const show = (req, res) => {
	// Get user from DB by ID
	db.User.findById(req.params.id, (err, foundPost) => {
		if (err) return console.log(err);
		// Send back data to client as JSON object
		return res.json(foundPost);
	});
};

const create = (req, res) => {
	console.log(req.body);
	const user = {
		username: req.body.username,
		password: req.body.password,
	};
	// Query DB to create a new user
	db.User.create(user, (err, userCreated) => {
		if (err) {
			return console.log(err);
		}
		if (!userCreated) {
			return res.json('None created');
		}
		return res.json(userCreated);
	});
};

const update = (req, res) => {
	db.User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPost) => {
			if (err) return console.log(err);
			return res.json(updatedPost);
		}
	);
};

const destroy = (req, res) => {
	db.User.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err) return console.log(err);
		return res.json(deletedPost);
	});
};

module.exports = {
	login,
	show,
	create,
	update,
	destroy,
};
