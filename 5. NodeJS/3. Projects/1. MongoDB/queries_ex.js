var users = [
	{
		username: "admin",
		password: "12345",
		name: "Bob",
		surname: "Dylan",
		email: "admin1@aueb.gr",
		address: {
			area: "area1",
			road: "road1",
		},
		phone: [
			{ type: "home", number: "2101111111" },
			{
				type: "mobile",
				number: "6931111111",
			},
		],
		products: [
			{
				product: "product 1",
				quantity: 2,
				cost: 10,
				date: {
					$date: "2022-12-01T00:00:00.000Z",
				},
			},
			{
				product: "product 1",
				quantity: 3,
				cost: 10,
				date: "5/12/2022",
			},
		],
	},
	{
		username: "user1",
		password: "12345",
		name: "Elvis",
		surname: "Presley",
		email: "user1@aueb.gr",
		address: {
			area: "area2",
			road: "road2",
		},
		phone: [
			{ type: "home", number: "2102222222" },
			{
				type: "mobile",
				number: "6932222222",
			},
		],
		products: [
			{
				product: "product 1",
				quantity: 2,
				cost: 10,
				date: "1/12/2022",
			},
			{
				product: "product 2",
				quantity: 3,
				cost: 20,
				date: "5/12/2022",
			},
			{
				product: "product 4",
				quantity: 10,
				cost: 40,
				date: "10/12/2022",
			},
		],
	},
	{
		username: "user2",
		password: "12345",
		name: "Johnny",
		surname: "Rivers",
		email: "user2@aueb.gr",
		address: {
			area: "area1",
			road: "road3",
		},
		phone: [
			{ type: "home", number: "2103333333" },
			{
				type: "mobile",
				number: "6933333333",
			},
		],
		products: [
			{
				product: "product 2",
				quantity: 10,
				cost: 20,
				date: "10/12/2022",
			},
			{
				product: "product 2",
				quantity: 3,
				cost: 20,
				date: "15/12/2022",
			},
			{
				product: "product 5",
				quantity: 20,
				cost: 50,
				date: "10/12/2022",
			},
		],
	},
	{
		username: "user3",
		password: "12345",
		name: "Frank",
		surname: "Zappa",
		email: "user3@aueb.gr",
		address: {
			area: "area3",
			road: "road4",
		},
		phone: [
			{ type: "home", number: "2104444444" },
			{
				type: "mobile",
				number: "6934444444",
			},
		],
		products: [
			{
				product: "product 1",
				quantity: 10,
				cost: 10,
				date: "12/12/2022",
			},
			{
				product: "product 3",
				quantity: 3,
				cost: 30,
				date: "12/12/2022",
			},
			{
				product: "product 4",
				quantity: 4,
				cost: 40,
				date: "12/12/2022",
			},
		],
	},
	{
		username: "user4",
		password: "12345",
		name: "David",
		surname: "Bowie",
		email: "user4@aueb.gr",
		address: {
			area: "area2",
			road: "road1",
		},
		phone: [
			{ type: "home", number: "2105555555" },
			{
				type: "mobile",
				number: "6935555555",
			},
		],
		products: [
			{
				product: "product 3",
				quantity: 10,
				cost: 30,
				date: "20/12/2022",
			},
			{
				product: "product 4",
				quantity: 3,
				cost: 40,
				date: "21/12/2022",
			},
		],
	},
	{
		username: "user5",
		password: "12345",
		name: "Paul",
		surname: "McCartney",
		email: "user5@aueb.gr",
		address: {
			area: "area1",
			road: "road1",
		},
		phone: [
			{ type: "home", number: "2106666666" },
			{
				type: "mobile",
				number: "6936666666",
			},
		],
		products: [
			{
				product: "product 3",
				quantity: 10,
				cost: 30,
				date: "20/12/2022",
			},
			{
				product: "product 4",
				quantity: 3,
				cost: 40,
				date: "21/12/2022",
			},
		],
	},
];

var products = [
	{
		product: "product 1",
		cost: 10,
		description: "Description for product 1",
		quantity: 40,
	},
	{
		product: "product 2",
		cost: 20,
		description: "Description for product 2",
		quantity: 10,
	},
	{
		product: "product 3",
		cost: 30,
		description: "Description for product 3",
		quantity: 20,
	},
	{
		product: "product 4",
		cost: 40,
		description: "Description for product 4",
		quantity: 30,
	},
	{
		product: "product 5",
		cost: 15,
		description: "Description for product 5",
		quantity: 20,
	},
];

