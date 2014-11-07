var spec = {
  "swagger": "2.0",
  "info": {
    "description": "This is a sample server Petstore server.  You can find out more about Swagger at <a href=\"http://swagger.wordnik.com\">http://swagger.wordnik.com</a> or on irc.freenode.net, #swagger.  For this sample, you can use the api key \"special-key\" to test the authorization filters",
    "version": "1.0.0",
    "title": "Swagger Petstore",
    "termsOfService": "http://helloreverb.com/terms/",
    "contact": {
      "name": "apiteam@wordnik.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "localhost:8002",
  "basePath": "/api",
  "paths": {
    "/pet/findByStatus": {
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "Finds Pets by status",
        "description": "Multiple status values can be provided with comma seperated strings",
        "operationId": "findPetsByStatus",
        "consumes": [ "application/json" ],
        "parameters": [
          {
            "in": "body",
            "name": "status",
            "description": "Status values that need to be considered for filter",
            "required": false,
            "schema": {
              "$ref": "Pet"
            }
          },
          {
            "in": "query",
            "name": "available",
            "description": "Status values that need to be considered for filter",
            "required": false,
            "type": "boolean"
          },
          {
            "in": "query",
            "name": "myStatus",
            "description": "The status",
            "required": false,
            "type": "array",
            "items": {
              "type": "string"
            },
            "enum": [ "alive", "dead" ]
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Pet"
              }
            }
          },
          "400": {
            "description": "Invalid status value"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    }
  },
  "securityDefinitions": {
    "api_key": {
      "name": "fun",
      "type": "apiKey",
      "in": "header"
    }
  },
  "definitions": {
    "Pet": {
      "required": [
        "name",
        "photoUrls"
      ],
      "properties": {
        "id": {
          "description": "the id",
          "type": "integer",
          "format": "int64",
          "xml": {
            "name": "id"
          }
        },
        "child": {
          "$ref": "Pet"
        },
        "name": {
          "type": "string",
          "example": "doggie",
          "xml": {
            "name": "name"
          }
        },
        "photoUrls": {
          "type": "array",
          "xml": {
            "name": "photoUrl",
            "wrapped": true
          },
          "items": {
            "type": "string"
          }
        },
        "tags": {
          "type": "array",
          "xml": {
            "name": "tag",
            "wrapped": true
          },
          "items": {
            "$ref": "Tag"
          }
        },
        "status": {
          "type": "string",
          "xml": {
            "name": "status"
          },
          "description": "pet status in the store"
        }
      },
      "xml": {
        "name": "Pet"
      }
    }
  }
}