# Register Endpoint Documentation

## Overview

The register endpoint is used to create a new captain account. It accepts a JSON payload with the captain's details and returns a JSON response with the newly created captain's data and a token for authentication.

## Endpoint

* **URL**: `/captain/register`
* **Method**: `POST`
* **Content-Type**: `application/json`

## Request Body

The request body should contain the following fields:

* **fullname**: An object with two properties:
	+ **firstname**: The captain's first name (string, required)
	+ **lastname**: The captain's last name (string, required)
* **email**: The captain's email address (string, required)
* **password**: The captain's password (string, required)
* **veicle**: An object with two properties:
    + **color**: The color of the vehicle (string, required)
    + **plate**: The plate number of the vehicle (string, required)
    + **capacity**: The capacity of the vehicle (number, required)
    + **vehicleType**: The type of the vehicle (string, required)

## Example Request

```json
    {
    "fullname":{
        "firstname":"Indal",
        "lastname":"Singh"
    },
    "email":"testcaptain@email.com",
    "password":"test1234",
    "vehicle":{
        "color":"white",
        "plate":"JH05CY1520",
        "capacity":3,
        "vehicleType":"car"
    }
}
```

## Example Response

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWFlNTIyYzFmNjg3ZmU3YTk1MDEyYyIsImVtYWlsIjoidGVzdGNhcHRhaW5AZW1haWwuY29tIiwiaWF0IjoxNzM0MDEwMTQ2LCJleHAiOjE3MzQwOTY1NDZ9.aAasxV7Eou2S6C9F8heaY0IrfaO9YCN5vD9qcDkY8BY",
    "captain": {
        "fullname": {
            "firstname": "Indal",
            "lastname": "Singh"
        },
        "email": "testcaptain@email.com",
        "isActive": "inactive",
        "vehicle": {
            "color": "white",
            "plate": "JH05CY1520",
            "capacity": 3,
            "vehicleType": "car"
        },
        "_id": "675ae522c1f687fe7a95012c",
        "__v": 0
    }
}
```

## Example Error Response

```json
{
  "error": "Invalid email address"
}