// 1. Διαγράψτε όλα τα documents από τις συλλογές users & product.
db.products.deleteMany({});
db.users.deleteMany({});

// 2. Εισάγεται τα documents του αρχείου users.json στη συλλογή users.
db.users.insertMany(users);

// 3. Εισάγεται τα documents του αρχείου products.json στη συλλογή products.
db.products.insertMany(products);

// 4. Αναζητήστε τα document που έχουν "area": "area1" και ταξινομήστε τα βάση του πεδίου surname.
db.users.find({ "address.area": "area1" }).sort({ surname: 1 });

// 5. Αναζητήστε τα document στα οποία το πεδίο quantity του products είναι >=10, ταξινομήστε τα βάση του πεδίου surname και επιστρέψτε μόνο το πεδίο username.
db.collection.aggregate([
	// Unwind the products array to work with individual products
	{ $unwind: "$products" },

	// Match documents where the quantity in products is >= 10
	{ $match: { "products.quantity": { $gte: 10 } } },

	// Group by the document _id to gather the results back
	{
		$group: {
			_id: "$_id",
			username: { $first: "$username" },
			surname: { $first: "$surname" },
		},
	},

	// Sort by the surname field
	{ $sort: { surname: 1 } },

	// Project to include only the username field
	{ $project: { _id: 0, username: 1 } },
]);

// 6. Τροποποιήστε όλους τους χρήστες που έχουν "area": "area1" και αλλάξτε το area1 σε Patision.
db.users.updateMany(
	{ "address.area": "area1" },
	{ $set: { "address.area": "Patision" } }
);

// 7. Τροποποιήστε όλους τους χρήστες που το πεδίο quantity του products είναι >=10 και προσθέστε ένα νέο πεδίο special με τιμή true.
db.users.updateMany(
	{ "products.quantity": { $gte: 10 } }, // Filter criteria
	{ $set: { special: true } } // Update operation to add the new field
);

// 8. Τροποποιήστε όλους τους χρήστες και εισάγετε στο subdocuments του πεδίου phone το πεδίο country με τιμή greece.
db.users.updateMany(
	{}, // Match all documents
	{ $set: { "phone.$[].country": "greece" } } // Update operation to add country to each phone subdocument
);

// 9. Διαγράψτε από όλους τους χρήστες που το πεδίο quantity του products είναι >=10 το πεδίο country του phone.
db.users.updateMany(
	{ "products.quantity": { $gte: 10 } }, // Filter criteria
	{ $unset: { "phone.$[].country": "" } } // Update operation to remove the country field from each phone subdocument
);

// 10. Βρείτε το συνολικό ποσό αγορών που έχουν γίνει καθώς και το σύνολο των προϊόντων που έχουν αγοραστεί
db.users.aggregate([
	// Unwind the products array to work with individual products
	{ $unwind: "$products" },

	// Group all products to calculate the total amount spent and total quantity
	{
		$group: {
			_id: null, // Grouping by null to aggregate across all documents
			totalAmountSpent: {
				$sum: { $multiply: ["$products.quantity", "$products.cost"] },
			},
			totalQuantity: { $sum: "$products.quantity" },
		},
	},

	// Optionally, reshape the output for easier readability
	{
		$project: {
			_id: 0,
			totalAmountSpent: 1,
			totalQuantity: 1,
		},
	},
]);

// 11. Βρείτε ανά προϊόν το συνολικό ποσό αγορών που έχουν γίνει καθώς και το σύνολο των προϊόντων που έχουν αγοραστεί
db.users.aggregate([
	// Unwind the products array to work with individual products
	{ $unwind: "$products" },

	// Group by product to calculate the total amount spent and total quantity for each product
	{
		$group: {
			_id: "$products.product", // Group by the product name
			totalAmountSpent: {
				$sum: { $multiply: ["$products.quantity", "$products.cost"] },
			},
			totalQuantity: { $sum: "$products.quantity" },
		},
	},

	// Optionally, reshape the output for easier readability
	{
		$project: {
			_id: 0,
			product: "$_id",
			totalAmountSpent: 1,
			totalQuantity: 1,
		},
	},
]);
