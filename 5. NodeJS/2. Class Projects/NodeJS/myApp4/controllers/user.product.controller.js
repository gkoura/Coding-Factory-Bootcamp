const User = require("../models/user.model");

exports.findAll = async (req, res) => {
	console.log("Find all products");

	try {
		const result = await User.find({}, { username: 1, products: 1, _id: 0 });
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, data: err });
	}
};

exports.findOne = async (req, res) => {
	const username = req.params.username;
	console.log(`Find all products of user: ${username}`);

	try {
		const result = await User.findOne(
			{ username: username },
			{ username: 1, products: 1, _id: 0 }
		);
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, data: err });
	}
};

exports.create = async (req, res) => {
	const username = req.body.username;
	const products = req.body.products;
	console.log(`Insert products to user: ${username}`);

	try {
		const result = await User.findOneAndUpdate(
			{ username: username },
			{ products }
		);
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, data: err });
	}
};