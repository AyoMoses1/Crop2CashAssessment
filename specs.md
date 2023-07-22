<h1>🌽 Farmer API Specification 🚜</h1>

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
  "first_name": "Ayo",
  "last_name": "Moses",
  "phone_number": "08123456789",
  "age": 27,
  "address": "Aduloju, Ibadan, Oyo State",
  "crops": "maize,beans"
}
```

### Sample Response 🔄

```json
{
    "status": "success",
    "message": "Farmer with id: 12 has been created successfully!!!"
}
```

## Get Farmers 🚜

Retrieve farmers' data with optional filtering using a `GET` request to the following endpoint:

```
GET /farmers
```

### Query Parameters 🧾

- `fields`: (optional) Comma-separated list of attributes to return. Example: fields=first_name,last_name,age.

- `first_name`: (optional) Filter farmers by their first name. Example: first_name=Ayo.

- `min_age and max_age`: (optional) Filter farmers by age range. Example: min_age=20&max_age=50.



### Sample Query Endpoints 🔎

1. Retrieve only the `ids` and `ages` of farmers:

```
GET /farmers?fields=id,age
```

### Sample Response 🔄

```json
[
  {
    "id": 1,
    "age": 35
  },
  {
    "id": 2,
    "age": 27
  },
  {
    "id": 3,
    "age": 24
  },
  {
    "id": 4,
    "age": 25
  }
]
```

2. Retrieve all farmers with the first name "Jimoh":

```
GET /farmers?fields=first_name&first_name=Jimoh
```

### Sample Response 🔄

```json
[
  {
    "first_name": "Jimoh"
  },
  {
    "first_name": "Jimoh"
  },
  {
    "first_name": "Jimoh"
  }
]
```

3. Retrieve farmers with age between 20 and 50:

```

GET /farmers?fields=first_name,age&first_name=Jimoh&min_age=20&max_age=50

```

### Sample Response 🔄

```json
[
  {
    "first_name": "Jimoh",
    "age": 27
  },
  {
    "first_name": "Jimoh",
    "age": 35
  }
]
```

4. Retrieve ages of farmers that sell maize:

```

GET /farmers?fields=crops,age&crops=maize
```

### Sample Response 🔄

```json
[
  {
    "crops": "maize, rice",
    "age": 35
  },
  {
    "crops": "maize, rice",
    "age": 27
  },
  {
    "crops": "Beans, Garri, Ewedu, rice, maize",
    "age": 35
  },
  {
    "crops": "cassava, rice, maize",
    "age": 35
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
