# Register Endpoint Documentation

## Overview

The login endpoint is used to login a existing user. It accepts a JSON payload with the user's details and returns a JSON response with the newly created user's data and a token for authentication.

## Endpoint

* **URL**: `/user/profile`
* **Method**: `GET`
## Authorization

The endpoint requires authorization by either cookie or http header.

* **Cookie**: `token`
* **Http Header**: `Authorization: Bearer <token>`


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