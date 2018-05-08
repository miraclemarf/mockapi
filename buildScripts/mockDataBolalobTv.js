var schema = {
  "type": "object",
  "properties": {
    /*---------------------------------------------------*/
    "shows": {
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
          "title": {
            "type": "string",
            "faker": "name.title"
          },
          "thumbnailPortrait": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/190/280/nature?random={{random.number(400)}}"
            }
          }
        },
        "required": ["id", "title", "thumbnailPortrait"]
      }
    },
    /*---------------------------------------------------*/
    "video": {
      "type": "array",
      "minItems": 12,
      "maxItems": 20,
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
          "thumbnail": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/300/180/nature?random={{random.number(400)}}"
            }
          },
          "duration": {
            "type": "string",
            "faker": {
              "fake": "08:19"
            }
          },
          "show": {
            "type": "string",
            "faker": {
              "fake": "null"
            }
          }
        },
        "required": ["id", "title", "thumbnail", "duration", "show"]
      }
    },
    /*---------------------------------------------------*/
    "popular": {
      "type": "array",
      "minItems": 12,
      "maxItems": 20,
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
          "thumbnail": {
            "type": "string",
            "faker": {
              "fake": "https://loremflickr.com/300/180/nature?random={{random.number(400)}}"
            }
          },
          "duration": {
            "type": "string",
            "faker": {
              "fake": "08:19"
            }
          },
          "show": {
            "type": "string",
            "faker": {
              "fake": "Bintang Masa Depan"
            /* } */
          }
        },
        "required": ["id", "title", "thumbnail", "duration", "show"]
      }
	}
    },
    /*---------------------------------------------------*/
    "comments": {
      "type": "array",
      "minItems": 12,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "username": {
            "type": "string",
            "faker": "internet.userName"
          },
          "avatar": {
            "type": "string",
            "faker": "internet.avatar"
          },
          "date": {
            "type": "string",
            "faker": {"fake" : "12/10/2017, 11:25"}
          },
          "text": {
            "type": "string",
            "faker": "lorem.words"
          }
        },
        "required": ["id", "username", "avatar", "date", "text"]
      }
    }
  },
  "required": ["shows", "video", "popular", "comments"]
};
module.exports = schema;