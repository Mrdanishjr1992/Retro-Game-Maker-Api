const db = require('../models');

const login = (req, res) => {
	db.User.findOne({ username: req.body.username }, (err, foundUser) => {
		if (err) {
			console.log(err);
		}
		if (!foundUser) {
			return res.json('No user found');
		}
		if (foundUser.password === req.body.password) {
			return res.json(foundUser.username);
		}
	});
};

const show = (req, res) => {
	db.User.findById(req.params.id, (err, foundUser) => {
		if (err) return console.log(err);
		return res.json(foundUser);
	});
};

const create = (req, res) => {
	console.log(req.body);
	const userObj = {
		username: req.body.username,
		password: req.body.password,
	};
	db.User.create(userObj, (err, createdUser) => {
		if (err) {
			return console.log(err);
		}
		if (!createdUser) {
			return res.json('None created');
		}
		return res.json(createdUser);
	});
};

const update = (req, res) => {
	db.User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedUser) => {
			if (err) return console.log(err);
			return res.json(updatedUser);
		}
	);
};

const destroy = (req, res) => {
	db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
		if (err) return console.log(err);
		return res.json(deletedUser);
	});
};

module.exports = {
	login,
	show,
	create,
	update,
	destroy,
};
