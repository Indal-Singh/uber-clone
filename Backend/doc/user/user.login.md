# Register Endpoint Documentation

## Overview

The login endpoint is used to login a existing user. It accepts a JSON payload with the user's details and returns a JSON response with the newly created user's data and a token for authentication.

## Endpoint

* **URL**: `/user/login`
* **Method**: `POST`
* **Content-Type**: `application/json`

## Request Body

The request body should contain the following fields:

* **email**: The user's email address (string, required)
* **password**: The user's password (string, required)

## Example Request

```json
    {
    "email": "johndoe@example.com",
    "password": "password123"
    }
```

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIjoiMjMwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "_id": "1234567890",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

## Example Error Response

```json
{
  "error": "Invalid Email & Password"
}