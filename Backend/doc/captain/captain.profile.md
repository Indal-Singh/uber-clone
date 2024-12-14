# Register Endpoint Documentation

## Overview

The login endpoint is used to login a existing cpatain. It accepts a JSON payload with the cpatain's details and returns a JSON response with the newly created cpatain's data and a token for authentication.

## Endpoint

* **URL**: `/cpatain/profile`
* **Method**: `GET`
## Authorization

The endpoint requires authorization by either cookie or http header.

* **Cookie**: `token`
* **Http Header**: `Authorization: Bearer <token>`


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