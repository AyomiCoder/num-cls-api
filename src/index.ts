import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { classifyNumber, isPerfect, isPrime } from "./utils/numberUtils";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Number Classification API is running!" });
});

// // Define the NumberProperties interface
// interface NumberProperties {
//   number: number;
//   is_prime: boolean;
//   is_perfect: boolean;
//   properties: string[];
//   digit_sum: number;
//   fun_fact?: string; // Added fun_fact property
// }

// // API route for number classification
// app.get("/api/classify-number", async (req: Request, res: Response) => {
//   const numberParam = req.query.number as string; // Explicitly treat as a string

//   // Ensure the number is valid
//   if (!numberParam || isNaN(Number(numberParam)) || !Number.isInteger(Number(numberParam))) {
//     return res.status(400).json({ number: numberParam, error: true });
//   }

//   const num = Number(numberParam); // Safely convert to number

//   // Get number classification
//   const classification = classifyNumber(num);

//   const result: NumberProperties = {
//     number: num,
//     is_prime: isPrime(num),
//     is_perfect: isPerfect(num),
//     properties: [], // Add logic to populate properties
//     digit_sum: num.toString().split("").reduce((acc, digit) => acc + Number(digit), 0),
//     fun_fact: "" // Initialize fun_fact
//   };

//   // Fetch a fun fact from the Numbers API
//   try {
//     const factResponse = await axios.get(`http://numbersapi.com/${num}/math`);
//     result.fun_fact = factResponse.data;
//   } catch (error) {
//     result.fun_fact = "Fun fact unavailable.";
//   }

//   return res.json(result);
// });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
