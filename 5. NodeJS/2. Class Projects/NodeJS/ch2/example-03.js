const http = require("http");
const { writeFile, readFile } = require("fs");
const os = require("os");

const osType = os.type();
console.log(osType);

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>
        Your OS is ${osType}
    </h3>
</body>
</html>
`;

// Write the HTML file once when the server starts
writeFile("./index.html", htmlContent, (err) => {
	if (err) {
		console.error("Problem in writing file", err);
	} else {
		console.log("File written successfully");
	}
});

const server = http.createServer((req, res) => {
	// Read the file when there's a request
	readFile(`./index.html`, (err, content) => {
		if (err) {
			console.log("Problem in reading file", err);
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end("Server Error");
		} else {
			console.log("This is a request");

			res.setHeader("Content-Type", "text/html");
			res.end(content);
		}
	});
});

server.listen(3000, () => {
	console.log("Server is running on port 3000");
});
