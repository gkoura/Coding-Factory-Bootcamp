const m2s = require("mongoose-to-swagger");
const User = require("./models/user.model");

const paths_var = {
    "/api/user": {
      get: {
        tags: ["Users"],
        summary: "Retrieve all users",
        operationId: "findAllUsers",
        responses: {
          200: {
            description: "List of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/User" },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Users"],
        summary: "Create a new user",
        operationId: "createUser",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
        },
      },
    },
    "/api/user/{username}": {
      get: {
        tags: ["Users"],
        summary: "Retrieve a user by username",
        operationId: "findOneUser",
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Username of the user",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User details",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/User" },
              },
            },
          },
        },
      },
      patch: {
        tags: ["Users"],
        summary: "Update a user by username",
        operationId: "updateUser",
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Username of the user",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        responses: {
          200: {
            description: "User updated successfully",
          },
        },
      },
      delete: {
        tags: ["Users"],
        summary: "Delete a user by username",
        operationId: "deleteUser",
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Username of the user",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "User deleted successfully",
          },
        },
      },
    },
    "/api/user/stats1": {
      get: {
        tags: ["Users and Products"],
        summary: "Get statistics 1",
        operationId: "stats1",
        responses: {
          200: {
            description: "Statistics data",
          },
        },
      },
    },
    "/api/user/stats2": {
      get: {
        tags: ["Users and Products"],
        summary: "Get statistics 2",
        operationId: "stats2",
        responses: {
          200: {
            description: "Statistics data",
          },
        },
      },
    },
    "/api/user/{username}/stats3": {
      get: {
        tags: ["Users and Products"],
        summary: "Get statistics 3 for a user",
        operationId: "stats3",
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Username of the user",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Statistics data for the user",
          },
        },
      },
    },
    "/api/user/": {
      get: {
        tags: ["Users and Products"],
        summary: "Retrieve all user products",
        operationId: "findAllUserProducts",
        responses: {
          200: {
            description: "List of user products",
          },
        },
      },
      post: {
        tags: ["Users and Products"],
        summary: "Create a new product for a user",
        operationId: "createUserProduct",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { /* Define your product schema here */ },
            },
          },
        },
        responses: {
          201: {
            description: "Product created successfully",
          },
        },
      },
    },
    "/api/user//{id}": {
      delete: {
        tags: ["Users and Products"],
        summary: "Delete a product by ID",
        operationId: "deleteUserProduct",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the product",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Product deleted successfully",
          },
        },
      },
    },
  };

exports.options = {
	openapi: "3.0.0",
	info: {
		title: "Products CRUD API", // API title
		version: "1.0.0", // Version of the API
		description: "Products and Users Application", // API description
		contact: {
			name: "Greg",
			url: "http://www.example.com", // Ensure URL is valid
			email: "support@xx.com",
		},
	},
	components: {
		schemas: {
			User: m2s(User),
		},
	},
	servers: [
		{
			url: "http://localhost:3000", // API server URL
			description: "Local server",
		},
		{
			url: "http://www.example.com",
			description: "Testing Server",
		},
	],
	tags: [
		{
			name: "Users", // Tag for User-related endpoints
			description: "Operations related to users", // Description for the tag
		},
		{
			name: "Users and Products", // Tag for Product-related endpoints
			description: "Operations related to user's products", // Description for the tag
		},
	],
	paths: paths_var,
};
