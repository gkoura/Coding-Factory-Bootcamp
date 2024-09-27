const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.js");

app.use(express.json());

mongoose
	.connect(process.env.MONGODB_URI, {})
	.then(() => {
		console.log("Connection to MongoDB established");
	})
	.catch((err) => {
		console.log("Failed to connect to MongoDB", err);
	});

const user = require("./routes/user.routes");
const userProduct = require("./routes/user.product.routes");

app.use("/api/user", user);
app.use("/api/user.product", userProduct);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument.options));

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
