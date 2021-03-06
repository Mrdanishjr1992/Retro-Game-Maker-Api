const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema(
	{
		tiles: [
			[
				{
					id: Number,
					x: Number,
					y: Number,
					v: {
						x: Number,
						y: Number,
					},
				},
			],
		],
		bgTile: {
			id: Number,
			x: Number,
			y: Number,
			v: {
				x: Number,
				y: Number,
			},
		},
		mapType: String,
		size: {
			width: Number,
			height: Number,
		},
	},
	{ timestamps: true }
);

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
