# Register Endpoint Documentation

## Overview

The register endpoint is used to create a new user account. It accepts a JSON payload with the user's details and returns a JSON response with the newly created user's data and a token for authentication.

## Endpoint

* **URL**: `/user/register`
* **Method**: `POST`
* **Content-Type**: `application/json`

## Request Body

The request body should contain the following fields:

* **fullname**: An object with two properties:
	+ **firstname**: The user's first name (string, required)
	+ **lastname**: The user's last name (string, required)
* **email**: The user's email address (string, required)
* **password**: The user's password (string, required)

## Example Request

```json
    {
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
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
  "error": "Invalid email address"
}