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

exports.update = async (req, res) => {
	const username = req.params.username;
	const product_id = req.body.product._id;
	const product_quantity = req.body.product.quantity;

	console.log(`Update product quantity for user: ${username}`);

	try {
		const result = await User.updateOne(
			{ username: username, "products._id": product_id },
			{ $set: { "products.$.quantity": product_quantity } }
		);
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, data: err });
	}
};

exports.delete = async (req, res) => {
	const username = req.params.username;
	const product_id = req.params.id;
	const product_quantity = req.body.product.quantity;

	console.log(`Delete product from user: ${username}`);

	try {
		const result = await User.deleteOne(
			{ username: username, "products._id": product_id },
			{ $pull: { products: { _id: product_id } } }
		);
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, data: err });
	}
};

exports.stats1 = async (req, res) => {
	console.log("For all users: sum by product and count");
	try {
		const result = await User.aggregate([
			{
				$unwind: "$products",
			},
			{
				$group: {
					_id: {
						username: "$username",
						product: "$products.product",
					},
					totalAmount: {
						$sum: {
							$multiply: ["$products.cost", "$products.quantity"],
						},
					},
					count: { $sum: 1 },
				},
			},
			{
				$project: {
					_id: 0,
					username: "$_id.username",
					product: "$_id.product",
					totalAmount: 1,
					count: 1,
				},
			},
			// Sort by username in ascending order (use -1 for descending)
			{
				$sort: {
					username: 1, // 1 for ascending order, -1 for descending
				},
			},
		]);
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, message: err.message });
	}
};


exports.stats2 = async (req, res) => {
	console.log("Stats2");

	try {
		const result = await User.aggregate([
			{
				$unwind: "$products",
			},
			{
				$project: {
					_id: 0,
					products: 1,
				},
			},
			{
				$group: {
					_id: {
						product: "$products.product",
					},
					totalAmount: {
						$sum: {
							$multiply: ["$products.cost", "$products.quantity"],
						},
					},
					count: { $sum: 1 },
				},
			},
			// Sort by product in ascending order (use -1 for descending)
			{
				$sort: {
					"_id.product": 1, // 1 for ascending, -1 for descending
				},
			},
		]);
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, message: err.message });
	}
};


exports.stats3 = async (req, res) => {
	const username = req.params.username; // Use the username from request parameters
	console.log("Stats3 for username:", username);

	try {
		const result = await User.aggregate([
			{
				$match: {
					username: username, // Match by the username
				},
			},
			{
				$unwind: "$products",
			},
			{
				$project: {
					_id: 0,
					products: 1,
				},
			},
			{
				$group: {
					_id: {
						product: "$products.product",
					},
					totalAmount: {
						$sum: {
							$multiply: ["$products.cost", "$products.quantity"],
						},
					},
					count: { $sum: 1 },
				},
			},
			// Sort by product in ascending order (use -1 for descending)
			{
				$sort: {
					"_id.product": 1, // 1 for ascending, -1 for descending
				},
			},
		]);
		res.json({ status: true, data: result });
	} catch (err) {
		res.json({ status: false, message: err.message });
	}
};
