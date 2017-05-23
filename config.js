"use strict";
module.exports = {
	"type": "service",
	"prerequisites": {
		"cpu": " ",
		"memory": " "
	},
	"swagger": true,
	"dbs": [
		{
			"prefix": "",
			"name": "petStore",
			"mongo": true,
			"multitenant": false
		}
	],
	"models": {
		"path": "/opt/soajs/node_modules/soajs.petstore.petstore/lib/models/",
		"name": "mongo"
	},
	"serviceName": "petstore",
	"serviceGroup": "petstore",
	"serviceVersion": 1,
	"servicePort": 4215,
	"requestTimeout": 30,
	"requestTimeoutRenewal": 5,
	"extKeyRequired": true,
	"injection": true,
	"oauth": true,
	"session": true,
	"schema": {
		"post": {
			"/pet": {
				"_apiInfo": {
					"l": "Add a new pet to the store",
					"group": "pet"
				},
				"mw": __dirname + "/lib/mw/pet_post.js",
				"imfv": {
					"custom": {
						"pet": {
							"required": true,
							"source": [
								"body.pet"
							],
							"validation": {
								"type": "object",
								"required": [
									"breed",
									"name",
									"gender",
									"age",
									"quantity",
									"price",
									"photoUrls"
								],
								"properties": {
									"breed": {
										"type": "string"
									},
									"name": {
										"type": "string",
										"example": "doggie"
									},
									"age": {
										"type": "string"
									},
									"gender": {
										"type": "string"
									},
									"color": {
										"type": "string"
									},
									"quantity": {
										"type": "integer"
									},
									"price": {
										"type": "string"
									},
									"photoUrls": {
										"type": "string"
									},
									"description": {
										"type": "string"
									}
								}
							}
						}
					}
				}
			}
		},
		"get": {
			"/pet/:id": {
				"_apiInfo": {
					"l": "get pet",
					"group": "pet"
				},
				"mw": __dirname + "/lib/mw/pet_id_get.js",
				"imfv": {
					"commonFields": [
						"id"
					]
				}
			},
			"/pets": {
				"_apiInfo": {
					"l": "get all pets",
					"group": "pet",
					"groupMain": true
				},
				"mw": __dirname + "/lib/mw/pets_get.js",
				"imfv": {
					"custom": {},
					"commonFields": []
				}
			}
		},
		"delete": {
			"/pet/:id": {
				"_apiInfo": {
					"l": "delete a pet",
					"group": "pet"
				},
				"mw": __dirname + "/lib/mw/pet_id_delete.js",
				"imfv": {
					"commonFields": [
						"id"
					]
				}
			}
		},
		"put": {
			"/pet/:id": {
				"_apiInfo": {
					"l": "Update an existing pet",
					"group": "pet"
				},
				"mw": __dirname + "/lib/mw/pet_id_put.js",
				"imfv": {
					"custom": {
						"pet": {
							"required": true,
							"source": [
								"body.pet"
							],
							"validation": {
								"type": "object",
								"required": [
									"breed",
									"name",
									"gender",
									"age",
									"quantity",
									"price",
									"photoUrls"
								],
								"properties": {
									"breed": {
										"type": "string"
									},
									"name": {
										"type": "string",
										"example": "doggie"
									},
									"age": {
										"type": "string"
									},
									"gender": {
										"type": "string"
									},
									"color": {
										"type": "string"
									},
									"quantity": {
										"type": "integer"
									},
									"price": {
										"type": "string"
									},
									"photoUrls": {
										"type": "string"
									},
									"description": {
										"type": "string"
									}
								}
							}
						}
					},
					"commonFields": [
						"id"
					]
				}
			}
		},
		"commonFields": {
			"id": {
				"required": true,
				"source": [
					"params.id"
				],
				"validation": {
					"type": "string"
				}
			}
		}
	},
	"errors": {
		"400": "invalid input",
		"401": "invalid id",
		"402": "store is empty",
		"403": "invalid name"
	}
};