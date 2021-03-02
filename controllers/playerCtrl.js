const db = require('../models');

const index = (req, res) => {
	db.People.find({ userId: req.params.userId }, (err, allPlayers) => {
		if (err) return console.log(err);
		// Send back data as JSON object
		return res.json(allPlayers);
	});
};

const show = (req, res) => {
	db.People.findById(req.params.id, (err, foundPlayer) => {
		if (err) return console.log(err);
		// Send back data to client as JSON object
		return res.json(foundPlayer);
	});
};

const create = (req, res) => {
	const people = {};
	db.People.create(post, (err, newPost) => {
		if (err) return console.log(err);
		return res.json(newPost);
	});
};

const update = (req, res) => {
	db.People.findByIdAndUpdate(
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
	db.People.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err) return console.log(err);
		return res.json(deletedPost);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
