# Register Endpoint Documentation

## Overview

The login endpoint is used to login a existing cpatain. It accepts a JSON payload with the cpatain's details and returns a JSON response with the newly created cpatain's data and a token for authentication.

## Endpoint

* **URL**: `/cpatain/login`
* **Method**: `POST`
* **Content-Type**: `application/json`

## Request Body

The request body should contain the following fields:

* **email**: The cpatain's email address (string, required)
* **password**: The cpatain's password (string, required)

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
  "cpatain": {
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