const db = require('../models');

const index = (req, res) => {
	db.Player.find({ userId: req.params.userId }, (err, allPlayers) => {
		if (err) return console.log(err);
		// Send back data as JSON object
		return res.json(allPlayers);
	});
};

const show = (req, res) => {
	db.Player.findById(req.params.id, (err, foundPlayer) => {
		if (err) return console.log(err);
		// Send back data to client as JSON object
		return res.json(foundPlayer);
	});
};

const create = (req, res) => {
	const PlayerObj = {};
	db.Player.create(PlayerObj, (err, newPlayer) => {
		if (err) return console.log(err);
		return res.json(newPlayer);
	});
};

const update = (req, res) => {
	db.Player.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPlayer) => {
			if (err) return console.log(err);
			return res.json(updatedPlayer);
		}
	);
};

const destroy = (req, res) => {
	db.Player.findByIdAndDelete(req.params.id, (err, deletedPlayer) => {
		if (err) return console.log(err);
		return res.json(deletedPlayer);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
