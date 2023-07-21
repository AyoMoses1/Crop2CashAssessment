🌽 Farmer API Specification 🚜

# Introduction 🌟
Welcome to the Farmer API 🌽🚜! This API allows you to manage Farmer entities with various attributes like `id`, `first_name`, `last_name`, `phone_number`, `age`, `address`, and `crops`. The API provides a single insertion endpoint to create a new farmer and a single retrieval endpoint to fetch farmer data with filter functionality.

## Base URL 🏠
```
http://localhost:3000
```

# Endpoints 🛣️

## Create Farmer 🌾
Create a new farmer object using a `POST` request to the following endpoint:

```
POST /farmers
```

### Sample Request Payload 📦
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "08123456789",
  "age": 35,
  "address": "123 Main St, City",
  "crops": "maize,beans"
}
```

### Sample Response 🔄
```json
{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "08123456789",
  "age": 35,
  "address": "123 Main St, City",
  "crops": "maize,beans"
}
```

## Get Farmers 🚜
Retrieve farmers' data with optional filtering using a `GET` request to the following endpoint:

```
GET /farmers
```

### Query Parameters 🧾

- `fields`: (optional) Comma-separated list of attributes to return. Example: `fields=first_name,last_name,age`.

- `filter`: (optional) JSON object used for filtering. It can contain one or more attributes to filter by. Example: `filter={"crops": "maize"}`.

### Sample Query Endpoints 🔎

1. Retrieve all farmers with their `id`, `first_name`, and `crops`:
```
GET /farmers?fields=id,first_name,crops
```

2. Retrieve all farmers with the first name "John":
```
GET /farmers?fields=first_name&filter={"first_name": "John"}
```

3. Retrieve farmers with age between 20 and 50:
```
GET /farmers?fields=age&filter={"age": [20, 50]}
```

4. Retrieve farmers who sell "maize":
```
GET /farmers?fields=crops&filter={"crops": "maize"}
```

### Sample Response 🔄

```json
[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "age": 35,
    "crops": "maize,beans"
  },
  {
    "id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "age": 40,
    "crops": "maize,cassava"
  }
]
```

# Error Handling 🚫

- If there is an error creating or retrieving farmers, the API will respond with an error message like:
```json
{
  "error": "Failed to create a farmer"
}
```

- If there is a server error, the API will respond with a status code of 500 and an error message.

# Conclusion 🏁

Congratulations! You now have the Farmer API specifications 🌽🚜 at your fingertips. Use the provided sample query endpoints, payloads, and responses to interact with the API and manage your farmers efficiently. If you have any questions or need further assistance, feel free to reach out! Happy farming! 🌾🌟