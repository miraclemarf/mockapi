var schema = {
  "type": "object",
  "properties": {
    "products": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": {"fake":"VC281PO PASSANGER"}
          },
          "code": {
            "type": "string",
            "faker": {"fake":"RORO"}
          },
          "price": {
            "type": "string",
            "pattern": "5000000|25000000|8000000"
          },
          "body": {
            "type": "string",
            "faker": "lorem.paragraphs"
          },
          "published": {
            "type": "string",
            "faker": "date.past"
          },
		  "spaces":{
			  "type" : "string",
			  "pattern" : "10000|20000"
		  },
          "image": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/270/120/tankers,vessel?random={{random.number(400)}}"
            }
          }
        },
        "required": ["id", "name", "code", "price", "body", "published", "image", "spaces"]
      }
    },
    "articles": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "title": {
            "type": "string",
            "faker": "name.title"
          },
          "category": {
            "type": "string",
            "pattern": "Traveling|Lifestyle|News|Transportation"
          },
          "body": {
            "type": "string",
            "faker": "lorem.paragraphs"
          },
          "published": {
            "type": "string",
            "faker": "date.past"
          },
          "image": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/270/120/tankers,vessel?random={{random.number(400)}}"
            }
          }
        },
        "required": ["id", "title", "category", "body", "published", "image"]
      }
    },
    "productOnSearch": {
      "type": "array",
      "minItems": 10,
      "maxItems": 10,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "image": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/270/120/tankers,vessel?random={{random.number(400)}}"
            }
          },
          "title": {
            "type": "string",
            "faker": {"fake":"VC281PO PASSANGER"}
          },
          "model": {
            "type": "string",
            "faker": { "fake": "Model Vessel" }
          },
          "location": {
            "type": "string",
            "faker": {
              "fake": "Tanjung priuk, Jakarta Selatan"
            }
          },
          "link": {
            "type": "string",
            "faker": "internet.url"
          },
          "price": {
            "type": "string",
            "pattern": "5000000|25000000|8000000"
          },
          "currentWeight": {
            "type": "string",
			  "pattern" : "10000|20000"
          },
          "totalWeight": {
            "type": "string",
			  "pattern" : "50000|80000"
          },
          "dueDate": {
            "type": "string",
            "faker": { "fake": "2 Jan - 12 Feb 2018" }
          }
        },
        "required": ["id", "image", "title", "model", "location", "link", "price", "currentWeight", "totalWeight", "dueDate"]
      }
    },
    "articlesMore": {
      "type": "array",
      "minItems": 9,
      "maxItems": 9,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "category": {
            "type": "string",
            "pattern": "Traveling|Lifestyle|News|Transportation"
          },
          "title": {
            "type": "string",
            "faker": "name.title"
          },
          "body": {
            "type": "string",
            "faker": "lorem.paragraphs"
          },
          "published": {
            "type": "string",
            "faker": "date.past"
          },
          "image": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/338/238/tankers,vessel?random={{random.number(400)}}"
            }
          }
        },
        "required": ["id", "title", "category", "body", "published", "image"]
      }
    },
    "detailImage": {
      "type": "array",
      "minItems": 4,
      "maxItems": 4,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "image": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/723/406/tankers,vessel?random={{random.number(400)}}"
            }
          }
        },
        "required": ["id", "image"]
      }
    }
  },
  "required": ["products", "articles", "productOnSearch", "articlesMore", "detailImage"]
};
module.exports = schema;