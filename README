# Number Classification API

This API classifies a given number and provides properties like whether it is prime, perfect, armstrong, and more. It also includes the sum of its digits and a fun fact (if available).

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/num-cls-api.git
   cd num-cls-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file:
   ```plaintext
   PORT=3000
   ```

## Run the project locally

To run the project locally, execute:
```bash
npm start
```
This will start the server on the configured `PORT` (default is 3000).

## API Endpoints

### `GET /api/classify-number?number=<number>`

Classifies the provided number and returns its properties.

#### Query Parameters:
- `number` (required): A valid integer.

#### Response Format:
The response will be a JSON object with the following properties:
- `number`: The original number.
- `is_prime`: Boolean indicating whether the number is prime.
- `is_perfect`: Boolean indicating whether the number is perfect.
- `properties`: An array of properties like "even", "odd", "armstrong", etc.
- `digit_sum`: The sum of the digits of the number.
- `fun_fact`: A fun fact about the number (optional; could be empty if not available).

#### Example Request:
```bash
GET http://localhost:3000/api/classify-number?number=28
```

#### Example Response:
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even", "perfect"],
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number."
}
```

### Error Handling

- **400 Bad Request**: If the `number` query parameter is invalid (non-integer or missing), the API will return a `400` status code with an error message.

#### Example of invalid request:
```bash
GET http://localhost:3000/api/classify-number?number=abc
```

#### Example Response:
```json
{
  "error": "Invalid input. Please provide a valid integer."
}
```

- **500 Internal Server Error**: If the Numbers API call fails, the API will return a `500` status code with a default fun fact message.

---

## Example Response Structure

#### Successful Response:
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even", "perfect"],
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number."
}
```

#### Error Response (Invalid Input):
```json
{
  "error": "Invalid input. Please provide a valid integer."
}
```

#### Error Response (Fun Fact Unavailable):
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even", "perfect"],
  "digit_sum": 10,
  "fun_fact": "Fun fact unavailable."
}
```

## Deployment

The API is deployed and accessible at: [Your deployed URL]
