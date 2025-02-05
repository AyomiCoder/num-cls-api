import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { classifyNumber, isPerfect, isPrime } from "./utils/numberUtils";
import { RequestHandler } from 'express';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Number Classification API is running!" });
});

// Define the NumberProperties interface
interface NumberProperties {
  number: number;
  is_prime: boolean;
  is_perfect: boolean;
  properties: string[];
  digit_sum: number;
  fun_fact?: string; // Added fun_fact property
}

// API route for number classification
const classifyNumberHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const numberParam = req.query.number as string;

  // Ensure the number is valid
  if (!numberParam || isNaN(Number(numberParam)) || !Number.isInteger(Number(numberParam))) {
    res.status(400).json({ number: numberParam, error: true });
    return; // Make sure to return here to prevent further execution
  }

  const num = Number(numberParam); // Safely convert to number

  // Get number classification
  const properties = classifyNumber(num);

  const result: NumberProperties = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: properties.properties,
    digit_sum: num.toString().split("").reduce((acc, digit) => acc + Number(digit), 0),
    fun_fact: ""
  };

  // Fetch a fun fact from the Numbers API
  try {
    const factResponse = await axios.get(`http://numbersapi.com/${num}/math`);
    result.fun_fact = factResponse.data;
  } catch (error) {
    result.fun_fact = "Fun fact unavailable.";
  }

  res.json(result); // Return the response here
};

app.get("/api/classify-number", classifyNumberHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
