define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Auth",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User <code>access_token</code> to be passed to other requests.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Current user's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only or invalid credentials.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/reminders",
    "title": "Create reminder",
    "name": "CreateReminder",
    "group": "Reminder",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_dose",
            "description": "<p>Reminder's id_dose.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_dose_type",
            "description": "<p>Reminder's id_dose_type.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start_date",
            "description": "<p>Reminder's start_date.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "next_date",
            "description": "<p>Reminder's next_date.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dismissed",
            "description": "<p>Reminder's dismissed.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reminder",
            "description": "<p>Reminder's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Reminder not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/reminder/index.js",
    "groupTitle": "Reminder"
  },
  {
    "type": "delete",
    "url": "/reminders/:id",
    "title": "Delete reminder",
    "name": "DeleteReminder",
    "group": "Reminder",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Reminder not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/reminder/index.js",
    "groupTitle": "Reminder"
  },
  {
    "type": "get",
    "url": "/reminders/:id",
    "title": "Retrieve reminder",
    "name": "RetrieveReminder",
    "group": "Reminder",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reminder",
            "description": "<p>Reminder's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Reminder not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/reminder/index.js",
    "groupTitle": "Reminder"
  },
  {
    "type": "get",
    "url": "/reminders",
    "title": "Retrieve reminders",
    "name": "RetrieveReminders",
    "group": "Reminder",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of reminders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of reminders.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/reminder/index.js",
    "groupTitle": "Reminder"
  },
  {
    "type": "put",
    "url": "/reminders/:id",
    "title": "Update reminder",
    "name": "UpdateReminder",
    "group": "Reminder",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_dose",
            "description": "<p>Reminder's id_dose.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_dose_type",
            "description": "<p>Reminder's id_dose_type.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start_date",
            "description": "<p>Reminder's start_date.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "next_date",
            "description": "<p>Reminder's next_date.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dismissed",
            "description": "<p>Reminder's dismissed.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reminder",
            "description": "<p>Reminder's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Reminder not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/reminder/index.js",
    "groupTitle": "Reminder"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>User's picture.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>User's role.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 201": [
          {
            "group": "Sucess 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Email already registered.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Retrieve current user",
    "name": "RetrieveCurrentUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Retrieve user",
    "name": "RetrieveUser",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Retrieve users",
    "name": "RetrieveUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id/password",
    "title": "Update password",
    "name": "UpdatePassword",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update user",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>User's picture.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  }
] });
