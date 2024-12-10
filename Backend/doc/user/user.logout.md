# Logout Endpoint Documentation

## Overview

The logout endpoint is used to log out an authenticated user. This endpoint invalidates the user's current session token by blacklisting it, ensuring the token cannot be used for further authentication.

## Endpoint

* **URL**: `/user/logout`
* **Method**: `GET`

## Authorization

The endpoint requires authorization by either cookie or HTTP header.

* **Cookie**: `token`
* **HTTP Header**: `Authorization: Bearer <token>`

## Example Response

```json
{
  "message": "User Logged Out Successfully."
}
```

## Example Error Response

```json
{
  "message": "Unauthorized"
}
```

When accessing this endpoint, ensure to provide a valid token for the user's session in order to successfully log out.
